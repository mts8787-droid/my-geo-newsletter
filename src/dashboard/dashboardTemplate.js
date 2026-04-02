// ─── GEO KPI 대시보드 — 독립 시각화 (이메일 템플릿 미사용) ─────────────────────
const FONT = "'LG Smart','Arial Narrow',Arial,sans-serif"
const RED = '#CF0652'
const COMP = '#94A3B8' // 경쟁사 공통 회색

const T = {
  ko: {
    lead: '선도', behind: '추격', critical: '취약',
    weeklyTab: '주별', monthlyTab: '월별',
    vsComp: '대비', categories: '개 카테고리',
    byProduct: '제품별', byCountry: '국가별',
    allProducts: '전체 제품', allCountries: '전체 국가',
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
    readabilityMsg: '4월 업데이트 예정',
  },
  en: {
    lead: 'Lead', behind: 'Behind', critical: 'Critical',
    weeklyTab: 'Weekly', monthlyTab: 'Monthly',
    vsComp: 'vs', categories: ' Categories',
    byProduct: 'By Product', byCountry: 'By Country',
    allProducts: 'All Products', allCountries: 'All Countries',
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
    readabilityMsg: 'Coming in April update',
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
  if (!data || !data.length) return `<svg width="${w}" height="${h}"></svg>`
  const id = _sid++
  const pad = { t: 18, r: 10, b: 20, l: 10 }
  const cw = w - pad.l - pad.r, ch = h - pad.t - pad.b
  const valid = data.filter(v => v != null)
  if (!valid.length) {
    // 데이터 없어도 축 라벨은 표시
    let svg = `<svg viewBox="0 0 ${w} ${h}" width="100%" height="${h}" xmlns="http://www.w3.org/2000/svg" style="display:block;">`
    const N = data.length, divisor = N > 1 ? N - 1 : 1
    svg += data.map((_, i) => {
      const x = pad.l + (i / divisor) * cw
      return `<text x="${x.toFixed(1)}" y="${pad.t+ch+14}" text-anchor="middle" font-size="12" fill="#94A3B8" font-family="${FONT}">${labels[i]||''}</text>`
    }).join('')
    svg += '</svg>'
    return svg
  }
  const mn = Math.min(...valid) - 1, mx = Math.max(...valid) + 1, rng = mx - mn || 1
  const N = data.length, divisor = N > 1 ? N - 1 : 1
  // 모든 위치의 x좌표 + 라벨 (null 포함)
  const allX = data.map((_, i) => pad.l + (i / divisor) * cw)
  // 유효 데이터 포인트만
  const pts = []
  data.forEach((v, i) => { if (v != null) pts.push({ x: allX[i], y: pad.t + (1 - (v - mn) / rng) * ch, v }) })
  let svg = `<svg viewBox="0 0 ${w} ${h}" width="100%" height="${h}" xmlns="http://www.w3.org/2000/svg" style="display:block;">`
  if (pts.length >= 2) {
    const line = pts.map((p, i) => `${i ? 'L' : 'M'}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ')
    const area = line + ` L${pts[pts.length-1].x.toFixed(1)},${pad.t+ch} L${pts[0].x.toFixed(1)},${pad.t+ch} Z`
    svg += `<defs><linearGradient id="lg${id}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${color}" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="${color}" stop-opacity="0.03"/>
    </linearGradient></defs>`
    svg += `<path d="${area}" fill="url(#lg${id})"/>`
    svg += `<path d="${line}" stroke="${color}" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`
  }
  svg += pts.map(p => `<circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="3.5" fill="#fff" stroke="${color}" stroke-width="2"/>`).join('')
  svg += pts.map(p => `<text x="${p.x.toFixed(1)}" y="${Math.max(p.y - 7, 12)}" text-anchor="middle" font-size="12" font-weight="700" fill="${color}" font-family="${FONT}">${p.v.toFixed(1)}</text>`).join('')
  // 모든 위치에 축 라벨 표시 (null 포함)
  svg += data.map((_, i) => `<text x="${allX[i].toFixed(1)}" y="${pad.t+ch+14}" text-anchor="middle" font-size="12" fill="#94A3B8" font-family="${FONT}">${labels[i]||''}</text>`).join('')
  svg += '</svg>'
  return svg
}

// ─── Multi-brand SVG 라인 차트 ─────────────────────────────────────────────
const BRAND_COLORS = {
  LG: RED, Samsung: '#3B82F6', Sony: '#7C3AED', Hisense: '#059669',
  TCL: '#D97706', Asus: '#0EA5E9', Dell: '#6366F1', MSI: '#EF4444',
  JBL: '#F97316', Bose: '#8B5CF6', Bosch: '#14B8A6', Whirlpool: '#06B6D4',
  Haier: '#22C55E', Miele: '#A855F7', Dyson: '#EC4899', Xiaomi: '#F59E0B',
  Shark: '#6B7280', Daikin: '#2563EB', Mitsubishi: '#DC2626', Media: '#10B981',
  Panasonic: '#0D9488', Blueair: '#0284C7', Philips: '#7C3AED',
}
const FALLBACK_COLORS = ['#94A3B8','#64748B','#475569','#CBD5E1','#E2E8F0']
function brandColor(name, idx) { return BRAND_COLORS[name] || FALLBACK_COLORS[idx % FALLBACK_COLORS.length] }

// ─── Region 매핑 ────────────────────────────────────────────────────────────
const REGIONS = {
  NA:    { label: '북미',   labelEn: 'North America',  countries: ['US', 'CA'] },
  EU:    { label: '유럽',   labelEn: 'Europe',         countries: ['UK', 'DE', 'ES'] },
  LATAM: { label: '중남미', labelEn: 'Latin America',   countries: ['BR', 'MX'] },
  APAC:  { label: '아태',   labelEn: 'Asia Pacific',    countries: ['IN', 'AU', 'VN'] },
}

const TREND_BRAND_COL = 90

// SVG 라인 차트 (X 라벨 없음 — 테이블 헤더가 대체)
function svgMultiLine(brandData, labels, w, h) {
  const brands = Object.keys(brandData)
  if (!brands.length || !labels.length) return ''
  let mn = Infinity, mx = -Infinity
  brands.forEach(b => (brandData[b] || []).forEach(v => { if (v != null) { if (v < mn) mn = v; if (v > mx) mx = v } }))
  if (!isFinite(mn)) return ''
  const pad = Math.max((mx - mn) * 0.15, 2)
  mn = Math.max(0, mn - pad); mx = Math.min(100, mx + pad)
  const rng = mx - mn || 1
  const N = labels.length
  const pt = 8, pb = 8, ch = h - pt - pb
  let g = ''
  for (let i = 0; i <= 4; i++) {
    const y = pt + (i / 4) * ch
    g += `<line x1="0" y1="${y.toFixed(1)}" x2="${w}" y2="${y.toFixed(1)}" stroke="#E8EDF2" stroke-width="1"/>`
  }
  brands.forEach((b, bi) => {
    const vals = brandData[b] || []
    const color = brandColor(b, bi)
    const isLG = b === 'LG'
    const sw = isLG ? 2.5 : 1.5
    const opacity = isLG ? 1 : 0.7
    const pts = []
    vals.forEach((v, i) => {
      if (v == null) return
      const x = ((i + 0.5) / N) * w
      const y = pt + (1 - (v - mn) / rng) * ch
      pts.push({ x, y, v })
    })
    if (!pts.length) return
    if (pts.length >= 2) {
      const d = pts.map((p, i) => `${i ? 'L' : 'M'}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ')
      g += `<path d="${d}" stroke="${color}" fill="none" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" opacity="${opacity}"/>`
    }
    pts.forEach(p => {
      g += `<circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="${isLG ? 3.5 : 2.5}" fill="#fff" stroke="${color}" stroke-width="${isLG ? 2 : 1.5}" opacity="${opacity}"/>`
    })
  })
  return `<svg viewBox="0 0 ${w} ${h}" width="100%" height="${h}" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" style="display:block">${g}</svg>`
}

// ─── 경쟁사 트렌드 섹션 ────────────────────────────────────────────────────
function trendDetailHtml(products, weeklyAll, wLabels, t, lang) {
  if (!weeklyAll || !Object.keys(weeklyAll).length) return ''
  const BU_ORDER = ['MS', 'HS', 'ES']

  const buGroups = BU_ORDER.map(bu => {
    const prods = products.filter(p => p.bu === bu)
    if (!prods.length) return ''
    const rows = prods.map(p => {
      const data = weeklyAll[p.id]?.['Total'] || {}
      const brands = Object.keys(data).sort((a, b) => {
        if (a === 'LG') return -1; if (b === 'LG') return 1
        const la = data[a]?.[data[a].length - 1] || 0
        const lb = data[b]?.[data[b].length - 1] || 0
        return lb - la
      })
      if (!brands.length) return ''
      const st = statusInfo(p.status, lang)
      const lgLatest = data.LG?.[data.LG.length - 1]
      const legend = brands.map((b, i) => {
        const c = brandColor(b, i)
        const isLG = b === 'LG'
        return `<span style="display:inline-flex;align-items:center;gap:3px;margin-right:12px"><i style="display:inline-block;width:10px;height:3px;border-radius:1px;background:${c};opacity:${isLG ? 1 : 0.7}"></i><span style="font-size:13px;color:${isLG ? '#1A1A1A' : '#94A3B8'};font-weight:${isLG ? 700 : 400}">${b}</span></span>`
      }).join('')
      // 차트+표 통합 테이블: colgroup 공유로 X축 정렬 보장
      const N = wLabels.length
      const colgroup = `<colgroup><col style="width:${TREND_BRAND_COL}px">${wLabels.map(() => '<col>').join('')}</colgroup>`
      const chartRow = `<tr><td style="padding:0;border:0"></td><td colspan="${N}" style="padding:8px 0;border:0">${svgMultiLine(data, wLabels, N * 80, 180)}</td></tr>`
      const legendRow = `<tr><td style="padding:0;border:0"></td><td colspan="${N}" style="padding:4px 0 6px;border:0">${legend}</td></tr>`
      const thead = `<tr style="border-top:1px solid #E8EDF2"><th style="text-align:left;padding:5px 6px;font-size:14px;color:#94A3B8;font-weight:600;border-bottom:1px solid #F1F5F9">Brand</th>${wLabels.map(w => `<th style="text-align:center;padding:5px 2px;font-size:14px;color:#94A3B8;font-weight:600;border-bottom:1px solid #F1F5F9">${w}</th>`).join('')}</tr>`
      const tbody = brands.map((b, i) => {
        const c = brandColor(b, i)
        const isLG = b === 'LG'
        const cells = wLabels.map((_, wi) => {
          const val = data[b]?.[wi]
          return `<td style="text-align:center;padding:5px 2px;font-size:14px;color:${val != null ? (isLG ? '#1A1A1A' : '#475569') : '#CBD5E1'};font-weight:${isLG ? 700 : 400};border-bottom:1px solid #F8FAFC;font-variant-numeric:tabular-nums">${val != null ? val.toFixed(1) : '—'}</td>`
        }).join('')
        return `<tr style="background:${isLG ? '#FFF8F9' : i % 2 === 0 ? '#fff' : '#FAFBFC'}"><td style="padding:5px 6px;font-size:13px;font-weight:${isLG ? 700 : 500};color:${c};border-bottom:1px solid #F8FAFC;white-space:nowrap;overflow:hidden;text-overflow:ellipsis"><i style="display:inline-block;width:6px;height:6px;border-radius:50%;background:${c};margin-right:4px;vertical-align:0"></i>${b}</td>${cells}</tr>`
      }).join('')

      return `<div class="trend-row" style="margin-bottom:24px">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px">
          <span style="width:4px;height:22px;border-radius:4px;background:${RED};flex-shrink:0"></span>
          <span style="font-size:20px;font-weight:700;color:#1A1A1A">${p.kr}</span>
          <span style="font-size:14px;font-weight:700;padding:2px 8px;border-radius:10px;background:${st.bg};color:${st.color};border:1px solid ${st.border}">${st.label}</span>
          ${lgLatest != null ? `<span style="font-size:16px;font-weight:700;color:#1A1A1A">LG ${lgLatest.toFixed(1)}%</span>` : ''}
          ${p.compName ? `<span style="font-size:14px;color:#94A3B8">vs ${p.compName} ${p.compRatio || ''}%</span>` : ''}
        </div>
        <div style="border:1px solid #E8EDF2;border-radius:10px;overflow:hidden"><table style="width:100%;border-collapse:collapse;table-layout:fixed;font-family:${FONT}">${colgroup}<tbody>${chartRow}${legendRow}${thead}${tbody}</tbody></table></div>
      </div>`
    }).join('')

    if (!rows) return ''
    return `<div class="bu-group" data-bu="${bu}" style="margin-bottom:20px">
      <div class="bu-header"><span class="bu-label">${bu}</span></div>
      ${rows}
    </div>`
  }).join('')

  if (!buGroups.trim()) return ''
  return `<div class="section-card">
    <div class="section-header">
      <div class="section-title">${lang === 'en' ? 'Weekly Competitor Trend' : '주간 경쟁사 트렌드'}</div>
      <span class="legend">${wLabels[0]}–${wLabels[wLabels.length - 1]} (${wLabels.length}${lang === 'en' ? ' weeks' : '주'})</span>
    </div>
    <div class="section-body">${buGroups}</div>
  </div>`
}

// ─── Insight / HowToRead ────────────────────────────────────────────────────
function insightHtml(insight, showInsight, howToRead, showHowToRead, t) {
  let h = ''
  if (showInsight && insight) h += `<div class="insight-box"><span class="insight-label">${t.insight}</span><span class="insight-text">${mdBold(insight)}</span></div>`
  if (showHowToRead && howToRead) h += `<div class="howto-box"><span class="howto-label">${t.howToRead}</span><span class="howto-text">${mdBold(howToRead)}</span></div>`
  return h
}

