// N5 — /admin/observability — insight_runs.jsonl 시각화
// JSON API: GET /api/observability/runs
// HTML 페이지: GET /admin/observability
import { Router } from 'express'
import { readInsightRuns, summarizeInsightRuns } from '../lib/insight-runs.js'

export const observabilityRouter = Router()

observabilityRouter.get('/api/observability/runs', (req, res) => {
  const limit = Math.max(1, Math.min(5000, parseInt(req.query.limit) || 1000))
  const runs = readInsightRuns({ limit })
  const summary = summarizeInsightRuns(runs)
  // 시계열 — 최근 24시간(시간별)·최근 30일(일별) 카운트·실패율
  const now = Date.now()
  const HOUR = 3600 * 1000, DAY = 24 * HOUR
  const hourly = Array.from({ length: 24 }, (_, i) => ({
    bucket: i, ts: now - (23 - i) * HOUR, total: 0, fail: 0, costUsd: 0,
  }))
  const daily = Array.from({ length: 30 }, (_, i) => ({
    bucket: i, ts: now - (29 - i) * DAY, total: 0, fail: 0, costUsd: 0,
  }))
  for (const r of runs) {
    const hAge = (now - r.ts) / HOUR
    if (hAge >= 0 && hAge < 24) {
      const idx = 23 - Math.floor(hAge)
      hourly[idx].total++
      if (!r.ok) hourly[idx].fail++
      hourly[idx].costUsd += r.costUsd || 0
    }
    const dAge = (now - r.ts) / DAY
    if (dAge >= 0 && dAge < 30) {
      const idx = 29 - Math.floor(dAge)
      daily[idx].total++
      if (!r.ok) daily[idx].fail++
      daily[idx].costUsd += r.costUsd || 0
    }
  }
  res.json({ ok: true, summary, hourly, daily })
})

