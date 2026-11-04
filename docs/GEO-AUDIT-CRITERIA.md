# GEO Agent Readability 검수 기준

> 6개 카테고리 39개 채점 항목. 점수·통과율은 제외한 **기준 정의 문서**입니다. 실측치는 Readability 대시보드에서 확인하세요.
> 생성: `scripts/render-criteria.mjs` (source: `data/readability/geo-agent-checklist.html` + 상류 `scoring_config.json`) — 2026-10-24

## 카테고리

| 카테고리 | 채점 항목 | 무엇을 보는가 |
| :-- | :-: | :-- |
| 사이트 성능 | 6 | 페이지의 정보를 빠르고 안정적으로 전달하는지 |
| 웹접근성 | 4 | 사람과 AI가 문서 구조를 읽어낼 수 있는지 |
| Basic SEO | 7 | 페이지 제목과 설명 등 기본 정보가 잘 갖춰져 있는지 |
| 스키마마크업 | 10 | 제품·이미지·영상·사용방법 등 정보의 종류를 AI가 구분할 수 있는지 |
| 고인용 콘텐츠 | 5 | AI가 답변에 인용하기 좋은 형태로 콘텐츠가 작성되어 있는지 |
| AI Crawlability | 7 | AI 크롤러가 원문을 실제로 가져갈 수 있는지 |

---

## 사이트 성능

> 페이지의 정보를 빠르고 안정적으로 전달하는지

### #1 — TTFB
- **정의**: 서버 요청 후 첫 번째 응답이 전달되기까지 걸리는 시간
- **PASS**: < 600ms
- **측정방법**: Server-Timing, X-Response-Time 헤더
- **check id**: `perf_ttfb`
- **검수 대상**
  - PageSpeed Insights(Lighthouse Lab) 의 `server-response-time` — `psi_collect.py` 가 사전 수집한 캐시에서 읽음 (감사 중 API 호출 없음)
- **판정 로직**
  - `server_response_time_ms < 600`
- **적용 대상 · N/A**
  - 전 페이지타입 (집계 제외 타입은 빼고)
- **판정 파라미터**
  - `perf_ttfb` · 룰 `psi_metric`
    - metric: `server_response_time_ms`
    - max_value: `600`
    - unit: `ms`
- **예외 · 별도 조건**
  - 감사 크롤러 자체 측정값은 사용하지 않음 (동시 크롤 큐잉으로 6~200배 과대 측정)
  - PSI 표본에 없는 URL 은 같은 국가×페이지타입 셀의 중앙값으로 일괄 판정 (폴백: 셀 → 국가 → 전체 중앙값)
  - 참조값이 전혀 없으면 N/A(분모 제외)
- **FAIL 예시 · 개선**
  - **FAIL** TTFB 860ms (PSI) — 600ms 이상
  - **개선** CDN 캐시 적중률을 올려 원본 서버까지 가는 요청을 줄입니다.

### #2 — Compression
- **정의**: 페이지 전송 용량을 줄이기 위한 HTTP 응답 압축 적용 여부
- **PASS**: gzip/br/deflate
- **측정방법**: Content-Encoding 헤더
- **check id**: `perf_compression`
- **검수 대상**
  - 응답 헤더 `Content-Encoding`
- **판정 로직**
  - 헤더 값에 `gzip` · `br` · `deflate` 중 하나 포함
- **적용 대상 · N/A**
  - 전 페이지타입 (집계 제외 타입은 빼고)
- **판정 파라미터**
  - `perf_compression` · 룰 `header_value_in`
    - header: `content-encoding`
    - values: `gzip`, `br`, `deflate`
- **예외 · 별도 조건**
  - 헤더 자체가 없으면 FAIL
- **FAIL 예시 · 개선**
  - **FAIL** `Content-Encoding` 헤더 없음 (비압축 전송)
  - **개선** HTML 응답에 gzip 또는 brotli 압축을 켭니다.

### #3 — HTTP Protocol
- **정의**: 페이지 전송에 사용되는 HTTP 통신 프로토콜 버전
- **PASS**: HTTP/2 이상
- **측정방법**: Alt-Svc, :status 헤더
- **check id**: `perf_http_protocol`
- **검수 대상**
  - 응답 HTTP 프로토콜 버전
- **판정 로직**
  - `HTTP/(\d+)(\.\d)?` 로 버전 숫자를 파싱해 **2 이상**이면 통과 (HTTP/2, HTTP/3)
- **적용 대상 · N/A**
  - 전 페이지타입 (집계 제외 타입은 빼고)
- **판정 파라미터**
  - `perf_http_protocol` · 룰 `http_protocol_min`
    - min_version: `HTTP/2`
- **예외 · 별도 조건**
  - 프로토콜 정보를 얻지 못하면 FAIL
- **FAIL 예시 · 개선**
  - **FAIL** HTTP/1.1 로 응답
  - **개선** CDN에서 HTTP/2 이상을 켭니다.

### #4 — Cache-Control
- **정의**: 브라우저가 리소스를 일정 기간 저장·재사용할 수 있도록 하는 캐시 유효기간
- **PASS**: max-age 설정 (0 포함)
- **측정방법**: Cache-Control 헤더
- **check id**: `perf_cache_control`
- **검수 대상**
  - 응답 헤더 `Cache-Control`
- **판정 로직**
  - 정규식 `max-age\s*=\s*(\d+)` — **max-age 디렉티브가 있으면(0 포함) 통과**
- **적용 대상 · N/A**
  - 전 페이지타입 (집계 제외 타입은 빼고)
- **판정 파라미터**
  - `perf_cache_control` · 룰 `header_max_age_min`
    - min_seconds: `0`
- **예외 · 별도 조건**
  - `no-cache`/`no-store` 가 섞여 있어도 max-age 가 있으면 통과 (구 룰은 즉시 FAIL — 2026-08-30 완화)
  - 구 룰로 수집된 스냅샷은 저장된 헤더 문자열로 재판정
  - 실제 캐시 가능 여부(B안)·no-store 만 실패(C안)는 검토 후 기각 — 세션·개인화 페이지의 정당한 no-store 까지 감점되기 때문
- **FAIL 예시 · 개선**
  - **FAIL** `Cache-Control` 에 `max-age` 디렉티브 없음
  - **개선** Cache-Control 헤더에 max-age 값을 적습니다. 값이 0이어도 규칙을 적어두는 것 자체가 필요합니다.

### #6 — Redirect Chain
- **정의**: 최종 페이지에 도달하기 전 거치는 URL 리다이렉트 횟수
- **PASS**: ≤ 1회
- **측정방법**: redirectChain 메타데이터
- **check id**: `perf_redirect`
- **검수 대상**
  - 페이지 요청의 리다이렉트 체인 (`redirect_count`)
- **판정 로직**
  - 리다이렉트 횟수 **≤ 1**
- **적용 대상 · N/A**
  - 전 페이지타입 (집계 제외 타입은 빼고)
- **판정 파라미터**
  - `perf_redirect` · 룰 `redirect_max`
    - max_count: `1`
- **예외 · 별도 조건**
  - 없음
- **FAIL 예시 · 개선**
  - **FAIL** 리다이렉트 2회 이상 (예: http → https → 최종 주소)
  - **개선** 사이트맵과 내부 링크의 주소를 최종 주소로 바꿔 갈아타기를 없앱니다.

### #7 — Mixed Content
- **정의**: HTTPS 페이지 내 비보안(HTTP) 리소스 포함 여부
- **PASS**: 0개
- **측정방법**: http://리소스 탐지
- **check id**: `perf_mixed_content`
- **검수 대상**
  - DOM — `img`·`script`·`link`·`iframe`·`audio`·`video`·`source` 의 `src`/`href`
- **판정 로직**
  - HTTPS 페이지에서 `http://` 로 시작하는 리소스 **0개**
- **적용 대상 · N/A**
  - 전 페이지타입 (집계 제외 타입은 빼고)
- **판정 파라미터**
  - `perf_mixed_content` · 룰 `mixed_content_zero`
- **예외 · 별도 조건**
  - 페이지 자체가 HTTPS 가 아니면 검증 대상 외 (자동 통과)
- **FAIL 예시 · 개선**
  - **FAIL** https 페이지에 `http://` 로 불러오는 `<img>` 1개 이상
  - **개선** 섞여 있는 비보안 주소를 보안 주소로 바꿉니다.

### (예정) LCP (Largest Contentful Paint)
- **정의**: 페이지에서 가장 큰 본문 요소가 화면에 다 그려지기까지 걸리는 시간
- **PASS**: ≤ 4,000ms
- **측정방법**: PageSpeed Insights (Lighthouse) 측정값
- **상태**: 10월 감사부터 추가 예정 (데이터 추출 및 검증 진행중)

### (예정) CLS (Cumulative Layout Shift)
- **정의**: 읽는 도중 화면 요소가 밀려 이동하는 정도 — 값이 클수록 레이아웃이 흔들림
- **PASS**: ≤ 0.25
- **측정방법**: PageSpeed Insights (Lighthouse) 측정값
- **상태**: 10월 감사부터 추가 예정 (데이터 추출 및 검증 진행중)

### (예정) INP (Interaction to Next Paint)
- **정의**: 사용자가 누르거나 입력한 뒤 화면이 반응하기까지 걸리는 시간
- **PASS**: ≤ 500ms
- **측정방법**: PageSpeed Insights — CrUX 실사용자 데이터
- **상태**: 10월 감사부터 추가 예정 (데이터 추출 및 검증 진행중)

### (예정) Agentic Browsing
- **정의**: AI Agent와 상호작용하기 위해 사이트가 얼마나 잘 구성되어 있는지 평가 (구글 베타테스트 중인 요건)
- **PASS**: 구글 정책에 따라 점수 기준점 혹은 Pass/Non Pass 유형 확정 예정
- **측정방법**: CLS · LLMS.txt · 에이전트 접근성 항목 평가 (점수화 작업 진행 중)
- **상태**: 10월 감사부터 추가 예정 (데이터 추출 및 검증 진행중)

---

## 웹접근성

