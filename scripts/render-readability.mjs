// Readability (GEO 어딧) 대시보드 HTML 생성기 — 서버 렌더 (정적, 인라인 client JS 없음)
// 입력: aggregate-readability.mjs 가 만든 스냅샷 + 인덱스 (data/readability/*.json)
// 라우트 routes/readability.js 가 요청 시 최신 스냅샷을 읽어 본 함수에 주입.
//
// 3 뷰: (1) 국가별 종합 점수 비교  (2) 카테고리별 상세 (체크 pass rate)
//       (3) 페이지타입별 점수 분포
//
// 디자인: Visibility 대시보드와 통일 (dashboardStyles.js 토큰) — 라이트 테마.
//   body #F1F5F9 / Hero 다크 카드 #0F172A / 흰 section-card + 레드바 타이틀.

// 디자인 토큰 단일 소스 — Visibility 대시보드와 동일 (하드코딩 X)
import { FONT, RED } from '../src/dashboard/dashboardConsts.js'

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

import { loadRows, DOC_TO_CHECK } from './render-criteria.mjs'

// check id → 항목 정의. 체크리스트 문서(geo-agent-checklist.html)가 정의의 단일 출처.
// 카드에 통과율만 있으면 항목명이 축약어라 무슨 기준인지 알 수 없어 정의를 같이 싣는다.
// 파싱 실패해도 대시보드는 정의 없이 정상 동작 (빈 맵 폴백).
// 항목명에서 괄호와 그 안의 내용을 제거 (사용자 지시 2026-08-27).
//   '#24 Schema: CollectionPage (PLP)' → '#24 Schema: CollectionPage'
//   '#1 TTFB < 600ms (PSI)'           → '#1 TTFB < 600ms'
// 표시 단계에서만 적용 — 스냅샷·Raw 데이터의 원본 라벨은 그대로 둔다.
function stripParens(label) {
  return String(label == null ? '' : label).replace(/\s*[（(][^)）]*[)）]/g, '').trim()
}

function loadCheckDefs() {
  try {
    const defs = {}
    for (const r of loadRows()) {
      for (const cid of (DOC_TO_CHECK[r.no] || [])) {
        if (r.def || r.pass) defs[cid] = { def: r.def || '', pass: r.pass || '' }
      }
    }
    return defs
  } catch { return {} }
}

// 스냅샷의 categoryLabels 와 순서가 일치해야 함 (aggregate-readability.mjs 의 CATEGORIES)
const CATEGORIES = ['performance', 'accessibility', 'seo', 'geo_schema', 'geo_content', 'geo_platform']

// cc(소문자) → 표시명 — 집계기와 공유 single source (드리프트 방지).
import { CC_NAME } from './readability-cc.mjs'
// 신호등 기준 single source — 대시보드/뉴스레터/검수기준 공통 (src/shared/readabilityBand.js)
import { RD_BAND, RD_BAND_COLOR, rdBandColor } from '../src/shared/readabilityBand.js'
// 개선 가이드 (체크 × 페이지타입) — 필터 선택에 맞춰 해석·액션 아이템을 뽑는다
import { GUIDE, CATEGORY_GUIDE, PT_LABEL as GUIDE_PT_LABEL, pick } from '../src/shared/readabilityGuide.js'
// UI 문구 사전 (KO/EN) — 서버는 T[lang], 클라는 __RD.i18n 으로 받는다
import { T as UI, toClientDict } from '../src/shared/readabilityI18n.js'

// 현재 렌더 중인 언어 — renderReadabilityHTML 진입 시 설정한다.
// 서버 뷰 함수(viewCountry·catCard 등)가 모듈 최상위라 인자로 넘기지 않고 여기서 읽는다.
// 렌더는 동기 실행이므로 요청 간 섞이지 않는다.
let _LANG = 'ko'
const P = v => pick(v, _LANG)        // { ko, en } 쌍 → 현재 언어 문자열
const TT = () => UI[_LANG] || UI.ko  // UI 문구 사전

