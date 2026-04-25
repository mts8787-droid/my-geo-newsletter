import { describe, it, expect } from 'vitest'
import { pct, pctOrNull } from './excelUtils.js'

describe('pct', () => {
  it('퍼센트 문자열 → 숫자', () => {
    expect(pct('75.3%')).toBe(75.3)
    expect(pct('100%')).toBe(100)
    expect(pct('0%')).toBe(0)
  })

  it('% 없이 0~1 소수 → ×100', () => {
    expect(pct('0.753')).toBe(75.3)
    expect(pct('0.5')).toBe(50)
  })

  it('% 없이 1 초과 → 그대로', () => {
    expect(pct('38.2')).toBe(38.2)
    expect(pct('100')).toBe(100)
  })

  it('콤마 포함 처리', () => {
    expect(pct('1,234.5%')).toBe(1234.5)
  })

  it('빈 값/잘못된 입력 → 0', () => {
    expect(pct('')).toBe(0)
    expect(pct(null)).toBe(0)
    expect(pct(undefined)).toBe(0)
    expect(pct('abc')).toBe(0)
  })
})

describe('pctOrNull', () => {
  it('정상 값은 pct와 동일', () => {
    expect(pctOrNull('75.3%')).toBe(75.3)
    expect(pctOrNull('0.5')).toBe(50)
    expect(pctOrNull(0)).toBe(0)
  })

  it('빈/null/undefined → null (빈 트렌드 셀 보존용)', () => {
    expect(pctOrNull(null)).toBe(null)
    expect(pctOrNull(undefined)).toBe(null)
    expect(pctOrNull('')).toBe(null)
    expect(pctOrNull('   ')).toBe(null)
  })

  it('실제 0% 입력은 0으로 보존 (null과 구분)', () => {
    expect(pctOrNull('0%')).toBe(0)
    expect(pctOrNull('0')).toBe(0)
  })
})
