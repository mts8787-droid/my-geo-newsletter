import * as XLSX from 'xlsx'

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
  'TV': 'tv', 'Monitor': 'monitor', 'Audio': 'audio',
  'WM': 'washer', 'REF': 'fridge', 'DW': 'dw',
  'VC': 'vacuum', 'Cooking': 'cooking',
  'RAC': 'rac', 'Aircare': 'aircare',
}
const CATEGORY_KR_MAP = {
  'TV': 'TV', 'Monitor': '모니터', 'Audio': '오디오',
  'WM': '세탁기', 'REF': '냉장고', 'DW': '식기세척기',
  'VC': '청소기', 'Cooking': 'Cooking',
  'RAC': 'RAC', 'Aircare': 'Aircare',
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

// ─── 개별 시트 파서 ──────────────────────────────────────────────────────────────

function parseMeta(rows) {
  console.log('[parseMeta] rows count:', rows.length)
  const obj = {}
  const numKeys = ['titleFontSize', 'citationTopN', 'citDomainTopN']
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
  return { total: { score, prev: score, vsComp, rank: score >= vsComp ? 1 : 2, totalBrands: 12 } }
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
    const country = String(r[2]).trim()
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
      productsPartial.push({ id, bu: div, kr, score: lgScore, prev: 0, vsComp: topComp.score, compName: topComp.name })
    } else {
      productsCnty.push({ product: category, country, score: lgScore, compName: topComp.name, compScore: topComp.score, gap })
    }
  })

  console.log('[parseProductCnty] productsPartial:', productsPartial.length, '| productsCnty:', productsCnty.length)
  if (productsPartial.length) console.log('[parseProductCnty] sample product:', JSON.stringify(productsPartial[0]))

  return {
    ...(productsPartial.length ? { productsPartial } : {}),
    ...(productsCnty.length ? { productsCnty } : {}),
  }
}

function parseWeekly(rows) {
  console.log('[parseWeekly] rows count:', rows.length, '| first row:', JSON.stringify(rows[0]?.slice(0, 10)))
  const weeklyMap = {}
  let weeklyLabels = []

  const headerIdx = rows.findIndex(r => {
    const cells = r.map(c => String(c || '').trim().toLowerCase())
    return cells.includes('category') || cells.includes('product') || cells.includes('lg') || cells.some(c => /^w\d+$/i.test(c))
  })
  if (headerIdx < 0) {
    // MS 시트: 대시보드 레이아웃 — TV/Monitor/AV 카테고리 블록의 TTL 행 파싱
    console.log('[parseWeekly] standard header not found, trying dashboard layout...')
    const catRowIdx = rows.findIndex(r => r.some(c => String(c || '').trim() === 'TV'))
    if (catRowIdx < 0) { console.warn('[parseWeekly] no header or dashboard layout found'); return {} }
    const catRow = rows[catRowIdx]
    const ttlRowIdx = rows.findIndex((r, i) => i > catRowIdx && r.some(c => String(c || '').trim() === 'TTL'))
    if (ttlRowIdx < 0) return {}
    const ttlRow = rows[ttlRowIdx]
    const catMap = { TV: 'tv', Monitor: 'monitor', AV: 'audio' }
    for (const [name, id] of Object.entries(catMap)) {
      const ci = catRow.findIndex(c => String(c || '').trim() === name)
      if (ci < 0) continue
      const vals = []
      for (let j = ci + 1; j < ci + 12 && j < ttlRow.length; j++) {
        const v = pct(ttlRow[j])
        if (v > 0) vals.push(v)
      }
      if (vals.length) weeklyMap[id] = vals.slice(-4)
    }
    if (Object.keys(weeklyMap).length) weeklyLabels = ['W1', 'W2', 'W3', 'W4']
    console.log('[parseWeekly] dashboard layout result:', Object.keys(weeklyMap), weeklyLabels)
    const result = {}
    if (Object.keys(weeklyMap).length) result.weeklyMap = weeklyMap
    if (weeklyLabels.length) result.weeklyLabels = weeklyLabels
    return Object.keys(result).length ? result : {}
  }

  const header = rows[headerIdx]
  console.log('[parseWeekly] header at row', headerIdx, ':', JSON.stringify(header?.slice(0, 10)))
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

  if (brandIdx >= 0) {
    // wCols가 비어있으면 첫 LG 데이터 행에서 데이터 컬럼 자동 감지
    if (!wCols.length) {
      const firstLg = data.find(r => String(r[brandIdx] || '').trim().toUpperCase() === 'LG')
      if (firstLg) {
        for (let i = brandIdx + 1; i < firstLg.length; i++) {
          const v = String(firstLg[i] || '').trim()
          if (v) wCols.push(i)
          else if (wCols.length) break
        }
        weeklyLabels = wCols.map((_, i) => `W${i + 1}`)
      }
    }
    // Format: Product, Country, B/NB, Brand, w5, w6, w7, w8
    data.forEach(r => {
      const brand = String(r[brandIdx] || '').trim().toUpperCase()
      if (brand !== 'LG') return
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
      weeklyMap[CATEGORY_ID_MAP[cat] || cat.toLowerCase()] = vals.slice(-4)
    })
    if (weekLabelOrder.length) weeklyLabels = weekLabelOrder.slice(-4)
  } else if (wCols.length) {
    // Format: Category, w1, w2, w3, w4
    data.forEach(r => {
      if (!isTotal(r)) return
      const cat = String(r[catIdx >= 0 ? catIdx : 0] || '').trim()
      if (!cat) return
      weeklyMap[CATEGORY_ID_MAP[cat] || cat.toLowerCase()] = wCols.map(c => pct(r[c]))
    })
  }

  console.log('[parseWeekly] weeklyMap keys:', Object.keys(weeklyMap), '| weeklyLabels:', weeklyLabels)
  const result = {}
  if (Object.keys(weeklyMap).length) result.weeklyMap = weeklyMap
  if (weeklyLabels.length) result.weeklyLabels = weeklyLabels
  return Object.keys(result).length ? result : {}
}

