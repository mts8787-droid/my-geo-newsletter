# CLAUDE.md — my-geo-newsletter 프로젝트 룰

> 이 파일은 Claude Code 가 본 레포에서 작업할 때 **항상** 로드되는 룰. 도메인 무관 일반 규칙은 사용자 글로벌 `~/.claude/CLAUDE.md` 참조.

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
docs/                # 인프라/스키마 참조 문서 (스킬은 .claude/skills/)
.claude/
  skills/            # 재사용 가능한 작업 매뉴얼 (design/data/prompting)
  settings.local.json
```

## 스킬 / 하네스 (작업별 매뉴얼)

작업 영역에 따라 Claude Code 가 자동 참조:

- `.claude/skills/design/SKILL.md` — **디자인 하네스** · SVG 차트 · 테이블 · 뉴스레터 카드 (V1/V2/V3)
- `.claude/skills/data/SKILL.md` — **데이터 하네스** · 시트 파싱 · 날짜/숫자 정규화 · null vs 0 · 5단계 ERROR CATCHING · self-logging
- `.claude/skills/prompting/SKILL.md` — 에이전트형 도구가 본 레포에서 작업할 때 참조하는 통합 프롬프트

전체 하네스 미러링 ZIP 다운로드: `/admin/harness` 페이지.

## 참조 문서 (Reference Docs)

스킬이 아닌 인프라/스키마/배포 문서는 `docs/` 에 그대로:

- `docs/ADMIN_PLAN.md` — 시스템 기획서
- `docs/GCP_INFRA.md` — GCP 인프라 구성
- `docs/CLOUD_RUN_JOB.md` — Cloud Run Job 배포 절차
- `docs/BIGQUERY_SCHEMA.md` — BigQuery 스키마 계약
- `docs/prd-data-connection.html` — data-prd 페이지

## 자동화 룰

- **변경 후 자동 커밋 + 푸시** (사용자 글로벌 메모리에 기재). 사용자가 별도 지시 없어도 작업 단위마다 `git add` → conventional commit → `git push`.
- 커밋 메시지: `feat(scope): ...` / `fix(scope): ...` / `docs(scope): ...` / `refactor(scope): ...` / `style(scope): ...` — 한국어 본문 + `Co-Authored-By: Claude Opus 4.7 (1M context)` 트레일러
- 자동 푸시 대상: `main` 브랜치 (현재 단일 브랜치 운영)

## 절대 금지 (NEVER)

```
NEVER  --no-verify 로 훅 우회 (사용자 명시 지시 외)
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
