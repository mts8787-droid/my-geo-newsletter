import { generateEmailHTML } from '../emailTemplate.js'

function extractBody(html) {
  const m = html.match(/<body[^>]*>([\s\S]*)<\/body>/i)
  return m ? m[1] : html
}

/**
 * Generate a standalone dashboard HTML page with 3 tabs:
 * Visibility | Citation | Progress Tracker
 */
export function generateDashboardHTML(meta, total, products, citations, dotcom, lang, productsCnty, citationsCnty) {
  const visMeta = { ...meta, showCitations: false, showCitDomain: false, showCitCnty: false, showDotcom: false }
  const citMeta = { ...meta, showTotal: false, showProducts: false, showCnty: false }

  const visHtml = extractBody(generateEmailHTML(visMeta, total, products, [], {}, lang, productsCnty, []))
  const citHtml = extractBody(generateEmailHTML(citMeta, total, [], citations, dotcom, lang, [], citationsCnty))

  const FONT = "'LG Smart','Arial Narrow',Arial,sans-serif"
  const RED = '#CF0652'

  return `<!DOCTYPE html>
<html lang="${lang === 'en' ? 'en' : 'ko'}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${meta.title || 'GEO KPI Dashboard'} — ${meta.period || ''}</title>
<link href="https://fonts.cdnfonts.com/css/lg-smart" rel="stylesheet"/>
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{background:#F1F5F9;font-family:${FONT}}
.tab-bar{position:sticky;top:0;z-index:100;background:#0F172A;display:flex;align-items:center;justify-content:center;gap:4px;padding:10px 16px;border-bottom:1px solid #1E293B}
.tab-btn{padding:8px 20px;border-radius:8px;border:none;font-size:13px;font-weight:600;font-family:${FONT};cursor:pointer;transition:all .15s;color:#94A3B8;background:transparent}
.tab-btn:hover{color:#E2E8F0}
.tab-btn.active{background:${RED};color:#fff}
.tab-panel{display:none}
.tab-panel.active{display:block}
.progress-placeholder{min-height:60vh;display:flex;align-items:center;justify-content:center;background:#F1F5F9}
.progress-placeholder .inner{text-align:center;padding:40px}
.progress-placeholder .icon{font-size:48px;margin-bottom:16px;opacity:.3}
.progress-placeholder h2{font-size:18px;font-weight:700;color:#1E293B;font-family:${FONT};margin-bottom:8px}
.progress-placeholder p{font-size:14px;color:#64748B;font-family:${FONT}}
</style>
</head>
<body>
<div class="tab-bar">
  <button class="tab-btn active" onclick="switchTab('visibility')">Visibility</button>
  <button class="tab-btn" onclick="switchTab('citation')">Citation</button>
  <button class="tab-btn" onclick="switchTab('progress')">Progress Tracker</button>
</div>
<div id="tab-visibility" class="tab-panel active">
${visHtml}
</div>
<div id="tab-citation" class="tab-panel">
${citHtml}
</div>
<div id="tab-progress" class="tab-panel">
  <div class="progress-placeholder">
    <div class="inner">
      <div class="icon">📊</div>
      <h2>Progress Tracker</h2>
      <p>${lang === 'en' ? 'Coming in April update' : '4월 업데이트 예정'}</p>
    </div>
  </div>
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
</script>
</body>
</html>`
}
