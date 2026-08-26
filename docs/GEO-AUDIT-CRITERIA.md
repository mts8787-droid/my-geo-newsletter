# GEO Agent Readability 검수 기준

> 6개 카테고리 41개 채점 항목 + 9월 감사 시행 예정 4항목.
> 점수·통과율은 제외한 **기준 정의 문서**입니다. 실측치는 Readability 대시보드에서 확인하세요.
> 생성: `scripts/render-criteria.mjs` (source: `data/readability/geo-agent-checklist.html`) — 2026-07-31

## 카테고리

| 카테고리 | 채점 항목 | 무엇을 보는가 |
| :-- | :-: | :-- |
| 사이트 성능 | 6 | 서버가 페이지를 얼마나 빠르고 안전하게 전달하는가 — 전송 계층 |
| 웹접근성 | 4 | 사람과 기계가 문서 구조를 읽어낼 수 있는가 |
| Basic SEO | 8 | 검색엔진이 페이지를 수집하고 표시할 수 있는가 |
| 스키마마크업 | 10 | AI가 읽을 수 있는 구조화 데이터가 있는가 |
| 고인용 콘텐츠 | 5 | AI가 인용할 만한 서술이 본문에 있는가 |
| AI Crawlability | 8 | AI 크롤러가 원문을 실제로 가져갈 수 있는가 |

---

## 사이트 성능

> 서버가 페이지를 얼마나 빠르고 안전하게 전달하는가 — 전송 계층

### #1 — TTFB
- **정의**: 서버 요청 후 첫 번째 응답이 전달되기까지 걸리는 시간
- **PASS**: < 1800ms
- **측정방법**: Server-Timing, X-Response-Time 헤더
- **check id**: `perf_ttfb`

### #2 — Compression
- **정의**: 페이지 전송 용량을 줄이기 위한 HTTP 응답 압축 적용 여부
- **PASS**: gzip/br/deflate
- **측정방법**: Content-Encoding 헤더
- **check id**: `perf_compression`

### #3 — HTTP Protocol
- **정의**: 페이지 전송에 사용되는 HTTP 통신 프로토콜 버전
- **PASS**: HTTP/2 이상
- **측정방법**: Alt-Svc, :status 헤더
- **check id**: `perf_http_protocol`

### #4 — Cache-Control
- **정의**: 브라우저가 리소스를 일정 기간 저장·재사용할 수 있도록 하는 캐시 유효기간
- **PASS**: max-age 설정 (0 포함)
- **측정방법**: Cache-Control 헤더
- **check id**: `perf_cache_control`

### #6 — Redirect Chain
- **정의**: 최종 페이지에 도달하기 전 거치는 URL 리다이렉트 횟수
- **PASS**: ≤ 1회
- **측정방법**: redirectChain 메타데이터
- **check id**: `perf_redirect`

### #7 — Mixed Content
- **정의**: HTTPS 페이지 내 비보안(HTTP) 리소스 포함 여부
- **PASS**: 0개
- **측정방법**: http://리소스 탐지
- **check id**: `perf_mixed_content`

### (예정) LCP (Largest Contentful Paint)
- **정의**: 페이지에서 가장 큰 본문 요소가 화면에 다 그려지기까지 걸리는 시간
- **PASS**: ≤ 4,000ms
- **측정방법**: PageSpeed Insights (Lighthouse) 측정값
- **상태**: 9월 감사부터 추가 시행 (데이터 추출 및 검증 진행중)

### (예정) CLS (Cumulative Layout Shift)
- **정의**: 읽는 도중 화면 요소가 밀려 이동하는 정도 — 값이 클수록 레이아웃이 흔들림
- **PASS**: ≤ 0.25
- **측정방법**: PageSpeed Insights (Lighthouse) 측정값
- **상태**: 9월 감사부터 추가 시행 (데이터 추출 및 검증 진행중)

