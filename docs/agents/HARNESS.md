# 🐈‍⬛ HIRO — Harness for Interactive Reporting Optimization

> **Built for beginners. Engineered for repetition.**
>
> 🐈‍⬛ *히로 (HIRO) — 본 하네스의 마스코트 검은 고양이. 부트스트랩 시나리오 같은 대화형 작업에서 친근한 안내자로 말을 건넵니다.*
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

## 이 페이지가 뭔가요?

Claude (또는 다른 AI 코딩 도우미) 가 본 저장소에서 일할 때 **자동으로 따르는 규칙·자동 검사·작업 매뉴얼·보조 일꾼** 의 묶음이에요. 4 가지 종류 (Rule / Hook / Skill / Sub-Agent) 로 나뉩니다.

- **사람이 읽는 페이지** (이 파일) — 한 곳에 보기 좋게 정리한 사본
- **Claude 가 실제 읽는 파일** — `CLAUDE.md` + `.claude/` 폴더 안
- 원본을 고치면 `npm run build` 실행 시 이 사본이 자동으로 갱신돼요 (사본은 직접 수정 X).

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

## 4 가지 종류 — 한 줄 설명

| 종류 | 뭐 하는 거? | 얼마나 강제? | 예시 |
|---|---|---|---|
| **Rule (규칙)** | Claude 가 따라야 할 약속 — "이렇게 해, 이건 하지 마" | 권고 (80% 정도) | "카테고리 이름은 한 파일에만 정의" |
| **Hook (자동 검사)** | 시스템이 미리 막아주는 자동 검사 — Claude 가 어겨도 차단됨 | 100% 차단 | 빌드 산출물 직접 수정 시도 → 거부 |
| **Skill (작업 매뉴얼)** | "이 작업은 1→2→3 순서로" 같은 step-by-step | 필요할 때 자동 로드 | "뉴스레터 만들어줘" → `newsletter-make` |
| **Sub-Agent (보조 일꾼)** | 특정 영역만 보는 보조 — 메인이 위임하면 활성 | 위임 시 활성 | `data-puller` — 데이터 진단 전담 |

**Hook 만 100% 강제** — Rule / Skill 은 Claude 가 읽고 권고로 따르는 정도입니다. 절대 어기면 안 되는 건 Hook 으로 만들어야 시스템이 차단해요.

## 사용

### 다른 프로젝트에 HIRO 적용하기
1. **ZIP 다운로드** — `/hiro` 페이지 위쪽 빨간 버튼 또는 GitHub 리포 (https://github.com/mts8787-droid/HIRO) 에서 clone.
2. 대상 프로젝트 루트에 **압축 풀기** — `CLAUDE.md`, `AGENTS.md`, `.claude/`, `docs/agents/` 가 추가됩니다.
3. **Hook 실행 권한 부여** — `chmod +x .claude/hooks/*.sh` (Mac/Linux/WSL 한 줄)
4. **Claude Code 실행** → 자동으로 모두 로드됩니다.

### 본 저장소에서 내용 수정하는 흐름
1. **원본만 수정** — `.claude/rules/...`, `.claude/skills/...` 같은 곳. `docs/agents/` 사본은 직접 수정 X (다음 빌드에서 덮어쓰여짐).
2. `npm run build` 실행 → 사본 자동 갱신.
3. 두 폴더 변경 모두 함께 커밋.

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
