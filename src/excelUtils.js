// N2 — XLSX는 downloadTemplate에서만 쓰이므로 함수 내부에서 동적 로드
import { loadXlsx } from './shared/loadXlsx.js'

// ─── 시트 이름 (Google Sheets 동기화용 — 새 데이터 원천) ─────────────────────────
export const SHEET_NAMES = {
  meta:           'meta',
  visSummary:     'Monthly Visibility Summary',
  productMS:      'Monthly Visibility Product_CNTY_MS',
  productHS:      'Monthly Visibility Product_CNTY_HS',
  productES:      'Monthly Visibility Product_CNTY_ES',
  weeklyMS:       'Weekly MS Visibility',
  weeklyHS:       'Weekly HS Visibility',
  weeklyES:       'Weekly ES Visibility',
  monthlyPR:      'Monthly PR Visibility',
  weeklyPR:       'Weekly PR Visibility',
  monthlyBrandPrompt: 'Monthly Brand Prompt Visibility',
  weeklyBrandPrompt:  'Weekly Brand Prompt Visibility',
  citPageType:    'Citation-Page Type',
  citTouchPoints: 'Citation-Touch Points',
  citDomain:      'Citation-Domain',
  appendix:       'Appendix.Prompt List',
  unlaunched:     'unlaunched',
  prTopicList:    'PR Topic List',
}

// ─── 카테고리 ID/KR 매핑 ──────────────────────────────────────────────────────
const CATEGORY_ID_MAP = {
  'TV': 'tv', 'Monitor': 'monitor', 'IT': 'monitor', 'Audio': 'audio', 'AV': 'audio',
  'WM': 'washer', 'Washer': 'washer', 'Washing Machine': 'washer',
  'REF': 'fridge', 'Refrigerator': 'fridge',
  'DW': 'dw', 'Dishwasher': 'dw',
  'VC': 'vacuum', 'Vacuum': 'vacuum', 'Vacuum Cleaner': 'vacuum',
  'Cooking': 'cooking', 'Cook': 'cooking',
  'RAC': 'rac', 'Aircare': 'aircare', 'Air Care': 'aircare',
  'Styler': 'styler',
}
const CATEGORY_KR_MAP = {
  'TV': 'TV', 'Monitor': '모니터', 'IT': '모니터', 'Audio': '오디오', 'AV': '오디오',
  'WM': '세탁기', 'Washer': '세탁기', 'Washing Machine': '세탁기',
  'REF': '냉장고', 'Refrigerator': '냉장고',
  'DW': '식기세척기', 'Dishwasher': '식기세척기',
  'VC': '청소기', 'Vacuum': '청소기', 'Vacuum Cleaner': '청소기',
  'Cooking': 'Cooking', 'Cook': 'Cooking',
  'RAC': 'RAC', 'Aircare': 'Aircare', 'Air Care': 'Aircare',
  'Styler': 'Styler',
}

export const DOTCOM_LG_COLS   = ['TTL','PLP','Microsites','PDP','Newsroom','Support','Buying-guide','Experience']
export const DOTCOM_SAM_COLS  = ['TTL','PLP','Microsites','PDP','Newsroom','Support','Buying-guide']

export async function downloadTemplate(meta, total, products, citations, dotcom = {}) {
  const XLSX = await loadXlsx()
  const wb = XLSX.utils.book_new()

  // ── meta ──────────────────────────────────────────────────────────────────
  const wsMeta = XLSX.utils.aoa_to_sheet([
    ['[GEO Newsletter] 리포트 기본 정보 시트'],
    ['※ key 열은 수정하지 마세요. value 열(B열)만 수정하세요.'],
    [''],
    ['key', 'value', '설명'],
    ['period',            meta.period,            '보고서 기간 (예: 2026년 3월)'],
    ['team',              meta.team,              '담당 팀명'],
    ['reportNo',          meta.reportNo,          '보고서 번호 (예: Vol.03)'],
    ['reportType',        meta.reportType,        '리포트 유형 (예: GEO 월간 성과 분석 리포트)'],
    ['title',             meta.title,             '리포트 제목'],
    ['titleFontSize',     meta.titleFontSize,     '제목 폰트 크기 (숫자, 예: 24)'],
    ['titleColor',        meta.titleColor,        '제목 색상 (HEX, 예: #1A1A1A)'],
    ['dateLine',          meta.dateLine,          '기준 텍스트 (예: 2026년 3월 기준)'],
    ['showNotice',        meta.showNotice ? 'Y' : 'N', 'Notice 표시 여부 (Y/N)'],
    ['noticeText',        meta.noticeText,        'Notice 내용'],
    ['totalInsight',      meta.totalInsight,      'GEO 전략 인사이트'],
    ['productInsight',    meta.productInsight,    '제품별 GEO 인사이트'],
    ['showProductInsight', meta.showProductInsight ? 'Y' : 'N', '제품별 인사이트 표시 (Y/N)'],
    ['productHowToRead',  meta.productHowToRead,  '제품별 읽는 법'],
    ['showProductHowToRead', meta.showProductHowToRead ? 'Y' : 'N', '제품별 읽는 법 표시 (Y/N)'],
    ['citationInsight',   meta.citationInsight,   'Citation 인사이트'],
    ['showCitationInsight', meta.showCitationInsight ? 'Y' : 'N', 'Citation 인사이트 표시 (Y/N)'],
    ['citationHowToRead', meta.citationHowToRead, 'Citation 읽는 법'],
    ['showCitationHowToRead', meta.showCitationHowToRead ? 'Y' : 'N', 'Citation 읽는 법 표시 (Y/N)'],
    ['dotcomInsight',     meta.dotcomInsight,     '닷컴 Citation 인사이트'],
    ['showDotcomInsight', meta.showDotcomInsight ? 'Y' : 'N', '닷컴 인사이트 표시 (Y/N)'],
    ['dotcomHowToRead',   meta.dotcomHowToRead,   '닷컴 읽는 법'],
    ['showDotcomHowToRead', meta.showDotcomHowToRead ? 'Y' : 'N', '닷컴 읽는 법 표시 (Y/N)'],
  ])
  wsMeta['!cols'] = [{ wch: 24 }, { wch: 50 }, { wch: 40 }]
  XLSX.utils.book_append_sheet(wb, wsMeta, 'meta')

  // ── total ─────────────────────────────────────────────────────────────────
  const wsTotal = XLSX.utils.aoa_to_sheet([
    ['[GEO Newsletter] 전체 GEO 가시성 지수 시트'],
    ['※ key 열은 수정하지 마세요. value 열(B열)만 수정하세요. 숫자만 입력.'],
    [''],
    ['key', 'value', '설명'],
    ['score',       total.score,       '이번 달 전체 GEO 점수 (0~100, 소수점 가능)'],
    ['prev',        total.prev,        '전월 GEO 점수 — 전월 대비 증감 자동 계산'],
    ['vsComp',      total.vsComp,      '삼성전자 전체 GEO 점수 (0~100, 소수점 가능)'],
    ['rank',        total.rank,        '전체 브랜드 중 LG전자 순위 (정수)'],
    ['totalBrands', total.totalBrands, '비교 대상 전체 브랜드 수 (정수)'],
  ])
  wsTotal['!cols'] = [{ wch: 14 }, { wch: 10 }, { wch: 44 }]
  XLSX.utils.book_append_sheet(wb, wsTotal, 'total')

  // ── products ──────────────────────────────────────────────────────────────
  const wsProducts = XLSX.utils.aoa_to_sheet([
    ['[GEO Newsletter] 제품별 데이터 시트'],
    ['※ id·bu·kr 열은 수정하지 마세요. score·prev·vsComp·compName 열만 수정하세요.'],
    ['  score: 이번달 GEO 점수(%)  |  prev: 전월 점수(%)  |  vsComp: 경쟁사 가시성 점수(%)  |  compName: 비교 경쟁사명'],
    [''],
    ['id', 'bu', 'kr', 'score', 'prev', 'vsComp', 'compName'],
    ...products.map(p => [p.id, p.bu, p.kr, p.score, p.prev, p.vsComp, p.compName]),
  ])
  wsProducts['!cols'] = [{ wch: 10 }, { wch: 6 }, { wch: 12 }, { wch: 8 }, { wch: 8 }, { wch: 10 }, { wch: 12 }]
  XLSX.utils.book_append_sheet(wb, wsProducts, 'products')

  // ── weekly ────────────────────────────────────────────────────────────────
  const wsWeekly = XLSX.utils.aoa_to_sheet([
    ['[GEO Newsletter] 주간 트렌드 데이터 시트 (4주)'],
    ['※ id·kr 열은 수정하지 마세요. W1~W4 열에 주차별 GEO 점수를 입력하세요.'],
    ['  W1이 가장 오래된 주, W4이 이번 달 최신 주입니다.'],
    [''],
    ['id', 'kr', 'W1', 'W2', 'W3', 'W4'],
    ...products.map(p => [p.id, p.kr, ...p.weekly]),
  ])
  wsWeekly['!cols'] = [{ wch: 10 }, { wch: 12 }, { wch: 8 }, { wch: 8 }, { wch: 8 }, { wch: 8 }, { wch: 8 }, { wch: 8 }]
  XLSX.utils.book_append_sheet(wb, wsWeekly, 'weekly')

  // ── citations ─────────────────────────────────────────────────────────────
  const wsCitations = XLSX.utils.aoa_to_sheet([
    ['[GEO Newsletter] AI Citation 현황 시트'],
    ['※ 생성형 AI가 LG 제품을 언급할 때 인용하는 출처(Source)와 그 기여 점수를 입력하세요.'],
    ['  rank: 순위(정수)  |  source: 출처명(사이트/매체명)  |  category: 관련 제품 카테고리'],
    ['  score: Citation 건수  |  delta: 전월 대비 증감(%p, 음수=하락)  |  ratio: 비율(%)'],
    [''],
    ['rank', 'source', 'category', 'score', 'delta', 'ratio'],
    ...citations.map(c => [c.rank, c.source, c.category, c.score, c.delta, c.ratio ?? 0]),
  ])
  wsCitations['!cols'] = [{ wch: 6 }, { wch: 18 }, { wch: 12 }, { wch: 8 }, { wch: 8 }]
  XLSX.utils.book_append_sheet(wb, wsCitations, 'citations')

  // ── dotcom ───────────────────────────────────────────────────────────────
  const lg = dotcom?.lg || {}; const sam = dotcom?.samsung || {}
  const wsDotcom = XLSX.utils.aoa_to_sheet([
    ['[GEO Newsletter] 닷컴 Citation (경쟁사대비) 시트'],
    ['※ LG 8개 열 / Samsung 7개 열에 Citation 수를 입력하세요.'],
    [''],
    [...DOTCOM_LG_COLS.map(c => `LG_${c}`), ...DOTCOM_SAM_COLS.map(c => `Samsung_${c}`)],
    [...DOTCOM_LG_COLS.map(c => lg[c] ?? 0), ...DOTCOM_SAM_COLS.map(c => sam[c] ?? 0)],
  ])
  wsDotcom['!cols'] = Array(15).fill({ wch: 14 })
  XLSX.utils.book_append_sheet(wb, wsDotcom, 'dotcom')

  XLSX.writeFile(wb, 'GEO_Newsletter_템플릿.xlsx')
}

// ─── 파싱 공통 ──────────────────────────────────────────────────────────────────

