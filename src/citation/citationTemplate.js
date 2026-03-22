// ─── GEO Citation 대시보드 — Citation 전용 독립 시각화 ───────────────────────
// dashboardTemplate.js의 Citation 섹션만 추출하여 독립 렌더링
const FONT = "'LG Smart','Arial Narrow',Arial,sans-serif"
const RED = '#CF0652'
const COMP = '#94A3B8'

const T = {
  ko: {
    citationTitle: '도메인 카테고리별 Citation 현황',
    citDomainTitle: '도메인별 Citation 현황',
    dotcomTitle: '닷컴 Citation (경쟁사대비)',
    insight: 'INSIGHT', howToRead: 'HOW TO READ',
    dotcomLgWin: 'LG 우위', dotcomSsWin: 'SS 우위', dotcomNone: '없음',
    dotcomTTL: 'TTL (전체)', dotcomLgOnly: '— (LG only)',
    citLegend: 'Citation Score 건수 (비중)',
    footer: '해외영업본부 D2C해외영업그룹 D2C마케팅담당 D2C디지털마케팅팀',
  },
  en: {
    citationTitle: 'Citation by Domain Category',
    citDomainTitle: 'Citation by Domain',
    dotcomTitle: 'Dotcom Citation (vs Competitor)',
    insight: 'INSIGHT', howToRead: 'HOW TO READ',
    dotcomLgWin: 'LG Leads', dotcomSsWin: 'SS Leads', dotcomNone: 'None',
    dotcomTTL: 'TTL (Total)', dotcomLgOnly: '— (LG only)',
    citLegend: 'Citation Score Count (Ratio)',
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
function citDomainSectionHtml(citationsCnty, meta, t, citations, lang) {
  if (!citationsCnty || !citationsCnty.length) return ''
  const topN = meta.citDomainTopN || 10
  const cntyNames = ['TTL', ...([...new Set(citationsCnty.map(r => r.cnty))].filter(c => c !== 'TTL'))]

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

  const chips = cntyNames.map(c =>
    `<button class="filter-chip ${c === 'TTL' ? 'active' : ''}" data-cit-cnty-val="${c}" onclick="switchCitCnty(this)">${c === 'TTL' ? t.dotcomTTL.replace(/ \(.*/, '') || 'TTL' : c}</button>`
  ).join('')

  return `<div class="section-card" id="cit-domain-section">
    <div class="section-header">
      <div class="section-title">${t.citDomainTitle}</div>
      <span class="legend">Top ${topN} Domains</span>
    </div>
    ${insightHtml(meta.citDomainInsight, meta.showCitDomainInsight, meta.citDomainHowToRead, meta.showCitDomainHowToRead, t)}
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


// ═══════════════════════════════════════════════════════════════════════════
// Citation 전용 HTML 생성
// ═══════════════════════════════════════════════════════════════════════════
// ─── Region 매핑 ────────────────────────────────────────────────────────────
const REGIONS = {
  NA:    { countries: ['US', 'CA'] },
  EU:    { countries: ['UK', 'DE', 'ES'] },
  LATAM: { countries: ['BR', 'MX'] },
  APAC:  { countries: ['IN', 'AU', 'VN'] },
}

export function generateCitationHTML(meta, _total, _products, citations, dotcom, lang, _productsCnty, citationsCnty) {
  const t = T[lang] || T.ko

  const content = [
    meta.showCitations !== false ? citationSectionHtml(citations, meta, t) : '',
    (meta.showCitDomain !== false || meta.showCitCnty !== false) ? citDomainSectionHtml(citationsCnty, meta, t, citations, lang) : '',
    meta.showDotcom !== false ? dotcomSectionHtml(dotcom, meta, t) : '',
  ].join('')

  // 국가 목록 추출 (citationsCnty에서)
  const countries = new Set()
  if (citationsCnty) citationsCnty.forEach(r => { if (r.cnty && r.cnty !== 'TTL') countries.add(r.cnty) })
  const countryList = [...countries].sort()

  const allLabel = lang === 'en' ? 'All' : '전체'
  const regionCheckboxes = Object.entries(REGIONS).map(([k]) =>
    `<label class="fl-chk-label"><input type="checkbox" class="fl-chk" data-filter="region" value="${k}" checked onchange="onRegionChange('${k}')"><span>${k}</span></label>`
  ).join('')
  const countryCheckboxes = countryList.map(c =>
    `<label class="fl-chk-label"><input type="checkbox" class="fl-chk" data-filter="country" value="${c}" checked onchange="onFilterChange()"><span>${c}</span></label>`
  ).join('')

  const filterLayerHtml = `<div class="filter-layer" id="filter-layer">
    <div class="fl-row">
      <div class="fl-group">
        <span class="fl-label">${lang === 'en' ? 'Period' : '기간'}</span>
        <span class="fl-badge">${meta.period || '—'}</span>
      </div>
      <div class="fl-divider"></div>
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
.cit-header-title{font-size:16px;font-weight:700;color:#fff;display:flex;align-items:center;gap:10px}
.cit-header-title .logo{width:28px;height:28px;border-radius:7px;background:${RED};display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900;color:#fff}
.cit-header-meta{display:flex;align-items:center;gap:12px}
.cit-header-badge{font-size:12px;font-weight:600;color:#FFB0C0;padding:4px 12px;border-radius:6px;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.06)}
/* ── 필터 레이어 ── */
.filter-layer{position:sticky;top:53px;z-index:90;background:#fff;border-bottom:2px solid #E8EDF2;padding:8px 40px}
.fl-row{display:flex;align-items:center;gap:14px;flex-wrap:wrap;padding:4px 0}
.fl-group{display:flex;align-items:center;gap:6px;flex-wrap:wrap}
.fl-label{font-size:13px;font-weight:700;color:#64748B;white-space:nowrap;margin-right:4px}
.fl-badge{font-size:13px;font-weight:600;color:#1A1A1A;padding:3px 10px;border-radius:6px;background:#F1F5F9}
.fl-chk-label{display:inline-flex;align-items:center;gap:3px;padding:3px 8px;border-radius:6px;font-size:12px;font-weight:600;color:#475569;cursor:pointer;transition:all .15s;background:#F8FAFC;border:1px solid #E2E8F0;white-space:nowrap;user-select:none}
.fl-chk-label:hover{border-color:#94A3B8}
.fl-chk-label:has(input:checked){background:#0F172A;color:#fff;border-color:#0F172A}
.fl-chk{width:12px;height:12px;margin:0;cursor:pointer;accent-color:${RED}}
.fl-all-label{font-weight:700}
.fl-divider{width:1px;height:24px;background:#E8EDF2;flex-shrink:0;align-self:center}
.dash-container{max-width:1400px;margin:0 auto;padding:28px 40px}
/* ── 섹션 카드 ── */
.section-card{background:#fff;border-radius:16px;border:1px solid #E8EDF2;margin-bottom:24px;overflow:hidden}
.section-header{padding:20px 28px;background:#FAFBFC;border-bottom:1px solid #F1F5F9;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px}
.section-title{font-size:17px;font-weight:700;color:#1A1A1A;display:flex;align-items:center;gap:8px}
.section-title::before{content:'';width:3px;height:20px;background:${RED};border-radius:2px;flex-shrink:0}
.section-body{padding:24px 28px}
.legend{font-size:12px;color:#94A3B8;display:flex;align-items:center;gap:4px;flex-wrap:wrap}
.legend i{display:inline-block;width:8px;height:8px;border-radius:50%;margin:0 2px 0 8px;vertical-align:0}
/* ── Insight / HowToRead ── */
.insight-box{margin:0 28px;padding:12px 16px;background:#FFF4F7;border:1px solid #F5CCD8;border-radius:8px;margin-top:12px}
.insight-label{display:block;font-size:12px;font-weight:700;color:${RED};margin-bottom:4px}
.insight-text{font-size:12px;color:#1A1A1A;line-height:1.8}
.howto-box{margin:0 28px;padding:12px 16px;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:8px;margin-top:8px}
.howto-label{display:block;font-size:12px;font-weight:700;color:#64748B;margin-bottom:4px}
.howto-text{font-size:12px;color:#475569;line-height:1.8}
/* ── 필터 칩 ── */
.cnty-filters{padding:12px 28px 0;display:flex;flex-wrap:wrap;gap:10px}
.filter-group{display:flex;align-items:center;gap:6px;flex-wrap:wrap}
.filter-label{font-size:12px;font-weight:700;color:#64748B;margin-right:4px;white-space:nowrap}
.filter-chip{padding:4px 12px;border-radius:14px;border:1px solid #E2E8F0;font-size:12px;font-weight:600;font-family:${FONT};cursor:pointer;background:#fff;color:#64748B;transition:all .15s}
.filter-chip.active{background:#0F172A;color:#fff;border-color:#0F172A}
.filter-chip:hover{border-color:#94A3B8}
/* ── Citation ── */
.cit-row{display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid #F8FAFC}
.cit-row:last-child{border-bottom:none}
.cit-rank{width:24px;height:24px;border-radius:5px;background:#F1F5F9;font-size:12px;font-weight:800;color:#94A3B8;display:flex;align-items:center;justify-content:center;flex-shrink:0}
.cit-rank.top{background:${RED};color:#fff}
.cit-info{min-width:140px;flex-shrink:0}
.cit-source{display:block;font-size:13px;font-weight:700;color:#1A1A1A}
.cit-cat{font-size:12px;color:#94A3B8;background:#F8FAFC;border-radius:4px;padding:1px 5px}
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
.dc-bar.ss{background:${COMP}}
.dc-val{font-size:13px;font-weight:700;color:#94A3B8;white-space:nowrap}
.dc-val.win{color:#1A1A1A}
.dc-val.muted{color:#CBD5E1;font-weight:400}
.dc-badge{font-size:12px;font-weight:800;padding:1px 6px;border-radius:3px}
.dc-badge.lg{background:#FFF1F2;color:${RED}}
.dc-badge.ss{background:#F1F5F9;color:#64748B}
.dc-summary{display:flex;flex-wrap:wrap;gap:8px;margin-top:16px;padding-top:16px;border-top:1px solid #E8EDF2;align-items:center}
.dc-sum-item{font-size:13px;font-weight:700;color:#fff;padding:3px 10px;border-radius:5px}
.dc-sum-item.lg{background:${RED}}
.dc-sum-item.ss{background:${COMP}}
.dc-sum-list{font-size:13px;color:#64748B;margin-right:16px}
/* ── Footer ── */
.dash-footer{background:#1A1A1A;padding:16px 40px;display:flex;justify-content:space-between;align-items:center;margin-top:auto}
.dash-footer span{font-size:12px;color:#94A3B8}
.dash-footer strong{color:#fff;font-weight:700}
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
var _REGIONS={NA:['US','CA'],EU:['UK','DE','ES'],LATAM:['BR','MX'],APAC:['IN','AU','VN']};
function switchCitCnty(btn){
  var sec=btn.closest('.section-card')||document.getElementById('cit-domain-section');
  sec.querySelectorAll('.filter-chip').forEach(function(c){c.classList.remove('active')});
  btn.classList.add('active');
  var val=btn.getAttribute('data-cit-cnty-val');
  sec.querySelectorAll('.cit-cnty-panel').forEach(function(p){
    p.style.display=p.getAttribute('data-cit-cnty')===val?'':'none';
  });
}
function getCheckedValues(filterName){
  var vals={};var total=0;var checked=0;
  document.querySelectorAll('#filter-layer .fl-chk[data-filter="'+filterName+'"]').forEach(function(c){
    total++;if(c.checked){vals[c.value]=true;checked++}
  });
  return{vals:vals,total:total,checked:checked,isAll:total===checked};
}
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
function onFilterChange(){
  updateAllCheckbox('region');
  updateAllCheckbox('country');
  filterCitationByCountry(getCheckedValues('country'));
}
function filterCitationByCountry(selCountry){
  var sec=document.getElementById('cit-domain-section');if(!sec)return;
  var chips=sec.querySelectorAll('.filter-chip[data-cit-cnty-val]');
  if(!chips.length)return;
  var selKeys=selCountry.isAll?[]:Object.keys(selCountry.vals);
  if(selCountry.isAll||selKeys.length!==1){
    chips.forEach(function(c){c.classList.remove('active')});
    var ttlChip=sec.querySelector('.filter-chip[data-cit-cnty-val="TTL"]');
    if(ttlChip)ttlChip.classList.add('active');
    sec.querySelectorAll('.cit-cnty-panel').forEach(function(p){
      p.style.display=p.getAttribute('data-cit-cnty')==='TTL'?'':'none';
    });
    chips.forEach(function(c){
      var v=c.getAttribute('data-cit-cnty-val');
      if(selCountry.isAll){c.style.display='';return}
      c.style.display=(v==='TTL'||selCountry.vals[v])?'':'none';
    });
  } else {
    var cnty=selKeys[0];
    var target=sec.querySelector('.filter-chip[data-cit-cnty-val="'+cnty+'"]');
    chips.forEach(function(c){
      c.classList.remove('active');
      var v=c.getAttribute('data-cit-cnty-val');
      c.style.display=(v==='TTL'||v===cnty)?'':'none';
    });
    if(target){
      target.classList.add('active');
      sec.querySelectorAll('.cit-cnty-panel').forEach(function(p){
        p.style.display=p.getAttribute('data-cit-cnty')===cnty?'':'none';
      });
    } else {
      var ttl=sec.querySelector('.filter-chip[data-cit-cnty-val="TTL"]');
      if(ttl)ttl.classList.add('active');
      sec.querySelectorAll('.cit-cnty-panel').forEach(function(p){
        p.style.display=p.getAttribute('data-cit-cnty')==='TTL'?'':'none';
      });
    }
  }
}
</script>
</body>
</html>`
}
