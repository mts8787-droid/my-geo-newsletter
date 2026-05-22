import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { pct, pctOrNull, canonicalCountry, parseSheetRows, SHEET_NAMES } from './excelUtils.js'
import { PROD_ID_TO_UL_CODE, UL_CODE_NORMALIZE, assertCategoryMapInvariant } from './categoryMap.js'

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

// ─── categoryMap invariant ─────────────────────────────────────────────────
describe('categoryMap — single source invariant', () => {
  it('UL_CODE_NORMALIZE 의 모든 결과값이 PROD_ID_TO_UL_CODE 와 일치', () => {
    expect(assertCategoryMapInvariant()).toBe(true)
  })

  it('STYLER 가 PROD_ID_TO_UL_CODE 에 포함 (회귀 방지: 누락 시 _isUnlaunched 매칭 실패)', () => {
    expect(PROD_ID_TO_UL_CODE.styler).toBe('STYLER')
    expect(UL_CODE_NORMALIZE.STYLER).toBe('STYLER')
  })
})

// ─── parseUnlaunched (via parseSheetRows 라우터) ────────────────────────────
// DEFAULT_UNLAUNCHED = { 'BR|AV': true, 'VN|AV': true, 'IN|AV': true } (시트 무관 비즈니스 fact)
describe('parseUnlaunched — ERROR CATCHING 5단계 동작', () => {
  const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
  const logSpy = vi.spyOn(console, 'log').mockImplementation(() => {})
  const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
  beforeEach(() => { warnSpy.mockClear(); logSpy.mockClear(); errorSpy.mockClear() })
  afterEach(() => {})

  it('[1] DETECT: rows=null → fatal 로그 + 빈 결과', () => {
    const result = parseSheetRows(SHEET_NAMES.unlaunched, null)
    // 라우터 가드가 fatal → {} 반환. 하위 parseUnlaunched 진입 안 함.
    expect(result).toEqual({})
    expect(errorSpy).toHaveBeenCalled()
  })

  it('[1] DETECT: rows=[] → fatal 로그 + 빈 결과 (라우터에서 차단)', () => {
    const result = parseSheetRows(SHEET_NAMES.unlaunched, [])
    expect(result).toEqual({})
    expect(errorSpy).toHaveBeenCalled()
  })

  it('헤더 없는 시트 → warn + DEFAULT_UNLAUNCHED 만 반환', () => {
    const rows = [['x', 'y', 'z'], ['1', '2', '3']]
    const result = parseSheetRows(SHEET_NAMES.unlaunched, rows)
    expect(result.unlaunchedMap).toEqual({ 'BR|AV': true, 'VN|AV': true, 'IN|AV': true })
    expect(warnSpy).toHaveBeenCalled()
  })

  it('필수 컬럼 누락 (status 없음) → warn + DEFAULT 만', () => {
    const rows = [
      ['country', 'category', 'something'],  // launched/status 컬럼 없음
      ['US', 'TV', 'foo'],
    ]
    const result = parseSheetRows(SHEET_NAMES.unlaunched, rows)
    // 헤더는 status 동의어가 'something' 으로 인식 안 됨 → 헤더 미발견
    expect(result.unlaunchedMap['BR|AV']).toBe(true)
  })

  it('정상 시트: unlaunched 행 매칭 + DEFAULT 병합', () => {
    const rows = [
      ['country', 'category', 'launched'],
      ['MX', 'AIRCARE', 'unlaunched'],
      ['US', 'TV', 'launched'],         // launched 는 unlaunched 아님 → map 에 안 들어감
      ['VN', 'WASHER', 'no'],           // no 도 unlaunched 표현
    ]
    const result = parseSheetRows(SHEET_NAMES.unlaunched, rows)
    expect(result.unlaunchedMap['MX|AIRCARE']).toBe(true)
    expect(result.unlaunchedMap['VN|WM']).toBe(true)   // WASHER → WM 정규화
    expect(result.unlaunchedMap['US|TV']).toBeUndefined()
    // DEFAULT 보존
    expect(result.unlaunchedMap['BR|AV']).toBe(true)
  })

  it('STYLER 카테고리 정규화 (회귀 방지: UL_PROD_MAP STYLER 누락 fix)', () => {
    const rows = [
      ['country', 'category', 'launched'],
      ['MX', 'STYLER', 'unlaunched'],
      ['BR', 'Styler', 'unlaunched'],      // 다양한 표기
    ]
    const result = parseSheetRows(SHEET_NAMES.unlaunched, rows)
    expect(result.unlaunchedMap['MX|STYLER']).toBe(true)
    expect(result.unlaunchedMap['BR|STYLER']).toBe(true)
  })

  it('[3] CAPTURE: 정규화 실패 행 (country 빈셀) → warn + 정상 행은 보존', () => {
    const rows = [
      ['country', 'category', 'launched'],
      ['',         'TV',       'unlaunched'],   // country 빈 → skip + warn
      ['MX',       'AIRCARE',  'unlaunched'],   // 정상
    ]
    const result = parseSheetRows(SHEET_NAMES.unlaunched, rows)
    expect(result.unlaunchedMap['MX|AIRCARE']).toBe(true)
    // 'row skipped' warn 호출 검증
    const warnedSkip = warnSpy.mock.calls.some(call =>
      String(call[0]).includes('row skipped')
    )
    expect(warnedSkip).toBe(true)
  })

  it('launched(정상) 행은 silent — warn 없음', () => {
    const rows = [
      ['country', 'category', 'launched'],
      ['US', 'TV', 'launched'],    // 정상 데이터 — warn 안 나야 함
      ['UK', 'WM', 'yes'],
    ]
    parseSheetRows(SHEET_NAMES.unlaunched, rows)
    const rowSkipWarns = warnSpy.mock.calls.filter(call =>
      String(call[0]).includes('row skipped')
    )
    expect(rowSkipWarns.length).toBe(0)
  })
})

// ─── parseSheetRows 라우터 가드 ─────────────────────────────────────────────
describe('parseSheetRows 라우터 — DETECT + unknown sheet', () => {
  const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
  const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
  beforeEach(() => { warnSpy.mockClear(); errorSpy.mockClear() })

  it('알 수 없는 시트명 → warn + {}', () => {
    const result = parseSheetRows('UnknownSheet', [['a', 'b']])
    expect(result).toEqual({})
    const unknownWarn = warnSpy.mock.calls.some(call =>
      String(call[1]).includes('unknown sheet')
    )
    expect(unknownWarn).toBe(true)
  })

  it('rows 가 배열 아님 → fatal + {}', () => {
    const result = parseSheetRows(SHEET_NAMES.meta, 'not-an-array')
    expect(result).toEqual({})
    expect(errorSpy).toHaveBeenCalled()
  })
})
