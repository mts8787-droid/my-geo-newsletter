#!/usr/bin/env node
// scripts/sync-harness.mjs
// 본 저장소의 실제 작동 (CLAUDE.md / AGENTS.md / .claude/) → harness-mirror/ 자동 동기.
// package.json prebuild 에서 자동 호출 — 원본 수정 시 미러도 자동 갱신.
//
// 원본 (실제 작동 — Claude Code / OpenAI Codex 가 자동 로드):
//   CLAUDE.md  · AGENTS.md (루트)
//   .claude/{settings.json, hooks/, skills/<name>/SKILL.md, agents/*.md, rules/*.md}
//
// 미러 (사람용 + git 공유 — 2벌째 정리):
//   harness-mirror/
//     ├── CLAUDE.md                 (헤더 prepend)
//     ├── AGENTS.md                 (헤더 prepend)
//     ├── .claude/                  (1:1 EXACT 복사 — 사용자가 다른 프로젝트 .claude/ 로 그대로 사용 가능)
//     │   ├── settings.json
//     │   ├── hooks/{*.sh, README.md}
//     │   ├── skills/<name>/SKILL.md (frontmatter 보존)
//     │   ├── agents/*.md
//     │   └── rules/*.md
//     └── docs/                     (사람용 가이드)
//         ├── HARNESS.html · HARNESS.md
//         ├── CHART_LIBRARY.html
//         ├── HUMAN_GUIDE.md        (hand-edited — sync-harness 가 건드리지 X)
//         └── hooks/{data.md, design.md} (영역별 영향 정적 생성)

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { renderChartLibraryHTML } from './render-chart-library.mjs'
import { themeStyle, themeToggleButton } from '../lib/theme.js'

const __filename = fileURLToPath(import.meta.url)
const ROOT = path.resolve(path.dirname(__filename), '..')
const MIRROR_DIR = path.join(ROOT, 'harness-mirror')

// ─── 보조 헬퍼 ──────────────────────────────────────────────────────────────

// .md 파일 + frontmatter (---...---) 없을 때만 자동 생성 헤더 prepend.
// frontmatter 있는 파일은 헤더 추가 시 Claude Code 의 frontmatter 파서 깨짐 — 그대로 복사.
// .sh / .json 등은 코멘트 문법 다르므로 그대로 복사.
function withHeader(srcRel, content) {
  if (!srcRel.endsWith('.md')) return content
  if (content.startsWith('---\n') || content.startsWith('---\r\n')) return content
  const header = `<!-- 자동 생성 미러 — 원본: ${srcRel}\n     수정은 원본에서. 본 파일은 npm run sync:harness 또는 prebuild 시 자동 갱신. -->\n\n`
  return header + content
}

function copyFile(srcRel, dstRel) {
  const absSrc = path.join(ROOT, srcRel)
  const absDst = path.join(ROOT, dstRel)
  if (!fs.existsSync(absSrc)) {
    console.warn(`[sync-harness] SKIP: 원본 없음 ${srcRel}`)
    return false
  }
  let content = fs.readFileSync(absSrc, 'utf8')
  content = withHeader(srcRel, content)
  fs.mkdirSync(path.dirname(absDst), { recursive: true })
  fs.writeFileSync(absDst, content, 'utf8')
  return true
}

// 재귀 복사 — 트리 구조 보존 (.claude/skills/<name>/SKILL.md 같이).
function copyTree(srcRelDir, dstRelDir, opts = {}) {
  const { skip = [] } = opts
  const absSrc = path.join(ROOT, srcRelDir)
  if (!fs.existsSync(absSrc)) return 0
  let count = 0
  for (const e of fs.readdirSync(absSrc, { withFileTypes: true })) {
    if (skip.includes(e.name)) continue
    const childSrcRel = path.join(srcRelDir, e.name)
    const childDstRel = path.join(dstRelDir, e.name)
    if (e.isDirectory()) {
      count += copyTree(childSrcRel, childDstRel, opts)
    } else if (e.isFile()) {
      if (copyFile(childSrcRel, childDstRel)) count++
    }
  }
  return count
}