export function pct(v) {
  const raw = String(v ?? '').trim()
  const hasPercent = raw.includes('%')
  const s = raw.replace(/%/g, '').replace(/,/g, '').trim()
  const n = parseFloat(s) || 0
  // '%' 기호가 있으면 이미 퍼센트 값 (예: "75.3%" → 75.3)
  if (hasPercent) return +n.toFixed(2)
  // '%' 없이 0~1 사이 소수면 × 100 (예: 0.753 → 75.3)
  if (Math.abs(n) <= 1 && n !== 0) return +(n * 100).toFixed(2)
  return +n.toFixed(2)
}
// 빈 셀은 null로 반환 (주간 트렌드에서 0%로 그리지 않기 위함)
export function pctOrNull(v) {
  if (v == null) return null
  const raw = String(v).trim()
  if (raw === '') return null
  return pct(v)
}

function numVal(v) {
  return parseFloat(String(v ?? '').replace(/,/g, '').replace(/%/g, '').trim()) || 0
}

// 국가 코드 정규화: V.N. → VN, U.S. → US 등 (점 제거 + 대문자)
function normCountry(raw) {
  return String(raw || '').replace(/[()]/g, '').replace(/\./g, '').trim().toUpperCase()
}

// 시트의 다양한 국가 표기를 대시보드 표준 10개 코드(US/CA/UK/DE/ES/BR/MX/AU/VN/IN)로 정규화.
// unlaunchedMap 키 일관성 + 신호등 라벨 매칭을 위해 사용.
const CANONICAL_COUNTRY_MAP = {
  'US': 'US', 'USA': 'US', 'UNITED STATES': 'US', 'AMERICA': 'US',
  'CA': 'CA', 'CAN': 'CA', 'CANADA': 'CA',
  'UK': 'UK', 'GB': 'UK', 'GREAT BRITAIN': 'UK', 'UNITED KINGDOM': 'UK', 'BRITAIN': 'UK', 'ENGLAND': 'UK',
  'DE': 'DE', 'GER': 'DE', 'GERMANY': 'DE', 'DEUTSCHLAND': 'DE',
  'ES': 'ES', 'SP': 'ES', 'SPAIN': 'ES', 'ESPAÑA': 'ES',
  'BR': 'BR', 'BRA': 'BR', 'BRAZIL': 'BR', 'BRASIL': 'BR',
  'MX': 'MX', 'MEX': 'MX', 'MEXICO': 'MX', 'MÉXICO': 'MX',
  'AU': 'AU', 'AUS': 'AU', 'AUSTRALIA': 'AU',
  'VN': 'VN', 'VIE': 'VN', 'VIET': 'VN', 'VIETNAM': 'VN', 'VIET NAM': 'VN',
  'IN': 'IN', 'IND': 'IN', 'INDIA': 'IN',
  'KR': 'KR', 'KOR': 'KR', 'KOREA': 'KR', 'SOUTH KOREA': 'KR',
  'JP': 'JP', 'JPN': 'JP', 'JAPAN': 'JP',
  'CN': 'CN', 'CHN': 'CN', 'CHINA': 'CN',
  'FR': 'FR', 'FRA': 'FR', 'FRANCE': 'FR',
  'IT': 'IT', 'ITA': 'IT', 'ITALY': 'IT', 'ITALIA': 'IT',
}
export function canonicalCountry(raw) {
  const norm = normCountry(raw)
  return CANONICAL_COUNTRY_MAP[norm] || norm
}

