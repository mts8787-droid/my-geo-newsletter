// ─── 월간 보고용 HTML 생성기 (단순 표 기반, 색상/그래프 없음) ─────────────
const FONT = "'LG Smart', 'Arial Narrow', 'Malgun Gothic', Arial, sans-serif"

// 제품 표시 순서 (KR / EN / 카테고리 코드 모두 매칭, BU 코드 제외)
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
  if (curr == null || prev == null || prev === 0) return '—'
  const d = +(curr - prev).toFixed(1)
  if (d === 0) return '0.0'
  return (d > 0 ? '+' : '') + d.toFixed(1)
}

function fmtRatio(lg, comp) {
  if (lg == null || comp == null || comp === 0) return '—'
  return Math.round((lg / comp) * 100) + '%'
}

// 신호등 셀 배경 색상 (경쟁비 기준) — 연한 톤
function signalBg(lg, comp) {
  if (lg == null || comp == null || comp === 0) return null
  const r = (lg / comp) * 100
  if (r >= 100) return '#D1FAE5'   // 연한 녹색 (선도)
  if (r >= 80) return '#FEF3C7'    // 연한 황색 (추격)
  return '#FFE4E6'                  // 연한 적색 (취약)
}

// 도메인명 강조 색상 (Citation 국가별 표용)
function domainHighlight(domain) {
  if (!domain) return null
  const d = domain.toLowerCase()
  if (d.includes('youtube')) return { bg: '#FFE4E6', color: '#9F1239' }   // YouTube 빨강계열
  if (d.includes('reddit')) return { bg: '#FFEDD5', color: '#9A3412' }    // Reddit 주황계열
  return null
}

// 본부별 종합 표 (Monthly Visibility Summary 시트의 country=TOTAL, division=MS/HS/ES 값)
function buildBuTotalsTable(buTotals, buTotalsPrev, lang) {
  if (!buTotals || !Object.keys(buTotals).length) return ''
  const t = lang === 'en'
    ? { title: 'Monthly Visibility — BU Totals (Sheet Values)', bu: 'BU', lg: 'LG (%)', comp: 'Comp (%)', ratio: 'vs Comp', mom: 'MoM(%p)' }
    : { title: '본부별 종합 (시트 합계 직접 사용)', bu: '본부', lg: 'LG (%)', comp: '경쟁사 (%)', ratio: '경쟁비', mom: 'MoM(%p)' }
  const order = ['MS', 'HS', 'ES']
  const buKeys = order.filter(k => buTotals[k]).concat(Object.keys(buTotals).filter(k => !order.includes(k)))
  const rows = buKeys.map(k => {
    const cur = buTotals[k]
    const prev = (buTotalsPrev || {})[k]
    const ratio = cur.comp > 0 ? Math.round((cur.lg / cur.comp) * 100) : 100
    const sigBg = signalBg(cur.lg, cur.comp) || '#FFFFFF'
    const mom = prev && prev.lg != null ? fmtDelta(cur.lg, prev.lg) : '—'
    return `<tr>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${FONT};font-weight:700;text-align:center;background:#F5F5F5;">${escapeHtml(k)}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${FONT};text-align:center;font-weight:700;background:${sigBg};">${fmt(cur.lg)}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${FONT};text-align:center;background:${sigBg};">${fmt(cur.comp)}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${FONT};text-align:center;font-weight:700;background:${sigBg};">${ratio}%</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${FONT};text-align:center;">${mom}</td>
    </tr>`
  }).join('')
  return `
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${FONT};color:#000;">${t.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${FONT};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${t.bu}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${t.lg}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${t.comp}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${t.ratio}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${t.mom}</th>
    </tr></thead>
    <tbody>${rows}</tbody>
  </table>`
}

