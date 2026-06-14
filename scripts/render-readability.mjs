// Readability (GEO 어딧) 대시보드 HTML 생성기 — 서버 렌더 (정적, 인라인 client JS 없음)
// 입력: aggregate-readability.mjs 가 만든 스냅샷 + 인덱스 (data/readability/*.json)
// 라우트 routes/readability.js 가 요청 시 최신 스냅샷을 읽어 본 함수에 주입.
//
// 4 뷰: (1) 국가별 종합 점수 비교  (2) 카테고리 4분할 상세 (51 체크 pass rate)
//       (3) 페이지타입별 점수      (4) AI봇 차단 / CSR·SSR tier 분포
//
// 디자인: Visibility 대시보드와 통일 (dashboardStyles.js 토큰) — 라이트 테마.
//   body #F1F5F9 / Hero 다크 카드 #0F172A / 흰 section-card + 레드바 타이틀.

// 디자인 토큰 단일 소스 — Visibility 대시보드와 동일 (하드코딩 X)
import { FONT, RED, COMP } from '../src/dashboard/dashboardConsts.js'
import { statusInfo } from '../src/dashboard/dashboardFormat.js'

// @font-face — 커스텀 폰트 (LGEIText / LG Smart) 실제 파일 로드.
// FONT 토큰은 family 이름만 나열 → 이 @font-face 블록 없으면 시스템 폰트로 폴백.
// /font 정적 경로는 routes/spa-static.js 가 서빙. weekly/citation 등 다른 서버 렌더 페이지와 동일 패턴.
const FONT_FACE_CSS = `
@font-face { font-family: 'LGEIText'; font-weight: 100 300; font-style: normal; src: url('/font/LGEIText%20Light.ttf') format('truetype'); font-display: swap; }
@font-face { font-family: 'LGEIText'; font-weight: 400 500; font-style: normal; src: url('/font/LGEIText%20Regular.otf') format('opentype'), url('/font/LGEIText%20Regular.ttf') format('truetype'); font-display: swap; }
@font-face { font-family: 'LGEIText'; font-weight: 600; font-style: normal; src: url('/font/LGEIText%20SemiBold.ttf') format('truetype'); font-display: swap; }
@font-face { font-family: 'LGEIText'; font-weight: 700 900; font-style: normal; src: url('/font/LGEIText%20Bold.ttf') format('truetype'); font-display: swap; }
@font-face { font-family: 'LG Smart'; font-weight: 400; font-style: normal; src: url('/font/LG%20Smart%20Regular.ttf') format('truetype'); font-display: swap; }
@font-face { font-family: 'LG Smart'; font-weight: 600; font-style: normal; src: url('/font/LG%20Smart%20SemiBold.ttf') format('truetype'); font-display: swap; }
@font-face { font-family: 'LG Smart'; font-weight: 700; font-style: normal; src: url('/font/LG%20Smart%20Bold.ttf') format('truetype'); font-display: swap; }
@font-face { font-family: 'LG Smart'; font-weight: 300; font-style: normal; src: url('/font/LG%20Smart%20Light.ttf') format('truetype'); font-display: swap; }
`

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

