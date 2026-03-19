// ─── GEO KPI 대시보드 — 독립 시각화 (이메일 템플릿 미사용) ─────────────────────
const FONT = "'LG Smart','Arial Narrow',Arial,sans-serif"
const RED = '#CF0652'

const T = {
  ko: {
    lead: '선도', behind: '추격', critical: '취약',
    weeklyTab: '주별', monthlyTab: '월별',
    vsComp: '대비', categories: '개 카테고리',
    productTitle: '제품별 GEO Visibility 현황',
    cntyTitle: '국가별 GEO Visibility 현황',
    citationTitle: '도메인 카테고리별 Citation 현황',
    citDomainTitle: '도메인별 Citation 현황',
    citCntyTitle: '국가별 Citation 도메인',
    dotcomTitle: '닷컴 Citation (경쟁사대비)',
    legendLead: '선도 ≥100%', legendBehind: '추격 ≥80%', legendCritical: '취약 <80%',
    lgBasis: 'LG/1위 기준',
    insight: 'INSIGHT', howToRead: 'HOW TO READ',
    geoInsight: 'Executive Summary',
    dotcomLgWin: 'LG 우위', dotcomSsWin: 'SS 우위', dotcomNone: '없음',
    dotcomTTL: 'TTL (전체)', dotcomLgOnly: '— (LG only)',
    todoTitle: 'Action Plan',
    footer: '해외영업본부 D2C해외영업그룹 D2C마케팅담당 D2C디지털마케팅팀',
    citLegend: 'Citation Score 건수 (비중)',
    progressMsg: '4월 업데이트 예정',
  },
  en: {
    lead: 'Lead', behind: 'Behind', critical: 'Critical',
    weeklyTab: 'Weekly', monthlyTab: 'Monthly',
    vsComp: 'vs', categories: ' Categories',
    productTitle: 'GEO Visibility by Product',
    cntyTitle: 'GEO Visibility by Country',
    citationTitle: 'Citation by Domain Category',
    citDomainTitle: 'Citation by Domain',
    citCntyTitle: 'Citation Domain by Country',
    dotcomTitle: 'Dotcom Citation (vs Competitor)',
    legendLead: 'Lead ≥100%', legendBehind: 'Behind ≥80%', legendCritical: 'Critical <80%',
    lgBasis: 'LG/Top 1 Basis',
    insight: 'INSIGHT', howToRead: 'HOW TO READ',
    geoInsight: 'Executive Summary',
    dotcomLgWin: 'LG Leads', dotcomSsWin: 'SS Leads', dotcomNone: 'None',
    dotcomTTL: 'TTL (Total)', dotcomLgOnly: '— (LG only)',
    todoTitle: 'Action Plan',
    footer: 'Overseas Sales HQ · D2C Digital Marketing Team',
    citLegend: 'Citation Score Count (Ratio)',
    progressMsg: 'Coming in April update',
  },
}

function statusInfo(s, lang) {
  const t = T[lang] || T.ko
  if (s === 'lead')     return { bg: '#ECFDF5', border: '#A7F3D0', color: '#15803D', label: t.lead }
  if (s === 'behind')   return { bg: '#FFFBEB', border: '#FDE68A', color: '#B45309', label: t.behind }
  if (s === 'critical') return { bg: '#FFF1F2', border: '#FECDD3', color: '#BE123C', label: t.critical }
  return { bg: '#F8FAFC', border: '#E2E8F0', color: '#475569', label: '—' }
}

function fmt(n) { return Number(n).toLocaleString('en-US') }
function mdBold(text) {
  return (text || '').replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/\r?\n/g, '<br>')
}
function stripDomain(d) {
  return (d || '').replace(/\.(com|org|net|co\.uk|com\.br|com\.au|com\.vn|com\.mx|co\.kr|de|es|fr|ca|in|vn)$/i, '')
}

