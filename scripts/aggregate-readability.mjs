#!/usr/bin/env node
// 리더빌리티(GEO 어딧) 집계 스크립트 — 재실행 가능
// 입력: my-geo-audit/data/run_results/*.json (국가별 1회 어딧 전체, per-URL page_type + score breakdown)
// 출력: data/readability/<snapshot-date>.json (스냅샷) + data/readability/index.json (스냅샷 목록)
//
// 89M raw 를 인라인 불가 → 국가/카테고리/페이지타입/체크별 집계만 추출 (수 KB).
// 정기 재어딧 시 본 스크립트 재실행 → 날짜별 스냅샷 누적 (시계열 MoM 대비용).
//
// 사용: node scripts/aggregate-readability.mjs [--src <run_results 경로>] [--date <YYYY-MM-DD>]
//       node scripts/aggregate-readability.mjs --rebuild <YYYY-MM-DD>
//         → 기존 스냅샷이 쓴 run 을 국가별 runId 로 고정해 그대로 재집계 (채점 기준 변경 시 과거 스냅샷 갱신용)

import { readdirSync, readFileSync, writeFileSync, mkdirSync, existsSync, copyFileSync, rmSync, statSync } from 'fs'
import { join, dirname, basename } from 'path'
import { fileURLToPath } from 'url'
import { PROD_IDS } from '../src/categoryMap.js'
import { CC_NAME } from './readability-cc.mjs'
import { _logInfo, _logWarn } from '../src/sheetParserUtils.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = join(__dirname, '..')

function parseArgs() {
  const a = process.argv.slice(2)
  const out = {}
  for (let i = 0; i < a.length; i++) {
    if (a[i] === '--src') out.src = a[++i]
    else if (a[i] === '--date') out.date = a[++i]
    else if (a[i] === '--report') out.report = a[++i]
    else if (a[i] === '--rebuild') out.rebuild = a[++i]
  }
  return out
}

const DEFAULT_SRC = '/Users/dubaba/my-geo-project/my-geo-audit/data/run_results'
const OUT_DIR = join(REPO_ROOT, 'data', 'readability')
// 해석 리포트(감점 사유 종합) 원본 — 집계 시 OUT_DIR 로 사본 복사 (대시보드 "해석 리포트" 탭이 서빙).
// 배포본은 외부 audit 경로가 없으니 커밋되는 OUT_DIR 사본이 필요. --report 또는 env 로 재정의.
const DEFAULT_REPORT_SRC = process.env.AUDIT_REPORT_PATH ||
  '/Users/dubaba/my-geo-project/my-geo-audit/reports/audit_report.txt'

// 페이지타입별 최대 표본 수 — US(5788) 같은 대형 크롤이 집계를 압도하는 것 방지.
// 100 을 제품군(11종) 에 균등 분배 (제품군당 floor(100/11)=9) + 잔여 용량은 초과분/미분류로 채움.
const SAMPLE_PER_PT = 100

// URL → 제품군(prodId) 추론. lg.com 카테고리 슬러그 키워드 매칭 (우선순위 순서 — 첫 매칭 채택).
// 매칭 안 되면 null = 제품군 없는 페이지 (newsroom/press/about/promotion 등).
// tv 를 먼저 검사 — 복합 슬러그(tv-audio-video-accessories, tv-home-theater-accessories) 의 선두 토큰 우선.
const PROD_GROUP_URL_RULES = [
  [/(?:^|[/-])(?:tvs?|projectors?|home-video|home-theater|webos|oled-tv|qned|nanocell)(?:[/-]|$)/, 'tv'],
  [/(?:monitors?|laptops?|tablets?|gram|computer|copilot|\bpc\b)/, 'monitor'],
  [/(?:refrigerator|fridge|freezer|kimchi)/, 'fridge'],
  [/dishwasher/, 'dw'],
  [/styler/, 'styler'],
  [/(?:washer|dryer|laundry)/, 'washer'],
  [/vacuum/, 'vacuum'],
  [/(?:cooking|kitchen|cooktop|oven|microwave|burner|\brange\b|dishdrawer)/, 'cooking'],
  [/(?:air-care|air-purifier|dehumidifier|aircare|puricare)/, 'aircare'],
  [/(?:air-conditioner|residential-hvac|\bhvac\b|home-electrification|heat-pump)/, 'rac'],
  [/(?:soundbar|sound-bar|speaker|headphone|earbud|home-audio|subwoofer|sound-suite|xboom|\baudio\b)/, 'audio'],
]

function inferProdGroup(url) {
  const u = String(url || '').toLowerCase()
  for (const [re, id] of PROD_GROUP_URL_RULES) {
    if (re.test(u)) return id
  }
  return null
}

function byUrl(a, b) { return a.url < b.url ? -1 : a.url > b.url ? 1 : 0 }

// 단일 페이지타입 list 표본 추출 — 제품군 균등 분배.
function samplePageTypeList(list) {
  const byGroup = {}   // prodId → items
  const ungrouped = []
  for (const it of list) {
    const g = inferProdGroup(it.url)
    if (g) (byGroup[g] = byGroup[g] || []).push(it)
    else ungrouped.push(it)
  }
  // 제품군 없는 페이지타입 (newsroom/press 등) → 단순 cap (URL 정렬 후 앞 N — 결정적)
  if (Object.keys(byGroup).length === 0) {
    return [...list].sort(byUrl).slice(0, SAMPLE_PER_PT)
  }
  // 11 제품군 균등 분배: 기본 quota = floor(100/11)=9
  const baseQuota = Math.floor(SAMPLE_PER_PT / PROD_IDS.length)
  const selected = []
  const leftovers = []
  for (const g of PROD_IDS) {
    const arr = (byGroup[g] || []).slice().sort(byUrl)
    selected.push(...arr.slice(0, baseQuota))
    leftovers.push(...arr.slice(baseQuota))
  }
  // 남은 용량(100 - selected) 은 초과분 + 미분류로 채움 (URL 정렬, 결정적) — 미달 제품군 quota 낭비 방지
  leftovers.push(...ungrouped)
  leftovers.sort(byUrl)
  const remaining = SAMPLE_PER_PT - selected.length
  if (remaining > 0) selected.push(...leftovers.slice(0, remaining))
  return selected
}

// 페이지타입별 표본 추출 — items: [{ result, url, rpt }] (excluded 제거 후, 단일 국가).
function sampleByPageType(items) {
  const byPt = {}
  for (const it of items) {
    const pid = it.rpt ? it.rpt.id : '(none)'
    ;(byPt[pid] = byPt[pid] || []).push(it)
  }
  const selected = []
  for (const list of Object.values(byPt)) {
    if (list.length <= SAMPLE_PER_PT) { selected.push(...list); continue }
    selected.push(...samplePageTypeList(list))
  }
  return selected
}

// 원본 run_results 의 score.breakdown 키 (어딧이 만든 4분류) — 순회용. 바꾸면 파싱이 깨진다.
// 크롤러(analyzer.py) 가 내보내는 원본 카테고리 키.
// 2026-08-30 런부터 ai_readiness 가 상류에서 schema_markup / citable_content / ai_crawlability
// 3개로 분리됐다. 구/신 포맷이 한 스냅샷에 섞이므로 양쪽을 모두 나열한다.
// ⚠ 여기 누락되면 그 카테고리 항목이 통째로 집계에서 빠진다 — 8/30 최초 집계 때
//    신포맷 9,811행의 스키마·콘텐츠·크롤 항목이 전부 드롭돼 총점이 74.2 로 잘못 나왔다.
const SRC_CATEGORIES = ['performance', 'accessibility', 'seo', 'ai_readiness',
  'schema_markup', 'citable_content', 'ai_crawlability']

