// 뉴스레터 편집기 — 2026년 10월호부터만 불러오기 (사용자 지시 2026-11-22)
import { describe, it, expect, afterAll } from 'vitest'
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, rmSync } from 'fs'
import { join } from 'path'
import { tmpdir } from 'os'
import { isEditablePeriod } from '../src/shared/editorPeriodGate.js'

const TMP = mkdtempSync(join(tmpdir(), 'snap-period-'))
process.env.DATA_DIR = TMP
// period 도입 이전 인덱스 (name/ts 만) — 백필 대상
const dir = join(TMP, 'snapshots', 'newsletter')
mkdirSync(dir, { recursive: true })
writeFileSync(join(dir, '_index.json'), JSON.stringify([{ name: '10월호', ts: 2000 }, { name: '9월호', ts: 1000 }]))
writeFileSync(join(dir, '2000.json'), JSON.stringify({ name: '10월호', ts: 2000, data: { metaKo: { period: '2026년 10월' } } }))
writeFileSync(join(dir, '1000.json'), JSON.stringify({ name: '9월호', ts: 1000, data: { metaKo: { period: '2026년 9월' } } }))
const storage = await import('../lib/storage.js')
afterAll(() => { try { rmSync(TMP, { recursive: true, force: true }) } catch {} })

describe('isEditablePeriod', () => {
  it('2026년 10월(데이터월) 이상만 true, 표기 형식 무관', () => {
    expect(isEditablePeriod('2026년 10월')).toBe(true)
    expect(isEditablePeriod('Nov 2026')).toBe(true)
    expect(isEditablePeriod('2027-01')).toBe(true)
    expect(isEditablePeriod('2026년 9월')).toBe(false)
    expect(isEditablePeriod('Sep 2026')).toBe(false)
  })
  it('기간을 알 수 없으면 false (불러오기 제외)', () => {
    expect(isEditablePeriod('')).toBe(false)
    expect(isEditablePeriod(undefined)).toBe(false)
  })
})

describe('저장본 인덱스 period', () => {
  it('period 없는 옛 인덱스는 1회 백필 후 저장', () => {
    const idx = storage.listModeSnapshots('newsletter')
    expect(idx.map(m => m.period)).toEqual(['2026년 10월', '2026년 9월'])
    expect(JSON.parse(readFileSync(join(dir, '_index.json'), 'utf8'))[1].period).toBe('2026년 9월')
    expect(idx.filter(m => isEditablePeriod(m.period)).map(m => m.name)).toEqual(['10월호'])
  })
  it('신규 저장은 metaKo.period 를 인덱스에 기록, 없으면 null', () => {
    storage.saveModeSnapshot('newsletter', { name: '11월호', ts: 3000, data: { metaKo: { period: 'Nov 2026' } } })
    storage.saveModeSnapshot('newsletter', { name: '무제', ts: 4000, data: {} })
    const idx = storage.listModeSnapshots('newsletter')
    expect(idx.find(m => m.ts === 3000).period).toBe('Nov 2026')
    expect(idx.find(m => m.ts === 4000).period).toBeNull()
    expect(idx[0].data).toBeUndefined()   // 인덱스는 여전히 light
  })
})