function parseCitPageType(rows) {
  // 헤더: Country, Page Type, Feb LG, Feb SS, Mar LG, Mar SS, ...
  const headerIdx = rows.findIndex(r =>
    r.some(c => { const s = String(c || '').trim().toLowerCase(); return s.includes('page type') || s === 'country' })
  )
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

  const lg = {}, samsung = {}
  data.forEach(r => {
    const country = String(r[0] || '').replace(/[()]/g, '').trim()
    const pageType = String(r[1] || '').replace(/[()]/g, '').trim()
    const lgVal = numVal(r[bestPair.lg])
    const ssVal = numVal(r[bestPair.ss])

    if (country.toLowerCase() === 'total' || country.toUpperCase() === 'TTL') {
      // Microsite → Microsites 정규화 (시트 vs 코드 이름 차이 맞춤)
      let key = /page total|^ttl$/i.test(pageType) ? 'TTL' : pageType
      if (key.toLowerCase() === 'microsite') key = 'Microsites'
      lg[key] = (lg[key] || 0) + lgVal
      samsung[key] = (samsung[key] || 0) + ssVal
    }
  })

  return (lg.TTL || Object.keys(lg).length) ? { dotcom: { lg, samsung } } : {}
}

function parseCitTouchPoints(rows) {
  // 헤더: (empty), Country, Channel, Feb, Mar, ... 또는 Country, Channel, Feb, ...
  const headerIdx = rows.findIndex(r =>
    r.some(c => { const s = String(c || '').trim().toLowerCase(); return s === 'channel' || s === 'country' })
  )
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

  const data = rows.slice(startRow).filter(r => r.some(c => c != null && String(c).trim()))
  const citations = []

  data.forEach(r => {
    const country = String(r[countryCol] || '').replace(/[()]/g, '').trim().toUpperCase()
    const channel = String(r[channelCol] || '').replace(/[()]/g, '').trim()
    if (country !== 'TTL' || channel.toLowerCase() === 'total') return

    // 최신 월 데이터 찾기
    let score = 0
    for (let i = r.length - 1; i >= dataStartCol; i--) {
      const val = numVal(r[i])
      if (val > 0) { score = val; break }
    }
    if (score > 0) citations.push({ source: channel, category: '', score, delta: 0, ratio: 0 })
  })

  const total = citations.reduce((s, c) => s + c.score, 0)
  citations.sort((a, b) => b.score - a.score)
  citations.forEach((c, i) => {
    c.rank = i + 1
    c.ratio = total > 0 ? +((c.score / total) * 100).toFixed(1) : 0
  })

  return citations.length > 0 ? { citations } : {}
}