// 대시보드 표시 카테고리 (6분류) — 표시 순서 + 라벨.
// AI Readiness 23개는 성격이 크게 달라 하나로 묶으면 실제 상태가 가려진다
// (단일 57.7 안에 스키마 35.6 / 콘텐츠 27.5 / 플랫폼 85.6 이 섞여 있었음).
// 기존에 대시보드 서브카드로만 나눠 보던 3분류를 카테고리로 승격 (사용자 지시 2026-08-26).
const CATEGORIES = ['performance', 'accessibility', 'seo', 'geo_schema', 'geo_content', 'geo_platform']
const CATEGORY_LABEL = {
  performance: '사이트 성능',
  accessibility: '웹접근성',
  seo: 'Basic SEO',
  geo_schema: '스키마마크업',
  geo_content: '고인용 콘텐츠',
  geo_platform: 'AI Crawlability',
}

// ai_readiness 를 3분류로 가르는 기준 — 기존 render-readability 의 서브카드 분류와 동일.
//   스키마  : ai_schema_* (구조화 데이터 마크업)
//   콘텐츠  : 본문에 들어가야 하는 서술 패턴 (FAQ / 정의 / 요약 / 인용가능 문장)
//   플랫폼  : 그 외 (SSR 렌더링 · 상태코드 · 파일명 · llms.txt 등 기반 항목)
//   ai_author_source(#34 저자/출처+날짜) 는 '플랫폼' 이 아니라 콘텐츠 속성이다 —
//   AI 가 인용할 때 쓰는 신뢰 근거이므로 콘텐츠로 분류 (사용자 결정 2026-08-26).
const GEO_CONTENT_IDS = { ai_faq_block: 1, ai_definition: 1, ai_summary_box: 1, ai_citable: 1, ai_author_source: 1 }
function catOf(srcCat, cid) {
  // 신포맷(2026-08-30~) — 상류가 이미 3분류로 내보내므로 출력 키로만 환산
  if (srcCat === 'schema_markup') return 'geo_schema'
  if (srcCat === 'citable_content') return 'geo_content'
  if (srcCat === 'ai_crawlability') return 'geo_platform'
  if (srcCat !== 'ai_readiness') return srcCat
  if (String(cid).startsWith('ai_schema_')) return 'geo_schema'
  if (GEO_CONTENT_IDS[cid]) return 'geo_content'
  return 'geo_platform'
}

// ── 페이지타입 적용 조건 (applies_when 보정) ────────────────────────────────
// 원본 scoring_config 의 ai_author_source 에는 applies_when 게이트가 없어 전 페이지에
// 무조건 적용된다. 그런데 저자/byline 은 에디토리얼 콘텐츠에만 성립하는 개념이라
// PDP·PLP·지원 페이지가 구조적으로 불가능한 항목으로 감점당하고 있었다.
//   실측 2026-07-31: 뉴스룸 70.3% / PDP 5.4% / PLP 0.2% / 지원 0.1% / 가이드·Experience 0%
// → 에디토리얼 페이지타입에만 적용하고 그 외는 na (분모에서 제외).
//   (근본 수정은 audit 쪽 scoring_config 에 applies_when 추가 — 다음 감사분부터)
// 2026-08-26 우리가 먼저 넣은 게이트. 2026-08-30 런부터 크롤러도 같은 게이트를 자체 도입했다:
//   hint "이 항목은 newsroom, press_media, buying_guide, content 페이지에서만 평가됩니다"
// 상류의 content 는 우리 라벨의 lg_experience 에 해당. press_media 가 우리 쪽에만 빠져 있어
// 통과율 높은 프레스앤미디어(725p)가 통째로 분모에서 빠지고 실패군만 남아
// #34 가 42.3% → 7.7% 로 급락한 것처럼 보였다 (사용자 지적 2026-08-30).
// ⚠ 상류 게이트와 항상 동일 집합을 유지할 것 — 어긋나면 통과율이 왜곡된다.
// 상류 scoring_config.json 의 ai_author_source.applies_to_page_types 와 동일 집합.
//   상류: ['newsroom', 'press_media', 'buying_guide', 'experience']
//   (상류 experience = 우리 라벨 lg_experience)
// 2026-08-30 런부터 상류가 스스로 na 를 찍으므로 신포맷 행에는 이 게이트가 필요 없다.
// 구포맷(ai_readiness) 행이 같은 스냅샷에 섞여 있는 동안만 보정용으로 유지 —
// 전 국가가 신포맷으로 넘어가면 이 상수와 PT_SCOPED_CHECKS 를 통째로 제거할 것.
const EDITORIAL_PT = { newsroom: 1, press_media: 1, buying_guide: 1, lg_experience: 1, experience: 1 }
const PT_SCOPED_CHECKS = {
  ai_author_source: ctx => !!(ctx && ctx.pt && EDITORIAL_PT[ctx.pt]),
}

// 점수 집계에서 완전 제외할 페이지타입 — 점수·카테고리·체크·페이지타입행·URL 카운트 모두 제외.
//   unknown/home  : 분류불가/홈페이지 (측정 의미 없음)
//   business      : B2B (사업자) — GEO 대상 아님 (사용자 지시, 2026-08-26)
//   promotion     : 프로모션/약관 — 한시 페이지라 개선 대상 아님 (사용자 지시, 2026-08-26)
const EXCLUDED_PT = { unknown: 1, home: 1, business: 1, promotion: 1 }
// 페이지타입 통합 — about(회사)/content(콘텐츠매거진) → newsroom(뉴스룸) 으로 병합
const PT_MERGE = { about: 'newsroom', content: 'newsroom' }
// 통합/병합 결과 페이지타입의 표준 라벨 (병합 시 라벨 일관성)
const PT_LABEL = { newsroom: '뉴스룸/Press', lg_experience: 'LG Experience' }

// 페이지타입 정규화 — lg-experience 분리 + 병합 적용 + 제외 여부 판정. { id, label, excluded } 또는 null
function resolvePt(pt, url) {
  if (!pt || !pt.id) return null
  // content(콘텐츠/매거진) 으로 분류된 /lg-experience/ 또는 /experience/ (US 경로) URL 은 별도 lg_experience 타입으로 분리
  if (pt.id === 'content' && url && /\/(?:lg-)?experience(\/|\?|$)/i.test(url)) {
    return { id: 'lg_experience', label: PT_LABEL.lg_experience, excluded: false }
  }
  const id = PT_MERGE[pt.id] || pt.id
  if (EXCLUDED_PT[id]) return { id, label: pt.label || id, excluded: true }
  return { id, label: PT_LABEL[id] || pt.label || id, excluded: false }
}