> 사람과 AI가 문서 구조를 읽어낼 수 있는지

### #9 — Image Alt
- **정의**: 이미지의 내용과 의미를 설명하는 대체 텍스트 제공 여부
- **PASS**: 누락 0개
- **측정방법**: img[alt] 체크
- **check id**: `a11y_image_alt`
- **검수 대상**
  - DOM — 모든 `<img>`
- **판정 로직**
  - 모든 img 에 `alt` **속성이 존재**하면 통과 (값이 빈 문자열이어도 속성만 있으면 인정)
  - 대상 img 가 0개면 통과
- **적용 대상 · N/A**
  - 전 페이지타입 (집계 제외 타입은 빼고)
- **판정 파라미터**
  - `a11y_image_alt` · 룰 `css_all_have_attr`
    - selector: `img`
    - attr: `alt`
    - ignore_src_contains: `adnxs.com`, `ads.linkedin.com`, `doubleclick`, `googletagmanager`, `google-analytics`, `facebook.com/tr`, `/pixel`, `/collect`, `scorecardresearch`, `demdex`, `everesttech`, `bat.bing`
- **예외 · 별도 조건**
  - 트래킹 픽셀 제외 — src 에 `adnxs.com`, `ads.linkedin.com`, `doubleclick`, `googletagmanager`, `google-analytics`, `facebook.com/tr`, `/pixel`, `/collect`, `scorecardresearch`, `demdex`, `everesttech`, `bat.bing` 포함 시 판정 대상에서 제외
- **FAIL 예시 · 개선**
  - **FAIL** `alt` 속성이 없는 이미지가 1개라도 있음
  - **개선** 의미 있는 이미지에 설명을 채웁니다. 꾸밈용 이미지는 빈 값으로 명시합니다.

### #10 — Semantic HTML
- **정의**: 콘텐츠의 역할과 구조를 명확하게 표현하는 의미 기반 HTML 요소 사용
- **PASS**: 헤딩+랜드마크 합계 8개 이상 (main 필수 아님)
- **측정방법**: main(role=main 인정), nav, header, footer, article, section, aside + 헤딩 합산
- **check id**: `a11y_semantic`
- **검수 대상**
  - DOM — 랜드마크 태그 `main`·`nav`·`header`·`footer`·`article`·`section`·`aside` + 헤딩 `h1~h6` + `role="main"`
- **판정 로직**
  - 랜드마크 + 헤딩 **합계 ≥ 8**
- **적용 대상 · N/A**
  - 전 페이지타입 (집계 제외 타입은 빼고)
- **판정 파라미터**
  - `a11y_semantic` · 룰 `landmark_count_min`
    - min_landmarks: `8`
    - require_main: `no`
- **예외 · 별도 조건**
  - `<main>` 필수 아님 (`require_main: no`) — 유무는 참고 값으로만 기록
  - `<div role="main">` 도 랜드마크로 인정
- **FAIL 예시 · 개선**
  - **FAIL** 헤딩 + 랜드마크 합계 8 미만 (예: 헤딩 3 + 랜드마크 4 = 7)
  - **개선** 머리말·메뉴·본문·꼬리말 영역을 구분해 표시합니다.

### #11 — Heading Hierarchy
- **정의**: 페이지의 제목과 하위 내용을 구분하는 Heading Tag의 계층 구조 적용 여부
- **PASS**: 본문 헤딩 역순 0건
- **측정방법**: 본문 첫 헤딩보다 상위 레벨이 뒤에 오는 역순 탐지 (GNB·푸터 헤딩 제외, 레벨 점프 허용)
- **check id**: `a11y_heading_hier`
- **검수 대상**
  - DOM — **본문 영역**의 헤딩만 (GNB·헤더·푸터 등 보일러플레이트 제거 후)
- **판정 로직**
  - 첫 헤딩 레벨보다 **얕은(상위) 레벨이 뒤에 등장하는 역순이 0건**이면 통과
  - 레벨 건너뛰기(h1→h3)는 허용
- **적용 대상 · N/A**
  - 전 페이지타입 (집계 제외 타입은 빼고)
- **판정 파라미터**
  - `a11y_heading_hier` · 룰 `heading_no_jump`
- **예외 · 별도 조건**
  - 제외 헤딩 — `nav`·`header`·`footer` 태그 내부, class/id 에 `gnb`, `lnb`, `global-nav`, `site-header`, `site-footer`, `cookie`, `skip-to`, `breadcrumb`, `info-sticky`, `sticky`, `c-tabs`, `tab-list`, `anchor-inner` 포함 블록 (PDP 스티키 바의 <h2> 제품명·탭 버튼 <h2> 오탐 방지)
  - 본문 헤딩이 0개면 FAIL
- **FAIL 예시 · 개선**
  - **FAIL** 헤딩 역순 — 첫 헤딩(h2)보다 상위 레벨(h1)이 뒤에 등장
  - **FAIL** 본문 영역에 헤딩 태그 없음
  - **개선** 제목 단계를 건너뛰지 않게 정리하고, 글씨를 크게 하려고 제목 태그를 쓰는 것을 막습니다.

### #12 — ARIA Labels
- **정의**: 버튼·입력창 등 UI 요소의 이름과 역할을 설명하는 정보 제공 여부
- **PASS**: 누락 < 10%
- **측정방법**: Button, input, a 접근성텍스트
- **check id**: `a11y_aria_labels`
- **검수 대상**
  - DOM — 인터랙티브 요소 `button`·`input`·`a`
- **판정 로직**
  - 접근성 텍스트(`aria-label`, `aria-labelledby`, `title`, input 의 `value`, 내부 `img[alt]`, 요소 텍스트 중 하나) 없는 요소 비율 **< 10%**
- **적용 대상 · N/A**
  - 전 페이지타입 (집계 제외 타입은 빼고)
- **판정 파라미터**
  - `a11y_aria_labels` · 룰 `aria_missing_ratio_max`
    - max_ratio: `0.1`
- **예외 · 별도 조건**
  - `input[type=hidden]` 과 `href` 없는 `a` 는 인터랙티브 요소로 세지 않음
  - 인터랙티브 요소가 0개면 통과
- **FAIL 예시 · 개선**
  - **FAIL** 접근성 텍스트 없는 버튼·링크 비율 10% 이상 (아이콘만 있는 버튼 등)
  - **개선** 아이콘 버튼·탭·접기 메뉴에 용도 설명을 붙입니다.

---

## Basic SEO

> 페이지 제목과 설명 등 기본 정보가 잘 갖춰져 있는지

### #13 — Title
- **정의**: 검색엔진과 사용자에게 페이지의 핵심 주제를 전달하는 페이지 제목
- **PASS**: 존재 (30~60자)
- **측정방법**: title tag HTML 파싱 후 검증
- **check id**: `seo_title`
- **검수 대상**
  - DOM — `<title>`
- **판정 로직**
  - 텍스트 길이 **≥ 1자**
- **적용 대상 · N/A**
  - 전 페이지타입 (집계 제외 타입은 빼고)
- **판정 파라미터**
  - `seo_title` · 룰 `css_text_min_length`
    - selector: `title`
    - min_length: `1`
- **예외 · 별도 조건**
  - 없음
- **FAIL 예시 · 개선**
  - **FAIL** `<title>` 이 비어 있음
  - **개선** 페이지마다 서로 다른 제목을 넣습니다 (60자 안팎).

### #14 — Meta Description
- **정의**: 검색결과에서 페이지의 주요 내용을 요약해 전달하는 메타 설명 문구
- **PASS**: 존재 (120~160자)
- **측정방법**: meta[name="description"] HTML 파싱 후 검증
- **check id**: `seo_meta_desc`
- **검수 대상**
  - DOM — `meta[name='description' i]` 의 `content`
- **판정 로직**
  - content 값 **≥ 1자**
- **적용 대상 · N/A**
  - 전 페이지타입 (집계 제외 타입은 빼고)
- **판정 파라미터**
  - `seo_meta_desc` · 룰 `css_attr_exists`
    - selector: `meta[name='description' i]`
    - attr: `content`
    - min_length: `1`
- **예외 · 별도 조건**
  - 없음
- **FAIL 예시 · 개선**
  - **FAIL** `meta[name='description']` 태그 없음
  - **FAIL** `content` 속성이 비어 있음
  - **개선** 페이지 핵심을 담은 요약문을 채웁니다 (120~160자).

### #15 — Canonical
- **정의**: 검색엔진에 대표 페이지를 알려주는 URL 설정
- **PASS**: 존재 + 동일 host (경로 차이 허용)
- **측정방법**: link[rel="canonical"] host 일치 검증
- **check id**: `seo_canonical`
- **검수 대상**
  - DOM — `link[rel='canonical']` 의 `href` vs 최종 URL(리다이렉트 반영)
- **판정 로직**
  - 정규화(스킴·호스트 소문자화, 중복·트레일링 슬래시 정리, 쿼리스트링·프래그먼트 무시) 후 **호스트 일치**면 통과
  - 상대경로 href 는 현재 URL 기준으로 절대화
- **적용 대상 · N/A**
  - 전 페이지타입 (집계 제외 타입은 빼고)
- **판정 파라미터**
  - `seo_canonical` · 룰 `canonical_self`
- **예외 · 별도 조건**
  - 2026-09-17 경로 일치 → 호스트 일치로 완화 — 같은 제품군 여러 페이지가 대표 1개를 정본 선언하는 의도된 정규화(실측 434건)를 감점하지 않기 위함
  - canonical 태그가 없거나 외부 도메인을 가리키면 FAIL
- **FAIL 예시 · 개선**
  - **FAIL** canonical 태그 없음
  - **FAIL** canonical 이 다른 도메인(예: `solutions.us.lg.com`)을 가리킴
  - **개선** 각 페이지에 자기 자신을 가리키는 정식 주소 표시를 넣습니다.

### #16 — H1
- **정의**: 페이지 본문의 대표 제목을 나타내는 최상위 제목 태그의 개수
- **PASS**: 정확히 1개 존재
- **측정방법**: h1 tag HTML 파싱 후 검증 (카운트)
- **check id**: `seo_h1`
- **검수 대상**
  - DOM — `h1`
