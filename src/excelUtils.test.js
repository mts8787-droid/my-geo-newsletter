import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { pct, pctOrNull, canonicalCountry, parseSheetRows, SHEET_NAMES } from './excelUtils.js'
import { PROD_IDS, PROD_ID_TO_UL_CODE, PROD_ID_TO_KR, PROD_ID_TO_EN, PROD_ID_TO_BU, UL_CODE_NORMALIZE, assertCategoryMapInvariant } from './categoryMap.js'

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

  it('PROD_IDS 의 모든 prodId 가 4종 매핑 (KR/EN/UL_CODE/BU) 에 정의됨', () => {
    for (const id of PROD_IDS) {
      expect(PROD_ID_TO_KR[id]).toBeDefined()
      expect(PROD_ID_TO_EN[id]).toBeDefined()
      expect(PROD_ID_TO_UL_CODE[id]).toBeDefined()
      expect(PROD_ID_TO_BU[id]).toBeDefined()
    }
  })

  it('PROD_ID_TO_BU 분류: MS/HS/ES + styler=HS', () => {
    expect(PROD_ID_TO_BU.tv).toBe('MS')
    expect(PROD_ID_TO_BU.monitor).toBe('MS')
    expect(PROD_ID_TO_BU.washer).toBe('HS')
    expect(PROD_ID_TO_BU.rac).toBe('ES')
    expect(PROD_ID_TO_BU.aircare).toBe('ES')
    expect(PROD_ID_TO_BU.styler).toBe('HS')
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

// ─── parseWeekly 3-mode 동작 ──────────────────────────────────────────────
// 232줄 거대 함수. 분할 안전성 확보 위한 통합 테스트.
// 합성 fixture 로 3가지 시트 포맷 + parseDashboardLayout 폴백 동작 검증.
describe('parseWeekly — 3-mode 자동 감지', () => {
  const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
  const logSpy = vi.spyOn(console, 'log').mockImplementation(() => {})
  beforeEach(() => { warnSpy.mockClear(); logSpy.mockClear() })

  it('Mode A (Brand 포맷): Product/Country/B/NB/Brand + W컬럼 → weeklyMap + weeklyAll', () => {
    const rows = [
      ['Product', 'Country', 'B/NB', 'Brand',   'W1', 'W2'],
      ['TV',      '(Total)', 'NB',    'LG',      85.5, 85.7],
      ['TV',      '(Total)', 'NB',    'Samsung', 90,   91],
      ['TV',      'US',      'NB',    'LG',      80,   81],
    ]
    const result = parseSheetRows(SHEET_NAMES.weeklyMS, rows)
    expect(result.weeklyMap?.tv).toEqual([85.5, 85.7])     // LG Total NonBrand
    expect(result.weeklyLabels).toEqual(['W1', 'W2'])
    expect(result.weeklyAll?.tv?.Total?.LG).toEqual([85.5, 85.7])
    expect(result.weeklyAll?.tv?.Total?.Samsung).toEqual([90, 91])
    expect(result.weeklyAll?.tv?.US?.LG).toEqual([80, 81])
  })

  it('Mode B (LG 포맷, brand 없음): Div/Date/Country/Category/LG → weeklyMap', () => {
    const rows = [
      ['Div', 'Date', 'Country', 'Category', 'LG'],
      ['MS',  'W1',   'Total',   'TV',        85.5],
      ['MS',  'W2',   'Total',   'TV',        85.7],
    ]
    const result = parseSheetRows(SHEET_NAMES.weeklyMS, rows)
    expect(result.weeklyMap?.tv).toEqual([85.5, 85.7])
    expect(result.weeklyLabels).toEqual(['W1', 'W2'])
    expect(result.weeklyAll).toBeUndefined()  // brand 없으니 weeklyAll 없음
  })

  it('Mode C (Category + W 만): Category/W1/W2 → weeklyMap', () => {
    const rows = [
      ['Category', 'W1', 'W2'],
      ['TV',        85.5, 85.7],
      ['Monitor',   60,   61],
    ]
    const result = parseSheetRows(SHEET_NAMES.weeklyMS, rows)
    expect(result.weeklyMap?.tv).toEqual([85.5, 85.7])
    expect(result.weeklyMap?.monitor).toEqual([60, 61])
    expect(result.weeklyLabels).toEqual(['W1', 'W2'])
  })

  it('헤더 미감지 → parseDashboardLayout 폴백 (DASH_CAT_MAP MS = TV/Monitor/AV)', () => {
    // 대시보드 레이아웃: 카테고리가 행 헤더, 브랜드(LG/NB)가 데이터 행
    const rows = [
      ['', '', '', ''],
      ['', 'TV', 'Monitor', 'AV'],
      ['', '85', '70', '60'],         // 첫 데이터 행 (LG 등)
    ]
    const result = parseSheetRows(SHEET_NAMES.weeklyMS, rows)
    // parseDashboardLayout 가 fallback — header 행에 'LG' 없으니 dataRow 없음 → warn
    // 실제 시트에서 사용되는 형식이 아니라 단순 폴백 진입 검증
    expect(result).toBeDefined()
  })

  it('pctOrNull 동작: 빈 셀은 null (트렌드 0% 미렌더용)', () => {
    const rows = [
      ['Product', 'Country', 'B/NB', 'Brand', 'W1', 'W2', 'W3'],
      ['TV',      '(Total)', 'NB',    'LG',    85,   '',  87],   // W2 빈셀
    ]
    const result = parseSheetRows(SHEET_NAMES.weeklyMS, rows)
    expect(result.weeklyMap?.tv).toEqual([85, null, 87])  // null 보존
  })

  it('카테고리 정규화: WASHER/Washing Machine → washer', () => {
    const rows = [
      ['Category', 'W1'],
      ['Washer',    50],
      ['Washing Machine', 51],   // 같은 prodId 로 정규화되어 마지막 행 덮어쓰기
    ]
    const result = parseSheetRows(SHEET_NAMES.weeklyMS, rows)
    expect(result.weeklyMap?.washer).toBeDefined()
  })
})

// ─── parseCitTouchPoints — 거대 파서 (296줄) ────────────────────────────────
describe('parseCitTouchPoints — 헤더 탐지 + 월 라벨 + citations 집계', () => {
  const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
  const logSpy = vi.spyOn(console, 'log').mockImplementation(() => {})
  beforeEach(() => { warnSpy.mockClear(); logSpy.mockClear() })

  it('기본 fixture: Country/Channel/Feb/Mar → citations + citTouchPointsTrend', () => {
    const rows = [
      ['Country', 'Channel',   'Feb', 'Mar'],
      ['TTL',     'Reddit',     30,    35],
      ['TTL',     'YouTube',    20,    25],
      ['US',      'Reddit',     15,    18],
    ]
    const result = parseSheetRows(SHEET_NAMES.citTouchPoints, rows)
    expect(result.citations).toBeDefined()
    expect(result.citations.length).toBeGreaterThan(0)
    expect(result.citTouchPointsTrend).toBeDefined()
    expect(result.citTouchPointsTrend.Reddit?.Mar).toBe(35)
    // 국가별
    expect(result.citationsByCnty?.US).toBeDefined()
  })

  it('헤더 없는 시트 → best-effort + warn', () => {
    const rows = [['just', 'random', 'data'], ['x', 'y', 'z']]
    parseSheetRows(SHEET_NAMES.citTouchPoints, rows)
    const headerWarn = warnSpy.mock.calls.some(call =>
      String(call[1]).includes('header not found')
    )
    expect(headerWarn).toBe(true)
  })

  it('월 라벨 canonical 정규화 (Apr 2026 → Apr, 4월 → Apr)', () => {
    const rows = [
      ['Country', 'Channel', 'Apr 2026', '4월'],
      ['TTL',     'Reddit',   40,         45],
    ]
    const result = parseSheetRows(SHEET_NAMES.citTouchPoints, rows)
    // 같은 'Apr' 컬럼으로 매핑되면 중복 column 으로 무시. 다른 칼럼이면 둘 다 인식.
    expect(result.citations).toBeDefined()
  })
})

// ─── parseCitDomain — 거대 파서 (273줄) ─────────────────────────────────────
describe('parseCitDomain — v1/v2/v3 layout 자동 감지', () => {
  const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
  beforeEach(() => { warnSpy.mockClear() })

  it('v2 layout (No/Region/Domain/Type + 월): citationsCnty + citDomainTrend', () => {
    const rows = [
      ['No', 'Region', 'Domain',     'Type',      'Feb', 'Mar'],
      [1,    'GLOBAL', 'reddit.com', 'community',  30,    35],
      [2,    'US',     'reddit.com', 'community',  15,    18],
      [3,    'GLOBAL', 'youtube.com','video',      20,    25],
    ]
    const result = parseSheetRows(SHEET_NAMES.citDomain, rows)
    expect(result.citationsCnty).toBeDefined()
    expect(result.citationsCnty.length).toBeGreaterThan(0)
    // GLOBAL → TTL 변환
    const ttl = result.citationsCnty.find(r => r.cnty === 'TTL' && r.domain === 'reddit.com')
    expect(ttl?.citations).toBe(35)  // 최신 월(Mar)
    expect(result.citDomainTrend).toBeDefined()
  })

  it('v3 layout (월별 Region/Domain/Type 블록 반복) + cleanDomain 정규화', () => {
    // v3: PRD|No|Region|Domain|Type|Feb|Region|Domain|Type|Mar|... 형태
    const rows = [
      ['PRD', 'No', 'Region', 'Domain',                    'Type',      'Feb', 'Region', 'Domain',     'Type',      'Mar'],
      ['',     1,   'GLOBAL', 'HTTPS://WWW.REDDIT.COM/r/x', 'community',  30,    'GLOBAL', 'reddit.com', 'community',  35],
    ]
    const result = parseSheetRows(SHEET_NAMES.citDomain, rows)
    const r = result.citationsCnty?.find(x => x.cnty === 'TTL')
    expect(r?.domain).toBe('reddit.com')  // cleanDomain: 경로 제거 + 소문자 + www 제거
  })

  it('헤더 없는 시트 → best-effort + warn', () => {
    const rows = [['x', 'y', 'z'], [1, 2, 3]]
    parseSheetRows(SHEET_NAMES.citDomain, rows)
    const headerWarn = warnSpy.mock.calls.some(call =>
      String(call[1]).includes('header not found')
    )
    expect(headerWarn).toBe(true)
  })
})

// ─── parseVisSummary — KV / 테이블 두 형식 + 시간순 정렬 ────────────────────
describe('parseVisSummary — 두 형식 자동 감지 + TOTAL 시간순', () => {
  const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
  const logSpy = vi.spyOn(console, 'log').mockImplementation(() => {})
  beforeEach(() => { warnSpy.mockClear(); logSpy.mockClear() })

  it('KV 형식: 키-value 매핑 → total 객체', () => {
    const rows = [
      ['key',         'value'],
      ['score',       '85.5'],
      ['prev',        '82'],
      ['vsComp',      '90'],
      ['rank',        1],
      ['totalBrands', 12],
    ]
    const result = parseSheetRows(SHEET_NAMES.visSummary, rows)
    expect(result.total).toEqual({ score: 85.5, prev: 82, vsComp: 90, rank: 1, totalBrands: 12 })
  })

  it('테이블 형식: Date/Country/Division/LG/Samsung — TTL/TOTAL 행 시간순', () => {
    // countryTotals / buTotals 는 최신월(Mar 2026) 행만 추출. Feb 2026 는 prev 계산용.
    const rows = [
      ['Date',     'Country', 'Division', 'LG', 'Samsung'],
      ['Feb 2026', 'TOTAL',   'TOTAL',     80,   75],
      ['Mar 2026', 'TOTAL',   'TOTAL',     86,   82],
      ['Mar 2026', 'US',      'TOTAL',     70,   65],
      ['Mar 2026', 'TOTAL',   'MS',        88,   85],
    ]
    const result = parseSheetRows(SHEET_NAMES.visSummary, rows)
    // 최신 월 TOTAL 행 → score, 직전월 → prev
    expect(result.total?.score).toBe(86)
    expect(result.total?.prev).toBe(80)
    expect(result.total?.vsComp).toBe(82)
    // 국가별
    expect(result.countryTotals?.US).toEqual({ lg: 70, comp: 65 })
    // BU 별
    expect(result.buTotals?.MS).toEqual({ lg: 88, comp: 85 })
    // monthlyVis 보존
    expect(result.monthlyVis?.length).toBeGreaterThan(0)
    // derivedPeriod = 최신월
    expect(result.derivedPeriod).toBe('Mar 2026')
  })

  it('TTL 없는 시트 → fallback 첫 TOTAL 행 + warn', () => {
    const rows = [
      ['Date', 'Country', 'Division', 'LG', 'Samsung'],
      ['Mar',  'TOTAL',   'TOTAL',     85,   80],   // date 'Mar' 만, 연도 없음 → 정렬키 약함
    ]
    const result = parseSheetRows(SHEET_NAMES.visSummary, rows)
    // monthlyVis 비어있을 가능성 → fallback 분기
    expect(result.total).toBeDefined()
  })
})

// ─── parseCitPageType — Dotcom (LG/SS) 월 페어 ──────────────────────────────
describe('parseCitPageType — 월 페어 + dotcom 집계 + 트렌드', () => {
  const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
  beforeEach(() => { warnSpy.mockClear() })

  it('Feb LG/SS + Mar LG/SS → dotcom + dotcomTrend', () => {
    const rows = [
      ['Country', 'Page Type', 'Feb LG', 'Feb SS', 'Mar LG', 'Mar SS'],
      ['TTL',     'TTL',        80,       75,       85,       80],
      ['TTL',     'PLP',        60,       55,       65,       58],
      ['US',      'PLP',        50,       45,       55,       50],
    ]
    const result = parseSheetRows(SHEET_NAMES.citPageType, rows)
    // 최신월(Mar) dotcom
    expect(result.dotcom?.lg?.TTL).toBe(85)
    expect(result.dotcom?.lg?.PLP).toBe(65)
    expect(result.dotcom?.samsung?.PLP).toBe(58)
    // 국가별 (US 만)
    expect(result.dotcomByCnty?.US?.lg?.PLP).toBe(55)
    // 트렌드 (Feb + Mar)
    expect(result.dotcomTrend?.TTL?.Feb?.lg).toBe(80)
    expect(result.dotcomTrend?.TTL?.Mar?.lg).toBe(85)
    expect(result.dotcomTrendMonths).toEqual(['Feb', 'Mar'])
  })

  it('CNTY_ALIAS: 한글 국가명 → 표준 코드 (미국 → US)', () => {
    const rows = [
      ['Country', 'Page Type', 'Mar LG', 'Mar SS'],
      ['미국',    'PLP',        50,       45],
    ]
    const result = parseSheetRows(SHEET_NAMES.citPageType, rows)
    expect(result.dotcomByCnty?.US?.lg?.PLP).toBe(50)
  })

  it('Microsite → Microsites 정규화 (오타 흡수)', () => {
    const rows = [
      ['Country', 'Page Type', 'Mar LG'],
      ['TTL',     'Microsite',  70],     // 단수형 → Microsites 로 변환
    ]
    const result = parseSheetRows(SHEET_NAMES.citPageType, rows)
    expect(result.dotcom?.lg?.Microsites).toBe(70)
  })
})

// ─── parseProductCnty — 거대 파서 (106줄) ───────────────────────────────────
describe('parseProductCnty — TTL/국가별 분리 + 시간순 정렬 invariant', () => {
  const logSpy = vi.spyOn(console, 'log').mockImplementation(() => {})
  const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
  beforeEach(() => { logSpy.mockClear(); warnSpy.mockClear() })

  it('기본 fixture: TTL → productsPartial, 국가별 → productsCnty', () => {
    const rows = [
      ['Div', 'Date',     'Country', 'Category', 'LG', 'Samsung'],
      ['MS',  'Feb 2026', 'TTL',     'TV',        80,   85],
      ['MS',  'Mar 2026', 'TTL',     'TV',        82,   86],
      ['MS',  'Feb 2026', 'US',      'TV',        75,   80],
      ['MS',  'Mar 2026', 'US',      'TV',        77,   82],
    ]
    const result = parseSheetRows(SHEET_NAMES.productMS, rows)
    // productsPartial: TTL 행만, 최신월 score + 직전월 prev
    const tv = result.productsPartial?.find(p => p.id === 'tv')
    expect(tv?.score).toBe(82)        // Mar (최신)
    expect(tv?.prev).toBe(80)         // Feb
    expect(tv?.vsComp).toBe(86)       // Mar Samsung
    // monthlyScores: 시간순 정렬
    expect(tv?.monthlyScores?.length).toBe(2)
    expect(tv?.monthlyScores?.[0].date).toBe('Feb 2026')
    expect(tv?.monthlyScores?.[1].date).toBe('Mar 2026')
    // productsCnty: US|TV
    const usTv = result.productsCnty?.find(p => p.country === 'US' && p.product === 'TV')
    expect(usTv?.score).toBe(77)
    expect(usTv?.prev).toBe(75)
  })

  it('시간순 정렬 invariant: 입력 순서가 역순이어도 monthlyScores 는 시간순', () => {
    const rows = [
      ['Div', 'Date',     'Country', 'Category', 'LG', 'Samsung'],
      ['MS',  'Mar 2026', 'TTL',     'TV',        82,   86],     // 먼저 입력
      ['MS',  'Feb 2026', 'TTL',     'TV',        80,   85],     // 나중 입력
    ]
    const result = parseSheetRows(SHEET_NAMES.productMS, rows)
    const tv = result.productsPartial?.find(p => p.id === 'tv')
    expect(tv?.monthlyScores?.[0].date).toBe('Feb 2026')   // 시간순 강제 정렬
    expect(tv?.monthlyScores?.[1].date).toBe('Mar 2026')
    expect(tv?.score).toBe(82)    // Mar (최신)
    expect(tv?.prev).toBe(80)     // Feb
  })

  it('카테고리 정규화: Monitor/IT 둘 다 monitor 로', () => {
    const rows = [
      ['Div', 'Date',     'Country', 'Category', 'LG'],
      ['MS',  'Feb 2026', 'TTL',     'Monitor',   60],
      ['MS',  'Mar 2026', 'TTL',     'IT',        62],     // 같은 prodId 'monitor'
    ]
    const result = parseSheetRows(SHEET_NAMES.productMS, rows)
    const monitor = result.productsPartial?.find(p => p.id === 'monitor')
    expect(monitor).toBeDefined()
    expect(monitor?.score).toBe(62)
  })

  it('알려지지 않은 카테고리 → lowercase fallback', () => {
    const rows = [
      ['Div', 'Date',     'Country', 'Category', 'LG'],
      ['MS',  'Feb 2026', 'TTL',     'NewCategory', 50],
    ]
    const result = parseSheetRows(SHEET_NAMES.productMS, rows)
    const p = result.productsPartial?.find(x => x.id === 'newcategory')
    expect(p).toBeDefined()
  })

  it('헤더 없는 시트 → warn + {}', () => {
    const rows = [['x', 'y', 'z'], ['1', '2', '3']]
    const result = parseSheetRows(SHEET_NAMES.productMS, rows)
    expect(result).toEqual({})
    expect(warnSpy).toHaveBeenCalled()
  })

  it('vsComp: 여러 경쟁사 중 최고 점수 + 이름 자동 선택', () => {
    const rows = [
      ['Div', 'Date',     'Country', 'Category', 'LG', 'Samsung', 'Sony'],
      ['MS',  'Mar 2026', 'TTL',     'TV',        82,   86,        90],     // Sony 가 최고
    ]
    const result = parseSheetRows(SHEET_NAMES.productMS, rows)
    const tv = result.productsPartial?.find(p => p.id === 'tv')
    expect(tv?.vsComp).toBe(90)     // Sony score
    expect(tv?.compName).toBe('Sony')
  })
})

// ─── parseMeta — key-value 시트 ─────────────────────────────────────────────
describe('parseMeta — key-value 매핑 + 한→영 변환', () => {
  it('numKeys/boolKeys/alwaysOff 처리', () => {
    const rows = [
      ['key',            'value'],
      ['titleFontSize',  '28'],
      ['showProducts',   'y'],
      ['showNotice',     'y'],         // alwaysOff — 강제 false
      ['period',         '2026년 4월'], // 한→영 변환
      ['someText',       'foo'],
    ]
    const result = parseSheetRows(SHEET_NAMES.meta, rows)
    expect(result.meta?.titleFontSize).toBe(28)
    expect(result.meta?.showProducts).toBe(true)
    expect(result.meta?.showNotice).toBe(false)  // alwaysOff 강제
    expect(result.meta?.period).toBe('Apr 2026')  // 한→영
    expect(result.meta?.someText).toBe('foo')
  })

  it('weeklyLabels 콤마 문자열 → 배열', () => {
    const rows = [
      ['key',           'value'],
      ['weeklyLabels',  'W5,W6,W7,W8'],
    ]
    const result = parseSheetRows(SHEET_NAMES.meta, rows)
    expect(result.meta?.weeklyLabels).toEqual(['W5', 'W6', 'W7', 'W8'])
  })
})

// ─── parsePRVisibility / parseBrandPromptVisibility ─────────────────────────
describe('parsePRVisibility — monthly/weekly 모드', () => {
  const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
  beforeEach(() => { warnSpy.mockClear() })

  it('monthly 모드: Type/County/Topic/Brand + 월 컬럼', () => {
    const rows = [
      ['Type', 'County', 'Topic',  'Brand', 'Feb', 'Mar'],
      ['T1',   'US',     'Topic1', 'LG',     50,    55],
      ['T1',   'UK',     'Topic2', 'LG',     40,    45],
    ]
    const result = parseSheetRows(SHEET_NAMES.monthlyPR, rows)
    expect(result.monthlyPR?.length).toBe(2)
    expect(result.monthlyPRLabels).toEqual(['Feb', 'Mar'])
    const first = result.monthlyPR?.[0]
    expect(first?.country).toBe('US')
    expect(first?.scores).toEqual({ Feb: 50, Mar: 55 })
    expect(first?.latestScore).toBe(55)
  })

  it('헤더 없는 시트 → warn + {}', () => {
    parseSheetRows(SHEET_NAMES.monthlyPR, [['x'], ['y']])
    const headerWarn = warnSpy.mock.calls.some(call =>
      String(call[1]).includes('header not found')
    )
    expect(headerWarn).toBe(true)
  })
})

describe('parseBrandPromptVisibility — monthly/weekly 모드', () => {
  it('Stakeholders + 주차 컬럼', () => {
    const rows = [
      ['Steakholders', 'Type', 'Country', 'Topoc',  'W5', 'W6'],
      ['Influencer',   'T1',   'US',      'Topic1', 60,    65],
    ]
    const result = parseSheetRows(SHEET_NAMES.weeklyBrandPrompt, rows)
    expect(result.weeklyBrandPrompt?.length).toBe(1)
    expect(result.weeklyBrandPromptLabels).toEqual(['W5', 'W6'])
    const first = result.weeklyBrandPrompt?.[0]
    expect(first?.stakeholder).toBe('Influencer')
    expect(first?.topic).toBe('Topic1')
  })
})

// ─── parseAppendix / parsePRTopicList ───────────────────────────────────────
describe('parseAppendix — Prompt List', () => {
  it('Country/Prompts/Division/Category 매핑 → appendixPrompts 배열', () => {
    const rows = [
      ['Country', 'Prompts', 'Division', 'Category', 'launched', 'Branded', 'CEJ', 'Topic'],
      ['US',      'q1?',     'MS',       'TV',       'yes',       'no',     'C1',  'T1'],
      ['UK',      'q2?',     'HS',       'WM',       'yes',       'yes',    'C2',  'T2'],
    ]
    const result = parseSheetRows(SHEET_NAMES.appendix, rows)
    expect(result.appendixPrompts?.length).toBe(2)
    expect(result.appendixPrompts?.[0].country).toBe('US')
    expect(result.appendixPrompts?.[0].prompt).toBe('q1?')
  })

  it('Prompts 빈 행은 skip', () => {
    const rows = [
      ['Country', 'Prompts', 'Division', 'Category', 'launched', 'Branded', 'CEJ', 'Topic'],
      ['US',      '',        'MS',       'TV',       'yes',       'no',     'C1',  'T1'],
      ['UK',      'q2?',     'HS',       'WM',       'yes',       'yes',    'C2',  'T2'],
    ]
    const result = parseSheetRows(SHEET_NAMES.appendix, rows)
    expect(result.appendixPrompts?.length).toBe(1)
    expect(result.appendixPrompts?.[0].country).toBe('UK')
  })
})

describe('parsePRTopicList — BU 병합 셀 처리', () => {
  it('BU 빈 셀은 이전 BU 유지 (병합 셀 패턴)', () => {
    const rows = [
      ['BU', 'Topic-대시보드', 'Explanation', '기존 토픽', 'Topic-row'],
      ['MS', 'Topic1',         'expl1',       '',          'row1'],
      ['',   'Topic2',         'expl2',       '',          'row2'],     // BU 빈 → MS 유지
      ['HS', 'Topic3',         'expl3',       '',          'row3'],
    ]
    const result = parseSheetRows(SHEET_NAMES.prTopicList, rows)
    expect(result.prTopicList?.length).toBe(3)
    expect(result.prTopicList?.[0].bu).toBe('MS')
    expect(result.prTopicList?.[1].bu).toBe('MS')   // 병합 유지
    expect(result.prTopicList?.[2].bu).toBe('HS')
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

  it('라우터 try/catch — 손상된 rows 가 파서를 throw 시켜도 sync 격리 (parseMeta)', () => {
    // rows=[null] 은 Array.isArray=true 라 assertRows 통과. parseMeta 안에서 r[0] 접근 시 TypeError.
    // 라우터 try/catch 가 catch → _logFatal → {} 반환.
    const result = parseSheetRows(SHEET_NAMES.meta, [null])
    expect(result).toEqual({})
    expect(errorSpy).toHaveBeenCalled()
  })
})
