// ─── 월간 보고용 HTML 생성기 (단순 표 기반, 색상/그래프 없음) ─────────────
const FONT = "'LG Smart', 'Malgun Gothic', Arial, sans-serif"

function escapeHtml(str) {
  if (typeof str !== 'string') return String(str ?? '')
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;')
}

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

// 국가 = 컬럼, 제품 = 행 (pivot 형식, 가로로 길게)
function buildVisibilityTable(productsCnty, productsCntyPrev, lang) {
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

  const countries = Array.from(countrySet).sort()
  const products = Array.from(productSet).sort()

  if (!products.length || !countries.length) {
    return `<p style="font-size:11px;color:#666;font-family:${FONT};">데이터가 없습니다.</p>`
  }

  const colW = Math.max(60, Math.floor(100 / (countries.length + 1)))
  const headerCells = countries.map(c =>
    `<th style="border:1px solid #999;padding:4px 6px;font-size:10px;font-weight:700;text-align:center;background:#E8E8E8;min-width:50px;">${escapeHtml(c)}</th>`
  ).join('')

  // 각 제품마다 LG / 경쟁비 / MoM 3행 표시
  const rows = []
  products.forEach((p, pi) => {
    const bg = pi % 2 === 0 ? '#FFFFFF' : '#FAFAFA'
    // LG row
    const lgCells = countries.map(c => {
      const d = dataMap[p]?.[c]
      return `<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${FONT};text-align:right;font-weight:700;background:${bg};">${d ? fmt(d.score) : '—'}</td>`
    }).join('')
    // 경쟁비 row
    const ratioCells = countries.map(c => {
      const d = dataMap[p]?.[c]
      return `<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${FONT};text-align:right;background:${bg};">${d ? fmtRatio(d.score, d.compScore) : '—'}</td>`
    }).join('')
    // MoM row
    const momCells = countries.map(c => {
      const d = dataMap[p]?.[c]
      const prev = d?.prev || prevMap[`${c}|${p}`]
      return `<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${FONT};text-align:right;background:${bg};">${d ? fmtDelta(d.score, prev) : '—'}</td>`
    }).join('')
    rows.push(`
      <tr>
        <td rowspan="3" style="border:1px solid #999;padding:4px 6px;font-size:11px;font-family:${FONT};font-weight:700;background:#F0F0F0;text-align:center;vertical-align:middle;white-space:nowrap;">${escapeHtml(p)}</td>
        <td style="border:1px solid #999;padding:3px 6px;font-size:10px;font-family:${FONT};font-weight:600;background:${bg};white-space:nowrap;">${t.lg} (%)</td>
        ${lgCells}
      </tr>
      <tr>
        <td style="border:1px solid #999;padding:3px 6px;font-size:10px;font-family:${FONT};background:${bg};white-space:nowrap;">${t.ratio}</td>
        ${ratioCells}
      </tr>
      <tr>
        <td style="border:1px solid #999;padding:3px 6px;font-size:10px;font-family:${FONT};background:${bg};white-space:nowrap;">${t.mom} (%p)</td>
        ${momCells}
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
    const prods = grouped[bu] || []
    prods.forEach((p, i) => {
      const prev = p.prev || prevMap[p.id]
      const mom = fmtDelta(p.score, prev)
      rows.push(`<tr>
        ${i === 0 ? `<td rowspan="${prods.length}" style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${FONT};font-weight:700;background:#F5F5F5;text-align:center;vertical-align:middle;">${bu}</td>` : ''}
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${FONT};">${escapeHtml(p.kr || p.id)}</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${FONT};text-align:right;font-weight:700;">${fmt(p.score)}%</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${FONT};text-align:right;">${fmt(p.vsComp)}%</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${FONT};">${escapeHtml(p.compName || '')}</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${FONT};text-align:right;font-weight:700;">${fmtRatio(p.score, p.vsComp)}</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${FONT};text-align:right;">${mom}</td>
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

export function generateMonthlyReportHTML(meta, total, products, citations, dotcom = {}, lang = 'ko', productsCnty = [], citationsCnty = [], options = {}) {
  const { productsCntyPrev = [], productsPrev = [] } = options

  const title = lang === 'en' ? 'GEO Monthly Report' : 'GEO 월간 보고서'
  const period = meta.period || ''

  return `<!DOCTYPE html><html lang="${lang}"><head>
<meta charset="UTF-8">
<title>${escapeHtml(title)} — ${escapeHtml(period)}</title>
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
      ${total.prev ? `<tr>
        <td style="border:1px solid #999;padding:8px 12px;font-size:13px;font-weight:700;background:#F5F5F5;">MoM(%p)</td>
        <td style="border:1px solid #999;padding:8px 12px;font-size:13px;text-align:right;">${fmtDelta(total.score, total.prev)}</td>
      </tr>` : ''}
    </table>` : ''}

    ${buildProductSummaryTable(products, productsPrev, lang)}
    ${buildVisibilityTable(productsCnty, productsCntyPrev, lang)}

    <div style="margin-top:32px;padding-top:12px;border-top:1px solid #999;font-size:11px;color:#666;font-family:${FONT};">
      <p style="margin:0;">${lang === 'en' ? 'LG Electronics · D2C Digital Marketing Team' : 'LG전자 · D2C디지털마케팅팀'}</p>
    </div>
  </div>
</body></html>`
}
