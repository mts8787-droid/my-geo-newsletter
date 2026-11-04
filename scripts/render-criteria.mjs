#!/usr/bin/env node
// 검수 기준 전체 항목표 생성기 — 점수 포함 / 점수 제외 두 버전 + Markdown
//
// 데이터 출처: data/readability/geo-agent-checklist.html (사람이 유지하는 기준 문서)
//   → 항목명 · 정의 · Pass 기준 · 측정방법 · 카테고리 구간을 파싱
//   → 통과율은 최신 스냅샷(data/readability/<date>.json)에서 check id 로 조인
//
// 산출물:
//   docs/GEO-AUDIT-CRITERIA.md   점수 제외 Markdown (audit 리포 반영용) — 이 스크립트가 유일하게 파일로 씀
//
// HTML 두 버전은 파일로 굽지 않고 요청 시 렌더한다 (PUB_DIR 은 gitignore + Render 디스크는 재배포 시 초기화):
//   /p/GEO-Readability-Criteria          점수 포함 — routes/published.js
//   /admin/readability/criteria.html     점수 제외 — routes/readability.js (대시보드 '검수 기준' 탭 iframe)
//
// 사용: node scripts/render-criteria.mjs

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs'
import { rdBandKey } from '../src/shared/readabilityBand.js'
import { checklistEn } from '../src/shared/readabilityChecklistEn.js'
import { criteriaDetail } from '../src/shared/readabilityCriteriaDetail.js'
import { CATEGORY_GUIDE, PT_LABEL, GUIDE, pick } from '../src/shared/readabilityGuide.js'
import { CRITERIA_PARAMS } from '../src/shared/readabilityCriteriaParams.js'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const DATA_DIR = join(ROOT, 'data', 'readability')
const CHECKLIST = join(DATA_DIR, 'geo-agent-checklist.html')

// 문서 행 번호 → 실제 채점 check id.
// 문서 번호(1~43)와 어딧 라벨 번호가 꼬리에서 어긋나 있어 명시 매핑이 필요하다
// (예: 문서 #43 llms.txt → 라벨 '#44 llms.txt 존재'). 신규 항목 추가 시 여기도 갱신.
export const DOC_TO_CHECK = {
  '1': ['perf_ttfb'], '2': ['perf_compression'], '3': ['perf_http_protocol'], '4': ['perf_cache_control'],
  '6': ['perf_redirect'], '7': ['perf_mixed_content'],
  '9': ['a11y_image_alt'], '10': ['a11y_semantic'], '11': ['a11y_heading_hier'], '12': ['a11y_aria_labels'],
  '13': ['seo_title'], '14': ['seo_meta_desc'], '15': ['seo_canonical'], '16': ['seo_h1'],
  '17': ['seo_robots'],   // seo_robots_hdr 는 OR 통합으로 흡수 (aggregate 의 OR_GROUPS)
  '18': ['seo_open_graph'], '19': ['seo_sitemap'],
  '20': [], '21': ['ai_schema_breadcrumb'], '22': [], '23': ['ai_schema_faq'], '24': ['ai_schema_collection'],
  '25': ['ai_schema_product', 'ai_schema_offer'], '26': ['ai_schema_image'], '27': ['ai_schema_video'],
  '28': ['ai_schema_howto'], '29': ['ai_schema_article'], '30': [], '31': [],
  '44': ['ai_schema_rating_or_review'],   // 2026-10-24 상류 활성 (PDP 전용) — 문서 번호는 상류 spec_id 그대로
  '32': ['ai_faq_block'], '33': ['ai_definition'], '34': ['ai_author_source'], '35': ['ai_summary_box'], '36': ['ai_citable'],
  '37': ['ai_ssr_ratio'], '38': ['ai_pdp_thumbnails'], '39': ['ai_core_element'], '40': ['ai_image_filename'],
  '41': ['ai_status_200'], '42': ['ai_soft_404'], '43': ['ai_llms_txt'],
}

// 체크리스트 문서에 대응 행이 없던 항목들 — 정의·Pass 기준을 제시할 수 없어
// 2026-08-27 채점에서 제외됐다 (aggregate 의 DISABLED_CHECKS). 표에도 노출하지 않는다.
export const ORPHAN_CHECKS = {}

export const CAT_ORDER = ['사이트 성능', '웹접근성', 'Basic SEO', '스키마마크업', '고인용 콘텐츠', 'AI Crawlability']
export const CAT_KEY = {
  '사이트 성능': 'performance', '웹접근성': 'accessibility', 'Basic SEO': 'seo',
  '스키마마크업': 'geo_schema', '고인용 콘텐츠': 'geo_content', 'AI Crawlability': 'geo_platform',
}
// 카테고리 설명 — 대시보드·뉴스레터와 같은 문구를 쓴다 (CATEGORY_GUIDE single source).
// 예전에는 여기에 별도 문구를 두어 같은 영역을 세 곳이 다르게 설명하고 있었다 (감사 2026-08-30).
export const CAT_NOTE = Object.fromEntries(
  Object.entries(CAT_KEY).map(([ko, key]) => [ko, pick(CATEGORY_GUIDE[key]?.what, 'ko')]))
// 카테고리 표시명 EN
export const CAT_NAME_EN = {
  '사이트 성능': 'Site Performance', '웹접근성': 'Accessibility', 'Basic SEO': 'Basic SEO',
  '스키마마크업': 'Schema Markup', '고인용 콘텐츠': 'Citable Content', 'AI Crawlability': 'AI Crawlability',
}
// 카테고리 이름·설명을 언어에 맞춰
export function catName(ko, lang) { return lang === 'en' ? (CAT_NAME_EN[ko] || ko) : ko }
export function catNote(ko, lang) { return pick(CATEGORY_GUIDE[CAT_KEY[ko]]?.what, lang) || '' }

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
const unent = s => String(s).replace(/<[^>]+>/g, '').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
  .replace(/&quot;/g, '"').replace(/&#x00A0;/g, ' ').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').trim()

// 체크리스트 HTML → 행 배열
export function parseChecklist(html) {
  const cats = [...html.matchAll(/rowspan="(\d+)" class="cat-cell">([^<]*)/g)].map(m => ({ name: m[2], idx: m.index }))
  const rowRe = /class="no-cell([^"]*)">([\s\S]*?)<\/td>\s*<td class="item-cell[^"]*">([\s\S]*?)<\/td>\s*<td class="pass-cell[^"]*">([\s\S]*?)<\/td>\s*<td class="method-cell[^"]*">([\s\S]*?)<\/td>/g
  const span = (x, cls) => { const m = x.match(new RegExp('<span class="' + cls + '">([\\s\\S]*?)<\\/span>')); return m ? unent(m[1]) : '' }
  const bare = x => unent(x.replace(/<span class="(item-def|pend-note|plan-note|tbd-tag)">[\s\S]*?<\/span>/g, ''))
  const rows = []
  let m
  while ((m = rowRe.exec(html))) {
    let cat = cats.length ? cats[0].name : ''
    for (const c of cats) if (m.index >= c.idx) cat = c.name
    rows.push({
      cat, no: bare(m[2]).trim(), contentCheck: /content-check/.test(m[1]),
      name: bare(m[3]), def: span(m[3], 'item-def'),
      pass: bare(m[4]), pendNote: span(m[4], 'pend-note'), planNote: span(m[4], 'plan-note'),
      method: bare(m[5]),
    })
  }
  return rows
}

