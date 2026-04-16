// ─── 주간 보고용 HTML 생성기 (표 기반, 주간 데이터) ────────────────────────
const FONT = "'LG Smart', 'Arial Narrow', 'Malgun Gothic', Arial, sans-serif"

const PRODUCT_ORDER = ['TV','모니터','Monitor','오디오','Audio','AV','세탁기','WM','냉장고','REF','식기세척기','DW','청소기','VC','Cooking','쿠킹','RAC','Aircare','Air Care','에어케어']
function productSortKey(name) {
  const idx = PRODUCT_ORDER.indexOf(name)
  return idx >= 0 ? idx : 999
}

function escapeHtml(str) {
  if (typeof str !== 'string') return String(str ?? '')
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;')
}

const COUNTRY_ORDER = ['US','CA','UK','DE','ES','BR','MX','AU','VN','IN']
function sortCountries(keys) {
  return COUNTRY_ORDER.filter(c => keys.includes(c)).concat(keys.filter(c => !COUNTRY_ORDER.includes(c)))
}

const COUNTRY_FULL = {
  US: 'USA', CA: 'Canada', UK: 'UK', GB: 'UK',
  DE: 'Germany', ES: 'Spain', FR: 'France', IT: 'Italy',
  BR: 'Brazil', MX: 'Mexico', IN: 'India', AU: 'Australia',
  VN: 'Vietnam', JP: 'Japan', KR: 'Korea', CN: 'China',
  TTL: 'Total', TOTAL: 'Total', GLOBAL: 'Global',
}
function cntyFull(c) { return COUNTRY_FULL[String(c||'').trim().toUpperCase()] || c }

function fmt(n) {
  if (n == null || isNaN(n)) return '—'
  return Number(n).toFixed(1)
}

function fmtDelta(curr, prev) {
  if (curr == null || prev == null) return '—'
  const d = +(curr - prev).toFixed(1)
  if (d === 0) return '0.0'
  return (d > 0 ? '+' : '') + d.toFixed(1)
}

function fmtRatio(lg, comp) {
  if (lg == null || comp == null || comp === 0) return '—'
  return Math.round((lg / comp) * 100) + '%'
}

function signalBg(lg, comp) {
  if (lg == null || comp == null || comp === 0) return null
  const r = (lg / comp) * 100
  if (r >= 100) return '#D1FAE5'
  if (r >= 80) return '#FEF3C7'
  return '#FFE4E6'
}

function domainHighlight(domain) {
  if (!domain) return null
  const d = domain.toLowerCase()
  if (d.includes('youtube')) return { bg: '#FFE4E6', color: '#9F1239' }
  if (d.includes('reddit')) return { bg: '#FFEDD5', color: '#9A3412' }
  return null
}

