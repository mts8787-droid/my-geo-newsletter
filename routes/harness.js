// HIRO — Harness for Interactive Reporting Optimization
// Claude Code 하네스(Rule·Skill·Hook·Sub-Agent) 정리 + ZIP 다운로드
// 본 페이지는 .claude/ + CLAUDE.md 의 실시간 미러. 다른 프로젝트에 적용하려고 ZIP 받을 때 사용.
// ZIP 생성 시점에 실제 파일을 읽으므로 항상 최신. 별도 동기화 단계 없음.
import { Router } from 'express'
import fs from 'fs'
import path from 'path'
import JSZip from 'jszip'
import { renderMarkdownPage, themeStyle, themeToggleButton } from './admin-pages.js'

export const harnessRouter = Router()

// ─── 하네스 컴포넌트 정의 ────────────────────────────────────────────────────
// 본 저장소의 실제 파일 경로 + UI 표시용 메타데이터.
// 새 컴포넌트 (예: 신규 hook, agent) 추가 시 이 배열만 갱신.
const HARNESS_COMPONENTS = [
  // ─── 진입점 (Entry Point) — docs/agents/ 미러 호스트 ─────────────────────
  {
    category: 'entry',
    label: '전체 하네스 설명',
    file: 'docs/agents/HARNESS.html',
    desc: '브라우저 더블클릭으로 열림. 4 개념·폴더 구조·각 컴포넌트 설명·Skill 사용법 시각화. (같은 내용 마크다운: docs/agents/HARNESS.md)',
  },
  {
    category: 'entry',
    label: '차트 라이브러리 (정적 미러)',
    file: 'docs/agents/CHART_LIBRARY.html',
    desc: '14 차트 양식 + 툴팁 분류 카탈로그 (L-1~T-1) 정적 HTML. 라이브: /admin/chart-library.',
  },
  {
    category: 'entry',
    label: '부트스트랩 사용법 (Usage Guide)',
    file: 'docs/agents/HUMAN_GUIDE.md',
    desc: '사람이 직접 읽는 사용 설명서 — BOOTSTRAP 의 시나리오 (신규 프로젝트 적용 STEP 0~8 + 디버깅 DEBUG-1~15) 어떻게 트리거하고 활용하는지 + 도메인 예시 + 검증 체크리스트 + 트러블슈팅 + FAQ.',
  },

  // ─── Rule — 따라야 할 규칙. Markdown. 권고 (~80%) ─────────────────────
  {
    category: 'rule',
    label: 'CLAUDE.md',
    file: 'CLAUDE.md',
    desc: '본 저장소의 "프로젝트 헌법" — Claude Code 가 본 저장소에서 작업할 때 항상 로드. 하네스 4 개념 정의·스택·NEVER Rule·작업 흐름. ⚠ 보편 규범 (Karpathy 4 원칙 등) 은 사용자 글로벌 헌법 ~/.claude/CLAUDE.md 에 등록 권장 — 다른 저장소에서도 동일 행동 규범 유지. 기존 글로벌이 있으면 사용자 확인 후 병합.',
  },
  {
    category: 'rule',
    label: 'AGENTS.md',
    file: 'AGENTS.md',
    desc: '본 저장소의 "에이전트 공통 헌법" — OpenAI Codex / Antigravity 가 워크스페이스 루트의 AGENTS.md 를 자동 로드. CLAUDE.md (프로젝트 구체 지침) + Karpathy 4 원칙 융합. ⚠ 보편 규범은 사용자 글로벌 ~/.codex/AGENTS.md 또는 ~/AGENTS.md 에 등록 권장 — 기존 글로벌이 있으면 사용자 확인 후 병합.',
  },
  {
    category: 'rule',
    label: '데이터 Rule 매뉴얼',
    file: '.claude/rules/data.md',
    desc: '데이터 작업의 토큰·invariant·ANTI-PATTERN. 5단계 ERROR CATCHING / null vs 0 / 날짜 정규화 등. Skill이 step 별로 참조.',
  },
  {
    category: 'rule',
    label: '디자인 Rule 매뉴얼',
    file: '.claude/rules/design.md',
    desc: '디자인 토큰·컴포넌트 카탈로그 (C-01~C-23)·SVG 패턴·이메일 호환 ANTI-PATTERN. Skill이 step 별로 참조.',
  },
  {
    category: 'rule',
    label: 'AI Rule 매뉴얼',
    file: '.claude/rules/ai.md',
    desc: 'Anthropic API · 인사이트 생성 · N3 응답 검증 (invalid_output) · 에러 분류 · 비용 추적 · ANTI-PATTERN.',
  },
  {
    category: 'rule',
    label: '뉴스레터 Rule 매뉴얼',
    file: '.claude/rules/newsletter.md',
    desc: '이메일 호환 HTML (table-layout, 인라인 style), containerWidth 940, KO/EN 양 언어, 미출시 회색 처리, V1/V2/V3 카드, preheader/footer/SMTP, 발송 전 multi-client 검증 체크리스트.',
  },
  {
    category: 'rule',
    label: '부트스트랩 시나리오 (Bootstrap)',
    file: '.claude/rules/BOOTSTRAP.md',
    desc: 'Claude 가 새 프로젝트 적용 시 따라가는 시나리오. 8 step (환경확인 → 도메인 인터뷰 → 도메인 파일 → 데이터 모델 → 디자인 토큰 → 외부 시스템 → 비즈니스 fact → 빌드 검증). 사람이 직접 읽는 가이드 X — Claude 가 step 별 사용자에게 질문·설명.',
  },
  {
    category: 'rule',
    label: '뉴스레터 부트스트랩 시나리오 (Bootstrap-Newsletter)',
    file: '.claude/rules/BOOTSTRAP-newsletter.md',
    desc: 'Claude 가 신규 뉴스레터 발행본 작성 시 따라가는 시나리오. 8 step (환경확인 → 발행 종류 → 데이터 범위 → 카드 버전·섹션 → KO/EN 텍스트 → preheader/footer → 본문+Hook → 시각 검증 → 게시/발송). newsletter-make skill 이 트리거.',
  },

  // ─── Hook — 절대 금지. 사람용 가이드 + JSON/Bash (For AI) ──────────────
  {
    category: 'hook',
    label: 'Hook 가이드 (사람용 설명서)',
    file: '.claude/hooks/README.md',
    desc: '각 Hook의 트리거·대상·동작·목적 + 신규 Hook 추가 가이드. 원본 README — 별도 미러 없음 (필요 시 본 파일 직접 열람).',
  },
  {
    category: 'hook',
    label: 'settings.json — JSON (For AI)',
    file: '.claude/settings.json',
    desc: 'PreToolUse + PostToolUse Hook 등록. JSON 필수 — 시스템이 파싱·실행 (Claude 우회 불가).',
  },
  {
    category: 'hook',
    label: 'syntax-check.sh — Bash (For AI)',
    file: '.claude/hooks/syntax-check.sh',
    desc: 'PostToolUse: src/·routes/ 의 .js Edit/Write 직후 node --check. 실패 시 exit 2 → Claude 재시도.',
  },
  {
    category: 'hook',
    label: 'block-dist.sh — Bash (For AI)',
    file: '.claude/hooks/block-dist.sh',
    desc: 'PreToolUse: dist-*/dist/ 빌드 산출물 직접 수정 차단. CLAUDE.md NEVER Rule 강제.',
  },
  {
    category: 'hook',
    label: 'newsletter-guard.sh — Bash (For AI)',
    file: '.claude/hooks/newsletter-guard.sh',
    desc: 'PostToolUse: src/emailTemplate.js · monthly/weeklyTemplate.js · newsletter/* 수정 후 검증. containerWidth > 940 / display:flex|grid / overflow-x:hidden / body min-width 검출 시 exit 2 차단. .claude/rules/newsletter.md §3 NEVER 자동 강제.',
  },

  // ─── Skill — 순차 워크플로우. 명령 조합 ────────────────────────────
  // 데이터·디자인 각각 성격별 3 sub-skill 로 분리 (/skills 정밀 매칭).
  {
    category: 'skill',
    label: 'data (인덱스)',
    file: '.claude/skills/data/SKILL.md',
    desc: '데이터 워크플로우는 성격별 3 sub-skill 로 분리됨 — data-add / data-debug / data-refactor. 본 파일은 분기 인덱스.',
  },
  {
    category: 'skill',
    label: 'data-add — 신규 시트·카테고리 추가',
    file: '.claude/skills/data-add/SKILL.md',
    desc: 'Google Sheets 신규 탭, PROD_IDS 에 새 카테고리(STYLER 같은) 추가. parseSheetRows 등록 / categoryMap.js single source / 4종 매핑 + invariant.',
  },
  {
    category: 'skill',
    label: 'data-debug — 회귀·동기화 진단',
    file: '.claude/skills/data-debug/SKILL.md',
    desc: 'MoM 부호 반전·정렬 깨짐·sync 결과 이상 디버깅. 재현 fixture 우선(TDD), verify-after-act invariant, 5단계 ERROR CATCHING.',
  },
  {
    category: 'skill',
    label: 'data-refactor — 분할·매핑·로깅 품질',
    file: '.claude/skills/data-refactor/SKILL.md',
    desc: '거대 파서(200줄+) helper 분할, silent return {} → _logWarn, 분산 매핑 single source 통합, ERROR CATCHING 점진 적용.',
  },
  {
    category: 'skill',
    label: 'design (인덱스)',
    file: '.claude/skills/design/SKILL.md',
    desc: '디자인 워크플로우는 성격별 3 sub-skill 로 분리됨 — design-chart / design-component / design-tune. 본 파일은 분기 인덱스.',
  },
  {
    category: 'skill',
    label: 'design-chart — 차트 작업',
    file: '.claude/skills/design-chart/SKILL.md',
    desc: '분류 코드(L-1 ~ T-1) 차트 그리기, 차트+표 결합 X 좌표 정렬(C-24), 신규 SVG 차트 양식(heatmap·sankey 등).',
  },
  {
    category: 'skill',
    label: 'design-component — 컴포넌트·카드 추가',
    file: '.claude/skills/design-component/SKILL.md',
    desc: '신규 컴포넌트(C-XX), 뉴스레터 제품 카드 변형(V4 등), 어드민 iframe srcdoc 미리보기 추가.',
  },
  {
    category: 'skill',
    label: 'design-tune — 호환·미세조정·회귀',
    file: '.claude/skills/design-tune/SKILL.md',
    desc: '이메일 호환 변환(table-layout), KO/EN 라벨 추가, UI 깨짐·차트 안 보임 회귀 디버깅.',
  },
  {
    category: 'skill',
    label: 'newsletter (인덱스)',
    file: '.claude/skills/newsletter/SKILL.md',
    desc: '뉴스레터 워크플로우는 성격별 3 sub-skill 로 분리됨 — newsletter-make / newsletter-debug / newsletter-send. 본 파일은 분기 인덱스.',
  },
  {
    category: 'skill',
    label: 'newsletter-make — 신규 발행본·섹션 추가',
    file: '.claude/skills/newsletter-make/SKILL.md',
    desc: '신규 뉴스레터 발행본 작성 시 BOOTSTRAP-newsletter.md 시나리오 8 step 트리거. 또는 기존 발행본에 새 섹션만 추가하는 짧은 워크플로우.',
  },
  {
    category: 'skill',
    label: 'newsletter-debug — 회귀·호환 디버깅',
    file: '.claude/skills/newsletter-debug/SKILL.md',
    desc: '미출시 국가 회색 처리 회귀, 이메일 클라이언트별 (Outlook/Gmail/Apple Mail) 깨짐·짤림·정렬 어긋남, iframe 미리보기 클립 디버깅.',
  },
  {
    category: 'skill',
    label: 'newsletter-send — 발송 전 검증·SMTP',
    file: '.claude/skills/newsletter-send/SKILL.md',
    desc: '발송 전 multi-client 호환 체크리스트, 본인 이메일 테스트 발송, 전체 SMTP 발송, audit log + 발송 사고 대응.',
  },
  {
    category: 'skill',
    label: '에이전트형 도구 통합 프롬프트',
    file: '.claude/skills/prompting/SKILL.md',
    desc: 'Claude Code 외 다른 에이전트형 도구 (Cursor/Codex) 가 본 저장소에서 작업할 때 참조하는 통합 시스템 프롬프트.',
  },
  {
    category: 'skill',
    label: '하네스 적용 (Onboard)',
    file: '.claude/skills/onboard/SKILL.md',
    desc: '새 프로젝트에 본 하네스 적용 시 사용. "이 하네스 적용해줘" 요청 시 도메인 인터뷰 → 도메인 파일 → 데이터 모델 → 디자인 토큰 → 빌드 검증 8 step.',
  },
  {
    category: 'skill',
    label: '디버깅 (Debug)',
    file: '.claude/skills/debug/SKILL.md',
    desc: '사용자 "X 안 됨" / "fix" / "회귀" 요청 시. BOOTSTRAP 의 DEBUG-1~15 시나리오 중 증상 매칭. 시나리오는 가이드 — 더 나은 방법 발견 시 그 방식.',
  },

  // ─── Sub-Agent — 특정 영역 분리 작업 ────────────────────────
  {
    category: 'agent',
    label: '데이터 진단 Sub-Agent',
    file: '.claude/agents/data-puller.md',
    desc: 'Google Sheets 파싱 파이프라인의 shape·정합성·누락 조사·보고 전담 (read-only). Claude Code 가 위임 시 활성화.',
  },
]