function escHtml(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

// 점수·통과율(0~100) → 신호등 색. 기준은 readabilityBand.js single source.
const scoreColor = rdBandColor
const rateColor = rdBandColor

// 가로 막대 1줄 — countText 주면 라벨과 막대 사이에 audit 페이지 수 컬럼 추가
function barRow(label, value, max, color, rightText, countText, meta) {
  const w = max > 0 ? Math.max(0, Math.min(100, (value / max) * 100)).toFixed(1) : 0
  const countCol = (countText != null && countText !== '') ? `<span class="bar-count">${escHtml(countText)}</span>` : ''
  // meta 가 있으면 항목명·정의·Pass 기준을 각각 고정 열로 — 정의가 항상 같은 x 에서 시작한다
  const labelInner = meta
    ? `<span class="bar-name">${escHtml(label)}</span><span class="bar-def">${escHtml(meta.def || '')}</span><span class="bar-pass">${escHtml(meta.pass || '')}</span>`
    : escHtml(label)
  return `<div class="bar-row${meta ? ' has-def' : ''}">
    <span class="bar-label">${labelInner}</span>
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
    </div>
  </div>`

  return hero + sectionCard('① 국가별 종합 점수 비교', RED, `<div class="bars">${bars}</div>`)
}

// ─── 뷰 2: 카테고리별 상세 (체크 pass rate) ─────────────────────────────────
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

  const checkRate = c => c.applicable > 0 ? +(c.pass / c.applicable * 100).toFixed(1) : null
  const DEFS = loadCheckDefs()
  const cardHead = `<div class="bar-row bar-head has-def">
    <span class="bar-label"><span class="bar-name">항목</span><span class="bar-def">정의</span><span class="bar-pass">Pass 기준</span></span>
    <div class="bar-track"></div><span class="bar-value">통과율</span></div>`
  // 클라이언트 짝(renderCategoryCards)과 동일 구조 — design.md §5.8 서버↔클라 짝.
  // 카테고리 설명(what)은 제목 옆, why 는 그 아래 줄.
  const catCard = (name, avg, sub, checksArr, catKey) => {
    const checkRows = cardHead + checksArr.slice().sort((a, b) => a.label.localeCompare(b.label, 'en', { numeric: true })).map(c => {
      const rate = checkRate(c)
      const right = rate == null ? '—' : `${rate}% (${c.pass}/${c.applicable})`
      return barRow(stripParens(c.label), rate ?? 0, 100, rateColor(rate), right, '', DEFS[c.cid])
    }).join('')
    const cg = CATEGORY_GUIDE[catKey] || null
    return `<div class="cat-card">
      <div class="cat-head">
        <span class="cat-name">${escHtml(name)}</span>
        ${cg ? `<span class="cat-what">${escHtml(P(cg.what))}</span>` : ''}
        <span class="cat-avg" style="color:${scoreColor(avg)}">${avg ?? '—'}</span>
      </div>
      <div class="cat-sub">${checksArr.length} 체크 · ${sub}</div>
      <div class="bars sm">${checkRows}</div>
    </div>`
  }

  // GEO 3분류가 카테고리로 승격돼 특수 분기 불필요 — 전부 동일 경로 (평균 points 로 통일)
  const cards = CATEGORIES.map(cat => {
    const checks = byCat[cat] || []
    const avg = o.categories ? o.categories[cat] : null
    return catCard(labels[cat] || cat, avg, '평균 points', checks, cat)
  }).join('')

  return sectionCard(`② 카테고리 ${CATEGORIES.length}분할 상세 — 체크별 통과율`, '#3B82F6', `<div class="cat-grid">${cards}</div>`)
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

// ─── 클라이언트 JS (탭 전환 + 국가/페이지타입 필터 재렌더) ────────────────────
// function.toString() 으로 임베드 — 본 함수 본문은 외부 template literal 밖이라
// design.md §6.1 (template 보간 함정) 회피. 본문은 self-contained (모듈 스코프 참조 X).
// 서버 뷰 함수(viewXxx)는 <noscript> 폴백에서 재사용. 두 곳이 같은 마круп
// (.section-card/.bars/.bar-row/.hero 클래스) 를 공유 — design.md §5.8 서버↔클라 짝.
function readabilityClient() {
  var ALL = window.__RD_ALL || null
  var RD = window.__RD || {}
  var LATEST_DATE = RD.date
  var CATS = Object.keys(RD.categoryLabels || {})   // 스냅샷이 정의한 카테고리 순서 그대로 (6분류)
  // 신호등 색·임계값은 서버가 __RD 로 주입 (readabilityBand.js single source)
  // UI 문구 사전 · 언어 — 서버가 __RD 로 주입 (readabilityI18n.js single source)
  var I = RD.i18n || {}
  var LANG = RD.lang === 'en' ? 'en' : 'ko'
  // { ko, en } 쌍에서 현재 언어를 꺼낸다 (문자열이면 그대로 — 구버전 스냅샷 호환)
  function P(v) { if (v == null) return v; if (typeof v === 'string') return v; return v[LANG] != null ? v[LANG] : v.ko }
  // '{max}% 미만 {n}개' 같은 템플릿 치환
  function TPL(key, vars) {
    var out = I[key] || ''
    Object.keys(vars || {}).forEach(function (k) { out = out.split('{' + k + '}').join(vars[k]) })
    return out
  }
  // 페이지타입 라벨 — 스냅샷 label 대신 이중언어 사전 우선
  function ptLabel(id, fallback) { var g = (RD.ptLabel || {})[id]; return g ? P(g) : (fallback || id) }
  var BC = RD.bandColor || { good: '#15803D', warn: '#B45309', crit: '#BE123C', na: '#94A3B8' }
  var BAND = RD.band || { good: 80, warn: 50 }
  var LEAD = BC.good, BEHIND = BC.warn, CRIT = BC.crit, COMP = BC.na, RED = '#CF0652'
  var state = { tab: 'country', cc: 'all', pt: 'all', fcheck: 'all', pf: 'all' }
  var _rawData = null

  function esc(s) {
    return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
  }
  // 서버 rdBandColor 의 클라이언트 짝 (design.md §5.8) — 점수/통과율 동일 기준
  function scoreColor(v) { if (v == null) return COMP; if (v >= BAND.good) return LEAD; if (v >= BAND.warn) return BEHIND; return CRIT }
  var rateColor = scoreColor
  // 항목 라벨의 괄호 부연 제거 — renderCategoryCards·renderGuideSection 공용이라 최상위에 둔다.
  // (renderCategoryCards 안에 중첩돼 있어 renderGuideSection 에서 ReferenceError 가 났다)
  function stripParens(l) { return String(l == null ? '' : l).replace(/\s*[（(][^)）]*[)）]/g, '').trim() }
  function num(n) { return (n == null ? 0 : n).toLocaleString() }
  function barRow(label, value, max, color, rightText, countText, meta) {
    var w = max > 0 ? Math.max(0, Math.min(100, (value / max) * 100)).toFixed(1) : 0
    var countCol = (countText != null && countText !== '') ? '<span class="bar-count">' + esc(countText) + '</span>' : ''
    var labelInner = meta
      ? '<span class="bar-name">' + esc(label) + '</span><span class="bar-def">' + esc(meta.def || '') + '</span><span class="bar-pass">' + esc(meta.pass || '') + '</span>'
      : esc(label)
    return '<div class="bar-row' + (meta ? ' has-def' : '') + '"><span class="bar-label">' + labelInner + '</span>' + countCol +
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

  function renderCountry() {
    var pt = state.pt, scope = getScope(state.cc)
    var ptLabel = pt !== 'all' && RD.overall.pageTypes[pt] ? RD.overall.pageTypes[pt].label : null
    var heroScore = pt === 'all' ? scope.avgScore : (scope.pageTypes[pt] ? scope.pageTypes[pt].avgScore : null)
    var scopeName = state.cc === 'all' ? '전체' : ccLabel(state.cc)
    var hero = '<div class="hero"><div class="hero-top">' +
      '<span class="hero-brand">GEO Readability Audit</span>' +
      '<span class="hero-meta">측정일 ' + esc(RD.date) + '</span></div>' +
      '<div class="hero-body"><div class="hero-left">' +
      '<div class="hero-label">' + esc(scopeName) + (ptLabel ? ' · ' + esc(ptLabel) : '') + ' 평균</div>' +
      '<div class="hero-score-row"><span class="hero-score" style="color:' + scoreColor(heroScore) + '">' + (heroScore == null ? '—' : heroScore) + '</span><span class="hero-pct">/ 100</span></div>' +
      '<div class="hero-info">URL <strong>' + num(scope.urlCount) + '</strong> · 채점 <strong>' + num(scope.scoredCount) + '</strong> · 국가 <strong>' + Object.keys(RD.countries).length + '</strong></div>' +
      '</div></div></div>'

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
      ? '<div class="tab-note">페이지 타입 «' + esc(ptLabel) + '» 필터가 적용된 국가별 점수입니다.</div>'
      : ''
    return hero + note + sectionCard(title, RED, '<div class="bars">' + bars + '</div>') + renderCategorySection(scope, '②') + renderGuideSection(scope, '③')
  }

  // 체크별 통과율 카테고리 카드 묶음 — 국가/페이지타입 탭 양쪽에서 재사용 (별도 항목별 탭 X)
  // 카테고리는 스냅샷의 categoryLabels 순서를 그대로 따른다 (GEO 3분류 승격 후 6개)
  function renderCategoryCards(scope) {
    var labels = RD.categoryLabels || {}
    var byCat = {}; CATS.forEach(function (c) { byCat[c] = [] })
    Object.entries(scope.checks || {}).forEach(function (e) {
      var c = e[1]; if (!byCat[c.cat]) byCat[c.cat] = []; byCat[c.cat].push(Object.assign({ cid: e[0] }, c))
    })
    function checkRate(c) { return c.applicable > 0 ? +(c.pass / c.applicable * 100).toFixed(1) : null }
    function avgRate(arr) {
      var vals = arr.map(checkRate).filter(function (r) { return r != null })
      return vals.length ? +(vals.reduce(function (s, r) { return s + r }, 0) / vals.length).toFixed(1) : null
    }
    function card(name, avg, sub, checksArr, catKey) {
      var defs = RD.checkDefs || {}
      var head = '<div class="bar-row bar-head has-def"><span class="bar-label">' +
        '<span class="bar-name">항목</span><span class="bar-def">정의</span><span class="bar-pass">Pass 기준</span></span>' +
        '<div class="bar-track"></div><span class="bar-value">통과율</span></div>'
      var rows = head + checksArr.slice().sort(function (a, b) { return a.label.localeCompare(b.label, 'en', { numeric: true }) }).map(function (c) {
        var rate = checkRate(c)
        var right = rate == null ? '—' : rate + '% (' + c.pass + '/' + c.applicable + ')'
        return barRow(stripParens(c.label), rate == null ? 0 : rate, 100, rateColor(rate), right, '', defs[c.cid])
      }).join('')
      // 이 영역이 무엇을 보는 영역인지 — 제목 바로 옆에 붙인다 (사용자 지시 2026-08-30).
      // what 은 제목 옆 인라인, why(안 되면 생기는 일)는 그 아래 줄.
      var cg = (RD.catGuide || {})[catKey] || null
      var whatInline = cg ? '<span class="cat-what">' + esc(P(cg.what)) + '</span>' : ''
      return '<div class="cat-card">' +
        '<div class="cat-head">' +
          '<span class="cat-name">' + esc(name) + '</span>' + whatInline +
          '<span class="cat-avg" style="color:' + scoreColor(avg) + '">' + (avg == null ? '—' : avg) + '</span>' +
        '</div>' +
        '<div class="cat-sub">' + checksArr.length + ' 체크 · ' + sub + '</div>' +
        '<div class="bars sm">' + rows + '</div></div>'
    }
    var out = []
    CATS.forEach(function (cat) {
      var checks = byCat[cat] || []
      // GEO 3분류가 카테고리로 승격돼 특수 분기 불필요 — 전부 동일 경로.
      // 지표도 '평균 통과율'(체크 단순평균) 이 아니라 다른 카테고리와 같은 '평균 points'
      // (페이지별 통과/적용 → 평균) 로 통일된다.
      var avg = scope.categories ? scope.categories[cat] : null
      out.push(card(labels[cat] || cat, avg, '평균 points', checks, cat))
    })
    return out.join('')
  }

  // ── 필터 조합별 자동 해석 ─────────────────────────────────────────────────
  // 손으로 쓴 notes 만으로는 11사이트 × 9타입 조합을 다 덮을 수 없다.
  // 현재 선택된 국가·타입의 실제 수치를 스냅샷에서 계산해 문장을 만든다
  // (사용자 지시 2026-08-30: 모든 필터마다, 중복 선택에서도 달라져야 함).
  function rateOf(bag, cid) {
    var c = bag && bag[cid]
    return (c && c.applicable) ? +(c.pass / c.applicable * 100).toFixed(1) : null
  }
  // 선택된 페이지타입 기준으로 사이트별 통과율 — pt 가 all 이면 사이트 전체 기준
  function ratesByCc(cid, ptId) {
    var out = []
    Object.keys(RD.countries || {}).forEach(function (cc) {
      var v = RD.countries[cc]
      var bag = ptId && v.pageTypes && v.pageTypes[ptId] && v.pageTypes[ptId].checks
        ? v.pageTypes[ptId].checks : v.checks
      var r = rateOf(bag, cid)
      if (r != null) out.push({ cc: cc, rate: r })
    })
    return out.sort(function (a, b) { return b.rate - a.rate })
  }
  // 선택된 국가 기준으로 페이지타입별 통과율
  function ratesByPt(cid, scope) {
    var out = []
    Object.keys(scope.pageTypes || {}).forEach(function (id) {
      var p = scope.pageTypes[id]
      var r = rateOf(p.checks, cid)
      if (r != null) out.push({ pt: id, label: p.label || id, rate: r })
    })
    return out.sort(function (a, b) { return b.rate - a.rate })
  }
  function autoNotes(cid, rate, scope, ccId, ptId) {
    var out = []
    var ptName = ptId ? ptLabel(ptId, (RD.overall.pageTypes[ptId] || {}).label) : null
    var ptBasis = ptName ? TPL('tplPtBasis', { p: ptName }) : ''

    // ① 같은 조건의 전체 평균 대비 위치. 페이지타입을 골랐으면 '그 타입의 전 사이트 평균' 과 비교한다.
    var baseBag = ptId && RD.overall.pageTypes && RD.overall.pageTypes[ptId]
      ? RD.overall.pageTypes[ptId].checks : RD.overall.checks
    var baseName = ptId ? TPL('tplBasePt', { p: ptName }) : (I.tplBaseAll || '')
    var allRate = rateOf(baseBag, cid)
    if (allRate != null && Math.abs(rate - allRate) >= 3) {
      var d = +(rate - allRate).toFixed(1)
      out.push(TPL(d > 0 ? 'tplDiffHigh' : 'tplDiffLow',
        { base: baseName, r: allRate, d: Math.abs(d).toFixed(1) }))
    }
    // ② 국가 선택 시 — 사이트 간 순위와 벤치마크
    if (ccId) {
      var byCc = ratesByCc(cid, ptId)
      var idx = -1
      for (var i = 0; i < byCc.length; i++) if (byCc[i].cc === ccId) idx = i
      if (idx >= 0 && byCc.length >= 3) {
        var best = byCc[0], worst = byCc[byCc.length - 1]
        var pos = TPL('tplPos', { i: idx + 1, n: byCc.length })
        if (idx === 0) out.push(TPL('tplTop', { p: ptBasis }))
        else if (idx === byCc.length - 1) out.push(TPL('tplBottom', { p: ptBasis, pos: pos, best: ccLabel(best.cc), br: best.rate }))
        else out.push(TPL('tplMid', { p: ptBasis, pos: pos, best: ccLabel(best.cc), br: best.rate, worst: ccLabel(worst.cc), wr: worst.rate }))
      }
    }
    // ③ 페이지타입 선택 시 — 같은 사이트 내 타입 간 순위
    if (ptId) {
      var byPt = ratesByPt(cid, scope)
      var j = -1
      for (var k = 0; k < byPt.length; k++) if (byPt[k].pt === ptId) j = k
      if (j >= 0 && byPt.length >= 3) {
        var bp = byPt[0]
        var bpName = ptLabel(bp.pt, bp.label)
        if (j === byPt.length - 1) out.push(TPL('tplPtBottom', { n: byPt.length, best: bpName, br: bp.rate }))
        else if (j > 0) out.push(TPL('tplPtMid', { i: j + 1, n: byPt.length, best: bpName, br: bp.rate }))
      }
    }
    return out
  }

  // ── 개선 가이드 — 현재 필터(국가 × 페이지타입)에서 심각한 항목만 ──────────────
  // 임계값 70 — 80(신호등 '주의') 이 아니라 더 좁힌다. 개선 여력이 아니라
  // "지금 당장 손봐야 하는 것" 만 남기기 위함 (사용자 지시 2026-08-30).
  var CRITICAL_MAX = 70
  function renderGuideSection(scope, secNo) {
    var G = RD.guide || {}
    var pt = state.pt
    var slot = (pt !== 'all' && scope.pageTypes && scope.pageTypes[pt] && scope.pageTypes[pt].checks)
      ? scope.pageTypes[pt] : null
    var checks = slot ? slot.checks : (scope.checks || {})
    var ptName = slot ? ptLabel(pt, slot.label) : (I.scopeAllPt || '전체 타입')
    var scopeName = state.cc === 'all' ? (I.scopeAll || '전체') : ccLabel(state.cc)
    var title = secNo + ' ' + TPL('tplSecUrgent', { scope: scopeName, type: ptName })

    var rows = []
    Object.keys(checks).forEach(function (cid) {
      var c = checks[cid]
      if (!c || !c.applicable) return
      var rate = +(c.pass / c.applicable * 100).toFixed(1)
      if (rate >= CRITICAL_MAX) return
      var g = G[cid]; if (!g) return
      // base → byCc → byPt 순으로 덮어쓰기. notes 는 현재 필터 조건에 맞는 문장만.
      var ccId = state.cc === 'all' ? null : state.cc
      var ptId = slot ? pt : null
      var byC = (ccId && g.byCc && g.byCc[ccId]) || {}
      var byP = (ptId && g.byPt && g.byPt[ptId]) || {}
      var notes = (g.notes || []).filter(function (n) {
        if (n.cc && !(ccId && n.cc.indexOf(ccId) >= 0)) return false
        if (n.ccNot && (!ccId || n.ccNot.indexOf(ccId) >= 0)) return false
        if (n.pt && !(ptId && n.pt.indexOf(ptId) >= 0)) return false
        return true
      }).map(function (n) { return P(n.text) })
      rows.push({ label: c.label, rate: rate, gap: c.applicable - c.pass,
        what: P(g.what), why: P(g.why), pin: g.pin === true,
        where: P(byP.where || byC.where || g.where),
        act: P(byP.action || byC.action || g.action),
        notes: notes, auto: autoNotes(cid, rate, scope, ccId, ptId) })
    })
    if (!rows.length) {
      return sectionCard(title, '#BE123C',
        '<div class="tab-note">' + esc(TPL('tplUrgentNone', { max: CRITICAL_MAX })) + '</div>')
    }
    // pin 항목(선행 조건)은 통과율과 무관하게 맨 위 — 이게 막히면 나머지가 의미 없다
    rows.sort(function (a, b) {
      if (a.pin !== b.pin) return a.pin ? -1 : 1
      return (a.rate - b.rate) || (b.gap - a.gap)
    })

    var html = rows.map(function (r) {
      return '<div class="gd-row">' +
        '<div class="gd-head">' +
          (r.pin ? '<span class="gd-pin">' + esc(I.gPin) + '</span>' : '') +
          '<span class="gd-name">' + esc(stripParens(r.label)) + '</span>' +
          '<span class="gd-rate" style="color:' + rateColor(r.rate) + '">' + r.rate + '%</span>' +
          '<span class="gd-gap">' + esc(I.gGap) + ' ' + num(r.gap) + 'p</span>' +
        '</div>' +
        '<div class="gd-line"><span class="gd-k">' + esc(I.gWhat) + '</span>' + esc(r.what) + '</div>' +
        '<div class="gd-line"><span class="gd-k">' + esc(I.gWhy) + '</span>' + esc(r.why) + '</div>' +
        '<div class="gd-line gd-fix"><span class="gd-k gd-k-where">' + esc(I.gWhere) + '</span>' + esc(r.where) + '</div>' +
        '<div class="gd-line gd-fix"><span class="gd-k gd-k-act">' + esc(I.gAct) + '</span>' + esc(r.act) + '</div>' +
        (r.auto.length ? '<div class="gd-line gd-note"><span class="gd-k">' + esc(I.gNow) + '</span>' +
          esc(r.auto.join(' ')) + '</div>' : '') +
        (r.notes.length ? r.notes.map(function (t) {
          return '<div class="gd-line gd-note"><span class="gd-k">' + esc(I.gNote) + '</span>' + esc(t) + '</div>'
        }).join('') : '') +
      '</div>'
    }).join('')
    var note = '<div class="tab-note">' + esc(TPL('tplUrgentNote', { max: CRITICAL_MAX, n: rows.length })) + '</div>'
    return note + sectionCard(title, '#BE123C', '<div class="gd-list">' + html + '</div>')
  }

  // 체크별 통과율 섹션 — 국가 + (집계기가 nest 한 경우) 페이지타입 필터 반영
  function renderCategorySection(scope, secNo) {
    var scopeName = state.cc === 'all' ? '전체' : ccLabel(state.cc)
    if (state.pt !== 'all') {
      var ptSlot = scope.pageTypes && scope.pageTypes[state.pt]
      // 신규 스냅샷: pageType 슬롯에 checks nest → 페이지타입 분해 통과율
      if (ptSlot && ptSlot.checks) {
        var ptName = ptSlot.label || state.pt
        var ptTitle = secNo + ' 체크별 통과율 (' + esc(scopeName) + ' · ' + esc(ptName) + ')'
        var ptNote = '<div class="tab-note">표본 ' + num(ptSlot.count) + ' URL — 표본이 적은 페이지타입은 통과율 변동이 큽니다.</div>'
        return ptNote + sectionCard(ptTitle, '#3B82F6', '<div class="cat-grid">' + renderCategoryCards(ptSlot) + '</div>')
      }
      // 구 스냅샷 호환: checks nest 없음 → 국가 필터만 반영 안내
      var note = '<div class="tab-note">체크별 통과율은 이 스냅샷에 페이지타입 분해 데이터가 없어 «페이지 타입» 필터가 적용되지 않습니다. 국가 필터(' + esc(scopeName) + ')만 반영됩니다.</div>'
      return note + sectionCard(secNo + ' 체크별 통과율 (' + esc(scopeName) + ')', '#3B82F6', '<div class="cat-grid">' + renderCategoryCards(scope) + '</div>')
    }
    return sectionCard(secNo + ' 체크별 통과율 (' + esc(scopeName) + ')', '#3B82F6', '<div class="cat-grid">' + renderCategoryCards(scope) + '</div>')
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
    return sectionCard('① 페이지타입별 점수 (' + esc(scopeName) + ')', '#059669', '<div class="bars">' + bars + '</div>') + renderCategorySection(scope, '②') + renderGuideSection(scope, '③')
  }

  // 검수 기준 + 검수 URL 다운로드 탭
  function renderCriteria() {
    // 동일출처 self-host (원본 onrender 는 x-frame-options:DENY 라 iframe 불가)
    // 점수 제외 전체 항목표 — 기준 문서로 읽히도록 통과율 열을 뺀 버전 (routes/readability.js)
    var src = RD.paths.criteria
    var dl = '<div class="crit-dl"><div class="crit-dl-text">' +
      '<div class="crit-dl-title">검수 URL 다운로드</div>' +
      '<div class="crit-dl-sub">측정일 ' + esc(RD.date) + ' 기준 어딧 대상 전체 URL (URL · 국가 · 페이지타입 · 점수)</div></div>' +
      '<a class="crit-dl-btn" href="' + RD.paths.csv + '" download>CSV 다운로드</a></div>'
    var frame = '<div class="crit-frame-head">검수 기준 — 6개 카테고리 41개 항목 (통과율은 위 탭에서 확인)</div>' +
      '<iframe class="crit-frame" src="' + src + '" loading="lazy"></iframe>'
    return sectionCard('검수 기준 · 검수 URL 다운로드', '#7C3AED', dl + frame)
  }

  // ── Raw 데이터 (페이지별 전체 체크 PASS/FAIL) — 국가·페이지타입(공유 필터 바) × 항목 · 결과 조합 ──
  function renderRaw() {
    var head = '<div class="fails-bar">' +
      '<div class="fg"><label for="rd-fcheck">항목</label><select id="rd-fcheck"><option value="all">전체 항목</option></select></div>' +
      '<div class="fg"><label for="rd-fpf">결과</label><select id="rd-fpf"><option value="all">전체</option><option value="pass">PASS</option><option value="fail">FAIL (논패스)</option></select></div>' +
      '<span id="rd-fails-count" class="fails-count"></span>' +
      '<a id="rd-fails-csv" class="crit-dl-btn fails-csv" href="#">CSV 전체 다운로드</a></div>'
    var note = '<div class="tab-note">상단 «국가 / 페이지 타입» 필터 + 여기 «항목 · 결과(PASS/FAIL)» 필터를 조합하면 해당 조건의 페이지별 체크 결과가 표로 나옵니다. 표는 상위 500건만, 전체는 CSV.</div>'
    if (ALL && LATEST_DATE && RD.date !== LATEST_DATE) note = '<div class="tab-note">Raw 데이터(PASS/FAIL)는 최신 측정분(' + esc(LATEST_DATE) + ') 기준만 제공됩니다 — 선택한 측정 월과 무관하게 최신 데이터가 표시됩니다.</div>' + note
    return sectionCard('Raw 데이터 (페이지별 체크 PASS/FAIL) — 국가 · 타입 · 항목 · 결과 조합', RED, note + head + '<div id="rd-fails-body" class="fails-body">불러오는 중…</div>')
  }
  function loadRaw() {
    function afterData() {
      var sel = document.getElementById('rd-fcheck')
      if (sel && sel.options.length <= 1) {
        var checks = _rawData.checks
        var ids = Object.keys(checks).sort(function (a, b) { return checks[a].label.localeCompare(checks[b].label, 'en', { numeric: true }) })
        sel.innerHTML = '<option value="all">전체 항목</option>' +
          ids.map(function (id) { return '<option value="' + id + '">' + esc(checks[id].label) + '</option>' }).join('')
        sel.value = state.fcheck || 'all'
        sel.addEventListener('change', function () { state.fcheck = sel.value; renderRawTable() })
      }
      var pf = document.getElementById('rd-fpf')
      if (pf && !pf._wired) { pf._wired = true; pf.value = state.pf || 'all'; pf.addEventListener('change', function () { state.pf = pf.value; renderRawTable() }) }
      var csv = document.getElementById('rd-fails-csv')
      if (csv && !csv._wired) { csv._wired = true; csv.addEventListener('click', function (e) { e.preventDefault(); downloadRawCsv() }) }
      renderRawTable()
    }
    if (_rawData) { afterData(); return }
    fetch(RD.paths.checks)
      .then(function (r) { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json() })
      .then(function (d) { _rawData = d; afterData() })
      .catch(function (e) { var b = document.getElementById('rd-fails-body'); if (b) b.textContent = 'Raw 데이터를 불러오지 못했습니다: ' + e })
  }
  function filteredRawRows() {
    if (!_rawData) return []
    var cc = state.cc, pt = state.pt, chk = state.fcheck || 'all', pf = state.pf || 'all', out = []
    _rawData.rows.forEach(function (r) {
      if (cc !== 'all' && r.cc !== cc) return
      if (pt !== 'all' && r.pt !== pt) return
      r.c.forEach(function (t) {
        // t = [checkId, pass01, hintIdx(-1=PASS)]
        if (chk !== 'all' && t[0] !== chk) return
        var isPass = t[1] === 1
        if (pf === 'pass' && !isPass) return
        if (pf === 'fail' && isPass) return
        out.push({ cc: r.cc, pt: r.pt, url: r.url, score: r.score, id: t[0], pass: isPass, hint: isPass ? '' : _rawData.hints[t[2]] })
      })
    })
    // 점수 오름차순(최저=가장 개선 시급) — 표는 상위 CAP 만 잘라 보여주므로 '상위 N' 라벨이 실제로 맞음.
    out.sort(function (a, b) { return a.score - b.score })
    return out
  }
  function renderRawTable() {
    var body = document.getElementById('rd-fails-body'); if (!body) return
    var rows = filteredRawRows(), CAP = 500
    var cntEl = document.getElementById('rd-fails-count')
    if (cntEl) cntEl.textContent = num(rows.length) + '건' + (rows.length > CAP ? ' · 상위 ' + CAP + '건 표시 (전체는 CSV)' : '')
    if (!rows.length) { body.innerHTML = '<div class="tab-note">조건에 맞는 데이터가 없습니다.</div>'; return }
    var checks = _rawData.checks, ccName = _rawData.ccName, pts = _rawData.pageTypes
    var trs = rows.slice(0, CAP).map(function (r) {
      // http(s) 만 링크로 — javascript:/data: 등 스킴은 평문 표기(admin origin 에서 실행 방지).
      var urlCell = /^https?:\/\//i.test(r.url)
        ? '<a href="' + esc(r.url) + '" target="_blank" rel="noopener">' + esc(r.url) + '</a>'
        : esc(r.url)
      var resultCell = r.pass ? '<span class="rd-pass">PASS</span>' : '<span class="rd-fail">FAIL</span>'
      return '<tr><td>' + esc(ccName[r.cc] || r.cc.toUpperCase()) + '</td><td>' + esc(pts[r.pt] || r.pt) + '</td>' +
        '<td class="fails-url">' + urlCell + '</td>' +
        '<td>' + esc((checks[r.id] || {}).label || r.id) + '</td>' +
        '<td>' + resultCell + '</td>' +
        '<td class="fails-hint">' + esc(r.hint) + '</td>' +
        '<td class="fails-score" style="color:' + scoreColor(r.score) + '">' + r.score + '</td></tr>'
    }).join('')
    body.innerHTML = '<table class="fails-table"><thead><tr><th>국가</th><th>타입</th><th>URL</th><th>항목</th><th>결과</th><th>실패 사유</th><th>점수</th></tr></thead><tbody>' + trs + '</tbody></table>'
  }
  function downloadRawCsv() {
    if (!_rawData) return
    var rows = filteredRawRows(), checks = _rawData.checks, ccName = _rawData.ccName, pts = _rawData.pageTypes
    function cell(v) { v = String(v == null ? '' : v); return /[",\n]/.test(v) ? '"' + v.replace(/"/g, '""') + '"' : v }
    var lines = ['country,page_type,url,check,result,reason,score']
    rows.forEach(function (r) { lines.push([cell(ccName[r.cc] || r.cc), cell(pts[r.pt] || r.pt), cell(r.url), cell((checks[r.id] || {}).label || r.id), cell(r.pass ? 'PASS' : 'FAIL'), cell(r.hint), cell(r.score)].join(',')) })
    var blob = new Blob(['﻿' + lines.join('\n')], { type: 'text/csv;charset=utf-8' })
    var a = document.createElement('a'); a.href = URL.createObjectURL(blob)
    a.download = 'geo-readability-raw-' + (_rawData.date || '') + '.csv'
    document.body.appendChild(a); a.click(); document.body.removeChild(a); URL.revokeObjectURL(a.href)
  }

  function renderPanel() {
    var el = document.getElementById('rd-panel')
    if (!el) return
    var fb = document.getElementById('rd-filterbar')
    if (fb) fb.style.display = (state.tab === 'criteria') ? 'none' : ''
    if (state.tab === 'country') el.innerHTML = renderCountry()
    else if (state.tab === 'criteria') el.innerHTML = renderCriteria()
    else if (state.tab === 'raw') { el.innerHTML = renderRaw(); loadRaw() }
    else el.innerHTML = renderPageType()
  }

  function buildControls() {
    var nav = document.getElementById('rd-tabnav')
    // raw·criteria 탭은 /admin/* 리소스를 fetch/iframe → 비인증 게시본에선 제외.
    var tabs = [['country', '국가별'], ['pagetype', '페이지 타입별']]
    tabs.push(['raw', 'Raw 데이터'], ['criteria', '검수 기준'])   // 어드민·게시본 동일 (RD.paths 로 게이트별 URL 분기)
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
    var ptSel = document.getElementById('rd-pt')
    function rebuildCcPt() {
      // 선택 월의 데이터 기준으로 국가/페이지타입 옵션 재구성 (없어진 값이면 all 로 복귀)
      ccSel.innerHTML = ['<option value="all">전체 국가</option>'].concat(
        Object.keys(RD.countries).sort().map(function (cc) { return '<option value="' + cc + '">' + esc(ccLabel(cc)) + '</option>' })
      ).join('')
      if (state.cc !== 'all' && !RD.countries[state.cc]) state.cc = 'all'
      ccSel.value = state.cc
      ptSel.innerHTML = ['<option value="all">전체 페이지 타입</option>'].concat(
        Object.entries(RD.overall.pageTypes || {}).map(function (e) { return '<option value="' + e[0] + '">' + esc(e[1].label) + '</option>' })
      ).join('')
      if (state.pt !== 'all' && !(RD.overall.pageTypes || {})[state.pt]) state.pt = 'all'
      ptSel.value = state.pt
    }
    rebuildCcPt()
    ccSel.addEventListener('change', function () { state.cc = ccSel.value; renderPanel() })
    ptSel.addEventListener('change', function () { state.pt = ptSel.value; renderPanel() })
    // ── 측정 월 필터 — 월별 최신 스냅샷 전환 ──
    var mWrap = document.getElementById('rd-month-wrap'), mSel = document.getElementById('rd-month')
    var mDates = ALL ? Object.keys(ALL).sort() : []
    if (mWrap && mSel && mDates.length > 1) {
      mWrap.style.display = ''
      mSel.innerHTML = mDates.map(function (d) {
        var ym = d.slice(0, 4) + '년 ' + parseInt(d.slice(5, 7), 10) + '월'
        return '<option value="' + d + '">' + ym + ' (' + d.slice(5) + ' 측정)</option>'
      }).join('')
      mSel.value = RD.date
      mSel.addEventListener('change', function () {
        RD = ALL[mSel.value] || RD
        rebuildCcPt()
        renderPanel()
      })
    }
  }

  buildControls()
  renderPanel()
}

// 탭이 fetch 하는 리소스 경로. 어드민은 /admin/*(세션 인증), 게시본은 /p/*(IP allowlist).
// 게시본에서도 Raw 데이터·검수 기준 탭을 그대로 쓰기 위해 경로만 갈아끼운다.
export const ADMIN_PATHS = {
  checks: '/admin/readability/checks.json',
  csv: '/admin/readability/urls.csv',
  criteria: '/admin/readability/criteria.html',
}
export const PUBLIC_PATHS = {
  checks: '/p/GEO-Readability-Dashboard/checks.json',
  csv: '/p/GEO-Readability-Dashboard/urls.csv',
  criteria: '/p/GEO-Readability-Criteria',
}

export function renderReadabilityHTML({ snapshot, index, snapshots, adminMode = false, paths, lang = 'ko' } = {}) {
  _LANG = lang === 'en' ? 'en' : 'ko'
  const LANG = _LANG
  const t = TT()
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


  // 클라이언트 인터랙티브 렌더용 데이터 (탭/필터). 서버 뷰는 <noscript> fallback 유지.
  // adminMode 는 이제 리소스 경로 선택에만 쓰인다 (탭 구성은 어드민·게시본 동일).
  // 게시본은 /p/* 공개 라우트(IP allowlist)를, 어드민은 /admin/*(세션 인증)를 fetch.
  const buildClientData = snap => ({
    date: snap.date,
    adminMode: !!adminMode,
    band: RD_BAND,           // 신호등 임계값 — 클라 짝이 서버와 같은 기준 쓰도록 주입
    bandColor: RD_BAND_COLOR,
    lang: LANG,              // 클라가 { ko, en } 쌍에서 어느 쪽을 꺼낼지
    i18n: toClientDict(LANG), // UI 문구 사전 (함수 제외 — 직렬화 가능한 것만)
    ptLabel: GUIDE_PT_LABEL,  // 페이지타입 라벨 { ko, en } — 스냅샷 label 보다 우선
    guide: GUIDE,            // 개선 가이드 — 필터(국가×페이지타입) 변경 시 클라가 해석·액션 재생성
    catGuide: CATEGORY_GUIDE, // 6개 평가 영역이 각각 무엇을 보는지 (카드 상단 설명)
    paths: paths || (adminMode ? ADMIN_PATHS : PUBLIC_PATHS),
    categoryLabels: snap.categoryLabels || {},
    checkDefs: loadCheckDefs(),   // check id → 항목 정의 (체크리스트 문서 출처)
    ccName: Object.fromEntries(Object.keys(snap.countries).map(cc => [cc, CC_NAME[cc] || cc.toUpperCase()])),
    overall: snap.overall,
    countries: snap.countries,
  })
  const clientData = buildClientData(snapshot)
  // 측정 월 필터용 — 월별 최신 스냅샷 전체 임베드 (없으면 현재 1개)
  const monthSnaps = (Array.isArray(snapshots) && snapshots.length ? snapshots : [snapshot]).filter(x => x && x.overall)
  const rdAll = {}
  monthSnaps.forEach(x => { rdAll[x.date] = buildClientData(x) })
  if (!rdAll[snapshot.date]) rdAll[snapshot.date] = clientData

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
/* ── 탭 네비 + 필터 바 ── */
.htr{background:#fff;border:1px solid #E8EDF2;border-left:4px solid ${RED};border-radius:12px;padding:20px 24px;margin-bottom:20px}
.htr-title{margin:0 0 12px;font-size:18px;font-weight:800;color:#1A1A1A;letter-spacing:-0.3px}
.htr-p{margin:0 0 9px;font-size:14px;line-height:1.75;color:#475569}
.htr-p strong{color:#1A1A1A;font-weight:700}
.htr-em{background:#FFF1F2;color:${RED};font-weight:700;border-radius:4px;padding:1px 6px}
.htr-step{display:inline-block;background:#F1F5F9;color:#1A1A1A;border:1px solid #E2E8F0;border-radius:5px;padding:1px 8px;font-size:13px;font-weight:700;margin:0 2px}
@media(max-width:780px){.htr{padding:16px 16px}.htr-p{font-size:13px}}
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
.hero-label{font-size:14px;font-weight:600;color:#94A3B8;text-transform:uppercase;margin-bottom:8px;letter-spacing:0.5px}
.hero-score-row{display:flex;align-items:baseline;gap:8px;margin-bottom:8px}
.hero-score{font-size:52px;font-weight:900;letter-spacing:-2px}
.hero-pct{font-size:20px;color:#94A3B8}
.hero-info{font-size:14px;color:#94A3B8;line-height:1.7}
.hero-info strong{color:#fff;font-weight:700}
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
/* ── Raw 데이터 (페이지별 체크 PASS/FAIL 조합 필터) ── */
.gd-list{display:flex;flex-direction:column;gap:10px}
.gd-row{border:1px solid #FECDD3;border-left:3px solid #BE123C;border-radius:8px;padding:10px 14px;background:#fff}
.gd-head{display:flex;align-items:baseline;gap:10px;margin-bottom:4px}
.gd-name{font-size:14px;font-weight:800;color:#1A1A1A;flex:1}
.gd-pin{flex:0 0 auto;background:#BE123C;color:#fff;border-radius:4px;padding:1px 7px;font-size:11px;font-weight:800;letter-spacing:0.3px}
.gd-rate{font-size:14px;font-weight:800;font-variant-numeric:tabular-nums}
.gd-gap{font-size:12px;color:#94A3B8;font-variant-numeric:tabular-nums;white-space:nowrap}
.gd-line{font-size:13px;line-height:1.65;color:#475569;display:flex;gap:8px;align-items:baseline;margin-top:3px}
.gd-line.gd-fix{color:#1A1A1A}
.gd-line.gd-note{color:#64748B;font-size:12.5px}
.gd-k{flex:0 0 66px;font-size:11px;font-weight:800;color:#94A3B8;text-align:right}
.gd-k-where{color:#BE123C}
.gd-k-act{color:#BE123C}
.cat-what{flex:1 1 auto;min-width:0;font-size:12.5px;font-weight:500;color:#475569;line-height:1.5;padding-left:2px}
@media(max-width:780px){.cat-head{flex-wrap:wrap}.cat-what{flex:1 1 100%;order:3;padding-left:0;margin-top:3px}}
@media(max-width:780px){.gd-head{flex-wrap:wrap;gap:6px}.gd-name{flex:1 1 100%}.gd-line{flex-direction:column;gap:1px}.gd-k{text-align:left;flex:none}}
.rd-pass{display:inline-block;padding:2px 8px;border-radius:6px;font-weight:800;font-size:11px;background:#ECFDF5;color:#15803D;border:1px solid #A7F3D0}
.rd-fail{display:inline-block;padding:2px 8px;border-radius:6px;font-weight:800;font-size:11px;background:#FFF1F2;color:#BE123C;border:1px solid #FECDD3}
.fails-bar{display:flex;align-items:center;gap:14px;flex-wrap:wrap;margin-bottom:14px}
.fails-bar .fg{display:flex;align-items:center;gap:8px}
.fails-bar label{font-size:13px;font-weight:700;color:#475569}
.fails-bar select{font-family:inherit;font-size:13px;color:#1A1A1A;border:1px solid #CBD5E1;border-radius:8px;padding:6px 28px 6px 10px;background:#fff;cursor:pointer;max-width:320px}
.fails-count{font-size:13px;font-weight:700;color:#475569}
.fails-csv{font-size:13px;padding:8px 16px;margin-left:auto}
.fails-body{overflow-x:auto}
.fails-table{width:100%;border-collapse:collapse;font-size:12.5px}
.fails-table th{text-align:left;background:#F8FAFC;color:#64748B;font-weight:700;font-size:11px;text-transform:uppercase;letter-spacing:.3px;padding:8px 10px;border-bottom:2px solid #E8EDF2;position:sticky;top:0}
.fails-table td{padding:7px 10px;border-bottom:1px solid #F1F5F9;vertical-align:top}
.fails-table tr:hover td{background:#FAFBFC}
.fails-url{max-width:360px;word-break:break-all}
.fails-url a{color:#3B82F6;text-decoration:none}
.fails-url a:hover{text-decoration:underline}
.fails-hint{color:#475569;max-width:300px}
.fails-score{text-align:right;font-weight:800;font-variant-numeric:tabular-nums}
/* ── 카테고리 카드 ── */
.cat-grid{display:grid;grid-template-columns:1fr;gap:16px}
/* 카드 항목 행 — 항목명 · 정의 · Pass 기준을 각각 고정 열로 두어
   정의와 기준이 모든 행에서 같은 x 에서 시작하게 한다 (붙어 있어 안 읽히던 문제). */
.cat-card .bars.sm .bar-label{display:flex;align-items:baseline;flex:1 1 auto;min-width:0;white-space:normal}
.cat-card .bars.sm .bar-track{flex:0 0 96px;height:12px}
.cat-card .bars.sm .bar-value{flex:0 0 148px;font-size:14px}
.cat-card .bars.sm .bar-row{gap:16px;align-items:baseline}
.bar-name{flex:0 0 236px;padding-right:16px;font-size:14px;font-weight:600;color:#1A1A1A;letter-spacing:-0.3px}
.bar-def{flex:1 1 auto;min-width:0;padding-right:16px;font-size:13px;line-height:1.5;color:#64748B;font-weight:400;letter-spacing:-0.2px}
.bar-pass{flex:0 0 284px;font-size:12.5px;line-height:1.5;color:#94A3B8;font-weight:500;letter-spacing:-0.2px}
.bar-head.has-def .bar-name,.bar-head.has-def .bar-def,.bar-head.has-def .bar-pass{font-size:11px;font-weight:700;color:#94A3B8;text-transform:uppercase;letter-spacing:.3px}
.cat-card{background:#fff;border:1px solid #E8EDF2;border-radius:12px;padding:16px 18px}
.cat-head{display:flex;justify-content:space-between;align-items:baseline;gap:8px;margin-bottom:2px}
.cat-name{flex:0 0 auto;white-space:nowrap;font-size:19px;font-weight:800;color:#1A1A1A}
.cat-avg{flex:0 0 auto;font-size:30px;font-weight:900;letter-spacing:-1px}
.cat-sub{font-size:13px;color:#94A3B8;margin-bottom:14px}
@media (max-width:780px){
  .tab-bar{padding:10px 16px}
  .dash-container{padding:16px 14px}
  .hero{padding:20px 18px}
  .hero-body{gap:20px}
  .hero-score{font-size:44px}
  .section-header,.section-body{padding-left:18px;padding-right:18px}
  .bar-label{flex:0 0 150px;font-size:12px}
  .bars.sm .bar-label{flex:0 0 130px}
  .cat-card .bars.sm .bar-label{flex:1 1 100%;flex-wrap:wrap}
  .cat-card .bars.sm .bar-track{flex:0 0 80px}
  .cat-card .bars.sm .bar-value{flex:0 0 118px;font-size:13px}
  .bar-name{flex:1 1 100%;padding-right:0;font-size:13px}
  .bar-def{flex:1 1 100%;padding-right:0;margin-top:2px;font-size:12px}
  .bar-pass{flex:1 1 100%;margin-top:2px;font-size:11.5px}
  .bar-head.has-def{display:none}
  .bar-value{flex:0 0 100px;font-size:11px}
  .bar-count{flex:0 0 56px;font-size:11px}
  .crit-frame{height:60vh}
  .cat-grid{grid-template-columns:1fr}
}
@media (max-width:480px){
  .dash-container{padding:12px 10px}
  .bar-label{flex:0 0 110px;font-size:11px;white-space:normal}
  .bar-value{flex:0 0 88px}
  .bar-count{flex:0 0 46px;font-size:10px}
}
</style></head><body>

<div class="tab-bar">
  <span class="tb-title">${escHtml(t.pageTitle)}</span>
  <a class="back" href="/admin/">${escHtml(t.backAdmin)}</a>
</div>

<div class="dash-container">
  <!-- How to Read — 사용자 제공 원문 그대로, 강조만 덧입힘 (사용자 지시 2026-08-30) -->
  <section class="htr">
    <h2 class="htr-title">${escHtml(t.howToRead)}</h2>
    <p class="htr-p"><strong>Readability</strong>는 <strong>AI 관점에서의 가독성</strong>을 뜻하며, 웹페이지의 콘텐츠가
      AI가 읽고 활용하기 좋은 상태인지 평가하는 지표입니다. ‘26년 6월부터 LG.com의 Readability 현황을 파악하기 위해
      <strong>10개 전략 국가</strong>의 주요 페이지 유형,
      총 <strong id="htr-urlcount">${escHtml((snapshot.overall.urlCount || 0).toLocaleString('en-US'))}개 페이지</strong>를
      평가했습니다(<span class="htr-em">매월 마지막 주차 진행</span>). 10개 국가 사이트에 더해
      <strong>글로벌 대표 사이트(lg.com/global)</strong>를 별도 사이트로 포함했습니다.</p>
    <p class="htr-p">Readability 점수는 <strong>전체 평가항목 중 기준을 충족한 항목의 비율(%)을 100점 기준으로 환산</strong>한
      점수입니다. 평가는 사이트 성능, AI 웹접근성, Basic SEO 적합도, 스키마마크업, 고인용 콘텐츠, AI Crawlability의
      <strong>6개 영역, 총 38개 체크리스트</strong>를 기준으로 진행했습니다.
      각 항목의 정의와 판정 기준은 <strong>검수 기준 탭</strong>과 대시보드 내 <strong>항목별 간략 설명</strong>에서
      확인하실 수 있습니다.</p>
    <p class="htr-p">각 국가·페이지 담당 부서에서는 <strong>국가별 / 페이지 타입별 탭</strong>을 통해 담당 범위의 검수 결과를
      확인하실 수 있습니다. 각 탭에서
      <span class="htr-step">(1) 전체 점수</span> <span class="htr-step">(2) 세부 항목별 점수</span>
      <span class="htr-step">(3) 시급 개선 항목</span> 을 순서대로 살펴보시면,
      현재 보완이 필요한 영역을 파악하고 <strong>개선 과제를 도출하여 업무에 활용</strong>하실 수 있습니다.</p>
  </section>

  <div class="tab-nav" id="rd-tabnav"></div>
  <div class="filter-bar" id="rd-filterbar">
    <div class="fg" id="rd-month-wrap" style="display:none"><label for="rd-month">${escHtml(t.fMonth)}</label><select id="rd-month"></select></div>
    <div class="fg"><label for="rd-cc">${escHtml(t.fCountry)}</label><select id="rd-cc"></select></div>
    <div class="fg"><label for="rd-pt">${escHtml(t.fPageType)}</label><select id="rd-pt"></select></div>
  </div>
  <div id="rd-panel"></div>

  <noscript>
    ${viewCountryComparison(snapshot)}
    ${viewCategoryDetail(snapshot)}
    ${viewPageTypes(snapshot)}
    ${sectionCard('Raw 데이터 (페이지별 체크 PASS/FAIL)', RED, `<div class="tab-note">조합 필터(국가·타입·항목·결과) 탭은 JavaScript 가 필요합니다. 원본 데이터: <a href="${(paths || (adminMode ? ADMIN_PATHS : PUBLIC_PATHS)).checks}">checks.json</a></div>`)}
  </noscript>
</div>

<script>window.__RD_ALL = ${JSON.stringify(rdAll).replace(/</g, '\\u003c')};
window.__RD = window.__RD_ALL[${JSON.stringify(snapshot.date)}];</script>
<script>(${readabilityClient.toString()})();</script>

</body></html>`
}