// 행 목록을 지정 언어로 변환 — EN 이면 name/def/pass 를 사전에서 갈아끼운다.
// 사전에 없으면 KO 를 그대로 둔다 (누락은 npm test 가 잡는다).
export function localizeRows(rows, lang) {
  if (lang !== 'en') return rows
  let plannedIdx = 0
  return rows.map(r => {
    const en = checklistEn(r.no, r.no === '예정' ? plannedIdx++ : 0)
    return en ? { ...r, name: en.name, def: en.def, pass: en.pass, method: en.method || r.method } : r
  })
}

// 신호등 밴드 — 대시보드/뉴스레터와 동일 기준 (src/shared/readabilityBand.js single source)
const band = rdBandKey

// 카테고리별 실제 채점 항목 수 — 문서 행 수가 아니라 check id 개수.
// #17 Robots(2개) · #25 Product 풀세트(2개) 처럼 한 행이 두 체크인 경우가 있어 행 수로 세면 어긋난다.
export function scoredCount(rows, cat) {
  const ids = new Set()
  rows.filter(r => r.cat === cat).forEach(r => (DOC_TO_CHECK[r.no] || []).forEach(c => ids.add(c)))
  ;(ORPHAN_CHECKS[cat] || []).forEach(o => ids.add(o.cid))
  return ids.size
}

