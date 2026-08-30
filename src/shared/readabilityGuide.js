// Readability 개선 가이드 single source — 검수 기준(체크) × 콘텐츠 타입(페이지타입).
//
// 대시보드가 국가·페이지타입 필터에 맞춰 "이게 뭔지 → 왜 중요한지 → 어디를 고치는지" 를 뽑아 쓴다.
// 전문 용어 대신 담당자가 바로 알아듣는 말로 쓴다 (사용자 지시 2026-08-30).
//
// ⚠ 모든 문구는 L(ko, en) 로 KO/EN 을 나란히 적는다.
//    별도 EN 파일을 두면 한쪽만 고쳐져 어긋난다 — 이 저장소에서 반복된 회귀라 구조로 막는다.
//    한 줄을 추가하면 EN 자리가 바로 옆에 비어 보이므로 빠뜨리기 어렵다.
//
// 구조
//   CATEGORY_GUIDE[cat] = { what }   6개 평가 영역이 각각 무엇을 보는지
//   GUIDE[checkId] = { what, why, where, action, pin?, byPt?, byCc?, notes? }
//     what   — 점검 내용: 이 항목이 무엇을 보는지 (한 줄, 쉬운 말)
//     why    — 리스크: 미달일 때 생기는 일 (한 줄)
//     where  — 담당 영역: 어디를 손봐야 하는지 (템플릿·시스템·조직)
//     action — 조치 사항: 무엇을 하면 되는지 (한 줄, 명령형)
//     pin    — true 면 통과율과 무관하게 '시급 개선 항목' 목록 맨 위로 고정.
//     byPt   — 페이지타입마다 다를 때만 { where, action } 덮어쓰기
//     byCc   — 국가(사이트)마다 다를 때만 { where, action } 덮어쓰기
//     notes  — 특정 필터에서만 보여줄 문장 { cc / ccNot / pt, text }
//
// 적용 순서: base → byCc → byPt (뒤가 이김). notes 는 조건에 맞는 것만 추가 노출.
//
// ⚠ 실측 수치(%)를 문구에 넣지 않는다 — 데이터가 갱신될 때마다 어긋난다.
//    현재 통과율·순위·벤치마크는 대시보드가 스냅샷에서 계산해 '현재 위치' 줄로 보여준다.
//
// 용어 원칙 (사용자 지시 2026-08-30)
//   구조화 데이터 → '라벨'  ·  CSR → '나중에 불러오는 방식'
//   SSR/초기 HTML → '원본 소스'. 각 항목의 '점검 내용' 줄에서 한 번만
//   '원본 소스(Server-Side Rendering)' 로 영문 병기하고, 이후로는 짧은 형태를 쓴다.
//   CMS 필드 → '각 페이지별 Meta 태그 영역'
//   JavaScript · 렌더링 · 리소스 같은 개발 용어는 쓰지 않는다.

// KO/EN 한 쌍
const L = (ko, en) => ({ ko, en })
// 언어 선택 — 문자열이면 그대로(구버전 호환), 쌍이면 해당 언어
export function pick(v, lang) {
  if (v == null) return v
  if (typeof v === 'string') return v
  return v[lang === 'en' ? 'en' : 'ko'] ?? v.ko
}

export const PT_LABEL = {
  pdp: L('제품 상세 (PDP)', 'Product Detail (PDP)'),
  plp: L('제품 카테고리 (PLP)', 'Product Category (PLP)'),
  support: L('Support - 일반', 'Support - General'),
  support_troubleshoot: L('Support - Troubleshoot', 'Support - Troubleshoot'),
  press_media: L('Press & Media', 'Press & Media'),
  newsroom: L('Global Newsroom', 'Global Newsroom'),
  buying_guide: L('구매 가이드', 'Buying Guide'),
  lg_experience: L('LG Experience', 'LG Experience'),
  microsite: L('Microsite', 'Microsite'),
}

// 6개 평가 영역 — 뉴스레터 '평가 내용' 문구와 동일 (emailTemplate.RD_CAT_DESC 와 일치 필수)
export const CATEGORY_GUIDE = {
  performance:   { what: L('페이지의 정보를 빠르고 안정적으로 전달하는지', 'Whether page information is delivered quickly and reliably') },
  accessibility: { what: L('사람과 AI가 문서 구조를 읽어낼 수 있는지', 'Whether people and AI can read the document structure') },
  seo:           { what: L('페이지 제목과 설명 등 기본 정보가 잘 갖춰져 있는지', 'Whether the basics — page title and description — are in place') },
  geo_schema:    { what: L('제품·이미지·영상·사용방법 등 정보의 종류를 AI가 구분할 수 있는지', 'Whether AI can tell what kind of information it is — product, image, video, how-to') },
  geo_content:   { what: L('AI가 답변에 인용하기 좋은 형태로 콘텐츠가 작성되어 있는지', 'Whether content is written in a form AI can quote in answers') },
  geo_platform:  { what: L('AI 크롤러가 원문을 실제로 가져갈 수 있는지', 'Whether AI crawlers can actually retrieve the source') },
}

