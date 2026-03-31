import * as XLSX from 'xlsx-js-style'

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
  citPageType:    'Citation-Page Type',
  citTouchPoints: 'Citation-Touch Points',
  citDomain:      'Citation-Domain',
}

// ─── 카테고리 ID/KR 매핑 ──────────────────────────────────────────────────────
const CATEGORY_ID_MAP = {
  'TV': 'tv', 'Monitor': 'monitor', 'IT': 'monitor', 'Audio': 'audio', 'AV': 'audio',
  'WM': 'washer', 'REF': 'fridge', 'DW': 'dw',
  'VC': 'vacuum', 'Cooking': 'cooking',
  'RAC': 'rac', 'Aircare': 'aircare', 'Air Care': 'aircare',
}
const CATEGORY_KR_MAP = {
  'TV': 'TV', 'Monitor': '모니터', 'IT': '모니터', 'Audio': '오디오', 'AV': '오디오',
  'WM': '세탁기', 'REF': '냉장고', 'DW': '식기세척기',
  'VC': '청소기', 'Cooking': 'Cooking',
  'RAC': 'RAC', 'Aircare': 'Aircare', 'Air Care': 'Aircare',
}

export const DOTCOM_LG_COLS   = ['TTL','PLP','Microsites','PDP','Newsroom','Support','Buying-guide','Experience']
export const DOTCOM_SAM_COLS  = ['TTL','PLP','Microsites','PDP','Newsroom','Support','Buying-guide']