const CATEGORY_LABELS = {
  entry: '가이드 — 하네스 전체 개요 (docs/agents/ 미러)',
  rule: 'Rule — 따라야 할 규칙. Markdown 권고 (~80%)',
  hook: 'Hook — 절대 하면 안 되는 것. JSON 강제 (100%) + 인간용 md 설명서',
  skill: 'Skill — 자동 워크플로우 / 명령 조합. step-by-step',
  agent: 'Sub-Agent — 특정 영역 분리 작업 (Claude Code 공식 기능)',
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
  return `# HIRO — Harness for Interactive Reporting Optimization

본 ZIP 은 \`my-geo-newsletter\` 저장소의 Claude Code 하네스 (Rule·Hook·Skill·Sub-Agent) 미러링 본.
생성일: ${today}

## 하네스 4 개념

| 개념 | 형식 | 강제력 | 역할 |
|---|---|---|---|
| **Rule** | Markdown | 권고 (~80%) | 따라야 할 규칙 |
| **Hook** | JSON 강제 + md 설명서 | 100% (시스템 차단) | 절대 하면 안 되는 것 |
| **Skill** | Markdown 워크플로우 | 권고 (필요 시 로드) | 자동 워크플로우 / 명령 조합 |
| **Sub-Agent** | Markdown frontmatter | Claude 가 위임 시 활성 | 특정 영역 분리 작업 |

## ZIP 내용

### Rule
- \`CLAUDE.md\` — 프로젝트 헌법 (4 개념 정의 + NEVER Rule + 작업 흐름)
- \`.claude/rules/data.md\` — 데이터 작업 Rule·매뉴얼·invariant·ANTI-PATTERN
- \`.claude/rules/design.md\` — 디자인 토큰·컴포넌트 카탈로그·SVG 패턴

### Hook
- \`.claude/settings.json\` — Hook 등록 (JSON 필수)
- \`.claude/hooks/README.md\` — 인간 가독성 설명서
- \`.claude/hooks/syntax-check.sh\` — PostToolUse 신택스 검증
- \`.claude/hooks/block-dist.sh\` — PreToolUse 빌드산출물 차단

### Skill
- \`.claude/skills/data/SKILL.md\` — 데이터 워크플로우 8개
- \`.claude/skills/design/SKILL.md\` — 디자인 워크플로우 7개
- \`.claude/skills/prompting/SKILL.md\` — 에이전트형 도구 통합 프롬프트

### Sub-Agent
- \`.claude/agents/data-puller.md\` — 데이터 진단 read-only

## 다른 프로젝트에 적용

1. 본 ZIP 의 \`CLAUDE.md\` + \`docs/\` + \`.claude/\` 전체를 대상 프로젝트 루트에 복사
2. \`chmod +x .claude/hooks/*.sh\` (실행 권한)
3. Claude Code 실행 시 자동 로드됨

## 형식 강제성 — 핵심

- **JSON 필수**: \`.claude/settings.json\` — 시스템이 직접 파싱·실행. Claude 가 우회 불가.
- **Markdown 권고**: \`CLAUDE.md\`, \`.claude/skills/*/SKILL.md\`, \`.claude/rules/*.md\`, \`.claude/agents/*.md\` — Claude 가 읽고 따름 (~80%).
- \`.md\` 안에 \`hooks:\` 같은 자동화 정의 적어도 무시됨. 자동 강제는 \`settings.json\` 만.

## Skill vs Rule 차이

- **Skill** = 순차 워크플로우. "이걸 할 때는 1) → 2) → 3) ..." (step-by-step 명령 조합)
- **Rule** = 그 step 이 따라야 할 토큰·invariant·ANTI-PATTERN 정의 (참조용 매뉴얼)
- Skill에 토큰·패턴 정의가 섞이면 안 되고, 그건 Rule에. Skill은 짧고 sequential.

## 주의

- 본 ZIP 은 원본의 **그 시점 스냅샷**. 원본이 갱신되면 다시 다운로드.
- 원본 갱신을 자동 동기화하려면 git submodule 또는 sparse checkout 등 별도 메커니즘 필요.
- 원본: \`/hiro\` 페이지에서 항상 최신 ZIP 다운로드 가능 (호출 시점에 실제 파일 → 자동 미러).
`
}

