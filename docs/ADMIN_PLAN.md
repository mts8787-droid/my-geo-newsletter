# GEO 뉴스레터 시스템 기획서

작성 2026-04-24

## 1. 개요

LG전자 해외영업본부 D2C 마케팅팀에서 운영하는 GEO(Generative Engine Optimization) 리포팅 시스템이다. ChatGPT·Perplexity 같은 생성형 AI에 LG 제품이 얼마나 자주, 어떤 맥락으로 노출되는지를 측정해 매주 뉴스레터와 임원 대시보드로 공유한다.

운영자(PIC) 한 명이 Google Sheets에 채워진 데이터를 웹 에디터에서 불러와 편집하고, AI가 초안을 쓴 인사이트를 다듬은 뒤 게시·발송하는 구조로 돌아간다.

## 2. 기능 정의

관리자 웹에는 크게 세 종류의 기능이 있다.

**첫째, 리포트 편집 화면이다.** Visibility Editor에서 제품·국가·주차별 점수를 편집하고, Dashboard Editor에서 임원용 통합 대시보드를 만든다. Newsletter Editor는 매주 발송하는 이메일 본문을 조립하고 미리보기한다. Citation Editor는 어떤 사이트·페이지에서 LG가 인용됐는지를 정리한다. 월간·주간 리포트와 Progress Tracker도 별도 에디터로 제공된다. 모든 에디터는 Google Sheets에서 데이터를 당겨오는 "동기화" 버튼과, 결과물을 고정 URL로 공개하는 "게시" 버튼을 공통으로 가진다.

**둘째, 운영 도구다.** IP Access Manager는 게시된 리포트를 열람할 수 있는 IP 대역을 관리한다. AI Settings는 Claude에게 넘기는 작성 규칙·모델·최대 토큰을 설정한다. Archives는 과거 발행본을 보관해 AI가 문체를 학습할 때 참고 자료로 쓰인다. 최근 추가된 독일 프롬프트 예시 페이지는 DE 국가의 논브랜드 프롬프트를 카테고리·토픽·CEJ 조합별로 1개씩 뽑아 엑셀로 다운받을 수 있게 해준다.

**셋째, AI 인사이트 생성이다.** Visibility Editor의 각 섹션에서 "인사이트 생성" 버튼을 누르면 서버가 Claude API를 호출한다. 과거 발행본 12건을 참고 예시로 함께 넘기되, 옛 숫자를 그대로 복사하지 않도록 수치는 마스킹해서 전달한다. 결과 본문은 편집기에 즉시 반영되고, 마음에 들지 않으면 재생성하거나 직접 수정할 수 있다.

## 3. 아키텍처

시스템은 Render에 배포된 단일 Node.js 인스턴스 위에서 동작한다. Express 서버 한 개가 관리자 UI·API·게시본 호스팅을 모두 담당하고, 프런트엔드는 Vite로 빌드된 React SPA 7개(뉴스레터, 대시보드, 비저빌리티, 시테이션, 월간·주간 리포트, 트래커)가 각자의 경로에서 서빙된다.

데이터는 두 경로로 들어온다. 하나는 Google Sheets다. 서버에 `/gsheets-proxy/*` 라우트가 있어 `docs.google.com`만 허용하는 화이트리스트 프록시로 CSV를 중계하고, 클라이언트가 이를 받아 `src/excelUtils.js`의 탭별 파서(`parseWeekly`, `parseAppendix` 등)로 구조화한다. 다른 하나는 관리자가 에디터에서 직접 입력하는 값이다. 이 두 경로로 모인 데이터는 `/api/:mode/sync-data` 엔드포인트를 통해 Render 디스크의 JSON 파일로 저장된다.

게시 단계에서는 클라이언트가 템플릿 함수(`generateDashboardHTML`, `generateEmailHTML` 등)를 호출해 한국어·영어 HTML을 각각 만들고, `/api/publish-*` 엔드포인트가 `<script>` 태그와 인라인 이벤트 핸들러를 제거한 뒤 `/data/published/` 밑에 파일로 저장한다. 임원은 `/p/슬러그` 경로로 열람하며, 이때 `isIpAllowed` 미들웨어가 IP 대역을 검사해 외부 접근을 차단한다.

AI 인사이트 생성은 `/api/generate-insight` 라우트가 담당한다. 요청이 오면 `readArchives`로 과거 12건을 읽고, 가장 최근 아카이브를 문체 템플릿으로 지정한 뒤 수치를 `[N]%` 식으로 마스킹한다. 시스템 프롬프트에 작성 규칙·템플릿·과거 예시 3개를 붙이고, 사용자 프롬프트는 `buildInsightPrompt(type, data)`로 조립해 Anthropic SDK의 `messages.create`를 호출한다. 결과 텍스트는 JSON으로 에디터에 돌려준다.

인증은 세션 쿠키 기반이다. `/admin/login`에서 비밀번호(환경 변수 `ADMIN_PASSWORD`)를 검증하면 `crypto.randomBytes(32)`로 생성한 토큰을 `httpOnly` 쿠키로 설정하고, `activeSessions` 메모리 셋에 보관한다. 이후 모든 `/admin`·`/api` 요청은 이 토큰을 검사한다. 상태 변경 API는 추가로 `X-Requested-With` 헤더로 CSRF를 방어한다.