### (예정) INP (Interaction to Next Paint)
- **정의**: 사용자가 누르거나 입력한 뒤 화면이 반응하기까지 걸리는 시간
- **PASS**: ≤ 500ms
- **측정방법**: PageSpeed Insights — CrUX 실사용자 데이터
- **상태**: 9월 감사부터 추가 시행 (데이터 추출 및 검증 진행중)

### (예정) Agentic Browsing
- **정의**: AI Agent와 상호작용하기 위해 사이트가 얼마나 잘 구성되어 있는지 평가 (구글 베타테스트 중인 요건)
- **PASS**: 구글 정책에 따라 점수 기준점 혹은 Pass/Non Pass 유형 확정 예정
- **측정방법**: CLS · LLMS.txt · 에이전트 접근성 항목 평가 (점수화 작업 진행 중)
- **상태**: 9월 감사부터 추가 시행 (데이터 추출 및 검증 진행중)

---

## 웹접근성

> 사람과 기계가 문서 구조를 읽어낼 수 있는가

### #9 — Image Alt
- **정의**: 이미지의 내용과 의미를 설명하는 대체 텍스트 제공 여부
- **PASS**: 누락 0개
- **측정방법**: img[alt] 체크
- **check id**: `a11y_image_alt`

### #10 — Semantic HTML
- **정의**: 콘텐츠의 역할과 구조를 명확하게 표현하는 의미 기반 HTML 요소 사용
- **PASS**: Main + 랜드마크 3개 이상
- **측정방법**: main, nav, header, footer, article, section, aside
- **check id**: `a11y_semantic`

### #11 — Heading Hierarchy
- **정의**: 페이지의 제목과 하위 내용을 구분하는 Heading Tag의 계층 구조 적용 여부
- **PASS**: 위반 0개
- **측정방법**: h1 → h3 점프 등 탐지
- **check id**: `a11y_heading_hier`

### #12 — ARIA Labels
- **정의**: 버튼·입력창 등 UI 요소의 이름과 역할을 설명하는 정보 제공 여부
- **PASS**: 누락 < 10%
- **측정방법**: Button, input, a 접근성텍스트
- **check id**: `a11y_aria_labels`

---

## Basic SEO

> 검색엔진이 페이지를 수집하고 표시할 수 있는가

### #13 — Title
- **정의**: 검색엔진과 사용자에게 페이지의 핵심 주제를 전달하는 페이지 제목
- **PASS**: 존재 (30~60자)
- **측정방법**: title tag HTML 파싱 후 검증
- **check id**: `seo_title`

### #14 — Meta Description
- **정의**: 검색결과에서 페이지의 주요 내용을 요약해 전달하는 메타 설명 문구
- **PASS**: 존재 (120~160자)
- **측정방법**: meta[name="description"] HTML 파싱 후 검증
- **check id**: `seo_meta_desc`

### #15 — Canonical
- **정의**: 검색엔진에 대표 페이지를 알려주는 URL 설정
- **PASS**: self-referencing
- **측정방법**: link[rel="canonical"] HTML 파싱 후 검증
- **check id**: `seo_canonical`

### #16 — H1
- **정의**: 페이지 본문의 대표 제목을 나타내는 최상위 제목 태그의 개수
- **PASS**: 정확히 1개 존재
- **측정방법**: h1 tag HTML 파싱 후 검증 (카운트)
- **check id**: `seo_h1`

### #17 — Robots
- **정의**: 검색엔진이 이 페이지를 수집하고 검색결과에 노출해도 되는지 알려주는 설정
- **PASS**: Indexing 허용
- **측정방법**: meta robots HTML 파싱 후 검증, X-Robots-Tag 헤더↑ 응답값 확인
- **check id**: `seo_robots`, `seo_robots_hdr`

### #18 — Open Graph
- **정의**: 링크를 공유했을 때 제목·이미지가 함께 표시되도록 전달하는 정보
- **PASS**: og:title + og:image
- **측정방법**: og: meta 태그
- **check id**: `seo_open_graph`