export const GUIDE = {
  // ── 사이트 성능 ────────────────────────────────────────────────────────────
  perf_ttfb: {
    what: L('서버가 처음 반응하기까지 600ms 안에 걸리는지 봅니다.', 'Whether the server starts responding within 600ms.'),
    why: L('응답이 느리면 AI 크롤러가 수집을 포기하거나 방문 횟수를 줄입니다.', 'Slow responses make AI crawlers give up or visit less often.'),
    where: L('CDN 설정 · 원본 서버', 'CDN settings · origin server'),
    action: L('CDN 캐시 적중률을 올려 원본 서버까지 가는 요청을 줄입니다.', 'Raise the CDN cache hit rate so fewer requests reach the origin server.'),
    byPt: { pdp: { where: L('CDN 설정 (PDP 경로)', 'CDN settings (PDP paths)'), action: L('트래픽이 가장 많은 구간입니다. PDP를 원본이 아닌 CDN 엣지에서 내보내도록 캐시 규칙을 잡습니다.', 'This is the highest-traffic area. Set cache rules so PDPs are served from the CDN edge rather than the origin.') } },
  },
  perf_compression: {
    what: L('HTML을 압축해서 보내는지 봅니다.', 'Whether HTML is sent compressed.'),
    why: L('압축이 없으면 전송량이 커져 수집이 느려지고 중간에 끊기기도 합니다.', 'Without compression the payload grows, slowing collection and sometimes cutting it off.'),
    where: L('웹서버 · CDN 설정', 'Web server · CDN settings'),
    action: L('HTML 응답에 gzip 또는 brotli 압축을 켭니다.', 'Enable gzip or brotli compression on HTML responses.'),
  },
  perf_http_protocol: {
    what: L('최신 통신 방식으로 서비스하는지 봅니다.', 'Whether the site is served over a modern protocol.'),
    why: L('구형 방식은 한 번에 처리할 수 있는 양이 적어 대량 수집이 느려집니다.', 'Older protocols handle fewer parallel requests, slowing bulk collection.'),
    where: L('CDN 설정', 'CDN settings'),
    action: L('CDN에서 HTTP/2 이상을 켭니다.', 'Enable HTTP/2 or later on the CDN.'),
  },
  perf_cache_control: {
    what: L('"이 페이지를 얼마나 보관해도 되는지" 를 응답에 적어 보내는지 봅니다.', 'Whether the response states how long the page may be cached.'),
    why: L('보관 규칙이 없으면 AI가 다시 올 때마다 원본 서버를 그대로 때려 수집이 느려집니다.', 'Without a caching rule every revisit hits the origin server directly, slowing collection.'),
    where: L('웹서버 · CDN 응답 헤더', 'Web server · CDN response headers'),
    action: L('Cache-Control 헤더에 max-age 값을 적습니다. 값이 0이어도 규칙을 적어두는 것 자체가 필요합니다.', 'Set a max-age value in the Cache-Control header. Even 0 counts — the point is that a policy is declared.'),
  },
  perf_redirect: {
    what: L('주소를 갈아타는 횟수가 1회 이하인지 봅니다.', 'Whether the URL redirects at most once.'),
    why: L('주소가 여러 번 바뀌면 AI가 중간에 따라가기를 멈출 수 있습니다.', 'With multiple hops AI may stop following partway.'),
    where: L('사이트맵 · 내부 링크 · 리다이렉트 규칙', 'Sitemap · internal links · redirect rules'),
    action: L('사이트맵과 내부 링크의 주소를 최종 주소로 바꿔 갈아타기를 없앱니다.', 'Point sitemap and internal links at the final URL so the hop disappears.'),
  },
  perf_mixed_content: {
    what: L('보안 페이지에 비보안 이미지·파일이 섞여 있는지 봅니다.', 'Whether a secure page mixes in non-secure images or files.'),
    why: L('해당 파일이 차단되어 콘텐츠 일부가 아예 수집되지 않습니다.', 'Those files get blocked, so part of the content is never collected.'),
    where: L('페이지 템플릿의 이미지·파일 주소', 'Image and file URLs in the page template'),
    action: L('섞여 있는 비보안 주소를 보안 주소로 바꿉니다.', 'Switch the non-secure URLs to secure ones.'),
  },

  // ── 웹접근성 ──────────────────────────────────────────────────────────────
  a11y_image_alt: {
    what: L('이미지에 설명 문구(alt)가 붙어 있는지 봅니다.', 'Whether images carry descriptive alt text.'),
    why: L('AI는 이미지를 직접 못 봅니다. 설명이 없으면 그 이미지의 내용은 없는 것과 같습니다.', 'AI cannot see images. Without a description the image content effectively does not exist.'),
    where: L('각 페이지별 이미지 설정 영역', 'Per-page image settings'),
    action: L('의미 있는 이미지에 설명을 채웁니다. 꾸밈용 이미지는 빈 값으로 명시합니다.', 'Fill in descriptions for meaningful images; mark decorative ones with an empty value.'),
    byPt: {
      pdp: { where: L('PDP 이미지 설정 영역', 'PDP image settings'), action: L('이미지 설명에 "모델명 + 핵심 특징" 을 넣어 AI가 어떤 제품인지 알아보게 합니다.', 'Put "model name + key feature" in the description so AI can identify the product.') },
      press_media: { where: L('보도자료 이미지 설정 영역', 'Press release image settings'), action: L('사진 설명에 인물·장소·행사명을 넣어 인용할 때 근거가 되게 합니다.', 'Name the people, place, and event in the caption so it can serve as a citation source.') },
    },
  },
  a11y_semantic: {
    what: L('본문·메뉴·꼬리말이 서로 구분되게 짜여 있는지 봅니다.', 'Whether body, navigation, and footer are structurally distinguishable.'),
    why: L('구분이 없으면 AI가 메뉴나 배너를 본문으로 착각해 잘못 인용합니다.', 'Without that separation AI mistakes menus or banners for body text and quotes the wrong thing.'),
    where: L('페이지 공통 템플릿', 'Shared page template'),
    action: L('머리말·메뉴·본문·꼬리말 영역을 구분해 표시합니다.', 'Mark up header, navigation, main content, and footer as distinct regions.'),
  },
  a11y_heading_hier: {
    what: L('제목이 큰 제목 → 중간 제목 → 작은 제목 순서로 짜여 있는지 봅니다.', 'Whether headings run in order from top level down without skipping.'),
    why: L('순서가 어긋나면 AI가 한 주제의 시작과 끝을 잘못 잡아 문단을 엉뚱하게 잘라 인용합니다.', 'Out-of-order headings make AI misjudge where a topic starts and ends, so it quotes the wrong passage.'),
    where: L('페이지 템플릿의 제목 태그', 'Heading tags in the page template'),
    action: L('제목 단계를 건너뛰지 않게 정리하고, 글씨를 크게 하려고 제목 태그를 쓰는 것을 막습니다.', 'Stop skipping heading levels, and stop using heading tags purely to enlarge text.'),
    byPt: {
      pdp: { where: L('PDP 템플릿', 'PDP template'), action: L('스펙·리뷰·FAQ 각 구역의 제목 단계를 템플릿에서 고정합니다.', 'Fix the heading level for each section — specs, reviews, FAQ — in the template.') },
      support_troubleshoot: { where: L('트러블슈팅 문서 템플릿', 'Troubleshooting document template'), action: L('증상 → 원인 → 해결 순서를 제목 단계로 나눠 단계별로 인용될 수 있게 합니다.', 'Split symptom → cause → fix into heading levels so each step can be quoted on its own.') },
      newsroom: { where: L('기사 발행 템플릿', 'Article publishing template'), action: L('기사 제목만 가장 큰 단계로 두고 본문 소제목은 그 아래 단계로 고정합니다.', 'Keep only the article title at the top level and fix subheadings one level below.') },
      press_media: { where: L('보도자료 발행 템플릿', 'Press release publishing template'), action: L('제목과 소제목 단계를 발행 템플릿에 고정합니다.', 'Fix the title and subheading levels in the publishing template.') },
    },
  },
  a11y_aria_labels: {
    what: L('아이콘 버튼 같은 요소에 용도 설명이 붙어 있는지 봅니다.', 'Whether icon-only controls carry a description of their purpose.'),
    why: L('설명이 없으면 그 버튼이 무엇을 하는지 AI가 알 수 없습니다.', 'Without it AI cannot tell what the control does.'),
    where: L('공통 화면 요소', 'Shared UI components'),
    action: L('아이콘 버튼·탭·접기 메뉴에 용도 설명을 붙입니다.', 'Add purpose labels to icon buttons, tabs, and collapsible menus.'),
  },

  // ── Basic SEO ────────────────────────────────────────────────────────────
  seo_title: {
    what: L('페이지 제목(브라우저 탭에 뜨는 글자)이 있는지 봅니다.', 'Whether the page has a title (the text shown on the browser tab).'),
    why: L('AI가 페이지 주제를 판단할 때 가장 먼저 보는 정보입니다.', 'It is the first signal AI uses to judge what the page is about.'),
    where: L('각 페이지별 Meta 태그 영역', 'Per-page meta tag area'),
    action: L('페이지마다 서로 다른 제목을 넣습니다 (60자 안팎).', 'Give every page its own distinct title (around 60 characters).'),
  },
  seo_meta_desc: {
    what: L('페이지 요약문(검색 결과에 뜨는 두세 줄)이 있는지 봅니다.', 'Whether the page has a summary (the two or three lines shown in search results).'),
    why: L('AI 답변의 요약 문장으로 이 글이 그대로 쓰이는 경우가 많습니다.', 'AI answers often reuse this text verbatim as the summary sentence.'),
    where: L('각 페이지별 Meta 태그 영역', 'Per-page meta tag area'),
    action: L('페이지 핵심을 담은 요약문을 채웁니다 (120~160자).', 'Write a summary that captures the page’s core point (120–160 characters).'),
    byPt: {
      newsroom: { where: L('기사 발행 시스템', 'Article publishing system'), action: L('기사 첫 문단을 요약문으로 자동으로 채우게 설정합니다.', 'Auto-fill the summary from the article’s opening paragraph.') },
      press_media: { where: L('보도자료 발행 시스템', 'Press release publishing system'), action: L('보도자료 첫 문단을 요약문으로 자동 생성하게 합니다.', 'Auto-generate the summary from the release’s opening paragraph.') },
      pdp: { where: L('PDP 요약문 자동 생성 규칙', 'PDP summary generation rule'), action: L('모델명과 핵심 스펙 2~3개를 조합해 자동 생성합니다. 카테고리 공통 문구를 돌려쓰지 않습니다.', 'Generate from the model name plus two or three key specs. Do not reuse a shared category blurb.') },
    },
  },
  seo_canonical: {
    what: L('"이 페이지의 정식 주소는 이것" 이라는 표시가 있는지 봅니다.', 'Whether the page declares its canonical URL.'),
    why: L('표시가 없으면 주소가 여러 개로 갈려 인용이 분산되고 어느 게 정본인지 흐려집니다.', 'Without it the same page splits across URLs, scattering citations and blurring which one is authoritative.'),
    where: L('각 페이지별 Meta 태그 영역', 'Per-page meta tag area'),
    action: L('각 페이지에 자기 자신을 가리키는 정식 주소 표시를 넣습니다.', 'Add a self-referencing canonical URL to every page.'),
    byPt: { plp: { where: L('PLP 템플릿', 'PLP template'), action: L('필터·정렬을 걸어 주소가 길어져도 정식 주소는 필터 없는 기본 목록을 가리키게 고정합니다.', 'Even when filters and sorting extend the URL, keep the canonical pointing at the unfiltered base listing.') } },
  },
  seo_h1: {
    what: L('페이지의 가장 큰 제목이 정확히 하나인지 봅니다.', 'Whether the page has exactly one top-level heading.'),
    why: L('없거나 여러 개면 AI가 이 페이지의 주제를 하나로 특정하지 못합니다.', 'With none or several, AI cannot pin down a single topic for the page.'),
    where: L('페이지 템플릿 · 로고 영역', 'Page template · logo area'),
    action: L('가장 큰 제목을 페이지당 하나만 두고, 로고나 배너에 붙은 큰 제목 태그를 뗍니다.', 'Keep one top-level heading per page and strip the ones attached to logos or banners.'),
    byPt: { newsroom: { where: L('기사 발행 템플릿', 'Article publishing template'), action: L('기사 제목만 가장 큰 제목으로 두고 사이트 로고에 붙은 것을 뗍니다.', 'Keep only the article title as the top-level heading and remove the one on the site logo.') } },
  },
  seo_robots: {
    what: L('검색·AI 수집을 막는 설정이 걸려 있지 않은지 봅니다.', 'Whether anything blocks search and AI collection.'),
    why: L('이 설정이 켜져 있으면 그 페이지는 AI 색인에서 완전히 빠집니다.', 'If it is on, the page drops out of AI indexing entirely.'),
    where: L('각 페이지별 Meta 태그 영역 · 서버 응답 헤더', 'Per-page meta tag area · server response headers'),
    action: L('공개 대상 페이지에 수집 차단이 걸려 있지 않은지 태그와 헤더 양쪽을 확인합니다.', 'Check both the tag and the header to confirm public pages are not blocked.'),
  },
  seo_open_graph: {
    what: L('공유할 때 쓰이는 제목·대표 이미지가 지정돼 있는지 봅니다.', 'Whether the share title and preview image are set.'),
    why: L('공유나 인용될 때 어떤 제목과 그림이 딸려갈지를 결정합니다.', 'They decide what title and image travel with the page when it is shared or cited.'),
    where: L('각 페이지별 Meta 태그 영역', 'Per-page meta tag area'),
    action: L('공유용 제목과 대표 이미지를 채웁니다 (이미지 1200×630 이상).', 'Fill in the share title and preview image (image at least 1200×630).'),
    byPt: { press_media: { where: L('보도자료 발행 템플릿', 'Press release publishing template'), action: L('보도자료 대표 사진이 공유 이미지로 자동 지정되게 합니다.', 'Auto-assign the release’s lead photo as the share image.') } },
  },
  seo_sitemap: {
    what: L('사이트맵이 최근 한 달 안에 갱신됐는지 봅니다.', 'Whether the sitemap was refreshed within the last month.'),
    why: L('사이트맵이 낡으면 새로 만든 페이지를 AI가 아예 찾지 못합니다.', 'A stale sitemap means AI never finds newly published pages.'),
    where: L('사이트맵 생성 배치', 'Sitemap generation job'),
    action: L('사이트맵을 한 달 안으로 갱신하고 수정일이 실제 수정 시점을 가리키게 합니다.', 'Refresh the sitemap within a month and make the modified date reflect the real edit time.'),
    byPt: { newsroom: { where: L('기사 발행 파이프라인', 'Article publishing pipeline'), action: L('기사를 올리면 사이트맵이 자동으로 갱신되도록 발행 과정에 연결합니다.', 'Wire the sitemap refresh into publishing so it updates when an article goes live.') } },
  },

  // ── 스키마마크업 ──────────────────────────────────────────────────────────
  ai_schema_breadcrumb: {
    what: L('"홈 > 카테고리 > 이 페이지" 위치 정보를 라벨로 붙였는지 봅니다.', 'Whether the "Home > Category > This page" trail is labelled.'),
    why: L('AI가 이 페이지가 사이트 어디에 속하는지 파악하는 데 씁니다.', 'AI uses it to place the page within the site.'),
    where: L('페이지 공통 템플릿', 'Shared page template'),
    action: L('위치 정보 라벨을 전 페이지 공통 템플릿에 넣습니다.', 'Add the breadcrumb label to the shared page template.'),
  },
  ai_schema_faq: {
    what: L('FAQ 영역에 "이건 질문과 답이다" 라벨을 붙였는지 봅니다.', 'Whether the FAQ area is labelled as question-and-answer content.'),
    why: L('라벨이 있으면 AI가 질문-답 쌍을 그대로 답변에 가져다 씁니다.', 'With the label AI lifts the question-answer pairs straight into its answers.'),
    where: L('FAQ 컴포넌트', 'FAQ component'),
    action: L('이미 있는 FAQ 아코디언에 라벨이 자동으로 붙게 컴포넌트를 고칩니다.', 'Update the component so the existing FAQ accordion gets the label automatically.'),
    byPt: {
      pdp: { where: L('PDP 하단 FAQ 컴포넌트', 'PDP bottom FAQ component'), action: L('경쟁사 대비 격차가 가장 큰 항목입니다. PDP 하단 자주 묻는 질문 영역부터 라벨을 붙입니다.', 'This is the widest gap against the competitor. Start with the FAQ block at the bottom of PDPs.') },
      buying_guide: { where: L('구매 가이드 템플릿', 'Buying guide template'), action: L('가이드 안의 비교·선택 질문을 질문-답 형식으로 구조화합니다.', 'Structure the guide’s comparison and selection questions as question-answer pairs.') },
    },
  },
  ai_schema_collection: {
    what: L('목록 페이지에 "이건 제품 모음이다" 라벨을 붙였는지 봅니다.', 'Whether listing pages are labelled as a product collection.'),
    why: L('라벨이 없으면 AI가 이 목록이 무엇의 모음인지 파악하지 못합니다.', 'Without it AI cannot tell what the list is a collection of.'),
    where: L('PLP 템플릿', 'PLP template'),
    action: L('PLP 템플릿에 모음 라벨과 목록에 담긴 제품들을 함께 표시합니다.', 'Add the collection label to the PLP template along with the products it contains.'),
  },
  ai_schema_product: {
    what: L('제품 페이지에 제품명·이미지·설명·모델코드·브랜드·가격 라벨이 원본 소스(Server-Side Rendering)에 붙었는지 봅니다.', 'Whether product name, image, description, model code, brand, and price labels are present in the source HTML (Server-Side Rendering).'),
    why: L('AI가 제품을 특정하고 비교하는 핵심 근거입니다. 없으면 추천 후보에서 빠집니다.', 'This is the core evidence AI uses to identify and compare products. Without it the product drops out of consideration.'),
    where: L('PDP 페이지 전달 방식 · 스키마 자동화', 'PDP delivery method · schema automation'),
    action: L('제품 정보 라벨을 원본 소스에 함께 내려보냅니다.', 'Ship the product labels together with the source HTML.'),
    byPt: { pdp: { where: L('PDP 페이지 전달 방식 (D2C 추진 중)', 'PDP delivery method (D2C in progress)'), action: L('라벨은 이미 만들어져 있는데 화면이 뜬 뒤에 붙습니다. 원본 소스에 함께 실리도록 바꿉니다.', 'The labels already exist but are attached after the page paints. Move them into the source HTML.') } },
    notes: [
      { cc: ['us'], text: L('미국은 일부가 원본 소스에 실리고 있는 유일한 사이트입니다. 적용 방식을 다른 국가에 확산하는 것이 빠른 길입니다.', 'The US is the only site where some labels already ship in the source. Rolling out its approach to other countries is the fastest path.') },
      { ccNot: ['us'], text: L('라벨은 생성되지만 원본 소스에 실리지 않습니다. 미국만 일부 적용돼 있어 그 방식을 확인해 볼 수 있습니다.', 'The labels are generated but never reach the source HTML. Only the US has partial coverage — worth reviewing how it is done there.') },
      { ccNot: ['us'], text: L('구글 검색 봇은 화면을 한 번 더 그려보기 때문에 이 라벨을 인식하지만, 최근의 LLM 봇 대부분은 원본 소스만 읽습니다. 즉 미국 외 사이트에서는 제품 정보가 AI에게 아예 보이지 않는 상태입니다.', 'Google’s crawler renders the page a second time and so does see these labels, but most recent LLM bots read only the source HTML. Outside the US, product information is effectively invisible to AI.') },
      { pt: ['pdp'], text: L('표기 오류도 함께 확인이 필요합니다 — 라벨 종류가 소문자 product 로 적혀 있어 원본 소스에 실어도 인식되지 않을 수 있습니다.', 'There is also a casing issue: the label type is written as lowercase "product", so it may not register even once it ships in the source.') },
    ],
  },
  ai_schema_image: {
    what: L('이미지에 "이건 이미지이고 설명은 이렇다" 라벨을 붙였는지 봅니다.', 'Whether images carry a label saying what they are and what they show.'),
    why: L('AI가 이미지를 답변에 쓸 때 출처와 설명의 근거가 됩니다.', 'It gives AI the source and description it needs to use an image in an answer.'),
    where: L('이미지 컴포넌트 · 스키마 자동화', 'Image component · schema automation'),
    action: L('주요 이미지에 이미지 라벨(주소·설명)을 붙입니다.', 'Add image labels (URL and caption) to the main images.'),
    byPt: { pdp: { where: L('PDP 제품 이미지 컴포넌트', 'PDP product image component'), action: L('제품 대표 이미지부터 라벨을 붙입니다.', 'Start with the product’s lead image.') } },
  },
  ai_schema_video: {
    what: L('영상에 "이건 영상이고 제목·썸네일·업로드일은 이렇다" 라벨을 붙였는지 봅니다.', 'Whether videos carry a label with title, thumbnail, and upload date.'),
    why: L('라벨이 없으면 영상 콘텐츠가 AI 답변에 아예 노출되지 않습니다.', 'Without it video content never surfaces in AI answers.'),
    where: L('영상 임베드 컴포넌트', 'Video embed component'),
    action: L('삽입된 영상에 제목·썸네일·업로드일 라벨을 붙입니다.', 'Label embedded videos with title, thumbnail, and upload date.'),
  },
  ai_schema_howto: {
    what: L('따라하기 절차에 "이건 순서가 있는 방법이다" 라벨을 붙였는지 봅니다.', 'Whether step-by-step procedures are labelled as an ordered how-to.'),
    why: L('라벨이 있으면 AI가 "1단계, 2단계" 로 나눠 답변에 인용합니다.', 'With the label AI quotes the steps individually.'),
    where: L('절차형 문서 템플릿', 'Procedural document template'),
    action: L('문제 해결 절차를 단계 단위로 구조화해 라벨을 붙입니다.', 'Structure the resolution procedure into labelled steps.'),
    byPt: { support_troubleshoot: { where: L('트러블슈팅 문서 템플릿', 'Troubleshooting document template'), action: L('이미 순서대로 쓰여 있습니다. 템플릿에서 그 순서를 그대로 단계 라벨로 자동 변환합니다.', 'The content is already sequential — have the template convert that order into step labels automatically.') } },
  },
  ai_schema_article: {
    what: L('기사·가이드에 "이건 글이고 저자·발행일은 이렇다" 라벨을 붙였는지 봅니다.', 'Whether articles and guides carry a label with author and publication date.'),
    why: L('AI가 이 글이 언제 누가 쓴 것인지 판단하는 근거가 됩니다.', 'It tells AI who wrote the piece and when.'),
    where: L('기사·가이드 발행 템플릿', 'Article and guide publishing template'),
    action: L('기사와 가이드에 제목·작성자·발행일 라벨을 붙입니다.', 'Label articles and guides with headline, author, and publication date.'),
    byPt: {
      newsroom: { where: L('기사 발행 템플릿', 'Article publishing template'), action: L('발행 템플릿에 기사 라벨을 넣어 전 기사에 일괄 적용합니다.', 'Put the article label in the publishing template so it applies to every article at once.') },
      buying_guide: { where: L('구매 가이드 템플릿', 'Buying guide template'), action: L('가이드에 글 라벨을 붙여 작성자와 발행일이 함께 나오게 합니다.', 'Label guides as articles so the author and date appear with them.') },
    },
  },
  ai_schema_offer: {
    what: L('가격·재고 상태를 라벨로 붙였는지 봅니다.', 'Whether price and availability are labelled.'),
    why: L('AI가 답변에 가격이나 구매 가능 여부를 반영할 수 있게 됩니다.', 'It lets AI reflect price and purchasability in its answers.'),
    where: L('PDP 가격 영역 · 스키마 자동화', 'PDP pricing area · schema automation'),
    action: L('제품 정보 라벨 안에 가격·통화·재고 상태를 채웁니다.', 'Fill price, currency, and availability inside the product label.'),
  },

  // ── 고인용 콘텐츠 ─────────────────────────────────────────────────────────
  ai_faq_block: {
    what: L('페이지 안에 질문과 답 형식의 글이 있는지 봅니다.', 'Whether the page contains question-and-answer style writing.'),
    why: L('AI 질문에 그대로 대응시킬 수 있어 인용될 확률이 가장 높은 형식입니다.', 'It maps directly onto how people ask AI, making it the most quotable format.'),
    where: L('콘텐츠 기획 · 페이지 하단 영역', 'Content planning · lower page area'),
    action: L('페이지 주제와 직접 관련된 질문 3개 이상을 FAQ 형태로 추가합니다.', 'Add at least three questions directly tied to the page topic in FAQ form.'),
    byPt: {
      pdp: { where: L('PDP 하단 콘텐츠', 'PDP lower content'), action: L('제품별로 실제 문의가 많은 질문 상위 3개를 PDP 하단에 배치합니다.', 'Place the three most-asked questions for each product at the bottom of the PDP.') },
      support: { where: L('지원 문서 상단', 'Top of support documents'), action: L('문서 맨 위에 "이 문서로 해결되는 질문" 목록을 둡니다.', 'Put a "questions this document answers" list at the top.') },
    },
  },
  ai_definition: {
    what: L('용어를 "○○는 ~이다" 형태로 설명한 문단이 있는지 봅니다.', 'Whether the page defines terms in an "X is …" form.'),
    why: L('개념을 묻는 질문에 AI가 이 문단을 그대로 답으로 씁니다.', 'AI reuses these paragraphs verbatim when answering concept questions.'),
    where: L('콘텐츠 본문', 'Content body'),
    action: L('핵심 용어와 기술 이름을 한 문장 정의로 본문에 넣습니다.', 'Add one-sentence definitions of key terms and technology names to the body.'),
    byPt: {
      pdp: { where: L('PDP 제품 설명 영역', 'PDP product description area'), action: L('핵심 기술 이름(예: 인버터, OLED evo)을 한 문장 정의로 설명 영역에 넣습니다.', 'Add one-sentence definitions of key technology names (e.g. Inverter, OLED evo) to the description area.') },
      buying_guide: { where: L('가이드 도입부', 'Guide introduction'), action: L('가이드 첫머리에 다루는 개념의 정의 문단을 배치합니다.', 'Open the guide with a definition paragraph for the concepts it covers.') },
    },
  },
  ai_author_source: {
    what: L('누가 썼는지·출처가 어디인지·언제 올렸는지가 표시돼 있는지 봅니다.', 'Whether the author, source, and publication date are shown.'),
    why: L('AI가 이 글을 믿을 만한지, 최신인지 판단하는 근거입니다.', 'These are what AI uses to judge whether the piece is credible and current.'),
    where: L('발행 템플릿의 작성자·날짜 영역', 'Author and date area of the publishing template'),
    action: L('작성자·출처·발행일을 화면과 라벨 양쪽에 표시합니다.', 'Show author, source, and date both on screen and in the labels.'),
    byPt: {
      buying_guide: { where: L('구매 가이드 템플릿', 'Buying guide template'), action: L('작성 부서·검수자·최종 수정일을 표기 영역에 넣습니다.', 'Add the authoring team, reviewer, and last-updated date to the byline area.') },
      lg_experience: { where: L('LG Experience 템플릿', 'LG Experience template'), action: L('콘텐츠 하단에 발행 주체와 날짜를 표기합니다.', 'Show the publisher and date at the bottom of the content.') },
      newsroom: { where: L('기사 발행 템플릿', 'Article publishing template'), action: L('작성자와 발행일을 고정 항목으로 템플릿에 넣습니다.', 'Make author and publication date fixed fields in the template.') },
    },
  },
  ai_summary_box: {
    what: L('페이지 맨 위에 핵심을 몇 줄로 정리한 상자가 있는지 봅니다.', 'Whether a short summary box sits at the top of the page.'),
    why: L('AI가 페이지 전체를 읽지 않고도 핵심을 인용할 수 있게 해줍니다.', 'It lets AI quote the key point without reading the whole page.'),
    where: L('페이지 상단 영역', 'Top of the page'),
    action: L('페이지 맨 위에 3~5줄짜리 핵심 요약 상자를 넣습니다.', 'Add a three-to-five line summary box at the top of the page.'),
    byPt: { support_troubleshoot: { where: L('트러블슈팅 문서 상단', 'Top of troubleshooting documents'), action: L('문서 맨 위에 "요약: 증상 / 원인 / 해결" 세 줄 상자를 둡니다.', 'Put a three-line "Summary: symptom / cause / fix" box at the very top.') } },
  },
  ai_citable: {
    what: L('숫자·연도·통계가 들어간 문장이 본문의 10% 이상인지 봅니다.', 'Whether at least 10% of sentences contain numbers, years, or statistics.'),
    why: L('구체적인 수치가 담긴 문장을 AI가 근거로 우선 인용합니다.', 'AI preferentially cites sentences carrying concrete figures.'),
    where: L('콘텐츠 본문 작성 가이드', 'Content writing guidelines'),
    action: L('본문에 수치·연도·비교 데이터를 담은 문장 비중을 늘립니다.', 'Increase the share of sentences carrying figures, years, and comparisons.'),
    byPt: { pdp: { where: L('PDP 제품 설명 영역', 'PDP product description area'), action: L('스펙 수치를 표에만 넣지 말고 본문 문장으로도 풀어 씁니다.', 'Do not confine spec figures to tables — write them into body sentences too.') } },
  },

  // ── AI Crawlability ──────────────────────────────────────────────────────
  ai_ssr_ratio: {
    what: L('서버에서 내려받는 원본 소스(Server-Side Rendering)에 본문이 충분히 담겨 있는지 봅니다 (전체의 60% 이상).', 'Whether the source HTML delivered by the server (Server-Side Rendering) carries enough of the body text (at least 60% of the total).'),
    why: L('지금은 화면이 뜬 뒤에 본문을 따로 불러옵니다. AI는 원본 소스만 보고 판단해 본문을 놓칩니다.', 'Right now the body is fetched after the page paints. AI judges from the source HTML alone and misses it.'),
    where: L('페이지 전달 방식', 'Page delivery method'),
    action: L('주요 본문을 원본 소스에 담아 내려보냅니다.', 'Ship the main body text inside the source HTML.'),
    pin: true,
    byPt: {
      pdp: { where: L('PDP 페이지 전달 방식 (D2C 전환 추진 중)', 'PDP delivery method (D2C migration in progress)'), action: L('스펙·설명·리뷰 요약을 원본 소스에 담습니다.', 'Move specs, description, and review summaries into the source HTML.') },
      support_troubleshoot: { where: L('지원 페이지 전달 방식 (고객가치혁신 전환 추진 중)', 'Support page delivery method (CVI migration in progress)'), action: L('해결 단계 본문을 원본 소스에 담습니다.', 'Move the resolution steps into the source HTML.') },
    },
    notes: [
      { text: L('이 항목이 미달이면 다른 항목의 점수는 사실상 의미가 없습니다. 원본 소스에 본문이 없으면 LLM 봇은 이 페이지에서 아무것도 읽어가지 못하기 때문에, 스키마·콘텐츠를 아무리 잘 갖춰도 인식되지 않습니다. 가장 먼저 해결해야 할 선행 과제입니다.', 'If this item fails, the other scores are effectively meaningless. With no body text in the source HTML, LLM bots read nothing from the page — however well the schema and content are built, none of it registers. This is the prerequisite to fix first.') },
      { text: L('다만 제미나이(Gemini)는 구글 검색 인프라를 함께 쓰기 때문에, 원본 소스에 없어도 일부 스키마와 주요 항목은 인식될 수 있습니다. 그 외 LLM 봇에는 해당되지 않습니다.', 'Gemini is the exception: because it shares Google’s search infrastructure, some schema and key items can still register even when absent from the source HTML. This does not apply to other LLM bots.') },
      { ccNot: ['us', 'vn', 'au', 'global'], text: L('국가별 편차가 큽니다. 상위 사이트의 구성 방식을 참고할 수 있습니다.', 'The spread across sites is wide — worth reviewing how the leading sites are set up.') },
      { cc: ['ca', 'uk', 'br'], text: L('전 사이트 중 하위권이라 우선 대상으로 잡아야 합니다.', 'This site sits in the bottom group, so it should be treated as a priority.') },
    ],
  },
  ai_pdp_thumbnails: {
    what: L('제품 썸네일 3장 이상이 원본 소스(Server-Side Rendering)에 담겨 있는지 봅니다.', 'Whether at least three product thumbnails are present in the source HTML (Server-Side Rendering).'),
    why: L('나중에 불러오는 이미지는 AI가 수집하지 못합니다.', 'Images fetched later are never collected by AI.'),
    where: L('PDP 이미지 영역', 'PDP image area'),
    action: L('PDP 대표 이미지 3장 이상을 원본 소스에 담습니다.', 'Put at least three lead PDP images into the source HTML.'),
  },
  ai_core_element: {
    what: L('PDP 핵심 영역 5개 중 3개 이상이 원본 소스(Server-Side Rendering)에 담겨 있는지 봅니다.', 'Whether at least three of the five core PDP regions are present in the source HTML (Server-Side Rendering).'),
    why: L('핵심 영역을 나중에 불러오면 AI가 제품 정보를 반쪽만 가져갑니다.', 'If core regions load later, AI takes away only half the product information.'),
    where: L('PDP 페이지 전달 방식', 'PDP delivery method'),
    action: L('PDP 핵심 영역을 원본 소스에 담습니다.', 'Move the core PDP regions into the source HTML.'),
  },
  ai_image_filename: {
    what: L('이미지 파일 이름에 브랜드·모델명이 들어 있는지 봅니다.', 'Whether image file names include the brand and model name.'),
    why: L('AI가 이미지 주제를 짐작하는 보조 단서로 씁니다.', 'AI uses it as a secondary clue to what the image shows.'),
    where: L('이미지 등록 규칙', 'Image naming rules'),
    action: L('이미지 파일 이름에 브랜드와 모델명을 넣는 규칙을 적용합니다.', 'Apply a naming rule that puts brand and model into image file names.'),
  },
  ai_status_200: {
    what: L('페이지가 정상 응답(200)을 주는지 봅니다.', 'Whether the page returns a normal (200) response.'),
    why: L('오류 응답이면 그 페이지는 아예 수집되지 않습니다.', 'An error response means the page is never collected at all.'),
    where: L('사이트맵 · 내부 링크', 'Sitemap · internal links'),
    action: L('사이트맵과 내부 링크에서 깨진 주소를 걷어냅니다.', 'Clear broken URLs out of the sitemap and internal links.'),
  },
  ai_soft_404: {
    what: L('정상 응답인데 내용이 비어 있는 페이지가 아닌지 봅니다.', 'Whether the page returns normally but is actually empty.'),
    why: L('AI가 이걸 실제 콘텐츠로 잘못 세어 사이트 전체 품질 평가를 떨어뜨립니다.', 'AI counts it as real content, dragging down the quality assessment of the whole site.'),
    where: L('빈 페이지 처리 규칙', 'Empty page handling rules'),
    action: L('내용이 없는 페이지는 오류 응답을 주거나 콘텐츠를 채웁니다.', 'Either return an error for empty pages or fill them with content.'),
  },
  ai_llms_txt: {
    what: L('AI에게 사이트 이용 안내를 주는 파일(llms.txt)이 있는지 봅니다.', 'Whether an llms.txt file gives AI guidance on using the site.'),
    why: L('AI에게 어느 영역을 먼저 보라고 알려주는 안내문 역할을 합니다.', 'It tells AI which areas to look at first.'),
    where: L('사이트 최상위 경로', 'Site root path'),
    action: L('최상위 경로에 llms.txt 를 두고 주요 영역과 정책을 적습니다.', 'Place llms.txt at the site root describing key areas and policy.'),
  },
}

