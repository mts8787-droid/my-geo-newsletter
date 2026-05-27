# 🐈‍⬛ HIRO — Harness for Interactive Reporting Optimization

> **Built for beginners. Engineered for repetition.**
>
> 🐈‍⬛ *히로 (HIRO) — 본 하네스의 마스코트 검은 고양이. 부트스트랩 시나리오 같은 대화형 작업에서 친근한 안내자로 말을 건넵니다.*

## 이 페이지가 뭔가요?

Claude (또는 다른 AI 코딩 도우미) 가 새 대시보드 / 뉴스레터 / KPI 리포트를 만들 때 **같은 실수를 반복하지 않도록** 도와주는 **규칙 + 자동 검사 + 작업 매뉴얼 + 보조 일꾼** 묶음이에요. 4 가지 종류 (Rule / Hook / Skill / Sub-Agent) 로 나뉩니다.

가전 KPI 도메인에서 1000+ 회 commit 으로 다듬어진 패턴 — 매출 · HR · 의료 · 교육 등 어떤 도메인이든 **데이터 5행만 보여주면 Claude 가 자동 적응**해서 셋업해줍니다 (변수명·코드 한 줄 안 봐도 됨).

- **실제 작동 (Claude 가 자동 로드)**: `CLAUDE.md` + `AGENTS.md` + `.claude/`
- **사람이 읽는 미러 (본 폴더)**: `harness-mirror/` — 실제 `.claude/` 의 1:1 복사 + 사람용 가이드 HTML
- 원본을 고치면 `npm run build` (또는 `npm run sync:harness`) 실행 시 본 미러가 자동 갱신돼요 (미러는 직접 수정 X).

## 폴더 구조 (2벌 정리)

### 1) 실제 작동 (Claude Code 공식 — Claude 가 자동 로드)
```
CLAUDE.md                       ← 프로젝트 헌법 (항상 로드)
AGENTS.md                       ← OpenAI Codex / Antigravity 자동 로드
.claude/
├── settings.json               ← Hook 등록 (JSON 강제 시스템 차단)
├── hooks/
│   ├── *.sh
│   └── README.md
├── skills/<name>/SKILL.md      ← Skill (frontmatter 트리거)
├── agents/*.md                 ← Sub-Agent (frontmatter 트리거)
└── rules/*.md                  ← 비공식 컨벤션 (CLAUDE.md 가 명시 참조)
```

