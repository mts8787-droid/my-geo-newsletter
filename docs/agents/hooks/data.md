<!-- 자동 생성 미러 — .claude/hooks/README.md + 데이터 영역 관점 -->

# 훅 (Hook) — 데이터 영역 관점

> 데이터 작업 (Google Sheets 파싱·매핑·정규화) 시 어떤 훅이 어떤 보호를 하는지.
> 훅 자체 정의는 `.claude/settings.json` (JSON 강제) + `.claude/hooks/*.sh`.
> 인간 가독 전체 설명: `.claude/hooks/README.md`.

## 데이터 작업에 적용되는 훅

### 1. syntax-check.sh (PostToolUse)
- **트리거**: Edit | Write | MultiEdit 직후
- **대상**: `src/` · `routes/` 의 `*.js`
- **데이터 영역 적용**: `src/excelUtils.js` · `src/categoryMap.js` · `src/sheetParserUtils.js` · `src/googleSheetsUtils.js` · `src/shared/sheetTabsForMode.js`
- **목적**: 데이터 파서 / 매핑 / 라우터 신택스 깨짐 즉시 차단. 빌드 시까지 모르고 가는 것 방지.

### 2. block-dist.sh (PreToolUse) — 데이터 영역 영향 적음
- **트리거**: Edit | Write | MultiEdit 호출 전
- **대상**: `dist-*/` · `dist/` 경로
- **데이터 영역 영향**: 데이터 작업은 보통 src/ 만 수정 — 본 훅 trigger 안 됨. 다만 데이터 변경 후 빌드 산출물에 실수로 손대지 않게.

## 추가 후보 훅 (미구현 — 데이터 영역 강화용)

- **warn-inline-mapping.sh** (PostToolUse): Edit 후 추가된 라인에 `tv:.*'TV'.*monitor.*'IT'` 같은 인라인 매핑 패턴 검출 → warn. categoryMap.js single source 룰 강제. (STYLER 누락 회귀 재발 차단)
- **warn-silent-fallback.sh** (PostToolUse): `return {}` 단독 라인 검출 → `_logWarn` 사용 권고. `.claude/rules/data.md` ANTI-PATTERN 강제.
- **block-categorymap-bypass.sh**: `src/categoryMap.js` 외 파일에 `PROD_ID_TO_` 같은 정의 추가 차단.

## 관련 룰 / 스킬
- 룰: `.claude/rules/data.md` (5단계 ERROR CATCHING · ANTI-PATTERN)
- 스킬 워크플로우: `.claude/skills/data/SKILL.md`
- 헌법: `CLAUDE.md` (NEVER 룰)
