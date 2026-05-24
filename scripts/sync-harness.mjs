#!/usr/bin/env node
// scripts/sync-harness.mjs
// 원본 하네스 파일 (CLAUDE.md, .claude/rules/*.md, .claude/skills/*/SKILL.md, .claude/hooks/*.sh)
// → docs/agents/ 미러 폴더 자동 동기화.
// package.json prebuild 에서 자동 호출 — 실제 하네스 수정 시 미러도 자동 갱신.
//
// 원본 위치 (Claude Code 공식 폴더 구조):
//   - CLAUDE.md (루트) — 프로젝트 헌법
//   - .claude/settings.json — Hook 등록 (JSON 강제)
//   - .claude/hooks/*.sh + README.md — Hook 스크립트 + 인간 설명서
//   - .claude/skills/<name>/SKILL.md — Skill (frontmatter 트리거)
//   - .claude/agents/*.md — Sub-Agent (frontmatter 트리거)
//   - .claude/rules/*.md — Rule 매뉴얼 (비공식 컨벤션 — CLAUDE.md 가 명시 참조)
//
// 미러 위치 (사람용 진입점):
//   - docs/agents/ — HARNESS.html (브라우저), HARNESS.md, CLAUDE.md, rules/, skills/, hooks/

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { renderChartLibraryHTML } from './render-chart-library.mjs'

const __filename = fileURLToPath(import.meta.url)
const ROOT = path.resolve(path.dirname(__filename), '..')

// ─── 미러링 맵 ──────────────────────────────────────────────────────────────
// 원본 → 미러. stripFrontmatter: SKILL.md 의 YAML frontmatter 제거 (Claude Code 가
// `.claude/agents/` 하위 .md 를 잘못 인식하는 것 방지).
const MIRROR_MAP = [
  // 헌법
  { src: 'CLAUDE.md', dst: 'docs/agents/CLAUDE.md' },
  // Rule 매뉴얼 (원본: .claude/rules/)
  { src: '.claude/rules/data.md',      dst: 'docs/agents/rules/data.md' },
  { src: '.claude/rules/design.md',    dst: 'docs/agents/rules/design.md' },
  { src: '.claude/rules/ai.md',        dst: 'docs/agents/rules/ai.md' },
  { src: '.claude/rules/BOOTSTRAP.md', dst: 'docs/agents/rules/BOOTSTRAP.md' },
  // Skill 워크플로우 (frontmatter 제거 — 미러는 참조용)
  { src: '.claude/skills/data/SKILL.md',           dst: 'docs/agents/skills/data.md',           stripFrontmatter: true },
  { src: '.claude/skills/data-add/SKILL.md',       dst: 'docs/agents/skills/data-add.md',       stripFrontmatter: true },
  { src: '.claude/skills/data-debug/SKILL.md',     dst: 'docs/agents/skills/data-debug.md',     stripFrontmatter: true },
  { src: '.claude/skills/data-refactor/SKILL.md',  dst: 'docs/agents/skills/data-refactor.md',  stripFrontmatter: true },
  { src: '.claude/skills/design/SKILL.md',         dst: 'docs/agents/skills/design.md',         stripFrontmatter: true },
  { src: '.claude/skills/design-chart/SKILL.md',   dst: 'docs/agents/skills/design-chart.md',   stripFrontmatter: true },
  { src: '.claude/skills/design-component/SKILL.md', dst: 'docs/agents/skills/design-component.md', stripFrontmatter: true },
  { src: '.claude/skills/design-tune/SKILL.md',    dst: 'docs/agents/skills/design-tune.md',    stripFrontmatter: true },
  { src: '.claude/skills/onboard/SKILL.md',        dst: 'docs/agents/skills/onboard.md',        stripFrontmatter: true },
  { src: '.claude/skills/debug/SKILL.md',          dst: 'docs/agents/skills/debug.md',          stripFrontmatter: true },
  { src: '.claude/skills/newsletter/SKILL.md',         dst: 'docs/agents/skills/newsletter.md',         stripFrontmatter: true },
  { src: '.claude/skills/newsletter-make/SKILL.md',    dst: 'docs/agents/skills/newsletter-make.md',    stripFrontmatter: true },
  { src: '.claude/skills/newsletter-debug/SKILL.md',   dst: 'docs/agents/skills/newsletter-debug.md',   stripFrontmatter: true },
  { src: '.claude/skills/newsletter-send/SKILL.md',    dst: 'docs/agents/skills/newsletter-send.md',    stripFrontmatter: true },
  { src: '.claude/rules/newsletter.md',                dst: 'docs/agents/rules/newsletter.md' },
  { src: '.claude/rules/BOOTSTRAP-newsletter.md',      dst: 'docs/agents/rules/BOOTSTRAP-newsletter.md' },
  // AGENTS.md — OpenAI Codex / Antigravity 자동 로드 표준 (원본 → 미러)
  { src: 'AGENTS.md',                        dst: 'docs/agents/AGENTS.md' },
]

