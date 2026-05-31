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

## 프로젝트 참조 (PROJECT_REF)

인프라 문서 (`docs/`) 안내 + 리팩터링 마커 표 (N1/N2/N3/C-XX/C13/C16/SEC[숫자]) → `.claude/rules/PROJECT_REF.md`. 매 turn 자동 로드 X — 마커 등장 / 인프라 작업 시 명시 import.

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


---

**For Adopters (이식자 참고)**: 같은 가전 산업 내 영업·매출·전략·마케팅·R&D 등 다른 직무 도메인 적용 가이드 (핵심 패턴 + 부트스트랩 사용법) → `.claude/rules/HIRO_REFERENCE.md` (For Adopters 통합 섹션).