export function downloadTemplate(meta, total, products, citations, dotcom = {}) {
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

function pct(v) {
  const s = String(v ?? '').replace(/%/g, '').replace(/,/g, '').trim()
  const n = parseFloat(s) || 0
  return Math.abs(n) < 1 && n !== 0 ? +(n * 100).toFixed(2) : +n.toFixed(2)
}

function numVal(v) {
  return parseFloat(String(v ?? '').replace(/,/g, '').replace(/%/g, '').trim()) || 0
}

// 국가 코드 정규화: V.N. → VN, U.S. → US 등 (점 제거 + 대문자)
function normCountry(raw) {
  return String(raw || '').replace(/[()]/g, '').replace(/\./g, '').trim().toUpperCase()
}

// ─── 개별 시트 파서 ──────────────────────────────────────────────────────────────

function parseMeta(rows) {
  console.log('[parseMeta] rows count:', rows.length)
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
  console.log('[parseVisSummary] rows count:', rows.length, '| first row:', JSON.stringify(rows[0]?.slice(0, 8)))
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

  // 2) TOTAL 행 직접 탐색: Countries/Divisions 가 "TOTAL"인 행의 E(4), F(5) 컬럼
  //    헤더에 LG/Samsung 이름이 없으므로 컬럼 위치(E=LG, F=Samsung)를 직접 사용
  const ttlRow = rows.find(r =>
    r.some(c => String(c || '').trim().toUpperCase() === 'TOTAL')
  )
  if (!ttlRow) return {}

  // LG=col4(E), Samsung=col5(F) — 헤더에 LG가 있으면 그 위치 사용, 없으면 고정 인덱스
  const headerRow = rows.find(r => r.some(c => String(c || '').trim().toUpperCase() === 'LG'))
  const lgCol = headerRow ? headerRow.findIndex(c => String(c || '').trim().toUpperCase() === 'LG') : 4
  const ssCol = headerRow
    ? headerRow.findIndex(c => { const s = String(c || '').trim().toUpperCase(); return s === 'SAMSUNG' || s === 'SAMSUMG' })
    : 5
  const actualSsCol = ssCol >= 0 ? ssCol : lgCol + 1

  const score = pct(ttlRow[lgCol])
  const vsComp = pct(ttlRow[actualSsCol])
  console.log(`[parseVisSummary] TOTAL row found: LG(col${lgCol})=${score}, SS(col${actualSsCol})=${vsComp}`)

  // 월간 트렌드 데이터 수집 — 헤더: Date, Region, Countries, Divisions, LG, Samsung, ...
  const dateCol = headerRow ? headerRow.findIndex(c => /date/i.test(String(c || '').trim())) : 0
  const cntyCol = headerRow ? headerRow.findIndex(c => /countries|country/i.test(String(c || '').trim())) : 2
  const divCol = headerRow ? headerRow.findIndex(c => /divisions?/i.test(String(c || '').trim())) : 3

  const monthlyVis = [] // { date, country, division, lg, comp }
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
  console.log(`[parseVisSummary] monthlyVis: ${monthlyVis.length} rows, dates: ${[...new Set(monthlyVis.map(r => r.date))].join(', ')}`)

  const result = { total: { score, prev: score, vsComp, rank: score >= vsComp ? 1 : 2, totalBrands: 12 } }
  if (monthlyVis.length) result.monthlyVis = monthlyVis
  return result
}

function parseProductCnty(rows) {
  // 헤더: Div, Date, Country, Category, LG, SAMSUNG, Comp3, ...
  console.log('[parseProductCnty] rows count:', rows.length, '| first row:', JSON.stringify(rows[0]?.slice(0, 8)))
  const headerIdx = rows.findIndex(r => {
    const c0 = String(r[0] || '').trim().toLowerCase()
    return c0 === 'div' || c0 === 'division'
  })
  if (headerIdx < 0) {
    // fallback: LG 컬럼이 있는 행을 헤더로 사용
    const altIdx = rows.findIndex(r => r.some((c, i) => i >= 3 && String(c || '').trim().toUpperCase() === 'LG'))
    if (altIdx < 0) { console.warn('[parseProductCnty] header not found'); return {} }
    console.log('[parseProductCnty] using fallback header at row', altIdx, ':', JSON.stringify(rows[altIdx]?.slice(0, 8)))
    return parseProductCntyFromRow(rows, altIdx)
  }
  console.log('[parseProductCnty] header at row', headerIdx, ':', JSON.stringify(rows[headerIdx]?.slice(0, 8)))
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

  const productsPartial = []
  const productsCnty = []

  data.forEach(r => {
    const div = String(r[0]).trim()
    const date = String(r[1] || '').trim()
    const country = normCountry(r[2]) || String(r[2]).trim()
    const category = String(r[3]).trim()
    const lgScore = pct(r[lgIdx])

    const compScores = competitors
      .map(c => ({ name: c.name, score: pct(r[c.col]) }))
      .filter(c => c.score > 0)
    const topComp = [...compScores].sort((a, b) => b.score - a.score)[0] || { name: '', score: 0 }
    const gap = +(lgScore - topComp.score).toFixed(2)

    if (country === 'TTL') {
      const id = CATEGORY_ID_MAP[category] || category.toLowerCase()
      const kr = CATEGORY_KR_MAP[category] || category
      productsPartial.push({ id, bu: div, kr, category, date, score: lgScore, prev: 0, vsComp: topComp.score, compName: topComp.name })
    } else {
      productsCnty.push({ product: category, country, date, score: lgScore, compName: topComp.name, compScore: topComp.score, gap })
    }
  })

  console.log('[parseProductCnty] productsPartial:', productsPartial.length, '| productsCnty:', productsCnty.length)
  if (productsPartial.length) console.log('[parseProductCnty] sample product:', JSON.stringify(productsPartial[0]))

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
      const s = String(cell || '').trim()
      if (/^W\d+$/i.test(s)) labels.push(s.toUpperCase())
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
  console.log('[dashLayout] div:', div, '| catRow idx:', catRowIdx, '| catRow:', JSON.stringify(catRow))

  // TTL 행 찾기 (섹션 경계)
  const ttlRowIdx = rows.findIndex((r, i) =>
    i > catRowIdx && r.some(c => String(c || '').trim() === 'TTL')
  )
  const sectionEnd = ttlRowIdx > 0 ? ttlRowIdx + 1 : Math.min(catRowIdx + 20, rows.length)

  // catRow ~ sectionEnd 사이 행 덤프 (디버그)
  for (let i = catRowIdx + 1; i < sectionEnd; i++) {
    console.log(`[dashLayout] row ${i}:`, JSON.stringify(rows[i]))
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
  console.log(`[dashLayout] using ${dataRowLabel} row at idx ${dataRowIdx}:`, JSON.stringify(dataRow))

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
    console.log(`[dashLayout] "${name}" col:${ci}, nextCat:${nextCatCol}, raw dataRow[ci+1..]:`, JSON.stringify(dataRow.slice(ci + 1, nextCatCol)), '→ vals:', vals)
    if (vals.length) weeklyMap[id] = vals
  }
  if (!Object.keys(weeklyMap).length) {
    console.log('[dashLayout] no weekly data found for div:', div)
    return {}
  }
  const weeklyLabels = findWeekLabels(rows, catRowIdx, sectionEnd)
    || Object.values(weeklyMap)[0]?.map((_, i) => `W${i + 1}`) || []
  console.log('[parseWeekly] dashboard layout result:', Object.keys(weeklyMap), '| labels:', weeklyLabels)
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
  console.log('[parseWeekly] div:', div, '| rows count:', rows.length, '| first row:', JSON.stringify(rows[0]?.slice(0, 10)))
  // 시트 전체 구조 덤프 (디버그)
  for (let i = 0; i < Math.min(rows.length, 60); i++) {
    const r = rows[i]
    const nonEmpty = r?.map((c, j) => [j, c]).filter(([, c]) => c != null && String(c).trim() !== '')
    if (nonEmpty?.length) console.log(`[parseWeekly] ROW ${i}:`, JSON.stringify(nonEmpty))
  }
  const weeklyMap = {}
  let weeklyLabels = []

  // 1차: 'product' 또는 'category'가 앞 4컬럼에 있는 행 (표준 테이블 헤더)
  let headerIdx = rows.findIndex(r => {
    const first5 = r.slice(0, 5).map(c => String(c || '').trim().toLowerCase())
    return first5.includes('category') || first5.includes('product')
  })
  // 2차: W패턴 컬럼이 있는 행
  if (headerIdx < 0) {
    headerIdx = rows.findIndex(r =>
      r.some(c => /^w\d+$/i.test(String(c || '').trim()))
    )
  }
  // 3차: 'lg' 컬럼 (앞 10컬럼 + 문자열 셀 3개 이상 — 대시보드 브랜드 행 오감지 방지)
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
    console.log('[parseWeekly] standard header not found, trying dashboard layout...')
    return parseDashboardLayout(rows, div)
  }

  const header = rows[headerIdx]
  console.log('[parseWeekly] header at row', headerIdx, '| FULL:', JSON.stringify(header))
  if (headerIdx > 0) console.log('[parseWeekly] row above header:', JSON.stringify(rows[headerIdx - 1]))
  const data = rows.slice(headerIdx + 1).filter(r => r[0] != null && String(r[0]).trim())

  const catIdx = header.findIndex(c => {
    const s = String(c || '').trim().toLowerCase()
    return s === 'category' || s === 'product'
  })
  const countryIdx = header.findIndex(c => String(c || '').trim().toLowerCase() === 'country')
  const brandIdx = header.findIndex(c => String(c || '').trim().toLowerCase() === 'brand')
  const lgIdx = header.findIndex(c => String(c || '').trim().toUpperCase() === 'LG')

  // 주차 컬럼 찾기
  const wCols = []
  for (let i = 0; i < header.length; i++) {
    if (/^w\d+$/i.test(String(header[i] || '').trim())) wCols.push(i)
  }
  weeklyLabels = wCols.map(i => String(header[i] || '').trim())

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
      weeklyAll[prodId][cnty][brand] = wCols.map(c => pct(r[c]))
    })
    // LG Total만 추출 (기존 weeklyMap 호환)
    data.forEach(r => {
      const brand = String(r[brandIdx] || '').trim().toUpperCase()
      if (brand !== 'LG') return
      if (!isNonBrand(r)) return
      if (!isTotal(r)) return
      const cat = String(r[catIdx >= 0 ? catIdx : 0] || '').trim()
      if (!cat) return
      weeklyMap[CATEGORY_ID_MAP[cat] || cat.toLowerCase()] = wCols.map(c => pct(r[c]))
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
      byCategory[cat].push(pct(r[lgIdx]))
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
      weeklyMap[CATEGORY_ID_MAP[cat] || cat.toLowerCase()] = wCols.map(c => pct(r[c]))
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
      console.log('[parseWeekly] trimming weeks: start=' + start + ', from ' + weeklyLabels.length + ' → ' + (weeklyLabels.length - start))
      weeklyLabels = weeklyLabels.slice(start)
      sliceWeeklyData(weeklyAll, weeklyMap, start)
    }
  }

  console.log('[parseWeekly] weeklyMap keys:', Object.keys(weeklyMap), '| weeklyLabels:', weeklyLabels,
    '| weeklyAll products:', Object.keys(weeklyAll))
  if (Object.keys(weeklyMap).length) {
    const result = { weeklyMap }
    if (weeklyLabels.length) result.weeklyLabels = weeklyLabels
    if (Object.keys(weeklyAll).length) result.weeklyAll = weeklyAll
    return result
  }
  // 표준 파싱 실패 시 대시보드 레이아웃 fallback
  console.log('[parseWeekly] standard parsing empty, trying dashboard layout...')
  return parseDashboardLayout(rows, div)
}