// ─── 주간 데이터 추출 헬퍼 ────────────────────────────────────────────────
// weeklyAll: { prodId: { cnty: { brand: [w5val, w6val, ...] } } }
// 마지막 주 = score, 이전 주 = prev
function extractWeeklyData(weeklyAll, weeklyLabels) {
  if (!weeklyAll || !Object.keys(weeklyAll).length) return { products: [], productsCnty: [], lastLabel: null, prevLabel: null }

  const PROD_ID_KR = { tv: 'TV', monitor: '모니터', audio: '오디오', washer: '세탁기', fridge: '냉장고', dw: '식기세척기', vacuum: '청소기', cooking: 'Cooking', rac: 'RAC', aircare: 'Aircare' }
  const PROD_ID_BU = { tv: 'MS', monitor: 'MS', audio: 'MS', washer: 'HS', fridge: 'HS', dw: 'HS', vacuum: 'HS', cooking: 'HS', rac: 'ES', aircare: 'ES' }

  const products = []
  const productsCnty = []

  Object.entries(weeklyAll).forEach(([prodId, cntyData]) => {
    if (!cntyData) return
    // Total(=TTL) 행으로 제품 요약
    const totalBrandData = cntyData.Total || cntyData.TTL || cntyData.TOTAL
    if (totalBrandData) {
      const lgArr = totalBrandData.LG || totalBrandData.lg || []
      const lgScore = lgArr.length > 0 ? lgArr[lgArr.length - 1] : null
      const lgPrev = lgArr.length >= 2 ? lgArr[lgArr.length - 2] : null
      // 1위 경쟁사
      let topCompName = '', topCompScore = 0
      Object.entries(totalBrandData).forEach(([brand, arr]) => {
        if (brand === 'LG' || brand === 'lg') return
        const last = Array.isArray(arr) && arr.length ? arr[arr.length - 1] : 0
        if (last > topCompScore) { topCompScore = last; topCompName = brand }
      })
      if (lgScore != null && lgScore > 0) {
        products.push({
          id: prodId,
          kr: PROD_ID_KR[prodId] || prodId,
          bu: PROD_ID_BU[prodId] || 'OTHER',
          score: lgScore,
          prev: lgPrev,
          vsComp: topCompScore,
          compName: topCompName,
          category: PROD_ID_KR[prodId] || prodId,
        })
      }
    }
    // 국가별 행
    Object.entries(cntyData).forEach(([cnty, brandData]) => {
      if (cnty === 'Total' || cnty === 'TTL' || cnty === 'TOTAL') return
      const lgArr = brandData.LG || brandData.lg || []
      const lgScore = lgArr.length > 0 ? lgArr[lgArr.length - 1] : null
      const lgPrev = lgArr.length >= 2 ? lgArr[lgArr.length - 2] : null
      if (lgScore == null || lgScore <= 0) return
      let topCompName = '', topCompScore = 0
      Object.entries(brandData).forEach(([brand, arr]) => {
        if (brand === 'LG' || brand === 'lg') return
        const last = Array.isArray(arr) && arr.length ? arr[arr.length - 1] : 0
        if (last > topCompScore) { topCompScore = last; topCompName = brand }
      })
      productsCnty.push({
        product: PROD_ID_KR[prodId] || prodId,
        country: cnty,
        score: lgScore,
        prev: lgPrev,
        compScore: topCompScore,
        compName: topCompName,
      })
    })
  })

  const lastLabel = weeklyLabels?.[weeklyLabels.length - 1] || 'This Week'
  const prevLabel = weeklyLabels?.[weeklyLabels.length - 2] || 'Last Week'
  return { products, productsCnty, lastLabel, prevLabel }
}