// ─── HTML ────────────────────────────────────────────────────────────────
// 검수 기준 페이지 UI 문구 (KO/EN) — 대시보드 i18n 과 같은 원칙
const CRIT_T = {
  ko: {
    title: 'GEO 검수 기준', scored: (n) => `채점 ${n}개`, scoredLabel: '채점 항목',
    tagPlan: '10월 감사부터', tagPend: 'TBD',
    thNo: '번호', thItem: '항목 · 정의', thPass: 'Pass 기준', thMethod: '측정방법', thRate: '통과율',
    orphanDef: (note) => `체크리스트 문서에 행이 없는 채점 항목 — ${note}`,
    mDate: '측정일', mCountries: '대상 국가', mPages: '대상 페이지', mItems: '채점 항목', mScore: '종합 점수',
    legGood: '90% 이상', legCrit: '60% 미만',
    notesH: '읽는 법 · 예외 처리',
    nExcluded: '채점에서 제외된 항목', nSkipped: '집계 대상에서 빠지는 페이지',
    nChanged: '측정 기준이 바뀐 항목', nMapping: '문서 번호와 채점 항목이 1:1이 아닌 곳',
    planned: '예정',
    footWith: (d, c, u) => `측정일 ${d} · lg.com ${c}개국 ${u}페이지 · 통과율은 해당 항목이 적용된 페이지 대비 비율`,
    footPlain: 'GEO Agent Readability 검수 기준 · 통과율은 대시보드에서 확인',
    h1: '검수 기준 · 전체 항목표',
    docTitle: (sc) => `GEO 검수 기준표${sc ? '' : ' (기준)'}`,
    unitCount: '개',
    subWith: (n, d) => `6개 카테고리 ${n}개 항목으로 lg.com 글로벌 사이트의 AI 가독성을 채점합니다. 통과율은 ${d} 측정분 기준이며, 10월 감사부터 시행할 예정 항목 4개를 함께 표기했습니다. 일부 항목은 TBD로 분류하였으며, 자가 콘텐츠 분석 및 기준 세분화, 검수 에이전트 기능 고도화 후 항목 추가 예정입니다.`,
    subPlain: (n) => `6개 카테고리 ${n}개 항목의 정의와 Pass 기준입니다. 10월 감사부터 시행할 예정 항목 4개를 함께 표기했습니다. 일부 항목은 TBD로 분류하였으며, 자가 콘텐츠 분석 및 기준 세분화, 검수 에이전트 기능 고도화 후 항목 추가 예정입니다.`,
    dSrc: '검수 대상', dLogic: '판정 로직', dExcept: '예외 · 별도 조건',
    dApplies: '적용 대상 · N/A', dParams: '판정 파라미터', dFail: 'FAIL 예시 · 개선',
    apAll: '전 페이지타입 (집계 제외 타입은 빼고)', apPt: '페이지타입', apWhen: '아래 조건이 없으면 N/A (분모 제외)',
    apHint: 'N/A 안내', pRule: '룰', fFail: 'FAIL', fFix: '개선', mdDl: 'MD 다운로드',
    modelNote: '검수에 사용하는 LLM 모델은 <b>Claude Fable 5</b> 입니다. 아래 판정 로직의 패턴 요소(키워드·정규식·셀렉터)는 lg.com <b>실 콘텐츠 예시를 기반으로 패턴화</b>한 것입니다. 2026-10-18 부터 #33 정의문·#36 인용 문장의 최종 판정은 lg.com 문장으로 미세조정한 로컬 <b>문장 판정 모델 geo-audit-3b</b>(Qwen2.5-3B)가 수행합니다 — 평가셋 1,052문장(사람 검수 268 포함) F1 인용 88.7 · 정의 89.9. DOM/셀렉터 규칙 항목에는 모델이 개입하지 않습니다.',
    nx: [
      '<b>#5 HTML &lt; 100KB</b> — 측정은 정확하나 lg.com HTML 중앙값이 1,536KB라 실질 통과율 0.0%. 통과 건의 대부분이 본문 0자인 빈 404 셸이라 지표 방향이 반대였음',
      '<b>#8 Render Blocking 0</b> — 통과율 2.3%로 변별력 없음',
      '<b>(구) Sitemap XML</b> (<code>ai_sitemap_domain</code>) — #19 Sitemap과 rule이 완전히 동일한 중복 (어딧에서도 이미 비활성). 번호 #44 는 2026-10-24 부터 AggregateRating/Review 항목이 사용',
      '<b>#20 Organization · #22 Speakable · #30 digitalDocument · #31 Recipe</b> — scoring_config에서 비활성. 문서에는 회색으로 남겨둠',
    ],
    ns: [
      '<b>B2B(사업자) · 프로모션/약관</b> — GEO 대상이 아니라 점수·통과율·URL 카운트 전부에서 제외',
      '<b>비-200 페이지</b> (404 · 500 · fetch 실패) — 전 체크가 cascade-FAIL이라 개선 대상이 아님',
      '<b>분류불가 · 홈페이지 · 회사소개 · 서포트-일반</b> — 측정 의미 없음 / 아웃데이트 URL 다수 (서포트-트러블슈팅은 별개 타입으로 유지)',
      '<b>브랜드 스토리/캠페인 URL</b> (lg-story · lifesgood 경로) — GEO KPI 대상 아님. 뉴스룸/Press 버킷에 섞여 지표를 왜곡하던 것을 제외',
      '<b>단종·비활성 PDP</b> (PLP 상품 API 활성 목록 밖) 및 <b>악세사리 PDP</b> (필터·리모컨·설치키트 — 카테고리와 URL 키워드로 판정) — 콘텐츠가 빈약해 PDP 평균을 왜곡',
      '<b>페이지타입별 표본 상한 100페이지</b> — URL SHA1 해시 순 결정적 표본 (재집계해도 같은 표본). PDP 는 상한 없음',
    ],
    nc: [
      '<b>#1 TTFB</b> — 어딧 크롤러 자체 측정값이 동시 크롤 큐잉에 오염돼 실제보다 6~200배 크게 잡혔음. PageSpeed Insights의 server-response-time을 정본으로 교체',
      '<b>#4 Cache-Control</b> — 원래 룰이 no-cache/no-store가 섞이면 max-age 값과 무관하게 즉시 FAIL 처리했음. max-age 디렉티브가 설정돼 있으면 통과로 완화',
      '<b>#34 Author 또는 출처+날짜</b> — byline은 에디토리얼에만 성립하는 개념이라 Global Newsroom · Press &amp; Media에만 적용 (초기에는 구매 가이드 · LG Experience 포함)',
      '<b>#33 정의문 · #36 인용 문장 — 문장 판정 모델 결합 (2026-10-18)</b> — 정규식 단독 판정이 사람 기준과 크게 어긋나(#36 F1 36) 문장 판정 모델 geo-audit-3b가 패턴 후보를 최종 확인. 모델 미연결 시 정규식 폴백(판정 근거에 표기)',
      '<b>#33 · #36 노이즈 제외 보강 (2026-10-17)</b> — 할부·쿠폰·할인·보도자료 연락처·공유 버튼·JavaScript 안내·상표 고지를 제외해 사람 판정 정답 기준 정밀도 #36 41→88% · #33 20→50%. 숨은 모달/다이얼로그 문장도 본문에서 제외 (2026-10-19)',
      '<b>#37 HTML Text Ratio — Shadow DOM SSR 분자 제외 (2026-10-05)</b> — 비JS 파서 다수가 본문으로 읽지 않아 보수 기준 유지. 콘텐츠 룰(#32~#36)은 섀도 본문을 인정하되 판정 근거에 “주요 AI 크롤러 미인식 가능” 적시',
      '<b>#36 인용 문장 — 트러블슈팅·PLP 는 3개 기준 (2026-10-26, 10월 감사부터)</b> — 5개는 긴 본문 전제. 트러블슈팅은 증상→원인→해결책 세 요소, PLP 는 카테고리 설명 몇 줄이라 콘텐츠가 있어도 떨어졌음. 후보로 못 채우면 본문 앞 40문장도 모델이 탐색 (2026-10-24)',
      '<b>#26 ImageObject · #27 VideoObject — 리뷰 위젯 안 미디어 제외 (2026-10-26)</b> — Review·Comment 노드 하위의 고객 사진·영상 스키마를 페이지 콘텐츠로 세던 오탐 수정(10월 #26 통과 PDP 전부가 리뷰 사진). 저장된 JSON-LD 원본으로 재판정해 10월 결과에 소급',
      '<b>#44 AggregateRating 또는 Review (PDP) — 채점 활성 (2026-10-24)</b> — LG PDP 3,147건에 Review 가 추가되어 사용자 결정으로 활성. Product 에 연결되지 않은 별도 블록이어도 인정. 활성 채점 항목 37 → 38',
    ],
    nm: [
      '<b>#17 Robots</b> — meta robots와 X-Robots-Tag 헤더 중 <b>하나만 충족해도 통과</b> (OR 조건). 대표 체크 하나로 채점',
      '<b>#25 Product 풀세트</b> — Product·Offer 를 하나로 병합 채점 (둘 다 충족해야 통과, 2026-08-31 병합)',
    ],
  },
  en: {
    title: 'GEO Audit Criteria', scored: (n) => `${n} scored`, scoredLabel: 'Scored items',
    tagPlan: 'From the October audit', tagPend: 'TBD',
    thNo: 'No.', thItem: 'Item · definition', thPass: 'Pass criteria', thMethod: 'How it is measured', thRate: 'Pass rate',
    orphanDef: (note) => `Scored item with no row in the checklist document — ${note}`,
    mDate: 'Measured', mCountries: 'Sites', mPages: 'Pages', mItems: 'Scored items', mScore: 'Overall score',
    legGood: '90% and above', legCrit: 'Below 60%',
    notesH: 'How to read · exceptions',
    nExcluded: 'Items excluded from scoring', nSkipped: 'Pages excluded from aggregation',
    nChanged: 'Items whose measurement basis changed', nMapping: 'Where document numbers are not 1:1 with scored items',
    planned: 'Planned',
    footWith: (d, c, u) => `Measured ${d} · lg.com — ${c} sites, ${u} pages · pass rate is against pages the item applies to`,
    footPlain: 'GEO Agent Readability criteria · pass rates are on the dashboard',
    h1: 'Criteria · full item list',
    docTitle: (sc) => `GEO Audit Criteria${sc ? '' : ' (definitions)'}`,
    unitCount: '',
    subWith: (n, d) => `${n} items across 6 categories score the AI readability of lg.com sites. Pass rates are from the ${d} run, and the 4 items planned for the October audit are listed alongside. Some items are classified as TBD and will be added after own-content analysis, finer-grained criteria, and audit-agent upgrades.`,
    subPlain: (n) => `Definitions and pass criteria for ${n} items across 6 categories. The 4 items planned for the October audit are listed alongside. Some items are classified as TBD and will be added after own-content analysis, finer-grained criteria, and audit-agent upgrades.`,
    dSrc: 'Audit target', dLogic: 'Decision logic', dExcept: 'Exceptions · special conditions',
    dApplies: 'Applies to · N/A', dParams: 'Rule parameters', dFail: 'FAIL examples · fix',
    apAll: 'All page types (except types excluded from aggregation)', apPt: 'Page types', apWhen: 'N/A (out of the denominator) unless',
    apHint: 'N/A note', pRule: 'Rule', fFail: 'FAIL', fFix: 'Fix', mdDl: 'Download MD',
    modelNote: 'The LLM model used for the audit is <b>Claude Fable 5</b>. Pattern elements in the decision logic below (keywords, regexes, selectors) are <b>patterned from real lg.com content examples</b>. Since 2026-10-18 the final verdict on #33 definitions and #36 citable sentences is made by the local <b>sentence-judgment model geo-audit-3b</b> (Qwen2.5-3B fine-tuned on lg.com sentences) — F1 on a 1,052-sentence eval set (268 human-verified): citable 88.7 · definition 89.9. The model does not intervene in DOM/selector-rule items.',
    nx: [
      '<b>#5 HTML &lt; 100KB</b> — measurement is accurate, but lg.com’s median HTML is 1,536KB so the real pass rate is 0.0%. Most passing cases were empty 404 shells with no body text, inverting the signal',
      '<b>#8 Render Blocking 0</b> — 2.3% pass rate, no discriminating power',
      '<b>(old) Sitemap XML</b> (<code>ai_sitemap_domain</code>) — exact rule duplicate of #19 Sitemap (already disabled upstream). Number #44 has been used by the AggregateRating/Review item since 2026-10-24',
      '<b>#20 Organization · #22 Speakable · #30 digitalDocument · #31 Recipe</b> — disabled in scoring_config; kept greyed out in this document',
    ],
    ns: [
      '<b>B2B · promotion / terms pages</b> — out of GEO scope, excluded from scores, pass rates, and URL counts',
      '<b>Non-200 pages</b> (404 · 500 · fetch failure) — every check cascade-fails, so they are not improvement targets',
      '<b>Unclassified · home · about · general support</b> — no meaningful measurement / many outdated URLs (support-troubleshoot remains a separate type)',
      '<b>Brand story / campaign URLs</b> (lg-story · lifesgood paths) — not a GEO KPI target; they were skewing the newsroom/press buckets',
      '<b>Discontinued/inactive PDPs</b> (outside the PLP product-API active list) and <b>accessory PDPs</b> (filters, remotes, installation kits — judged by category and URL keywords) — thin content that distorted the PDP average',
      '<b>Per-page-type sample cap of 100 pages</b> — a deterministic sample in URL SHA1 order (identical across re-aggregations). PDP is exempt from the cap',
    ],
    nc: [
      '<b>#1 TTFB</b> — the crawler’s own measurement was contaminated by concurrent-crawl queuing and ran 6–200× high. Replaced with PageSpeed Insights server-response-time as the source of truth',
      '<b>#4 Cache-Control</b> — the original rule failed immediately when no-cache/no-store appeared, ignoring max-age. Relaxed to pass when a max-age directive is present',
      '<b>#34 Author or source + date</b> — a byline only makes sense for editorial content, so it applies only to Global Newsroom · Press &amp; Media (initially also Buying Guide · LG Experience)',
      '<b>#33 definitions · #36 citable sentences — sentence-judgment model attached (2026-10-18)</b> — regex-only verdicts diverged badly from human judgment (#36 F1 36), so the geo-audit-3b model now confirms pattern candidates. Falls back to regex-only (flagged in the verdict) when the model is not connected',
      '<b>#33 · #36 noise reinforcement (2026-10-17)</b> — financing, coupons, discounts, press contacts, share buttons, JavaScript notices, and trademark notices excluded; precision against human verdicts #36 41→88% · #33 20→50%. Hidden modal/dialog sentences also dropped from the body (2026-10-19)',
      '<b>#37 HTML Text Ratio — Shadow DOM SSR excluded from the numerator (2026-10-05)</b> — most non-JS parsers do not read it as body text, so the conservative basis stays. Content rules (#32–#36) accept shadow body text, with “may be unrecognized by major AI crawlers” noted in the verdict',
      '<b>#36 citable sentences — troubleshooting · PLP use a 3-sentence threshold (2026-10-26, from the October audit)</b> — 5 assumes a long body. Troubleshooting ends with symptom → cause → fix and a PLP carries only a few lines of category copy, so pages with real content were failing. If candidates fall short, the model also scans the first 40 body sentences (2026-10-24)',
      '<b>#26 ImageObject · #27 VideoObject — media inside review widgets excluded (2026-10-26)</b> — customer photos/videos under Review/Comment nodes were being counted as page content (every passing #26 PDP in October was a review photo). Re-judged from the stored raw JSON-LD and applied retroactively to October',
      '<b>#44 AggregateRating or Review (PDP) — scoring enabled (2026-10-24)</b> — enabled by user decision after LG added Review to 3,147 PDPs. A separate block not linked to Product also counts. Active scored items 37 → 38',
    ],
    nm: [
      '<b>#17 Robots</b> — passes if <b>either</b> meta robots or the X-Robots-Tag header allows indexing (OR condition). Scored as a single representative check',
      '<b>#25 Product full set</b> — Product and Offer merged into one check (both required to pass, merged 2026-08-31)',
    ],
  },
}

