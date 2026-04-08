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

// productsCnty 및 productsCntyPrev를 받아서 월간 표 생성
function buildVisibilityTable(productsCnty, productsCntyPrev, lang) {
  const t = lang === 'en' ? {
    country: 'Country', product: 'Product', lg: 'LG', comp: 'Top Comp', compName: 'Comp', ratio: 'vs Comp', mom: 'MoM',
    title: 'Monthly GEO Visibility — by Country × Product',
  } : {
    country: '국가', product: '제품', lg: 'LG', comp: '경쟁사', compName: '경쟁사명', ratio: '경쟁비', mom: 'MoM(%p)',
    title: '월간 GEO Visibility — 국가별 × 제품별',
  }

  // 이전 월 데이터: { "country|product": score }
  const prevMap = {}
  ;(productsCntyPrev || []).forEach(r => {
    if (r.country && r.product) prevMap[`${r.country}|${r.product}`] = r.score
  })

  // 국가별 그룹
  const byCountry = {}
  ;(productsCnty || []).forEach(r => {
    if (!r.country || r.country === 'TTL' || r.country === 'TOTAL') return
    if (!byCountry[r.country]) byCountry[r.country] = []
    byCountry[r.country].push(r)
  })
  const countries = Object.keys(byCountry).sort()

  if (!countries.length) return `<p style="font-size:13px;color:#666;font-family:${FONT};">데이터가 없습니다.</p>`

  const rows = []
  countries.forEach(cnty => {
    byCountry[cnty].sort((a, b) => (a.product || '').localeCompare(b.product || ''))
    byCountry[cnty].forEach((r, i) => {
      const prev = prevMap[`${r.country}|${r.product}`]
      const mom = fmtDelta(r.score, prev)
      rows.push(`<tr>
        ${i === 0 ? `<td rowspan="${byCountry[cnty].length}" style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${FONT};font-weight:700;background:#F5F5F5;text-align:center;vertical-align:middle;">${escapeHtml(r.country)}</td>` : ''}
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${FONT};">${escapeHtml(r.product || '')}</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${FONT};text-align:right;font-weight:700;">${fmt(r.score)}%</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${FONT};text-align:right;">${fmt(r.compScore)}%</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${FONT};">${escapeHtml(r.compName || '')}</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${FONT};text-align:right;font-weight:700;">${fmtRatio(r.score, r.compScore)}</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${FONT};text-align:right;">${mom}</td>
      </tr>`)
    })
  })

  return `
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${FONT};color:#000;">${t.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${FONT};">
    <thead>
      <tr style="background:#E8E8E8;">
        <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${t.country}</th>
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
