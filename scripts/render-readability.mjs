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

// 가로 막대 1줄 — countText 주면 라벨과 막대 사이에 audit 페이지 수 컬럼 추가
function barRow(label, value, max, color, rightText, countText) {
  const w = max > 0 ? Math.max(0, Math.min(100, (value / max) * 100)).toFixed(1) : 0
  const countCol = (countText != null && countText !== '') ? `<span class="bar-count">${escHtml(countText)}</span>` : ''
  return `<div class="bar-row">
    <span class="bar-label">${escHtml(label)}</span>
    ${countCol}
    <div class="bar-track"><div class="bar-fill" style="width:${w}%;background:${color}"></div></div>
    <span class="bar-value" style="color:${color}">${escHtml(rightText)}</span>
  </div>`
}

// 막대 그룹 헤더 (라벨 / 페이지수 / 점수 컬럼명)
function barHead(labelText, countLabel, valueLabel) {
  return `<div class="bar-row bar-head">
    <span class="bar-label">${escHtml(labelText)}</span>
    <span class="bar-count">${escHtml(countLabel)}</span>
    <div class="bar-track"></div>
    <span class="bar-value">${escHtml(valueLabel)}</span>
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

  const bars = barHead('국가', '페이지수', '점수') + rows.map(r =>
    barRow(r.name, r.avg ?? 0, 100, scoreColor(r.avg), `${r.avg ?? '—'}`, r.urls.toLocaleString())
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
  const bars = barHead('페이지 타입', '페이지수', '점수') + pts.map(p =>
    barRow(p.label, p.avgScore ?? 0, 100, scoreColor(p.avgScore), `${p.avgScore ?? '—'}`, (p.count || 0).toLocaleString())
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

// ─── 클라이언트 JS (탭 전환 + 국가/페이지타입 필터 재렌더) ────────────────────
// function.toString() 으로 임베드 — 본 함수 본문은 외부 template literal 밖이라
// design.md §6.1 (template 보간 함정) 회피. 본문은 self-contained (모듈 스코프 참조 X).
// 서버 뷰 함수(viewXxx)는 <noscript> 폴백에서 재사용. 두 곳이 같은 마круп
// (.section-card/.bars/.bar-row/.hero 클래스) 를 공유 — design.md §5.8 서버↔클라 짝.
function readabilityClient() {
  var RD = window.__RD || {}
  var CATS = ['performance', 'accessibility', 'seo', 'ai_readiness']
  var LEAD = '#15803D', BEHIND = '#B45309', CRIT = '#BE123C', COMP = '#94A3B8', RED = '#CF0652'
  var state = { tab: 'country', cc: 'all', pt: 'all' }

  function esc(s) {
    return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
  }
  function scoreColor(v) { if (v == null) return COMP; if (v >= 70) return LEAD; if (v >= 50) return BEHIND; return CRIT }
  function rateColor(v) { if (v == null) return COMP; if (v >= 80) return LEAD; if (v >= 50) return BEHIND; return CRIT }
  function num(n) { return (n == null ? 0 : n).toLocaleString() }
  function barRow(label, value, max, color, rightText, countText) {
    var w = max > 0 ? Math.max(0, Math.min(100, (value / max) * 100)).toFixed(1) : 0
    var countCol = (countText != null && countText !== '') ? '<span class="bar-count">' + esc(countText) + '</span>' : ''
    return '<div class="bar-row"><span class="bar-label">' + esc(label) + '</span>' + countCol +
      '<div class="bar-track"><div class="bar-fill" style="width:' + w + '%;background:' + color + '"></div></div>' +
      '<span class="bar-value" style="color:' + color + '">' + esc(rightText) + '</span></div>'
  }
  function barHead(labelText, countLabel, valueLabel) {
    return '<div class="bar-row bar-head"><span class="bar-label">' + esc(labelText) + '</span>' +
      '<span class="bar-count">' + esc(countLabel) + '</span>' +
      '<div class="bar-track"></div>' +
      '<span class="bar-value">' + esc(valueLabel) + '</span></div>'
  }
  function sectionCard(title, accent, body, right) {
    return '<div class="section-card"><div class="section-header">' +
      '<span class="section-title" style="--accent:' + accent + '">' + esc(title) + '</span>' +
      (right ? '<span class="section-meta">' + right + '</span>' : '') +
      '</div><div class="section-body">' + body + '</div></div>'
  }
  function getScope(cc) { return cc === 'all' ? RD.overall : (RD.countries[cc] || RD.overall) }
  function ccLabel(cc) { return RD.ccName[cc] || cc.toUpperCase() }

  function renderBotsTiers(scope) {
    var bots = Object.entries(scope.bots || {}).map(function (e) {
      var v = e[1]; return { name: e[0], blocked: v.blocked, total: v.total, rate: v.total > 0 ? +(v.blocked / v.total * 100).toFixed(1) : 0 }
    }).sort(function (a, b) { return b.rate - a.rate })
    var botBars = bots.map(function (b) {
      var col = b.rate >= 50 ? CRIT : b.rate > 0 ? BEHIND : LEAD
      return barRow(b.name, b.rate, 100, col, b.rate + '% (' + num(b.blocked) + '/' + num(b.total) + ')')
    }).join('')
    var tiers = Object.entries(scope.tiers || {}).sort(function (a, b) { return b[1] - a[1] })
    var tt = tiers.reduce(function (s, e) { return s + e[1] }, 0)
    var tcol = { good: LEAD, partial: BEHIND, poor: CRIT, bad: CRIT }
    var tierBars = tiers.map(function (e) {
      return barRow(e[0], e[1], tt, tcol[e[0].toLowerCase()] || '#3B82F6', num(e[1]) + ' (' + (tt > 0 ? (e[1] / tt * 100).toFixed(1) : 0) + '%)')
    }).join('')
    var body = '<div class="split"><div class="split-col"><div class="split-head">AI 봇 차단율 — 높을수록 GEO 불리</div><div class="bars sm">' + botBars + '</div></div>' +
      '<div class="split-col"><div class="split-head">CSR/SSR Tier 분포 (' + num(tt) + ' URL)</div><div class="bars">' + tierBars + '</div></div></div>'
    return sectionCard('④ AI봇 차단 (robots.txt) · CSR/SSR Tier', '#D97706', body)
  }

  function renderCountry() {
    var pt = state.pt, scope = getScope(state.cc)
    var ptLabel = pt !== 'all' && RD.overall.pageTypes[pt] ? RD.overall.pageTypes[pt].label : null
    var heroScore = pt === 'all' ? scope.avgScore : (scope.pageTypes[pt] ? scope.pageTypes[pt].avgScore : null)
    var grades = Object.entries(scope.grades || {}).sort(function (a, b) { return b[1] - a[1] })
    var gradeChips = grades.map(function (e) { return '<span class="chip">' + esc(e[0]) + ' <strong>' + num(e[1]) + '</strong></span>' }).join('')
    var scopeName = state.cc === 'all' ? '전체' : ccLabel(state.cc)
    var hero = '<div class="hero"><div class="hero-top">' +
      '<span class="hero-brand">GEO Readability Audit</span>' +
      '<span class="hero-meta">측정일 ' + esc(RD.date) + '</span></div>' +
      '<div class="hero-body"><div class="hero-left">' +
      '<div class="hero-label">' + esc(scopeName) + (ptLabel ? ' · ' + esc(ptLabel) : '') + ' 평균</div>' +
      '<div class="hero-score-row"><span class="hero-score" style="color:' + scoreColor(heroScore) + '">' + (heroScore == null ? '—' : heroScore) + '</span><span class="hero-pct">/ 100</span></div>' +
      '<div class="hero-info">URL <strong>' + num(scope.urlCount) + '</strong> · 채점 <strong>' + num(scope.scoredCount) + '</strong> · 국가 <strong>' + Object.keys(RD.countries).length + '</strong></div>' +
      '</div><div class="hero-right"><div class="hero-label">Grade 분포</div><div class="hero-grades">' + gradeChips + '</div></div></div></div>'

    var ccList = state.cc === 'all' ? Object.keys(RD.countries) : [state.cc]
    var rows = ccList.map(function (cc) {
      var c = RD.countries[cc]
      var v = pt === 'all' ? c.avgScore : (c.pageTypes[pt] ? c.pageTypes[pt].avgScore : null)
      var cnt = pt === 'all' ? c.urlCount : (c.pageTypes[pt] ? c.pageTypes[pt].count : 0)
      return { cc: cc, name: ccLabel(cc), v: v, cnt: cnt }
    }).sort(function (a, b) { return (b.v == null ? -1 : b.v) - (a.v == null ? -1 : a.v) })
    var bars = barHead('국가', '페이지수', '점수') + rows.map(function (r) {
      return barRow(r.name, r.v == null ? 0 : r.v, 100, scoreColor(r.v), r.v == null ? '—' : String(r.v), num(r.cnt))
    }).join('')
    var title = pt === 'all' ? '① 국가별 종합 점수 비교' : '① 국가별 점수 비교 — ' + ptLabel
    var note = pt !== 'all'
      ? '<div class="tab-note">페이지 타입 «' + esc(ptLabel) + '» 필터는 국가별/페이지타입 점수에만 적용됩니다. AI봇·SSR 지표는 페이지타입 분해 데이터가 없어 ' + esc(scopeName) + ' 전체 기준입니다.</div>'
      : ''
    return hero + note + sectionCard(title, RED, '<div class="bars">' + bars + '</div>') + renderCategorySection(scope, '②') + renderBotsTiers(scope)
  }

  // 체크별 통과율 카테고리 카드 묶음 — 국가/페이지타입 탭 양쪽에서 재사용 (별도 항목별 탭 X)
  function renderCategoryCards(scope) {
    var labels = RD.categoryLabels || {}
    var byCat = {}; CATS.forEach(function (c) { byCat[c] = [] })
    Object.entries(scope.checks || {}).forEach(function (e) {
      var c = e[1]; if (!byCat[c.cat]) byCat[c.cat] = []; byCat[c.cat].push(Object.assign({ cid: e[0] }, c))
    })
    return CATS.map(function (cat) {
      var avg = scope.categories ? scope.categories[cat] : null
      var checks = (byCat[cat] || []).sort(function (a, b) { return a.label.localeCompare(b.label, 'en', { numeric: true }) })
      var rows = checks.map(function (c) {
        var rate = c.applicable > 0 ? +(c.pass / c.applicable * 100).toFixed(1) : null
        var right = rate == null ? '—' : rate + '% (' + c.pass + '/' + c.applicable + ')'
        return barRow(c.label, rate == null ? 0 : rate, 100, rateColor(rate), right)
      }).join('')
      return '<div class="cat-card"><div class="cat-head"><span class="cat-name">' + esc(labels[cat] || cat) + '</span>' +
        '<span class="cat-avg" style="color:' + scoreColor(avg) + '">' + (avg == null ? '—' : avg) + '</span></div>' +
        '<div class="cat-sub">' + checks.length + ' 체크 · 평균 points</div><div class="bars sm">' + rows + '</div></div>'
    }).join('')
  }

  // 체크별 통과율 섹션 (국가 필터만 반영 — 페이지타입 분해 데이터 없음)
  function renderCategorySection(scope, num) {
    var scopeName = state.cc === 'all' ? '전체' : ccLabel(state.cc)
    var note = state.pt !== 'all'
      ? '<div class="tab-note">체크별 통과율은 페이지타입 분해 데이터가 없어 «페이지 타입» 필터가 적용되지 않습니다. 국가 필터(' + esc(scopeName) + ')만 반영됩니다.</div>'
      : ''
    return note + sectionCard(num + ' 체크별 통과율 (' + esc(scopeName) + ')', '#3B82F6', '<div class="cat-grid">' + renderCategoryCards(scope) + '</div>')
  }

  function renderPageType() {
    var scope = getScope(state.cc)
    var entries = Object.entries(scope.pageTypes || {}).map(function (e) { return Object.assign({ id: e[0] }, e[1]) })
    if (state.pt !== 'all') entries = entries.filter(function (p) { return p.id === state.pt })
    entries.sort(function (a, b) { return (b.avgScore == null ? -1 : b.avgScore) - (a.avgScore == null ? -1 : a.avgScore) })
    var rowsHtml = entries.map(function (p) {
      return barRow(p.label, p.avgScore == null ? 0 : p.avgScore, 100, scoreColor(p.avgScore), p.avgScore == null ? '—' : String(p.avgScore), num(p.count))
    }).join('')
    var bars = rowsHtml ? (barHead('페이지 타입', '페이지수', '점수') + rowsHtml) : '<div class="tab-note">해당 조건에 데이터가 없습니다.</div>'
    var scopeName = state.cc === 'all' ? '전체' : ccLabel(state.cc)
    return sectionCard('① 페이지타입별 점수 (' + esc(scopeName) + ')', '#059669', '<div class="bars">' + bars + '</div>') + renderCategorySection(scope, '②')
  }

  // 검수 기준 + 검수 URL 다운로드 탭
  function renderCriteria() {
    // 동일출처 self-host (원본 onrender 는 x-frame-options:DENY 라 iframe 불가)
    var src = '/admin/readability/checklist.html'
    var origin = 'https://my-geo-89ft.onrender.com/static/geo-agent-checklist.html'
    var dl = '<div class="crit-dl"><div class="crit-dl-text">' +
      '<div class="crit-dl-title">검수 URL 다운로드</div>' +
      '<div class="crit-dl-sub">측정일 ' + esc(RD.date) + ' 기준 어딧 대상 전체 URL (URL · 국가 · 페이지타입 · 점수)</div></div>' +
      '<a class="crit-dl-btn" href="/admin/readability/urls.csv" download>CSV 다운로드</a></div>'
    var frame = '<div class="crit-frame-head">검수 기준 (GEO Agent Checklist) ' +
      '<a href="' + origin + '" target="_blank" rel="noopener">원본 열기 ↗</a></div>' +
      '<iframe class="crit-frame" src="' + src + '" loading="lazy"></iframe>'
    return sectionCard('검수 기준 · 검수 URL 다운로드', '#7C3AED', dl + frame)
  }

  function renderPanel() {
    var el = document.getElementById('rd-panel')
    if (!el) return
    var fb = document.getElementById('rd-filterbar')
    if (fb) fb.style.display = state.tab === 'criteria' ? 'none' : ''
    if (state.tab === 'country') el.innerHTML = renderCountry()
    else if (state.tab === 'criteria') el.innerHTML = renderCriteria()
    else el.innerHTML = renderPageType()
  }

  function buildControls() {
    var nav = document.getElementById('rd-tabnav')
    var tabs = [['country', '국가별'], ['pagetype', '페이지 타입별'], ['criteria', '검수 기준']]
    nav.innerHTML = tabs.map(function (t) {
      return '<button data-tab="' + t[0] + '"' + (t[0] === state.tab ? ' class="active"' : '') + '>' + t[1] + '</button>'
    }).join('')
    nav.addEventListener('click', function (e) {
      var b = e.target.closest('button[data-tab]'); if (!b) return
      state.tab = b.getAttribute('data-tab')
      Array.prototype.forEach.call(nav.querySelectorAll('button'), function (x) { x.classList.toggle('active', x.getAttribute('data-tab') === state.tab) })
      renderPanel()
    })
    var ccSel = document.getElementById('rd-cc')
    ccSel.innerHTML = ['<option value="all">전체 국가</option>'].concat(
      Object.keys(RD.countries).sort().map(function (cc) { return '<option value="' + cc + '">' + esc(ccLabel(cc)) + '</option>' })
    ).join('')
    ccSel.addEventListener('change', function () { state.cc = ccSel.value; renderPanel() })
    var ptSel = document.getElementById('rd-pt')
    ptSel.innerHTML = ['<option value="all">전체 페이지 타입</option>'].concat(
      Object.entries(RD.overall.pageTypes || {}).map(function (e) { return '<option value="' + e[0] + '">' + esc(e[1].label) + '</option>' })
    ).join('')
    ptSel.addEventListener('change', function () { state.pt = ptSel.value; renderPanel() })
  }

  buildControls()
  renderPanel()
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

  // 클라이언트 인터랙티브 렌더용 데이터 (탭/필터). 서버 뷰는 <noscript> fallback 유지.
  const clientData = {
    date: snapshot.date,
    categoryLabels: snapshot.categoryLabels || {},
    ccName: Object.fromEntries(Object.keys(snapshot.countries).map(cc => [cc, CC_NAME[cc] || cc.toUpperCase()])),
    overall: snapshot.overall,
    countries: snapshot.countries,
  }

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
/* ── 탭 네비 + 필터 바 ── */
.tab-nav{display:flex;gap:4px;margin-bottom:16px;border-bottom:2px solid #E8EDF2;flex-wrap:wrap}
.tab-nav button{appearance:none;border:none;background:none;font-family:inherit;font-size:15px;font-weight:700;color:#94A3B8;padding:10px 18px;cursor:pointer;border-bottom:3px solid transparent;margin-bottom:-2px}
.tab-nav button.active{color:#1A1A1A;border-bottom-color:${RED}}
.tab-nav button:hover{color:#475569}
.filter-bar{display:flex;gap:16px;flex-wrap:wrap;align-items:center;background:#fff;border:1px solid #E8EDF2;border-radius:12px;padding:14px 18px;margin-bottom:20px}
.filter-bar .fg{display:flex;align-items:center;gap:8px}
.filter-bar label{font-size:13px;font-weight:700;color:#475569}
.filter-bar select{font-family:inherit;font-size:13px;color:#1A1A1A;border:1px solid #CBD5E1;border-radius:8px;padding:6px 28px 6px 10px;background:#fff;cursor:pointer}
.tab-note{background:#FFFBEB;border:1px solid #FDE68A;border-radius:8px;padding:10px 14px;font-size:13px;color:#B45309;margin-bottom:16px}
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
.bar-count{flex:0 0 72px;text-align:right;font-size:12px;color:#94A3B8;font-variant-numeric:tabular-nums}
.bar-head{padding-bottom:4px;border-bottom:1px solid #F1F5F9;margin-bottom:2px}
.bar-head .bar-label,.bar-head .bar-count,.bar-head .bar-value{font-size:11px;font-weight:700;color:#94A3B8;text-transform:uppercase;letter-spacing:.3px}
.bar-head .bar-track{background:none}
/* ── 검수 기준 탭 ── */
.crit-dl{display:flex;align-items:center;justify-content:space-between;gap:16px;background:#F8FAFC;border:1px solid #E8EDF2;border-radius:12px;padding:16px 20px;margin-bottom:20px;flex-wrap:wrap}
.crit-dl-title{font-size:15px;font-weight:800;color:#1A1A1A}
.crit-dl-sub{font-size:13px;color:#64748B;margin-top:2px}
.crit-dl-btn{flex-shrink:0;background:${RED};color:#fff;text-decoration:none;font-size:14px;font-weight:700;padding:10px 20px;border-radius:8px}
.crit-dl-btn:hover{opacity:.9}
.crit-frame-head{display:flex;align-items:center;justify-content:space-between;gap:12px;font-size:14px;font-weight:700;color:#475569;margin-bottom:10px}
.crit-frame-head a{color:${RED};text-decoration:none;font-weight:600}
.crit-frame{width:100%;height:70vh;min-height:520px;border:1px solid #E8EDF2;border-radius:12px;background:#fff}
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
  .bar-count{flex:0 0 56px;font-size:11px}
  .crit-frame{height:60vh}
  .cat-grid{grid-template-columns:1fr}
  .split{grid-template-columns:1fr}
}
@media (max-width:480px){
  .dash-container{padding:12px 10px}
  .bar-label{flex:0 0 110px;font-size:11px;white-space:normal}
  .bar-value{flex:0 0 88px}
  .bar-count{flex:0 0 46px;font-size:10px}
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

  <div class="tab-nav" id="rd-tabnav"></div>
  <div class="filter-bar" id="rd-filterbar">
    <div class="fg"><label for="rd-cc">국가</label><select id="rd-cc"></select></div>
    <div class="fg"><label for="rd-pt">페이지 타입</label><select id="rd-pt"></select></div>
  </div>
  <div id="rd-panel"></div>

  <noscript>
    ${viewCountryComparison(snapshot)}
    ${viewCategoryDetail(snapshot)}
    ${viewPageTypes(snapshot)}
    ${viewBotsAndSsr(snapshot)}
  </noscript>
</div>

<script>window.__RD = ${JSON.stringify(clientData).replace(/</g, '\\u003c')};</script>
<script>(${readabilityClient.toString()})();</script>

</body></html>`
}
