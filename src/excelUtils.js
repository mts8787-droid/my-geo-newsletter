// N2 — XLSX는 downloadTemplate에서만 쓰이므로 함수 내부에서 동적 로드
import { loadXlsx } from './shared/loadXlsx.js'
import { RAW_TO_PROD_ID, RAW_TO_KR, UL_CODE_NORMALIZE } from './categoryMap.js'
import { _logFatal, _logWarn, assertRows, findHeaderIdx } from './sheetParserUtils.js'

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
  monthlyPR:      'Monthly PR_수정',
  weeklyPR:       'Weekly PR_수정',
  monthlyBrandPrompt: 'Monthly Brand Prompt Visibility',
  weeklyBrandPrompt:  'Weekly Brand Prompt Visibility',
  citPageType:    'Citation-Page Type',
  citTouchPoints: 'Citation-Touch Points',
  citDomain:      'Citation-Domain',
  appendix:       'Appendix.Prompt List',
  unlaunched:     'unlaunched',
  prTopicList:    'PR Topic List',
}

// 카테고리 ID/KR 매핑은 src/categoryMap.js (single source) 로 이전 — 이 파일에서는 import 만.

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

// 시트의 다양한 % 표기를 정규화. 비즈니스 룰:
//   - '75.3%' / '75.3' / 75.3 → 75.3 (이미 percent 값)
//   - 0.753 → 75.3 (ratio 입력으로 간주, ×100)
//   - '0' / 0 → 0 (실측 0, ratio 변환 X)
//   - 빈/잘못된 입력 → 0 (구분 필요 시 pctOrNull 사용)
// WARNING: 사용자가 0~1 점수 (예: 0.5 점) 를 percent 가 아닌 의미로 입력하면 50 으로 변환됨.
//   본 함수는 score 가 항상 0~100 percent 라는 가정 위에 동작. ratio 가 합법인 값(예: -1~+1
//   상관계수, 0~1 확률) 은 별도 파서 필요. 시트 룰 변경 시 본 함수 + pctOrNull 동시 수정.
export function pct(v) {
  const raw = String(v ?? '').trim()
  const hasPercent = raw.includes('%')
  const s = raw.replace(/%/g, '').replace(/,/g, '').trim()
  const n = parseFloat(s) || 0
  if (hasPercent) return +n.toFixed(2)
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
  // 4자리 연도 (2026, '2026-01' 등)
  const ym4 = s.match(/(\d{4})/)
  if (ym4) year = parseInt(ym4[1])
  else {
    // 2자리 연도 한국식 '26년' → 20YY (예: '26년 2월' → 2026)
    const ky2 = s.match(/(\d{2})년/)
    if (ky2) year = 2000 + parseInt(ky2[1])
    // 2자리 연도 영문 'YY' 단독 (예: 'Apr 26')
    else {
      const ey2 = s.match(/\b(?:jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)\w*\s+(\d{2})\b/i)
      if (ey2) year = 2000 + parseInt(ey2[1])
    }
  }
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
  // 진단: 첫 5행 + 행수
  console.log(`[parseVisSummary] 총 ${rows.length}행, 첫 5행:`)
  rows.slice(0, 5).forEach((r, i) => console.log(`  row${i}: [${(r || []).slice(0, 8).map(c => JSON.stringify(String(c || '').trim())).join(', ')}]`))
  // 1) key-value 형식 (이전 total 시트 호환)
  const intKeys = ['rank', 'totalBrands']
  const pctKeys = ['score', 'prev', 'vsComp']
  const kvObj = {}
  let isKV = false
  let kvTriggerRow = -1
  rows.forEach((r, idx) => {
    if (!r[0] || String(r[0]).startsWith('[') || String(r[0]).startsWith('※') || r[0] === 'key') return
    const k = String(r[0]).trim()
    if (pctKeys.includes(k) || intKeys.includes(k)) {
      if (!isKV) kvTriggerRow = idx
      isKV = true
      if (intKeys.includes(k)) kvObj[k] = parseInt(r[1]) || 0
      else kvObj[k] = pct(r[1])
    }
  })
  if (isKV && Object.keys(kvObj).length >= 2) {
    console.log(`[parseVisSummary] KV path 진입 (legacy) — trigger row${kvTriggerRow}: r[0]='${rows[kvTriggerRow]?.[0]}' / kvObj keys:`, Object.keys(kvObj))
    return { total: kvObj }
  }
  console.log(`[parseVisSummary] Table path 진입`)

  // 2) 헤더 탐색 — 어느 행이든 LG 또는 Date/Country/Division 키워드 있으면 헤더로 채택
  let headerRow = rows.find(r => r.some(c => String(c || '').trim().toUpperCase() === 'LG'))
  if (!headerRow) {
    headerRow = rows.find(r => r.some(c => /^date$|^region$|^countries$|^country$|^divisions?$/i.test(String(c || '').trim())))
  }
  const lgColRaw = headerRow ? headerRow.findIndex(c => String(c || '').trim().toUpperCase() === 'LG') : -1
  const ssColRaw = headerRow
    ? headerRow.findIndex(c => { const s = String(c || '').trim().toUpperCase(); return s === 'SAMSUNG' || s === 'SAMSUMG' })
    : -1
  const dateCol = headerRow ? headerRow.findIndex(c => /date/i.test(String(c || '').trim())) : 0
  const cntyCol = headerRow ? headerRow.findIndex(c => /countries|country/i.test(String(c || '').trim())) : 2
  const divCol = headerRow ? headerRow.findIndex(c => /divisions?/i.test(String(c || '').trim())) : 3
  // LLM Model 컬럼 (2026-06 추가, E열) — 'LLM Model' / 'LLM' / 'Model' 모두 허용. 없으면 -1 → 모든 행 'Total' 간주.
  const llmCol = headerRow ? headerRow.findIndex(c => /^(llm\s*model|llm|model)$/i.test(String(c || '').trim())) : -1
  // LG/SS 컬럼 폴백 — 헤더에 LG/SAMSUNG 텍스트 없을 때 LLM Model 다음 (또는 Division 다음) 위치 사용.
  // 사용자 시트가 LG/SS 라벨 없이 위치 기반인 경우 호환.
  const labelColsMax = Math.max(dateCol, cntyCol, divCol, llmCol)
  const lgCol = lgColRaw >= 0 ? lgColRaw : (labelColsMax >= 0 ? labelColsMax + 1 : 4)
  const actualSsCol = ssColRaw >= 0 ? ssColRaw : lgCol + 1
  console.log(`[parseVisSummary] columns: date=${dateCol} cnty=${cntyCol} div=${divCol} llm=${llmCol} lg=${lgCol}(raw=${lgColRaw}) ss=${actualSsCol}(raw=${ssColRaw})`)

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
    // llmModel: 빈 셀 / 미지정 → 'Total' (2,3월 호환)
    const llmRaw = llmCol >= 0 ? String(r[llmCol] || '').trim() : ''
    const llmModel = llmRaw || 'Total'
    const lg = pct(r[lgCol])
    const comp = pct(r[actualSsCol])
    if (date && lg > 0) monthlyVis.push({ date, country, division, llmModel, lg, comp })
  })

  // 전체 TOTAL 행 (country=TOTAL, division=TOTAL, llmModel=Total) → 날짜별 정렬 → 최신월=score, 이전월=prev
  // llmModel='Total' 필터: 4월부터 추가된 모델별 행이 평균 왜곡 안 하도록.
  const totalRows = monthlyVis.filter(r =>
    (r.country === 'TOTAL' || r.country === 'TTL') &&
    (r.division === 'TOTAL' || r.division === 'TTL' || r.division === '') &&
    (r.llmModel === 'Total' || r.llmModel === 'TOTAL' || r.llmModel === 'All')
  )
  totalRows.sort((a, b) => parseMonthFromDate(a.date) - parseMonthFromDate(b.date))
  const latestTotal = totalRows[totalRows.length - 1]
  const prevTotal = totalRows.length >= 2 ? totalRows[totalRows.length - 2] : null

  // 첫번째 TOTAL 행 폴백 (필터링 결과 없을 때)
  if (!latestTotal) {
    const ttlRow = rows.find(r => r.some(c => String(c || '').trim().toUpperCase() === 'TOTAL'))
    if (!ttlRow) return _logWarn('parseVisSummary', 'no TOTAL row found', { sample: rows.slice(0, 5).map(r => r?.slice(0, 6)) })
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
      r.division && r.division !== 'TOTAL' && r.division !== 'TTL' && r.division !== '' &&
      (r.llmModel === 'Total' || r.llmModel === 'TOTAL' || r.llmModel === 'All')
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
      (r.division === 'TOTAL' || r.division === 'TTL' || r.division === '') &&
      (r.llmModel === 'Total' || r.llmModel === 'TOTAL' || r.llmModel === 'All')
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
  // 진단: 최종 monthlyVis + TOTAL 행 카운트
  const _dCount = {}
  monthlyVis.forEach(r => { _dCount[r.date] = (_dCount[r.date] || 0) + 1 })
  console.log(`[parseVisSummary] monthlyVis ${monthlyVis.length}행 / unique dates:`, _dCount, `/ TOTAL+TOTAL+Total 행: ${totalRows.length}`)
  console.log(`[parseVisSummary] 반환 keys:`, Object.keys(result))
  return result
}

