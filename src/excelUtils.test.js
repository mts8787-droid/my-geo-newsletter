import { describe, it, expect } from 'vitest'
import { pct, pctOrNull, canonicalCountry } from './excelUtils.js'

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

describe('canonicalCountry — 시트 표기 → 표준 10개 코드 정규화', () => {
  it.each([
    ['UK', 'UK'],
    ['GB', 'UK'],
    ['United Kingdom', 'UK'],
    ['Great Britain', 'UK'],
    ['Britain', 'UK'],
    ['England', 'UK'],
    ['USA', 'US'],
    ['United States', 'US'],
    ['America', 'US'],
    ['Brazil', 'BR'],
    ['BRA', 'BR'],
    ['Brasil', 'BR'],
    ['Mexico', 'MX'],
    ['MEX', 'MX'],
    ['Germany', 'DE'],
    ['Deutschland', 'DE'],
    ['Spain', 'ES'],
    ['Vietnam', 'VN'],
    ['Viet Nam', 'VN'],
    ['Australia', 'AU'],
    ['India', 'IN'],
  ])('%s → %s', (input, expected) => {
    expect(canonicalCountry(input)).toBe(expected)
  })

  it('이미 정규화된 코드는 그대로', () => {
    expect(canonicalCountry('US')).toBe('US')
    expect(canonicalCountry('DE')).toBe('DE')
  })

  it('소문자/공백/괄호 처리', () => {
    expect(canonicalCountry('  uk  ')).toBe('UK')
    expect(canonicalCountry('(GB)')).toBe('UK')
    expect(canonicalCountry('U.K.')).toBe('UK')
  })

  it('알려지지 않은 국가 → uppercase fallback', () => {
    expect(canonicalCountry('Atlantis')).toBe('ATLANTIS')
    expect(canonicalCountry('xx')).toBe('XX')
  })

  it('null/빈 문자열 → 빈 문자열', () => {
    expect(canonicalCountry(null)).toBe('')
    expect(canonicalCountry('')).toBe('')
  })
})