// ── 대시보드 채점 재정의 (SCORING_OVERRIDE) ────────────────────────────────────
// 원본 어딧(my-geo-audit/scoring_config.json)의 판정을 대시보드 집계 시점에 재평가한다.
// 원측정값(item.value)에서 다시 판정하므로 **멱등** — 원본 config 가 나중에 같은 기준으로
// 바뀌어도 결과는 동일하다 (이중 적용 X).
//
// 재정의 사유 (사용자 지시, 2026-08-26):
//   #1 perf_ttfb        측정 정본을 PageSpeed Insights(Lighthouse) 의 server-response-time 으로 교체.
//                       어딧 크롤러의 자체 TTFB 는 동시 크롤 큐잉에 오염돼 실제보다 6~200배
//                       크게 잡혔다 (2026-08-26 실측: UK 크롤러 1088ms vs PSI Lab 11ms,
//                       US 2486ms vs 61ms). PSI 1,536건 대조에서도 같은 URL 기준
//                       크롤러 통과 12.4% vs PSI 97.7% 로 재현.
//                       임계값은 600ms — Google Lighthouse 권장값이자 원래 기준이다.
//                       1800ms 로 완화했던 건 망가진 측정값을 보정하려던 것이라,
//                       측정이 정확해진 뒤에는 원래 기준으로 되돌린다 (사용자 결정 2026-08-27).
//                       PSI 실측 분포: 중앙값 221ms / p90 662ms → 600ms 에서 88.2% 통과.
//                       PSI 값은 scripts/collect-psi.mjs 가 psi-<date>.json 으로 수집.
//   #4 perf_cache_control  "max-age 디렉티브가 설정되어 있으면 통과" 로 완화.
//                       원본 룰은 no-cache/no-store 가 섞여 있으면 max-age 값과 무관하게
//                       즉시 FAIL 처리 → lg.com 의 `max-age=0, no-cache, no-store` 3천여 건이
//                       전부 FAIL 로 잡혀 통과 수가 비정상적으로 적었다.
//   #5 perf_html_size      채점 대상에서 제외. 측정 자체는 정확하나(응답 본문 바이트, 압축 해제 기준)
//                       lg.com HTML 중앙값이 1,536KB 라 100KB 기준의 실질 통과율이 0.0%(1/5438).
//                       게다가 비-200 제외 전에는 통과 90건 중 89건이 본문 0자인 빈 404 셸이라
//                       "가벼운 좋은 페이지"가 아니라 "깨진 페이지"를 통과로 잡던 반전 지표였다.
//                       기준 상향/지표 재정의는 별도 논의 (렌더 DOM 기준 측정은 audit 쪽 작업).
//   #8 perf_render_block  채점 대상에서 제외 (분모·분자 모두). na 처리라 통과율 표에서도 사라짐.
//   ai_summary_ssr / ai_schema_website  채점 제외 (사용자 결정 2026-08-27).
//                       체크리스트 문서에 대응 행이 없어 항목 정의·Pass 기준을 제시할 수
//                       없는 항목이다. 정의 없는 채점은 근거를 설명할 수 없으므로 제외.
//                       (ai_schema_website 은 적용 페이지도 0건이었다)
const TTFB_MAX_MS = 600
// 채점 제외 체크 — na:true 로 표시해 applicable(분모)에서도 빠진다 (scoring_config 의 enabled:false 와 동등)
// 채점 제외 — 상류 config 의 enabled:false 와 별개로 우리 쪽에서도 유지해야 한다.
// 상류 enabled:false 는 '앞으로의 런' 에만 걸리고, 이미 수집된 run_results 에는
// 값이 그대로 남아 있어 집계에 잡힌다 (8/30 데이터에서 #5 0% · #8 0.6% 로 사이트 성능 -7.2 유발).
// #5 HTML<100KB · #8 Render Blocking 은 사용자 결정으로 제외된 항목 (2026-08-26).
const DISABLED_CHECKS = { perf_html_size: 1, perf_render_block: 1, ai_summary_ssr: 1, ai_schema_website: 1 }

// OR 통합 체크 — 여러 체크 중 하나만 통과해도 통과로 본다 (대표 체크에 결과를 몰고 나머지는 na).
//   #17 Robots: meta robots(seo_robots) 와 X-Robots-Tag 헤더(seo_robots_hdr) 는
//   같은 목적(색인 허용)을 두 경로로 확인하는 것이라, 둘 중 하나만 조치되면 통과다.
//   기존에는 AND 로 둘 다 채점돼 한쪽 미설정이 그대로 감점이었다 (사용자 지시 2026-08-27).
const OR_GROUPS = [
  { primary: 'seo_robots', members: ['seo_robots', 'seo_robots_hdr'], label: '#17 Indexing 허용 (meta robots 또는 X-Robots-Tag)' },
]
// OR 통합에서 대표가 아닌 체크 — 통과율 표에 별도 행을 만들지 않는다
const ABSORBED_CHECKS = Object.fromEntries(
  OR_GROUPS.flatMap(g => g.members.filter(m => m !== g.primary).map(m => [m, 1])))
// 기준이 바뀐 체크의 표시 라벨 (원본 label 은 옛 임계값 문구를 담고 있음).
// perf_ttfb 는 실제 채점에 PSI 를 썼을 때만 '(PSI)' 를 붙인다 — 라벨과 측정 출처를 일치시킴.
function checkLabelOverride(cid, ctx) {
  if (cid !== 'perf_ttfb') return null
  return `#1 TTFB < ${TTFB_MAX_MS}ms${ctx && ctx.psi ? ' (PSI)' : ''}`
}
// 등급 임계값 — my-geo-audit/scoring_config.json 의 grade 와 동일 (good 80 / need_improvement 60)
const GRADE_THRESHOLD = { good: 80, needImprovement: 60 }

// 표본 측정분에서 셀(국가×페이지타입) TTFB 중앙값 테이블을 만든다.
// 미측정 페이지는 이 대표값으로 #1 을 판정한다 (RECHECK.perf_ttfb 참조).
// url→(cc,pt) 는 checks-<date>.json 에서 가져온다 — PSI 파일 자체엔 국가·타입이 없다.
// 반환: (cc, pt) => 중앙값 ms | null.  폴백: 셀 → 국가 → 전체
function buildTtfbMedian(psiResults, date) {
  // 1순위: PSI 결과에 동봉된 cc/pt (collect-psi 가 저장). 2순위: checks-*.json 조인.
  // checks 파일은 재집계가 최신 1개만 남기고 지우므로 실행 순서에 따라 없을 수 있다.
  const meta = {}
  for (const [url, v] of Object.entries(psiResults)) {
    if (v && v.cc && v.pt) meta[url] = { cc: v.cc, pt: v.pt }
  }
  if (!Object.keys(meta).length) {
    try {
      const cand = [`checks-${date}.json`, ...(existsSync(OUT_DIR)
        ? readdirSync(OUT_DIR).filter(f => /^checks-\d{4}-\d{2}-\d{2}\.json$/.test(f)).sort().reverse() : [])]
      for (const fn of cand) {
        const p = join(OUT_DIR, fn)
        if (!existsSync(p)) continue
        for (const r of (JSON.parse(readFileSync(p, 'utf8')).rows || [])) meta[r.url] = { cc: r.cc, pt: r.pt }
        break
      }
    } catch (e) { _logWarn('aggregate-readability', `TTFB 대표값 — checks 로드 실패: ${e.message}`) }
  }
  if (!Object.keys(meta).length) {
    _logWarn('aggregate-readability', 'TTFB 대표값 — 국가/페이지타입 정보 없음, 미측정 페이지 보정 불가')
    return () => null
  }

  const med = arr => { const a = arr.slice().sort((x, y) => x - y); return a.length ? a[Math.floor((a.length - 1) / 2)] : null }
  const cell = {}, country = {}, all = []
  for (const [url, m] of Object.entries(meta)) {
    const v = psiResults[url]
    if (!v || v.err || v.lab == null) continue
    ;(cell[`${m.cc}|${m.pt}`] = cell[`${m.cc}|${m.pt}`] || []).push(v.lab)
    ;(country[m.cc] = country[m.cc] || []).push(v.lab)
    all.push(v.lab)
  }
  const cellMed = Object.fromEntries(Object.entries(cell).map(([k, a]) => [k, med(a)]))
  const ccMed = Object.fromEntries(Object.entries(country).map(([k, a]) => [k, med(a)]))
  const allMed = med(all)
  _logInfo('aggregate-readability', `TTFB 대표값 — 셀 ${Object.keys(cellMed).length}개 / 국가 ${Object.keys(ccMed).length}개 / 전체 중앙값 ${allMed}ms (미측정 페이지 보정용)`)
  return (cc, pt) => {
    if (cc && pt && cellMed[`${cc}|${pt}`] != null) return cellMed[`${cc}|${pt}`]
    if (cc && ccMed[cc] != null) return ccMed[cc]
    return allMed
  }
}

