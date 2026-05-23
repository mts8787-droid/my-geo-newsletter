// Harness Mirror — Claude Code 하네스(룰·스킬·훅·서브에이전트) 정리 + ZIP 다운로드
// 본 페이지는 .claude/ + CLAUDE.md 의 실시간 미러. 다른 프로젝트에 적용하려고 ZIP 받을 때 사용.
// ZIP 생성 시점에 실제 파일을 읽으므로 항상 최신. 별도 동기화 단계 없음.
import { Router } from 'express'
import fs from 'fs'
import path from 'path'
import JSZip from 'jszip'

export const harnessRouter = Router()

// ─── 하네스 컴포넌트 정의 ────────────────────────────────────────────────────
// 본 레포의 실제 파일 경로 + UI 표시용 메타데이터.
// 새 컴포넌트 (예: 신규 hook, agent) 추가 시 이 배열만 갱신.
const HARNESS_COMPONENTS = [
  {
    category: 'rule',
    label: '프로젝트 룰',
    file: 'CLAUDE.md',
    desc: 'Claude Code 가 본 레포에서 작업할 때 항상 로드되는 룰. 스택·디렉토리·NEVER 룰·작업 흐름.',
  },
  {
    category: 'skill',
    label: '디자인 하네스',
    file: '.claude/skills/design/SKILL.md',
    desc: 'SVG 차트·테이블·뉴스레터 카드(V1/V2/V3) 등 23개 컴포넌트 패턴 라이브러리.',
  },
  {
    category: 'skill',
    label: '데이터 하네스',
    file: '.claude/skills/data/SKILL.md',
    desc: 'Google Sheets 파싱·정제·검증·동기화. 5단계 ERROR CATCHING + Self-Logging + verify-after-act.',
  },
  {
    category: 'skill',
    label: '프롬프팅 통합 매뉴얼',
    file: '.claude/skills/prompting/SKILL.md',
    desc: 'Claude Code/Cursor/Codex 등 에이전트형 도구가 본 레포에서 작업할 때 참조하는 통합 시스템 프롬프트.',
  },
  {
    category: 'hook',
    label: '훅 설정',
    file: '.claude/settings.json',
    desc: 'PreToolUse + PostToolUse 훅 등록 (JSON 형식 강제 — 기계 파싱).',
  },
  {
    category: 'hook',
    label: '신택스 검증 훅',
    file: '.claude/hooks/syntax-check.sh',
    desc: 'PostToolUse: src/·routes/ 의 .js Edit/Write 후 node --check 신택스 검증. 실패 시 즉시 피드백.',
  },
  {
    category: 'hook',
    label: 'dist 차단 훅',
    file: '.claude/hooks/block-dist.sh',
    desc: 'PreToolUse: dist-*/dist/ 빌드 산출물 직접 수정 차단. CLAUDE.md NEVER 룰 강제.',
  },
  {
    category: 'agent',
    label: '데이터 진단 서브에이전트',
    file: '.claude/agents/data-puller.md',
    desc: 'Google Sheets 파싱 파이프라인의 데이터 shape·정합성·누락 조사·보고 전담 (read-only).',
  },
]