// ─── 1) harness-mirror/ 초기화 ─────────────────────────────────────────────
// 이전 sync 의 stale 파일 정리. HUMAN_GUIDE.md (hand-edited) 는 보존.
if (fs.existsSync(MIRROR_DIR)) {
  // HUMAN_GUIDE.md 백업 → 본 sync 가 docs/ 재생성 후 복원
  const humanGuidePath = path.join(MIRROR_DIR, 'docs/HUMAN_GUIDE.md')
  let humanGuideContent = null
  if (fs.existsSync(humanGuidePath)) {
    humanGuideContent = fs.readFileSync(humanGuidePath, 'utf8')
  }
  fs.rmSync(MIRROR_DIR, { recursive: true, force: true })
  fs.mkdirSync(MIRROR_DIR, { recursive: true })
  if (humanGuideContent != null) {
    fs.mkdirSync(path.join(MIRROR_DIR, 'docs'), { recursive: true })
    fs.writeFileSync(path.join(MIRROR_DIR, 'docs/HUMAN_GUIDE.md'), humanGuideContent, 'utf8')
  }
} else {
  fs.mkdirSync(MIRROR_DIR, { recursive: true })
}

// ─── 2) 루트 헌법 미러 ─────────────────────────────────────────────────────
let okCount = 0
if (copyFile('CLAUDE.md', 'harness-mirror/CLAUDE.md')) okCount++
if (copyFile('AGENTS.md', 'harness-mirror/AGENTS.md')) okCount++

// ─── 3) .claude/ 전체 1:1 미러 (settings.local.json 제외 — 사용자 PC 정보) ─
okCount += copyTree('.claude', 'harness-mirror/.claude', { skip: ['settings.local.json'] })

// ─── 4) docs/hooks/{data,design}.md — 영역별 Hook 영향 (정적 생성) ────────
const HOOKS_DATA_MD = `<!-- 자동 생성 — Hook 의 데이터 영역 영향 설명 -->

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

const HOOKS_DESIGN_MD = `<!-- 자동 생성 — Hook 의 디자인 영역 영향 설명 -->

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

fs.mkdirSync(path.join(MIRROR_DIR, 'docs/hooks'), { recursive: true })
fs.writeFileSync(path.join(MIRROR_DIR, 'docs/hooks/data.md'),   HOOKS_DATA_MD,   'utf8')
fs.writeFileSync(path.join(MIRROR_DIR, 'docs/hooks/design.md'), HOOKS_DESIGN_MD, 'utf8')

