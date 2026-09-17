// 발행월 → 표기월(데이터월)·Vol·데이터 기준 자동 연동 (2026-09-18 사용자 확정 규칙 — 8/27 대체).
// 규칙: 입력 = 발행월, 표기 = 전월(데이터월), Vol 은 데이터월 Jul 2026 = Vol.05 기준 매월 +1.
import { describe, it, expect } from 'vitest'
import { parsePeriod, volFor, dataPeriodOf, dateLineFor, derivedMetaFor, metaForPubMonth, pubPeriodOf } from './reportPeriod.js'

describe('parsePeriod — 다양한 표기', () => {
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

describe('dataPeriodOf — 발행월 → 표기월(전월)', () => {
  it.each([
    ['Sep 2026', 'Aug 2026'],
    ['2026년 9월', 'Aug 2026'],
    ['Jan 2027', 'Dec 2026'],
  ])('%s → %s', (pub, data) => expect(dataPeriodOf(pub)).toBe(data))
})

describe('volFor — 데이터월 Jul 2026 = Vol.05 기준 매월 +1', () => {
  it.each([
    ['Jul 2026', 'Vol.05'],   // 7월호 헤더 실측 기준점
    ['Aug 2026', 'Vol.06'],
    ['Sep 2026', 'Vol.07'],
    ['2026년 8월', 'Vol.06'],
    ['Dec 2026', 'Vol.10'],
    ['Mar 2026', 'Vol.01'],
  ])('%s → %s', (data, vol) => expect(volFor(data)).toBe(vol))
  it('기준 이전(Vol<1) → null', () => expect(volFor('Jan 2026')).toBeNull())
})

describe('dateLineFor — 데이터월 그대로 표기', () => {
  it('EN: Aug 2026 → As of Aug 2026', () => expect(dateLineFor('Aug 2026', 'en')).toBe('As of Aug 2026'))
  it('KO: Aug 2026 → 2026년 8월 기준', () => expect(dateLineFor('Aug 2026', 'ko')).toBe('2026년 8월 기준'))
})

describe('metaForPubMonth — 발행월 하나로 발행정보 일괄', () => {
  it('Sep 2026 발행 → Aug 표기 + Vol.06 + As of Aug', () => {
    expect(metaForPubMonth('Sep 2026')).toEqual({ period: 'Aug 2026', reportNo: 'Vol.06', dateLine: 'As of Aug 2026' })
  })
  it('파싱 불가 → null (기존 값 보존용)', () => expect(metaForPubMonth('없음')).toBeNull())
})

describe('pubPeriodOf — 표기월 → 발행월 역변환 (입력창 표시)', () => {
  it('Aug 2026 → Sep 2026', () => expect(pubPeriodOf('Aug 2026')).toBe('Sep 2026'))
  it('Dec 2026 → Jan 2027', () => expect(pubPeriodOf('Dec 2026')).toBe('Jan 2027'))
})

describe('derivedMetaFor — 못 구하면 키 생략', () => {
  it('유효 데이터월', () => expect(derivedMetaFor('Aug 2026')).toEqual({ reportNo: 'Vol.06', dateLine: 'As of Aug 2026' }))
  it('무효 입력 → 빈 객체', () => expect(derivedMetaFor('x')).toEqual({}))
})
