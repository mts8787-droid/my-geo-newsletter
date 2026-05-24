<!-- 자동 생성 — Hook 의 디자인 영역 영향 설명 -->

# Hook — 디자인 영역 관점

> 디자인/UI 작업 (대시보드·뉴스레터·이메일 호환) 시 어떤 Hook이 어떤 보호를 하는지.
> Hook 자체 정의는 `.claude/settings.json` (JSON 강제) + `.claude/hooks/*.sh`.
> 인간 가독 전체 설명: `.claude/hooks/README.md`.

## 디자인 작업에 적용되는 Hook

### 1. block-dist.sh (PreToolUse) — 디자인 영역 핵심 보호
- **트리거**: Edit | Write | MultiEdit 호출 전
- **대상**: `dist-*/` · `dist/` 빌드 산출물
- **디자인 영역 적용**: `dist-dashboard/` · `dist-visibility/` · `dist-citation/` · `dist-tracker/` · `dist-monthly-report/` · `dist-weekly-report/` 의 정적 HTML / 인라인 JS / CSS
- **목적**: 빌드 산출물 직접 수정 → 다음 빌드 시 덮어쓰여짐 + 디자인 토큰 불일치 회귀 방지. CLAUDE.md NEVER Rule 강제.

### 2. syntax-check.sh (PostToolUse)
- **트리거**: Edit | Write | MultiEdit 직후
- **대상**: `src/` · `routes/` 의 `*.js` (서버 측만; .jsx 는 제외)
- **디자인 영역 적용**: `src/dashboard/dashboardTemplate.js` · `dashboardClient.js` · `dashboardSvg.js` · `dashboardConsts.js` · `citation/citationTemplate.js` · `emailTemplate.js` · `weekly-report/weeklyTemplate.js`
- **목적**: 디자인 HTML 생성기 / SVG 헬퍼 / 인라인 클라이언트 JS 신택스 보호.

## 추가 후보 Hook (미구현 — 디자인 영역 강화용)

- **block-hardcoded-color.sh** (PostToolUse): Edit 후 추가된 라인에 `#[0-9A-Fa-f]{3,6}` 패턴 + `color`/`background` 키워드 동시 검출 → warn. dashboardConsts.js 의 BRAND_COLORS / RED 등 토큰 외 색상 추가 차단.
- **warn-large-container.sh**: `containerWidth` 값이 940 초과 시 warn. CLAUDE.md NEVER Rule ("이메일 컨테이너 우측 짤림") 강제.
- **block-flex-in-email.sh**: `emailTemplate.js` 의 Edit 후 `display:\s*flex` 또는 `grid` 패턴 검출 시 차단. 이메일 호환 (table-layout) 강제.
- **block-overflow-iframe.sh**: `body { overflow-x:hidden }` 또는 `min-width` 추가 차단. iframe 클립 방지.

## 관련 Rule / Skill
- Rule: `.claude/rules/design.md` (토큰 · 컴포넌트 카탈로그 · SVG 패턴 · 이메일 호환 ANTI-PATTERN)
- Skill 워크플로우: `.claude/skills/design/SKILL.md`
- 헌법: `CLAUDE.md` (NEVER Rule — containerWidth · overflow-x · 텍스트 임의 다듬기 등)