저장소는 Render 디스크에 마운트된 `/data` 한 곳이다. 여기에 모드별 스냅샷(`*-snapshots.json`), 동기화 데이터(`*-sync-data.json`), 게시 HTML(`published/*.html`), IP 허용 목록, AI 설정, 아카이브가 모두 파일로 저장된다. 파일 쓰기는 `withFileLock`으로 모드별 큐를 돌려 동시 쓰기 충돌을 방지한다.

외부 의존성은 세 가지다. Google Sheets(프록시 경유), SMTP 서버(`nodemailer`, 뉴스레터 발송용), Anthropic Claude API(인사이트 생성). 모두 환경 변수로 주입된다.

전체 흐름을 한 장으로 보면 다음과 같다.

```mermaid
flowchart LR
  PIC[PIC] --> Editor[에디터 SPA]
  Editor -->|동기화| Proxy[/gsheets-proxy/*] --> GS[Google Sheets]
  Editor -->|저장| API[Express 서버]
  API --> Disk[Render 디스크<br/>JSON + HTML]
  Editor -->|인사이트| API --> Claude[Claude API]
  Editor -->|게시| API --> Disk
  Editor -->|뉴스레터| API --> SMTP
  Exec[임원] -->|열람| Disk
```

## 4. 데이터 플로우

일반적인 한 주의 흐름은 다음과 같다.

마케팅팀이 ChatGPT·Perplexity 응답을 분석해 Google Sheets에 점수를 기입한다. PIC는 월요일 아침 관리자 로그인을 한 뒤 Visibility Editor에서 시트 URL을 붙여넣고 동기화한다. 에디터는 19개 탭을 순차 조회하면서 CSV를 파서로 변환하고, 최종 상태를 서버에 저장한다. 이 과정에서 `appendixPrompts`, `unlaunchedMap`, `prTopicList` 같은 부속 데이터도 함께 적재된다.

다음으로 각 섹션의 인사이트를 생성한다. PIC가 "제품별", "국가별" 같은 섹션 버튼을 누르면 서버가 해당 섹션에 특화된 프롬프트를 만들어 Claude를 호출하고, 본문이 편집기에 반영된다. 필요한 경우 PIC가 문구를 다듬는다.

편집이 끝나면 Dashboard Editor에서 통합 게시를 수행한다. `publishCombinedDashboard`가 visibility와 dashboard 두 mode의 sync-data를 가져와 병합하고, 한국어·영어 HTML을 서버로 전송한다. 서버는 스크립트·이벤트 핸들러를 제거한 뒤 `/p/GEO-KPI-Dashboard-KO`·`-EN` 슬러그로 저장한다. Newsletter Editor에서도 같은 요령으로 이메일 HTML을 만들고, "발송" 버튼을 누르면 `/api/send-email`이 SMTP로 전송한다.

임원은 IP 화이트리스트가 적용된 공개 URL을 클릭해 최신 리포트를 열람한다. 스냅샷 이력은 Archives에 남아 다음 주 인사이트 생성 시 문체 참고 자료로 다시 사용된다.

## 5. 향후 방향

현재 구조는 단일 운영자에게 전 과정 수작업을 요구하므로, 두 가지 축으로 자동화·지능화를 추진한다.

데이터 측면에서는 GCP로 옮긴다. Cloud Run Job이 매일 새벽 Perplexity·ChatGPT에 프롬프트를 자동 실행하고, 응답을 파싱해 BigQuery의 raw·core·mart 3계층에 적재한다. Render 서버는 매일 새벽 4시에 BigQuery mart 테이블을 조회해 기존 sync-data JSON 형식으로 변환해두는 브리지 API만 추가하면 된다. 에디터·템플릿 코드는 바꾸지 않아도 자동 갱신이 완성된다. 시트 기반의 수기 입력은 단계적으로 축소하되, 메타 정보(리포트 제목·기간)는 시트를 유지한다.

AI 측면에서는 Claude를 단순 텍스트 생성기에서 에이전트로 바꾼다. 본문에 쓰이는 모든 수치는 `get_metric` 같은 도구 호출로 BigQuery에서 직접 조회하도록 강제해 환각을 원천 차단한다. 과거 발행본은 통째로 넘기는 대신 임베딩해 벡터 DB에 저장하고, 현재 주제와 유사한 문단 3~5개만 검색해 프롬프트에 삽입한다(RAG). 생성 직후에는 본문의 모든 수치가 도구 호출 결과와 일치하는지 자동 검증하고, 불일치 시 재생성한다. 모든 호출의 토큰·비용·지연 시간은 BigQuery 로그 테이블에 남겨 프롬프트 버전별 품질·비용을 추적한다.

최종적으로 매주 월요일 06시에 자동으로 뉴스레터 초안을 만드는 에이전트가 동작하면, PIC의 주간 작업은 편집·승인 15분 수준으로 축소된다.

## 6. 소스 파일 색인

- `server.js` — Express 서버 전체 (라우팅·인증·게시·Claude 호출·관리자 UI)
- `src/excelUtils.js` — 19개 시트 탭의 파서 모음
- `src/shared/insightPrompts.js` — 섹션별 Claude 프롬프트 빌더
- `src/shared/api.js` — 클라이언트 API 래퍼 (sync-data 조회·게시·인사이트 생성)
- `src/dashboard/dashboardTemplate.js` — 임원 대시보드 SSR HTML + 클라이언트 필터 JS
- `src/emailTemplate.js` — 뉴스레터 이메일 HTML 생성
- `src/visibility/App.jsx`, `src/newsletter/App.jsx` 등 — 7개 SPA의 루트 컴포넌트
- `docs/ADMIN_PLAN.md` — 이 문서