function parseProductCnty(rows) {
  // 디버그: 첫 5행 출력
  console.log(`[parseProductCnty] 총 ${rows.length}행, 첫 5행:`)
  rows.slice(0, 5).forEach((r, i) => console.log(`  row${i}: [${r.slice(0, 8).map(c => JSON.stringify(String(c || '').trim())).join(', ')}]`))
  // 진단: 시트의 raw unique dates + TTL/non-TTL 분포
  const _dateAll = {}
  const _ttlRows = []
  rows.forEach((r, i) => {
    if (i === 0) return  // header
    const d = String(r?.[1] || '').trim()
    const c = String(r?.[2] || '').trim().toUpperCase()
    if (!d) return
    _dateAll[d] = (_dateAll[d] || 0) + 1
    if (c === 'TTL' || c === 'TOTAL') {
      _ttlRows.push({ date: d, cat: String(r?.[3] || '').trim(), llm: String(r?.[4] || '').trim() || '(empty)', div: String(r?.[0] || '').trim() })
    }
  })
  console.log(`[parseProductCnty] 모든 unique dates (시트 raw):`, _dateAll)
  console.log(`[parseProductCnty] TTL country 행들 (date / category / llmModel):`)
  _ttlRows.forEach(x => console.log(`  ${x.div} | ${x.date} | ${x.cat} | LLM='${x.llm}'`))

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
  // LLM Model 컬럼 (2026-06 추가). 보통 D(Category) 와 LG 사이 — lgIdx 가 4 이상이면 그 사이 컬럼 검출. 없으면 -1 → 'Total' 간주.
  const llmCol = header.findIndex(c => /^(llm\s*model|llm|model)$/i.test(String(c || '').trim()))

  // 경쟁사 컬럼 수집 — lgIdx 직후부터 (이전엔 i=4 하드코딩 — LLM Model 추가 후 회귀 위험)
  const competitors = []
  for (let i = lgIdx + 1; i < header.length; i++) {
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
    // llmModel: 빈 셀 / 미지정 → 'Total' (2,3월 호환)
    const llmRaw = llmCol >= 0 ? String(r[llmCol] || '').trim() : ''
    const llmModel = llmRaw || 'Total'
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
      const id = RAW_TO_PROD_ID[category] || category.toLowerCase()
      const kr = RAW_TO_KR[category] || category
      if (!ttlByProduct[id]) ttlByProduct[id] = []
      ttlByProduct[id].push({ id, bu: div, kr, category, date, llmModel, score: lgScore, vsComp: topComp.score, compName: topComp.name, allScores })
    } else {
      const key = `${category}|${country}`
      if (!cntyByKey[key]) cntyByKey[key] = []
      cntyByKey[key].push({ product: category, country, date, llmModel, score: lgScore, compName: topComp.name, compScore: topComp.score, gap, allScores })
    }
  })

  // 제품별 월 데이터를 날짜순 정렬 → 최신월 = score, 이전월 = prev (MoM 계산용)
  // llmModel='Total' 행만 사용 — 4월부터 추가된 모델별 행 (ChatGPT/Gemini 등) 이 평균 왜곡 안 함.
  // 모델별 데이터는 monthlyScores 의 byLlm 에 보존 (어드민 필터 도입 시 사용).
  console.log(`[parseProductCnty] TTL 제품: ${Object.keys(ttlByProduct).join(', ') || '없음'} / 국가별: ${Object.keys(cntyByKey).length}건`)
  const productsPartial = []
  for (const [id, allEntries] of Object.entries(ttlByProduct)) {
    const totalEntries = allEntries.filter(e => e.llmModel === 'Total' || e.llmModel === 'TOTAL' || e.llmModel === 'All')
    const entries = totalEntries.length ? totalEntries : allEntries  // 폴백: Total 없으면 전체 사용
    entries.sort((a, b) => parseMonthFromDate(a.date) - parseMonthFromDate(b.date))
    const latest = entries[entries.length - 1]
    const prev = entries.length >= 2 ? entries[entries.length - 2].score : null
    console.log(`[parseProductCnty] ${id}: dates=[${entries.map(e => e.date).join(',')}] score=${latest.score} prev=${prev} vsComp=${latest.vsComp}`)
    // 모든 월별 점수 보존 (월간 트렌드용) — byLlm 으로 모델별 보존
    const monthlyScores = entries.map(e => {
      const sameDateModels = allEntries.filter(x => x.date === e.date)
      const byLlm = {}
      sameDateModels.forEach(x => { byLlm[x.llmModel] = { score: x.score, comp: x.vsComp, allScores: x.allScores } })
      return { date: e.date, score: e.score, comp: e.vsComp, allScores: e.allScores, byLlm }
    })
    productsPartial.push({ ...latest, prev, monthlyScores })
  }

  // 국가별 데이터: 같은 제품+국가에 여러 월이 있으면 최신월=score, 이전월=prev — llmModel='Total' 기준
  const productsCnty = []
  for (const allEntries of Object.values(cntyByKey)) {
    const totalEntries = allEntries.filter(e => e.llmModel === 'Total' || e.llmModel === 'TOTAL' || e.llmModel === 'All')
    const entries = totalEntries.length ? totalEntries : allEntries
    entries.sort((a, b) => parseMonthFromDate(a.date) - parseMonthFromDate(b.date))
    const latest = entries[entries.length - 1]
    const prev = entries.length >= 2 ? entries[entries.length - 2].score : null
    const monthlyScores = entries.map(e => {
      const sameDateModels = allEntries.filter(x => x.date === e.date)
      const byLlm = {}
      sameDateModels.forEach(x => { byLlm[x.llmModel] = { score: x.score, compScore: x.compScore, compName: x.compName, allScores: x.allScores } })
      return {
        date: e.date,
        score: e.score,
        compScore: e.compScore,
        compName: e.compName,
        allScores: e.allScores,
        byLlm,
      }
    })
    productsCnty.push({ ...latest, prev, monthlyScores })
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
  if (!Object.keys(DASH_CAT_MAP).length) return _logWarn('parseDashboardLayout', 'no DASH_CAT_MAP for division', { div })
  const catRowIdx = rows.findIndex(r =>
    r.some(c => String(c || '').trim() in DASH_CAT_MAP)
  )
  if (catRowIdx < 0) return _logWarn('parseDashboardLayout', 'category row not found', { div, expectedKeys: Object.keys(DASH_CAT_MAP) })
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
  if (dataRowIdx < 0) return _logWarn('parseDashboardLayout', 'data row (LG/NB/TTL) not found', { div, catRowIdx, ttlRowIdx })
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
    return _logWarn('parseDashboardLayout', 'no weekly data extracted', { div, catRowIdx, dataRowIdx, dataRowLabel })
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

// ─── parseWeekly 3-mode helpers ────────────────────────────────────────────
// ctx = { data, rows, header, headerIdx, brandIdx, lgIdx, catIdx, countryIdx,
//         wCols, weeklyLabels, weeklyMap, weeklyAll, isNonBrand, isTotal }
// 각 helper 는 weeklyMap (+ Brand mode 의 weeklyAll) 을 mutation. wCols/weeklyLabels
// 변경이 필요한 경우만 반환값으로 전달.

// Mode A: Product | Country | B/NB | Brand | W컬럼 — 가장 풍부 (weeklyAll 도 추출)
function _extractWeeklyBrandFormat(ctx) {
  const { data, rows, headerIdx, brandIdx, catIdx, countryIdx, isNonBrand, isTotal, weeklyMap, weeklyAll } = ctx
  let wCols = ctx.wCols
  let weeklyLabels = ctx.weeklyLabels

  // wCols 빈 경우: 첫 LG NonBrand 행에서 연속된 데이터 컬럼 자동 감지
  if (!wCols.length) {
    const firstLg = data.find(r =>
      String(r[brandIdx] || '').trim().toUpperCase() === 'LG' && isNonBrand(r)
    )
    if (firstLg) {
      const detected = []
      for (let i = brandIdx + 1; i < firstLg.length; i++) {
        const v = String(firstLg[i] || '').trim()
        if (v) detected.push(i)
        else if (detected.length) break
      }
      wCols = detected
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
    const prodId = RAW_TO_PROD_ID[cat] || cat.toLowerCase()
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
    weeklyMap[RAW_TO_PROD_ID[cat] || cat.toLowerCase()] = wCols.map(c => pctOrNull(r[c]))
  })

  return { wCols, weeklyLabels }
}

// Mode B: Div | Date | Country | Category | LG | ... — brand 없음, LG 컬럼만
function _extractWeeklyLgFormat(ctx) {
  const { data, header, lgIdx, catIdx, isTotal, weeklyMap } = ctx
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
    weeklyMap[RAW_TO_PROD_ID[cat] || cat.toLowerCase()] = vals
  })
  return weekLabelOrder.length ? weekLabelOrder : null
}

// Mode C: Category | W컬럼 만 (가장 단순) — TTL/Total 행만 추출
function _extractWeeklyCategoryFormat(ctx) {
  const { data, wCols, catIdx, isTotal, weeklyMap } = ctx
  data.forEach(r => {
    if (!isTotal(r)) return
    const cat = String(r[catIdx >= 0 ? catIdx : 0] || '').trim()
    if (!cat) return
    weeklyMap[RAW_TO_PROD_ID[cat] || cat.toLowerCase()] = wCols.map(c => pctOrNull(r[c]))
  })
}