// 국가별 종합 표 (Monthly Visibility Summary 시트의 country=US/.., division=TOTAL 값)
function buildCountryTotalsTable(countryTotals, countryTotalsPrev, lang) {
  if (!countryTotals || !Object.keys(countryTotals).length) return ''
  const t = lang === 'en'
    ? { title: 'Monthly Visibility — Country Totals (Sheet Values)', country: 'Country', lg: 'LG (%)', comp: 'Comp (%)', ratio: 'vs Comp', mom: 'MoM(%p)' }
    : { title: '국가별 종합 (시트 합계 직접 사용)', country: '국가', lg: 'LG (%)', comp: '경쟁사 (%)', ratio: '경쟁비', mom: 'MoM(%p)' }
  const countries = sortCountries(Object.keys(countryTotals))
  const rows = countries.map(c => {
    const cur = countryTotals[c]
    const prev = (countryTotalsPrev || {})[c]
    const ratio = cur.comp > 0 ? Math.round((cur.lg / cur.comp) * 100) : 100
    const sigBg = signalBg(cur.lg, cur.comp) || '#FFFFFF'
    const mom = prev && prev.lg != null ? fmtDelta(cur.lg, prev.lg) : '—'
    return `<tr>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${FONT};font-weight:700;text-align:center;background:#F5F5F5;">${escapeHtml(cntyFull(c))}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${FONT};text-align:center;font-weight:700;background:${sigBg};">${fmt(cur.lg)}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${FONT};text-align:center;background:${sigBg};">${fmt(cur.comp)}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${FONT};text-align:center;font-weight:700;background:${sigBg};">${ratio}%</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${FONT};text-align:center;">${mom}</td>
    </tr>`
  }).join('')
  return `
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${FONT};color:#000;">${t.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${FONT};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${t.country}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${t.lg}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${t.comp}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${t.ratio}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${t.mom}</th>
    </tr></thead>
    <tbody>${rows}</tbody>
  </table>`
}

