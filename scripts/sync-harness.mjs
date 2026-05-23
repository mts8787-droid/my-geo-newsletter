#!/usr/bin/env node
// scripts/sync-harness.mjs
// 원본 하네스 파일 (CLAUDE.md, .claude/rules/*.md, .claude/skills/*/SKILL.md, .claude/hooks/*.sh)
// → docs/agents/ 미러 폴더 자동 동기화.
// package.json prebuild 에서 자동 호출 — 실제 하네스 수정 시 미러도 자동 갱신.
//
// 원본 위치 (Claude Code 공식 폴더 구조):
//   - CLAUDE.md (루트) — 프로젝트 헌법
//   - .claude/settings.json — 훅 등록 (JSON 강제)
//   - .claude/hooks/*.sh + README.md — 훅 스크립트 + 인간 설명서
//   - .claude/skills/<name>/SKILL.md — 스킬 (frontmatter 트리거)
//   - .claude/agents/*.md — 서브에이전트 (frontmatter 트리거)
//   - .claude/rules/*.md — 룰 매뉴얼 (비공식 컨벤션 — CLAUDE.md 가 명시 참조)
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
  // 룰 매뉴얼 (원본: .claude/rules/)
  { src: '.claude/rules/data.md',   dst: 'docs/agents/rules/data.md' },
  { src: '.claude/rules/design.md', dst: 'docs/agents/rules/design.md' },
  { src: '.claude/rules/ai.md',     dst: 'docs/agents/rules/ai.md' },
  // 스킬 워크플로우 (frontmatter 제거 — 미러는 참조용)
  { src: '.claude/skills/data/SKILL.md',   dst: 'docs/agents/skills/data.md',   stripFrontmatter: true },
  { src: '.claude/skills/design/SKILL.md', dst: 'docs/agents/skills/design.md', stripFrontmatter: true },
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
// 훅 자체는 영역 무관 (syntax-check 는 모든 .js, block-dist 는 모든 dist).
// 본 미러는 "이 훅이 데이터 작업 / 디자인 작업에 어떻게 영향" 설명.
const HOOKS_DATA_MD = `<!-- 자동 생성 미러 — .claude/hooks/README.md + 데이터 영역 관점 -->

# 훅 (Hook) — 데이터 영역 관점

> 데이터 작업 (Google Sheets 파싱·매핑·정규화) 시 어떤 훅이 어떤 보호를 하는지.
> 훅 자체 정의는 \`.claude/settings.json\` (JSON 강제) + \`.claude/hooks/*.sh\`.
> 인간 가독 전체 설명: \`.claude/hooks/README.md\`.

## 데이터 작업에 적용되는 훅

### 1. syntax-check.sh (PostToolUse)
- **트리거**: Edit | Write | MultiEdit 직후
- **대상**: \`src/\` · \`routes/\` 의 \`*.js\`
- **데이터 영역 적용**: \`src/excelUtils.js\` · \`src/categoryMap.js\` · \`src/sheetParserUtils.js\` · \`src/googleSheetsUtils.js\` · \`src/shared/sheetTabsForMode.js\`
- **목적**: 데이터 파서 / 매핑 / 라우터 신택스 깨짐 즉시 차단. 빌드 시까지 모르고 가는 것 방지.

### 2. block-dist.sh (PreToolUse) — 데이터 영역 영향 적음
- **트리거**: Edit | Write | MultiEdit 호출 전
- **대상**: \`dist-*/\` · \`dist/\` 경로
- **데이터 영역 영향**: 데이터 작업은 보통 src/ 만 수정 — 본 훅 trigger 안 됨. 다만 데이터 변경 후 빌드 산출물에 실수로 손대지 않게.

## 추가 후보 훅 (미구현 — 데이터 영역 강화용)

- **warn-inline-mapping.sh** (PostToolUse): Edit 후 추가된 라인에 \`tv:.*'TV'.*monitor.*'IT'\` 같은 인라인 매핑 패턴 검출 → warn. categoryMap.js single source 룰 강제. (STYLER 누락 회귀 재발 차단)
- **warn-silent-fallback.sh** (PostToolUse): \`return {}\` 단독 라인 검출 → \`_logWarn\` 사용 권고. \`.claude/rules/data.md\` ANTI-PATTERN 강제.
- **block-categorymap-bypass.sh**: \`src/categoryMap.js\` 외 파일에 \`PROD_ID_TO_\` 같은 정의 추가 차단.

## 관련 룰 / 스킬
- 룰: \`.claude/rules/data.md\` (5단계 ERROR CATCHING · ANTI-PATTERN)
- 스킬 워크플로우: \`.claude/skills/data/SKILL.md\`
- 헌법: \`CLAUDE.md\` (NEVER 룰)
`

