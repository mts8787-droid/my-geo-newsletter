// 발행월 → Vol 번호 · 데이터 기준 자동 연동 (2026-08-27 사용자 확정 규칙).
import { describe, it, expect } from 'vitest'
import { parsePeriod, volFor, dataMonthFor, dateLineFor, derivedMetaFor } from './reportPeriod.js'

describe('parsePeriod — 다양한 발행월 표기', () => {
  it.each([
    ['Aug 2026', 2026, 8],
    ['2026년 8월', 2026, 8],
    ['2026-08', 2026, 8],
    ['26년 8월', 2026, 8],
    ['August 2026', 2026, 8],
  ])('%s → %i-%i', (input, y, m) => {
    expect(parsePeriod(input)).toEqual({ year: y, month: m })
  })

  it.each([[''], ['입력 없음'], [null], [undefined]])('파싱 불가(%s) → null', (input) => {
    expect(parsePeriod(input)).toBeNull()
  })
})

describe('volFor — Feb 2026 = Vol.03 기준 월 +1', () => {
  it.each([
    ['Feb 2026', 'Vol.03'],
    ['Jul 2026', 'Vol.08'],
    ['Aug 2026', 'Vol.09'],
    ['2026년 8월', 'Vol.09'],
    ['Jan 2027', 'Vol.14'],
    ['Dec 2025', 'Vol.01'],
  ])('%s → %s', (period, vol) => {
    expect(volFor(period)).toBe(vol)
  })

  it('기준점보다 너무 이르면(Vol < 1) null — 잘못된 번호를 만들지 않는다', () => {
    expect(volFor('Jan 2025')).toBeNull()
  })

  it('발행월을 못 읽으면 null', () => {
    expect(volFor('미정')).toBeNull()
  })
})

describe('dataMonthFor / dateLineFor — 데이터 기준은 전월', () => {
  it('8월호는 7월 데이터', () => {
    expect(dataMonthFor('Aug 2026')).toEqual({ year: 2026, month: 7 })
    expect(dateLineFor('Aug 2026', 'en')).toBe('As of Jul 2026')
    expect(dateLineFor('Aug 2026', 'ko')).toBe('2026년 7월 기준')
  })

  it('1월호는 전년 12월로 넘어간다', () => {
    expect(dataMonthFor('Jan 2027')).toEqual({ year: 2026, month: 12 })
    expect(dateLineFor('Jan 2027', 'en')).toBe('As of Dec 2026')
  })
})

describe('derivedMetaFor — 발행월 변경 시 함께 갱신되는 필드', () => {
  it('reportNo + dateLine 을 함께 반환', () => {
    expect(derivedMetaFor('Aug 2026')).toEqual({ reportNo: 'Vol.09', dateLine: 'As of Jul 2026' })
  })

  it('발행월을 못 읽으면 빈 객체 — 기존 값을 덮어쓰지 않는다', () => {
    expect(derivedMetaFor('미정')).toEqual({})
  })
})
