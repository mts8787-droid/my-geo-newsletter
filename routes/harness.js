// Harness Mirror — Claude Code 하네스(룰·스킬·훅·서브에이전트) 정리 + ZIP 다운로드
// 본 페이지는 .claude/ + CLAUDE.md 의 실시간 미러. 다른 프로젝트에 적용하려고 ZIP 받을 때 사용.
// ZIP 생성 시점에 실제 파일을 읽으므로 항상 최신. 별도 동기화 단계 없음.
import { Router } from 'express'
import fs from 'fs'
import path from 'path'
import JSZip from 'jszip'
import { renderMarkdownPage } from './admin-pages.js'

export const harnessRouter = Router()

// ─── 하네스 컴포넌트 정의 ────────────────────────────────────────────────────
// 본 레포의 실제 파일 경로 + UI 표시용 메타데이터.
// 새 컴포넌트 (예: 신규 hook, agent) 추가 시 이 배열만 갱신.
const HARNESS_COMPONENTS = [
  // ─── 진입점 (Entry Point) — docs/agents/ 미러 호스트 ─────────────────────
  {
    category: 'entry',
    label: '전체 하네스 설명 (HTML)',
    file: 'docs/agents/HARNESS.html',
    desc: '브라우저 더블클릭으로 열림. 4 개념·폴더 구조·각 컴포넌트 설명·적용 가이드 시각화.',
  },
  {
    category: 'entry',
    label: '전체 하네스 설명 (Markdown)',
    file: 'docs/agents/HARNESS.md',
    desc: '동일 내용 마크다운. docs/agents/ 미러 호스트의 진입점.',
  },
  {
    category: 'entry',
    label: '차트 라이브러리 (정적 미러)',
    file: 'docs/agents/CHART_LIBRARY.html',
    desc: '14 차트 양식 + 툴팁 분류 카탈로그 (L-1~T-1) 정적 HTML. 라이브: /admin/chart-library.',
  },
  {
    category: 'entry',
    label: '사람용 가이드 (Human Guide)',
    file: 'docs/agents/HUMAN_GUIDE.md',
    desc: '사람이 직접 읽는 참조 자료 — 도메인 예시 3개 (매출/HR/제품) · 검증 체크리스트 · 트러블슈팅 표 · FAQ. BOOTSTRAP 시나리오 진행 중 Claude 가 본 문서 참조 안내.',
  },

  // ─── 룰 (Rule) — 따라야 할 규칙. Markdown. 권고 (~80%) ─────────────────────
  {
    category: 'rule',
    label: '프로젝트 헌법',
    file: 'CLAUDE.md',
    desc: '본 레포에서 작업할 때 항상 로드되는 프로젝트 룰. 하네스 4 개념 정의, 스택, NEVER 룰, 작업 흐름. (글로벌 헌법은 ~/.claude/CLAUDE.md)',
  },
  {
    category: 'rule',
    label: '데이터 룰 매뉴얼',
    file: '.claude/rules/data.md',
    desc: '데이터 작업의 토큰·invariant·ANTI-PATTERN. 5단계 ERROR CATCHING / null vs 0 / 날짜 정규화 등. 스킬이 step 별로 참조.',
  },
  {
    category: 'rule',
    label: '디자인 룰 매뉴얼',
    file: '.claude/rules/design.md',
    desc: '디자인 토큰·컴포넌트 카탈로그 (C-01~C-23)·SVG 패턴·이메일 호환 ANTI-PATTERN. 스킬이 step 별로 참조.',
  },
  {
    category: 'rule',
    label: 'AI 룰 매뉴얼',
    file: '.claude/rules/ai.md',
    desc: 'Anthropic API · 인사이트 생성 · N3 응답 검증 (invalid_output) · 에러 분류 · 비용 추적 · ANTI-PATTERN.',
  },
  {
    category: 'rule',
    label: '부트스트랩 시나리오 (Bootstrap)',
    file: '.claude/rules/BOOTSTRAP.md',
    desc: 'Claude 가 새 프로젝트 적용 시 따라가는 시나리오. 8 step (환경확인 → 도메인 인터뷰 → 도메인 파일 → 데이터 모델 → 디자인 토큰 → 외부 시스템 → 비즈니스 fact → 빌드 검증). 사람이 직접 읽는 가이드 X — Claude 가 step 별 사용자에게 질문·설명.',
  },

  // ─── 훅 (Hook) — 절대 금지. JSON 강제 (100%) + md 설명서 ───────────────────
  {
    category: 'hook',
    label: '훅 등록 (JSON 강제)',
    file: '.claude/settings.json',
    desc: 'PreToolUse + PostToolUse 훅 등록. JSON 필수 — 시스템이 파싱·실행하므로 Claude 우회 불가.',
  },
  {
    category: 'hook',
    label: '훅 인간 가독 설명서',
    file: '.claude/hooks/README.md',
    desc: '각 훅의 트리거·대상·동작·목적 + 신규 훅 추가 가이드. .md 안의 hook 정의는 무시됨을 명시.',
  },
  {
    category: 'hook',
    label: '신택스 검증 훅 (PostToolUse)',
    file: '.claude/hooks/syntax-check.sh',
    desc: 'src/·routes/ 의 .js Edit/Write 직후 node --check. 실패 시 exit 2 → Claude 재시도.',
  },
  {
    category: 'hook',
    label: 'dist 차단 훅 (PreToolUse)',
    file: '.claude/hooks/block-dist.sh',
    desc: 'dist-*/dist/ 빌드 산출물 직접 수정 호출 차단. CLAUDE.md NEVER 룰 강제.',
  },

  // ─── 스킬 (Skill) — 순차 워크플로우. 명령 조합 ────────────────────────────
  {
    category: 'skill',
    label: '데이터 워크플로우',
    file: '.claude/skills/data/SKILL.md',
    desc: '신규 시트 추가, 신규 카테고리 추가, 회귀 디버깅(TDD), 거대 파서 분할, silent fallback 강화, 매핑 통합, sync verify 등 step-by-step.',
  },
  {
    category: 'skill',
    label: '디자인 워크플로우',
    file: '.claude/skills/design/SKILL.md',
    desc: '신규 컴포넌트(C-XX) 추가, SVG 차트 패턴 추가, 뉴스레터 카드 변형, 이메일 호환 변환, KO/EN 라벨 추가, iframe srcdoc 미리보기 등 step-by-step.',
  },
  {
    category: 'skill',
    label: '에이전트형 도구 통합 프롬프트',
    file: '.claude/skills/prompting/SKILL.md',
    desc: 'Claude Code 외 다른 에이전트형 도구 (Cursor/Codex) 가 본 레포에서 작업할 때 참조하는 통합 시스템 프롬프트.',
  },
  {
    category: 'skill',
    label: '하네스 적용 (Onboard)',
    file: '.claude/skills/onboard/SKILL.md',
    desc: '새 프로젝트에 본 하네스 적용 시 사용. "이 하네스 적용해줘" 요청 시 도메인 인터뷰 → 도메인 파일 → 데이터 모델 → 디자인 토큰 → 빌드 검증 8 step.',
  },

  // ─── 서브에이전트 (Sub-agent) — 특정 영역 분리 작업 ────────────────────────
  {
    category: 'agent',
    label: '데이터 진단 서브에이전트',
    file: '.claude/agents/data-puller.md',
    desc: 'Google Sheets 파싱 파이프라인의 shape·정합성·누락 조사·보고 전담 (read-only). Claude Code 가 위임 시 활성화.',
  },
]