const HOOKS_DESIGN_MD = `<!-- 자동 생성 미러 — .claude/hooks/README.md + 디자인 영역 관점 -->

# 훅 (Hook) — 디자인 영역 관점

> 디자인/UI 작업 (대시보드·뉴스레터·이메일 호환) 시 어떤 훅이 어떤 보호를 하는지.
> 훅 자체 정의는 \`.claude/settings.json\` (JSON 강제) + \`.claude/hooks/*.sh\`.
> 인간 가독 전체 설명: \`.claude/hooks/README.md\`.

## 디자인 작업에 적용되는 훅

### 1. block-dist.sh (PreToolUse) — 디자인 영역 핵심 보호
- **트리거**: Edit | Write | MultiEdit 호출 전
- **대상**: \`dist-*/\` · \`dist/\` 빌드 산출물
- **디자인 영역 적용**: \`dist-dashboard/\` · \`dist-visibility/\` · \`dist-citation/\` · \`dist-tracker/\` · \`dist-monthly-report/\` · \`dist-weekly-report/\` 의 정적 HTML / 인라인 JS / CSS
- **목적**: 빌드 산출물 직접 수정 → 다음 빌드 시 덮어쓰여짐 + 디자인 토큰 불일치 회귀 방지. CLAUDE.md NEVER 룰 강제.

### 2. syntax-check.sh (PostToolUse)
- **트리거**: Edit | Write | MultiEdit 직후
- **대상**: \`src/\` · \`routes/\` 의 \`*.js\` (서버 측만; .jsx 는 제외)
- **디자인 영역 적용**: \`src/dashboard/dashboardTemplate.js\` · \`dashboardClient.js\` · \`dashboardSvg.js\` · \`dashboardConsts.js\` · \`citation/citationTemplate.js\` · \`emailTemplate.js\` · \`weekly-report/weeklyTemplate.js\`
- **목적**: 디자인 HTML 생성기 / SVG 헬퍼 / 인라인 클라이언트 JS 신택스 보호.

## 추가 후보 훅 (미구현 — 디자인 영역 강화용)

- **block-hardcoded-color.sh** (PostToolUse): Edit 후 추가된 라인에 \`#[0-9A-Fa-f]{3,6}\` 패턴 + \`color\`/\`background\` 키워드 동시 검출 → warn. dashboardConsts.js 의 BRAND_COLORS / RED 등 토큰 외 색상 추가 차단.
- **warn-large-container.sh**: \`containerWidth\` 값이 940 초과 시 warn. CLAUDE.md NEVER 룰 ("이메일 컨테이너 우측 짤림") 강제.
- **block-flex-in-email.sh**: \`emailTemplate.js\` 의 Edit 후 \`display:\\s*flex\` 또는 \`grid\` 패턴 검출 시 차단. 이메일 호환 (table-layout) 강제.
- **block-overflow-iframe.sh**: \`body { overflow-x:hidden }\` 또는 \`min-width\` 추가 차단. iframe 클립 방지.

## 관련 룰 / 스킬
- 룰: \`.claude/rules/design.md\` (토큰 · 컴포넌트 카탈로그 · SVG 패턴 · 이메일 호환 ANTI-PATTERN)
- 스킬 워크플로우: \`.claude/skills/design/SKILL.md\`
- 헌법: \`CLAUDE.md\` (NEVER 룰 — containerWidth · overflow-x · 텍스트 임의 다듬기 등)
`

fs.mkdirSync(path.join(ROOT, 'docs/agents/hooks'), { recursive: true })
fs.writeFileSync(path.join(ROOT, 'docs/agents/hooks/data.md'),   HOOKS_DATA_MD,   'utf8')
fs.writeFileSync(path.join(ROOT, 'docs/agents/hooks/design.md'), HOOKS_DESIGN_MD, 'utf8')