// ─── 항목 상세 — 불릿 블록 (HTML · Markdown 공용, 2026-11-05 "줄글이라 보기 힘들어") ─────────
// 블록 순서: 검수 대상 → 판정 로직 → 적용 대상·N/A → 판정 파라미터 → 예외 → FAIL 예시·개선.
// 적용 대상·파라미터는 상류 scoring_config 원문(readabilityCriteriaParams.js 생성 파일)에서,
// 개선은 GUIDE[checkId].action 에서 가져온다 — 문서에 다시 적지 않는다 (single source).

// 문서 행 → 상류 check id (하류 대표 id 와 다른 곳만)
const PARAM_ID_ALIAS = { seo_robots: 'seo_indexable' }
export function paramIdsFor(no) {
  const ids = (DOC_TO_CHECK[no] || []).map(id => PARAM_ID_ALIAS[id] || id)
  return ids.filter(id => CRITERIA_PARAMS[id])
}

// 파라미터 값 → 칩 목록. 쉼표 나열(키워드·셀렉터)은 낱개 칩으로 쪼갠다.
// 칩(class="pv")은 상류 원문 그대로라 EN 페이지에서도 한글 키워드가 남는다 (테스트가 pv 는 예외로 본다).
function paramValues(v) {
  if (v == null) return []
  if (Array.isArray(v)) return v.map(String)
  if (typeof v === 'object') return [JSON.stringify(v)]
  const s = String(v)
  // 셀렉터 안의 쉼표(예: "figure img, article img")도 나열이므로 같이 쪼갠다
  return s.includes(',') ? s.split(',').map(x => x.trim()).filter(Boolean) : [s]
}

// 불릿 하나 = HTML 문자열 | { li, sub: [...] } | { k, chips: [...] } (라벨 + 칩)
function detailBlocks(no, L2) {
  const ct = CRIT_T[L2]
  const det = criteriaDetail(no, L2)
  if (!det) return null
  const ids = paramIdsFor(no)
  const multi = ids.length > 1
  const ptName = id => pick(PT_LABEL[id], L2) || id
  const applies = [], params = []
  for (const id of ids) {
    const p = CRITERIA_PARAMS[id]
    const pre = multi ? `<code>${esc(id)}</code> — ` : ''
    applies.push(p.pageTypes
      ? { k: pre + esc(ct.apPt), chips: p.pageTypes.map(ptName), plain: true }
      : pre + esc(ct.apAll))
    if (p.when) {
      applies.push({ li: `${pre}${esc(ct.apWhen)}: <code>${esc(p.when.type)}</code>`,
        sub: Object.entries(p.when.params).map(([k, v]) => ({ k: esc(k), chips: paramValues(v) })) })
      if (p.when.naHint && L2 === 'ko') applies.push(`${pre}${esc(ct.apHint)} — ${esc(p.when.naHint)}`)
    }
    params.push({ li: `<code>${esc(id)}</code> · ${esc(ct.pRule)} <code>${esc(p.type)}</code>`,
      sub: Object.entries(p.params).map(([k, v]) => ({ k: esc(k), chips: paramValues(v) })) })
  }
  const g = (DOC_TO_CHECK[no] || []).map(id => GUIDE[PARAM_ID_ALIAS[id] || id] || GUIDE[id]).find(Boolean)
  const fail = (det.fail || []).map(x => typeof x === 'string' ? `<b>${esc(ct.fFail)}</b> ${x}` : x)
  if (g && g.action) fail.push(`<b>${esc(ct.fFix)}</b> ${esc(pick(g.action, L2))}`)
  return [
    [ct.dSrc, det.src], [ct.dLogic, det.logic], [ct.dApplies, applies],
    [ct.dParams, params], [ct.dExcept, det.except], [ct.dFail, fail],
  ].filter(([, b]) => b && b.length)
}