// ─── GET /api/hiro/zip — 실제 파일 → 즉시 ZIP 생성 ─────────────────────
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

harnessRouter.get('/api/hiro/zip', async (req, res) => {
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

// ─── GET /hiro/view?path=... — 개별 파일 보기 ────────────────────
// .md → marked.js 렌더 (admin-pages.js 의 renderMarkdownPage 활용)
// .sh / .json / 외 → 다크 테마 code block 페이지
harnessRouter.get('/hiro/view', (req, res) => {
  const relPath = String(req.query.path || '')
  const found = HARNESS_COMPONENTS.find(c => c.file === relPath)
  if (!found) return res.status(404).send('unknown harness component')

  // .md 는 마크다운 렌더 (mermaid 포함)
  if (relPath.endsWith('.md')) {
    const dir = path.dirname(relPath)
    const mdFile = path.basename(relPath)
    return renderMarkdownPage(res, {
      mdFile, dir, title: `${found.label} — ${relPath}`,
      downloadHref: `/api/hiro/file?path=${encodeURIComponent(relPath)}`,
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
  <a class="back" href="/hiro">← HIRO</a>
  <a class="btn" href="/api/hiro/file?path=${encodeURIComponent(relPath)}" target="_blank">raw 다운로드</a>
</div>
<h1>${titleEsc}</h1>
<div class="meta"><span class="lang">${lang}</span> · ${escHtml(found.desc)}</div>
<pre>${codeEsc}</pre>
</body></html>`)
})

// ─── GET /api/hiro/file?path=... — 개별 파일 raw 보기 ──────────────────
harnessRouter.get('/api/hiro/file', (req, res) => {
  const relPath = String(req.query.path || '')
  const found = HARNESS_COMPONENTS.find(c => c.file === relPath)
  if (!found) return res.status(404).json({ ok: false, error: 'unknown harness component' })
  const content = readSafe(relPath)
  if (content == null) return res.status(404).json({ ok: false, error: 'file not found' })
  res.set('Content-Type', 'text/plain; charset=utf-8')
  res.send(content)
})

// ─── GET /hiro — 정리 페이지 ────────────────────────────────────
function escHtml(s) {
  return String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))
}

function fmtBytes(n) {
  if (n < 1024) return n + ' B'
  if (n < 1024 * 1024) return (n / 1024).toFixed(1) + ' KB'
  return (n / 1024 / 1024).toFixed(2) + ' MB'
}

harnessRouter.get('/hiro', (req, res) => {
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
          <a class="link" href="/hiro/view?path=${encodeURIComponent(it.file)}" target="_blank">HTML (for Human) →</a>
          &nbsp;&middot;&nbsp;
          <a class="link" href="/api/hiro/file?path=${encodeURIComponent(it.file)}" target="_blank" style="color:#64748B">Markdown (For AI)</a>
        </div>
      </div>
    `).join('')
    return `<div class="section"><h2>${escHtml(label)}</h2>${rows}</div>`
  }).join('')

  res.set('Content-Type', 'text/html; charset=utf-8')
  res.send(`<!DOCTYPE html><html lang="ko"><head><meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>HIRO — Harness for Interactive Reporting Optimization</title>
${themeStyle()}
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{background:var(--bg-primary);color:var(--text-primary);font-family:'LG Smart','Arial Narrow',Arial,sans-serif;padding:28px 32px;line-height:1.5;transition:background .2s,color .2s}
.top{display:flex;align-items:center;justify-content:space-between;margin-bottom:18px;flex-wrap:wrap;gap:12px}
.back{color:var(--accent);text-decoration:none;font-size:13px}
h1{font-size:22px;color:var(--text-strong);margin-bottom:4px}
.sub{font-size:13px;color:var(--text-muted);margin-bottom:18px}
.intro{background:var(--bg-card);border:1px solid var(--border);border-radius:12px;padding:18px 22px;margin-bottom:18px;font-size:13px;color:var(--text-desc)}
.intro p{margin-bottom:6px}
.intro strong{color:var(--text-strong)}
.usage{background:var(--bg-card);border:1px solid var(--accent);border-radius:12px;padding:22px 26px;margin-bottom:18px;color:var(--text-desc)}
[data-theme="dark"] .usage{background:linear-gradient(135deg,#1F2937 0%,#2A1F3F 100%)}
.usage code{font-family:ui-monospace,Menlo,Consolas,monospace}
.dl-btn{display:inline-block;background:var(--accent);color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:700;font-size:14px;margin-top:14px}
.dl-btn:hover{background:#e0186b}
.gh-btn{display:inline-block;background:#24292F;color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:700;font-size:14px;margin-top:14px;margin-left:10px;border:1px solid #444C56}
.gh-btn:hover{background:#32383F}
[data-theme="light"] .gh-btn{background:#1F2328;border-color:#1F2328}
[data-theme="light"] .gh-btn:hover{background:#24292F}
.kpis{display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:12px;margin-bottom:24px}
.card{background:var(--bg-card);border:1px solid var(--border);border-radius:10px;padding:14px 18px}
.card .label{font-size:11px;color:var(--text-sub);text-transform:uppercase;letter-spacing:1px;margin-bottom:6px}
.card .value{font-size:24px;font-weight:700;color:var(--text-strong)}
.section{background:var(--bg-card);border:1px solid var(--border);border-radius:12px;padding:20px 24px;margin-bottom:18px}
.section h2{font-size:15px;font-weight:700;color:var(--text-strong);margin-bottom:14px}
.comp{padding:12px 0;border-bottom:1px solid var(--border-soft)}
.comp:last-child{border-bottom:0}
.comp-head{display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-bottom:6px}
.comp-label{font-weight:700;color:var(--text-strong);font-size:14px}
.comp-path{font-family:ui-monospace,Menlo,Consolas,monospace;font-size:11px;color:var(--text-sub);background:var(--bg-code);padding:2px 8px;border-radius:4px}
.comp-size{font-size:11px;color:var(--text-muted);margin-left:auto}
.comp-desc{font-size:12px;color:var(--text-desc);margin-bottom:6px}
.comp-actions{font-size:12px}
.link{color:var(--accent);text-decoration:none}
.link:hover{text-decoration:underline}
.note{background:#0F2A1F;border:1px solid #15803D;border-radius:8px;padding:12px 16px;margin-top:18px;font-size:12px;color:#86EFAC}
.note strong{color:#4ADE80}
[data-theme="light"] .note{background:#ECFDF5;border-color:#A7F3D0;color:#166534}
[data-theme="light"] .note strong{color:#15803D}
</style></head><body>
${themeToggleButton()}
<div class="top">
  <a class="back" href="/admin/">← 관리자</a>
</div>
<h1>🐈‍⬛ HIRO</h1>
<p class="sub" style="font-size:14px;color:#CBD5E1;font-weight:600;margin-bottom:4px">Harness for Interactive Reporting Optimization</p>
<p class="sub" style="font-size:12px;color:#94A3B8;font-style:italic;margin-bottom:18px">Built for beginners. Engineered for repetition.</p>

<div class="usage">
  <h2 style="font-size:16px;color:#F8FAFC;margin-bottom:10px">📌 HIRO 란?</h2>
  <p style="font-size:12px;color:#94A3B8;margin-bottom:10px;font-style:italic">🐈‍⬛ 히로 (HIRO) — 본 하네스의 마스코트 검은 고양이. 사용자가 부트스트랩 시나리오 같은 대화형 작업을 할 때 친근한 안내자로 말을 건넵니다.</p>
  <p style="font-size:13px;color:#CBD5E1;margin-bottom:8px">HIRO optimizes how you build interactive dashboards with Claude Code. Instead of crafting data parsers, chart components, and newsletter templates from scratch every time, HIRO ships a reusable harness — <strong style="color:#F8FAFC">skills, rules, hooks, and scenario-based bootstraps</strong> — that turns the manual workflow into a standardized, repeatable pipeline.</p>
  <p style="font-size:13px;color:#CBD5E1;margin-bottom:8px">HIRO 는 Claude Code 로 인터랙티브 대시보드를 만드는 작업을 최적화합니다. 데이터 파서, 차트 컴포넌트, 뉴스레터 템플릿을 매번 처음부터 짜는 대신, HIRO 는 재사용 가능한 하네스 — <strong style="color:#F8FAFC">스킬·룰·훅·시나리오 기반 부트스트랩</strong> — 를 제공해 수작업 워크플로우를 표준화된 반복 가능한 파이프라인으로 바꿉니다.</p>
  <p style="font-size:13px;color:#CBD5E1;margin-bottom:8px">본 페이지는 <strong style="color:#F8FAFC">Claude Code 가 본 프로젝트에서 작업할 때 따르는 Rule·Hook·Skill·Sub-Agent 모두를 한곳에 모은 페이지</strong>.</p>
  <ul style="font-size:13px;color:#CBD5E1;margin-left:22px;line-height:1.8;margin-bottom:12px">
    <li><strong style="color:#F8FAFC">왜 필요한가?</strong> 시간이 흐르면 어떤 Rule이 있는지 기억이 안 남. 한 페이지에서 다 볼 수 있게.</li>
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
    <li><strong>실행 권한 부여</strong>: <code style="background:#0F172A;padding:2px 8px;border-radius:4px;color:#F8C4D7">chmod +x .claude/hooks/*.sh</code> — Hook이 실행되려면 필수</li>
    <li><strong>Claude Code 실행</strong> — 자동으로 로드:
      <ul style="margin:6px 0 6px 20px;font-size:12px;color:#94A3B8;line-height:1.6">
        <li><span style="color:#60A5FA">RULE</span>: <code>CLAUDE.md</code> 항상 로드 + <code>.claude/rules/</code> 가 CLAUDE.md 명시 참조 시 로드</li>
        <li><span style="color:#F87171">HOOK</span>: <code>.claude/settings.json</code> 등록된 Hook이 Edit/Write 시점에 시스템 자동 실행 (100% 강제)</li>
        <li><span style="color:#4ADE80">SKILL</span>: <code>.claude/skills/&lt;name&gt;/SKILL.md</code> 의 frontmatter description 으로 트리거 — Claude 가 필요 시 자동 로드</li>
        <li><span style="color:#FBBF24">AGENT</span>: <code>.claude/agents/&lt;name&gt;.md</code> 의 frontmatter — Claude 가 위임 시 활성</li>
      </ul>
    </li>
    <li><strong>새 프로젝트에 맞게 커스터마이즈</strong>:
      <ul style="margin:6px 0 6px 20px;font-size:12px;color:#94A3B8;line-height:1.6">
        <li>CLAUDE.md 의 NEVER Rule·스택·디렉토리 맵을 신규 프로젝트에 맞춰 수정</li>
        <li>.claude/rules/ 의 Rule 매뉴얼을 도메인에 맞게 (예: 다른 데이터 모델·다른 디자인 시스템)</li>
        <li>Hook 스크립트의 grep 패턴·차단 경로 조정</li>
        <li>Skill 워크플로우는 신규 프로젝트의 실제 작업에 맞게 step-by-step 재작성</li>
      </ul>
    </li>
  </ol>
  <p style="font-size:11px;color:#64748B;margin-top:10px;font-style:italic">미러는 <code>npm run sync:harness</code> 또는 <code>npm run build</code> (prebuild) 시 자동 갱신 — 본 ZIP 은 호출 시점에 항상 최신.</p>
  <a class="dl-btn" href="/api/hiro/zip">📦 전체 ZIP 다운로드</a>
  <a class="gh-btn" href="https://github.com/mts8787-droid/HIRO" target="_blank" rel="noopener noreferrer">⭐ GitHub 바로가기</a>
</div>

<div class="intro">
  <h3 style="font-size:14px;color:#F8FAFC;margin-bottom:10px">🧩 하네스 4 개념</h3>
  <ul style="font-size:13px;color:#CBD5E1;margin-left:22px;line-height:1.9">
    <li><span style="color:#60A5FA;font-weight:700">Rule</span> — 따라야 할 규칙. Claude 가 권고로 따름 (~80%). 토큰·invariant·ANTI-PATTERN 매뉴얼.</li>
    <li><span style="color:#F87171;font-weight:700">Hook</span> — 절대 하면 안 되는 것. <strong>JSON 강제 (100%)</strong>. 시스템이 자동 차단.</li>
    <li><span style="color:#4ADE80;font-weight:700">Skill</span> — 자동 워크플로우 / 명령 조합. "L-1 차트 그려줘" 같은 호출.</li>
    <li><span style="color:#FBBF24;font-weight:700">Sub-Agent</span> — 특정 영역 분리 작업 (예: 데이터 진단 read-only).</li>
  </ul>
  <p style="color:#94A3B8;font-size:11px;margin-top:10px">아래 목록의 각 컴포넌트를 클릭하면 디자인된 HTML 또는 원본 Markdown 으로 열람 가능.</p>
</div>

<div class="kpis">
  <div class="card"><div class="label">가이드</div><div class="value">${(grouped.entry || []).length}</div></div>
  <div class="card"><div class="label">Rule</div><div class="value">${(grouped.rule || []).length}</div></div>
  <div class="card"><div class="label">Hook</div><div class="value">${(grouped.hook || []).length}</div></div>
  <div class="card"><div class="label">Skill</div><div class="value">${(grouped.skill || []).length}</div></div>
  <div class="card"><div class="label">Sub-Agent</div><div class="value">${(grouped.agent || []).length}</div></div>
  <div class="card"><div class="label">총 크기 (압축 전)</div><div class="value">${escHtml(fmtBytes(totalSize))}</div></div>
</div>

${sectionsHtml}


</body></html>`)
})

// ─── 백워드 호환 redirect — 기존 /admin/harness* + /api/harness/* 링크 보존 ──
harnessRouter.get('/admin/harness', (req, res) => res.redirect(301, '/hiro'))
harnessRouter.get('/admin/harness/view', (req, res) => {
  const q = req.url.includes('?') ? req.url.slice(req.url.indexOf('?')) : ''
  res.redirect(301, '/hiro/view' + q)
})
harnessRouter.get('/api/harness/zip', (req, res) => res.redirect(301, '/api/hiro/zip'))
harnessRouter.get('/api/harness/file', (req, res) => {
  const q = req.url.includes('?') ? req.url.slice(req.url.indexOf('?')) : ''
  res.redirect(301, '/api/hiro/file' + q)
})
