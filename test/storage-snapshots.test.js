// 파일 분리 저장소 (per-snapshot file + light 인덱스) 실동작 검증 — 임시 DATA_DIR 사용.
// 회귀 fix: 단일 JSON 통파싱 OOM → 목록=인덱스만 / 단건=개별 파일. 레거시 자동 마이그레이션 포함.
import { describe, it, expect, beforeAll, afterAll } from 'vitest'
import { mkdtempSync, writeFileSync, existsSync, rmSync, readFileSync } from 'fs'
import { join } from 'path'
import { tmpdir } from 'os'

const TMP = mkdtempSync(join(tmpdir(), 'snap-store-'))
process.env.DATA_DIR = TMP
// 레거시 단일 파일 — import 전에 미리 준비 (마이그레이션 검증)
writeFileSync(join(TMP, 'newsletter-snapshots.json'), JSON.stringify([
  { name: '6월호', ts: 2000, data: { v: 6 } },
  { name: '5월호', ts: 1000, data: { v: 5 }, updatedAt: 1500 },
]))

const storage = await import('../lib/storage.js')

afterAll(() => { try { rmSync(TMP, { recursive: true, force: true }) } catch {} })

describe('per-file snapshot storage', () => {
  it('레거시 단일 파일 → 자동 분리 마이그레이션 (인덱스 light + 개별 파일 + 원본 .migrated 보존)', () => {
    const idx = storage.listModeSnapshots('newsletter')
    expect(idx.map(m => m.ts)).toEqual([2000, 1000])          // ts 내림차순
    expect(idx[0].data).toBeUndefined()                        // 인덱스는 light
    expect(idx[1].updatedAt).toBe(1500)
    expect(existsSync(join(TMP, 'snapshots', 'newsletter', '2000.json'))).toBe(true)
    expect(existsSync(join(TMP, 'newsletter-snapshots.json.migrated'))).toBe(true)
    expect(existsSync(join(TMP, 'newsletter-snapshots.json'))).toBe(false)
  })

  it('단건 읽기 — data 포함, 미존재 null', () => {
    expect(storage.readModeSnapshot('newsletter', 2000).data.v).toBe(6)
    expect(storage.readModeSnapshot('newsletter', 9999)).toBeNull()
  })

  it('saveModeSnapshot — 추가 + cap 초과 시 오래된 파일 제거', () => {
    storage.saveModeSnapshot('newsletter', { name: '7월호', ts: 3000, data: { v: 7 } }, 2)
    const idx = storage.listModeSnapshots('newsletter')
    expect(idx.map(m => m.ts)).toEqual([3000, 2000])           // cap 2 → ts 1000 탈락
    expect(existsSync(join(TMP, 'snapshots', 'newsletter', '1000.json'))).toBe(false)
    expect(storage.readModeSnapshot('newsletter', 3000).data.v).toBe(7)
  })

  it('deleteModeSnapshot + pushModeBackup — 삭제·백업 왕복', () => {
    const { removed, index } = storage.deleteModeSnapshot('newsletter', 2000)
    expect(removed.data.v).toBe(6)
    expect(index.map(m => m.ts)).toEqual([3000])
    storage.pushModeBackup('newsletter', { ...removed, deletedAt: 99 })
    expect(storage.listModeBackups('newsletter')[0].deletedAt).toBe(99)
    expect(storage.readModeBackup('newsletter', 2000).data.v).toBe(6)
  })

  it('iterJsonArrayItems — 잘린(truncated) 파일에서 온전한 항목까지 복구', () => {
    const f = join(TMP, 'trunc.json')
    const fullJson = JSON.stringify([
      { name: '살아있는1', ts: 1, data: { v: 1 } },
      { name: '살아있는2', ts: 2, data: { v: 2 } },
      { name: '잘린항목', ts: 3, data: { v: 3 } },
    ], null, 2)
    writeFileSync(f, fullJson.slice(0, fullJson.length - 30))  // OOM-kill 중 잘림 모사
    const items = [...storage.iterJsonArrayItems(f)]
    expect(items.map(s => s.ts)).toEqual([1, 2])               // 온전한 2건 회수
  })

  it('iterJsonArrayItems — 한글 이름이 청크 경계에 걸려도 안전 (작은 chunk 강제)', () => {
    const f = join(TMP, 'kr.json')
    writeFileSync(f, JSON.stringify([
      { name: '6월호 — 한글제목입니다', ts: 1, data: { 메모: '가나다라마바사' } },
      { name: '7월호', ts: 2, data: {} },
    ]))
    const items = [...storage.iterJsonArrayItems(f, 7)]        // 7바이트 청크 → 멀티바이트 분절 강제
    expect(items).toHaveLength(2)
    expect(items[0].name).toBe('6월호 — 한글제목입니다')
    expect(items[0].data['메모']).toBe('가나다라마바사')
  })

  it('self-heal — 빈 인덱스 + .migrated 잔존 시 스트리밍 복구', () => {
    // dashboard 모드로 시뮬레이션: .migrated 에 데이터, 인덱스는 빈 상태
    const dir = join(TMP, 'snapshots', 'dashboard')
    const { mkdirSync } = require('fs')
    mkdirSync(dir, { recursive: true })
    writeFileSync(join(dir, '_index.json'), '[]')
    writeFileSync(join(TMP, 'dashboard-snapshots.json.migrated'), JSON.stringify([
      { name: '복구대상', ts: 777, data: { saved: true } },
    ]))
    const idx = storage.listModeSnapshots('dashboard')
    expect(idx.map(m => m.ts)).toEqual([777])
    expect(storage.readModeSnapshot('dashboard', 777).data.saved).toBe(true)
  })

  it('whole-list 호환 (데몬) — readModeSnapshots 전체 data / writeModeSnapshots 전체 교체', () => {
    const all = storage.readModeSnapshots('newsletter')
    expect(all).toHaveLength(1)
    expect(all[0].data.v).toBe(7)
    storage.writeModeSnapshots('newsletter', [
      { name: 'a', ts: 10, data: { x: 1 } },
      { name: 'b', ts: 20, data: { x: 2 } },
    ])
    expect(storage.listModeSnapshots('newsletter').map(m => m.ts)).toEqual([20, 10])
    expect(existsSync(join(TMP, 'snapshots', 'newsletter', '3000.json'))).toBe(false)  // 교체로 제거
    // 인덱스 파일이 실제로 light 인지 (data 미포함)
    const raw = JSON.parse(readFileSync(join(TMP, 'snapshots', 'newsletter', '_index.json'), 'utf-8'))
    expect(raw[0].data).toBeUndefined()
  })
})
