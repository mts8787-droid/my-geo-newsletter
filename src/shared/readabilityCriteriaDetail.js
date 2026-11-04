// 검수 기준 상세 — 항목별 검수 대상 소스 · 판정 로직 · 예외 · FAIL 예시 (불릿 목록).
// 검수기준 탭(점수 제외 버전, scripts/render-criteria.mjs)이 렌더한다 (사용자 요청 2026-09-29).
// 2026-11-05: 줄글 → 불릿 (사용자 "너무 줄글이라 보기 힘들어"). 한 불릿 = 사실 하나.
//
// 출처 (상류 my-geo-audit — 코드가 정본, 이 문서는 그 요약):
//   scoring_config.json  항목별 rule type·파라미터·applies_to_page_types·applies_when
//                        → 원문은 src/shared/readabilityCriteriaParams.js (생성 파일) 가 따로 들고 있고
//                          렌더러가 '적용 대상 · N/A' / '판정 파라미터' 블록으로 붙인다 — 여기 다시 적지 않는다.
//   rule_engine.py       룰 타입별 판정 구현 (_eval_*) · 정규식 · 오탐 방어
//   (하류) scripts/aggregate-readability.mjs  집계 예외 — OR/AND 병합·제외 페이지·재판정
//
// 키 = 검수 기준 문서(geo-agent-checklist.html)의 행 번호. 채점 항목(DOC_TO_CHECK 에
// check id 가 있는 행)만 등재 — 미채점(회색)·예정 행은 상세 없음.
// 필드: src · logic · except · fail — 각각 불릿 배열. 불릿은 HTML 문자열(셀렉터·정규식은 <code>)
//   또는 { li, sub: [...] } (하위 불릿 — ①②③ 경로 나열).
//   fail = 실제 FAIL 판정 근거 문구(checks-<date>.json 의 hints)를 일반화한 대표 예시.
//   개선 방법은 readabilityGuide.js GUIDE[checkId].action 을 렌더러가 붙인다 (single source).
// 신규 항목 추가 시 KO/EN 모두 등재 — EN 페이지 한글 잔존 테스트가 누락을 잡는다.

