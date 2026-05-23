# Harness — 본 프로젝트의 Claude Code 하네스 전체 설명

> 본 폴더 (`docs/agents/`) 는 본 레포의 모든 하네스 컴포넌트의 **미러링 본** (사람용 진입점).
> Claude Code 가 실제 작동에 사용하는 것은 원본 (`CLAUDE.md`, `.claude/` 안).
> 원본 수정 시 `npm run sync:harness` 또는 `npm run build` (prebuild) 로 미러 자동 갱신.

## 폴더 구조

### 원본 (Claude Code 공식 폴더 구조 — 실제 작동)
```
CLAUDE.md                       ← 프로젝트 헌법 (항상 로드)
.claude/
├── settings.json               ← 훅 등록 (JSON 강제)
├── hooks/
│   ├── syntax-check.sh
│   ├── block-dist.sh
│   └── README.md               ← 인간용 훅 설명
├── skills/
│   ├── data/SKILL.md           ← 데이터 워크플로우
│   ├── design/SKILL.md         ← 디자인 워크플로우
│   └── prompting/SKILL.md
├── agents/
│   └── data-puller.md          ← 서브에이전트 (원본)
└── rules/                      ← 비공식 컨벤션 (CLAUDE.md 가 명시 참조)
    ├── data.md                 ← 데이터 룰 매뉴얼
    └── design.md               ← 디자인 룰 매뉴얼
```

### 미러 (docs/agents/ — 사람용 진입점, 자동 생성)
```
docs/agents/
├── HARNESS.md                  ← 본 파일 (전체 설명)
├── HARNESS.html                ← 전체 설명 HTML (브라우저 더블클릭)
├── CLAUDE.md                   ← 프로젝트 헌법 미러
├── rules/                      ← 룰 매뉴얼 미러
│   ├── data.md
│   └── design.md
├── skills/                     ← 스킬 워크플로우 미러 (frontmatter 제거)
│   ├── data.md
│   └── design.md
└── hooks/                      ← 훅 영역별 관점 (정적 생성)
    ├── data.md
    └── design.md
```

## 4 개념 — 강제력 차이

| 개념 | 형식 | 강제력 | 원본 위치 | 미러 위치 |
|---|---|---|---|---|
| **룰 (Rule)** | Markdown | 권고 (~80%) | `CLAUDE.md`, `.claude/rules/*.md` | `docs/agents/CLAUDE.md`, `docs/agents/rules/*.md` |
| **훅 (Hook)** | JSON 강제 (100%) + md 설명서 | 시스템 차단 | `.claude/settings.json`, `.claude/hooks/*` | `docs/agents/hooks/*.md` (영역별 관점) |
| **스킬 (Skill)** | Markdown 워크플로우 | 권고 | `.claude/skills/<name>/SKILL.md` | `docs/agents/skills/*.md` |
| **서브에이전트** | Markdown frontmatter | 위임 시 활성 | `.claude/agents/*.md` | 미러 없음 (원본 그대로) |

## 핵심 차이

- **룰** = "따라야 할 규칙" — 토큰·invariant·ANTI-PATTERN. **참조용 매뉴얼**.
- **훅** = "절대 하면 안 되는 것" — 시스템이 강제 차단. **JSON 필수**.
- **스킬** = "자동으로 특정 행동을 하게 하는 명령 조합" — 순차 워크플로우. step-by-step.
- **서브에이전트** = 특정 영역 분리 작업 (read-only 진단 등). Claude Code 공식 기능.

## 사용

### 다른 프로젝트에 적용
1. ZIP 다운로드 (어드민 `/admin/harness` 페이지) — 원본 `.claude/` + `CLAUDE.md` + 미러 `docs/agents/` 모두 포함
2. 또는 수동: `CLAUDE.md` + `.claude/` (전체) 통째로 복사
3. `chmod +x .claude/hooks/*.sh`
4. Claude Code 실행 → 자동 로드

### 본 레포에서 갱신 흐름
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

## 영역별 작업 가이드

### 데이터 작업
1. 룰 매뉴얼 참조: `rules/data.md` (5단계 ERROR CATCHING, invariant, ANTI-PATTERN)
2. 워크플로우 선택: `skills/data.md` (신규 시트 추가, 회귀 디버깅 등 8개)
3. 적용되는 훅: `hooks/data.md` (syntax-check 위주)
4. 서브에이전트 위임 옵션: `data-puller.md` (read-only 진단)

### 디자인 작업
1. 룰 매뉴얼 참조: `rules/design.md` (토큰, 컴포넌트 카탈로그 C-01~C-23, SVG 패턴)
2. 워크플로우 선택: `skills/design.md` (신규 컴포넌트 추가, 이메일 호환 변환 등 7개)
3. 적용되는 훅: `hooks/design.md` (block-dist 위주 + syntax-check)
4. 서브에이전트 위임 옵션: 현재 없음 (필요 시 신설)

## 강제력 격상 패턴

룰을 권고가 아닌 100% 강제로 만들려면 → 해당 룰을 검출하는 `*.sh` 훅 작성 → `.claude/settings.json` 등록.
예시는 `hooks/data.md` · `hooks/design.md` 의 "추가 후보 훅" 참고.