// Python round() 호환 (round-half-to-even) — 원본 analyzer.py 가 Python round 를 쓰므로
// 재계산 결과가 원본과 정확히 일치하도록 동일 규칙 사용. JS Math.round 는 half-up 이라 불일치.
function pyRound(x) {
  const f = Math.floor(x)
  const d = x - f
  if (d > 0.5) return f + 1
  if (d < 0.5) return f
  return f % 2 === 0 ? f : f + 1
}

// 체크별 재판정기 — 원측정값으로 다시 판정. null 반환 = 원본 판정 유지.
// ctx = { url, psi } — psi 는 psi-<date>.json 의 results (url → { lab, crux, ... })
const RECHECK = {
  // PSI 의 server-response-time(lab) 을 정본으로 사용. 크롤러 자체 측정값(it.value)은 쓰지 않는다.
  //  - psi 파일 자체가 없으면 → null (크롤러 값 기반 원본 판정 유지, 하위 호환)
  //  - psi 는 있는데 이 URL 만 없거나 실패면 → na (채점 제외). 두 측정 체계를 섞으면
  //    통과율이 서로 다른 척도의 혼합이 되어 해석 불가해지므로 분모에서 뺀다.
  // 상류 header_max_age_min(min_seconds:0) 과 결과가 다르다 (81.5% vs 95.4%).
  // 사용자 기준은 "max-age 디렉티브가 있으면 통과" (2026-08-26) — 우리 판정 유지.
  perf_cache_control(it) {
    const m = String(it.value == null ? '' : it.value).match(/max-age\s*=\s*(\d+)/i)
    if (!m) return { pass: false, hint: 'Cache-Control 에 max-age 디렉티브가 없습니다.' }
    return { pass: true, hint: null }
  },
  perf_ttfb(it, ctx) {
    const p = ctx && ctx.psi ? ctx.psi[ctx.url] : null
    if (p && !p.err && p.lab != null) {
      const pass = p.lab < TTFB_MAX_MS
      return { pass, hint: pass ? null : `TTFB ${p.lab}ms (PSI) — ${TTFB_MAX_MS}ms 미만 필요` }
    }
    // 표본 측정이라 값이 없는 페이지 → 그 페이지가 속한 셀(국가×페이지타입)의 TTFB
    // 중앙값을 대표값으로 삼아 일괄 판정한다 (사용자 결정 2026-08-27).
    //   폴백 순서: 셀 중앙값 → 국가 중앙값 → 전체 중앙값
    // ⚠ 한 셀이 통째로 PASS 또는 FAIL 로 처리되므로 셀 내부 편차는 사라진다.
    //   (예: 셀 통과율 88% 여도 미측정분은 전부 PASS). 통과율을 셀별 실제 비율로
    //   반영하려면 기대값 보정이 필요하나, 현 정책은 대표값 일괄 판정이다.
    if (ctx && ctx.psi) {
      const med = ctx.ttfbMedian ? ctx.ttfbMedian(ctx.cc, ctx.pt) : null
      if (med == null) return { na: true }   // 참조할 측정치가 하나도 없을 때만 제외
      const pass = med < TTFB_MAX_MS
      return { pass, hint: pass ? null : `TTFB ${med}ms (PSI 셀 대표값) — ${TTFB_MAX_MS}ms 미만 필요` }
    }
    // PSI 파일 자체가 없음 → 크롤러 값으로 폴백하되 임계값은 동일하게 재판정.
    // (원본 run_results 의 pass 는 수집 당시 config 기준이라 라벨과 어긋날 수 있음)
    const m = String(it.value == null ? '' : it.value).match(/([\d.]+)\s*ms/)
    if (!m) return null
    const ms = parseFloat(m[1])
    const pass = ms < TTFB_MAX_MS
    return { pass, hint: pass ? null : `TTFB ${m[1]}ms — ${TTFB_MAX_MS}ms 미만 필요` }
  },
  // value 예: "max-age=0, no-cache, no-store" / "max-age=3600" / null(헤더 없음)
}