### 2) 미러 (사람용 진입점 + git 공유 — 본 폴더 `harness-mirror/`)
```
harness-mirror/
├── CLAUDE.md                   ← 루트 CLAUDE.md 미러
├── AGENTS.md                   ← 루트 AGENTS.md 미러
├── .claude/                    ← 실제 .claude/ 1:1 미러 (그대로 자기 프로젝트에 끌어다 놓으면 작동)
│   ├── settings.json
│   ├── hooks/{*.sh, README.md}
│   ├── skills/<name>/SKILL.md
│   ├── agents/*.md
│   └── rules/*.md
└── docs/                       ← 사람용 가이드 모음
    ├── HARNESS.md              ← 본 파일
    ├── HARNESS.html            ← 브라우저 더블클릭으로 열림
    ├── CHART_LIBRARY.html      ← 차트 분류 카탈로그 정적 스냅샷
    ├── HUMAN_GUIDE.md          ← 사람 사용 설명서 (hand-edited)
    └── hooks/                  ← Hook 영역별 영향 설명
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

## 다른 프로젝트에 HIRO 적용

1. **ZIP 다운로드** — `/hiro` 페이지 위쪽 빨간 버튼 또는 GitHub 리포 (https://github.com/mts8787-droid/HIRO) 에서 clone.
2. 대상 프로젝트 루트에 **압축 풀기** — `CLAUDE.md`, `AGENTS.md`, `.claude/`, `harness-mirror/` 가 추가됩니다.
3. **Hook 실행 권한 부여** — Hook이 실행되려면 필수. 터미널에서 **압축을 풀었던 프로젝트 루트 폴더로 이동** (`cd /your/project/path`) 한 다음 한 줄 실행:
   ```bash
   chmod +x .claude/hooks/*.sh
   ```
   확인: `ls -l .claude/hooks/` 결과에 `-rwxr-xr-x` 표시되면 OK.
4. **Claude Code 실행** → 4가지 자동 로드:
   - **규칙 (Rule)**: `CLAUDE.md` + `.claude/rules/` — Claude 가 따라야 할 패턴
   - **자동 검사 (Hook)**: `.claude/settings.json` + `.claude/hooks/*.sh` — 절대 하면 안 되는 것 시스템 차단 (100% 강제)
   - **작업 순서 (Skill)**: `.claude/skills/<name>/SKILL.md` — 사용자가 "데이터 추가해줘" 같이 말하면 적절한 Skill 자동 호출
   - **보조 일꾼 (Sub-Agent)**: `.claude/agents/<name>.md` — 특정 영역 분리 작업
5. **"이 하네스 적용해줘" 라고 Claude 에게 부탁** — 🐈‍⬛ 히로가 도메인 인터뷰 (2 질문) → "데이터 1~5행 보여주세요" → 자동 분석 + 추론 결과 확인 → 모든 파일 자동 생성. **변수명·코드 한 줄 안 봐도 됨**. 매출 · HR · 의료 · 교육 등 어떤 도메인이든 동일.

> `harness-mirror/` 는 사람용 설명 사본 — 실제 작동에는 영향 X. 필요 없으면 삭제 가능.

## 본 저장소 내 수정 흐름

1. **원본만 수정** — `.claude/rules/...`, `.claude/skills/...` 같은 곳. `harness-mirror/` 미러는 직접 수정 X (다음 빌드에서 덮어쓰여짐).
2. `npm run build` 또는 `npm run sync:harness` 실행 → 미러 자동 갱신.
3. 두 폴더 변경 모두 함께 커밋.

## Skill — 영역별 카테고리

> 사람이 보기 좋도록 Skill 을 영역별 카테고리로 묶음. 원본 `.claude/skills/` 폴더는 평탄한 구조 (Claude Code 공식 컨벤션).

### 🗂 데이터 (Data)
| Skill | 담당 |
|---|---|
| `data` (인덱스) | sub-skill 매핑만 |
| `data-add` | 신규 시트 / 카테고리(PROD_IDS) 추가 |
| `data-debug` | 갑자기 망가진 데이터 추적·수정 (재현 TDD + sync 검증) |
| `data-refactor` | 거대 파서 분할 / silent fallback / 매핑 통합 / ERROR CATCHING |

참조: `.claude/rules/data.md` (5단계 ERROR CATCHING, invariant) · Sub-Agent `.claude/agents/data-puller.md`

### 🎨 디자인 (Design)
| Skill | 담당 |
|---|---|
| `design` (인덱스) | sub-skill 매핑만 |
| `design-layout` | 전체 페이지 골격 설계 (8 섹션 + 반응형 그리드) — 부트스트랩 STEP 3 시트 스키마 우선 참조, 없으면 스케치 요청 |
| `design-chart` | 분류 코드(L-1~T-1) 차트 / 차트+표 결합(C-24) / 신규 SVG 양식 |
| `design-component` | 신규 컴포넌트(C-XX) / 카드 변형(V4) / iframe srcdoc 미리보기 |
| `design-tune` | 이메일 호환 변환 / KO·EN 라벨 / 깨진 UI 추적·수정 |

참조: `.claude/rules/design.md` (토큰, 컴포넌트 카탈로그 C-01~C-24, **§5.17 페이지 레이아웃 표준 패턴**, SVG 패턴) · 적용 Hook `.claude/hooks/block-dist.sh`

### 📧 뉴스레터 (Newsletter)
| Skill | 담당 |
|---|---|
| `newsletter` (인덱스) | sub-skill 매핑만 |
| `newsletter-make` | 신규 발행본 작성 (BOOTSTRAP-newsletter 시나리오 8 step 트리거) / 새 섹션 추가 |
| `newsletter-debug` | 미출시 국가 색 잘못 / 이메일 클라이언트별 깨짐 / iframe 클립 추적·수정 |
| `newsletter-send` | 발송 전 multi-client 검증 / SMTP 발송 / audit log |

참조: `.claude/rules/newsletter.md` (NEVER, 검증 체크리스트) · `.claude/rules/BOOTSTRAP-newsletter.md` (시나리오) · 적용 Hook `.claude/hooks/newsletter-guard.sh`

### 🔧 공통 / 메타
| Skill | 담당 |
|---|---|
| `onboard` | "이 하네스 적용해줘" — 새 프로젝트 셋업 시나리오 (BOOTSTRAP.md 트리거) |
| `debug` | "X 안 됨" — BOOTSTRAP.md 의 디버깅 시나리오 (15 카테고리) 매핑 |
| `prompting` | 다른 에이전트형 도구 (Cursor / Codex) 용 통합 시스템 프롬프트 |

## 강제력 격상 패턴

Rule을 권고가 아닌 100% 강제로 만들려면 → 해당 Rule을 검출하는 `*.sh` Hook 작성 → `.claude/settings.json` 등록.
예시는 `docs/hooks/data.md` · `docs/hooks/design.md` 의 "추가 후보 Hook" 참고.
