import { describe, it, expect } from 'vitest'
import { nextKstMidnight, prevKstMidnight, missedRun } from '../lib/publish-scheduler.js'

// KST 00:00 = UTC 15:00 (KST 는 서머타임 없는 고정 +9)
const H = 60 * 60 * 1000

describe('publish-scheduler — KST 자정 경계 계산', () => {
  it('KST 23:59 → 1분 뒤 경계 (UTC 15:00)', () => {
    const now = Date.UTC(2026, 7, 30, 14, 59, 0) // = KST 8/30 23:59
    expect(new Date(nextKstMidnight(now)).toISOString()).toBe('2026-08-30T15:00:00.000Z')
  })

  it('KST 00:01 → 다음날 경계', () => {
    const now = Date.UTC(2026, 7, 30, 15, 1, 0) // = KST 8/31 00:01
    expect(new Date(nextKstMidnight(now)).toISOString()).toBe('2026-08-31T15:00:00.000Z')
  })

  it('정확히 경계 시각이면 다음날 경계 반환 (즉시 재발화 방지)', () => {
    const boundary = Date.UTC(2026, 7, 30, 15, 0, 0)
    expect(nextKstMidnight(boundary)).toBe(boundary + 24 * H)
  })

  it('KST 정오 → 당일 자정(UTC 15:00) 경계', () => {
    const now = Date.UTC(2026, 7, 30, 3, 0, 0) // = KST 8/30 12:00
    expect(new Date(nextKstMidnight(now)).toISOString()).toBe('2026-08-30T15:00:00.000Z')
  })

  it('연말·연초 경계 교차 (12/31 KST 23:00 → 1/1 00:00 KST)', () => {
    const now = Date.UTC(2026, 11, 31, 14, 0, 0) // = KST 12/31 23:00
    expect(new Date(nextKstMidnight(now)).toISOString()).toBe('2026-12-31T15:00:00.000Z')
  })

  it('prev 는 next - 24h', () => {
    const now = Date.UTC(2026, 7, 30, 3, 0, 0)
    expect(prevKstMidnight(now)).toBe(nextKstMidnight(now) - 24 * H)
  })
})

describe('publish-scheduler — 부팅 catch-up 판정', () => {
  const now = Date.UTC(2026, 7, 30, 3, 0, 0) // KST 8/30 12:00 (직전 경계 = 8/29 15:00 UTC)

  it('실행 기록 없음 → 놓침', () => {
    expect(missedRun(null, now)).toBe(true)
    expect(missedRun(undefined, now)).toBe(true)
  })

  it('직전 경계 이후 실행 → 놓치지 않음', () => {
    const lastRun = Date.UTC(2026, 7, 29, 15, 30, 0) // 경계 30분 뒤
    expect(missedRun(lastRun, now)).toBe(false)
  })

  it('직전 경계 이전 실행 → 놓침 (재배포로 자정 건너뜀)', () => {
    const lastRun = Date.UTC(2026, 7, 28, 20, 0, 0)
    expect(missedRun(lastRun, now)).toBe(true)
  })
})
