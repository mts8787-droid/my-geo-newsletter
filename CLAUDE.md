# CLAUDE.md — my-geo-newsletter 프로젝트 Rule

> Claude Code 가 본 저장소에서 작업할 때 **항상** 로드되는 Rule — 이 프로젝트만의 규칙.
> 글로벌 헌법 (안드레 카파시 관점 등) 은 `~/.claude/CLAUDE.md` (사용자 글로벌).

## 하네스 4 개념 — 형식·강제력 차이

본 저장소는 Claude Code 의 4가지 하네스 컴포넌트를 명확히 분리:

| 개념 | 형식 | 강제력 | 위치 | 본 저장소 사례 |
|---|---|---|---|---|
| **Rule** | Markdown | 권고 (~80%) | `CLAUDE.md`, `docs/*.md` | 이 파일 + `.claude/rules/data.md` + `.claude/rules/design.md` |
| **Hook** | JSON 강제 + md 설명서 | 100% (시스템 차단) | `.claude/settings.json` + `.claude/hooks/*.sh` | syntax-check, block-dist (절대 금지 자동 차단) |
| **Skill** | Markdown 워크플로우 | 권고 (Claude 가 필요 시 로드) | `.claude/skills/*/SKILL.md` | `data` (8 워크플로우), `design` (7 워크플로우) |
| **Sub-Agent** | Markdown frontmatter | Claude 가 위임 시 활성 | `.claude/agents/*.md` | `data-puller` (read-only 진단) |

**핵심**: Rule = "따라야 할 규칙" / Hook = "절대 하면 안 되는 것" / Skill = "순차 워크플로우 (명령 조합)" / Sub-Agent = "영역 분리 작업"

## 스택

- **서버**: Node.js + Express (`server.js`, `routes/`)
- **클라이언트**: React + Vite (어드민 SPA), Vanilla JS + SVG (게시 HTML)
- **데이터**: Google Sheets (사용자 편집) → `parseSheet` (`src/excelUtils.js`) → React state → 게시 시 정적 HTML 인라인 임베드
- **출력**: `dist-*/` (Vite build) + `/p/<slug>` 정적 게시본 (PUB_DIR)
- **이메일 호환**: `src/emailTemplate.js` — table-layout 기반 (SVG 미지원 클라이언트 호환)

## 명령

| 목적 | 명령 |
|---|---|
| 개발 서버 | `npm run dev` (또는 모드별 `npm run dev:dashboard`/`dev:visibility`/`dev:citation`/`dev:tracker`/`dev:monthly`/`dev:weekly`) |
| 빌드 (전체) | `npm run build` |
| 빌드 (단일 모드) | `npm run build:dashboard` 등 |
| 단위 테스트 | `npm test` (= `vitest run`) |
| 타입체크 | `npm run typecheck` |
| 서버 실행 | `npm start` |
| 라우트 검증 | `node -e "import('./routes/admin-pages.js').then(()=>console.log('OK'))"` |

## 디렉토리 맵

```
src/
  dashboard/    # 대시보드 (HTML 생성기 + 클라이언트 JS + SVG)
  citation/     # Citation 페이지 + Bump Chart
  newsletter/   # 뉴스레터 어드민 (React)
  visibility/   # Visibility 어드민 (React)
  tracker-v2/   # Progress Tracker (Recharts)
  monthly-report/ · weekly-report/
  emailTemplate.js     # 뉴스레터 본문 (V1/V2/V3 카드, weeklyTrendHtml)
  excelUtils.js        # 시트 파서 (parseSheetRows 라우터 + 18개 parser*)
  categoryMap.js       # 카테고리 매핑 single source — 모든 prodId/UL_CODE 정의
  sheetParserUtils.js  # 파서 공통 헬퍼 — _logFatal/_logWarn/assertRows/findHeaderIdx
  shared/              # Sidebar, api, constants, insightAgent 등
routes/
  admin-pages.js     # /admin/* HTML 라우트
  publish.js · published.js · ...
docs/                # 인프라/스키마 참조 문서 (Skill은 .claude/skills/)
.claude/
  skills/            # 재사용 가능한 작업 매뉴얼 (design/data/prompting)
  settings.local.json
```

## Skill (Skill — 순차 워크플로우)

Skill은 "자동으로 특정 행동을 하게 하는 명령 조합" — step-by-step 워크플로우. Rule/매뉴얼/anti-pattern 은 별도 docs/.