- **판정 로직**
  - 개수 **정확히 1개** (`== 1`)
- **적용 대상 · N/A**
  - 전 페이지타입 (집계 제외 타입은 빼고)
- **판정 파라미터**
  - `seo_h1` · 룰 `css_count`
    - selector: `h1`
    - operator: `==`
    - value: `1`
- **예외 · 별도 조건**
  - 없음
- **FAIL 예시 · 개선**
  - **FAIL** `h1` 0개
  - **FAIL** `h1` 2개 이상
  - **개선** 가장 큰 제목을 페이지당 하나만 두고, 로고나 배너에 붙은 큰 제목 태그를 뗍니다.

### #17 — Robots
- **정의**: 검색엔진이 이 페이지를 수집하고 검색결과에 노출해도 되는지 알려주는 설정
- **PASS**: meta robots 또는 X-Robots-Tag 중 하나로 Indexing 허용
- **측정방법**: meta robots HTML 파싱 후 검증, X-Robots-Tag 헤더↑ 응답값 확인
- **check id**: `seo_robots`
- **검수 대상**
  - DOM `meta[name='robots' i]` 의 `content` + 응답 헤더 `X-Robots-Tag`
- **판정 로직**
  - **양쪽 모두**에 `noindex` 토큰이 없어야 통과
  - 선언 자체가 없으면 기본 허용으로 통과
- **적용 대상 · N/A**
  - 전 페이지타입 (집계 제외 타입은 빼고)
- **판정 파라미터**
  - `seo_indexable` · 룰 `noindex_absent`
    - selector: `meta[name='robots' i]`
    - header: `x-robots-tag`
    - token: `noindex`
- **예외 · 별도 조건**
  - 과거에는 meta/헤더를 각각 채점해 meta 만 쓰는 정상 구성이 감점됐음 — 한 항목(`seo_indexable`)으로 통합
  - 구 스냅샷의 `seo_robots`(+`_hdr`) 행은 집계에서 같은 행으로 병합
- **FAIL 예시 · 개선**
  - **FAIL** meta robots 또는 `X-Robots-Tag` 에 `noindex` 선언
  - **개선** 공개 대상 페이지에 수집 차단이 걸려 있지 않은지 태그와 헤더 양쪽을 확인합니다.

### #18 — Open Graph
- **정의**: 링크를 공유했을 때 제목·이미지가 함께 표시되도록 전달하는 정보
- **PASS**: 메타 태그 영역에 OG 태그 존재
- **측정방법**: og: meta 태그
- **check id**: `seo_open_graph`
- **검수 대상**
  - DOM — `meta[property^='og:']`
- **판정 로직**
  - `og:title` 과 `og:image` 가 **모두** 비어있지 않은 content 로 존재
- **적용 대상 · N/A**
  - 전 페이지타입 (집계 제외 타입은 빼고)
- **판정 파라미터**
  - `seo_open_graph` · 룰 `og_required_pairs`
    - required: `title`, `image`
- **예외 · 별도 조건**
  - 없음
- **FAIL 예시 · 개선**
  - **FAIL** `og:title`·`og:image` 누락
  - **개선** 공유용 제목과 대표 이미지를 채웁니다 (이미지 1200×630 이상).

### #19 — Sitemap
- **정의**: 사이트의 전체 페이지 목록을 검색엔진에 알려주는 파일의 최신 여부
- **PASS**: 1개월 내 Published/Update 된 Sitemap XML 존재
- **측정방법**: /sitemap.xml HEAD 요청, 각 국가별 Sitemap.xml 검증
- **check id**: `seo_sitemap`
- **검수 대상**
  - 외부 요청 — URL 의 국가 디렉토리 자동 감지(`/us/` 등) 후 `/{cc}/sitemap.xml` → `/{cc}/sitemap_index.xml` → 루트 `/sitemap.xml` → `/sitemap_index.xml` 순 시도
- **판정 로직**
  - HTTP 200 + `Last-Modified` 헤더 또는 XML `<lastmod>` 최신값이 **30일 이내**
- **적용 대상 · N/A**
  - 전 페이지타입 (집계 제외 타입은 빼고)
- **판정 파라미터**
  - `seo_sitemap` · 룰 `sitemap_recent`
    - path: `/sitemap.xml`
    - max_days: `30`
- **예외 · 별도 조건**
  - `js`·`css`·`img`·`api`·`v1`·`v2`·`ws` 는 국가 코드로 보지 않음
  - 캐시 키에 국가를 포함해 감사 순서에 따라 앞 국가 결과가 뒤 국가에 전염되는 오염 차단 (2026-09-16 수정)
  - 봇 보호(Akamai) 차단 회피를 위해 전용 UA 사용
- **FAIL 예시 · 개선**
  - **FAIL** 사이트맵 마지막 갱신이 30일보다 오래됨
  - **개선** 사이트맵을 한 달 안으로 갱신하고 수정일이 실제 수정 시점을 가리키게 합니다.

---

## 스키마마크업

> 제품·이미지·영상·사용방법 등 정보의 종류를 AI가 구분할 수 있는지

### #20 — Schema Types - Organization
- **정의**: 회사의 이름·연락처·주소 등 기업 정보를 AI가 읽을 수 있게 표기
- **PASS**: JSON-LD 필수요소 모두 존재, 파싱 성공
- **측정방법**: contactPoint, address, geo, hasMap 존재
- **상태**: TBD — 추후 개선항목 확인 후 정리. 자가 콘텐츠 분석·기준 세분화·검수 에이전트 고도화 후 항목 추가 예정

### #21 — Schema Types - BreadcrumbList
- **정의**: 현재 페이지가 사이트 구조상 어느 위치에 있는지 알려주는 경로 정보
- **PASS**: JSON-LD 필수요소 모두 존재, 파싱 성공
- **측정방법**: itemListElement, item, name, position 등 존재
- **check id**: `ai_schema_breadcrumb`
- **검수 대상**
  - JSON-LD (`script[type=application/ld+json]` 전체 트리 탐색)
- **판정 로직**
  - `@type=BreadcrumbList` 노드에 `itemListElement` 필드가 비어있지 않게 존재
- **적용 대상 · N/A**
  - 전 페이지타입 (집계 제외 타입은 빼고)
- **판정 파라미터**
  - `ai_schema_breadcrumb` · 룰 `schema_required_fields`
    - type: `BreadcrumbList`
    - fields: `itemListElement`
- **예외 · 별도 조건**
  - 없음 (전 페이지타입 적용)
  - 필드 검사는 dot-path — 배열이면 첫 원소로 검사
- **FAIL 예시 · 개선**
  - **FAIL** `@type=BreadcrumbList` 노드 없음
  - **개선** 위치 정보 라벨을 전 페이지 공통 템플릿에 넣습니다.

### #22 — Schema Types - Speakable
- **정의**: 음성 서비스가 대신 읽어줄 수 있도록 핵심 문장 영역을 지정
- **PASS**: JSON-LD 필수요소 모두 존재, 파싱 성공
- **측정방법**: speakable.cssSelector 존재
- **상태**: TBD — 추후 개선항목 확인 후 정리. 자가 콘텐츠 분석·기준 세분화·검수 에이전트 고도화 후 항목 추가 예정

### #23 — Schema Types - FAQ
- **정의**: 자주 묻는 질문과 답변을 AI가 읽을 수 있게 표기
- **PASS**: JSON-LD 필수요소 모두 존재, 파싱 성공
- **측정방법**: mainEntity 존재 — FAQ 섹션이 있는 페이지만 평가(없으면 N/A)
- **check id**: `ai_schema_faq`
- **검수 대상**
  - JSON-LD + 적용 게이트: DOM
- **판정 로직**
  - `@type=FAQPage` 에 `mainEntity` 존재
- **적용 대상 · N/A**
  - 페이지타입: 제품 상세 (PDP), 제품 카테고리 (PLP), 구매 가이드, Microsite
  - 아래 조건이 없으면 N/A (분모 제외): `class_id_contains`
    - keywords: `faq`, `자주 묻는`, `자주묻는`, `frequently asked`, `veelgestelde vragen`, `q&a`, `qna`, `questions`, `질문`, `answer`, `accordion`
    - tags: `div`, `section`, `aside`, `article`, `details`
  - N/A 안내 — FAQ 섹션(클래스·헤딩)이 없는 페이지라 FAQPage 스키마 평가 대상이 아닙니다.
- **판정 파라미터**
  - `ai_schema_faq` · 룰 `schema_required_fields`
    - type: `FAQPage`
    - fields: `mainEntity`
- **예외 · 별도 조건**
  - 적용 조건 — 페이지타입 `pdp`·`plp`·`buying_guide`·`microsite` **이고** 페이지에 FAQ 섹션이 있어야 함: `div`·`section`·`aside`·`article`·`details` 의 class/id 에 `faq`, `자주 묻는`, `자주묻는`, `frequently asked`, `q&a`, `qna`, `questions`, `질문`, `answer`, `accordion`
  - FAQ 섹션이 없으면 N/A (분모 제외)
- **FAIL 예시 · 개선**
  - **FAIL** FAQ 섹션은 있는데 `@type=FAQPage` 노드 없음
  - **개선** 이미 있는 FAQ 아코디언에 라벨이 자동으로 붙게 컴포넌트를 고칩니다.

### #24 — Schema Types - Collectionpage
- **정의**: 여러 항목을 모아 보여주는 목록형 페이지임을 AI가 읽을 수 있게 표기
- **PASS**: JSON-LD 필수요소 모두 존재, 파싱 성공
- **측정방법**: itemList, ListItem 존재
- **check id**: `ai_schema_collection`
- **검수 대상**
  - JSON-LD
- **판정 로직**
  - `@type=CollectionPage` 에 `mainEntity` 존재
- **적용 대상 · N/A**
  - 페이지타입: 제품 카테고리 (PLP)
- **판정 파라미터**
  - `ai_schema_collection` · 룰 `schema_required_fields`
    - type: `CollectionPage`
    - fields: `mainEntity`