// parseWeekly — 3가지 시트 포맷을 자동 감지해서 weeklyMap 으로 통일.
//
// 본 함수가 232줄로 비대한 이유: 시트 포맷이 시점별로 진화해서 3가지 호환 처리 필요.
//   포맷 A (brandIdx >= 0): Product | Country | B/NB | Brand | W6 | W7 | ...
//     · 가장 풍부 — weeklyAll (모든 브랜드 NonBrand) + weeklyMap (LG TTL) 둘 다 추출
//     · 본 함수 핵심 경로. 700 라인대.
//   포맷 B (lgIdx >= 0, brand 없음): Div | Date | Country | Category | LG | ...
//     · monthly 시트 비슷한 형태가 weekly 로 들어온 케이스. weeklyMap 만.
//   포맷 C (wCols.length 만): Category | W1 | W2 | W3 | ...
//     · 가장 단순 — 카테고리 기준 weeklyMap 만.
//   포맷 미감지: parseDashboardLayout 으로 폴백 (대시보드 레이아웃 — 카테고리가 열 헤더).
//
// 향후 분할 가이드 (테스트 추가 후 권장): 3 helper 로 추출.
//   - parseWeeklyBrandFormat(data, header, headerIdx, ...) → { weeklyMap, weeklyAll }
//   - parseWeeklyLgFormat(data, header, ...) → { weeklyMap }
//   - parseWeeklyCategoryFormat(data, wCols, ...) → { weeklyMap }
// 분할 전 회귀 테스트 부재 (parseUnlaunched 만 테스트 있음) — 분할 시 회귀 위험 매우 큼.
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
  // let — Mode A (Brand) helper 가 자동 감지 시 재할당
  let wCols = []
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
  const ctx = { data, rows, header, headerIdx, brandIdx, lgIdx, catIdx, countryIdx, wCols, weeklyLabels, weeklyMap, weeklyAll, isNonBrand, isTotal }
  if (brandIdx >= 0) {
    const updated = _extractWeeklyBrandFormat(ctx)
    wCols = updated.wCols
    weeklyLabels = updated.weeklyLabels
  } else if (lgIdx >= 0) {
    const newLabels = _extractWeeklyLgFormat(ctx)
    if (newLabels) weeklyLabels = newLabels
  } else if (wCols.length) {
    _extractWeeklyCategoryFormat(ctx)
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
  // 진단: 첫 5행
  console.log(`[parseCitPageType] 총 ${rows.length}행, 첫 5행:`)
  rows.slice(0, 5).forEach((r, i) => console.log(`  row${i}: [${(r || []).slice(0, 10).map(c => JSON.stringify(String(c || '').trim())).join(', ')}]`))
  // 헤더: [LLM Model] | Country | Page Type | Feb LG | Feb SS | Mar LG | Mar SS | ...
  // 2026-06 이후 — 시트 A열에 LLM Model 추가, 기존 컬럼 1열씩 오른쪽 시프트.
  // 이전 schema (Country, Page Type, ...) 도 호환 — 동적 detect.
  // [Section Title] 형태의 제목 행은 건너뜀
  const headerIdx = rows.findIndex(r => {
    const hasKeyword = r.some(c => { const s = String(c || '').trim().toLowerCase(); return s.includes('page type') || s === 'country' })
    if (!hasKeyword) return false
    const isTitleRow = r.some(c => /^\[.*\]$/.test(String(c || '').trim()))
    return !isTitleRow
  })
  if (headerIdx < 0) return _logWarn('parseCitPageType', 'header not found', { firstRows: rows.slice(0, 5).map(r => r?.slice(0, 6)) })

  const header = rows[headerIdx]
  // 컬럼 위치 동적 detect (이전 schema 호환)
  // LLM Model — invisible unicode (ZWSP/NBSP/BOM) + multi-space 대응 ('Paye Type' 과 동일 케이스).
  // detect 실패 (-1) 시 모든 행이 'Total' 분류 → breakdown 감지 무력화 → Total+모델 전부 합산 double-count.
  const llmCol = header.findIndex(c => {
    const s = String(c || '').replace(/[​‌‍﻿ ]/g, '').replace(/\s+/g, '').toLowerCase()
    return /^(llmmodel|llm|model)$/.test(s)
  })
  const cntyCol = header.findIndex(c => /^country$|countries/i.test(String(c || '').trim()))
  // Page Type — 'Page Type' / 'Paye Type' (오타) / 'Type' 허용.
  // 보이지 않는 unicode (NBSP / ZWSP / BOM) 와 multi-space 모두 대응 — 공백 전부 제거 후 매칭.
  const ptCol = header.findIndex(c => {
    const s = String(c || '').replace(/[​‌‍﻿]/g, '').replace(/\s+/g, '').toLowerCase()
    return /^pa[gy]etype$/.test(s) || s === 'type'
  })
  const fallbackCnty = cntyCol >= 0 ? cntyCol : 0
  // Page Type 폴백 — detect 실패 시 위치 기반 (Country 다음 컬럼)
  const fallbackPt = ptCol >= 0 ? ptCol : (fallbackCnty + 1)
  console.log(`[parseCitPageType] header row${headerIdx}: [${header.slice(0,10).map(c => JSON.stringify(String(c||'').trim())).join(', ')}]`)
  console.log(`[parseCitPageType] llmCol=${llmCol} cntyCol=${cntyCol} ptCol=${ptCol} (fallbackCnty=${fallbackCnty} fallbackPt=${fallbackPt})`)
  if (llmCol < 0) console.warn(`[parseCitPageType] WARN: llmCol not detected — header codepoints:`, header.slice(0, 4).map(c => Array.from(String(c || '')).map(ch => ch.codePointAt(0).toString(16)).join(' ')))

  // LG/SS 컬럼 페어 찾기 — Page Type 컬럼 이후부터 스캔. 같은 월 라벨 중복 시 첫번째만 채택 (시트 오타 방지).
  const monthPairs = []
  const seenMonth = new Set()
  const scanStart = Math.max(fallbackPt + 1, 2)
  for (let i = scanStart; i < header.length; i++) {
    const h = String(header[i] || '').trim()
    if (/\bLG\b/i.test(h)) {
      const ssCol = i + 1
      if (ssCol < header.length && /\bSS\b|\bSAMSUNG\b/i.test(String(header[ssCol] || ''))) {
        const monthMatch = h.match(/(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/i)
        const monthKey = monthMatch ? monthMatch[1].toLowerCase() : `col${i}`
        if (!seenMonth.has(monthKey)) {
          monthPairs.push({ lg: i, ss: ssCol })
          seenMonth.add(monthKey)
        }
      }
    }
  }
  if (!monthPairs.length) monthPairs.push({ lg: scanStart, ss: scanStart + 1 })
  console.log(`[parseCitPageType] monthPairs:`, monthPairs.map(p => `LG=${p.lg}/SS=${p.ss}`).join(', '))

  // 데이터 필터 — Country 컬럼 (cntyCol 동적 detect) 기준
  // 병합 셀 (merged cell) 대응 — Sheets API 가 Model 병합 셀의 비앵커 행을 빈값으로 반환
  // → 빈값을 Total 로 오분류하면 모델 행이 집계 행 취급 → breakdown 미감지 → double-count.
  // 직전 행 Model 값 forward-fill. 완전 빈 행 (섹션 구분) 에서 carry 리셋.
  const _llmFilled = new Map()
  let _carryLlm = '', _llmFfCount = 0
  rows.slice(headerIdx + 1).forEach(r => {
    if (!r || !r.some(c => String(c || '').trim())) { _carryLlm = ''; return }
    let v = llmCol >= 0 ? String(r[llmCol] || '').trim() : ''
    if (v) _carryLlm = v
    else if (llmCol >= 0 && _carryLlm) { v = _carryLlm; _llmFfCount++ }
    _llmFilled.set(r, v)
  })
  if (_llmFfCount) console.log(`[parseCitPageType] merged-cell forward-fill (Model): ${_llmFfCount}건 상속`)
  const data = rows.slice(headerIdx + 1).filter(r => r && r[fallbackCnty] != null && String(r[fallbackCnty]).trim())
  console.log(`[parseCitPageType] data ${data.length}행 (필터 통과)`)

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

  // LLM Model 별 분리 — Total/TTL/(TTL)/All/빈값 모두 집계 행으로 정규화.
  // 모델별 데이터는 byLlm 에 보존 — UI 필터 도입 시 사용.
  const _ptStripParens = s => String(s || '').trim().replace(/^\((.*)\)$/, '$1').trim()
  const _ptIsTotalLlm = m => { const u = _ptStripParens(m); return !u || /^(total|all|ttl)$/i.test(u) }
  // 페이지타입 canonical 정규화 — 시트가 모델/Total 행마다 다른 casing/prefix 를 써(예: Total 은
  // 'Support', search-gpt 행은 'support'/'lg-experience') 같은 페이지타입이 별도 key 로 쪼개짐.
  // 이메일 템플릿(emailTemplate.js DC_DETAIL_COLS)은 정확한 canonical casing 으로만 막대를 그려
  // → 변형 key 데이터가 누락(특정 모델이 PLP/PDP 만 보이는 회귀). 단일 지점에서 표준화해 병합.
  const _DC_PT_CANON = {
    plp: 'PLP', pdp: 'PDP',
    microsite: 'Microsites', microsites: 'Microsites',
    newsroom: 'Newsroom', support: 'Support',
    buyingguide: 'Buying-guide', experience: 'Experience',
  }
  const _canonPageType = raw => {
    const pt = String(raw || '').replace(/[()]/g, '').trim()
    if (/page total|^ttl$/i.test(pt)) return 'TTL'
    const norm = pt.toLowerCase().replace(/^lg[-\s]+/, '').replace(/[-\s]+/g, '')
    return _DC_PT_CANON[norm] || pt
  }
  const _ptCntyKey = r => {
    const rawCountry = normCountry(r[fallbackCnty])
    return { cnty: CNTY_ALIAS[rawCountry] || rawCountry.toUpperCase(), key: _canonPageType(r[fallbackPt]) }
  }
  // Pass 1 — (cnty|pageType|월) 단위로 모델 breakdown 존재 감지.
  // breakdown 존재 월은 집계(Total/TTL) 행을 빼고 모델 행만 합산 (double-count 방지 — Touch Points 와 동일 규칙)
  const _ptBreakdown = new Set()
  data.forEach(r => {
    const llmRaw = _llmFilled.get(r) || ''
    if (_ptIsTotalLlm(llmRaw)) return
    const { cnty, key } = _ptCntyKey(r)
    monthPairs.forEach((mp, mi) => {
      if (numVal(r[mp.lg]) > 0 || numVal(r[mp.ss]) > 0) _ptBreakdown.add(`${cnty}|${key}|${mi}`)
    })
  })
  // 해당 월에 이 행을 집계에 포함할지 — breakdown 월이면 모델 행만, 아니면 집계 행만
  const _ptRowCounts = (isTotal, cnty, key, mi) => _ptBreakdown.has(`${cnty}|${key}|${mi}`) ? !isTotal : isTotal
  const bestPairIdx = monthPairs.indexOf(bestPair)
  if (_ptBreakdown.size) console.log(`[parseCitPageType] LLM breakdown 감지: ${_ptBreakdown.size}건 (해당 월은 Total/TTL 행 제외 + 모델 행 합산)`)

  const byLlm = {}  // { [llmModel]: { lg, samsung, dotcomByCnty, dotcomTrend } }
  function _ensureLlm(llm) {
    if (!byLlm[llm]) byLlm[llm] = { lg: {}, samsung: {}, dotcomByCnty: {}, dotcomTrend: {} }
    return byLlm[llm]
  }
  data.forEach(r => {
    const llmRaw = _llmFilled.get(r) || ''
    const isTotalLlm = _ptIsTotalLlm(llmRaw)
    const llmModel = isTotalLlm ? 'Total' : llmRaw
    const { cnty, key } = _ptCntyKey(r)
    _ptSeenCountries.add(cnty)

    // 최신 월(bestPair) dotcom 구성 — breakdown-aware (모델 breakdown 월은 모델 행 합산)
    const lgVal = numVal(r[bestPair.lg])
    const ssVal = numVal(r[bestPair.ss])
    if (_ptRowCounts(isTotalLlm, cnty, key, bestPairIdx)) {
      if (cnty === 'TTL') {
        lg[key] = (lg[key] || 0) + lgVal
        samsung[key] = (samsung[key] || 0) + ssVal
      } else {
        if (!dotcomByCnty[cnty]) dotcomByCnty[cnty] = { lg: {}, samsung: {} }
        dotcomByCnty[cnty].lg[key] = (dotcomByCnty[cnty].lg[key] || 0) + lgVal
        dotcomByCnty[cnty].samsung[key] = (dotcomByCnty[cnty].samsung[key] || 0) + ssVal
      }
    }
    // 모든 월 트렌드 수집 (TTL만) — 월별로 breakdown-aware
    if (cnty === 'TTL') {
      monthPairs.forEach((mp, mi) => {
        if (!_ptRowCounts(isTotalLlm, cnty, key, mi)) return
        const lv = numVal(r[mp.lg])
        const sv = numVal(r[mp.ss])
        if (lv > 0 || sv > 0) {
          if (!dotcomTrend[key]) dotcomTrend[key] = {}
          const mLabel = monthLabels[mi] || `M${mi + 1}`
          dotcomTrend[key][mLabel] = { lg: (dotcomTrend[key][mLabel]?.lg || 0) + lv, samsung: (dotcomTrend[key][mLabel]?.samsung || 0) + sv }
        }
      })
    }

    // 모델별 보존 — 모든 LLM (Total 포함) 의 데이터 byLlm 에 저장
    const out = _ensureLlm(llmModel)
    if (cnty === 'TTL') {
      out.lg[key] = (out.lg[key] || 0) + lgVal
      out.samsung[key] = (out.samsung[key] || 0) + ssVal
      if (!out.dotcomTrend[key]) out.dotcomTrend[key] = {}
      monthPairs.forEach((mp, mi) => {
        const lv = numVal(r[mp.lg]); const sv = numVal(r[mp.ss])
        if (lv > 0 || sv > 0) {
          const mLabel = monthLabels[mi] || `M${mi + 1}`
          out.dotcomTrend[key][mLabel] = { lg: (out.dotcomTrend[key][mLabel]?.lg || 0) + lv, samsung: (out.dotcomTrend[key][mLabel]?.samsung || 0) + sv }
        }
      })
    } else {
      if (!out.dotcomByCnty[cnty]) out.dotcomByCnty[cnty] = { lg: {}, samsung: {} }
      out.dotcomByCnty[cnty].lg[key] = (out.dotcomByCnty[cnty].lg[key] || 0) + lgVal
      out.dotcomByCnty[cnty].samsung[key] = (out.dotcomByCnty[cnty].samsung[key] || 0) + ssVal
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
      const llmRaw2 = _llmFilled.get(r) || ''
      const isTotalLlm2 = _ptIsTotalLlm(llmRaw2)
      const { cnty, key } = _ptCntyKey(r)
      // breakdown-aware — 모델 breakdown 있는 월은 모델 행 합산, 없으면 집계(Total/TTL) 행만
      if (!_ptRowCounts(isTotalLlm2, cnty, key, mi)) return
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
  // 모델별 dotcom 보존 (UI 필터용) — Total 외 LLM 도 있으면 추가
  if (Object.keys(byLlm).length > 1 || (Object.keys(byLlm).length === 1 && !(byLlm.Total || byLlm.TOTAL || byLlm.All))) {
    result.dotcomByLlm = byLlm
  }
  console.log(`[parseCitPageType] 결과: dotcom.lg keys=${Object.keys(lg).join(',')||'(EMPTY)'} / dotcomByCnty=${Object.keys(dotcomByCnty).join(',')||'(EMPTY)'} / dotcomTrend keys=${Object.keys(dotcomTrend).join(',')||'(EMPTY)'} / byLlm keys=${Object.keys(byLlm).join(',')||'(EMPTY)'}`)
  return result
}

function parseCitTouchPoints(rows) {
  // 진단: 첫 5행
  console.log(`[parseCitTouchPoints] 총 ${rows.length}행, 첫 5행:`)
  rows.slice(0, 5).forEach((r, i) => console.log(`  row${i}: [${(r || []).slice(0, 12).map(c => JSON.stringify(String(c || '').trim())).join(', ')}]`))
  // 헤더: (empty), Country, Channel, Feb, Mar, ... 또는 Country, Channel, Feb, ...
  // [Section Title] 형태의 제목 행은 건너뜀
  const headerIdx = rows.findIndex(r => {
    const hasKeyword = r.some(c => { const s = String(c || '').trim().toLowerCase(); return s === 'channel' || s === 'country' })
    if (!hasKeyword) return false
    const isTitleRow = r.some(c => /^\[.*\]$/.test(String(c || '').trim()))
    return !isTitleRow
  })
  // 헤더 못찾아도 best-effort fallback 으로 진행 (월 컬럼 자동 감지 등). 다만 visibility 위해 warn.
  if (headerIdx < 0) {
    _logWarn('parseCitTouchPoints', 'header not found (need channel/country) — falling back to position-based parse',
      { firstRows: rows.slice(0, 5).map(r => r?.slice(0, 6)) })
  }
  const header = headerIdx >= 0 ? rows[headerIdx] : []
  const startRow = (headerIdx >= 0 ? headerIdx : 0) + 1

  // 1) 라벨 컬럼 검출 (PRD/NO/Country/Channel/example 등 — 헤더 텍스트가 명시된 비-월 컬럼)
  // 시트 예: PRD | NO | Country | Channel | example | Feb | Mar | Apr
  // 2026-06 이후 시트에 LLM Model 컬럼 추가 가능 — 자동 detect.
  let countryCol = -1, channelCol = -1, prdCol = -1, llmCol = -1
  for (let i = 0; i < header.length; i++) {
    const s = String(header[i] || '').trim().toLowerCase()
    if (s === 'country' && countryCol < 0) countryCol = i
    if (s === 'channel' && channelCol < 0) channelCol = i
    if (s === 'prd' && prdCol < 0) prdCol = i
    if (/^(llm\s*model|llm|model)$/i.test(s) && llmCol < 0) llmCol = i
  }

  // 월 라벨을 canonical 짧은 이름으로 정규화 ('Apr 2026' / '4월' / 'April' → 'Apr')
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

  // 2) 월 컬럼 검출 (헤더 행 전체 스캔 + 필요 시 위 행 보충)
  const monthLabels = []  // { col, label: 'Apr' (canonical) }
  const seenCols = new Set()
  for (let i = 0; i < header.length; i++) {
    const cm = canonMonth(header[i])
    if (cm && !seenCols.has(i)) { monthLabels.push({ col: i, label: cm }); seenCols.add(i) }
  }
  if (headerIdx > 0) {
    const monthRow = rows[headerIdx - 1]
    if (monthRow) {
      for (let i = 0; i < monthRow.length; i++) {
        const cm = canonMonth(monthRow[i])
        if (cm && !seenCols.has(i)) { monthLabels.push({ col: i, label: cm }); seenCols.add(i) }
      }
    }
  }

  // 3) dataStartCol 결정 — 첫 월 컬럼 위치를 정답으로 사용
  // 라벨 컬럼들(prd/country/channel/example/no 등) 사이에 비-월 컬럼이 있어도 무시됨
  let dataStartCol = 2
  if (monthLabels.length > 0) {
    dataStartCol = Math.min(...monthLabels.map(m => m.col))
  } else if (countryCol >= 0 && channelCol >= 0) {
    dataStartCol = Math.max(countryCol, channelCol, prdCol) + 1
  } else {
    const firstDataRow = rows[startRow]
    if (firstDataRow && !String(firstDataRow[0] || '').trim()) {
      countryCol = 1; channelCol = 2; dataStartCol = 3
    } else {
      countryCol = 0; channelCol = 1; dataStartCol = 2
    }
  }

  // 4) Country/Channel 위치 fallback (헤더에 없을 때)
  if (countryCol < 0 || channelCol < 0) {
    const firstDataRow = rows[startRow]
    const offset = firstDataRow && !String(firstDataRow[0] || '').trim() ? 1 : 0
    if (countryCol < 0) countryCol = offset
    if (channelCol < 0) channelCol = offset + 1
  }

  // 5) 라벨 없는 데이터 컬럼 역산 — dataStartCol 기준으로 firstLabeled에서 거꾸로
  // dataStartCol = 첫 월 컬럼이므로 보통 gap=0이지만, 헤더에 'Mar', 'Apr' 만 있고
  // 그 이전이 비어있는데 데이터가 들어있는 케이스를 보정
  if (monthLabels.length > 0) {
    monthLabels.sort((a, b) => a.col - b.col)
    const firstLabeled = monthLabels[0]
    const firstMonthIdx = MONTHS_ORDER.indexOf(firstLabeled.label)
    // 라벨 컬럼들(country/channel/prd) 보다 뒤이면서 firstLabeled 보다 앞인 컬럼만 후보
    const labelCols = new Set([countryCol, channelCol, prdCol].filter(c => c >= 0))
    if (firstMonthIdx > 0 && firstLabeled.col > dataStartCol) {
      let mi = firstMonthIdx - 1
      for (let c = firstLabeled.col - 1; c >= dataStartCol && mi >= 0; c--) {
        if (seenCols.has(c) || labelCols.has(c)) continue
        // 헤더(또는 위 행)에 비-월 텍스트가 있으면 비-데이터 컬럼 → 스킵
        const ht = String(header[c] || '').trim()
        const mt = headerIdx > 0 ? String((rows[headerIdx - 1] || [])[c] || '').trim() : ''
        if (ht || mt) continue
        monthLabels.push({ col: c, label: MONTHS_ORDER[mi] })
        seenCols.add(c)
        mi--
      }
    }
  }
  // 월 순 (chronological)으로 정렬 — score 역순 iteration이 "최신 월" 의미를 갖도록
  monthLabels.sort((a, b) => MONTHS_ORDER.indexOf(a.label) - MONTHS_ORDER.indexOf(b.label))
  console.log(`[parseCitTouchPoints] header row${headerIdx}: [${(header || []).slice(0,12).map(c => JSON.stringify(String(c||'').trim())).join(', ')}]`)
  console.log(`[parseCitTouchPoints] countryCol=${countryCol} channelCol=${channelCol} prdCol=${prdCol} llmCol=${llmCol} dataStartCol=${dataStartCol}`)
  console.log(`[parseCitTouchPoints] monthLabels (sorted):`, monthLabels.map(m => `${m.label}@col${m.col}`).join(', '))

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

  // 1차: (country, channel) 단위로 TTL 행과 PRD-specific 행을 분리 수집
  // groupMap[country][channel] = { ttl: monthScores|null, prds: [{prd, monthScores}] }
  // 2026-06 — 사용자 규칙 명확화:
  //   국가는 무조건 TTL 빼고 (per-country sum)
  //   PRD 는 4월부터 (= PRD breakdown 존재하는 월) TTL 빼고
  //   모델은 4월부터 (= LLM breakdown 존재하는 월) Total 빼고
  // → 월별로 breakdown 존재 여부 감지 후, 해당 월의 TTL/Total 행을 sum 에서 제외.
  // → 시트의 집계 행 (Country=TTL, PRD=TTL, LLM=Total) 을 다른 차원과 중복 합산 안 함.

  // Pass 1 — (channel, month) 단위로 Country/PRD/LLM breakdown 존재 감지
  // 같은 (channel, month) 에 per-country/LLM-specific/PRD-specific 행이 있으면 그 (channel, month) 의 TTL/Total 행은 sum 에서 제외 (double-count 방지).
  const cntyBreakdown = {}  // { channel: { month: true } }
  const llmBreakdown = {}
  const prdBreakdown = {}
  // 괄호 표기 ('(TTL)', '(Total)' 등) 도 처리 — 괄호 제거 후 매칭.
  const stripParens = s => String(s || '').replace(/[()]/g, '').trim()
  data.forEach(r => {
    const country = normCountry(r[countryCol])
    const channel = stripParens(r[channelCol])
    if (!country || !channel) return
    if (channel.toLowerCase() === 'total') return
    const isCountryTtl = country === 'TTL' || country === 'TOTAL'
    const llmVal = llmCol >= 0 ? stripParens(r[llmCol]) : ''
    const isTotalLlm = !llmVal || /^(total|all|ttl)$/i.test(llmVal)
    const prd = prdCol >= 0 ? stripParens(r[prdCol]) : ''
    const isPrdTtl = !prd || /^(ttl|total)$/i.test(prd.toUpperCase())
    monthLabels.forEach(({ col, label }) => {
      const v = numVal(r[col])
      if (v <= 0) return
      if (!isCountryTtl) {
        if (!cntyBreakdown[channel]) cntyBreakdown[channel] = {}
        cntyBreakdown[channel][label] = true
      }
      if (!isTotalLlm) {
        if (!llmBreakdown[channel]) llmBreakdown[channel] = {}
        llmBreakdown[channel][label] = true
      }
      if (!isPrdTtl) {
        if (!prdBreakdown[channel]) prdBreakdown[channel] = {}
        prdBreakdown[channel][label] = true
      }
    })
  })
  const _bdSummary = Object.keys(cntyBreakdown).map(ch => `${ch}:[${Object.keys(cntyBreakdown[ch]).join(',')}]`).join(' ')
  console.log(`[parseCitTouchPoints] Country breakdown 감지 (channel × month): ${_bdSummary || '(없음)'}`)
  console.log(`[parseCitTouchPoints] LLM breakdown 감지:`, Object.keys(llmBreakdown).map(ch => `${ch}:[${Object.keys(llmBreakdown[ch]).join(',')}]`).join(' ') || '(없음)')
  console.log(`[parseCitTouchPoints] PRD breakdown 감지:`, Object.keys(prdBreakdown).map(ch => `${ch}:[${Object.keys(prdBreakdown[ch]).join(',')}]`).join(' ') || '(없음)')

  // Pass 2 — leaf row 만 sum
  // Skip: Country=TTL 항상 / Model=Total (LLM breakdown 월) / PRD=TTL (PRD breakdown 월)
  const channelMonthScores = {}      // citations 용: { channel: { month: sum } }
  const channelCntyMonthScores = {}  // citationsByCnty 용: { channel: { country: { month: sum } } }
  // PRD-specific 보존 (어드민 필터용) — citationsByPrd 등
  const groupMap = {}  // { country: { channel: { ttl: null, prds: [{prd, monthScores}] } } } — PRD-specific 행 보존 (client PRD 필터용)
  // LLM 모델별 채널 sum — { llmModel: { channel: { month: sum } } } — LLM 비교 탭용
  const citTouchPointsByLlm = {}

  data.forEach(r => {
    const country = normCountry(r[countryCol])
    const channel = stripParens(r[channelCol])
    const prd = prdCol >= 0 ? stripParens(r[prdCol]) : ''
    const llmVal = llmCol >= 0 ? stripParens(r[llmCol]) : ''
    if (!country || !channel) return
    if (channel.toLowerCase() === 'total') return

    const isCountryTtl = country === 'TTL' || country === 'TOTAL'
    const isTotalLlm = !llmVal || /^(total|all|ttl)$/i.test(llmVal)
    const prdU = prd.toUpperCase()
    const isPrdTtl = !prd || prdU === 'TTL' || prdU === 'TOTAL'

    if (!isCountryTtl) _seenCountries.add(country)

    // PRD-specific 보존 (per-country 만 — TTL country 의 PRD-specific 는 별도 관리 없음)
    // 2026-06 — LLM='TTL' 행은 PRD-specific 으로 보지 않음 (LLM breakdown 존재 월에선 모델별 행 sum 과 double-count).
    // 월별로 LLM breakdown 있으면 LLM TTL 데이터는 그 월에 한해 제외.
    if (!isCountryTtl) {
      if (!groupMap[country]) groupMap[country] = {}
      if (!groupMap[country][channel]) groupMap[country][channel] = { ttl: null, prds: [] }
      if (!isPrdTtl) {
        const pms = {}
        monthLabels.forEach(({ col, label }) => {
          const v = numVal(r[col])
          if (v <= 0) return
          // (channel, month) 의 LLM breakdown 존재 시 LLM TTL 행 skip — Pass 2 sum 룰과 일관
          if (isTotalLlm && llmBreakdown[channel]?.[label]) return
          pms[label] = v
        })
        if (Object.keys(pms).length) groupMap[country][channel].prds.push({ prd, monthScores: pms })
      }
    }

    // 월별 sum — breakdown 규칙 적용
    if (!channelMonthScores[channel]) channelMonthScores[channel] = {}
    if (!channelCntyMonthScores[channel]) channelCntyMonthScores[channel] = {}
    const cntyKey = isCountryTtl ? 'TTL' : country
    if (!channelCntyMonthScores[channel][cntyKey]) channelCntyMonthScores[channel][cntyKey] = {}

    monthLabels.forEach(({ col, label }) => {
      const v = numVal(r[col])
      if (v <= 0) return
      // (channel, month) 의 breakdown 존재 시 집계 행 (TTL country / Total LLM / TTL PRD) skip
      const skipCnty = isCountryTtl && cntyBreakdown[channel]?.[label]
      const skipLlm = isTotalLlm && llmBreakdown[channel]?.[label]
      const skipPrd = isPrdTtl && prdBreakdown[channel]?.[label]
      // LLM 별 채널 sum — 모델 비교 탭용. cnty=TTL + PRD=TTL skip (Pass 2 sum 룰과 일관).
      // LLM='TTL' 도 별도 'Total' 키로 보존 (모델별 + 합 모두 비교 가능).
      const llmKey = isTotalLlm ? 'Total' : llmVal
      if (!skipCnty && !(isPrdTtl && prdBreakdown[channel]?.[label])) {
        if (!citTouchPointsByLlm[llmKey]) citTouchPointsByLlm[llmKey] = {}
        if (!citTouchPointsByLlm[llmKey][channel]) citTouchPointsByLlm[llmKey][channel] = {}
        citTouchPointsByLlm[llmKey][channel][label] = (citTouchPointsByLlm[llmKey][channel][label] || 0) + v
      }
      if (skipCnty || skipLlm || skipPrd) return
      channelMonthScores[channel][label] = (channelMonthScores[channel][label] || 0) + v
      channelCntyMonthScores[channel][cntyKey][label] = (channelCntyMonthScores[channel][cntyKey][label] || 0) + v
    })
  })

  // 헬퍼: monthScores에서 latest month score
  const pickLatest = ms => {
    for (let i = monthLabels.length - 1; i >= 0; i--) {
      const v = ms[monthLabels[i].label]
      if (v > 0) return v
    }
    return 0
  }
  // 헬퍼: PRD=TTL 행 monthScores만 사용 (폴백 없음 — 비어있는 월은 빈 채로 유지)
  const ttlScores = group => group.ttl ? { ...group.ttl } : {}

  // 2차: citations / citTouchPointsTrend — channelMonthScores 기반 (leaf row sum)
  // 국가별 트렌드 — channelCntyMonthScores 기반 (TTL key 는 별도 — citationsByCnty 에 안 넣음)
  const citTouchPointsTrendByCnty = {}
  Object.entries(channelCntyMonthScores).forEach(([channel, byCountry]) => {
    Object.entries(byCountry).forEach(([country, monthScores]) => {
      if (country === 'TTL') return  // citTouchPointsTrendByCnty 는 per-country 만
      if (Object.keys(monthScores).length === 0) return
      if (!citTouchPointsTrendByCnty[country]) citTouchPointsTrendByCnty[country] = {}
      citTouchPointsTrendByCnty[country][channel] = monthScores
    })
  })

  Object.entries(channelMonthScores).forEach(([channel, monthScores]) => {
    const score = pickLatest(monthScores)
    if (score > 0) {
      citations.push({ source: channel, category: '', score, delta: 0, ratio: 0, monthScores })
      citTouchPointsTrend[channel] = monthScores
    }
  })

  // 3차: 국가별 — citationsByCnty (channelCntyMonthScores 기반, TTL 제외)
  Object.entries(channelCntyMonthScores).forEach(([channel, byCountry]) => {
    Object.entries(byCountry).forEach(([country, monthScores]) => {
      if (country === 'TTL') return  // citationsByCnty 는 per-country 만
      const aggScore = pickLatest(monthScores)
      if (aggScore > 0) {
        if (!citationsByCnty[country]) citationsByCnty[country] = []
        citationsByCnty[country].push({ source: channel, category: '', score: aggScore, delta: 0, ratio: 0, monthScores, prd: '' })
      }
    })
  })
  // PRD-specific 행은 groupMap 에서 추출
  Object.entries(groupMap).forEach(([country, channelMap]) => {
    Object.entries(channelMap).forEach(([channel, group]) => {
      group.prds.forEach(({ prd, monthScores }) => {
        const pScore = pickLatest(monthScores)
        if (pScore <= 0) return
        if (!citationsByCnty[country]) citationsByCnty[country] = []
        citationsByCnty[country].push({ source: channel, category: '', score: pScore, delta: 0, ratio: 0, monthScores, prd })
        if (!citationsByPrdAgg[prd]) citationsByPrdAgg[prd] = {}
        if (!citationsByPrdAgg[prd][channel]) {
          citationsByPrdAgg[prd][channel] = { source: channel, category: '', score: 0, delta: 0, ratio: 0, monthScores: {} }
        }
        const agg = citationsByPrdAgg[prd][channel]
        agg.score += pScore
        Object.entries(monthScores).forEach(([m, v]) => {
          agg.monthScores[m] = (agg.monthScores[m] || 0) + v
        })
      })
    })
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
  // 진단: citTouchPointsTrend 각 월별 합계
  const _monthSums = {}
  monthLabels.forEach(m => {
    let sum = 0
    Object.values(citTouchPointsTrend).forEach(d => { sum += (d[m.label] || 0) })
    _monthSums[m.label] = sum
  })
  console.log(`[parseCitTouchPoints] citTouchPointsTrend 월별 합계:`, _monthSums, `→ validMonths:`, validMonths)
  // 진단: TTL group 의 각 channel 별 ttl monthScores + pickLatest 결과
  const _ttlChannelDump = {}
  Object.entries(groupMap.TTL || {}).forEach(([ch, grp]) => {
    _ttlChannelDump[ch] = { ttl: grp.ttl, latestScore: pickLatest(grp.ttl || {}) }
  })
  console.log(`[parseCitTouchPoints] groupMap.TTL 채널별 dump:`, _ttlChannelDump)
  // 진단: citations top 3
  console.log(`[parseCitTouchPoints] citations top 3:`, citations.slice(0, 3).map(c => ({ source: c.source, score: c.score, monthScores: c.monthScores })))

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
  if (Object.keys(citTouchPointsTrendByCnty).length > 0) {
    result.citTouchPointsTrendByCnty = citTouchPointsTrendByCnty
  }
  if (Object.keys(citTouchPointsByLlm).length > 0) {
    result.citTouchPointsByLlm = citTouchPointsByLlm
    console.log(`[parseCitTouchPoints] citTouchPointsByLlm LLM 모델:`, Object.keys(citTouchPointsByLlm).join(', '))
  }
  if (citDerivedPeriod) result.citDerivedPeriod = citDerivedPeriod
  return result
}

function parseCitDomain(rows) {
  // 진단: 첫 5행 출력
  console.log(`[parseCitDomain] 총 ${rows.length}행, 첫 5행:`)
  rows.slice(0, 5).forEach((r, i) => console.log(`  row${i}: [${(r || []).slice(0, 14).map(c => JSON.stringify(String(c || '').trim())).join(', ')}]`))

  // 새 구조: No | Region | Domain | Type | Feb | Mar | Apr | ...
  // Region: Global(=TTL), US, CA, UK 등 인라인 국가
  // 'Global' 류 동의어 → 'TTL' 매핑 (사용자 요청 2026-06: Global 도 TTL 처리하여 합산 시 제외).
  const REGION_MAP = {
    'GLOBAL': 'TTL', 'TOTAL': 'TTL', 'TTL': 'TTL', 'ALL': 'TTL',
    'WW': 'TTL', 'WORLD': 'TTL', 'WORLDWIDE': 'TTL', 'GLOBE': 'TTL',
    '글로벌': 'TTL', '전체': 'TTL', '월드': 'TTL', '총계': 'TTL',
    '미국':'US','캐나다':'CA','영국':'UK','독일':'DE','스페인':'ES','브라질':'BR','멕시코':'MX','인도':'IN','호주':'AU','베트남':'VN',
  }
  const COUNTRIES = ['US','CA','UK','DE','ES','BR','MX','AU','VN','IN','TTL','GLOBAL']
  const MONTH_RE = /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|[0-9]{1,2}월)/i

  // 헤더 행 찾기 — No/Region/PRD 또는 Domain 키워드가 있는 행
  let headerRow = null
  let startIdx = 0
  let noCol = -1, regionCol = -1, domainCol = -1, typeCol = -1, prdCol = -1, llmCol = -1, dataStartCol = 4

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
        if (/^(llm\s*model|llm|model)$/i.test(s) && llmCol < 0) llmCol = j
      }
      console.log(`[parseCitDomain] header row${i}: [${(r || []).slice(0,14).map(c => JSON.stringify(String(c||'').trim())).join(', ')}]`)
      console.log(`[parseCitDomain] columns: prdCol=${prdCol} noCol=${noCol} regionCol=${regionCol} domainCol=${domainCol} typeCol=${typeCol} llmCol=${llmCol}`)
      break
    }
    if (String(r[0] || '').trim().startsWith('[') || !String(r[0] || '').trim()) {
      startIdx = i + 1
    }
  }
  // 헤더 못찾으면 best-effort fallback (도메인 자동 감지) 으로 진행하되, visibility 위해 warn.
  if (!headerRow) {
    _logWarn('parseCitDomain', 'header not found (need No/Region/Domain/PRD) — falling back to domain auto-detect',
      { firstRows: rows.slice(0, 5).map(r => r?.slice(0, 6)) })
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
  // 라벨은 canonical 짧은 이름으로 정규화 ('Apr 2026' / '4월' / 'April' → 'Apr')
  // — Touch Points 와 동일 규칙으로 맞춰 dropdown('Apr')과 매칭되도록
  const MONTHS_ORDER_DOM = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
  const canonMonthDom = raw => {
    const s = String(raw || '').trim().toLowerCase()
    if (!s) return null
    const km = s.match(/^(\d{1,2})월/)
    if (km) {
      const n = parseInt(km[1])
      if (n >= 1 && n <= 12) return MONTHS_ORDER_DOM[n - 1]
    }
    const em = s.match(/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i)
    if (em) return em[1].charAt(0).toUpperCase() + em[1].slice(1).toLowerCase()
    return null
  }
  const domainMonthLabels = []
  if (headerRow) {
    for (let i = dataStartCol; i < headerRow.length; i++) {
      const cm = canonMonthDom(headerRow[i])
      if (cm) domainMonthLabels.push({ col: i, label: cm })
    }
  }

  // v3 layout 검출: 월 컬럼마다 (Region, Domain, Type) 블록이 앞에 반복
  // 헤더 예: PRD|No|Region|Domain|Domain Type|Feb|Region|domain|domain_type|Mar|...
  const isTypeHeader = h => /^(type|domain[_ ]type)$/i.test(String(h || '').trim())
  const isDomainHeader = h => /^(domain|domian)$/i.test(String(h || '').trim())
  const isRegionHeader = h => /^region$/i.test(String(h || '').trim())
  const monthBlocks = []  // {regionCol, domainCol, typeCol, monthCol, label}
  if (headerRow) {
    domainMonthLabels.forEach(({ col, label }) => {
      const tCol = col - 1, dCol = col - 2, rCol = col - 3
      if (rCol < 0) return
      if (isTypeHeader(headerRow[tCol]) && isDomainHeader(headerRow[dCol]) && isRegionHeader(headerRow[rCol])) {
        monthBlocks.push({ regionCol: rCol, domainCol: dCol, typeCol: tCol, monthCol: col, label })
      }
    })
  }
  console.log(`[parseCitDomain] domainMonthLabels: ${domainMonthLabels.map(m => `${m.label}@col${m.col}`).join(', ') || '(없음)'}`)
  console.log(`[parseCitDomain] monthBlocks (v3 layout): ${monthBlocks.length}개`, monthBlocks.map(b => `${b.label}@col${b.monthCol}(r${b.regionCol}/d${b.domainCol}/t${b.typeCol})`).join(', '))

  const result = []
  const citDomainTrend = {}
  let citDomainByLlmOut = null  // v3 + LLM Model 컬럼 시 모델별 도메인 집계 (LLM 비교 탭용)
  let citDomainByLlmTrendOut = null  // 모델별 도메인 월 트렌드 (전월 vs 당월 MoM 표용)
  const cntyRanks = {}  // 국가별 순위 카운터
  let legacyCnty = 'TTL'  // 이전 구조용 국가 추적

  // 도메인 문자열 정규화: '[www.x.com](https://www.x.com)' / 'www.x.com' / 'X.COM' → 'x.com'
  const cleanDomain = raw => {
    let s = String(raw || '').trim()
    if (!s) return ''
    const md = s.match(/^\[([^\]]+)\]/)
    if (md) s = md[1].trim()
    s = s.replace(/^https?:\/\//i, '').replace(/^www\./i, '').toLowerCase()
    // 경로/쿼리 제거
    const slash = s.indexOf('/'); if (slash >= 0) s = s.slice(0, slash)
    return s
  }
  if (monthBlocks.length >= 2) {
    // ─ v3: 월별 (Region/Domain/Type/Value) 블록 반복 — 블록 단위 파싱 후 (cnty, domain, type, prd, llm)로 집계
    // 2026-06 — LLM 컬럼 row 보존: 같은 (cnty, domain, type, prd) 의 LLM 별 row (TTL/gemini/search-gpt/perplexity)
    // 각각 별도 row → 클라가 LLM 필터 적용 가능. 합산 시 LLM=TTL 만 사용 (double-count 방지).
    const stripPar = s => String(s || '').replace(/[()]/g, '').trim()
    const aggMap = {}  // key → { cnty, domain, type, prd, llm, monthScores }
    // 병합 셀 (merged cell) 대응 — Sheets API 가 비앵커 행을 빈값으로 반환 → 직전 행 값 forward-fill
    const carry = monthBlocks.map(() => ({ region: '', domain: '', type: '' }))
    let carryPrd = ''
    let ffCount = 0, dropNoDomain = 0
    for (let i = startIdx; i < rows.length; i++) {
      const r = rows[i]
      if (!r) continue
      let prd = prdCol >= 0 ? stripPar(r[prdCol]) : ''
      if (prd) carryPrd = prd
      else prd = carryPrd
      const llm = llmCol >= 0 ? stripPar(r[llmCol]) : ''
      monthBlocks.forEach((b, bi) => {
        const c = carry[bi]
        const ownDomain = cleanDomain(r[b.domainCol])
        if (ownDomain && ownDomain.includes('.')) {
          c.domain = ownDomain
          c.region = String(r[b.regionCol] || '').trim().toUpperCase()
          c.type = String(r[b.typeCol] || '').trim()
        }
        const rawVal = String(r[b.monthCol] || '').replace(/,/g, '').trim()
        const val = parseFloat(rawVal)
        if (isNaN(val) || val <= 0) return
        let domain = ownDomain, rawRegion, type
        if (domain && domain.includes('.')) {
          rawRegion = String(r[b.regionCol] || '').trim().toUpperCase()
          type = String(r[b.typeCol] || '').trim()
        } else if (c.domain) {
          // 값은 있는데 domain 빈값 → 병합 셀 → 직전 행에서 상속
          domain = c.domain; rawRegion = c.region; type = c.type
          ffCount++
        } else {
          dropNoDomain++
          return
        }
        const cnty = REGION_MAP[rawRegion] || rawRegion || 'TTL'
        const key = `${cnty}|${domain}|${type}|${prd}|${llm}`
        if (!aggMap[key]) aggMap[key] = { cnty, domain, type, prd, llm, monthScores: {} }
        aggMap[key].monthScores[b.label] = (aggMap[key].monthScores[b.label] || 0) + val
      })
    }
    if (ffCount || dropNoDomain) console.log(`[parseCitDomain] merged-cell forward-fill: 상속 ${ffCount}건 / domain 없어 drop ${dropNoDomain}건`)
    // ─ LLM 차원 collapse (2026-06) — LLM 드롭박스 제거에 따라 (cnty,domain,type,prd) 단일 row 화.
    // breakdown-aware: 같은 (cnty,domain,type,prd) 의 어떤 월에 모델 행 (gemini 등) 이 존재하면
    // 그 월에서는 집계 행 (TTL/Total/빈값) 을 제외하고 모델 행만 합산 — 레딧 double-count 방지.
    const isTtlLlmVal = m => { const u = stripPar(m); return !u || /^(total|all|ttl)$/i.test(u) }
    const domBreakdown = new Set()  // `${baseKey}|${month}` — 모델 breakdown 존재 월
    Object.values(aggMap).forEach(e => {
      if (isTtlLlmVal(e.llm)) return
      const baseKey = `${e.cnty}|${e.domain}|${e.type}|${e.prd}`
      Object.entries(e.monthScores).forEach(([m, v]) => { if (v > 0) domBreakdown.add(`${baseKey}|${m}`) })
    })
    const collapsed = {}
    Object.values(aggMap).forEach(e => {
      const baseKey = `${e.cnty}|${e.domain}|${e.type}|${e.prd}`
      const isTtl = isTtlLlmVal(e.llm)
      if (!collapsed[baseKey]) collapsed[baseKey] = { cnty: e.cnty, domain: e.domain, type: e.type, prd: e.prd, monthScores: {} }
      Object.entries(e.monthScores).forEach(([m, v]) => {
        if (!(v > 0)) return
        // breakdown 존재 월 → 집계 행 skip / breakdown 없는 월 → 집계 행만
        if (domBreakdown.has(`${baseKey}|${m}`) === isTtl) return
        collapsed[baseKey].monthScores[m] = (collapsed[baseKey].monthScores[m] || 0) + v
      })
    })
    console.log(`[parseCitDomain] LLM collapse: ${Object.keys(aggMap).length} → ${Object.keys(collapsed).length} rows / breakdown 월 ${domBreakdown.size}건`)
    // ─ LLM 모델별 도메인 집계 보존 (LLM 비교 탭용) — collapse 로 llm 필드가 사라지므로 별도 키로 유지
    // shape: { [llmModel]: { [domain]: latestMonthValue } } + 'Total' (collapse 결과 — breakdown-aware)
    const isTtlCntyVal = c => /^(ttl|total|global|all|ww|world|worldwide)$/i.test(String(c || '').trim())
    const isTtlPrdVal = p => { const u = String(p || '').trim(); return !u || /^(ttl|total)$/i.test(u) }
    const latestVal = months => {
      for (let j = domainMonthLabels.length - 1; j >= 0; j--) {
        const v = months[domainMonthLabels[j].label]
        if (v > 0) return v
      }
      return 0
    }
    // 우선순위 버킷: TTL국가+TTL제품 > TTL국가 > TTL제품 > 나머지 — 첫 비어있지 않은 버킷만 사용 (double-count 방지)
    const pickBucket = buckets => buckets.find(b => Object.keys(b).length) || {}
    const accumulate = (slot, monthScores) => {
      Object.entries(monthScores).forEach(([m, v]) => { if (v > 0) slot[m] = (slot[m] || 0) + v })
    }
    const llmDomAcc = {}  // llm → domain → [b0, b1, b2, b3]
    Object.values(aggMap).forEach(e => {
      if (isTtlLlmVal(e.llm)) return
      const m = stripPar(e.llm)
      if (!llmDomAcc[m]) llmDomAcc[m] = {}
      if (!llmDomAcc[m][e.domain]) llmDomAcc[m][e.domain] = [{}, {}, {}, {}]
      const bi = (isTtlCntyVal(e.cnty) ? 0 : 2) + (isTtlPrdVal(e.prd) ? 0 : 1)
      accumulate(llmDomAcc[m][e.domain][bi], e.monthScores)
    })
    const citDomainByLlm = {}
    // 모델별 월 트렌드 보존 (전월 vs 당월 MoM 표용) — latestVal collapse 전의 {month:value} 유지
    // shape: { [llmModel]: { [domain]: { [monthLabel]: value } } } + 'Total'
    const citDomainByLlmTrend = {}
    Object.entries(llmDomAcc).forEach(([m, byDom]) => {
      const out = {}
      const outTrend = {}
      Object.entries(byDom).forEach(([dom, buckets]) => {
        const months = pickBucket(buckets)
        const v = latestVal(months)
        if (v > 0) { out[dom] = v; outTrend[dom] = months }
      })
      if (Object.keys(out).length) citDomainByLlm[m] = out
      if (Object.keys(outTrend).length) citDomainByLlmTrend[m] = outTrend
    })
    if (Object.keys(citDomainByLlm).length) {
      // 'Total' 컬럼 — collapse 결과 (breakdown-aware 합계) 에서 동일 우선순위로
      const totAcc = {}  // domain → [b0, b1, b2, b3]
      Object.values(collapsed).forEach(e => {
        if (!totAcc[e.domain]) totAcc[e.domain] = [{}, {}, {}, {}]
        const bi = (isTtlCntyVal(e.cnty) ? 0 : 2) + (isTtlPrdVal(e.prd) ? 0 : 1)
        accumulate(totAcc[e.domain][bi], e.monthScores)
      })
      const totOut = {}
      const totTrend = {}
      Object.entries(totAcc).forEach(([dom, buckets]) => {
        const months = pickBucket(buckets)
        const v = latestVal(months)
        if (v > 0) { totOut[dom] = v; totTrend[dom] = months }
      })
      if (Object.keys(totOut).length) citDomainByLlm.Total = totOut
      if (Object.keys(totTrend).length) citDomainByLlmTrend.Total = totTrend
      console.log(`[parseCitDomain] citDomainByLlm 모델:`, Object.keys(citDomainByLlm).join(', '))
      // Total 포함 2키 이상일 때만 의미 (모델별 비교 가능)
      if (Object.keys(citDomainByLlm).length > 1) citDomainByLlmOut = citDomainByLlm
      if (Object.keys(citDomainByLlmTrend).length > 1) citDomainByLlmTrendOut = citDomainByLlmTrend
    }
    // collapsed → result 행 + citDomainTrend
    Object.values(collapsed).forEach(e => {
      // 최신 월 citations (chronological 마지막부터 역순)
      let citations = 0
      for (let j = domainMonthLabels.length - 1; j >= 0; j--) {
        const v = e.monthScores[domainMonthLabels[j].label]
        if (v > 0) { citations = v; break }
      }
      if (citations <= 0) return
      cntyRanks[e.cnty] = (cntyRanks[e.cnty] || 0) + 1
      result.push({ cnty: e.cnty, rank: cntyRanks[e.cnty], domain: e.domain, type: e.type, citations, monthScores: e.monthScores, prd: e.prd })
      const key = `${e.cnty}|${e.domain}`
      // 트렌드: PRD=TTL 우선권을 **월 단위** 로 부여 (per-slot 게이팅 X — 회귀:
      // PRD=TTL 행이 일부 월만 갖고 있으면 (예: May-only) 나머지 월의 PRD-specific
      // 데이터가 전면 차단되어 2~4월 트렌드 누락. order-dependent 이기도 했음.)
      const isTtlPrd = !e.prd || /^(ttl|total)$/i.test(e.prd)
      if (!citDomainTrend[key]) {
        citDomainTrend[key] = { cnty: e.cnty, domain: e.domain, type: e.type, months: {}, _ttlMonths: {} }
      }
      const slot = citDomainTrend[key]
      if (isTtlPrd) {
        slot.type = e.type || slot.type
        Object.entries(e.monthScores).forEach(([m, v]) => {
          if (!(v > 0)) return
          if (slot._ttlMonths[m]) slot.months[m] += v       // 복수 TTL 행 (type 상이) 합산
          else { slot.months[m] = v; slot._ttlMonths[m] = true }  // TTL 이 그 월 claim — 폴백값 대체
        })
      } else {
        // PRD-specific 폴백: TTL 이 claim 안 한 월에만 합산 (여러 PRD 행 = total)
        Object.entries(e.monthScores).forEach(([m, v]) => {
          if (!(v > 0) || slot._ttlMonths[m]) return
          slot.months[m] = (slot.months[m] || 0) + v
        })
      }
    })
    // 내부 마커 정리 (출력에 불필요)
    Object.values(citDomainTrend).forEach(v => { delete v._ttlMonths })
    // 진단: 트렌드 월 커버리지 — TTL 키 vs 국가 키 분리 (2~4월 누락 검증용)
    const _trendCov = { TTL: {}, CNTY: {} }
    Object.entries(citDomainTrend).forEach(([k, v]) => {
      const grp = k.startsWith('TTL|') ? 'TTL' : 'CNTY'
      Object.entries(v.months).forEach(([m, val]) => {
        if (val > 0) _trendCov[grp][m] = (_trendCov[grp][m] || 0) + 1
      })
    })
    console.log(`[parseCitDomain] trend 월 커버리지 (키 수) — TTL:`, _trendCov.TTL, `/ CNTY:`, _trendCov.CNTY)
    // 진단: aggMap 통계 — cnty / prd 분포
    const _cntyDist = {}, _prdDist = {}
    Object.values(aggMap).forEach(e => {
      _cntyDist[e.cnty] = (_cntyDist[e.cnty] || 0) + 1
      _prdDist[e.prd || '(empty)'] = (_prdDist[e.prd || '(empty)'] || 0) + 1
    })
    console.log(`[parseCitDomain] aggMap entries: ${Object.keys(aggMap).length} / cnty dist:`, _cntyDist, `/ prd dist:`, _prdDist)
    // 5월 cnty=TTL 행 sample (double-count 검증용)
    const _mayTtlSample = Object.values(aggMap).filter(e => e.cnty === 'TTL' && (e.monthScores.May > 0)).slice(0, 5)
    console.log(`[parseCitDomain] May cnty=TTL sample (${_mayTtlSample.length}건):`, _mayTtlSample.map(e => `${e.domain}|prd='${e.prd}'|type='${e.type}'|May=${e.monthScores.May}`).join(' / '))
    // 국가별 정렬: rank가 cntyRanks 누적 순서 기반이라 citations 큰 순으로 재정렬 후 rank 재할당
    const byCnty = {}
    result.forEach(r => { if (!byCnty[r.cnty]) byCnty[r.cnty] = []; byCnty[r.cnty].push(r) })
    Object.values(byCnty).forEach(list => {
      list.sort((a, b) => b.citations - a.citations)
      list.forEach((r, i) => { r.rank = i + 1 })
    })
  } else {
    // ─ v1/v2: 단일 (Region, Domain, Type) 컬럼 + 월 값들
    for (let i = startIdx; i < rows.length; i++) {
      const r = rows[i]
      if (!r) continue

      const domain = String(r[domainCol] || '').trim()
      const type = String(r[typeCol] || '').trim()
      const prd = prdCol >= 0 ? String(r[prdCol] || '').trim() : ''

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
        result.push({ cnty, rank: cntyRanks[cnty], domain, type, citations, monthScores, prd })
      }
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
  if (citDomainByLlmOut) output.citDomainByLlm = citDomainByLlmOut
  if (citDomainByLlmTrendOut) output.citDomainByLlmTrend = citDomainByLlmTrendOut
  return output
}

// ─── PR Visibility 파서 (Monthly/Weekly 공용) ─────────────────────────────────
// 구조: Type | County | Topic | Brand | Feb/w5 | Mar/w6 | ...
function parsePRVisibility(rows, mode) {
  // mode: 'monthly' 또는 'weekly'
  // 헤더: Type, County, Topic, Brand, data columns...
  const headerIdx = findHeaderIdx(rows, [/^type$/, /^(county|country)$/])
  if (headerIdx < 0) return _logWarn(`parsePRVisibility:${mode}`, 'header not found (need Type + Country)', { firstRows: rows.slice(0, 5).map(r => r?.slice(0, 6)) })

  const header = rows[headerIdx]
  let typeCol = -1, countryCol = -1, topicCol = -1, brandCol = -1, dataStartCol = 4
  for (let i = 0; i < header.length; i++) {
    const s = String(header[i] || '').split(/\n/)[0].trim().toLowerCase()
    if (s === 'type' && typeCol < 0) typeCol = i
    if ((s === 'county' || s === 'country') && countryCol < 0) countryCol = i
    if ((s === 'topic' || s === 'topoc') && topicCol < 0) topicCol = i
    if (s === 'brand' && brandCol < 0) brandCol = i
  }
  // 월간/주간 시트 모두 topic 은 C열(index 2). 헤더명으로 못 찾으면 C열 폴백 (silent 금지)
  if (topicCol < 0) {
    topicCol = 2
    _logWarn(`parsePRVisibility:${mode}`, 'topic header not found, falling back to column C (index 2)', { header: header.slice(0, 6) })
  }
  dataStartCol = Math.max(typeCol, countryCol, topicCol, brandCol) + 1

  // 데이터 라벨 추출 (월 또는 주차). 한국식 '26년 5월' / '2026년 5월' / ISO '2026-05' 포함 (data.md §5.1 ANTI-PATTERN: (\d{4})만 매칭 금지)
  const MONTH_RE = /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|\d{1,2}월|\d{2,4}년|\d{4}[-/]\d{1,2})/i
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
  if (headerIdx < 0) return _logWarn(`parseBrandPromptVisibility:${mode}`, 'header not found (need Stakeholders or Type+Topic)', { firstRows: rows.slice(0, 5).map(r => r?.slice(0, 6)) })

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

  // 한국식 '26년 5월' / '2026년 5월' / ISO '2026-05' 포함 (data.md §5.1 ANTI-PATTERN: (\d{4})만 매칭 금지)
  const MONTH_RE = /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|\d{1,2}월|\d{2,4}년|\d{4}[-/]\d{1,2})/i
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
  const headerIdx = findHeaderIdx(rows, [/^prompts?$/, /^country$/])
  if (headerIdx < 0) return _logWarn('parseAppendix', 'header not found (need Prompts + Country)', { firstRows: rows.slice(0, 5).map(r => r?.slice(0, 6)) })

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
// 시트 데이터와 무관하게 항상 미출시로 간주할 (국가|제품) — Audio 는 BR/VN/IN 미출시
const DEFAULT_UNLAUNCHED = { 'BR|AV': true, 'VN|AV': true, 'IN|AV': true }

function parseUnlaunched(rows) {
  // [1] DETECT: 입력 자체 검증 — rows 가 배열이 아니거나 빈 배열이면 fatal
  if (!Array.isArray(rows) || rows.length === 0) {
    console.warn('[parseUnlaunched] invalid input', { type: typeof rows, isArray: Array.isArray(rows), len: rows?.length })
    console.log(`[parseUnlaunched] decision=default-only reason=invalid-input / 시트매칭 0건 + 디폴트 ${Object.keys(DEFAULT_UNLAUNCHED).length}건`)
    return { unlaunchedMap: { ...DEFAULT_UNLAUNCHED } }
  }
  // 헤더 탐색: country + (launched|status|launch) 콤보
  const headerIdx = findHeaderIdx(rows, [
    /^(country|county)$/,
    /^(launched|launch|launch\s*status|status|출시여부|출시)$/,
  ])
  if (headerIdx < 0) {
    console.warn('[parseUnlaunched] 헤더 못찾음. 시트 첫 10행:')
    rows.slice(0, 10).forEach((r, i) => console.log(`  row${i}:`, r?.slice(0, 6)))
    console.log(`[parseUnlaunched] decision=default-only reason=header-not-found / 시트매칭 0건 + 디폴트 ${Object.keys(DEFAULT_UNLAUNCHED).length}건`)
    return { unlaunchedMap: { ...DEFAULT_UNLAUNCHED } }
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
    console.log(`[parseUnlaunched] decision=default-only reason=missing-columns / 시트매칭 0건 + 디폴트 ${Object.keys(DEFAULT_UNLAUNCHED).length}건`)
    return { unlaunchedMap: { ...DEFAULT_UNLAUNCHED } }
  }

  // unlaunched로 간주할 값 — 다양한 표현 허용
  const UNLAUNCHED_VALUES = new Set([
    'unlaunched', 'not launched', 'notlaunched', '미출시', 'no', 'n',
    'false', 'unlaunch', '미 출시', '미발매', 'not available', 'na',
  ])

  const unlaunchedMap = { ...DEFAULT_UNLAUNCHED }
  let totalRows = 0, matchedRows = 0, skipCount = 0
  rows.slice(headerIdx + 1).forEach((r, idx) => {
    const rowIdx = headerIdx + 1 + idx
    try {
      if (!r) { skipCount++; return }
      const rawStatus = String(r[statusCol] || '').trim()
      if (!rawStatus) { skipCount++; return }
      totalRows++
      const status = rawStatus.toLowerCase().replace(/\s+/g, ' ')
      // launched(정상) 케이스 — silent skip, warn 도 X (정상 데이터)
      if (!UNLAUNCHED_VALUES.has(status) && !UNLAUNCHED_VALUES.has(status.replace(/\s/g, ''))) return
      // 시트 표기('GB','United Kingdom','USA','BRA' 등)를 표준 코드(UK/US/BR ...)로 정규화 →
      // 클라이언트 _isUnlaunched(cnty, prodId)가 'UK|AIRCARE' 키로 일관 조회 가능
      const country = canonicalCountry(r[countryCol])
      const rawCategory = String(r[categoryCol] || '').trim()
      if (!country || !rawCategory) {
        // [3] CAPTURE: 정규화 실패 — 진짜 skip + warn
        console.warn('[parseUnlaunched] row skipped', {
          rowIdx,
          raw: { country: r[countryCol], category: r[categoryCol], status: r[statusCol] },
          parsed: { country, rawCategory },
        })
        skipCount++
        return
      }
      // category: categoryMap.js 의 UL_CODE_NORMALIZE 로 정규화 (TV, IT, AV, WM, REF, DW, VC, COOKING, RAC, AIRCARE, STYLER)
      // 원본도 저장 + 정규화 값도 저장 (매칭 유연성)
      const upperCat = rawCategory.toUpperCase()
      const normCat = UL_CODE_NORMALIZE[upperCat] || upperCat
      unlaunchedMap[`${country}|${normCat}`] = true
      // 원본 값도 별도 키로 저장 (매칭 유연성)
      if (normCat !== upperCat) unlaunchedMap[`${country}|${upperCat}`] = true
      matchedRows++
    } catch (e) {
      // catch 내부에서 raw 추출 자체도 실패할 수 있으므로 try 로 격리, 실패 시 r 전체 dump
      let raw
      try {
        raw = { country: r?.[countryCol], category: r?.[categoryCol], status: r?.[statusCol] }
      } catch {
        raw = r
      }
      console.warn('[parseUnlaunched] row error', { rowIdx, raw, error: e?.message })
      skipCount++
    }
  })
  console.log(`[parseUnlaunched] decision=merged / 시트매칭 ${matchedRows}건 + 디폴트 ${Object.keys(DEFAULT_UNLAUNCHED).length}건 + skip ${skipCount}건 / 총행 ${totalRows} / 최종키 ${Object.keys(unlaunchedMap).length}개`)
  return { unlaunchedMap }
}

// ─── PR Topic List 파서 ──────────────────────────────────────────────────────
// 구조: BU | Topic-대시보드 | Explanation | 기존 토픽 | Topic-row
// BU 빈 셀은 이전 BU 유지 (병합 셀)
function parsePRTopicList(rows) {
  const headerIdx = findHeaderIdx(rows, [/^bu$/, /topic/])
  if (headerIdx < 0) return _logWarn('parsePRTopicList', 'header not found (need BU + Topic)', { firstRows: rows.slice(0, 5).map(r => r?.slice(0, 6)) })
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
  // [1] DETECT: 라우터 레벨 입력 가드 — rows 가 배열이 아니거나 빈 배열이면 fatal.
  // 하위 파서는 정상 rows 를 받는다고 가정 가능 (parseUnlaunched 등 일부는 추가 가드 보유).
  if (!assertRows(rows, `parseSheetRows:${sheetName}`)) return {}

  // [2] CLASSIFY + [4] RECOVER: 파서 throw 시 sync 전체 중단되지 않도록 격리.
  // 한 시트가 망가져도 다른 시트는 계속 동기화. _logFatal 로 fatal 표면화 + {} 반환.
  try {
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
  } catch (e) {
    return _logFatal(`parseSheetRows:${sheetName}`, 'parser threw — sheet 격리', { error: e?.message, stack: e?.stack?.split('\n').slice(0, 3).join(' | ') })
  }

  return _logWarn('parseSheetRows', 'unknown sheet name — router has no handler', { sheetName, known: Object.values(SHEET_NAMES) })
}