function liHtml(b) {
  if (typeof b === 'string') return `<li>${b}</li>`
  if (b.chips) return `<li><span class="pk">${b.k}</span> ${b.chips.map(c => b.plain ? `<span class="pt">${esc(c)}</span>` : `<code class="pv">${esc(c)}</code>`).join(' ')}</li>`
  return `<li>${b.li}<ul>${b.sub.map(liHtml).join('')}</ul></li>`
}
export function detailHtml(no, L2) {
  const blocks = detailBlocks(no, L2)
  if (!blocks) return ''
  return blocks.map(([k, list]) =>
    `<div class="d-line"><span class="d-k">${esc(k)}</span><div class="d-v"><ul class="d-ul">${list.map(liHtml).join('')}</ul></div></div>`).join('\n        ')
}

// HTML 불릿 → Markdown (code·b 만 변환, 나머지 태그 제거, 엔티티 복원)
function mdText(h) {
  return String(h)
    .replace(/<code[^>]*>([\s\S]*?)<\/code>/g, (_, x) => '`' + x + '`')
    .replace(/<b>([\s\S]*?)<\/b>/g, '**$1**')
    .replace(/<br\s*\/?>/g, ' ')
    .replace(/<[^>]+>/g, '')
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&amp;/g, '&')
}
function liMd(b, ind) {
  if (typeof b === 'string') return [`${ind}- ${mdText(b)}`]
  if (b.chips) return [`${ind}- ${mdText(b.k)}: ${b.chips.map(c => b.plain ? c : '`' + c + '`').join(', ')}`]
  return [`${ind}- ${mdText(b.li)}`, ...b.sub.flatMap(x => liMd(x, ind + '  '))]
}
export function detailMarkdown(no, L2) {
  const blocks = detailBlocks(no, L2)
  if (!blocks) return []
  return blocks.flatMap(([k, list]) => [`- **${k}**`, ...list.flatMap(b => liMd(b, '  '))])
}