function parseCitPageType(rows) {
  console.log(`[parseCitPageType] START: ${rows.length} rows, first 5 rows:`)
  for (let i = 0; i < Math.min(5, rows.length); i++) {
    console.log(`[parseCitPageType] row ${i}: ${JSON.stringify((rows[i] || []).slice(0, 8))}`)
  }
  // 헤더: Country, Page Type, Feb LG, Feb SS, Mar LG, Mar SS, ...
  // [Section Title] 형태의 제목 행은 건너뜀
  const headerIdx = rows.findIndex(r => {
    const hasKeyword = r.some(c => { const s = String(c || '').trim().toLowerCase(); return s.includes('page type') || s === 'country' })
    if (!hasKeyword) return false
    const isTitleRow = r.some(c => /^\[.*\]$/.test(String(c || '').trim()))
    return !isTitleRow
  })
  if (headerIdx < 0) { console.log('[parseCitPageType] header not found!'); return {} }

  const header = rows[headerIdx]
  console.log(`[parseCitPageType] header row ${headerIdx}: ${JSON.stringify(header.slice(0, 10))}`)

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
  console.log(`[parseCitPageType] headerIdx=${headerIdx}, bestPair=lg:${bestPair.lg}/ss:${bestPair.ss}, dataRows=${data.length}`)
  const _ptSeenCountries = new Set()
  data.forEach(r => {
    const rawCountry = normCountry(r[0])
    const pageType = String(r[1] || '').replace(/[()]/g, '').trim()
    const lgVal = numVal(r[bestPair.lg])
    const ssVal = numVal(r[bestPair.ss])

    let key = /page total|^ttl$/i.test(pageType) ? 'TTL' : pageType
    if (key.toLowerCase() === 'microsite') key = 'Microsites'

    const cnty = CNTY_ALIAS[rawCountry] || rawCountry.toUpperCase()
    _ptSeenCountries.add(cnty)
    if (cnty === 'TTL') {
      lg[key] = (lg[key] || 0) + lgVal
      samsung[key] = (samsung[key] || 0) + ssVal
    } else {
      if (!dotcomByCnty[cnty]) dotcomByCnty[cnty] = { lg: {}, samsung: {} }
      dotcomByCnty[cnty].lg[key] = (dotcomByCnty[cnty].lg[key] || 0) + lgVal
      dotcomByCnty[cnty].samsung[key] = (dotcomByCnty[cnty].samsung[key] || 0) + ssVal
    }
  })

  console.log('[parseCitPageType] seen countries:', [..._ptSeenCountries])
  console.log('[parseCitPageType] TTL lg:', JSON.stringify(lg), '| byCnty keys:', Object.keys(dotcomByCnty))

  const result = {}
  if (lg.TTL || Object.keys(lg).length) result.dotcom = { lg, samsung }
  if (Object.keys(dotcomByCnty).length) result.dotcomByCnty = dotcomByCnty
  return result
}