function parseCitDomain(rows) {
  const COUNTRIES = ['US','CA','UK','DE','ES','BR','MX','IN','AU','VN']
  const CNTY_KR = { '미국':'US','캐나다':'CA','영국':'UK','독일':'DE','스페인':'ES','브라질':'BR','멕시코':'MX','인도':'IN','호주':'AU','베트남':'VN' }

  // 데이터 컬럼 오프셋 감지: column 0이 비어있으면 offset=1
  let off = 0
  for (let i = 0; i < Math.min(rows.length, 5); i++) {
    const c0 = String(rows[i]?.[0] || '').trim()
    const c1 = String(rows[i]?.[1] || '').trim()
    if (!c0 && (c1.includes('.') || c1.includes('[') || COUNTRIES.includes(c1.toUpperCase()))) { off = 1; break }
  }

  // 헤더/설명 행 건너뛰기
  let startIdx = 0
  for (let i = 0; i < Math.min(rows.length, 10); i++) {
    const cv = String(rows[i]?.[off] || '').trim()
    if (cv.includes('.') && cv.length > 3) { startIdx = i; break }
    if (/domain|domian/i.test(cv) || cv === '' || cv.startsWith('[') || cv.startsWith('※')) {
      startIdx = i + 1
    }
  }

  const result = []
  let currentCnty = 'TTL'
  let rank = 0

  for (let i = startIdx; i < rows.length; i++) {
    const r = rows[i]
    const cv = String(r[off] || '').trim()      // domain or country
    const ct = String(r[off + 1] || '').trim()   // type
    if (!cv) continue

    // 국가 마커 감지 (영문 코드 또는 한글)
    const cntyCode = COUNTRIES.includes(cv.toUpperCase()) ? cv.toUpperCase() : CNTY_KR[cv] || null
    if (cntyCode && (!ct || ct === '')) {
      currentCnty = cntyCode
      rank = 0
      continue
    }

    // 헤더/설명 행 건너뛰기
    if (/domain|domian|^feb$|^mar$|^apr$/i.test(cv) || cv.startsWith('[') || cv.startsWith('※')) continue

    const domain = cv
    const type = ct

    // 최신 월 데이터 찾기 (오른쪽에서부터)
    let citations = 0
    for (let j = r.length - 1; j >= off + 2; j--) {
      const raw = String(r[j] || '').replace(/,/g, '').trim()
      if (!raw) continue
      const val = parseFloat(raw)
      if (!isNaN(val) && val > 0) { citations = val; break }
    }

    if (citations > 0) {
      rank++
      result.push({ cnty: currentCnty, rank, domain, type, citations })
    }
  }

  console.log('[parseCitDomain] result count:', result.length, '| countries:', [...new Set(result.map(r => r.cnty))])
  return result.length > 0 ? { citationsCnty: result } : {}
}

// ─── 메인 파서 라우터 ──────────────────────────────────────────────────────────
export function parseSheetRows(sheetName, rows) {
  if (sheetName === SHEET_NAMES.meta) return parseMeta(rows)

  if (sheetName === SHEET_NAMES.visSummary) return parseVisSummary(rows)

  if (sheetName === SHEET_NAMES.productMS ||
      sheetName === SHEET_NAMES.productHS ||
      sheetName === SHEET_NAMES.productES) return parseProductCnty(rows)

  if (sheetName === SHEET_NAMES.weeklyMS ||
      sheetName === SHEET_NAMES.weeklyHS ||
      sheetName === SHEET_NAMES.weeklyES) return parseWeekly(rows)

  if (sheetName === SHEET_NAMES.citPageType) return parseCitPageType(rows)

  if (sheetName === SHEET_NAMES.citTouchPoints) return parseCitTouchPoints(rows)

  if (sheetName === SHEET_NAMES.citDomain) return parseCitDomain(rows)

  return {}
}