// 단일 result.score 에 재정의를 적용하고 카테고리 points / total / grade 를 재계산 (in-place).
// 원본 analyzer.py 와 동일한 산식: 모든 카테고리 항목을 동일 비중으로 보고 passed/applicable.
export function applyScoringOverride(score, ctx) {
  if (!score || !score.breakdown) return score
  for (const cat of SRC_CATEGORIES) {
    const bd = score.breakdown[cat]
    if (!bd || !bd.items) continue
    for (const [cid, it] of Object.entries(bd.items)) {
      if (!it) continue
      if (DISABLED_CHECKS[cid]) { it.na = true; it.hint = null; continue }
      // 페이지타입상 적용 대상이 아니면 na — 구조적으로 불가능한 항목으로 감점되는 것 방지
      // 신포맷(상류가 applies_to_page_types 를 자체 적용)이면 상류 판정을 그대로 따른다.
      // 구포맷 행에만 우리 게이트로 보정 (사용자 지시 2026-08-30: 상류 최신 데이터를 따를 것).
      const scoped = PT_SCOPED_CHECKS[cid]
      if (scoped && !ctx.upstreamGated && !scoped(ctx)) { it.na = true; it.hint = null; continue }
      const lbl = checkLabelOverride(cid, ctx)
      if (lbl) it.label = lbl
      // 이미 미적용(na/null)인 항목은 재판정 대상 아님 (원본 applies_when 판단 존중)
      if (it.na === true || it.pass == null) continue
      const re = RECHECK[cid]
      if (!re) continue
      const v = re(it, ctx)
      if (!v) continue
      if (v.na) { it.na = true; it.hint = v.hint ?? null; continue }   // 채점 제외 (분모에서도 빠짐)
      it.pass = v.pass
      it.hint = v.hint
    }
    // OR 통합 — 그룹 중 하나라도 통과면 대표 체크를 통과 처리하고 나머지는 na
    for (const g of OR_GROUPS) {
      const present = g.members.filter(m => bd.items[m])
      if (present.length < 2) continue
      const anyPass = present.some(m => bd.items[m].pass === true)
      const anyApplicable = present.some(m => bd.items[m].na !== true && bd.items[m].pass != null)
      for (const m of present) {
        if (m === g.primary) {
          bd.items[m].label = g.label
          if (!anyApplicable) { bd.items[m].na = true; continue }
          delete bd.items[m].na
          bd.items[m].pass = anyPass
          bd.items[m].hint = anyPass ? null : '색인 허용 설정 없음 — meta robots 또는 X-Robots-Tag 중 하나 필요'
        } else {
          bd.items[m].na = true   // 대표 체크로 흡수 — 분모 이중 계상 방지
          bd.items[m].hint = null
        }
      }
    }

    // 카테고리 재집계 — applicable(na!==true && pass!=null) 기준
    let passed = 0, applicable = 0
    for (const it of Object.values(bd.items)) {
      if (!it || it.na === true || it.pass == null) continue
      applicable++
      if (it.pass === true) passed++
    }
    bd.passed = passed
    bd.total = applicable
    bd.points = applicable > 0 ? pyRound((passed / applicable) * 100) : 0
    bd.max = 100
  }
  // 전체 점수 — 전 카테고리 통과 항목 합 / 전체 적용 항목 합 (analyzer.py 와 동일)
  let tp = 0, ti = 0
  for (const bd of Object.values(score.breakdown)) {
    if (!bd || !bd.items) continue
    tp += bd.passed || 0
    ti += bd.total || 0
  }
  score.total = ti > 0 ? pyRound((tp / ti) * 100) : 0
  score.max = 100
  score.grade = score.total >= GRADE_THRESHOLD.good ? 'Good'
    : score.total >= GRADE_THRESHOLD.needImprovement ? 'Need Improvement'
    : 'Poor'
  return score
}

// 국가코드 → 표시명 (CSV 다운로드 국가 컬럼용) — 공유 single source (render 와 동일).