const CATEGORY_LABELS = {
  entry: '가이드 — 하네스 전체 개요 (docs/agents/ 미러)',
  rule: '룰 (Rule) — 따라야 할 규칙. Markdown 권고 (~80%)',
  hook: '훅 (Hook) — 절대 하면 안 되는 것. JSON 강제 (100%) + 인간용 md 설명서',
  skill: '스킬 (Skill) — 자동 워크플로우 / 명령 조합. step-by-step',
  agent: '서브에이전트 (Sub-agent) — 특정 영역 분리 작업 (Claude Code 공식 기능)',
}

const ROOT = process.cwd()

function readSafe(relPath) {
  const abs = path.join(ROOT, relPath)
  try { return fs.readFileSync(abs, 'utf8') } catch { return null }
}

function fileSize(relPath) {
  const abs = path.join(ROOT, relPath)
  try { return fs.statSync(abs).size } catch { return 0 }
}

function generateReadme() {
  const today = new Date().toISOString().slice(0, 10)
  return `# Claude Code Harness Mirror

본 ZIP 은 \`my-geo-newsletter\` 레포의 Claude Code 하네스 (룰·훅·스킬·서브에이전트) 미러링 본.
생성일: ${today}

## 하네스 4 개념

| 개념 | 형식 | 강제력 | 역할 |
|---|---|---|---|
| **룰 (Rule)** | Markdown | 권고 (~80%) | 따라야 할 규칙 |
| **훅 (Hook)** | JSON 강제 + md 설명서 | 100% (시스템 차단) | 절대 하면 안 되는 것 |
| **스킬 (Skill)** | Markdown 워크플로우 | 권고 (필요 시 로드) | 자동 워크플로우 / 명령 조합 |
| **서브에이전트** | Markdown frontmatter | Claude 가 위임 시 활성 | 특정 영역 분리 작업 |

## ZIP 내용

### 룰 (Rule)
- \`CLAUDE.md\` — 프로젝트 헌법 (4 개념 정의 + NEVER 룰 + 작업 흐름)
- \`.claude/rules/data.md\` — 데이터 작업 룰·매뉴얼·invariant·ANTI-PATTERN
- \`.claude/rules/design.md\` — 디자인 토큰·컴포넌트 카탈로그·SVG 패턴

### 훅 (Hook)
- \`.claude/settings.json\` — 훅 등록 (JSON 필수)
- \`.claude/hooks/README.md\` — 인간 가독성 설명서
- \`.claude/hooks/syntax-check.sh\` — PostToolUse 신택스 검증
- \`.claude/hooks/block-dist.sh\` — PreToolUse 빌드산출물 차단

### 스킬 (Skill)
- \`.claude/skills/data/SKILL.md\` — 데이터 워크플로우 8개
- \`.claude/skills/design/SKILL.md\` — 디자인 워크플로우 7개
- \`.claude/skills/prompting/SKILL.md\` — 에이전트형 도구 통합 프롬프트

### 서브에이전트 (Sub-agent)
- \`.claude/agents/data-puller.md\` — 데이터 진단 read-only

## 다른 프로젝트에 적용

1. 본 ZIP 의 \`CLAUDE.md\` + \`docs/\` + \`.claude/\` 전체를 대상 프로젝트 루트에 복사
2. \`chmod +x .claude/hooks/*.sh\` (실행 권한)
3. Claude Code 실행 시 자동 로드됨

## 형식 강제성 — 핵심

- **JSON 필수**: \`.claude/settings.json\` — 시스템이 직접 파싱·실행. Claude 가 우회 불가.
- **Markdown 권고**: \`CLAUDE.md\`, \`.claude/skills/*/SKILL.md\`, \`.claude/rules/*.md\`, \`.claude/agents/*.md\` — Claude 가 읽고 따름 (~80%).
- \`.md\` 안에 \`hooks:\` 같은 자동화 정의 적어도 무시됨. 자동 강제는 \`settings.json\` 만.

## 스킬 vs 룰 차이

- **스킬 (skill)** = 순차 워크플로우. "이걸 할 때는 1) → 2) → 3) ..." (step-by-step 명령 조합)
- **룰 (rule)** = 그 step 이 따라야 할 토큰·invariant·ANTI-PATTERN 정의 (참조용 매뉴얼)
- 스킬에 토큰·패턴 정의가 섞이면 안 되고, 그건 룰에. 스킬은 짧고 sequential.

## 주의

- 본 ZIP 은 원본의 **그 시점 스냅샷**. 원본이 갱신되면 다시 다운로드.
- 원본 갱신을 자동 동기화하려면 git submodule 또는 sparse checkout 등 별도 메커니즘 필요.
- 원본: \`/admin/harness\` 페이지에서 항상 최신 ZIP 다운로드 가능 (호출 시점에 실제 파일 → 자동 미러).
`
}