observabilityRouter.get('/admin/observability', (req, res) => {
  res.set('Content-Type', 'text/html; charset=utf-8')
  res.send(`<!DOCTYPE html><html lang="ko"><head><meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Observability — AI 인사이트 실행 이력</title>
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{background:#0F172A;color:#E2E8F0;font-family:'LG Smart','Arial Narrow',Arial,sans-serif;padding:28px 32px;line-height:1.5}
.top{display:flex;align-items:center;justify-content:space-between;margin-bottom:18px;flex-wrap:wrap;gap:12px}
.back{color:#CF0652;text-decoration:none;font-size:13px}
h1{font-size:22px;color:#F8FAFC;margin-bottom:4px}
.sub{font-size:13px;color:#64748B;margin-bottom:18px}
.kpis{display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:12px;margin-bottom:24px}
.card{background:#1E293B;border:1px solid #334155;border-radius:10px;padding:14px 18px}
.card .label{font-size:11px;color:#94A3B8;text-transform:uppercase;letter-spacing:1px;margin-bottom:6px}
.card .value{font-size:24px;font-weight:700;color:#F8FAFC}
.card .delta{font-size:12px;color:#64748B;margin-top:4px}
.section{background:#1E293B;border:1px solid #334155;border-radius:12px;padding:20px 24px;margin-bottom:18px}
.section h2{font-size:15px;font-weight:700;color:#F8FAFC;margin-bottom:14px}
.row{display:grid;grid-template-columns:1fr 1fr;gap:18px}
@media (max-width:760px){.row{grid-template-columns:1fr}}
table{width:100%;border-collapse:collapse;font-size:12px}
th{text-align:left;color:#64748B;font-weight:600;padding:8px 10px;border-bottom:1px solid #334155}
td{padding:8px 10px;border-bottom:1px solid rgba(51,65,85,.5);color:#CBD5E1}
.badge{display:inline-block;padding:2px 8px;border-radius:4px;font-size:11px;font-weight:600}
.badge-fail{background:#3F1D1D;color:#F87171;border:1px solid #7F1D1D}
.badge-ok{background:#0F2A1F;color:#4ADE80;border:1px solid #15803D}
.empty{padding:36px;text-align:center;color:#64748B;font-size:13px}
.muted{color:#64748B;font-size:11px}
.refresh{background:#1E293B;border:1px solid #334155;color:#E2E8F0;padding:8px 16px;border-radius:8px;font-size:12px;cursor:pointer;font-family:inherit}
.refresh:hover{border-color:#CF0652}
svg.chart{width:100%;height:120px;display:block}
</style></head><body>
<div class="top">
  <a class="back" href="/admin/">← 관리자</a>
  <button class="refresh" onclick="load()">↻ 새로고침</button>
</div>
<h1>AI 인사이트 실행 이력</h1>
<p class="sub">최근 1,000건의 <code>/api/generate-insight</code> 호출 — 토큰·비용·지연·실패 분포</p>
<div id="root"><p class="empty">로딩 중…</p></div>
<script>
function esc(s){var d=document.createElement('div');d.textContent=String(s==null?'':s);return d.innerHTML}
function fmt(n){return Number(n||0).toLocaleString('en-US')}
function fmtCost(n){return '$'+(Number(n||0)).toFixed(4)}
function fmtTime(ts){return new Date(ts).toLocaleString('ko-KR',{year:'2-digit',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit'})}

function chartBars(buckets, key, color, height){
  height = height || 100
  if(!buckets.length) return ''
  var max = Math.max(1, Math.max.apply(null, buckets.map(function(b){return b[key]||0})))
  var w = 100 / buckets.length
  var bars = buckets.map(function(b, i){
    var v = b[key] || 0
    var h = (v / max) * (height - 20)
    var x = i * w
    return '<rect x="'+x.toFixed(2)+'%" y="'+(height - h - 8)+'" width="'+(w-0.4).toFixed(2)+'%" height="'+h.toFixed(1)+'" fill="'+color+'" opacity="0.85"/>'
  }).join('')
  return '<svg class="chart" viewBox="0 0 100 '+height+'" preserveAspectRatio="none">'+bars+'</svg>'
}

function renderKpi(s){
  return '<div class="kpis">'
    +'<div class="card"><div class="label">총 호출</div><div class="value">'+fmt(s.count)+'</div><div class="delta">성공 '+fmt(s.ok)+' / 실패 '+fmt(s.fail)+'</div></div>'
    +'<div class="card"><div class="label">성공률</div><div class="value">'+s.successRate+'%</div></div>'
    +'<div class="card"><div class="label">누적 비용</div><div class="value">'+fmtCost(s.totalCostUsd)+'</div><div class="delta">'+fmt(s.totalInputTokens)+' in / '+fmt(s.totalOutputTokens)+' out</div></div>'
    +'<div class="card"><div class="label">지연 (avg / p95)</div><div class="value">'+fmt(s.avgLatencyMs)+' ms</div><div class="delta">p95 '+fmt(s.p95LatencyMs)+' ms</div></div>'
    +'</div>'
}

function renderSection(title, body){
  return '<div class="section"><h2>'+esc(title)+'</h2>'+body+'</div>'
}

function renderDist(map, title){
  var entries = Object.entries(map||{}).sort(function(a,b){return b[1]-a[1]})
  if(!entries.length) return ''
  var rows = entries.map(function(e){
    return '<tr><td>'+esc(e[0])+'</td><td style="text-align:right">'+fmt(e[1])+'</td></tr>'
  }).join('')
  return renderSection(title, '<table><thead><tr><th>'+esc(title)+'</th><th style="text-align:right">횟수</th></tr></thead><tbody>'+rows+'</tbody></table>')
}

function renderFailures(fails){
  if(!fails.length) return renderSection('최근 실패 (없음)', '<p class="muted">실패한 호출이 없습니다.</p>')
  var rows = fails.map(function(f){
    return '<tr>'
      +'<td>'+esc(fmtTime(f.ts))+'</td>'
      +'<td>'+esc(f.type)+'</td>'
      +'<td><span class="badge badge-fail">'+esc(f.kind||'error')+'</span>'+(f.reason?' <span class="muted">'+esc(f.reason)+'</span>':'')+'</td>'
      +'<td>'+esc(f.latencyMs)+' ms</td>'
      +'<td class="muted">'+esc((f.error||'').slice(0,80))+'</td>'
      +'</tr>'
  }).join('')
  return renderSection('최근 실패 (최대 10건)', '<table><thead><tr><th>시각</th><th>type</th><th>kind</th><th>지연</th><th>메시지</th></tr></thead><tbody>'+rows+'</tbody></table>')
}

async function load(){
  var root = document.getElementById('root')
  root.innerHTML = '<p class="empty">로딩 중…</p>'
  var r = await fetch('/api/observability/runs?limit=1000', {headers: {'X-Requested-With':'XMLHttpRequest'}})
  if(r.status===401){location.href='/admin/login';return}
  if(!r.ok){root.innerHTML='<p class="empty">로드 실패: '+r.status+'</p>';return}
  var j = await r.json()
  var s = j.summary
  if(!s.count){
    root.innerHTML = '<div class="section"><p class="empty">아직 인사이트 호출 이력이 없습니다.<br>편집 페이지에서 AI 인사이트를 한 번 생성한 뒤 다시 확인하세요.</p></div>'
    return
  }
  var html = renderKpi(s)
    + '<div class="row">'
      + renderSection('최근 24시간 호출 수 (시간별)', chartBars(j.hourly, 'total', '#CF0652', 120))
      + renderSection('최근 30일 비용 (일별 USD)', chartBars(j.daily, 'costUsd', '#22C55E', 120))
    + '</div>'
    + '<div class="row">'
      + renderDist(s.byType, '리포트 타입')
      + renderDist(s.byKind, '실패 분류 (kind)')
    + '</div>'
    + (Object.keys(s.byModel||{}).length>1 ? renderDist(s.byModel, '모델 분포') : '')
    + renderFailures(s.recentFailures)
  root.innerHTML = html
}
load()
</script></body></html>`)
})
