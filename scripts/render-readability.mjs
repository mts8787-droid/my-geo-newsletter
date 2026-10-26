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

import { loadRows, localizeRows, DOC_TO_CHECK } from './render-criteria.mjs'

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

// 체크 id → { def, pass, label } — 체크리스트 문서 출처. lang 에 맞춰 EN 사전을 적용한다.
function loadCheckDefs(lang = 'ko') {
  try {
    const defs = {}
    for (const r of localizeRows(loadRows(), lang)) {
      for (const cid of (DOC_TO_CHECK[r.no] || [])) {
        if (r.def || r.pass || r.name) defs[cid] = { def: r.def || '', pass: r.pass || '', label: r.name || '' }
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
// 리소스 경로에 언어 파라미터 부착 — CSV·검수기준을 같은 언어로 받게 한다
function withLang(paths, lang) {
  if (lang !== 'en') return paths
  const q = u => u + (u.includes('?') ? '&' : '?') + 'lang=en'
  return { ...paths, csv: q(paths.csv), criteria: q(paths.criteria) }
}
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
      <span class="hero-meta">${escHtml(TT().measuredAt)} ${escHtml(snap.date)}</span>
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

  return hero + sectionCard('① ' + TT().secCountryScore, RED, `<div class="bars">${bars}</div>`)
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
  const DEFS = loadCheckDefs(_LANG)
  const cardHead = `<div class="bar-row bar-head has-def">
    <span class="bar-label"><span class="bar-name">${escHtml(TT().thItem)}</span><span class="bar-def">${escHtml(TT().thDef)}</span><span class="bar-pass">${escHtml(TT().thPass)}</span></span>
    <div class="bar-track"></div><span class="bar-value">${escHtml(TT().thRate)}</span></div>`
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

  return sectionCard(`② ${TT().secCheckRate}`, '#3B82F6', `<div class="cat-grid">${cards}</div>`)
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
  // scope = 상단 GNB (global | hs) — 아래 4개 탭(country·pagetype·raw·criteria)은 두 범위 공통,
  // 검수 기준은 같은 문서를 공유한다 (사용자 결정 2026-10-26).
  // items = 측정항목 체크박스 필터 — null 이면 전체, 아니면 { checkId: 1 } 선택 집합.
  //   항목별 통과율·개선 항목·Raw 데이터에만 적용하고 점수(평균)는 전체 항목 기준을 유지한다
  //   (점수 정의 = 38항목 통과 비율이라 부분 집합으로 다시 계산하면 다른 지표가 된다).
  var state = { scope: 'global', tab: 'country', cc: 'all', pt: 'all', fcheck: 'all', pf: 'all', t2: 'all', pr: 'all', items: null }
  var ITEM_TOTAL = 0
  function itemOn(id) { return !state.items || !!state.items[id] }
  function itemsCount() { return state.items ? Object.keys(state.items).length : ITEM_TOTAL }
  var _rawData = null
  // HS 콘텐츠 탭이 있는 측정분이 하나라도 있으면 탭을 노출 (없는 월에서는 안내 문구)
  function anyHs() { if (RD.hs) return true; if (!ALL) return false; return Object.keys(ALL).some(function (d) { return !!ALL[d].hs }) }

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
  function ccLabel(cc) { return RD.ccName[cc] || (RD.hs && RD.hs.sites && RD.hs.sites[cc]) || cc.toUpperCase() }

  function renderCountry() {
    var pt = state.pt, scope = getScope(state.cc)
    // 이중언어 헬퍼 ptLabel() 를 섀도잉하지 않게 변수명 분리 + EN 라벨 사용 (코드리뷰 2026-10-06)
    var ptLabelTxt = pt !== 'all' ? ptLabel(pt, (((RD.overall || {}).pageTypes || {})[pt] || {}).label) : null
    var heroScore = pt === 'all' ? scope.avgScore : (scope.pageTypes[pt] ? scope.pageTypes[pt].avgScore : null)
    var scopeName = state.cc === 'all' ? (I.scopeAll || '전체') : ccLabel(state.cc)
    var hero = '<div class="hero"><div class="hero-top">' +
      '<span class="hero-brand">GEO Readability Audit</span>' +
      '<span class="hero-meta">' + esc(I.measuredAt || '측정일') + ' ' + esc(RD.date) + '</span></div>' +
      '<div class="hero-body"><div class="hero-left">' +
      '<div class="hero-label">' + esc(scopeName) + (ptLabelTxt ? ' · ' + esc(ptLabelTxt) : '') + ' ' + esc(I.heroAvg || '평균') + '</div>' +
      '<div class="hero-score-row"><span class="hero-score" style="color:' + scoreColor(heroScore) + '">' + (heroScore == null ? '—' : heroScore) + '</span><span class="hero-pct">/ 100</span></div>' +
      '<div class="hero-info">URL <strong>' + num(scope.urlCount) + '</strong> · ' + esc(I.heroScored || '채점') + ' <strong>' + num(scope.scoredCount) + '</strong> · ' + esc(I.heroCountries || '국가') + ' <strong>' + Object.keys(RD.countries).length + '</strong>' +
      // HS 콘텐츠 흔적 — 전체 범위일 때만 한 줄 (상세는 HS 콘텐츠 탭)
      (RD.hs && state.cc === 'all' ? ' · ' + esc(I.tabHs || 'HS 콘텐츠') + ' <strong>' + num(RD.hs.measured) + '</strong>' + (RD.hs.avgScore != null ? ' (' + esc(I.heroAvg || '평균') + ' ' + RD.hs.avgScore + ')' : '') : '') +
      '</div>' +
      '</div></div></div>'

    var ccList = state.cc === 'all' ? Object.keys(RD.countries) : [state.cc]
    var rows = ccList.map(function (cc) {
      var c = RD.countries[cc]
      var v = pt === 'all' ? c.avgScore : (c.pageTypes[pt] ? c.pageTypes[pt].avgScore : null)
      var cnt = pt === 'all' ? c.urlCount : (c.pageTypes[pt] ? c.pageTypes[pt].count : 0)
      return { cc: cc, name: ccLabel(cc), v: v, cnt: cnt }
    }).sort(function (a, b) { return (b.v == null ? -1 : b.v) - (a.v == null ? -1 : a.v) })
    var bars = barHead(I.thCountry || '국가', I.colPages || '페이지수', I.colScore || '점수') + rows.map(function (r) {
      return barRow(r.name, r.v == null ? 0 : r.v, 100, scoreColor(r.v), r.v == null ? '—' : String(r.v), num(r.cnt))
    }).join('')
    var title = pt === 'all' ? '① ' + (I.secCountryScore || '국가별 종합 점수 비교') : '① ' + (I.secCountryScoreFiltered || '국가별 점수 비교') + ' — ' + ptLabelTxt
    var note = pt !== 'all'
      ? '<div class="tab-note">' + TPL('tplCcFiltered', { p: esc(ptLabelTxt) }) + '</div>'
      : ''
    return hero + note + sectionCard(title, RED, '<div class="bars">' + bars + '</div>') + renderCategorySection(scope, '②') + renderGuideSection(scope, '③')
  }

  // 체크별 통과율 카테고리 카드 묶음 — 국가/페이지타입 탭 양쪽에서 재사용 (별도 항목별 탭 X)
  // 카테고리는 스냅샷의 categoryLabels 순서를 그대로 따른다 (GEO 3분류 승격 후 6개)
  function renderCategoryCards(scope) {
    var labels = RD.categoryLabels || {}
    var byCat = {}; CATS.forEach(function (c) { byCat[c] = [] })
    Object.entries(scope.checks || {}).forEach(function (e) {
      if (!itemOn(e[0])) return   // 측정항목 필터 — 선택한 항목만 카드에
      var c = e[1]; if (!byCat[c.cat]) byCat[c.cat] = []; byCat[c.cat].push(Object.assign({ cid: e[0] }, c))
    })
    function checkRate(c) { return c.applicable > 0 ? +(c.pass / c.applicable * 100).toFixed(1) : null }
    function avgRate(arr) {
      var vals = arr.map(checkRate).filter(function (r) { return r != null })
      return vals.length ? +(vals.reduce(function (s, r) { return s + r }, 0) / vals.length).toFixed(1) : null
    }
    function card(name, avg, sub, checksArr, catKey) {
      var defs = RD.checkDefs || {}
      // ⚠ 클라이언트 코드 — 서버 사전 접근자 사용 금지, 주입 사전 I 만 (2026-08-31 회귀 수리)
      var head = '<div class="bar-row bar-head has-def"><span class="bar-label">' +
        '<span class="bar-name">' + esc(I.thItem || '항목') + '</span><span class="bar-def">' + esc(I.thDef || '정의') + '</span><span class="bar-pass">' + esc(I.thPass || 'Pass 기준') + '</span></span>' +
        '<div class="bar-track"></div><span class="bar-value">' + esc(I.thRate || '통과율') + '</span></div>'
      var rows = head + checksArr.slice().sort(function (a, b) { return a.label.localeCompare(b.label, 'en', { numeric: true }) }).map(function (c) {
        var rate = checkRate(c)
        var right = rate == null ? '—' : rate + '% (' + c.pass + '/' + c.applicable + ')'
        var lb = (defs[c.cid] && defs[c.cid].label) || c.label
        return barRow(stripParens(lb), rate == null ? 0 : rate, 100, rateColor(rate), right, '', defs[c.cid])
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
        '<div class="cat-sub">' + checksArr.length + ' ' + esc(I.unitChecks || '체크') + ' · ' + sub + '</div>' +
        '<div class="bars sm">' + rows + '</div></div>'
    }
    var out = []
    CATS.forEach(function (cat) {
      var checks = byCat[cat] || []
      if (state.items && !checks.length) return   // 항목 필터로 비워진 영역 카드는 숨김
      // GEO 3분류가 카테고리로 승격돼 특수 분기 불필요 — 전부 동일 경로.
      // 지표도 '평균 통과율'(체크 단순평균) 이 아니라 다른 카테고리와 같은 '평균 points'
      // (페이지별 통과/적용 → 평균) 로 통일된다.
      var avg = scope.categories ? scope.categories[cat] : null
      out.push(card(labels[cat] || cat, avg, I.avgPoints || '평균 points', checks, cat))
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
      if (!c || !c.applicable || !itemOn(cid)) return
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
      var D = (RD.checkDefs || {})[cid]
      rows.push({ label: (D && D.label) || c.label, rate: rate, gap: c.applicable - c.pass,
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
    var scopeName = state.cc === 'all' ? (I.scopeAll || '전체') : ccLabel(state.cc)
    if (state.pt !== 'all') {
      var ptSlot = scope.pageTypes && scope.pageTypes[state.pt]
      // 신규 스냅샷: pageType 슬롯에 checks nest → 페이지타입 분해 통과율
      if (ptSlot && ptSlot.checks) {
        var ptName = ptLabel(state.pt, ptSlot.label)
        // sectionCard 가 title 을 esc 하므로 여기서 미리 이스케이프하지 않는다 (이중 이스케이프 — 코드리뷰 2026-10-06)
        var ptTitle = secNo + ' ' + (I.secCheckRate || '체크별 통과율') + ' (' + scopeName + ' · ' + ptName + ')'
        var ptNote = '<div class="tab-note">' + TPL('tplSample', { n: num(ptSlot.count) }) + '</div>'
        return ptNote + sectionCard(ptTitle, '#3B82F6', '<div class="cat-grid">' + renderCategoryCards(ptSlot) + '</div>')
      }
      // 구 스냅샷 호환: checks nest 없음 → 국가 필터만 반영 안내
      var note = '<div class="tab-note">' + TPL('tplNoPtBreak', { scope: esc(scopeName) }) + '</div>'
      return note + sectionCard(secNo + ' ' + (I.secCheckRate || '체크별 통과율') + ' (' + scopeName + ')', '#3B82F6', '<div class="cat-grid">' + renderCategoryCards(scope) + '</div>')
    }
    return sectionCard(secNo + ' ' + (I.secCheckRate || '체크별 통과율') + ' (' + scopeName + ')', '#3B82F6', '<div class="cat-grid">' + renderCategoryCards(scope) + '</div>')
  }

  function renderPageType() {
    var scope = getScope(state.cc)
    var entries = Object.entries(scope.pageTypes || {}).map(function (e) { return Object.assign({ id: e[0] }, e[1]) })
    if (state.pt !== 'all') entries = entries.filter(function (p) { return p.id === state.pt })
    entries.sort(function (a, b) { return (b.avgScore == null ? -1 : b.avgScore) - (a.avgScore == null ? -1 : a.avgScore) })
    var rowsHtml = entries.map(function (p) {
      return barRow(ptLabel(p.id, p.label), p.avgScore == null ? 0 : p.avgScore, 100, scoreColor(p.avgScore), p.avgScore == null ? '—' : String(p.avgScore), num(p.count))
    }).join('')
    var bars = rowsHtml ? (barHead(I.fPageType || '페이지 타입', I.colPages || '페이지수', I.colScore || '점수') + rowsHtml) : '<div class="tab-note">' + esc(I.noDataCond || '해당 조건에 데이터가 없습니다.') + '</div>'
    var scopeName = state.cc === 'all' ? (I.scopeAll || '전체') : ccLabel(state.cc)
    return sectionCard('① ' + (I.secPageTypeScore || '페이지타입별 점수') + ' (' + scopeName + ')', '#059669', '<div class="bars">' + bars + '</div>') + renderCategorySection(scope, '②') + renderGuideSection(scope, '③')
  }

  // 검수 기준 + 검수 URL 다운로드 탭
  function renderCriteria() {
    // 동일출처 self-host (원본 onrender 는 x-frame-options:DENY 라 iframe 불가)
    // 점수 제외 전체 항목표 — 기준 문서로 읽히도록 통과율 열을 뺀 버전 (routes/readability.js)
    var src = RD.paths.criteria
    var dl = '<div class="crit-dl"><div class="crit-dl-text">' +
      '<div class="crit-dl-title">' + esc(I.dlTitle || '검수 URL 다운로드') + '</div>' +
      '<div class="crit-dl-sub">' + TPL('tplDlSub', { d: esc(RD.date) }) + '</div></div>' +
      '<a class="crit-dl-btn" href="' + RD.paths.csv + '" download>' + esc(I.dlCsv || 'CSV 다운로드') + '</a></div>'
    var frame = '<div class="crit-frame-head">' + esc(I.tplCritHead || '검수 기준') + '</div>' +
      '<iframe class="crit-frame" src="' + src + '" loading="lazy"></iframe>'
    return sectionCard(I.secCriteria || '검수 기준 · 검수 URL 다운로드', '#7C3AED', dl + frame)
  }

  // ── Raw 데이터 (페이지별 전체 체크 PASS/FAIL) — 국가·페이지타입(공유 필터 바) × 항목 · 결과 조합 ──
  function renderRaw() {
    var head = '<div class="fails-bar">' +
      '<div class="fg"><label for="rd-fcheck">' + esc(I.fCheck || '항목') + '</label><select id="rd-fcheck"><option value="all">' + esc(I.allChecks || '전체 항목') + '</option></select></div>' +
      '<div class="fg"><label for="rd-fpf">' + esc(I.fResult || '결과') + '</label><select id="rd-fpf"><option value="all">' + esc(I.allResults || '전체') + '</option><option value="pass">PASS</option><option value="fail">' + esc(I.optFail || 'FAIL (논패스)') + '</option></select></div>' +
      '<span id="rd-fails-count" class="fails-count"></span>' +
      '<a id="rd-fails-csv" class="crit-dl-btn fails-csv" href="#">' + esc(I.dlCsvAll || 'CSV 전체 다운로드') + '</a></div>'
    var note = '<div class="tab-note">' + esc(I.rawNote || '') + '</div>'
    if (ALL && LATEST_DATE && RD.date !== LATEST_DATE) note = '<div class="tab-note">' + TPL('tplRawLatest', { d: esc(LATEST_DATE) }) + '</div>' + note
    return sectionCard(I.secRaw || 'Raw 데이터', RED, note + head + '<div id="rd-fails-body" class="fails-body">' + esc(I.loading || '불러오는 중…') + '</div>')
  }
  function loadRaw() {
    function afterData() {
      var sel = document.getElementById('rd-fcheck')
      if (sel && sel.options.length <= 1) {
        var checks = _rawData.checks
        var ids = Object.keys(checks).sort(function (a, b) { return checks[a].label.localeCompare(checks[b].label, 'en', { numeric: true }) })
        sel.innerHTML = '<option value="all">' + esc(I.allChecks || '전체 항목') + '</option>' +
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
      .catch(function (e) { var b = document.getElementById('rd-fails-body'); if (b) b.textContent = (I.rawLoadFail || 'Raw 데이터를 불러오지 못했습니다: ') + e })
  }
  function filteredRawRows() {
    if (!_rawData) return []
    var cc = state.cc, pt = state.pt, chk = state.fcheck || 'all', pf = state.pf || 'all', out = []
    _rawData.rows.forEach(function (r) {
      if (cc !== 'all' && r.cc !== cc) return
      if (pt !== 'all' && r.pt !== pt) return
      r.c.forEach(function (t) {
        // t = [checkId, pass01, hintIdx(-1=PASS)]
        if (chk !== 'all' ? t[0] !== chk : !itemOn(t[0])) return   // 항목 선택이 없으면 측정항목 필터 적용
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
    if (cntEl) cntEl.textContent = num(rows.length) + (I.unitRows || '건') + (rows.length > CAP ? ' · ' + TPL('tplTopShown', { n: CAP }) : '')
    if (!rows.length) { body.innerHTML = '<div class="tab-note">' + esc(I.noData || '조건에 맞는 데이터가 없습니다.') + '</div>'; return }
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
    body.innerHTML = '<table class="fails-table"><thead><tr><th>' + [I.thCountry || '국가', I.thType || '타입', I.thUrl || 'URL', I.thItem || '항목', I.thResult || '결과', I.thHint || '실패 사유', I.colScore || '점수'].map(esc).join('</th><th>') + '</th></tr></thead><tbody>' + trs + '</tbody></table>'
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

  // ── HS 콘텐츠 탭 — HS 디지털컨텐츠팀 URL 시트 전수 (사용자 결정 2026-10-26) ─────────────
  // 스냅샷 hs.urls 의 per-URL 기록(점수·미적용 체크·실패 체크)으로 모든 집계를 여기서 다시 센다.
  // 서버가 유형×제품×사이트 조합을 미리 다 셀 수 없어서 — 필터 조합마다 같은 규칙으로 계산한다.
  function hsRows() {
    var H = RD.hs; if (!H) return []
    return H.urls.filter(function (r) {
      if (state.cc !== 'all' && r.cc !== state.cc) return false
      if (state.pt !== 'all' && r.pt !== state.pt) return false
      if (state.t2 !== 'all' && r.t2 !== state.t2) return false
      if (state.pr !== 'all' && r.pr !== state.pr) return false
      return true
    })
  }
  function hsOk(rows) { return rows.filter(function (r) { return r.st === 'ok' }) }
  function hsAvg(rows) {
    var m = hsOk(rows); if (!m.length) return null
    return +(m.reduce(function (s, r) { return s + r.s }, 0) / m.length).toFixed(1)
  }
  function hsCheckLabel(id) {
    var d = (RD.checkDefs || {})[id]; var c = (RD.overall.checks || {})[id]
    return stripParens((d && d.label) || (c && c.label) || id)
  }
  function hsCheckCat(id) { var c = (RD.overall.checks || {})[id]; return c ? c.cat : null }
  // 체크별 적용/실패 수 — na 는 체크 인덱스 배열, f 는 실패 체크 인덱스 배열
  function hsCheckStats(rows) {
    var ids = RD.hs.checkIds, out = {}
    ids.forEach(function (id) { out[id] = { app: 0, fail: 0 } })
    hsOk(rows).forEach(function (r) {
      var na = {}; r.na.forEach(function (i) { na[i] = 1 })
      ids.forEach(function (id, i) { if (!na[i]) out[id].app++ })
      r.f.forEach(function (i) { if (ids[i]) out[ids[i]].fail++ })
    })
    return out
  }
  // 영역 점수 = 페이지별(영역 내 통과/적용) 평균 — 국가·페이지타입 탭의 categories 와 같은 산식
  function hsCatScores(rows) {
    var ids = RD.hs.checkIds, catOfIdx = ids.map(hsCheckCat), sum = {}, cnt = {}
    hsOk(rows).forEach(function (r) {
      var na = {}; r.na.forEach(function (i) { na[i] = 1 })
      var fail = {}; r.f.forEach(function (i) { fail[i] = 1 })
      var app = {}, pass = {}
      ids.forEach(function (id, i) {
        var c = catOfIdx[i]; if (!c || na[i]) return
        app[c] = (app[c] || 0) + 1; if (!fail[i]) pass[c] = (pass[c] || 0) + 1
      })
      Object.keys(app).forEach(function (c) { sum[c] = (sum[c] || 0) + (pass[c] || 0) / app[c] * 100; cnt[c] = (cnt[c] || 0) + 1 })
    })
    var out = {}; CATS.forEach(function (c) { out[c] = cnt[c] ? +(sum[c] / cnt[c]).toFixed(1) : null })
    return out
  }
  function hsStLabel(st) { return st === 'ok' ? (I.hsStOk || '측정') : st === 'error' ? (I.hsStError || '응답 오류') : st === 'unscored' ? (I.hsStUnscored || '미채점') : (I.hsStUnmeasured || '미측정') }
  function hsCountBy(rows, key) { var m = {}; rows.forEach(function (r) { var k = r[key] || ''; m[k] = (m[k] || 0) + 1 }); return m }
  function hsSortedKeys(rows, key) { var m = hsCountBy(rows, key); return Object.keys(m).sort(function (a, b) { return m[b] - m[a] || a.localeCompare(b) }) }
  function hsCsv(rows) {
    var ids = RD.hs.checkIds
    function hsCsvCell(v) { v = String(v == null ? '' : v); return /[",\n]/.test(v) ? '"' + v.replace(/"/g, '""') + '"' : v }
    var lines = ['site,segment,content_type,product,page_type,url,live_date,status,score,failed_items']
    rows.forEach(function (r) {
      lines.push([hsCsvCell(ccLabel(r.cc)), hsCsvCell(r.seg), hsCsvCell(r.t2), hsCsvCell(r.pr), hsCsvCell(ptLabel(r.pt)), hsCsvCell(r.u), hsCsvCell(r.ld), hsCsvCell(hsStLabel(r.st)), hsCsvCell(r.s == null ? '' : r.s),
        hsCsvCell(r.f.map(function (i) { return hsCheckLabel(ids[i]) }).join(' | '))].join(','))
    })
    var blob = new Blob(['﻿' + lines.join('\n')], { type: 'text/csv;charset=utf-8' })
    var a = document.createElement('a'); a.href = URL.createObjectURL(blob)
    a.download = 'geo-readability-hs-' + (RD.date || '') + '.csv'
    document.body.appendChild(a); a.click(); document.body.removeChild(a); URL.revokeObjectURL(a.href)
  }
  // HS 범위 공통 — 히어로(필터 적용 평균 + 사이트 전체 대비) · 모집단 안내
  function hsHero(rows) {
    var ok = hsOk(rows), avg = hsAvg(rows)
    var allAvg = state.pt !== 'all' && RD.overall.pageTypes[state.pt] ? RD.overall.pageTypes[state.pt].avgScore : RD.overall.avgScore
    var diff = (avg != null && allAvg != null) ? +(avg - allAvg).toFixed(1) : null
    var diffTxt = diff == null ? '' : TPL('tplHsVsAll', { v: allAvg, d: (diff > 0 ? '+' : '') + diff })
    var sites = {}; rows.forEach(function (r) { sites[r.cc] = 1 })
    var unm = rows.length - ok.length
    var scopeParts = []
    if (state.cc !== 'all') scopeParts.push(ccLabel(state.cc))
    if (state.pt !== 'all') scopeParts.push(ptLabel(state.pt))
    if (state.t2 !== 'all') scopeParts.push(state.t2)
    if (state.pr !== 'all') scopeParts.push(state.pr)
    return '<div class="hero"><div class="hero-top">' +
      '<span class="hero-brand">' + esc(I.hsHeroBrand || 'HS 디지털컨텐츠팀 콘텐츠') + '</span>' +
      '<span class="hero-meta">' + esc(I.measuredAt || '측정일') + ' ' + esc(RD.date) + '</span></div>' +
      '<div class="hero-body"><div class="hero-left">' +
      '<div class="hero-label">' + esc(I.hsHeroLabel || 'HS 콘텐츠 평균') + (scopeParts.length ? ' · ' + esc(scopeParts.join(' · ')) : '') + '</div>' +
      '<div class="hero-score-row"><span class="hero-score" style="color:' + scoreColor(avg) + '">' + (avg == null ? '—' : avg) + '</span><span class="hero-pct">/ 100</span>' +
      (diffTxt ? '<span class="hero-diff" style="color:' + (diff >= 0 ? LEAD : CRIT) + '">' + esc(diffTxt) + '</span>' : '') + '</div>' +
      '<div class="hero-info">' + TPL('tplHsInfo', { t: num(rows.length), m: num(ok.length), u: num(unm), s: Object.keys(sites).length }) + '</div>' +
      '</div></div></div>'
  }
  function hsSheetNote() { return '<div class="tab-note">' + TPL('tplHsSheetNote', { t: num(RD.hs.total) }) + '</div>' }
  function hsNoData() { return '<div class="tab-note">' + esc(I.hsNoData || '이 측정분에는 HS 콘텐츠 데이터가 없습니다.') + '</div>' }
  // 사이트별·페이지타입별 막대는 그 축 자체는 필터하지 않고 나머지 필터만 적용한 모집단에서 센다
  function hsRowsExcept(axis) {
    return RD.hs.urls.filter(function (r) {
      if (axis !== 'cc' && state.cc !== 'all' && r.cc !== state.cc) return false
      if (axis !== 'pt' && state.pt !== 'all' && r.pt !== state.pt) return false
      if (state.t2 !== 'all' && r.t2 !== state.t2) return false
      if (state.pr !== 'all' && r.pr !== state.pr) return false
      return true
    })
  }
  function hsGroupBars(groups, labelOf) {
    return Object.keys(groups).map(function (k) { return { k: k, v: hsAvg(groups[k]), n: hsOk(groups[k]).length, t: groups[k].length } })
      .sort(function (a, b) { return (b.v == null ? -1 : b.v) - (a.v == null ? -1 : a.v) })
      .map(function (r) { return barRow(labelOf(r.k), r.v == null ? 0 : r.v, 100, scoreColor(r.v), r.v == null ? '—' : String(r.v), num(r.n) + (r.n !== r.t ? '/' + num(r.t) : '')) }).join('')
  }

  // 콘텐츠 유형 × 제품 히트맵 — 현재 사이트·페이지타입 필터 안에서, 유형·제품 필터는 적용하지 않고 전체 격자를 보여준다
  function hsSecMatrix(no) {
    var base = RD.hs.urls.filter(function (r) {
      if (state.cc !== 'all' && r.cc !== state.cc) return false
      if (state.pt !== 'all' && r.pt !== state.pt) return false
      return true
    })
    var t2s = hsSortedKeys(base, 't2'), prs = hsSortedKeys(base, 'pr')
    function hsCellOf(t2, pr) {
      var sub = base.filter(function (r) { return (t2 == null || r.t2 === t2) && (pr == null || r.pr === pr) })
      return { avg: hsAvg(sub), n: hsOk(sub).length, total: sub.length }
    }
    function hsTd(c, t2, pr, isHead) {
      if (!c.total) return '<td class="empty">·</td>'
      var col = scoreColor(c.avg)
      // 현재 유형·제품 필터와 정확히 일치하는 셀만 강조 (합계 행/열은 그 축이 '전체'일 때)
      var sel = (t2 == null ? state.t2 === 'all' : state.t2 === t2) && (pr == null ? state.pr === 'all' : state.pr === pr) && !(t2 == null && pr == null)
      return '<td class="' + (isHead ? 'tot' : '') + (sel ? ' sel' : '') + '" data-t2="' + esc(t2 == null ? '' : t2) + '" data-pr="' + esc(pr == null ? '' : pr) + '" style="color:' + col + ';background:' + col + '14">' +
        (c.avg == null ? '—' : c.avg) + '<small>' + num(c.n) + (c.n !== c.total ? '/' + num(c.total) : '') + '</small></td>'
    }
    var matrix = '<div class="hs-matrix-wrap"><table class="hs-matrix"><thead><tr><th>' + esc(I.thType2 || '콘텐츠 유형') + ' \\ ' + esc(I.thProduct || '제품') + '</th>' +
      prs.map(function (p) { return '<th>' + esc(p || '—') + '</th>' }).join('') + '<th class="tot">' + esc(I.scopeAll || '전체') + '</th></tr></thead><tbody>' +
      t2s.map(function (t) {
        return '<tr><th>' + esc(t || '—') + '</th>' + prs.map(function (p) { return hsTd(hsCellOf(t, p), t, p) }).join('') + hsTd(hsCellOf(t, null), t, null, true) + '</tr>'
      }).join('') +
      '<tr><th class="tot">' + esc(I.scopeAll || '전체') + '</th>' + prs.map(function (p) { return hsTd(hsCellOf(null, p), null, p, true) }).join('') + hsTd(hsCellOf(null, null), null, null, true) + '</tr>' +
      '</tbody></table></div>'
    return sectionCard(no + ' ' + (I.hsSecMatrix || '콘텐츠 유형 × 제품 점수'), RED, '<div class="tab-note">' + esc(I.hsMatrixNote || '') + '</div>' + matrix)
  }
  // 6개 영역 비교 — HS(필터 적용) vs 일반(사이트 전체 또는 같은 페이지타입). 영역 점수는 항목 필터와 무관 (점수 정의 유지)
  function hsSecCats(no, rows) {
    var hsCats = hsCatScores(rows)
    var genCats = (state.pt !== 'all' && RD.overall.pageTypes[state.pt] && RD.overall.pageTypes[state.pt].categories) || RD.overall.categories || {}
    var labels = RD.categoryLabels || {}
    var catBars = CATS.map(function (c) {
      var a = hsCats[c], b = genCats[c]
      return barRow((labels[c] || c) + ' · ' + (I.hsLegendHs || 'HS'), a == null ? 0 : a, 100, scoreColor(a), a == null ? '—' : String(a)) +
        barRow((labels[c] || c) + ' · ' + (I.hsLegendAll || '일반'), b == null ? 0 : b, 100, COMP, b == null ? '—' : String(b))
    }).join('')
    return sectionCard(no + ' ' + (I.hsSecCats || '6개 영역 비교'), '#059669', '<div class="tab-note">' + esc(I.hsCatsNote || '') + '</div><div class="bars sm hs-cats">' + catBars + '</div>')
  }
  // 개선 항목 — 체크별 통과율 낮은 순 (적용 1건 이상, 측정항목 필터 적용)
  function hsSecChecks(no, rows) {
    var stats = hsCheckStats(rows)
    var chk = RD.hs.checkIds.filter(itemOn).map(function (id) { var s = stats[id]; return { id: id, app: s.app, fail: s.fail, rate: s.app ? +((s.app - s.fail) / s.app * 100).toFixed(1) : null } })
      .filter(function (x) { return x.app > 0 }).sort(function (a, b) { return a.rate - b.rate })
    var chkRows = chk.map(function (x) {
      return barRow(hsCheckLabel(x.id), x.rate, 100, rateColor(x.rate), x.rate + '% (' + num(x.app - x.fail) + '/' + num(x.app) + ')', num(x.fail), (RD.checkDefs || {})[x.id])
    }).join('')
    var chkHead = '<div class="bar-row bar-head has-def"><span class="bar-label"><span class="bar-name">' + esc(I.thItem || '항목') + '</span><span class="bar-def">' + esc(I.thDef || '정의') + '</span><span class="bar-pass">' + esc(I.thPass || 'Pass 기준') + '</span></span><span class="bar-count">' + esc(I.thFails || '미통과') + '</span><div class="bar-track"></div><span class="bar-value">' + esc(I.thRate || '통과율') + '</span></div>'
    return sectionCard(no + ' ' + (I.hsSecChecks || '개선 항목'), '#B45309', '<div class="cat-card"><div class="bars sm">' + chkHead + (chkRows || '<div class="tab-note">' + esc(I.noDataCond || '') + '</div>') + '</div></div>')
  }
  // 신규 콘텐츠 준수율 — 게시일(live_date) 최근 N개월 vs 이전
  function hsSecRecent(no, rows) {
    var N = 3, d = RD.date || '', cut = ''
    if (/^\d{4}-\d{2}-\d{2}$/.test(d)) { var y = +d.slice(0, 4), m = +d.slice(5, 7) - N; while (m <= 0) { m += 12; y-- } cut = y + '-' + (m < 10 ? '0' : '') + m + d.slice(7) }
    var grpNew = rows.filter(function (r) { return r.ld && cut && r.ld >= cut }), grpOld = rows.filter(function (r) { return r.ld && cut && r.ld < cut }), grpNone = rows.filter(function (r) { return !r.ld })
    function hsCard(k, g) { var a = hsAvg(g); return '<div class="hs-card"><div class="k">' + esc(k) + '</div><div class="v" style="color:' + scoreColor(a) + '">' + (a == null ? '—' : a) + '</div><div class="n">' + num(hsOk(g).length) + ' / ' + num(g.length) + ' URL</div></div>' }
    return sectionCard(no + ' ' + (I.hsSecRecent || '신규 콘텐츠 준수율'), '#7C3AED', '<div class="hs-cards">' + hsCard(TPL('tplHsRecentNew', { n: N }), grpNew) + hsCard(I.hsRecentOld || '그 이전 게시', grpOld) + (grpNone.length ? hsCard(I.hsRecentNone || '게시일 없음', grpNone) : '') + '</div>')
  }
  // 사이트별 — 감사 국가 / HS-Others 두 그룹, 전부 펼침 (사용자 결정). 국가 필터를 고르면 그 사이트만
  function hsSecSites(no) {
    var H = RD.hs
    var inScope = hsRowsExcept('cc').filter(function (r) { return state.cc === 'all' || r.cc === state.cc })
    var byCc = {}; inScope.forEach(function (r) { (byCc[r.cc] = byCc[r.cc] || []).push(r) })
    var audit = {}; (H.auditCountries || []).forEach(function (c) { audit[c] = 1 })
    function pick(keep) { var o = {}; Object.keys(byCc).forEach(function (c) { if (keep(c)) o[c] = byCc[c] }); return o }
    var gA = pick(function (c) { return audit[c] }), gO = pick(function (c) { return !audit[c] })
    var nA = Object.keys(gA).length, nO = Object.keys(gO).length
    var head = barHead(I.thSite || '사이트', I.colPages || '페이지수', I.colScore || '점수')
    var html = '<div class="hs-group-title">' + esc(I.hsSitesAudit || '감사 국가') + ' (' + nA + ')</div><div class="bars">' + head + hsGroupBars(gA, ccLabel) + '</div>' +
      (nO ? '<div class="hs-group-title">' + esc(I.hsSitesOthers || 'HS-Others') + ' (' + nO + ')</div><div class="bars">' + head + hsGroupBars(gO, ccLabel) + '</div>' : '')
    return sectionCard(no + ' ' + (I.hsSecSites || '사이트별 점수'), '#3B82F6', html)
  }
  // 페이지타입별 — Global 의 페이지타입별 탭과 같은 막대 (HS 모집단). 타입 필터를 고르면 그 타입만
  function hsSecPt(no) {
    var inScope = hsRowsExcept('pt').filter(function (r) { return state.pt === 'all' || r.pt === state.pt })
    var byPt = {}; inScope.forEach(function (r) { (byPt[r.pt] = byPt[r.pt] || []).push(r) })
    var rowsHtml = hsGroupBars(byPt, function (p) { return ptLabel(p) })
    var bars = rowsHtml ? (barHead(I.fPageType || '페이지 타입', I.colPages || '페이지수', I.colScore || '점수') + rowsHtml) : '<div class="tab-note">' + esc(I.noDataCond || '해당 조건에 데이터가 없습니다.') + '</div>'
    var scopeName = state.cc === 'all' ? (I.scopeAll || '전체') : ccLabel(state.cc)
    return sectionCard(no + ' ' + (I.hsSecPt || '페이지타입별 점수') + ' (' + scopeName + ')', '#059669', '<div class="bars">' + bars + '</div>')
  }

  // HS Raw — URL 전수 표 + 항목·결과 조합 필터 (Global Raw 와 같은 조작감).
  // 항목을 고르면 그 항목이 적용된 측정 URL 만 남기고 결과(PASS/FAIL) 열을 보여준다.
  function hsFailIdx(r) { var ids = RD.hs.checkIds; return r.f.filter(function (i) { return itemOn(ids[i]) }) }
  function hsRawRows() {
    var ids = RD.hs.checkIds, rows = hsRows()
    var ci = state.fcheck !== 'all' ? ids.indexOf(state.fcheck) : -1, pf = state.pf || 'all'
    if (ci >= 0) {
      rows = rows.filter(function (r) { return r.st === 'ok' && r.na.indexOf(ci) < 0 })
      if (pf !== 'all') rows = rows.filter(function (r) { return (r.f.indexOf(ci) >= 0) === (pf === 'fail') })
    } else if (pf !== 'all') {
      rows = rows.filter(function (r) { return r.st === 'ok' && (hsFailIdx(r).length > 0) === (pf === 'fail') })
    }
    // 점수 오름차순(최저=가장 개선 시급), 미측정은 뒤로
    return rows.slice().sort(function (a, b) { var as = a.s == null ? 1e9 : a.s, bs = b.s == null ? 1e9 : b.s; return as - bs })
  }
  function hsSecUrls(no) {
    var H = RD.hs, ids = H.checkIds, CAP = 500
    var ci = state.fcheck !== 'all' ? ids.indexOf(state.fcheck) : -1
    if (state.fcheck !== 'all' && ci < 0) { state.fcheck = 'all' }
    var rows = hsRawRows()
    var chkOpts = ids.filter(itemOn).map(function (id) { return [id, hsCheckLabel(id)] })
      .sort(function (a, b) { return a[1].localeCompare(b[1], 'en', { numeric: true }) })
      .map(function (p) { return '<option value="' + esc(p[0]) + '"' + (p[0] === state.fcheck ? ' selected' : '') + '>' + esc(p[1]) + '</option>' }).join('')
    var head = '<div class="fails-bar">' +
      '<div class="fg"><label for="rd-hs-fcheck">' + esc(I.fCheck || '항목') + '</label><select id="rd-hs-fcheck"><option value="all">' + esc(I.allChecks || '전체 항목') + '</option>' + chkOpts + '</select></div>' +
      '<div class="fg"><label for="rd-hs-fpf">' + esc(I.fResult || '결과') + '</label><select id="rd-hs-fpf"><option value="all">' + esc(I.allResults || '전체') + '</option><option value="pass"' + (state.pf === 'pass' ? ' selected' : '') + '>PASS</option><option value="fail"' + (state.pf === 'fail' ? ' selected' : '') + '>' + esc(I.optFail || 'FAIL (논패스)') + '</option></select></div>' +
      '<span class="fails-count">' + num(rows.length) + (I.unitRows || '건') + (rows.length > CAP ? ' · ' + TPL('tplTopShown', { n: CAP }) : '') + '</span>' +
      '<a id="rd-hs-csv" class="crit-dl-btn fails-csv" href="#">' + esc(I.dlCsvAll || 'CSV 전체 다운로드') + '</a></div>'
    var cols = [I.thSite || '사이트', I.thType2 || '콘텐츠 유형', I.thProduct || '제품', I.thType || '타입', I.thUrl || 'URL', I.thLiveDate || '게시일']
      .concat(ci >= 0 ? [I.thItem || '항목', I.thResult || '결과'] : [I.thStatus || '상태', I.thFails || '미통과'])
      .concat([I.colScore || '점수'])
    var trs = rows.slice(0, CAP).map(function (r) {
      var urlCell = /^https?:\/\//i.test(r.u) ? '<a href="' + esc(r.u) + '" target="_blank" rel="noopener">' + esc(r.u) + '</a>' : esc(r.u)
      var tail
      if (ci >= 0) {
        var pass = r.f.indexOf(ci) < 0
        tail = '<td>' + esc(hsCheckLabel(ids[ci])) + '</td><td>' + (pass ? '<span class="rd-pass">PASS</span>' : '<span class="rd-fail">FAIL</span>') + '</td>'
      } else {
        var fi = hsFailIdx(r), fails = fi.map(function (i) { return hsCheckLabel(ids[i]) }).join(', ')
        tail = '<td>' + (r.st === 'ok' ? '<span class="rd-pass">' + esc(hsStLabel(r.st)) + '</span>' : '<span class="rd-fail">' + esc(hsStLabel(r.st)) + '</span>') + '</td>' +
          '<td class="fails-hint" title="' + esc(fails) + '">' + (fi.length ? num(fi.length) : (r.st === 'ok' ? '0' : '—')) + '</td>'
      }
      return '<tr><td>' + esc(ccLabel(r.cc)) + '</td><td>' + esc(r.t2) + '</td><td>' + esc(r.pr) + '</td><td>' + esc(ptLabel(r.pt)) + '</td>' +
        '<td class="fails-url">' + urlCell + '</td><td>' + esc(r.ld || '—') + '</td>' + tail +
        '<td class="fails-score" style="color:' + scoreColor(r.s) + '">' + (r.s == null ? '—' : r.s) + '</td></tr>'
    }).join('')
    var table = '<div class="fails-body"><table class="fails-table"><thead><tr><th>' + cols.map(esc).join('</th><th>') + '</th></tr></thead><tbody>' + trs + '</tbody></table></div>'
    var note = '<div class="tab-note">' + esc(I.hsRawNote || '') + '</div>'
    return sectionCard((no ? no + ' ' : '') + (I.hsSecUrls || 'URL 목록'), '#64748B', note + head + table)
  }
  function renderHsCountry() {
    if (!RD.hs) return hsNoData()
    var rows = hsRows()
    return hsHero(rows) + hsSheetNote() + hsSecSites('①') + hsSecCats('②', rows) + hsSecChecks('③', rows) + hsSecRecent('④', rows)
  }
  function renderHsPageType() {
    if (!RD.hs) return hsNoData()
    var rows = hsRows()
    return hsHero(rows) + hsSheetNote() + hsSecPt('①') + hsSecMatrix('②') + hsSecCats('③', rows) + hsSecChecks('④', rows)
  }
  function renderHsRaw() {
    if (!RD.hs) return hsNoData()
    return hsSheetNote() + hsSecUrls('')
  }
  function wireHs() {
    var csv = document.getElementById('rd-hs-csv')
    if (csv) csv.addEventListener('click', function (e) { e.preventDefault(); hsCsv(hsRawRows()) })
    var fc = document.getElementById('rd-hs-fcheck'), fp = document.getElementById('rd-hs-fpf')
    if (fc) fc.addEventListener('change', function () { state.fcheck = fc.value; renderPanel() })
    if (fp) fp.addEventListener('change', function () { state.pf = fp.value; renderPanel() })
    var tbl = document.querySelector('.hs-matrix')
    if (tbl) tbl.addEventListener('click', function (e) {
      var td = e.target.closest('td[data-t2]'); if (!td) return
      var t2 = td.getAttribute('data-t2'), pr = td.getAttribute('data-pr')
      state.t2 = t2 || 'all'; state.pr = pr || 'all'
      var s2 = document.getElementById('rd-t2'), sp = document.getElementById('rd-pr')
      if (s2) s2.value = state.t2; if (sp) sp.value = state.pr
      renderPanel()
    })
  }

  // ── 측정항목 체크박스 필터 (사용자 지시 2026-10-26) ──────────────────────────────
  // 항목 사전 = 스냅샷 overall.checks ∪ hs.checkIds, 영역(CATS) 순 → 라벨 순.
  function itemDefs() {
    var seen = {}, out = []
    function add(id, cat) { if (!id || seen[id]) return; seen[id] = 1; out.push({ id: id, cat: cat || '', label: hsCheckLabel(id) }) }
    Object.keys(RD.overall.checks || {}).forEach(function (id) { add(id, RD.overall.checks[id].cat) })
    if (RD.hs) RD.hs.checkIds.forEach(function (id) { add(id, hsCheckCat(id)) })
    return out.sort(function (a, b) {
      var ca = CATS.indexOf(a.cat), cb = CATS.indexOf(b.cat)
      if (ca !== cb) return (ca < 0 ? 99 : ca) - (cb < 0 ? 99 : cb)
      return a.label.localeCompare(b.label, 'en', { numeric: true })
    })
  }
  function itemsNote() {
    if (!state.items || state.tab === 'criteria') return ''
    return '<div class="tab-note">' + esc(TPL('tplItemsNote', { n: num(itemsCount()), t: num(ITEM_TOTAL) })) + '</div>'
  }
  function buildItems() {
    var pop = document.getElementById('rd-items-pop'), btn = document.getElementById('rd-items-btn')
    if (!pop || !btn) return
    var defs = itemDefs(), labels = RD.categoryLabels || {}
    ITEM_TOTAL = defs.length
    var byCat = {}; defs.forEach(function (d) { (byCat[d.cat] = byCat[d.cat] || []).push(d) })
    var cats = CATS.filter(function (c) { return byCat[c] }).concat(Object.keys(byCat).filter(function (c) { return CATS.indexOf(c) < 0 }))
    pop.innerHTML = '<div class="items-top"><a href="#" data-act="all">' + esc(I.itemsSelectAll || '전체 선택') + '</a><a href="#" data-act="none">' + esc(I.itemsClear || '전체 해제') + '</a></div>' +
      cats.map(function (c) {
        return '<div class="items-group"><label class="items-cat"><input type="checkbox" data-cat="' + esc(c) + '"> ' + esc(labels[c] || c || '—') + '</label>' +
          byCat[c].map(function (d) { return '<label class="items-item"><input type="checkbox" data-id="' + esc(d.id) + '"' + (itemOn(d.id) ? ' checked' : '') + '> ' + esc(d.label) + '</label>' }).join('') + '</div>'
      }).join('')
    function boxes() { return Array.prototype.slice.call(pop.querySelectorAll('input[data-id]')) }
    function sync() {
      var all = boxes(), on = {}, n = 0
      all.forEach(function (b) { if (b.checked) { on[b.getAttribute('data-id')] = 1; n++ } })
      state.items = n === all.length ? null : on
      Array.prototype.forEach.call(pop.querySelectorAll('input[data-cat]'), function (cb) {
        var grp = Array.prototype.slice.call(cb.closest('.items-group').querySelectorAll('input[data-id]'))
        var k = grp.filter(function (b) { return b.checked }).length
        cb.checked = k === grp.length; cb.indeterminate = k > 0 && k < grp.length
      })
      btn.textContent = state.items ? TPL('tplItemsSel', { n: n, t: ITEM_TOTAL }) : (I.itemsAll || '전체 항목')
      btn.classList.toggle('on', !!state.items)
    }
    sync()
    if (!pop._wired) {
      pop._wired = true
      pop.addEventListener('change', function (e) {
        var t = e.target; if (!t || t.tagName !== 'INPUT') return
        if (t.hasAttribute('data-cat')) Array.prototype.forEach.call(t.closest('.items-group').querySelectorAll('input[data-id]'), function (b) { b.checked = t.checked })
        sync(); renderPanel()
      })
      pop.addEventListener('click', function (e) {
        var a = e.target.closest('a[data-act]'); if (!a) return
        e.preventDefault()
        var v = a.getAttribute('data-act') === 'all'
        boxes().forEach(function (b) { b.checked = v })
        sync(); renderPanel()
      })
      btn.addEventListener('click', function (e) { e.stopPropagation(); pop.hidden = !pop.hidden })
      pop.addEventListener('click', function (e) { e.stopPropagation() })
      document.addEventListener('click', function () { pop.hidden = true })
    }
  }

  function renderPanel() {
    var el = document.getElementById('rd-panel')
    if (!el) return
    var fb = document.getElementById('rd-filterbar')
    if (fb) fb.style.display = (state.tab === 'criteria') ? 'none' : ''
    var pre = itemsNote()
    if (state.tab === 'criteria') el.innerHTML = renderCriteria()   // 검수 기준 — Global / HS 공통 문서
    else if (state.scope === 'hs') {
      if (state.tab === 'country') el.innerHTML = pre + renderHsCountry()
      else if (state.tab === 'raw') el.innerHTML = pre + renderHsRaw()
      else el.innerHTML = pre + renderHsPageType()
      wireHs()
    }
    else if (state.tab === 'country') el.innerHTML = pre + renderCountry()
    else if (state.tab === 'raw') { el.innerHTML = pre + renderRaw(); loadRaw() }
    else el.innerHTML = pre + renderPageType()
  }

  function buildControls() {
    var snav = document.getElementById('rd-scopenav'), nav = document.getElementById('rd-tabnav')
    // 상단 GNB: Global Total / HS (HS 는 측정분에 HS 데이터가 하나라도 있을 때만).
    // 아래 4개 탭은 두 범위 공통 — raw·criteria 는 RD.paths 로 게이트별 URL 분기 (어드민·게시본 동일).
    var scopes = [['global', I.scopeGlobal || 'Global Total']]
    if (anyHs()) scopes.push(['hs', I.scopeHs || 'HS'])
    var SCOPE_IDS = scopes.map(function (s) { return s[0] })
    var tabs = [['country', I.tabCountry], ['pagetype', I.tabPageType], ['raw', I.tabRaw], ['criteria', I.tabCriteria]]
    var TAB_IDS = tabs.map(function (t) { return t[0] })
    // hash = '#raw' (Global) · '#hs/raw' (HS). 구 링크 '#hs' 는 HS 범위의 현재 탭으로.
    function parseHash(h) {
      var p = String(h || '').replace('#', '').split('/')
      var sc = 'global', tb = p[0]
      if (SCOPE_IDS.indexOf(p[0]) >= 0) { sc = p[0]; tb = p[1] }
      return { scope: sc, tab: TAB_IDS.indexOf(tb) >= 0 ? tb : null }
    }
    function hashOf() { return (state.scope === 'global' ? '' : state.scope + '/') + state.tab }
    var h0 = parseHash(window.location.hash)
    state.scope = h0.scope; if (h0.tab) state.tab = h0.tab
    if (snav) snav.innerHTML = scopes.map(function (s) { return '<button data-scope="' + s[0] + '">' + esc(s[1]) + '</button>' }).join('')
    nav.innerHTML = tabs.map(function (t) { return '<button data-tab="' + t[0] + '">' + esc(t[1]) + '</button>' }).join('')
    function paintNav() {
      if (snav) Array.prototype.forEach.call(snav.querySelectorAll('button'), function (x) { x.classList.toggle('active', x.getAttribute('data-scope') === state.scope) })
      Array.prototype.forEach.call(nav.querySelectorAll('button'), function (x) { x.classList.toggle('active', x.getAttribute('data-tab') === state.tab) })
    }
    function activate(sc, tb, pushHash) {
      state.scope = SCOPE_IDS.indexOf(sc) >= 0 ? sc : 'global'
      state.tab = TAB_IDS.indexOf(tb) >= 0 ? tb : state.tab
      paintNav()
      // 주소창 hash 갱신 — 범위·탭을 연 상태로 링크 공유 가능. replaceState 라 히스토리를 더럽히지 않는다.
      if (pushHash) { try { if (window.history && history.replaceState) history.replaceState(null, '', '#' + hashOf()); else window.location.hash = hashOf() } catch (e) {} }
      rebuildCcPt()   // HS 범위는 사이트·타입 옵션이 다르고 유형·제품 필터가 켜진다
      renderPanel()
    }
    paintNav()
    if (snav) snav.addEventListener('click', function (e) {
      var b = e.target.closest('button[data-scope]'); if (!b) return
      activate(b.getAttribute('data-scope'), state.tab, true)
    })
    nav.addEventListener('click', function (e) {
      var b = e.target.closest('button[data-tab]'); if (!b) return
      activate(state.scope, b.getAttribute('data-tab'), true)
    })
    // 주소창에서 직접 hash 를 바꾸거나 뒤로가기로 온 경우
    window.addEventListener('hashchange', function () {
      var h = parseHash(window.location.hash)
      activate(h.scope, h.tab || state.tab, false)
    })
    var ccSel = document.getElementById('rd-cc')
    var ptSel = document.getElementById('rd-pt')
    var t2Sel = document.getElementById('rd-t2'), prSel = document.getElementById('rd-pr')
    var hsNote = document.getElementById('rd-hs-note')
    function opts(allLabel, pairs) {
      return ['<option value="all">' + esc(allLabel) + '</option>'].concat(pairs.map(function (p) { return '<option value="' + esc(p[0]) + '">' + esc(p[1]) + '</option>' })).join('')
    }
    function rebuildCcPt() {
      var H = state.scope === 'hs' ? RD.hs : null
      if (H) {
        // HS 범위 — 사이트 목록은 시트 전수 기준 (감사 국가 먼저, 그 다음 HS-Others), 타입·유형·제품도 HS 데이터에서
        var audit = {}; (H.auditCountries || []).forEach(function (c) { audit[c] = 1 })
        var ccs = Object.keys(H.sites || {}).sort(function (a, b) { return (audit[b] ? 1 : 0) - (audit[a] ? 1 : 0) || ccLabel(a).localeCompare(ccLabel(b)) })
        ccSel.innerHTML = opts(I.allCountries || '전체 국가', ccs.map(function (c) { return [c, ccLabel(c)] }))
        if (state.cc !== 'all' && !H.sites[state.cc]) state.cc = 'all'
        var pts = {}; H.urls.forEach(function (r) { pts[r.pt] = (pts[r.pt] || 0) + 1 })
        ptSel.innerHTML = opts(I.allPageTypes || '전체 페이지 타입', Object.keys(pts).sort(function (a, b) { return pts[b] - pts[a] }).map(function (p) { return [p, ptLabel(p)] }))
        if (state.pt !== 'all' && !pts[state.pt]) state.pt = 'all'
        var t2 = {}, pr = {}
        H.urls.forEach(function (r) { t2[r.t2] = (t2[r.t2] || 0) + 1; pr[r.pr] = (pr[r.pr] || 0) + 1 })
        var byCnt = function (m) { return Object.keys(m).sort(function (a, b) { return m[b] - m[a] || a.localeCompare(b) }).map(function (k) { return [k, k || '—'] }) }
        if (t2Sel) { t2Sel.innerHTML = opts(I.allType2 || '전체 유형', byCnt(t2)); if (state.t2 !== 'all' && !t2[state.t2]) state.t2 = 'all'; t2Sel.value = state.t2; t2Sel.disabled = false }
        if (prSel) { prSel.innerHTML = opts(I.allProducts || '전체 제품', byCnt(pr)); if (state.pr !== 'all' && !pr[state.pr]) state.pr = 'all'; prSel.value = state.pr; prSel.disabled = false }
      } else {
        // 선택 월의 데이터 기준으로 국가/페이지타입 옵션 재구성 (없어진 값이면 all 로 복귀)
        ccSel.innerHTML = opts(I.allCountries || '전체 국가', Object.keys(RD.countries).sort().map(function (cc) { return [cc, ccLabel(cc)] }))
        if (state.cc !== 'all' && !RD.countries[state.cc]) state.cc = 'all'
        ptSel.innerHTML = opts(I.allPageTypes || '전체 페이지 타입', Object.entries(RD.overall.pageTypes || {}).map(function (e) { return [e[0], ptLabel(e[0], e[1].label)] }))
        if (state.pt !== 'all' && !(RD.overall.pageTypes || {})[state.pt]) state.pt = 'all'
        // 유형·제품 필터는 HS 범위 전용 — Global 에서는 비활성 + 참고 표시 (사용자 결정 2026-10-26)
        state.t2 = 'all'; state.pr = 'all'
        if (t2Sel) { t2Sel.innerHTML = opts(I.allType2 || '전체 유형', []); t2Sel.disabled = true }
        if (prSel) { prSel.innerHTML = opts(I.allProducts || '전체 제품', []); prSel.disabled = true }
      }
      ccSel.value = state.cc
      ptSel.value = state.pt
      ;[t2Sel, prSel].forEach(function (s) { if (s && s.parentNode) s.parentNode.classList.toggle('fg-off', !!s.disabled) })
      if (hsNote) hsNote.style.display = H ? 'none' : ''
    }
    buildItems()
    rebuildCcPt()
    ccSel.addEventListener('change', function () { state.cc = ccSel.value; renderPanel() })
    ptSel.addEventListener('change', function () { state.pt = ptSel.value; renderPanel() })
    if (t2Sel) t2Sel.addEventListener('change', function () { state.t2 = t2Sel.value; renderPanel() })
    if (prSel) prSel.addEventListener('change', function () { state.pr = prSel.value; renderPanel() })
    // ── 어딧 구분(정기/비정기) 탭 + 측정 월 필터 — 구분별 스냅샷 전환 (2026-10-03) ──
    var mWrap = document.getElementById('rd-month-wrap'), mSel = document.getElementById('rd-month')
    var aWrap = document.getElementById('rd-atype-wrap')
    var aBtn = { regular: document.getElementById('rd-atype-regular'), adhoc: document.getElementById('rd-atype-adhoc') }
    var allDates = ALL ? Object.keys(ALL).sort() : []
    function typeOf(d) { return (ALL && ALL[d] && ALL[d].auditType) || 'regular' }
    function datesOfType(t) { return allDates.filter(function (d) { return typeOf(d) === t }) }
    var curType = RD.auditType || 'regular'
    function switchTo(d) {
      RD = (ALL && ALL[d]) || RD
      buildItems()   // 측정분마다 항목 사전이 다를 수 있다 (37→38)
      rebuildCcPt()
      renderPanel()
    }
    // 월 뎁스는 유지하고 그 아래 '측정 날짜' 필터를 추가 — 비정기는 같은 달에 여러 번
    // 측정될 수 있어 년-월 → 날짜 2단으로 구분한다 (사용자 지시 2026-10-04).
    var dWrap = document.getElementById('rd-day-wrap'), dSel = document.getElementById('rd-day')
    function monthsOfType(t) {
      var seen = {}
      return datesOfType(t).map(function (d) { return d.slice(0, 7) })
        .filter(function (m) { if (seen[m]) return false; seen[m] = 1; return true })
    }
    function datesInMonth(t, ym) {
      return datesOfType(t).filter(function (d) { return d.slice(0, 7) === ym })
    }
    function ymLabel(ym) {
      return LANG === 'en' ? ym : ym.slice(0, 4) + '년 ' + parseInt(ym.slice(5, 7), 10) + '월'
    }
    function rebuildDay() {
      if (!dWrap || !dSel) return
      var ym = mSel && mSel.value ? mSel.value : (RD.date || '').slice(0, 7)
      var ds = datesInMonth(curType, ym)
      // 비정기는 항상 날짜 필터 표시 (1건이어도 측정 날짜가 보이게), 정기는 같은 달 복수 측정 시만
      if (ds.length && (curType === 'adhoc' || ds.length > 1)) {
        dWrap.style.display = ''
        dSel.innerHTML = ds.map(function (d) {
          return '<option value="' + d + '">' + d + ' ' + esc(I.monthMeasured || '측정') + '</option>'
        }).join('')
        dSel.value = ds.indexOf(RD.date) >= 0 ? RD.date : ds[ds.length - 1]
      } else {
        dWrap.style.display = 'none'
      }
    }
    function rebuildMonth() {
      if (!mWrap || !mSel) return
      var months = monthsOfType(curType)
      if (months.length) {
        mWrap.style.display = ''
        // 월 옵션은 년-월만 — '(09-20 측정)' 같은 날짜 꼬리표 금지 (사용자 지시 2026-10-04).
        // 측정 날짜는 아래 '측정 날짜' 필터가 담당한다.
        mSel.innerHTML = months.map(function (ym) {
          return '<option value="' + ym + '">' + ymLabel(ym) + '</option>'
        }).join('')
        var curYm = (RD.date || '').slice(0, 7)
        mSel.value = months.indexOf(curYm) >= 0 ? curYm : months[months.length - 1]
      } else {
        mWrap.style.display = 'none'
      }
      rebuildDay()
    }
    if (mSel) mSel.addEventListener('change', function () {
      var ds = datesInMonth(curType, mSel.value)
      if (ds.length) switchTo(ds[ds.length - 1])
      rebuildDay()
    })
    if (dSel) dSel.addEventListener('change', function () { switchTo(dSel.value) })
    // 양쪽 구분이 모두 있을 때만 탭 노출 — 한쪽뿐이면 기존 월 드롭다운만
    if (aWrap && aBtn.regular && aBtn.adhoc && datesOfType('regular').length && datesOfType('adhoc').length) {
      aWrap.style.display = ''
      var paint = function () {
        aBtn.regular.className = 'atype-btn' + (curType === 'regular' ? ' active' : '')
        aBtn.adhoc.className = 'atype-btn' + (curType === 'adhoc' ? ' active' : '')
      }
      ;['regular', 'adhoc'].forEach(function (t) {
        aBtn[t].addEventListener('click', function () {
          if (curType === t) return
          curType = t
          paint()
          var ds = datesOfType(t)
          if (ds.length) switchTo(ds[ds.length - 1])
          rebuildMonth()   // switchTo 이후 — 드롭다운 선택값이 새 RD 날짜와 일치하게
        })
      })
      paint()
    }
    rebuildMonth()
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

export function renderReadabilityHTML({ snapshot, index, snapshots, adminMode = false, paths, lang = 'ko', embed = false } = {}) {
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
    auditType: snap.auditType || 'regular',   // 정기/비정기 탭 분리용 (2026-10-03)
    adminMode: !!adminMode,
    band: RD_BAND,           // 신호등 임계값 — 클라 짝이 서버와 같은 기준 쓰도록 주입
    bandColor: RD_BAND_COLOR,
    lang: LANG,              // 클라가 { ko, en } 쌍에서 어느 쪽을 꺼낼지
    i18n: toClientDict(LANG), // UI 문구 사전 (함수 제외 — 직렬화 가능한 것만)
    ptLabel: GUIDE_PT_LABEL,  // 페이지타입 라벨 { ko, en } — 스냅샷 label 보다 우선
    guide: GUIDE,            // 개선 가이드 — 필터(국가×페이지타입) 변경 시 클라가 해석·액션 재생성
    catGuide: CATEGORY_GUIDE, // 6개 평가 영역이 각각 무엇을 보는지 (카드 상단 설명)
    // EN 이면 CSV·검수기준 링크에 lang 을 붙여 영문본을 받도록 한다
    paths: withLang(paths || (adminMode ? ADMIN_PATHS : PUBLIC_PATHS), LANG),
    categoryLabels: snap.categoryLabels || {},
    checkDefs: loadCheckDefs(LANG),   // check id → 항목 정의·라벨 (체크리스트 문서 출처, 언어 반영)
    ccName: Object.fromEntries(Object.keys(snap.countries).map(cc => [cc, CC_NAME[cc] || cc.toUpperCase()])),
    overall: snap.overall,
    countries: snap.countries,
    hs: snap.hs || null,     // HS 콘텐츠 탭 (시트 전수 per-URL 기록) — 없는 측정분은 null
  })
  const clientData = buildClientData(snapshot)
  // 측정 월 필터용 — 월별 최신 스냅샷 전체 임베드 (없으면 현재 1개)
  const monthSnaps = (Array.isArray(snapshots) && snapshots.length ? snapshots : [snapshot]).filter(x => x && x.overall)
  const rdAll = {}
  monthSnaps.forEach(x => { rdAll[x.date] = buildClientData(x) })
  if (!rdAll[snapshot.date]) rdAll[snapshot.date] = clientData

  return `<!DOCTYPE html><html lang="${LANG}"><head><meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${escHtml(t.pageTitle)}</title>
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
.doc-heading{margin:4px 0 16px;font-size:26px;font-weight:900;color:#1A1A1A;letter-spacing:-0.6px}
@media(max-width:780px){.doc-heading{font-size:21px;margin-bottom:12px}}
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
.atype-tabs{display:inline-flex;border:1px solid #CBD5E1;border-radius:8px;overflow:hidden}
.atype-btn{font-family:inherit;font-size:13px;font-weight:600;color:#475569;background:#fff;border:0;padding:6px 14px;cursor:pointer}
.atype-btn+.atype-btn{border-left:1px solid #CBD5E1}
.atype-btn.active{background:${RED};color:#fff}
.tab-note{background:#FFFBEB;border:1px solid #FDE68A;border-radius:8px;padding:10px 14px;font-size:13px;color:#B45309;margin-bottom:16px}
/* ── 상단 GNB (Global Total / HS) — 탭 바보다 한 단계 큰 범위 전환 ── */
.scope-nav{display:flex;gap:8px;margin-bottom:14px;flex-wrap:wrap}
.scope-nav button{appearance:none;font-family:inherit;font-size:15px;font-weight:800;color:#475569;background:#fff;border:1px solid #CBD5E1;border-radius:10px;padding:10px 22px;cursor:pointer;letter-spacing:-0.2px}
.scope-nav button.active{background:#0F172A;color:#fff;border-color:#0F172A}
.scope-nav button:hover:not(.active){border-color:#94A3B8;color:#1A1A1A}
/* ── 측정항목 체크박스 필터 (팝오버) ── */
.items-wrap{position:relative}
.items-btn{font-family:inherit;font-size:13px;color:#1A1A1A;border:1px solid #CBD5E1;border-radius:8px;padding:6px 12px;background:#fff;cursor:pointer}
.items-btn::after{content:' ▾';color:#94A3B8}
.items-btn.on{border-color:${RED};color:${RED};font-weight:700}
.items-pop{position:absolute;top:calc(100% + 6px);left:0;z-index:60;width:460px;max-width:92vw;max-height:62vh;overflow:auto;background:#fff;border:1px solid #CBD5E1;border-radius:12px;box-shadow:0 12px 32px rgba(15,23,42,.14);padding:12px 14px;text-align:left}
.items-pop[hidden]{display:none}
.items-top{display:flex;gap:14px;margin-bottom:8px;font-size:12px;font-weight:700}
.items-top a{color:${RED};text-decoration:none}
.items-group{border-top:1px solid #F1F5F9;padding:8px 0 4px}
.items-cat{display:flex;align-items:center;gap:8px;font-size:13px;font-weight:800;color:#1A1A1A;margin-bottom:4px;cursor:pointer}
.items-item{display:flex;align-items:center;gap:8px;font-size:12.5px;font-weight:500;color:#475569;padding:3px 0 3px 22px;cursor:pointer;line-height:1.4}
.items-pop input{accent-color:${RED};width:14px;height:14px;flex:0 0 auto;margin:0}
/* ── HS 범위 ── */
.filter-bar .fg.fg-off label{color:#94A3B8}
.filter-bar .fg.fg-off select{opacity:.55;cursor:not-allowed;background:#F8FAFC}
.hs-note{font-size:12px;color:#94A3B8;margin-left:-6px}
.hero-diff{font-size:14px;font-weight:700;margin-left:10px}
.hs-matrix-wrap{overflow-x:auto}
.hs-matrix{border-collapse:collapse;font-size:12.5px;min-width:560px;width:100%}
.hs-matrix th{background:#F8FAFC;color:#64748B;font-weight:700;font-size:11px;padding:8px 10px;border:1px solid #F1F5F9;text-align:left;white-space:nowrap}
.hs-matrix thead th{text-align:center}
.hs-matrix td{text-align:center;padding:6px 8px;border:1px solid #F1F5F9;font-weight:800;font-variant-numeric:tabular-nums;cursor:pointer;line-height:1.25}
.hs-matrix td small{display:block;font-size:10px;font-weight:500;color:#94A3B8}
.hs-matrix td.empty{color:#CBD5E1;cursor:default;font-weight:400}
.hs-matrix td.sel{outline:2px solid ${RED};outline-offset:-2px}
.hs-matrix th.tot,.hs-matrix td.tot{background:#FAFBFC}
.hs-cats .bar-row:nth-child(even){margin-bottom:6px}
.hs-cards{display:flex;gap:12px;flex-wrap:wrap}
.hs-card{flex:1 1 180px;background:#F8FAFC;border:1px solid #E8EDF2;border-radius:12px;padding:14px 16px}
.hs-card .k{font-size:12px;color:#64748B;font-weight:600}
.hs-card .v{font-size:28px;font-weight:900;letter-spacing:-1px;line-height:1.2}
.hs-card .n{font-size:12px;color:#94A3B8}
.hs-group-title{font-size:13px;font-weight:800;color:#475569;margin:4px 0 8px}
.hs-group-title+.bars{margin-bottom:18px}
@media(max-width:480px){.hs-matrix{font-size:11px}.hs-card{flex:1 1 100%}}
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

${embed ? '' : `<div class="tab-bar">
  <span class="tb-title">${escHtml(t.pageTitle)}</span>
  <a class="back" href="/admin/">${escHtml(t.backAdmin)}</a>
</div>`}

<div class="dash-container">
  <h1 class="doc-heading">${escHtml(t.docHeading)}</h1>

  <!-- How to Read — 사용자 제공 원문 그대로, 강조만 덧입힘 (사용자 지시 2026-08-30) -->
  <section class="htr">
    <h2 class="htr-title">${escHtml(t.howToRead)}</h2>
    <p class="htr-p">${t.htrP1((snapshot.overall.urlCount || 0).toLocaleString('en-US'))}</p>
    <p class="htr-p">${t.htrP2}</p>
    <p class="htr-p">${t.htrP3}</p>
  </section>

  <!-- 상단 GNB: Global Total / HS — 아래 4개 탭은 두 범위 공통, 검수 기준은 같은 문서 (사용자 결정 2026-10-26) -->
  <div class="scope-nav" id="rd-scopenav"></div>
  <div class="tab-nav" id="rd-tabnav"></div>
  <div class="filter-bar" id="rd-filterbar">
    <div class="fg" id="rd-atype-wrap" style="display:none"><label>${escHtml(t.fAuditType)}</label><span class="atype-tabs"><button type="button" id="rd-atype-regular" class="atype-btn">${escHtml(t.auditRegular)}</button><button type="button" id="rd-atype-adhoc" class="atype-btn">${escHtml(t.auditAdhoc)}</button></span></div>
    <div class="fg" id="rd-month-wrap" style="display:none"><label for="rd-month">${escHtml(t.fMonth)}</label><select id="rd-month"></select></div>
    <div class="fg" id="rd-day-wrap" style="display:none"><label for="rd-day">${escHtml(t.fAuditDate)}</label><select id="rd-day"></select></div>
    <div class="fg"><label for="rd-cc">${escHtml(t.fCountry)}</label><select id="rd-cc"></select></div>
    <div class="fg"><label for="rd-pt">${escHtml(t.fPageType)}</label><select id="rd-pt"></select></div>
    <!-- 측정항목 체크박스 필터 — 영역별 그룹 체크 + 항목 체크. 항목별 섹션·Raw 에만 적용 (점수는 전체 항목 기준) -->
    <div class="fg items-wrap" id="rd-items-wrap"><label>${escHtml(t.fItems)}</label><button type="button" id="rd-items-btn" class="items-btn">${escHtml(t.itemsAll)}</button><div class="items-pop" id="rd-items-pop" hidden></div></div>
    <!-- 콘텐츠 유형(2뎁스)·제품 — HS 범위 전용. Global 에서는 비활성 + 참고 표시 (사용자 결정 2026-10-26) -->
    <div class="fg fg-off"><label for="rd-t2">${escHtml(t.fType2)}</label><select id="rd-t2" disabled></select></div>
    <div class="fg fg-off"><label for="rd-pr">${escHtml(t.fProduct)}</label><select id="rd-pr" disabled></select></div>
    <span class="hs-note" id="rd-hs-note">${escHtml(t.hsFilterNote)}</span>
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