// ─── GET /api/harness/zip — 실제 파일 → 즉시 ZIP 생성 ─────────────────────
// .claude/agents/ 폴더를 재귀 추가 — 미러 호스트 전체 (rules/, skills/, hooks/, HARNESS.*, CLAUDE.md 미러)
function addDirToZip(zip, srcDir) {
  const absSrc = path.join(ROOT, srcDir)
  if (!fs.existsSync(absSrc)) return
  for (const entry of fs.readdirSync(absSrc)) {
    const relPath = path.join(srcDir, entry)
    const absPath = path.join(ROOT, relPath)
    if (fs.statSync(absPath).isDirectory()) {
      addDirToZip(zip, relPath)
    } else {
      zip.file(relPath, fs.readFileSync(absPath))
    }
  }
}

harnessRouter.get('/api/harness/zip', async (req, res) => {
  try {
    const zip = new JSZip()
    // 1) 명시 컴포넌트 (CLAUDE.md, docs/, .claude/settings.json, .claude/hooks/, .claude/skills/, agents/HARNESS.*)
    const seen = new Set()
    for (const { file } of HARNESS_COMPONENTS) {
      const content = readSafe(file)
      if (content != null) { zip.file(file, content); seen.add(file) }
    }
    // 2) .claude/rules/ 원본 폴더 (README.md 포함)
    addDirToZip(zip, '.claude/rules')
    // 3) docs/agents/ 미러 폴더 전체 재귀 — 진입점 + rules/skills/hooks/ 미러 모두
    addDirToZip(zip, 'docs/agents')
    // 3) README (사용 가이드)
    zip.file('README.md', generateReadme())
    const buffer = await zip.generateAsync({ type: 'nodebuffer', compression: 'DEFLATE' })
    const fname = `harness-mirror-${new Date().toISOString().slice(0, 10)}.zip`
    res.set('Content-Type', 'application/zip')
    res.set('Content-Disposition', `attachment; filename="${fname}"`)
    res.send(buffer)
  } catch (e) {
    res.status(500).json({ ok: false, error: e?.message || String(e) })
  }
})