// ─── HARNESS.md — 전체 하네스 설명 (정적) ───────────────────────────────────
const HARNESS_MD = `# Harness — 본 프로젝트의 Claude Code 하네스 전체 설명

> 본 폴더 (\`docs/agents/\`) 는 본 레포의 모든 하네스 컴포넌트의 **미러링 본** (사람용 진입점).
> Claude Code 가 실제 작동에 사용하는 것은 원본 (\`CLAUDE.md\`, \`.claude/\` 안).
> 원본 수정 시 \`npm run sync:harness\` 또는 \`npm run build\` (prebuild) 로 미러 자동 갱신.

## 폴더 구조

### 원본 (Claude Code 공식 폴더 구조 — 실제 작동)
\`\`\`
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
\`\`\`

### 미러 (docs/agents/ — 사람용 진입점, 자동 생성)
\`\`\`
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
\`\`\`

## 4 개념 — 강제력 차이

| 개념 | 형식 | 강제력 | 원본 위치 | 미러 위치 |
|---|---|---|---|---|
| **룰 (Rule)** | Markdown | 권고 (~80%) | \`CLAUDE.md\`, \`.claude/rules/*.md\` | \`docs/agents/CLAUDE.md\`, \`docs/agents/rules/*.md\` |
| **훅 (Hook)** | JSON 강제 (100%) + md 설명서 | 시스템 차단 | \`.claude/settings.json\`, \`.claude/hooks/*\` | \`docs/agents/hooks/*.md\` (영역별 관점) |
| **스킬 (Skill)** | Markdown 워크플로우 | 권고 | \`.claude/skills/<name>/SKILL.md\` | \`docs/agents/skills/*.md\` |
| **서브에이전트** | Markdown frontmatter | 위임 시 활성 | \`.claude/agents/*.md\` | 미러 없음 (원본 그대로) |

## 핵심 차이

- **룰** = "따라야 할 규칙" — 토큰·invariant·ANTI-PATTERN. **참조용 매뉴얼**.
- **훅** = "절대 하면 안 되는 것" — 시스템이 강제 차단. **JSON 필수**.
- **스킬** = "자동으로 특정 행동을 하게 하는 명령 조합" — 순차 워크플로우. step-by-step.
- **서브에이전트** = 특정 영역 분리 작업 (read-only 진단 등). Claude Code 공식 기능.

## 사용

### 다른 프로젝트에 적용
1. ZIP 다운로드 (어드민 \`/admin/harness\` 페이지) — 원본 \`.claude/\` + \`CLAUDE.md\` + 미러 \`docs/agents/\` 모두 포함
2. 또는 수동: \`CLAUDE.md\` + \`.claude/\` (전체) 통째로 복사
3. \`chmod +x .claude/hooks/*.sh\`
4. Claude Code 실행 → 자동 로드

### 본 레포에서 갱신 흐름
1. **원본 파일** 수정 (예: \`.claude/rules/data.md\`, \`.claude/skills/data/SKILL.md\`)
2. \`npm run build\` 또는 \`npm run sync:harness\` → \`docs/agents/\` 미러 자동 갱신
3. 미러 폴더 변경도 함께 커밋

### 미러는 읽기 전용
- 미러 파일 상단에 "원본 위치" 헤더 주석 — 다음 sync 시 덮어쓰여짐
- 직접 수정 금지. 항상 원본에서.

### 자동 동기화
- \`package.json\` 의 \`prebuild\` 스크립트가 \`node scripts/sync-harness.mjs\` 호출
- \`npm run build\` 시 자동 미러 갱신
- 수동: \`npm run sync:harness\`

## 영역별 작업 가이드

### 데이터 작업
1. 룰 매뉴얼 참조: \`rules/data.md\` (5단계 ERROR CATCHING, invariant, ANTI-PATTERN)
2. 워크플로우 선택: \`skills/data.md\` (신규 시트 추가, 회귀 디버깅 등 8개)
3. 적용되는 훅: \`hooks/data.md\` (syntax-check 위주)
4. 서브에이전트 위임 옵션: \`data-puller.md\` (read-only 진단)

### 디자인 작업
1. 룰 매뉴얼 참조: \`rules/design.md\` (토큰, 컴포넌트 카탈로그 C-01~C-23, SVG 패턴)
2. 워크플로우 선택: \`skills/design.md\` (신규 컴포넌트 추가, 이메일 호환 변환 등 7개)
3. 적용되는 훅: \`hooks/design.md\` (block-dist 위주 + syntax-check)
4. 서브에이전트 위임 옵션: 현재 없음 (필요 시 신설)

## 강제력 격상 패턴

룰을 권고가 아닌 100% 강제로 만들려면 → 해당 룰을 검출하는 \`*.sh\` 훅 작성 → \`.claude/settings.json\` 등록.
예시는 \`hooks/data.md\` · \`hooks/design.md\` 의 "추가 후보 훅" 참고.
`