function stripFrontmatter(content) {
  return content.replace(/^---\n[\s\S]*?\n---\n\n?/, '')
}

function copy({ src, dst, stripFrontmatter: strip }) {
  const absSrc = path.join(ROOT, src)
  const absDst = path.join(ROOT, dst)
  if (!fs.existsSync(absSrc)) {
    console.warn(`[sync-harness] SKIP: 원본 없음 ${src}`)
    return false
  }
  let content = fs.readFileSync(absSrc, 'utf8')
  if (strip) content = stripFrontmatter(content)
  // 미러 헤더 자동 prepend — "원본 위치" 명시
  const header = `<!-- 자동 생성 미러 — 원본: ${src}\n     수정은 원본에서. 본 파일은 npm run sync:harness 또는 prebuild 시 자동 갱신. -->\n\n`
  content = header + content
  fs.mkdirSync(path.dirname(absDst), { recursive: true })
  fs.writeFileSync(absDst, content, 'utf8')
  return true
}

let okCount = 0, skipCount = 0
for (const entry of MIRROR_MAP) {
  if (copy(entry)) okCount++
  else skipCount++
}

// ─── hooks/data.md + hooks/design.md — 분류 관점 설명 ────────────────────────
// Hook 자체는 영역 무관 (syntax-check 는 모든 .js, block-dist 는 모든 dist).
// 본 미러는 "이 Hook이 데이터 작업 / 디자인 작업에 어떻게 영향" 설명.
const HOOKS_DATA_MD = `<!-- 자동 생성 미러 — .claude/hooks/README.md + 데이터 영역 관점 -->

# Hook — 데이터 영역 관점

> 데이터 작업 (Google Sheets 파싱·매핑·정규화) 시 어떤 Hook이 어떤 보호를 하는지.
> Hook 자체 정의는 \`.claude/settings.json\` (JSON 강제) + \`.claude/hooks/*.sh\`.
> 인간 가독 전체 설명: \`.claude/hooks/README.md\`.

## 데이터 작업에 적용되는 Hook

### 1. syntax-check.sh (PostToolUse)
- **트리거**: Edit | Write | MultiEdit 직후
- **대상**: \`src/\` · \`routes/\` 의 \`*.js\`
- **데이터 영역 적용**: \`src/excelUtils.js\` · \`src/categoryMap.js\` · \`src/sheetParserUtils.js\` · \`src/googleSheetsUtils.js\` · \`src/shared/sheetTabsForMode.js\`
- **목적**: 데이터 파서 / 매핑 / 라우터 신택스 깨짐 즉시 차단. 빌드 시까지 모르고 가는 것 방지.

### 2. block-dist.sh (PreToolUse) — 데이터 영역 영향 적음
- **트리거**: Edit | Write | MultiEdit 호출 전
- **대상**: \`dist-*/\` · \`dist/\` 경로
- **데이터 영역 영향**: 데이터 작업은 보통 src/ 만 수정 — 본 Hook trigger 안 됨. 다만 데이터 변경 후 빌드 산출물에 실수로 손대지 않게.

## 추가 후보 Hook (미구현 — 데이터 영역 강화용)

- **warn-inline-mapping.sh** (PostToolUse): Edit 후 추가된 라인에 \`tv:.*'TV'.*monitor.*'IT'\` 같은 인라인 매핑 패턴 검출 → warn. categoryMap.js single source Rule 강제. (STYLER 누락 회귀 재발 차단)
- **warn-silent-fallback.sh** (PostToolUse): \`return {}\` 단독 라인 검출 → \`_logWarn\` 사용 권고. \`.claude/rules/data.md\` ANTI-PATTERN 강제.
- **block-categorymap-bypass.sh**: \`src/categoryMap.js\` 외 파일에 \`PROD_ID_TO_\` 같은 정의 추가 차단.

## 관련 Rule / Skill
- Rule: \`.claude/rules/data.md\` (5단계 ERROR CATCHING · ANTI-PATTERN)
- Skill 워크플로우: \`.claude/skills/data/SKILL.md\`
- 헌법: \`CLAUDE.md\` (NEVER Rule)
`

