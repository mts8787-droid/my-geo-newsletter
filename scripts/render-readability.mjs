// Readability (GEO 어딧) 대시보드 HTML 생성기 — 서버 렌더 (정적, 인라인 client JS 없음)
// 입력: aggregate-readability.mjs 가 만든 스냅샷 + 인덱스 (data/readability/*.json)
// 라우트 routes/readability.js 가 요청 시 최신 스냅샷을 읽어 본 함수에 주입.
//
// 4 뷰: (1) 국가별 종합 점수 비교  (2) 카테고리 4분할 상세 (51 체크 pass rate)
//       (3) 페이지타입별 점수      (4) AI봇 차단 / CSR·SSR tier 분포
//
// 디자인: theme.js shell (dark/light) + design.md 토큰. 필터 없음 → 순수 정적.

import { themeStyle, themeToggleButton } from '../lib/theme.js'

const CATEGORIES = ['performance', 'accessibility', 'seo', 'ai_readiness']

// cc(소문자) → 표시명
const CC_NAME = {
  us: 'USA', ca: 'Canada', uk: 'UK', gb: 'UK', de: 'Germany', es: 'Spain',
  fr: 'France', it: 'Italy', br: 'Brazil', mx: 'Mexico', in: 'India',
  au: 'Australia', vn: 'Vietnam', jp: 'Japan', kr: 'Korea', cn: 'China',
}

