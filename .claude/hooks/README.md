# Hook (Hooks) — 절대 금지 강제

> Rule의 반대 — "절대 하면 안 되는 것" 의 정의. 시스템이 직접 실행해서 100% 차단.
> **JSON 필수**: 등록은 `.claude/settings.json` 의 `hooks` 필드 (시스템이 파싱·실행).
> `.md` 안에 hook 정의를 적어봐야 무시됨. 본 문서는 인간 가독성용 설명서.

## 형식·강제력

| 컴포넌트 | 형식 | 강제력 |
|---|---|---|
| 등록 (`.claude/settings.json`) | JSON | 시스템이 직접 파싱·실행 — Claude 우회 불가 |
| 스크립트 (`*.sh`) | Bash (또는 Node, Python 등) | 종료 코드로 차단/허용 결정 (exit 2 = 차단) |
| 본 README | Markdown | 인간 가독성 — Claude 가 읽을 수도 있지만 강제 X |

## 등록된 Hook

### 1. `syntax-check.sh` (PostToolUse)

- **트리거**: `Edit` | `Write` | `MultiEdit` 직후
- **대상**: `src/` 또는 `routes/` 의 `*.js` (서버측 JS만; `.jsx` 는 transform 필요해서 제외)
- **동작**: `node --check <file>` 으로 신택스 검증. 실패 시 `exit 2` + stderr 메시지 → Claude 가 에러 보고 즉시 수정 유도.
- **목적**: 문법 깨짐 (괄호 누락, typo 등) 즉시 차단. 빌드 시까지 모르고 가는 것 방지.
- **CLAUDE.md 관련 Rule**: 없음 (예방적 검증)

### 2. `block-dist.sh` (PreToolUse)

- **트리거**: `Edit` | `Write` | `MultiEdit` 호출 전
- **대상**: `file_path` 가 `dist-*/` 또는 `dist/` 포함
- **동작**: 위 패턴 매칭 시 `exit 2` + stderr 메시지 → Claude 가 차단 사유 인지하고 다른 경로 선택.
- **목적**: 빌드 산출물을 직접 수정해서 다음 빌드에 덮어쓰여지는 회귀 방지.
- **CLAUDE.md 관련 Rule**: "NEVER dist-* / dist 디렉토리 직접 수정 (빌드 산출물)"

### 3. `newsletter-guard.sh` (PostToolUse)

- **트리거**: `Edit` | `Write` | `MultiEdit` 직후
- **대상**: `src/emailTemplate.js`, `src/monthly-report/monthlyTemplate.js`, `src/weekly-report/weeklyTemplate.js`, `src/newsletter/*.{js,jsx}`
- **동작**: 다음 NEVER Rule 위반 검출 시 `exit 2` + stderr 위치 보고:
  1. `containerWidth = N` 에서 `N > 940` (우측 짤림)
  2. `display:flex` / `display:grid` (Outlook 미지원)
  3. `overflow-x:hidden` / `body { min-width }` (iframe 클립)
- **목적**: 이메일 호환 NEVER Rule 자동 차단. Outlook / Gmail / Apple Mail 깨짐 회귀 방지.
- **관련 Rule**: `.claude/rules/newsletter.md` §3 NEVER RULES / `.claude/rules/design.md` §5.2 / CLAUDE.md NEVER 표

## 신규 Hook 추가 가이드

```
1. .claude/hooks/<name>.sh 작성
   a. shebang: #!/usr/bin/env bash
   b. stdin JSON 파싱 → tool_input.file_path 추출 (예시: syntax-check.sh 참고)
   c. 검증 로직 (case / grep / node --check 등)
   d. 차단 시 exit 2 + stderr 메시지 / 통과 시 exit 0
2. chmod +x .claude/hooks/<name>.sh
3. .claude/settings.json 의 hooks 필드에 등록:
   {
     "hooks": {
       "PreToolUse"|"PostToolUse": [{
         "matcher": "Edit|Write|MultiEdit",
         "hooks": [{ "type": "command", "command": "$CLAUDE_PROJECT_DIR/.claude/hooks/<name>.sh" }]
       }]
     }
   }
4. 본 README 에 항목 추가 — 트리거·대상·동작·목적·관련 Rule
5. 동작 검증:
   echo '{"tool_input":{"file_path":"<test-path>"}}' | .claude/hooks/<name>.sh
   echo "exit: $?"
```

## Hook vs Rule vs Skill 차이

```
Rule (CLAUDE.md / docs/*_RULES.md)
  → "따라야 할 규칙" — Claude 가 권고로 따름 (~80%)

Hook (settings.json + hooks/*.sh)
  → "절대 하면 안 되는 것" — 시스템이 강제 차단 (100%)
  → Rule의 critical 한 항목 (회귀 위험 큰 것) 만 Hook으로 격상

Skill (skills/*/SKILL.md)
  → "순차 워크플로우 (명령 조합)" — Claude 가 필요 시 로드해 step-by-step 실행

Sub-Agent (agents/*.md)
  → 특정 영역 분리 작업 (read-only 진단 등)
```

## 추가 Hook 후보 (미구현, 참고용)

- `block-no-verify.sh` — 커밋 시 `--no-verify` 사용 차단 (CLAUDE.md NEVER Rule)
- `block-force-push.sh` — `git push --force` 차단
- `warn-inline-mapping.sh` — Edit 후 추가된 라인에 `tv:.*'TV'.*monitor.*'IT'` 같은 인라인 매핑 패턴 검출 시 warn (categoryMap single source 강제)
- `block-large-non-streaming.sh` — Anthropic non-streaming + max_tokens > 4096 호출 차단
