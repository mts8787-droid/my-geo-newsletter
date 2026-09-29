// 검수 기준 상세 — 항목별 검수 대상 소스 · 판정 로직(셀렉터/정규식/키워드) · 예외/별도 조건.
// 검수기준 탭(점수 제외 버전, scripts/render-criteria.mjs)이 렌더한다 (사용자 요청 2026-09-29).
//
// 출처 (상류 my-geo-audit — 코드가 정본, 이 문서는 그 요약):
//   scoring_config.json  항목별 rule type·파라미터·applies_to_page_types·applies_when
//   rule_engine.py       룰 타입별 판정 구현 (_eval_*) · 정규식 · 오탐 방어
//   (하류) scripts/aggregate-readability.mjs  집계 예외 — OR/AND 병합·제외 페이지·재판정
//
// 키 = 검수 기준 문서(geo-agent-checklist.html)의 행 번호. 채점 항목(DOC_TO_CHECK 에
// check id 가 있는 행)만 등재 — 미채점(회색)·예정 행은 상세 없음.
// 값은 HTML 문자열 (셀렉터·정규식은 <code>). 신규 항목 추가 시 KO/EN 모두 등재 —
// EN 페이지 한글 잔존 테스트가 누락을 잡는다.

const D = {
  '1': {
    ko: {
      src: 'PageSpeed Insights(Lighthouse Lab) 의 <code>server-response-time</code> — <code>psi_collect.py</code> 가 사전 수집한 캐시에서 읽음 (감사 중 API 호출 없음)',
      logic: '<code>server_response_time_ms &lt; 600</code>',
      except: '감사 크롤러 자체 측정값은 사용하지 않음 (동시 크롤 큐잉으로 6~200배 과대 측정). PSI 표본에 없는 URL 은 같은 국가×페이지타입 셀의 중앙값으로 일괄 판정 (폴백: 셀 → 국가 → 전체 중앙값). 참조값이 전혀 없으면 N/A(분모 제외).',
    },
    en: {
      src: '<code>server-response-time</code> from PageSpeed Insights (Lighthouse Lab) — read from the cache pre-collected by <code>psi_collect.py</code> (no API calls during the audit)',
      logic: '<code>server_response_time_ms &lt; 600</code>',
      except: 'The crawler’s own timing is not used (concurrent-crawl queuing inflated it 6–200×). URLs outside the PSI sample are judged by the median of their country × page-type cell (fallback: cell → country → overall median). With no reference value at all, the item is N/A (out of the denominator).',
    },
  },
  '2': {
    ko: {
      src: '응답 헤더 <code>Content-Encoding</code>',
      logic: '헤더 값에 <code>gzip</code> · <code>br</code> · <code>deflate</code> 중 하나 포함',
      except: '헤더 자체가 없으면 FAIL.',
    },
    en: {
      src: 'Response header <code>Content-Encoding</code>',
      logic: 'Header value contains one of <code>gzip</code> · <code>br</code> · <code>deflate</code>',
      except: 'FAIL when the header is absent.',
    },
  },
  '3': {
    ko: {
      src: '응답 HTTP 프로토콜 버전',
      logic: '<code>HTTP/(\\d+)(\\.\\d)?</code> 로 버전 숫자를 파싱해 <b>2 이상</b>이면 통과 (HTTP/2, HTTP/3)',
      except: '프로토콜 정보를 얻지 못하면 FAIL.',
    },
    en: {
      src: 'HTTP protocol version of the response',
      logic: 'Version number parsed with <code>HTTP/(\\d+)(\\.\\d)?</code> — pass when <b>≥ 2</b> (HTTP/2, HTTP/3)',
      except: 'FAIL when protocol information is unavailable.',
    },
  },
  '4': {
    ko: {
      src: '응답 헤더 <code>Cache-Control</code>',
      logic: '정규식 <code>max-age\\s*=\\s*(\\d+)</code> — <b>max-age 디렉티브가 있으면(0 포함) 통과</b>',
      except: '<code>no-cache</code>/<code>no-store</code> 가 섞여 있어도 max-age 가 있으면 통과 (구 룰은 즉시 FAIL — 2026-08-30 완화). 구 룰로 수집된 스냅샷은 저장된 헤더 문자열로 재판정. 실제 캐시 가능 여부(B안)·no-store 만 실패(C안)는 검토 후 기각 — 세션·개인화 페이지의 정당한 no-store 까지 감점되기 때문.',
    },
    en: {
      src: 'Response header <code>Cache-Control</code>',
      logic: 'Regex <code>max-age\\s*=\\s*(\\d+)</code> — <b>pass when a max-age directive exists (0 included)</b>',
      except: 'Passes even when <code>no-cache</code>/<code>no-store</code> co-exist with max-age (the old rule failed immediately — relaxed 2026-08-30). Snapshots collected under the old rule are re-judged from the stored header string. Stricter variants (actually cacheable / fail only on no-store) were reviewed and rejected — they penalise legitimate no-store on session/personalised pages.',
    },
  },
  '6': {
    ko: {
      src: '페이지 요청의 리다이렉트 체인 (<code>redirect_count</code>)',
      logic: '리다이렉트 횟수 <b>≤ 1</b>',
      except: '없음.',
    },
    en: {
      src: 'Redirect chain of the page request (<code>redirect_count</code>)',
      logic: 'Redirect count <b>≤ 1</b>',
      except: 'None.',
    },
  },
  '7': {
    ko: {
      src: 'DOM — <code>img</code>·<code>script</code>·<code>link</code>·<code>iframe</code>·<code>audio</code>·<code>video</code>·<code>source</code> 의 <code>src</code>/<code>href</code>',
      logic: 'HTTPS 페이지에서 <code>http://</code> 로 시작하는 리소스 <b>0개</b>',
      except: '페이지 자체가 HTTPS 가 아니면 검증 대상 외 (자동 통과).',
    },
    en: {
      src: 'DOM — <code>src</code>/<code>href</code> of <code>img</code>·<code>script</code>·<code>link</code>·<code>iframe</code>·<code>audio</code>·<code>video</code>·<code>source</code>',
      logic: '<b>Zero</b> resources starting with <code>http://</code> on an HTTPS page',
      except: 'Non-HTTPS pages are out of scope (auto pass).',
    },
  },
  '9': {
    ko: {
      src: 'DOM — 모든 <code>&lt;img&gt;</code>',
      logic: '모든 img 에 <code>alt</code> <b>속성이 존재</b>하면 통과 (값이 빈 문자열이어도 속성만 있으면 인정). 대상 img 가 0개면 통과',
      except: '트래킹 픽셀 제외 — src 에 <code>adnxs.com</code>, <code>ads.linkedin.com</code>, <code>doubleclick</code>, <code>googletagmanager</code>, <code>google-analytics</code>, <code>facebook.com/tr</code>, <code>/pixel</code>, <code>/collect</code>, <code>scorecardresearch</code>, <code>demdex</code>, <code>everesttech</code>, <code>bat.bing</code> 포함 시 판정 대상에서 제외.',
    },
    en: {
      src: 'DOM — every <code>&lt;img&gt;</code>',
      logic: 'Pass when every img <b>has an <code>alt</code> attribute</b> (an empty string still counts). Pass when there are no eligible imgs',
      except: 'Tracking pixels are excluded — imgs whose src contains <code>adnxs.com</code>, <code>ads.linkedin.com</code>, <code>doubleclick</code>, <code>googletagmanager</code>, <code>google-analytics</code>, <code>facebook.com/tr</code>, <code>/pixel</code>, <code>/collect</code>, <code>scorecardresearch</code>, <code>demdex</code>, <code>everesttech</code>, <code>bat.bing</code>.',
    },
  },
  '10': {
    ko: {
      src: 'DOM — 랜드마크 태그 <code>main</code>·<code>nav</code>·<code>header</code>·<code>footer</code>·<code>article</code>·<code>section</code>·<code>aside</code> + 헤딩 <code>h1~h6</code> + <code>role="main"</code>',
      logic: '랜드마크 + 헤딩 <b>합계 ≥ 8</b>',
      except: '<code>&lt;main&gt;</code> 필수 아님 (<code>require_main: no</code>) — 유무는 참고 값으로만 기록. <code>&lt;div role="main"&gt;</code> 도 랜드마크로 인정.',
    },
    en: {
      src: 'DOM — landmark tags <code>main</code>·<code>nav</code>·<code>header</code>·<code>footer</code>·<code>article</code>·<code>section</code>·<code>aside</code> + headings <code>h1–h6</code> + <code>role="main"</code>',
      logic: 'Landmarks + headings <b>total ≥ 8</b>',
      except: '<code>&lt;main&gt;</code> is not required (<code>require_main: no</code>) — its presence is recorded for reference only. <code>&lt;div role="main"&gt;</code> also counts as a landmark.',
    },
  },
  '11': {
    ko: {
      src: 'DOM — <b>본문 영역</b>의 헤딩만 (GNB·헤더·푸터 등 보일러플레이트 제거 후)',
      logic: '첫 헤딩 레벨보다 <b>얕은(상위) 레벨이 뒤에 등장하는 역순이 0건</b>이면 통과. 레벨 건너뛰기(h1→h3)는 허용',
      except: '제외 헤딩 — <code>nav</code>·<code>header</code>·<code>footer</code> 태그 내부, class/id 에 <code>gnb</code>, <code>lnb</code>, <code>global-nav</code>, <code>site-header</code>, <code>site-footer</code>, <code>cookie</code>, <code>skip-to</code>, <code>breadcrumb</code>, <code>info-sticky</code>, <code>sticky</code>, <code>c-tabs</code>, <code>tab-list</code>, <code>anchor-inner</code> 포함 블록 (PDP 스티키 바의 &lt;h2&gt; 제품명·탭 버튼 &lt;h2&gt; 오탐 방지). 본문 헤딩이 0개면 FAIL.',
    },
    en: {
      src: 'DOM — headings in the <b>content area</b> only (after stripping GNB/header/footer boilerplate)',
      logic: 'Pass when there are <b>zero inversions</b> — no heading shallower than the first heading appearing later. Level skips (h1→h3) are allowed',
      except: 'Excluded headings — inside <code>nav</code>·<code>header</code>·<code>footer</code>, or blocks whose class/id contains <code>gnb</code>, <code>lnb</code>, <code>global-nav</code>, <code>site-header</code>, <code>site-footer</code>, <code>cookie</code>, <code>skip-to</code>, <code>breadcrumb</code>, <code>info-sticky</code>, <code>sticky</code>, <code>c-tabs</code>, <code>tab-list</code>, <code>anchor-inner</code> (prevents false positives from the PDP sticky bar’s &lt;h2&gt; product name and tab-button &lt;h2&gt;s). FAIL when the content area has no headings.',
    },
  },
  '12': {
    ko: {
      src: 'DOM — 인터랙티브 요소 <code>button</code>·<code>input</code>·<code>a</code>',
      logic: '접근성 텍스트(<code>aria-label</code>, <code>aria-labelledby</code>, <code>title</code>, input 의 <code>value</code>, 내부 <code>img[alt]</code>, 요소 텍스트 중 하나) 없는 요소 비율 <b>&lt; 10%</b>',
      except: '<code>input[type=hidden]</code> 과 <code>href</code> 없는 <code>a</code> 는 인터랙티브 요소로 세지 않음. 인터랙티브 요소가 0개면 통과.',
    },
    en: {
      src: 'DOM — interactive elements <code>button</code>·<code>input</code>·<code>a</code>',
      logic: 'Ratio of elements lacking accessible text (any of <code>aria-label</code>, <code>aria-labelledby</code>, <code>title</code>, input <code>value</code>, inner <code>img[alt]</code>, element text) <b>&lt; 10%</b>',
      except: '<code>input[type=hidden]</code> and <code>a</code> without <code>href</code> are not counted as interactive. Pass when there are no interactive elements.',
    },
  },
  '13': {
    ko: {
      src: 'DOM — <code>&lt;title&gt;</code>',
      logic: '텍스트 길이 <b>≥ 1자</b>',
      except: '없음.',
    },
    en: {
      src: 'DOM — <code>&lt;title&gt;</code>',
      logic: 'Text length <b>≥ 1 character</b>',
      except: 'None.',
    },
  },
  '14': {
    ko: {
      src: 'DOM — <code>meta[name=\'description\' i]</code> 의 <code>content</code>',
      logic: 'content 값 <b>≥ 1자</b>',
      except: '없음.',
    },
    en: {
      src: 'DOM — <code>content</code> of <code>meta[name=\'description\' i]</code>',
      logic: 'Content value <b>≥ 1 character</b>',
      except: 'None.',
    },
  },
  '15': {
    ko: {
      src: 'DOM — <code>link[rel=\'canonical\']</code> 의 <code>href</code> vs 최종 URL(리다이렉트 반영)',
      logic: '정규화(스킴·호스트 소문자화, 중복·트레일링 슬래시 정리, 쿼리스트링·프래그먼트 무시) 후 <b>호스트 일치</b>면 통과. 상대경로 href 는 현재 URL 기준으로 절대화',
      except: '2026-09-17 경로 일치 → 호스트 일치로 완화 — 같은 제품군 여러 페이지가 대표 1개를 정본 선언하는 의도된 정규화(실측 434건)를 감점하지 않기 위함. canonical 태그가 없거나 외부 도메인을 가리키면 FAIL.',
    },
    en: {
      src: 'DOM — <code>href</code> of <code>link[rel=\'canonical\']</code> vs the final URL (after redirects)',
      logic: 'Pass on <b>host match</b> after normalisation (lowercased scheme/host, collapsed and trailing slashes removed, query string and fragment ignored). Relative hrefs are resolved against the current URL',
      except: 'Relaxed from path match to host match on 2026-09-17 — so that intentional canonicalisation (several pages of one product family declaring a single representative, 434 measured cases) is not penalised. FAIL when the canonical tag is missing or points to another domain.',
    },
  },
  '16': {
    ko: {
      src: 'DOM — <code>h1</code>',
      logic: '개수 <b>정확히 1개</b> (<code>== 1</code>)',
      except: '없음.',
    },
    en: {
      src: 'DOM — <code>h1</code>',
      logic: 'Count <b>exactly 1</b> (<code>== 1</code>)',
      except: 'None.',
    },
  },
  '17': {
    ko: {
      src: 'DOM <code>meta[name=\'robots\' i]</code> 의 <code>content</code> + 응답 헤더 <code>X-Robots-Tag</code>',
      logic: '<b>양쪽 모두</b>에 <code>noindex</code> 토큰이 없어야 통과. 선언 자체가 없으면 기본 허용으로 통과',
      except: '과거에는 meta/헤더를 각각 채점해 meta 만 쓰는 정상 구성이 감점됐음 — 한 항목(<code>seo_indexable</code>)으로 통합. 구 스냅샷의 <code>seo_robots</code>(+<code>_hdr</code>) 행은 집계에서 같은 행으로 병합.',
    },
    en: {
      src: '<code>content</code> of DOM <code>meta[name=\'robots\' i]</code> + response header <code>X-Robots-Tag</code>',
      logic: 'Pass when the <code>noindex</code> token is absent from <b>both</b>. No declaration at all counts as allowed by default',
      except: 'Previously meta and header were scored separately, penalising the normal meta-only setup — merged into a single item (<code>seo_indexable</code>). Old-snapshot <code>seo_robots</code>(+<code>_hdr</code>) rows are folded into the same row during aggregation.',
    },
  },
  '18': {
    ko: {
      src: 'DOM — <code>meta[property^=\'og:\']</code>',
      logic: '<code>og:title</code> 과 <code>og:image</code> 가 <b>모두</b> 비어있지 않은 content 로 존재',
      except: '없음.',
    },
    en: {
      src: 'DOM — <code>meta[property^=\'og:\']</code>',
      logic: '<b>Both</b> <code>og:title</code> and <code>og:image</code> present with non-empty content',
      except: 'None.',
    },
  },
  '19': {
    ko: {
      src: '외부 요청 — URL 의 국가 디렉토리 자동 감지(<code>/us/</code> 등) 후 <code>/{cc}/sitemap.xml</code> → <code>/{cc}/sitemap_index.xml</code> → 루트 <code>/sitemap.xml</code> → <code>/sitemap_index.xml</code> 순 시도',
      logic: 'HTTP 200 + <code>Last-Modified</code> 헤더 또는 XML <code>&lt;lastmod&gt;</code> 최신값이 <b>30일 이내</b>',
      except: '<code>js</code>·<code>css</code>·<code>img</code>·<code>api</code>·<code>v1</code>·<code>v2</code>·<code>ws</code> 는 국가 코드로 보지 않음. 캐시 키에 국가를 포함해 감사 순서에 따라 앞 국가 결과가 뒤 국가에 전염되는 오염 차단 (2026-09-16 수정). 봇 보호(Akamai) 차단 회피를 위해 전용 UA 사용.',
    },
    en: {
      src: 'External request — country directory auto-detected from the URL (<code>/us/</code> etc.), then tried in order: <code>/{cc}/sitemap.xml</code> → <code>/{cc}/sitemap_index.xml</code> → root <code>/sitemap.xml</code> → <code>/sitemap_index.xml</code>',
      logic: 'HTTP 200 + the newest of the <code>Last-Modified</code> header or XML <code>&lt;lastmod&gt;</code> within <b>30 days</b>',
      except: '<code>js</code>·<code>css</code>·<code>img</code>·<code>api</code>·<code>v1</code>·<code>v2</code>·<code>ws</code> are not treated as country codes. The cache key includes the country so one country’s result cannot leak into the next depending on audit order (fixed 2026-09-16). A dedicated UA avoids bot protection (Akamai).',
    },
  },
  '21': {
    ko: {
      src: 'JSON-LD (<code>script[type=application/ld+json]</code> 전체 트리 탐색)',
      logic: '<code>@type=BreadcrumbList</code> 노드에 <code>itemListElement</code> 필드가 비어있지 않게 존재',
      except: '없음 (전 페이지타입 적용). 필드 검사는 dot-path — 배열이면 첫 원소로 검사.',
    },
    en: {
      src: 'JSON-LD (full tree walk of <code>script[type=application/ld+json]</code>)',
      logic: 'A <code>@type=BreadcrumbList</code> node with a non-empty <code>itemListElement</code> field',
      except: 'None (applies to every page type). Field checks use dot-paths — arrays are checked via their first element.',
    },
  },
  '23': {
    ko: {
      src: 'JSON-LD + 적용 게이트: DOM',
      logic: '<code>@type=FAQPage</code> 에 <code>mainEntity</code> 존재',
      except: '적용 조건 — 페이지타입 <code>pdp</code>·<code>plp</code>·<code>buying_guide</code>·<code>microsite</code> <b>이고</b> 페이지에 FAQ 섹션이 있어야 함: <code>div</code>·<code>section</code>·<code>aside</code>·<code>article</code>·<code>details</code> 의 class/id 에 <code>faq</code>, <code>자주 묻는</code>, <code>자주묻는</code>, <code>frequently asked</code>, <code>q&amp;a</code>, <code>qna</code>, <code>questions</code>, <code>질문</code>, <code>answer</code>, <code>accordion</code>. FAQ 섹션이 없으면 N/A (분모 제외).',
    },
    en: {
      src: 'JSON-LD + applicability gate: DOM',
      logic: '<code>@type=FAQPage</code> with <code>mainEntity</code>',
      except: 'Applies only when page type ∈ <code>pdp</code>·<code>plp</code>·<code>buying_guide</code>·<code>microsite</code> <b>and</b> the page has an FAQ section: class/id of <code>div</code>·<code>section</code>·<code>aside</code>·<code>article</code>·<code>details</code> containing <code>faq</code>, <code>frequently asked</code>, <code>q&amp;a</code>, <code>qna</code>, <code>questions</code>, <code>answer</code>, <code>accordion</code> or the Korean equivalents. N/A (out of the denominator) when no FAQ section exists.',
    },
  },
  '24': {
    ko: {
      src: 'JSON-LD',
      logic: '<code>@type=CollectionPage</code> 에 <code>mainEntity</code> 존재',
      except: '적용 페이지타입 — <code>plp</code> 만. 그 외는 N/A.',
    },
    en: {
      src: 'JSON-LD',
      logic: '<code>@type=CollectionPage</code> with <code>mainEntity</code>',
      except: 'Applies to <code>plp</code> only; N/A elsewhere.',
    },
  },
  '25': {
    ko: {
      src: 'JSON-LD (두 체크 병합)',
      logic: '<b>AND 병합</b> — ① <code>@type=Product</code> 에 <code>name</code>, <code>description</code>, <code>sku</code>, <code>brand</code>, <code>offers.price</code>, <code>offers.availability</code> ② <code>@type=Offer</code> 에 <code>price</code>, <code>priceCurrency</code>, <code>availability</code> — <b>둘 다 통과해야 통과</b> (2026-08-31 병합)',
      except: '적용 페이지타입 — <code>pdp</code>. 대체 타입 <code>ProductGroup</code> 인정 — 색상/용량 변형 제품은 실제 정보가 <code>hasVariant</code> 배열에 있으므로 부모+변형을 병합해 후보로 검사 (US 액세서리 12건 오판 방지). Offer 체크는 <code>promotion</code> 에도 적용되지만 해당 타입은 집계에서 제외됨.',
    },
    en: {
      src: 'JSON-LD (two checks merged)',
      logic: '<b>AND merge</b> — ① <code>@type=Product</code> with <code>name</code>, <code>description</code>, <code>sku</code>, <code>brand</code>, <code>offers.price</code>, <code>offers.availability</code> ② <code>@type=Offer</code> with <code>price</code>, <code>priceCurrency</code>, <code>availability</code> — <b>both must pass</b> (merged 2026-08-31)',
      except: 'Applies to <code>pdp</code>. The alternative type <code>ProductGroup</code> is accepted — for colour/size variants the real data lives in the <code>hasVariant</code> array, so parent + variant are merged into candidates (prevents 12 US accessory misjudgements). The Offer check also applies to <code>promotion</code>, but that type is excluded from aggregation.',
    },
  },
  '26': {
    ko: {
      src: 'JSON-LD + 적용 게이트: DOM 본문 콘텐츠 이미지',
      logic: '<code>@type=ImageObject</code> 에 <code>url</code>, <code>name</code>, <code>description</code>, <code>uploadDate</code>',
      except: '게이트 셀렉터 — <code>figure img</code>, <code>article img</code>, <code>picture img</code>, <code>[class*=\'content\'] img</code>, <code>[class*=\'editorial\'] img</code>, <code>[class*=\'gallery\'] img</code>, <code>[class*=\'Product-ImageGrid\'] img</code>, <code>img[src*=\'PDPGalleryThumbnail\']</code>, <code>.cmp-image img</code>. 본문 이미지가 없으면 N/A.',
    },
    en: {
      src: 'JSON-LD + applicability gate: DOM content images',
      logic: '<code>@type=ImageObject</code> with <code>url</code>, <code>name</code>, <code>description</code>, <code>uploadDate</code>',
      except: 'Gate selectors — <code>figure img</code>, <code>article img</code>, <code>picture img</code>, <code>[class*=\'content\'] img</code>, <code>[class*=\'editorial\'] img</code>, <code>[class*=\'gallery\'] img</code>, <code>[class*=\'Product-ImageGrid\'] img</code>, <code>img[src*=\'PDPGalleryThumbnail\']</code>, <code>.cmp-image img</code>. N/A when the page has no content images.',
    },
  },
  '27': {
    ko: {
      src: 'JSON-LD + 적용 게이트: DOM <code>video</code>, <code>iframe[src*=\'youtube\']</code>, <code>iframe[src*=\'youtu.be\']</code>, <code>iframe[src*=\'vimeo\']</code>',
      logic: '<code>@type=VideoObject</code> 에 <code>url</code>, <code>name</code>, <code>description</code>, <code>thumbnailUrl</code>',
      except: '영상이 없는 페이지는 N/A.',
    },
    en: {
      src: 'JSON-LD + applicability gate: DOM <code>video</code>, <code>iframe[src*=\'youtube\']</code>, <code>iframe[src*=\'youtu.be\']</code>, <code>iframe[src*=\'vimeo\']</code>',
      logic: '<code>@type=VideoObject</code> with <code>url</code>, <code>name</code>, <code>description</code>, <code>thumbnailUrl</code>',
      except: 'N/A on pages without video.',
    },
  },
  '28': {
    ko: {
      src: 'JSON-LD + 적용 게이트: DOM 절차 블록',
      logic: '<code>@type=HowTo</code> 에 <code>step</code> 존재',
      except: '적용 페이지타입 — <code>support_troubleshoot</code> 만. 게이트 — <code>ol &gt; li</code>, <code>[class*=\'step\']</code>, <code>[class*=\'con-view\']</code>, <code>[class*=\'procedure\']</code> 개수 <b>≥ 3</b>. 절차 블록이 없으면 N/A.',
    },
    en: {
      src: 'JSON-LD + applicability gate: DOM procedure blocks',
      logic: '<code>@type=HowTo</code> with <code>step</code>',
      except: 'Applies to <code>support_troubleshoot</code> only. Gate — count of <code>ol &gt; li</code>, <code>[class*=\'step\']</code>, <code>[class*=\'con-view\']</code>, <code>[class*=\'procedure\']</code> <b>≥ 3</b>. N/A without procedure blocks.',
    },
  },
  '29': {
    ko: {
      src: 'JSON-LD + 적용 게이트: DOM <code>article</code>, <code>[class*=\'article\']</code>, <code>[class*=\'post-body\']</code>',
      logic: '<code>@type=Article</code> 에 <code>headline</code>, <code>author</code>, <code>publisher</code>, <code>articleBody</code>',
      except: '적용 페이지타입 — <code>experience</code>·<code>buying_guide</code>·<code>microsite</code>. 기사 본문 구조가 없으면 N/A.',
    },
    en: {
      src: 'JSON-LD + applicability gate: DOM <code>article</code>, <code>[class*=\'article\']</code>, <code>[class*=\'post-body\']</code>',
      logic: '<code>@type=Article</code> with <code>headline</code>, <code>author</code>, <code>publisher</code>, <code>articleBody</code>',
      except: 'Applies to <code>experience</code>·<code>buying_guide</code>·<code>microsite</code>. N/A without an article body structure.',
    },
  },
  '32': {
    ko: {
      src: '본문 텍스트(보일러플레이트 제거) + DOM class/id + 헤딩·강조 텍스트 + <code>&lt;details&gt;</code>',
      logic: '세 경로 중 <b>하나라도</b> 충족: ① 질문 문장 경로 — 물음표 문장(<code>[^.!?\\n]{10,200}\\?</code>) ≥ 1개 <b>AND</b> 의문사 포함(문두 what/which/how… 5개 언어 + 한국어·베트남어 꼬리형 <code>나요/까요/습니까</code>·<code>nào/gì</code>) <b>AND</b> 본문에 다국어 문답 키워드(<code>faq</code>, <code>frequently asked</code>, <code>preguntas frecuentes</code>, <code>häufig gestellte fragen</code>, <code>perguntas frequentes</code>, <code>câu hỏi thường gặp</code>, <code>자주 묻는</code> 등) 존재 — 세 조건 AND (2026-09-17 ‘C안’) ② class/id 키워드(<code>faq</code>, <code>q&amp;a</code>, <code>qna</code>, <code>questions</code>, <code>answer</code>, <code>accordion</code>, <code>자주 묻는</code>, <code>질문</code> — <code>div</code>·<code>section</code>·<code>aside</code>·<code>article</code>·<code>details</code>) 또는 헤딩·강조 태그(<code>h1~h6</code>·<code>b</code>·<code>strong</code>·<code>dt</code>·<code>summary</code>·<code>caption</code>·<code>legend</code>, ≤60자) 텍스트에 키워드 ③ <code>&lt;details&gt;</code> ≥ 3개',
      except: '의문사 없는 물음표 문장 제외 — ‘Need Help?’·매체명 ‘Which?’ 오탐 (UK PLP 실측: 물음표 문장 5개 전부 오탐). 하단 피드백 위젯 문구(‘Was this helpful’ 계열 8개 언어) 제외 — 통과분의 77% 가 이 오탐이었음. #35 와 달리 <code>&lt;p&gt;</code> 라벨 스캔은 하지 않음 (‘Have questions?’ 짧은 UI 문구 오탐 방지).',
    },
    en: {
      src: 'Body text (boilerplate stripped) + DOM class/id + heading/emphasis text + <code>&lt;details&gt;</code>',
      logic: 'Pass when <b>any</b> of three paths holds: ① question-sentence path — ≥ 1 question sentence (<code>[^.!?\\n]{10,200}\\?</code>) <b>AND</b> an interrogative (sentence-initial what/which/how… in 5 languages, plus Korean/Vietnamese tail forms) <b>AND</b> a multilingual Q&amp;A keyword in the body (<code>faq</code>, <code>frequently asked</code>, <code>preguntas frecuentes</code>, <code>häufig gestellte fragen</code>, <code>perguntas frequentes</code>, <code>câu hỏi thường gặp</code>, …) — all three ANDed (decision 2026-09-17) ② class/id keywords (<code>faq</code>, <code>q&amp;a</code>, <code>qna</code>, <code>questions</code>, <code>answer</code>, <code>accordion</code>, … on <code>div</code>·<code>section</code>·<code>aside</code>·<code>article</code>·<code>details</code>) or the keyword in heading/emphasis text (<code>h1–h6</code>·<code>b</code>·<code>strong</code>·<code>dt</code>·<code>summary</code>·<code>caption</code>·<code>legend</code>, ≤60 chars) ③ ≥ 3 <code>&lt;details&gt;</code> elements',
      except: 'Question sentences without an interrogative are excluded — ‘Need Help?’ and the publication name ‘Which?’ were false positives (UK PLP: all 5 question-mark sentences were noise). Bottom feedback-widget phrases (‘Was this helpful’ family, 8 languages) excluded — they were 77% of passes. Unlike #35, <code>&lt;p&gt;</code> labels are not scanned (avoids short UI copy like ‘Have questions?’).',
    },
  },
  '33': {
    ko: {
      src: 'DOM <code>dfn</code>·<code>abbr</code> + 본문 텍스트(보일러플레이트 제거)',
      logic: '<code>dfn</code>/<code>abbr</code> 개수 + 다국어 정의문 패턴 매칭 <b>합계 ≥ 1</b>. 패턴 — 한국어(<code>X는/이란 …이다/입니다/를 말한다/의미한다/가리킨다/약자이다</code>), 영어(<code>X is/refers to/means/stands for/is defined as/also known as/is short for/consists of</code>), 스페인어(<code>se define como/se conoce como/consiste en</code>), 독일어(<code>wird als … bezeichnet/steht für/besteht aus</code>), 포르투갈어(<code>é um tipo de/consiste em/trata-se de</code>), 베트남어(<code>được gọi là/viết tắt của</code>), 약어 정의 <code>[A-Z]{2,6} (Full Name)</code>, 질문형 <code>What is X?</code>',
      except: '계사 기본형(<code>ist ein</code>/<code>es la</code>/<code>é a</code>)은 2026-09-19 제거 — ‘Im letzten Zimmer ist ein’ 같은 일반 문장을 정의문으로 오탐.',
    },
    en: {
      src: 'DOM <code>dfn</code>·<code>abbr</code> + body text (boilerplate stripped)',
      logic: '<code>dfn</code>/<code>abbr</code> count + multilingual definition-pattern matches <b>total ≥ 1</b>. Patterns — Korean topic-marker forms, English (<code>X is/refers to/means/stands for/is defined as/also known as/is short for/consists of</code>), Spanish (<code>se define como/se conoce como/consiste en</code>), German (<code>wird als … bezeichnet/steht für/besteht aus</code>), Portuguese (<code>é um tipo de/consiste em/trata-se de</code>), Vietnamese (<code>được gọi là/viết tắt của</code>), acronym definitions <code>[A-Z]{2,6} (Full Name)</code>, and the question form <code>What is X?</code>',
      except: 'Bare copula forms (<code>ist ein</code>/<code>es la</code>/<code>é a</code>) were removed 2026-09-19 — they matched ordinary sentences like ‘Im letzten Zimmer ist ein’ as definitions.',
    },
  },
  '34': {
    ko: {
      src: 'JSON-LD 전체 노드 (@type 무관 트리 탐색)',
      logic: '<code>author</code> 필드 존재 <b>또는</b> <code>datePublished</code> + (<code>publisher</code> | <code>sourceOrganization</code> | <code>source</code>) 조합',
      except: '적용 페이지타입 — <code>newsroom</code>·<code>press_media</code> (상류 scoring_config 기준; 구포맷 스냅샷 보정 게이트는 <code>buying_guide</code>·<code>lg_experience</code> 포함). byline 은 에디토리얼에만 성립하는 개념이라 그 외 타입은 N/A. JSON-LD 노드가 아예 없으면 FAIL.',
    },
    en: {
      src: 'All JSON-LD nodes (tree walk regardless of @type)',
      logic: 'An <code>author</code> field <b>or</b> the combination <code>datePublished</code> + (<code>publisher</code> | <code>sourceOrganization</code> | <code>source</code>)',
      except: 'Applies to <code>newsroom</code>·<code>press_media</code> (per upstream scoring_config; the old-format compatibility gate also covers <code>buying_guide</code>·<code>lg_experience</code>). A byline only makes sense on editorial content, so other types are N/A. FAIL when the page has no JSON-LD nodes at all.',
    },
  },
  '35': {
    ko: {
      src: 'DOM — 요약 블록 셀렉터 + 라벨 텍스트',
      logic: '두 경로 중 <b>하나라도</b> 충족: ① 요약 블록 — <code>p.info-desc</code>, <code>p.description</code>, <code>div.c-floating-features</code> 중 텍스트 <b>≥ 80자</b> · 줄수 ≥ 1(<code>&lt;br&gt;</code> 수 또는 문장 수) ② 라벨 — 헤딩·강조 태그(<code>h1~h6</code>·<code>b</code>·<code>strong</code>·<code>dt</code>·<code>summary</code>·<code>caption</code>·<code>legend</code>) + <code>&lt;p&gt;</code>(#35 전용 옵트인) 의 ≤60자 텍스트에 키워드 <code>summary</code>, <code>overview</code>, <code>tldr</code>, <code>abstract</code>, <code>key takeaway(s)</code>, <code>at a glance</code>, <code>highlights</code>, <code>key features</code>, <code>news summary</code>, <code>요약</code>, <code>핵심</code>, <code>한눈에</code>, <code>개요</code>, <code>resumen</code>, <code>zusammenfassung</code>, <code>resumo</code>, <code>tóm tắt</code> 등',
      except: 'class/id 매칭은 <b>비활성</b>(<code>match_class: no</code>) — ‘summary’ 클래스가 스펙 테이블·가격 요약에도 붙어 PDP 97.1% 오탐. <code>idt</code> 클래스 블록 제외(‘➔ Setting for…’ 단계 라벨). 80자 미만 제외(‘Step 1. Preheating…’ 오탐). <code>&lt;p&gt;</code> 라벨 스캔은 US PDP(React/MUI)의 <code>Key features</code> 라벨 대응 (2026-09-20).',
    },
    en: {
      src: 'DOM — summary-block selectors + label text',
      logic: 'Pass when <b>either</b> path holds: ① summary block — one of <code>p.info-desc</code>, <code>p.description</code>, <code>div.c-floating-features</code> with text <b>≥ 80 chars</b> and ≥ 1 line (<code>&lt;br&gt;</code> count or sentence count) ② label — keyword in ≤60-char text of heading/emphasis tags (<code>h1–h6</code>·<code>b</code>·<code>strong</code>·<code>dt</code>·<code>summary</code>·<code>caption</code>·<code>legend</code>) plus <code>&lt;p&gt;</code> (opt-in for #35 only): <code>summary</code>, <code>overview</code>, <code>tldr</code>, <code>abstract</code>, <code>key takeaway(s)</code>, <code>at a glance</code>, <code>highlights</code>, <code>key features</code>, <code>news summary</code>, <code>resumen</code>, <code>zusammenfassung</code>, <code>resumo</code>, <code>tóm tắt</code>, …',
      except: 'Class/id matching is <b>disabled</b> (<code>match_class: no</code>) — ‘summary’ classes also decorate spec tables and price summaries (97.1% false-pass on PDPs). Blocks with class <code>idt</code> excluded (step labels like ‘➔ Setting for…’). Under 80 chars excluded (‘Step 1. Preheating…’). The <code>&lt;p&gt;</code> label scan handles the US PDP (React/MUI) <code>Key features</code> label (2026-09-20).',
    },
  },
  '36': {
    ko: {
      src: '본문 텍스트 — 보일러플레이트(GNB·푸터·쿠키)와 HTML 주석 제거 후 문장 단위 분리(<code>(?&lt;=[.!?。\\n])\\s+</code>, 6자 미만 제외)',
      logic: '24개+ 패턴군 중 하나라도 매칭되는 문장 <b>≥ 5개</b> (비율→개수 기준 변경 2026-09-17). 패턴군 — 퍼센트 · 통화(<code>[$€£¥₩]</code>) · 연도 · 큰 수(천단위 구분/4자리+) · 배수(<code>2x/times/veces/lần</code>) · million/billion 계열 · 물리·전기·디스플레이 단위(<code>kg…BTU</code>, 인치 <code>34"</code>) · 출처(<code>according to/según/laut/theo</code>) · 순위·최초(<code>world’s first/No.1/top N</code>) · 해상도·화면비 · 평점 · 용량·규격(<code>cu.ft/mAh/Mbps</code>) · 기간·보증 · 인증·표준(<code>ISO/ENERGY STAR/Dolby/FreeSync/HDMI</code>) · 비교·증감+숫자 · 수상(<code>CES/Red Dot/EISA</code>) · E-E-A-T 4패턴(실측·시험 <code>tested by/independently verified</code>, 특허 <code>patented</code>, 전문가·연구 <code>recommended by experts/research shows</code>, 임상 <code>clinically proven</code> — 2026-09-20 추가)',
      except: '노이즈 문장 제외 — copyright 표기, PayPal/Klarna 할부 안내(<code>0% Finanzierung</code> 이 여러 패턴에 동시 매칭돼 페이지당 수십 건 오탐), 약관, 쿠키·개인정보 정책. LG 자사 기술명(ThinQ 등)은 전 페이지에 있어 변별력이 없으므로 인증 패턴에 미등재. 임계값 10개도 검토했으나 낙폭이 커(뉴스룸 92→47%) 5개로 확정.',
    },
    en: {
      src: 'Body text — sentences split after stripping boilerplate (GNB/footer/cookie) and HTML comments (<code>(?&lt;=[.!?。\\n])\\s+</code>, sentences under 6 chars dropped)',
      logic: '<b>≥ 5</b> sentences matching any of 24+ pattern groups (ratio→count change, 2026-09-17). Groups — percentages · currency (<code>[$€£¥₩]</code>) · years · large numbers · multiples (<code>2x/times/veces/lần</code>) · million/billion family · physical/electrical/display units (<code>kg…BTU</code>, inches <code>34"</code>) · attribution (<code>according to/según/laut/theo</code>) · rank/first (<code>world’s first/No.1/top N</code>) · resolutions/aspect ratios · ratings · capacity units (<code>cu.ft/mAh/Mbps</code>) · durations/warranty · certifications/standards (<code>ISO/ENERGY STAR/Dolby/FreeSync/HDMI</code>) · comparison + number · awards (<code>CES/Red Dot/EISA</code>) · four E-E-A-T patterns (testing <code>tested by/independently verified</code>, patents <code>patented</code>, expert/research <code>recommended by experts/research shows</code>, clinical <code>clinically proven</code> — added 2026-09-20)',
      except: 'Noise sentences excluded — copyright lines, PayPal/Klarna financing copy (<code>0% Finanzierung</code> matched several patterns at once, dozens of false hits per page), terms, cookie/privacy policy. LG’s own tech names (ThinQ etc.) are on every page and carry no signal, so they are not in the certification pattern. A threshold of 10 was considered but dropped too far (newsroom 92→47%), fixed at 5.',
    },
  },
  '37': {
    ko: {
      src: '원본 HTML 텍스트 vs Playwright 렌더 후 텍스트 (별도 CSR 측정 파이프라인)',
      logic: 'SSR 텍스트 비율 <b>≥ 60%</b> (<code>원본 텍스트 / 렌더 후 텍스트</code>)',
      except: '측정 불가(Playwright 미설치·차단) 시 FAIL 처리하고 사유를 판정 근거에 남김.',
    },
    en: {
      src: 'Raw HTML text vs text after Playwright rendering (separate CSR measurement pipeline)',
      logic: 'SSR text ratio <b>≥ 60%</b> (<code>raw text / rendered text</code>)',
      except: 'When measurement is impossible (Playwright missing/blocked) the item FAILs with the reason recorded.',
    },
  },
  '38': {
    ko: {
      src: 'DOM (원본 HTML — SSR 기준)',
      logic: '셀렉터 <code>img[src*=\'PDPGalleryThumbnail\']</code>, <code>[class*=\'Product-ImageGrid\'] img</code>, <code>.c-summary-gallery img</code>, <code>.c-gallery img</code>, <code>.swiper-wrapper .swiper-slide img</code> 매칭 <b>≥ 3개</b>',
      except: '적용 페이지타입 — <code>pdp</code> 만. 그 외는 N/A.',
    },
    en: {
      src: 'DOM (raw HTML — SSR basis)',
      logic: '<b>≥ 3</b> matches of <code>img[src*=\'PDPGalleryThumbnail\']</code>, <code>[class*=\'Product-ImageGrid\'] img</code>, <code>.c-summary-gallery img</code>, <code>.c-gallery img</code>, <code>.swiper-wrapper .swiper-slide img</code>',
      except: 'Applies to <code>pdp</code> only; N/A elsewhere.',
    },
  },
  '39': {
    ko: {
      src: 'DOM + JSON-LD 원문 + raw HTML(<code>__NEXT_DATA__</code> 등 임베디드 JSON)',
      logic: '5개 영역 각각 <b>DOM 셀렉터 OR JSON-LD 토큰 OR raw 토큰</b> 중 하나라도 있으면 SSR 인정 — <b>3개 영역 이상</b> 충족 시 통과. ① 제품명: <code>h1.cmp-text</code>, <code>h1</code>, <code>[class*=\'Product-MainTitle\']</code> / <code>"name"</code> / <code>"productname"</code>·<code>"modelname"</code> ② 가격: <code>[class*=\'Product-Price\']</code>, <code>[class*=\'price-area\']</code>, <code>.info-sticky--price</code> / <code>pricecurrency</code>·<code>"price"</code>·<code>pricespecification</code> / <code>"offers"</code> ③ 갤러리: <code>img[src*=\'PDPGalleryThumbnail\']</code>, <code>[class*=\'Product-ImageGrid\']</code>, <code>.c-summary-gallery</code>, <code>.c-gallery</code> / <code>"image"</code> / <code>pdpgallerythumbnail</code> ④ 사양: <code>[class*=\'Product-KeyFeatures\']</code>, <code>.c-specs-summary</code>, <code>.c-all-specs-area</code>, <code>.c-specs-dimensions</code> / <code>additionalproperty</code> / <code>"specification"</code>·<code>"keyfeature"</code> ⑤ 리뷰: <code>[data-bv-show]</code>, <code>[class*=\'review\']</code>, <code>[class*=\'rating\']</code> / <code>aggregaterating</code>·<code>"review"</code> / <code>data-bv-show</code>·<code>rating_summary</code>·<code>"reviewcount"</code>',
      except: '적용 페이지타입 — <code>pdp</code>. US(React) PDP 는 DOM 위젯이 CSR 이어도 데이터가 JSON-LD/<code>__NEXT_DATA__</code> 에 SSR 로 존재하면 해당 영역 SSR 로 인정.',
    },
    en: {
      src: 'DOM + JSON-LD source + raw HTML (embedded JSON such as <code>__NEXT_DATA__</code>)',
      logic: 'Each of 5 areas counts as SSR when <b>any of DOM selector OR JSON-LD token OR raw token</b> is present — pass with <b>≥ 3 areas</b>. ① product name: <code>h1.cmp-text</code>, <code>h1</code>, <code>[class*=\'Product-MainTitle\']</code> / <code>"name"</code> / <code>"productname"</code>·<code>"modelname"</code> ② price: <code>[class*=\'Product-Price\']</code>, <code>[class*=\'price-area\']</code>, <code>.info-sticky--price</code> / <code>pricecurrency</code>·<code>"price"</code>·<code>pricespecification</code> / <code>"offers"</code> ③ gallery: <code>img[src*=\'PDPGalleryThumbnail\']</code>, <code>[class*=\'Product-ImageGrid\']</code>, <code>.c-summary-gallery</code>, <code>.c-gallery</code> / <code>"image"</code> / <code>pdpgallerythumbnail</code> ④ specs: <code>[class*=\'Product-KeyFeatures\']</code>, <code>.c-specs-summary</code>, <code>.c-all-specs-area</code>, <code>.c-specs-dimensions</code> / <code>additionalproperty</code> / <code>"specification"</code>·<code>"keyfeature"</code> ⑤ reviews: <code>[data-bv-show]</code>, <code>[class*=\'review\']</code>, <code>[class*=\'rating\']</code> / <code>aggregaterating</code>·<code>"review"</code> / <code>data-bv-show</code>·<code>rating_summary</code>·<code>"reviewcount"</code>',
      except: 'Applies to <code>pdp</code>. On US (React) PDPs an area counts as SSR when the data exists in JSON-LD/<code>__NEXT_DATA__</code> even though the DOM widget is CSR.',
    },
  },
  '40': {
    ko: {
      src: 'DOM — <code>img</code> 의 <code>src</code>/<code>data-src</code> 파일명 (쿼리스트링 제거, 경로 마지막 세그먼트)',
      logic: '브랜드·제품 키워드(<code>lg</code>, <code>oled</code>, <code>qned</code>, <code>nanocell</code>, <code>gram</code>, <code>thinq</code>, <code>refrigerator</code>, <code>washer</code>, <code>cinebeam</code> 등 40여 개) 포함 파일명 비율 <b>≥ 30%</b>',
      except: 'UI 자산 제외 — 파일명에 <code>logo</code>, <code>icon</code>, <code>ico-</code>, <code>sprite</code>, <code>placeholder</code>, <code>blank</code>, <code>spacer</code>, <code>dummy</code> 포함 시 분모에서 제외 (로고가 페이지마다 수십 번 반복 삽입돼 PDP 일수록 비율이 떨어지는 역전 회귀 — 2026-09-18 수정). 콘텐츠 이미지가 0개면 FAIL.',
    },
    en: {
      src: 'DOM — filenames from <code>img</code> <code>src</code>/<code>data-src</code> (query string removed, last path segment)',
      logic: '<b>≥ 30%</b> of filenames contain a brand/product keyword (<code>lg</code>, <code>oled</code>, <code>qned</code>, <code>nanocell</code>, <code>gram</code>, <code>thinq</code>, <code>refrigerator</code>, <code>washer</code>, <code>cinebeam</code>, … ≈ 40 keywords)',
      except: 'UI assets excluded — filenames containing <code>logo</code>, <code>icon</code>, <code>ico-</code>, <code>sprite</code>, <code>placeholder</code>, <code>blank</code>, <code>spacer</code>, <code>dummy</code> leave the denominator (the repeated logo made ratios drop on image-rich PDPs — fixed 2026-09-18). FAIL when there are no content images.',
    },
  },
  '41': {
    ko: {
      src: 'HTTP 응답 상태 코드',
      logic: '<code>== 200</code>',
      except: '없음.',
    },
    en: {
      src: 'HTTP response status code',
      logic: '<code>== 200</code>',
      except: 'None.',
    },
  },
  '42': {
    ko: {
      src: '본문 텍스트 (보일러플레이트 제거)',
      logic: 'HTTP 200 인데 본문에 8개 언어 404 문구(<code>page not found</code>, <code>페이지를 찾을 수 없</code>, <code>página no encontrada</code>, <code>Seite nicht gefunden</code>, <code>página não encontrada</code>, <code>không tìm thấy trang</code> 등) 매칭 시 FAIL. 문구가 없어도 본문 <b>&lt; 200자</b>면 내용 없는 200 응답으로 FAIL',
      except: '비-200 응답은 검증 대상 아님(자동 통과 — #41 이 별도로 잡음). 길이만으로는 판정하지 않음 — LG 404 페이지는 추천 제품·검색창이 붙어 보일러플레이트 제거 후에도 2,400~3,200자 (2026-09-17 실측). 문구 판정이 정본(‘B안’).',
    },
    en: {
      src: 'Body text (boilerplate stripped)',
      logic: 'FAIL when an HTTP 200 body matches a 404 phrase in 8 languages (<code>page not found</code>, <code>página no encontrada</code>, <code>Seite nicht gefunden</code>, <code>página não encontrada</code>, <code>không tìm thấy trang</code>, …). Even without a phrase, a body <b>&lt; 200 chars</b> FAILs as an empty 200 shell',
      except: 'Non-200 responses are out of scope (auto pass — #41 catches them separately). Length alone is never the judge — LG’s 404 pages carry recommended products and a search box, 2,400–3,200 chars even after stripping (measured 2026-09-17). Phrase detection is the source of truth.',
    },
  },
  '43': {
    ko: {
      src: '외부 요청 — <code>{origin}/llms.txt</code> (도메인 단위 캐시, 전용 UA)',
      logic: 'HTTP 200 <b>AND</b> 본문(앞 20KB)이 HTML 이 아니고 <code>‘# ’</code>·<code>‘## ’</code>·<code>‘http’</code> 중 하나 포함',
      except: 'soft 404 방어 — LG 는 없는 경로에도 200 + HTML 을 반환하므로 상태코드만으로 판정 금지 (2026-09-17 실측: 상태코드만 보면 전원 통과 오탐). Content-Type 이 HTML 이거나 본문이 <code>&lt;!doctype</code>/<code>&lt;html</code> 로 시작하면 FAIL.',
    },
    en: {
      src: 'External request — <code>{origin}/llms.txt</code> (cached per domain, dedicated UA)',
      logic: 'HTTP 200 <b>AND</b> the body (first 20KB) is not HTML and contains one of <code>‘# ’</code>·<code>‘## ’</code>·<code>‘http’</code>',
      except: 'Soft-404 defence — LG serves 200 + HTML even for missing paths, so the status code alone must never decide (measured 2026-09-17: status-only passed everything). FAIL when the Content-Type is HTML or the body starts with <code>&lt;!doctype</code>/<code>&lt;html</code>.',
    },
  },
}

export const CRITERIA_DETAIL = D

export function criteriaDetail(no, lang) {
  const d = D[String(no)]
  if (!d) return null
  return lang === 'en' ? d.en : d.ko
}
