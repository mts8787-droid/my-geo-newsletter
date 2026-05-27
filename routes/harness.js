// HIRO — Harness for Interactive Reporting Optimization
// Claude Code 하네스(Rule·Skill·Hook·Sub-Agent) 정리 + ZIP 다운로드
// 본 페이지는 .claude/ + CLAUDE.md 의 실시간 미러. 다른 프로젝트에 적용하려고 ZIP 받을 때 사용.
// ZIP 생성 시점에 실제 파일을 읽으므로 항상 최신. 별도 동기화 단계 없음.
import { Router } from 'express'
import fs from 'fs'
import path from 'path'
import JSZip from 'jszip'
import { renderMarkdownPage } from './admin-pages.js'
import { themeStyle, themeToggleButton } from '../lib/theme.js'

export const harnessRouter = Router()

// ─── 하네스 컴포넌트 정의 ────────────────────────────────────────────────────
// 본 저장소의 실제 파일 경로 + UI 표시용 메타데이터.
// 새 컴포넌트 (예: 신규 hook, agent) 추가 시 이 배열만 갱신.
const HARNESS_COMPONENTS = [
  // ─── 진입점 (Entry Point) — harness-mirror/docs/ 미러 호스트 ─────────────
  {
    category: 'entry',
    label: '전체 하네스 설명',
    file: 'harness-mirror/docs/HARNESS.html',
    desc: '브라우저 더블클릭으로 열림. 4 개념·폴더 구조·각 컴포넌트 설명·Skill 사용법 시각화. (같은 내용 마크다운: harness-mirror/docs/HARNESS.md)',
  },
  {
    category: 'entry',
    label: 'Chart Library',
    file: 'harness-mirror/docs/CHART_LIBRARY.html',
    desc: '14 차트 양식 + 툴팁 분류 카탈로그 (L-1~T-1) 정적 HTML. 라이브: /admin/chart-library.',
  },
  {
    category: 'entry',
    label: '부트스트랩 사용법 (Usage Guide)',
    file: 'harness-mirror/docs/HUMAN_GUIDE.md',
    desc: '사람이 직접 읽는 사용 설명서 — BOOTSTRAP 의 시나리오 (신규 프로젝트 적용 STEP 0~8 + 디버깅 DEBUG-1~15) 어떻게 트리거하고 활용하는지 + 도메인 예시 + 검증 체크리스트 + 트러블슈팅 + FAQ.',
  },
  {
    category: 'entry',
    label: '스킬 사용 가이드 (Skills Usage Guide)',
    file: 'harness-mirror/docs/SKILLS_GUIDE.md',
    desc: 'Claude Code 의 Skill 시스템 사용법 — 자동 매칭 원리 (frontmatter description), 슬래시 명령(/skills) vs 자연어 호출 차이, 인덱스 → sub-skill 조합, 강제 호출 방법, 새 스킬 만들기 + frontmatter 작성법 + 갱신할 4 곳.',
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
    label: 'data-debug — 갑자기 망가진 데이터 원인 찾기',
    file: '.claude/skills/data-debug/SKILL.md',
    desc: '사용자가 "데이터 이상해", "차트 안 보여", "값 갑자기 0으로" 같이 말하면 트리거 — Claude 가 원인 추적 후 수정. 재현 테스트 우선(TDD), 시트 동기화 후 invariant 검증, 5단계 ERROR CATCHING.',
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
    desc: '디자인 워크플로우는 성격별 4 sub-skill 로 분리됨 — design-layout / design-chart / design-component / design-tune. 본 파일은 분기 인덱스.',
  },
  {
    category: 'skill',
    label: 'design-layout — 전체 페이지 레이아웃 설계',
    file: '.claude/skills/design-layout/SKILL.md',
    desc: '대시보드 / 신규 페이지 전체 골격 설계 (8 섹션 + 반응형 그리드 + 폴더 구조). 부트스트랩 STEP 3 시트 스키마 우선 참조, 없으면 TECHNIQUE-4 (스케치 요청).',
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
    label: 'design-tune — 깨진 UI · 이메일 호환 고치기',
    file: '.claude/skills/design-tune/SKILL.md',
    desc: '사용자가 "카드 깨졌어", "이메일에서 차트 안 보임", "EN 라벨 추가" 같이 말하면 트리거 — 이메일 호환 변환(table-layout), 다국어 라벨, UI 깨짐 추적·수정.',
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
    label: 'newsletter-debug — 깨진 뉴스레터 / 클라이언트별 호환',
    file: '.claude/skills/newsletter-debug/SKILL.md',
    desc: '사용자가 "Outlook 에서 깨짐", "Gmail 짤림", "미출시 국가 색 잘못" 같이 말하면 트리거 — 이메일 클라이언트별 호환 문제, iframe 미리보기 클립 추적·수정.',
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

// label 구조: { key, rest } — key 만 볼드, rest 는 일반
const CATEGORY_LABELS = {
  entry: { key: '가이드', rest: ' — 하네스 전체 개요 (harness-mirror/docs/ 미러)' },
  rule:  { key: 'Rule',  rest: ' — 따라야 할 규칙. Markdown 권고 (~80%)' },
  hook:  { key: 'Hook',  rest: ' — 절대 하면 안 되는 것. JSON 강제 (100%) + 인간용 md 설명서' },
  skill: { key: 'Skill', rest: ' — 자동 워크플로우 / 명령 조합. step-by-step' },
  agent: { key: 'Sub-Agent', rest: ' — 특정 영역 분리 작업 (Claude Code 공식 기능)' },
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

본 ZIP 은 \`my-geo-newsletter\` 저장소의 Claude Code 하네스 미러링 본.
생성일: ${today}

## 2벌 정리 — 실제 작동 / 사람용 미러

본 ZIP 은 같은 컨텐츠를 **2 곳에 정리**:

1. **실제 작동** (Claude / Codex 가 자동 로드):
   - \`CLAUDE.md\` (루트) — Claude Code 헌법
   - \`AGENTS.md\` (루트) — OpenAI Codex / Antigravity 헌법
   - \`.claude/\` — Hook · Skill · Sub-Agent · Rule
2. **사람용 미러** (git 공유 + 가독성):
   - \`harness-mirror/\` — 위 1) 의 1:1 복사 + 가이드 HTML 모음

## 4 개념

| 개념 | 형식 | 강제력 | 역할 |
|---|---|---|---|
| **Rule** | Markdown | 권고 (~80%) | 따라야 할 규칙 |
| **Hook** | JSON 강제 + md 설명서 | 100% (시스템 차단) | 절대 하면 안 되는 것 |
| **Skill** | Markdown 워크플로우 | 권고 (필요 시 로드) | 자동 워크플로우 / 명령 조합 |
| **Sub-Agent** | Markdown frontmatter | Claude 가 위임 시 활성 | 특정 영역 분리 작업 |

## ZIP 구조

\`\`\`
CLAUDE.md                            ← 실제 작동
AGENTS.md                            ← 실제 작동
.claude/                             ← 실제 작동
├── settings.json
├── hooks/{*.sh, README.md}
├── skills/<name>/SKILL.md
├── agents/*.md
└── rules/*.md
harness-mirror/                      ← 사람용 미러
├── CLAUDE.md
├── AGENTS.md
├── .claude/                         (실제 .claude/ 1:1 미러)
└── docs/
    ├── HARNESS.md · HARNESS.html
    ├── CHART_LIBRARY.html
    ├── HUMAN_GUIDE.md
    └── hooks/{data,design}.md
README.md                            ← 본 안내
\`\`\`

## 다른 프로젝트에 적용

1. 본 ZIP 의 \`CLAUDE.md\` + \`AGENTS.md\` + \`.claude/\` + \`harness-mirror/\` 전체를 대상 프로젝트 루트에 복사.
2. \`chmod +x .claude/hooks/*.sh\` (Mac/Linux/WSL — 실행 권한).
3. Claude Code (또는 Codex) 실행 시 자동 로드.
4. \`harness-mirror/\` 는 사람용 설명 사본 — 실제 작동에는 영향 X. 필요 없으면 삭제 가능.

## 형식 강제성 — 핵심

- **JSON 필수**: \`.claude/settings.json\` — 시스템이 직접 파싱·실행. Claude 가 우회 불가.
- **Markdown 권고**: \`CLAUDE.md\`, \`.claude/skills/*/SKILL.md\`, \`.claude/rules/*.md\`, \`.claude/agents/*.md\` — Claude 가 읽고 따름 (~80%).
- \`.md\` 안에 \`hooks:\` 같은 자동화 정의 적어도 무시됨. 자동 강제는 \`settings.json\` 만.

## Skill vs Rule 차이

- **Skill** = 순차 워크플로우. "이걸 할 때는 1) → 2) → 3) ..." (step-by-step 명령 조합)
- **Rule** = 그 step 이 따라야 할 토큰·invariant·ANTI-PATTERN 정의 (참조용 매뉴얼)
- Skill에 토큰·패턴 정의가 섞이면 안 되고, 그건 Rule에. Skill은 짧고 sequential.

## 주의

- 본 ZIP 은 원본의 **그 시점 스냅샷**. 원본 갱신 시 다시 다운로드.
- 원본 갱신을 자동 동기화하려면 git submodule 또는 sparse checkout 등 별도 메커니즘 필요.
- 원본: \`/hiro\` 페이지에서 항상 최신 ZIP 다운로드 가능 (호출 시점에 실제 파일 → 자동 미러).
`
}

// ─── GET /api/hiro/zip — 실제 파일 → 즉시 ZIP 생성 ─────────────────────
// 2벌 구성: (1) 실제 작동 .claude/ + CLAUDE.md + AGENTS.md (2) harness-mirror/ 사람용 미러
function addDirToZip(zip, srcDir, opts = {}) {
  const { skip = [] } = opts
  const absSrc = path.join(ROOT, srcDir)
  if (!fs.existsSync(absSrc)) return
  for (const entry of fs.readdirSync(absSrc)) {
    if (skip.includes(entry)) continue
    const relPath = path.join(srcDir, entry)
    const absPath = path.join(ROOT, relPath)
    if (fs.statSync(absPath).isDirectory()) {
      addDirToZip(zip, relPath, opts)
    } else {
      zip.file(relPath, fs.readFileSync(absPath))
    }
  }
}

harnessRouter.get('/api/hiro/zip', async (req, res) => {
  try {
    const zip = new JSZip()
    // (1) 실제 작동 — Claude / Codex 가 자동 로드
    for (const f of ['CLAUDE.md', 'AGENTS.md']) {
      const content = readSafe(f)
      if (content != null) zip.file(f, content)
    }
    // .claude/ 전체 (settings.local.json 만 제외 — 사용자 PC 정보)
    addDirToZip(zip, '.claude', { skip: ['settings.local.json'] })
    // (2) 사람용 미러 — harness-mirror/ 폴더 전체 (CLAUDE.md / AGENTS.md / .claude/ / docs/)
    addDirToZip(zip, 'harness-mirror')
    // README (사용 가이드)
    zip.file('README.md', generateReadme())
    const buffer = await zip.generateAsync({ type: 'nodebuffer', compression: 'DEFLATE' })
    const fname = `hiro-harness-${new Date().toISOString().slice(0, 10)}.zip`
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
      backHref: '/hiro', backLabel: '← HIRO',
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
${themeStyle()}
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{background:var(--bg-primary);color:var(--text-primary);font-family:'LG Smart','Arial Narrow',Arial,sans-serif;padding:24px 32px;line-height:1.5;transition:background .2s,color .2s}
.topbar{display:flex;align-items:center;justify-content:space-between;margin-bottom:18px;flex-wrap:wrap;gap:12px}
.back{color:var(--accent);text-decoration:none;font-size:16px}
.btn{background:var(--bg-card);border:1px solid var(--border);border-radius:8px;padding:8px 16px;font-size:16px;font-weight:600;color:var(--text-primary);text-decoration:none}
h1{font-size:18px;color:var(--text-strong);margin-bottom:6px}
.meta{font-size:15px;color:var(--text-muted);margin-bottom:18px;font-family:ui-monospace,Menlo,Consolas,monospace}
pre{background:var(--bg-code);border:1px solid var(--border);border-radius:12px;padding:20px 24px;overflow:auto;max-width:1100px;margin:0 auto;font-family:'Consolas','Courier New',ui-monospace,monospace;font-size:16px;line-height:1.6;color:var(--text-desc);white-space:pre-wrap;word-wrap:break-word}
.lang{display:inline-block;background:var(--border);color:var(--text-sub);padding:2px 8px;border-radius:4px;font-size:14px;text-transform:uppercase;letter-spacing:1px;margin-bottom:4px}
/* ─── 적응형 UI ─────────────────────────────────────────────── */
@media (max-width:780px){
  body{padding:16px 14px}
  h1{font-size:18px}
  .meta{font-size:14px;margin-bottom:14px}
  .btn{padding:6px 12px;font-size:15px}
  pre{padding:14px 16px;font-size:15px;border-radius:10px}
}
@media (max-width:480px){
  body{padding:12px 10px}
  .topbar{flex-direction:column;align-items:flex-start;gap:8px;margin-bottom:14px}
  .btn{width:100%;text-align:center;box-sizing:border-box}
  h1{font-size:17px;word-break:break-all}
  .meta{font-size:13px;word-break:break-all}
  pre{padding:12px 14px;font-size:14px;line-height:1.5}
}
</style></head><body>
${themeToggleButton()}
<div class="topbar">
  <a class="back" href="/hiro">← HIRO</a>
  <a class="btn" href="/api/hiro/file?path=${encodeURIComponent(relPath)}">raw 다운로드</a>
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
          <a class="link" href="/hiro/view?path=${encodeURIComponent(it.file)}">HTML (for Human) →</a>
          &nbsp;&middot;&nbsp;
          <a class="link" href="/api/hiro/file?path=${encodeURIComponent(it.file)}" style="color:#64748B">Markdown (For AI)</a>
        </div>
      </div>
    `).join('')
    return `<div class="section"><h2 class="section-title-bar"><strong>${escHtml(label.key)}</strong><span class="rest">${escHtml(label.rest)}</span></h2>${rows}</div>`
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
.back{color:var(--accent);text-decoration:none;font-size:16px}
h1{font-size:22px;color:var(--text-strong);margin-bottom:4px}
.sub{font-size:16px;color:var(--text-muted);margin-bottom:18px}
.intro{background:var(--bg-card);border:1px solid var(--border);border-radius:12px;padding:18px 22px;margin-bottom:18px;font-size:16px;color:var(--text-desc)}
.intro p{margin-bottom:6px}
.intro strong{color:var(--text-strong)}
.usage{background:var(--bg-card);border:1px solid var(--accent);border-radius:12px;padding:22px 26px;margin-bottom:18px;color:var(--text-desc)}
[data-theme="dark"] .usage{background:linear-gradient(135deg,#1F2937 0%,#2A1F3F 100%)}
.usage h2{display:block !important;font-size:18px !important;font-weight:700;color:var(--text-strong) !important;background:var(--bg-code);border-left:4px solid var(--accent);padding:10px 14px !important;border-radius:4px;margin:18px 0 14px !important}
.usage h2:first-of-type{margin-top:6px !important}
.usage h3{display:block;font-size:17px;font-weight:600;color:var(--text-strong);background:var(--bg-code);border-left:3px solid var(--text-sub);padding:8px 12px;border-radius:4px;margin:16px 0 10px}
.usage code{font-family:ui-monospace,Menlo,Consolas,monospace}
.dl-btn{display:inline-block;background:var(--accent);color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:700;font-size:17px;margin-top:14px}
.dl-btn:hover{background:#e0186b}
.gh-btn{display:inline-block;background:#24292F;color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:700;font-size:17px;margin-top:14px;margin-left:10px;border:1px solid #444C56}
.gh-btn:hover{background:#32383F}
[data-theme="light"] .gh-btn{background:#1F2328;border-color:#1F2328}
[data-theme="light"] .gh-btn:hover{background:#24292F}
.kpis{display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:12px;margin-bottom:24px}
.card{background:var(--bg-card);border:1px solid var(--border);border-radius:10px;padding:14px 18px}
.card .label{font-size:14px;color:var(--text-sub);text-transform:uppercase;letter-spacing:1px;margin-bottom:6px}
.card .value{font-size:24px;font-weight:700;color:var(--text-strong)}
.section{background:var(--bg-card);border:1px solid var(--border);border-radius:12px;padding:20px 24px;margin-bottom:18px}
.section h2{font-size:19px;font-weight:400;color:var(--text-strong);margin-bottom:14px}
.section-title-bar{background:var(--bg-code);border-left:4px solid var(--accent);padding:10px 14px;border-radius:4px;margin:-4px -4px 14px;display:block !important}
.section-title-bar strong{font-weight:800;color:var(--text-strong);margin-right:2px}
.section-title-bar .rest{font-weight:400;color:var(--text-desc);font-size:16px}
.comp{padding:12px 0;border-bottom:1px solid var(--border-soft)}
.comp:last-child{border-bottom:0}
.comp-head{display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-bottom:6px}
.comp-label{font-weight:700;color:var(--text-strong);font-size:17px}
.comp-path{font-family:ui-monospace,Menlo,Consolas,monospace;font-size:14px;color:var(--text-sub);background:var(--bg-code);padding:2px 8px;border-radius:4px}
.comp-size{font-size:14px;color:var(--text-muted);margin-left:auto}
.comp-desc{font-size:15px;color:var(--text-desc);margin-bottom:6px}
.comp-actions{font-size:15px}
.link{color:var(--accent);text-decoration:none}
.link:hover{text-decoration:underline}
.note{background:#0F2A1F;border:1px solid #15803D;border-radius:8px;padding:12px 16px;margin-top:18px;font-size:16px;color:#86EFAC}
.note strong{color:#4ADE80}
[data-theme="light"] .note{background:#ECFDF5;border-color:#A7F3D0;color:#166534}
[data-theme="light"] .note strong{color:#15803D}

/* 라이트 모드 강제 override — 인라인 style 의 다크용 색상을 라이트 톤으로 (text 가독성) */
[data-theme="light"] [style*="color:#F8FAFC"]{color:#0F172A !important}
[data-theme="light"] [style*="color:var(--text-desc)"]{color:#334155 !important}
[data-theme="light"] [style*="color:var(--text-sub)"]{color:#475569 !important}
[data-theme="light"] [style*="color:#64748B"]{color:#475569 !important}
[data-theme="light"] [style*="background:#0F172A"]{background:#F1F5F9 !important;color:#0F172A !important}
[data-theme="light"] [style*="color:#F8C4D7"]{color:#BE123C !important}

/* HIRO Hero 타이틀 */
.hiro-hero{text-align:center;padding:36px 24px 28px;border-bottom:1px solid var(--border);margin-bottom:24px}
.hiro-hero .title{font-size:80px;font-weight:900;color:var(--text-strong);letter-spacing:-4px;line-height:0.95;margin-bottom:8px;font-family:'LG Smart','Arial Narrow',Arial,sans-serif}
.hiro-hero .title .cat{font-size:60px;vertical-align:middle;margin-right:8px}
.hiro-hero .fullname{font-size:18px;font-weight:600;color:var(--accent);letter-spacing:1.5px;margin-bottom:6px}
.hiro-hero .tagline{font-size:16px;color:var(--text-sub);font-style:italic}
.guide-inline{font-size:15px;color:var(--text-desc);margin-top:12px;margin-bottom:6px;padding:8px 12px;background:var(--bg-code);border-left:3px solid var(--accent);border-radius:4px}
.guide-inline strong{color:var(--text-strong)}
.guide-inline a{color:var(--accent);text-decoration:none;font-weight:600;margin:0 2px}
.guide-inline a:hover{text-decoration:underline}
/* ─── 적응형 UI — 태블릿 (≤ 780px) ───────────────────────────────── */
@media (max-width:780px){
  body{padding:16px 14px}
  .top{margin-bottom:12px}
  h1{font-size:20px}
  .sub{font-size:15px;margin-bottom:14px}
  .intro,.usage{padding:14px 16px;margin-bottom:14px;font-size:15px}
  .usage h2{font-size:18px !important;padding:8px 12px !important;margin:14px 0 10px !important}
  .usage h3{font-size:16px;padding:6px 10px;margin:12px 0 8px}
  .kpis{grid-template-columns:repeat(2,1fr);gap:10px;margin-bottom:18px}
  .card{padding:12px 14px}
  .card .value{font-size:20px}
  .section{padding:16px 18px;margin-bottom:14px}
  .section-title-bar{padding:8px 12px;margin:-2px -2px 12px}
  .comp-head{gap:8px}
  .comp-label{font-size:16px}
  .dl-btn,.gh-btn{font-size:16px;padding:10px 18px;margin-left:0;margin-top:10px;display:inline-block}
  .hiro-hero{padding:24px 16px 20px;margin-bottom:18px}
  .hiro-hero .title{font-size:48px;letter-spacing:-2px}
  .hiro-hero .title .cat{font-size:40px}
  .hiro-hero .fullname{font-size:17px;letter-spacing:1px}
  pre{padding:14px 16px;font-size:14px}
}
/* ─── 적응형 UI — 모바일 (≤ 480px) ───────────────────────────────── */
@media (max-width:480px){
  body{padding:12px 10px}
  .topbar,.top{flex-direction:column;align-items:flex-start;gap:8px}
  h1{font-size:18px}
  .intro,.usage,.section{padding:12px 14px;font-size:12.5px}
  .kpis{grid-template-columns:1fr;gap:8px}
  .card .value{font-size:18px}
  .card .label{font-size:13px}
  .comp{padding:10px 0}
  .comp-head{flex-direction:column;align-items:flex-start;gap:4px}
  .comp-size{margin-left:0;font-size:13px}
  .comp-path{font-size:13px;word-break:break-all}
  .comp-desc{font-size:14px}
  .dl-btn,.gh-btn{width:100%;text-align:center;margin-left:0;padding:12px 16px;box-sizing:border-box}
  .gh-btn{margin-top:8px}
  .hiro-hero{padding:20px 12px 16px;margin-bottom:14px}
  .hiro-hero .title{font-size:38px;letter-spacing:-1.5px}
  .hiro-hero .title .cat{font-size:32px;margin-right:4px}
  .hiro-hero .fullname{font-size:15px}
  .hiro-hero .tagline{font-size:14px}
  .guide-inline{font-size:14px;padding:6px 10px}
  .guide-inline a{display:inline-block;margin:2px 4px}
  pre{padding:12px 14px;font-size:11.5px}
  table{font-size:14px}
}
</style></head><body>
${themeToggleButton()}
<div class="hiro-hero">
  <div class="title"><span class="cat">🐈‍⬛</span>HIRO</div>
  <div class="fullname">Harness for Interactive Reporting Optimization</div>
  <div class="tagline">Built for beginners. Engineered for repetition.</div>
</div>

<div class="usage">
  <h2 style="font-size:18px;color:#F8FAFC;margin-bottom:10px">📌 HIRO 가 뭐예요?</h2>
  <p style="font-size:15px;color:var(--text-sub);margin-bottom:10px;font-style:italic">🐈‍⬛ 히로 (HIRO) — 본 하네스의 마스코트 검은 고양이. 부트스트랩 시작하면 친근하게 말 걸어요.</p>
  <p style="font-size:16px;color:var(--text-desc);margin-bottom:8px"><strong style="color:#F8FAFC">한 줄 요약</strong>: Claude Code 가 새 대시보드 / 뉴스레터 / KPI 리포트를 만들 때 <strong style="color:#F8FAFC">같은 실수를 반복하지 않도록</strong> 도와주는 규칙 + 자동 검사 + 작업 매뉴얼 묶음.</p>
  <p style="font-size:16px;color:var(--text-desc);margin-bottom:8px">가전 KPI 도메인에서 1000+ 회 commit 으로 다듬어진 패턴이에요. 매출 · HR · 의료 · 교육 등 어떤 도메인이든 <strong style="color:#F8FAFC">데이터 5행만 보여주면 Claude 가 자동으로 적응</strong>해서 셋업해줍니다.</p>
  <ul style="font-size:16px;color:var(--text-desc);margin-left:22px;line-height:1.8;margin-bottom:12px">
    <li><strong style="color:#F8FAFC">왜 필요한가?</strong> 시간이 흐르면 같은 실수를 또 함 (예: 뉴스레터 우측 짤림 / 카테고리 매핑 누락 / 한국식 날짜 정렬 깨짐). 한 페이지에서 다 보고 차단.</li>
    <li><strong style="color:#F8FAFC">무엇을 모았나?</strong> 4 가지 — <strong style="color:#60A5FA">규칙</strong> (Claude 가 따라야 할 것) · <strong style="color:#F87171">자동 검사</strong> (시스템이 차단) · <strong style="color:#4ADE80">작업 순서</strong> (정형화된 워크플로우) · <strong style="color:#FBBF24">보조 일꾼</strong> (특정 영역 분리).</li>
    <li><strong style="color:#F8FAFC">무엇을 할 수 있나?</strong> (1) 각 파일 클릭해서 보기 (2) 전체 ZIP 받아서 다른 프로젝트에 적용 (3) 팀원과 공유.</li>
  </ul>
  <p style="font-size:14px;color:var(--text-sub);margin-bottom:8px;font-style:italic">English summary: HIRO is a battle-tested harness for Claude Code — rules, hooks, skills, and scenario-based bootstraps. Just show your data and Claude auto-adapts to any domain.</p>

  <h2 style="font-size:18px;color:#F8FAFC;margin-bottom:10px;margin-top:18px">💡 다른 프로젝트에 적용하기 — 데이터만 보여주면 끝</h2>
  <p style="font-size:16px;color:var(--text-desc);margin-bottom:10px"><strong style="color:#F8FAFC">사용자가 들을 단어</strong>는 "데이터 / 도메인 / 카테고리 / KPI / 색상" 같은 일상어뿐이에요. <strong style="color:#F8FAFC">변수명·코드 한 줄 안 봐도 됩니다.</strong></p>
  <p style="font-size:16px;color:var(--text-desc);margin-bottom:10px">ZIP 받아서 새 프로젝트 폴더에 풀고 Claude 에게 <code style="background:#0F172A;padding:1px 6px;border-radius:3px">"이 하네스 적용해줘"</code> 하면, 🐈‍⬛ 히로가:</p>
  <ol style="font-size:15px;color:var(--text-sub);margin-left:24px;line-height:1.7;margin-bottom:12px">
    <li>"어떤 분야 대시보드 만드세요?" 1 질문</li>
    <li>"시각화하고 싶은 데이터의 헤더 + 1~5행 보여주세요" 1 요청</li>
    <li>받은 데이터 분석 → 도메인 추론 → 카테고리·KPI·차트 자동 매칭</li>
    <li>"이렇게 이해했어요, 맞나요?" 사용자 확인</li>
    <li>확인 후 → 모든 파일 자동 생성 (단일 소스 매핑 · 파서 · 차트 · 디자인 토큰)</li>
  </ol>
  <p style="font-size:16px;color:var(--text-desc);margin-bottom:10px">아래는 ZIP 풀고 Claude 시작하기 전의 <strong style="color:#F8FAFC">사전 준비 4 단계</strong>:</p>
  <ol style="font-size:16px;color:var(--text-desc);margin-left:24px;line-height:1.8">
    <li><strong>전체 ZIP 다운로드</strong> (아래 빨간 버튼) — 원본 + 미러 모두 포함</li>
    <li>대상 프로젝트 <strong>루트에 압축 풀기</strong>:
      <ul style="margin:6px 0 6px 20px;font-size:15px;color:var(--text-sub);line-height:1.6">
        <li><code style="background:#0F172A;padding:1px 6px;border-radius:3px">CLAUDE.md</code> — 프로젝트 헌법 (Claude 가 항상 로드)</li>
        <li><code style="background:#0F172A;padding:1px 6px;border-radius:3px">AGENTS.md</code> — OpenAI Codex / Antigravity 헌법 (자동 로드)</li>
        <li><code style="background:#0F172A;padding:1px 6px;border-radius:3px">.claude/</code> — settings.json + hooks/ + skills/ + agents/ + rules/</li>
        <li><code style="background:#0F172A;padding:1px 6px;border-radius:3px">harness-mirror/</code> — 사람용 미러 (선택 — Claude Code 작동에는 불필요)</li>
      </ul>
    </li>
    <li><strong>실행 권한 부여</strong> — Hook이 실행되려면 필수.
      <div style="margin:6px 0 0 0;font-size:15px;color:var(--text-desc);line-height:1.6">
        터미널에서 <strong>압축을 풀었던 프로젝트 루트 폴더로 이동</strong> (<code style="background:#0F172A;padding:1px 6px;border-radius:3px">cd /your/project/path</code>) 한 다음 한 줄 실행:
      </div>
      <pre style="margin:6px 0 0 0;padding:8px 12px;background:#0F172A;border-radius:6px;font-size:14px;color:#F8C4D7;overflow:auto"><code>chmod +x .claude/hooks/*.sh</code></pre>
      <div style="margin:6px 0 0 0;font-size:14px;color:var(--text-sub)">확인: <code style="background:#0F172A;padding:1px 6px;border-radius:3px">ls -l .claude/hooks/</code> 결과에 <code style="background:#0F172A;padding:1px 6px;border-radius:3px">-rwxr-xr-x</code> 표시되면 OK.</div>
    </li>
    <li><strong>Claude Code 실행</strong> — 4가지 자동 로드 (사용자는 아무것도 안 해도 됨):
      <ul style="margin:6px 0 6px 20px;font-size:15px;color:var(--text-sub);line-height:1.6">
        <li><span style="color:#60A5FA">규칙 (Rule)</span> — Claude 가 따라야 할 패턴. <code>CLAUDE.md</code> + <code>.claude/rules/</code> 자동 로드.</li>
        <li><span style="color:#F87171">자동 검사 (Hook)</span> — 절대 하면 안 되는 것 시스템 차단. <code>.claude/settings.json</code> + <code>.claude/hooks/*.sh</code> (100% 강제).</li>
        <li><span style="color:#4ADE80">작업 순서 (Skill)</span> — 정형화된 워크플로우 묶음. 사용자가 "데이터 추가해줘" 같이 말하면 적절한 Skill 자동 호출.</li>
        <li><span style="color:#FBBF24">보조 일꾼 (Sub-Agent)</span> — 특정 영역 분리 작업 (예: 데이터 진단 전담). Claude 가 위임 시 활성.</li>
      </ul>
    </li>
    <li><strong>"이 하네스 적용해줘" 라고 Claude 에게 부탁</strong> — 부트스트랩 시작:
      <div style="margin:6px 0 0 0;font-size:15px;color:var(--text-desc);line-height:1.7">
        🐈‍⬛ 히로가 친근하게 도메인 인터뷰 (2 질문) → "데이터 1~5행 보여주세요" → 자동 분석 + 추론 결과 확인 → 모든 파일 자동 생성. <strong>커스터마이즈 (CLAUDE.md · Rule · 디렉토리 맵 · 색상) 까지 모두 Claude 가 자동</strong> 처리. 사용자가 코드 수정할 필요 X.
      </div>
    </li>
  </ol>
  <p style="font-size:14px;color:#64748B;margin-top:10px;font-style:italic">미러는 <code>npm run sync:harness</code> 또는 <code>npm run build</code> (prebuild) 시 자동 갱신 — 본 ZIP 은 호출 시점에 항상 최신.</p>
  <div class="guide-inline">
    ⚠️ <strong>다른 프로젝트에 HIRO 적용하기 전 — 4 가이드 반드시 정독</strong>:
    <a href="/hiro/view?path=harness-mirror/docs/HARNESS.html">전체 하네스 설명</a> ·
    <a href="/hiro/chart-library">차트 라이브러리</a> ·
    <a href="/hiro/view?path=harness-mirror/docs/HUMAN_GUIDE.md">부트스트랩 사용법</a> ·
    <a href="/hiro/view?path=harness-mirror/docs/SKILLS_GUIDE.md">스킬 사용 가이드</a>
  </div>
  <a class="dl-btn" href="/api/hiro/zip">📦 전체 ZIP 다운로드</a>
  <a class="gh-btn" href="https://github.com/mts8787-droid/HIRO" target="_blank" rel="noopener noreferrer">⭐ GitHub 바로가기</a>
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