- `.claude/skills/design/SKILL.md` — 디자인 워크플로우 (신규 컴포넌트 추가, SVG 차트, 뉴스레터 카드 변형, 이메일 호환 변환 등)
- `.claude/skills/data/SKILL.md` — 데이터 워크플로우 (신규 시트 추가, 신규 카테고리 추가, 회귀 디버깅 TDD, 거대 파서 분할, silent fallback 강화, 매핑 통합 등)
- `.claude/skills/prompting/SKILL.md` — 다른 에이전트형 도구 (Cursor/Codex) 용 통합 프롬프트

## Rule 매뉴얼 (Rule — 참조용)

Skill이 step-by-step 이라면, Rule은 그 step 이 따라야 할 토큰·invariant·ANTI-PATTERN 정의.

- `.claude/rules/data.md` — 데이터 작업 Rule (5단계 ERROR CATCHING, invariant, 날짜/숫자 정규화, null vs 0, ANTI-PATTERN)
- `.claude/rules/design.md` — 디자인 작업 Rule (토큰, SVG 패턴, 컴포넌트 카탈로그 C-01~C-23, 이메일 호환 ANTI-PATTERN)

전체 하네스 (Rule·Skill·Hook·Sub-Agent) 미러링 ZIP 다운로드: `/admin/harness` 페이지.

## 참조 문서 (Reference Docs)

Skill이 아닌 인프라/스키마/배포 문서는 `docs/` 에 그대로:

- `docs/ADMIN_PLAN.md` — 시스템 기획서
- `docs/GCP_INFRA.md` — GCP 인프라 구성
- `docs/CLOUD_RUN_JOB.md` — Cloud Run Job 배포 절차
- `docs/BIGQUERY_SCHEMA.md` — BigQuery 스키마 계약
- `docs/prd-data-connection.html` — data-prd 페이지

## 리팩터링 마커 (코드 주석 컨벤션)

코드 주석에 `N1`, `N2`, `N3`, `C12 step1~3` 같은 마커가 등장. 의미:

| 마커 | 의미 | 사례 |
|---|---|---|
| **N1** | 순수 함수 분리 (테스트 가능 영역) | `dashboardTemplate.js` → `dashboardSvg.js` / `dashboardFormat.js` 추출 |
| **N2** | 무거운 패키지 동적 로드 (지연 로드) | `XLSX` (~870KB) → `loadXlsx()` 호출 시점에만 로드 |
| **N3** | 외부 boundary 응답 검증 | Anthropic API 응답 — 빈 본문 / 거절 / 길이 하한 미달 → `invalid_output` 분류 거부 |
| **C-XX** | 컴포넌트 카탈로그 번호 (디자인) | `C-01` Hero, `C-12` 베이스라인 마커 등 (`.claude/rules/design.md` 참조) |
| **C12 step1~3** | 리팩터링 단계 표기 (분리·이전 작업) | `dashboardTemplate.js` 의 인라인 스크립트 분리 (CSS → dashboardStyles.js, consts → dashboardConsts.js, client JS → dashboardClient.js) |
| **C13** | Anthropic SDK 에러 분류 | `insightAgent.js` 의 `err.kind` 분류 |
| **C16** | sync meta 신선도 조회 | `routes/sync.js` 의 가벼운 응답 (배지 · 자동 갱신용) |
| **SEC[숫자]** | 보안 보강 단계 | `SEC5` CSRF 보호 (`server.js`) |

신규 마커 추가 시 본 표에 등재. 코드 주석으로만 두지 말 것.

## 자동화 Rule

- **변경 후 자동 커밋 + 푸시** (사용자 글로벌 메모리에 기재). 사용자가 별도 지시 없어도 작업 단위마다 `git add` → conventional commit → `git push`.
- 커밋 메시지: `feat(scope): ...` / `fix(scope): ...` / `docs(scope): ...` / `refactor(scope): ...` / `style(scope): ...` — 한국어 본문 + `Co-Authored-By: Claude Opus 4.7 (1M context)` 트레일러
- 자동 푸시 대상: `main` 브랜치 (현재 단일 브랜치 운영)

## 절대 금지 (NEVER)