const HOOKS_DESIGN_MD = `<!-- 자동 생성 미러 — .claude/hooks/README.md + 디자인 영역 관점 -->

# Hook — 디자인 영역 관점

> 디자인/UI 작업 (대시보드·뉴스레터·이메일 호환) 시 어떤 Hook이 어떤 보호를 하는지.
> Hook 자체 정의는 \`.claude/settings.json\` (JSON 강제) + \`.claude/hooks/*.sh\`.
> 인간 가독 전체 설명: \`.claude/hooks/README.md\`.

## 디자인 작업에 적용되는 Hook

### 1. block-dist.sh (PreToolUse) — 디자인 영역 핵심 보호
- **트리거**: Edit | Write | MultiEdit 호출 전
- **대상**: \`dist-*/\` · \`dist/\` 빌드 산출물
- **디자인 영역 적용**: \`dist-dashboard/\` · \`dist-visibility/\` · \`dist-citation/\` · \`dist-tracker/\` · \`dist-monthly-report/\` · \`dist-weekly-report/\` 의 정적 HTML / 인라인 JS / CSS
- **목적**: 빌드 산출물 직접 수정 → 다음 빌드 시 덮어쓰여짐 + 디자인 토큰 불일치 회귀 방지. CLAUDE.md NEVER Rule 강제.

### 2. syntax-check.sh (PostToolUse)
- **트리거**: Edit | Write | MultiEdit 직후
- **대상**: \`src/\` · \`routes/\` 의 \`*.js\` (서버 측만; .jsx 는 제외)
- **디자인 영역 적용**: \`src/dashboard/dashboardTemplate.js\` · \`dashboardClient.js\` · \`dashboardSvg.js\` · \`dashboardConsts.js\` · \`citation/citationTemplate.js\` · \`emailTemplate.js\` · \`weekly-report/weeklyTemplate.js\`
- **목적**: 디자인 HTML 생성기 / SVG 헬퍼 / 인라인 클라이언트 JS 신택스 보호.

## 추가 후보 Hook (미구현 — 디자인 영역 강화용)

- **block-hardcoded-color.sh** (PostToolUse): Edit 후 추가된 라인에 \`#[0-9A-Fa-f]{3,6}\` 패턴 + \`color\`/\`background\` 키워드 동시 검출 → warn. dashboardConsts.js 의 BRAND_COLORS / RED 등 토큰 외 색상 추가 차단.
- **warn-large-container.sh**: \`containerWidth\` 값이 940 초과 시 warn. CLAUDE.md NEVER Rule ("이메일 컨테이너 우측 짤림") 강제.
- **block-flex-in-email.sh**: \`emailTemplate.js\` 의 Edit 후 \`display:\\s*flex\` 또는 \`grid\` 패턴 검출 시 차단. 이메일 호환 (table-layout) 강제.
- **block-overflow-iframe.sh**: \`body { overflow-x:hidden }\` 또는 \`min-width\` 추가 차단. iframe 클립 방지.

## 관련 Rule / Skill
- Rule: \`.claude/rules/design.md\` (토큰 · 컴포넌트 카탈로그 · SVG 패턴 · 이메일 호환 ANTI-PATTERN)
- Skill 워크플로우: \`.claude/skills/design/SKILL.md\`
- 헌법: \`CLAUDE.md\` (NEVER Rule — containerWidth · overflow-x · 텍스트 임의 다듬기 등)
`

fs.mkdirSync(path.join(ROOT, 'docs/agents/hooks'), { recursive: true })
fs.writeFileSync(path.join(ROOT, 'docs/agents/hooks/data.md'),   HOOKS_DATA_MD,   'utf8')
fs.writeFileSync(path.join(ROOT, 'docs/agents/hooks/design.md'), HOOKS_DESIGN_MD, 'utf8')

