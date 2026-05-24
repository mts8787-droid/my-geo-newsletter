<!-- 자동 생성 미러 — 원본: .claude/rules/README.md
     수정은 원본에서. 본 파일은 npm run sync:harness 또는 prebuild 시 자동 갱신. -->

# Rule (Rules) — 비공식 컨벤션

> 본 폴더는 Claude Code 공식 폴더 구조가 아닌 **프로젝트 컨벤션** 으로 추가된 위치.
> `CLAUDE.md` (프로젝트 헌법) 가 본 폴더의 파일들을 명시 참조해서 Claude Code 가 필요 시 로드.

## 왜 별도 폴더인가

Rule은 토큰·invariant·ANTI-PATTERN 정의 — **참조용 매뉴얼**. 4 개념 (Rule/Hook/Skill/Sub-Agent) 중 Rule만 Claude Code 공식 디렉토리가 없음. 두 가지 옵션 중 선택:

1. **`CLAUDE.md` 안에 통합** — 헌법 길어짐 (50KB+). 한 파일 비대.
2. **`.claude/rules/*.md` 분리** — 비공식이지만 `.claude/` 컨벤션 내. CLAUDE.md 가 명시 참조 ← **본 프로젝트 선택**

## 파일

- `data.md` — 데이터 작업 Rule (5단계 ERROR CATCHING / invariant / ANTI-PATTERN / 날짜·숫자 정규화)
- `design.md` — 디자인 작업 Rule (토큰 / 컴포넌트 카탈로그 C-01~C-23 / SVG 패턴 / 이메일 호환 ANTI-PATTERN)

## 사용 흐름

- Skill 워크플로우 (`.claude/skills/*/SKILL.md`) 의 각 step 이 본 폴더 파일을 명시 참조
- Rule 위반 시 차단은 별도 — Hook (`.claude/settings.json` + `.claude/hooks/*.sh`) 영역

## Rule vs 다른 개념

| | Rule | Hook | Skill |
|---|---|---|---|
| 형식 | Markdown | JSON 강제 + md 설명서 | Markdown 워크플로우 |
| 강제력 | 권고 (~80%) | 100% 시스템 차단 | 권고 (필요 시 로드) |
| 역할 | "따라야 할 규칙" — 토큰·invariant·ANTI-PATTERN | "절대 하면 안 되는 것" | "자동 워크플로우" |
| 본 저장소 위치 | `CLAUDE.md`, `.claude/rules/*.md` | `.claude/settings.json`, `.claude/hooks/*` | `.claude/skills/<name>/SKILL.md` |