// CSV 셀 이스케이프 (쉼표/따옴표/개행 포함 시 따옴표 감싸기)
function csvCell(v) {
  const s = v == null ? '' : String(v)
  return /[",\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s
}

// 파일명에서 국가코드 + 날짜 + runId 추출: <cc>_<YYYY-MM-DD>_run_<id>.json
function parseFileName(name) {
  const m = name.match(/^([a-z]{2})_(\d{4}-\d{2}-\d{2})_run_([0-9a-f]+)\.json$/i)
  if (!m) return null
  return { cc: m[1].toLowerCase(), date: m[2], runId: m[3] }
}

// 빈 누적기
function newAcc() {
  return {
    urlCount: 0,        // summary 항목 수
    scoredCount: 0,     // score 있는 URL 수
    scoreSum: 0,        // score.total 합 (scoredCount 분모)
    grades: {},         // grade → count
    catPointsSum: zeroByCat(),
    catPointsCnt: zeroByCat(),
    checks: {},         // checkId → { label, cat, pass, applicable }
    pageTypes: {},      // ptId → { label, count, scoreSum, scoredCount, ...체크 bins }
    bots: {},           // botName → { blocked, total }
    tiers: {},          // csr tier → count
  }
}

// 체크/카테고리 누적용 빈 bins (scope-level 과 pageType-level 공용)
function zeroByCat() {
  return Object.fromEntries(CATEGORIES.map(c => [c, 0]))
}

function newCheckBins() {
  return {
    catPointsSum: zeroByCat(),
    catPointsCnt: zeroByCat(),
    checks: {},
  }
}

// score.breakdown 을 target(.catPointsSum/.catPointsCnt/.checks)에 반영 — scope/pageType 공용
function accumulateChecks(target, score) {
  const bd = score.breakdown || {}
  // 이 페이지의 출력 카테고리별 통과/적용 — bd[cat].points 를 그대로 쓰지 않고 항목에서
  // 다시 센다 (ai_readiness 가 3개로 갈라져 원본 카테고리 points 를 못 쓰기 때문).
  // 산식은 analyzer.py 와 동일: 카테고리 points = 통과 / 적용 × 100.
  const perCat = {}
  for (const src of SRC_CATEGORIES) {
    const c = bd[src]
    const items = (c && c.items) || {}
    for (const [cid, it] of Object.entries(items)) {
      if (!it) continue
      // 채점 제외 체크(DISABLED_CHECKS) 는 통과율 표에도 행을 만들지 않음 —
      // 0/0 이면 '—' 로만 보여 "측정했는데 데이터 없음" 처럼 오해됨.
      if (DISABLED_CHECKS[cid]) continue
      if (ABSORBED_CHECKS[cid]) continue   // OR 통합으로 대표 체크에 흡수됨 — 별도 행 X
      const cat = catOf(src, cid)
      // na(true) 또는 pass===null → 미적용 (분모 제외)
      const applicable = !(it.na === true || it.pass === null || it.pass == null)
      if (!target.checks[cid]) target.checks[cid] = { label: it.label || cid, cat, pass: 0, applicable: 0 }
      if (!applicable) continue
      target.checks[cid].applicable++
      if (it.pass === true) target.checks[cid].pass++
      const b = perCat[cat] || (perCat[cat] = { p: 0, a: 0 })
      b.a++
      if (it.pass === true) b.p++
    }
  }
  for (const [cat, b] of Object.entries(perCat)) {
    if (!b.a || target.catPointsSum[cat] === undefined) continue
    target.catPointsSum[cat] += pyRound(b.p / b.a * 100)
    target.catPointsCnt[cat]++
  }
}

// 단일 result 를 누적기에 반영
function accumulate(acc, result, url) {
  // 분류불가(unknown)/홈페이지(home) 는 점수 집계에서 완전 제외 — 어떤 항목에도 기여 X
  const rpt = resolvePt(result.page_type, url)
  if (rpt && rpt.excluded) return
  acc.urlCount++
  const score = result.score
  const scored = score && typeof score.total === 'number'
  if (scored) {
    acc.scoredCount++
    acc.scoreSum += score.total
    const g = score.grade || 'Unknown'
    acc.grades[g] = (acc.grades[g] || 0) + 1
    accumulateChecks(acc, score)
  }
  // 페이지타입별 점수 + 체크/카테고리 (페이지타입 분해 통과율용) — 병합 id/라벨 사용
  if (rpt) {
    if (!acc.pageTypes[rpt.id]) acc.pageTypes[rpt.id] = { label: rpt.label, count: 0, scoreSum: 0, scoredCount: 0, ...newCheckBins() }
    const slot = acc.pageTypes[rpt.id]
    slot.count++
    if (scored) {
      slot.scoreSum += score.total
      slot.scoredCount++
      accumulateChecks(slot, score)
    }
  }
  // AI 봇 차단 (robots.txt)
  const rb = result.robots_txt
  if (rb && rb.bots) {
    for (const [bot, info] of Object.entries(rb.bots)) {
      if (!acc.bots[bot]) acc.bots[bot] = { blocked: 0, total: 0 }
      acc.bots[bot].total++
      if (info && info.blocked === true) acc.bots[bot].blocked++
    }
  }
  // CSR/SSR tier
  const cr = result.csr_ratio
  if (cr && cr.tier) acc.tiers[cr.tier] = (acc.tiers[cr.tier] || 0) + 1
}

// bins(.catPointsSum/.catPointsCnt) → 카테고리 평균 points (scope/pageType 공용)
function finalizeCategories(bin) {
  const out = {}
  for (const cat of CATEGORIES) {
    out[cat] = (bin.catPointsCnt && bin.catPointsCnt[cat]) ? +(bin.catPointsSum[cat] / bin.catPointsCnt[cat]).toFixed(1) : null
  }
  return out
}

// 누적기 → 출력 형태 (rate/avg 계산은 UI 에서 — 여기선 합/카운트 보존 + 편의 avg)
function finalizeAcc(acc) {
  const categories = finalizeCategories(acc)
  const pageTypes = {}
  for (const [id, v] of Object.entries(acc.pageTypes)) {
    pageTypes[id] = {
      label: v.label,
      count: v.count,
      avgScore: v.scoredCount ? +(v.scoreSum / v.scoredCount).toFixed(1) : null,
      categories: finalizeCategories(v),
      checks: v.checks || {},
    }
  }
  return {
    urlCount: acc.urlCount,
    scoredCount: acc.scoredCount,
    avgScore: acc.scoredCount ? +(acc.scoreSum / acc.scoredCount).toFixed(1) : null,
    grades: acc.grades,
    categories,
    checks: acc.checks,
    pageTypes,
    bots: acc.bots,
    tiers: acc.tiers,
  }
}

// per-URL 실패(FAIL) 항목 추출 — 개선 리포트(국가×페이지타입×항목 조합 필터)용.
// applicable 한 pass===false 만 수집. checkMeta(id→{label,cat}) 를 부수적으로 채움 (필터 드롭다운 메타).
export function collectFails(score, checkMeta) {
  const out = []
  const bd = score.breakdown || {}
  for (const cat of SRC_CATEGORIES) {
    const items = (bd[cat] && bd[cat].items) || {}
    for (const [id, it] of Object.entries(items)) {
      // applicable 한 FAIL 만: pass===false 자체가 na/null 을 이미 배제 → na!==true 만 추가 확인.
      if (it && it.pass === false && it.na !== true) {
        if (!checkMeta[id]) checkMeta[id] = { label: it.label || id, cat: catOf(cat, id) }
        out.push({ id, hint: it.hint || '' })
      }
    }
  }
  return out
}

// per-URL 전체 체크(PASS + FAIL) 추출 — Raw 데이터(패스/논패스 전수 표기 + 필터) 용.
// applicable 한 것만 (na/null 은 미적용이라 제외). pass===false 만 hint 보유.
export function collectChecks(score, checkMeta) {
  const out = []
  const bd = score.breakdown || {}
  for (const cat of SRC_CATEGORIES) {
    const items = (bd[cat] && bd[cat].items) || {}
    for (const [id, it] of Object.entries(items)) {
      if (!it || it.na === true || it.pass == null) continue  // 미적용(na/null) 제외
      if (!checkMeta[id]) checkMeta[id] = { label: it.label || id, cat: catOf(cat, id) }
      out.push({ id, pass: it.pass === true, hint: it.pass === false ? (it.hint || '') : '' })
    }
  }
  return out
}

// fetch 실패(비-200) 페이지 판정 — ai_status_200 이 FAIL 이면 전 체크가 'HTML 파싱 실패'로
// cascade-FAIL 하므로 개선 대상이 아님(gen_audit_report.py fetch_state 와 동일 취지). 개선 목록에서 제외.
export function isFetchFailed(score) {
  // ai_status_200 은 구포맷에선 ai_readiness, 신포맷에선 ai_crawlability 아래에 있다
  const bd = score.breakdown || {}
  const it = { ...((bd.ai_readiness || {}).items || {}), ...((bd.ai_crawlability || {}).items || {}) }
  const s = it.ai_status_200
  return !!(s && s.pass === false)
}

function main() {
  const args = parseArgs()
  const SRC = args.src || DEFAULT_SRC
  if (!existsSync(SRC)) {
    console.error(`[aggregate-readability] FATAL: 소스 경로 없음 — ${SRC}`)
    console.error('  --src <경로> 로 run_results 디렉토리를 지정하세요.')
    process.exit(1)
  }
  const files = readdirSync(SRC).filter(f => f.endsWith('.json'))
  if (!files.length) {
    console.error(`[aggregate-readability] FATAL: ${SRC} 에 .json 파일 없음`)
    process.exit(1)
  }

  // PSI(Lighthouse) TTFB 데이터 로드 — #1 채점 정본. 없으면 크롤러 값으로 폴백(하위 호환).
  // 스냅샷 날짜 확정 전이라 --rebuild/--date 인자 기준으로 먼저 찾고, 없으면 최신 psi-*.json.
  let psiResults = null, psiDate = null, ttfbMedian = null
  {
    const want = args.rebuild || args.date
    const cand = want ? [`psi-${want}.json`] : []
    if (existsSync(OUT_DIR)) {
      cand.push(...readdirSync(OUT_DIR).filter(f => /^psi-\d{4}-\d{2}-\d{2}\.json$/.test(f)).sort().reverse())
    }
    for (const fn of cand) {
      const fp = join(OUT_DIR, fn)
      if (!existsSync(fp)) continue
      try {
        const doc = JSON.parse(readFileSync(fp, 'utf8'))
        // 부분 수집분 차단 — complete=true 인 파일만 채택. 수집 도중 집계를 돌리면
        // #1 이 소수 URL 기준 통과율로 잡혀 오해를 부른다 (collect-psi 의 complete 플래그).
        if (doc.complete !== true) {
          const cv = doc.coverage ? `${doc.coverage.ok}/${doc.coverage.total}` : '미상'
          _logWarn('aggregate-readability', `PSI 부분 수집분 무시 — ${fn} (커버리지 ${cv}). 수집 완료 후 재집계 필요`)
          continue
        }
        psiResults = doc.results || null
        psiDate = doc.date || fn.slice(4, 14)
        break
      } catch (e) { _logWarn('aggregate-readability', `PSI 파일 파싱 실패 — ${fn}: ${e.message}`) }
    }
    if (psiResults) {
      const n = Object.keys(psiResults).length
      const okN = Object.values(psiResults).filter(v => v && !v.err && v.lab != null).length
      _logInfo('aggregate-readability', `PSI TTFB 로드 — ${psiDate}: ${okN}/${n} URL 유효 (#1 은 PSI server-response-time 기준으로 채점)`)
      ttfbMedian = buildTtfbMedian(psiResults, psiDate)
    } else {
      _logWarn('aggregate-readability', '#1 TTFB — PSI 데이터 없음, 크롤러 자체 측정값으로 폴백 (node scripts/collect-psi.mjs 로 수집 권장)')
    }
  }

  const countries = {}
  const overall = newAcc()
  const fileDates = []
  const urlRows = []  // CSV 다운로드용 per-URL 행: { url, country, pt, score }
  // Raw 데이터(조합 필터)용 — 페이지별 전체 체크(PASS+FAIL) 행 + 필터 메타 (전수 기준, 샘플링 전)
  const checkRows = []
  const checkMeta = {}
  const ptLabelMap = {}

  // 국가별 최신 run 만 선택 — run_results 에 같은 국가의 여러 날짜 run 이 공존하면
  // (예: br_2026-06-13 + br_2026-06-14) 최신 날짜 하나만 집계. 과거 run 이
  // overall/CSV 에 이중 계상되던 버그 방지 (countries[cc] 는 덮어쓰기라 최신만 남는데
  // overall/urlRows 는 모든 파일을 누적했었음 → 다중 날짜 국가만 inflate).
  const latestByCc = {}
  // --rebuild <date>: 기존 스냅샷(data/readability/<date>.json)이 사용한 run 을 국가별 runId 로
  // 그대로 고정 재집계. 채점 기준(SCORING_OVERRIDE)이 바뀌었을 때 과거 스냅샷까지 같은 기준으로
  // 다시 만들어야 MoM 추이가 기준 변경 때문에 튀지 않는다.
  const parsedAll = []
  for (const fname of files) {
    const meta = parseFileName(fname)
    if (!meta) {
      console.warn(`[aggregate-readability] WARN: 파일명 패턴 불일치, skip — ${fname}`)
      continue
    }
    parsedAll.push({ fname, meta })
  }
  if (args.rebuild) {
    const snapPath = join(OUT_DIR, `${args.rebuild}.json`)
    if (!existsSync(snapPath)) {
      console.error(`[aggregate-readability] FATAL: --rebuild 대상 스냅샷 없음 — ${snapPath}`)
      process.exit(1)
    }
    const prevSnap = JSON.parse(readFileSync(snapPath, 'utf8'))
    for (const [cc, v] of Object.entries(prevSnap.countries || {})) {
      const hit = parsedAll.find(x => x.meta.cc === cc && x.meta.runId === v.runId)
      if (!hit) {
        console.error(`[aggregate-readability] FATAL: ${cc} 의 원본 run 없음 (date=${v.auditedAt} runId=${v.runId}) — 재집계 불가`)
        process.exit(1)
      }
      latestByCc[cc] = hit
      console.log(`[aggregate-readability] ${cc}: rebuild 고정 run ${hit.meta.date}/${hit.meta.runId}`)
    }
  } else {
    for (const { fname, meta } of parsedAll) {
      const prev = latestByCc[meta.cc]
      if (!prev || meta.date >= prev.meta.date) {
        if (prev) console.log(`[aggregate-readability] ${meta.cc}: 과거 run 제외 (${prev.meta.date}/${prev.meta.runId}) → 최신 채택 (${meta.date}/${meta.runId})`)
        latestByCc[meta.cc] = { fname, meta }
      } else {
        console.log(`[aggregate-readability] ${meta.cc}: 과거 run 제외 (${meta.date}/${meta.runId}) — 최신 유지 (${prev.meta.date}/${prev.meta.runId})`)
      }
    }
  }

  for (const { fname, meta } of Object.values(latestByCc)) {
    let data
    try {
      data = JSON.parse(readFileSync(join(SRC, fname), 'utf8'))
    } catch (e) {
      console.warn(`[aggregate-readability] WARN: JSON 파싱 실패, skip — ${fname}: ${e.message}`)
      continue
    }
    const acc = newAcc()
    const summary = Array.isArray(data.summary) ? data.summary : []
    // 표본 추출 전 — excluded(분류불가/홈페이지) 제거 + 페이지타입 해석
    const items = []
    // 측정이 성립하지 않은 페이지 제외 카운터 — 아래 [DETECT] 참조
    let skipNoScore = 0, skipFetchFail = 0
    for (const s of summary) {
      if (!s || !s.result) continue
      const url = s.url || s.result.url
      const rpt = resolvePt(s.result.page_type, url)
      if (rpt && rpt.excluded) continue
      // 대시보드 채점 재정의 (TTFB 1800ms / Cache-Control 완화 / Render Blocking 제외) —
      // checkRows(Raw 데이터) · 집계 · CSV 가 모두 같은 점수를 보도록 여기서 한 번만 적용.
      // upstreamGated — 신포맷(6분류) 행이면 상류가 applies_to_page_types 를 이미 적용했다는 표식
      const upstreamGated = !!(s.result.score && s.result.score.breakdown && s.result.score.breakdown.citable_content)
      applyScoringOverride(s.result.score, { url, psi: psiResults, pt: rpt ? rpt.id : null, cc: meta.cc, ttfbMedian, upstreamGated })
      // [DETECT] 측정 성립 여부 — 여기서 걸러야 점수·통과율·페이지타입·CSV·Raw 데이터가 모두
      // 같은 모집단을 본다. 이전에는 Raw 데이터만 isFetchFailed 로 걸러 기준이 어긋나 있었다.
      //   제외: 404 / 500 / fetch 자체 실패 (ai_status_200 FAIL) — 전 체크가 cascade-FAIL 이라
      //         '개선 대상'이 아니고 평균만 끌어내린다 (해당 페이지 평균 34.1점).
      //   유지: soft-404 (200 응답인데 본문이 빈 페이지) — 측정은 성립했고 실제 개선 대상이므로 채점.
      const sc = s.result.score
      if (!sc || typeof sc.total !== 'number') { skipNoScore++; continue }
      if (isFetchFailed(sc)) { skipFetchFail++; continue }
      items.push({ result: s.result, url, rpt })
    }
    if (skipNoScore || skipFetchFail) {
      _logInfo('aggregate-readability', `${meta.cc}: 측정 미성립 제외 — 비-200/fetch실패 ${skipFetchFail}, 미채점 ${skipNoScore}`)
    }
    // Raw 데이터(조합 필터)용 — 전수 페이지의 전체 체크(PASS+FAIL) 수집 (샘플링 전, 최대 커버리지).
    // per-row try/catch (data.md §6.3) — 손상된 breakdown 한 건이 전체 집계를 멈추지 않게.
    let chkSkip = 0
    for (const it of items) {
      try {
        // items 단계에서 미채점/비-200 은 이미 제외됨 — 여기선 체크 수집만.
        const sc = it.result.score
        const checks = collectChecks(sc, checkMeta)
        if (!checks.length) continue
        const ptId = it.rpt ? it.rpt.id : '(none)'
        // 라벨 등록 — 페이지타입 미해석(rpt null) 행은 '미분류' 로 표기(UI 에 raw '(none)' 노출 방지).
        if (!ptLabelMap[ptId]) ptLabelMap[ptId] = it.rpt ? it.rpt.label : '미분류'
        checkRows.push({ cc: meta.cc, pt: ptId, url: it.url || '', score: sc.total, checks })
      } catch (e) {
        chkSkip++
        console.warn(`[aggregate-readability] WARN: ${meta.cc} 체크 수집 skip — ${e.message}`, { url: it.url })
      }
    }
    if (chkSkip) {
      _logWarn('aggregate-readability', `${meta.cc}: 체크 수집 skip ${chkSkip} (손상 breakdown)`)
    }
    // 페이지타입별 max SAMPLE_PER_PT 표본 (제품군 균등 분배) — 집계 + CSV 모두 동일 표본 사용
    const selected = sampleByPageType(items)
    if (selected.length < items.length) {
      console.log(`[aggregate-readability] ${meta.cc}: 표본 추출 ${items.length} → ${selected.length} (페이지타입별 max ${SAMPLE_PER_PT}, 제품군 균등 분배)`)
    }
    for (const it of selected) {
      accumulate(acc, it.result, it.url)
      accumulate(overall, it.result, it.url)
      urlRows.push({
        url: it.url || '',
        country: CC_NAME[meta.cc] || meta.cc.toUpperCase(),
        pt: it.rpt ? it.rpt.label : '',
        score: (it.result.score && typeof it.result.score.total === 'number') ? it.result.score.total : '',
      })
    }
    fileDates.push(meta.date)
    countries[meta.cc] = {
      auditedAt: meta.date,
      runId: meta.runId,
      ...finalizeAcc(acc),
    }
    console.log(`[aggregate-readability] ${meta.cc} (${meta.date}): ${acc.scoredCount}/${acc.urlCount} URL, avg ${countries[meta.cc].avgScore}`)
  }

  // 스냅샷 날짜 = 인자 우선, 없으면 최빈 파일 날짜
  const snapshotDate = args.rebuild || args.date || mostCommon(fileDates) || new Date().toISOString().slice(0, 10)

  const snapshot = {
    date: snapshotDate,
    generatedAt: new Date().toISOString(),
    source: basename(SRC),
    categoryLabels: CATEGORY_LABEL,
    countries,
    overall: finalizeAcc(overall),
  }

  if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true })
  const outPath = join(OUT_DIR, `${snapshotDate}.json`)
  writeFileSync(outPath, JSON.stringify(snapshot, null, 2))

  // 인덱스 갱신 (스냅샷 목록 — 시계열 대비용)
  const indexPath = join(OUT_DIR, 'index.json')
  let index = { snapshots: [] }
  if (existsSync(indexPath)) {
    try { index = JSON.parse(readFileSync(indexPath, 'utf8')) } catch { index = { snapshots: [] } }
  }
  const entry = {
    date: snapshotDate,
    generatedAt: snapshot.generatedAt,
    countries: Object.keys(countries).sort(),
    overallAvg: snapshot.overall.avgScore,
    urlCount: snapshot.overall.urlCount,
  }
  index.snapshots = (index.snapshots || []).filter(s => s.date !== snapshotDate)
  index.snapshots.push(entry)
  index.snapshots.sort((a, b) => (a.date < b.date ? -1 : 1))
  writeFileSync(indexPath, JSON.stringify(index, null, 2))

  // 검수 URL 목록 CSV (url, country, page_type, score) — 어드민 다운로드용
  const csvPath = join(OUT_DIR, `urls-${snapshotDate}.csv`)
  const csvLines = ['url,country,page_type,score']
  for (const row of urlRows) {
    csvLines.push([csvCell(row.url), csvCell(row.country), csvCell(row.pt), csvCell(row.score)].join(','))
  }
  // UTF-8 BOM 선두 — Excel(특히 한국어 로캘)이 CP949 로 오인해 한글 깨지는 것 방지
  writeFileSync(csvPath, '﻿' + csvLines.join('\n') + '\n')

  // Raw 데이터(조합 필터 — 국가×페이지타입×항목×패스여부) — 페이지별 전체 체크(PASS+FAIL).
  // hint 문자열 인터닝(중복 제거) — 동일 사유가 수천 건 반복 → 파일/전송 크기 대폭 축소. PASS 는 hint 없음(-1).
  const hintIndex = new Map()
  const hints = []
  const internHint = (h) => {
    let i = hintIndex.get(h)
    if (i === undefined) { i = hints.length; hints.push(h); hintIndex.set(h, i) }
    return i
  }
  const checksRowsOut = checkRows.map(r => ({
    cc: r.cc, pt: r.pt, url: r.url, score: r.score,
    c: r.checks.map(x => [x.id, x.pass ? 1 : 0, x.pass ? -1 : internHint(x.hint)]),  // [checkId, pass01, hintIndex(-1=PASS)]
  }))
  const checksPath = join(OUT_DIR, `checks-${snapshotDate}.json`)
  const checksDoc = {
    date: snapshotDate,
    generatedAt: snapshot.generatedAt,
    countries: Object.keys(countries).sort(),
    ccName: Object.fromEntries(Object.keys(countries).map(cc => [cc, CC_NAME[cc] || cc.toUpperCase()])),
    pageTypes: ptLabelMap,
    checks: checkMeta,
    hints,        // 인터닝된 hint 사전 (c[][2] 가 인덱스, -1=PASS)
    rows: checksRowsOut,
  }
  const checksJson = JSON.stringify(checksDoc)
  writeFileSync(checksPath, checksJson)
  // checks-*.json 은 최신 날짜 1개만 유지 (현재값만 의미 — 시계열 가치 없음, git 비대 방지).
  // 구 fails-*.json 도 정리 (raw 데이터로 대체됨).
  const staleFiles = readdirSync(OUT_DIR).filter(f => /^(checks|fails)-\d{4}-\d{2}-\d{2}\.json$/.test(f)).sort()
  const keepChecks = `checks-${snapshotDate}.json`
  for (const fn of staleFiles) {
    if (fn !== keepChecks) {
      rmSync(join(OUT_DIR, fn))
      console.log(`[aggregate-readability] 과거/구 데이터 제거: ${fn} (유지: ${keepChecks})`)
    }
  }

  const kb = (JSON.stringify(snapshot).length / 1024).toFixed(1)
  const ckb = (checksJson.length / 1024).toFixed(1)
  console.log(`[aggregate-readability] ✓ 스냅샷 저장: ${outPath} (${kb} KB, ${Object.keys(countries).length}개국)`)
  console.log(`[aggregate-readability] ✓ Raw 데이터(PASS+FAIL): ${checksPath} (${ckb} KB, ${checkRows.length} pages)`)
  console.log(`[aggregate-readability] ✓ 인덱스: ${indexPath} (${index.snapshots.length}개 스냅샷)`)
  console.log(`[aggregate-readability] ✓ URL CSV: ${csvPath} (${urlRows.length}개 URL)`)

  // 해석 리포트 사본 갱신 — 원본 있으면 OUT_DIR 로 복사 (없으면 warn, 집계는 성공 유지)
  const reportSrc = args.report || DEFAULT_REPORT_SRC
  const reportDst = join(OUT_DIR, 'audit_report.txt')
  if (existsSync(reportSrc)) {
    copyFileSync(reportSrc, reportDst)
    const rkb = (statSync(reportDst).size / 1024).toFixed(1)
    console.log(`[aggregate-readability] ✓ 해석 리포트 사본: ${reportDst} (${rkb} KB) ← ${reportSrc}`)
  } else {
    console.warn(`[aggregate-readability] WARN: 해석 리포트 원본 없음, 사본 유지 — ${reportSrc} (--report 또는 AUDIT_REPORT_PATH 로 지정)`)
  }
}

function mostCommon(arr) {
  if (!arr.length) return null
  const cnt = {}
  arr.forEach(x => { cnt[x] = (cnt[x] || 0) + 1 })
  return Object.entries(cnt).sort((a, b) => b[1] - a[1])[0][0]
}

// 직접 실행 시에만 집계 수행 — import(테스트 등) 시 자동 실행 방지.
if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) main()