// ─── SVG 그래프 ──────────────────────────────────────────────────────────────
let _sid = 0
function svgLine(data, labels, w, h, color) {
  if (!data || data.length < 2) return `<svg width="${w}" height="${h}"></svg>`
  const id = _sid++
  const pad = { t: 18, r: 10, b: 20, l: 10 }
  const cw = w - pad.l - pad.r, ch = h - pad.t - pad.b
  const mn = Math.min(...data) - 1, mx = Math.max(...data) + 1, rng = mx - mn || 1
  const pts = data.map((v, i) => ({
    x: pad.l + (i / (data.length - 1)) * cw,
    y: pad.t + (1 - (v - mn) / rng) * ch, v
  }))
  const line = pts.map((p, i) => `${i ? 'L' : 'M'}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ')
  const area = line + ` L${pts[pts.length-1].x.toFixed(1)},${pad.t+ch} L${pts[0].x.toFixed(1)},${pad.t+ch} Z`
  return `<svg viewBox="0 0 ${w} ${h}" width="100%" height="${h}" xmlns="http://www.w3.org/2000/svg" style="display:block;">
    <defs><linearGradient id="lg${id}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${color}" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="${color}" stop-opacity="0.03"/>
    </linearGradient></defs>
    <path d="${area}" fill="url(#lg${id})"/>
    <path d="${line}" stroke="${color}" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    ${pts.map(p => `<circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="3.5" fill="#fff" stroke="${color}" stroke-width="2"/>`).join('')}
    ${pts.map(p => `<text x="${p.x.toFixed(1)}" y="${Math.max(p.y - 7, 12)}" text-anchor="middle" font-size="10" font-weight="700" fill="${color}" font-family="${FONT}">${p.v.toFixed(1)}</text>`).join('')}
    ${pts.map((p, i) => `<text x="${p.x.toFixed(1)}" y="${pad.t+ch+14}" text-anchor="middle" font-size="9" fill="#94A3B8" font-family="${FONT}">${labels[i]||''}</text>`).join('')}
  </svg>`
}

// ─── Insight / HowToRead ────────────────────────────────────────────────────
function insightHtml(insight, showInsight, howToRead, showHowToRead, t) {
  let h = ''
  if (showInsight && insight) h += `<div class="insight-box"><span class="insight-label">${t.insight}</span><span class="insight-text">${mdBold(insight)}</span></div>`
  if (showHowToRead && howToRead) h += `<div class="howto-box"><span class="howto-label">${t.howToRead}</span><span class="howto-text">${mdBold(howToRead)}</span></div>`
  return h
}

// ─── Hero KPI ───────────────────────────────────────────────────────────────
function heroHtml(total, meta, t) {
  const d = +(total.score - total.prev).toFixed(1)
  const compAvg = total.vsComp || 0
  const gap = +(total.score - compAvg).toFixed(1)
  const dArrow = d > 0 ? '▲' : d < 0 ? '▼' : '─'
  const dColor = d > 0 ? '#22C55E' : d < 0 ? '#EF4444' : '#94A3B8'
  return `<div class="hero">
    <div class="hero-top">
      <div><span class="hero-brand">LG ELECTRONICS</span></div>
      <div><span class="hero-meta">${meta.reportNo || ''} · ${meta.period || ''}</span></div>
    </div>
    <div class="hero-body">
      <div class="hero-left">
        <div class="hero-label">LG GEO Visibility %</div>
        <div class="hero-score-row">
          <span class="hero-score">${total.score}</span><span class="hero-pct">%</span>
          <span class="hero-delta" style="color:${dColor}">${dArrow} ${Math.abs(d).toFixed(1)}%p</span>
          <span class="hero-mom">MoM</span>
        </div>
        <div class="hero-gauge">
          <div class="hero-gauge-track">
            <div class="hero-gauge-bar" style="width:${Math.min(total.score, 100)}%;background:${RED}"></div>
          </div>
          ${compAvg > 0 ? `<div class="hero-gauge-track" style="margin-top:6px">
            <div class="hero-gauge-bar" style="width:${Math.min(compAvg, 100)}%;background:#3B82F6"></div>
          </div>` : ''}
          <div class="hero-legend">
            <span><i style="background:${RED}"></i> LG ${total.score}%</span>
            ${compAvg > 0 ? `<span><i style="background:#3B82F6"></i> Samsung ${compAvg}%</span>` : ''}
            <span><i style="background:#475569"></i> prev ${total.prev}%</span>
          </div>
        </div>
      </div>
      <div class="hero-right">
        ${compAvg > 0 ? `<div class="hero-comp">
          <span class="hero-comp-label">SAMSUNG</span> <span class="hero-comp-score">${compAvg}%</span>
          <span class="hero-comp-gap" style="color:${gap >= 0 ? '#22C55E' : '#EF4444'}">Gap ${gap >= 0 ? '+' : ''}${gap}%p</span>
        </div>` : ''}
        <div class="hero-info">Model : ChatGPT, ChatGPT Search, Gemini, Perplexity<br/>Subsidiary : US, CA, UK, DE, ES, BR, MX, IN, AU, VN</div>
      </div>
    </div>
    ${meta.totalInsight ? `<div class="hero-insight"><span class="hero-insight-label">${t.geoInsight}</span><span class="hero-insight-text">${mdBold(meta.totalInsight)}</span></div>` : ''}
  </div>`
}

// ─── 제품 섹션 ──────────────────────────────────────────────────────────────
function productSectionHtml(products, meta, t, lang) {
  if (!products.length) return ''
  const BU_ORDER = ['MS', 'HS', 'ES']
  const wLabels = ['W1', 'W2', 'W3', 'W4']

  const buGroups = BU_ORDER.map(bu => {
    const prods = products.filter(p => p.bu === bu)
    if (!prods.length) return ''
    const cards = prods.map(p => {
      const st = statusInfo(p.status, lang)
      const d = +(p.score - (p.prev || 0)).toFixed(1)
      const dArrow = d > 0 ? '▲' : d < 0 ? '▼' : '─'
      const dColor = d > 0 ? '#22C55E' : d < 0 ? '#EF4444' : '#94A3B8'
      const sparkColor = p.status === 'critical' ? '#BE123C' : p.status === 'behind' ? '#D97706' : '#15803D'
      const weekly = p.weekly || []
      const monthly = p.monthly || (p.prev ? [p.prev, p.score] : [])
      const mLabels = monthly.length <= 4 ? ['M-3','M-2','M-1','M0'].slice(-monthly.length) : monthly.map((_,i) => `M${i+1}`)
      const compPct = p.compRatio || (p.vsComp > 0 ? Math.round((p.score / p.vsComp) * 100) : 100)
      const compColor = compPct >= 100 ? '#15803D' : compPct >= 80 ? '#D97706' : '#BE123C'
      return `<div class="prod-card" style="border-color:${st.border}">
        <div class="prod-head">
          <span class="prod-name">${p.kr}</span>
          <span class="prod-badge" style="background:${st.bg};color:${st.color};border-color:${st.border}">${st.label}</span>
        </div>
        <div class="prod-score-row">
          <span class="prod-score">${p.score.toFixed(1)}<small>%</small></span>
          <span class="prod-delta" style="color:${dColor}">${p.prev ? `MoM ${dArrow} ${Math.abs(d).toFixed(1)}%p` : 'MoM —'}</span>
        </div>
        <div class="prod-chart">
          <div class="trend-weekly">${svgLine(weekly, wLabels, 300, 90, sparkColor)}</div>
          <div class="trend-monthly" style="display:none">${svgLine(monthly, mLabels, 300, 90, sparkColor)}</div>
        </div>
        <div class="prod-comp">
          <span class="prod-comp-name">${lang === 'en' ? `vs ${p.compName}` : `${p.compName} ${t.vsComp}`}</span>
          <div class="prod-comp-bar-wrap">
            <div class="prod-comp-bar" style="width:${Math.min(compPct, 120)}%;background:${compColor}"></div>
          </div>
          <span class="prod-comp-pct" style="color:${compColor}">${compPct}%</span>
        </div>
      </div>`
    }).join('')
    return `<div class="bu-group">
      <div class="bu-header"><span class="bu-label">${bu}</span><span class="bu-count">${prods.length}${t.categories}</span></div>
      <div class="prod-grid">${cards}</div>
    </div>`
  }).join('')

  return `<div class="section-card">
    <div class="section-header">
      <div class="section-title">${t.productTitle}</div>
      <div class="section-header-right">
        <div class="trend-tabs">
          <button class="trend-tab active" onclick="switchTrend('weekly')">${t.weeklyTab}</button>
          <button class="trend-tab" onclick="switchTrend('monthly')">${t.monthlyTab}</button>
        </div>
        <span class="legend"><i style="background:#15803D"></i>${t.legendLead} <i style="background:#D97706"></i>${t.legendBehind} <i style="background:#BE123C"></i>${t.legendCritical}</span>
      </div>
    </div>
    ${insightHtml(meta.productInsight, meta.showProductInsight, meta.productHowToRead, meta.showProductHowToRead, t)}
    <div class="section-body">${buGroups}</div>
  </div>`
}

// ─── 국가별 Visibility ──────────────────────────────────────────────────────
function cntyStatus(sc, comp) {
  if (comp <= 0) return 'lead'
  const r = sc / comp * 100
  return r >= 100 ? 'lead' : r >= 80 ? 'behind' : 'critical'
}
function countrySectionHtml(productsCnty, meta, t, lang) {
  if (!productsCnty || !productsCnty.length) return ''
  const productMap = new Map()
  productsCnty.forEach(r => { if (!productMap.has(r.product)) productMap.set(r.product, []); productMap.get(r.product).push(r) })
  const filter = meta.cntyProductFilter || {}
  const sections = [...productMap.entries()].filter(([n]) => filter[n] !== false).map(([name, rows]) => {
    const maxScore = Math.max(...rows.map(r => Math.max(r.score, r.compScore)), 1)
    const bars = rows.map(r => {
      const st = cntyStatus(r.score, r.compScore)
      const barColor = st === 'lead' ? '#15803D' : st === 'behind' ? '#D97706' : '#BE123C'
      const gap = +(r.score - r.compScore).toFixed(1)
      const gapColor = gap >= 0 ? '#15803D' : '#BE123C'
      return `<div class="cnty-row">
        <span class="cnty-name">${r.country}</span>
        <div class="cnty-bars">
          <div class="cnty-bar-wrap">
            <div class="cnty-bar" style="width:${(r.score/maxScore*100).toFixed(1)}%;background:${barColor}"></div>
            <span class="cnty-val" style="color:${barColor}">${r.score.toFixed(1)}</span>
          </div>
          ${r.compScore > 0 ? `<div class="cnty-bar-wrap comp">
            <div class="cnty-bar" style="width:${(r.compScore/maxScore*100).toFixed(1)}%;background:#3B82F6;opacity:.5"></div>
            <span class="cnty-val" style="color:#64748B">${r.compName} ${r.compScore.toFixed(1)}</span>
          </div>` : ''}
        </div>
        <span class="cnty-gap" style="color:${gapColor}">${gap >= 0 ? '+' : ''}${gap}%p</span>
      </div>`
    }).join('')
    return `<div class="cnty-product"><div class="bu-header"><span class="bu-label">${name}</span><span class="bu-count">${rows.length}</span></div>${bars}</div>`
  }).join('')
  return `<div class="section-card">
    <div class="section-header"><div class="section-title">${t.cntyTitle}</div>
      <span class="legend"><i style="background:#15803D"></i>${t.legendLead} <i style="background:#D97706"></i>${t.legendBehind} <i style="background:#BE123C"></i>${t.legendCritical}</span>
    </div>
    ${insightHtml(meta.cntyInsight, meta.showCntyInsight, meta.cntyHowToRead, meta.showCntyHowToRead, t)}
    <div class="section-body">${sections}</div>
  </div>`
}

// ─── Citation 카테고리 ──────────────────────────────────────────────────────
function citationSectionHtml(citations, meta, t) {
  if (!citations || !citations.length) return ''
  const topN = meta.citationTopN || 10
  const list = citations.slice(0, topN)
  const maxScore = Math.max(...list.map(c => c.score), 1)
  const totalScore = citations.reduce((s, c) => s + c.score, 0)
  const rows = list.map((c, i) => {
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
  return `<div class="section-card">
    <div class="section-header"><div class="section-title">${t.citationTitle}</div><span class="legend">${t.citLegend}</span></div>
    ${insightHtml(meta.citationInsight, meta.showCitationInsight, meta.citationHowToRead, meta.showCitationHowToRead, t)}
    <div class="section-body">${rows}</div>
  </div>`
}

// ─── 도메인별 Citation ──────────────────────────────────────────────────────
function citDomainSectionHtml(citationsCnty, meta, t, citations) {
  if (!citationsCnty || !citationsCnty.length) return ''
  const topN = meta.citDomainTopN || 10
  const ttl = citationsCnty.filter(r => r.cnty === 'TTL').sort((a, b) => a.rank - b.rank).slice(0, topN)
  if (!ttl.length) return ''
  const maxScore = Math.max(...ttl.map(r => r.citations), 1)
  const totalCit = (citations && citations.length) ? citations.reduce((s, c) => s + c.score, 0) : ttl.reduce((s, r) => s + r.citations, 0)
  const rows = ttl.map((c, i) => {
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
  return `<div class="section-card">
    <div class="section-header"><div class="section-title">${t.citDomainTitle}</div><span class="legend">Top ${topN} Domains (TTL)</span></div>
    ${insightHtml(meta.citDomainInsight, meta.showCitDomainInsight, meta.citDomainHowToRead, meta.showCitDomainHowToRead, t)}
    <div class="section-body">${rows}</div>
  </div>`
}

// ─── 국가별 Citation 도메인 ─────────────────────────────────────────────────
function citCntySectionHtml(citationsCnty, meta, t) {
  if (!citationsCnty || !citationsCnty.length) return ''
  const cntyMap = new Map()
  citationsCnty.filter(r => r.cnty !== 'TTL').forEach(r => { if (!cntyMap.has(r.cnty)) cntyMap.set(r.cnty, []); cntyMap.get(r.cnty).push(r) })
  const sections = [...cntyMap.entries()].map(([cnty, rows]) => {
    const top10 = rows.sort((a, b) => a.rank - b.rank).slice(0, 10)
    const maxScore = Math.max(...top10.map(r => r.citations), 1)
    const bars = top10.map((c, i) => {
      const pct = (c.citations / maxScore * 100).toFixed(1)
      return `<div class="cit-row compact">
        <span class="cit-rank ${i < 3 ? 'top' : ''}">${c.rank}</span>
        <div class="cit-info"><span class="cit-source">${stripDomain(c.domain)}</span><span class="cit-cat">${c.type}</span></div>
        <div class="cit-bar-wrap"><div class="cit-bar" style="width:${pct}%"></div></div>
        <span class="cit-score">${fmt(c.citations)}</span>
      </div>`
    }).join('')
    return `<div class="cnty-product"><div class="bu-header"><span class="bu-label">${cnty}</span><span class="bu-count">Top ${top10.length}</span></div>${bars}</div>`
  }).join('')
  return `<div class="section-card">
    <div class="section-header"><div class="section-title">${t.citCntyTitle}</div></div>
    ${insightHtml(meta.citCntyInsight, meta.showCitCntyInsight, meta.citCntyHowToRead, meta.showCitCntyHowToRead, t)}
    <div class="section-body">${sections}</div>
  </div>`
}

// ─── 닷컴 Citation 비교 ────────────────────────────────────────────────────
const DC_COLS = ['TTL','PLP','Microsites','PDP','Newsroom','Support','Buying-guide','Experience']
const DC_SAM  = ['TTL','PLP','Microsites','PDP','Newsroom','Support','Buying-guide']
function dotcomSectionHtml(dotcom, meta, t) {
  if (!dotcom || !dotcom.lg) return ''
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
  return `<div class="section-card">
    <div class="section-header"><div class="section-title">${t.dotcomTitle}</div>
      <span class="legend"><i style="background:${RED}"></i>LG <i style="background:#3B82F6"></i>SS</span>
    </div>
    ${insightHtml(meta.dotcomInsight, meta.showDotcomInsight, meta.dotcomHowToRead, meta.showDotcomHowToRead, t)}
    <div class="section-body">
      ${rows}
      <div class="dc-summary">
        <span class="dc-sum-item lg">${t.dotcomLgWin} (${lgWins.length})</span> <span class="dc-sum-list">${lgWins.length ? lgWins.join(', ') : t.dotcomNone}</span>
        <span class="dc-sum-item ss">${t.dotcomSsWin} (${samWins.length})</span> <span class="dc-sum-list">${samWins.length ? samWins.join(', ') : t.dotcomNone}</span>
      </div>
    </div>
  </div>`
}

// ═══════════════════════════════════════════════════════════════════════════
// 메인 생성 함수
// ═══════════════════════════════════════════════════════════════════════════
export function generateDashboardHTML(meta, total, products, citations, dotcom, lang, productsCnty, citationsCnty) {
  _sid = 0
  const t = T[lang] || T.ko
  const visContent = [
    meta.showTotal !== false ? heroHtml(total, meta, t) : '',
    meta.showProducts !== false ? productSectionHtml(products, meta, t, lang) : '',
    meta.showCnty !== false ? countrySectionHtml(productsCnty, meta, t, lang) : '',
  ].join('')
  const citContent = [
    meta.showCitations !== false ? citationSectionHtml(citations, meta, t) : '',
    meta.showCitDomain !== false ? citDomainSectionHtml(citationsCnty, meta, t, citations) : '',
    meta.showCitCnty !== false ? citCntySectionHtml(citationsCnty, meta, t) : '',
    meta.showDotcom !== false ? dotcomSectionHtml(dotcom, meta, t) : '',
  ].join('')

  return `<!DOCTYPE html>
<html lang="${lang === 'en' ? 'en' : 'ko'}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${meta.title || 'GEO KPI Dashboard'} — ${meta.period || ''}</title>
<link href="https://fonts.cdnfonts.com/css/lg-smart" rel="stylesheet"/>
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{background:#F1F5F9;font-family:${FONT};min-width:1200px;color:#1A1A1A}
/* ── 탭바 ── */
.tab-bar{position:sticky;top:0;z-index:100;background:#0F172A;display:flex;align-items:center;justify-content:center;gap:4px;padding:10px 40px;border-bottom:1px solid #1E293B}
.tab-btn{padding:8px 24px;border-radius:8px;border:none;font-size:13px;font-weight:600;font-family:${FONT};cursor:pointer;transition:all .15s;color:#94A3B8;background:transparent}
.tab-btn:hover{color:#E2E8F0}
.tab-btn.active{background:${RED};color:#fff}
.tab-panel{display:none}
.tab-panel.active{display:block}
.dash-container{max-width:1400px;margin:0 auto;padding:28px 40px}
/* ── Hero ── */
.hero{background:#0F172A;border-radius:16px;padding:28px 32px;margin-bottom:24px;color:#fff}
.hero-top{display:flex;justify-content:space-between;margin-bottom:20px}
.hero-brand{font-size:13px;font-weight:700;color:#FFCCD8}
.hero-meta{font-size:12px;color:#FFB0C0}
.hero-body{display:flex;gap:40px;align-items:flex-start}
.hero-left{flex:1}
.hero-right{flex:0 0 320px;text-align:right}
.hero-label{font-size:14px;font-weight:600;color:#94A3B8;text-transform:uppercase;margin-bottom:8px}
.hero-score-row{margin-bottom:16px;display:flex;align-items:baseline;gap:8px}
.hero-score{font-size:52px;font-weight:900}
.hero-pct{font-size:20px;color:#94A3B8}
.hero-delta{font-size:16px;font-weight:700}
.hero-mom{font-size:13px;color:#64748B}
.hero-gauge{margin-top:8px}
.hero-gauge-track{height:10px;background:#1E2433;border-radius:8px;overflow:hidden}
.hero-gauge-bar{height:100%;border-radius:8px;transition:width .5s}
.hero-legend{display:flex;gap:16px;margin-top:10px;font-size:11px;color:#94A3B8}
.hero-legend i{display:inline-block;width:10px;height:10px;border-radius:5px;margin-right:4px;vertical-align:-1px}
.hero-comp{margin-top:12px}
.hero-comp-label{font-size:14px;font-weight:800;color:#3B82F6}
.hero-comp-score{font-size:14px;color:#94A3B8}
.hero-comp-gap{font-size:14px;font-weight:800;margin-left:8px}
.hero-info{font-size:11px;color:#64748B;margin-top:12px;line-height:1.6}
.hero-insight{margin-top:20px;padding:16px;background:#1E0F18;border:1px solid #3D1528;border-radius:10px}
.hero-insight-label{display:block;font-size:12px;font-weight:700;color:${RED};text-transform:uppercase;margin-bottom:6px}
.hero-insight-text{font-size:13px;color:#fff;line-height:1.8}
/* ── 섹션 카드 ── */
.section-card{background:#fff;border-radius:16px;border:1px solid #E8EDF2;margin-bottom:24px;overflow:hidden}
.section-header{padding:20px 28px;background:#FAFBFC;border-bottom:1px solid #F1F5F9;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px}
.section-title{font-size:17px;font-weight:700;color:#1A1A1A;display:flex;align-items:center;gap:8px}
.section-title::before{content:'';width:3px;height:20px;background:${RED};border-radius:2px;flex-shrink:0}
.section-header-right{display:flex;align-items:center;gap:16px}
.section-body{padding:24px 28px}
.legend{font-size:11px;color:#94A3B8;display:flex;align-items:center;gap:4px;flex-wrap:wrap}
.legend i{display:inline-block;width:8px;height:8px;border-radius:50%;margin:0 2px 0 8px;vertical-align:0}
/* ── Insight / HowToRead ── */
.insight-box{margin:0 28px;padding:12px 16px;background:#FFF4F7;border:1px solid #F5CCD8;border-radius:8px;margin-top:12px}
.insight-label{display:block;font-size:11px;font-weight:700;color:${RED};margin-bottom:4px}
.insight-text{font-size:12px;color:#1A1A1A;line-height:1.8}
.howto-box{margin:0 28px;padding:12px 16px;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:8px;margin-top:8px}
.howto-label{display:block;font-size:11px;font-weight:700;color:#64748B;margin-bottom:4px}
.howto-text{font-size:12px;color:#475569;line-height:1.8}
/* ── 트렌드 탭 ── */
.trend-tabs{display:inline-flex;background:#F1F5F9;border-radius:8px;padding:3px}
.trend-tab{padding:5px 16px;border:none;border-radius:6px;font-size:12px;font-weight:700;font-family:${FONT};cursor:pointer;background:transparent;color:#64748B;transition:all .15s}
.trend-tab.active{background:${RED};color:#fff}
.trend-tab:hover{opacity:.85}
/* ── BU / 제품 ── */
.bu-group{margin-bottom:20px}
.bu-header{display:flex;align-items:center;justify-content:space-between;background:#F1F5F9;border-radius:8px;padding:8px 14px;margin-bottom:12px}
.bu-label{font-size:15px;font-weight:700;color:#1A1A1A}
.bu-count{font-size:13px;color:#94A3B8}
.prod-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.prod-card{border:2px solid #E8EDF2;border-radius:12px;padding:16px 18px;background:#fff;transition:border-color .15s}
.prod-card:hover{border-color:#CBD5E1}
.prod-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:8px}
.prod-name{font-size:17px;font-weight:900;color:#1A1A1A}
.prod-badge{font-size:11px;font-weight:700;padding:2px 8px;border-radius:10px;border:1px solid}
.prod-score-row{display:flex;align-items:baseline;gap:10px;margin-bottom:4px}
.prod-score{font-size:28px;font-weight:900;color:#1A1A1A}
.prod-score small{font-size:14px;color:#94A3B8;font-weight:400}
.prod-delta{font-size:12px;font-weight:700}
.prod-chart{margin:6px 0 10px}
.prod-comp{display:flex;align-items:center;gap:8px;background:#F8FAFC;border-radius:8px;padding:8px 10px}
.prod-comp-name{font-size:12px;color:#64748B;white-space:nowrap;min-width:80px}
.prod-comp-bar-wrap{flex:1;height:6px;background:#E8EDF2;border-radius:3px;overflow:hidden}
.prod-comp-bar{height:100%;border-radius:3px;transition:width .3s}
.prod-comp-pct{font-size:13px;font-weight:700;min-width:40px;text-align:right}
/* ── 국가 ── */
.cnty-product{margin-bottom:20px}
.cnty-row{display:flex;align-items:center;gap:12px;padding:6px 0;border-bottom:1px solid #F8FAFC}
.cnty-row:last-child{border-bottom:none}
.cnty-name{font-size:13px;font-weight:600;color:#1A1A1A;min-width:60px}
.cnty-bars{flex:1}
.cnty-bar-wrap{display:flex;align-items:center;gap:8px;height:20px}
.cnty-bar-wrap.comp{height:14px}
.cnty-bar{height:100%;border-radius:4px;min-width:2px;transition:width .3s}
.cnty-val{font-size:12px;font-weight:700;white-space:nowrap}
.cnty-gap{font-size:12px;font-weight:700;min-width:60px;text-align:right}
/* ── Citation ── */
.cit-row{display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid #F8FAFC}
.cit-row:last-child{border-bottom:none}
.cit-row.compact{padding:5px 0}
.cit-rank{width:24px;height:24px;border-radius:5px;background:#F1F5F9;font-size:11px;font-weight:800;color:#94A3B8;display:flex;align-items:center;justify-content:center;flex-shrink:0}
.cit-rank.top{background:${RED};color:#fff}
.cit-info{min-width:140px;flex-shrink:0}
.cit-source{display:block;font-size:13px;font-weight:700;color:#1A1A1A}
.cit-cat{font-size:10px;color:#94A3B8;background:#F8FAFC;border-radius:4px;padding:1px 5px}
.cit-bar-wrap{flex:1;height:24px;background:#F8FAFC;border-radius:6px;overflow:hidden}
.cit-bar{height:100%;background:${RED};border-radius:6px;transition:width .3s}
.cit-score{font-size:13px;font-weight:700;color:${RED};min-width:70px;text-align:right}
.cit-ratio{font-size:12px;color:#64748B;min-width:50px}
.cit-delta{font-size:12px;font-weight:700;min-width:50px}
/* ── 닷컴 ── */
.dc-row{display:flex;align-items:center;gap:12px;padding:8px 0;border-bottom:1px solid #F8FAFC}
.dc-row:last-child{border-bottom:none}
.dc-row.ttl{background:#F8FAFC;border-radius:8px;padding:10px 12px;margin-bottom:8px;border-bottom:2px solid #E2E8F0}
.dc-label{font-size:13px;font-weight:700;color:#1A1A1A;min-width:160px;display:flex;align-items:center;gap:6px;flex-wrap:wrap}
.dc-bars{flex:1}
.dc-bar-pair{display:flex;align-items:center;gap:8px;margin:2px 0}
.dc-bar{height:14px;border-radius:4px;min-width:2px;transition:width .3s}
.dc-bar.lg{background:${RED}}
.dc-bar.ss{background:#3B82F6}
.dc-val{font-size:13px;font-weight:700;color:#94A3B8;white-space:nowrap}
.dc-val.win{color:#1A1A1A}
.dc-val.muted{color:#CBD5E1;font-weight:400}
.dc-badge{font-size:10px;font-weight:800;padding:1px 6px;border-radius:3px}
.dc-badge.lg{background:#FFF1F2;color:${RED}}
.dc-badge.ss{background:#EFF6FF;color:#3B82F6}
.dc-summary{display:flex;flex-wrap:wrap;gap:8px;margin-top:16px;padding-top:16px;border-top:1px solid #E8EDF2;align-items:center}
.dc-sum-item{font-size:13px;font-weight:700;color:#fff;padding:3px 10px;border-radius:5px}
.dc-sum-item.lg{background:${RED}}
.dc-sum-item.ss{background:#3B82F6}
.dc-sum-list{font-size:13px;color:#64748B;margin-right:16px}
/* ── Progress ── */
.progress-placeholder{min-height:60vh;display:flex;align-items:center;justify-content:center}
.progress-placeholder .inner{text-align:center;padding:40px}
.progress-placeholder .icon{font-size:48px;margin-bottom:16px;opacity:.3}
.progress-placeholder h2{font-size:18px;font-weight:700;color:#1E293B;margin-bottom:8px}
.progress-placeholder p{font-size:14px;color:#64748B}
/* ── Footer ── */
.dash-footer{background:#1A1A1A;padding:16px 40px;display:flex;justify-content:space-between;align-items:center;margin-top:auto}
.dash-footer span{font-size:11px;color:#94A3B8}
.dash-footer strong{color:#fff;font-weight:700}
</style>
</head>
<body>
<div class="tab-bar">
  <button class="tab-btn active" onclick="switchTab('visibility')">Visibility</button>
  <button class="tab-btn" onclick="switchTab('citation')">Citation</button>
  <button class="tab-btn" onclick="switchTab('progress')">Progress Tracker</button>
</div>
<div id="tab-visibility" class="tab-panel active">
  <div class="dash-container">${visContent}</div>
</div>
<div id="tab-citation" class="tab-panel">
  <div class="dash-container">${citContent}</div>
</div>
<div id="tab-progress" class="tab-panel">
  <div class="progress-placeholder"><div class="inner">
    <div class="icon">📊</div>
    <h2>Progress Tracker</h2>
    <p>${t.progressMsg}</p>
  </div></div>
</div>
<div class="dash-footer">
  <span><strong>LG Electronics</strong> ${t.footer}</span>
  <span>© 2026 LG Electronics Inc. All Rights Reserved.</span>
</div>
<script>
function switchTab(id){
  document.querySelectorAll('.tab-panel').forEach(function(p){p.classList.remove('active')});
  document.querySelectorAll('.tab-btn').forEach(function(b){b.classList.remove('active')});
  document.getElementById('tab-'+id).classList.add('active');
  var btns=document.querySelectorAll('.tab-btn');
  var map={visibility:0,citation:1,progress:2};
  if(map[id]!==undefined)btns[map[id]].classList.add('active');
}
function switchTrend(mode){
  document.querySelectorAll('.trend-weekly').forEach(function(el){el.style.display=mode==='weekly'?'':'none'});
  document.querySelectorAll('.trend-monthly').forEach(function(el){el.style.display=mode==='monthly'?'':'none'});
  document.querySelectorAll('.trend-tab').forEach(function(btn){
    var isW=mode==='weekly'&&(btn.textContent.match(/(주별|Weekly)/));
    var isM=mode==='monthly'&&(btn.textContent.match(/(월별|Monthly)/));
    if(isW||isM){btn.classList.add('active')}else{btn.classList.remove('active')}
  });
}
</script>
</body>
</html>`
}