fs.writeFileSync(path.join(ROOT, 'docs/agents/HARNESS.md'), HARNESS_MD, 'utf8')

// ─── HARNESS.html — 정적 HTML (브라우저 더블클릭으로 열림) ───────────────────
const HARNESS_HTML = `<!DOCTYPE html>
<html lang="ko"><head><meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Harness — 본 프로젝트의 Claude Code 하네스</title>
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{background:#0F172A;color:#E2E8F0;font-family:'LG Smart','Arial Narrow',Arial,sans-serif;padding:28px 32px;line-height:1.6;max-width:1100px;margin:0 auto}
h1{font-size:26px;color:#F8FAFC;margin-bottom:6px}
.sub{font-size:13px;color:#64748B;margin-bottom:20px}
.intro{background:#1E293B;border:1px solid #334155;border-radius:12px;padding:18px 22px;margin-bottom:18px;font-size:13px;color:#CBD5E1}
.intro p{margin-bottom:6px}
.intro strong{color:#F8FAFC}
table{width:100%;border-collapse:collapse;font-size:13px;margin-bottom:18px;background:#1E293B;border-radius:8px;overflow:hidden}
th{text-align:left;color:#94A3B8;font-weight:600;padding:10px 14px;border-bottom:1px solid #334155;font-size:11px;text-transform:uppercase;letter-spacing:1px}
td{padding:10px 14px;border-bottom:1px solid rgba(51,65,85,.5);color:#CBD5E1}
code{font-family:ui-monospace,Menlo,Consolas,monospace;font-size:11px;color:#F8FAFC;background:#0F172A;padding:2px 6px;border-radius:3px}
.section{background:#1E293B;border:1px solid #334155;border-radius:12px;padding:20px 24px;margin-bottom:18px}
.section h2{font-size:16px;font-weight:700;color:#F8FAFC;margin-bottom:12px;display:flex;align-items:center;gap:8px}
.section h2 .tag{font-size:10px;background:#334155;color:#94A3B8;padding:2px 8px;border-radius:4px;font-weight:600;text-transform:uppercase;letter-spacing:1px}
.section h3{font-size:13px;font-weight:600;color:#F8FAFC;margin:14px 0 6px}
.section p{font-size:13px;color:#CBD5E1;margin-bottom:8px}
.section ul{margin:6px 0 12px 22px;font-size:13px;color:#CBD5E1}
.section li{margin-bottom:4px}
.tree{font-family:ui-monospace,Menlo,Consolas,monospace;font-size:12px;background:#0F172A;padding:14px 18px;border-radius:8px;color:#CBD5E1;white-space:pre;margin-bottom:14px;line-height:1.4}
.badge-rule{background:#1E3A5F;color:#60A5FA;border:1px solid #2563EB}
.badge-hook{background:#3F1D1D;color:#F87171;border:1px solid #7F1D1D}
.badge-skill{background:#1F3A1F;color:#4ADE80;border:1px solid #15803D}
.badge-agent{background:#3F2A1D;color:#FBBF24;border:1px solid #B45309}
.note{background:#0F2A1F;border:1px solid #15803D;border-radius:8px;padding:12px 16px;margin-top:14px;font-size:12px;color:#86EFAC}
.note strong{color:#4ADE80}
.warn{background:#3F1D1D;border:1px solid #7F1D1D;border-radius:8px;padding:12px 16px;margin-top:14px;font-size:12px;color:#FCA5A5}
.warn strong{color:#F87171}
a{color:#60A5FA}
</style></head><body>

<h1>Harness</h1>
<p class="sub">본 프로젝트의 Claude Code 하네스 (룰·훅·스킬·서브에이전트) 전체 설명</p>

<div class="intro">
  <p><strong>본 폴더 <code>docs/agents/</code> 는 모든 하네스의 미러링 본 (사람용 진입점).</strong> Claude Code 가 실제 사용하는 것은 원본 (<code>CLAUDE.md</code>, <code>.claude/</code> 안).</p>
  <p>원본 수정 시 <code>npm run sync:harness</code> 또는 <code>npm run build</code> (prebuild) 시 본 미러 자동 갱신.</p>
</div>

<div class="section">
  <h2>4 개념 정의</h2>
  <table>
    <tr><th>개념</th><th>형식</th><th>강제력</th><th>역할</th></tr>
    <tr><td><span class="tag badge-rule">RULE</span> 룰</td><td>Markdown</td><td>권고 (~80%)</td><td>따라야 할 규칙 — 토큰·invariant·ANTI-PATTERN. 참조용 매뉴얼.</td></tr>
    <tr><td><span class="tag badge-hook">HOOK</span> 훅</td><td>JSON + md 설명서</td><td>100% (시스템 차단)</td><td>절대 하면 안 되는 것. 등록은 settings.json (JSON 필수).</td></tr>
    <tr><td><span class="tag badge-skill">SKILL</span> 스킬</td><td>Markdown</td><td>권고 (필요 시 로드)</td><td>자동 워크플로우 / 명령 조합. step-by-step.</td></tr>
    <tr><td><span class="tag badge-agent">AGENT</span> 서브에이전트</td><td>Markdown frontmatter</td><td>위임 시 활성</td><td>특정 영역 분리 작업. Claude Code 공식 기능.</td></tr>
  </table>

  <div class="warn">
    <strong>⚠ .md 안에 hook 정의 적어도 무시됨</strong> — 자동 강제는 <code>.claude/settings.json</code> (JSON) 만. <code>.md</code> 는 Claude 가 읽고 권고로 따름 (~80%).
  </div>
</div>

<div class="section">
  <h2>폴더 구조</h2>
  <p><strong>원본 (Claude Code 공식 — 실제 작동)</strong></p>
  <div class="tree">CLAUDE.md
.claude/
├── settings.json               (훅 등록 JSON 강제)
├── hooks/                      (syntax-check.sh, block-dist.sh, README.md)
├── skills/<name>/SKILL.md      (data, design, prompting)
├── agents/                     (data-puller.md)
└── rules/                      (data.md, design.md) ← 비공식 컨벤션</div>

  <p><strong>미러 (사람용 진입점 — 자동 생성)</strong></p>
  <div class="tree">docs/agents/
├── HARNESS.md            ← 전체 설명 (마크다운)
├── HARNESS.html          ← 본 파일 (브라우저로 더블클릭)
├── CLAUDE.md             ← 프로젝트 헌법 미러
├── rules/                ← 룰 매뉴얼 미러
│   ├── data.md
│   └── design.md
├── skills/               ← 스킬 워크플로우 미러
│   ├── data.md
│   └── design.md
└── hooks/                ← 훅 영역별 관점
    ├── data.md
    └── design.md</div>
</div>

<div class="section">
  <h2><span class="tag badge-rule">RULE</span> 룰 (Rule) — 따라야 할 규칙</h2>
  <p>토큰·invariant·ANTI-PATTERN 정의. Markdown 권고 (~80%).</p>
  <ul>
    <li><code>CLAUDE.md</code> — 프로젝트 헌법 (4 개념 정의 + NEVER 룰 + 작업 흐름)</li>
    <li><code>rules/data.md</code> — 데이터 작업 룰·매뉴얼·invariant (5단계 ERROR CATCHING / null vs 0 / 날짜 정규화)</li>
    <li><code>rules/design.md</code> — 디자인 토큰·컴포넌트 카탈로그 (C-01~C-23)·SVG 패턴·이메일 호환 ANTI-PATTERN</li>
  </ul>
  <p>원본: <code>CLAUDE.md</code>, <code>.claude/rules/data.md</code>, <code>.claude/rules/design.md</code></p>
</div>

<div class="section">
  <h2><span class="tag badge-hook">HOOK</span> 훅 (Hook) — 절대 금지 강제</h2>
  <p>시스템이 직접 차단. JSON 필수 + 인간 가독 md 설명서.</p>
  <ul>
    <li><code>hooks/data.md</code> — 데이터 영역 적용 훅 (syntax-check 위주) + 추가 후보 (warn-inline-mapping, warn-silent-fallback 등)</li>
    <li><code>hooks/design.md</code> — 디자인 영역 적용 훅 (block-dist 위주) + 추가 후보 (block-hardcoded-color, block-flex-in-email 등)</li>
  </ul>
  <p>원본 정의: <code>.claude/settings.json</code> (JSON 강제), <code>.claude/hooks/*.sh</code> (스크립트)</p>
</div>

<div class="section">
  <h2><span class="tag badge-skill">SKILL</span> 스킬 (Skill) — 순차 워크플로우</h2>
  <p>"이걸 할 때는 1) → 2) → 3) ..." step-by-step 명령 조합.</p>
  <ul>
    <li><code>skills/data.md</code> — 8 워크플로우 (신규 시트 추가, 신규 카테고리 추가, 회귀 디버깅 TDD, 거대 파서 분할, silent fallback 강화, 매핑 통합, sync verify, ERROR CATCHING 적용)</li>
    <li><code>skills/design.md</code> — 7 워크플로우 (신규 컴포넌트 추가, SVG 차트 패턴, 뉴스레터 카드 변형, 이메일 호환 변환, KO/EN 라벨 추가, iframe srcdoc 미리보기, 회귀 디버깅)</li>
  </ul>
  <p>원본: <code>.claude/skills/data/SKILL.md</code>, <code>.claude/skills/design/SKILL.md</code></p>
</div>

<div class="section">
  <h2><span class="tag badge-agent">AGENT</span> 서브에이전트 (Sub-agent)</h2>
  <p>특정 영역 분리 작업 — Claude Code 공식 기능. Claude 가 위임 시 활성화.</p>
  <ul>
    <li><code>data-puller.md</code> — 데이터 파싱 파이프라인의 shape·정합성·누락 조사·보고 (read-only)</li>
  </ul>
</div>

<div class="section">
  <h2>다른 프로젝트에 적용</h2>
  <ol style="margin-left:22px;font-size:13px;color:#CBD5E1">
    <li>ZIP 다운로드 (어드민 <code>/admin/harness</code>) 또는 <code>.claude/agents/</code> + <code>CLAUDE.md</code> + <code>docs/</code> + <code>.claude/hooks/</code> + <code>.claude/skills/</code> + <code>.claude/settings.json</code> 복사</li>
    <li><code>chmod +x .claude/hooks/*.sh</code></li>
    <li>Claude Code 실행 → 자동 로드</li>
  </ol>
</div>

<div class="section">
  <h2>본 레포 갱신 흐름</h2>
  <ol style="margin-left:22px;font-size:13px;color:#CBD5E1">
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
  <p>룰을 권고가 아닌 100% 강제로 만들려면 → 해당 룰을 검출하는 <code>*.sh</code> 훅 작성 → <code>.claude/settings.json</code> 등록.</p>
  <p>예시는 <code>hooks/data.md</code> · <code>hooks/design.md</code> 의 "추가 후보 훅" 섹션 참고.</p>
</div>

</body></html>`

fs.writeFileSync(path.join(ROOT, 'docs/agents/HARNESS.html'), HARNESS_HTML, 'utf8')

// ─── CHART_LIBRARY.html — 차트 분류 카탈로그 정적 미러 ──────────────────────
// /admin/chart-library 페이지의 그 시점 스냅샷. 브라우저 더블클릭으로 인증 없이 열람 가능.
fs.writeFileSync(path.join(ROOT, 'docs/agents/CHART_LIBRARY.html'),
  renderChartLibraryHTML({ adminMode: false }), 'utf8')

console.log(`[sync-harness] 완료. 미러 ${okCount}개, skip ${skipCount}개. 정적 생성: HARNESS.md, HARNESS.html, CHART_LIBRARY.html, hooks/data.md, hooks/design.md`)