### #19 — Sitemap
- **정의**: 사이트의 전체 페이지 목록을 검색엔진에 알려주는 파일의 최신 여부
- **PASS**: (Published/Update Data 1개월 내) 최신화된 Sitemap XML 존재
- **측정방법**: /sitemap.xml HEAD 요청, 각 국가별 Sitemap.xml 검증
- **check id**: `seo_sitemap`

---

## 스키마마크업

> AI가 읽을 수 있는 구조화 데이터가 있는가

### #20 — Schema Types - Organization
- **정의**: 회사의 이름·연락처·주소 등 기업 정보를 AI가 읽을 수 있게 표기
- **PASS**: JSON-LD 필수요소 모두 존재, 파싱 성공
- **측정방법**: contactPoint, address, geo, hasMap 존재
- **상태**: 미채점 — 추후 개선항목 확인 후 정리 (scoring_config `enabled: false`)

### #21 — Schema Types - BreadcrumbList
- **정의**: 현재 페이지가 사이트 구조상 어느 위치에 있는지 알려주는 경로 정보
- **PASS**: JSON-LD 필수요소 모두 존재, 파싱 성공
- **측정방법**: itemListElement, item, name, position 등 존재
- **check id**: `ai_schema_breadcrumb`

### #22 — Schema Types - Speakable
- **정의**: 음성 서비스가 대신 읽어줄 수 있도록 핵심 문장 영역을 지정
- **PASS**: JSON-LD 필수요소 모두 존재, 파싱 성공
- **측정방법**: speakable.cssSelector 존재
- **상태**: 미채점 — 추후 개선항목 확인 후 정리 (scoring_config `enabled: false`)

### #23 — Schema Types - FAQ
- **정의**: 자주 묻는 질문과 답변을 AI가 읽을 수 있게 표기
- **PASS**: JSON-LD 필수요소 모두 존재, 파싱 성공
- **측정방법**: mainEntity 존재
- **check id**: `ai_schema_faq`

### #24 — Schema Types - Collectionpage
- **정의**: 여러 항목을 모아 보여주는 목록형 페이지임을 AI가 읽을 수 있게 표기
- **PASS**: JSON-LD 필수요소 모두 존재, 파싱 성공
- **측정방법**: itemList, ListItem 존재
- **check id**: `ai_schema_collection`

### #25 — Schema Types - Product + Offer + AggregateRating + Review
- **정의**: 제품명·가격·재고·평점·후기 등 제품 정보를 AI가 읽을 수 있게 표기
- **PASS**: JSON-LD 필수요소 모두 존재, 파싱 성공
- **측정방법**: name, description, sku, brand, offers.price, offers.availability, aggregateRating.ratingValue, Review 존재
- **check id**: `ai_schema_product`, `ai_schema_offer`

### #26 — Schema Types - ImageObject
- **정의**: 이미지의 주소·이름·설명 등 이미지 정보를 AI가 읽을 수 있게 표기
- **PASS**: JSON-LD 필수요소 모두 존재, 파싱 성공
- **측정방법**: url, name, description, uploadDate 존재
- **check id**: `ai_schema_image`

### #27 — Schema Types - VideoObject
- **정의**: 영상의 주소·제목·썸네일 등 영상 정보를 AI가 읽을 수 있게 표기
- **PASS**: JSON-LD 필수요소 모두 존재, 파싱 성공
- **측정방법**: url, name, description, thumbnailUrl 존재
- **check id**: `ai_schema_video`

### #28 — Schema Types - HowTo
- **정의**: 준비물과 단계로 구성된 사용법·설치법 안내를 AI가 읽을 수 있게 표기
- **PASS**: JSON-LD 필수요소 모두 존재, 파싱 성공
- **측정방법**: HowToSupply / HowToStep 존재
- **check id**: `ai_schema_howto`

### #29 — Schema Types - Article
- **정의**: 기사·콘텐츠의 제목·작성자·발행처·본문을 AI가 읽을 수 있게 표기
- **PASS**: JSON-LD 필수요소 모두 존재, 파싱 성공
- **측정방법**: headline, author, publisher, articleBody 존재
- **check id**: `ai_schema_article`