// ─── GET /admin/harness/view?path=... — 개별 파일 보기 ────────────────────
// .md → marked.js 렌더 (admin-pages.js 의 renderMarkdownPage 활용)
// .sh / .json / 외 → 다크 테마 code block 페이지
harnessRouter.get('/admin/harness/view', (req, res) => {
  const relPath = String(req.query.path || '')
  const found = HARNESS_COMPONENTS.find(c => c.file === relPath)
  if (!found) return res.status(404).send('unknown harness component')

  // .md 는 마크다운 렌더 (mermaid 포함)
  if (relPath.endsWith('.md')) {
    const dir = path.dirname(relPath)
    const mdFile = path.basename(relPath)
    return renderMarkdownPage(res, {
      mdFile, dir, title: `${found.label} — ${relPath}`,
      downloadHref: `/api/harness/file?path=${encodeURIComponent(relPath)}`,
      downloadName: mdFile,
    })
  }

  // .html 은 이미 디자인된 문서 — content 그대로 응답 (iframe 없이)
  if (relPath.endsWith('.html')) {
    const content = readSafe(relPath)
    if (content == null) return res.status(404).send('file not found')
    res.set('Content-Type', 'text/html; charset=utf-8')
    return res.send(content)
  }

  // .sh / .json / 외 → 코드 블록 페이지
  const content = readSafe(relPath)
  if (content == null) return res.status(404).send('file not found')
  const lang = relPath.endsWith('.json') ? 'json' : relPath.endsWith('.sh') ? 'bash' : 'text'
  const titleEsc = escHtml(`${found.label} — ${relPath}`)
  const codeEsc = escHtml(content)
  res.set('Content-Type', 'text/html; charset=utf-8')
  res.send(`<!DOCTYPE html><html lang="ko"><head><meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${titleEsc}</title>
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{background:#0F172A;color:#E2E8F0;font-family:'LG Smart','Arial Narrow',Arial,sans-serif;padding:24px 32px;line-height:1.5}
.topbar{display:flex;align-items:center;justify-content:space-between;margin-bottom:18px;flex-wrap:wrap;gap:12px}
.back{color:#CF0652;text-decoration:none;font-size:13px}
.btn{background:#1E293B;border:1px solid #334155;border-radius:8px;padding:8px 16px;font-size:12px;font-weight:600;color:#E2E8F0;text-decoration:none}
h1{font-size:18px;color:#F8FAFC;margin-bottom:6px}
.meta{font-size:12px;color:#64748B;margin-bottom:18px;font-family:ui-monospace,Menlo,Consolas,monospace}
pre{background:#0B1220;border:1px solid #1E293B;border-radius:12px;padding:20px 24px;overflow:auto;max-width:1100px;margin:0 auto;font-family:'Consolas','Courier New',ui-monospace,monospace;font-size:12px;line-height:1.6;color:#CBD5E1;white-space:pre-wrap;word-wrap:break-word}
.lang{display:inline-block;background:#334155;color:#94A3B8;padding:2px 8px;border-radius:4px;font-size:10px;text-transform:uppercase;letter-spacing:1px;margin-bottom:4px}
</style></head><body>
<div class="topbar">
  <a class="back" href="/admin/harness">← Harness Mirror</a>
  <a class="btn" href="/api/harness/file?path=${encodeURIComponent(relPath)}" target="_blank">raw 다운로드</a>
</div>
<h1>${titleEsc}</h1>
<div class="meta"><span class="lang">${lang}</span> · ${escHtml(found.desc)}</div>
<pre>${codeEsc}</pre>
</body></html>`)
})

