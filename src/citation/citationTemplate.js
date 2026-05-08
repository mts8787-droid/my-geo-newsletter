// ─── GEO Citation 대시보드 — Citation 전용 독립 시각화 ───────────────────────
// dashboardTemplate.js의 Citation 섹션만 추출하여 독립 렌더링
const FONT = "'LG Smart','Arial Narrow',Arial,sans-serif"
const RED = '#CF0652'
const COMP = '#94A3B8'

const COUNTRY_FULL_NAME = {
  US: 'USA', CA: 'Canada', UK: 'UK', GB: 'UK',
  DE: 'Germany', ES: 'Spain', FR: 'France', IT: 'Italy',
  BR: 'Brazil', MX: 'Mexico', IN: 'India', AU: 'Australia',
  VN: 'Vietnam', JP: 'Japan', KR: 'Korea', CN: 'China',
  TTL: 'Total', TOTAL: 'Total', GLOBAL: 'Global',
}
function cntyFullName(c) {
  const k = String(c || '').trim().toUpperCase()
  return COUNTRY_FULL_NAME[k] || c
}

const T = {
  ko: {
    citationTitle: '도메인 카테고리별 Citation 현황',
    citDomainTitle: '도메인별 Citation 현황',
    dotcomTitle: '닷컴 Citation (경쟁사대비)',
    insight: 'INSIGHT', howToRead: 'HOW TO READ',
    dotcomLgWin: 'LG 우위', dotcomSsWin: 'SS 우위', dotcomNone: '없음',
    dotcomTTL: 'TTL (전체)', dotcomLgOnly: '— (LG only)',
    citLegend: 'Citation URL 수',
    byProductFootnote: '제품별 Citation URL 수의 경우, 제품별 Prompt의 수가 상이하여 비중으로 표시함',
    footer: '해외영업본부 D2C해외영업그룹 D2C마케팅담당 D2C디지털마케팅팀',
  },
  en: {
    citationTitle: 'Citation by Domain Category',
    citDomainTitle: 'Citation by Domain',
    dotcomTitle: 'Dotcom Citation (vs Competitor)',
    insight: 'INSIGHT', howToRead: 'HOW TO READ',
    dotcomLgWin: 'LG Leads', dotcomSsWin: 'SS Leads', dotcomNone: 'None',
    dotcomTTL: 'TTL (Total)', dotcomLgOnly: '— (LG only)',
    citLegend: 'Citation URL Count',
    byProductFootnote: 'By Product Citation URL counts are shown as ratios since prompt counts differ across products',
    footer: 'Overseas Sales HQ · D2C Digital Marketing Team',
  },
}

function fmt(n) { return Number(n).toLocaleString('en-US') }
function mdBold(text) {
  return (text || '').replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/\r?\n/g, '<br>')
}
function stripDomain(d) {
  return (d || '').replace(/\.(com|org|net|co\.uk|com\.br|com\.au|com\.vn|com\.mx|co\.kr|de|es|fr|ca|in|vn)$/i, '')
}

function insightHtml(insight, showInsight, howToRead, showHowToRead, t) {
  let h = ''
  if (showInsight && insight) h += `<div class="insight-box"><span class="insight-label">${t.insight}</span><span class="insight-text">${mdBold(insight)}</span></div>`
  if (showHowToRead && howToRead) h += `<div class="howto-box"><span class="howto-label">${t.howToRead}</span><span class="howto-text">${mdBold(howToRead)}</span></div>`
  return h
}

// ─── Citation 섹션 ───────────────────────────────────────────────────────────
function citationSectionHtml(citations, meta, t, lang) {
  const topN = meta.citationTopN || 10
  let bodyHtml
  if (!citations || !citations.length) {
    const noDataMsg = lang === 'en' ? 'No data available for the selected filter.' : '선택된 필터에 해당하는 데이터가 없습니다.'
    bodyHtml = `<div style="text-align:center;padding:40px 20px;color:#94A3B8;font-size:13px">${noDataMsg}</div>`
  } else {
    const list = citations.slice(0, topN)
    const maxScore = Math.max(...list.map(c => c.score), 1)
    const totalScore = citations.reduce((s, c) => s + c.score, 0)
    bodyHtml = list.map((c, i) => {
      const pct = (c.score / maxScore * 100).toFixed(1)
      const ratio = totalScore > 0 ? ((c.score / totalScore) * 100).toFixed(1) : '0.0'
      const d = c.delta || 0
      const dArrow = d > 0 ? '▲' : d < 0 ? '▼' : ''
      const dColor = d > 0 ? '#22C55E' : d < 0 ? '#EF4444' : '#94A3B8'
      return `<div class="cit-row">
        <span class="cit-rank ${i < 3 ? 'top' : ''}">${c.rank || i+1}</span>
        <div class="cit-info"><span class="cit-source">${c.source}</span><span class="cit-cat">${c.category}</span></div>
        <div class="cit-bar-wrap"><div class="cit-bar" style="width:${pct}%"></div></div>
        <span class="cit-score">${fmt(c.score)}</span>
        <span class="cit-ratio">(${ratio}%)</span>
        ${d ? `<span class="cit-delta" style="color:${dColor}">${dArrow} ${Math.abs(d).toFixed(1)}</span>` : ''}
      </div>`
    }).join('')
  }
  return `<div class="section-card">
    <div class="section-header"><div class="section-title">${t.citationTitle}</div><span class="legend">${t.citLegend}</span></div>
    ${insightHtml(meta.citationInsight, meta.showCitationInsight, meta.citationHowToRead, meta.showCitationHowToRead, t)}
    <div class="section-body">${bodyHtml}</div>
  </div>`
}

// ─── 도메인별 Citation ──────────────────────────────────────────────────────
function citDomainSectionHtml(citationsCnty, meta, t, citations, lang, useAggregated) {
  if (!citationsCnty || !citationsCnty.length) return ''
  const topN = meta.citDomainTopN || 10

  let rows
  if (useAggregated) {
    // 선택된 국가 데이터를 도메인별로 합산
    const countryRows = citationsCnty.filter(r => r.cnty !== 'TTL')
    const domainMap = {}
    countryRows.forEach(r => {
      const key = r.domain
      if (!domainMap[key]) domainMap[key] = { domain: r.domain, type: r.type, citations: 0 }
      domainMap[key].citations += r.citations
    })
    rows = Object.values(domainMap).sort((a, b) => b.citations - a.citations).slice(0, topN)
    rows.forEach((r, i) => { r.rank = i + 1 })
  } else {
    rows = citationsCnty.filter(r => r.cnty === 'TTL').sort((a, b) => a.rank - b.rank).slice(0, topN)
  }
  let bodyHtml
  if (!rows.length) {
    const noDataMsg = lang === 'en' ? 'No data available for the selected filter.' : '선택된 필터에 해당하는 데이터가 없습니다.'
    bodyHtml = `<div style="text-align:center;padding:40px 20px;color:#94A3B8;font-size:13px">${noDataMsg}</div>`
  } else {
    const maxScore = Math.max(...rows.map(r => r.citations), 1)
    const totalCit = rows.reduce((s, r) => s + r.citations, 0)
    bodyHtml = rows.map((c, i) => {
      const pct = (c.citations / maxScore * 100).toFixed(1)
      const ratio = totalCit > 0 ? ((c.citations / totalCit) * 100).toFixed(1) : '0.0'
      return `<div class="cit-row">
        <span class="cit-rank ${i < 3 ? 'top' : ''}">${c.rank}</span>
        <div class="cit-info"><span class="cit-source">${stripDomain(c.domain)}</span><span class="cit-cat">${c.type}</span></div>
        <div class="cit-bar-wrap"><div class="cit-bar" style="width:${pct}%"></div></div>
        <span class="cit-score">${fmt(c.citations)}</span>
        <span class="cit-ratio">(${ratio}%)</span>
      </div>`
    }).join('')
  }

  return `<div class="section-card" id="cit-domain-section">
    <div class="section-header">
      <div class="section-title">${t.citDomainTitle}</div>
      <span class="legend">Top ${topN} Domains</span>
    </div>
    ${insightHtml(meta.citDomainInsight, meta.showCitDomainInsight, meta.citDomainHowToRead, meta.showCitDomainHowToRead, t)}
    <div class="section-body">${bodyHtml}</div>
  </div>`
}