// notes 한 건이 현재 필터(국가·페이지타입)에서 노출 대상인지
function noteVisible(n, ccId, ptId) {
  if (n.cc && !(ccId && n.cc.indexOf(ccId) >= 0)) return false
  if (n.ccNot && (!ccId || n.ccNot.indexOf(ccId) >= 0)) return false
  if (n.pt && !(ptId && n.pt.indexOf(ptId) >= 0)) return false
  return true
}

// 특정 체크를 현재 필터(국가 × 페이지타입)와 언어에 맞춰 해석.
// base → byCc → byPt 순으로 덮어쓰고, notes 는 조건이 맞는 것만 반환한다.
export function guideFor(checkId, ptId, ccId, lang = 'ko') {
  const g = GUIDE[checkId]
  if (!g) return null
  const c = (ccId && g.byCc && g.byCc[ccId]) || {}
  const p = (ptId && g.byPt && g.byPt[ptId]) || {}
  return {
    what: pick(g.what, lang),
    why: pick(g.why, lang),
    where: pick(p.where || c.where || g.where, lang),
    action: pick(p.action || c.action || g.action, lang),
    pin: g.pin === true,
    notes: (g.notes || []).filter(n => noteVisible(n, ccId, ptId)).map(n => pick(n.text, lang)),
  }
}