// mdHref — 있으면 머리에 'MD 다운로드' 버튼 (routes 가 언어에 맞는 .md 경로를 넘긴다)
export function renderCriteriaHTML({ rows, snapshot, withScores, lang = 'ko', mdHref = '' }) {
  const L2 = lang === 'en' ? 'en' : 'ko'
  const ct = CRIT_T[L2]
  rows = localizeRows(rows, L2)
  const CH = (snapshot && snapshot.overall && snapshot.overall.checks) || {}
  const rate = cid => { const c = CH[cid]; return c && c.applicable ? +(c.pass / c.applicable * 100).toFixed(1) : null }
  const frac = cid => { const c = CH[cid]; return c ? `${c.pass.toLocaleString()}/${c.applicable.toLocaleString()}` : '' }
  const byCat = {}
  rows.forEach(r => (byCat[r.cat] = byCat[r.cat] || []).push(r))
  const activeCount = c => scoredCount(rows, c)

  const tiles = CAT_ORDER.map(c => {
    const sc = withScores && snapshot ? snapshot.overall.categories[CAT_KEY[c]] : null
    return `<article class="tile">
      <h3>${esc(catName(c, L2))}</h3>
      <p class="tile-note">${esc(catNote(c, L2))}</p>
      <div class="tile-foot">
        ${sc != null ? `<span class="tile-score ${band(sc)}">${sc}</span>` : `<span class="tile-score plain">${activeCount(c)}<i>${esc(ct.unitCount)}</i></span>`}
        <span class="tile-n">${sc != null ? esc(ct.scored(activeCount(c))) : esc(ct.scoredLabel)}</span>
      </div>
      ${sc != null ? `<div class="meter"><i class="${band(sc)}" style="width:${sc}%"></i></div>` : ''}
    </article>`
  }).join('\n')

  const rateCell = cids => {
    if (!cids.length) return '<span class="dash">—</span>'
    return cids.map(cid => {
      const v = rate(cid)
      if (v == null) return `<div class="rw"><span class="dash">—</span><small class="cid">${esc(cid)}</small></div>`
      return `<div class="rw"><span class="num ${band(v)}">${v}<i>%</i></span><span class="frac">${frac(cid)}</span>` +
        `<span class="bar"><i class="${band(v)}" style="width:${v}%"></i></span><small class="cid">${esc(cid)}</small></div>`
    }).join('')
  }

  const sections = CAT_ORDER.map(c => {
    const body = (byCat[c] || []).map(r => {
      const cls = r.no === '예정' ? ' class="planned"' : r.pendNote ? ' class="pending"' : ''
      const tag = r.planNote ? `<span class="tag plan">${esc(ct.tagPlan)}</span>`
        : r.pendNote ? `<span class="tag pend">${esc(ct.tagPend)}</span>` : ''
      const row = `<tr${cls}>
        <td class="c-no">${esc(r.no === '예정' ? ct.planned : r.no)}</td>
        <td class="c-item"><b>${esc(r.name)}</b><span class="def">${esc(r.def)}</span></td>
        <td class="c-pass">${esc(r.pass)}${tag}</td>
        <td class="c-method">${esc(r.method)}</td>
        ${withScores ? `<td class="c-rate">${r.no === '예정' || r.pendNote ? '<span class="dash">—</span>' : rateCell(DOC_TO_CHECK[r.no] || [])}</td>` : ''}
      </tr>`
      // 점수 제외(기준 문서) 버전에만 항목별 상세 — 검수 대상 소스 · 판정 로직 · 예외 (2026-09-29)
      const det = !withScores ? detailHtml(r.no, L2) : ''
      if (!det) return row
      return row + `
      <tr class="detail"><td></td><td colspan="3">
        ${det}
      </td></tr>`
    }).join('\n')
    const orphans = (ORPHAN_CHECKS[c] || []).map(o => `<tr class="orphan">
        <td class="c-no">·</td>
        <td class="c-item"><b>${esc(o.label)}</b><span class="def">${esc(ct.orphanDef(o.note))}</span></td>
        <td class="c-pass">—</td>
        <td class="c-method">—</td>
        ${withScores ? `<td class="c-rate">${rateCell([o.cid])}</td>` : ''}
      </tr>`).join('\n')
    const sc = withScores && snapshot ? snapshot.overall.categories[CAT_KEY[c]] : null
    return `<section class="cat">
      <header class="cat-head">
        <div><h2>${esc(catName(c, L2))}</h2><p>${esc(catNote(c, L2))}</p></div>
        ${sc != null ? `<span class="cat-score ${band(sc)}">${sc}</span>` : ''}
      </header>
      <div class="tw"><table>
        <thead><tr><th>${esc(ct.thNo)}</th><th>${esc(ct.thItem)}</th><th>${esc(ct.thPass)}</th><th>${esc(ct.thMethod)}</th>${withScores ? `<th>${esc(ct.thRate)}</th>` : ''}</tr></thead>
        <tbody>
${body}
${orphans}
        </tbody>
      </table></div>
    </section>`
  }).join('\n')

  const meta = withScores && snapshot ? `<dl class="meta">
      <div><dt>${esc(ct.mDate)}</dt><dd>${esc(snapshot.date)}</dd></div>
      <div><dt>${esc(ct.mCountries)}</dt><dd>${Object.keys(snapshot.countries || {}).length}</dd></div>
      <div><dt>${esc(ct.mPages)}</dt><dd>${snapshot.overall.urlCount.toLocaleString()}</dd></div>
      <div><dt>${esc(ct.mItems)}</dt><dd>${Object.keys(CH).length}</dd></div>
      <div><dt>${esc(ct.mScore)}</dt><dd class="${band(snapshot.overall.avgScore)}">${snapshot.overall.avgScore}</dd></div>
    </dl>
    <div class="legend">
      <span><i class="dot" style="background:var(--good)"></i>${esc(ct.legGood)}</span>
      <span><i class="dot" style="background:var(--warn)"></i>60–89%</span>
      <span><i class="dot" style="background:var(--crit)"></i>${esc(ct.legCrit)}</span>
    </div>` : ''

  const notes = `<div class="notes">
    <h2>${esc(ct.notesH)}</h2>
    <div><h3>${esc(ct.nExcluded)}</h3><ul>${ct.nx.map(x => `<li>${x}</li>`).join('')}</ul></div>
    <div><h3>${esc(ct.nSkipped)}</h3><ul>${ct.ns.map(x => `<li>${x}</li>`).join('')}</ul></div>
    <div><h3>${esc(ct.nChanged)}</h3><ul>${ct.nc.map(x => `<li>${x}</li>`).join('')}</ul></div>
    <div><h3>${esc(ct.nMapping)}</h3><ul>${ct.nm.map(x => `<li>${x}</li>`).join('')}</ul></div>
  </div>`

  const total = CAT_ORDER.reduce((a, c) => a + scoredCount(rows, c), 0)
  const subtitle = withScores
    ? ct.subWith(total, snapshot.date)
    : ct.subPlain(total)
  // 검수 모델·패턴 출처 안내 — 기준 문서(점수 제외) 버전에만 (사용자 지시 2026-09-29)
  const modelNote = withScores ? '' : `<div class="model-note">${ct.modelNote}</div>`

  return `<!DOCTYPE html>
<html lang="ko"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(ct.docTitle(withScores))}</title>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap">
<style>
:root{--ground:#F7F8FA;--surface:#FFFFFF;--raise:#FBFCFD;--ink:#1A1A1A;--ink2:#475569;--ink3:#94A3B8;
--rule:#E2E8F0;--rule2:#F1F5F9;--accent:#CF0652;--good:#15803D;--warn:#B45309;--crit:#BE123C;
--plan-bg:#FFFBEB;--pend-bg:#F8FAFC}
/* Light theme only - dark mode removed 2026-09-17 so print and shared copies match */
*{box-sizing:border-box}
body{margin:0;background:var(--ground);color:var(--ink);font-family:'IBM Plex Sans KR',-apple-system,BlinkMacSystemFont,'Malgun Gothic',sans-serif;font-size:15px;line-height:1.65;-webkit-font-smoothing:antialiased}
.wrap{max-width:1160px;margin:0 auto;padding:52px 26px 88px;display:flex;flex-direction:column;gap:42px}
.head{display:flex;flex-direction:column;gap:13px}
.eyebrow{font-family:'IBM Plex Mono',monospace;font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:var(--accent);font-weight:600}
h1{margin:0;font-size:33px;line-height:1.2;font-weight:700;letter-spacing:-.02em;text-wrap:balance}
.sub{margin:0;color:var(--ink2);max-width:64ch}
.meta{display:flex;flex-wrap:wrap;gap:0;margin-top:6px;border:1px solid var(--rule);border-radius:10px;overflow:hidden;background:var(--surface)}
.meta div{flex:1 1 130px;padding:12px 16px;border-right:1px solid var(--rule)}
.meta div:last-child{border-right:0}
.meta dt{font-size:11px;color:var(--ink3);font-weight:500;margin:0 0 3px}
.meta dd{margin:0;font-family:'IBM Plex Mono',monospace;font-size:18px;font-weight:600;font-variant-numeric:tabular-nums}
.tiles{display:grid;grid-template-columns:repeat(auto-fit,minmax(228px,1fr));gap:12px}
.tile{background:var(--surface);border:1px solid var(--rule);border-radius:12px;padding:16px 18px 14px;display:flex;flex-direction:column;gap:8px}
.tile h3{margin:0;font-size:15px;font-weight:600;letter-spacing:-.01em}
.tile-note{margin:0;font-size:12px;color:var(--ink3);line-height:1.5;min-height:2.6em}
.tile-foot{display:flex;align-items:baseline;gap:9px;margin-top:2px}
.tile-score{font-family:'IBM Plex Mono',monospace;font-size:27px;font-weight:600;font-variant-numeric:tabular-nums;letter-spacing:-.02em}
.tile-score.plain{color:var(--accent)}
.tile-score i{font-style:normal;font-size:13px;margin-left:2px;opacity:.7}
.tile-n{font-size:11px;color:var(--ink3);font-family:'IBM Plex Mono',monospace}
.meter{height:4px;background:var(--rule2);border-radius:99px;overflow:hidden}
.meter i{display:block;height:100%;border-radius:99px}
.good{color:var(--good)}.warn{color:var(--warn)}.crit{color:var(--crit)}
.meter i.good,.bar i.good{background:var(--good)}
.meter i.warn,.bar i.warn{background:var(--warn)}
.meter i.crit,.bar i.crit{background:var(--crit)}
.cat{display:flex;flex-direction:column;gap:14px}
.cat-head{display:flex;align-items:flex-start;justify-content:space-between;gap:20px;padding-bottom:12px;border-bottom:2px solid var(--accent)}
.cat-head h2{margin:0;font-size:21px;font-weight:700;letter-spacing:-.015em}
.cat-head p{margin:3px 0 0;font-size:13px;color:var(--ink2)}
.cat-score{font-family:'IBM Plex Mono',monospace;font-size:30px;font-weight:600;font-variant-numeric:tabular-nums;letter-spacing:-.02em;flex:none}
.tw{overflow-x:auto;border:1px solid var(--rule);border-radius:12px;background:var(--surface)}
table{width:100%;border-collapse:collapse;min-width:820px}
thead th{text-align:left;font-size:11px;font-weight:600;color:var(--ink3);letter-spacing:.06em;padding:11px 16px;background:var(--raise);border-bottom:1px solid var(--rule);white-space:nowrap}
tbody td{padding:13px 16px;border-bottom:1px solid var(--rule2);vertical-align:top}
tbody tr:last-child td{border-bottom:0}
.c-no{font-family:'IBM Plex Mono',monospace;font-size:12px;color:var(--ink3);width:52px;white-space:nowrap;font-variant-numeric:tabular-nums}
.c-item{min-width:250px}
.c-item b{font-weight:600;font-size:14px;display:block}
.def{display:block;margin-top:3px;font-size:12.5px;color:var(--ink2);line-height:1.55}
.c-pass{font-size:12.5px;color:var(--ink2);width:190px}
.c-method{font-size:12px;color:var(--ink3);width:210px;line-height:1.5}
.c-rate{width:190px}
.rw{display:flex;flex-wrap:wrap;align-items:baseline;gap:6px 8px}
.rw+.rw{margin-top:10px;padding-top:10px;border-top:1px dashed var(--rule)}
.num{font-family:'IBM Plex Mono',monospace;font-size:17px;font-weight:600;font-variant-numeric:tabular-nums;letter-spacing:-.01em}
.num i{font-style:normal;font-size:11px;margin-left:1px;opacity:.65}
.frac{font-family:'IBM Plex Mono',monospace;font-size:11px;color:var(--ink3);font-variant-numeric:tabular-nums}
.bar{flex:1 0 100%;height:3px;background:var(--rule2);border-radius:99px;overflow:hidden}
.bar i{display:block;height:100%;border-radius:99px}
.cid{flex:1 0 100%;font-family:'IBM Plex Mono',monospace;font-size:10.5px;color:var(--ink3)}
.dash{color:var(--ink3);font-family:'IBM Plex Mono',monospace}
.tag{display:inline-block;margin-top:5px;font-size:10.5px;font-weight:600;padding:2px 7px;border-radius:5px;white-space:nowrap}
.tag.plan{background:var(--plan-bg);color:var(--warn)}
.tag.pend{background:var(--pend-bg);color:var(--ink3)}
tr.planned{background:var(--plan-bg)}
tr.pending td,tr.orphan td{opacity:.62}
tr.detail td{padding:0 16px 15px;border-bottom:1px solid var(--rule2);background:var(--raise)}
tr.detail td:first-child{background:var(--raise)}
.d-line{display:flex;gap:12px;padding:7px 0;border-top:1px dashed var(--rule2)}
.d-line:first-child{border-top:0;padding-top:10px}
.d-k{flex:none;width:118px;font-size:11px;font-weight:600;color:var(--accent);letter-spacing:.02em;padding-top:2px}
.d-v{flex:1;font-size:12.5px;color:var(--ink2);line-height:1.7;min-width:0;overflow-wrap:anywhere}
.d-v code{font-family:'IBM Plex Mono',monospace;font-size:11px;background:var(--rule2);border-radius:4px;padding:1px 5px;color:var(--ink)}
.d-ul{margin:0;padding-left:17px;display:flex;flex-direction:column;gap:4px}
.d-ul ul{margin:4px 0 2px;padding-left:17px;list-style:circle;display:flex;flex-direction:column;gap:3px}
.d-ul li::marker{color:var(--ink3)}
.d-v code.pv{display:inline-block;margin:1px 1px;font-size:10.5px;padding:0 5px;line-height:1.7}
.pk{font-family:'IBM Plex Mono',monospace;font-size:11px;font-weight:600;color:var(--ink);margin-right:4px}
.pt{display:inline-block;font-size:11px;font-weight:500;background:#FEF2F4;color:var(--accent);border-radius:4px;padding:0 6px;margin:1px 1px;line-height:1.7}
.md-dl{align-self:flex-start;display:inline-flex;align-items:center;gap:6px;font-size:13px;font-weight:600;color:#fff;background:var(--accent);border-radius:8px;padding:8px 14px;text-decoration:none}
.md-dl:hover{opacity:.9}
.d-v b{color:var(--ink);font-weight:600}
.model-note{background:#FEF2F4;border:1px solid #F5CCD8;border-radius:10px;padding:12px 16px;font-size:13px;color:var(--ink2);line-height:1.65}
.model-note b{color:var(--accent);font-weight:600}
.notes{background:var(--surface);border:1px solid var(--rule);border-radius:12px;padding:22px 24px;display:flex;flex-direction:column;gap:16px}
.notes h2{margin:0;font-size:17px;font-weight:700}
.notes h3{margin:0 0 5px;font-size:13px;font-weight:600;color:var(--accent)}
.notes ul{margin:0;padding-left:17px;display:flex;flex-direction:column;gap:5px}
.notes li{font-size:13px;color:var(--ink2);line-height:1.6}
.notes b{color:var(--ink);font-weight:600}
.legend{display:flex;flex-wrap:wrap;gap:14px;font-size:12px;color:var(--ink2);align-items:center}
.legend span{display:inline-flex;align-items:center;gap:6px}
.dot{width:9px;height:9px;border-radius:99px;flex:none;display:inline-block}
footer{color:var(--ink3);font-size:12px;border-top:1px solid var(--rule);padding-top:16px}
@media (max-width:640px){.wrap{padding:34px 15px 60px;gap:32px}h1{font-size:25px}.cat-head{flex-direction:column;gap:8px}.d-line{flex-direction:column;gap:4px}.d-k{width:auto}}
</style></head><body>
<div class="wrap">
  <header class="head">
    <span class="eyebrow">GEO Agent Readability</span>
    <h1>${esc(ct.h1)}</h1>
    <p class="sub">${subtitle}</p>
    ${mdHref ? `<a class="md-dl" href="${esc(mdHref)}" download>${esc(ct.mdDl)}</a>` : ''}
    ${modelNote}
    ${meta}
  </header>
  <div class="tiles">
${tiles}
  </div>
${sections}
${notes}
  <footer>${withScores && snapshot ? esc(ct.footWith(snapshot.date, Object.keys(snapshot.countries || {}).length, snapshot.overall.urlCount.toLocaleString())) : esc(ct.footPlain)}</footer>
</div>
</body></html>`
}