const D = {
  '1': {
    ko: {
      src: [
        "PageSpeed Insights(Lighthouse Lab) 의 <code>server-response-time</code> — <code>psi_collect.py</code> 가 사전 수집한 캐시에서 읽음 (감사 중 API 호출 없음)",
      ],
      logic: [
        "<code>server_response_time_ms &lt; 600</code>",
      ],
      except: [
        "감사 크롤러 자체 측정값은 사용하지 않음 (동시 크롤 큐잉으로 6~200배 과대 측정)",
        "PSI 표본에 없는 URL 은 같은 국가×페이지타입 셀의 중앙값으로 일괄 판정 (폴백: 셀 → 국가 → 전체 중앙값)",
        "참조값이 전혀 없으면 N/A(분모 제외)",
      ],
      fail: [
        "TTFB 860ms (PSI) — 600ms 이상",
      ],
    },
    en: {
      src: [
        "<code>server-response-time</code> from PageSpeed Insights (Lighthouse Lab) — read from the cache pre-collected by <code>psi_collect.py</code> (no API calls during the audit)",
      ],
      logic: [
        "<code>server_response_time_ms &lt; 600</code>",
      ],
      except: [
        "The crawler’s own timing is not used (concurrent-crawl queuing inflated it 6–200×)",
        "URLs outside the PSI sample are judged by the median of their country × page-type cell (fallback: cell → country → overall median)",
        "With no reference value at all, the item is N/A (out of the denominator)",
      ],
      fail: [
        "TTFB 860ms (PSI) — 600ms or more",
      ],
    },
  },
  '2': {
    ko: {
      src: [
        "응답 헤더 <code>Content-Encoding</code>",
      ],
      logic: [
        "헤더 값에 <code>gzip</code> · <code>br</code> · <code>deflate</code> 중 하나 포함",
      ],
      except: [
        "헤더 자체가 없으면 FAIL",
      ],
      fail: [
        "<code>Content-Encoding</code> 헤더 없음 (비압축 전송)",
      ],
    },
    en: {
      src: [
        "Response header <code>Content-Encoding</code>",
      ],
      logic: [
        "Header value contains one of <code>gzip</code> · <code>br</code> · <code>deflate</code>",
      ],
      except: [
        "FAIL when the header is absent",
      ],
      fail: [
        "No <code>Content-Encoding</code> header (sent uncompressed)",
      ],
    },
  },
  '3': {
    ko: {
      src: [
        "응답 HTTP 프로토콜 버전",
      ],
      logic: [
        "<code>HTTP/(\\d+)(\\.\\d)?</code> 로 버전 숫자를 파싱해 <b>2 이상</b>이면 통과 (HTTP/2, HTTP/3)",
      ],
      except: [
        "프로토콜 정보를 얻지 못하면 FAIL",
      ],
      fail: [
        "HTTP/1.1 로 응답",
      ],
    },
    en: {
      src: [
        "HTTP protocol version of the response",
      ],
      logic: [
        "Version number parsed with <code>HTTP/(\\d+)(\\.\\d)?</code> — pass when <b>≥ 2</b> (HTTP/2, HTTP/3)",
      ],
      except: [
        "FAIL when protocol information is unavailable",
      ],
      fail: [
        "Served over HTTP/1.1",
      ],
    },
  },
  '4': {
    ko: {
      src: [
        "응답 헤더 <code>Cache-Control</code>",
      ],
      logic: [
        "정규식 <code>max-age\\s*=\\s*(\\d+)</code> — <b>max-age 디렉티브가 있으면(0 포함) 통과</b>",
      ],
      except: [
        "<code>no-cache</code>/<code>no-store</code> 가 섞여 있어도 max-age 가 있으면 통과 (구 룰은 즉시 FAIL — 2026-08-30 완화)",
        "구 룰로 수집된 스냅샷은 저장된 헤더 문자열로 재판정",
        "실제 캐시 가능 여부(B안)·no-store 만 실패(C안)는 검토 후 기각 — 세션·개인화 페이지의 정당한 no-store 까지 감점되기 때문",
      ],
      fail: [
        "<code>Cache-Control</code> 에 <code>max-age</code> 디렉티브 없음",
      ],
    },
    en: {
      src: [
        "Response header <code>Cache-Control</code>",
      ],
      logic: [
        "Regex <code>max-age\\s*=\\s*(\\d+)</code> — <b>pass when a max-age directive exists (0 included)</b>",
      ],
      except: [
        "Passes even when <code>no-cache</code>/<code>no-store</code> co-exist with max-age (the old rule failed immediately — relaxed 2026-08-30)",
        "Snapshots collected under the old rule are re-judged from the stored header string",
        "Stricter variants (actually cacheable / fail only on no-store) were reviewed and rejected — they penalise legitimate no-store on session/personalised pages",
      ],
      fail: [
        "<code>Cache-Control</code> has no <code>max-age</code> directive",
      ],
    },
  },
  '6': {
    ko: {
      src: [
        "페이지 요청의 리다이렉트 체인 (<code>redirect_count</code>)",
      ],
      logic: [
        "리다이렉트 횟수 <b>≤ 1</b>",
      ],
      except: [
        "없음",
      ],
      fail: [
        "리다이렉트 2회 이상 (예: http → https → 최종 주소)",
      ],
    },
    en: {
      src: [
        "Redirect chain of the page request (<code>redirect_count</code>)",
      ],
      logic: [
        "Redirect count <b>≤ 1</b>",
      ],
      except: [
        "None",
      ],
      fail: [
        "Two or more redirects (e.g. http → https → final URL)",
      ],
    },
  },
  '7': {
    ko: {
      src: [
        "DOM — <code>img</code>·<code>script</code>·<code>link</code>·<code>iframe</code>·<code>audio</code>·<code>video</code>·<code>source</code> 의 <code>src</code>/<code>href</code>",
      ],
      logic: [
        "HTTPS 페이지에서 <code>http://</code> 로 시작하는 리소스 <b>0개</b>",
      ],
      except: [
        "페이지 자체가 HTTPS 가 아니면 검증 대상 외 (자동 통과)",
      ],
      fail: [
        "https 페이지에 <code>http://</code> 로 불러오는 <code>&lt;img&gt;</code> 1개 이상",
      ],
    },
    en: {
      src: [
        "DOM — <code>src</code>/<code>href</code> of <code>img</code>·<code>script</code>·<code>link</code>·<code>iframe</code>·<code>audio</code>·<code>video</code>·<code>source</code>",
      ],
      logic: [
        "<b>Zero</b> resources starting with <code>http://</code> on an HTTPS page",
      ],
      except: [
        "Non-HTTPS pages are out of scope (auto pass)",
      ],
      fail: [
        "One or more <code>&lt;img&gt;</code> loaded over <code>http://</code> on an https page",
      ],
    },
  },
  '9': {
    ko: {
      src: [
        "DOM — 모든 <code>&lt;img&gt;</code>",
      ],
      logic: [
        "모든 img 에 <code>alt</code> <b>속성이 존재</b>하면 통과 (값이 빈 문자열이어도 속성만 있으면 인정)",
        "대상 img 가 0개면 통과",
      ],
      except: [
        "트래킹 픽셀 제외 — src 에 <code>adnxs.com</code>, <code>ads.linkedin.com</code>, <code>doubleclick</code>, <code>googletagmanager</code>, <code>google-analytics</code>, <code>facebook.com/tr</code>, <code>/pixel</code>, <code>/collect</code>, <code>scorecardresearch</code>, <code>demdex</code>, <code>everesttech</code>, <code>bat.bing</code> 포함 시 판정 대상에서 제외",
      ],
      fail: [
        "<code>alt</code> 속성이 없는 이미지가 1개라도 있음",
      ],
    },
    en: {
      src: [
        "DOM — every <code>&lt;img&gt;</code>",
      ],
      logic: [
        "Pass when every img <b>has an <code>alt</code> attribute</b> (an empty string still counts)",
        "Pass when there are no eligible imgs",
      ],
      except: [
        "Tracking pixels are excluded — imgs whose src contains <code>adnxs.com</code>, <code>ads.linkedin.com</code>, <code>doubleclick</code>, <code>googletagmanager</code>, <code>google-analytics</code>, <code>facebook.com/tr</code>, <code>/pixel</code>, <code>/collect</code>, <code>scorecardresearch</code>, <code>demdex</code>, <code>everesttech</code>, <code>bat.bing</code>",
      ],
      fail: [
        "Any image without an <code>alt</code> attribute",
      ],
    },
  },
  '10': {
    ko: {
      src: [
        "DOM — 랜드마크 태그 <code>main</code>·<code>nav</code>·<code>header</code>·<code>footer</code>·<code>article</code>·<code>section</code>·<code>aside</code> + 헤딩 <code>h1~h6</code> + <code>role=\"main\"</code>",
      ],
      logic: [
        "랜드마크 + 헤딩 <b>합계 ≥ 8</b>",
      ],
      except: [
        "<code>&lt;main&gt;</code> 필수 아님 (<code>require_main: no</code>) — 유무는 참고 값으로만 기록",
        "<code>&lt;div role=\"main\"&gt;</code> 도 랜드마크로 인정",
      ],
      fail: [
        "헤딩 + 랜드마크 합계 8 미만 (예: 헤딩 3 + 랜드마크 4 = 7)",
      ],
    },
    en: {
      src: [
        "DOM — landmark tags <code>main</code>·<code>nav</code>·<code>header</code>·<code>footer</code>·<code>article</code>·<code>section</code>·<code>aside</code> + headings <code>h1–h6</code> + <code>role=\"main\"</code>",
      ],
      logic: [
        "Landmarks + headings <b>total ≥ 8</b>",
      ],
      except: [
        "<code>&lt;main&gt;</code> is not required (<code>require_main: no</code>) — its presence is recorded for reference only",
        "<code>&lt;div role=\"main\"&gt;</code> also counts as a landmark",
      ],
      fail: [
        "Headings + landmarks below 8 (e.g. 3 headings + 4 landmarks = 7)",
      ],
    },
  },
  '11': {
    ko: {
      src: [
        "DOM — <b>본문 영역</b>의 헤딩만 (GNB·헤더·푸터 등 보일러플레이트 제거 후)",
      ],
      logic: [
        "첫 헤딩 레벨보다 <b>얕은(상위) 레벨이 뒤에 등장하는 역순이 0건</b>이면 통과",
        "레벨 건너뛰기(h1→h3)는 허용",
      ],
      except: [
        "제외 헤딩 — <code>nav</code>·<code>header</code>·<code>footer</code> 태그 내부, class/id 에 <code>gnb</code>, <code>lnb</code>, <code>global-nav</code>, <code>site-header</code>, <code>site-footer</code>, <code>cookie</code>, <code>skip-to</code>, <code>breadcrumb</code>, <code>info-sticky</code>, <code>sticky</code>, <code>c-tabs</code>, <code>tab-list</code>, <code>anchor-inner</code> 포함 블록 (PDP 스티키 바의 &lt;h2&gt; 제품명·탭 버튼 &lt;h2&gt; 오탐 방지)",
        "본문 헤딩이 0개면 FAIL",
      ],
      fail: [
        "헤딩 역순 — 첫 헤딩(h2)보다 상위 레벨(h1)이 뒤에 등장",
        "본문 영역에 헤딩 태그 없음",
      ],
    },
    en: {
      src: [
        "DOM — headings in the <b>content area</b> only (after stripping GNB/header/footer boilerplate)",
      ],
      logic: [
        "Pass when there are <b>zero inversions</b> — no heading shallower than the first heading appearing later",
        "Level skips (h1→h3) are allowed",
      ],
      except: [
        "Excluded headings — inside <code>nav</code>·<code>header</code>·<code>footer</code>, or blocks whose class/id contains <code>gnb</code>, <code>lnb</code>, <code>global-nav</code>, <code>site-header</code>, <code>site-footer</code>, <code>cookie</code>, <code>skip-to</code>, <code>breadcrumb</code>, <code>info-sticky</code>, <code>sticky</code>, <code>c-tabs</code>, <code>tab-list</code>, <code>anchor-inner</code> (prevents false positives from the PDP sticky bar’s &lt;h2&gt; product name and tab-button &lt;h2&gt;s)",
        "FAIL when the content area has no headings",
      ],
      fail: [
        "Reversed headings — a higher level (h1) appears after the first heading (h2)",
        "No heading tags in the content area",
      ],
    },
  },
  '12': {
    ko: {
      src: [
        "DOM — 인터랙티브 요소 <code>button</code>·<code>input</code>·<code>a</code>",
      ],
      logic: [
        "접근성 텍스트(<code>aria-label</code>, <code>aria-labelledby</code>, <code>title</code>, input 의 <code>value</code>, 내부 <code>img[alt]</code>, 요소 텍스트 중 하나) 없는 요소 비율 <b>&lt; 10%</b>",
      ],
      except: [
        "<code>input[type=hidden]</code> 과 <code>href</code> 없는 <code>a</code> 는 인터랙티브 요소로 세지 않음",
        "인터랙티브 요소가 0개면 통과",
      ],
      fail: [
        "접근성 텍스트 없는 버튼·링크 비율 10% 이상 (아이콘만 있는 버튼 등)",
      ],
    },
    en: {
      src: [
        "DOM — interactive elements <code>button</code>·<code>input</code>·<code>a</code>",
      ],
      logic: [
        "Ratio of elements lacking accessible text (any of <code>aria-label</code>, <code>aria-labelledby</code>, <code>title</code>, input <code>value</code>, inner <code>img[alt]</code>, element text) <b>&lt; 10%</b>",
      ],
      except: [
        "<code>input[type=hidden]</code> and <code>a</code> without <code>href</code> are not counted as interactive",
        "Pass when there are no interactive elements",
      ],
      fail: [
        "10% or more of buttons/links lack accessible text (e.g. icon-only buttons)",
      ],
    },
  },
  '13': {
    ko: {
      src: [
        "DOM — <code>&lt;title&gt;</code>",
      ],
      logic: [
        "텍스트 길이 <b>≥ 1자</b>",
      ],
      except: [
        "없음",
      ],
      fail: [
        "<code>&lt;title&gt;</code> 이 비어 있음",
      ],
    },
    en: {
      src: [
        "DOM — <code>&lt;title&gt;</code>",
      ],
      logic: [
        "Text length <b>≥ 1 character</b>",
      ],
      except: [
        "None",
      ],
      fail: [
        "Empty <code>&lt;title&gt;</code>",
      ],
    },
  },
  '14': {
    ko: {
      src: [
        "DOM — <code>meta[name='description' i]</code> 의 <code>content</code>",
      ],
      logic: [
        "content 값 <b>≥ 1자</b>",
      ],
      except: [
        "없음",
      ],
      fail: [
        "<code>meta[name='description']</code> 태그 없음",
        "<code>content</code> 속성이 비어 있음",
      ],
    },
    en: {
      src: [
        "DOM — <code>content</code> of <code>meta[name='description' i]</code>",
      ],
      logic: [
        "Content value <b>≥ 1 character</b>",
      ],
      except: [
        "None",
      ],
      fail: [
        "No <code>meta[name='description']</code> tag",
        "Empty <code>content</code> attribute",
      ],
    },
  },
  '15': {
    ko: {
      src: [
        "DOM — <code>link[rel='canonical']</code> 의 <code>href</code> vs 최종 URL(리다이렉트 반영)",
      ],
      logic: [
        "정규화(스킴·호스트 소문자화, 중복·트레일링 슬래시 정리, 쿼리스트링·프래그먼트 무시) 후 <b>호스트 일치</b>면 통과",
        "상대경로 href 는 현재 URL 기준으로 절대화",
      ],
      except: [
        "2026-09-17 경로 일치 → 호스트 일치로 완화 — 같은 제품군 여러 페이지가 대표 1개를 정본 선언하는 의도된 정규화(실측 434건)를 감점하지 않기 위함",
        "canonical 태그가 없거나 외부 도메인을 가리키면 FAIL",
      ],
      fail: [
        "canonical 태그 없음",
        "canonical 이 다른 도메인(예: <code>solutions.us.lg.com</code>)을 가리킴",
      ],
    },
    en: {
      src: [
        "DOM — <code>href</code> of <code>link[rel='canonical']</code> vs the final URL (after redirects)",
      ],
      logic: [
        "Pass on <b>host match</b> after normalisation (lowercased scheme/host, collapsed and trailing slashes removed, query string and fragment ignored)",
        "Relative hrefs are resolved against the current URL",
      ],
      except: [
        "Relaxed from path match to host match on 2026-09-17 — so that intentional canonicalisation (several pages of one product family declaring a single representative, 434 measured cases) is not penalised",
        "FAIL when the canonical tag is missing or points to another domain",
      ],
      fail: [
        "No canonical tag",
        "Canonical points to another domain (e.g. <code>solutions.us.lg.com</code>)",
      ],
    },
  },
  '16': {
    ko: {
      src: [
        "DOM — <code>h1</code>",
      ],
      logic: [
        "개수 <b>정확히 1개</b> (<code>== 1</code>)",
      ],
      except: [
        "없음",
      ],
      fail: [
        "<code>h1</code> 0개",
        "<code>h1</code> 2개 이상",
      ],
    },
    en: {
      src: [
        "DOM — <code>h1</code>",
      ],
      logic: [
        "Count <b>exactly 1</b> (<code>== 1</code>)",
      ],
      except: [
        "None",
      ],
      fail: [
        "No <code>h1</code>",
        "Two or more <code>h1</code>",
      ],
    },
  },
  '17': {
    ko: {
      src: [
        "DOM <code>meta[name='robots' i]</code> 의 <code>content</code> + 응답 헤더 <code>X-Robots-Tag</code>",
      ],
      logic: [
        "<b>양쪽 모두</b>에 <code>noindex</code> 토큰이 없어야 통과",
        "선언 자체가 없으면 기본 허용으로 통과",
      ],
      except: [
        "과거에는 meta/헤더를 각각 채점해 meta 만 쓰는 정상 구성이 감점됐음 — 한 항목(<code>seo_indexable</code>)으로 통합",
        "구 스냅샷의 <code>seo_robots</code>(+<code>_hdr</code>) 행은 집계에서 같은 행으로 병합",
      ],
      fail: [
        "meta robots 또는 <code>X-Robots-Tag</code> 에 <code>noindex</code> 선언",
      ],
    },
    en: {
      src: [
        "<code>content</code> of DOM <code>meta[name='robots' i]</code> + response header <code>X-Robots-Tag</code>",
      ],
      logic: [
        "Pass when the <code>noindex</code> token is absent from <b>both</b>",
        "No declaration at all counts as allowed by default",
      ],
      except: [
        "Previously meta and header were scored separately, penalising the normal meta-only setup — merged into a single item (<code>seo_indexable</code>)",
        "Old-snapshot <code>seo_robots</code>(+<code>_hdr</code>) rows are folded into the same row during aggregation",
      ],
      fail: [
        "<code>noindex</code> declared in meta robots or <code>X-Robots-Tag</code>",
      ],
    },
  },
  '18': {
    ko: {
      src: [
        "DOM — <code>meta[property^='og:']</code>",
      ],
      logic: [
        "<code>og:title</code> 과 <code>og:image</code> 가 <b>모두</b> 비어있지 않은 content 로 존재",
      ],
      except: [
        "없음",
      ],
      fail: [
        "<code>og:title</code>·<code>og:image</code> 누락",
      ],
    },
    en: {
      src: [
        "DOM — <code>meta[property^='og:']</code>",
      ],
      logic: [
        "<b>Both</b> <code>og:title</code> and <code>og:image</code> present with non-empty content",
      ],
      except: [
        "None",
      ],
      fail: [
        "Missing <code>og:title</code> / <code>og:image</code>",
      ],
    },
  },
  '19': {
    ko: {
      src: [
        "외부 요청 — URL 의 국가 디렉토리 자동 감지(<code>/us/</code> 등) 후 <code>/{cc}/sitemap.xml</code> → <code>/{cc}/sitemap_index.xml</code> → 루트 <code>/sitemap.xml</code> → <code>/sitemap_index.xml</code> 순 시도",
      ],
      logic: [
        "HTTP 200 + <code>Last-Modified</code> 헤더 또는 XML <code>&lt;lastmod&gt;</code> 최신값이 <b>30일 이내</b>",
      ],
      except: [
        "<code>js</code>·<code>css</code>·<code>img</code>·<code>api</code>·<code>v1</code>·<code>v2</code>·<code>ws</code> 는 국가 코드로 보지 않음",
        "캐시 키에 국가를 포함해 감사 순서에 따라 앞 국가 결과가 뒤 국가에 전염되는 오염 차단 (2026-09-16 수정)",
        "봇 보호(Akamai) 차단 회피를 위해 전용 UA 사용",
      ],
      fail: [
        "사이트맵 마지막 갱신이 30일보다 오래됨",
      ],
    },
    en: {
      src: [
        "External request — country directory auto-detected from the URL (<code>/us/</code> etc.), then tried in order: <code>/{cc}/sitemap.xml</code> → <code>/{cc}/sitemap_index.xml</code> → root <code>/sitemap.xml</code> → <code>/sitemap_index.xml</code>",
      ],
      logic: [
        "HTTP 200 + the newest of the <code>Last-Modified</code> header or XML <code>&lt;lastmod&gt;</code> within <b>30 days</b>",
      ],
      except: [
        "<code>js</code>·<code>css</code>·<code>img</code>·<code>api</code>·<code>v1</code>·<code>v2</code>·<code>ws</code> are not treated as country codes",
        "The cache key includes the country so one country’s result cannot leak into the next depending on audit order (fixed 2026-09-16)",
        "A dedicated UA avoids bot protection (Akamai)",
      ],
      fail: [
        "Sitemap last updated more than 30 days ago",
      ],
    },
  },
  '21': {
    ko: {
      src: [
        "JSON-LD (<code>script[type=application/ld+json]</code> 전체 트리 탐색)",
      ],
      logic: [
        "<code>@type=BreadcrumbList</code> 노드에 <code>itemListElement</code> 필드가 비어있지 않게 존재",
      ],
      except: [
        "없음 (전 페이지타입 적용)",
        "필드 검사는 dot-path — 배열이면 첫 원소로 검사",
      ],
      fail: [
        "<code>@type=BreadcrumbList</code> 노드 없음",
      ],
    },
    en: {
      src: [
        "JSON-LD (full tree walk of <code>script[type=application/ld+json]</code>)",
      ],
      logic: [
        "A <code>@type=BreadcrumbList</code> node with a non-empty <code>itemListElement</code> field",
      ],
      except: [
        "None (applies to every page type)",
        "Field checks use dot-paths — arrays are checked via their first element",
      ],
      fail: [
        "No <code>@type=BreadcrumbList</code> node",
      ],
    },
  },
  '23': {
    ko: {
      src: [
        "JSON-LD + 적용 게이트: DOM",
      ],
      logic: [
        "<code>@type=FAQPage</code> 에 <code>mainEntity</code> 존재",
      ],
      except: [
        "적용 조건 — 페이지타입 <code>pdp</code>·<code>plp</code>·<code>buying_guide</code>·<code>microsite</code> <b>이고</b> 페이지에 FAQ 섹션이 있어야 함: <code>div</code>·<code>section</code>·<code>aside</code>·<code>article</code>·<code>details</code> 의 class/id 에 <code>faq</code>, <code>자주 묻는</code>, <code>자주묻는</code>, <code>frequently asked</code>, <code>q&amp;a</code>, <code>qna</code>, <code>questions</code>, <code>질문</code>, <code>answer</code>, <code>accordion</code>",
        "FAQ 섹션이 없으면 N/A (분모 제외)",
      ],
      fail: [
        "FAQ 섹션은 있는데 <code>@type=FAQPage</code> 노드 없음",
      ],
    },
    en: {
      src: [
        "JSON-LD + applicability gate: DOM",
      ],
      logic: [
        "<code>@type=FAQPage</code> with <code>mainEntity</code>",
      ],
      except: [
        "Applies only when page type ∈ <code>pdp</code>·<code>plp</code>·<code>buying_guide</code>·<code>microsite</code> <b>and</b> the page has an FAQ section: class/id of <code>div</code>·<code>section</code>·<code>aside</code>·<code>article</code>·<code>details</code> containing <code>faq</code>, <code>frequently asked</code>, <code>q&amp;a</code>, <code>qna</code>, <code>questions</code>, <code>answer</code>, <code>accordion</code> or the Korean equivalents",
        "N/A (out of the denominator) when no FAQ section exists",
      ],
      fail: [
        "FAQ section present but no <code>@type=FAQPage</code> node",
      ],
    },
  },
  '24': {
    ko: {
      src: [
        "JSON-LD",
      ],
      logic: [
        "<code>@type=CollectionPage</code> 에 <code>mainEntity</code> 존재",
      ],
      except: [
        "적용 페이지타입 — <code>plp</code> 만",
        "그 외는 N/A",
      ],
      fail: [
        "PLP 에 <code>@type=CollectionPage</code> 노드 없음",
      ],
    },
    en: {
      src: [
        "JSON-LD",
      ],
      logic: [
        "<code>@type=CollectionPage</code> with <code>mainEntity</code>",
      ],
      except: [
        "Applies to <code>plp</code> only; N/A elsewhere",
      ],
      fail: [
        "No <code>@type=CollectionPage</code> node on the PLP",
      ],
    },
  },
  '25': {
    ko: {
      src: [
        "JSON-LD (두 체크 병합)",
      ],
      logic: [
        { li: "<b>AND 병합</b> —", sub: [
          "① <code>@type=Product</code> 에 <code>name</code>, <code>description</code>, <code>sku</code>, <code>brand</code>, <code>offers.price</code>, <code>offers.availability</code>",
          "② <code>@type=Offer</code> 에 <code>price</code>, <code>priceCurrency</code>, <code>availability</code> — <b>둘 다 통과해야 통과</b> (2026-08-31 병합)",
        ] },
      ],
      except: [
        "적용 페이지타입 — <code>pdp</code>",
        "대체 타입 <code>ProductGroup</code> 인정 — 색상/용량 변형 제품은 실제 정보가 <code>hasVariant</code> 배열에 있으므로 부모+변형을 병합해 후보로 검사 (US 액세서리 12건 오판 방지)",
        "Offer 체크는 <code>promotion</code> 에도 적용되지만 해당 타입은 집계에서 제외됨",
      ],
      fail: [
        "Product(name·description·sku·brand·offers) 또는 Offer(price·priceCurrency·availability) 필드 일부 누락",
      ],
    },
    en: {
      src: [
        "JSON-LD (two checks merged)",
      ],
      logic: [
        { li: "<b>AND merge</b> —", sub: [
          "① <code>@type=Product</code> with <code>name</code>, <code>description</code>, <code>sku</code>, <code>brand</code>, <code>offers.price</code>, <code>offers.availability</code>",
          "② <code>@type=Offer</code> with <code>price</code>, <code>priceCurrency</code>, <code>availability</code> — <b>both must pass</b> (merged 2026-08-31)",
        ] },
      ],
      except: [
        "Applies to <code>pdp</code>",
        "The alternative type <code>ProductGroup</code> is accepted — for colour/size variants the real data lives in the <code>hasVariant</code> array, so parent + variant are merged into candidates (prevents 12 US accessory misjudgements)",
        "The Offer check also applies to <code>promotion</code>, but that type is excluded from aggregation",
      ],
      fail: [
        "Some Product (name·description·sku·brand·offers) or Offer (price·priceCurrency·availability) fields missing",
      ],
    },
  },
  '26': {
    ko: {
      src: [
        "JSON-LD + 적용 게이트: DOM 본문 콘텐츠 이미지",
      ],
      logic: [
        "<code>@type=ImageObject</code> 에 <code>url|contentUrl</code>, <code>name|caption</code>, <code>description</code> (| 는 대체 필드)",
        "<b>2026-10-26 부터</b> <code>Review</code>·<code>Comment</code> 노드 하위의 ImageObject 는 후보에서 제외 — 리뷰 위젯(Bazaarvoice)이 넣는 고객 사진이 페이지 콘텐츠 이미지로 세어지던 오탐(10월 통과 PDP 전부가 리뷰 사진)",
        "저장된 JSON-LD 원본으로 재판정해 10월 run 에 소급 적용",
      ],
      except: [
        "게이트 셀렉터 — <code>figure img</code>, <code>article img</code>, <code>picture img</code>, <code>[class*='content'] img</code>, <code>[class*='editorial'] img</code>, <code>[class*='gallery'] img</code>, <code>[class*='Product-ImageGrid'] img</code>, <code>img[src*='PDPGalleryThumbnail']</code>, <code>.cmp-image img</code>",
        "본문 이미지가 없으면 N/A",
        "리뷰 제외 후 10월 통과율은 전 국가 0% — 제품 이미지를 ImageObject 로 마크업하는 것이 개선 포인트",
      ],
      fail: [
        "본문 이미지는 있는데 <code>@type=ImageObject</code> 노드 없음",
        "필수 필드 누락: <code>name|caption</code>, <code>description</code>",
      ],
    },
    en: {
      src: [
        "JSON-LD + applicability gate: DOM content images",
      ],
      logic: [
        "<code>@type=ImageObject</code> with <code>url|contentUrl</code>, <code>name|caption</code>, <code>description</code> (| = alternative fields)",
        "<b>Since 2026-10-26</b> ImageObject nodes under <code>Review</code>/<code>Comment</code> are excluded from the candidates — the review widget (Bazaarvoice) injects customer photos that were being counted as page content images (every passing PDP in October was a review photo)",
        "Re-judged from the stored raw JSON-LD and applied retroactively to the October runs",
      ],
      except: [
        "Gate selectors — <code>figure img</code>, <code>article img</code>, <code>picture img</code>, <code>[class*='content'] img</code>, <code>[class*='editorial'] img</code>, <code>[class*='gallery'] img</code>, <code>[class*='Product-ImageGrid'] img</code>, <code>img[src*='PDPGalleryThumbnail']</code>, <code>.cmp-image img</code>",
        "N/A when the page has no content images",
        "After the review exclusion the October pass rate is 0% in every country — marking up product images as ImageObject is the improvement point",
      ],
      fail: [
        "Content images present but no <code>@type=ImageObject</code> node",
        "Required fields missing: <code>name|caption</code>, <code>description</code>",
      ],
    },
  },
  '27': {
    ko: {
      src: [
        "JSON-LD + 적용 게이트: DOM <code>video</code>, <code>iframe[src*='youtube']</code>, <code>iframe[src*='youtu.be']</code>, <code>iframe[src*='vimeo']</code>",
      ],
      logic: [
        "<code>@type=VideoObject</code> 에 <code>url|contentUrl|embedUrl</code>, <code>name</code>, <code>description</code>, <code>thumbnailUrl</code> (| 는 대체 필드)",
        "<b>2026-10-26 부터</b> <code>Review</code>·<code>Comment</code> 노드 하위의 VideoObject 는 후보에서 제외 — 리뷰 영상만으로 통과하던 TV PDP 94건(국가 간 공유되는 같은 리뷰 영상) 오탐",
        "저장된 JSON-LD 원본으로 재판정",
      ],
      except: [
        "영상이 없는 페이지는 N/A",
        "LG 제품 영상(lg.com·Brightcove·YouTube)의 VideoObject 는 그대로 인정 — 리뷰 영상만 있는 TV PDP 에 제품 영상 VideoObject 추가가 개선 포인트",
      ],
      fail: [
        "영상은 있는데 <code>@type=VideoObject</code> 노드 없음",
      ],
    },
    en: {
      src: [
        "JSON-LD + applicability gate: DOM <code>video</code>, <code>iframe[src*='youtube']</code>, <code>iframe[src*='youtu.be']</code>, <code>iframe[src*='vimeo']</code>",
      ],
      logic: [
        "<code>@type=VideoObject</code> with <code>url|contentUrl|embedUrl</code>, <code>name</code>, <code>description</code>, <code>thumbnailUrl</code> (| = alternative fields)",
        "<b>Since 2026-10-26</b> VideoObject nodes under <code>Review</code>/<code>Comment</code> are excluded from the candidates — 94 TV PDPs were passing on review videos alone (the same review video shared across countries)",
        "Re-judged from the stored raw JSON-LD",
      ],
      except: [
        "N/A on pages without video",
        "VideoObject for LG product videos (lg.com, Brightcove, YouTube) still counts — adding a product-video VideoObject to TV PDPs that only carry review videos is the improvement point",
      ],
      fail: [
        "Video present but no <code>@type=VideoObject</code> node",
      ],
    },
  },
  '28': {
    ko: {
      src: [
        "JSON-LD + 적용 게이트: DOM 절차 블록",
      ],
      logic: [
        "<code>@type=HowTo</code> 에 <code>step</code> 존재",
      ],
      except: [
        "적용 페이지타입 — <code>support_troubleshoot</code> 만",
        "게이트 — <code>ol &gt; li</code>, <code>[class*='step']</code>, <code>[class*='con-view']</code>, <code>[class*='procedure']</code> 개수 <b>≥ 3</b>",
        "절차 블록이 없으면 N/A",
      ],
      fail: [
        "단계 목록은 있는데 <code>@type=HowTo</code> 노드 없음",
        "필수 필드 누락: <code>step</code>",
      ],
    },
    en: {
      src: [
        "JSON-LD + applicability gate: DOM procedure blocks",
      ],
      logic: [
        "<code>@type=HowTo</code> with <code>step</code>",
      ],
      except: [
        "Applies to <code>support_troubleshoot</code> only",
        "Gate — count of <code>ol &gt; li</code>, <code>[class*='step']</code>, <code>[class*='con-view']</code>, <code>[class*='procedure']</code> <b>≥ 3</b>",
        "N/A without procedure blocks",
      ],
      fail: [
        "Step list present but no <code>@type=HowTo</code> node",
        "Required field missing: <code>step</code>",
      ],
    },
  },
  '29': {
    ko: {
      src: [
        "JSON-LD + 적용 게이트: DOM <code>article</code>, <code>[class*='article']</code>, <code>[class*='post-body']</code>",
      ],
      logic: [
        "<code>@type=Article</code> 에 <code>headline</code>, <code>author</code>, <code>publisher</code>, <code>articleBody</code>",
      ],
      except: [
        "적용 페이지타입 — <code>experience</code>·<code>buying_guide</code>·<code>microsite</code>",
        "기사 본문 구조가 없으면 N/A",
      ],
      fail: [
        "기사 본문 구조는 있는데 <code>@type=Article</code> 노드 없음",
        "필수 필드 누락: <code>articleBody</code>",
      ],
    },
    en: {
      src: [
        "JSON-LD + applicability gate: DOM <code>article</code>, <code>[class*='article']</code>, <code>[class*='post-body']</code>",
      ],
      logic: [
        "<code>@type=Article</code> with <code>headline</code>, <code>author</code>, <code>publisher</code>, <code>articleBody</code>",
      ],
      except: [
        "Applies to <code>experience</code>·<code>buying_guide</code>·<code>microsite</code>",
        "N/A without an article body structure",
      ],
      fail: [
        "Article structure present but no <code>@type=Article</code> node",
        "Required field missing: <code>articleBody</code>",
      ],
    },
  },
  '32': {
    ko: {
      src: [
        "본문 텍스트(보일러플레이트 제거) + DOM class/id + 헤딩·강조 텍스트 + <code>&lt;details&gt;</code>",
      ],
      logic: [
        { li: "세 경로 중 <b>하나라도</b> 충족", sub: [
          "① 질문 문장 경로 — 물음표 문장(<code>[^.!?\\n]{10,200}\\?</code>) ≥ 1개 <b>AND</b> 의문사 포함(문두 what/which/how… 5개 언어 + 한국어·베트남어 꼬리형 <code>나요/까요/습니까</code>·<code>nào/gì</code>) <b>AND</b> 본문에 다국어 문답 키워드(<code>faq</code>, <code>frequently asked</code>, <code>preguntas frecuentes</code>, <code>häufig gestellte fragen</code>, <code>perguntas frequentes</code>, <code>câu hỏi thường gặp</code>, <code>자주 묻는</code> 등) 존재 — 세 조건 AND (2026-09-17 ‘C안’)",
          "② class/id 키워드(<code>faq</code>, <code>q&amp;a</code>, <code>qna</code>, <code>questions</code>, <code>answer</code>, <code>accordion</code>, <code>자주 묻는</code>, <code>질문</code> — <code>div</code>·<code>section</code>·<code>aside</code>·<code>article</code>·<code>details</code>) 또는 헤딩·강조 태그(<code>h1~h6</code>·<code>b</code>·<code>strong</code>·<code>dt</code>·<code>summary</code>·<code>caption</code>·<code>legend</code>, ≤60자) 텍스트에 키워드",
          "③ <code>&lt;details&gt;</code> ≥ 3개",
        ] },
      ],
      except: [
        "의문사 없는 물음표 문장 제외 — ‘Need Help?’·매체명 ‘Which?’ 오탐 (UK PLP 실측: 물음표 문장 5개 전부 오탐)",
        "하단 피드백 위젯 문구(‘Was this helpful’ 계열 8개 언어) 제외 — 통과분의 77% 가 이 오탐이었음",
        "#35 와 달리 <code>&lt;p&gt;</code> 라벨 스캔은 하지 않음 (‘Have questions?’ 짧은 UI 문구 오탐 방지)",
        "<code>accordion</code> 은 요소 안에 질문 문장(…?)이 있을 때만 FAQ 로 인정 (2026-10-31 — US 푸터 사이트맵 메뉴 <code>div#footnote</code> 의 MuiAccordion 으로 US 682건 허위 통과)",
        "위젯·모달 질문도 제외 (2026-10-31): <code>How would you improve the information?</code>(AU·IN·UK 트러블슈팅) · <code>Hoe zou u de informatie verbeteren?</code>(NL) · <code>Hoe kan ik u van dienst zijn?</code>(BE 상담 챗) · <code>Wie könnten die bereitgestellten…</code>(DE) · VN 로그인·스펙 모달",
        "10월 측정분은 HTML 재수집으로 위 새 기준을 소급 재판정 (상류 <code>data/item_overrides.json</code>, 1,447건)",
      ],
      fail: [
        "FAQ 키워드(<code>faq</code>, <code>자주 묻는</code> …)를 포함한 요소를 찾지 못함",
      ],
    },
    en: {
      src: [
        "Body text (boilerplate stripped) + DOM class/id + heading/emphasis text + <code>&lt;details&gt;</code>",
      ],
      logic: [
        { li: "Pass when <b>any</b> of three paths holds", sub: [
          "① question-sentence path — ≥ 1 question sentence (<code>[^.!?\\n]{10,200}\\?</code>) <b>AND</b> an interrogative (sentence-initial what/which/how… in 5 languages, plus Korean/Vietnamese tail forms) <b>AND</b> a multilingual Q&amp;A keyword in the body (<code>faq</code>, <code>frequently asked</code>, <code>preguntas frecuentes</code>, <code>häufig gestellte fragen</code>, <code>perguntas frequentes</code>, <code>câu hỏi thường gặp</code>, …) — all three ANDed (decision 2026-09-17)",
          "② class/id keywords (<code>faq</code>, <code>q&amp;a</code>, <code>qna</code>, <code>questions</code>, <code>answer</code>, <code>accordion</code>, … on <code>div</code>·<code>section</code>·<code>aside</code>·<code>article</code>·<code>details</code>) or the keyword in heading/emphasis text (<code>h1–h6</code>·<code>b</code>·<code>strong</code>·<code>dt</code>·<code>summary</code>·<code>caption</code>·<code>legend</code>, ≤60 chars)",
          "③ ≥ 3 <code>&lt;details&gt;</code> elements",
        ] },
      ],
      except: [
        "Question sentences without an interrogative are excluded — ‘Need Help?’ and the publication name ‘Which?’ were false positives (UK PLP: all 5 question-mark sentences were noise)",
        "Bottom feedback-widget phrases (‘Was this helpful’ family, 8 languages) excluded — they were 77% of passes",
        "Unlike #35, <code>&lt;p&gt;</code> labels are not scanned (avoids short UI copy like ‘Have questions?’)",
        "<code>accordion</code> counts as FAQ only when the element contains a question sentence (…?) (2026-10-31 — the MuiAccordion in the US footer sitemap menu <code>div#footnote</code> falsely passed 682 US pages)",
        "Widget and modal questions are excluded too (2026-10-31): <code>How would you improve the information?</code> (AU·IN·UK troubleshooting) · <code>Hoe zou u de informatie verbeteren?</code> (NL) · <code>Hoe kan ik u van dienst zijn?</code> (BE chat) · <code>Wie könnten die bereitgestellten…</code> (DE) · VN login/spec modals",
        "October measurements were re-judged under the new rule by re-fetching the HTML (upstream <code>data/item_overrides.json</code>, 1,447 pages)",
      ],
      fail: [
        "No element containing an FAQ keyword (<code>faq</code>, <code>q&amp;a</code> …)",
      ],
    },
  },
  '33': {
    ko: {
      src: [
        "DOM <code>dfn</code>·<code>abbr</code> + 본문 텍스트(보일러플레이트 제거) + 문장 판정 모델 <code>geo-audit-3b</code>(올라마 로컬)",
      ],
      logic: [
        "<code>dfn</code>/<code>abbr</code> 개수 + 다국어 정의문 패턴 매칭 <b>합계 ≥ 1</b>",
        "패턴 — 한국어(<code>X는/이란 …이다/입니다/를 말한다/의미한다/가리킨다/약자이다</code>), 영어(<code>X is/refers to/means/stands for/is defined as/also known as/is short for/consists of</code>), 스페인어(<code>se define como/se conoce como/consiste en</code>), 독일어(<code>wird als … bezeichnet/steht für/besteht aus</code>), 포르투갈어(<code>é um tipo de/consiste em/trata-se de</code>), 베트남어(<code>được gọi là/viết tắt của</code>), 약어 정의 <code>[A-Z]{2,6} (Full Name)</code>, 질문형 <code>What is X?</code>",
        "<b>2026-10-18 부터</b> 패턴 매칭 문장을 문장 판정 모델이 최종 확인하고, 매칭 0건이면 본문 앞 40문장을 모델로 훑어 정의문을 탐색(정규식 OR 모델)",
        "<code>dfn</code>/<code>abbr</code> 이 기준을 채우면 모델 호출 없음",
        "모델 미연결 시 정규식 판정 폴백",
      ],
      except: [
        "계사 기본형(<code>ist ein</code>/<code>es la</code>/<code>é a</code>)은 2026-09-19 제거 — ‘Im letzten Zimmer ist ein’ 같은 일반 문장을 정의문으로 오탐",
        "약관·결제·상표 고지 문장(#36 노이즈 목록과 동일)과 지시대명사 주어(<code>This is a…</code>)는 2026-10-17 부터 정의문으로 세지 않음 — 사람 판정 정답 기준 정밀도 20% → 50%",
        "본문 문장 추출에서 nav·푸터·쿠키·프로모 배너·<b>숨은 모달/다이얼로그</b> 제외(2026-10-19 — US help-library 의 브라우저 안내 모달이 67/100 허위 통과시킨 사례)",
      ],
      fail: [
        "정의문 0건 — 1건 이상 필요",
        "후보가 있었지만 모델이 제외 (예: 질문 문장, 내비게이션 메뉴 나열)",
      ],
    },
    en: {
      src: [
        "DOM <code>dfn</code>·<code>abbr</code> + body text (boilerplate stripped) + sentence-judgment model <code>geo-audit-3b</code> (local Ollama)",
      ],
      logic: [
        "<code>dfn</code>/<code>abbr</code> count + multilingual definition-pattern matches <b>total ≥ 1</b>",
        "Patterns — Korean topic-marker forms, English (<code>X is/refers to/means/stands for/is defined as/also known as/is short for/consists of</code>), Spanish (<code>se define como/se conoce como/consiste en</code>), German (<code>wird als … bezeichnet/steht für/besteht aus</code>), Portuguese (<code>é um tipo de/consiste em/trata-se de</code>), Vietnamese (<code>được gọi là/viết tắt của</code>), acronym definitions <code>[A-Z]{2,6} (Full Name)</code>, and the question form <code>What is X?</code>",
        "<b>Since 2026-10-18</b> pattern matches are confirmed by the sentence-judgment model; with zero matches the model scans the first 40 body sentences for a definition (regex OR model)",
        "No model call when <code>dfn</code>/<code>abbr</code> already satisfies the threshold; falls back to regex-only when the model is not connected",
      ],
      except: [
        "Bare copula forms (<code>ist ein</code>/<code>es la</code>/<code>é a</code>) were removed 2026-09-19 — they matched ordinary sentences like ‘Im letzten Zimmer ist ein’ as definitions",
        "Since 2026-10-17 terms/payment/trademark-notice sentences (same noise list as #36) and demonstrative subjects (<code>This is a…</code>) no longer count as definitions — precision against human verdicts 20% → 50%",
        "Sentence extraction drops nav/footer/cookie/promo banners and <b>hidden modals/dialogs</b> (2026-10-19 — a US help-library browser-notice modal falsely passed 67/100 pages)",
      ],
      fail: [
        "0 definition sentences — at least 1 needed",
        "Candidates found but rejected by the model (e.g. questions, navigation menu lists)",
      ],
    },
  },
  '34': {
    ko: {
      src: [
        "JSON-LD 전체 노드 (@type 무관 트리 탐색)",
      ],
      logic: [
        "<code>author</code> 필드 존재 <b>또는</b> <code>datePublished</code> + (<code>publisher</code> | <code>sourceOrganization</code> | <code>source</code>) 조합",
      ],
      except: [
        "적용 페이지타입 — <code>newsroom</code>·<code>press_media</code> (상류 scoring_config 기준; 구포맷 스냅샷 보정 게이트는 <code>buying_guide</code>·<code>lg_experience</code> 포함)",
        "byline 은 에디토리얼에만 성립하는 개념이라 그 외 타입은 N/A",
        "JSON-LD 노드가 아예 없으면 FAIL",
      ],
      fail: [
        "JSON-LD 에 <code>author</code> 도 <code>datePublished</code>+<code>publisher</code> 조합도 없음",
      ],
    },
    en: {
      src: [
        "All JSON-LD nodes (tree walk regardless of @type)",
      ],
      logic: [
        "An <code>author</code> field <b>or</b> the combination <code>datePublished</code> + (<code>publisher</code> | <code>sourceOrganization</code> | <code>source</code>)",
      ],
      except: [
        "Applies to <code>newsroom</code>·<code>press_media</code> (per upstream scoring_config; the old-format compatibility gate also covers <code>buying_guide</code>·<code>lg_experience</code>)",
        "A byline only makes sense on editorial content, so other types are N/A",
        "FAIL when the page has no JSON-LD nodes at all",
      ],
      fail: [
        "JSON-LD has neither <code>author</code> nor the <code>datePublished</code>+<code>publisher</code> pair",
      ],
    },
  },
  '35': {
    ko: {
      src: [
        "DOM — 요약 블록 셀렉터 + 라벨 텍스트",
      ],
      logic: [
        { li: "두 경로 중 <b>하나라도</b> 충족", sub: [
          "① 요약 블록 — <code>p.info-desc</code>, <code>p.description</code>, <code>div.c-floating-features</code> 중 텍스트 <b>≥ 80자</b> · 줄수 ≥ 1(<code>&lt;br&gt;</code> 수 또는 문장 수)",
          "② 라벨 — 헤딩·강조 태그(<code>h1~h6</code>·<code>b</code>·<code>strong</code>·<code>dt</code>·<code>summary</code>·<code>caption</code>·<code>legend</code>) + <code>&lt;p&gt;</code>(#35 전용 옵트인) 의 ≤60자 텍스트에 키워드 <code>summary</code>, <code>overview</code>, <code>tldr</code>, <code>abstract</code>, <code>key takeaway(s)</code>, <code>at a glance</code>, <code>highlights</code>, <code>key features</code>, <code>news summary</code>, <code>요약</code>, <code>핵심</code>, <code>한눈에</code>, <code>개요</code>, <code>resumen</code>, <code>zusammenfassung</code>, <code>resumo</code>, <code>tóm tắt</code> 등",
        ] },
      ],
      except: [
        "class/id 매칭은 <b>비활성</b>(<code>match_class: no</code>) — ‘summary’ 클래스가 스펙 테이블·가격 요약에도 붙어 PDP 97.1% 오탐",
        "<code>idt</code> 클래스 블록 제외(‘➔ Setting for…’ 단계 라벨)",
        "80자 미만 제외(‘Step 1. Preheating…’ 오탐)",
        "<code>&lt;p&gt;</code> 라벨 스캔은 US PDP(React/MUI)의 <code>Key features</code> 라벨 대응 (2026-09-20)",
      ],
      fail: [
        "요약 블록(헤딩 문구·selector)을 찾지 못함",
      ],
    },
    en: {
      src: [
        "DOM — summary-block selectors + label text",
      ],
      logic: [
        { li: "Pass when <b>either</b> path holds", sub: [
          "① summary block — one of <code>p.info-desc</code>, <code>p.description</code>, <code>div.c-floating-features</code> with text <b>≥ 80 chars</b> and ≥ 1 line (<code>&lt;br&gt;</code> count or sentence count)",
          "② label — keyword in ≤60-char text of heading/emphasis tags (<code>h1–h6</code>·<code>b</code>·<code>strong</code>·<code>dt</code>·<code>summary</code>·<code>caption</code>·<code>legend</code>) plus <code>&lt;p&gt;</code> (opt-in for #35 only): <code>summary</code>, <code>overview</code>, <code>tldr</code>, <code>abstract</code>, <code>key takeaway(s)</code>, <code>at a glance</code>, <code>highlights</code>, <code>key features</code>, <code>news summary</code>, <code>resumen</code>, <code>zusammenfassung</code>, <code>resumo</code>, <code>tóm tắt</code>, …",
        ] },
      ],
      except: [
        "Class/id matching is <b>disabled</b> (<code>match_class: no</code>) — ‘summary’ classes also decorate spec tables and price summaries (97.1% false-pass on PDPs)",
        "Blocks with class <code>idt</code> excluded (step labels like ‘➔ Setting for…’)",
        "Under 80 chars excluded (‘Step 1. Preheating…’)",
        "The <code>&lt;p&gt;</code> label scan handles the US PDP (React/MUI) <code>Key features</code> label (2026-09-20)",
      ],
      fail: [
        "No summary block found (heading phrase or selector)",
      ],
    },
  },
  '36': {
    ko: {
      src: [
        "본문 텍스트 — 보일러플레이트(GNB·푸터·쿠키)와 HTML 주석 제거 후 문장 단위 분리(<code>(?&lt;=[.!?。\\n])\\s+</code>, 6자 미만 제외)",
      ],
      logic: [
        "24개+ 패턴군 중 하나라도 매칭되는 문장 <b>≥ 5개</b> (비율→개수 기준 변경 2026-09-17)",
        "<b>트러블슈팅·PLP 는 ≥ 3개</b> (2026-10-26, 10월 감사부터) — 5개는 PDP·에디토리얼처럼 긴 본문 전제인데 트러블슈팅은 증상→원인→해결책 세 요소로 끝나고 PLP 는 카테고리 설명 몇 줄이 전부라, 콘텐츠가 있어도 떨어졌음(미달 페이지 절반 이상이 1~4개 구간) (3개 = 요소당 1문장)",
        "<b>2026-10-18 부터</b> 패턴 후보 문장을 문장 판정 모델 <code>geo-audit-3b</code>(올라마 로컬, 10/24 부터 v3d)가 확인해 y 인 것만 센다 — 임계를 채우면 즉시 중단, 후보로 못 채우면 본문 앞 40문장(<code>model_scan_max</code>)도 모델이 탐색(2026-10-24 — 트러블슈팅은 숫자 없는 원인·증상 문장이라 정규식 후보 중앙값 1개였음), 실패 시 hint 에 모델 제외 사유 표시, 미연결 시 정규식 판정 폴백(value 에 표기)",
        "패턴군 — 퍼센트 · 통화(<code>[$€£¥₩]</code>) · 연도 · 큰 수(천단위 구분/4자리+) · 배수(<code>2x/times/veces/lần</code>) · million/billion 계열 · 물리·전기·디스플레이 단위(<code>kg…BTU</code>, 인치 <code>34\"</code>) · 출처(<code>according to/según/laut/theo</code>) · 순위·최초(<code>world’s first/No.1/top N</code>) · 해상도·화면비 · 평점 · 용량·규격(<code>cu.ft/mAh/Mbps</code>) · 기간·보증 · 인증·표준(<code>ISO/ENERGY STAR/Dolby/FreeSync/HDMI</code>) · 비교·증감+숫자 · 수상(<code>CES/Red Dot/EISA</code>) · E-E-A-T 4패턴(실측·시험 <code>tested by/independently verified</code>, 특허 <code>patented</code>, 전문가·연구 <code>recommended by experts/research shows</code>, 임상 <code>clinically proven</code> — 2026-09-20 추가)",
      ],
      except: [
        "노이즈 문장 제외 — copyright 표기, PayPal/Klarna 할부 안내(<code>0% Finanzierung</code> 이 여러 패턴에 동시 매칭돼 페이지당 수십 건 오탐), 약관, 쿠키·개인정보 정책",
        "노이즈 보강(2026-10-17) — 무이자 할부(<code>0% interest</code>)·쿠폰/바우처·베트남어 할부·증정(<code>trả góp</code>, <code>tặng … trị giá</code>)·할인(<code>% off</code>/<code>descuento</code>/<code>dto</code>)·보도자료 연락처(이메일·<code>Media Contacts</code>)·공유 버튼(<code>Share this content</code>)·JavaScript 안내·상표 고지 추가 제외 — 사람 판정 정답 기준 정밀도 41% → 88%(정답 문장 손실 0)",
        "숨은 모달/다이얼로그 문장도 본문에서 제외(2026-10-19)",
        "LG 자사 기술명(ThinQ 등)은 전 페이지에 있어 변별력이 없으므로 인증 패턴에 미등재",
        "임계값 10개도 검토했으나 낙폭이 커(뉴스룸 92→47%) 5개로 확정",
        "트러블슈팅·PLP 3개 기준의 통과율(32~61%)은 다른 타입(56~71%)을 넘지 않아 부풀림이 아님",
        "대시보드는 저장된 \"모델 확인 N\" 개수로 재판정하되 임계를 낮출 때만 — 측정 당시 임계에서 조기 중단해 N 이 잘려 있으므로 높일 때는 저장 판정 사용",
      ],
      fail: [
        "인용 가능 문장 0~2개 — 트러블슈팅·PLP 는 3개, 그 외 5개 필요",
      ],
    },
    en: {
      src: [
        "Body text — sentences split after stripping boilerplate (GNB/footer/cookie) and HTML comments (<code>(?&lt;=[.!?。\\n])\\s+</code>, sentences under 6 chars dropped)",
      ],
      logic: [
        "<b>≥ 5</b> sentences matching any of 24+ pattern groups (ratio→count change, 2026-09-17)",
        "<b>Troubleshooting and PLP: ≥ 3</b> (2026-10-26, from the October audit) — 5 assumes a long body such as a PDP or editorial article, whereas troubleshooting ends with symptom → cause → fix and a PLP carries only a few lines of category copy, so pages with real content were failing (over half of the misses sat at 1–4 sentences) (3 = one sentence per element)",
        "<b>Since 2026-10-18</b> pattern candidates are confirmed by the sentence-judgment model <code>geo-audit-3b</code> (local Ollama, v3d since 10/24) and only model-confirmed sentences count — stops as soon as the threshold is met; if candidates fall short, the model also scans the first 40 body sentences (<code>model_scan_max</code>, 2026-10-24 — troubleshooting cause/symptom sentences carry no numbers, so the regex median was 1 candidate); on failure the hint lists model-rejection reasons; falls back to regex-only (flagged in the value) when the model is not connected",
        "Groups — percentages · currency (<code>[$€£¥₩]</code>) · years · large numbers · multiples (<code>2x/times/veces/lần</code>) · million/billion family · physical/electrical/display units (<code>kg…BTU</code>, inches <code>34\"</code>) · attribution (<code>according to/según/laut/theo</code>) · rank/first (<code>world’s first/No.1/top N</code>) · resolutions/aspect ratios · ratings · capacity units (<code>cu.ft/mAh/Mbps</code>) · durations/warranty · certifications/standards (<code>ISO/ENERGY STAR/Dolby/FreeSync/HDMI</code>) · comparison + number · awards (<code>CES/Red Dot/EISA</code>) · four E-E-A-T patterns (testing <code>tested by/independently verified</code>, patents <code>patented</code>, expert/research <code>recommended by experts/research shows</code>, clinical <code>clinically proven</code> — added 2026-09-20)",
      ],
      except: [
        "Noise sentences excluded — copyright lines, PayPal/Klarna financing copy (<code>0% Finanzierung</code> matched several patterns at once, dozens of false hits per page), terms, cookie/privacy policy",
        "Noise reinforcement (2026-10-17) — interest-free financing (<code>0% interest</code>), coupons/vouchers, Vietnamese installment/gift copy (<code>trả góp</code>, <code>tặng … trị giá</code>), discounts (<code>% off</code>/<code>descuento</code>/<code>dto</code>), press-release contacts (emails, <code>Media Contacts</code>), share buttons (<code>Share this content</code>), JavaScript notices, and trademark notices also excluded — precision against human verdicts 41% → 88% with zero true-sentence loss",
        "Hidden modal/dialog sentences dropped from the body (2026-10-19)",
        "LG’s own tech names (ThinQ etc.) are on every page and carry no signal, so they are not in the certification pattern",
        "A threshold of 10 was considered but dropped too far (newsroom 92→47%), fixed at 5",
        "Pass rates under the 3-sentence rule for troubleshooting/PLP (32–61%) do not exceed other types (56–71%), so it is not inflation",
        "The dashboard re-judges from the stored “model-confirmed N” count only when the threshold is lowered — the audit stops early at the threshold in force, so N is truncated and the stored verdict is used when raising it",
      ],
      fail: [
        "0–2 citable sentences — 3 needed for troubleshooting/PLP, 5 elsewhere",
      ],
    },
  },
  '37': {
    ko: {
      src: [
        "원본 HTML 텍스트 vs Playwright 렌더 후 텍스트 (별도 CSR 측정 파이프라인)",
      ],
      logic: [
        "SSR 텍스트 비율 <b>≥ 60%</b> (<code>원본 텍스트 / 렌더 후 텍스트</code>)",
        "<b>Shadow DOM SSR</b>(<code>&lt;template shadowrootmode&gt;</code>) 본문은 분자에서 <b>제외</b>(2026-10-05 결정) — 비JS 파서 다수(BeautifulSoup·DOMParser·trafilatura)가 본문으로 읽지 않으며(CNX 실측, html5lib 만 인식) ChatGPT·Claude 류의 해석은 비공개라 보수 기준 유지",
      ],
      except: [
        "측정 불가(Playwright 미설치·차단) 시 FAIL 처리하고 사유를 판정 근거에 남김",
        "트러블슈팅 본문의 Declarative Shadow DOM 전환(10/5 실측: AU·BR·CA·IN·VN 배포)에서 — 콘텐츠 룰(#32~#36)은 섀도 본문을 <b>인정</b>하되 #37 분자에서는 제외하고, 두 경우 모두 판정 근거에 “Shadow DOM SSR — 주요 AI 크롤러 미인식 가능(일반 DOM 전환 필요)” 를 적시",
        "대시보드는 baseline 이 주입된 페이지를 저장값이 아니라 현재 <code>data/csr_baseline.json</code> 으로 다시 판정 — 그 국가 자체 baseline 이 있을 때만 (다른 국가 평균으로 빌린 값은 재판정하지 않음, 2026-11-05)",
      ],
      fail: [
        "SSR 비율 47% — 60% 이상 필요 (본문 대부분을 나중에 불러옴)",
      ],
    },
    en: {
      src: [
        "Raw HTML text vs text after Playwright rendering (separate CSR measurement pipeline)",
      ],
      logic: [
        "SSR text ratio <b>≥ 60%</b> (<code>raw text / rendered text</code>)",
        "<b>Shadow DOM SSR</b> body text (<code>&lt;template shadowrootmode&gt;</code>) is <b>excluded from the numerator</b> (decision 2026-10-05) — most non-JS parsers (BeautifulSoup, DOMParser, trafilatura) do not read it as body text (CNX measurement; only html5lib does), and ChatGPT/Claude-class interpretation is undisclosed, so the conservative basis stays",
      ],
      except: [
        "When measurement is impossible (Playwright missing/blocked) the item FAILs with the reason recorded",
        "For the troubleshooting Declarative Shadow DOM rollout (measured 10/5: deployed on AU·BR·CA·IN·VN) — content rules (#32–#36) <b>accept</b> shadow body text while #37 excludes it from the numerator, and in both cases the verdict notes “Shadow DOM SSR — may be unrecognized by major AI crawlers (switch to regular DOM needed)”",
        "For baseline-injected pages the dashboard re-judges with the current <code>data/csr_baseline.json</code> instead of the stored value — only when the country has its own baseline (values borrowed from other countries are not re-judged, 2026-11-05)",
      ],
      fail: [
        "SSR ratio 47% — 60% or more needed (most body text loaded later)",
      ],
    },
  },
  '38': {
    ko: {
      src: [
        "DOM (원본 HTML — SSR 기준)",
      ],
      logic: [
        "셀렉터 <code>img[src*='PDPGalleryThumbnail']</code>, <code>[class*='Product-ImageGrid'] img</code>, <code>.c-summary-gallery img</code>, <code>.c-gallery img</code>, <code>.swiper-wrapper .swiper-slide img</code> 매칭 <b>≥ 3개</b>",
      ],
      except: [
        "적용 페이지타입 — <code>pdp</code> 만",
        "그 외는 N/A",
      ],
      fail: [
        "원본 HTML 에 썸네일 이미지 3개 미만",
      ],
    },
    en: {
      src: [
        "DOM (raw HTML — SSR basis)",
      ],
      logic: [
        "<b>≥ 3</b> matches of <code>img[src*='PDPGalleryThumbnail']</code>, <code>[class*='Product-ImageGrid'] img</code>, <code>.c-summary-gallery img</code>, <code>.c-gallery img</code>, <code>.swiper-wrapper .swiper-slide img</code>",
      ],
      except: [
        "Applies to <code>pdp</code> only; N/A elsewhere",
      ],
      fail: [
        "Fewer than 3 thumbnail images in the source HTML",
      ],
    },
  },
  '39': {
    ko: {
      src: [
        "DOM + JSON-LD 원문 + raw HTML(<code>__NEXT_DATA__</code> 등 임베디드 JSON)",
      ],
      logic: [
        "5개 영역 각각 <b>DOM 셀렉터 OR JSON-LD 토큰 OR raw 토큰</b> 중 하나라도 있으면 SSR 인정 — <b>3개 영역 이상</b> 충족 시 통과",
        "① 제품명: <code>h1.cmp-text</code>, <code>h1</code>, <code>[class*='Product-MainTitle']</code> / <code>\"name\"</code> / <code>\"productname\"</code>·<code>\"modelname\"</code>",
        "② 가격: <code>[class*='Product-Price']</code>, <code>[class*='price-area']</code>, <code>.info-sticky--price</code> / <code>pricecurrency</code>·<code>\"price\"</code>·<code>pricespecification</code> / <code>\"offers\"</code>",
        "③ 갤러리: <code>img[src*='PDPGalleryThumbnail']</code>, <code>[class*='Product-ImageGrid']</code>, <code>.c-summary-gallery</code>, <code>.c-gallery</code> / <code>\"image\"</code> / <code>pdpgallerythumbnail</code>",
        "④ 사양: <code>[class*='Product-KeyFeatures']</code>, <code>.c-specs-summary</code>, <code>.c-all-specs-area</code>, <code>.c-specs-dimensions</code> / <code>additionalproperty</code> / <code>\"specification\"</code>·<code>\"keyfeature\"</code>",
        "⑤ 리뷰: <code>[data-bv-show]</code>, <code>[class*='review']</code>, <code>[class*='rating']</code> / <code>aggregaterating</code>·<code>\"review\"</code> / <code>data-bv-show</code>·<code>rating_summary</code>·<code>\"reviewcount\"</code>",
      ],
      except: [
        "적용 페이지타입 — <code>pdp</code>",
        "US(React) PDP 는 DOM 위젯이 CSR 이어도 데이터가 JSON-LD/<code>__NEXT_DATA__</code> 에 SSR 로 존재하면 해당 영역 SSR 로 인정",
      ],
      fail: [
        "매칭 2개(제품명·갤러리) · 누락 3개(가격·사양·리뷰) — 최소 3개 필요",
      ],
    },
    en: {
      src: [
        "DOM + JSON-LD source + raw HTML (embedded JSON such as <code>__NEXT_DATA__</code>)",
      ],
      logic: [
        "Each of 5 areas counts as SSR when <b>any of DOM selector OR JSON-LD token OR raw token</b> is present — pass with <b>≥ 3 areas</b>",
        "① product name: <code>h1.cmp-text</code>, <code>h1</code>, <code>[class*='Product-MainTitle']</code> / <code>\"name\"</code> / <code>\"productname\"</code>·<code>\"modelname\"</code>",
        "② price: <code>[class*='Product-Price']</code>, <code>[class*='price-area']</code>, <code>.info-sticky--price</code> / <code>pricecurrency</code>·<code>\"price\"</code>·<code>pricespecification</code> / <code>\"offers\"</code>",
        "③ gallery: <code>img[src*='PDPGalleryThumbnail']</code>, <code>[class*='Product-ImageGrid']</code>, <code>.c-summary-gallery</code>, <code>.c-gallery</code> / <code>\"image\"</code> / <code>pdpgallerythumbnail</code>",
        "④ specs: <code>[class*='Product-KeyFeatures']</code>, <code>.c-specs-summary</code>, <code>.c-all-specs-area</code>, <code>.c-specs-dimensions</code> / <code>additionalproperty</code> / <code>\"specification\"</code>·<code>\"keyfeature\"</code>",
        "⑤ reviews: <code>[data-bv-show]</code>, <code>[class*='review']</code>, <code>[class*='rating']</code> / <code>aggregaterating</code>·<code>\"review\"</code> / <code>data-bv-show</code>·<code>rating_summary</code>·<code>\"reviewcount\"</code>",
      ],
      except: [
        "Applies to <code>pdp</code>",
        "On US (React) PDPs an area counts as SSR when the data exists in JSON-LD/<code>__NEXT_DATA__</code> even though the DOM widget is CSR",
      ],
      fail: [
        "2 matched (name, gallery) · 3 missing (price, specs, reviews) — at least 3 needed",
      ],
    },
  },
  '40': {
    ko: {
      src: [
        "DOM — <code>img</code> 의 <code>src</code>/<code>data-src</code> 파일명 (쿼리스트링 제거, 경로 마지막 세그먼트)",
      ],
      logic: [
        "브랜드·제품 키워드(<code>lg</code>, <code>oled</code>, <code>qned</code>, <code>nanocell</code>, <code>gram</code>, <code>thinq</code>, <code>refrigerator</code>, <code>washer</code>, <code>cinebeam</code> 등 40여 개) 포함 파일명 비율 <b>≥ 30%</b>",
      ],
      except: [
        "UI 자산 제외 — 파일명에 <code>logo</code>, <code>icon</code>, <code>ico-</code>, <code>sprite</code>, <code>placeholder</code>, <code>blank</code>, <code>spacer</code>, <code>dummy</code> 포함 시 분모에서 제외 (로고가 페이지마다 수십 번 반복 삽입돼 PDP 일수록 비율이 떨어지는 역전 회귀 — 2026-09-18 수정)",
        "콘텐츠 이미지가 0개면 FAIL",
        "본문 이미지만 판정 — GNB·LNB·헤더·푸터·모달 안 이미지 제외 (<code>content_only</code>, 2026-11-05 측정분부터). 메뉴 배너가 전 페이지 공통으로 판정을 차지했음 (CA 트러블슈팅 88장 중 85장)",
        "본문 이미지가 없으면 N/A (분모 제외)",
      ],
      fail: [
        "서술적 파일명 비율 30% 미만 (예: 9/34 = 26.5%)",
      ],
    },
    en: {
      src: [
        "DOM — filenames from <code>img</code> <code>src</code>/<code>data-src</code> (query string removed, last path segment)",
      ],
      logic: [
        "<b>≥ 30%</b> of filenames contain a brand/product keyword (<code>lg</code>, <code>oled</code>, <code>qned</code>, <code>nanocell</code>, <code>gram</code>, <code>thinq</code>, <code>refrigerator</code>, <code>washer</code>, <code>cinebeam</code>, … ≈ 40 keywords)",
      ],
      except: [
        "UI assets excluded — filenames containing <code>logo</code>, <code>icon</code>, <code>ico-</code>, <code>sprite</code>, <code>placeholder</code>, <code>blank</code>, <code>spacer</code>, <code>dummy</code> leave the denominator (the repeated logo made ratios drop on image-rich PDPs — fixed 2026-09-18)",
        "FAIL when there are no content images",
        "Content images only — images inside GNB, LNB, header, footer and modals are excluded (<code>content_only</code>, measurements from 2026-11-05). Menu banners shared by every page were deciding the result (85 of 88 images on CA troubleshooting)",
        "N/A when there are no content images (out of the denominator)",
      ],
      fail: [
        "Descriptive filenames below 30% (e.g. 9/34 = 26.5%)",
      ],
    },
  },
  '41': {
    ko: {
      src: [
        "HTTP 응답 상태 코드",
      ],
      logic: [
        "<code>== 200</code>",
      ],
      except: [
        "없음",
      ],
      fail: [
        "404 · 500 등 200 이 아닌 응답",
      ],
    },
    en: {
      src: [
        "HTTP response status code",
      ],
      logic: [
        "<code>== 200</code>",
      ],
      except: [
        "None",
      ],
      fail: [
        "Non-200 response such as 404 or 500",
      ],
    },
  },
  '42': {
    ko: {
      src: [
        "본문 텍스트 (보일러플레이트 제거)",
      ],
      logic: [
        "HTTP 200 인데 본문에 8개 언어 404 문구(<code>page not found</code>, <code>페이지를 찾을 수 없</code>, <code>página no encontrada</code>, <code>Seite nicht gefunden</code>, <code>página não encontrada</code>, <code>không tìm thấy trang</code> 등) 매칭 시 FAIL",
        "문구가 없어도 본문 <b>&lt; 200자</b>면 내용 없는 200 응답으로 FAIL",
      ],
      except: [
        "비-200 응답은 검증 대상 아님(자동 통과 — #41 이 별도로 잡음)",
        "길이만으로는 판정하지 않음 — LG 404 페이지는 추천 제품·검색창이 붙어 보일러플레이트 제거 후에도 2,400~3,200자 (2026-09-17 실측)",
        "문구 판정이 정본(‘B안’)",
        "독일어 <code>nicht gefunden werden</code> 은 <code>Seite</code> 와 함께일 때만 404 문구로 인정 (2026-10-26 — 트러블슈팅 본문 ‘채널을 찾지 못할 수 있음’ 오탐)",
      ],
      fail: [
        "본문 200자 미만 — 내용 없는 200 응답",
        "200 응답 본문에 404 안내 문구 (예: <code>Seite nicht gefunden</code>)",
      ],
    },
    en: {
      src: [
        "Body text (boilerplate stripped)",
      ],
      logic: [
        "FAIL when an HTTP 200 body matches a 404 phrase in 8 languages (<code>page not found</code>, <code>página no encontrada</code>, <code>Seite nicht gefunden</code>, <code>página não encontrada</code>, <code>không tìm thấy trang</code>, …)",
        "Even without a phrase, a body <b>&lt; 200 chars</b> FAILs as an empty 200 shell",
      ],
      except: [
        "Non-200 responses are out of scope (auto pass — #41 catches them separately)",
        "Length alone is never the judge — LG’s 404 pages carry recommended products and a search box, 2,400–3,200 chars even after stripping (measured 2026-09-17)",
        "Phrase detection is the source of truth",
        "German <code>nicht gefunden werden</code> counts as a 404 phrase only together with <code>Seite</code> (2026-10-26 — false positive on troubleshooting text saying some channels may not be found)",
      ],
      fail: [
        "Body under 200 chars — empty 200 response",
        "404 phrase in a 200 body (e.g. <code>Seite nicht gefunden</code>)",
      ],
    },
  },
  '43': {
    ko: {
      src: [
        "외부 요청 — <code>{origin}/llms.txt</code> (도메인 단위 캐시, 전용 UA)",
      ],
      logic: [
        "HTTP 200 <b>AND</b> 본문(앞 20KB)이 HTML 이 아니고 <code>‘# ’</code>·<code>‘## ’</code>·<code>‘http’</code> 중 하나 포함",
      ],
      except: [
        "soft 404 방어 — LG 는 없는 경로에도 200 + HTML 을 반환하므로 상태코드만으로 판정 금지 (2026-09-17 실측: 상태코드만 보면 전원 통과 오탐)",
        "Content-Type 이 HTML 이거나 본문이 <code>&lt;!doctype</code>/<code>&lt;html</code> 로 시작하면 FAIL",
      ],
      fail: [
        "<code>/llms.txt</code> 가 없거나 200 + HTML(soft 404) 로 응답",
      ],
    },
    en: {
      src: [
        "External request — <code>{origin}/llms.txt</code> (cached per domain, dedicated UA)",
      ],
      logic: [
        "HTTP 200 <b>AND</b> the body (first 20KB) is not HTML and contains one of <code>‘# ’</code>·<code>‘## ’</code>·<code>‘http’</code>",
      ],
      except: [
        "Soft-404 defence — LG serves 200 + HTML even for missing paths, so the status code alone must never decide (measured 2026-09-17: status-only passed everything)",
        "FAIL when the Content-Type is HTML or the body starts with <code>&lt;!doctype</code>/<code>&lt;html</code>",
      ],
      fail: [
        "<code>/llms.txt</code> missing or answered with 200 + HTML (soft 404)",
      ],
    },
  },
  '44': {
    ko: {
      src: [
        "JSON-LD 전체 (<code>@type</code> 없는 별도 블록 포함) + 적용 게이트: page_type = <code>pdp</code>",
      ],
      logic: [
        "<code>@type=AggregateRating</code> 또는 <code>@type=Review</code> 노드가 하나라도 있으면 통과(<code>schema_any_of</code>)",
        "Product 노드에 연결되지 않은 별도 JSON-LD 블록(Bazaarvoice 리뷰 위젯의 <code>{\"review\": [...]}</code>)이어도 인정 — 2026-10-26 사용자 확인",
        "2026-10-24 채점 활성(사용자 결정, LG PDP 3,147건에 Review 추가됨)",
        "활성 채점 항목 37 → 38",
      ],
      except: [
        "PDP 외 페이지타입은 N/A",
        "리뷰 안의 사진·영상은 #26·#27 에서 제외하지만, 리뷰 자체를 보는 본 항목은 그대로 인정",
        "#25 Product 풀세트의 <code>aggregateRating.ratingValue</code> 와 별개 항목",
      ],
      fail: [
        "PDP JSON-LD 에 <code>AggregateRating</code>·<code>Review</code> 둘 다 없음",
      ],
    },
    en: {
      src: [
        "All JSON-LD (including separate blocks without <code>@type</code>) + applicability gate: page_type = <code>pdp</code>",
      ],
      logic: [
        "Passes when at least one <code>@type=AggregateRating</code> or <code>@type=Review</code> node exists (<code>schema_any_of</code>)",
        "A separate JSON-LD block not linked to the Product node (the Bazaarvoice review widget’s <code>{\"review\": [...]}</code>) also counts — confirmed by the user 2026-10-26",
        "Scored since 2026-10-24 (user decision; LG added Review to 3,147 PDPs)",
        "Active scored items 37 → 38",
      ],
      except: [
        "N/A outside PDP",
        "Photos and videos inside reviews are excluded in #26/#27, but this item, which looks at the review itself, still counts them",
        "Separate from <code>aggregateRating.ratingValue</code> in the #25 Product full set",
      ],
      fail: [
        "Neither <code>AggregateRating</code> nor <code>Review</code> in the PDP JSON-LD",
      ],
    },
  },
}

export const CRITERIA_DETAIL = D

export function criteriaDetail(no, lang) {
  const d = D[String(no)]
  if (!d) return null
  return lang === 'en' ? d.en : d.ko
}