// ─── HARNESS.md — 전체 하네스 설명 (정적) ───────────────────────────────────
const HARNESS_MD = `# 🐈‍⬛ HIRO — Harness for Interactive Reporting Optimization

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
- **Claude 가 실제 읽는 파일** — \`CLAUDE.md\` + \`.claude/\` 폴더 안
- 원본을 고치면 \`npm run build\` 실행 시 이 사본이 자동으로 갱신돼요 (사본은 직접 수정 X).

## 폴더 구조

### 원본 (Claude Code 공식 폴더 구조 — 실제 작동)
\`\`\`
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
\`\`\`

### 미러 (docs/agents/ — 사람용 진입점, 자동 생성)
\`\`\`
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
\`\`\`

## 4 가지 종류 — 한 줄 설명

| 종류 | 뭐 하는 거? | 얼마나 강제? | 예시 |
|---|---|---|---|
| **Rule (규칙)** | Claude 가 따라야 할 약속 — "이렇게 해, 이건 하지 마" | 권고 (80% 정도) | "카테고리 이름은 한 파일에만 정의" |
| **Hook (자동 검사)** | 시스템이 미리 막아주는 자동 검사 — Claude 가 어겨도 차단됨 | 100% 차단 | 빌드 산출물 직접 수정 시도 → 거부 |
| **Skill (작업 매뉴얼)** | "이 작업은 1→2→3 순서로" 같은 step-by-step | 필요할 때 자동 로드 | "뉴스레터 만들어줘" → \`newsletter-make\` |
| **Sub-Agent (보조 일꾼)** | 특정 영역만 보는 보조 — 메인이 위임하면 활성 | 위임 시 활성 | \`data-puller\` — 데이터 진단 전담 |

**Hook 만 100% 강제** — Rule / Skill 은 Claude 가 읽고 권고로 따르는 정도입니다. 절대 어기면 안 되는 건 Hook 으로 만들어야 시스템이 차단해요.

## 사용

### 다른 프로젝트에 HIRO 적용하기
1. **ZIP 다운로드** — \`/hiro\` 페이지 위쪽 빨간 버튼 또는 GitHub 리포 (https://github.com/mts8787-droid/HIRO) 에서 clone.
2. 대상 프로젝트 루트에 **압축 풀기** — \`CLAUDE.md\`, \`AGENTS.md\`, \`.claude/\`, \`docs/agents/\` 가 추가됩니다.
3. **Hook 실행 권한 부여** — \`chmod +x .claude/hooks/*.sh\` (Mac/Linux/WSL 한 줄)
4. **Claude Code 실행** → 자동으로 모두 로드됩니다.

### 본 저장소에서 내용 수정하는 흐름
1. **원본만 수정** — \`.claude/rules/...\`, \`.claude/skills/...\` 같은 곳. \`docs/agents/\` 사본은 직접 수정 X (다음 빌드에서 덮어쓰여짐).
2. \`npm run build\` 실행 → 사본 자동 갱신.
3. 두 폴더 변경 모두 함께 커밋.

## Skill — 영역별 카테고리

> 사람이 보기 좋도록 Skill 을 영역별 카테고리로 묶음. 원본 \`.claude/skills/\` 폴더는 평탄한 구조 (Claude Code 공식 컨벤션).

### 🗂 데이터 (Data)
| Skill | 담당 |
|---|---|
| \`data\` (인덱스) | sub-skill 매핑만 |
| \`data-add\` | 신규 시트 / 카테고리(PROD_IDS) 추가 |
| \`data-debug\` | 회귀 TDD / 시트 sync verify-after-act |
| \`data-refactor\` | 거대 파서 분할 / silent fallback / 매핑 통합 / ERROR CATCHING |

참조: \`rules/data.md\` (5단계 ERROR CATCHING, invariant) · Sub-Agent \`data-puller.md\`

### 🎨 디자인 (Design)
| Skill | 담당 |
|---|---|
| \`design\` (인덱스) | sub-skill 매핑만 |
| \`design-chart\` | 분류 코드(L-1~T-1) 차트 / 차트+표 결합(C-24) / 신규 SVG 양식 |
| \`design-component\` | 신규 컴포넌트(C-XX) / 카드 변형(V4) / iframe srcdoc 미리보기 |
| \`design-tune\` | 이메일 호환 변환 / KO·EN 라벨 / UI 회귀 디버깅 |

참조: \`rules/design.md\` (토큰, 컴포넌트 카탈로그 C-01~C-24, SVG 패턴) · 적용 Hook \`block-dist.sh\`

### 📧 뉴스레터 (Newsletter)
| Skill | 담당 |
|---|---|
| \`newsletter\` (인덱스) | sub-skill 매핑만 |
| \`newsletter-make\` | 신규 발행본 작성 (BOOTSTRAP-newsletter 시나리오 8 step 트리거) / 새 섹션 추가 |
| \`newsletter-debug\` | 미출시 회귀 / 이메일 클라이언트별 깨짐 / iframe 클립 |
| \`newsletter-send\` | 발송 전 multi-client 검증 / SMTP 발송 / audit log |

참조: \`rules/newsletter.md\` (NEVER, 검증 체크리스트) · \`rules/BOOTSTRAP-newsletter.md\` (시나리오) · 적용 Hook \`newsletter-guard.sh\`

### 🔧 공통 / 메타
| Skill | 담당 |
|---|---|
| \`onboard\` | "이 하네스 적용해줘" — 새 프로젝트 셋업 시나리오 (BOOTSTRAP.md 트리거) |
| \`debug\` | "X 안 됨" — BOOTSTRAP.md 의 디버깅 시나리오 (15 카테고리) 매핑 |
| \`prompting\` | 다른 에이전트형 도구 (Cursor / Codex) 용 통합 시스템 프롬프트 |

## 강제력 격상 패턴

Rule을 권고가 아닌 100% 강제로 만들려면 → 해당 Rule을 검출하는 \`*.sh\` Hook 작성 → \`.claude/settings.json\` 등록.
예시는 \`hooks/data.md\` · \`hooks/design.md\` 의 "추가 후보 Hook" 참고.
`

fs.writeFileSync(path.join(ROOT, 'docs/agents/HARNESS.md'), HARNESS_MD, 'utf8')