// ─── Markdown (점수 제외 — audit 리포 반영용 + 검수기준 'MD 다운로드') ──────────────────
// 페이지(점수 제외 버전)와 같은 원천을 쓴다 — 항목 상세 불릿(detailMarkdown) · 예외 처리(CRIT_T.nx/ns/nc/nm).
// 2026-11-05 이전에는 예외 처리 문단을 여기 따로 적어 페이지와 어긋나 있었다 (예: #1 TTFB 임계값).
const MD_T = {
  ko: {
    h1: 'GEO Agent Readability 검수 기준',
    intro: (n) => `6개 카테고리 ${n}개 채점 항목. 점수·통과율은 제외한 **기준 정의 문서**입니다. 실측치는 Readability 대시보드에서 확인하세요.`,
    gen: (d) => `생성: \`scripts/render-criteria.mjs\` (source: \`data/readability/geo-agent-checklist.html\` + 상류 \`scoring_config.json\`) — ${d}`,
    cats: '카테고리', thCat: '카테고리', thN: '채점 항목', thWhat: '무엇을 보는가',
    def: '정의', pass: 'PASS', method: '측정방법', status: '상태', planned: '(예정)', content: '분류', contentV: 'Contents 체크 항목',
    pend: (x) => `TBD — ${x}. 자가 콘텐츠 분석·기준 세분화·검수 에이전트 고도화 후 항목 추가 예정`,
  },
  en: {
    h1: 'GEO Agent Readability audit criteria',
    intro: (n) => `${n} scored items across 6 categories. This is the **criteria definition document** without scores or pass rates — see the Readability dashboard for measurements.`,
    gen: (d) => `Generated by \`scripts/render-criteria.mjs\` (source: \`data/readability/geo-agent-checklist.html\` + upstream \`scoring_config.json\`) — ${d}`,
    cats: 'Categories', thCat: 'Category', thN: 'Scored items', thWhat: 'What it checks',
    def: 'Definition', pass: 'PASS', method: 'How it is measured', status: 'Status', planned: '(planned)', content: 'Class', contentV: 'Contents check item',
    pend: (x) => `TBD — ${x}. To be added after own-content analysis, finer-grained criteria and audit-agent upgrades`,
  },
}