const CATEGORY_LABELS = {
  rule: '룰 (Rule)',
  skill: '스킬 / 하네스 (Skill / Harness)',
  hook: '훅 (Hook)',
  agent: '서브에이전트 (Sub-agent)',
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

본 ZIP 은 \`my-geo-newsletter\` 레포의 Claude Code 하네스(룰·스킬·훅·서브에이전트) 미러링 본.
생성일: ${today}

## 무엇인가
Claude Code 가 본 레포에서 작업할 때 자동 로드되는 다음 컴포넌트들의 복사본:

| 컴포넌트 | 역할 |
|---|---|
| \`CLAUDE.md\` | 프로젝트 룰 (Claude 가 항상 로드) |
| \`.claude/skills/design/SKILL.md\` | 디자인 하네스 |
| \`.claude/skills/data/SKILL.md\` | 데이터 하네스 |
| \`.claude/skills/prompting/SKILL.md\` | 에이전트형 도구 통합 프롬프트 |
| \`.claude/settings.json\` | 훅 등록 (JSON 강제) |
| \`.claude/hooks/syntax-check.sh\` | PostToolUse 신택스 검증 훅 |
| \`.claude/hooks/block-dist.sh\` | PreToolUse 빌드산출물 수정 차단 훅 |
| \`.claude/agents/data-puller.md\` | 데이터 진단 read-only 서브에이전트 |

## 다른 프로젝트에 적용
1. 본 ZIP 의 \`CLAUDE.md\` + \`.claude/\` 전체를 대상 프로젝트 루트에 복사
2. \`chmod +x .claude/hooks/*.sh\` (실행 권한)
3. Claude Code 실행 시 자동 로드됨

## 형식 강제성
- **JSON 필수**: \`.claude/settings.json\` — 시스템이 직접 파싱·실행. Claude 가 우회 불가.
- **Markdown 권고**: \`CLAUDE.md\`, \`SKILL.md\`, agent \`.md\` — Claude 가 읽고 따름 (~80%).
- \`.md\` 안에 \`hooks:\` 정의해도 무시됨. 자동 강제는 \`settings.json\` 만.

## 주의
- 본 ZIP 은 원본의 **그 시점 스냅샷**. 원본이 갱신되면 다시 다운로드.
- 원본 갱신을 자동 동기화하려면 git submodule 또는 sparse checkout 등 별도 메커니즘 필요.

원본: \`/admin/harness\` 페이지에서 항상 최신 ZIP 다운로드 가능.
`
}

// ─── GET /api/harness/zip — 실제 파일 → 즉시 ZIP 생성 ─────────────────────
harnessRouter.get('/api/harness/zip', async (req, res) => {
  try {
    const zip = new JSZip()
    for (const { file } of HARNESS_COMPONENTS) {
      const content = readSafe(file)
      if (content != null) zip.file(file, content)
    }
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
          <a class="link" href="/api/harness/file?path=${encodeURIComponent(it.file)}" target="_blank">파일 내용 보기 →</a>
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
.dl-btn{display:inline-block;background:#CF0652;color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:700;font-size:14px;margin-top:8px}
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

<div class="intro">
  <p><strong>본 페이지는 <code>.claude/</code> + <code>CLAUDE.md</code> 의 실시간 미러.</strong> 다른 프로젝트에 적용하거나 팀원과 공유할 때 ZIP 다운로드.</p>
  <p>ZIP 생성 시점에 실제 파일을 읽으므로 <strong>항상 최신</strong>. 실제 하네스 파일이 수정되면 다음 다운로드 시 즉시 반영.</p>
  <p style="color:#94A3B8;font-size:12px;margin-top:4px">강제력 차이 — <strong style="color:#F8FAFC">JSON (settings.json)</strong>: 시스템이 직접 실행 · <strong style="color:#F8FAFC">Markdown (.md)</strong>: Claude 가 읽고 따름 (~80%).</p>
  <a class="dl-btn" href="/api/harness/zip">📦 전체 ZIP 다운로드</a>
</div>

<div class="kpis">
  <div class="card"><div class="label">컴포넌트</div><div class="value">${items.length}</div></div>
  <div class="card"><div class="label">총 크기</div><div class="value">${escHtml(fmtBytes(totalSize))}</div></div>
  <div class="card"><div class="label">룰</div><div class="value">${(grouped.rule || []).length}</div></div>
  <div class="card"><div class="label">스킬</div><div class="value">${(grouped.skill || []).length}</div></div>
  <div class="card"><div class="label">훅</div><div class="value">${(grouped.hook || []).length}</div></div>
  <div class="card"><div class="label">서브에이전트</div><div class="value">${(grouped.agent || []).length}</div></div>
</div>

${sectionsHtml}

<div class="note">
  <strong>💡 사용 패턴</strong> — 본 레포의 하네스가 잘 정착되어 있으면 ZIP 받아서 새 프로젝트에 압축 풀고 <code>chmod +x .claude/hooks/*.sh</code> 만 실행. Claude Code 가 자동으로 룰·스킬·훅을 인식합니다.
</div>

</body></html>`)
})