// ─── Hero KPI ───────────────────────────────────────────────────────────────
function heroHtml(total, meta, t, lang) {
  const d = +(total.score - total.prev).toFixed(1)
  const compAvg = total.vsComp || 0
  const gap = +(total.score - compAvg).toFixed(1)
  const dArrow = d > 0 ? '▲' : d < 0 ? '▼' : '─'
  const dColor = d > 0 ? '#22C55E' : d < 0 ? '#EF4444' : '#94A3B8'
  return `<div class="hero" id="hero-section">
    <div class="hero-top">
      <div><span class="hero-brand">LG ELECTRONICS</span></div>
      <div class="hero-ctx" id="hero-ctx">
        <span class="hero-ctx-badge">${meta.period || ''}</span>
        <span class="hero-ctx-badge">${lang === 'en' ? 'All Divisions' : '전체 본부'}</span>
        <span class="hero-ctx-badge">${lang === 'en' ? 'All Products' : '전체 제품'}</span>
        <span class="hero-ctx-badge">${lang === 'en' ? 'All Countries' : '전체 국가'}</span>
      </div>
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
            <div class="hero-gauge-bar" style="width:${Math.min(compAvg, 100)}%;background:${COMP}"></div>
          </div>` : ''}
          <div class="hero-legend">
            <span><i style="background:${RED}"></i> LG ${total.score}%</span>
            ${compAvg > 0 ? `<span><i style="background:${COMP}"></i> Samsung ${compAvg}%</span>` : ''}
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
function productSectionHtml(products, meta, t, lang, wLabels) {
  if (!products.length) return ''
  const BU_ORDER = ['MS', 'HS', 'ES']

  const buGroups = BU_ORDER.map(bu => {
    const prods = products.filter(p => p.bu === bu)
    if (!prods.length) return ''
    const cards = prods.map(p => {
      const weekly = p.weekly || []
      // 최근 주 스코어로 표시 (없으면 월간 스코어 폴백)
      const latestScore = weekly.length > 0 ? weekly[weekly.length - 1] : p.score
      const latestComp = p.vsComp || 0
      const latestRatio = latestComp > 0 ? Math.round((latestScore / latestComp) * 100) : 100
      const latestStatus = latestRatio >= 100 ? 'lead' : latestRatio >= 80 ? 'behind' : 'critical'
      const st = statusInfo(latestStatus, lang)
      // WoW: 마지막 2주 차이
      const wLast = weekly.length >= 2 ? weekly[weekly.length - 1] : null
      const wPrev = weekly.length >= 2 ? weekly[weekly.length - 2] : null
      const wd = (wLast != null && wPrev != null) ? +(wLast - wPrev).toFixed(1) : null
      const wArrow = wd > 0 ? '▲' : wd < 0 ? '▼' : '─'
      const wColor = wd > 0 ? '#22C55E' : wd < 0 ? '#EF4444' : '#94A3B8'
      const sparkColor = p.status === 'critical' ? '#BE123C' : p.status === 'behind' ? '#D97706' : '#15803D'
      // MoM: date에서 월 파악 → 최근 4개월 라벨 + 데이터
      const MLNAMES = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
      const dateStr = p.date || ''
      const mMatch = dateStr.match(/([0-9]{1,2})월/)
      const curMonthIdx = mMatch ? parseInt(mMatch[1]) - 1 : -1
      // 최근 4개월 라벨 (현재 월 포함하여 역산)
      const m4Labels = curMonthIdx >= 0
        ? [0,1,2,3].map(i => MLNAMES[(curMonthIdx - 3 + i + 12) % 12])
        : ['M-3','M-2','M-1','M0']
      // 데이터: 현재 월 = 마지막, 이전 3개월은 null (아직 없음)
      const allS = p.allScores || {}
      const curLG = allS.LG != null ? allS.LG : null
      const m4Data = [null, null, null, curLG]
      const momD = null // 이전 월 데이터 없으면 계산 불가
      const momArrow = '─'
      const momColor = '#94A3B8'
      const compPct = latestRatio
      const compColor = compPct >= 100 ? '#15803D' : compPct >= 80 ? '#D97706' : '#BE123C'
      return `<div class="prod-card" style="border-color:${st.border}">
        <div class="prod-head">
          <span class="prod-name">${p.kr}</span>
          <span class="prod-badge" style="background:${st.bg};color:${st.color};border-color:${st.border}">${st.label}</span>
        </div>
        <div class="prod-score-row">
          <span class="prod-score">${latestScore.toFixed(1)}<small>%</small></span>
          <span class="prod-delta prod-wow" style="color:${wColor}">${wd != null ? `WoW ${wArrow} ${Math.abs(wd).toFixed(1)}%p` : 'WoW —'}</span>
          <span class="prod-delta prod-mom" style="display:none;color:${momColor}">${momD != null ? `MoM ${momArrow} ${Math.abs(momD).toFixed(1)}%p` : 'MoM —'}</span>
        </div>
        <div class="prod-chart">
          <div class="trend-weekly">${svgLine(weekly, wLabels, 300, 90, sparkColor)}</div>
          <div class="trend-monthly" style="display:none">${svgLine(m4Data, m4Labels, 300, 90, sparkColor)}</div>
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
    return `<div class="bu-group" data-bu="${bu}">
      <div class="bu-header"><span class="bu-label">${bu}</span><span class="bu-count">${prods.length}${t.categories}</span></div>
      <div class="prod-grid">${cards}</div>
    </div>`
  }).join('')

  return `<div class="section-card">
    <div class="section-header">
      <div class="section-title">${t.productTitle}</div>
      <span class="legend"><i style="background:#15803D"></i>${t.legendLead} <i style="background:#D97706"></i>${t.legendBehind} <i style="background:#BE123C"></i>${t.legendCritical}</span>
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
function cntyColHtml(r, maxScore, label) {
  const st = cntyStatus(r.score, r.compScore)
  const barColor = st === 'lead' ? '#15803D' : st === 'behind' ? '#D97706' : '#BE123C'
  const gap = +(r.score - r.compScore).toFixed(1)
  const gapColor = gap >= 0 ? '#15803D' : '#BE123C'
  const BAR_H = 130
  const hPx = Math.max(3, Math.round(r.score / maxScore * BAR_H))
  const cPx = r.compScore > 0 ? Math.max(3, Math.round(r.compScore / maxScore * BAR_H)) : 0
  return `<div class="vbar-item" data-product="${r.product}" data-country="${r.country}">
    <div class="vbar-cols">
      <div class="vbar-col-wrap">
        <span class="vbar-val" style="color:${barColor}">${r.score.toFixed(1)}</span>
        <div class="vbar-col" style="height:${hPx}px;background:${barColor}"></div>
        <span class="vbar-col-name">LG</span>
      </div>
      ${r.compScore > 0 ? `<div class="vbar-col-wrap">
        <span class="vbar-val comp-val" style="color:${COMP}">${r.compScore.toFixed(1)}</span>
        <div class="vbar-col" style="height:${cPx}px;background:${COMP}"></div>
        <span class="vbar-col-name">${r.compName.toUpperCase() === 'SAMSUNG' ? 'SS' : r.compName}</span>
      </div>` : ''}
    </div>
    <span class="vbar-gap" style="color:${gapColor}">${gap >= 0 ? '+' : ''}${gap}%p</span>
    <span class="vbar-label">${label}</span>
  </div>`
}
function countrySectionHtml(productsCnty, meta, t, lang) {
  if (!productsCnty || !productsCnty.length) return ''

  const productNames = [...new Set(productsCnty.map(r => r.product))]
  const countryNames = [...new Set(productsCnty.map(r => r.country))]

  // ── View 1: 제품별 (By Product) ──
  const productMap = new Map()
  productsCnty.forEach(r => { if (!productMap.has(r.product)) productMap.set(r.product, []); productMap.get(r.product).push(r) })
  const filter = meta.cntyProductFilter || {}
  const byProductHtml = [...productMap.entries()].filter(([n]) => filter[n] !== false).map(([name, rows]) => {
    const maxScore = Math.max(...rows.map(r => Math.max(r.score, r.compScore)), 1)
    const bars = rows.map(r => cntyColHtml(r, maxScore, r.country)).join('')
    return `<div class="cnty-product" data-group-product="${name}"><div class="bu-header"><span class="bu-label">${name}</span><span class="bu-count">${rows.length}</span></div><div class="vbar-chart">${bars}</div></div>`
  }).join('')

  // ── View 2: 국가별 (By Country) ──
  const countryMap = new Map()
  productsCnty.forEach(r => { if (!countryMap.has(r.country)) countryMap.set(r.country, []); countryMap.get(r.country).push(r) })
  const byCountryHtml = [...countryMap.entries()].map(([cnty, rows]) => {
    const maxScore = Math.max(...rows.map(r => Math.max(r.score, r.compScore)), 1)
    const bars = rows.map(r => cntyColHtml(r, maxScore, r.product)).join('')
    return `<div class="cnty-product" data-group-country="${cnty}"><div class="bu-header"><span class="bu-label">${cnty}</span><span class="bu-count">${rows.length}</span></div><div class="vbar-chart">${bars}</div></div>`
  }).join('')

  // ── Filter chips ──
  const productChips = productNames.map(n =>
    `<button class="filter-chip active" data-filter-type="product" data-filter-value="${n}" onclick="toggleCntyFilter(this)">${n}</button>`
  ).join('')
  const countryChips = countryNames.map(n =>
    `<button class="filter-chip active" data-filter-type="country" data-filter-value="${n}" onclick="toggleCntyFilter(this)">${n}</button>`
  ).join('')

  return `<div class="section-card" id="cnty-section">
    <div class="section-header">
      <div class="section-title">${t.cntyTitle}</div>
      <div class="section-header-right">
        <div class="trend-tabs">
          <button class="cnty-view-tab active" onclick="switchCntyView('product')">${t.byProduct}</button>
          <button class="cnty-view-tab" onclick="switchCntyView('country')">${t.byCountry}</button>
        </div>
        <span class="legend"><i style="background:#15803D"></i>${t.legendLead} <i style="background:#D97706"></i>${t.legendBehind} <i style="background:#BE123C"></i>${t.legendCritical} <i style="background:${COMP}"></i>Comp.</span>
      </div>
    </div>
    ${insightHtml(meta.cntyInsight, meta.showCntyInsight, meta.cntyHowToRead, meta.showCntyHowToRead, t)}
    <div class="cnty-filters">
      <div class="filter-group" id="cnty-filter-products">
        <span class="filter-label">${t.allProducts}</span>${productChips}
      </div>
      <div class="filter-group" id="cnty-filter-countries">
        <span class="filter-label">${t.allCountries}</span>${countryChips}
      </div>
    </div>
    <div class="section-body">
      <div id="cnty-view-product">${byProductHtml}</div>
      <div id="cnty-view-country" style="display:none">${byCountryHtml}</div>
    </div>
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

// ─── 도메인별 Citation (국가 필터 통합) ────────────────────────────────────
function citDomainSectionHtml(citationsCnty, meta, t, citations, lang) {
  if (!citationsCnty || !citationsCnty.length) return ''
  const topN = meta.citDomainTopN || 10
  // 국가 목록 (TTL 포함)
  const cntyNames = ['TTL', ...([...new Set(citationsCnty.map(r => r.cnty))].filter(c => c !== 'TTL'))]

  // 각 국가별 도메인 리스트 HTML 생성
  const panels = cntyNames.map(cnty => {
    const rows = citationsCnty.filter(r => r.cnty === cnty).sort((a, b) => a.rank - b.rank).slice(0, topN)
    if (!rows.length) return ''
    const maxScore = Math.max(...rows.map(r => r.citations), 1)
    const totalCit = cnty === 'TTL' && citations && citations.length
      ? citations.reduce((s, c) => s + c.score, 0)
      : rows.reduce((s, r) => s + r.citations, 0)
    const html = rows.map((c, i) => {
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
    return `<div class="cit-cnty-panel" data-cit-cnty="${cnty}" style="${cnty !== 'TTL' ? 'display:none' : ''}">${html}</div>`
  }).join('')

  // 국가 필터 칩
  const chips = cntyNames.map(c =>
    `<button class="filter-chip ${c === 'TTL' ? 'active' : ''}" data-cit-cnty-val="${c}" onclick="switchCitCnty(this)">${c === 'TTL' ? t.dotcomTTL.replace(/ \(.*/, '') || 'TTL' : c}</button>`
  ).join('')

  return `<div class="section-card" id="cit-domain-section">
    <div class="section-header">
      <div class="section-title">${t.citDomainTitle}</div>
      <span class="legend">Top ${topN} Domains</span>
    </div>
    ${insightHtml(meta.citDomainInsight, meta.showCitDomainInsight, meta.citDomainHowToRead, meta.showCitDomainHowToRead, t)}
    ${insightHtml(meta.citCntyInsight, meta.showCitCntyInsight, meta.citCntyHowToRead, meta.showCitCntyHowToRead, t)}
    <div class="cnty-filters"><div class="filter-group" id="cit-cnty-chips"><span class="filter-label">${lang === 'ko' ? '국가' : 'Country'}</span>${chips}</div></div>
    <div class="section-body">${panels}</div>
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
      <span class="legend"><i style="background:${RED}"></i>LG <i style="background:${COMP}"></i>SS</span>
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


// ─── Glossary 탭 HTML ──────────────────────────────────────────────────────
const GLOSSARY_DATA = {
  ko: [
    { term: 'GEO (Generative Engine Optimization)', def: '생성형 AI 검색 엔진(예: ChatGPT, Gemini, Perplexity 등)에서 자사 브랜드 및 제품이 더 잘 노출·추천되도록 콘텐츠를 최적화하는 전략.' },
    { term: 'Visibility (가시성)', def: 'AI 검색 결과에서 자사 브랜드/제품이 얼마나 자주 등장하는지를 나타내는 지표. 노출 빈도, 순위, 커버리지 등을 포괄한다.' },
    { term: 'Citation (인용)', def: 'AI 응답 내에서 특정 소스(URL, 도메인)가 참조·링크되는 것. Citation Rate는 자사 도메인이 인용된 비율을 뜻한다.' },
    { term: 'Readability (가독성)', def: '콘텐츠가 AI 엔진에 의해 얼마나 쉽게 파싱·이해되는지를 평가하는 지표. 구조화된 데이터, 명확한 문장 구조 등이 영향을 미친다.' },
    { term: 'Progress Tracker (과제 현황)', def: '각 유관조직(Stakeholder)별 GEO 개선 과제의 목표 대비 실적 달성률을 추적하는 대시보드.' },
    { term: 'Stakeholder (유관조직)', def: 'GEO 개선 활동에 참여하는 조직 단위. 예: MS(MC/BS사업부), HS(H&A사업부), ES(VS사업부), PR, 브랜드 등.' },
    { term: '과제 구분 (Task Category)', def: '과제의 성격에 따른 분류. 예: 콘텐츠 수정, 신규 콘텐츠 제작, 기술 SEO, 구조화 데이터 등.' },
    { term: '달성률', def: '해당 월의 실적을 목표로 나눈 백분율. (실적 ÷ 목표) × 100.' },
    { term: '누적 달성률', def: '연초부터 해당 월까지의 누적 실적을 누적 목표로 나눈 백분율.' },
    { term: '연간 진척률', def: '연초부터 현재까지의 누적 실적을 연간 총 목표로 나눈 백분율.' },
    { term: '주의 필요 과제', def: '달성률이 80% 미만인 과제. 즉각적인 관심과 조치가 필요한 항목.' },
    { term: 'Deep Link (딥링크)', def: '특정 페이지나 섹션으로 직접 이동할 수 있는 URL. 월간 리포트에서 대시보드 특정 탭으로 바로 연결 가능.' },
    { term: 'KPI (Key Performance Indicator)', def: '핵심 성과 지표. GEO에서는 Visibility, Citation Rate, Readability Score 등이 해당된다.' },
    { term: 'BU (Business Unit)', def: '사업부 단위. MC/BS(MS), H&A(HS), VS(ES) 등으로 구분된다.' },
  ],
  en: [
    { term: 'GEO (Generative Engine Optimization)', def: 'A strategy to optimize content so that brands and products are better surfaced and recommended by generative AI search engines (e.g., ChatGPT, Gemini, Perplexity).' },
    { term: 'Visibility', def: 'A metric measuring how frequently a brand/product appears in AI search results. Encompasses exposure frequency, ranking, and coverage.' },
    { term: 'Citation', def: 'When a specific source (URL, domain) is referenced or linked within an AI response. Citation Rate refers to the percentage of responses that cite a given domain.' },
    { term: 'Readability', def: 'A metric evaluating how easily content can be parsed and understood by AI engines. Influenced by structured data, clear sentence structure, etc.' },
    { term: 'Progress Tracker', def: 'A dashboard tracking goal-vs-actual achievement rates for GEO improvement tasks by each stakeholder organization.' },
    { term: 'Stakeholder', def: 'An organizational unit participating in GEO improvement activities. E.g., MS (MC/BS Division), HS (H&A Division), ES (VS Division), PR, Brand, etc.' },
    { term: 'Task Category', def: 'Classification of tasks by nature. E.g., Content Modification, New Content Creation, Technical SEO, Structured Data, etc.' },
    { term: 'Achievement Rate', def: 'Monthly actual performance divided by target, expressed as a percentage. (Actual / Goal) x 100.' },
    { term: 'Cumulative Achievement Rate', def: 'Year-to-date cumulative actual divided by cumulative goal, expressed as a percentage.' },
    { term: 'Annual Progress Rate', def: 'Year-to-date cumulative actual divided by the total annual target, expressed as a percentage.' },
    { term: 'Tasks Needing Attention', def: 'Tasks with an achievement rate below 80%. Items requiring immediate attention and action.' },
    { term: 'Deep Link', def: 'A URL that navigates directly to a specific page or section. Enables direct linking from monthly reports to specific dashboard tabs.' },
    { term: 'KPI (Key Performance Indicator)', def: 'Core performance metrics. In GEO, these include Visibility, Citation Rate, Readability Score, etc.' },
    { term: 'BU (Business Unit)', def: 'Organizational division. Categorized as MC/BS (MS), H&A (HS), VS (ES), etc.' },
  ],
}

function glossaryTabHtml(lang) {
  const entries = GLOSSARY_DATA[lang] || GLOSSARY_DATA.ko
  const title = lang === 'en' ? 'GEO Glossary' : 'GEO 용어 사전'
  const subtitle = lang === 'en'
    ? 'Key terms and definitions used across the GEO dashboards.'
    : 'GEO 대시보드 전반에서 사용되는 주요 용어와 정의입니다.'
  return `<div style="max-width:840px;margin:32px auto;padding:0 40px">
    <h2 style="font-size:24px;font-weight:800;color:#1A1A1A;margin-bottom:6px">${title}</h2>
    <p style="font-size:15px;color:#64748B;margin-bottom:28px">${subtitle}</p>
    <div style="display:flex;flex-direction:column;gap:12px">
      ${entries.map(e => `<div style="background:#fff;border:1px solid #E2E8F0;border-radius:10px;padding:16px 20px">
        <div style="font-size:16px;font-weight:700;color:#1A1A1A;margin-bottom:6px">${e.term}</div>
        <div style="font-size:15px;color:#64748B;line-height:1.7">${e.def}</div>
      </div>`).join('')}
    </div>
  </div>`
}

function promptListTabHtml(appendixPrompts, lang) {
  if (!appendixPrompts || appendixPrompts.length === 0) {
    const msg = lang === 'en' ? 'No Prompt data available.' : '프롬프트 데이터가 없습니다.'
    return `<div style="display:flex;align-items:center;justify-content:center;min-height:400px;color:#64748B;font-size:16px">${msg}</div>`
  }
  const title = lang === 'en' ? 'Prompt List' : 'Prompt List'
  const subtitle = lang === 'en' ? 'List of prompts used for GEO KPI measurement.' : 'GEO KPI 측정에 사용되는 프롬프트 목록입니다.'
  const allLabel = lang === 'en' ? 'All' : '전체'
  const totalLabel = lang === 'en' ? 'Total' : '총'
  const itemsLabel = lang === 'en' ? '' : '개'
  const clearLabel = lang === 'en' ? 'Clear filters' : '필터 초기화'
  const cols = [
    { key: 'country', label: lang === 'en' ? 'Country' : '국가' },
    { key: 'division', label: 'Division' },
    { key: 'category', label: lang === 'en' ? 'Category' : '카테고리' },
    { key: 'branded', label: lang === 'en' ? 'Type' : '유형' },
    { key: 'cej', label: 'CEJ' },
    { key: 'topic', label: lang === 'en' ? 'Topic' : '토픽' },
  ]

  // Build unique options per column
  const optionsMap = {}
  cols.forEach(c => {
    const set = new Set()
    appendixPrompts.forEach(p => { if (p[c.key]) set.add(p[c.key]) })
    optionsMap[c.key] = [...set].sort()
  })

  // Embed data as JSON for client-side filtering
  const jsonData = JSON.stringify(appendixPrompts).replace(/</g, '\\u003c').replace(/>/g, '\\u003e')
  const jsonOptions = JSON.stringify(optionsMap).replace(/</g, '\\u003c').replace(/>/g, '\\u003e')

  const divColors = JSON.stringify({ MS: '#3B82F6', HS: '#10B981', ES: '#F59E0B', PR: '#8B5CF6' })
  const cejColors = JSON.stringify({ Awareness: '#6366F1', Interest: '#3B82F6', Conversion: '#10B981' })

  return `<div style="max-width:1200px;margin:32px auto;padding:0 40px">
    <h2 style="font-size:24px;font-weight:800;color:#1A1A1A;margin-bottom:6px">${title}</h2>
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:20px">
      <span style="font-size:15px;color:#64748B">${subtitle}</span>
      <span id="pl-count" style="font-size:12px;color:#94A3B8">${totalLabel} ${appendixPrompts.length}${itemsLabel ? ' ' + itemsLabel : ''}</span>
      <span id="pl-clear" onclick="_plClear()" style="font-size:11px;color:#3B82F6;cursor:pointer;display:none">${clearLabel}</span>
    </div>
    <div style="background:#fff;border:1px solid #E2E8F0;border-radius:10px;overflow:hidden">
      <table id="pl-table" style="width:100%;border-collapse:collapse;font-size:13px">
        <thead>
          <tr style="background:#F8FAFC">
            <th style="padding:10px 12px;text-align:center;font-size:11px;font-weight:700;color:#64748B">#</th>
            ${cols.map(c => `<th data-col="${c.key}" onclick="_plToggle('${c.key}')" style="padding:10px 12px;text-align:center;font-size:11px;font-weight:700;color:#64748B;cursor:pointer;position:relative;white-space:nowrap;user-select:none">${c.label} <span id="pl-arrow-${c.key}" style="font-size:9px;color:#94A3B8">▽</span></th>`).join('')}
            <th style="padding:10px 12px;text-align:left;font-size:11px;font-weight:700;color:#64748B;min-width:300px">${lang === 'en' ? 'Prompt' : '프롬프트'}</th>
          </tr>
        </thead>
        <tbody id="pl-body"></tbody>
      </table>
    </div>
    <!-- Filter dropdowns (hidden by default) -->
    ${cols.map(c => `<div id="pl-dd-${c.key}" style="display:none;position:fixed;z-index:999;background:#fff;border:1px solid #E2E8F0;border-radius:8px;padding:6px;min-width:140px;max-height:240px;overflow-y:auto;box-shadow:0 8px 24px rgba(0,0,0,0.15)">
      <div onclick="_plFilter('${c.key}','')" style="padding:5px 10px;border-radius:4px;cursor:pointer;font-size:12px;color:#64748B">${allLabel}</div>
      ${optionsMap[c.key].map(v => `<div onclick="_plFilter('${c.key}','${v.replace(/'/g, "\\'")}')" style="padding:5px 10px;border-radius:4px;cursor:pointer;font-size:12px;color:#64748B">${v}</div>`).join('')}
    </div>`).join('')}
  </div>
  <script>
  (function(){
    var _plData=${jsonData};
    var _plFilters={};
    var _divC=${divColors};
    var _cejC=${cejColors};
    var _openDD=null;
    function badge(t,c){return '<span style="display:inline-block;padding:2px 8px;border-radius:4px;font-size:11px;font-weight:700;background:'+c+'22;color:'+c+';white-space:nowrap">'+t+'</span>';}
    function render(){
      var f=_plData.filter(function(p){
        for(var k in _plFilters){if(_plFilters[k]&&p[k]!==_plFilters[k])return false;}
        return true;
      });
      var html='';
      f.forEach(function(p,i){
        html+='<tr style="border-top:1px solid #E2E8F0" onmouseenter="this.style.background=\\'#F8FAFC\\'" onmouseleave="this.style.background=\\'transparent\\'">';
        html+='<td style="padding:8px 12px;text-align:center;font-size:13px;color:#64748B">'+(i+1)+'</td>';
        html+='<td style="padding:8px 12px;text-align:center">'+badge(p.country,'#3B82F6')+'</td>';
        html+='<td style="padding:8px 12px;text-align:center">'+badge(p.division,_divC[p.division]||'#64748B')+'</td>';
        html+='<td style="padding:8px 12px;text-align:center;font-size:13px;color:#64748B">'+p.category+'</td>';
        html+='<td style="padding:8px 12px;text-align:center">'+badge(p.branded,p.branded==='Brand'?'#A50034':'#64748B')+'</td>';
        html+='<td style="padding:8px 12px;text-align:center">'+badge(p.cej,_cejC[p.cej]||'#64748B')+'</td>';
        html+='<td style="padding:8px 12px;text-align:center;font-size:13px;color:#64748B">'+p.topic+'</td>';
        html+='<td style="padding:8px 12px;text-align:left;font-size:13px;color:#1A1A1A;font-weight:500">'+p.prompt+'</td>';
        html+='</tr>';
      });
      document.getElementById('pl-body').innerHTML=html;
      document.getElementById('pl-count').textContent='${totalLabel} '+f.length+'${itemsLabel ? ' ' + itemsLabel : ''}';
      var hasF=Object.keys(_plFilters).some(function(k){return !!_plFilters[k];});
      document.getElementById('pl-clear').style.display=hasF?'':'none';
      // Update arrows
      ${JSON.stringify(cols.map(c => c.key))}.forEach(function(k){
        document.getElementById('pl-arrow-'+k).textContent=_plFilters[k]?'▼':'▽';
        document.getElementById('pl-arrow-'+k).style.color=_plFilters[k]?'#3B82F6':'#94A3B8';
      });
    }
    window._plToggle=function(col){
      if(_openDD===col){_closeDD();return;}
      _closeDD();
      var th=document.querySelector('th[data-col="'+col+'"]');
      var rect=th.getBoundingClientRect();
      var dd=document.getElementById('pl-dd-'+col);
      dd.style.display='block';
      dd.style.left=rect.left+'px';
      dd.style.top=rect.bottom+2+'px';
      // highlight active
      var children=dd.children;
      for(var i=0;i<children.length;i++){
        var isActive=i===0?!_plFilters[col]:children[i].textContent===_plFilters[col];
        children[i].style.color=isActive?'#3B82F6':'#64748B';
        children[i].style.fontWeight=isActive?'700':'400';
        children[i].style.background=isActive?'rgba(59,130,246,0.08)':'transparent';
      }
      _openDD=col;
    };
    function _closeDD(){
      if(_openDD){document.getElementById('pl-dd-'+_openDD).style.display='none';_openDD=null;}
    }
    window._plFilter=function(col,val){
      _plFilters[col]=val;_closeDD();render();
    };
    window._plClear=function(){_plFilters={};_closeDD();render();};
    document.addEventListener('click',function(e){
      if(_openDD&&!e.target.closest('th[data-col]')&&!e.target.closest('[id^="pl-dd-"]'))_closeDD();
    });
    render();
  })();
  </script>`
}

// ─── PR Visibility 탭 HTML ──────────────────────────────────────────────────
function prVisibilityTabHtml(weeklyPR, weeklyPRLabels, lang) {
  if (!weeklyPR || !weeklyPR.length) {
    const msg = lang === 'en' ? 'No PR Visibility data available.' : 'PR Visibility 데이터가 없습니다.'
    return `<div style="display:flex;align-items:center;justify-content:center;min-height:calc(100vh - 160px);color:#94A3B8;font-size:16px">${msg}</div>`
  }

  const labels = weeklyPRLabels || []
  const topics = [...new Set(weeklyPR.map(r => r.topic))].filter(Boolean)
  const countries = [...new Set(weeklyPR.map(r => r.country))].filter(Boolean).sort()
  const title = lang === 'en' ? 'PR Visibility — Weekly Trend' : 'PR Visibility — 주간 트렌드'
  const subtitle = lang === 'en'
    ? `${topics.length} topics · ${countries.length} countries · ${labels.length} weeks`
    : `${topics.length}개 토픽 · ${countries.length}개 국가 · ${labels.length}주`

  // JSON 데이터 임베딩
  const jsonPR = JSON.stringify(weeklyPR).replace(/</g, '\\u003c')
  const jsonLabels = JSON.stringify(labels)
  const jsonTopics = JSON.stringify(topics)
  const jsonCountries = JSON.stringify(countries)

  return `<div style="max-width:1400px;margin:32px auto;padding:0 40px">
    <h2 style="font-size:24px;font-weight:800;color:#1A1A1A;margin-bottom:6px">${title}</h2>
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:20px">
      <span style="font-size:15px;color:#64748B">${subtitle}</span>
      <span id="pr-filter-info" style="font-size:12px;color:#94A3B8"></span>
    </div>
    <!-- 국가 필터 칩 -->
    <div id="pr-country-chips" style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:20px"></div>
    <!-- 토픽별 섹션 -->
    <div id="pr-sections"></div>
  </div>
  <script>
  (function(){
    var _prData=${jsonPR};
    var _prLabels=${jsonLabels};
    var _prTopics=${jsonTopics};
    var _prCountries=${jsonCountries};
    var _prActiveCountries={};
    _prCountries.forEach(function(c){_prActiveCountries[c]=true});
    var RED='${RED}';
    var BRAND_COLORS={'LG':'${RED}','Samsung':'${COMP}','Google':'#4285F4','Apple':'#A2AAAD','Sony':'#000000','Bosch':'#EA0016','Dyson':'#6B21A8'};
    var FALLBACK=['#3B82F6','#10B981','#F59E0B','#8B5CF6','#EC4899','#06B6D4','#84CC16','#F97316'];

    function bc(name,i){return BRAND_COLORS[name]||FALLBACK[i%FALLBACK.length]}

    // 국가 칩 렌더
    function renderChips(){
      var el=document.getElementById('pr-country-chips');if(!el)return;
      var allOn=_prCountries.every(function(c){return _prActiveCountries[c]});
      var h='<span onclick="_prToggleAll()" style="padding:4px 12px;border-radius:6px;font-size:13px;font-weight:700;cursor:pointer;border:1px solid '+(allOn?'#0F172A':'#E2E8F0')+';background:'+(allOn?'#0F172A':'#F8FAFC')+';color:'+(allOn?'#fff':'#64748B')+'">${lang === 'en' ? 'All' : '전체'}</span>';
      _prCountries.forEach(function(c){
        var on=!!_prActiveCountries[c];
        h+='<span onclick="_prToggleCountry(\\''+c+'\\')" style="padding:4px 12px;border-radius:6px;font-size:13px;font-weight:600;cursor:pointer;border:1px solid '+(on?'#0F172A':'#E2E8F0')+';background:'+(on?'#0F172A':'#F8FAFC')+';color:'+(on?'#fff':'#64748B')+'">'+c+'</span>';
      });
      el.innerHTML=h;
    }

    // SVG 멀티라인 차트
    function svgMultiLine(brandData,labels,w,h){
      var brands=Object.keys(brandData);if(!brands.length||!labels.length)return'';
      var mn=Infinity,mx=-Infinity;
      brands.forEach(function(b){(brandData[b]||[]).forEach(function(v){if(v!=null){if(v<mn)mn=v;if(v>mx)mx=v}})});
      if(!isFinite(mn)){mn=0;mx=100}
      var pad=Math.max((mx-mn)*0.1,2);mn-=pad;mx+=pad;var rng=mx-mn||1;
      var pt=20,pr=10,pb=25,pl=40;var cw=w-pl-pr;var ch=h-pt-pb;
      var s='<svg viewBox="0 0 '+w+' '+h+'" width="100%" height="'+h+'" xmlns="http://www.w3.org/2000/svg">';
      // Grid
      for(var g=0;g<=4;g++){var gy=pt+(g/4)*ch;var gv=+(mx-(g/4)*(mx-mn)).toFixed(1);
        s+='<line x1="'+pl+'" y1="'+gy+'" x2="'+(w-pr)+'" y2="'+gy+'" stroke="#E2E8F0" stroke-width="1"/>';
        s+='<text x="'+(pl-4)+'" y="'+(gy+4)+'" text-anchor="end" fill="#94A3B8" font-size="11">'+gv+'</text>';
      }
      // X labels
      labels.forEach(function(l,i){var x=pl+(i/(labels.length-1||1))*cw;
        s+='<text x="'+x+'" y="'+(h-5)+'" text-anchor="middle" fill="#94A3B8" font-size="11">'+l+'</text>';
      });
      // Lines
      brands.forEach(function(b,bi){
        var vals=brandData[b]||[];var c=bc(b,bi);var isLG=b==='LG';
        var pts=[];
        vals.forEach(function(v,i){if(v!=null){var x=pl+(i/(labels.length-1||1))*cw;var y=pt+((mx-v)/rng)*ch;pts.push({x:x,y:y,v:v})}});
        if(pts.length<1)return;
        var path=pts.map(function(p,i){return(i?'L':'M')+p.x.toFixed(1)+','+p.y.toFixed(1)}).join(' ');
        s+='<path d="'+path+'" fill="none" stroke="'+c+'" stroke-width="'+(isLG?2.5:1.5)+'" opacity="'+(isLG?1:0.6)+'"/>';
        pts.forEach(function(p){s+='<circle cx="'+p.x.toFixed(1)+'" cy="'+p.y.toFixed(1)+'" r="'+(isLG?4:3)+'" fill="'+c+'" opacity="'+(isLG?1:0.6)+'"/>'});
      });
      s+='</svg>';return s;
    }

    function render(){
      var el=document.getElementById('pr-sections');if(!el)return;
      var activeCntList=_prCountries.filter(function(c){return _prActiveCountries[c]});
      var info=document.getElementById('pr-filter-info');
      if(info)info.textContent=activeCntList.length===_prCountries.length?'':'('+activeCntList.length+' ${lang==='en'?'countries selected':'개 국가 선택'})';
      var html='';
      _prTopics.forEach(function(topic){
        var rows=_prData.filter(function(r){return r.topic===topic&&_prActiveCountries[r.country]});
        if(!rows.length)return;
        // 브랜드별 스코어 평균 (선택 국가)
        var brandMap={};
        rows.forEach(function(r){
          if(!brandMap[r.brand])brandMap[r.brand]={};
          _prLabels.forEach(function(lbl){
            if(r.scores[lbl]!=null){
              if(!brandMap[r.brand][lbl])brandMap[r.brand][lbl]=[];
              brandMap[r.brand][lbl].push(r.scores[lbl]);
            }
          });
        });
        var brands=Object.keys(brandMap).sort(function(a,b){if(a==='LG')return -1;if(b==='LG')return 1;return 0});
        // 차트 데이터
        var chartData={};
        brands.forEach(function(b){chartData[b]=_prLabels.map(function(lbl){var arr=brandMap[b][lbl];return arr?+(arr.reduce(function(s,v){return s+v},0)/arr.length).toFixed(1):null})});
        var lgLatest=chartData.LG?chartData.LG.filter(function(v){return v!=null}).pop():null;
        // 범례
        var legend=brands.map(function(b,i){var c=bc(b,i);var isLG=b==='LG';return'<span style="display:inline-flex;align-items:center;gap:3px;margin-right:12px"><i style="display:inline-block;width:10px;height:3px;border-radius:1px;background:'+c+';opacity:'+(isLG?1:0.6)+'"></i><span style="font-size:13px;color:'+(isLG?'#1A1A1A':'#94A3B8')+';font-weight:'+(isLG?700:400)+'">'+b+'</span></span>'}).join('');
        // 테이블
        var N=_prLabels.length;
        var colgroup='<colgroup><col style="width:120px">'+_prLabels.map(function(){return'<col>'}).join('')+'</colgroup>';
        var thead='<tr style="border-bottom:1px solid #E8EDF2"><th style="text-align:left;padding:5px 8px;font-size:13px;color:#94A3B8;font-weight:600">Brand</th>'+_prLabels.map(function(w){return'<th style="text-align:center;padding:5px 4px;font-size:13px;color:#94A3B8;font-weight:600">'+w+'</th>'}).join('')+'</tr>';
        var tbody=brands.map(function(b,i){var c=bc(b,i);var isLG=b==='LG';var cells=_prLabels.map(function(_,wi){var val=chartData[b][wi];return'<td style="text-align:center;padding:5px 4px;font-size:13px;color:'+(val!=null?(isLG?'#1A1A1A':'#475569'):'#CBD5E1')+';font-weight:'+(isLG?700:400)+';font-variant-numeric:tabular-nums">'+(val!=null?val.toFixed(1):'—')+'</td>'}).join('');return'<tr style="background:'+(isLG?'#FFF8F9':i%2===0?'#fff':'#FAFBFC')+'"><td style="padding:5px 8px;font-size:13px;font-weight:'+(isLG?700:500)+';color:'+c+';white-space:nowrap"><i style="display:inline-block;width:6px;height:6px;border-radius:50%;background:'+c+';margin-right:4px;vertical-align:0"></i>'+b+'</td>'+cells+'</tr>'}).join('');
        // 국가별 LG 스코어 서브테이블
        var cntyRows=activeCntList.map(function(cn){
          var cr=rows.filter(function(r){return r.country===cn&&r.brand==='LG'});
          if(!cr.length)return'';
          var cells=_prLabels.map(function(lbl){var match=cr.find(function(r){return r.scores[lbl]!=null});return'<td style="text-align:center;padding:4px;font-size:12px;color:#475569;font-variant-numeric:tabular-nums">'+(match?match.scores[lbl].toFixed(1):'—')+'</td>'}).join('');
          return'<tr style="border-top:1px solid #F1F5F9"><td style="padding:4px 8px;font-size:12px;font-weight:600;color:#64748B">'+cn+'</td>'+cells+'</tr>';
        }).filter(Boolean).join('');

        html+='<div style="background:#fff;border:1px solid #E8EDF2;border-radius:12px;margin-bottom:20px;overflow:hidden">';
        html+='<div style="padding:16px 20px;background:#FAFBFC;border-bottom:1px solid #F1F5F9;display:flex;align-items:center;gap:8px;flex-wrap:wrap">';
        html+='<span style="width:4px;height:20px;border-radius:4px;background:'+RED+';flex-shrink:0"></span>';
        html+='<span style="font-size:18px;font-weight:700;color:#1A1A1A">'+topic+'</span>';
        if(lgLatest!=null)html+='<span style="font-size:14px;font-weight:700;color:#1A1A1A">LG '+lgLatest.toFixed(1)+'%</span>';
        html+='<span style="margin-left:auto">'+legend+'</span>';
        html+='</div>';
        html+='<div style="padding:16px 20px">'+svgMultiLine(chartData,_prLabels,Math.max(N*80,600),200)+'</div>';
        html+='<div style="padding:0 20px 16px;overflow-x:auto"><table style="width:100%;border-collapse:collapse;font-family:inherit">'+colgroup+thead+tbody;
        if(cntyRows)html+='<tr><td colspan="'+(N+1)+'" style="padding:8px;font-size:12px;font-weight:700;color:#64748B;background:#F8FAFC;border-top:2px solid #E8EDF2">${lang==='en'?'LG by Country':'LG 국가별'}</td></tr>'+cntyRows;
        html+='</table></div></div>';
      });
      if(!html)html='<div style="text-align:center;padding:60px;color:#94A3B8;font-size:16px">${lang==='en'?'No data for selected countries':'선택된 국가의 데이터가 없습니다'}</div>';
      el.innerHTML=html;
    }

    window._prToggleCountry=function(c){_prActiveCountries[c]=!_prActiveCountries[c];renderChips();render()};
    window._prToggleAll=function(){
      var allOn=_prCountries.every(function(c){return _prActiveCountries[c]});
      _prCountries.forEach(function(c){_prActiveCountries[c]=!allOn});
      renderChips();render();
    };
    renderChips();render();
  })();
  </script>`
}

// ═══════════════════════════════════════════════════════════════════════════
// 메인 생성 함수
// ═══════════════════════════════════════════════════════════════════════════
export function generateVisibilityHTML(meta, total, products, citations, dotcom, lang, productsCnty, citationsCnty, weeklyLabels, weeklyAll, citationsByCnty, dotcomByCnty, monthlyVis) {
  return generateDashboardHTML(meta, total, products, citations, dotcom, lang, productsCnty, citationsCnty, weeklyLabels, weeklyAll, citationsByCnty, dotcomByCnty, { visibilityOnly: true, monthlyVis })
}

export function generateDashboardHTML(meta, total, products, citations, dotcom, lang, productsCnty, citationsCnty, weeklyLabels, weeklyAll, citationsByCnty, dotcomByCnty, opts, extra) {
  const visibilityOnly = opts?.visibilityOnly || false
  _sid = 0
  const t = T[lang] || T.ko

  // 12주 고정 라벨 — meta.weekStart 또는 데이터 길이 기반
  const _dataLen = weeklyAll ? Math.max(...Object.values(weeklyAll).flatMap(byC => Object.values(byC).flatMap(brands => Object.values(brands).map(arr => arr?.length || 0))), 0) : 0
  const _startW = meta.weekStart || Math.max(1, _dataLen - 11)
  const wLabels = Array.from({ length: 12 }, (_, i) => `W${_startW + i}`)

  // 인사이트는 meta 설정값을 존중 (강제 true 제거)

  // 국가 목록 추출 (weeklyAll + productsCnty)
  const countries = new Set()
  if (weeklyAll) Object.values(weeklyAll).forEach(byC => Object.keys(byC).forEach(c => { if (c !== 'Total') countries.add(c) }))
  if (productsCnty) productsCnty.forEach(r => { if (r.country && r.country !== 'TTL') countries.add(r.country) })
  const countryList = [...countries].sort()

  // ─── Filter Layer HTML (체크박스 형태) ───
  const allLabel = lang === 'en' ? 'All' : '전체'
  const BU_LIST = ['MS', 'HS', 'ES']
  const productCheckboxes = products.map(p =>
    `<label class="fl-chk-label"><input type="checkbox" class="fl-chk" data-filter="product" data-bu="${p.bu}" value="${p.id}" checked onchange="onFilterChange()"><span>${p.kr}</span></label>`
  ).join('')
  const buCheckboxes = BU_LIST.map(bu =>
    `<label class="fl-chk-label"><input type="checkbox" class="fl-chk" data-filter="bu" value="${bu}" checked onchange="onBuChange('${bu}')"><span>${bu}</span></label>`
  ).join('')
  const countryCheckboxes = countryList.map(c =>
    `<label class="fl-chk-label"><input type="checkbox" class="fl-chk" data-filter="country" value="${c}" checked onchange="onFilterChange()"><span>${c}</span></label>`
  ).join('')
  const regionCheckboxes = Object.entries(REGIONS).map(([k, v]) =>
    `<label class="fl-chk-label"><input type="checkbox" class="fl-chk" data-filter="region" value="${k}" checked onchange="onRegionChange('${k}')"><span>${k}</span></label>`
  ).join('')

  const langToggleHtml = `<div class="fl-group"><div style="display:flex;gap:2px;background:#F1F5F9;border-radius:6px;padding:2px"><button class="lang-btn${lang==='ko'?' active':''}" onclick="switchLang('ko')">KO</button><button class="lang-btn${lang==='en'?' active':''}" onclick="switchLang('en')">EN</button></div></div><div class="fl-divider"></div>`
  const filterLayerHtml = `<div class="filter-layer" id="filter-layer">
    <div class="fl-row">
      ${langToggleHtml}
      <div class="fl-group">
        <span class="fl-label">${lang === 'en' ? 'Period' : '기간'}</span>
        <span class="fl-badge">${meta.period || '—'}</span>
      </div>
      <div class="fl-divider"></div>
      <div class="fl-group">
        <span class="fl-label">${lang === 'en' ? 'View' : '조회'}</span>
        <div class="trend-tabs" id="period-toggle">
          <button class="trend-tab active" onclick="switchPeriodMode('weekly')">${lang === 'en' ? 'Weekly' : '주간'}</button>
          <button class="trend-tab" onclick="switchPeriodMode('monthly')">${lang === 'en' ? 'Monthly' : '월간'}</button>
        </div>
      </div>
    </div>
    <div class="fl-row">
      <div class="fl-group">
        <span class="fl-label">${lang === 'en' ? 'Division' : '본부'}</span>
        <label class="fl-chk-label fl-all-label"><input type="checkbox" class="fl-chk-all" data-target="bu" checked onchange="toggleAll(this,'bu')"><span>${allLabel}</span></label>
        ${buCheckboxes}
      </div>
      <div class="fl-divider"></div>
      <div class="fl-group">
        <span class="fl-label">${lang === 'en' ? 'Product' : '제품'}</span>
        <label class="fl-chk-label fl-all-label"><input type="checkbox" class="fl-chk-all" data-target="product" checked onchange="toggleAll(this,'product')"><span>${allLabel}</span></label>
        ${productCheckboxes}
      </div>
    </div>
    <div class="fl-row">
      <div class="fl-group">
        <span class="fl-label">Region</span>
        <label class="fl-chk-label fl-all-label"><input type="checkbox" class="fl-chk-all" data-target="region" checked onchange="toggleAll(this,'region')"><span>${allLabel}</span></label>
        ${regionCheckboxes}
      </div>
      <div class="fl-divider"></div>
      <div class="fl-group">
        <span class="fl-label">${lang === 'en' ? 'Country' : '국가'}</span>
        <label class="fl-chk-label fl-all-label"><input type="checkbox" class="fl-chk-all" data-target="country" checked onchange="toggleAll(this,'country')"><span>${allLabel}</span></label>
        ${countryCheckboxes}
      </div>
      <div class="fl-divider"></div>
      <div class="fl-group">
        <span class="fl-label">${lang === 'en' ? 'Display' : '표시'}</span>
        <label class="fl-chk-label"><input type="checkbox" id="toggle-insights" onchange="toggleInsights(this.checked)"><span>${lang === 'en' ? 'GEO Insights' : 'GEO 인사이트'}</span></label>
      </div>
    </div>
  </div>`

  // Citation 탭은 iframe으로 별도 페이지 사용 (citFilterLayerHtml 불필요)

  const noticeHtml = meta.showNotice && meta.noticeText ? `<div class="notice-box"><div class="notice-title">${lang === 'en' ? 'NOTICE' : '공지사항'}</div><div class="notice-text">${mdBold(meta.noticeText)}</div></div>` : ''

  const visContent = [
    noticeHtml,
    meta.showTotal !== false ? heroHtml(total, meta, t, lang) : '',
    meta.showProducts !== false ? productSectionHtml(products, meta, t, lang, wLabels) : '',
    `<div id="trend-container">${trendDetailHtml(products, weeklyAll, wLabels, t, lang)}</div>`,
    meta.showCnty !== false ? countrySectionHtml(productsCnty, meta, t, lang) : '',
  ].join('')
  // Citation 탭은 iframe으로 별도 사이테이션 페이지를 가져옴

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
.tab-bar{position:sticky;top:0;z-index:100;background:#0F172A;display:flex;align-items:center;justify-content:space-between;padding:10px 40px;border-bottom:none}
.lang-btn{padding:4px 10px;border-radius:5px;border:none;font-size:13px;font-weight:700;cursor:pointer;background:transparent;color:#64748B;font-family:${FONT};transition:all .15s}
.lang-btn.active{background:${RED};color:#fff}
.lang-btn:hover:not(.active){color:#1E293B}
.tab-btn{padding:8px 24px;border-radius:8px;border:none;font-size:16px;font-weight:600;font-family:${FONT};cursor:pointer;transition:all .15s;color:#94A3B8;background:transparent}
.tab-btn:hover{color:#E2E8F0}
.tab-btn.active{background:${RED};color:#fff}
.tab-panel{display:none}
.tab-panel.active{display:block}
/* ── GNB 서브메뉴 ── */
.gnb-sub{display:none;position:sticky;top:49px;z-index:99;background:#1E293B;padding:6px 40px;border-bottom:none}
.gnb-sub.active{display:flex;align-items:center;gap:4px}
.gnb-sub-btn{padding:6px 18px;border-radius:6px;border:none;font-size:14px;font-weight:600;font-family:${FONT};cursor:pointer;transition:all .15s;color:#94A3B8;background:transparent}
.gnb-sub-btn:hover{color:#E2E8F0}
.gnb-sub-btn.active{background:#334155;color:#fff}
.dash-container{max-width:1400px;margin:0 auto;padding:28px 40px}
/* ── 필터 레이어 ── */
.filter-layer{position:sticky;top:86px;z-index:90;background:#fff;border-bottom:2px solid #E8EDF2;padding:8px 40px}
.fl-row{display:flex;align-items:center;gap:14px;flex-wrap:wrap;padding:4px 0}
.fl-group{display:flex;align-items:center;gap:6px;flex-wrap:wrap}
.fl-label{font-size:15px;font-weight:700;color:#64748B;white-space:nowrap;margin-right:4px}
.fl-badge{font-size:15px;font-weight:600;color:#1A1A1A;padding:3px 10px;border-radius:6px;background:#F1F5F9}
.fl-chk-label{display:inline-flex;align-items:center;gap:3px;padding:3px 8px;border-radius:6px;font-size:14px;font-weight:600;color:#475569;cursor:pointer;transition:all .15s;background:#F8FAFC;border:1px solid #E2E8F0;white-space:nowrap;user-select:none}
.fl-chk-label:hover{border-color:#94A3B8}
.fl-chk-label:has(input:checked){background:#0F172A;color:#fff;border-color:#0F172A}
.fl-chk{width:12px;height:12px;margin:0;cursor:pointer;accent-color:${RED}}
.fl-all-label{font-weight:700}
.fl-divider{width:1px;height:24px;background:#E8EDF2;flex-shrink:0;align-self:center}
.hero-ctx{display:flex;gap:8px;flex-wrap:wrap}
.hero-ctx-badge{font-size:14px;font-weight:600;padding:3px 10px;border-radius:6px;background:rgba(255,255,255,.12);color:#FFB0C0;border:1px solid rgba(255,255,255,.08)}
/* ── Hero ── */
.hero{background:#0F172A;border-radius:16px;padding:28px 32px;margin-bottom:24px;color:#fff}
.hero-top{display:flex;justify-content:space-between;margin-bottom:20px}
.hero-brand{font-size:16px;font-weight:700;color:#FFCCD8}
.hero-meta{font-size:14px;color:#FFB0C0}
.hero-body{display:flex;gap:40px;align-items:flex-start}
.hero-left{flex:1}
.hero-right{flex:0 0 320px;text-align:right}
.hero-label{font-size:16px;font-weight:600;color:#94A3B8;text-transform:uppercase;margin-bottom:8px}
.hero-score-row{margin-bottom:16px;display:flex;align-items:baseline;gap:8px}
.hero-score{font-size:52px;font-weight:900}
.hero-pct{font-size:20px;color:#94A3B8}
.hero-delta{font-size:16px;font-weight:700}
.hero-mom{font-size:15px;color:#64748B}
.hero-gauge{margin-top:8px}
.hero-gauge-track{height:10px;background:#1E2433;border-radius:8px;overflow:hidden}
.hero-gauge-bar{height:100%;border-radius:8px;transition:width .5s}
.hero-legend{display:flex;gap:16px;margin-top:10px;font-size:14px;color:#94A3B8}
.hero-legend i{display:inline-block;width:10px;height:10px;border-radius:5px;margin-right:4px;vertical-align:-1px}
.hero-comp{margin-top:12px}
.hero-comp-label{font-size:16px;font-weight:800;color:${COMP}}
.hero-comp-score{font-size:16px;color:#94A3B8}
.hero-comp-gap{font-size:16px;font-weight:800;margin-left:8px}
.hero-info{font-size:14px;color:#64748B;margin-top:12px;line-height:1.6}
.hero-insight{margin-top:20px;padding:16px;background:#1E0F18;border:1px solid #3D1528;border-radius:10px}
.hero-insight-label{display:block;font-size:14px;font-weight:700;color:${RED};text-transform:uppercase;margin-bottom:6px}
.hero-insight-text{font-size:15px;color:#fff;line-height:1.8}
/* ── 섹션 카드 ── */
.section-card{background:#fff;border-radius:16px;border:1px solid #E8EDF2;margin-bottom:24px;overflow:hidden}
.section-header{padding:20px 28px;background:#FAFBFC;border-bottom:1px solid #F1F5F9;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px}
.section-title{font-size:20px;font-weight:700;color:#1A1A1A;display:flex;align-items:center;gap:8px}
.section-title::before{content:'';width:4px;height:22px;background:${RED};border-radius:4px;flex-shrink:0}
.section-header-right{display:flex;align-items:center;gap:16px}
.section-body{padding:24px 28px}
.legend{font-size:14px;color:#94A3B8;display:flex;align-items:center;gap:4px;flex-wrap:wrap}
.legend i{display:inline-block;width:8px;height:8px;border-radius:50%;margin:0 2px 0 8px;vertical-align:0}
/* ── Insight / HowToRead ── */
.hero-insight,.insight-box,.howto-box{display:none}
body.show-insights .hero-insight{display:block}
body.show-insights .insight-box{display:block}
body.show-insights .howto-box{display:block}
.insight-box{margin:0 28px;padding:12px 16px;background:#FFF4F7;border:1px solid #F5CCD8;border-radius:8px;margin-top:12px}
.insight-label{display:block;font-size:14px;font-weight:700;color:${RED};margin-bottom:4px}
.insight-text{font-size:14px;color:#1A1A1A;line-height:1.8}
.howto-box{margin:0 28px;padding:12px 16px;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:8px;margin-top:8px}
.howto-label{display:block;font-size:14px;font-weight:700;color:#64748B;margin-bottom:4px}
.howto-text{font-size:14px;color:#475569;line-height:1.8}
/* ── 트렌드 탭 ── */
.trend-tabs{display:inline-flex;background:#F1F5F9;border-radius:8px;padding:3px}
.trend-tab{padding:5px 16px;border:none;border-radius:6px;font-size:14px;font-weight:700;font-family:${FONT};cursor:pointer;background:transparent;color:#64748B;transition:all .15s}
.trend-tab.active{background:${RED};color:#fff}
.trend-tab:hover{opacity:.85}
/* ── BU / 제품 ── */
.bu-group{margin-bottom:20px}
.bu-header{display:flex;align-items:center;justify-content:space-between;background:#F1F5F9;border-radius:8px;padding:8px 14px;margin-bottom:12px}
.bu-label{font-size:17px;font-weight:700;color:#1A1A1A}
.bu-count{font-size:15px;color:#94A3B8}
.prod-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.prod-card{border:2px solid #E8EDF2;border-radius:12px;padding:16px 18px;background:#fff;transition:border-color .15s}
.prod-card:hover{border-color:#CBD5E1}
.prod-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:8px}
.prod-name{font-size:20px;font-weight:900;color:#1A1A1A}
.prod-badge{font-size:14px;font-weight:700;padding:2px 8px;border-radius:10px;border:1px solid}
.prod-score-row{display:flex;align-items:baseline;gap:10px;margin-bottom:4px}
.prod-score{font-size:32px;font-weight:900;color:#1A1A1A}
.prod-score small{font-size:16px;color:#94A3B8;font-weight:400}
.prod-delta{font-size:14px;font-weight:700}
.prod-chart{margin:6px 0 10px}
.prod-comp{display:flex;align-items:center;gap:8px;background:#F8FAFC;border-radius:8px;padding:8px 10px}
.prod-comp-name{font-size:14px;color:#64748B;white-space:nowrap;min-width:80px}
.prod-comp-bar-wrap{flex:1;height:6px;background:#E8EDF2;border-radius:3px;overflow:hidden}
.prod-comp-bar{height:100%;border-radius:3px;transition:width .3s}
.prod-comp-pct{font-size:16px;font-weight:700;min-width:40px;text-align:right}
/* ── 국가 (세로 막대) ── */
.cnty-product{margin-bottom:40px}
.vbar-chart{display:flex;align-items:flex-end;gap:28px;padding:12px 8px 0;min-height:220px;overflow-x:auto}
.vbar-item{display:flex;flex-direction:column;align-items:center;flex:1;min-width:60px;max-width:90px}
.vbar-item.hidden{display:none}
.vbar-val{font-size:15px;font-weight:700;white-space:nowrap;margin-bottom:3px}
.vbar-val.comp-val{font-size:15px;font-weight:600}
.vbar-cols{display:flex;gap:4px;width:100%;align-items:flex-end}
.vbar-col-wrap{flex:0 0 36px;display:flex;flex-direction:column;align-items:center;justify-content:flex-end}
.vbar-col{width:100%;border-radius:4px 4px 0 0;min-height:3px;transition:height .3s}
.vbar-col-name{font-size:14px;font-weight:600;color:#94A3B8;margin-top:3px;white-space:nowrap;width:36px;text-align:center;overflow:hidden;text-overflow:clip;letter-spacing:-0.5px}
.vbar-gap{font-size:15px;font-weight:700;margin-top:4px;white-space:nowrap}
.vbar-label{font-size:15px;font-weight:600;color:#475569;margin-top:4px;text-align:center;word-break:keep-all;line-height:1.3}
/* ── 국가 뷰탭 ── */
.cnty-view-tab{padding:5px 16px;border:none;border-radius:6px;font-size:14px;font-weight:700;font-family:${FONT};cursor:pointer;background:transparent;color:#64748B;transition:all .15s}
.cnty-view-tab.active{background:${RED};color:#fff}
.cnty-view-tab:hover{opacity:.85}
/* ── 필터 칩 ── */
.cnty-filters{padding:12px 28px 0;display:flex;flex-wrap:wrap;gap:10px}
.filter-group{display:flex;align-items:center;gap:6px;flex-wrap:wrap}
.filter-label{font-size:14px;font-weight:700;color:#64748B;margin-right:4px;white-space:nowrap}
.filter-chip{padding:4px 12px;border-radius:14px;border:1px solid #E2E8F0;font-size:14px;font-weight:600;font-family:${FONT};cursor:pointer;background:#fff;color:#64748B;transition:all .15s}
.filter-chip.active{background:#0F172A;color:#fff;border-color:#0F172A}
.filter-chip:hover{border-color:#94A3B8}
/* ── Citation ── */
.cit-row{display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid #F8FAFC}
.cit-row:last-child{border-bottom:none}
.cit-row.compact{padding:5px 0}
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
/* ── Progress ── */
.progress-placeholder{min-height:60vh;display:flex;align-items:center;justify-content:center}
.progress-placeholder .inner{text-align:center;padding:40px}
.progress-placeholder .icon{font-size:48px;margin-bottom:16px;opacity:.3}
.progress-placeholder h2{font-size:20px;font-weight:700;color:#1E293B;margin-bottom:8px}
.progress-placeholder p{font-size:16px;color:#64748B}
/* ── Footer ── */
.notice-box{background:#FEF2F2;border:1px solid #FECACA;border-radius:12px;padding:16px 20px;margin-bottom:20px}
.notice-box .notice-title{font-size:14px;font-weight:700;color:#BE123C;margin-bottom:6px;text-transform:uppercase;letter-spacing:0.5px}
.notice-box .notice-text{font-size:15px;color:#1E293B;line-height:1.8}
.dash-footer{background:#1A1A1A;padding:16px 40px;display:flex;justify-content:space-between;align-items:center;margin-top:auto}
.dash-footer span{font-size:14px;color:#94A3B8}
.dash-footer strong{color:#fff;font-weight:700}
</style>
</head>
<body>
${visibilityOnly ? `
${filterLayerHtml.replace('top:53px', 'top:0')}
<div class="dash-container">${visContent}</div>
` : `
<div class="tab-bar">
  <div style="display:flex;gap:4px;align-items:center">
    <button class="tab-btn active" onclick="switchTab('visibility')">Visibility</button>
    <button class="tab-btn" onclick="switchTab('citation')">Citation</button>
    <button class="tab-btn" onclick="switchTab('readability')">Readability</button>
    <button class="tab-btn" onclick="switchTab('progress')">Progress Tracker</button>
    <button class="tab-btn" onclick="switchTab('promptlist')">Prompt List</button>
    <button class="tab-btn" onclick="switchTab('glossary')">Glossary</button>
  </div>
  <div id="lang-toggle" style="display:flex;gap:2px;background:#1E293B;border-radius:6px;padding:2px">
    <button class="lang-btn${lang === 'ko' ? ' active' : ''}" onclick="switchLang('ko')">KO</button>
    <button class="lang-btn${lang === 'en' ? ' active' : ''}" onclick="switchLang('en')">EN</button>
  </div>
</div>
<div id="gnb-visibility" class="gnb-sub active">
  <button class="gnb-sub-btn active" onclick="switchVisSub('bu')">${lang === 'en' ? 'Business Division' : '사업본부'}</button>
  <button class="gnb-sub-btn" onclick="switchVisSub('pr')">PR</button>
  <button class="gnb-sub-btn" onclick="switchVisSub('brand')">Brand Comm</button>
  <button class="gnb-sub-btn" onclick="switchVisSub('premium')">${lang === 'en' ? 'Premium' : '고가혁'}</button>
</div>
<div id="tab-visibility" class="tab-panel active">
  <div id="vis-sub-bu" class="vis-sub-panel active">
    ${filterLayerHtml}
    <div class="dash-container">${visContent}</div>
  </div>
  <div id="vis-sub-pr" class="vis-sub-panel" style="display:none">
    ${prVisibilityTabHtml(extra?.weeklyPR, extra?.weeklyPRLabels, lang)}
  </div>
  <div id="vis-sub-brand" class="vis-sub-panel" style="display:none">
    <div style="display:flex;align-items:center;justify-content:center;min-height:calc(100vh - 160px);color:#94A3B8;font-size:16px">${lang === 'en' ? 'Brand Comm Visibility — Coming Soon' : 'Brand Comm Visibility — 준비 중'}</div>
  </div>
  <div id="vis-sub-premium" class="vis-sub-panel" style="display:none">
    <div style="display:flex;align-items:center;justify-content:center;min-height:calc(100vh - 160px);color:#94A3B8;font-size:16px">${lang === 'en' ? 'Premium Visibility — Coming Soon' : '고가혁 Visibility — 준비 중'}</div>
  </div>
</div>
<div id="tab-citation" class="tab-panel">
  <iframe id="cit-iframe" src="/p/${lang === 'en' ? 'GEO-Citation-Dashboard-EN' : 'GEO-Citation-Dashboard-KO'}" style="width:100%;min-height:calc(100vh - 60px);border:none;background:#F1F5F9" title="Citation Dashboard"></iframe>
</div>
<div id="tab-readability" class="tab-panel">
  <div class="progress-placeholder"><div class="inner">
    <div class="icon">📖</div>
    <h2>Readability</h2>
    <p>${t.readabilityMsg}</p>
  </div></div>
</div>
<div id="tab-progress" class="tab-panel">
  <iframe id="tracker-iframe" src="/p/progress-tracker/?lang=${lang}" style="width:100%;min-height:calc(100vh - 60px);border:none;background:#0A0F1E" title="Progress Tracker"></iframe>
</div>
<div id="tab-promptlist" class="tab-panel">
  ${promptListTabHtml(extra?.appendixPrompts, lang)}
</div>
<div id="tab-glossary" class="tab-panel">
  ${glossaryTabHtml(lang)}
</div>
`}
<div class="dash-footer">
  <span><strong>LG Electronics</strong> ${t.footer}</span>
  <span>© 2026 LG Electronics Inc. All Rights Reserved.</span>
</div>
<script>
var _periodMode='weekly';
var _curLang='${lang}';
// iframe에서 한영 전환 메시지 수신
window.addEventListener('message',function(e){
  if(e.data&&e.data.type==='switchLang')switchLang(e.data.lang);
});
function switchLang(lang){
  _curLang=lang;
  document.querySelectorAll('.lang-btn').forEach(function(b){b.classList.toggle('active',b.textContent.toLowerCase()===lang)});
  // Citation iframe 전환
  var citIframe=document.getElementById('cit-iframe');
  if(citIframe)citIframe.src='/p/'+(lang==='en'?'GEO-Citation-Dashboard-EN':'GEO-Citation-Dashboard-KO');
  // Tracker iframe 전환
  var trkIframe=document.getElementById('tracker-iframe');
  if(trkIframe)trkIframe.src='/p/progress-tracker/?lang='+lang;
  // KO↔EN 페이지 전환 — 현재 탭을 hash로 유지
  var path=window.location.pathname;
  var activeTab=document.querySelector('.tab-panel.active');
  var hash=activeTab?'#'+activeTab.id.replace('tab-',''):'';
  if(path.indexOf('-KO')>0)window.location.href=path.replace('-KO',lang==='en'?'-EN':'-KO')+hash;
  else if(path.indexOf('-EN')>0)window.location.href=path.replace('-EN',lang==='ko'?'-KO':'-EN')+hash;
}
// 페이지 로드 시 hash에서 탭 복원
(function(){var h=window.location.hash.replace('#','');if(h&&document.getElementById('tab-'+h)){switchTab(h)}})();
function switchTab(id){
  document.querySelectorAll('.tab-panel').forEach(function(p){p.classList.remove('active')});
  document.querySelectorAll('.tab-btn').forEach(function(b){b.classList.remove('active')});
  document.getElementById('tab-'+id).classList.add('active');
  var btns=document.querySelectorAll('.tab-btn');
  var map={visibility:0,citation:1,readability:2,progress:3,promptlist:4,glossary:5};
  if(map[id]!==undefined)btns[map[id]].classList.add('active');
  // GNB 서브메뉴: Visibility 탭일 때만 표시
  var gnb=document.getElementById('gnb-visibility');
  if(gnb){if(id==='visibility')gnb.classList.add('active');else gnb.classList.remove('active');}
}
function switchVisSub(sub){
  document.querySelectorAll('.vis-sub-panel').forEach(function(p){p.style.display='none'});
  document.querySelectorAll('#gnb-visibility .gnb-sub-btn').forEach(function(b){b.classList.remove('active')});
  var panel=document.getElementById('vis-sub-'+sub);
  if(panel)panel.style.display='block';
  var btns=document.querySelectorAll('#gnb-visibility .gnb-sub-btn');
  var subMap={bu:0,pr:1,brand:2,premium:3};
  if(subMap[sub]!==undefined&&btns[subMap[sub]])btns[subMap[sub]].classList.add('active');
}
function switchPeriodMode(mode){
  _periodMode=mode;
  // Update all period toggles
  document.querySelectorAll('#period-toggle .trend-tab, #filter-layer-cit #period-toggle .trend-tab').forEach(function(btn){
    var isW=mode==='weekly'&&btn.textContent.match(/(주간|Weekly)/);
    var isM=mode==='monthly'&&btn.textContent.match(/(월간|Monthly)/);
    if(isW||isM)btn.classList.add('active');else btn.classList.remove('active');
  });
  // Toggle product card trends + WoW/MoM
  document.querySelectorAll('.trend-weekly').forEach(function(el){el.style.display=mode==='weekly'?'':'none'});
  document.querySelectorAll('.trend-monthly').forEach(function(el){el.style.display=mode==='monthly'?'':'none'});
  document.querySelectorAll('.prod-wow').forEach(function(el){el.style.display=mode==='weekly'?'':'none'});
  document.querySelectorAll('.prod-mom').forEach(function(el){el.style.display=mode==='monthly'?'':'none'});
  onFilterChange();
}
function switchTrend(mode){switchPeriodMode(mode)}
function toggleInsights(on){
  document.body.classList.toggle('show-insights',on);
}
function toggleAll(el, target){
  var checked=el.checked;
  // Update all filter layers
  document.querySelectorAll('.fl-chk[data-filter="'+target+'"]').forEach(function(c){c.checked=checked});
  // If toggling BU, also toggle related products
  if(target==='bu'){
    document.querySelectorAll('.fl-chk[data-filter="product"]').forEach(function(c){c.checked=checked});
    document.querySelectorAll('.fl-chk-all[data-target="product"]').forEach(function(c){c.checked=checked});
  }
  // If toggling region, also toggle related countries
  if(target==='region'){
    document.querySelectorAll('.fl-chk[data-filter="country"]').forEach(function(c){c.checked=checked});
    document.querySelectorAll('.fl-chk-all[data-target="country"]').forEach(function(c){c.checked=checked});
  }
  syncAllFilterLayers();
  onFilterChange();
}
function onBuChange(bu){
  var chk=document.querySelector('.fl-chk[data-filter="bu"][value="'+bu+'"]');
  if(!chk)return;
  var isChecked=chk.checked;
  // Toggle products under this BU + uncheck disabled products
  document.querySelectorAll('.fl-chk[data-filter="product"][data-bu="'+bu+'"]').forEach(function(c){c.checked=isChecked});
  updateAllCheckbox('bu');
  updateAllCheckbox('product');
  syncAllFilterLayers();
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
  syncAllFilterLayers();
  onFilterChange();
}
function updateAllCheckbox(target){
  var all=document.querySelectorAll('.fl-chk[data-filter="'+target+'"]');
  var allChecked=true;
  all.forEach(function(c){if(!c.checked)allChecked=false});
  document.querySelectorAll('.fl-chk-all[data-target="'+target+'"]').forEach(function(c){c.checked=allChecked});
}
function syncAllFilterLayers(){}
function _syncDisabledState(){
  // BU 해제 시 → 해당 BU 소속 제품 disabled
  var buChks=document.querySelectorAll('#filter-layer .fl-chk[data-filter="bu"]');
  var activeBU={};
  buChks.forEach(function(c){if(c.checked)activeBU[c.value]=true});
  var allBUChecked=Object.keys(activeBU).length===buChks.length;
  document.querySelectorAll('#filter-layer .fl-chk[data-filter="product"]').forEach(function(c){
    var bu=c.getAttribute('data-bu');
    var disabled=!allBUChecked&&!activeBU[bu];
    c.disabled=disabled;
    var label=c.closest('.fl-chk-label');
    if(label){
      label.style.opacity=disabled?'0.35':'';
      label.style.pointerEvents=disabled?'none':'';
    }
  });
  // Region 해제 시 → 해당 Region 소속 국가 disabled
  var regionChks=document.querySelectorAll('#filter-layer .fl-chk[data-filter="region"]');
  var activeCountries={};
  regionChks.forEach(function(c){
    if(c.checked){var rc=_REGIONS[c.value]||[];rc.forEach(function(cn){activeCountries[cn]=true})}
  });
  var allRegChecked=true;
  regionChks.forEach(function(c){if(!c.checked)allRegChecked=false});
  document.querySelectorAll('#filter-layer .fl-chk[data-filter="country"]').forEach(function(c){
    var cn=c.value;
    var disabled=!allRegChecked&&!activeCountries[cn];
    c.disabled=disabled;
    var label=c.closest('.fl-chk-label');
    if(label){
      label.style.opacity=disabled?'0.35':'';
      label.style.pointerEvents=disabled?'none':'';
    }
  });
}
function getCheckedValues(filterName){
  var vals={};var total=0;var checked=0;
  document.querySelectorAll('#filter-layer .fl-chk[data-filter="'+filterName+'"]').forEach(function(c){
    total++;if(c.checked){vals[c.value]=true;checked++}
  });
  return{vals:vals,total:total,checked:checked,isAll:total===checked};
}
function switchCntyView(mode){
  var vp=document.getElementById('cnty-view-product');
  var vc=document.getElementById('cnty-view-country');
  if(vp)vp.style.display=mode==='product'?'':'none';
  if(vc)vc.style.display=mode==='country'?'':'none';
  document.querySelectorAll('.cnty-view-tab').forEach(function(btn){btn.classList.remove('active')});
  var tabs=document.querySelectorAll('.cnty-view-tab');
  if(mode==='product'&&tabs[0])tabs[0].classList.add('active');
  if(mode==='country'&&tabs[1])tabs[1].classList.add('active');
  applyCntyFilters();
}
function toggleCntyFilter(btn){
  btn.classList.toggle('active');
  applyCntyFilters();
}
function applyCntyFilters(){
  var selProducts=getCheckedValues('product');
  var selCountries=getCheckedValues('country');
  // Get product names from selected IDs
  var activeProductNames={};
  _products.forEach(function(p){if(selProducts.isAll||selProducts.vals[p.id]){activeProductNames[p.kr]=true;if(p.category)activeProductNames[p.category]=true}});
  // product view
  document.querySelectorAll('#cnty-view-product .vbar-item').forEach(function(item){
    var p=item.getAttribute('data-product');var c=item.getAttribute('data-country');
    var show=(selProducts.isAll||activeProductNames[p])&&(selCountries.isAll||selCountries.vals[c]);
    item.classList.toggle('hidden',!show);
  });
  document.querySelectorAll('#cnty-view-product .cnty-product').forEach(function(grp){
    var gp=grp.getAttribute('data-group-product');
    var vis=grp.querySelectorAll('.vbar-item:not(.hidden)').length;
    var show=vis>0&&(selProducts.isAll||activeProductNames[gp]);
    grp.style.display=show?'':'none';
  });
  // country view
  document.querySelectorAll('#cnty-view-country .vbar-item').forEach(function(item){
    var p=item.getAttribute('data-product');var c=item.getAttribute('data-country');
    var show=(selProducts.isAll||activeProductNames[p])&&(selCountries.isAll||selCountries.vals[c]);
    item.classList.toggle('hidden',!show);
  });
  document.querySelectorAll('#cnty-view-country .cnty-product').forEach(function(grp){
    var gc=grp.getAttribute('data-group-country');
    var vis=grp.querySelectorAll('.vbar-item:not(.hidden)').length;
    var show=vis>0&&(selCountries.isAll||selCountries.vals[gc]);
    grp.style.display=show?'':'none';
  });
  // Also sync cnty-filter chips with top filter
  document.querySelectorAll('#cnty-filter-products .filter-chip').forEach(function(chip){
    var v=chip.getAttribute('data-filter-value');
    chip.classList.toggle('active',!!activeProductNames[v]);
  });
  document.querySelectorAll('#cnty-filter-countries .filter-chip').forEach(function(chip){
    var v=chip.getAttribute('data-filter-value');
    chip.classList.toggle('active',selCountries.isAll||!!selCountries.vals[v]);
  });
}
function switchCitCnty(btn){
  var sec=btn.closest('.section-card')||document.getElementById('cit-domain-section');
  sec.querySelectorAll('.filter-chip').forEach(function(c){c.classList.remove('active')});
  btn.classList.add('active');
  var sel=btn.getAttribute('data-cit-cnty-val');
  sec.querySelectorAll('.cit-cnty-panel').forEach(function(p){
    p.style.display=p.getAttribute('data-cit-cnty')===sel?'':'none';
  });
}
// ─── Embedded Data ───
var _weeklyAll=${weeklyAll ? JSON.stringify(weeklyAll) : '{}'};
var _products=${JSON.stringify(products.map(p => ({ id: p.id, bu: p.bu, kr: p.kr, en: p.en || p.kr, category: p.category || '', date: p.date || '', status: p.status, score: p.score || 0, prev: p.prev || 0, vsComp: p.vsComp || 0, compName: p.compName || '', compRatio: p.compRatio || 0, allScores: p.allScores || {} })))};
var _productsCnty=${JSON.stringify(productsCnty || [])};
var _monthlyVis=${JSON.stringify(opts?.monthlyVis || [])};
var _total=${JSON.stringify(total)};
var _meta={period:'${(meta.period || '').replace(/'/g, "\\'")}',reportNo:'${(meta.reportNo || '').replace(/'/g, "\\'")}',totalInsight:${JSON.stringify(meta.totalInsight || '')}};
var _wLabels=${JSON.stringify(wLabels)};
var _lang='${lang}';
var _BRAND_COLORS=${JSON.stringify(BRAND_COLORS)};
var _FALLBACK=['#94A3B8','#64748B','#475569','#CBD5E1','#E2E8F0'];
var _RED='${RED}';
var _FONT="${FONT}";
var _COMP='${COMP}';
var _REGIONS={NA:['US','CA'],EU:['UK','DE','ES'],LATAM:['BR','MX'],APAC:['IN','AU','VN']};
var _REGION_LABELS={NA:'${lang==='en'?'North America':'북미'}',EU:'${lang==='en'?'Europe':'유럽'}',LATAM:'${lang==='en'?'Latin America':'중남미'}',APAC:'${lang==='en'?'Asia Pacific':'아태'}'};
// ─── Helpers ───
function _fmt(n){return Number(n).toLocaleString('en-US')}
function _bc(n,i){return _BRAND_COLORS[n]||_FALLBACK[i%_FALLBACK.length]}
function _statusInfo(s){
  if(s==='lead')return{bg:'#ECFDF5',border:'#A7F3D0',color:'#15803D',label:_lang==='en'?'Lead':'선도'};
  if(s==='behind')return{bg:'#FFFBEB',border:'#FDE68A',color:'#B45309',label:_lang==='en'?'Behind':'추격'};
  if(s==='critical')return{bg:'#FFF1F2',border:'#FECDD3',color:'#BE123C',label:_lang==='en'?'Critical':'취약'};
  return{bg:'#F8FAFC',border:'#E2E8F0',color:'#475569',label:'—'};
}
var _TREND_BC=${TREND_BRAND_COL};
function _svgML(bd,labels,w,h){
  var brands=Object.keys(bd);if(!brands.length||!labels.length)return'';
  var mn=Infinity,mx=-Infinity;var N=labels.length;
  brands.forEach(function(b){(bd[b]||[]).forEach(function(v){if(v!=null){if(v<mn)mn=v;if(v>mx)mx=v}})});
  if(!isFinite(mn))return'';
  var pad=Math.max((mx-mn)*0.15,2);mn=Math.max(0,mn-pad);mx=Math.min(100,mx+pad);var rng=mx-mn||1;
  var pt=8,pb=8,ch=h-pt-pb;
  var g='';
  for(var i=0;i<=4;i++){var y=pt+(i/4)*ch;
    g+='<line x1="0" y1="'+y.toFixed(1)+'" x2="'+w+'" y2="'+y.toFixed(1)+'" stroke="#E8EDF2" stroke-width="1"/>';
  }
  brands.forEach(function(b,bi){var vals=bd[b]||[];var c=_bc(b,bi);var isLG=b==='LG';var sw=isLG?2.5:1.5;var op=isLG?1:0.7;var pts=[];
    vals.forEach(function(v,i){if(v==null)return;var x=((i+0.5)/N)*w;var y=pt+(1-(v-mn)/rng)*ch;pts.push({x:x,y:y,v:v})});
    if(!pts.length)return;
    if(pts.length>=2){var d=pts.map(function(p,i){return(i?'L':'M')+p.x.toFixed(1)+','+p.y.toFixed(1)}).join(' ');
    g+='<path d="'+d+'" stroke="'+c+'" fill="none" stroke-width="'+sw+'" stroke-linecap="round" stroke-linejoin="round" opacity="'+op+'"/>';}
    pts.forEach(function(p){g+='<circle cx="'+p.x.toFixed(1)+'" cy="'+p.y.toFixed(1)+'" r="'+(isLG?3.5:2.5)+'" fill="#fff" stroke="'+c+'" stroke-width="'+(isLG?2:1.5)+'" opacity="'+op+'"/>'});
  });
  return '<svg viewBox="0 0 '+w+' '+h+'" width="100%" height="'+h+'" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" style="display:block">'+g+'</svg>';
}

// ─── Checkbox-based Filter Logic ───
function onFilterChange(){
  var selBU=getCheckedValues('bu');
  var selProd=getCheckedValues('product');
  var selCountry=getCheckedValues('country');
  // Update "All" checkboxes
  updateAllCheckbox('bu');
  updateAllCheckbox('product');
  updateAllCheckbox('region');
  updateAllCheckbox('country');
  syncAllFilterLayers();
  // 상위 BU/Region 해제 시 하위 항목 disabled 처리
  _syncDisabledState();
  // Apply filters
  filterBU(selBU);
  filterProducts(selProd);
  filterTrend(selBU,selProd,selCountry);
  applyCntyFilters();
  updateHeroFromCheckboxes();
  updateProductScores(selCountry,selBU,selProd);
}
function filterBU(selBU){
  document.querySelectorAll('.bu-group[data-bu]').forEach(function(g){
    var bu=g.getAttribute('data-bu');
    g.style.display=(selBU.isAll||selBU.vals[bu])?'':'none';
  });
}
function filterProducts(selProd){
  if(selProd.isAll){
    document.querySelectorAll('.prod-card').forEach(function(c){c.style.display=''});
    return;
  }
  var selectedNames={};
  _products.forEach(function(p){if(selProd.vals[p.id])selectedNames[p.kr]=true});
  document.querySelectorAll('.prod-card').forEach(function(c){
    var name=c.querySelector('.prod-name');
    c.style.display=(name&&selectedNames[name.textContent])?'':'none';
  });
}
function filterTrend(selBU,selProd,selCountry){
  // Determine country for trend data
  var trendCnty='Total';
  var trendCountries=null; // 다중 국가 평균용
  if(!selCountry.isAll){
    var cKeys=Object.keys(selCountry.vals);
    if(cKeys.length===1)trendCnty=cKeys[0];
    else if(cKeys.length>1)trendCountries=cKeys;
  }
  var container=document.getElementById('trend-container');if(!container)return;

  // 월간 모드: 제품별 월간 스코어 표시
  if(_periodMode==='monthly'){
    _renderMonthlyTrend(container,selBU,selProd,trendCnty,trendCountries);
    return;
  }

  // 다중 국가 평균 데이터 계산
  function _avgWeeklyData(prodId){
    if(!trendCountries)return (_weeklyAll[prodId]||{})[trendCnty]||{};
    var allBrands={};
    trendCountries.forEach(function(c){
      var cData=(_weeklyAll[prodId]||{})[c]||{};
      Object.keys(cData).forEach(function(brand){
        if(!allBrands[brand])allBrands[brand]=[];
        allBrands[brand].push(cData[brand]||[]);
      });
    });
    var avg={};
    Object.keys(allBrands).forEach(function(brand){
      var arrays=allBrands[brand];
      var maxLen=Math.max.apply(null,arrays.map(function(a){return a.length}));
      avg[brand]=[];
      for(var i=0;i<maxLen;i++){
        var sum=0;var cnt=0;
        arrays.forEach(function(a){if(a[i]!=null){sum+=a[i];cnt++}});
        avg[brand].push(cnt>0?sum/cnt:null);
      }
    });
    return avg;
  }

  var BU=['MS','HS','ES'];var html='';var hasTrend=false;
  var selectedProdIds=selProd.isAll?null:selProd.vals;
  BU.forEach(function(b){
    if(!selBU.isAll&&!selBU.vals[b])return;
    var prods=_products.filter(function(p){return p.bu===b&&(!selectedProdIds||selectedProdIds[p.id])});if(!prods.length)return;
    var rows='';
    prods.forEach(function(p){
      var data=_avgWeeklyData(p.id);
      var brands=Object.keys(data).sort(function(a,b2){if(a==='LG')return -1;if(b2==='LG')return 1;var la=(data[a]||[])[data[a].length-1]||0;var lb=(data[b2]||[])[data[b2].length-1]||0;return lb-la});
      if(!brands.length)return;
      var st=_statusInfo(p.status);var lgL=data.LG?data.LG[data.LG.length-1]:null;
      var legend=brands.map(function(br,i){var c=_bc(br,i);var isLG=br==='LG';return'<span style="display:inline-flex;align-items:center;gap:3px;margin-right:12px"><i style="display:inline-block;width:10px;height:3px;border-radius:1px;background:'+c+';opacity:'+(isLG?1:0.7)+'"></i><span style="font-size:13px;color:'+(isLG?'#1A1A1A':'#94A3B8')+';font-weight:'+(isLG?700:400)+'">'+br+'</span></span>'}).join('');
      var N=_wLabels.length;
      var colgroup='<colgroup><col style="width:'+_TREND_BC+'px">'+_wLabels.map(function(){return'<col>'}).join('')+'</colgroup>';
      var chartRow='<tr><td style="padding:0;border:0"></td><td colspan="'+N+'" style="padding:8px 0;border:0">'+_svgML(data,_wLabels,N*80,180)+'</td></tr>';
      var legendRow='<tr><td style="padding:0;border:0"></td><td colspan="'+N+'" style="padding:4px 0 6px;border:0">'+legend+'</td></tr>';
      var thead='<tr style="border-top:1px solid #E8EDF2"><th style="text-align:left;padding:5px 6px;font-size:14px;color:#94A3B8;font-weight:600;border-bottom:1px solid #F1F5F9">Brand</th>'+_wLabels.map(function(w){return'<th style="text-align:center;padding:5px 2px;font-size:14px;color:#94A3B8;font-weight:600;border-bottom:1px solid #F1F5F9">'+w+'</th>'}).join('')+'</tr>';
      var tbody=brands.map(function(br,i){var c=_bc(br,i);var isLG=br==='LG';var cells=_wLabels.map(function(_,wi){var val=data[br]?data[br][wi]:null;return'<td style="text-align:center;padding:5px 2px;font-size:14px;color:'+(val!=null?(isLG?'#1A1A1A':'#475569'):'#CBD5E1')+';font-weight:'+(isLG?700:400)+';border-bottom:1px solid #F8FAFC;font-variant-numeric:tabular-nums">'+(val!=null?val.toFixed(1):'—')+'</td>'}).join('');return'<tr style="background:'+(isLG?'#FFF8F9':i%2===0?'#fff':'#FAFBFC')+'"><td style="padding:5px 6px;font-size:14px;font-weight:'+(isLG?700:500)+';color:'+c+';border-bottom:1px solid #F8FAFC;white-space:nowrap;overflow:hidden;text-overflow:ellipsis"><i style="display:inline-block;width:6px;height:6px;border-radius:50%;background:'+c+';margin-right:4px;vertical-align:0"></i>'+br+'</td>'+cells+'</tr>'}).join('');
      rows+='<div class="trend-row" style="margin-bottom:24px"><div style="display:flex;align-items:center;gap:8px;margin-bottom:10px"><span style="width:3px;height:16px;border-radius:2px;background:'+_RED+';flex-shrink:0"></span><span style="font-size:15px;font-weight:700;color:#1A1A1A">'+p.kr+'</span><span style="font-size:13px;font-weight:700;padding:2px 8px;border-radius:10px;background:'+st.bg+';color:'+st.color+';border:1px solid '+st.border+'">'+st.label+'</span>'+(lgL!=null?'<span style="font-size:13px;font-weight:700;color:#1A1A1A">LG '+lgL.toFixed(1)+'%</span>':'')+(p.compName?'<span style="font-size:13px;color:#94A3B8">vs '+p.compName+' '+(p.compRatio||'')+'%</span>':'')+'</div><div style="border:1px solid #E8EDF2;border-radius:10px;overflow:hidden"><table style="width:100%;border-collapse:collapse;table-layout:fixed;font-family:'+_FONT+'">'+colgroup+'<tbody>'+chartRow+legendRow+thead+tbody+'</tbody></table></div></div>';
    });
    if(!rows)return;hasTrend=true;
    html+='<div class="bu-group" data-bu="'+b+'" style="margin-bottom:20px"><div class="bu-header"><span class="bu-label">'+b+'</span></div>'+rows+'</div>';
  });
  if(!hasTrend){container.innerHTML='';return}
  var title=_lang==='en'?'Weekly Competitor Trend':'주간 경쟁사 트렌드';
  var sub=_wLabels[0]+'–'+_wLabels[_wLabels.length-1]+' ('+_wLabels.length+(_lang==='en'?' weeks':'주')+')';
  var cntyLabel=trendCountries?(' — '+trendCountries.join(', ')+' avg'):(trendCnty==='Total'?'':' — '+trendCnty);
  container.innerHTML='<div class="section-card"><div class="section-header"><div class="section-title">'+title+cntyLabel+'</div><span class="legend">'+sub+'</span></div><div class="section-body">'+html+'</div></div>';
}

// ─── 월간 트렌드 렌더링 ───
var _mLabels=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
function _parseMonth(d){
  var ML=['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];
  var m=d.match(/([0-9]{1,2})월/);if(m)return parseInt(m[1])-1;
  var e=d.match(/(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);if(e)return ML.indexOf(e[1].toLowerCase());
  var iso=d.match(/[0-9]{4}-([0-9]{2})/);if(iso)return parseInt(iso[1])-1;
  return -1;
}
function _getMonthlyBrandData(cat,countries){
  // 국가 필터에 따라 제품별 월별 브랜드별 스코어 계산
  // 반환: { LG: [null,...,86,...], Samsung: [null,...,91,...], ... }
  var N=12;

  // 1) _monthlyVis 데이터 활용 (division 기반 — cat은 사실 division에 매핑)
  //    _monthlyVis: [{ date, country, division, lg, comp }]
  //    cat을 division이 아닌 product category로 매칭하기 위해 _products에서 division(bu) 찾기
  var prod=_products.find(function(pr){return(pr.category||'').toUpperCase()===cat||pr.id.toUpperCase()===cat});

  // 2) _monthlyVis에서 해당 제품의 월간 데이터 수집
  if(_monthlyVis&&_monthlyVis.length>0&&prod){
    var bu=prod.bu;// MS, HS, ES
    var byMonth={};// { monthIdx: { lg: [scores], comp: [scores] } }
    _monthlyVis.forEach(function(r){
      if(bu&&r.division&&r.division!==bu)return;
      if(countries&&countries.indexOf(r.country||'')<0)return;
      var mi=_parseMonth(r.date||'');if(mi<0)return;
      if(!byMonth[mi])byMonth[mi]={lg:[],comp:[]};
      byMonth[mi].lg.push(r.lg||0);
      if(r.comp>0)byMonth[mi].comp.push(r.comp);
    });
    if(Object.keys(byMonth).length>0){
      var lgArr=[];var compArr=[];
      for(var i=0;i<N;i++){
        var m=byMonth[i];
        lgArr.push(m&&m.lg.length?m.lg.reduce(function(a,b){return a+b},0)/m.lg.length:null);
        compArr.push(m&&m.comp.length?m.comp.reduce(function(a,b){return a+b},0)/m.comp.length:null);
      }
      var result={LG:lgArr};
      if(compArr.some(function(v){return v!=null}))result.Samsung=compArr;
      return result;
    }
  }

  // 3) 폴백: _products allScores 사용 (단일 월 데이터)
  if(!countries){
    if(!prod||!prod.allScores)return null;
    var mi2=_parseMonth(prod.date||'');if(mi2<0)return null;
    var result2={};
    Object.keys(prod.allScores).forEach(function(brand){
      var arr=[];for(var i=0;i<N;i++)arr.push(null);
      arr[mi2]=prod.allScores[brand];
      result2[brand]=arr;
    });
    return result2;
  }
  // 4) 폴백: _productsCnty에서 선택 국가 평균
  var byBrandMonth={};
  _productsCnty.forEach(function(r){
    if((r.product||'').toUpperCase()!==cat)return;
    if(countries.indexOf(r.country||'')<0)return;
    var mi3=_parseMonth(r.date||'');if(mi3<0)return;
    if(!r.allScores)return;
    Object.keys(r.allScores).forEach(function(brand){
      if(!byBrandMonth[brand])byBrandMonth[brand]={};
      if(!byBrandMonth[brand][mi3])byBrandMonth[brand][mi3]=[];
      byBrandMonth[brand][mi3].push(r.allScores[brand]);
    });
  });
  if(!Object.keys(byBrandMonth).length)return null;
  var result3={};
  Object.keys(byBrandMonth).forEach(function(brand){
    var arr=[];for(var i=0;i<N;i++){
      var vals=byBrandMonth[brand][i];
      arr.push(vals?vals.reduce(function(a,b){return a+b},0)/vals.length:null);
    }
    result3[brand]=arr;
  });
  return result3;
}
function _renderMonthlyTrend(container,selBU,selProd,trendCnty,trendCountries){
  var ML=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var html='';var hasTrend=false;
  var selectedProdIds=selProd.isAll?null:selProd.vals;
  var countries=trendCountries||null;// null=전체(TTL), 배열=선택 국가
  if(trendCnty!=='Total'&&!trendCountries)countries=[trendCnty];// 단일 국가
  var BU=['MS','HS','ES'];
  BU.forEach(function(b){
    if(!selBU.isAll&&!selBU.vals[b])return;
    var prods=_products.filter(function(p){return p.bu===b&&(!selectedProdIds||selectedProdIds[p.id])});
    if(!prods.length)return;
    var rows='';
    prods.forEach(function(p){
      var cat=(p.category||p.id||'').toUpperCase();
      var brandData=_getMonthlyBrandData(cat,countries);
      if(!brandData)return;
      var brands=Object.keys(brandData).sort(function(a,b2){if(a==='LG')return -1;if(b2==='LG')return 1;return 0});
      if(!brands.length)return;
      var hasAny=brands.some(function(br){return brandData[br].some(function(v){return v!=null})});
      if(!hasAny)return;
      var N=12;
      var colgroup='<colgroup><col style="width:'+_TREND_BC+'px">'+ML.map(function(){return'<col>'}).join('')+'</colgroup>';
      // SVG 멀티 라인 차트
      var svgW=N*80;var svgH=180;
      var chartSvg=_svgML(brandData,ML,svgW,svgH);
      // 범례
      var legend=brands.map(function(br,i){var c=_bc(br,i);var isLG=br==='LG';return'<span style="display:inline-flex;align-items:center;gap:3px;margin-right:12px"><i style="display:inline-block;width:10px;height:3px;border-radius:1px;background:'+c+';opacity:'+(isLG?1:0.7)+'"></i><span style="font-size:14px;color:'+(isLG?'#1A1A1A':'#94A3B8')+';font-weight:'+(isLG?700:400)+'">'+br+'</span></span>'}).join('');
      var chartRow='<tr><td style="padding:0;border:0"></td><td colspan="'+N+'" style="padding:8px 0;border:0">'+chartSvg+'</td></tr>';
      var legendRow='<tr><td style="padding:0;border:0"></td><td colspan="'+N+'" style="padding:4px 0 6px;border:0">'+legend+'</td></tr>';
      var thead='<tr style="border-top:1px solid #E8EDF2"><th style="text-align:left;padding:5px 6px;font-size:14px;color:#94A3B8;font-weight:600;border-bottom:1px solid #F1F5F9">Brand</th>'+ML.map(function(m){return'<th style="text-align:center;padding:5px 2px;font-size:14px;color:#94A3B8;font-weight:600;border-bottom:1px solid #F1F5F9">'+m+'</th>'}).join('')+'</tr>';
      var tbody=brands.map(function(br,i){var c=_bc(br,i);var isLG=br==='LG';var cells=ML.map(function(_,mi){var val=brandData[br][mi];return'<td style="text-align:center;padding:5px 2px;font-size:14px;color:'+(val!=null?(isLG?'#1A1A1A':'#475569'):'#CBD5E1')+';font-weight:'+(isLG?700:400)+';border-bottom:1px solid #F8FAFC;font-variant-numeric:tabular-nums">'+(val!=null?val.toFixed(1):'—')+'</td>'}).join('');return'<tr style="background:'+(isLG?'#FFF8F9':i%2===0?'#fff':'#FAFBFC')+'"><td style="padding:5px 6px;font-size:14px;font-weight:'+(isLG?700:500)+';color:'+c+';border-bottom:1px solid #F8FAFC;white-space:nowrap"><i style="display:inline-block;width:6px;height:6px;border-radius:50%;background:'+c+';margin-right:4px;vertical-align:0"></i>'+br+'</td>'+cells+'</tr>'}).join('');
      var st=_statusInfo(p.status);
      var lgLatest=brandData.LG?brandData.LG.filter(function(v){return v!=null}).pop():null;
      rows+='<div class="trend-row" style="margin-bottom:24px"><div style="display:flex;align-items:center;gap:8px;margin-bottom:10px"><span style="width:4px;height:22px;border-radius:4px;background:'+_RED+';flex-shrink:0"></span><span style="font-size:20px;font-weight:700;color:#1A1A1A">'+p.kr+'</span><span style="font-size:14px;font-weight:700;padding:2px 8px;border-radius:10px;background:'+st.bg+';color:'+st.color+';border:1px solid '+st.border+'">'+st.label+'</span>'+(lgLatest!=null?'<span style="font-size:16px;font-weight:700;color:#1A1A1A">LG '+lgLatest.toFixed(1)+'%</span>':'')+'</div><div style="border:1px solid #E8EDF2;border-radius:10px;overflow:hidden"><table style="width:100%;border-collapse:collapse;table-layout:fixed;font-family:'+_FONT+'">'+colgroup+'<tbody>'+chartRow+legendRow+thead+tbody+'</tbody></table></div></div>';
    });
    if(!rows)return;hasTrend=true;
    html+='<div class="bu-group" data-bu="'+b+'" style="margin-bottom:20px"><div class="bu-header"><span class="bu-label">'+b+'</span></div>'+rows+'</div>';
  });
  if(!hasTrend){container.innerHTML='<div class="section-card"><div class="section-body" style="text-align:center;padding:40px;color:#94A3B8;font-size:16px">'+(_lang==='en'?'No monthly data available':'월간 데이터가 없습니다')+'</div></div>';return}
  var title=_lang==='en'?'Monthly Visibility Trend':'월간 Visibility 트렌드';
  var cntyLabel=countries?(countries.length>1?' — '+countries.join(', ')+' avg':' — '+countries[0]):'';
  container.innerHTML='<div class="section-card"><div class="section-header"><div class="section-title">'+title+cntyLabel+'</div><span class="legend">Jan–Dec</span></div><div class="section-body">'+html+'</div></div>';
}

// ─── 제품 카드 스코어 국가 필터 업데이트 ───
// 미니 SVG 라인 차트 생성 (클라이언트용)
function _miniSvg(data,labels,w,h,color){
  if(!data||data.length<2)return'<svg width="'+w+'" height="'+h+'"></svg>';
  var pt=18,pr=10,pb=20,pl=10;var cw=w-pl-pr;var ch=h-pt-pb;
  var mn=Math.min.apply(null,data)-1;var mx=Math.max.apply(null,data)+1;var rng=mx-mn||1;
  var pts=data.map(function(v,i){return{x:pl+(i/(data.length-1))*cw,y:pt+(1-(v-mn)/rng)*ch,v:v}});
  var line=pts.map(function(p,i){return(i?'L':'M')+p.x.toFixed(1)+','+p.y.toFixed(1)}).join(' ');
  var area=line+' L'+pts[pts.length-1].x.toFixed(1)+','+(pt+ch)+' L'+pts[0].x.toFixed(1)+','+(pt+ch)+' Z';
  var id='ms'+Math.random().toString(36).slice(2,6);
  var s='<svg viewBox="0 0 '+w+' '+h+'" width="100%" height="'+h+'" xmlns="http://www.w3.org/2000/svg" style="display:block">';
  s+='<defs><linearGradient id="'+id+'" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="'+color+'" stop-opacity="0.25"/><stop offset="100%" stop-color="'+color+'" stop-opacity="0.03"/></linearGradient></defs>';
  s+='<path d="'+area+'" fill="url(#'+id+')"/>';
  s+='<path d="'+line+'" stroke="'+color+'" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>';
  pts.forEach(function(p){s+='<circle cx="'+p.x.toFixed(1)+'" cy="'+p.y.toFixed(1)+'" r="3.5" fill="#fff" stroke="'+color+'" stroke-width="2"/>'});
  pts.forEach(function(p){s+='<text x="'+p.x.toFixed(1)+'" y="'+Math.max(p.y-7,12)+'" text-anchor="middle" font-size="12" font-weight="700" fill="'+color+'" font-family="'+_FONT+'">'+p.v.toFixed(1)+'</text>'});
  pts.forEach(function(p,i){s+='<text x="'+p.x.toFixed(1)+'" y="'+(pt+ch+14)+'" text-anchor="middle" font-size="12" fill="#94A3B8" font-family="'+_FONT+'">'+(labels[i]||'')+'</text>'});
  s+='</svg>';return s;
}
function _miniSvgNullAware(data,labels,w,h,color){
  var pt=18,pr=10,pb=20,pl=10;var cw=w-pl-pr;var ch=h-pt-pb;
  var N=data.length;var divisor=N>1?N-1:1;
  var allX=data.map(function(_,i){return pl+(i/divisor)*cw});
  var valid=data.filter(function(v){return v!=null});
  var s='<svg viewBox="0 0 '+w+' '+h+'" width="100%" height="'+h+'" xmlns="http://www.w3.org/2000/svg" style="display:block">';
  if(valid.length){
    var mn=Math.min.apply(null,valid)-1;var mx=Math.max.apply(null,valid)+1;var rng=mx-mn||1;
    var pts=[];
    data.forEach(function(v,i){if(v!=null)pts.push({x:allX[i],y:pt+(1-(v-mn)/rng)*ch,v:v})});
    if(pts.length>=2){
      var id='mn'+Math.random().toString(36).slice(2,6);
      var line=pts.map(function(p,i){return(i?'L':'M')+p.x.toFixed(1)+','+p.y.toFixed(1)}).join(' ');
      var area=line+' L'+pts[pts.length-1].x.toFixed(1)+','+(pt+ch)+' L'+pts[0].x.toFixed(1)+','+(pt+ch)+' Z';
      s+='<defs><linearGradient id="'+id+'" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="'+color+'" stop-opacity="0.25"/><stop offset="100%" stop-color="'+color+'" stop-opacity="0.03"/></linearGradient></defs>';
      s+='<path d="'+area+'" fill="url(#'+id+')"/>';
      s+='<path d="'+line+'" stroke="'+color+'" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>';
    }
    pts.forEach(function(p){s+='<circle cx="'+p.x.toFixed(1)+'" cy="'+p.y.toFixed(1)+'" r="3.5" fill="#fff" stroke="'+color+'" stroke-width="2"/>'});
    pts.forEach(function(p){s+='<text x="'+p.x.toFixed(1)+'" y="'+Math.max(p.y-7,12)+'" text-anchor="middle" font-size="12" font-weight="700" fill="'+color+'" font-family="'+_FONT+'">'+p.v.toFixed(1)+'</text>'});
  }
  data.forEach(function(_,i){s+='<text x="'+allX[i].toFixed(1)+'" y="'+(pt+ch+14)+'" text-anchor="middle" font-size="12" fill="#94A3B8" font-family="'+_FONT+'">'+(labels[i]||'')+'</text>'});
  s+='</svg>';return s;
}
function _updateCard(card,score,compPct,weeklyData,wLabels,monthlyLG,mLabels){
  var scoreEl=card.querySelector('.prod-score');
  if(scoreEl)scoreEl.innerHTML=score.toFixed(1)+'<small>%</small>';
  var cc=compPct>=100?'#15803D':compPct>=80?'#D97706':'#BE123C';
  var compBar=card.querySelector('.prod-comp-bar');if(compBar){compBar.style.width=Math.min(compPct,120)+'%';compBar.style.background=cc}
  var compPctEl=card.querySelector('.prod-comp-pct');if(compPctEl){compPctEl.textContent=compPct+'%';compPctEl.style.color=cc}
  var status=compPct>=100?'lead':compPct>=80?'behind':'critical';
  var st=_statusInfo(status);
  var badge=card.querySelector('.prod-badge');
  if(badge){badge.style.background=st.bg;badge.style.color=st.color;badge.style.borderColor=st.border;badge.textContent=st.label}
  card.style.borderColor=st.border;
  var sparkColor=status==='critical'?'#BE123C':status==='behind'?'#D97706':'#15803D';
  // WoW 업데이트
  var wowEl=card.querySelector('.prod-wow');
  if(wowEl&&weeklyData&&weeklyData.length>=2){
    var wLast=weeklyData[weeklyData.length-1];var wPrev=weeklyData[weeklyData.length-2];
    var wd=+(wLast-wPrev).toFixed(1);
    var wArrow=wd>0?'▲':wd<0?'▼':'─';
    var wc=wd>0?'#22C55E':wd<0?'#EF4444':'#94A3B8';
    wowEl.style.color=wc;wowEl.textContent='WoW '+wArrow+' '+Math.abs(wd).toFixed(1)+'%p';
  }
  // 주간 미니 차트
  if(weeklyData&&weeklyData.length>=1){
    var chartWrap=card.querySelector('.trend-weekly');
    if(chartWrap)chartWrap.innerHTML=_miniSvg(weeklyData,wLabels,300,90,sparkColor);
  }
  // 월간 미니 차트 (4M: [null,null,null,score])
  if(mLabels&&mLabels.length){
    var m4=[null,null,null,monthlyLG!=null?monthlyLG:null];
    var mChartWrap=card.querySelector('.trend-monthly');
    if(mChartWrap)mChartWrap.innerHTML=_miniSvgNullAware(m4,mLabels,300,90,sparkColor);
  }
}
function _getWeeklyForCountries(prodId,countries){
  if(!countries||!countries.length)return (_weeklyAll[prodId]||{})['Total']||{};
  if(countries.length===1)return (_weeklyAll[prodId]||{})[countries[0]]||{};
  // 다중 국가 → LG 브랜드 평균
  var result=[];var maxLen=0;
  countries.forEach(function(c){var d=((_weeklyAll[prodId]||{})[c]||{}).LG||[];if(d.length>maxLen)maxLen=d.length});
  for(var i=0;i<maxLen;i++){var sum=0;var cnt=0;
    countries.forEach(function(c){var v=((_weeklyAll[prodId]||{})[c]||{}).LG;if(v&&v[i]!=null){sum+=v[i];cnt++}});
    result.push(cnt>0?sum/cnt:null);
  }
  return result;
}
function _get4MLabels(prod){
  var ML=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var mi=_parseMonth(prod.date||'');
  if(mi<0)return['M-3','M-2','M-1','M0'];
  return[0,1,2,3].map(function(i){return ML[(mi-3+i+12)%12]});
}
function updateProductScores(selCountry,selBU,selProd){
  var countries=selCountry.isAll?null:Object.keys(selCountry.vals);
  // 전체 국가 선택 시 → TTL 데이터 사용
  if(selCountry.isAll){
    document.querySelectorAll('.prod-card').forEach(function(card){
      var nameEl=card.querySelector('.prod-name');if(!nameEl)return;
      var prod=_products.find(function(p){return p.kr===nameEl.textContent||p.en===nameEl.textContent});if(!prod)return;
      var weekly=((_weeklyAll[prod.id]||{})['Total']||{}).LG||[];
      var mL=_get4MLabels(prod);
      var lgScore=prod.allScores?prod.allScores.LG:null;
      _updateCard(card,prod.score,prod.compRatio||100,weekly,_wLabels,lgScore,mL);
    });
    return;
  }
  if(!countries||!countries.length)return;
  // 국가 필터 적용 → productsCnty에서 평균 계산
  // 매칭 키 맵 구축: product → 여러 형태의 키
  var prodKeyMap={};
  _products.forEach(function(p){
    var keys=[(p.category||'').toUpperCase(),p.id.toUpperCase(),(p.kr||'').toUpperCase(),(p.en||'').toUpperCase()];
    keys.forEach(function(k){if(k)prodKeyMap[k]=p.id});
  });
  var avgByProdId={};
  _productsCnty.forEach(function(r){
    if(countries.indexOf(r.country||'')<0&&countries.indexOf(r.countryEn||'')<0)return;
    var rKey=(r.product||'').toUpperCase();
    var prodId=prodKeyMap[rKey];
    if(!prodId)return;
    if(!avgByProdId[prodId])avgByProdId[prodId]={scores:[],compScores:[]};
    avgByProdId[prodId].scores.push(r.score||0);
    avgByProdId[prodId].compScores.push(r.compScore||0);
  });
  document.querySelectorAll('.prod-card').forEach(function(card){
    var nameEl=card.querySelector('.prod-name');if(!nameEl)return;
    var prod=_products.find(function(p){return p.kr===nameEl.textContent||p.en===nameEl.textContent});if(!prod)return;
    var avg=avgByProdId[prod.id];
    if(!avg||!avg.scores.length)return;
    var score=+(avg.scores.reduce(function(s,v){return s+v},0)/avg.scores.length).toFixed(1);
    var comp=+(avg.compScores.reduce(function(s,v){return s+v},0)/avg.compScores.length).toFixed(1);
    var compPct=comp>0?Math.round((score/comp)*100):100;
    var weekly=_getWeeklyForCountries(prod.id,countries);
    var mL=_get4MLabels(prod);
    _updateCard(card,score,compPct,Array.isArray(weekly)?weekly:(weekly.LG||[]),_wLabels,score,mL);
  });
}

// ─── Hero / Executive Summary 동적 업데이트 (체크박스 기반) ───
function updateHeroFromCheckboxes(){
  var selBU=getCheckedValues('bu');
  var selProd=getCheckedValues('product');
  var selRegion=getCheckedValues('region');
  var selCountry=getCheckedValues('country');
  var hero=document.getElementById('hero-section');if(!hero)return;
  var ctx=document.getElementById('hero-ctx');
  var allL=_lang==='en'?'All':'전체';
  // Context badges
  var badges='<span class="hero-ctx-badge">'+_meta.period+'</span>';
  var buLabel=selBU.isAll?(allL+(_lang==='en'?' Divisions':' 본부')):Object.keys(selBU.vals).join(', ');
  badges+='<span class="hero-ctx-badge">'+buLabel+'</span>';
  var prodLabel=selProd.isAll?(allL+(_lang==='en'?' Products':' 제품')):_products.filter(function(p){return selProd.vals[p.id]}).map(function(p){return p.kr}).join(', ');
  badges+='<span class="hero-ctx-badge">'+prodLabel+'</span>';
  var cntyLabel=selCountry.isAll?(allL+(_lang==='en'?' Countries':' 국가')):Object.keys(selCountry.vals).join(', ');
  badges+='<span class="hero-ctx-badge">'+cntyLabel+'</span>';
  if(ctx)ctx.innerHTML=badges;
  // Calculate filtered scores
  var result=calcFilteredDataCB(selBU,selProd,selCountry);
  if(!result)return;
  var sc=result.score;var comp=result.vsComp;var compName='SAMSUNG';
  var d=+(sc-(result.prev||sc)).toFixed(1);
  var gap=+(sc-comp).toFixed(1);
  var dArrow=d>0?'▲':d<0?'▼':'─';
  var dColor=d>0?'#22C55E':d<0?'#EF4444':'#94A3B8';
  var scoreRow=hero.querySelector('.hero-score-row');
  if(scoreRow)scoreRow.innerHTML='<span class="hero-score">'+sc.toFixed(1)+'</span><span class="hero-pct">%</span><span class="hero-delta" style="color:'+dColor+'">'+dArrow+' '+Math.abs(d).toFixed(1)+'%p</span><span class="hero-mom">MoM</span>';
  var tracks=hero.querySelectorAll('.hero-gauge-track');
  if(tracks[0]){var bar=tracks[0].querySelector('.hero-gauge-bar');if(bar)bar.style.width=Math.min(sc,100)+'%'}
  if(tracks[1]){var bar2=tracks[1].querySelector('.hero-gauge-bar');if(bar2)bar2.style.width=Math.min(comp,100)+'%'}
  var legend=hero.querySelector('.hero-legend');
  if(legend)legend.innerHTML='<span><i style="background:'+_RED+'"></i> LG '+sc.toFixed(1)+'%</span>'+(comp>0?'<span><i style="background:'+_COMP+'"></i> '+compName+' '+comp.toFixed(1)+'%</span>':'')+'<span><i style="background:#475569"></i> prev '+(result.prev||sc).toFixed(1)+'%</span>';
  var compDiv=hero.querySelector('.hero-comp');
  if(compDiv&&comp>0){compDiv.innerHTML='<span class="hero-comp-label">'+compName.toUpperCase()+'</span> <span class="hero-comp-score">'+comp.toFixed(1)+'%</span><span class="hero-comp-gap" style="color:'+(gap>=0?'#22C55E':'#EF4444')+'">Gap '+(gap>=0?'+':'')+gap.toFixed(1)+'%p</span>'}
}
function _getSamsungScore(item){
  if(item.allScores){var s=item.allScores.SAMSUNG||item.allScores.Samsung||item.allScores.Samsumg;if(s!=null)return s}
  return item.compScore||item.vsComp||0;
}
function calcFilteredDataCB(selBU,selProd,selCountry){
  var selectedProdNames={};
  _products.forEach(function(p){if(selProd.isAll||selProd.vals[p.id]){selectedProdNames[p.kr]=true;if(p.category)selectedProdNames[p.category]=true}});
  // If specific countries selected → use productsCnty
  if(!selCountry.isAll){
    var cntyData=_productsCnty.filter(function(r){return selCountry.vals[r.country]});
    if(!selBU.isAll)cntyData=cntyData.filter(function(r){return _products.some(function(p){return(p.kr===r.product||p.category===r.product)&&selBU.vals[p.bu]})});
    if(!selProd.isAll)cntyData=cntyData.filter(function(r){return selectedProdNames[r.product]});
    if(!cntyData.length)return _total;
    var lgAvg=cntyData.reduce(function(s,r){return s+r.score},0)/cntyData.length;
    var ssAvg=cntyData.reduce(function(s,r){return s+_getSamsungScore(r)},0)/cntyData.length;
    return{score:+lgAvg.toFixed(1),prev:+lgAvg.toFixed(1),vsComp:+ssAvg.toFixed(1),compName:'SAMSUNG'}
  }
  // Specific products
  if(!selProd.isAll){
    var fProds=_products.filter(function(p){return selProd.vals[p.id]&&(selBU.isAll||selBU.vals[p.bu])});
    if(!fProds.length)return _total;
    var lgA=fProds.reduce(function(s,p){return s+p.score},0)/fProds.length;
    var ssA=fProds.reduce(function(s,p){return s+_getSamsungScore(p)},0)/fProds.length;
    return{score:+lgA.toFixed(1),prev:+lgA.toFixed(1),vsComp:+ssA.toFixed(1),compName:'SAMSUNG'}
  }
  // Specific BU
  if(!selBU.isAll){
    var buProds=_products.filter(function(p){return selBU.vals[p.bu]});
    if(!buProds.length)return _total;
    var lgA2=buProds.reduce(function(s,p){return s+p.score},0)/buProds.length;
    var cA2=buProds.reduce(function(s,p){return s+_getSamsungScore(p)},0)/buProds.length;
    return{score:+lgA2.toFixed(1),prev:+lgA2.toFixed(1),vsComp:+cA2.toFixed(1),compName:'SAMSUNG'}
  }
  return _total;
}
</script>
</body>
</html>`
}