// 점수(0~100) → STATUS 토큰 색 (lead/behind/critical)
function scoreColor(v) {
  if (v == null) return COMP
  if (v >= 70) return statusInfo('lead').color
  if (v >= 50) return statusInfo('behind').color
  return statusInfo('critical').color
}
// pass rate(0~100) → STATUS 토큰 색
function rateColor(v) {
  if (v == null) return COMP
  if (v >= 80) return statusInfo('lead').color
  if (v >= 50) return statusInfo('behind').color
  return statusInfo('critical').color
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

// section-card 래퍼 — Visibility .section-card + .section-header(레드/컬러 바) + .section-body
function sectionCard(title, accent, bodyHtml, rightHtml) {
  return `<div class="section-card">
    <div class="section-header">
      <span class="section-title" style="--accent:${accent}">${escHtml(title)}</span>
      ${rightHtml ? `<span class="section-meta">${rightHtml}</span>` : ''}
    </div>
    <div class="section-body">${bodyHtml}</div>
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

  const hero = `<div class="hero">
    <div class="hero-top">
      <span class="hero-brand">GEO Readability Audit</span>
      <span class="hero-meta">측정일 ${escHtml(snap.date)}</span>
    </div>
    <div class="hero-body">
      <div class="hero-left">
        <div class="hero-label">전체 평균</div>
        <div class="hero-score-row">
          <span class="hero-score" style="color:${scoreColor(o.avgScore)}">${o.avgScore ?? '—'}</span>
          <span class="hero-pct">/ 100</span>
        </div>
        <div class="hero-info">
          URL <strong>${(o.urlCount || 0).toLocaleString()}</strong> ·
          채점 <strong>${(o.scoredCount || 0).toLocaleString()}</strong> ·
          국가 <strong>${Object.keys(snap.countries).length}</strong>
        </div>
      </div>
      <div class="hero-right">
        <div class="hero-label">Grade 분포</div>
        <div class="hero-grades">${gradeChips}</div>
      </div>
    </div>
  </div>`

  return hero + sectionCard('① 국가별 종합 점수 비교', RED, `<div class="bars">${bars}</div>`)
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

  return sectionCard('② 카테고리 4분할 상세 — 체크별 통과율', '#3B82F6', `<div class="cat-grid">${cards}</div>`)
}

// ─── 뷰 3: 페이지타입별 점수 ─────────────────────────────────────────────────
function viewPageTypes(snap) {
  const pts = Object.entries(snap.overall.pageTypes || {})
    .map(([id, v]) => ({ id, ...v }))
    .sort((a, b) => (b.avgScore ?? -1) - (a.avgScore ?? -1))
  const bars = pts.map(p =>
    barRow(`${p.label} (${(p.count || 0).toLocaleString()})`, p.avgScore ?? 0, 100, scoreColor(p.avgScore), `${p.avgScore ?? '—'}`)
  ).join('')
  return sectionCard('③ 페이지타입별 점수', '#059669', `<div class="bars">${bars}</div>`)
}

// ─── 뷰 4: AI봇 차단 / CSR·SSR tier ─────────────────────────────────────────
function viewBotsAndSsr(snap) {
  const o = snap.overall
  const bots = Object.entries(o.bots || {})
    .map(([name, v]) => ({ name, blocked: v.blocked, total: v.total, rate: v.total > 0 ? +(v.blocked / v.total * 100).toFixed(1) : 0 }))
    .sort((a, b) => b.rate - a.rate)
  const botBars = bots.map(b =>
    // 차단율 높을수록 위험(빨강) — AI 접근 차단은 GEO 관점에서 부정적
    barRow(b.name, b.rate, 100, b.rate >= 50 ? statusInfo('critical').color : b.rate > 0 ? statusInfo('behind').color : statusInfo('lead').color,
      `${b.rate}% (${b.blocked.toLocaleString()}/${b.total.toLocaleString()})`)
  ).join('')

  const tiers = Object.entries(o.tiers || {}).sort((a, b) => b[1] - a[1])
  const tierTotal = tiers.reduce((s, [, n]) => s + n, 0)
  const tierColor = { good: statusInfo('lead').color, partial: statusInfo('behind').color, poor: statusInfo('critical').color, bad: statusInfo('critical').color }
  const tierBars = tiers.map(([t, n]) =>
    barRow(t, n, tierTotal, tierColor[t.toLowerCase()] || '#3B82F6',
      `${n.toLocaleString()} (${tierTotal > 0 ? (n / tierTotal * 100).toFixed(1) : 0}%)`)
  ).join('')

  const body = `<div class="split">
    <div class="split-col">
      <div class="split-head">AI 봇 차단율 — 높을수록 GEO 불리</div>
      <div class="bars sm">${botBars}</div>
    </div>
    <div class="split-col">
      <div class="split-head">CSR/SSR Tier 분포 (${tierTotal.toLocaleString()} URL)</div>
      <div class="bars">${tierBars}</div>
    </div>
  </div>`
  return sectionCard('④ AI봇 차단 (robots.txt) · CSR/SSR Tier', '#D97706', body)
}

export function renderReadabilityHTML({ snapshot, index, adminMode = false } = {}) {
  if (!snapshot || !snapshot.overall) {
    return `<!DOCTYPE html><html lang="ko"><head><meta charset="UTF-8">
      <link href="https://fonts.cdnfonts.com/css/lg-smart" rel="stylesheet" />
      <style>${FONT_FACE_CSS}body{background:#F1F5F9;font-family:${FONT};color:#1A1A1A;padding:40px;line-height:1.6}
      a{color:${RED}}pre{background:#fff;border:1px solid #E8EDF2;border-radius:8px;padding:12px 16px}</style></head>
      <body>
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
<link href="https://fonts.cdnfonts.com/css/lg-smart" rel="stylesheet" />
<style>
${FONT_FACE_CSS}
*{margin:0;padding:0;box-sizing:border-box}
body{background:#F1F5F9;font-family:${FONT};color:#1A1A1A;line-height:1.6}
.tab-bar{position:sticky;top:0;z-index:100;background:#0F172A;display:flex;align-items:center;justify-content:space-between;padding:12px 40px}
.tab-bar .tb-title{font-size:17px;font-weight:700;color:#fff;display:flex;align-items:center;gap:8px}
.tab-bar .tb-title::before{content:'';width:4px;height:20px;background:${RED};border-radius:4px}
.tab-bar .back{color:#94A3B8;text-decoration:none;font-size:14px;font-weight:600}
.tab-bar .back:hover{color:#E2E8F0}
.dash-container{max-width:1400px;margin:0 auto;padding:28px 40px}
.page-head{margin-bottom:24px}
.page-head .sub{font-size:15px;color:#64748B}
.page-head .sub strong{color:#1A1A1A}
/* ── Hero (Visibility 다크 카드) ── */
.hero{background:#0F172A;border-radius:16px;padding:28px 32px;margin-bottom:24px;color:#fff}
.hero-top{display:flex;justify-content:space-between;margin-bottom:20px;flex-wrap:wrap;gap:8px}
.hero-brand{font-size:16px;font-weight:700;color:#FFCCD8}
.hero-meta{font-size:14px;color:#FFB0C0}
.hero-body{display:flex;gap:40px;align-items:flex-start;flex-wrap:wrap}
.hero-left{flex:1;min-width:240px}
.hero-right{flex:0 0 320px}
.hero-label{font-size:14px;font-weight:600;color:#94A3B8;text-transform:uppercase;margin-bottom:8px;letter-spacing:0.5px}
.hero-score-row{display:flex;align-items:baseline;gap:8px;margin-bottom:8px}
.hero-score{font-size:52px;font-weight:900;letter-spacing:-2px}
.hero-pct{font-size:20px;color:#94A3B8}
.hero-info{font-size:14px;color:#94A3B8;line-height:1.7}
.hero-info strong{color:#fff;font-weight:700}
.hero-grades{display:flex;gap:8px;flex-wrap:wrap}
.chip{background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.12);border-radius:6px;padding:4px 10px;font-size:13px;color:#CBD5E1}
.chip strong{color:#fff}
/* ── 섹션 카드 (Visibility) ── */
.section-card{background:#fff;border-radius:16px;border:1px solid #E8EDF2;margin-bottom:24px;overflow:hidden}
.section-header{padding:20px 28px;background:#FAFBFC;border-bottom:1px solid #F1F5F9;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px}
.section-title{font-size:20px;font-weight:700;color:#1A1A1A;display:flex;align-items:center;gap:8px}
.section-title::before{content:'';width:4px;height:22px;background:var(--accent,${RED});border-radius:4px;flex-shrink:0}
.section-meta{font-size:14px;color:#94A3B8}
.section-body{padding:24px 28px}
/* ── 막대 ── */
.bars{display:flex;flex-direction:column;gap:8px}
.bars.sm{gap:5px}
.bar-row{display:flex;align-items:center;gap:10px}
.bar-label{flex:0 0 230px;font-size:13px;color:#475569;overflow:visible;white-space:nowrap;text-overflow:ellipsis;letter-spacing:-0.3px}
.bars.sm .bar-label{flex:0 0 200px;font-size:12px}
.bar-track{flex:1;background:#F1F5F9;border-radius:4px;height:18px;overflow:hidden}
.bars.sm .bar-track{height:14px}
.bar-fill{height:100%;border-radius:4px;transition:width .3s}
.bar-value{flex:0 0 130px;text-align:right;font-size:12px;font-weight:700;font-variant-numeric:tabular-nums}
/* ── 카테고리 4분할 ── */
.cat-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(340px,1fr));gap:16px}
.cat-card{background:#fff;border:1px solid #E8EDF2;border-radius:12px;padding:16px 18px}
.cat-head{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:2px}
.cat-name{font-size:16px;font-weight:800;color:#1A1A1A}
.cat-avg{font-size:26px;font-weight:900;letter-spacing:-1px}
.cat-sub{font-size:12px;color:#94A3B8;margin-bottom:12px}
/* ── 2분할 ── */
.split{display:grid;grid-template-columns:1fr 1fr;gap:20px}
.split-col{background:#fff;border:1px solid #E8EDF2;border-radius:12px;padding:16px 18px}
.split-head{font-size:14px;font-weight:700;color:#475569;margin-bottom:12px}
@media (max-width:780px){
  .tab-bar{padding:10px 16px}
  .dash-container{padding:16px 14px}
  .hero{padding:20px 18px}
  .hero-body{gap:20px}
  .hero-right{flex:1 1 100%}
  .hero-score{font-size:44px}
  .section-header,.section-body{padding-left:18px;padding-right:18px}
  .bar-label{flex:0 0 150px;font-size:12px}
  .bars.sm .bar-label{flex:0 0 130px}
  .bar-value{flex:0 0 100px;font-size:11px}
  .cat-grid{grid-template-columns:1fr}
  .split{grid-template-columns:1fr}
}
@media (max-width:480px){
  .dash-container{padding:12px 10px}
  .bar-label{flex:0 0 110px;font-size:11px;white-space:normal}
  .bar-value{flex:0 0 88px}
}
</style></head><body>

<div class="tab-bar">
  <span class="tb-title">Readability — GEO 어딧</span>
  <a class="back" href="/admin/">← 어드민</a>
</div>

<div class="dash-container">
  <div class="page-head">
    <p class="sub">측정일 <strong>${escHtml(snapshot.date)}</strong> · 생성 ${escHtml((snapshot.generatedAt || '').slice(0, 16).replace('T', ' '))} · ${escHtml(momNote)}</p>
  </div>

  ${viewCountryComparison(snapshot)}
  ${viewCategoryDetail(snapshot)}
  ${viewPageTypes(snapshot)}
  ${viewBotsAndSsr(snapshot)}
</div>

</body></html>`
}