// ─── 5) docs/HARNESS.md (전체 설명 정적 생성) ──────────────────────────────
const HARNESS_MD = `# 🐈‍⬛ HIRO — Harness for Interactive Reporting Optimization

> **Built for beginners. Engineered for repetition.**
>
> 🐈‍⬛ *히로 (HIRO) — 본 하네스의 마스코트 검은 고양이. 부트스트랩 시나리오 같은 대화형 작업에서 친근한 안내자로 말을 건넵니다.*

## 이 페이지가 뭔가요?

Claude (또는 다른 AI 코딩 도우미) 가 본 저장소에서 일할 때 **자동으로 따르는 규칙·자동 검사·작업 매뉴얼·보조 일꾼** 의 묶음이에요. 4 가지 종류 (Rule / Hook / Skill / Sub-Agent) 로 나뉩니다.

- **실제 작동 (Claude 가 자동 로드)**: \`CLAUDE.md\` + \`AGENTS.md\` + \`.claude/\`
- **사람이 읽는 미러 (본 폴더)**: \`harness-mirror/\` — 실제 \`.claude/\` 의 1:1 복사 + 사람용 가이드 HTML
- 원본을 고치면 \`npm run build\` (또는 \`npm run sync:harness\`) 실행 시 본 미러가 자동 갱신돼요 (미러는 직접 수정 X).

## 폴더 구조 (2벌 정리)

### 1) 실제 작동 (Claude Code 공식 — Claude 가 자동 로드)
\`\`\`
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
\`\`\`

### 2) 미러 (사람용 진입점 + git 공유 — 본 폴더 \`harness-mirror/\`)
\`\`\`
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
\`\`\`

## 4 가지 종류 — 한 줄 설명

| 종류 | 뭐 하는 거? | 얼마나 강제? | 예시 |
|---|---|---|---|
| **Rule (규칙)** | Claude 가 따라야 할 약속 — "이렇게 해, 이건 하지 마" | 권고 (80% 정도) | "카테고리 이름은 한 파일에만 정의" |
| **Hook (자동 검사)** | 시스템이 미리 막아주는 자동 검사 — Claude 가 어겨도 차단됨 | 100% 차단 | 빌드 산출물 직접 수정 시도 → 거부 |
| **Skill (작업 매뉴얼)** | "이 작업은 1→2→3 순서로" 같은 step-by-step | 필요할 때 자동 로드 | "뉴스레터 만들어줘" → \`newsletter-make\` |
| **Sub-Agent (보조 일꾼)** | 특정 영역만 보는 보조 — 메인이 위임하면 활성 | 위임 시 활성 | \`data-puller\` — 데이터 진단 전담 |

**Hook 만 100% 강제** — Rule / Skill 은 Claude 가 읽고 권고로 따르는 정도입니다. 절대 어기면 안 되는 건 Hook 으로 만들어야 시스템이 차단해요.

## 다른 프로젝트에 HIRO 적용

1. **ZIP 다운로드** — \`/hiro\` 페이지 위쪽 빨간 버튼 또는 GitHub 리포 (https://github.com/mts8787-droid/HIRO) 에서 clone.
2. 대상 프로젝트 루트에 **압축 풀기** — \`CLAUDE.md\`, \`AGENTS.md\`, \`.claude/\`, \`harness-mirror/\` 가 추가됩니다.
3. **Hook 실행 권한 부여** — \`chmod +x .claude/hooks/*.sh\` (Mac/Linux/WSL 한 줄)
4. **Claude Code 실행** → 자동으로 모두 로드됩니다.

> \`harness-mirror/\` 는 사람용 설명 사본 — 실제 작동에는 영향 X. 필요 없으면 삭제 가능.

## 본 저장소 내 수정 흐름

1. **원본만 수정** — \`.claude/rules/...\`, \`.claude/skills/...\` 같은 곳. \`harness-mirror/\` 미러는 직접 수정 X (다음 빌드에서 덮어쓰여짐).
2. \`npm run build\` 또는 \`npm run sync:harness\` 실행 → 미러 자동 갱신.
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

참조: \`.claude/rules/data.md\` (5단계 ERROR CATCHING, invariant) · Sub-Agent \`.claude/agents/data-puller.md\`

### 🎨 디자인 (Design)
| Skill | 담당 |
|---|---|
| \`design\` (인덱스) | sub-skill 매핑만 |
| \`design-chart\` | 분류 코드(L-1~T-1) 차트 / 차트+표 결합(C-24) / 신규 SVG 양식 |
| \`design-component\` | 신규 컴포넌트(C-XX) / 카드 변형(V4) / iframe srcdoc 미리보기 |
| \`design-tune\` | 이메일 호환 변환 / KO·EN 라벨 / UI 회귀 디버깅 |

참조: \`.claude/rules/design.md\` (토큰, 컴포넌트 카탈로그 C-01~C-24, SVG 패턴) · 적용 Hook \`.claude/hooks/block-dist.sh\`

### 📧 뉴스레터 (Newsletter)
| Skill | 담당 |
|---|---|
| \`newsletter\` (인덱스) | sub-skill 매핑만 |
| \`newsletter-make\` | 신규 발행본 작성 (BOOTSTRAP-newsletter 시나리오 8 step 트리거) / 새 섹션 추가 |
| \`newsletter-debug\` | 미출시 회귀 / 이메일 클라이언트별 깨짐 / iframe 클립 |
| \`newsletter-send\` | 발송 전 multi-client 검증 / SMTP 발송 / audit log |

참조: \`.claude/rules/newsletter.md\` (NEVER, 검증 체크리스트) · \`.claude/rules/BOOTSTRAP-newsletter.md\` (시나리오) · 적용 Hook \`.claude/hooks/newsletter-guard.sh\`

### 🔧 공통 / 메타
| Skill | 담당 |
|---|---|
| \`onboard\` | "이 하네스 적용해줘" — 새 프로젝트 셋업 시나리오 (BOOTSTRAP.md 트리거) |
| \`debug\` | "X 안 됨" — BOOTSTRAP.md 의 디버깅 시나리오 (15 카테고리) 매핑 |
| \`prompting\` | 다른 에이전트형 도구 (Cursor / Codex) 용 통합 시스템 프롬프트 |

## 강제력 격상 패턴

Rule을 권고가 아닌 100% 강제로 만들려면 → 해당 Rule을 검출하는 \`*.sh\` Hook 작성 → \`.claude/settings.json\` 등록.
예시는 \`docs/hooks/data.md\` · \`docs/hooks/design.md\` 의 "추가 후보 Hook" 참고.
`