function escHtml(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

// 점수(0~100) → 색 (lead/behind/critical 톤)
function scoreColor(v) {
  if (v == null) return '#94A3B8'
  if (v >= 70) return '#15803D'
  if (v >= 50) return '#B45309'
  return '#BE123C'
}
// pass rate(0~100) → 색
function rateColor(v) {
  if (v == null) return '#94A3B8'
  if (v >= 80) return '#15803D'
  if (v >= 50) return '#B45309'
  return '#BE123C'
}

// 가로 막대 1줄
function barRow(label, value, max, color, rightText) {
  const w = max > 0 ? Math.max(0, Math.min(100, (value / max) * 100)).toFixed(1) : 0
  return `<div class="bar-row">
    <span class="bar-label">${escHtml(label)}</span>
    <div class="bar-track"><div class="bar-fill" style="width:${w}%;background:${color}"></div></div>
    <span class="bar-value" style="color:${color}">${escHtml(rightText)}</span>
  </div>`
}

// ─── 뷰 1: 국가별 종합 점수 비교 ─────────────────────────────────────────────
function viewCountryComparison(snap) {
  const o = snap.overall
  const gradeEntries = Object.entries(o.grades || {}).sort((a, b) => b[1] - a[1])
  const gradeChips = gradeEntries.map(([g, n]) =>
    `<span class="chip">${escHtml(g)} <strong>${n.toLocaleString()}</strong></span>`).join('')

  const rows = Object.entries(snap.countries)
    .map(([cc, v]) => ({ cc, name: CC_NAME[cc] || cc.toUpperCase(), avg: v.avgScore, urls: v.urlCount }))
    .sort((a, b) => (b.avg ?? -1) - (a.avg ?? -1))

  const bars = rows.map(r =>
    barRow(`${r.name} (${r.urls.toLocaleString()})`, r.avg ?? 0, 100, scoreColor(r.avg), `${r.avg ?? '—'}`)
  ).join('')

  return `<div class="section">
    <h2 class="vtitle" style="border-color:#CF0652">① 국가별 종합 점수 비교</h2>
    <div class="hero">
      <div class="hero-main">
        <span class="hero-num" style="color:${scoreColor(o.avgScore)}">${o.avgScore ?? '—'}</span>
        <span class="hero-unit">/ 100 전체 평균</span>
      </div>
      <div class="hero-meta">
        URL <strong>${(o.urlCount || 0).toLocaleString()}</strong> ·
        채점 <strong>${(o.scoredCount || 0).toLocaleString()}</strong> ·
        국가 <strong>${Object.keys(snap.countries).length}</strong>
      </div>
      <div class="hero-grades">${gradeChips}</div>
    </div>
    <div class="bars">${bars}</div>
  </div>`
}

// ─── 뷰 2: 카테고리 4분할 상세 (51 체크 pass rate) ──────────────────────────
function viewCategoryDetail(snap) {
  const o = snap.overall
  const labels = snap.categoryLabels || {}
  // 체크를 카테고리별로 그룹
  const byCat = {}
  for (const cat of CATEGORIES) byCat[cat] = []
  for (const [cid, c] of Object.entries(o.checks || {})) {
    if (!byCat[c.cat]) byCat[c.cat] = []
    byCat[c.cat].push({ cid, ...c })
  }

  const cards = CATEGORIES.map(cat => {
    const avg = o.categories ? o.categories[cat] : null
    const checks = (byCat[cat] || []).sort((a, b) => a.label.localeCompare(b.label, 'en', { numeric: true }))
    const checkRows = checks.map(c => {
      const rate = c.applicable > 0 ? +(c.pass / c.applicable * 100).toFixed(1) : null
      const right = rate == null ? '—' : `${rate}% (${c.pass}/${c.applicable})`
      return barRow(c.label, rate ?? 0, 100, rateColor(rate), right)
    }).join('')
    return `<div class="cat-card">
      <div class="cat-head">
        <span class="cat-name">${escHtml(labels[cat] || cat)}</span>
        <span class="cat-avg" style="color:${scoreColor(avg)}">${avg ?? '—'}</span>
      </div>
      <div class="cat-sub">${checks.length} 체크 · 평균 points</div>
      <div class="bars sm">${checkRows}</div>
    </div>`
  }).join('')

  return `<div class="section">
    <h2 class="vtitle" style="border-color:#3B82F6">② 카테고리 4분할 상세 — 체크별 통과율</h2>
    <div class="cat-grid">${cards}</div>
  </div>`
}

// ─── 뷰 3: 페이지타입별 점수 ─────────────────────────────────────────────────
function viewPageTypes(snap) {
  const pts = Object.entries(snap.overall.pageTypes || {})
    .map(([id, v]) => ({ id, ...v }))
    .sort((a, b) => (b.avgScore ?? -1) - (a.avgScore ?? -1))
  const bars = pts.map(p =>
    barRow(`${p.label} (${(p.count || 0).toLocaleString()})`, p.avgScore ?? 0, 100, scoreColor(p.avgScore), `${p.avgScore ?? '—'}`)
  ).join('')
  return `<div class="section">
    <h2 class="vtitle" style="border-color:#059669">③ 페이지타입별 점수</h2>
    <div class="bars">${bars}</div>
  </div>`
}

// ─── 뷰 4: AI봇 차단 / CSR·SSR tier ─────────────────────────────────────────
function viewBotsAndSsr(snap) {
  const o = snap.overall
  const bots = Object.entries(o.bots || {})
    .map(([name, v]) => ({ name, blocked: v.blocked, total: v.total, rate: v.total > 0 ? +(v.blocked / v.total * 100).toFixed(1) : 0 }))
    .sort((a, b) => b.rate - a.rate)
  const botBars = bots.map(b =>
    // 차단율 높을수록 위험(빨강) — AI 접근 차단은 GEO 관점에서 부정적
    barRow(b.name, b.rate, 100, b.rate >= 50 ? '#BE123C' : b.rate > 0 ? '#B45309' : '#15803D',
      `${b.rate}% (${b.blocked.toLocaleString()}/${b.total.toLocaleString()})`)
  ).join('')

  const tiers = Object.entries(o.tiers || {}).sort((a, b) => b[1] - a[1])
  const tierTotal = tiers.reduce((s, [, n]) => s + n, 0)
  const tierColor = { good: '#15803D', partial: '#B45309', poor: '#BE123C', bad: '#BE123C' }
  const tierBars = tiers.map(([t, n]) =>
    barRow(t, n, tierTotal, tierColor[t.toLowerCase()] || '#3B82F6',
      `${n.toLocaleString()} (${tierTotal > 0 ? (n / tierTotal * 100).toFixed(1) : 0}%)`)
  ).join('')

  return `<div class="section">
    <h2 class="vtitle" style="border-color:#D97706">④ AI봇 차단 (robots.txt) · CSR/SSR Tier</h2>
    <div class="split">
      <div class="split-col">
        <div class="split-head">AI 봇 차단율 — 높을수록 GEO 불리</div>
        <div class="bars sm">${botBars}</div>
      </div>
      <div class="split-col">
        <div class="split-head">CSR/SSR Tier 분포 (${tierTotal.toLocaleString()} URL)</div>
        <div class="bars">${tierBars}</div>
      </div>
    </div>
  </div>`
}

export function renderReadabilityHTML({ snapshot, index, adminMode = false } = {}) {
  if (!snapshot || !snapshot.overall) {
    return `<!DOCTYPE html><html lang="ko"><head><meta charset="UTF-8">${themeStyle()}</head>
      <body style="font-family:sans-serif;padding:40px">
      <h1>Readability 스냅샷 없음</h1>
      <p>먼저 집계 스크립트를 실행하세요:</p>
      <pre>node scripts/aggregate-readability.mjs</pre>
      <p><a href="/admin/">← 어드민</a></p></body></html>`
  }

  const snapCount = (index && Array.isArray(index.snapshots)) ? index.snapshots.length : 1
  const momNote = snapCount >= 2
    ? `스냅샷 ${snapCount}개 — 시계열 대비 가능`
    : `스냅샷 ${snapCount}개 — 재어딧 후 MoM 대비 (현재 단일 측정분)`

  return `<!DOCTYPE html><html lang="ko"><head><meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Readability — GEO 어딧 대시보드</title>
${themeStyle()}
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{background:var(--bg-primary);color:var(--text-primary);font-family:'LGEIText','LG Smart','Arial Narrow',Arial,sans-serif;padding:28px 32px;line-height:1.6;max-width:1400px;margin:0 auto;transition:background .2s,color .2s}
.top{display:flex;align-items:center;margin-bottom:18px;flex-wrap:wrap;gap:12px}
.back{color:var(--accent);text-decoration:none;font-size:16px}
h1{font-size:26px;color:var(--text-strong);margin-bottom:6px}
.sub{font-size:15px;color:var(--text-muted);margin-bottom:24px}
.vtitle{font-size:19px;font-weight:700;color:var(--text-strong);border-left:4px solid;padding-left:12px;margin-bottom:14px}
.section{margin-bottom:34px}
.hero{background:var(--bg-card);border:1px solid var(--border);border-radius:14px;padding:20px 24px;margin-bottom:18px}
.hero-main{display:flex;align-items:baseline;gap:10px}
.hero-num{font-size:54px;font-weight:900;letter-spacing:-2px}
.hero-unit{font-size:16px;color:var(--text-muted)}
.hero-meta{font-size:14px;color:var(--text-sub);margin-top:6px}
.hero-meta strong{color:var(--text-strong)}
.hero-grades{margin-top:12px;display:flex;gap:8px;flex-wrap:wrap}
.chip{background:var(--bg-code);border:1px solid var(--border);border-radius:6px;padding:4px 10px;font-size:13px;color:var(--text-desc)}
.chip strong{color:var(--text-strong)}
.bars{display:flex;flex-direction:column;gap:7px}
.bars.sm{gap:5px}
.bar-row{display:flex;align-items:center;gap:10px}
.bar-label{flex:0 0 230px;font-size:13px;color:var(--text-desc);overflow:visible;white-space:nowrap;text-overflow:ellipsis;letter-spacing:-0.3px}
.bars.sm .bar-label{flex:0 0 200px;font-size:12px}
.bar-track{flex:1;background:var(--bg-code);border-radius:4px;height:18px;overflow:hidden}
.bars.sm .bar-track{height:14px}
.bar-fill{height:100%;border-radius:4px;transition:width .3s}
.bar-value{flex:0 0 130px;text-align:right;font-size:12px;font-weight:700;font-variant-numeric:tabular-nums}
.cat-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(340px,1fr));gap:16px}
.cat-card{background:var(--bg-card);border:1px solid var(--border);border-radius:12px;padding:16px 18px}
.cat-head{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:2px}
.cat-name{font-size:16px;font-weight:800;color:var(--text-strong)}
.cat-avg{font-size:26px;font-weight:900;letter-spacing:-1px}
.cat-sub{font-size:12px;color:var(--text-muted);margin-bottom:12px}
.split{display:grid;grid-template-columns:1fr 1fr;gap:20px}
.split-col{background:var(--bg-card);border:1px solid var(--border);border-radius:12px;padding:16px 18px}
.split-head{font-size:14px;font-weight:700;color:var(--text-desc);margin-bottom:12px}
@media (max-width:780px){
  body{padding:16px 14px}
  h1{font-size:22px}
  .vtitle{font-size:17px}
  .hero-num{font-size:44px}
  .bar-label{flex:0 0 150px;font-size:12px}
  .bars.sm .bar-label{flex:0 0 130px}
  .bar-value{flex:0 0 100px;font-size:11px}
  .cat-grid{grid-template-columns:1fr}
  .split{grid-template-columns:1fr}
}
@media (max-width:480px){
  body{padding:12px 10px}
  .top{flex-direction:column;align-items:flex-start;gap:8px}
  h1{font-size:18px}
  .bar-label{flex:0 0 110px;font-size:11px;white-space:normal}
  .bar-value{flex:0 0 88px}
}
</style></head><body>
${adminMode ? themeToggleButton() : ''}

<div class="top"><a class="back" href="/admin/">← 어드민</a></div>

<h1>Readability — GEO 어딧 대시보드</h1>
<p class="sub">측정일 <strong>${escHtml(snapshot.date)}</strong> · 생성 ${escHtml((snapshot.generatedAt || '').slice(0, 16).replace('T', ' '))} · ${escHtml(momNote)}</p>

${viewCountryComparison(snapshot)}
${viewCategoryDetail(snapshot)}
${viewPageTypes(snapshot)}
${viewBotsAndSsr(snapshot)}

</body></html>`
}