### #30 — Schema Types - digitalDocument
- **정의**: 매뉴얼·카탈로그 등 첨부 문서의 이름·형식·주소를 AI가 읽을 수 있게 표기
- **PASS**: JSON-LD 필수요소 모두 존재, 파싱 성공
- **측정방법**: name, url, fileFormat, description 존재
- **상태**: 미채점 — 추후 개선항목 확인 후 정리 (scoring_config `enabled: false`)

### #31 — Schema Types - Recipe
- **정의**: 재료와 조리 단계로 구성된 레시피 정보를 AI가 읽을 수 있게 표기
- **PASS**: JSON-LD 필수요소 모두 존재, 파싱 성공
- **측정방법**: Name, description, image, author, datepublihsed, recipeIngredient, recipeInstructions 존재
- **상태**: 미채점 — 추후 개선항목 확인 후 정리 (scoring_config `enabled: false`)

### #49 Schema: WebSite
- **정의**: 체크리스트 문서에 대응 행이 없는 채점 항목
- **비고**: 적용 페이지 0건
- **check id**: `ai_schema_website`

---

## 고인용 콘텐츠

> AI가 인용할 만한 서술이 본문에 있는가

### #32 — FAQ Block*
- **정의**: 본문 안에 질문과 답변 형태로 구성된 콘텐츠가 있는지
- **PASS**: 1개 이상 존재
- **측정방법**: FAQPage Schema, details/summary, Q&A 패턴
- **check id**: `ai_faq_block`
- **분류**: Contents 체크 항목

### #33 — Definition Paragraph*
- **정의**: “A는 B이다” 처럼 용어의 뜻을 풀어 설명하는 문장이 있는지
- **PASS**: 1개 이상 존재
- **측정방법**: "X는 Y이다", dfn, abbr 태그
- **check id**: `ai_definition`
- **분류**: Contents 체크 항목

### #34 — Author/Source
- **정의**: 내용을 누가 언제 썼는지 알 수 있는 저자 또는 출처·날짜 표기
- **PASS**: 저자 또는 (출처+날짜) 존재
- **측정방법**: meta author, byline, datePublished
- **check id**: `ai_author_source`

### #35 — Summary Box*
- **정의**: 본문 앞부분에 핵심 내용을 짧게 요약해 둔 영역이 있는지
- **PASS**: 1개 이상 존재
- **측정방법**: TL;DR, Key Takeaways, Highlights, Abstract
- **check id**: `ai_summary_box`
- **분류**: Contents 체크 항목

### #36 — Citable Sentences*
- **정의**: 숫자·연도·통계처럼 AI가 근거로 인용하기 좋은 문장의 비중
- **PASS**: 밀도 ≥ 10%
- **측정방법**: 숫자, 연도, 통계, 연구 키워드 포함 문장
- **check id**: `ai_citable`
- **분류**: Contents 체크 항목

---

## AI Crawlability

> AI 크롤러가 원문을 실제로 가져갈 수 있는가

### #37 — (Javascript) HTML Text Ratio
- **정의**: 화면에 보이는 글 중 자바스크립트 없이도 읽히는 글의 비중
- **PASS**: 밀도 ≥ 60%
- **측정방법**: Javascript 렌더링 후 텍스트 대비 HTML Text Count 비중
- **check id**: `ai_ssr_ratio`

### #38 — (Javascript) HTML Resource
- **정의**: 제품 대표 이미지가 자바스크립트 없이도 HTML 안에 들어 있는지
- **PASS**: PDP Image 썸네일의 1-3번째 이미지의 HTML 코드 존재
- **측정방법**: PDP HTML 파싱 후, 서버사이드 렌더링 확인
- **check id**: `ai_pdp_thumbnails`

### #39 — (Javascript) 핵심 element 체크
- **정의**: 제품 페이지의 핵심 정보가 자바스크립트 없이도 HTML 안에 들어 있는지
- **PASS**: PDP의 핵심 element이 HTML 코드로 존재
- **측정방법**: PDP HTML 파싱 후, 서버사이드 렌더링 확인
- **check id**: `ai_core_element`