// ─── 닷컴 Citation 비교 ────────────────────────────────────────────────────
const DC_COLS = ['TTL','PLP','Microsites','PDP','Newsroom','Support','Buying-guide','Experience']
const DC_SAM  = ['TTL','PLP','Microsites','PDP','Newsroom','Support','Buying-guide']
function dotcomSectionHtml(dotcom, meta, t, lang) {
  let bodyHtml
  if (!dotcom || !dotcom.lg) {
    const noDataMsg = lang === 'en' ? 'No data available for the selected filter.' : '선택된 필터에 해당하는 데이터가 없습니다.'
    bodyHtml = `<div style="text-align:center;padding:40px 20px;color:#94A3B8;font-size:13px">${noDataMsg}</div>`
  } else {
    const lg = dotcom.lg, sam = dotcom.samsung || {}
    const maxVal = Math.max(...DC_COLS.map(c => Math.max(lg[c]||0, sam[c]||0)), 1)
    const lgWins = DC_SAM.filter(c => (lg[c]||0) > (sam[c]||0))
    const samWins = DC_SAM.filter(c => (sam[c]||0) > (lg[c]||0))
    const rows = DC_COLS.map(col => {
      const lv = lg[col]||0, sv = sam[col]||0
      const hasSam = col !== 'Experience'
      const isTTL = col === 'TTL'
      const lgPct = (lv/maxVal*100).toFixed(1), samPct = (sv/maxVal*100).toFixed(1)
      const diff = lv - sv
      let badge = ''
      if (diff > 0) badge = `<span class="dc-badge lg">LG +${fmt(diff)}</span>`
      else if (diff < 0 && hasSam) badge = `<span class="dc-badge ss">SS +${fmt(Math.abs(diff))}</span>`
      return `<div class="dc-row ${isTTL ? 'ttl' : ''}">
        <span class="dc-label">${isTTL ? t.dotcomTTL : col}${badge}</span>
        <div class="dc-bars">
          <div class="dc-bar-pair">
            <div class="dc-bar lg" style="width:${lgPct}%"></div>
            <span class="dc-val ${lv >= sv ? 'win' : ''}">${fmt(lv)}</span>
          </div>
          ${hasSam ? `<div class="dc-bar-pair">
            <div class="dc-bar ss" style="width:${samPct}%"></div>
            <span class="dc-val ${sv > lv ? 'win' : ''}">${fmt(sv)}</span>
          </div>` : `<div class="dc-bar-pair"><span class="dc-val muted">${t.dotcomLgOnly}</span></div>`}
        </div>
      </div>`
    }).join('')
    bodyHtml = `${rows}
      <div class="dc-summary">
        <span class="dc-sum-item lg">${t.dotcomLgWin} (${lgWins.length})</span> <span class="dc-sum-list">${lgWins.length ? lgWins.join(', ') : t.dotcomNone}</span>
        <span class="dc-sum-item ss">${t.dotcomSsWin} (${samWins.length})</span> <span class="dc-sum-list">${samWins.length ? samWins.join(', ') : t.dotcomNone}</span>
      </div>`
  }
  return `<div class="section-card">
    <div class="section-header"><div class="section-title">${t.dotcomTitle}</div>
      <span class="legend"><i style="background:${RED}"></i>LG <i style="background:${COMP}"></i>SS</span>
    </div>
    ${insightHtml(meta.dotcomInsight, meta.showDotcomInsight, meta.dotcomHowToRead, meta.showDotcomHowToRead, t)}
    <div class="section-body">${bodyHtml}</div>
  </div>`
}


