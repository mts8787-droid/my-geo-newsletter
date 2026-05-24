# 🐱 HIRO — Harness for Interactive Reporting Optimization

> **Built for beginners. Engineered for repetition.**
>
> 🐱 *히로 (HIRO) — 본 하네스의 마스코트 회색 고양이. 부트스트랩 시나리오 같은 대화형 작업에서 친근한 안내자로 말을 건넵니다.*
>
> **EN** — HIRO optimizes how you build interactive dashboards with Claude Code.
> Instead of crafting data parsers, chart components, and newsletter templates from scratch every time,
> HIRO ships a reusable harness — skills, rules, hooks, and scenario-based bootstraps —
> that turns the manual workflow into a standardized, repeatable pipeline.
>
> **KO** — HIRO 는 Claude Code 로 인터랙티브 대시보드를 만드는 작업을 최적화합니다.
> 데이터 파서, 차트 컴포넌트, 뉴스레터 템플릿을 매번 처음부터 짜는 대신,
> HIRO 는 재사용 가능한 하네스 — 스킬·룰·훅·시나리오 기반 부트스트랩 — 를 제공해
> 수작업 워크플로우를 표준화된 반복 가능한 파이프라인으로 바꿉니다.

본 저장소의 Claude Code 하네스 전체 설명

> 본 폴더 (`docs/agents/`) 는 본 저장소의 모든 하네스 컴포넌트의 **미러링 본** (사람용 진입점).
> Claude Code 가 실제 작동에 사용하는 것은 원본 (`CLAUDE.md`, `.claude/` 안).
> 원본 수정 시 `npm run sync:harness` 또는 `npm run build` (prebuild) 로 미러 자동 갱신.

## 폴더 구조

### 원본 (Claude Code 공식 폴더 구조 — 실제 작동)
```
CLAUDE.md                       ← 프로젝트 헌법 (항상 로드)
.claude/
├── settings.json               ← Hook 등록 (JSON 강제)
├── hooks/
│   ├── syntax-check.sh
│   ├── block-dist.sh
│   └── README.md               ← 인간용 Hook 설명
├── skills/
│   ├── data/SKILL.md           ← 데이터 워크플로우
│   ├── design/SKILL.md         ← 디자인 워크플로우
│   └── prompting/SKILL.md
├── agents/
│   └── data-puller.md          ← Sub-Agent (원본)
└── rules/                      ← 비공식 컨벤션 (CLAUDE.md 가 명시 참조)
    ├── data.md                 ← 데이터 Rule 매뉴얼
    └── design.md               ← 디자인 Rule 매뉴얼
```

### 미러 (docs/agents/ — 사람용 진입점, 자동 생성)
```
docs/agents/
├── HARNESS.md                  ← 본 파일 (전체 설명)
├── HARNESS.html                ← 전체 설명 HTML (브라우저 더블클릭)
├── CLAUDE.md                   ← 프로젝트 헌법 미러
├── rules/                      ← Rule 매뉴얼 미러
│   ├── data.md
│   └── design.md
├── skills/                     ← Skill 워크플로우 미러 (frontmatter 제거)
│   ├── data.md
│   └── design.md
└── hooks/                      ← Hook 영역별 관점 (정적 생성)
    ├── data.md
    └── design.md
```

## 4 개념 — 강제력 차이

| 개념 | 형식 | 강제력 | 원본 위치 | 미러 위치 |
|---|---|---|---|---|
| **Rule** | Markdown | 권고 (~80%) | `CLAUDE.md`, `.claude/rules/*.md` | `docs/agents/CLAUDE.md`, `docs/agents/rules/*.md` |
| **Hook** | JSON 강제 (100%) + md 설명서 | 시스템 차단 | `.claude/settings.json`, `.claude/hooks/*` | `docs/agents/hooks/*.md` (영역별 관점) |
| **Skill** | Markdown 워크플로우 | 권고 | `.claude/skills/<name>/SKILL.md` | `docs/agents/skills/*.md` |
| **Sub-Agent** | Markdown frontmatter | 위임 시 활성 | `.claude/agents/*.md` | 미러 없음 (원본 그대로) |

## 핵심 차이

- **Rule** = "따라야 할 규칙" — 토큰·invariant·ANTI-PATTERN. **참조용 매뉴얼**.
- **Hook** = "절대 하면 안 되는 것" — 시스템이 강제 차단. **JSON 필수**.
- **Skill** = "자동으로 특정 행동을 하게 하는 명령 조합" — 순차 워크플로우. step-by-step.
- **Sub-Agent** = 특정 영역 분리 작업 (read-only 진단 등). Claude Code 공식 기능.