### #40 — Image File Name
- **정의**: 이미지 파일 이름만으로 브랜드·제품을 알아볼 수 있는지
- **PASS**: 브랜드명 포함
- **측정방법**: 브랜드명 포함 등 이미지 파일 이름 규칙 검증
- **check id**: `ai_image_filename`

### #41 — Status Code (200)
- **정의**: 페이지가 정상적으로 열리는 상태로 응답하는지
- **PASS**: 200 Status code를 반환
- **측정방법**: Status Code
- **check id**: `ai_status_200`

### #42 — Status Code (Soft 404)
- **정의**: 정상 응답인데 실제로는 내용이 비어 있는 페이지인지
- **PASS**: 200 Status code 반환, HTML Text Count 기준 이상일 경우
- **측정방법**: Status Code 및 HTML text 일정 수 미달 검증
- **check id**: `ai_soft_404`

### #43 — llms.txt / llms-corepage.txt
- **정의**: AI에게 사이트의 핵심 페이지를 안내하는 파일이 있는지
- **PASS**: 존재
- **측정방법**: 각 국가별 llms.txt 검증
- **check id**: `ai_llms_txt`

### #40 Summary Content SSR
- **정의**: 체크리스트 문서에 대응 행이 없는 채점 항목
- **비고**: 문서 미등재
- **check id**: `ai_summary_ssr`

---

## 예외 처리

### 채점에서 제외된 항목
- **#5 HTML < 100KB** — 측정은 정확하나 lg.com HTML 중앙값이 1,536KB라 실질 통과율 0.0%. 통과 건의 대부분이 본문 0자인 빈 404 셸이라 지표 방향이 반대였음
- **#8 Render Blocking 0** — 통과율 2.3%로 변별력 없음
- **#44 Sitemap XML** — #19 Sitemap과 rule이 완전히 동일한 중복 (`sitemap_recent` / `/sitemap.xml` / 30일). 어딧에서도 `ai_sitemap_domain` 이 이미 `enabled: false`
- **#20 Organization · #22 Speakable · #30 digitalDocument · #31 Recipe** — `scoring_config` 에서 `enabled: false`

### 집계 대상에서 빠지는 페이지
- **B2B(사업자) · 프로모션/약관** — GEO 대상이 아니라 점수·통과율·URL 카운트 전부에서 제외
- **비-200 페이지** (404 · 500 · fetch 실패) — 전 체크가 cascade-FAIL 이라 개선 대상이 아님
- **분류불가(unknown) · 홈페이지(home)** — 측정 의미 없음

### 측정 기준이 바뀐 항목
- **#1 TTFB** — 어딧 크롤러 자체 측정값이 동시 크롤 큐잉에 오염돼 실제보다 6~200배 크게 잡혔음(UK 크롤러 1,088ms vs PSI 11ms). PageSpeed Insights 의 `server-response-time` 을 정본으로 교체, 임계값 1800ms
- **#4 Cache-Control** — 원래 룰이 `no-cache`/`no-store` 가 섞이면 `max-age` 값과 무관하게 즉시 FAIL 처리했음. `max-age` 디렉티브가 설정돼 있으면(0 포함) 통과로 완화
- **#34 Author 또는 출처+날짜** — byline 은 에디토리얼에만 성립하는 개념이라 `newsroom` · `buying_guide` · `lg_experience` 에만 적용. 그 외 페이지타입은 `na` (분모 제외)

### 문서 번호와 채점 항목이 1:1이 아닌 곳
- **#17 Robots** — `seo_robots`(meta) + `seo_robots_hdr`(X-Robots-Tag), 두 개로 채점
- **#25 Product 풀세트** — `ai_schema_product` + `ai_schema_offer`, 두 개로 채점
- **#49 Schema: WebSite · #40 Summary Content SSR** — 채점은 되지만 체크리스트 문서에 대응 행이 없음