- **예외 · 별도 조건**
  - 적용 페이지타입 — `plp` 만
  - 그 외는 N/A
- **FAIL 예시 · 개선**
  - **FAIL** PLP 에 `@type=CollectionPage` 노드 없음
  - **개선** PLP 템플릿에 모음 라벨과 목록에 담긴 제품들을 함께 표시합니다.

### #25 — Schema Types - Product + Offer + AggregateRating + Review
- **정의**: 제품명·가격·재고·평점·후기 등 제품 정보를 AI가 읽을 수 있게 표기
- **PASS**: JSON-LD 필수요소 모두 존재, 파싱 성공
- **측정방법**: name, description, sku, brand, offers.price, offers.availability, aggregateRating.ratingValue, Review 존재
- **check id**: `ai_schema_product`, `ai_schema_offer`
- **검수 대상**
  - JSON-LD (두 체크 병합)
- **판정 로직**
  - **AND 병합** —
    - ① `@type=Product` 에 `name`, `description`, `sku`, `brand`, `offers.price`, `offers.availability`
    - ② `@type=Offer` 에 `price`, `priceCurrency`, `availability` — **둘 다 통과해야 통과** (2026-08-31 병합)
- **적용 대상 · N/A**
  - `ai_schema_product` — 페이지타입: 제품 상세 (PDP), business
  - `ai_schema_offer` — 페이지타입: 제품 상세 (PDP), business, promotion
- **판정 파라미터**
  - `ai_schema_product` · 룰 `schema_required_fields`
    - type: `Product`
    - fields: `name`, `description`, `sku|mpn|gtin13|gtin`, `brand`, `offers.price`, `offers.availability`
    - alt_types: `ProductGroup`
  - `ai_schema_offer` · 룰 `schema_required_fields`
    - type: `Offer`
    - fields: `price`, `priceCurrency`, `availability`
- **예외 · 별도 조건**
  - 적용 페이지타입 — `pdp`
  - 대체 타입 `ProductGroup` 인정 — 색상/용량 변형 제품은 실제 정보가 `hasVariant` 배열에 있으므로 부모+변형을 병합해 후보로 검사 (US 액세서리 12건 오판 방지)
  - Offer 체크는 `promotion` 에도 적용되지만 해당 타입은 집계에서 제외됨
- **FAIL 예시 · 개선**
  - **FAIL** Product(name·description·sku·brand·offers) 또는 Offer(price·priceCurrency·availability) 필드 일부 누락
  - **개선** 제품 정보 라벨을 원본 소스에 함께 내려보냅니다.

### #26 — Schema Types - ImageObject
- **정의**: 이미지의 주소·이름·설명 등 이미지 정보를 AI가 읽을 수 있게 표기
- **PASS**: JSON-LD 필수요소 모두 존재, 파싱 성공
- **측정방법**: url(또는 contentUrl), name(또는 caption), description 존재 — Review·Comment 안의 리뷰 사진은 제외, 본문 콘텐츠 이미지가 있는 페이지만 평가(없으면 N/A)
- **check id**: `ai_schema_image`
- **검수 대상**
  - JSON-LD + 적용 게이트: DOM 본문 콘텐츠 이미지
- **판정 로직**
  - `@type=ImageObject` 에 `url|contentUrl`, `name|caption`, `description` (| 는 대체 필드)
  - **2026-10-26 부터** `Review`·`Comment` 노드 하위의 ImageObject 는 후보에서 제외 — 리뷰 위젯(Bazaarvoice)이 넣는 고객 사진이 페이지 콘텐츠 이미지로 세어지던 오탐(10월 통과 PDP 전부가 리뷰 사진)
  - 저장된 JSON-LD 원본으로 재판정해 10월 run 에 소급 적용
- **적용 대상 · N/A**
  - 전 페이지타입 (집계 제외 타입은 빼고)
  - 아래 조건이 없으면 N/A (분모 제외): `css_exists`
    - selector: `figure img`, `article img`, `picture img`, `[class*='content'] img`, `[class*='Content'] img`, `[class*='editorial'] img`, `[class*='gallery'] img`, `[class*='Gallery'] img`, `[class*='Product-ImageGrid'] img`, `img[src*='PDPGalleryThumbnail']`, `.cmp-image img`
  - N/A 안내 — 본문 콘텐츠 이미지가 없어 ImageObject 평가 대상이 아닙니다.
- **판정 파라미터**
  - `ai_schema_image` · 룰 `schema_required_fields`
    - type: `ImageObject`
    - fields: `url|contentUrl`, `name|caption`, `description`
    - exclude_within: `Review`, `Comment`
- **예외 · 별도 조건**
  - 게이트 셀렉터 — `figure img`, `article img`, `picture img`, `[class*='content'] img`, `[class*='editorial'] img`, `[class*='gallery'] img`, `[class*='Product-ImageGrid'] img`, `img[src*='PDPGalleryThumbnail']`, `.cmp-image img`
  - 본문 이미지가 없으면 N/A
  - 리뷰 제외 후 10월 통과율은 전 국가 0% — 제품 이미지를 ImageObject 로 마크업하는 것이 개선 포인트
- **FAIL 예시 · 개선**
  - **FAIL** 본문 이미지는 있는데 `@type=ImageObject` 노드 없음
  - **FAIL** 필수 필드 누락: `name|caption`, `description`
  - **개선** 주요 이미지에 이미지 라벨(주소·설명)을 붙입니다.

### #27 — Schema Types - VideoObject
- **정의**: 영상의 주소·제목·썸네일 등 영상 정보를 AI가 읽을 수 있게 표기
- **PASS**: JSON-LD 필수요소 모두 존재, 파싱 성공
- **측정방법**: url(또는 contentUrl·embedUrl), name, description, thumbnailUrl 존재 — Review·Comment 안의 리뷰 영상은 제외, 영상이 있는 페이지만 평가(없으면 N/A)
- **check id**: `ai_schema_video`
- **검수 대상**
  - JSON-LD + 적용 게이트: DOM `video`, `iframe[src*='youtube']`, `iframe[src*='youtu.be']`, `iframe[src*='vimeo']`
- **판정 로직**
  - `@type=VideoObject` 에 `url|contentUrl|embedUrl`, `name`, `description`, `thumbnailUrl` (| 는 대체 필드)
  - **2026-10-26 부터** `Review`·`Comment` 노드 하위의 VideoObject 는 후보에서 제외 — 리뷰 영상만으로 통과하던 TV PDP 94건(국가 간 공유되는 같은 리뷰 영상) 오탐
  - 저장된 JSON-LD 원본으로 재판정
- **적용 대상 · N/A**
  - 전 페이지타입 (집계 제외 타입은 빼고)
  - 아래 조건이 없으면 N/A (분모 제외): `css_exists`
    - selector: `video`, `iframe[src*='youtube']`, `iframe[src*='youtu.be']`, `iframe[src*='vimeo']`
  - N/A 안내 — 영상이 없는 페이지라 VideoObject 스키마 평가 대상이 아닙니다.
- **판정 파라미터**
  - `ai_schema_video` · 룰 `schema_required_fields`
    - type: `VideoObject`
    - fields: `url|contentUrl|embedUrl`, `name`, `description`, `thumbnailUrl`
    - exclude_within: `Review`, `Comment`
- **예외 · 별도 조건**
  - 영상이 없는 페이지는 N/A
  - LG 제품 영상(lg.com·Brightcove·YouTube)의 VideoObject 는 그대로 인정 — 리뷰 영상만 있는 TV PDP 에 제품 영상 VideoObject 추가가 개선 포인트
- **FAIL 예시 · 개선**
  - **FAIL** 영상은 있는데 `@type=VideoObject` 노드 없음
  - **개선** 삽입된 영상에 제목·썸네일·업로드일 라벨을 붙입니다.

### #28 — Schema Types - HowTo
- **정의**: 준비물과 단계로 구성된 사용법·설치법 안내를 AI가 읽을 수 있게 표기
- **PASS**: JSON-LD 필수요소 모두 존재, 파싱 성공
- **측정방법**: HowToSupply / HowToStep 존재 — 절차(단계 목록)가 있는 트러블슈팅 페이지만 평가(없으면 N/A)
- **check id**: `ai_schema_howto`
- **검수 대상**
  - JSON-LD + 적용 게이트: DOM 절차 블록
- **판정 로직**
  - `@type=HowTo` 에 `step` 존재
- **적용 대상 · N/A**
  - 페이지타입: Support - Troubleshoot
  - 아래 조건이 없으면 N/A (분모 제외): `css_count`
    - selector: `ol > li`, `[class*='step']`, `[class*='con-view']`, `[class*='procedure']`
    - operator: `>=`
    - value: `3`
  - N/A 안내 — 절차(순서 목록·단계 블록)가 없는 페이지라 HowTo 스키마 평가 대상이 아닙니다.
- **판정 파라미터**
  - `ai_schema_howto` · 룰 `schema_required_fields`
    - type: `HowTo`
    - fields: `step`
- **예외 · 별도 조건**
  - 적용 페이지타입 — `support_troubleshoot` 만
  - 게이트 — `ol > li`, `[class*='step']`, `[class*='con-view']`, `[class*='procedure']` 개수 **≥ 3**
  - 절차 블록이 없으면 N/A
- **FAIL 예시 · 개선**
  - **FAIL** 단계 목록은 있는데 `@type=HowTo` 노드 없음
  - **FAIL** 필수 필드 누락: `step`
  - **개선** 문제 해결 절차를 단계 단위로 구조화해 라벨을 붙입니다.

### #29 — Schema Types - Article
- **정의**: 기사·콘텐츠의 제목·작성자·발행처·본문을 AI가 읽을 수 있게 표기
- **PASS**: JSON-LD 필수요소 모두 존재, 파싱 성공
- **측정방법**: headline, author, publisher, articleBody 존재 — 기사 구조가 있는 페이지만 평가(없으면 N/A)
- **check id**: `ai_schema_article`
- **검수 대상**
  - JSON-LD + 적용 게이트: DOM `article`, `[class*='article']`, `[class*='post-body']`