## 사용

### 다른 프로젝트에 적용
1. ZIP 다운로드 (어드민 `/admin/harness` 페이지) — 원본 `.claude/` + `CLAUDE.md` + 미러 `docs/agents/` 모두 포함
2. 또는 수동: `CLAUDE.md` + `.claude/` (전체) 통째로 복사
3. `chmod +x .claude/hooks/*.sh`
4. Claude Code 실행 → 자동 로드

### 본 저장소에서 갱신 흐름
1. **원본 파일** 수정 (예: `.claude/rules/data.md`, `.claude/skills/data/SKILL.md`)
2. `npm run build` 또는 `npm run sync:harness` → `docs/agents/` 미러 자동 갱신
3. 미러 폴더 변경도 함께 커밋

### 미러는 읽기 전용
- 미러 파일 상단에 "원본 위치" 헤더 주석 — 다음 sync 시 덮어쓰여짐
- 직접 수정 금지. 항상 원본에서.

### 자동 동기화
- `package.json` 의 `prebuild` 스크립트가 `node scripts/sync-harness.mjs` 호출
- `npm run build` 시 자동 미러 갱신
- 수동: `npm run sync:harness`

## Skill — 영역별 카테고리

> 사람이 보기 좋도록 Skill 을 영역별 카테고리로 묶음. 원본 `.claude/skills/` 폴더는 평탄한 구조 (Claude Code 공식 컨벤션).

### 🗂 데이터 (Data)
| Skill | 담당 |
|---|---|
| `data` (인덱스) | sub-skill 매핑만 |
| `data-add` | 신규 시트 / 카테고리(PROD_IDS) 추가 |
| `data-debug` | 회귀 TDD / 시트 sync verify-after-act |
| `data-refactor` | 거대 파서 분할 / silent fallback / 매핑 통합 / ERROR CATCHING |

참조: `rules/data.md` (5단계 ERROR CATCHING, invariant) · Sub-Agent `data-puller.md`

### 🎨 디자인 (Design)
| Skill | 담당 |
|---|---|
| `design` (인덱스) | sub-skill 매핑만 |
| `design-chart` | 분류 코드(L-1~T-1) 차트 / 차트+표 결합(C-24) / 신규 SVG 양식 |
| `design-component` | 신규 컴포넌트(C-XX) / 카드 변형(V4) / iframe srcdoc 미리보기 |
| `design-tune` | 이메일 호환 변환 / KO·EN 라벨 / UI 회귀 디버깅 |

참조: `rules/design.md` (토큰, 컴포넌트 카탈로그 C-01~C-24, SVG 패턴) · 적용 Hook `block-dist.sh`

### 📧 뉴스레터 (Newsletter)
| Skill | 담당 |
|---|---|
| `newsletter` (인덱스) | sub-skill 매핑만 |
| `newsletter-make` | 신규 발행본 작성 (BOOTSTRAP-newsletter 시나리오 8 step 트리거) / 새 섹션 추가 |
| `newsletter-debug` | 미출시 회귀 / 이메일 클라이언트별 깨짐 / iframe 클립 |
| `newsletter-send` | 발송 전 multi-client 검증 / SMTP 발송 / audit log |

참조: `rules/newsletter.md` (NEVER, 검증 체크리스트) · `rules/BOOTSTRAP-newsletter.md` (시나리오) · 적용 Hook `newsletter-guard.sh`

### 🔧 공통 / 메타
| Skill | 담당 |
|---|---|
| `onboard` | "이 하네스 적용해줘" — 새 프로젝트 셋업 시나리오 (BOOTSTRAP.md 트리거) |
| `debug` | "X 안 됨" — BOOTSTRAP.md 의 디버깅 시나리오 (15 카테고리) 매핑 |
| `prompting` | 다른 에이전트형 도구 (Cursor / Codex) 용 통합 시스템 프롬프트 |

## 강제력 격상 패턴

Rule을 권고가 아닌 100% 강제로 만들려면 → 해당 Rule을 검출하는 `*.sh` Hook 작성 → `.claude/settings.json` 등록.
예시는 `hooks/data.md` · `hooks/design.md` 의 "추가 후보 Hook" 참고.
