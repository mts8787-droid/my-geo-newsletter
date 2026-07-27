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