// ─── 닷컴 콘텐츠별 월간 트렌드 차트 ─────────────────────────────────────────
function dotcomTrendChartHtml(dotcomTrend, dotcomTrendMonths, lang) {
  if (!dotcomTrend || !dotcomTrendMonths || dotcomTrendMonths.length < 1) return ''
  const ALL_MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
  const months = ALL_MONTHS // 항상 12개월 표시
  const pageTypes = Object.keys(dotcomTrend).filter(k => k !== 'TTL')
  if (!pageTypes.length) return ''

  const title = lang === 'en' ? 'Dotcom Citation — Monthly Trend by Content Type' : '닷컴 Citation — 콘텐츠별 월간 트렌드'

  // 각 콘텐츠별 LG 12개월 데이터
  const seriesHtml = pageTypes.map(pt => {
    const mData = dotcomTrend[pt] || {}
    const vals = months.map(m => mData[m]?.lg ?? null)
    const lastV = vals.filter(v => v != null).pop()

    // SVG 라인 차트
    const N = months.length
    const cw = 72, w = cw * N, h = 120, pad = 12
    const ch = h - pad * 2
    const nonNull = vals.filter(v => v != null)
    const mn = nonNull.length ? Math.min(...nonNull) : 0
    const mx = nonNull.length ? Math.max(...nonNull) : 100
    const p = Math.max((mx - mn) * 0.15, 5)
    const rMin = mn - p, rMax = mx + p, rng = rMax - rMin || 1

    let svg = `<svg viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">`
    for (let g = 0; g <= 4; g++) { const gy = pad + (g / 4) * ch; svg += `<line x1="0" y1="${gy}" x2="${w}" y2="${gy}" stroke="#F1F5F9" stroke-width="1"/>` }
    const pts = []
    vals.forEach((v, i) => { if (v != null) pts.push({ x: (i + 0.5) * cw, y: pad + ((rMax - v) / rng) * ch }) })
    if (pts.length > 0) {
      const path = pts.map((p, i) => `${i ? 'L' : 'M'}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ')
      svg += `<path d="${path}" fill="none" stroke="${RED}" stroke-width="2.5"/>`
      pts.forEach(p => { svg += `<circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="4" fill="${RED}"/>` })
    }
    svg += '</svg>'

    // 테이블
    const colgroup = `<colgroup><col style="width:100px">${months.map(() => `<col style="width:${cw}px">`).join('')}</colgroup>`
    const thead = `<tr style="border-bottom:1px solid #E8EDF2"><th style="text-align:left;padding:5px 8px;font-size:13px;color:#94A3B8;font-weight:600"></th>${months.map(m => `<th style="text-align:center;padding:5px 0;font-size:13px;color:#94A3B8;font-weight:600">${m}</th>`).join('')}</tr>`
    const lgRow = `<tr style="background:#FFF8F9"><td style="padding:5px 8px;font-size:13px;font-weight:700;color:${RED}">LG</td>${vals.map(v => `<td style="text-align:center;padding:5px 0;font-size:13px;color:${v != null ? '#1A1A1A' : '#CBD5E1'};font-weight:700;font-variant-numeric:tabular-nums">${v != null ? fmt(v) : '—'}</td>`).join('')}</tr>`
    const ssVals = months.map(m => mData[m]?.samsung ?? null)
    const ssRow = `<tr><td style="padding:5px 8px;font-size:13px;font-weight:500;color:${COMP}">Samsung</td>${ssVals.map(v => `<td style="text-align:center;padding:5px 0;font-size:13px;color:${v != null ? '#475569' : '#CBD5E1'};font-variant-numeric:tabular-nums">${v != null ? fmt(v) : '—'}</td>`).join('')}</tr>`

    return `<div style="border:1px solid #E8EDF2;border-radius:12px;margin-bottom:16px;overflow:hidden">
      <div style="padding:12px 20px;background:#FAFBFC;border-bottom:1px solid #F1F5F9;display:flex;align-items:center;gap:10px">
        <span style="width:4px;height:20px;border-radius:4px;background:${RED};flex-shrink:0"></span>
        <span style="font-size:16px;font-weight:700;color:#1A1A1A">${pt}</span>
        ${lastV != null ? `<span style="font-size:14px;font-weight:700;color:#1A1A1A">${fmt(lastV)}</span>` : ''}
        <span style="margin-left:auto;font-size:12px;color:#94A3B8"><i style="display:inline-block;width:10px;height:3px;border-radius:1px;background:${RED};margin-right:3px;vertical-align:1px"></i>LG <i style="display:inline-block;width:10px;height:3px;border-radius:1px;background:${COMP};margin-left:8px;margin-right:3px;vertical-align:1px"></i>Samsung</span>
      </div>
      <div style="overflow-x:auto;padding:0 16px 12px">
        <div style="display:flex"><div style="width:100px;flex-shrink:0"></div><div style="width:${w}px;flex-shrink:0;padding:8px 0">${svg}</div></div>
        <table style="border-collapse:collapse;table-layout:fixed;width:${100 + w}px">${colgroup}${thead}${lgRow}${ssRow}</table>
      </div>
    </div>`
  }).join('')

  return `<div class="section-card" style="margin-top:20px">
    <div class="section-header"><div class="section-title">${title}</div>
      <span class="legend">Jan–Dec</span>
    </div>
    <div class="section-body">${seriesHtml}</div>
  </div>`
}

// ═══════════════════════════════════════════════════════════════════════════
// Citation 전용 HTML 생성
// ═══════════════════════════════════════════════════════════════════════════
// ─── Region 매핑 ────────────────────────────────────────────────────────────
const REGIONS = {
  NA:    { labelEn: 'North America', countries: ['US', 'CA'] },
  EU:    { labelEn: 'Europe',        countries: ['UK', 'DE', 'ES'] },
  LATAM: { labelEn: 'Latin America', countries: ['MX', 'BR'] },
  APAC:  { labelEn: 'Asia Pacific',  countries: ['AU', 'VN'] },
  IN:    { labelEn: 'India',         countries: ['IN'] },
}

// ─── 리본형 범프차트 공통 SVG 생성 ─────────────────────────────────────────
const BUMP_COLORS = ['#CF0652','#1D4ED8','#059669','#D97706','#7C3AED','#DB2777','#0D9488','#EA580C','#4F46E5','#DC2626','#0891B2','#65A30D']
// 12개월 고정 (Jan~Dec)
const TREND_12M = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
const BUMP_MAX = 10 // 최대 표시 개수

function bumpChartSvg(names, rankings, months, maxRank, labelFn) {
  const fixedRanks = BUMP_MAX
  const ROW_H = 52
  const EXT_L = 80
  const EXT_R = 20
  const W = Math.max(months.length * 200, 600) + EXT_L + EXT_R
  const padT = 0, padB = 30
  const H = fixedRanks * ROW_H + padT + padB
  const padL = 10 + EXT_L, padR = 10 + EXT_R
  const chartW = W - padL - padR
  const chartH = H - padT - padB
  const ribbonW = ROW_H * 0.38
  const RND = ribbonW // 둥근 끝 반지름

  let svg = `<svg viewBox="0 0 ${W} ${H}" width="100%" preserveAspectRatio="xMidYMid meet" style="font-family:${FONT};display:block">`

  const sortedNames = [...names].sort((a, b) => {
    const lastM = months[months.length - 1]
    return (rankings[b]?.[lastM] || 999) - (rankings[a]?.[lastM] || 999)
  })

  sortedNames.forEach((name) => {
    const color = BUMP_COLORS[names.indexOf(name) % BUMP_COLORS.length]
    const points = []
    months.forEach((m, i) => {
      const rank = rankings[name]?.[m]
      if (rank != null && rank <= fixedRanks) {
        const x = padL + (i / Math.max(months.length - 1, 1)) * chartW
        const y = padT + ((rank - 0.5) / fixedRanks) * chartH
        points.push({ x, y, rank, month: m })
      }
    })
    if (points.length < 1) return

    const first = points[0], last = points[points.length - 1]
    // 왼쪽 확장 (라벨 공간 확보 + 둥근 끝)
    const leftX = first.x - EXT_L
    const rightX = last.x + EXT_R
    const extPts = [{ x: leftX + RND, y: first.y }, ...points, { x: rightX - RND, y: last.y }]

    let upper = '', lower = ''
    for (let i = 0; i < extPts.length; i++) {
      const p = extPts[i]
      if (i === 0) {
        // 왼쪽 둥근 시작
        upper += `M${p.x - RND},${p.y} A${RND},${ribbonW} 0 0,1 ${p.x},${p.y - ribbonW}`
        lower = `L${p.x},${p.y + ribbonW} A${RND},${ribbonW} 0 0,1 ${p.x - RND},${p.y}`
      } else {
        const prev = extPts[i - 1]
        const cx = (prev.x + p.x) / 2
        upper += ` C${cx},${prev.y - ribbonW} ${cx},${p.y - ribbonW} ${p.x},${p.y - ribbonW}`
        lower = ` C${cx},${p.y + ribbonW} ${cx},${prev.y + ribbonW} ${prev.x},${prev.y + ribbonW}` + lower
      }
    }
    const lastExt = extPts[extPts.length - 1]
    // 오른쪽 둥근 끝
    const ribbonPath = upper + ` A${RND},${ribbonW} 0 0,1 ${lastExt.x + RND},${lastExt.y}` + ` A${RND},${ribbonW} 0 0,1 ${lastExt.x},${lastExt.y + ribbonW}` + lower + ' Z'
    svg += `<path d="${ribbonPath}" fill="${color}" opacity="0.6" stroke="${color}" stroke-width="0.5" stroke-opacity="0.3"/>`
  })

  // 라벨 (검은색, +3pt)
  names.forEach((name, ni) => {
    const label = labelFn ? labelFn(name) : name
    months.forEach((m, i) => {
      const rank = rankings[name]?.[m]
      if (rank == null || rank > fixedRanks) return
      const x = padL + (i / Math.max(months.length - 1, 1)) * chartW
      const y = padT + ((rank - 0.5) / fixedRanks) * chartH
      svg += `<text x="${x}" y="${y + 8}" text-anchor="middle" fill="#0F172A" font-size="22" font-weight="700">${label}</text>`
    })
  })

  // 하단 월 라벨
  months.forEach((m, i) => {
    const x = padL + (i / Math.max(months.length - 1, 1)) * chartW
    svg += `<line x1="${x}" y1="${padT + chartH + 2}" x2="${x}" y2="${padT + chartH + 8}" stroke="#94A3B8" stroke-width="1.5"/>`
    svg += `<text x="${x}" y="${padT + chartH + 26}" text-anchor="middle" fill="#475569" font-size="26" font-weight="800">${m}</text>`
  })

  svg += '</svg>'
  return svg
}

// ─── 도메인 카테고리 범프차트 (월간 트렌드) ─────────────────────────────────
function citCategoryBumpChartHtml(citTouchPointsTrend, citTrendMonths, meta, t, lang) {
  if (!citTouchPointsTrend || !citTrendMonths || citTrendMonths.length < 1) return ''
  const months = TREND_12M
  const entries = Object.entries(citTouchPointsTrend)
  if (!entries.length) return ''

  // 최신 월 기준 Top 10 선정
  const lastDataMonth = [...months].reverse().find(m => entries.some(([, d]) => d[m] > 0)) || months[months.length - 1]
  const topEntries = [...entries].sort((a, b) => (b[1][lastDataMonth] || 0) - (a[1][lastDataMonth] || 0)).slice(0, BUMP_MAX)
  const topNames = new Set(topEntries.map(([n]) => n))

  const rankings = {}
  months.forEach(m => {
    const scored = topEntries.map(([name, data]) => ({ name, score: data[m] || 0 }))
      .filter(e => e.score > 0)
      .sort((a, b) => b.score - a.score)
    scored.forEach((e, i) => {
      if (!rankings[e.name]) rankings[e.name] = {}
      rankings[e.name][m] = i + 1
    })
  })

  const names = Object.keys(rankings).filter(n => topNames.has(n))
  if (!names.length) return ''
  const maxRank = BUMP_MAX

  const svg = bumpChartSvg(names, rankings, months, maxRank)

  // 하단 실수치 테이블
  let table = `<table class="trend-table"><thead><tr><th>${lang === 'ko' ? '카테고리' : 'Category'}</th>`
  months.forEach(m => { table += `<th>${m}</th>` })
  table += '</tr></thead><tbody>'
  names.forEach((name, ni) => {
    const color = BUMP_COLORS[ni % BUMP_COLORS.length]
    table += `<tr><td><span class="trend-dot" style="background:${color}"></span>${name}</td>`
    months.forEach(m => {
      const val = citTouchPointsTrend[name]?.[m]
      const rank = rankings[name]?.[m]
      table += `<td>${val != null ? `<span class="trend-val">${fmt(val)}</span><span class="trend-rank">#${rank}</span>` : '—'}</td>`
    })
    table += '</tr>'
  })
  table += '</tbody></table>'

  return `<div class="section-card">
    <div class="section-header"><div class="section-title">${t.citationTitle} — ${lang === 'ko' ? '월간 트렌드' : 'Monthly Trend'}</div></div>
    <div class="section-body">
      <div class="bump-chart-wrap">${svg}</div>
      ${table}
    </div>
  </div>`
}

// ─── 도메인별 범프차트 (월간 트렌드) ──────────────────────────────────────────
function citDomainBumpChartHtml(citDomainTrend, citDomainMonths, meta, t, lang) {
  if (!citDomainTrend || !citDomainMonths || citDomainMonths.length < 1) return ''
  const months = TREND_12M
  const topN = BUMP_MAX

  // TTL 국가의 도메인만 사용
  const entries = Object.entries(citDomainTrend)
    .filter(([key]) => key.startsWith('TTL|'))
    .map(([key, val]) => ({ domain: val.domain, type: val.type, months: val.months }))

  if (!entries.length) return ''

  // 마지막 월 기준으로 정렬 후 Top N
  const lastMonth = months[months.length - 1]
  entries.sort((a, b) => (b.months[lastMonth] || 0) - (a.months[lastMonth] || 0))
  const topEntries = entries.slice(0, topN)

  // 월별 순위 계산
  const rankings = {}
  months.forEach(m => {
    const scored = topEntries.map(e => ({ domain: e.domain, score: e.months[m] || 0 }))
      .filter(e => e.score > 0)
      .sort((a, b) => b.score - a.score)
    scored.forEach((e, i) => {
      if (!rankings[e.domain]) rankings[e.domain] = {}
      rankings[e.domain][m] = i + 1
    })
  })

  const domains = Object.keys(rankings)
  if (!domains.length) return ''
  const maxRank = BUMP_MAX

  const svg = bumpChartSvg(domains, rankings, months, maxRank, d => stripDomain(d))

  // 하단 실수치 테이블
  let table = `<table class="trend-table"><thead><tr><th>${lang === 'ko' ? '도메인' : 'Domain'}</th><th>Type</th>`
  months.forEach(m => { table += `<th>${m}</th>` })
  table += '</tr></thead><tbody>'
  topEntries.forEach((entry, di) => {
    const color = BUMP_COLORS[di % BUMP_COLORS.length]
    const domain = entry.domain
    table += `<tr><td><span class="trend-dot" style="background:${color}"></span>${stripDomain(domain)}</td><td class="trend-type">${entry.type}</td>`
    months.forEach(m => {
      const val = entry.months[m]
      const rank = rankings[domain]?.[m]
      table += `<td>${val != null ? `<span class="trend-val">${fmt(val)}</span><span class="trend-rank">#${rank}</span>` : '—'}</td>`
    })
    table += '</tr>'
  })
  table += '</tbody></table>'

  return `<div class="section-card">
    <div class="section-header"><div class="section-title">${t.citDomainTitle} — ${lang === 'ko' ? '월간 트렌드' : 'Monthly Trend'}</div></div>
    <div class="section-body">
      <div class="bump-chart-wrap">${svg}</div>
      ${table}
    </div>
  </div>`
}

export function generateCitationHTML(meta, _total, _products, citations, dotcom, lang, _productsCnty, citationsCnty, trendData, citationsByCnty, dotcomByCnty, citationsByPrd) {
  const t = T[lang] || T.ko
  const { citTouchPointsTrend, citTrendMonths, citDomainTrend, citDomainMonths, dotcomTrend, dotcomTrendMonths } = trendData || {}
  citationsByCnty = citationsByCnty || {}
  citationsByPrd = citationsByPrd || {}
  dotcomByCnty = dotcomByCnty || {}

  // 원본 데이터 보존 (클라이언트 월 전환용)
  const rawCitations = citations ? JSON.parse(JSON.stringify(citations)) : []
  const rawCitationsByCnty = citationsByCnty ? JSON.parse(JSON.stringify(citationsByCnty)) : {}
  const rawCitationsByPrd = citationsByPrd ? JSON.parse(JSON.stringify(citationsByPrd)) : {}
  const rawCitationsCnty = citationsCnty ? JSON.parse(JSON.stringify(citationsCnty)) : []
  const rawDotcom = dotcom ? JSON.parse(JSON.stringify(dotcom)) : null
  const rawDotcomByCnty = dotcomByCnty ? JSON.parse(JSON.stringify(dotcomByCnty)) : {}

  // 가용 월 목록 추출 — TTL이 비는 달도 dropdown에 노출되도록 모든 소스에서 수집
  const MONTHS_EN = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
  const availableMonths = new Set()
  const collectMonths = list => list && list.forEach(c => { if (c.monthScores) Object.keys(c.monthScores).forEach(m => availableMonths.add(m)) })
  collectMonths(rawCitations)
  Object.values(rawCitationsByCnty).forEach(collectMonths)
  Object.values(rawCitationsByPrd).forEach(collectMonths)
  collectMonths(rawCitationsCnty)
  if (rawDotcom?.byMonth) Object.keys(rawDotcom.byMonth).forEach(m => availableMonths.add(m))
  if (rawDotcom?.byCntyByMonth) Object.keys(rawDotcom.byCntyByMonth).forEach(m => availableMonths.add(m))
  const sortedAvailMonths = MONTHS_EN.filter(m => availableMonths.has(m))

  // ── meta.period에서 선택된 월 추출 → 해당 월 데이터로 교체 ──
  let selectedMonth = null
  if (meta.period) {
    const p = String(meta.period)
    const km = p.match(/(\d{1,2})월/)
    if (km) selectedMonth = MONTHS_EN[parseInt(km[1]) - 1]
    if (!selectedMonth) {
      const em = p.match(/(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i)
      if (em) selectedMonth = em[1].charAt(0).toUpperCase() + em[1].slice(1).toLowerCase()
    }
  }
  // 선택된 월이 있으면 해당 월 monthScores만 사용 (없으면 0 → 필터아웃, 이전 월 폴백 금지)
  if (selectedMonth) {
    const pickScore = c => (c.monthScores && c.monthScores[selectedMonth]) || 0
    if (citations && citations.length) {
      citations = citations.map(c => ({ ...c, score: pickScore(c) })).filter(c => c.score > 0)
      citations.sort((a, b) => b.score - a.score)
      const total = citations.reduce((s, c) => s + c.score, 0)
      citations.forEach((c, i) => { c.rank = i + 1; c.ratio = total > 0 ? +((c.score / total) * 100).toFixed(1) : 0 })
    }
    if (citationsCnty && citationsCnty.length) {
      citationsCnty = citationsCnty
        .map(c => ({ ...c, citations: pickScore(c) }))
        .filter(c => c.citations > 0)
    }
    if (citationsByCnty && Object.keys(citationsByCnty).length) {
      const newByCnty = {}
      for (const [cnty, list] of Object.entries(citationsByCnty)) {
        const filtered = list.map(c => ({ ...c, score: pickScore(c) })).filter(c => c.score > 0)
        if (filtered.length) {
          filtered.sort((a, b) => b.score - a.score)
          const cntyTotal = filtered.reduce((s, c) => s + c.score, 0)
          filtered.forEach((c, i) => { c.rank = i + 1; c.ratio = cntyTotal > 0 ? +((c.score / cntyTotal) * 100).toFixed(1) : 0 })
          newByCnty[cnty] = filtered
        }
      }
      citationsByCnty = newByCnty
    }
    if (citationsByPrd && Object.keys(citationsByPrd).length) {
      const newByPrd = {}
      for (const [prd, list] of Object.entries(citationsByPrd)) {
        const filtered = list.map(c => ({ ...c, score: pickScore(c) })).filter(c => c.score > 0)
        if (filtered.length) {
          filtered.sort((a, b) => b.score - a.score)
          const prdTotal = filtered.reduce((s, c) => s + c.score, 0)
          filtered.forEach((c, i) => { c.rank = i + 1; c.ratio = prdTotal > 0 ? +((c.score / prdTotal) * 100).toFixed(1) : 0 })
          newByPrd[prd] = filtered
        }
      }
      citationsByPrd = newByPrd
    }
  }

  // Dotcom 기간 필터: 선택 월 → 없으면 가장 최신 데이터 있는 월로 폴백
  if (selectedMonth && dotcom) {
    const hasMonth = m => !!(dotcom.byMonth?.[m]) || (dotcom.byCntyByMonth?.[m] && Object.keys(dotcom.byCntyByMonth[m]).length > 0)
    let useMonth = selectedMonth
    if (!hasMonth(useMonth)) {
      for (let i = MONTHS_EN.length - 1; i >= 0; i--) {
        if (hasMonth(MONTHS_EN[i])) { useMonth = MONTHS_EN[i]; break }
      }
    }
    const dM = dotcom.byMonth?.[useMonth]
    const dCM = dotcom.byCntyByMonth?.[useMonth]
    if (dM) {
      dotcom = { ...dotcom, lg: dM.lg || {}, samsung: dM.samsung || {} }
    } else if (dCM && Object.keys(dCM).length) {
      const aLg = {}, aSam = {}
      Object.values(dCM).forEach(d => {
        Object.entries(d.lg || {}).forEach(([k, v]) => { aLg[k] = (aLg[k] || 0) + v })
        Object.entries(d.samsung || {}).forEach(([k, v]) => { aSam[k] = (aSam[k] || 0) + v })
      })
      dotcom = { ...dotcom, lg: aLg, samsung: aSam }
    } else {
      dotcom = { ...dotcom, lg: {}, samsung: {} }
    }
    dotcomByCnty = dCM || {}
  }

  // 국가 필터 초기 상태 (모두 선택)
  const allCountryCodes = Object.values(REGIONS).flatMap(r => r.countries)
  const isCountryOn = () => true

  const citNoticeHtml = meta.showNotice && meta.noticeText ? `<div class="notice-box"><div class="notice-title">${lang === 'en' ? 'NOTICE' : '공지사항'}</div><div class="notice-text">${mdBold(meta.noticeText)}</div></div>` : ''

  // ── 외부접점채널 탭 콘텐츠 ──
  // 제품별(By Product)은 cit-cat-wrap 및 cit-dom-wrap 내부에서 클라이언트가 렌더 (renderCitCat / renderCitDom)
  const touchPointContent = [
    citNoticeHtml,
    meta.showCitations !== false ? `<div id="cit-cat-wrap">${citationSectionHtml(citations, meta, t, lang)}</div>` : '',
    (meta.showCitDomain !== false || meta.showCitCnty !== false) ? `<div id="cit-dom-wrap">${citDomainSectionHtml(citationsCnty, meta, t, citations, lang, false)}</div>` : '',
    meta.showCitTouchPointsTrend !== false ? citCategoryBumpChartHtml(citTouchPointsTrend, citTrendMonths, meta, t, lang) : '',
    meta.showCitDomainTrend !== false ? citDomainBumpChartHtml(citDomainTrend, citDomainMonths, meta, t, lang) : '',
  ].join('')

  // ── 닷컴 탭 콘텐츠 ──
  const dotcomContent = [
    meta.showDotcom !== false ? `<div id="cit-dc-wrap">${dotcomSectionHtml(dotcom, meta, t, lang)}</div>` : '',
    meta.showDotcomTrend !== false ? dotcomTrendChartHtml(dotcomTrend, dotcomTrendMonths, lang) : '',
  ].join('')

  const content = `<div class="cit-gnb">
      <button class="cit-gnb-btn active" data-tab="touchpoint" onclick="switchSubTab(this,'touchpoint')">${lang === 'ko' ? '외부접점채널' : 'Touch Points'}</button>
      <button class="cit-gnb-btn" data-tab="dotcom" onclick="switchSubTab(this,'dotcom')">${lang === 'ko' ? '닷컴' : 'Dotcom'}</button>
    </div>
    <div class="sub-tab-panel" data-panel="touchpoint">${touchPointContent}</div>
    <div class="sub-tab-panel" data-panel="dotcom" style="display:none">${dotcomContent}</div>`

  // 모든 국가를 항상 표시 (데이터 유무와 무관 — REGIONS 정의 기준)
  const countryList = allCountryCodes.slice()
  const allOn = allCountryCodes.every(c => isCountryOn(c))

  const allLabel = lang === 'en' ? 'All' : '전체'
  const regionCheckboxes = Object.entries(REGIONS).map(([k, v]) => {
    const regionOn = v.countries.every(c => isCountryOn(c))
    return `<label class="fl-chk-label"><input type="checkbox" class="fl-chk" data-filter="region" value="${k}" ${regionOn ? 'checked' : ''} onchange="onRegionChange('${k}')"><span>${v.labelEn}</span></label>`
  }).join('')
  const countryCheckboxes = countryList.map(c =>
    `<label class="fl-chk-label"><input type="checkbox" class="fl-chk" data-filter="country" value="${c}" ${isCountryOn(c) ? 'checked' : ''} onchange="onFilterChange()"><span>${cntyFullName(c)}</span></label>`
  ).join('')

  const filterLayerHtml = `<div class="filter-layer" id="filter-layer">
    <div class="fl-row">
      <div class="fl-group cit-lang-toggle"><div style="display:flex;gap:2px;background:#F1F5F9;border-radius:6px;padding:2px"><button class="lang-btn${lang==='ko'?' active':''}" onclick="switchCitLang('ko')">KO</button><button class="lang-btn${lang==='en'?' active':''}" onclick="switchCitLang('en')">EN</button></div></div>
      <div class="fl-divider cit-lang-toggle"></div>
      <div class="fl-group">
        <span class="fl-label">${lang === 'en' ? 'Period' : '기간'}</span>
        ${sortedAvailMonths.length > 1 ? `<select id="month-select" onchange="switchMonth(this.value)" style="padding:4px 8px;border-radius:6px;border:1px solid #CBD5E1;font-size:13px;font-family:${FONT};background:#fff;cursor:pointer">${sortedAvailMonths.map(m =>
          `<option value="${m}"${m === selectedMonth ? ' selected' : ''}>${m}</option>`
        ).join('')}</select>` : `<span class="fl-badge">${meta.period || '—'}</span>`}
      </div>
      <div class="fl-divider"></div>
      <div class="fl-group">
        <span class="fl-label">Region</span>
        <label class="fl-chk-label fl-all-label"><input type="checkbox" class="fl-chk-all" data-target="region" ${allOn ? 'checked' : ''} onchange="toggleAll(this,'region')"><span>${allLabel}</span></label>
        ${regionCheckboxes}
      </div>
      <div class="fl-divider"></div>
      <div class="fl-group">
        <span class="fl-label">${lang === 'en' ? 'Country' : '국가'}</span>
        <label class="fl-chk-label fl-all-label"><input type="checkbox" class="fl-chk-all" data-target="country" ${allOn ? 'checked' : ''} onchange="toggleAll(this,'country')"><span>${allLabel}</span></label>
        ${countryCheckboxes}
      </div>
    </div>
  </div>`

  return `<!DOCTYPE html>
<html lang="${lang === 'en' ? 'en' : 'ko'}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Citation Dashboard — ${meta.period || ''}</title>
<link href="https://fonts.cdnfonts.com/css/lg-smart" rel="stylesheet"/>
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{background:#F1F5F9;font-family:${FONT};min-width:1200px;color:#1A1A1A}
.cit-header{position:sticky;top:0;z-index:100;background:#0F172A;display:flex;align-items:center;justify-content:space-between;padding:14px 40px;border-bottom:1px solid #1E293B}
.cit-header-title{font-size:20px;font-weight:700;color:#fff;display:flex;align-items:center;gap:10px}
.cit-header-title .logo{width:28px;height:28px;border-radius:7px;background:${RED};display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900;color:#fff}
.cit-header-meta{display:flex;align-items:center;gap:12px}
.cit-header-badge{font-size:14px;font-weight:600;color:#FFB0C0;padding:4px 12px;border-radius:6px;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.06)}
/* ── 필터 레이어 ── */
.filter-layer{position:sticky;top:53px;z-index:90;background:#fff;border-bottom:2px solid #E8EDF2;padding:8px 40px}
.fl-row{display:flex;align-items:center;gap:14px;flex-wrap:wrap;padding:4px 0}
.fl-group{display:flex;align-items:center;gap:6px;flex-wrap:wrap}
.fl-label{font-size:15px;font-weight:700;color:#64748B;white-space:nowrap;margin-right:4px}
.fl-badge{font-size:15px;font-weight:600;color:#1A1A1A;padding:3px 10px;border-radius:6px;background:#F1F5F9}
.fl-chk-label{display:inline-flex;align-items:center;gap:3px;padding:3px 8px;border-radius:6px;font-size:14px;font-weight:600;color:#475569;cursor:pointer;transition:all .15s;background:#F8FAFC;border:1px solid #E2E8F0;white-space:nowrap;user-select:none}
.fl-chk-label:hover{border-color:#94A3B8}
.fl-chk-label:has(input:checked){background:#0F172A;color:#fff;border-color:#0F172A}
.lang-btn{padding:4px 10px;border-radius:5px;border:none;font-size:13px;font-weight:700;cursor:pointer;background:transparent;color:#64748B;font-family:${FONT};transition:all .15s}
.lang-btn.active{background:${RED};color:#fff}
.lang-btn:hover:not(.active){color:#1E293B}
.fl-chk{width:12px;height:12px;margin:0;cursor:pointer;accent-color:${RED}}
.fl-all-label{font-weight:700}
.fl-divider{width:1px;height:24px;background:#E8EDF2;flex-shrink:0;align-self:center}
.dash-container{max-width:1400px;margin:0 auto;padding:28px 40px}
/* ── 섹션 카드 ── */
.section-card{background:#fff;border-radius:16px;border:1px solid #E8EDF2;margin-bottom:24px;overflow:hidden}
.section-header{padding:20px 28px;background:#FAFBFC;border-bottom:1px solid #F1F5F9;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px}
.section-title{font-size:20px;font-weight:700;color:#1A1A1A;display:flex;align-items:center;gap:8px}
.section-title::before{content:'';width:4px;height:22px;background:${RED};border-radius:4px;flex-shrink:0}
.section-body{padding:24px 28px}
.legend{font-size:14px;color:#94A3B8;display:flex;align-items:center;gap:4px;flex-wrap:wrap}
.legend i{display:inline-block;width:8px;height:8px;border-radius:50%;margin:0 2px 0 8px;vertical-align:0}
/* ── Insight / HowToRead ── */
.insight-box{margin:0 28px;padding:12px 16px;background:#FFF4F7;border:1px solid #F5CCD8;border-radius:8px;margin-top:12px}
.insight-label{display:block;font-size:14px;font-weight:700;color:${RED};margin-bottom:4px}
.insight-text{font-size:14px;color:#1A1A1A;line-height:1.8}
.howto-box{margin:0 28px;padding:12px 16px;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:8px;margin-top:8px}
.howto-label{display:block;font-size:14px;font-weight:700;color:#64748B;margin-bottom:4px}
.howto-text{font-size:14px;color:#475569;line-height:1.8}
/* ── Citation ── */
.cit-row{display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid #F8FAFC}
.cit-row:last-child{border-bottom:none}
.cit-rank{width:28px;height:28px;border-radius:5px;background:#F1F5F9;font-size:14px;font-weight:800;color:#94A3B8;display:flex;align-items:center;justify-content:center;flex-shrink:0}
.cit-rank.top{background:${RED};color:#fff}
.cit-info{min-width:160px;flex-shrink:0}
.cit-source{display:block;font-size:16px;font-weight:700;color:#1A1A1A}
.cit-cat{font-size:14px;color:#94A3B8;background:#F8FAFC;border-radius:4px;padding:1px 5px}
.cit-bar-wrap{flex:1;height:24px;background:#F8FAFC;border-radius:6px;overflow:hidden}
.cit-bar{height:100%;background:${RED};border-radius:6px;transition:width .3s}
.cit-score{font-size:16px;font-weight:700;color:${RED};min-width:80px;text-align:right}
.cit-ratio{font-size:14px;color:#64748B;min-width:50px}
.cit-delta{font-size:14px;font-weight:700;min-width:50px}
/* ── 닷컴 ── */
.dc-row{display:flex;align-items:center;gap:12px;padding:8px 0;border-bottom:1px solid #F8FAFC}
.dc-row:last-child{border-bottom:none}
.dc-row.ttl{background:#F8FAFC;border-radius:8px;padding:10px 12px;margin-bottom:8px;border-bottom:2px solid #E2E8F0}
.dc-label{font-size:16px;font-weight:700;color:#1A1A1A;min-width:160px;display:flex;align-items:center;gap:6px;flex-wrap:wrap}
.dc-bars{flex:1}
.dc-bar-pair{display:flex;align-items:center;gap:8px;margin:2px 0}
.dc-bar{height:16px;border-radius:4px;min-width:2px;transition:width .3s}
.dc-bar.lg{background:${RED}}
.dc-bar.ss{background:${COMP}}
.dc-val{font-size:16px;font-weight:700;color:#94A3B8;white-space:nowrap}
.dc-val.win{color:#1A1A1A}
.dc-val.muted{color:#CBD5E1;font-weight:400}
.dc-badge{font-size:14px;font-weight:800;padding:1px 6px;border-radius:3px}
.dc-badge.lg{background:#FFF1F2;color:${RED}}
.dc-badge.ss{background:#F1F5F9;color:#64748B}
.dc-summary{display:flex;flex-wrap:wrap;gap:8px;margin-top:16px;padding-top:16px;border-top:1px solid #E8EDF2;align-items:center}
.dc-sum-item{font-size:16px;font-weight:700;color:#fff;padding:3px 10px;border-radius:5px}
.dc-sum-item.lg{background:${RED}}
.dc-sum-item.ss{background:${COMP}}
.dc-sum-list{font-size:16px;color:#64748B;margin-right:16px}
/* ── Footer ── */
.notice-box{background:#FEF2F2;border:1px solid #FECACA;border-radius:12px;padding:16px 20px;margin-bottom:20px}
.notice-box .notice-title{font-size:14px;font-weight:700;color:#BE123C;margin-bottom:6px;text-transform:uppercase;letter-spacing:0.5px}
.notice-box .notice-text{font-size:15px;color:#1E293B;line-height:1.8}
.dash-footer{background:#1A1A1A;padding:16px 40px;display:flex;justify-content:space-between;align-items:center;margin-top:auto}
.dash-footer span{font-size:14px;color:#94A3B8}
.dash-footer strong{color:#fff;font-weight:700}
/* ── 서브탭 ── */
.cit-gnb{position:sticky;top:0;z-index:99;background:#1E293B;padding:6px 40px;display:flex;align-items:center;gap:4px}
.cit-gnb-btn{padding:6px 18px;border-radius:6px;border:none;font-size:14px;font-weight:600;font-family:${FONT};cursor:pointer;transition:all .15s;color:#94A3B8;background:transparent}
.cit-gnb-btn:hover{color:#E2E8F0}
.cit-gnb-btn.active{background:#334155;color:#fff}
/* ── 범프차트 ── */
.bump-chart-wrap{overflow-x:auto;padding:0;margin:0 0 20px}
.trend-table{width:100%;border-collapse:collapse;font-size:15px;margin-top:4px}
.trend-table th{padding:8px 10px;text-align:left;font-weight:700;color:#64748B;border-bottom:2px solid #E2E8F0;font-size:14px;white-space:nowrap}
.trend-table td{padding:7px 10px;border-bottom:1px solid #F1F5F9;white-space:nowrap;vertical-align:middle}
.trend-table tbody tr:hover{background:#F8FAFC}
.trend-dot{display:inline-block;width:10px;height:10px;border-radius:50%;margin-right:6px;vertical-align:middle;flex-shrink:0}
.trend-val{font-weight:700;color:#1A1A1A;margin-right:4px}
.trend-rank{font-size:13px;color:#94A3B8;font-weight:600}
.trend-type{color:#94A3B8;font-size:14px}
.cit-footnote{margin-top:12px;font-size:12px;color:#64748B;font-style:italic;padding:8px 12px;background:#F8FAFC;border-radius:6px;border-left:3px solid #CBD5E1}
</style>
</head>
<body>
<div class="cit-header">
  <div class="cit-header-title">
    <span class="logo">LG</span>
    Citation Dashboard
  </div>
  <div class="cit-header-meta">
    ${meta.period ? `<span class="cit-header-badge">${meta.period}</span>` : ''}
    <span class="cit-header-badge">${lang === 'en' ? 'Citation Analysis' : 'Citation 분석'}</span>
  </div>
</div>
${filterLayerHtml}
<div class="dash-container">
  ${content}
</div>
<div class="dash-footer">
  <span><strong>LG Electronics</strong> ${t.footer}</span>
  <span>© 2026 LG Electronics Inc. All Rights Reserved.</span>
</div>
<script>
var _citations=${JSON.stringify(citations || [])};
var _citationsByCnty=${JSON.stringify(citationsByCnty || {})};
var _citationsByPrd=${JSON.stringify(citationsByPrd || {})};
var _citationsCnty=${JSON.stringify(citationsCnty || [])};
var _dotcom=${JSON.stringify(dotcom || null)};
var _dotcomByCnty=${JSON.stringify(dotcomByCnty || {})};
var _rawCitations=${JSON.stringify(rawCitations)};
var _rawCitationsByCnty=${JSON.stringify(rawCitationsByCnty)};
var _rawCitationsByPrd=${JSON.stringify(rawCitationsByPrd)};
var _rawCitationsCnty=${JSON.stringify(rawCitationsCnty)};
var _rawDotcom=${JSON.stringify(rawDotcom)};
var _rawDotcomByCnty=${JSON.stringify(rawDotcomByCnty)};
var _meta=${JSON.stringify({
  citationTopN: meta.citationTopN || 10,
  citDomainTopN: meta.citDomainTopN || 10,
  showCitations: meta.showCitations,
  showCitDomain: meta.showCitDomain,
  showCitCnty: meta.showCitCnty,
  showDotcom: meta.showDotcom,
  byProductMode: meta.byProductMode || 'count',
})};
var _lang='${lang}';
var _noDataMsg=_lang==='en'?'No data available for the selected filter.':'선택된 필터에 해당하는 데이터가 없습니다.';
var _t=${JSON.stringify(t)};
var _DC_COLS=['TTL','PLP','Microsites','PDP','Newsroom','Support','Buying-guide','Experience'];
var _DC_SAM=['TTL','PLP','Microsites','PDP','Newsroom','Support','Buying-guide'];
function _fmt(n){return Number(n).toLocaleString('en-US')}
function _stripDomain(d){return(d||'').replace(/\\.(com|org|net|co\\.uk|com\\.br|com\\.au|com\\.vn|com\\.mx|co\\.kr|de|es|fr|ca|in|vn)$/i,'')}

var _CNTY_NAMES=${JSON.stringify(COUNTRY_FULL_NAME)};
function _cn(c){return _CNTY_NAMES[c]||_CNTY_NAMES[c&&c.toUpperCase()]||c}
function _citCatRows(cits,topN){
  if(!cits||!cits.length)return'<div style="text-align:center;padding:20px;color:#94A3B8;font-size:13px">'+_noDataMsg+'</div>';
  var list=cits.slice(0,topN);
  var maxScore=Math.max.apply(null,list.map(function(c){return c.score}).concat([1]));
  var totalScore=cits.reduce(function(s,c){return s+c.score},0);
  return list.map(function(c,i){
    var pct=(c.score/maxScore*100).toFixed(1);var ratio=totalScore>0?((c.score/totalScore)*100).toFixed(1):'0.0';
    return '<div class="cit-row"><span class="cit-rank '+(i<3?'top':'')+'">'+c.rank+'</span><div class="cit-info"><span class="cit-source">'+c.source+'</span><span class="cit-cat">'+(c.category||'')+'</span></div><div class="cit-bar-wrap"><div class="cit-bar" style="width:'+pct+'%"></div></div><span class="cit-score">'+_fmt(c.score)+'</span><span class="cit-ratio">('+ratio+'%)</span></div>'
  }).join('');
}
// topColor: 상위 3 막대 색 (기본 #CF0652). 연한 색 변형은 '#F87171' 권장.
// isRatio: true 면 라벨을 "% (cits 합 대비)" 로 표시 — 제품별 카드의 ratio 모드용.
function _citVBar(cits,topN,isSmall,topColor,isRatio){
  if(!cits||!cits.length)return'<div style="text-align:center;padding:12px;color:#94A3B8;font-size:12px">'+_noDataMsg+'</div>';
  var list=cits.slice(0,topN);
  var maxScore=Math.max.apply(null,list.map(function(c){return c.score}).concat([1]));
  var totalForRatio=isRatio?cits.reduce(function(s,c){return s+(c.score||0)},0):0;
  var BAR_H=isSmall?50:110;
  var LABEL_H=isSmall?30:36;
  var fs=isSmall?12:14;
  var fsl=isSmall?11:12;
  var tc=topColor||'#CF0652';
  return '<div style="display:flex;gap:'+(isSmall?'4':'6')+'px;padding:'+(isSmall?'4px 0 0':'8px 0 0')+';overflow-x:auto;align-items:flex-end">'+list.map(function(c,i){
    var h=Math.max(3,Math.round(c.score/maxScore*BAR_H));
    var color=i<3?tc:'#94A3B8';
    var valLabel=isRatio?(totalForRatio>0?((c.score/totalForRatio)*100).toFixed(1)+'%':'0%'):_fmt(c.score);
    return '<div style="display:flex;flex-direction:column;align-items:center;flex:1;min-width:'+(isSmall?'36px':'0')+'">'
      +'<span style="font-size:'+fs+'px;font-weight:700;color:'+color+';margin-bottom:2px">'+valLabel+'</span>'
      +'<div style="width:100%;height:'+h+'px;background:'+color+';border-radius:3px 3px 0 0;min-height:3px"></div>'
      +'<div style="height:'+LABEL_H+'px;display:flex;align-items:flex-start;justify-content:center;padding-top:3px"><span style="font-size:'+fsl+'px;color:#64748B;text-align:center;line-height:1.2;word-break:break-all;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical">'+c.source+'</span></div>'
      +'</div>';
  }).join('')+'</div>';
}
// 카드 한 장 (제목 + 작은 세로막대그래프)
function _vbarCard(title,vbarHtml){
  return '<div style="width:calc(50% - 6px);background:#F8FAFC;border:1px solid #E8EDF2;border-radius:8px;overflow:hidden">'
    +'<div style="padding:6px 12px;border-bottom:1px solid #F1F5F9;font-size:13px;font-weight:700;color:#1A1A1A">'+title+'</div>'
    +'<div style="padding:4px 4px">'+vbarHtml+'</div></div>';
}
// 하위 섹션 래퍼 (By Product / By Country)
function _subSection(label,cardsHtml){
  return '<div style="border-top:1px solid #E8EDF2;margin-top:16px;padding-top:16px">'
    +'<div style="font-size:14px;font-weight:700;color:#64748B;margin-bottom:10px">'+label+'</div>'
    +'<div style="display:flex;flex-wrap:wrap;gap:12px">'+cardsHtml+'</div></div>';
}
// prdData: 국가 필터 적용된 제품별 채널 데이터, enabledCntys: 선택된 국가 코드 배열
function renderCitCat(cits,prdData,enabledCntys){
  var el=document.getElementById('cit-cat-wrap');
  if(!el)return;
  var topN=_meta.citationTopN||10;
  var body=_citVBar(cits,topN,false);

  // By Country (선택된 국가만)
  var ALL=['US','CA','UK','DE','ES','BR','MX','AU','VN','IN'];
  var countries=enabledCntys&&enabledCntys.length?ALL.filter(function(c){return enabledCntys.indexOf(c)>=0}):ALL;
  var cntyCards=[];
  countries.forEach(function(cnty){
    var list=_citationsByCnty[cnty];
    if(!list||!list.length)return;
    list=list.filter(function(c){return !c.prd}).slice().sort(function(a,b){return b.score-a.score});
    if(!list.length)return;
    cntyCards.push(_vbarCard(_cn(cnty),_citVBar(list,8,true)));
  });
  if(cntyCards.length){
    body+=_subSection(_lang==='en'?'By Country':'국가별',cntyCards.join(''));
  }

  // By Product (국가 필터 반영, 연한 붉은색)
  var isRatio=_meta.byProductMode==='ratio';
  var prdSrc=prdData||_citationsByPrd||{};
  var prdCards=[];
  Object.keys(prdSrc).sort().forEach(function(prd){
    var list=prdSrc[prd];
    if(!list||!list.length)return;
    list=list.slice().sort(function(a,b){return b.score-a.score});
    prdCards.push(_vbarCard(prd,_citVBar(list,8,true,'#F87171',isRatio)));
  });
  if(prdCards.length){
    body+=_subSection(_lang==='en'?'By Product':'제품별',prdCards.join(''));
    if(isRatio)body+='<div class="cit-footnote">'+_t.byProductFootnote+'</div>';
  }

  el.innerHTML='<div class="section-card"><div class="section-header"><div class="section-title">'+_t.citationTitle+'</div><span class="legend">'+_t.citLegend+'</span></div><div class="section-body">'+body+'</div></div>';
}
// 도메인별 → 제품별 분해: 도메인 시트(_citationsCnty)에서 prd 필드 기반 그룹핑
// 전체 선택: cnty='TTL'의 PRD-specific 행을 우선 사용. 없으면 per-country 합으로 폴백.
// 부분 선택: 선택된 국가들의 PRD-specific 행만 합산.
function _domainByProduct(domain,enabledCntys){
  var dKey=_stripDomain(domain).toLowerCase();
  var ALL=['US','CA','UK','DE','ES','BR','MX','AU','VN','IN'];
  var allSelected=!enabledCntys||enabledCntys.length===0||enabledCntys.length===ALL.length;
  var isPrdSpecific=function(p){if(!p)return false;var u=String(p).toUpperCase();return u!=='TTL'&&u!=='TOTAL'};
  function collect(filterFn){
    var m={};
    (_citationsCnty||[]).forEach(function(r){
      if(!isPrdSpecific(r.prd))return;
      if(_stripDomain(r.domain).toLowerCase()!==dKey)return;
      if(!filterFn(r))return;
      m[r.prd]=(m[r.prd]||0)+(r.citations||0);
    });
    return m;
  }
  var prdMap;
  if(allSelected){
    prdMap=collect(function(r){return r.cnty==='TTL'});
    if(Object.keys(prdMap).length===0){
      prdMap=collect(function(r){return ALL.indexOf(r.cnty)>=0});
    }
  }else{
    prdMap=collect(function(r){return enabledCntys.indexOf(r.cnty)>=0});
  }
  return Object.keys(prdMap).map(function(p){return{source:p,score:prdMap[p]}})
    .sort(function(a,b){return b.score-a.score});
}

function _domToVBarData(rows,topN){
  // citationsCnty 형식 ({domain,citations}) → _citVBar 형식 ({source,score})
  var list=rows.slice(0,topN);
  return list.map(function(r){return{source:_stripDomain(r.domain),score:r.citations}});
}
function renderCitDom(citCnty,useAgg,prdData,enabledCntys){
  var el=document.getElementById('cit-dom-wrap');
  if(!el)return;
  var topN=_meta.citDomainTopN||10;var rows;
  // PRD-specific 행은 도메인 합계에 더해지면 PRD=TTL과 이중 합산되므로 top/By Country 집계에서 제외
  var isPrdTtlRow=function(r){return!r.prd||/^(ttl|total)$/i.test(r.prd)};
  if(useAgg){
    var countryRows=citCnty.filter(function(r){return r.cnty!=='TTL'&&isPrdTtlRow(r)});
    var dm={};countryRows.forEach(function(r){var k=r.domain;if(!dm[k])dm[k]={domain:r.domain,type:r.type,citations:0};dm[k].citations+=r.citations});
    rows=Object.values(dm).sort(function(a,b){return b.citations-a.citations}).slice(0,topN);
  } else {
    rows=citCnty.filter(function(r){return r.cnty==='TTL'&&isPrdTtlRow(r)}).sort(function(a,b){return a.rank-b.rank}).slice(0,topN);
  }
  // 전체 세로 막대그래프
  var body=_citVBar(_domToVBarData(rows||[],topN),topN,false);

  // By Country (선택된 국가만)
  var ALL=['US','CA','UK','DE','ES','BR','MX','AU','VN','IN'];
  var countries=enabledCntys&&enabledCntys.length?ALL.filter(function(c){return enabledCntys.indexOf(c)>=0}):ALL;
  var cntyCards=[];
  countries.forEach(function(cnty){
    var cRows=citCnty.filter(function(r){return r.cnty===cnty&&isPrdTtlRow(r)}).sort(function(a,b){return b.citations-a.citations});
    if(!cRows.length)return;
    cntyCards.push(_vbarCard(_cn(cnty),_citVBar(_domToVBarData(cRows,8),8,true)));
  });
  if(cntyCards.length){
    body+=_subSection(_lang==='en'?'By Country':'국가별',cntyCards.join(''));
  }

  // By Product (국가 필터 반영 — 개별 도메인 × 제품별, 연한 붉은색)
  var isRatio=_meta.byProductMode==='ratio';
  var prdCards=[];
  (rows||[]).forEach(function(d){
    var prdList=_domainByProduct(d.domain,enabledCntys);
    if(!prdList.length)return;
    prdCards.push(_vbarCard(_stripDomain(d.domain),_citVBar(prdList,8,true,'#F87171',isRatio)));
  });
  if(prdCards.length){
    body+=_subSection(_lang==='en'?'By Product':'제품별',prdCards.join(''));
    if(isRatio)body+='<div class="cit-footnote">'+_t.byProductFootnote+'</div>';
  }

  el.innerHTML='<div class="section-card"><div class="section-header"><div class="section-title">'+_t.citDomainTitle+'</div><span class="legend">Top '+topN+' Domains</span></div><div class="section-body">'+body+'</div></div>';
}

function _dcVBar(dc,isSmall){
  if(!dc||!dc.lg)return'<div style="text-align:center;padding:12px;color:#94A3B8;font-size:12px">'+_noDataMsg+'</div>';
  var lg=dc.lg,sam=dc.samsung||{};
  var cols=_DC_COLS.filter(function(c){return(lg[c]||0)>0||(sam[c]||0)>0});
  if(!cols.length)return'';
  var maxVal=Math.max.apply(null,cols.map(function(c){return Math.max(lg[c]||0,sam[c]||0)}).concat([1]));
  var BAR_H=isSmall?45:100;
  var bw=isSmall?14:22;
  var fs=isSmall?11:13;
  var fsl=isSmall?11:13;
  return '<div style="display:flex;gap:'+(isSmall?'6':'10')+'px;padding:'+(isSmall?'4px 0 0':'8px 0 0')+';overflow-x:auto;align-items:flex-end">'+cols.map(function(col){
    var lv=lg[col]||0,sv=sam[col]||0;
    var lh=Math.max(2,Math.round(lv/maxVal*BAR_H));
    var sh=Math.max(2,Math.round(sv/maxVal*BAR_H));
    var hasSam=col!=='Experience'&&sv>0;
    var diff=lv-sv;var gapColor=diff>=0?'#15803D':'#BE123C';
    var gapTxt=diff>0?'+'+_fmt(diff):diff<0?'-'+_fmt(Math.abs(diff)):'0';
    return '<div style="display:flex;flex-direction:column;align-items:center;flex:1;min-width:'+(isSmall?'40px':'0')+'">'
      +'<div style="display:flex;gap:2px;align-items:flex-end">'
      +'<div style="display:flex;flex-direction:column;align-items:center"><span style="font-size:'+fs+'px;font-weight:700;color:#CF0652;margin-bottom:1px">'+_fmt(lv)+'</span><div style="width:'+bw+'px;height:'+lh+'px;background:#CF0652;border-radius:2px 2px 0 0"></div></div>'
      +(hasSam?'<div style="display:flex;flex-direction:column;align-items:center"><span style="font-size:'+fs+'px;font-weight:600;color:#94A3B8;margin-bottom:1px">'+_fmt(sv)+'</span><div style="width:'+bw+'px;height:'+sh+'px;background:#94A3B8;border-radius:2px 2px 0 0"></div></div>':'')
      +'</div>'
      +'<span style="font-size:'+fsl+'px;color:#64748B;margin-top:3px;text-align:center;white-space:nowrap">'+(col==='TTL'?'Total':col)+'</span>'
      +(hasSam?'<span style="font-size:'+(isSmall?10:12)+'px;font-weight:700;color:'+gapColor+';margin-top:1px">'+gapTxt+'</span>':'')
      +'</div>';
  }).join('')+'</div>';
}
function renderDotcom(dc){
  var el=document.getElementById('cit-dc-wrap');
  if(!el)return;
  var legend='<span class="legend"><i style="background:#CF0652"></i>LG <i style="background:#94A3B8"></i>SS</span>';
  // 전체 + 국가별 하나의 섹션
  var body=_dcVBar(dc,false);
  // 국가별 세로 막대그래프 (항상 표시, 2개씩 1행)
  var countries=['US','CA','UK','DE','ES','BR','MX','AU','VN','IN'];
  var cntyCards=[];
  countries.forEach(function(cnty){
    var d=_dotcomByCnty[cnty];
    if(!d||!d.lg)return;
    var hasData=Object.values(d.lg||{}).some(function(v){return v>0})||Object.values(d.samsung||{}).some(function(v){return v>0});
    if(!hasData)return;
    cntyCards.push('<div style="width:calc(50% - 6px);background:#F8FAFC;border:1px solid #E8EDF2;border-radius:8px;overflow:hidden">'
      +'<div style="padding:6px 12px;border-bottom:1px solid #F1F5F9;font-size:13px;font-weight:700;color:#1A1A1A">'+_cn(cnty)+'</div>'
      +'<div style="padding:4px 4px">'+_dcVBar(d,true)+'</div></div>');
  });
  if(cntyCards.length){
    body+='<div style="border-top:1px solid #E8EDF2;margin-top:16px;padding-top:16px"><div style="font-size:14px;font-weight:700;color:#64748B;margin-bottom:10px">'+(_lang==='en'?'By Country':'국가별')+'</div><div style="display:flex;flex-wrap:wrap;gap:12px">'+cntyCards.join('')+'</div></div>';
  }
  el.innerHTML='<div class="section-card"><div class="section-header"><div class="section-title">'+_t.dotcomTitle+'</div>'+legend+'</div><div class="section-body">'+body+'</div></div>';
}

function switchMonth(month){
  // 드롭박스 동기화
  var sel=document.getElementById('month-select');
  if(sel)sel.value=month;
  // Touch Points: 해당 월 monthScores만 사용 (없으면 0 → 필터아웃, 이전 월 폴백 금지)
  _citations=_rawCitations.map(function(c){
    var s=(c.monthScores&&c.monthScores[month])||0;
    return Object.assign({},c,{score:s});
  }).filter(function(c){return c.score>0});
  _citations.sort(function(a,b){return b.score-a.score});
  var total=_citations.reduce(function(s,c){return s+c.score},0);
  _citations.forEach(function(c,i){c.rank=i+1;c.ratio=total>0?+((c.score/total)*100).toFixed(1):0});
  // 국가별 Touch Points
  _citationsByCnty={};
  Object.keys(_rawCitationsByCnty).forEach(function(cnty){
    var list=_rawCitationsByCnty[cnty].map(function(c){
      var s=(c.monthScores&&c.monthScores[month])||0;
      return Object.assign({},c,{score:s});
    }).filter(function(c){return c.score>0});
    if(list.length){
      list.sort(function(a,b){return b.score-a.score});
      var t=list.reduce(function(s,c){return s+c.score},0);
      list.forEach(function(c,i){c.rank=i+1;c.ratio=t>0?+((c.score/t)*100).toFixed(1):0});
      _citationsByCnty[cnty]=list;
    }
  });
  // 제품별 Touch Points
  _citationsByPrd={};
  Object.keys(_rawCitationsByPrd).forEach(function(prd){
    var list=_rawCitationsByPrd[prd].map(function(c){
      var s=(c.monthScores&&c.monthScores[month])||0;
      return Object.assign({},c,{score:s});
    }).filter(function(c){return c.score>0});
    if(list.length){
      list.sort(function(a,b){return b.score-a.score});
      var t=list.reduce(function(s,c){return s+c.score},0);
      list.forEach(function(c,i){c.rank=i+1;c.ratio=t>0?+((c.score/t)*100).toFixed(1):0});
      _citationsByPrd[prd]=list;
    }
  });
  // Domain
  _citationsCnty=_rawCitationsCnty.map(function(c){
    var s=(c.monthScores&&c.monthScores[month])||0;
    return Object.assign({},c,{citations:s});
  }).filter(function(c){return c.citations>0});
  // Dotcom — 선택 월 데이터 없으면 가장 최신 데이터 있는 월로 폴백
  if(_rawDotcom){
    var _MONTHS_EN=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var _hasM=function(m){return!!(_rawDotcom.byMonth&&_rawDotcom.byMonth[m])||(_rawDotcom.byCntyByMonth&&_rawDotcom.byCntyByMonth[m]&&Object.keys(_rawDotcom.byCntyByMonth[m]).length>0)};
    var useM=month;
    if(!_hasM(useM)){
      for(var i=_MONTHS_EN.length-1;i>=0;i--){if(_hasM(_MONTHS_EN[i])){useM=_MONTHS_EN[i];break}}
    }
    var dM=_rawDotcom.byMonth&&_rawDotcom.byMonth[useM];
    var dCM=_rawDotcom.byCntyByMonth&&_rawDotcom.byCntyByMonth[useM];
    if(dM){
      _dotcom={lg:dM.lg||{},samsung:dM.samsung||{}};
    }else if(dCM&&Object.keys(dCM).length){
      var aLg={},aSam={};
      Object.values(dCM).forEach(function(d){
        Object.entries(d.lg||{}).forEach(function(e){aLg[e[0]]=(aLg[e[0]]||0)+e[1]});
        Object.entries(d.samsung||{}).forEach(function(e){aSam[e[0]]=(aSam[e[0]]||0)+e[1]});
      });
      _dotcom={lg:aLg,samsung:aSam};
    }else{
      _dotcom={lg:{},samsung:{}};
    }
    _dotcomByCnty=dCM||{};
  }
  applyFilter();
}
function applyFilter(){
  var filter={};var allCodes=['US','CA','UK','DE','ES','MX','BR','AU','VN','IN'];
  document.querySelectorAll('#filter-layer .fl-chk[data-filter="country"]').forEach(function(c){filter[c.value]=c.checked});
  var enabled=allCodes.filter(function(c){return filter[c]!==false});
  var allSelected=enabled.length===allCodes.length;
  var noneSelected=enabled.length===0;

  // 카테고리 Citation
  var filteredCit=_citations;
  if(noneSelected){filteredCit=[]}
  else if(!allSelected&&Object.keys(_citationsByCnty).length>0){
    var catMap={};enabled.forEach(function(cnty){var list=(_citationsByCnty[cnty]||[]).filter(function(c){return !c.prd});list.forEach(function(c){if(!catMap[c.source])catMap[c.source]={source:c.source,category:c.category||'',score:0,delta:0};catMap[c.source].score+=c.score})});
    var merged=Object.values(catMap).sort(function(a,b){return b.score-a.score});
    var total=merged.reduce(function(s,c){return s+c.score},0);
    merged.forEach(function(c,i){c.rank=i+1;c.ratio=total>0?+((c.score/total)*100).toFixed(1):0});
    if(merged.length>0)filteredCit=merged;
  }

  // 제품별 채널 데이터 — 국가 필터 반영
  // 전체 선택: _citationsByPrd (TTL/aggregated 뷰) 그대로
  // 일부 선택: _citationsByCnty[cnty][i].prd 로 매칭해 채널별 score 합산
  var prdData=null;
  if(noneSelected){
    prdData={};
  }else if(allSelected){
    prdData=_citationsByPrd;
  }else{
    prdData={};
    Object.keys(_citationsByPrd||{}).forEach(function(prd){
      var ch={};
      enabled.forEach(function(cnty){
        (_citationsByCnty[cnty]||[]).forEach(function(c){
          if(c.prd!==prd)return;
          if(!ch[c.source])ch[c.source]={source:c.source,score:0};
          ch[c.source].score+=c.score;
        });
      });
      var list=Object.values(ch).sort(function(a,b){return b.score-a.score});
      if(list.length)prdData[prd]=list;
    });
  }
  renderCitCat(filteredCit,prdData,enabled);

  // 도메인 Citation
  var filteredCitCnty=noneSelected?[]:(_citationsCnty||[]).filter(function(r){return r.cnty==='TTL'||enabled.includes(r.cnty)});
  renderCitDom(filteredCitCnty,!allSelected&&!noneSelected,prdData,enabled);

  // 닷컴 Citation
  var filteredDc=_dotcom;
  if(noneSelected){filteredDc=null}
  else if(!allSelected&&Object.keys(_dotcomByCnty).length>0){
    var lg={},samsung={};enabled.forEach(function(cnty){var d=_dotcomByCnty[cnty];if(!d)return;Object.entries(d.lg||{}).forEach(function(e){lg[e[0]]=(lg[e[0]]||0)+e[1]});Object.entries(d.samsung||{}).forEach(function(e){samsung[e[0]]=(samsung[e[0]]||0)+e[1]})});
    if(Object.keys(lg).length>0)filteredDc={lg:lg,samsung:samsung};else filteredDc=null;
  }
  renderDotcom(filteredDc);
}

function switchSubTab(btn,tab){
  document.querySelectorAll('.cit-gnb-btn').forEach(function(t){t.classList.remove('active')});
  if(btn)btn.classList.add('active');
  document.querySelectorAll('.sub-tab-panel').forEach(function(p){
    p.style.display=p.getAttribute('data-panel')===tab?'':'none';
  });
}
// 쿼리 파라미터로 탭 자동 선택 (?tab=dotcom 또는 ?tab=touchpoint)
(function(){
  var params=new URLSearchParams(window.location.search);
  var tab=params.get('tab');
  if(tab==='dotcom'||tab==='touchpoint'){
    var btn=document.querySelector('.cit-gnb-btn[data-tab="'+tab+'"]');
    switchSubTab(btn,tab);
    var gnb=document.querySelector('.cit-gnb');
    if(gnb)gnb.style.display='none';
  }
})();
var _REGIONS=${JSON.stringify(Object.fromEntries(Object.entries(REGIONS).map(([k, v]) => [k, v.countries])))};
function updateAllCheckbox(target){
  var all=document.querySelectorAll('.fl-chk[data-filter="'+target+'"]');
  var allChecked=true;
  all.forEach(function(c){if(!c.checked)allChecked=false});
  document.querySelectorAll('.fl-chk-all[data-target="'+target+'"]').forEach(function(c){c.checked=allChecked});
}
function toggleAll(el,target){
  var checked=el.checked;
  document.querySelectorAll('.fl-chk[data-filter="'+target+'"]').forEach(function(c){c.checked=checked});
  if(target==='region'){
    document.querySelectorAll('.fl-chk[data-filter="country"]').forEach(function(c){c.checked=checked});
    document.querySelectorAll('.fl-chk-all[data-target="country"]').forEach(function(c){c.checked=checked});
  }
  onFilterChange();
}
function onRegionChange(region){
  var chk=document.querySelector('.fl-chk[data-filter="region"][value="'+region+'"]');
  if(!chk)return;
  var isChecked=chk.checked;
  var rc=_REGIONS[region]||[];
  rc.forEach(function(c){
    document.querySelectorAll('.fl-chk[data-filter="country"][value="'+c+'"]').forEach(function(cb){cb.checked=isChecked});
  });
  updateAllCheckbox('region');
  updateAllCheckbox('country');
  onFilterChange();
}
function switchCitLang(lang){
  var path=window.location.pathname;
  if(path.indexOf('-KO')>0)window.location.href=path.replace('-KO',lang==='en'?'-EN':'-KO');
  else if(path.indexOf('-EN')>0)window.location.href=path.replace('-EN',lang==='ko'?'-KO':'-EN');
  // iframe 안에서 호출된 경우 부모에게 알림
  try{if(window.parent!==window)window.parent.postMessage({type:'switchLang',lang:lang},'*')}catch(e){}
}
function onFilterChange(){
  updateAllCheckbox('region');
  updateAllCheckbox('country');
  applyFilter();
}
// iframe 안이면 한영 토글 + 헤더 숨기기 + 필터 위치 조정
try{if(window.self!==window.top){
  document.querySelectorAll('.cit-lang-toggle').forEach(function(el){el.style.display='none'});
  var hdr=document.querySelector('.cit-header');if(hdr)hdr.style.display='none';
  var fl=document.querySelector('.filter-layer');if(fl)fl.style.top='0';
}}catch(e){}
// 초기 로드 시 세로 막대그래프로 렌더링
applyFilter();
</script>
</body>
</html>`
}