// ─── 제품별 요약 표 (이번주 vs 전주) ────────────────────────────────────
function buildWeeklyProductSummaryTable(products, lang, lastLabel, prevLabel) {
  if (!products.length) return ''
  const t = lang === 'en' ? {
    title: 'Weekly GEO Visibility — Product Summary (TTL)',
    bu: 'BU', product: 'Product', lg: 'LG', comp: 'Comp', compName: 'Comp Name', ratio: 'vs Comp', wow: 'WoW(%p)',
  } : {
    title: '주간 GEO Visibility — 제품별 종합 (TTL)',
    bu: '본부', product: '제품', lg: 'LG', comp: '경쟁사', compName: '경쟁사명', ratio: '경쟁비', wow: 'WoW(%p)',
  }

  const buOrder = ['MS', 'HS', 'ES']
  const grouped = {}
  products.forEach(p => {
    const bu = p.bu || 'OTHER'
    if (!grouped[bu]) grouped[bu] = []
    grouped[bu].push(p)
  })

  const rows = []
  buOrder.forEach(bu => {
    const prods = (grouped[bu] || []).slice().sort((a, b) =>
      productSortKey(a.kr || a.category || a.id) - productSortKey(b.kr || b.category || b.id)
    )
    prods.forEach((p, i) => {
      const wow = fmtDelta(p.score, p.prev)
      const sigBg = signalBg(p.score, p.vsComp) || '#FFFFFF'
      rows.push(`<tr>
        ${i === 0 ? `<td rowspan="${prods.length}" style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${FONT};font-weight:700;background:#F5F5F5;text-align:center;vertical-align:middle;">${bu}</td>` : ''}
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${FONT};text-align:center;">${escapeHtml(p.kr || p.id)}</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${FONT};text-align:center;font-weight:700;background:${sigBg};">${fmt(p.score)}%</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${FONT};text-align:center;background:${sigBg};">${fmt(p.vsComp)}%</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${FONT};text-align:center;background:${sigBg};">${escapeHtml(p.compName || '')}</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${FONT};text-align:center;font-weight:700;background:${sigBg};">${fmtRatio(p.score, p.vsComp)}</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${FONT};text-align:center;">${wow}</td>
      </tr>`)
    })
  })

  return `
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${FONT};color:#000;">${t.title} <span style="font-size:12px;font-weight:400;color:#666;">(${lastLabel} vs ${prevLabel})</span></h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${FONT};">
    <thead>
      <tr style="background:#E8E8E8;">
        <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${t.bu}</th>
        <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${t.product}</th>
        <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${t.lg}</th>
        <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${t.comp}</th>
        <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${t.compName}</th>
        <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${t.ratio}</th>
        <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${t.wow}</th>
      </tr>
    </thead>
    <tbody>${rows.join('')}</tbody>
  </table>`
}

// ─── 국가별 제품별 Visibility (피벗, LG/경쟁비/경쟁사 3행) ─────────────────
function buildWeeklyVisibilityTable(productsCnty, lang, productsTTL, lastLabel) {
  const t = lang === 'en' ? {
    product: 'Product', metric: 'Metric',
    title: 'Weekly GEO Visibility — Country × Product (Pivot)',
    lg: 'LG', ratio: 'vs Comp',
  } : {
    product: '제품', metric: '구분',
    title: '주간 GEO Visibility — 국가별 × 제품별',
    lg: 'LG', ratio: '경쟁비',
  }

  const dataMap = {}
  const countrySet = new Set()
  const productSet = new Set()
  productsCnty.forEach(r => {
    if (!r.country || !r.product) return
    countrySet.add(r.country)
    productSet.add(r.product)
    if (!dataMap[r.product]) dataMap[r.product] = {}
    dataMap[r.product][r.country] = r
  })

  const countries = sortCountries(Array.from(countrySet))
  const products = Array.from(productSet).sort((a, b) => productSortKey(a) - productSortKey(b))
  if (!products.length || !countries.length) return ''

  const ttlByProductName = {}
  ;(productsTTL || []).forEach(p => {
    const keys = [p.kr, p.category, p.id, p.en].filter(Boolean)
    keys.forEach(k => { ttlByProductName[k] = p })
  })

  const headerCells = `<th style="border:1px solid #999;padding:4px 6px;font-size:10px;font-weight:700;text-align:center;background:#FBBF24;min-width:55px;">TTL</th>` +
    countries.map(c => `<th style="border:1px solid #999;padding:4px 6px;font-size:10px;font-weight:700;text-align:center;background:#E8E8E8;min-width:50px;">${escapeHtml(cntyFull(c))}</th>`).join('')

  const rows = []
  products.forEach((p, pi) => {
    const altBg = pi % 2 === 0 ? '#FFFFFF' : '#FAFAFA'
    const ttlData = ttlByProductName[p]
    const ttlSig = ttlData ? signalBg(ttlData.score, ttlData.vsComp) : null
    const ttlBgUse = ttlSig || altBg
    const ttlLgCell = `<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${FONT};text-align:center;font-weight:700;background:${ttlBgUse};">${ttlData ? fmt(ttlData.score) : '—'}</td>`
    const ttlRatioCell = `<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${FONT};text-align:center;font-weight:700;background:${ttlBgUse};">${ttlData ? fmtRatio(ttlData.score, ttlData.vsComp) : '—'}</td>`
    const ttlCompCell = `<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${FONT};text-align:center;background:${ttlBgUse};color:#1A1A1A;font-weight:600;">${ttlData?.compName ? escapeHtml(ttlData.compName) : '—'}</td>`

    const lgCells = countries.map(c => {
      const d = dataMap[p]?.[c]
      const sig = d ? signalBg(d.score, d.compScore) : null
      const bgUse = sig || altBg
      return `<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${FONT};text-align:center;font-weight:700;background:${bgUse};">${d ? fmt(d.score) : '—'}</td>`
    }).join('')
    const ratioCells = countries.map(c => {
      const d = dataMap[p]?.[c]
      const sig = d ? signalBg(d.score, d.compScore) : null
      const bgUse = sig || altBg
      return `<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${FONT};text-align:center;font-weight:700;background:${bgUse};">${d ? fmtRatio(d.score, d.compScore) : '—'}</td>`
    }).join('')
    const compNameCells = countries.map(c => {
      const d = dataMap[p]?.[c]
      const sig = d ? signalBg(d.score, d.compScore) : null
      const bgUse = sig || altBg
      return `<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${FONT};text-align:center;background:${bgUse};color:#1A1A1A;font-weight:600;">${d?.compName ? escapeHtml(d.compName) : '—'}</td>`
    }).join('')

    rows.push(`
      <tr>
        <td rowspan="3" style="border:1px solid #999;padding:4px 6px;font-size:11px;font-family:${FONT};font-weight:700;background:#F0F0F0;text-align:center;vertical-align:middle;white-space:nowrap;">${escapeHtml(p)}</td>
        <td style="border:1px solid #999;padding:3px 6px;font-size:10px;font-family:${FONT};font-weight:600;background:#F5F5F5;white-space:nowrap;">${t.lg} (%)</td>
        ${ttlLgCell}${lgCells}
      </tr>
      <tr>
        <td style="border:1px solid #999;padding:3px 6px;font-size:10px;font-family:${FONT};background:#F5F5F5;white-space:nowrap;">${t.ratio}</td>
        ${ttlRatioCell}${ratioCells}
      </tr>
      <tr>
        <td style="border:1px solid #999;padding:3px 6px;font-size:10px;font-family:${FONT};background:#F5F5F5;white-space:nowrap;">${lang === 'en' ? 'Top Comp' : '경쟁사'}</td>
        ${ttlCompCell}${compNameCells}
      </tr>`)
  })

  return `
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${FONT};color:#000;">${t.title} <span style="font-size:12px;font-weight:400;color:#666;">(${lastLabel})</span></h2>
  <div style="overflow-x:auto;">
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${FONT};table-layout:auto;">
    <thead>
      <tr>
        <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;background:#E8E8E8;white-space:nowrap;">${t.product}</th>
        <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;background:#E8E8E8;white-space:nowrap;">${t.metric}</th>
        ${headerCells}
      </tr>
    </thead>
    <tbody>${rows.join('')}</tbody>
  </table>
  </div>`
}

// ─── ★ 국가별 제품별 전주대비 표 (신규 요구사항) ────────────────────────
// 각 셀: 이번주 LG (전주 대비 +/-)
function buildWeeklyWoWTable(productsCnty, lang, lastLabel, prevLabel) {
  const t = lang === 'en'
    ? { title: `Country × Product — Week-over-Week (${lastLabel} vs ${prevLabel})`, product: 'Product' }
    : { title: `국가별 × 제품별 전주대비 (${lastLabel} vs ${prevLabel})`, product: '제품' }

  const dataMap = {}
  const countrySet = new Set()
  const productSet = new Set()
  productsCnty.forEach(r => {
    if (!r.country || !r.product) return
    countrySet.add(r.country)
    productSet.add(r.product)
    if (!dataMap[r.product]) dataMap[r.product] = {}
    dataMap[r.product][r.country] = r
  })

  const countries = sortCountries(Array.from(countrySet))
  const products = Array.from(productSet).sort((a, b) => productSortKey(a) - productSortKey(b))
  if (!products.length || !countries.length) return ''

  const headerCells = countries.map(c =>
    `<th style="border:1px solid #999;padding:4px 6px;font-size:10px;font-weight:700;text-align:center;background:#E8E8E8;min-width:65px;">${escapeHtml(cntyFull(c))}</th>`
  ).join('')

  const rows = products.map(p => {
    const cells = countries.map(c => {
      const d = dataMap[p]?.[c]
      if (!d || d.score == null) return `<td style="border:1px solid #999;padding:4px 6px;font-size:10px;font-family:${FONT};text-align:center;color:#999;">—</td>`
      const curr = d.score
      const prev = d.prev
      const delta = prev != null ? +(curr - prev).toFixed(1) : null
      const deltaColor = delta == null ? '#999' : delta > 0 ? '#16A34A' : delta < 0 ? '#DC2626' : '#666'
      const deltaArrow = delta == null ? '' : delta > 0 ? '▲' : delta < 0 ? '▼' : '─'
      const deltaStr = delta != null ? `${deltaArrow}${Math.abs(delta).toFixed(1)}` : '—'
      return `<td style="border:1px solid #999;padding:4px 6px;font-size:10px;font-family:${FONT};text-align:center;">
        <div style="font-weight:700;color:#111;">${fmt(curr)}%</div>
        <div style="font-size:9px;color:${deltaColor};">${deltaStr}</div>
      </td>`
    }).join('')
    return `<tr>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${FONT};font-weight:700;background:#F0F0F0;text-align:center;white-space:nowrap;">${escapeHtml(p)}</td>
      ${cells}
    </tr>`
  }).join('')

  return `
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${FONT};color:#000;">${t.title}</h2>
  <div style="overflow-x:auto;">
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${FONT};">
    <thead><tr>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;background:#E8E8E8;">${t.product}</th>
      ${headerCells}
    </tr></thead>
    <tbody>${rows}</tbody>
  </table>
  </div>
  <p style="font-size:10px;color:#666;margin:6px 0 0;font-family:${FONT};">* ${lang === 'en' ? 'Each cell: current week LG score (% difference vs. previous week)' : '각 셀: 이번주 LG 점수 (전주 대비 차이)'}</p>`
}

// ─── Citation 카테고리별 ──────────────────────────────────────────────────
function buildCitationCategoryTable(citations, lang) {
  if (!citations || !citations.length) return ''
  const t = lang === 'en'
    ? { title: 'Citation by Category', rank: 'Rank', source: 'Category', score: 'Citations', ratio: 'Share' }
    : { title: 'Citation 카테고리별', rank: '순위', source: '카테고리', score: '인용수', ratio: '비중' }
  const total = citations.reduce((s, c) => s + (c.score || 0), 0)
  const rows = citations.map((c, i) => `
    <tr>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${FONT};text-align:center;">${i + 1}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${FONT};">${escapeHtml(c.source || c.category || '')}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${FONT};text-align:right;font-weight:700;">${(c.score || 0).toLocaleString('en-US')}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${FONT};text-align:right;">${total > 0 ? ((c.score / total) * 100).toFixed(1) + '%' : '—'}</td>
    </tr>`).join('')
  return `
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${FONT};color:#000;">${t.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${FONT};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:50px;">${t.rank}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${t.source}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:140px;">${t.score}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:100px;">${t.ratio}</th>
    </tr></thead>
    <tbody>${rows}</tbody>
  </table>`
}

function buildCitationDomainTable(citationsCnty, lang) {
  const ttlRows = (citationsCnty || []).filter(r => r.cnty === 'TTL' || r.cnty === 'TOTAL' || !r.cnty)
  if (!ttlRows.length) return ''
  ttlRows.sort((a, b) => (b.citations || 0) - (a.citations || 0))
  const top = ttlRows.slice(0, 20)
  const t = lang === 'en'
    ? { title: 'Citation by Domain (Top 20)', rank: 'Rank', domain: 'Domain', type: 'Type', score: 'Citations' }
    : { title: 'Citation 도메인별 Top 20', rank: '순위', domain: '도메인', type: '유형', score: '인용수' }
  const total = ttlRows.reduce((s, r) => s + (r.citations || 0), 0)
  const rows = top.map((r, i) => `
    <tr>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${FONT};text-align:center;">${i + 1}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${FONT};">${escapeHtml(r.domain || '')}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${FONT};">${escapeHtml(r.type || '')}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${FONT};text-align:right;font-weight:700;">${(r.citations || 0).toLocaleString('en-US')}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${FONT};text-align:right;">${total > 0 ? ((r.citations / total) * 100).toFixed(1) + '%' : '—'}</td>
    </tr>`).join('')
  return `
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${FONT};color:#000;">${t.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${FONT};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:50px;">${t.rank}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${t.domain}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:120px;">${t.type}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:120px;">${t.score}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:80px;">${lang === 'en' ? 'Share' : '비중'}</th>
    </tr></thead>
    <tbody>${rows}</tbody>
  </table>`
}

function buildDotcomTable(dotcom, lang) {
  if (!dotcom || !dotcom.lg) return ''
  const lg = dotcom.lg, sam = dotcom.samsung || {}
  const cols = Object.keys(lg).filter(k => lg[k] != null)
  if (!cols.length) return ''
  const t = lang === 'en'
    ? { title: 'Dotcom Citation — LG vs Samsung', type: 'Page Type', lg: 'LG', sam: 'Samsung', diff: 'Diff', winner: 'Winner' }
    : { title: '닷컴 Citation — LG vs Samsung', type: '페이지 유형', lg: 'LG', sam: 'Samsung', diff: '차이', winner: '우위' }
  const rows = cols.map(k => {
    const lv = lg[k] || 0, sv = sam[k] || 0
    const diff = lv - sv
    const winner = diff > 0 ? 'LG' : diff < 0 ? 'SS' : '='
    const rowBg = diff > 0 ? '#86EFAC' : diff < 0 ? '#FCA5A5' : '#FFFFFF'
    const rowColor = diff > 0 ? '#14532D' : diff < 0 ? '#7F1D1D' : '#1A1A1A'
    return `<tr style="background:${rowBg};color:${rowColor};">
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${FONT};font-weight:${k === 'TTL' ? '900' : '600'};">${escapeHtml(k)}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${FONT};text-align:right;font-weight:700;">${lv.toLocaleString('en-US')}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${FONT};text-align:right;">${sv.toLocaleString('en-US')}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${FONT};text-align:right;font-weight:700;">${diff > 0 ? '+' : ''}${diff.toLocaleString('en-US')}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${FONT};text-align:center;font-weight:900;">${winner}</td>
    </tr>`
  }).join('')
  return `
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${FONT};color:#000;">${t.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${FONT};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${t.type}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${t.lg}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${t.sam}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${t.diff}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:60px;">${t.winner}</th>
    </tr></thead>
    <tbody>${rows}</tbody>
  </table>`
}

// ─── Progress Tracker Summary ─────────────────────────────────────────────
function buildTrackerSummaryTable(categoryStats, lang) {
  if (!categoryStats || !categoryStats.length) return ''
  const month = categoryStats[0]?.targetMonth || '3월'
  const t = lang === 'en'
    ? { title: `Progress Tracker — ${month} Executive Summary`, cat: 'Task Category', rate: 'Achievement', count: 'Actual/Goal', progress: 'YTD Progress' }
    : { title: `Progress Tracker — ${month} Executive Summary`, cat: '과제 구분', rate: '달성률', count: '실적/목표', progress: '연간 진척률' }
  function sigBg(rate) {
    if (rate >= 80) return '#D1FAE5'
    if (rate >= 50) return '#FEF3C7'
    return '#FEE2E2'
  }
  const rows = categoryStats.map(c => {
    const mRate = (c.monthRate || 0).toFixed(0)
    const pRate = (c.progressRate || 0).toFixed(0)
    return `<tr>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-weight:700;font-family:${FONT};background:#F5F5F5;">${escapeHtml(c.category)}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-weight:700;text-align:center;background:${sigBg(c.monthRate)};">${mRate}%</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;text-align:center;">${(c.monthActual || 0).toLocaleString()} / ${(c.monthGoal || 0).toLocaleString()}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-weight:700;text-align:center;background:${sigBg(c.progressRate)};">${pRate}%</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;text-align:center;">${(c.cumActual || 0).toLocaleString()} / ${(c.annualGoal || 0).toLocaleString()}</td>
    </tr>`
  }).join('')
  return `
  <h1 style="font-size:18px;font-weight:700;margin:32px 0 6px;border-top:2px solid #000;padding-top:14px;font-family:${FONT};color:#000;">Progress Tracker</h1>
  <h2 style="font-size:16px;font-weight:700;margin:10px 0;font-family:${FONT};color:#000;">${t.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${FONT};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${t.cat}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${month} ${t.rate}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${t.count}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${t.progress}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${t.count}</th>
    </tr></thead>
    <tbody>${rows}</tbody>
  </table>`
}

// ─── 메인 HTML 생성 함수 ─────────────────────────────────────────────────
export function generateWeeklyReportHTML(meta, total, products, citations, dotcom = {}, lang = 'ko', productsCnty = [], citationsCnty = [], options = {}) {
  const { weeklyAll = {}, weeklyLabels = [], categoryStats = null } = options

  // 주간 데이터에서 제품별/국가별 데이터 생성
  const weeklyData = extractWeeklyData(weeklyAll, weeklyLabels)
  const wProducts = weeklyData.products.length ? weeklyData.products : products
  const wProductsCnty = weeklyData.productsCnty.length ? weeklyData.productsCnty : productsCnty
  const lastLabel = weeklyData.lastLabel
  const prevLabel = weeklyData.prevLabel

  const title = lang === 'en' ? 'GEO Weekly Report' : 'GEO 주간 보고서'
  const period = meta.period || lastLabel || ''

  return `<!DOCTYPE html><html lang="${lang}"><head>
<meta charset="UTF-8">
<title>${escapeHtml(title)} — ${escapeHtml(period)}</title>
<link href="https://fonts.cdnfonts.com/css/lg-smart" rel="stylesheet" />
<style>
@font-face { font-family: 'LG Smart'; font-weight: 400; font-style: normal; src: url('/font/LG%20Smart%20Regular.ttf') format('truetype'); font-display: swap; }
@font-face { font-family: 'LG Smart'; font-weight: 600; font-style: normal; src: url('/font/LG%20Smart%20SemiBold.ttf') format('truetype'); font-display: swap; }
@font-face { font-family: 'LG Smart'; font-weight: 700; font-style: normal; src: url('/font/LG%20Smart%20Bold.ttf') format('truetype'); font-display: swap; }
@font-face { font-family: 'LG Smart'; font-weight: 300; font-style: normal; src: url('/font/LG%20Smart%20Light.ttf') format('truetype'); font-display: swap; }
body, table, td, th, h1, h2, p, span, div { font-family: ${FONT} !important; }
</style>
</head>
<body style="margin:0;padding:24px;font-family:${FONT};color:#000;background:#FFFFFF;">
  <div style="max-width:1100px;margin:0 auto;">
    <div style="border-bottom:2px solid #000;padding-bottom:12px;margin-bottom:18px;">
      <h1 style="font-size:22px;font-weight:700;margin:0;font-family:${FONT};">${escapeHtml(title)}</h1>
      <p style="font-size:13px;color:#444;margin:4px 0 0;font-family:${FONT};">${escapeHtml(period)} · ${lastLabel ? `${escapeHtml(lastLabel)} ${lang === 'en' ? 'data' : '기준'}` : ''}</p>
    </div>

    ${buildWeeklyProductSummaryTable(wProducts, lang, lastLabel, prevLabel)}
    ${buildWeeklyWoWTable(wProductsCnty, lang, lastLabel, prevLabel)}
    ${buildWeeklyVisibilityTable(wProductsCnty, lang, wProducts, lastLabel)}

    <h1 style="font-size:18px;font-weight:700;margin:32px 0 6px;border-top:2px solid #000;padding-top:14px;font-family:${FONT};color:#000;">${lang === 'en' ? 'Citation Analysis' : 'Citation 분석'}</h1>
    ${buildCitationCategoryTable(citations, lang)}
    ${buildCitationDomainTable(citationsCnty, lang)}
    ${buildDotcomTable(dotcom, lang)}

    ${buildTrackerSummaryTable(categoryStats, lang)}

    <div style="margin-top:32px;padding-top:12px;border-top:1px solid #999;font-size:11px;color:#666;font-family:${FONT};">
      <p style="margin:0;">${lang === 'en' ? 'LG Electronics · D2C Digital Marketing Team' : 'LG전자 · D2C디지털마케팅팀'}</p>
    </div>
  </div>
</body></html>`
}