fs.writeFileSync(path.join(MIRROR_DIR, 'docs/HARNESS.md'), HARNESS_MD, 'utf8')

// ─── 6) docs/HARNESS.html (브라우저 더블클릭) ──────────────────────────────
const HARNESS_HTML = `<!DOCTYPE html>
<html lang="ko"><head><meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>HIRO — Harness for Interactive Reporting Optimization</title>
${themeStyle()}
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{background:var(--bg-primary);color:var(--text-primary);font-family:'LG Smart','Arial Narrow',Arial,sans-serif;padding:28px 32px;line-height:1.6;max-width:1100px;margin:0 auto;transition:background .2s,color .2s}
h1{font-size:26px;color:var(--text-strong);margin-bottom:6px}
.sub{font-size:14px;color:var(--text-muted);margin-bottom:20px}
.intro{background:var(--bg-card);border:1px solid var(--border);border-radius:12px;padding:18px 22px;margin-bottom:18px;font-size:14px;color:var(--text-desc)}
.intro p{margin-bottom:6px}
.intro strong{color:var(--text-strong)}
table{width:100%;border-collapse:collapse;font-size:14px;margin-bottom:18px;background:var(--bg-card);border-radius:8px;overflow:hidden}
th{text-align:left;color:var(--text-sub);font-weight:600;padding:10px 14px;border-bottom:1px solid var(--border);font-size:12px;text-transform:uppercase;letter-spacing:1px}
td{padding:10px 14px;border-bottom:1px solid var(--border-soft);color:var(--text-desc)}
code{font-family:ui-monospace,Menlo,Consolas,monospace;font-size:12px;color:var(--text-strong);background:var(--bg-code);padding:2px 6px;border-radius:3px}
.section{background:var(--bg-card);border:1px solid var(--border);border-radius:12px;padding:20px 24px;margin-bottom:18px}
.section h2{font-size:17px;font-weight:700;color:var(--text-strong);margin-bottom:12px;display:flex;align-items:center;gap:8px}
.section h2 .tag{font-size:12px;background:var(--border);color:var(--text-sub);padding:2px 8px;border-radius:4px;font-weight:600;text-transform:uppercase;letter-spacing:1px}
.section h3{font-size:14px;font-weight:600;color:var(--text-strong);margin:14px 0 6px}
.section p{font-size:14px;color:var(--text-desc);margin-bottom:8px}
.section ul{margin:6px 0 12px 22px;font-size:14px;color:var(--text-desc)}
.section li{margin-bottom:4px}
.tree{font-family:ui-monospace,Menlo,Consolas,monospace;font-size:13px;background:var(--bg-code);padding:14px 18px;border-radius:8px;color:var(--text-desc);white-space:pre;margin-bottom:14px;line-height:1.4}
.badge-rule{background:#1E3A5F;color:#60A5FA;border:1px solid #2563EB}
.badge-hook{background:#3F1D1D;color:#F87171;border:1px solid #7F1D1D}
.badge-skill{background:#1F3A1F;color:#4ADE80;border:1px solid #15803D}
.badge-agent{background:#3F2A1D;color:#FBBF24;border:1px solid #B45309}
[data-theme="light"] .badge-rule{background:#DBEAFE;color:#1E40AF;border-color:#2563EB}
[data-theme="light"] .badge-hook{background:#FEE2E2;color:#991B1B;border-color:#DC2626}
[data-theme="light"] .badge-skill{background:#DCFCE7;color:#166534;border-color:#15803D}
[data-theme="light"] .badge-agent{background:#FEF3C7;color:#92400E;border-color:#B45309}
.note{background:#0F2A1F;border:1px solid #15803D;border-radius:8px;padding:12px 16px;margin-top:14px;font-size:13px;color:#86EFAC}
.note strong{color:#4ADE80}
[data-theme="light"] .note{background:#ECFDF5;border-color:#A7F3D0;color:#166534}
[data-theme="light"] .note strong{color:#15803D}
.warn{background:#3F1D1D;border:1px solid #7F1D1D;border-radius:8px;padding:12px 16px;margin-top:14px;font-size:13px;color:#FCA5A5}
.warn strong{color:#F87171}
[data-theme="light"] .warn{background:#FEF2F2;border-color:#FECACA;color:#7F1D1D}
[data-theme="light"] .warn strong{color:#991B1B}
a{color:var(--accent)}
.back-link{display:inline-block;color:var(--accent);text-decoration:none;font-size:14px;margin-bottom:14px;font-weight:600}
.back-link:hover{text-decoration:underline}
/* ─── 적응형 UI — 태블릿 (≤ 780px) ───────────────────────────────── */
@media (max-width:780px){
  body{padding:18px 16px}
  h1{font-size:22px}
  .sub{font-size:13px}
  .intro{padding:14px 16px;font-size:13px;margin-bottom:14px}
  .section{padding:16px 18px;margin-bottom:14px}
  .section h2{font-size:16px;margin-bottom:10px}
  .section h3{font-size:13px;margin:12px 0 6px}
  .section p,.section ul,.section li{font-size:13px}
  .section ul{margin-left:18px}
  .tree{font-size:12px;padding:12px 14px;overflow-x:auto}
  table{font-size:13px}
  th{padding:8px 10px;font-size:11px;letter-spacing:0.6px}
  td{padding:8px 10px}
  .note,.warn{padding:10px 14px;font-size:12.5px}
}
/* ─── 적응형 UI — 모바일 (≤ 480px) ───────────────────────────────── */
@media (max-width:480px){
  body{padding:14px 12px}
  h1{font-size:20px}
  .sub{font-size:12px}
  .intro{padding:12px 14px;font-size:12.5px}
  .section{padding:14px 16px}
  .section h2{font-size:15px;flex-wrap:wrap;gap:6px}
  .section h2 .tag{font-size:10px;padding:1px 6px}
  .section p,.section ul,.section li{font-size:12.5px}
  .tree{font-size:11px;padding:10px 12px;line-height:1.35}
  /* table 가로 스크롤 — 모바일에서 4컬럼 짤림 방지 */
  table{display:block;overflow-x:auto;white-space:nowrap;font-size:12px}
  th,td{padding:6px 8px;white-space:normal;min-width:80px}
  th:first-child,td:first-child{min-width:110px}
  td code{font-size:10.5px;padding:1px 4px}
  .note,.warn{font-size:12px;padding:10px 12px}
  .back-link{font-size:13px;margin-bottom:10px}
}
</style></head><body>
${themeToggleButton()}

<a class="back-link" href="/hiro">← HIRO</a>

<h1>🐈‍⬛ HIRO</h1>
<p class="sub" style="font-size:15px;color:#CBD5E1;font-weight:600;margin-bottom:4px">Harness for Interactive Reporting Optimization</p>
<p class="sub" style="font-size:13px;color:#94A3B8;font-style:italic;margin-bottom:14px">Built for beginners. Engineered for repetition.</p>
<p class="sub" style="font-size:13px;color:#94A3B8;font-style:italic;margin-bottom:14px">🐈‍⬛ 히로 (HIRO) — 본 하네스의 마스코트 검은 고양이. 부트스트랩 시나리오 같은 대화형 작업에서 친근한 안내자로 말을 건넵니다.</p>
<p class="sub" style="font-size:14px;color:#CBD5E1;margin-bottom:10px">HIRO optimizes how you build interactive dashboards with Claude Code. Instead of crafting data parsers, chart components, and newsletter templates from scratch every time, HIRO ships a reusable harness — <strong>skills, rules, hooks, and scenario-based bootstraps</strong> — that turns the manual workflow into a standardized, repeatable pipeline.</p>
<p class="sub" style="font-size:14px;color:#CBD5E1;margin-bottom:18px">HIRO 는 Claude Code 로 인터랙티브 대시보드를 만드는 작업을 최적화합니다. 데이터 파서, 차트 컴포넌트, 뉴스레터 템플릿을 매번 처음부터 짜는 대신, HIRO 는 재사용 가능한 하네스 — <strong>스킬·룰·훅·시나리오 기반 부트스트랩</strong> — 를 제공해 수작업 워크플로우를 표준화된 반복 가능한 파이프라인으로 바꿉니다.</p>

<div class="intro">
  <p><strong>이 페이지가 뭔가요?</strong> — Claude 가 본 저장소에서 일할 때 자동으로 따르는 <strong>규칙·자동 검사·작업 매뉴얼·보조 일꾼</strong>의 묶음입니다. 본 페이지는 <strong>사람이 보기 좋게 정리한 미러</strong>이고, 실제 Claude 가 읽는 원본은 <code>CLAUDE.md</code> + <code>.claude/</code> 폴더에 있어요.</p>
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
  <h2>폴더 구조 (2벌 정리)</h2>
  <p><strong>1) 실제 작동 (Claude Code 공식 — Claude 가 자동 로드)</strong></p>
  <div class="tree">CLAUDE.md                       (프로젝트 헌법, 항상 로드)
AGENTS.md                       (OpenAI Codex / Antigravity 자동 로드)
.claude/
├── settings.json               (Hook 등록 JSON 강제)
├── hooks/                      (*.sh + README.md)
├── skills/&lt;name&gt;/SKILL.md      (Skill — data, design, newsletter 등)
├── agents/                     (Sub-Agent — data-puller.md 등)
└── rules/                      (data.md, design.md, ai.md 등 — 비공식 컨벤션)</div>

  <p><strong>2) 미러 (사람용 진입점 + git 공유 — 본 폴더 <code>harness-mirror/</code>)</strong></p>
  <div class="tree">harness-mirror/
├── CLAUDE.md                   (루트 CLAUDE.md 미러)
├── AGENTS.md                   (루트 AGENTS.md 미러)
├── .claude/                    (실제 .claude/ 1:1 미러 — 그대로 다른 프로젝트에 사용 가능)
│   ├── settings.json
│   ├── hooks/{*.sh, README.md}
│   ├── skills/&lt;name&gt;/SKILL.md
│   ├── agents/*.md
│   └── rules/*.md
└── docs/                       (사람용 가이드 모음)
    ├── HARNESS.md              (전체 설명 마크다운)
    ├── HARNESS.html            (본 파일 — 브라우저 더블클릭)
    ├── CHART_LIBRARY.html      (차트 분류 카탈로그 정적 스냅샷)
    ├── HUMAN_GUIDE.md          (사람 사용 설명서)
    └── hooks/                  (Hook 영역별 영향)
        ├── data.md
        └── design.md</div>
</div>

<div class="section">
  <h2><span class="tag badge-rule">RULE</span> Rule — 따라야 할 규칙</h2>
  <p>토큰·invariant·ANTI-PATTERN 정의. Markdown 권고 (~80%).</p>
  <ul>
    <li><code>CLAUDE.md</code> — 프로젝트 헌법 (4 개념 정의 + NEVER Rule + 작업 흐름)</li>
    <li><code>.claude/rules/data.md</code> — 데이터 작업 Rule·매뉴얼·invariant (5단계 ERROR CATCHING / null vs 0 / 날짜 정규화)</li>
    <li><code>.claude/rules/design.md</code> — 디자인 토큰·컴포넌트 카탈로그 (C-01~C-24)·SVG 패턴·이메일 호환 ANTI-PATTERN</li>
    <li><code>.claude/rules/newsletter.md</code> — 이메일 호환 (table-layout, 인라인 style), V1/V2/V3 카드, 발송 전 검증</li>
    <li><code>.claude/rules/ai.md</code> — Anthropic API / 인사이트 생성 / N3 검증 / 비용 추적</li>
    <li><code>.claude/rules/BOOTSTRAP.md</code> · <code>BOOTSTRAP-newsletter.md</code> — Claude 가 따라가는 시나리오</li>
  </ul>
</div>

<div class="section">
  <h2><span class="tag badge-hook">HOOK</span> Hook — 절대 금지 강제</h2>
  <p>시스템이 직접 차단. JSON 필수 + 인간 가독 md 설명서.</p>
  <ul>
    <li><code>docs/hooks/data.md</code> — 데이터 영역 적용 Hook (syntax-check) + 추가 후보</li>
    <li><code>docs/hooks/design.md</code> — 디자인 영역 적용 Hook (block-dist) + 추가 후보</li>
  </ul>
  <p>원본 정의: <code>.claude/settings.json</code> (JSON 강제), <code>.claude/hooks/*.sh</code> (스크립트), <code>.claude/hooks/README.md</code> (사람용 설명서)</p>
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
  <p style="font-size:13px;color:#94A3B8">참조: <code>.claude/rules/data.md</code> (5단계 ERROR CATCHING, invariant) · Sub-Agent <code>.claude/agents/data-puller.md</code></p>

  <h3>🎨 디자인 (Design)</h3>
  <table>
    <tr><th>Skill</th><th>담당</th><th>이렇게 호출</th></tr>
    <tr><td><code>design</code> (인덱스)</td><td>sub-skill 매핑만</td><td><em>직접 호출 X — 아래 3 sub 중 하나</em></td></tr>
    <tr><td><code>design-chart</code></td><td>분류 코드(L-1~T-1) 차트 / 차트+표 결합(C-24) / 신규 SVG 양식</td><td>"design-chart 스킬로 L-1 차트 그려줘" / <code>/skills design-chart</code></td></tr>
    <tr><td><code>design-component</code></td><td>신규 컴포넌트(C-XX) / 카드 변형(V4) / iframe srcdoc</td><td>"design-component 스킬로 새 카드 만들어줘" / <code>/skills design-component</code></td></tr>
    <tr><td><code>design-tune</code></td><td>이메일 호환 변환 / KO·EN 라벨 / UI 회귀 디버깅</td><td>"design-tune 스킬로 이메일에서 차트 안 보이는 거 고쳐줘" / <code>/skills design-tune</code></td></tr>
  </table>
  <p style="font-size:13px;color:#94A3B8">참조: <code>.claude/rules/design.md</code> (토큰·C-01~C-24·SVG 패턴) · 적용 Hook <code>block-dist.sh</code></p>

  <h3>📧 뉴스레터 (Newsletter)</h3>
  <table>
    <tr><th>Skill</th><th>담당</th><th>이렇게 호출</th></tr>
    <tr><td><code>newsletter</code> (인덱스)</td><td>sub-skill 매핑만</td><td><em>직접 호출 X — 아래 3 sub 중 하나</em></td></tr>
    <tr><td><code>newsletter-make</code></td><td>신규 발행본 작성 (BOOTSTRAP-newsletter 8 step 트리거) / 새 섹션 추가</td><td>"newsletter-make 스킬로 5월호 뉴스레터 만들어줘" / <code>/skills newsletter-make</code></td></tr>
    <tr><td><code>newsletter-debug</code></td><td>미출시 회귀 / 이메일 클라이언트별 깨짐 / iframe 클립</td><td>"newsletter-debug 스킬로 Outlook 에서 깨진 거 고쳐줘" / <code>/skills newsletter-debug</code></td></tr>
    <tr><td><code>newsletter-send</code></td><td>발송 전 multi-client 검증 / SMTP 발송 / audit log</td><td>"newsletter-send 스킬로 발송 전 검증해줘" / <code>/skills newsletter-send</code></td></tr>
  </table>
  <p style="font-size:13px;color:#94A3B8">참조: <code>.claude/rules/newsletter.md</code> (NEVER, 검증 체크리스트) · <code>.claude/rules/BOOTSTRAP-newsletter.md</code> (시나리오) · 적용 Hook <code>newsletter-guard.sh</code></p>

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
    <li><code>.claude/agents/data-puller.md</code> — 데이터 파싱 파이프라인의 shape·정합성·누락 조사·보고 (read-only)</li>
  </ul>
</div>

<div class="section">
  <h2>다른 프로젝트에 적용</h2>
  <ol style="margin-left:22px;font-size:14px;color:#CBD5E1">
    <li>ZIP 다운로드 (어드민 <code>/hiro</code>) 또는 GitHub 리포 (https://github.com/mts8787-droid/HIRO) clone</li>
    <li>대상 프로젝트 루트에 <code>CLAUDE.md</code>, <code>AGENTS.md</code>, <code>.claude/</code>, <code>harness-mirror/</code> 복사</li>
    <li><code>chmod +x .claude/hooks/*.sh</code></li>
    <li>Claude Code 실행 → 자동 로드</li>
  </ol>
  <div class="note">
    <strong>💡 harness-mirror/ 는 사람용 설명 사본</strong> — 실제 작동에는 영향 X. 필요 없으면 삭제 가능 (단, GitHub 리포지토리 정리 시 손쉽게 다시 받을 수 있음).
  </div>
</div>

<div class="section">
  <h2>본 저장소 갱신 흐름</h2>
  <ol style="margin-left:22px;font-size:14px;color:#CBD5E1">
    <li>원본 파일 수정 (예: <code>.claude/rules/data.md</code>, <code>.claude/skills/data/SKILL.md</code>)</li>
    <li><code>npm run build</code> 또는 <code>npm run sync:harness</code> → <code>harness-mirror/</code> 자동 갱신</li>
    <li>미러 폴더 변경도 함께 커밋</li>
  </ol>
  <div class="note">
    <strong>💡 자동 동기화</strong> — <code>package.json</code> 의 <code>prebuild</code> 스크립트가 <code>node scripts/sync-harness.mjs</code> 호출. 빌드 시점에 항상 미러 최신.
  </div>
</div>

<div class="section">
  <h2>강제력 격상 패턴</h2>
  <p>Rule을 권고가 아닌 100% 강제로 만들려면 → 해당 Rule을 검출하는 <code>*.sh</code> Hook 작성 → <code>.claude/settings.json</code> 등록.</p>
  <p>예시는 <code>docs/hooks/data.md</code> · <code>docs/hooks/design.md</code> 의 "추가 후보 Hook" 섹션 참고.</p>
</div>

</body></html>`

fs.writeFileSync(path.join(MIRROR_DIR, 'docs/HARNESS.html'), HARNESS_HTML, 'utf8')

// ─── 7) docs/CHART_LIBRARY.html (차트 카탈로그 정적 스냅샷) ────────────────
fs.writeFileSync(path.join(MIRROR_DIR, 'docs/CHART_LIBRARY.html'),
  renderChartLibraryHTML({ adminMode: false }), 'utf8')

console.log(`[sync-harness] 완료. harness-mirror/ 1:1 미러 ${okCount}개 파일 + 정적 생성 (docs/HARNESS.{md,html}, docs/CHART_LIBRARY.html, docs/hooks/{data,design}.md)`)