// 국가 = 컬럼, 제품 = 행 (pivot 형식, 가로로 길게)
function buildVisibilityTable(productsCnty, productsCntyPrev, lang, productsTTL) {
  const t = lang === 'en' ? {
    product: 'Product', metric: 'Metric',
    title: 'Monthly GEO Visibility — Country × Product (Pivot)',
    lg: 'LG', ratio: 'vs Comp', mom: 'MoM',
  } : {
    product: '제품', metric: '구분',
    title: '월간 GEO Visibility — 국가별 × 제품별',
    lg: 'LG', ratio: '경쟁비', mom: 'MoM',
  }

  // prevMap (혹시 별도 prev 데이터 전달 시)
  const prevMap = {}
  ;(productsCntyPrev || []).forEach(r => {
    if (r.country && r.product) prevMap[`${r.country}|${r.product}`] = r.score
  })

  // 데이터 인덱싱: { product: { country: { score, prev, compScore } } }
  const dataMap = {}
  const countrySet = new Set()
  const productSet = new Set()
  ;(productsCnty || []).forEach(r => {
    if (!r.country || r.country === 'TTL' || r.country === 'TOTAL' || !r.product) return
    countrySet.add(r.country)
    productSet.add(r.product)
    if (!dataMap[r.product]) dataMap[r.product] = {}
    dataMap[r.product][r.country] = r
  })

  const countries = sortCountries(Array.from(countrySet))
  const products = Array.from(productSet).sort((a, b) => productSortKey(a) - productSortKey(b))

  if (!products.length || !countries.length) {
    return `<p style="font-size:11px;color:#666;font-family:${FONT};">데이터가 없습니다.</p>`
  }

  // TTL(전체) 데이터 매핑: products(productsPartial)의 score/vsComp/compName 사용
  // product 매칭: kr 또는 category 또는 id로 매칭
  const ttlByProductName = {}
  ;(productsTTL || []).forEach(p => {
    const keys = [p.kr, p.category, p.id, p.en].filter(Boolean)
    keys.forEach(k => { ttlByProductName[k] = p })
  })
  const TTL_KEY = lang === 'en' ? 'TTL' : 'TTL'

  // 헤더: TTL을 첫 컬럼으로
  const headerCells = `<th style="border:1px solid #999;padding:4px 6px;font-size:10px;font-weight:700;text-align:center;background:#FBBF24;min-width:55px;">${TTL_KEY}</th>` +
    countries.map(c =>
      `<th style="border:1px solid #999;padding:4px 6px;font-size:10px;font-weight:700;text-align:center;background:#E8E8E8;min-width:50px;">${escapeHtml(cntyFull(c))}</th>`
    ).join('')

  // 각 제품마다 LG / 경쟁비 / 경쟁사 3행, 신호등 색상은 3행 모두 동일하게
  const rows = []
  products.forEach((p, pi) => {
    const altBg = pi % 2 === 0 ? '#FFFFFF' : '#FAFAFA'
    const ttlData = ttlByProductName[p]

    // TTL 셀 (3개)
    const ttlSig = ttlData ? signalBg(ttlData.score, ttlData.vsComp) : null
    const ttlBgUse = ttlSig || altBg
    const ttlLgCell = `<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${FONT};text-align:center;font-weight:700;background:${ttlBgUse};">${ttlData ? fmt(ttlData.score) : '—'}</td>`
    const ttlRatioCell = `<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${FONT};text-align:center;font-weight:700;background:${ttlBgUse};">${ttlData ? fmtRatio(ttlData.score, ttlData.vsComp) : '—'}</td>`
    const ttlCompCell = `<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${FONT};text-align:center;background:${ttlBgUse};color:#1A1A1A;font-weight:600;">${ttlData?.compName ? escapeHtml(ttlData.compName) : '—'}</td>`

    // 국가별 셀
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
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${FONT};color:#000;">${t.title}</h2>
  <div style="overflow-x:auto;">
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${FONT};table-layout:auto;">
    <thead>
      <tr>
        <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;background:#E8E8E8;white-space:nowrap;">${t.product}</th>
        <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;background:#E8E8E8;white-space:nowrap;">${t.metric}</th>
        ${headerCells}
      </tr>
    </thead>
    <tbody>
      ${rows.join('')}
    </tbody>
  </table>
  </div>`
}

// 제품별 본부 합계 표
function buildProductSummaryTable(products, productsPrev, lang) {
  const t = lang === 'en' ? {
    title: 'Monthly GEO Visibility — Product Summary (TTL)',
    bu: 'BU', product: 'Product', lg: 'LG', comp: 'Comp', compName: 'Comp Name', ratio: 'vs Comp', mom: 'MoM(%p)',
  } : {
    title: '월간 GEO Visibility — 제품별 종합 (TTL)',
    bu: '본부', product: '제품', lg: 'LG', comp: '경쟁사', compName: '경쟁사명', ratio: '경쟁비', mom: 'MoM(%p)',
  }

  const prevMap = {}
  ;(productsPrev || []).forEach(p => { if (p.id) prevMap[p.id] = p.score })

  const buOrder = ['MS', 'HS', 'ES']
  const grouped = {}
  ;(products || []).forEach(p => {
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
      const prev = p.prev != null && p.prev > 0 ? p.prev : prevMap[p.id]
      const mom = fmtDelta(p.score, prev)
      const sigBg = signalBg(p.score, p.vsComp) || '#FFFFFF'
      rows.push(`<tr>
        ${i === 0 ? `<td rowspan="${prods.length}" style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${FONT};font-weight:700;background:#F5F5F5;text-align:center;vertical-align:middle;">${bu}</td>` : ''}
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${FONT};text-align:center;">${escapeHtml(p.kr || p.id)}</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${FONT};text-align:center;font-weight:700;background:${sigBg};">${fmt(p.score)}%</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${FONT};text-align:center;background:${sigBg};">${fmt(p.vsComp)}%</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${FONT};text-align:center;background:${sigBg};">${escapeHtml(p.compName || '')}</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${FONT};text-align:center;font-weight:700;background:${sigBg};">${fmtRatio(p.score, p.vsComp)}</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${FONT};text-align:center;">${mom}</td>
      </tr>`)
    })
  })

  return `
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${FONT};color:#000;">${t.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${FONT};">
    <thead>
      <tr style="background:#E8E8E8;">
        <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${t.bu}</th>
        <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${t.product}</th>
        <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${t.lg}</th>
        <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${t.comp}</th>
        <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${t.compName}</th>
        <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${t.ratio}</th>
        <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${t.mom}</th>
      </tr>
    </thead>
    <tbody>
      ${rows.join('')}
    </tbody>
  </table>`
}

// 도메인 카테고리별 Citation 표
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

// 도메인별 Citation 표 (TTL Top N)
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

// 국가별 Citation Top 도메인 (행=국가, 열=Top 1~5)
function buildCitationCntyTable(citationsCnty, lang) {
  const cntyMap = {}
  ;(citationsCnty || []).forEach(r => {
    if (!r.cnty || r.cnty === 'TTL' || r.cnty === 'TOTAL') return
    if (!cntyMap[r.cnty]) cntyMap[r.cnty] = []
    cntyMap[r.cnty].push(r)
  })
  const countries = sortCountries(Object.keys(cntyMap))
  if (!countries.length) return ''
  const t = lang === 'en'
    ? { title: 'Citation by Country (Top 5 Domains)', country: 'Country', total: 'Total' }
    : { title: '국가별 Citation Top 5 도메인', country: '국가', total: '전체' }
  const TOPN = 5
  const rows = countries.map(cnty => {
    const sorted = cntyMap[cnty].sort((a, b) => (b.citations || 0) - (a.citations || 0))
    const total = sorted.reduce((s, r) => s + (r.citations || 0), 0)
    const top = sorted.slice(0, TOPN)
    const cells = []
    for (let i = 0; i < TOPN; i++) {
      const r = top[i]
      const hl = r ? domainHighlight(r.domain) : null
      const bgStyle = hl ? `background:${hl.bg};` : ''
      const colorStyle = hl ? `color:${hl.color};font-weight:700;` : ''
      cells.push(`<td style="border:1px solid #999;padding:5px 8px;font-size:10px;font-family:${FONT};${bgStyle}${colorStyle}">${r ? `${escapeHtml(r.domain || '')} <span style="color:#666;font-weight:400;">(${(r.citations || 0).toLocaleString('en-US')})</span>` : '—'}</td>`)
    }
    return `<tr>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${FONT};font-weight:700;background:#F5F5F5;text-align:center;">${escapeHtml(cntyFull(cnty))}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${FONT};text-align:right;font-weight:700;">${total.toLocaleString('en-US')}</td>
      ${cells.join('')}
    </tr>`
  }).join('')
  return `
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${FONT};color:#000;">${t.title}</h2>
  <div style="overflow-x:auto;">
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${FONT};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:60px;">${t.country}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:80px;">${t.total}</th>
      ${Array.from({ length: TOPN }, (_, i) => `<th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">#${i + 1}</th>`).join('')}
    </tr></thead>
    <tbody>${rows}</tbody>
  </table>
  </div>`
}

// 닷컴 Citation LG vs Samsung 비교
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
    // 우위/열위에 따른 행 전체 색상
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

// ─── Progress Tracker Executive Summary 표 ─────────────────────────────────
function buildTrackerSummaryTable(categoryStats, lang, period) {
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

function buildStakeholderTable(stakeholderStats, lang) {
  if (!stakeholderStats || !stakeholderStats.length) return ''
  const month = stakeholderStats[0]?.targetMonth || '3월'
  const t = lang === 'en'
    ? { title: `${month} Achievement by Organization`, org: 'Organization', tasks: 'Tasks', rate: 'Achievement', count: 'Actual/Goal', progress: 'YTD Progress' }
    : { title: `${month} 조직별 달성 현황`, org: '조직', tasks: '과제수', rate: '달성률', count: '실적/목표', progress: '연간 진척률' }

  function sigBg(rate) {
    if (rate >= 80) return '#D1FAE5'
    if (rate >= 50) return '#FEF3C7'
    return '#FEE2E2'
  }

  const rows = stakeholderStats.map(s => {
    return `<tr>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-weight:700;font-family:${FONT};background:#F5F5F5;">${escapeHtml(s.stakeholder)}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;text-align:center;">${s.taskCount}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-weight:700;text-align:center;background:${sigBg(s.monthRate)};">${(s.monthRate || 0).toFixed(0)}%</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;text-align:center;">${(s.monthActual || 0).toLocaleString()} / ${(s.monthGoal || 0).toLocaleString()}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-weight:700;text-align:center;background:${sigBg(s.progressRate)};">${(s.progressRate || 0).toFixed(0)}%</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;text-align:center;">${(s.cumActual || 0).toLocaleString()} / ${(s.annualGoal || 0).toLocaleString()}</td>
    </tr>`
  }).join('')

  return `
  <h2 style="font-size:16px;font-weight:700;margin:16px 0 10px;font-family:${FONT};color:#000;">${t.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${FONT};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${t.org}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${t.tasks}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${month} ${t.rate}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${t.count}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${t.progress}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${t.count}</th>
    </tr></thead>
    <tbody>${rows}</tbody>
  </table>`
}

export function generateMonthlyReportHTML(meta, total, products, citations, dotcom = {}, lang = 'ko', productsCnty = [], citationsCnty = [], options = {}) {
  const { productsCntyPrev = [], productsPrev = [], categoryStats = null, stakeholderStats = null } = options

  const title = lang === 'en' ? 'GEO Monthly Report' : 'GEO 월간 보고서'
  const period = meta.period || ''

  return `<!DOCTYPE html><html lang="${lang}"><head>
<meta charset="UTF-8">
<title>${escapeHtml(title)} — ${escapeHtml(period)}</title>
<link href="https://fonts.cdnfonts.com/css/lg-smart" rel="stylesheet" />
<style>
@font-face { font-family: 'LG Smart'; font-weight: 400; font-style: normal; src: url('/font/LG%20Smart%20Regular.ttf') format('truetype'); font-display: swap; }
@font-face { font-family: 'LG Smart'; font-weight: 600; font-style: normal; src: url('/font/LG%20Smart%20SemiBold.ttf') format('truetype'); font-display: swap; }
@font-face { font-family: 'LG Smart'; font-weight: 700; font-style: normal; src: url('/font/LG%20Smart%20Bold.ttf') format('truetype'); font-display: swap; }
@font-face { font-family: 'LG Smart'; font-weight: 300; font-style: normal; src: url('/font/LG%20Smart%20Light.ttf') format('truetype'); font-display: swap; }
@font-face { font-family: 'LG Smart'; font-weight: 400; font-style: italic; src: url('/font/LG%20Smart%20Regular%20Italic.ttf') format('truetype'); font-display: swap; }
@font-face { font-family: 'LG Smart'; font-weight: 700; font-style: italic; src: url('/font/LG%20Smart%20Bold%20Italic.ttf') format('truetype'); font-display: swap; }
body, table, td, th, h1, h2, p, span, div { font-family: ${FONT} !important; }
</style>
</head>
<body style="margin:0;padding:24px;font-family:${FONT};color:#000;background:#FFFFFF;">
  <div style="max-width:1100px;margin:0 auto;">
    <div style="border-bottom:2px solid #000;padding-bottom:12px;margin-bottom:18px;">
      <h1 style="font-size:22px;font-weight:700;margin:0;font-family:${FONT};">${escapeHtml(title)}</h1>
      <p style="font-size:13px;color:#444;margin:4px 0 0;font-family:${FONT};">${escapeHtml(period)} · ${escapeHtml(meta.team || '')}</p>
    </div>

    ${total && total.score != null ? `
    <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;margin-bottom:8px;font-family:${FONT};">
      <tr>
        <td style="border:1px solid #999;padding:8px 12px;font-size:13px;font-weight:700;background:#F5F5F5;width:30%;">${lang === 'en' ? 'Total LG Visibility' : '전체 LG Visibility'}</td>
        <td style="border:1px solid #999;padding:8px 12px;font-size:13px;font-weight:700;text-align:right;">${fmt(total.score)}%</td>
      </tr>
      <tr>
        <td style="border:1px solid #999;padding:8px 12px;font-size:13px;font-weight:700;background:#F5F5F5;">${lang === 'en' ? 'Competitor (Samsung) Visibility' : '경쟁사(Samsung) Visibility'}</td>
        <td style="border:1px solid #999;padding:8px 12px;font-size:13px;text-align:right;">${fmt(total.vsComp)}%</td>
      </tr>
      <tr>
        <td style="border:1px solid #999;padding:8px 12px;font-size:13px;font-weight:700;background:#F5F5F5;">${lang === 'en' ? 'vs Competitor' : '경쟁사 대비'}</td>
        <td style="border:1px solid #999;padding:8px 12px;font-size:13px;font-weight:700;text-align:right;">${fmtRatio(total.score, total.vsComp)}</td>
      </tr>
      ${total.prev != null && total.prev > 0 ? `<tr>
        <td style="border:1px solid #999;padding:8px 12px;font-size:13px;font-weight:700;background:#F5F5F5;">MoM(%p)</td>
        <td style="border:1px solid #999;padding:8px 12px;font-size:13px;text-align:right;">${fmtDelta(total.score, total.prev)}</td>
      </tr>` : ''}
    </table>` : ''}

    ${buildBuTotalsTable(total?.buTotals, total?.buTotalsPrev, lang)}
    ${buildCountryTotalsTable(total?.countryTotals, total?.countryTotalsPrev, lang)}
    ${buildProductSummaryTable(products, productsPrev, lang)}
    ${buildVisibilityTable(productsCnty, productsCntyPrev, lang, products)}

    <h1 style="font-size:18px;font-weight:700;margin:32px 0 6px;border-top:2px solid #000;padding-top:14px;font-family:${FONT};color:#000;">${lang === 'en' ? 'Citation Analysis' : 'Citation 분석'}</h1>
    ${buildCitationCategoryTable(citations, lang)}
    ${buildCitationDomainTable(citationsCnty, lang)}
    ${buildCitationCntyTable(citationsCnty, lang)}
    ${buildDotcomTable(dotcom, lang)}

    ${buildTrackerSummaryTable(categoryStats, lang, period)}
    ${buildStakeholderTable(stakeholderStats, lang)}

    <div style="margin-top:32px;padding-top:12px;border-top:1px solid #999;font-size:11px;color:#666;font-family:${FONT};">
      <p style="margin:0;">${lang === 'en' ? 'LG Electronics · D2C Digital Marketing Team' : 'LG전자 · D2C디지털마케팅팀'}</p>
    </div>
  </div>
</body></html>`
}