- **판정 로직**
  - `@type=Article` 에 `headline`, `author`, `publisher`, `articleBody`
- **적용 대상 · N/A**
  - 페이지타입: experience, 구매 가이드, Microsite, Support - Troubleshoot
  - 아래 조건이 없으면 N/A (분모 제외): `css_exists`
    - selector: `article`, `[class*='article']`, `[class*='post-body']`
  - N/A 안내 — 기사 본문 구조가 없는 페이지라 Article 스키마 평가 대상이 아닙니다.
- **판정 파라미터**
  - `ai_schema_article` · 룰 `schema_required_fields`
    - type: `Article`
    - fields: `headline`, `author`, `publisher`, `articleBody`
- **예외 · 별도 조건**
  - 적용 페이지타입 — `experience`·`buying_guide`·`microsite`
  - 기사 본문 구조가 없으면 N/A
- **FAIL 예시 · 개선**
  - **FAIL** 기사 본문 구조는 있는데 `@type=Article` 노드 없음
  - **FAIL** 필수 필드 누락: `articleBody`
  - **개선** 기사와 가이드에 제목·작성자·발행일 라벨을 붙입니다.

### #30 — Schema Types - digitalDocument
- **정의**: 매뉴얼·카탈로그 등 첨부 문서의 이름·형식·주소를 AI가 읽을 수 있게 표기
- **PASS**: JSON-LD 필수요소 모두 존재, 파싱 성공
- **측정방법**: name, url, fileFormat, description 존재
- **상태**: TBD — 추후 개선항목 확인 후 정리. 자가 콘텐츠 분석·기준 세분화·검수 에이전트 고도화 후 항목 추가 예정

### #31 — Schema Types - Recipe
- **정의**: 재료와 조리 단계로 구성된 레시피 정보를 AI가 읽을 수 있게 표기
- **PASS**: JSON-LD 필수요소 모두 존재, 파싱 성공
- **측정방법**: Name, description, image, author, datepublihsed, recipeIngredient, recipeInstructions 존재
- **상태**: TBD — 추후 개선항목 확인 후 정리. 자가 콘텐츠 분석·기준 세분화·검수 에이전트 고도화 후 항목 추가 예정

### #44 — Schema Types - AggregateRating 또는 Review
- **정의**: 제품의 평점 또는 고객 리뷰 정보를 AI가 읽을 수 있게 표기
- **PASS**: AggregateRating·Review 중 하나라도 JSON-LD 에 존재
- **측정방법**: @type AggregateRating 또는 Review 노드 존재 — Product 에 연결되지 않은 별도 블록이어도 인정, PDP 만 평가(그 외 N/A). 2026-10-24 채점 활성
- **check id**: `ai_schema_rating_or_review`
- **검수 대상**
  - JSON-LD 전체 (`@type` 없는 별도 블록 포함) + 적용 게이트: page_type = `pdp`
- **판정 로직**
  - `@type=AggregateRating` 또는 `@type=Review` 노드가 하나라도 있으면 통과(`schema_any_of`)
  - Product 노드에 연결되지 않은 별도 JSON-LD 블록(Bazaarvoice 리뷰 위젯의 `{"review": [...]}`)이어도 인정 — 2026-10-26 사용자 확인
  - 2026-10-24 채점 활성(사용자 결정, LG PDP 3,147건에 Review 추가됨)
  - 활성 채점 항목 37 → 38
- **적용 대상 · N/A**
  - 페이지타입: 제품 상세 (PDP)
- **판정 파라미터**
  - `ai_schema_rating_or_review` · 룰 `schema_any_of`
    - types: `AggregateRating`, `Review`
- **예외 · 별도 조건**
  - PDP 외 페이지타입은 N/A
  - 리뷰 안의 사진·영상은 #26·#27 에서 제외하지만, 리뷰 자체를 보는 본 항목은 그대로 인정
  - #25 Product 풀세트의 `aggregateRating.ratingValue` 와 별개 항목
- **FAIL 예시 · 개선**
  - **FAIL** PDP JSON-LD 에 `AggregateRating`·`Review` 둘 다 없음
  - **개선** 리뷰 위젯이 내려보내는 평점·리뷰 라벨을 제품 페이지 원본 소스에 그대로 싣습니다.

---

## 고인용 콘텐츠

> AI가 답변에 인용하기 좋은 형태로 콘텐츠가 작성되어 있는지

### #32 — FAQ Block*
- **정의**: 본문 안에 질문과 답변 형태로 구성된 콘텐츠가 있는지
- **PASS**: 1개 이상 존재
- **측정방법**: FAQPage Schema, details/summary, Q&A 패턴
- **check id**: `ai_faq_block`
- **분류**: Contents 체크 항목
- **검수 대상**
  - 본문 텍스트(보일러플레이트 제거) + DOM class/id + 헤딩·강조 텍스트 + `<details>`
- **판정 로직**
  - 세 경로 중 **하나라도** 충족
    - ① 질문 문장 경로 — 물음표 문장(`[^.!?\n]{10,200}\?`) ≥ 1개 **AND** 의문사 포함(문두 what/which/how… 5개 언어 + 한국어·베트남어 꼬리형 `나요/까요/습니까`·`nào/gì`) **AND** 본문에 다국어 문답 키워드(`faq`, `frequently asked`, `preguntas frecuentes`, `häufig gestellte fragen`, `perguntas frequentes`, `câu hỏi thường gặp`, `자주 묻는` 등) 존재 — 세 조건 AND (2026-09-17 ‘C안’)
    - ② class/id 키워드(`faq`, `q&a`, `qna`, `questions`, `answer`, `accordion`, `자주 묻는`, `질문` — `div`·`section`·`aside`·`article`·`details`) 또는 헤딩·강조 태그(`h1~h6`·`b`·`strong`·`dt`·`summary`·`caption`·`legend`, ≤60자) 텍스트에 키워드
    - ③ `<details>` ≥ 3개
- **적용 대상 · N/A**
  - 전 페이지타입 (집계 제외 타입은 빼고)
- **판정 파라미터**
  - `ai_faq_block` · 룰 `class_id_contains`
    - keywords: `faq`, `자주 묻는`, `자주묻는`, `frequently asked`, `veelgestelde vragen`, `q&a`, `qna`, `questions`, `질문`, `answer`, `accordion`
    - tags: `div`, `section`, `aside`, `article`, `details`
    - question_min: `1`
    - question_keywords: `frequently asked`, `faq`, `q&a`, `qna`, `common questions`, `questions and answers`, `your questions`, `answer`, `answers`, `ask us`, `need help`, `help center`, `learn more about`, `자주 묻는`, `자주묻는`, `질문`, `답변`, `문의`, `궁금`, `preguntas frecuentes`, `preguntas`, `respuesta`, `respuestas`, `dudas`, `häufig gestellte fragen`, `haufig gestellte fragen`, `fragen`, `antwort`, `antworten`, `perguntas frequentes`, `perguntas`, `resposta`, `respostas`, `dúvidas`, `duvidas`, `câu hỏi thường gặp`, `câu hỏi`, `giải đáp`, `thắc mắc`, `trả lời`, `veelgestelde vragen`, `vragen`, `antwoord`, `antwoorden`
    - class_need_question: `accordion`
- **예외 · 별도 조건**
  - 의문사 없는 물음표 문장 제외 — ‘Need Help?’·매체명 ‘Which?’ 오탐 (UK PLP 실측: 물음표 문장 5개 전부 오탐)
  - 하단 피드백 위젯 문구(‘Was this helpful’ 계열 8개 언어) 제외 — 통과분의 77% 가 이 오탐이었음
  - #35 와 달리 `<p>` 라벨 스캔은 하지 않음 (‘Have questions?’ 짧은 UI 문구 오탐 방지)
  - `accordion` 은 요소 안에 질문 문장(…?)이 있을 때만 FAQ 로 인정 (2026-10-31 — US 푸터 사이트맵 메뉴 `div#footnote` 의 MuiAccordion 으로 US 682건 허위 통과)
  - 위젯·모달 질문도 제외 (2026-10-31): `How would you improve the information?`(AU·IN·UK 트러블슈팅) · `Hoe zou u de informatie verbeteren?`(NL) · `Hoe kan ik u van dienst zijn?`(BE 상담 챗) · `Wie könnten die bereitgestellten…`(DE) · VN 로그인·스펙 모달
  - 10월 측정분은 HTML 재수집으로 위 새 기준을 소급 재판정 (상류 `data/item_overrides.json`, 1,447건)
- **FAIL 예시 · 개선**
  - **FAIL** FAQ 키워드(`faq`, `자주 묻는` …)를 포함한 요소를 찾지 못함
  - **개선** 페이지 주제와 직접 관련된 질문 3개 이상을 FAQ 형태로 추가합니다.

### #33 — Definition Paragraph*
- **정의**: “A는 B이다” 처럼 용어의 뜻을 풀어 설명하는 문장이 있는지
- **PASS**: 1개 이상 존재
- **측정방법**: "X는 Y이다", dfn, abbr 태그 — 패턴 매칭 문장을 문장 판정 모델(geo-audit-3b)이 확인, 0건이면 본문 40문장을 모델로 탐색
- **check id**: `ai_definition`
- **분류**: Contents 체크 항목
- **검수 대상**
  - DOM `dfn`·`abbr` + 본문 텍스트(보일러플레이트 제거) + 문장 판정 모델 `geo-audit-3b`(올라마 로컬)
- **판정 로직**
  - `dfn`/`abbr` 개수 + 다국어 정의문 패턴 매칭 **합계 ≥ 1**
  - 패턴 — 한국어(`X는/이란 …이다/입니다/를 말한다/의미한다/가리킨다/약자이다`), 영어(`X is/refers to/means/stands for/is defined as/also known as/is short for/consists of`), 스페인어(`se define como/se conoce como/consiste en`), 독일어(`wird als … bezeichnet/steht für/besteht aus`), 포르투갈어(`é um tipo de/consiste em/trata-se de`), 베트남어(`được gọi là/viết tắt của`), 약어 정의 `[A-Z]{2,6} (Full Name)`, 질문형 `What is X?`
  - **2026-10-18 부터** 패턴 매칭 문장을 문장 판정 모델이 최종 확인하고, 매칭 0건이면 본문 앞 40문장을 모델로 훑어 정의문을 탐색(정규식 OR 모델)
  - `dfn`/`abbr` 이 기준을 채우면 모델 호출 없음
  - 모델 미연결 시 정규식 판정 폴백