// ─── HARNESS.html — 정적 HTML (브라우저 더블클릭으로 열림) ───────────────────
const HARNESS_HTML = `<!DOCTYPE html>
<html lang="ko"><head><meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>HIRO — Harness for Interactive Reporting Optimization</title>
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{background:#0F172A;color:#E2E8F0;font-family:'LG Smart','Arial Narrow',Arial,sans-serif;padding:28px 32px;line-height:1.6;max-width:1100px;margin:0 auto}
h1{font-size:26px;color:#F8FAFC;margin-bottom:6px}
.sub{font-size:14px;color:#64748B;margin-bottom:20px}
.intro{background:#1E293B;border:1px solid #334155;border-radius:12px;padding:18px 22px;margin-bottom:18px;font-size:14px;color:#CBD5E1}
.intro p{margin-bottom:6px}
.intro strong{color:#F8FAFC}
table{width:100%;border-collapse:collapse;font-size:14px;margin-bottom:18px;background:#1E293B;border-radius:8px;overflow:hidden}
th{text-align:left;color:#94A3B8;font-weight:600;padding:10px 14px;border-bottom:1px solid #334155;font-size:12px;text-transform:uppercase;letter-spacing:1px}
td{padding:10px 14px;border-bottom:1px solid rgba(51,65,85,.5);color:#CBD5E1}
code{font-family:ui-monospace,Menlo,Consolas,monospace;font-size:12px;color:#F8FAFC;background:#0F172A;padding:2px 6px;border-radius:3px}
.section{background:#1E293B;border:1px solid #334155;border-radius:12px;padding:20px 24px;margin-bottom:18px}
.section h2{font-size:17px;font-weight:700;color:#F8FAFC;margin-bottom:12px;display:flex;align-items:center;gap:8px}
.section h2 .tag{font-size:12px;background:#334155;color:#94A3B8;padding:2px 8px;border-radius:4px;font-weight:600;text-transform:uppercase;letter-spacing:1px}
.section h3{font-size:14px;font-weight:600;color:#F8FAFC;margin:14px 0 6px}
.section p{font-size:14px;color:#CBD5E1;margin-bottom:8px}
.section ul{margin:6px 0 12px 22px;font-size:14px;color:#CBD5E1}
.section li{margin-bottom:4px}
.tree{font-family:ui-monospace,Menlo,Consolas,monospace;font-size:13px;background:#0F172A;padding:14px 18px;border-radius:8px;color:#CBD5E1;white-space:pre;margin-bottom:14px;line-height:1.4}
.badge-rule{background:#1E3A5F;color:#60A5FA;border:1px solid #2563EB}
.badge-hook{background:#3F1D1D;color:#F87171;border:1px solid #7F1D1D}
.badge-skill{background:#1F3A1F;color:#4ADE80;border:1px solid #15803D}
.badge-agent{background:#3F2A1D;color:#FBBF24;border:1px solid #B45309}
.note{background:#0F2A1F;border:1px solid #15803D;border-radius:8px;padding:12px 16px;margin-top:14px;font-size:13px;color:#86EFAC}
.note strong{color:#4ADE80}
.warn{background:#3F1D1D;border:1px solid #7F1D1D;border-radius:8px;padding:12px 16px;margin-top:14px;font-size:13px;color:#FCA5A5}
.warn strong{color:#F87171}
a{color:#60A5FA}
.back-link{display:inline-block;color:#CF0652;text-decoration:none;font-size:14px;margin-bottom:14px;font-weight:600}
.back-link:hover{text-decoration:underline}
</style></head><body>

<a class="back-link" href="/hiro">← HIRO</a>

<h1>🐈‍⬛ HIRO</h1>
<p class="sub" style="font-size:15px;color:#CBD5E1;font-weight:600;margin-bottom:4px">Harness for Interactive Reporting Optimization</p>
<p class="sub" style="font-size:13px;color:#94A3B8;font-style:italic;margin-bottom:14px">Built for beginners. Engineered for repetition.</p>
<p class="sub" style="font-size:13px;color:#94A3B8;font-style:italic;margin-bottom:14px">🐈‍⬛ 히로 (HIRO) — 본 하네스의 마스코트 검은 고양이. 부트스트랩 시나리오 같은 대화형 작업에서 친근한 안내자로 말을 건넵니다.</p>
<p class="sub" style="font-size:14px;color:#CBD5E1;margin-bottom:10px">HIRO optimizes how you build interactive dashboards with Claude Code. Instead of crafting data parsers, chart components, and newsletter templates from scratch every time, HIRO ships a reusable harness — <strong>skills, rules, hooks, and scenario-based bootstraps</strong> — that turns the manual workflow into a standardized, repeatable pipeline.</p>
<p class="sub" style="font-size:14px;color:#CBD5E1;margin-bottom:18px">HIRO 는 Claude Code 로 인터랙티브 대시보드를 만드는 작업을 최적화합니다. 데이터 파서, 차트 컴포넌트, 뉴스레터 템플릿을 매번 처음부터 짜는 대신, HIRO 는 재사용 가능한 하네스 — <strong>스킬·룰·훅·시나리오 기반 부트스트랩</strong> — 를 제공해 수작업 워크플로우를 표준화된 반복 가능한 파이프라인으로 바꿉니다.</p>

<div class="intro">
  <p><strong>이 페이지가 뭔가요?</strong> — Claude 가 본 저장소에서 일할 때 자동으로 따르는 <strong>규칙·자동 검사·작업 매뉴얼·보조 일꾼</strong>의 묶음입니다. 이 페이지는 <strong>사람이 보기 좋게 정리한 미러</strong>이고, 실제 Claude 가 읽는 원본은 <code>CLAUDE.md</code> + <code>.claude/</code> 폴더에 있어요.</p>
  <p>원본을 수정하면 <code>npm run build</code> (또는 <code>npm run sync:harness</code>) 실행 시 본 미러가 자동으로 갱신됩니다 — 미러는 직접 수정 X.</p>
</div>

<div class="section">
  <h2>4 가지 종류 (Rule · Hook · Skill · Sub-Agent)</h2>
  <table>
    <tr><th>종류</th><th>한 줄 설명</th><th>강제력</th><th>예시</th></tr>
    <tr>
      <td><span class="tag badge-rule">RULE</span> Rule (규칙)</td>
      <td>Claude 가 코드 작업할 때 따라야 할 약속. 'NEVER ...' 같은 안 되는 것 + 토큰·이름 규약.</td>
      <td>권고 (~80%)</td>
      <td><code>"카테고리 매핑은 categoryMap.js 한 곳에만"</code></td>
    </tr>
    <tr>
      <td><span class="tag badge-hook">HOOK</span> Hook (자동 차단)</td>
      <td>Rule 중 회귀 위험 큰 항목을 <strong>시스템이 100% 막아주는</strong> 자동 검사. Claude 가 어겨도 시스템이 차단.</td>
      <td>100% (시스템 차단)</td>
      <td>"빌드 산출물 직접 수정" 시도 → 자동 거부</td>
    </tr>
    <tr>
      <td><span class="tag badge-skill">SKILL</span> Skill (작업 매뉴얼)</td>
      <td>특정 작업을 <strong>step-by-step 으로</strong> 진행하는 워크플로우. 자연어로 호출하면 Claude 가 해당 매뉴얼 따라 진행.</td>
      <td>권고 (필요 시 로드)</td>
      <td>"뉴스레터 만들어줘" → <code>newsletter-make</code> 스킬</td>
    </tr>
    <tr>
      <td><span class="tag badge-agent">AGENT</span> Sub-Agent (보조 일꾼)</td>
      <td>특정 영역만 보는 보조 에이전트. 메인 Claude 가 위임할 때 활성화. 보통 진단·읽기 전용.</td>
      <td>위임 시 활성</td>
      <td><code>data-puller</code> — 데이터 파이프라인 진단 전담</td>
    </tr>
  </table>

  <div class="warn">
    <strong>⚠ Hook 만 100% 강제</strong> — Rule / Skill 은 Claude 가 읽고 권고로 따르는 수준. 절대 어기면 안 되는 것은 Hook 으로 만들어야 시스템 차단됨.
  </div>
</div>

<div class="section">
  <h2>폴더 구조</h2>
  <p><strong>원본 (Claude Code 공식 — 실제 작동)</strong></p>
  <div class="tree">CLAUDE.md
.claude/
├── settings.json               (Hook 등록 JSON 강제)
├── hooks/                      (syntax-check.sh, block-dist.sh, README.md)
├── skills/<name>/SKILL.md      (data, design, prompting)
├── agents/                     (data-puller.md)
└── rules/                      (data.md, design.md) ← 비공식 컨벤션</div>

  <p><strong>미러 (사람용 진입점 — 자동 생성)</strong></p>
  <div class="tree">docs/agents/
├── HARNESS.md            ← 전체 설명 (마크다운)
├── HARNESS.html          ← 본 파일 (브라우저로 더블클릭)
├── CLAUDE.md             ← 프로젝트 헌법 미러
├── rules/                ← Rule 매뉴얼 미러
│   ├── data.md
│   └── design.md
├── skills/               ← Skill 워크플로우 미러
│   ├── data.md
│   └── design.md
└── hooks/                ← Hook 영역별 관점
    ├── data.md
    └── design.md</div>
</div>

<div class="section">
  <h2><span class="tag badge-rule">RULE</span> Rule — 따라야 할 규칙</h2>
  <p>토큰·invariant·ANTI-PATTERN 정의. Markdown 권고 (~80%).</p>
  <ul>
    <li><code>CLAUDE.md</code> — 프로젝트 헌법 (4 개념 정의 + NEVER Rule + 작업 흐름)</li>
    <li><code>rules/data.md</code> — 데이터 작업 Rule·매뉴얼·invariant (5단계 ERROR CATCHING / null vs 0 / 날짜 정규화)</li>
    <li><code>rules/design.md</code> — 디자인 토큰·컴포넌트 카탈로그 (C-01~C-23)·SVG 패턴·이메일 호환 ANTI-PATTERN</li>
  </ul>
  <p>원본: <code>CLAUDE.md</code>, <code>.claude/rules/data.md</code>, <code>.claude/rules/design.md</code></p>
</div>

<div class="section">
  <h2><span class="tag badge-hook">HOOK</span> Hook — 절대 금지 강제</h2>
  <p>시스템이 직접 차단. JSON 필수 + 인간 가독 md 설명서.</p>
  <ul>
    <li><code>hooks/data.md</code> — 데이터 영역 적용 Hook (syntax-check 위주) + 추가 후보 (warn-inline-mapping, warn-silent-fallback 등)</li>
    <li><code>hooks/design.md</code> — 디자인 영역 적용 Hook (block-dist 위주) + 추가 후보 (block-hardcoded-color, block-flex-in-email 등)</li>
  </ul>
  <p>원본 정의: <code>.claude/settings.json</code> (JSON 강제), <code>.claude/hooks/*.sh</code> (스크립트)</p>
</div>

<div class="section">
  <h2><span class="tag badge-skill">SKILL</span> Skill — 영역별 카테고리</h2>
  <p>사람이 보기 좋도록 영역별로 묶음. 원본 <code>.claude/skills/</code> 폴더는 평탄한 구조 (Claude Code 공식 컨벤션). 본 그룹핑은 미러 페이지에만 적용.</p>
  <p style="font-size:13px;color:#94A3B8"><strong>스킬 사용법</strong> — Claude 에게 자연어로 <code>"○○ 스킬 써줘"</code> / <code>"○○ 스킬로 △△해줘"</code> 라고 말하거나, 슬래시 명령 <code>/skills ○○</code> 로 호출. Claude 가 자동 매칭도 함 (예: "뉴스레터 만들어줘" → <code>newsletter-make</code>).</p>

  <h3>🗂 데이터 (Data)</h3>
  <table>
    <tr><th>Skill</th><th>담당</th><th>이렇게 호출</th></tr>
    <tr><td><code>data</code> (인덱스)</td><td>sub-skill 매핑만</td><td><em>직접 호출 X — 아래 3 sub 중 하나</em></td></tr>
    <tr><td><code>data-add</code></td><td>신규 시트 / 카테고리(PROD_IDS) 추가</td><td>"data-add 스킬로 새 시트 추가해줘" / <code>/skills data-add</code></td></tr>
    <tr><td><code>data-debug</code></td><td>회귀 TDD / 시트 sync 결과 점검</td><td>"data-debug 스킬로 sync 결과 확인해줘" / <code>/skills data-debug</code></td></tr>
    <tr><td><code>data-refactor</code></td><td>거대 파서 분할 / silent fallback 강화 / 매핑 통합</td><td>"data-refactor 스킬로 이 파서 분할해줘" / <code>/skills data-refactor</code></td></tr>
  </table>
  <p style="font-size:13px;color:#94A3B8">참조: <code>rules/data.md</code> (5단계 ERROR CATCHING, invariant) · Sub-Agent <code>data-puller.md</code></p>

  <h3>🎨 디자인 (Design)</h3>
  <table>
    <tr><th>Skill</th><th>담당</th><th>이렇게 호출</th></tr>
    <tr><td><code>design</code> (인덱스)</td><td>sub-skill 매핑만</td><td><em>직접 호출 X — 아래 3 sub 중 하나</em></td></tr>
    <tr><td><code>design-chart</code></td><td>분류 코드(L-1~T-1) 차트 / 차트+표 결합(C-24) / 신규 SVG 양식</td><td>"design-chart 스킬로 L-1 차트 그려줘" / <code>/skills design-chart</code></td></tr>
    <tr><td><code>design-component</code></td><td>신규 컴포넌트(C-XX) / 카드 변형(V4) / iframe srcdoc</td><td>"design-component 스킬로 새 카드 만들어줘" / <code>/skills design-component</code></td></tr>
    <tr><td><code>design-tune</code></td><td>이메일 호환 변환 / KO·EN 라벨 / UI 회귀 디버깅</td><td>"design-tune 스킬로 이메일에서 차트 안 보이는 거 고쳐줘" / <code>/skills design-tune</code></td></tr>
  </table>
  <p style="font-size:13px;color:#94A3B8">참조: <code>rules/design.md</code> (토큰·C-01~C-24·SVG 패턴) · 적용 Hook <code>block-dist.sh</code></p>

  <h3>📧 뉴스레터 (Newsletter)</h3>
  <table>
    <tr><th>Skill</th><th>담당</th><th>이렇게 호출</th></tr>
    <tr><td><code>newsletter</code> (인덱스)</td><td>sub-skill 매핑만</td><td><em>직접 호출 X — 아래 3 sub 중 하나</em></td></tr>
    <tr><td><code>newsletter-make</code></td><td>신규 발행본 작성 (BOOTSTRAP-newsletter 8 step 트리거) / 새 섹션 추가</td><td>"newsletter-make 스킬로 5월호 뉴스레터 만들어줘" / <code>/skills newsletter-make</code></td></tr>
    <tr><td><code>newsletter-debug</code></td><td>미출시 회귀 / 이메일 클라이언트별 깨짐 / iframe 클립</td><td>"newsletter-debug 스킬로 Outlook 에서 깨진 거 고쳐줘" / <code>/skills newsletter-debug</code></td></tr>
    <tr><td><code>newsletter-send</code></td><td>발송 전 multi-client 검증 / SMTP 발송 / audit log</td><td>"newsletter-send 스킬로 발송 전 검증해줘" / <code>/skills newsletter-send</code></td></tr>
  </table>
  <p style="font-size:13px;color:#94A3B8">참조: <code>rules/newsletter.md</code> (NEVER, 검증 체크리스트) · <code>rules/BOOTSTRAP-newsletter.md</code> (시나리오) · 적용 Hook <code>newsletter-guard.sh</code></p>

  <h3>🔧 공통 / 메타</h3>
  <table>
    <tr><th>Skill</th><th>담당</th><th>이렇게 호출</th></tr>
    <tr><td><code>onboard</code></td><td>새 프로젝트에 본 하네스 셋업 (BOOTSTRAP.md 시나리오 트리거)</td><td>"onboard 스킬로 이 하네스 내 프로젝트에 적용해줘" / <code>/skills onboard</code></td></tr>
    <tr><td><code>debug</code></td><td>"X 안 됨" 같은 일반 디버깅 (BOOTSTRAP.md 의 15 디버깅 시나리오 매핑)</td><td>"debug 스킬로 이거 안 되는 거 디버깅해줘" / <code>/skills debug</code></td></tr>
    <tr><td><code>prompting</code></td><td>다른 에이전트형 도구 (Cursor / Codex) 용 통합 시스템 프롬프트 생성</td><td>"prompting 스킬로 Cursor 용 시스템 프롬프트 만들어줘" / <code>/skills prompting</code></td></tr>
  </table>
</div>

<div class="section">
  <h2><span class="tag badge-agent">AGENT</span> Sub-Agent</h2>
  <p>특정 영역 분리 작업 — Claude Code 공식 기능. Claude 가 위임 시 활성화.</p>
  <ul>
    <li><code>data-puller.md</code> — 데이터 파싱 파이프라인의 shape·정합성·누락 조사·보고 (read-only)</li>
  </ul>
</div>

<div class="section">
  <h2>다른 프로젝트에 적용</h2>
  <ol style="margin-left:22px;font-size:14px;color:#CBD5E1">
    <li>ZIP 다운로드 (어드민 <code>/hiro</code>) 또는 <code>.claude/agents/</code> + <code>CLAUDE.md</code> + <code>docs/</code> + <code>.claude/hooks/</code> + <code>.claude/skills/</code> + <code>.claude/settings.json</code> 복사</li>
    <li><code>chmod +x .claude/hooks/*.sh</code></li>
    <li>Claude Code 실행 → 자동 로드</li>
  </ol>
</div>

<div class="section">
  <h2>본 저장소 갱신 흐름</h2>
  <ol style="margin-left:22px;font-size:14px;color:#CBD5E1">
    <li>원본 파일 수정 (예: <code>.claude/rules/data.md</code>, <code>.claude/skills/data/SKILL.md</code>)</li>
    <li><code>npm run build</code> 또는 <code>npm run sync:harness</code> → <code>.claude/agents/</code> 미러 자동 갱신</li>
    <li>미러 폴더 변경도 함께 커밋</li>
  </ol>
  <div class="note">
    <strong>💡 자동 동기화</strong> — <code>package.json</code> 의 <code>prebuild</code> 스크립트가 <code>node scripts/sync-harness.mjs</code> 호출. 빌드 시점에 항상 미러 최신.
  </div>
</div>

<div class="section">
  <h2>강제력 격상 패턴</h2>
  <p>Rule을 권고가 아닌 100% 강제로 만들려면 → 해당 Rule을 검출하는 <code>*.sh</code> Hook 작성 → <code>.claude/settings.json</code> 등록.</p>
  <p>예시는 <code>hooks/data.md</code> · <code>hooks/design.md</code> 의 "추가 후보 Hook" 섹션 참고.</p>
</div>

</body></html>`

fs.writeFileSync(path.join(ROOT, 'docs/agents/HARNESS.html'), HARNESS_HTML, 'utf8')

// ─── CHART_LIBRARY.html — 차트 분류 카탈로그 정적 미러 ──────────────────────
// /admin/chart-library 페이지의 그 시점 스냅샷. 브라우저 더블클릭으로 인증 없이 열람 가능.
fs.writeFileSync(path.join(ROOT, 'docs/agents/CHART_LIBRARY.html'),
  renderChartLibraryHTML({ adminMode: false }), 'utf8')

console.log(`[sync-harness] 완료. 미러 ${okCount}개, skip ${skipCount}개. 정적 생성: HARNESS.md, HARNESS.html, CHART_LIBRARY.html, hooks/data.md, hooks/design.md`)