```
NEVER  --no-verify 로 Hook 우회 (사용자 명시 지시 외)
NEVER  --no-gpg-sign 서명 우회
NEVER  git push --force / --force-with-lease 를 main 에
NEVER  rm -rf / git reset --hard / git clean -f 를 사용자 확인 없이
NEVER  dist-* / dist 디렉토리 직접 수정 (빌드 산출물)
NEVER  emailTemplate.js 의 containerWidth > 940 (우측 짤림)
NEVER  body { overflow-x:hidden } / min-width (iframe 클립)
NEVER  사용자 텍스트 임의 다듬기 — 그대로 사용
NEVER  4자리 연도(\d{4}) 만 매칭 → 한국식 (\d{2})년 누락 → sort 깨짐
NEVER  Anthropic non-streaming 으로 max_tokens 큰 호출 → 403
NEVER  카테고리 매핑을 categoryMap.js 외 다른 파일에 정의 (STYLER 누락 회귀)
NEVER  silent return {} (warn 없이) — _logWarn(scope, msg, ctx) 헬퍼 사용
NEVER  파서 진입부 입력 검증 생략 — assertRows 라우터 가드 의존 가능 (외부 직접 호출 시 자체 가드)
```

## 작업 흐름 (Workflow)

코드 변경 시:
1. 영향 범위 확인 (서버/클라이언트 짝 함수 동시 수정 필요한지 등)
2. 카테고리/매핑 추가는 `src/categoryMap.js` 만. invariant 자동 검증 통과 확인 (`npm test` 시 categoryMap invariant 테스트 강제)
3. 파서 신규 추가 시 `parseSheetRows` 라우터 등록 + `SHEET_NAMES` 등록 + 통합 테스트 1개 이상 (`src/excelUtils.test.js`)
4. silent fallback 금지 — 모든 분기에 `_logWarn(scope, msg, ctx)` 또는 `_logFatal` 표면화
5. 수정 → `npm test` (해당 영역)
6. 자동 커밋 + 푸시
7. 사용자에게 **재게시 안내** (파싱 변경 시 "구글 시트 동기화 → 웹사이트 게시")

---

## For Adopters (이식자 참고)

본 헌법은 **HIRO 하네스의 4 개념 (Rule / Hook / Skill / Sub-Agent) + 자동화 규칙** 의 본 저장소 적용판. 다른 프로젝트 적용 시:

### 그대로 사용 가능 (도메인 무관)

- **하네스 4 개념 구조** — Rule / Hook / Skill / Sub-Agent (이 구분은 모든 프로젝트 동일)
- **자동화 Rule** — 변경 후 자동 커밋 + 푸시 + Conventional Commits 형식
- **3-tier Boundaries** — Never (🔒 Hook 강제) / Always (패턴 권고) / Ask First (사용자 확인 후)
- **참조 Rule 매뉴얼** — `.claude/rules/{data,design,newsletter,ai}.md` 의 핵심 패턴

### 본 저장소 특정 (본인 프로젝트에 맞게 바꿔야)

- **스택** — Express / Vite / React (본인 프로젝트 스택으로)
- **디렉토리 맵** — `src/dashboard`, `src/citation` 등 본 저장소 SPA 구조 (본인 페이지 구조로)
- **명령** — `npm run dev:dashboard` 등 (본인 npm scripts 로)
- **리팩터링 마커** (N1 / N2 / N3 / C-XX / SEC[숫자]) — 본 저장소 컨벤션 (참고만)
- **NEVER 의 일부** — `containerWidth > 940`, `categoryMap.js` 등 본 저장소 특정 (본인 프로젝트는 해당 X 또는 본인 이름으로)

### 부트스트랩 사용법 (비개발자)

`/onboard` 시작 → 🐈‍⬛ 히로가:

1. 도메인 인터뷰 (어떤 분야 / 어떤 데이터 / 어떤 KPI / 이메일 발송 여부)
2. **"시각화하고 싶은 데이터의 헤더 + 1~5행 보여주세요"** 요청
3. 받은 데이터 분석 → 도메인 자동 추론 → 본 헌법의 패턴을 본인 프로젝트 구조로 자동 적응
4. 본 CLAUDE.md → 본인 프로젝트용 CLAUDE.md 자동 변환 (스택 / 디렉토리 맵 / 명령 본인 것으로)

→ 변수명·코드 한 줄 안 봐도 됨. 데이터만 보여주면 끝.