// 날짜 문자열에서 정렬 가능한 월 값 추출 (연도 경계 안전: year*12+month)
// "2026년 3월" → 24315, "Mar 2026" → 24315, "2026-03" → 24315, "3월" → 3
function parseMonthFromDate(dateStr) {
  const s = String(dateStr || '').trim()
  const enMonths = { jan:1, feb:2, mar:3, apr:4, may:5, jun:6, jul:7, aug:8, sep:9, oct:10, nov:11, dec:12 }
  let month = 0, year = 0
  const yearMatch = s.match(/(\d{4})/)
  if (yearMatch) year = parseInt(yearMatch[1])
  const krMatch = s.match(/(\d{1,2})월/)
  if (krMatch) { month = parseInt(krMatch[1]) }
  else {
    const enMatch = s.match(/\b(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i)
    if (enMatch) month = enMonths[enMatch[1].toLowerCase()]
    else {
      const isoMatch = s.match(/\d{4}[-\/](\d{1,2})/)
      if (isoMatch) month = parseInt(isoMatch[1])
    }
  }
  return year ? year * 12 + month : month
}

// ─── 개별 시트 파서 ──────────────────────────────────────────────────────────────

function parseMeta(rows) {
  const obj = {}
  const numKeys = ['titleFontSize', 'citationTopN', 'citDomainTopN', 'weekStart']
  const boolKeys = ['showNotice', 'showKpiLogic', 'showTotal', 'showProducts', 'showCnty',
    'showCitations', 'showCitDomain', 'showCitCnty', 'showDotcom',
    'showProductInsight', 'showProductHowToRead',
    'showCitationInsight', 'showCitationHowToRead',
    'showDotcomInsight', 'showDotcomHowToRead',
    'showCntyInsight', 'showCntyHowToRead',
    'showCitDomainInsight', 'showCitDomainHowToRead',
    'showCitCntyInsight', 'showCitCntyHowToRead',
    'showTodo']
  rows.forEach(r => {
    if (!r[0] || String(r[0]).startsWith('[') || String(r[0]).startsWith('※') || r[0] === 'key') return
    const k = String(r[0]).trim()
    const v = r[1] ?? ''
    if (numKeys.includes(k)) obj[k] = parseInt(v) || (k === 'titleFontSize' ? 24 : 10)
    else if (boolKeys.includes(k)) {
      const sv = String(v).trim().toLowerCase()
      obj[k] = sv === 'y' || sv === 'yes' || sv === 'true' || sv === '1'
    }
    else obj[k] = String(v)
  })
  // Notice / HowToRead 토글은 동기화 값과 관계없이 항상 OFF 기본값 유지
  const alwaysOffKeys = [
    'showNotice',
    'showProductHowToRead', 'showCitationHowToRead', 'showDotcomHowToRead',
    'showCntyHowToRead', 'showCitDomainHowToRead', 'showCitCntyHowToRead',
  ]
  alwaysOffKeys.forEach(k => { obj[k] = false })
  // weeklyLabels: "W5,W6,W7,W8" 형태 → 배열로 변환
  if (obj.weeklyLabels) {
    const labels = String(obj.weeklyLabels).split(',').map(s => s.trim()).filter(Boolean)
    if (labels.length) obj.weeklyLabels = labels
    else delete obj.weeklyLabels
  }
  // period 한글 → 영어 자동 변환: "2026년 3월" → "Mar 2026"
  if (obj.period) {
    const MONTH_MAP = {'1월':'Jan','2월':'Feb','3월':'Mar','4월':'Apr','5월':'May','6월':'Jun','7월':'Jul','8월':'Aug','9월':'Sep','10월':'Oct','11월':'Nov','12월':'Dec'}
    const pm = obj.period.match(/(\d{4})년\s*(\d{1,2}월)/)
    if (pm) obj.period = `${MONTH_MAP[pm[2]] || pm[2]} ${pm[1]}`
  }
  if (obj.dateLine) {
    const dm = obj.dateLine.match(/(\d{4})년\s*(\d{1,2})월/)
    if (dm) {
      const MONTHS_EN = ['','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
      obj.dateLine = `As of ${MONTHS_EN[parseInt(dm[2])] || dm[2]} ${dm[1]}`
    }
  }
  return Object.keys(obj).length ? { meta: obj } : {}
}

function parseVisSummary(rows) {
  // 1) key-value 형식 (이전 total 시트 호환)
  const intKeys = ['rank', 'totalBrands']
  const pctKeys = ['score', 'prev', 'vsComp']
  const kvObj = {}
  let isKV = false
  rows.forEach(r => {
    if (!r[0] || String(r[0]).startsWith('[') || String(r[0]).startsWith('※') || r[0] === 'key') return
    const k = String(r[0]).trim()
    if (pctKeys.includes(k) || intKeys.includes(k)) {
      isKV = true
      if (intKeys.includes(k)) kvObj[k] = parseInt(r[1]) || 0
      else kvObj[k] = pct(r[1])
    }
  })
  if (isKV && Object.keys(kvObj).length >= 2) return { total: kvObj }

  // 2) 헤더 탐색
  const headerRow = rows.find(r => r.some(c => String(c || '').trim().toUpperCase() === 'LG'))
  const lgCol = headerRow ? headerRow.findIndex(c => String(c || '').trim().toUpperCase() === 'LG') : 4
  const ssCol = headerRow
    ? headerRow.findIndex(c => { const s = String(c || '').trim().toUpperCase(); return s === 'SAMSUNG' || s === 'SAMSUMG' })
    : 5
  const actualSsCol = ssCol >= 0 ? ssCol : lgCol + 1

  const dateCol = headerRow ? headerRow.findIndex(c => /date/i.test(String(c || '').trim())) : 0
  const cntyCol = headerRow ? headerRow.findIndex(c => /countries|country/i.test(String(c || '').trim())) : 2
  const divCol = headerRow ? headerRow.findIndex(c => /divisions?/i.test(String(c || '').trim())) : 3

  // 전체 데이터 행 수집
  const monthlyVis = []
  const dataRows = rows.filter(r => {
    const d = String(r[dateCol >= 0 ? dateCol : 0] || '').trim()
    return d && !d.startsWith('[') && !d.startsWith('※') && !/^date$/i.test(d) && !/^key$/i.test(d)
  })
  dataRows.forEach(r => {
    const date = String(r[dateCol >= 0 ? dateCol : 0] || '').trim()
    const country = normCountry(r[cntyCol >= 0 ? cntyCol : 2])
    const division = String(r[divCol >= 0 ? divCol : 3] || '').trim().toUpperCase()
    const lg = pct(r[lgCol])
    const comp = pct(r[actualSsCol])
    if (date && lg > 0) monthlyVis.push({ date, country, division, lg, comp })
  })

  // 전체 TOTAL 행 (country=TOTAL, division=TOTAL) → 날짜별 정렬 → 최신월=score, 이전월=prev
  const totalRows = monthlyVis.filter(r =>
    (r.country === 'TOTAL' || r.country === 'TTL') &&
    (r.division === 'TOTAL' || r.division === 'TTL' || r.division === '')
  )
  totalRows.sort((a, b) => parseMonthFromDate(a.date) - parseMonthFromDate(b.date))
  const latestTotal = totalRows[totalRows.length - 1]
  const prevTotal = totalRows.length >= 2 ? totalRows[totalRows.length - 2] : null

  // 첫번째 TOTAL 행 폴백 (필터링 결과 없을 때)
  if (!latestTotal) {
    const ttlRow = rows.find(r => r.some(c => String(c || '').trim().toUpperCase() === 'TOTAL'))
    if (!ttlRow) return {}
    const score = pct(ttlRow[lgCol])
    const vsComp = pct(ttlRow[actualSsCol])
    const result = { total: { score, prev: score, vsComp, rank: score >= vsComp ? 1 : 2, totalBrands: 12 } }
    if (monthlyVis.length) result.monthlyVis = monthlyVis
    return result
  }

  const score = latestTotal.lg
  const vsComp = latestTotal.comp
  const prev = prevTotal ? prevTotal.lg : score

  // 본부별 총합: 시트의 division=MS/HS/ES, country=TOTAL 행 값을 그대로 사용 (평균 계산 X)
  const latestDate = latestTotal.date
  const prevDate = prevTotal ? prevTotal.date : null
  function pickBuTotals(dateFilter) {
    const out = {}
    monthlyVis.filter(r =>
      r.date === dateFilter &&
      (r.country === 'TOTAL' || r.country === 'TTL') &&
      r.division && r.division !== 'TOTAL' && r.division !== 'TTL' && r.division !== ''
    ).forEach(r => {
      out[r.division] = { lg: r.lg, comp: r.comp }
    })
    return out
  }
  const buTotals = pickBuTotals(latestDate)
  const buTotalsPrev = prevDate ? pickBuTotals(prevDate) : {}

  // 국가별 총합: 시트의 country=US/CA/UK/.., division=TOTAL 행 값을 그대로 사용
  function pickCountryTotals(dateFilter) {
    const out = {}
    monthlyVis.filter(r =>
      r.date === dateFilter &&
      r.country && r.country !== 'TOTAL' && r.country !== 'TTL' &&
      (r.division === 'TOTAL' || r.division === 'TTL' || r.division === '')
    ).forEach(r => {
      out[r.country] = { lg: r.lg, comp: r.comp }
    })
    return out
  }
  const countryTotals = pickCountryTotals(latestDate)
  const countryTotalsPrev = prevDate ? pickCountryTotals(prevDate) : {}

  /** @type {any} */
  const result = {
    total: { score, prev, vsComp, rank: score >= vsComp ? 1 : 2, totalBrands: 12 },
    ...(Object.keys(buTotals).length ? { buTotals } : {}),
    ...(Object.keys(buTotalsPrev).length ? { buTotalsPrev } : {}),
    ...(Object.keys(countryTotals).length ? { countryTotals } : {}),
    ...(Object.keys(countryTotalsPrev).length ? { countryTotalsPrev } : {}),
  }
  // 최신 월 정보를 meta에 자동 반영 (시트 데이터 기준)
  if (latestDate) {
    result.derivedPeriod = latestDate
  }
  if (monthlyVis.length) result.monthlyVis = monthlyVis
  return result
}

function parseProductCnty(rows) {
  // 디버그: 첫 5행 출력
  console.log(`[parseProductCnty] 총 ${rows.length}행, 첫 5행:`)
  rows.slice(0, 5).forEach((r, i) => console.log(`  row${i}: [${r.slice(0, 8).map(c => JSON.stringify(String(c || '').trim())).join(', ')}]`))

  // 헤더: Div, Date, Country, Category, LG, SAMSUNG, Comp3, ...
  const headerIdx = rows.findIndex(r => {
    const c0 = String(r[0] || '').trim().toLowerCase()
    return c0 === 'div' || c0 === 'division' || c0 === 'divisions'
  })
  if (headerIdx < 0) {
    // fallback: LG 컬럼이 있는 행을 헤더로 사용
    const altIdx = rows.findIndex(r => r.some((c, i) => i >= 1 && String(c || '').trim().toUpperCase() === 'LG'))
    if (altIdx < 0) { console.warn('[parseProductCnty] header not found — no Div/Division/LG column'); return {} }
    console.log(`[parseProductCnty] fallback header at row${altIdx}: [${rows[altIdx].slice(0, 8).map(c => JSON.stringify(String(c || '').trim())).join(', ')}]`)
    return parseProductCntyFromRow(rows, altIdx)
  }
  console.log(`[parseProductCnty] header at row${headerIdx}: [${rows[headerIdx].slice(0, 8).map(c => JSON.stringify(String(c || '').trim())).join(', ')}]`)
  return parseProductCntyFromRow(rows, headerIdx)
}

function parseProductCntyFromRow(rows, headerIdx) {
  const header = rows[headerIdx]
  const lgIdx = header.findIndex((c, i) => i >= 3 && String(c || '').trim().toUpperCase() === 'LG')
  if (lgIdx < 0) { console.warn('[parseProductCnty] LG column not found'); return {} }

  // 경쟁사 컬럼 수집 (LG 제외)
  const competitors = []
  for (let i = 4; i < header.length; i++) {
    const name = String(header[i] || '').trim()
    if (name && name.toUpperCase() !== 'LG') competitors.push({ name, col: i })
  }

  const data = rows.slice(headerIdx + 1).filter(r => {
    const c0 = String(r[0] || '').trim()
    return c0 && !c0.startsWith('[') && !c0.startsWith('※')
  })

  const ttlByProduct = {} // { id: [{ ...entry }] }
  const cntyByKey = {}    // { "product|country": [{ ...entry }] }

  data.forEach(r => {
    const div = String(r[0] || '').trim()
    const date = String(r[1] || '').trim()
    const rawCountry = String(r[2] || '').trim()
    const country = normCountry(r[2]) || rawCountry
    const category = String(r[3] || '').trim()
    const lgScore = pct(r[lgIdx])

    const compScores = competitors
      .map(c => ({ name: c.name, score: pct(r[c.col]) }))
      .filter(c => c.score > 0)
    const topComp = [...compScores].sort((a, b) => b.score - a.score)[0] || { name: '', score: 0 }
    const gap = +(lgScore - topComp.score).toFixed(2)

    // 전체 경쟁사 스코어 맵: { Samsung: 91.6, Hisense: 42.3, ... }
    const allScores = { LG: lgScore }
    compScores.forEach(c => { allScores[c.name] = c.score })

    if (country === 'TTL' || country === 'TOTAL') {
      const id = CATEGORY_ID_MAP[category] || category.toLowerCase()
      const kr = CATEGORY_KR_MAP[category] || category
      if (!ttlByProduct[id]) ttlByProduct[id] = []
      ttlByProduct[id].push({ id, bu: div, kr, category, date, score: lgScore, vsComp: topComp.score, compName: topComp.name, allScores })
    } else {
      const key = `${category}|${country}`
      if (!cntyByKey[key]) cntyByKey[key] = []
      cntyByKey[key].push({ product: category, country, date, score: lgScore, compName: topComp.name, compScore: topComp.score, gap, allScores })
    }
  })

  // 제품별 월 데이터를 날짜순 정렬 → 최신월 = score, 이전월 = prev (MoM 계산용)
  console.log(`[parseProductCnty] TTL 제품: ${Object.keys(ttlByProduct).join(', ') || '없음'} / 국가별: ${Object.keys(cntyByKey).length}건`)
  const productsPartial = []
  for (const [id, entries] of Object.entries(ttlByProduct)) {
    entries.sort((a, b) => parseMonthFromDate(a.date) - parseMonthFromDate(b.date))
    const latest = entries[entries.length - 1]
    const prev = entries.length >= 2 ? entries[entries.length - 2].score : null
    console.log(`[parseProductCnty] ${id}: dates=[${entries.map(e => e.date).join(',')}] score=${latest.score} prev=${prev} vsComp=${latest.vsComp}`)
    // 모든 월별 점수 보존 (월간 트렌드용)
    const monthlyScores = entries.map(e => ({ date: e.date, score: e.score, comp: e.vsComp, allScores: e.allScores }))
    productsPartial.push({ ...latest, prev, monthlyScores })
  }

  // 국가별 데이터: 같은 제품+국가에 여러 월이 있으면 최신월=score, 이전월=prev
  const productsCnty = []
  for (const entries of Object.values(cntyByKey)) {
    entries.sort((a, b) => parseMonthFromDate(a.date) - parseMonthFromDate(b.date))
    const latest = entries[entries.length - 1]
    const prev = entries.length >= 2 ? entries[entries.length - 2].score : null
    productsCnty.push({ ...latest, prev })
  }

  return {
    ...(productsPartial.length ? { productsPartial } : {}),
    ...(productsCnty.length ? { productsCnty } : {}),
  }
}

// 시트 rows에서 W숫자 패턴 라벨을 스캔
function findWeekLabels(rows, startRow = 0, endRow) {
  const end = endRow ?? rows.length
  for (let i = startRow; i < end; i++) {
    const labels = []
    for (const cell of (rows[i] || [])) {
      const s = String(cell || '').split(/\n/)[0].trim()
      if (/^W\d+/i.test(s)) labels.push(s.toUpperCase())
    }
    if (labels.length >= 2) return labels
  }
  return null
}

const DASH_CAT_BY_DIV = {
  MS: { TV: 'tv', Monitor: 'monitor', AV: 'audio' },
  ES: { RAC: 'rac', Aircare: 'aircare' },
}

function parseDashboardLayout(rows, div) {
  // 대시보드 레이아웃: 카테고리 이름이 열 헤더로 배치, 브랜드별 행에 주간 값
  const DASH_CAT_MAP = div ? (DASH_CAT_BY_DIV[div] || {})
    : { ...DASH_CAT_BY_DIV.MS, ...DASH_CAT_BY_DIV.ES }
  if (!Object.keys(DASH_CAT_MAP).length) return {}
  const catRowIdx = rows.findIndex(r =>
    r.some(c => String(c || '').trim() in DASH_CAT_MAP)
  )
  if (catRowIdx < 0) return {}
  const catRow = rows[catRowIdx]

  // TTL 행 찾기 (섹션 경계)
  const ttlRowIdx = rows.findIndex((r, i) =>
    i > catRowIdx && r.some(c => String(c || '').trim() === 'TTL')
  )
  const sectionEnd = ttlRowIdx > 0 ? ttlRowIdx + 1 : Math.min(catRowIdx + 20, rows.length)

  // catRow ~ sectionEnd 사이 행 덤프 (디버그)
  for (let i = catRowIdx + 1; i < sectionEnd; i++) {
  }

  // ── LG 행 탐색 (TTL 대신 LG 브랜드 행에서 값 추출) ──
  // NonBrand(NB) LG 행 우선, 없으면 첫 LG 행, 최종 fallback은 TTL
  let lgNbRowIdx = -1, lgRowIdx = -1
  for (let i = catRowIdx + 1; i < sectionEnd; i++) {
    const r = rows[i]
    const hasLG = r.some(c => String(c || '').trim().toUpperCase() === 'LG')
    if (!hasLG) continue
    if (lgRowIdx < 0) lgRowIdx = i  // 첫 LG 행
    const hasNB = r.some(c => {
      const v = String(c || '').trim().toLowerCase().replace(/[\s_-]/g, '')
      return v === 'nonbrand' || v === 'nb'
    })
    if (hasNB) { lgNbRowIdx = i; break }
  }
  const dataRowIdx = lgNbRowIdx >= 0 ? lgNbRowIdx : lgRowIdx >= 0 ? lgRowIdx : ttlRowIdx
  if (dataRowIdx < 0) return {}
  const dataRow = rows[dataRowIdx]
  const dataRowLabel = lgNbRowIdx >= 0 ? 'LG-NB' : lgRowIdx >= 0 ? 'LG' : 'TTL'

  const weeklyMap = {}
  // 다음 카테고리 시작 컬럼 계산 (범위 제한용)
  const catPositions = Object.keys(DASH_CAT_MAP).map(name =>
    catRow.findIndex(c => String(c || '').trim() === name)
  ).filter(i => i >= 0).sort((a, b) => a - b)

  for (const [name, id] of Object.entries(DASH_CAT_MAP)) {
    const ci = catRow.findIndex(c => String(c || '').trim() === name)
    if (ci < 0) continue
    // 다음 카테고리까지 또는 최대 20컬럼 내에서 스캔
    const nextCatCol = catPositions.find(p => p > ci) || (ci + 20)
    const vals = []
    for (let j = ci + 1; j < nextCatCol && j < dataRow.length; j++) {
      const v = pct(dataRow[j])
      if (v > 0) vals.push(v)
      // 빈 셀은 건너뜀 (MoM 컬럼 등 사이에 빈 셀 있음)
    }
    if (vals.length) weeklyMap[id] = vals
  }
  if (!Object.keys(weeklyMap).length) {
    return {}
  }
  const weeklyLabels = findWeekLabels(rows, catRowIdx, sectionEnd)
    || Object.values(weeklyMap)[0]?.map((_, i) => `W${i + 1}`) || []
  return { weeklyMap, weeklyLabels }
}

function sliceWeeklyData(weeklyAll, weeklyMap, start) {
  for (const prod of Object.values(weeklyAll)) {
    for (const cnty of Object.values(prod)) {
      for (const [brand, vals] of Object.entries(cnty)) {
        cnty[brand] = vals.slice(start)
      }
    }
  }
  for (const [key, vals] of Object.entries(weeklyMap)) {
    weeklyMap[key] = vals.slice(start)
  }
}

function parseWeekly(rows, div) {
  const weeklyMap = {}
  let weeklyLabels = []

  // ── 헤더 탐색 전략 ──
  // 시트 구조:
  //   Row A (선택): [시트 제목] — 건너뜀
  //   Row B: Product | Country | B/NB | Brand | W6     | W7     | ... (주차 라벨)
  //   Row C: (선택)  |         |      |       | 2/2~2/8| 2/9~2/15| ... (날짜 범위)
  //   Row D+: TV     | (Total) | NB   | LG    | 85.5%  | 85.7%  | ...

  // 1) W패턴 행 찾기 (주차 라벨 행)
  let wLabelRowIdx = -1
  for (let i = 0; i < Math.min(rows.length, 10); i++) {
    const r = rows[i]
    if (!r) continue
    let wCount = 0
    for (let j = 0; j < r.length; j++) {
      if (/^w\d+$/i.test(String(r[j] || '').trim())) wCount++
    }
    if (wCount >= 2) { wLabelRowIdx = i; break }
  }

  // 2) Product/Category 행 찾기 (데이터 시작점)
  let headerIdx = rows.findIndex(r => {
    const first5 = r.slice(0, 5).map(c => String(c || '').trim().toLowerCase())
    return first5.includes('category') || first5.includes('product')
  })
  // W라벨 행이 Product 행과 같으면 그대로, 다르면 Product 행이 데이터 헤더
  if (headerIdx < 0 && wLabelRowIdx >= 0) headerIdx = wLabelRowIdx
  // 3차: 'lg' 컬럼
  if (headerIdx < 0) {
    headerIdx = rows.findIndex(r => {
      let hasLG = false, textCount = 0
      for (let i = 0; i < Math.min(r.length, 10); i++) {
        const s = String(r[i] || '').trim()
        if (s.toUpperCase() === 'LG') { hasLG = true; textCount++ }
        else if (s && isNaN(parseFloat(s))) textCount++
      }
      return hasLG && textCount >= 3
    })
  }
  if (headerIdx < 0) {
    return parseDashboardLayout(rows, div)
  }

  const header = rows[headerIdx]
  // 데이터: 주차 라벨 행과 날짜 행을 건너뛰고 실제 데이터만
  const dataStartRow = headerIdx + 1
  // 날짜 행 감지: headerIdx 바로 아래 행이 날짜 범위(숫자/슬래시 패턴)이면 건너뜀
  let dateRangeRow = null
  if (rows[dataStartRow]) {
    const sample = rows[dataStartRow].slice(4, 8).map(c => String(c || '').trim()).filter(Boolean)
    if (sample.length && sample.every(s => /^\d{1,2}\/\d{1,2}/.test(s) || /~/.test(s) || /^\(/.test(s))) {
      dateRangeRow = dataStartRow
    }
  }
  const actualDataStart = dateRangeRow != null ? dateRangeRow + 1 : dataStartRow
  const data = rows.slice(actualDataStart).filter(r => r[0] != null && String(r[0]).trim())

  const catIdx = header.findIndex(c => {
    const s = String(c || '').trim().toLowerCase()
    return s === 'category' || s === 'product'
  })
  const countryIdx = header.findIndex(c => { const s = String(c || '').trim().toLowerCase(); return s === 'country' || s === 'county' })
  const brandIdx = header.findIndex(c => String(c || '').trim().toLowerCase() === 'brand')
  const lgIdx = header.findIndex(c => String(c || '').trim().toUpperCase() === 'LG')

  // ── 주차 컬럼 찾기 ──
  // 우선: W라벨 행에서 추출 (별도 행인 경우)
  // 차선: header 행 자체에서 추출
  const wCols = []
  const wLabelSource = wLabelRowIdx >= 0 ? rows[wLabelRowIdx] : header
  for (let i = 0; i < wLabelSource.length; i++) {
    if (/^w\d+$/i.test(String(wLabelSource[i] || '').trim())) wCols.push(i)
  }
  // 폴백: 줄바꿈 형태도 시도 (이전 호환)
  if (!wCols.length) {
    for (let i = 0; i < header.length; i++) {
      const firstLine = String(header[i] || '').split(/\n/)[0].trim()
      if (/^w\d+/i.test(firstLine)) wCols.push(i)
    }
  }

  // 라벨 추출
  weeklyLabels = wCols.map(i => String(wLabelSource[i] || '').trim().toUpperCase())

  // 날짜 범위 포함 Full 라벨: W6(2/2~2/8) 형태
  let weeklyLabelsFull = wCols.map((colIdx, idx) => {
    const wNum = weeklyLabels[idx] || `W${colIdx}`
    // 날짜 범위: dateRangeRow 또는 headerIdx+1 행에서 추출
    let dateRange = ''
    const drRow = dateRangeRow != null ? rows[dateRangeRow] : (wLabelRowIdx !== headerIdx && wLabelRowIdx >= 0 ? rows[wLabelRowIdx + 1] : null)
    if (drRow) {
      const dr = String(drRow[colIdx] || '').trim()
      if (dr && /\d/.test(dr)) dateRange = dr.startsWith('(') ? dr : `(${dr})`
    }
    return dateRange ? `${wNum}${dateRange}` : wNum
  })

  console.log(`[parseWeekly:${div}] wLabelRow:${wLabelRowIdx} headerIdx:${headerIdx} dateRangeRow:${dateRangeRow} wCols:${wCols.length} labels:`, weeklyLabels.slice(0, 5), 'full:', weeklyLabelsFull.slice(-2))

  // Country 필터 헬퍼 — (Total), TTL 모두 허용
  function isTotal(r) {
    if (countryIdx < 0) return true
    const c = String(r[countryIdx] || '').replace(/[()]/g, '').trim().toUpperCase()
    return c === 'TOTAL' || c === 'TTL' || c === ''
  }

  // B/NB 필터 — NonBrand만 사용 (Brand는 브랜드 검색 쿼리라 점수가 과도하게 높음)
  const bnbIdx = header.findIndex(c => {
    const s = String(c || '').trim().toLowerCase().replace(/[\s_-]/g, '')
    return s === 'b/nb' || s === 'bnb' || s === 'brand/nonbrand'
  })
  function isNonBrand(r) {
    if (bnbIdx < 0) return true
    const v = String(r[bnbIdx] || '').trim().toLowerCase().replace(/[\s_-]/g, '')
    return v === 'nonbrand' || v === 'nb'
  }

  const weeklyAll = {}
  if (brandIdx >= 0) {
    // wCols가 비어있으면 첫 LG NonBrand 데이터 행에서 데이터 컬럼 자동 감지
    if (!wCols.length) {
      const firstLg = data.find(r =>
        String(r[brandIdx] || '').trim().toUpperCase() === 'LG' && isNonBrand(r)
      )
      if (firstLg) {
        for (let i = brandIdx + 1; i < firstLg.length; i++) {
          const v = String(firstLg[i] || '').trim()
          if (v) wCols.push(i)
          else if (wCols.length) break
        }
        weeklyLabels = findWeekLabels(rows, 0, headerIdx + 1) || wCols.map((_, i) => `W${i + 1}`)
      }
    }
    // 모든 브랜드 NonBrand 데이터 수집 (트렌드 차트용)
    data.forEach(r => {
      if (!isNonBrand(r)) return
      const brand = String(r[brandIdx] || '').trim()
      if (!brand) return
      const cat = String(r[catIdx >= 0 ? catIdx : 0] || '').trim()
      if (!cat) return
      const prodId = CATEGORY_ID_MAP[cat] || cat.toLowerCase()
      const rawCnty = countryIdx >= 0 ? normCountry(r[countryIdx]) : 'TOTAL'
      const cnty = rawCnty === 'TOTAL' || rawCnty === 'TTL' || !rawCnty ? 'Total' : rawCnty
      if (!weeklyAll[prodId]) weeklyAll[prodId] = {}
      if (!weeklyAll[prodId][cnty]) weeklyAll[prodId][cnty] = {}
      weeklyAll[prodId][cnty][brand] = wCols.map(c => pctOrNull(r[c]))
    })
    // LG Total만 추출 (기존 weeklyMap 호환)
    data.forEach(r => {
      const brand = String(r[brandIdx] || '').trim().toUpperCase()
      if (brand !== 'LG') return
      if (!isNonBrand(r)) return
      if (!isTotal(r)) return
      const cat = String(r[catIdx >= 0 ? catIdx : 0] || '').trim()
      if (!cat) return
      weeklyMap[CATEGORY_ID_MAP[cat] || cat.toLowerCase()] = wCols.map(c => pctOrNull(r[c]))
    })
  } else if (lgIdx >= 0) {
    // Format: Div, Week/Date, Country, Category, LG, ...
    const dateIdx = header.findIndex(c => {
      const s = String(c || '').trim().toLowerCase()
      return s === 'date' || s === 'week' || s === 'period'
    })
    const byCategory = {}
    const weekLabelOrder = []
    data.forEach(r => {
      if (!isTotal(r)) return
      const cat = String(r[catIdx >= 0 ? catIdx : 3] || '').trim()
      if (!cat) return
      if (dateIdx >= 0) {
        const wl = String(r[dateIdx] || '').trim()
        if (wl && !weekLabelOrder.includes(wl)) weekLabelOrder.push(wl)
      }
      byCategory[cat] = byCategory[cat] || []
      byCategory[cat].push(pctOrNull(r[lgIdx]))
    })
    Object.entries(byCategory).forEach(([cat, vals]) => {
      weeklyMap[CATEGORY_ID_MAP[cat] || cat.toLowerCase()] = vals
    })
    if (weekLabelOrder.length) weeklyLabels = weekLabelOrder
  } else if (wCols.length) {
    // Format: Category, w1, w2, w3, w4
    data.forEach(r => {
      if (!isTotal(r)) return
      const cat = String(r[catIdx >= 0 ? catIdx : 0] || '').trim()
      if (!cat) return
      weeklyMap[CATEGORY_ID_MAP[cat] || cat.toLowerCase()] = wCols.map(c => pctOrNull(r[c]))
    })
  }

  // ── 앞쪽 빈 주차 제거 & 최대 12주 제한 (단일 패스) ──
  if (weeklyLabels.length > 0) {
    // 첫 데이터가 있는 주차 인덱스 탐색
    let firstDataIdx = weeklyLabels.length
    for (const prod of Object.values(weeklyAll)) {
      for (const cnty of Object.values(prod)) {
        for (const vals of Object.values(cnty)) {
          const idx = vals.findIndex(v => v != null)
          if (idx >= 0 && idx < firstDataIdx) firstDataIdx = idx
        }
      }
    }
    for (const vals of Object.values(weeklyMap)) {
      const idx = vals.findIndex(v => v != null)
      if (idx >= 0 && idx < firstDataIdx) firstDataIdx = idx
    }

    // 최종 슬라이스 범위 계산: leading trim + 12주 제한 합산
    const MAX_WEEKS = 12
    const trimmedLen = weeklyLabels.length - firstDataIdx
    const start = trimmedLen > MAX_WEEKS ? weeklyLabels.length - MAX_WEEKS : firstDataIdx
    if (start > 0 && start < weeklyLabels.length) {
      weeklyLabels = weeklyLabels.slice(start)
      weeklyLabelsFull = weeklyLabelsFull.slice(start)
      sliceWeeklyData(weeklyAll, weeklyMap, start)
    }
  }

  if (Object.keys(weeklyMap).length) {
    const result = { weeklyMap }
    if (weeklyLabels.length) result.weeklyLabels = weeklyLabels
    if (weeklyLabelsFull.length) result.weeklyLabelsFull = weeklyLabelsFull
    if (Object.keys(weeklyAll).length) result.weeklyAll = weeklyAll
    return result
  }
  // 표준 파싱 실패 시 대시보드 레이아웃 fallback
  return parseDashboardLayout(rows, div)
}

function parseCitPageType(rows) {
  // 헤더: Country, Page Type, Feb LG, Feb SS, Mar LG, Mar SS, ...
  // [Section Title] 형태의 제목 행은 건너뜀
  const headerIdx = rows.findIndex(r => {
    const hasKeyword = r.some(c => { const s = String(c || '').trim().toLowerCase(); return s.includes('page type') || s === 'country' })
    if (!hasKeyword) return false
    const isTitleRow = r.some(c => /^\[.*\]$/.test(String(c || '').trim()))
    return !isTitleRow
  })
  if (headerIdx < 0) return {}

  const header = rows[headerIdx]

  // LG/SS 컬럼 페어 찾기
  const monthPairs = []
  for (let i = 2; i < header.length; i++) {
    const h = String(header[i] || '').trim()
    if (/\bLG\b/i.test(h)) {
      const ssCol = i + 1
      if (ssCol < header.length && /\bSS\b|\bSAMSUNG\b/i.test(String(header[ssCol] || ''))) {
        monthPairs.push({ lg: i, ss: ssCol })
      }
    }
  }
  if (!monthPairs.length) monthPairs.push({ lg: 2, ss: 3 })

  const data = rows.slice(headerIdx + 1).filter(r => r[0] != null && String(r[0]).trim())

  // 최신 월 데이터가 있는 페어 찾기
  let bestPair = monthPairs[0]
  for (let i = monthPairs.length - 1; i >= 0; i--) {
    if (data.some(r => numVal(r[monthPairs[i].lg]) > 0)) { bestPair = monthPairs[i]; break }
  }
  // 선택된 페어에 데이터가 없으면, 헤더 라벨 없는 컬럼에서 데이터 찾기 (col 2-3 폴백)
  if (!data.some(r => numVal(r[bestPair.lg]) > 0)) {
    // 오른쪽에서 왼쪽으로 데이터가 있는 연속 2컬럼 찾기
    for (let i = Math.min(bestPair.lg, header.length) - 1; i >= 2; i--) {
      if (data.some(r => numVal(r[i]) > 0)) { bestPair = { lg: i - 1, ss: i }; break }
    }
  }

  const lg = {}, samsung = {}
  const dotcomByCnty = {}  // { cnty: { lg: {...}, samsung: {...} } }
  const CNTY_ALIAS = { 'TOTAL':'TTL', '미국':'US', '캐나다':'CA', '영국':'UK', '독일':'DE', '스페인':'ES', '브라질':'BR', '멕시코':'MX', '인도':'IN', '호주':'AU', '베트남':'VN' }
  const _ptSeenCountries = new Set()

  // 월 이름 추출: "Feb LG" → "Feb"
  const MONTH_NAMES = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
  const monthLabels = monthPairs.map(mp => {
    const h = String(header[mp.lg] || '').trim()
    const m = h.match(/(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/i)
    return m ? m[1].charAt(0).toUpperCase() + m[1].slice(1).toLowerCase() : h.replace(/\s*LG\s*/i, '').trim()
  })

  // dotcom 월간 트렌드: { pageType: { month: { lg: val, samsung: val } } }
  const dotcomTrend = {}

  data.forEach(r => {
    const rawCountry = normCountry(r[0])
    const pageType = String(r[1] || '').replace(/[()]/g, '').trim()

    let key = /page total|^ttl$/i.test(pageType) ? 'TTL' : pageType
    if (key.toLowerCase() === 'microsite') key = 'Microsites'

    const cnty = CNTY_ALIAS[rawCountry] || rawCountry.toUpperCase()
    _ptSeenCountries.add(cnty)

    // 최신 월(bestPair)로 기존 dotcom 구성
    const lgVal = numVal(r[bestPair.lg])
    const ssVal = numVal(r[bestPair.ss])
    if (cnty === 'TTL') {
      lg[key] = (lg[key] || 0) + lgVal
      samsung[key] = (samsung[key] || 0) + ssVal
    } else {
      if (!dotcomByCnty[cnty]) dotcomByCnty[cnty] = { lg: {}, samsung: {} }
      dotcomByCnty[cnty].lg[key] = (dotcomByCnty[cnty].lg[key] || 0) + lgVal
      dotcomByCnty[cnty].samsung[key] = (dotcomByCnty[cnty].samsung[key] || 0) + ssVal
    }

    // 모든 월 트렌드 수집 (TTL만)
    if (cnty === 'TTL') {
      if (!dotcomTrend[key]) dotcomTrend[key] = {}
      monthPairs.forEach((mp, mi) => {
        const lv = numVal(r[mp.lg])
        const sv = numVal(r[mp.ss])
        if (lv > 0 || sv > 0) {
          const mLabel = monthLabels[mi] || `M${mi + 1}`
          dotcomTrend[key][mLabel] = { lg: (dotcomTrend[key][mLabel]?.lg || 0) + lv, samsung: (dotcomTrend[key][mLabel]?.samsung || 0) + sv }
        }
      })
    }
  })

  // 유효한 월만 필터 (Jan~Dec 순서 정렬)
  const allMonths = new Set()
  Object.values(dotcomTrend).forEach(m => Object.keys(m).forEach(k => allMonths.add(k)))
  const dotcomTrendMonths = MONTH_NAMES.filter(m => allMonths.has(m))

  // 월별 dotcom 데이터 보존 (기간 필터용) — 0 값은 누적하지 않음(빈 카드 방지)
  const dotcomByMonth = {}
  const dotcomByCntyByMonth = {}
  monthPairs.forEach((mp, mi) => {
    const mLabel = monthLabels[mi]
    if (!mLabel) return
    const mLg = {}, mSam = {}
    data.forEach(r => {
      const rawCountry = normCountry(r[0])
      const pageType = String(r[1] || '').replace(/[()]/g, '').trim()
      let key = /page total|^ttl$/i.test(pageType) ? 'TTL' : pageType
      if (key.toLowerCase() === 'microsite') key = 'Microsites'
      const cnty = CNTY_ALIAS[rawCountry] || rawCountry.toUpperCase()
      const lv = numVal(r[mp.lg])
      const sv = numVal(r[mp.ss])
      if (lv <= 0 && sv <= 0) return  // 해당 월 행에 값 없음 → 스킵
      if (cnty === 'TTL') {
        if (lv > 0) mLg[key] = (mLg[key] || 0) + lv
        if (sv > 0) mSam[key] = (mSam[key] || 0) + sv
      } else {
        if (!dotcomByCntyByMonth[mLabel]) dotcomByCntyByMonth[mLabel] = {}
        if (!dotcomByCntyByMonth[mLabel][cnty]) dotcomByCntyByMonth[mLabel][cnty] = { lg: {}, samsung: {} }
        if (lv > 0) dotcomByCntyByMonth[mLabel][cnty].lg[key] = (dotcomByCntyByMonth[mLabel][cnty].lg[key] || 0) + lv
        if (sv > 0) dotcomByCntyByMonth[mLabel][cnty].samsung[key] = (dotcomByCntyByMonth[mLabel][cnty].samsung[key] || 0) + sv
      }
    })
    if (Object.keys(mLg).length) dotcomByMonth[mLabel] = { lg: mLg, samsung: mSam }
  })
  // byCntyByMonth에서 lg/samsung 모두 빈 country 항목 정리 (0값으로 초기화됐을 수도 있음)
  Object.keys(dotcomByCntyByMonth).forEach(m => {
    Object.keys(dotcomByCntyByMonth[m]).forEach(c => {
      const e = dotcomByCntyByMonth[m][c]
      const hasData = Object.values(e.lg).some(v => v > 0) || Object.values(e.samsung).some(v => v > 0)
      if (!hasData) delete dotcomByCntyByMonth[m][c]
    })
    if (!Object.keys(dotcomByCntyByMonth[m]).length) delete dotcomByCntyByMonth[m]
  })

  const result = {}
  if (lg.TTL || Object.keys(lg).length) result.dotcom = { lg, samsung, byMonth: dotcomByMonth, byCntyByMonth: dotcomByCntyByMonth }
  if (Object.keys(dotcomByCnty).length) result.dotcomByCnty = dotcomByCnty
  if (Object.keys(dotcomTrend).length && dotcomTrendMonths.length) {
    result.dotcomTrend = dotcomTrend
    result.dotcomTrendMonths = dotcomTrendMonths
  }
  return result
}

function parseCitTouchPoints(rows) {
  // 헤더: (empty), Country, Channel, Feb, Mar, ... 또는 Country, Channel, Feb, ...
  // [Section Title] 형태의 제목 행은 건너뜀
  const headerIdx = rows.findIndex(r => {
    const hasKeyword = r.some(c => { const s = String(c || '').trim().toLowerCase(); return s === 'channel' || s === 'country' })
    if (!hasKeyword) return false
    const isTitleRow = r.some(c => /^\[.*\]$/.test(String(c || '').trim()))
    return !isTitleRow
  })
  const header = headerIdx >= 0 ? rows[headerIdx] : []
  const startRow = (headerIdx >= 0 ? headerIdx : 0) + 1

  // 컬럼 레이아웃
  let countryCol = -1, channelCol = -1, prdCol = -1, dataStartCol = 2
  for (let i = 0; i < header.length; i++) {
    const s = String(header[i] || '').trim().toLowerCase()
    if (s === 'country' && countryCol < 0) countryCol = i
    if (s === 'channel' && channelCol < 0) channelCol = i
    if (s === 'prd' && prdCol < 0) prdCol = i
  }
  if (countryCol >= 0 && channelCol >= 0) {
    dataStartCol = Math.max(countryCol, channelCol, prdCol) + 1
  } else {
    // 첫 열이 비어있으면 col0=empty, col1=country, col2=channel, col3+=data
    const firstDataRow = rows[startRow]
    if (firstDataRow && !String(firstDataRow[0] || '').trim()) {
      countryCol = 1; channelCol = 2; dataStartCol = 3
    } else {
      countryCol = 0; channelCol = 1; dataStartCol = 2
    }
  }

  // 월 라벨을 canonical 짧은 이름으로 정규화 ('Apr 2026' / '4월' / 'April' → 'Apr')
  // 클라이언트/SSR 필터가 'Apr' 키로 조회하므로 raw 헤더 텍스트 유지 시 monthScores 매칭 실패함
  const MONTHS_ORDER = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
  function canonMonth(raw) {
    const s = String(raw || '').trim().toLowerCase()
    if (!s) return null
    const km = s.match(/^(\d{1,2})월/)
    if (km) {
      const n = parseInt(km[1])
      if (n >= 1 && n <= 12) return MONTHS_ORDER[n - 1]
    }
    const em = s.match(/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i)
    if (em) return em[1].charAt(0).toUpperCase() + em[1].slice(1).toLowerCase()
    return null
  }

  // 월 라벨 추출 — 헤더 행 + (필요시) 헤더 바로 위 행
  const monthLabels = []  // { col, label: 'Apr' (canonical) }
  const seenCols = new Set()
  for (let i = dataStartCol; i < header.length; i++) {
    const cm = canonMonth(header[i])
    if (cm && !seenCols.has(i)) { monthLabels.push({ col: i, label: cm }); seenCols.add(i) }
  }
  if (headerIdx > 0) {
    const monthRow = rows[headerIdx - 1]
    if (monthRow) {
      for (let i = dataStartCol; i < monthRow.length; i++) {
        const cm = canonMonth(monthRow[i])
        if (cm && !seenCols.has(i)) { monthLabels.push({ col: i, label: cm }); seenCols.add(i) }
      }
    }
  }

  // 라벨 없는 데이터 컬럼 역산 — 첫 라벨된 월의 인덱스에서 거꾸로 세기
  // 빈 열이 많은 경우 데이터 있는 컬럼만 카운트해서 한 칸씩 어긋날 수 있음 → 연속된 모든 컬럼 사용
  if (monthLabels.length > 0) {
    monthLabels.sort((a, b) => a.col - b.col)
    const firstLabeled = monthLabels[0]
    const firstMonthIdx = MONTHS_ORDER.indexOf(firstLabeled.label)
    if (firstMonthIdx > 0 && firstLabeled.col > dataStartCol) {
      const gap = firstLabeled.col - dataStartCol  // 빈 칸 포함 모든 컬럼
      for (let k = 1; k <= gap; k++) {
        const targetCol = firstLabeled.col - k
        if (seenCols.has(targetCol)) continue
        const mi = firstMonthIdx - k
        if (mi < 0) break
        monthLabels.push({ col: targetCol, label: MONTHS_ORDER[mi] })
        seenCols.add(targetCol)
      }
    }
  }
  // 월 순 (chronological)으로 정렬 — score 역순 iteration이 "최신 월" 의미를 갖도록
  monthLabels.sort((a, b) => MONTHS_ORDER.indexOf(a.label) - MONTHS_ORDER.indexOf(b.label))

  const data = rows.slice(startRow).filter(r => r.some(c => c != null && String(c).trim()))
  const citations = []
  // 월간 트렌드 데이터: { channelName: { month1: score, month2: score, ... } }
  const citTouchPointsTrend = {}

  // 국가별 카테고리 Citation 수집
  const citationsByCnty = {}   // { cnty: [{ source, score, ... }] }
  // 제품별 카테고리 — TTL 행 우선, 없으면 비TTL 국가 합산
  const citationsByPrdTtl = {}  // { prd: [{ source, score, monthScores }] } — TTL 행 직접
  const citationsByPrdAgg = {}  // { prd: { channel: { source, score, monthScores } } } — 비TTL 합산

  const _seenCountries = new Set()

  data.forEach(r => {
    const country = normCountry(r[countryCol])
    const channel = String(r[channelCol] || '').replace(/[()]/g, '').trim()
    const prd = prdCol >= 0 ? String(r[prdCol] || '').trim() : ''
    // 빈 행 / 헤더 잔재 / 채널만 빈 행 스킵
    if (!country || !channel) return
    if (channel.toLowerCase() === 'total') return
    _seenCountries.add(country)

    // 모든 월별 데이터 수집 (monthLabels 컬럼만 — dataStartCol+ 무차별 fallback 제거)
    const monthScores = {}
    monthLabels.forEach(({ col, label }) => {
      const val = numVal(r[col])
      if (val > 0) monthScores[label] = val
    })

    // 최신 월 score: chronologically 마지막부터 거꾸로 (monthLabels 이미 chronological 정렬)
    let score = 0
    for (let i = monthLabels.length - 1; i >= 0; i--) {
      const v = monthScores[monthLabels[i].label]
      if (v && v > 0) { score = v; break }
    }

    if (country === 'TTL' || country === 'TOTAL') {
      if (score > 0) citations.push({ source: channel, category: '', score, delta: 0, ratio: 0, monthScores })
      if (Object.keys(monthScores).length > 0) {
        citTouchPointsTrend[channel] = monthScores
      }
      // 제품별 TTL 행
      if (prd && score > 0) {
        if (!citationsByPrdTtl[prd]) citationsByPrdTtl[prd] = []
        citationsByPrdTtl[prd].push({ source: channel, category: '', score, delta: 0, ratio: 0, monthScores })
      }
    } else if (score > 0) {
      if (!citationsByCnty[country]) citationsByCnty[country] = []
      citationsByCnty[country].push({ source: channel, category: '', score, delta: 0, ratio: 0, monthScores })
      // 제품별 비TTL 행 — channel 기준 합산 (AU/VN 등 국가별 PRD 입력 케이스)
      if (prd) {
        if (!citationsByPrdAgg[prd]) citationsByPrdAgg[prd] = {}
        if (!citationsByPrdAgg[prd][channel]) {
          citationsByPrdAgg[prd][channel] = { source: channel, category: '', score: 0, delta: 0, ratio: 0, monthScores: {} }
        }
        const agg = citationsByPrdAgg[prd][channel]
        agg.score += score
        Object.entries(monthScores).forEach(([m, v]) => {
          agg.monthScores[m] = (agg.monthScores[m] || 0) + v
        })
      }
    }
  })

  // 제품별 최종 — TTL 우선, 없으면 비TTL 합산
  const citationsByPrd = {}
  const allPrds = new Set([...Object.keys(citationsByPrdTtl), ...Object.keys(citationsByPrdAgg)])
  allPrds.forEach(prd => {
    let list = citationsByPrdTtl[prd]
    if (!list || !list.length) list = Object.values(citationsByPrdAgg[prd] || {})
    if (list && list.length) citationsByPrd[prd] = list
  })

  const total = citations.reduce((s, c) => s + c.score, 0)
  citations.sort((a, b) => b.score - a.score)
  citations.forEach((c, i) => {
    c.rank = i + 1
    c.ratio = total > 0 ? +((c.score / total) * 100).toFixed(1) : 0
  })

  // 국가별 citations도 순위 계산
  for (const [cnty, list] of Object.entries(citationsByCnty)) {
    const cntyTotal = list.reduce((s, c) => s + c.score, 0)
    list.sort((a, b) => b.score - a.score)
    list.forEach((c, i) => {
      c.rank = i + 1
      c.ratio = cntyTotal > 0 ? +((c.score / cntyTotal) * 100).toFixed(1) : 0
    })
  }
  // 제품별 citations 순위 계산
  for (const [prd, list] of Object.entries(citationsByPrd)) {
    const prdTotal = list.reduce((s, c) => s + c.score, 0)
    list.sort((a, b) => b.score - a.score)
    list.forEach((c, i) => {
      c.rank = i + 1
      c.ratio = prdTotal > 0 ? +((c.score / prdTotal) * 100).toFixed(1) : 0
    })
  }

  // 유효한 월 라벨만 필터링 (데이터가 있는 월)
  const validMonths = monthLabels.map(m => m.label).filter(label =>
    Object.values(citTouchPointsTrend).some(d => d[label] > 0)
  )

  for (const [cnty, list] of Object.entries(citationsByCnty)) {
  }

  // 기본 월 자동 감지 → derivedPeriod
  // 최신 월의 데이터 양(채널 개수)이 직전 월의 50% 미만이면 직전 월을 기본으로
  // (예: 4월이 일부만 입력된 상태면 3월을 기본으로 보여줌)
  const MONTHS_EN = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
  let citDerivedPeriod = null
  if (validMonths.length > 0) {
    const monthChannelCount = {}
    Object.values(citTouchPointsTrend).forEach(ms => {
      Object.entries(ms).forEach(([m, v]) => { if (v > 0) monthChannelCount[m] = (monthChannelCount[m] || 0) + 1 })
    })
    let pickMonth = validMonths[validMonths.length - 1]
    if (validMonths.length >= 2) {
      const lastCount = monthChannelCount[pickMonth] || 0
      const prevMonth = validMonths[validMonths.length - 2]
      const prevCount = monthChannelCount[prevMonth] || 0
      if (prevCount > 0 && lastCount < prevCount * 0.5) pickMonth = prevMonth
    }
    const mIdx = MONTHS_EN.findIndex(m => pickMonth.toLowerCase().startsWith(m.toLowerCase()))
    if (mIdx >= 0) citDerivedPeriod = `${MONTHS_EN[mIdx]} ${new Date().getFullYear()}`
  }

  const result = {}
  if (citations.length > 0) result.citations = citations
  if (Object.keys(citationsByCnty).length > 0) result.citationsByCnty = citationsByCnty
  if (Object.keys(citationsByPrd).length > 0) result.citationsByPrd = citationsByPrd
  if (Object.keys(citTouchPointsTrend).length > 0) {
    result.citTouchPointsTrend = citTouchPointsTrend
    result.citTrendMonths = validMonths
  }
  if (citDerivedPeriod) result.citDerivedPeriod = citDerivedPeriod
  return result
}

function parseCitDomain(rows) {
  // 새 구조: No | Region | Domain | Type | Feb | Mar | Apr | ...
  // Region: Global(=TTL), US, CA, UK 등 인라인 국가
  const REGION_MAP = { 'GLOBAL': 'TTL', 'TOTAL': 'TTL', '미국':'US','캐나다':'CA','영국':'UK','독일':'DE','스페인':'ES','브라질':'BR','멕시코':'MX','인도':'IN','호주':'AU','베트남':'VN' }
  const COUNTRIES = ['US','CA','UK','DE','ES','BR','MX','AU','VN','IN','TTL','GLOBAL']
  const MONTH_RE = /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|[0-9]{1,2}월)/i

  // 헤더 행 찾기 — No/Region/PRD 또는 Domain 키워드가 있는 행
  let headerRow = null
  let startIdx = 0
  let noCol = -1, regionCol = -1, domainCol = -1, typeCol = -1, prdCol = -1, dataStartCol = 4

  for (let i = 0; i < Math.min(rows.length, 10); i++) {
    const r = rows[i]
    if (!r) continue
    const hasNo = r.some(c => /^no$/i.test(String(c || '').trim()))
    const hasRegion = r.some(c => /^region$/i.test(String(c || '').trim()))
    const hasDomain = r.some(c => /domain|domian/i.test(String(c || '').trim()))
    const hasPrd = r.some(c => /^prd$/i.test(String(c || '').trim()))
    if (hasNo || hasRegion || hasDomain || hasPrd) {
      headerRow = r
      startIdx = i + 1
      for (let j = 0; j < r.length; j++) {
        const s = String(r[j] || '').trim().toLowerCase()
        if (s === 'prd' && prdCol < 0) prdCol = j
        if (s === 'no' && noCol < 0) noCol = j
        if (s === 'region' && regionCol < 0) regionCol = j
        if ((s === 'domain' || s === 'domian') && domainCol < 0) domainCol = j
        if (s === 'type' && typeCol < 0) typeCol = j
      }
      break
    }
    if (String(r[0] || '').trim().startsWith('[') || !String(r[0] || '').trim()) {
      startIdx = i + 1
    }
  }

  // 새 구조 감지 (PRD 컬럼 추가 케이스 포함):
  //   v1: No | Region | Domain | Type | Data
  //   v2: PRD | No | Region | Domain | Type | Data ← 2026-05 시트 변경
  // 헤더에서 검출된 위치를 그대로 사용하되, 누락 시에만 v1 기준 폴백.
  const isNewLayout = noCol >= 0 || regionCol >= 0 || prdCol >= 0
  if (isNewLayout) {
    if (regionCol < 0) regionCol = noCol >= 0 ? noCol + 1 : (prdCol >= 0 ? prdCol + 2 : 1)
    if (domainCol < 0) domainCol = regionCol + 1
    if (typeCol < 0) typeCol = domainCol + 1
    dataStartCol = Math.max(domainCol, typeCol) + 1
  } else if (domainCol >= 0) {
    // 이전 구조: Domain, Type, Data...
    typeCol = domainCol + 1
    dataStartCol = domainCol + 2
  } else {
    // 폴백: 첫 데이터 행에서 도메인(.포함)을 찾아 위치 결정
    for (let i = startIdx; i < Math.min(rows.length, startIdx + 5); i++) {
      const r = rows[i]
      if (!r) continue
      for (let j = 0; j < Math.min(r.length, 6); j++) {
        const v = String(r[j] || '').trim()
        if (v.includes('.') && v.length > 3 && !MONTH_RE.test(v)) {
          domainCol = j; typeCol = j + 1; dataStartCol = j + 2
          break
        }
      }
      if (domainCol >= 0) break
    }
    if (domainCol < 0) { domainCol = 0; typeCol = 1; dataStartCol = 2 }
  }

  // 월 라벨 추출 — 헤더 행의 dataStartCol 이후에서 월 패턴 탐색
  const domainMonthLabels = []
  if (headerRow) {
    for (let i = dataStartCol; i < headerRow.length; i++) {
      const h = String(headerRow[i] || '').trim()
      if (h && MONTH_RE.test(h)) domainMonthLabels.push({ col: i, label: h })
    }
  }

  const result = []
  const citDomainTrend = {}
  const cntyRanks = {}  // 국가별 순위 카운터
  let legacyCnty = 'TTL'  // 이전 구조용 국가 추적

  for (let i = startIdx; i < rows.length; i++) {
    const r = rows[i]
    if (!r) continue

    const domain = String(r[domainCol] || '').trim()
    const type = String(r[typeCol] || '').trim()

    // 이전 구조: 도메인 없는 행이 국가 마커일 수 있음
    if (!isNewLayout && (!domain || !domain.includes('.'))) {
      const cv = String(r[domainCol] || '').trim().toUpperCase()
      const cntyCode = REGION_MAP[cv] || (COUNTRIES.includes(cv) ? cv : null)
      if (cntyCode && (!type || type === '')) {
        legacyCnty = cntyCode
      }
      continue
    }
    if (!domain || !domain.includes('.')) continue

    // 국가 결정: 새 구조는 인라인 Region, 이전 구조는 구분자 행
    let cnty = 'TTL'
    if (isNewLayout && regionCol >= 0) {
      const rawRegion = String(r[regionCol] || '').trim().toUpperCase()
      cnty = REGION_MAP[rawRegion] || rawRegion
    } else if (!isNewLayout) {
      cnty = legacyCnty
    }

    // 최신 월 데이터
    let citations = 0
    if (domainMonthLabels.length > 0) {
      for (let j = domainMonthLabels.length - 1; j >= 0; j--) {
        const raw = String(r[domainMonthLabels[j].col] || '').replace(/,/g, '').trim()
        const val = parseFloat(raw)
        if (!isNaN(val) && val > 0) { citations = val; break }
      }
    } else {
      for (let j = r.length - 1; j >= dataStartCol; j--) {
        const raw = String(r[j] || '').replace(/,/g, '').trim()
        if (!raw) continue
        const val = parseFloat(raw)
        if (!isNaN(val) && val > 0) { citations = val; break }
      }
    }

    // 월별 트렌드 데이터 수집
    if (domainMonthLabels.length > 0) {
      const monthData = {}
      domainMonthLabels.forEach(({ col, label }) => {
        const raw = String(r[col] || '').replace(/,/g, '').trim()
        const val = parseFloat(raw)
        if (!isNaN(val) && val > 0) monthData[label] = val
      })
      if (Object.keys(monthData).length > 0) {
        const key = `${cnty}|${domain}`
        citDomainTrend[key] = { cnty, domain, type, months: monthData }
      }
    }

    // 월별 점수맵 (기간 필터용)
    const monthScores = {}
    if (domainMonthLabels.length > 0) {
      domainMonthLabels.forEach(({ col, label }) => {
        const raw = String(r[col] || '').replace(/,/g, '').trim()
        const val = parseFloat(raw)
        if (!isNaN(val) && val > 0) monthScores[label] = val
      })
    }

    if (citations > 0) {
      cntyRanks[cnty] = (cntyRanks[cnty] || 0) + 1
      result.push({ cnty, rank: cntyRanks[cnty], domain, type, citations, monthScores })
    }
  }

  const output = {}
  if (result.length > 0) output.citationsCnty = result
  if (Object.keys(citDomainTrend).length > 0) {
    output.citDomainTrend = citDomainTrend
    const validMonths = domainMonthLabels.map(m => m.label).filter(label =>
      Object.values(citDomainTrend).some(d => d.months[label] > 0)
    )
    output.citDomainMonths = validMonths
  }
  return output
}

// ─── PR Visibility 파서 (Monthly/Weekly 공용) ─────────────────────────────────
// 구조: Type | County | Topic | Brand | Feb/w5 | Mar/w6 | ...
function parsePRVisibility(rows, mode) {
  // mode: 'monthly' 또는 'weekly'
  // 헤더: Type, County, Topic, Brand, data columns...
  const headerIdx = rows.findIndex(r => {
    if (!r) return false
    return r.some(c => /^type$/i.test(String(c || '').trim())) &&
           r.some(c => /^county|^country$/i.test(String(c || '').trim()))
  })
  if (headerIdx < 0) return {}

  const header = rows[headerIdx]
  let typeCol = -1, countryCol = -1, topicCol = -1, brandCol = -1, dataStartCol = 4
  for (let i = 0; i < header.length; i++) {
    const s = String(header[i] || '').trim().toLowerCase()
    if (s === 'type' && typeCol < 0) typeCol = i
    if ((s === 'county' || s === 'country') && countryCol < 0) countryCol = i
    if ((s === 'topic' || s === 'topoc') && topicCol < 0) topicCol = i
    if (s === 'brand' && brandCol < 0) brandCol = i
  }
  dataStartCol = Math.max(typeCol, countryCol, topicCol, brandCol) + 1

  // 데이터 라벨 추출 (월 또는 주차)
  const MONTH_RE = /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|[0-9]{1,2}월)/i
  const WEEK_RE = /^w\d+/i
  const dataLabels = []
  // 헤더 행 및 주변 행(0~headerIdx)에서 라벨 탐색
  const labelSearchRows = [headerIdx]
  for (let ri = 0; ri <= headerIdx; ri++) { if (ri !== headerIdx) labelSearchRows.push(ri) }
  for (const ri of labelSearchRows) {
    if (dataLabels.length > 0) break
    const searchRow = rows[ri]
    if (!searchRow) continue
    for (let i = dataStartCol; i < searchRow.length; i++) {
      const h = String(searchRow[i] || '').split(/\n/)[0].trim()
      if (h && (MONTH_RE.test(h) || WEEK_RE.test(h))) dataLabels.push({ col: i, label: h })
    }
  }

  const data = rows.slice(headerIdx + 1)
  const prData = []  // { type, country, topic, brand, scores: {label: val}, latestScore }

  data.forEach(r => {
    if (!r) return
    const type = String(r[typeCol] || '').trim()
    const country = normCountry(r[countryCol])
    const topic = String(r[topicCol] || '').trim()
    const brand = String(r[brandCol] || '').trim()
    if (!topic || !brand) return

    const scores = {}
    let latestScore = 0
    dataLabels.forEach(({ col, label }) => {
      const val = pct(r[col])
      if (val > 0) {
        scores[label] = val
        latestScore = val
      }
    })

    if (Object.keys(scores).length > 0 || topic) {
      prData.push({ type, country, topic, brand, scores, latestScore })
    }
  })

  const key = mode === 'weekly' ? 'weeklyPR' : 'monthlyPR'
  const labelsKey = mode === 'weekly' ? 'weeklyPRLabels' : 'monthlyPRLabels'
  const result = {}
  if (prData.length > 0) result[key] = prData
  if (dataLabels.length > 0) result[labelsKey] = dataLabels.map(d => d.label)
  return result
}

// ─── Brand Prompt Visibility 파서 (Monthly/Weekly 공용) ──────────────────────
// 구조: Steakholders | Type | Country | Topoc | w5/Feb | w6/Mar | ...
function parseBrandPromptVisibility(rows, mode) {
  const headerIdx = rows.findIndex(r => {
    if (!r) return false
    return r.some(c => /steakholders|stakeholders/i.test(String(c || '').trim())) ||
           (r.some(c => /^type$/i.test(String(c || '').trim())) &&
            r.some(c => /topoc|topic/i.test(String(c || '').trim())))
  })
  if (headerIdx < 0) return {}

  const header = rows[headerIdx]
  let stakeholderCol = -1, typeCol = -1, countryCol = -1, topicCol = -1, dataStartCol = 4
  for (let i = 0; i < header.length; i++) {
    const s = String(header[i] || '').trim().toLowerCase()
    if ((s === 'steakholders' || s === 'stakeholders') && stakeholderCol < 0) stakeholderCol = i
    if (s === 'type' && typeCol < 0) typeCol = i
    if ((s === 'country' || s === 'county') && countryCol < 0) countryCol = i
    if ((s === 'topoc' || s === 'topic') && topicCol < 0) topicCol = i
  }
  dataStartCol = Math.max(stakeholderCol, typeCol, countryCol, topicCol) + 1

  const MONTH_RE = /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|[0-9]{1,2}월)/i
  const WEEK_RE = /^w\d+/i
  const dataLabels = []
  for (let i = dataStartCol; i < header.length; i++) {
    const h = String(header[i] || '').split(/\n/)[0].trim()
    if (h && (MONTH_RE.test(h) || WEEK_RE.test(h))) dataLabels.push({ col: i, label: h })
  }

  const data = rows.slice(headerIdx + 1)
  const bpData = []

  data.forEach(r => {
    if (!r) return
    const stakeholder = String(r[stakeholderCol] || '').trim()
    const type = String(r[typeCol] || '').trim()
    const country = normCountry(r[countryCol])
    const topic = String(r[topicCol] || '').trim()
    if (!topic || !stakeholder) return

    const scores = {}
    let latestScore = 0
    dataLabels.forEach(({ col, label }) => {
      const val = pct(r[col])
      if (val > 0) {
        scores[label] = val
        latestScore = val
      }
    })

    bpData.push({ stakeholder, type, country, topic, scores, latestScore })
  })

  const key = mode === 'weekly' ? 'weeklyBrandPrompt' : 'monthlyBrandPrompt'
  const labelsKey = mode === 'weekly' ? 'weeklyBrandPromptLabels' : 'monthlyBrandPromptLabels'
  const result = {}
  if (bpData.length > 0) result[key] = bpData
  if (dataLabels.length > 0) result[labelsKey] = dataLabels.map(d => d.label)
  return result
}

// ─── Appendix.Prompt List 파서 ──────────────────────────────────────────────
// 구조: (빈) | Country | Prompts | Division | Category | launched | Branded | CEJ | Topic
export function parseAppendix(rows) {
  // 헤더 찾기
  const headerIdx = rows.findIndex(r => {
    if (!r) return false
    return r.some(c => /^prompts?$/i.test(String(c || '').trim())) &&
           r.some(c => /^country$/i.test(String(c || '').trim()))
  })
  if (headerIdx < 0) return {}

  const header = rows[headerIdx]
  const colMap = {}
  const FIELDS = ['country', 'prompts', 'division', 'category', 'launched', 'branded', 'cej', 'topic']
  for (let i = 0; i < header.length; i++) {
    const s = String(header[i] || '').trim().toLowerCase()
    if (FIELDS.includes(s) && !colMap[s]) colMap[s] = i
  }

  const data = rows.slice(headerIdx + 1)
  const prompts = []

  data.forEach(r => {
    if (!r) return
    const prompt = String(r[colMap.prompts] || '').trim()
    if (!prompt) return
    prompts.push({
      country:  normCountry(r[colMap.country]),
      prompt,
      division: String(r[colMap.division] || '').trim(),
      category: String(r[colMap.category] || '').trim(),
      launched: String(r[colMap.launched] || '').trim(),
      branded:  String(r[colMap.branded] || '').trim(),
      cej:      String(r[colMap.cej] || '').trim(),
      topic:    String(r[colMap.topic] || '').trim(),
    })
  })

  return prompts.length > 0 ? { appendixPrompts: prompts } : {}
}

// ─── Unlaunched 시트 파서 ─────────────────────────────────────────────────────
function parseUnlaunched(rows) {
  // 헤더 탐색: country + (launched|status|launch) 콤보
  const headerIdx = rows.findIndex(r => {
    if (!r) return false
    const hasCountry = r.some(c => /^(country|county)$/i.test(String(c || '').trim()))
    const hasStatus = r.some(c => /^(launched|launch|launch\s*status|status|출시여부|출시)$/i.test(String(c || '').trim()))
    return hasCountry && hasStatus
  })
  if (headerIdx < 0) {
    console.warn('[parseUnlaunched] 헤더 못찾음. 시트 첫 10행:')
    rows.slice(0, 10).forEach((r, i) => console.log(`  row${i}:`, r?.slice(0, 6)))
    return {}
  }
  const header = rows[headerIdx]
  let countryCol = -1, categoryCol = -1, statusCol = -1, divisionCol = -1
  for (let i = 0; i < header.length; i++) {
    const s = String(header[i] || '').trim().toLowerCase()
    if (countryCol < 0 && (s === 'country' || s === 'county')) countryCol = i
    if (categoryCol < 0 && (s === 'category' || s === 'product' || s === '제품' || s === '카테고리')) categoryCol = i
    if (statusCol < 0 && /^(launched|launch|launch\s*status|status|출시여부|출시)$/i.test(s)) statusCol = i
    if (divisionCol < 0 && (s === 'division' || s === 'div' || s === 'bu' || s === '본부')) divisionCol = i
  }
  if (countryCol < 0 || categoryCol < 0 || statusCol < 0) {
    console.warn('[parseUnlaunched] 필수 컬럼 누락', { countryCol, categoryCol, statusCol, header })
    return {}
  }

  // unlaunched로 간주할 값 — 다양한 표현 허용
  const UNLAUNCHED_VALUES = new Set([
    'unlaunched', 'not launched', 'notlaunched', '미출시', 'no', 'n',
    'false', 'unlaunch', '미 출시', '미발매', 'not available', 'na',
  ])

  const unlaunchedMap = {}
  let totalRows = 0, matchedRows = 0
  rows.slice(headerIdx + 1).forEach(r => {
    if (!r) return
    const rawStatus = String(r[statusCol] || '').trim()
    if (!rawStatus) return
    totalRows++
    const status = rawStatus.toLowerCase().replace(/\s+/g, ' ')
    if (!UNLAUNCHED_VALUES.has(status) && !UNLAUNCHED_VALUES.has(status.replace(/\s/g, ''))) return
    // 시트 표기('GB','United Kingdom','USA','BRA' 등)를 표준 코드(UK/US/BR ...)로 정규화 →
    // 클라이언트 _isUnlaunched(cnty, prodId)가 'UK|AIRCARE' 키로 일관 조회 가능
    const country = canonicalCountry(r[countryCol])
    const rawCategory = String(r[categoryCol] || '').trim()
    if (!country || !rawCategory) return
    // category: UL_PROD_MAP 기준 코드로 정규화 (TV, IT, AV, WM, REF, DW, VC, COOKING, RAC, AIRCARE)
    // 원본도 저장 + 정규화 값도 저장 (매칭 유연성)
    const upperCat = rawCategory.toUpperCase()
    const NORMALIZE = {
      'TV': 'TV', 'MONITOR': 'IT', 'IT': 'IT', 'AUDIO': 'AV', 'AV': 'AV',
      'WASHER': 'WM', 'WM': 'WM', 'WASHING MACHINE': 'WM',
      'REFRIGERATOR': 'REF', 'REF': 'REF', 'FRIDGE': 'REF',
      'DISHWASHER': 'DW', 'DW': 'DW',
      'VACUUM': 'VC', 'VC': 'VC', 'VACUUM CLEANER': 'VC',
      'COOKING': 'COOKING', 'COOK': 'COOKING',
      'RAC': 'RAC', 'AIRCARE': 'AIRCARE', 'AIR CARE': 'AIRCARE',
      'STYLER': 'STYLER',
    }
    const normCat = NORMALIZE[upperCat] || upperCat
    unlaunchedMap[`${country}|${normCat}`] = true
    // 원본 값도 별도 키로 저장 (매칭 유연성)
    if (normCat !== upperCat) unlaunchedMap[`${country}|${upperCat}`] = true
    matchedRows++
  })
  console.log(`[parseUnlaunched] 총 ${totalRows}행 중 ${matchedRows}행 매칭 / 미출시 ${Object.keys(unlaunchedMap).length}건`)
  return Object.keys(unlaunchedMap).length > 0 ? { unlaunchedMap } : {}
}

// ─── PR Topic List 파서 ──────────────────────────────────────────────────────
// 구조: BU | Topic-대시보드 | Explanation | 기존 토픽 | Topic-row
// BU 빈 셀은 이전 BU 유지 (병합 셀)
function parsePRTopicList(rows) {
  const headerIdx = rows.findIndex(r =>
    r && r.some(c => /^bu$/i.test(String(c || '').trim())) &&
    r.some(c => /topic/i.test(String(c || '').trim()))
  )
  if (headerIdx < 0) return {}
  const header = rows[headerIdx]
  let buCol = -1, topicCol = -1, explCol = -1, oldTopicCol = -1, topicRowCol = -1
  for (let i = 0; i < header.length; i++) {
    const s = String(header[i] || '').trim().toLowerCase()
    if (buCol < 0 && s === 'bu') buCol = i
    if (topicCol < 0 && s.includes('topic') && s.includes('대시보드')) topicCol = i
    if (explCol < 0 && (s === 'explanation' || s === '설명')) explCol = i
    if (oldTopicCol < 0 && s.includes('기존')) oldTopicCol = i
    if (topicRowCol < 0 && s.includes('topic') && s.includes('row')) topicRowCol = i
  }
  if (topicCol < 0) topicCol = 1
  if (explCol < 0) explCol = 2

  const prTopicList = []
  let lastBU = ''
  rows.slice(headerIdx + 1).forEach(r => {
    if (!r) return
    const bu = String(r[buCol] || '').trim()
    if (bu) lastBU = bu
    const topic = String(r[topicCol] || '').trim()
    if (!topic) return
    const explanation = String(r[explCol] || '').trim()
    const oldTopic = oldTopicCol >= 0 ? String(r[oldTopicCol] || '').trim() : ''
    const topicRow = topicRowCol >= 0 ? String(r[topicRowCol] || '').trim() : ''
    prTopicList.push({ bu: lastBU, topic, explanation, oldTopic, topicRow })
  })
  return prTopicList.length > 0 ? { prTopicList } : {}
}

// ─── 메인 파서 라우터 ──────────────────────────────────────────────────────────
export function parseSheetRows(sheetName, rows) {
  if (sheetName === SHEET_NAMES.meta) return parseMeta(rows)

  if (sheetName === SHEET_NAMES.visSummary) return parseVisSummary(rows)

  if (sheetName === SHEET_NAMES.productMS ||
      sheetName === SHEET_NAMES.productHS ||
      sheetName === SHEET_NAMES.productES) return parseProductCnty(rows)

  if (sheetName === SHEET_NAMES.weeklyMS) return parseWeekly(rows, 'MS')
  if (sheetName === SHEET_NAMES.weeklyHS) return parseWeekly(rows, 'HS')
  if (sheetName === SHEET_NAMES.weeklyES) return parseWeekly(rows, 'ES')

  if (sheetName === SHEET_NAMES.monthlyPR) return parsePRVisibility(rows, 'monthly')
  if (sheetName === SHEET_NAMES.weeklyPR) return parsePRVisibility(rows, 'weekly')

  if (sheetName === SHEET_NAMES.monthlyBrandPrompt) return parseBrandPromptVisibility(rows, 'monthly')
  if (sheetName === SHEET_NAMES.weeklyBrandPrompt) return parseBrandPromptVisibility(rows, 'weekly')

  if (sheetName === SHEET_NAMES.citPageType) return parseCitPageType(rows)

  if (sheetName === SHEET_NAMES.citTouchPoints) return parseCitTouchPoints(rows)

  if (sheetName === SHEET_NAMES.citDomain) return parseCitDomain(rows)

  if (sheetName === SHEET_NAMES.appendix) return parseAppendix(rows)
  if (sheetName === SHEET_NAMES.unlaunched) return parseUnlaunched(rows)
  if (sheetName === SHEET_NAMES.prTopicList) return parsePRTopicList(rows)

  return {}
}