function parseCitTouchPoints(rows) {
  console.log(`[parseCitTouchPoints] START: ${rows.length} rows`)
  for (let i = 0; i < Math.min(5, rows.length); i++) {
    console.log(`[parseCitTouchPoints] row ${i}: ${JSON.stringify((rows[i] || []).slice(0, 10))}`)
  }
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
  let countryCol = -1, channelCol = -1, dataStartCol = 2
  for (let i = 0; i < header.length; i++) {
    const s = String(header[i] || '').trim().toLowerCase()
    if (s === 'country' && countryCol < 0) countryCol = i
    if (s === 'channel' && channelCol < 0) channelCol = i
  }
  if (countryCol >= 0 && channelCol >= 0) {
    dataStartCol = Math.max(countryCol, channelCol) + 1
  } else {
    // 첫 열이 비어있으면 col0=empty, col1=country, col2=channel, col3+=data
    const firstDataRow = rows[startRow]
    if (firstDataRow && !String(firstDataRow[0] || '').trim()) {
      countryCol = 1; channelCol = 2; dataStartCol = 3
    } else {
      countryCol = 0; channelCol = 1; dataStartCol = 2
    }
  }

  // 유효한 월 이름 패턴 (Jan, Feb, Mar, ..., 1월, 2월, ... 또는 숫자)
  const MONTH_RE = /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|[0-9]{1,2}월)/i

  // 월 라벨 추출 — 헤더 행에서 유효한 월 이름만 수집
  const monthLabels = []
  for (let i = dataStartCol; i < header.length; i++) {
    const h = String(header[i] || '').trim()
    if (h && MONTH_RE.test(h)) monthLabels.push({ col: i, label: h })
  }
  // 헤더에 월 라벨이 부족하면, 헤더 위 행에서 보충 (빈 컬럼이나 비월 라벨 대체)
  if (headerIdx > 0) {
    const monthRow = rows[headerIdx - 1]
    if (monthRow) {
      for (let i = dataStartCol; i < monthRow.length; i++) {
        const mv = String(monthRow[i] || '').trim()
        if (mv && MONTH_RE.test(mv) && !monthLabels.some(m => m.col === i)) {
          monthLabels.push({ col: i, label: mv })
        }
      }
    }
  }
  monthLabels.sort((a, b) => a.col - b.col)

  // 라벨 없는 데이터 컬럼에 월 이름 역산 (첫 라벨 월에서 거꾸로 세기)
  // 예: col 4,5 비어있고 col 6=Apr → col 5=Mar, col 4=Feb
  if (monthLabels.length > 0) {
    const MONTHS_ORDER = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    const firstLabeled = monthLabels[0]
    const firstMonthIdx = MONTHS_ORDER.findIndex(m => firstLabeled.label.toLowerCase().startsWith(m.toLowerCase()))
    if (firstMonthIdx > 0 && firstLabeled.col > dataStartCol) {
      const dataRows = rows.slice(startRow)
      const unlabeled = []
      for (let c = dataStartCol; c < firstLabeled.col; c++) {
        if (dataRows.some(r => { const v = typeof r[c] === 'number' ? r[c] : parseFloat(String(r[c] || '').replace(/,/g, '')); return !isNaN(v) && v > 0 })) {
          unlabeled.push(c)
        }
      }
      // 가장 가까운 컬럼부터 역산
      for (let i = unlabeled.length - 1; i >= 0; i--) {
        const mi = firstMonthIdx - (unlabeled.length - i)
        if (mi >= 0) {
          monthLabels.push({ col: unlabeled[i], label: MONTHS_ORDER[mi] })
        }
      }
      monthLabels.sort((a, b) => a.col - b.col)
    }
  }

  const data = rows.slice(startRow).filter(r => r.some(c => c != null && String(c).trim()))
  const citations = []
  // 월간 트렌드 데이터: { channelName: { month1: score, month2: score, ... } }
  const citTouchPointsTrend = {}

  // 국가별 카테고리 Citation 수집
  const citationsByCnty = {}   // { cnty: [{ source, score, ... }] }

  console.log(`[parseCitTouchPoints] headerIdx=${headerIdx}, countryCol=${countryCol}, channelCol=${channelCol}, dataStartCol=${dataStartCol}, dataRows=${data.length}, monthLabels=${monthLabels.length}`)
  console.log(`[parseCitTouchPoints] header: ${JSON.stringify(header.slice(0, 10))}`)
  console.log(`[parseCitTouchPoints] monthLabels: ${JSON.stringify(monthLabels)}`)
  const _seenCountries = new Set()

  data.forEach(r => {
    const country = normCountry(r[countryCol])
    const channel = String(r[channelCol] || '').replace(/[()]/g, '').trim()
    if (!channel || channel.toLowerCase() === 'total') return
    _seenCountries.add(country)

    // 최신 월 데이터 찾기 — monthLabels 컬럼만 사용 (역순으로)
    let score = 0
    if (monthLabels.length > 0) {
      for (let i = monthLabels.length - 1; i >= 0; i--) {
        const val = numVal(r[monthLabels[i].col])
        if (val > 0) { score = val; break }
      }
    } else {
      // monthLabels가 없으면 기존 방식 (dataStartCol부터 역순)
      for (let i = r.length - 1; i >= dataStartCol; i--) {
        const val = numVal(r[i])
        if (val > 0) { score = val; break }
      }
    }

    if (country === 'TTL') {
      if (score > 0) citations.push({ source: channel, category: '', score, delta: 0, ratio: 0 })
      // 모든 월별 데이터 수집 (트렌드용)
      const monthData = {}
      monthLabels.forEach(({ col, label }) => {
        const val = numVal(r[col])
        if (val > 0) monthData[label] = val
      })
      if (Object.keys(monthData).length > 0) {
        citTouchPointsTrend[channel] = monthData
      }
    } else if (score > 0) {
      if (!citationsByCnty[country]) citationsByCnty[country] = []
      citationsByCnty[country].push({ source: channel, category: '', score, delta: 0, ratio: 0 })
    }
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

  // 유효한 월 라벨만 필터링 (데이터가 있는 월)
  const validMonths = monthLabels.map(m => m.label).filter(label =>
    Object.values(citTouchPointsTrend).some(d => d[label] > 0)
  )

  console.log('[parseCitTouchPoints] seen countries:', [..._seenCountries])
  console.log('[parseCitTouchPoints] TTL citations:', citations.length, '| byCnty keys:', Object.keys(citationsByCnty))
  for (const [cnty, list] of Object.entries(citationsByCnty)) {
    console.log(`[parseCitTouchPoints]   ${cnty}: ${list.length} channels, top=${list[0]?.source}(${list[0]?.score})`)
  }

  const result = {}
  if (citations.length > 0) result.citations = citations
  if (Object.keys(citationsByCnty).length > 0) result.citationsByCnty = citationsByCnty
  if (Object.keys(citTouchPointsTrend).length > 0) {
    result.citTouchPointsTrend = citTouchPointsTrend
    result.citTrendMonths = validMonths
  }
  return result
}

function parseCitDomain(rows) {
  console.log(`[parseCitDomain] START: ${rows.length} rows`)
  for (let i = 0; i < Math.min(8, rows.length); i++) {
    console.log(`[parseCitDomain] row ${i}: ${JSON.stringify((rows[i] || []).slice(0, 12))}`)
  }
  const COUNTRIES = ['US','CA','UK','DE','ES','BR','MX','IN','AU','VN']
  const CNTY_KR = { '미국':'US','캐나다':'CA','영국':'UK','독일':'DE','스페인':'ES','브라질':'BR','멕시코':'MX','인도':'IN','호주':'AU','베트남':'VN' }

  // 데이터 컬럼 오프셋 감지: column 0이 비어있으면 offset=1
  let off = 0
  for (let i = 0; i < Math.min(rows.length, 5); i++) {
    const c0 = String(rows[i]?.[0] || '').trim()
    const c1 = String(rows[i]?.[1] || '').trim()
    if (!c0 && (c1.includes('.') || c1.includes('[') || COUNTRIES.includes(c1.toUpperCase()))) { off = 1; break }
  }

  // 헤더 행 찾기 (월 라벨 추출용)
  let headerRow = null
  let startIdx = 0
  for (let i = 0; i < Math.min(rows.length, 10); i++) {
    const cv = String(rows[i]?.[off] || '').trim()
    if (/domain|domian/i.test(cv) && !/^\[.*\]$/.test(cv)) {
      headerRow = rows[i]
      startIdx = i + 1
      break
    }
    if (cv.includes('.') && cv.length > 3) { startIdx = i; break }
    if (cv === '' || cv.startsWith('[') || cv.startsWith('※')) {
      startIdx = i + 1
    }
  }

  // 월 라벨 추출
  const MONTH_RE = /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|[0-9]{1,2}월)/i
  const domainMonthLabels = []
  if (headerRow) {
    // 먼저 헤더 행에서 직접 월 라벨 찾기 (단일 헤더 구조)
    for (let i = off + 2; i < headerRow.length; i++) {
      const h = String(headerRow[i] || '').trim()
      if (h && MONTH_RE.test(h)) domainMonthLabels.push({ col: i, label: h })
    }
    // 단일 헤더에서 못 찾으면, 반복 그룹 구조 (Domain/Type/Data × N개월)
    // 헤더 위 행에서 월 이름을 찾고, 해당 그룹의 데이터 컬럼(월이름+2) 매핑
    if (domainMonthLabels.length === 0) {
      const headerIdx = rows.indexOf(headerRow)
      const monthRow = headerIdx > 0 ? rows[headerIdx - 1] : null
      if (monthRow) {
        for (let i = 0; i < monthRow.length; i++) {
          const mv = String(monthRow[i] || '').trim()
          if (mv && MONTH_RE.test(mv)) {
            // 데이터 컬럼 = 월 이름 컬럼 + 2 (3-column group: Domain, Type, Data)
            const dataCol = i + 2
            if (dataCol < headerRow.length) {
              domainMonthLabels.push({ col: dataCol, label: mv })
            }
          }
        }
        console.log(`[parseCitDomain] multi-column layout: monthRow months=${JSON.stringify(domainMonthLabels)}`)
      }
    }
  }

  const result = []
  // 월간 트렌드: { "cnty|domain": { month1: val, month2: val } }
  const citDomainTrend = {}
  let currentCnty = 'TTL'
  let rank = 0

  console.log(`[parseCitDomain] startIdx=${startIdx}, offset=${off}, totalRows=${rows.length}, headerRow=${headerRow ? 'found' : 'none'}, monthLabels=${domainMonthLabels.length}`)
  if (headerRow) console.log(`[parseCitDomain] header: ${JSON.stringify(headerRow.slice(0, 10))}`)
  console.log(`[parseCitDomain] domainMonthLabels: ${JSON.stringify(domainMonthLabels)}`)

  for (let i = startIdx; i < rows.length; i++) {
    const r = rows[i]
    const cv = String(r[off] || '').trim()      // domain or country
    const ct = String(r[off + 1] || '').trim()   // type
    if (!cv) continue

    // 국가 마커 감지 (영문 코드 또는 한글)
    const cntyCode = COUNTRIES.includes(cv.toUpperCase()) ? cv.toUpperCase() : CNTY_KR[cv] || null
    if (cntyCode) {
      if (!ct || ct === '') {
        console.log(`[parseCitDomain] ✓ country marker detected: row=${i}, cv="${cv}" → ${cntyCode}`)
        currentCnty = cntyCode
        rank = 0
        continue
      } else {
        console.log(`[parseCitDomain] ✗ country code "${cv}"(→${cntyCode}) skipped: type column not empty, ct="${ct}" (row=${i})`)
      }
    }

    // 헤더/설명 행 건너뛰기
    if (/domain|domian|^feb$|^mar$|^apr$/i.test(cv) || cv.startsWith('[') || cv.startsWith('※')) continue

    const domain = cv
    const type = ct

    // 최신 월 데이터 찾기 — domainMonthLabels 컬럼만 역순 탐색
    let citations = 0
    if (domainMonthLabels.length > 0) {
      for (let j = domainMonthLabels.length - 1; j >= 0; j--) {
        const raw = String(r[domainMonthLabels[j].col] || '').replace(/,/g, '').trim()
        const val = parseFloat(raw)
        if (!isNaN(val) && val > 0) { citations = val; break }
      }
    } else {
      for (let j = r.length - 1; j >= off + 2; j--) {
        const raw = String(r[j] || '').replace(/,/g, '').trim()
        if (!raw) continue
        const val = parseFloat(raw)
        if (!isNaN(val) && val > 0) { citations = val; break }
      }
    }

    // 모든 월별 데이터 수집 (트렌드용)
    if (domainMonthLabels.length > 0) {
      const monthData = {}
      domainMonthLabels.forEach(({ col, label }) => {
        const raw = String(r[col] || '').replace(/,/g, '').trim()
        const val = parseFloat(raw)
        if (!isNaN(val) && val > 0) monthData[label] = val
      })
      if (Object.keys(monthData).length > 0) {
        const key = `${currentCnty}|${domain}`
        citDomainTrend[key] = { cnty: currentCnty, domain, type, months: monthData }
      }
    }

    if (citations > 0) {
      rank++
      result.push({ cnty: currentCnty, rank, domain, type, citations })
    }
  }

  // 국가별 결과 상세 로그
  const cntyStats = {}
  result.forEach(r => { cntyStats[r.cnty] = (cntyStats[r.cnty] || 0) + 1 })
  console.log('[parseCitDomain] result count:', result.length, '| countries:', [...new Set(result.map(r => r.cnty))])
  console.log('[parseCitDomain] per-country counts:', JSON.stringify(cntyStats))
  if (Object.keys(citDomainTrend).length) {
    const trendCnties = [...new Set(Object.values(citDomainTrend).map(d => d.cnty))]
    console.log('[parseCitDomain] trend countries:', trendCnties)
  }

  const output = {}
  if (result.length > 0) output.citationsCnty = result
  if (Object.keys(citDomainTrend).length > 0) {
    output.citDomainTrend = citDomainTrend
    // 유효한 월 라벨
    const validMonths = domainMonthLabels.map(m => m.label).filter(label =>
      Object.values(citDomainTrend).some(d => d.months[label] > 0)
    )
    output.citDomainMonths = validMonths
  }
  return output
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

  if (sheetName === SHEET_NAMES.citPageType) return parseCitPageType(rows)

  if (sheetName === SHEET_NAMES.citTouchPoints) return parseCitTouchPoints(rows)

  if (sheetName === SHEET_NAMES.citDomain) return parseCitDomain(rows)

  return {}
}