- **적용 대상 · N/A**
  - 전 페이지타입 (집계 제외 타입은 빼고)
- **판정 파라미터**
  - `ai_definition` · 룰 `definition_pattern_min`
    - min_count: `1`
    - model: `yes`
    - model_scan_max: `40`
- **예외 · 별도 조건**
  - 계사 기본형(`ist ein`/`es la`/`é a`)은 2026-09-19 제거 — ‘Im letzten Zimmer ist ein’ 같은 일반 문장을 정의문으로 오탐
  - 약관·결제·상표 고지 문장(#36 노이즈 목록과 동일)과 지시대명사 주어(`This is a…`)는 2026-10-17 부터 정의문으로 세지 않음 — 사람 판정 정답 기준 정밀도 20% → 50%
  - 본문 문장 추출에서 nav·푸터·쿠키·프로모 배너·**숨은 모달/다이얼로그** 제외(2026-10-19 — US help-library 의 브라우저 안내 모달이 67/100 허위 통과시킨 사례)
- **FAIL 예시 · 개선**
  - **FAIL** 정의문 0건 — 1건 이상 필요
  - **FAIL** 후보가 있었지만 모델이 제외 (예: 질문 문장, 내비게이션 메뉴 나열)
  - **개선** 핵심 용어와 기술 이름을 한 문장 정의로 본문에 넣습니다.

### #34 — Author/Source
- **정의**: 내용을 누가 언제 썼는지 알 수 있는 저자 또는 출처·날짜 표기
- **PASS**: 저자 또는 (출처+날짜) 존재
- **측정방법**: JSON-LD author 또는 (datePublished + publisher) — newsroom·press_media 타입만 평가
- **check id**: `ai_author_source`
- **검수 대상**
  - JSON-LD 전체 노드 (@type 무관 트리 탐색)
- **판정 로직**
  - `author` 필드 존재 **또는** `datePublished` + (`publisher` | `sourceOrganization` | `source`) 조합
- **적용 대상 · N/A**
  - 페이지타입: Global Newsroom, Press & Media
- **판정 파라미터**
  - `ai_author_source` · 룰 `author_or_source`
- **예외 · 별도 조건**
  - 적용 페이지타입 — `newsroom`·`press_media` (상류 scoring_config 기준; 구포맷 스냅샷 보정 게이트는 `buying_guide`·`lg_experience` 포함)
  - byline 은 에디토리얼에만 성립하는 개념이라 그 외 타입은 N/A
  - JSON-LD 노드가 아예 없으면 FAIL
- **FAIL 예시 · 개선**
  - **FAIL** JSON-LD 에 `author` 도 `datePublished`+`publisher` 조합도 없음
  - **개선** 작성자·출처·발행일을 화면과 라벨 양쪽에 표시합니다.

### #35 — Summary Box*
- **정의**: 본문 앞부분에 핵심 내용을 짧게 요약해 둔 영역이 있는지
- **PASS**: 1개 이상 존재
- **측정방법**: 헤딩·라벨 문구(At a Glance·Key features·요약 등 다국어) 또는 요약 블록 selector(p.info-desc·AEM PDP의 c-floating-features) — class명 매칭은 오탐으로 제거
- **check id**: `ai_summary_box`
- **분류**: Contents 체크 항목
- **검수 대상**
  - DOM — 요약 블록 셀렉터 + 라벨 텍스트
- **판정 로직**
  - 두 경로 중 **하나라도** 충족
    - ① 요약 블록 — `p.info-desc`, `p.description`, `div.c-floating-features` 중 텍스트 **≥ 80자** · 줄수 ≥ 1(`<br>` 수 또는 문장 수)
    - ② 라벨 — 헤딩·강조 태그(`h1~h6`·`b`·`strong`·`dt`·`summary`·`caption`·`legend`) + `<p>`(#35 전용 옵트인) 의 ≤60자 텍스트에 키워드 `summary`, `overview`, `tldr`, `abstract`, `key takeaway(s)`, `at a glance`, `highlights`, `key features`, `news summary`, `요약`, `핵심`, `한눈에`, `개요`, `resumen`, `zusammenfassung`, `resumo`, `tóm tắt` 등
- **적용 대상 · N/A**
  - 전 페이지타입 (집계 제외 타입은 빼고)
- **판정 파라미터**
  - `ai_summary_box` · 룰 `class_id_contains`
    - keywords: `summary`, `overview`, `tldr`, `tl;dr`, `abstract`, `key takeaway`, `key takeaways`, `at a glance`, `highlights`, `요약`, `핵심`, `한눈에`, `주요 특징`, `개요`, `resumen`, `de un vistazo`, `zusammenfassung`, `auf einen blick`, `im überblick`, `resumo`, `em resumo`, `visão geral`, `tóm tắt`, `tổng quan`, `samenvatting`, `in het kort`, `overzicht`, `news summary`, `key features`
    - tags: `div`, `section`, `aside`, `article`, `blockquote`, `p`
    - block_selector: `p.info-desc`, `p.description`, `div.c-floating-features`
    - block_exclude_class: `idt`
    - block_min_chars: `80`
    - block_min_lines: `1`
    - match_class: `no`
    - label_tags: `p`
- **예외 · 별도 조건**
  - class/id 매칭은 **비활성**(`match_class: no`) — ‘summary’ 클래스가 스펙 테이블·가격 요약에도 붙어 PDP 97.1% 오탐
  - `idt` 클래스 블록 제외(‘➔ Setting for…’ 단계 라벨)
  - 80자 미만 제외(‘Step 1. Preheating…’ 오탐)
  - `<p>` 라벨 스캔은 US PDP(React/MUI)의 `Key features` 라벨 대응 (2026-09-20)
- **FAIL 예시 · 개선**
  - **FAIL** 요약 블록(헤딩 문구·selector)을 찾지 못함
  - **개선** 페이지 맨 위에 3~5줄짜리 핵심 요약 상자를 넣습니다.

### #36 — Citable Sentences*
- **정의**: 숫자·연도·통계처럼 AI가 근거로 인용하기 좋은 문장이 충분히 있는지
- **PASS**: 5개 이상 (트러블슈팅·PLP 3개)
- **측정방법**: 숫자·연도·통계·인증 및 검증/권위 서술(EEAT: 시험·특허·전문가 추천·임상 입증) 포함 문장 — 패턴 후보를 문장 판정 모델(geo-audit-3b)이 확인한 문장만 집계, 후보로 못 채우면 본문 앞 40문장도 모델이 탐색
- **check id**: `ai_citable`
- **분류**: Contents 체크 항목
- **검수 대상**
  - 본문 텍스트 — 보일러플레이트(GNB·푸터·쿠키)와 HTML 주석 제거 후 문장 단위 분리(`(?<=[.!?。\n])\s+`, 6자 미만 제외)
- **판정 로직**
  - 24개+ 패턴군 중 하나라도 매칭되는 문장 **≥ 5개** (비율→개수 기준 변경 2026-09-17)
  - **트러블슈팅·PLP 는 ≥ 3개** (2026-10-26, 10월 감사부터) — 5개는 PDP·에디토리얼처럼 긴 본문 전제인데 트러블슈팅은 증상→원인→해결책 세 요소로 끝나고 PLP 는 카테고리 설명 몇 줄이 전부라, 콘텐츠가 있어도 떨어졌음(미달 페이지 절반 이상이 1~4개 구간) (3개 = 요소당 1문장)
  - **2026-10-18 부터** 패턴 후보 문장을 문장 판정 모델 `geo-audit-3b`(올라마 로컬, 10/24 부터 v3d)가 확인해 y 인 것만 센다 — 임계를 채우면 즉시 중단, 후보로 못 채우면 본문 앞 40문장(`model_scan_max`)도 모델이 탐색(2026-10-24 — 트러블슈팅은 숫자 없는 원인·증상 문장이라 정규식 후보 중앙값 1개였음), 실패 시 hint 에 모델 제외 사유 표시, 미연결 시 정규식 판정 폴백(value 에 표기)
  - 패턴군 — 퍼센트 · 통화(`[$€£¥₩]`) · 연도 · 큰 수(천단위 구분/4자리+) · 배수(`2x/times/veces/lần`) · million/billion 계열 · 물리·전기·디스플레이 단위(`kg…BTU`, 인치 `34"`) · 출처(`according to/según/laut/theo`) · 순위·최초(`world’s first/No.1/top N`) · 해상도·화면비 · 평점 · 용량·규격(`cu.ft/mAh/Mbps`) · 기간·보증 · 인증·표준(`ISO/ENERGY STAR/Dolby/FreeSync/HDMI`) · 비교·증감+숫자 · 수상(`CES/Red Dot/EISA`) · E-E-A-T 4패턴(실측·시험 `tested by/independently verified`, 특허 `patented`, 전문가·연구 `recommended by experts/research shows`, 임상 `clinically proven` — 2026-09-20 추가)
- **적용 대상 · N/A**
  - 전 페이지타입 (집계 제외 타입은 빼고)
- **판정 파라미터**
  - `ai_citable` · 룰 `citable_density_min`
    - min_count: `5`
    - min_count_by_type: `support_troubleshoot:3`, `plp:3`
    - model: `yes`
    - model_scan_max: `40`
- **예외 · 별도 조건**
  - 노이즈 문장 제외 — copyright 표기, PayPal/Klarna 할부 안내(`0% Finanzierung` 이 여러 패턴에 동시 매칭돼 페이지당 수십 건 오탐), 약관, 쿠키·개인정보 정책
  - 노이즈 보강(2026-10-17) — 무이자 할부(`0% interest`)·쿠폰/바우처·베트남어 할부·증정(`trả góp`, `tặng … trị giá`)·할인(`% off`/`descuento`/`dto`)·보도자료 연락처(이메일·`Media Contacts`)·공유 버튼(`Share this content`)·JavaScript 안내·상표 고지 추가 제외 — 사람 판정 정답 기준 정밀도 41% → 88%(정답 문장 손실 0)
  - 숨은 모달/다이얼로그 문장도 본문에서 제외(2026-10-19)
  - LG 자사 기술명(ThinQ 등)은 전 페이지에 있어 변별력이 없으므로 인증 패턴에 미등재
  - 임계값 10개도 검토했으나 낙폭이 커(뉴스룸 92→47%) 5개로 확정
  - 트러블슈팅·PLP 3개 기준의 통과율(32~61%)은 다른 타입(56~71%)을 넘지 않아 부풀림이 아님
  - 대시보드는 저장된 "모델 확인 N" 개수로 재판정하되 임계를 낮출 때만 — 측정 당시 임계에서 조기 중단해 N 이 잘려 있으므로 높일 때는 저장 판정 사용
- **FAIL 예시 · 개선**
  - **FAIL** 인용 가능 문장 0~2개 — 트러블슈팅·PLP 는 3개, 그 외 5개 필요
  - **개선** 본문에 수치·연도·비교 데이터를 담은 문장을 늘립니다.

---

## AI Crawlability

> AI 크롤러가 원문을 실제로 가져갈 수 있는지

### #37 — (Javascript) HTML Text Ratio
- **정의**: 화면에 보이는 글 중 자바스크립트 없이도 읽히는 글의 비중
- **PASS**: 밀도 ≥ 60%
- **측정방법**: Javascript 렌더링 후 텍스트 대비 HTML Text Count 비중 — Shadow DOM SSR 본문은 분자에서 제외
- **check id**: `ai_ssr_ratio`
- **검수 대상**
  - 원본 HTML 텍스트 vs Playwright 렌더 후 텍스트 (별도 CSR 측정 파이프라인)
- **판정 로직**
  - SSR 텍스트 비율 **≥ 60%** (`원본 텍스트 / 렌더 후 텍스트`)
  - **Shadow DOM SSR**(`<template shadowrootmode>`) 본문은 분자에서 **제외**(2026-10-05 결정) — 비JS 파서 다수(BeautifulSoup·DOMParser·trafilatura)가 본문으로 읽지 않으며(CNX 실측, html5lib 만 인식) ChatGPT·Claude 류의 해석은 비공개라 보수 기준 유지
- **적용 대상 · N/A**
  - 전 페이지타입 (집계 제외 타입은 빼고)
- **판정 파라미터**
  - `ai_ssr_ratio` · 룰 `ssr_text_ratio_min`
    - min_ratio: `0.6`
- **예외 · 별도 조건**
  - 측정 불가(Playwright 미설치·차단) 시 FAIL 처리하고 사유를 판정 근거에 남김
  - 트러블슈팅 본문의 Declarative Shadow DOM 전환(10/5 실측: AU·BR·CA·IN·VN 배포)에서 — 콘텐츠 룰(#32~#36)은 섀도 본문을 **인정**하되 #37 분자에서는 제외하고, 두 경우 모두 판정 근거에 “Shadow DOM SSR — 주요 AI 크롤러 미인식 가능(일반 DOM 전환 필요)” 를 적시
  - 대시보드는 baseline 이 주입된 페이지를 저장값이 아니라 현재 `data/csr_baseline.json` 으로 다시 판정 — 그 국가 자체 baseline 이 있을 때만 (다른 국가 평균으로 빌린 값은 재판정하지 않음, 2026-11-05)
- **FAIL 예시 · 개선**
  - **FAIL** SSR 비율 47% — 60% 이상 필요 (본문 대부분을 나중에 불러옴)
  - **개선** 주요 본문을 원본 소스에 담아 내려보냅니다.

### #38 — (Javascript) HTML Resource
- **정의**: 제품 대표 이미지가 자바스크립트 없이도 HTML 안에 들어 있는지
- **PASS**: PDP Image 썸네일의 1-3번째 이미지의 HTML 코드 존재
- **측정방법**: PDP HTML 파싱 후, 서버사이드 렌더링 확인
- **check id**: `ai_pdp_thumbnails`
- **검수 대상**
  - DOM (원본 HTML — SSR 기준)
- **판정 로직**
  - 셀렉터 `img[src*='PDPGalleryThumbnail']`, `[class*='Product-ImageGrid'] img`, `.c-summary-gallery img`, `.c-gallery img`, `.swiper-wrapper .swiper-slide img` 매칭 **≥ 3개**
- **적용 대상 · N/A**
  - 페이지타입: 제품 상세 (PDP)
- **판정 파라미터**
  - `ai_pdp_thumbnails` · 룰 `css_count`
    - selector: `img[src*='PDPGalleryThumbnail']`, `[class*='Product-ImageGrid'] img`, `.c-summary-gallery img`, `.c-gallery img`, `.swiper-wrapper .swiper-slide img`
    - operator: `>=`
    - value: `3`
- **예외 · 별도 조건**
  - 적용 페이지타입 — `pdp` 만
  - 그 외는 N/A
- **FAIL 예시 · 개선**
  - **FAIL** 원본 HTML 에 썸네일 이미지 3개 미만
  - **개선** PDP 대표 이미지 3장 이상을 원본 소스에 담습니다.

### #39 — (Javascript) 핵심 element 체크
- **정의**: 제품 페이지의 핵심 정보가 자바스크립트 없이도 HTML 안에 들어 있는지
- **PASS**: PDP의 핵심 element이 HTML 코드로 존재
- **측정방법**: PDP HTML 파싱 후, 서버사이드 렌더링 확인
- **check id**: `ai_core_element`
- **검수 대상**
  - DOM + JSON-LD 원문 + raw HTML(`__NEXT_DATA__` 등 임베디드 JSON)
- **판정 로직**
  - 5개 영역 각각 **DOM 셀렉터 OR JSON-LD 토큰 OR raw 토큰** 중 하나라도 있으면 SSR 인정 — **3개 영역 이상** 충족 시 통과
  - ① 제품명: `h1.cmp-text`, `h1`, `[class*='Product-MainTitle']` / `"name"` / `"productname"`·`"modelname"`
  - ② 가격: `[class*='Product-Price']`, `[class*='price-area']`, `.info-sticky--price` / `pricecurrency`·`"price"`·`pricespecification` / `"offers"`
  - ③ 갤러리: `img[src*='PDPGalleryThumbnail']`, `[class*='Product-ImageGrid']`, `.c-summary-gallery`, `.c-gallery` / `"image"` / `pdpgallerythumbnail`
  - ④ 사양: `[class*='Product-KeyFeatures']`, `.c-specs-summary`, `.c-all-specs-area`, `.c-specs-dimensions` / `additionalproperty` / `"specification"`·`"keyfeature"`
  - ⑤ 리뷰: `[data-bv-show]`, `[class*='review']`, `[class*='rating']` / `aggregaterating`·`"review"` / `data-bv-show`·`rating_summary`·`"reviewcount"`
- **적용 대상 · N/A**
  - 페이지타입: 제품 상세 (PDP)
- **판정 파라미터**
  - `ai_core_element` · 룰 `area_coverage`
    - min_groups: `3`
    - groups: `[object Object]`, `[object Object]`, `[object Object]`, `[object Object]`, `[object Object]`
- **예외 · 별도 조건**
  - 적용 페이지타입 — `pdp`
  - US(React) PDP 는 DOM 위젯이 CSR 이어도 데이터가 JSON-LD/`__NEXT_DATA__` 에 SSR 로 존재하면 해당 영역 SSR 로 인정
- **FAIL 예시 · 개선**
  - **FAIL** 매칭 2개(제품명·갤러리) · 누락 3개(가격·사양·리뷰) — 최소 3개 필요
  - **개선** PDP 핵심 영역을 원본 소스에 담습니다.

### #40 — Image File Name
- **정의**: 이미지 파일 이름만으로 브랜드·제품을 알아볼 수 있는지
- **PASS**: 브랜드·제품 키워드 포함 이미지 ≥ 30%
- **측정방법**: 본문 이미지 파일명 키워드 검증 (GNB·푸터·logo·icon 제외, 본문 이미지 없으면 해당 없음)
- **check id**: `ai_image_filename`
- **검수 대상**
  - DOM — `img` 의 `src`/`data-src` 파일명 (쿼리스트링 제거, 경로 마지막 세그먼트)
- **판정 로직**
  - 브랜드·제품 키워드(`lg`, `oled`, `qned`, `nanocell`, `gram`, `thinq`, `refrigerator`, `washer`, `cinebeam` 등 40여 개) 포함 파일명 비율 **≥ 30%**
- **적용 대상 · N/A**
  - 전 페이지타입 (집계 제외 타입은 빼고)
- **판정 파라미터**
  - `ai_image_filename` · 룰 `image_filename_keyword`
    - keywords: `lg`, `oled`, `qned`, `nanocell`, `uhd`, `4k`, `8k`, `tv`, `soundbar`, `speaker`, `xboom`, `monitor`, `ultragear`, `ultrawide`, `ultrafine`, `gram`, `thinq`, `refrigerator`, `fridge`, `washer`, `dryer`, `dishwasher`, `microwave`, `oven`, `cooktop`, `range`, `aircon`, `ac`, `purifier`, `styler`, `cordzero`, `vacuum`, `projector`, `cinebeam`, `tone`, `earbud`, `laptop`, `objet`, `standbyme`, `heatpump`
    - min_ratio: `0.3`
    - exclude_filename: `logo`, `icon`, `ico-`, `sprite`, `placeholder`, `blank`, `spacer`, `dummy`
    - content_only: `yes`
- **예외 · 별도 조건**
  - UI 자산 제외 — 파일명에 `logo`, `icon`, `ico-`, `sprite`, `placeholder`, `blank`, `spacer`, `dummy` 포함 시 분모에서 제외 (로고가 페이지마다 수십 번 반복 삽입돼 PDP 일수록 비율이 떨어지는 역전 회귀 — 2026-09-18 수정)
  - 콘텐츠 이미지가 0개면 FAIL
  - 본문 이미지만 판정 — GNB·LNB·헤더·푸터·모달 안 이미지 제외 (`content_only`, 2026-11-05 측정분부터). 메뉴 배너가 전 페이지 공통으로 판정을 차지했음 (CA 트러블슈팅 88장 중 85장)
  - 본문 이미지가 없으면 N/A (분모 제외)
- **FAIL 예시 · 개선**
  - **FAIL** 서술적 파일명 비율 30% 미만 (예: 9/34 = 26.5%)
  - **개선** 이미지 파일 이름에 브랜드와 모델명을 넣는 규칙을 적용합니다.

### #41 — Status Code (200)
- **정의**: 페이지가 정상적으로 열리는 상태로 응답하는지
- **PASS**: 200 Status code를 반환
- **측정방법**: Status Code
- **check id**: `ai_status_200`
- **검수 대상**
  - HTTP 응답 상태 코드
- **판정 로직**
  - `== 200`
- **적용 대상 · N/A**
  - 전 페이지타입 (집계 제외 타입은 빼고)
- **판정 파라미터**
  - `ai_status_200` · 룰 `status_code_eq`
    - code: `200`
- **예외 · 별도 조건**
  - 없음
- **FAIL 예시 · 개선**
  - **FAIL** 404 · 500 등 200 이 아닌 응답
  - **개선** 사이트맵과 내부 링크에서 깨진 주소를 걷어냅니다.

### #42 — Status Code (Soft 404)
- **정의**: 정상 응답인데 실제로는 내용이 비어 있는 페이지인지
- **PASS**: 200 응답 본문에 404 안내 문구 없음
- **측정방법**: 본문 404 문구 탐지 (본문 200자 미만은 보조 신호)
- **check id**: `ai_soft_404`
- **검수 대상**
  - 본문 텍스트 (보일러플레이트 제거)
- **판정 로직**
  - HTTP 200 인데 본문에 8개 언어 404 문구(`page not found`, `페이지를 찾을 수 없`, `página no encontrada`, `Seite nicht gefunden`, `página não encontrada`, `không tìm thấy trang` 등) 매칭 시 FAIL
  - 문구가 없어도 본문 **< 200자**면 내용 없는 200 응답으로 FAIL
- **적용 대상 · N/A**
  - 전 페이지타입 (집계 제외 타입은 빼고)
- **판정 파라미터**
  - `ai_soft_404` · 룰 `soft_404_check`
    - min_text_length: `200`
- **예외 · 별도 조건**
  - 비-200 응답은 검증 대상 아님(자동 통과 — #41 이 별도로 잡음)
  - 길이만으로는 판정하지 않음 — LG 404 페이지는 추천 제품·검색창이 붙어 보일러플레이트 제거 후에도 2,400~3,200자 (2026-09-17 실측)
  - 문구 판정이 정본(‘B안’)
  - 독일어 `nicht gefunden werden` 은 `Seite` 와 함께일 때만 404 문구로 인정 (2026-10-26 — 트러블슈팅 본문 ‘채널을 찾지 못할 수 있음’ 오탐)
- **FAIL 예시 · 개선**
  - **FAIL** 본문 200자 미만 — 내용 없는 200 응답
  - **FAIL** 200 응답 본문에 404 안내 문구 (예: `Seite nicht gefunden`)
  - **개선** 내용이 없는 페이지는 오류 응답을 주거나 콘텐츠를 채웁니다.

### #43 — llms.txt / llms-corepage.txt
- **정의**: AI에게 사이트의 핵심 페이지를 안내하는 파일이 있는지
- **PASS**: 존재
- **측정방법**: 각 국가별 llms.txt 검증
- **check id**: `ai_llms_txt`
- **검수 대상**
  - 외부 요청 — `{origin}/llms.txt` (도메인 단위 캐시, 전용 UA)
- **판정 로직**
  - HTTP 200 **AND** 본문(앞 20KB)이 HTML 이 아니고 `‘# ’`·`‘## ’`·`‘http’` 중 하나 포함
- **적용 대상 · N/A**
  - 전 페이지타입 (집계 제외 타입은 빼고)
- **판정 파라미터**
  - `ai_llms_txt` · 룰 `http_status`
    - path: `/llms.txt`
    - status: `200`
    - must_contain: `#`, `##`, `http`
- **예외 · 별도 조건**
  - soft 404 방어 — LG 는 없는 경로에도 200 + HTML 을 반환하므로 상태코드만으로 판정 금지 (2026-09-17 실측: 상태코드만 보면 전원 통과 오탐)
  - Content-Type 이 HTML 이거나 본문이 `<!doctype`/`<html` 로 시작하면 FAIL
- **FAIL 예시 · 개선**
  - **FAIL** `/llms.txt` 가 없거나 200 + HTML(soft 404) 로 응답
  - **개선** 최상위 경로에 llms.txt 를 두고 주요 영역과 정책을 적습니다.

---

## 읽는 법 · 예외 처리

### 채점에서 제외된 항목
- **#5 HTML < 100KB** — 측정은 정확하나 lg.com HTML 중앙값이 1,536KB라 실질 통과율 0.0%. 통과 건의 대부분이 본문 0자인 빈 404 셸이라 지표 방향이 반대였음
- **#8 Render Blocking 0** — 통과율 2.3%로 변별력 없음
- **(구) Sitemap XML** (`ai_sitemap_domain`) — #19 Sitemap과 rule이 완전히 동일한 중복 (어딧에서도 이미 비활성). 번호 #44 는 2026-10-24 부터 AggregateRating/Review 항목이 사용
- **#20 Organization · #22 Speakable · #30 digitalDocument · #31 Recipe** — scoring_config에서 비활성. 문서에는 회색으로 남겨둠

### 집계 대상에서 빠지는 페이지
- **B2B(사업자) · 프로모션/약관** — GEO 대상이 아니라 점수·통과율·URL 카운트 전부에서 제외
- **비-200 페이지** (404 · 500 · fetch 실패) — 전 체크가 cascade-FAIL이라 개선 대상이 아님
- **분류불가 · 홈페이지 · 회사소개 · 서포트-일반** — 측정 의미 없음 / 아웃데이트 URL 다수 (서포트-트러블슈팅은 별개 타입으로 유지)
- **브랜드 스토리/캠페인 URL** (lg-story · lifesgood 경로) — GEO KPI 대상 아님. 뉴스룸/Press 버킷에 섞여 지표를 왜곡하던 것을 제외
- **단종·비활성 PDP** (PLP 상품 API 활성 목록 밖) 및 **악세사리 PDP** (필터·리모컨·설치키트 — 카테고리와 URL 키워드로 판정) — 콘텐츠가 빈약해 PDP 평균을 왜곡
- **페이지타입별 표본 상한 100페이지** — URL SHA1 해시 순 결정적 표본 (재집계해도 같은 표본). PDP 는 상한 없음

### 측정 기준이 바뀐 항목
- **#1 TTFB** — 어딧 크롤러 자체 측정값이 동시 크롤 큐잉에 오염돼 실제보다 6~200배 크게 잡혔음. PageSpeed Insights의 server-response-time을 정본으로 교체
- **#4 Cache-Control** — 원래 룰이 no-cache/no-store가 섞이면 max-age 값과 무관하게 즉시 FAIL 처리했음. max-age 디렉티브가 설정돼 있으면 통과로 완화
- **#34 Author 또는 출처+날짜** — byline은 에디토리얼에만 성립하는 개념이라 Global Newsroom · Press & Media에만 적용 (초기에는 구매 가이드 · LG Experience 포함)
- **#33 정의문 · #36 인용 문장 — 문장 판정 모델 결합 (2026-10-18)** — 정규식 단독 판정이 사람 기준과 크게 어긋나(#36 F1 36) 문장 판정 모델 geo-audit-3b가 패턴 후보를 최종 확인. 모델 미연결 시 정규식 폴백(판정 근거에 표기)
- **#33 · #36 노이즈 제외 보강 (2026-10-17)** — 할부·쿠폰·할인·보도자료 연락처·공유 버튼·JavaScript 안내·상표 고지를 제외해 사람 판정 정답 기준 정밀도 #36 41→88% · #33 20→50%. 숨은 모달/다이얼로그 문장도 본문에서 제외 (2026-10-19)
- **#37 HTML Text Ratio — Shadow DOM SSR 분자 제외 (2026-10-05)** — 비JS 파서 다수가 본문으로 읽지 않아 보수 기준 유지. 콘텐츠 룰(#32~#36)은 섀도 본문을 인정하되 판정 근거에 “주요 AI 크롤러 미인식 가능” 적시
- **#36 인용 문장 — 트러블슈팅·PLP 는 3개 기준 (2026-10-26, 10월 감사부터)** — 5개는 긴 본문 전제. 트러블슈팅은 증상→원인→해결책 세 요소, PLP 는 카테고리 설명 몇 줄이라 콘텐츠가 있어도 떨어졌음. 후보로 못 채우면 본문 앞 40문장도 모델이 탐색 (2026-10-24)
- **#26 ImageObject · #27 VideoObject — 리뷰 위젯 안 미디어 제외 (2026-10-26)** — Review·Comment 노드 하위의 고객 사진·영상 스키마를 페이지 콘텐츠로 세던 오탐 수정(10월 #26 통과 PDP 전부가 리뷰 사진). 저장된 JSON-LD 원본으로 재판정해 10월 결과에 소급
- **#44 AggregateRating 또는 Review (PDP) — 채점 활성 (2026-10-24)** — LG PDP 3,147건에 Review 가 추가되어 사용자 결정으로 활성. Product 에 연결되지 않은 별도 블록이어도 인정. 활성 채점 항목 37 → 38

### 문서 번호와 채점 항목이 1:1이 아닌 곳
- **#17 Robots** — meta robots와 X-Robots-Tag 헤더 중 **하나만 충족해도 통과** (OR 조건). 대표 체크 하나로 채점
- **#25 Product 풀세트** — Product·Offer 를 하나로 병합 채점 (둘 다 충족해야 통과, 2026-08-31 병합)