export function renderCriteriaMarkdown({ rows, generatedAt, lang = 'ko' }) {
  const L2 = lang === 'en' ? 'en' : 'ko'
  const ct = CRIT_T[L2], mt = MD_T[L2]
  rows = localizeRows(rows, L2)
  const byCat = {}
  rows.forEach(r => (byCat[r.cat] = byCat[r.cat] || []).push(r))
  const total = CAT_ORDER.reduce((a, c) => a + scoredCount(rows, c), 0)
  const L = []
  L.push(`# ${mt.h1}`, '', `> ${mt.intro(total)}`, `> ${mt.gen(generatedAt)}`, '')
  L.push(`## ${mt.cats}`, '', `| ${mt.thCat} | ${mt.thN} | ${mt.thWhat} |`, '| :-- | :-: | :-- |')
  for (const c of CAT_ORDER) L.push(`| ${catName(c, L2)} | ${scoredCount(rows, c)} | ${catNote(c, L2)} |`)
  L.push('', '---', '')
  for (const c of CAT_ORDER) {
    L.push(`## ${catName(c, L2)}`, '', `> ${catNote(c, L2)}`, '')
    for (const r of (byCat[c] || [])) {
      L.push(r.no === '예정' ? `### ${mt.planned} ${r.name}` : `### #${r.no} — ${r.name}`)
      L.push(`- **${mt.def}**: ${r.def}`, `- **${mt.pass}**: ${r.pass}`, `- **${mt.method}**: ${r.method}`)
      const cids = DOC_TO_CHECK[r.no] || []
      if (cids.length) L.push(`- **check id**: ${cids.map(x => '`' + x + '`').join(', ')}`)
      // 상태 메모는 체크리스트 원문(KO)이라 EN 은 페이지 태그 문구로 대신한다
      if (r.planNote) L.push(`- **${mt.status}**: ${L2 === 'en' ? ct.tagPlan : r.planNote}`)
      if (r.pendNote) L.push(`- **${mt.status}**: ${L2 === 'en' ? 'TBD' : mt.pend(r.pendNote)}`)
      if (r.contentCheck) L.push(`- **${mt.content}**: ${mt.contentV}`)
      if (r.no !== '예정') L.push(...detailMarkdown(r.no, L2))
      L.push('')
    }
    L.push('---', '')
  }
  L.push(`## ${ct.notesH}`, '')
  for (const [h, list] of [[ct.nExcluded, ct.nx], [ct.nSkipped, ct.ns], [ct.nChanged, ct.nc], [ct.nMapping, ct.nm]]) {
    L.push(`### ${h}`, ...list.map(x => `- ${mdText(x)}`), '')
  }
  return L.join('\n')
}

// 'MD 다운로드' 응답 — 어드민·게시본 라우트 공용. 요청 시 생성 (파일로 굽지 않음 — stale 방지).
export function criteriaMarkdownResponse(lang) {
  const L2 = lang === 'en' ? 'en' : 'ko'
  const date = new Date().toISOString().slice(0, 10)
  return {
    filename: `GEO-Readability-Criteria-${L2.toUpperCase()}-${date}.md`,
    body: renderCriteriaMarkdown({ rows: loadRows(), generatedAt: date, lang: L2 }),
  }
}

export function loadRows() {
  if (!existsSync(CHECKLIST)) throw new Error(`체크리스트 없음 — ${CHECKLIST}`)
  return parseChecklist(readFileSync(CHECKLIST, 'utf8'))
}

function main() {
  const rows = loadRows()
  // 스냅샷 직접 로드 (routes 의존 회피)
  const files = existsSync(DATA_DIR)
    ? readFileSync(join(DATA_DIR, 'index.json'), 'utf8') : null
  let snapshot = null
  if (files) {
    const idx = JSON.parse(files)
    const last = (idx.snapshots || []).slice(-1)[0]
    if (last) {
      const p = join(DATA_DIR, `${last.date}.json`)
      if (existsSync(p)) snapshot = JSON.parse(readFileSync(p, 'utf8'))
    }
  }
  const DOCS = join(ROOT, 'docs')
  if (!existsSync(DOCS)) mkdirSync(DOCS, { recursive: true })
  const md = renderCriteriaMarkdown({ rows, generatedAt: snapshot ? snapshot.date : 'n/a' })
  writeFileSync(join(DOCS, 'GEO-AUDIT-CRITERIA.md'), md)
  // 공개용 체크리스트 동기화 — audit 리포 static/ 은 my-geo 사이트가 공개 서빙한다.
  // 원본(data/readability/geo-agent-checklist.html)만 고치고 이걸 잊으면 공개본이
  // 구버전으로 남는다 (2026-09-30 실측: 5월본이 그대로 서빙되고 있었다).
  const auditStatic = join(ROOT, '..', 'my-geo-audit', 'static', 'geo-agent-checklist.html')
  try {
    if (existsSync(dirname(auditStatic))) {
      writeFileSync(auditStatic, readFileSync(CHECKLIST, 'utf8'))
      console.log(`[render-criteria] ✓ 공개용 동기화: ${auditStatic}`)
    }
  } catch (e) { console.warn(`[render-criteria] WARN 공개용 동기화 실패: ${e.message}`) }
  console.log(`[render-criteria] ✓ Markdown: docs/GEO-AUDIT-CRITERIA.md (${(md.length / 1024).toFixed(1)} KB, ${md.split('\n').length} 줄)`)
  console.log(`[render-criteria]   행 ${rows.length} · 카테고리 ${CAT_ORDER.length} · 채점 ${CAT_ORDER.reduce((a, c) => a + scoredCount(rows, c), 0)}개`)
  console.log('[render-criteria]   HTML 은 파일로 굽지 않음 — /p/GEO-Readability-Criteria · /admin/readability/criteria.html 이 요청 시 렌더')
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) main()