// ─── GET /api/harness/file?path=... — 개별 파일 raw 보기 ──────────────────
harnessRouter.get('/api/harness/file', (req, res) => {
  const relPath = String(req.query.path || '')
  const found = HARNESS_COMPONENTS.find(c => c.file === relPath)
  if (!found) return res.status(404).json({ ok: false, error: 'unknown harness component' })
  const content = readSafe(relPath)
  if (content == null) return res.status(404).json({ ok: false, error: 'file not found' })
  res.set('Content-Type', 'text/plain; charset=utf-8')
  res.send(content)
})

// ─── GET /admin/harness — 정리 페이지 ────────────────────────────────────
function escHtml(s) {
  return String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))
}

function fmtBytes(n) {
  if (n < 1024) return n + ' B'
  if (n < 1024 * 1024) return (n / 1024).toFixed(1) + ' KB'
  return (n / 1024 / 1024).toFixed(2) + ' MB'
}

harnessRouter.get('/admin/harness', (req, res) => {
  // 컴포넌트별 메타 (크기 등) 미리 계산
  const items = HARNESS_COMPONENTS.map(c => ({ ...c, size: fileSize(c.file) }))
  const grouped = {}
  for (const it of items) {
    if (!grouped[it.category]) grouped[it.category] = []
    grouped[it.category].push(it)
  }
  const totalSize = items.reduce((s, it) => s + it.size, 0)

  const sectionsHtml = Object.entries(CATEGORY_LABELS).map(([cat, label]) => {
    const list = grouped[cat] || []
    if (!list.length) return ''
    const rows = list.map(it => `
      <div class="comp">
        <div class="comp-head">
          <span class="comp-label">${escHtml(it.label)}</span>
          <code class="comp-path">${escHtml(it.file)}</code>
          <span class="comp-size">${escHtml(fmtBytes(it.size))}</span>
        </div>
        <div class="comp-desc">${escHtml(it.desc)}</div>
        <div class="comp-actions">
          <a class="link" href="/admin/harness/view?path=${encodeURIComponent(it.file)}" target="_blank">HTML (for Human) →</a>
          &nbsp;&middot;&nbsp;
          <a class="link" href="/api/harness/file?path=${encodeURIComponent(it.file)}" target="_blank" style="color:#64748B">Markdown (For AI)</a>
        </div>
      </div>
    `).join('')
    return `<div class="section"><h2>${escHtml(label)}</h2>${rows}</div>`
  }).join('')

  res.set('Content-Type', 'text/html; charset=utf-8')
  res.send(`<!DOCTYPE html><html lang="ko"><head><meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Harness Mirror — Claude Code 하네스 미러링</title>
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{background:#0F172A;color:#E2E8F0;font-family:'LG Smart','Arial Narrow',Arial,sans-serif;padding:28px 32px;line-height:1.5}
.top{display:flex;align-items:center;justify-content:space-between;margin-bottom:18px;flex-wrap:wrap;gap:12px}
.back{color:#CF0652;text-decoration:none;font-size:13px}
h1{font-size:22px;color:#F8FAFC;margin-bottom:4px}
.sub{font-size:13px;color:#64748B;margin-bottom:18px}
.intro{background:#1E293B;border:1px solid #334155;border-radius:12px;padding:18px 22px;margin-bottom:18px;font-size:13px;color:#CBD5E1}
.intro p{margin-bottom:6px}
.intro strong{color:#F8FAFC}
.usage{background:linear-gradient(135deg,#1F2937 0%,#2A1F3F 100%);border:1px solid #CF0652;border-radius:12px;padding:22px 26px;margin-bottom:18px}
.usage code{font-family:ui-monospace,Menlo,Consolas,monospace}
.dl-btn{display:inline-block;background:#CF0652;color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:700;font-size:14px;margin-top:14px}
.dl-btn:hover{background:#e0186b}
.kpis{display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:12px;margin-bottom:24px}
.card{background:#1E293B;border:1px solid #334155;border-radius:10px;padding:14px 18px}
.card .label{font-size:11px;color:#94A3B8;text-transform:uppercase;letter-spacing:1px;margin-bottom:6px}
.card .value{font-size:24px;font-weight:700;color:#F8FAFC}
.section{background:#1E293B;border:1px solid #334155;border-radius:12px;padding:20px 24px;margin-bottom:18px}
.section h2{font-size:15px;font-weight:700;color:#F8FAFC;margin-bottom:14px}
.comp{padding:12px 0;border-bottom:1px solid rgba(51,65,85,.5)}
.comp:last-child{border-bottom:0}
.comp-head{display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-bottom:6px}
.comp-label{font-weight:700;color:#F8FAFC;font-size:14px}
.comp-path{font-family:ui-monospace,Menlo,Consolas,monospace;font-size:11px;color:#94A3B8;background:#0F172A;padding:2px 8px;border-radius:4px}
.comp-size{font-size:11px;color:#64748B;margin-left:auto}
.comp-desc{font-size:12px;color:#CBD5E1;margin-bottom:6px}
.comp-actions{font-size:12px}
.link{color:#CF0652;text-decoration:none}
.link:hover{text-decoration:underline}
.note{background:#0F2A1F;border:1px solid #15803D;border-radius:8px;padding:12px 16px;margin-top:18px;font-size:12px;color:#86EFAC}
.note strong{color:#4ADE80}
</style></head><body>
<div class="top">
  <a class="back" href="/admin/">← 관리자</a>
</div>
<h1>Harness Mirror</h1>
<p class="sub">Claude Code 하네스 (룰·스킬·훅·서브에이전트) 의 실시간 미러링</p>

<div class="usage">
  <h2 style="font-size:16px;color:#F8FAFC;margin-bottom:10px">📌 Harness Mirror 란?</h2>
  <p style="font-size:13px;color:#CBD5E1;margin-bottom:8px">본 페이지는 <strong style="color:#F8FAFC">Claude Code 가 본 프로젝트에서 작업할 때 따르는 룰·훅·스킬·서브에이전트 모두를 한곳에 모은 페이지</strong>.</p>
  <ul style="font-size:13px;color:#CBD5E1;margin-left:22px;line-height:1.8;margin-bottom:12px">
    <li><strong style="color:#F8FAFC">왜 필요한가?</strong> 시간이 흐르면 어떤 룰이 있는지 기억이 안 남. 한 페이지에서 다 볼 수 있게.</li>
    <li><strong style="color:#F8FAFC">어떻게 만들어지나?</strong> 본 프로젝트의 <code>.claude/</code> + <code>CLAUDE.md</code> + <code>docs/agents/</code> 의 실시간 미러. 파일이 수정되면 자동 반영.</li>
    <li><strong style="color:#F8FAFC">무엇을 할 수 있나?</strong> (1) 각 파일 클릭해서 보기 (2) 전체 ZIP 다운로드해서 다른 프로젝트에 적용 (3) 팀원과 공유</li>
  </ul>

  <h2 style="font-size:16px;color:#F8FAFC;margin-bottom:10px;margin-top:18px">💡 다른 프로젝트에 적용하기</h2>
  <p style="font-size:13px;color:#CBD5E1;margin-bottom:10px">ZIP 받아서 새 프로젝트에 풀고 Claude 에게 <code style="background:#0F172A;padding:1px 6px;border-radius:3px">"이 하네스 적용해줘. 내 프로젝트는 [도메인]"</code> 하면 자동 셋업.</p>
  <ol style="font-size:13px;color:#CBD5E1;margin-left:24px;line-height:1.8">
    <li><strong>전체 ZIP 다운로드</strong> (아래 빨간 버튼) — 원본 + 미러 모두 포함</li>
    <li>대상 프로젝트 <strong>루트에 압축 풀기</strong>:
      <ul style="margin:6px 0 6px 20px;font-size:12px;color:#94A3B8;line-height:1.6">
        <li><code style="background:#0F172A;padding:1px 6px;border-radius:3px">CLAUDE.md</code> — 프로젝트 헌법 (Claude 가 항상 로드)</li>
        <li><code style="background:#0F172A;padding:1px 6px;border-radius:3px">.claude/</code> — settings.json + hooks/ + skills/ + agents/ + rules/</li>
        <li><code style="background:#0F172A;padding:1px 6px;border-radius:3px">docs/agents/</code> — 사람용 미러 (선택 — Claude Code 작동에는 불필요)</li>
      </ul>
    </li>
    <li><strong>실행 권한 부여</strong>: <code style="background:#0F172A;padding:2px 8px;border-radius:4px;color:#F8C4D7">chmod +x .claude/hooks/*.sh</code> — 훅이 실행되려면 필수</li>
    <li><strong>Claude Code 실행</strong> — 자동으로 로드:
      <ul style="margin:6px 0 6px 20px;font-size:12px;color:#94A3B8;line-height:1.6">
        <li><span style="color:#60A5FA">RULE</span>: <code>CLAUDE.md</code> 항상 로드 + <code>.claude/rules/</code> 가 CLAUDE.md 명시 참조 시 로드</li>
        <li><span style="color:#F87171">HOOK</span>: <code>.claude/settings.json</code> 등록된 훅이 Edit/Write 시점에 시스템 자동 실행 (100% 강제)</li>
        <li><span style="color:#4ADE80">SKILL</span>: <code>.claude/skills/&lt;name&gt;/SKILL.md</code> 의 frontmatter description 으로 트리거 — Claude 가 필요 시 자동 로드</li>
        <li><span style="color:#FBBF24">AGENT</span>: <code>.claude/agents/&lt;name&gt;.md</code> 의 frontmatter — Claude 가 위임 시 활성</li>
      </ul>
    </li>
    <li><strong>새 프로젝트에 맞게 커스터마이즈</strong>:
      <ul style="margin:6px 0 6px 20px;font-size:12px;color:#94A3B8;line-height:1.6">
        <li>CLAUDE.md 의 NEVER 룰·스택·디렉토리 맵을 신규 프로젝트에 맞춰 수정</li>
        <li>.claude/rules/ 의 룰 매뉴얼을 도메인에 맞게 (예: 다른 데이터 모델·다른 디자인 시스템)</li>
        <li>훅 스크립트의 grep 패턴·차단 경로 조정</li>
        <li>스킬 워크플로우는 신규 프로젝트의 실제 작업에 맞게 step-by-step 재작성</li>
      </ul>
    </li>
  </ol>
  <p style="font-size:11px;color:#64748B;margin-top:10px;font-style:italic">미러는 <code>npm run sync:harness</code> 또는 <code>npm run build</code> (prebuild) 시 자동 갱신 — 본 ZIP 은 호출 시점에 항상 최신.</p>
  <a class="dl-btn" href="/api/harness/zip">📦 전체 ZIP 다운로드</a>
</div>

<div class="intro">
  <h3 style="font-size:14px;color:#F8FAFC;margin-bottom:10px">🧩 하네스 4 개념</h3>
  <ul style="font-size:13px;color:#CBD5E1;margin-left:22px;line-height:1.9">
    <li><span style="color:#60A5FA;font-weight:700">룰 (Rule)</span> — 따라야 할 규칙. Claude 가 권고로 따름 (~80%). 토큰·invariant·ANTI-PATTERN 매뉴얼.</li>
    <li><span style="color:#F87171;font-weight:700">훅 (Hook)</span> — 절대 하면 안 되는 것. <strong>JSON 강제 (100%)</strong>. 시스템이 자동 차단.</li>
    <li><span style="color:#4ADE80;font-weight:700">스킬 (Skill)</span> — 자동 워크플로우 / 명령 조합. "L-1 차트 그려줘" 같은 호출.</li>
    <li><span style="color:#FBBF24;font-weight:700">서브에이전트</span> — 특정 영역 분리 작업 (예: 데이터 진단 read-only).</li>
  </ul>
  <p style="color:#94A3B8;font-size:11px;margin-top:10px">아래 목록의 각 컴포넌트를 클릭하면 디자인된 HTML 또는 원본 Markdown 으로 열람 가능.</p>
</div>

<div class="kpis">
  <div class="card"><div class="label">가이드</div><div class="value">${(grouped.entry || []).length}</div></div>
  <div class="card"><div class="label">룰 (Rule)</div><div class="value">${(grouped.rule || []).length}</div></div>
  <div class="card"><div class="label">훅 (Hook)</div><div class="value">${(grouped.hook || []).length}</div></div>
  <div class="card"><div class="label">스킬 (Skill)</div><div class="value">${(grouped.skill || []).length}</div></div>
  <div class="card"><div class="label">서브에이전트</div><div class="value">${(grouped.agent || []).length}</div></div>
  <div class="card"><div class="label">총 크기 (압축 전)</div><div class="value">${escHtml(fmtBytes(totalSize))}</div></div>
</div>

${sectionsHtml}


</body></html>`)
})
