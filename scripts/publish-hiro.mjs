#!/usr/bin/env node
// scripts/publish-hiro.mjs
// 본 저장소 + HIRO 미러 리포 동시 push.
// 사용: npm run publish:hiro
//
// 동작:
//   1) 본 저장소 → origin push (git push origin main) — 평소 자동 커밋·푸시와 동일
//   2) 별도 HIRO 리포 (sibling 워크트리) clone or pull
//   3) 화이트리스트 sanitized 파일만 복사 (CLAUDE.md, AGENTS.md, .claude/{rules,skills,hooks,agents,settings.json}, harness-mirror/**)
//   4) HIRO 리포에 commit (본 저장소 hash + 메시지 포함) + push
//
// 노출 제외 (명시 화이트리스트만 복사):
//   - .claude/settings.local.json (사용자 PC 정보 — gitignore)
//   - .env, dist*, node_modules, src/, routes/, server.js, package.json 등 본 저장소 소스
//
// HIRO 리포: https://github.com/mts8787-droid/HIRO

import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const ROOT = path.resolve(path.dirname(__filename), '..')

const HIRO_REPO = 'https://github.com/mts8787-droid/HIRO.git'
const HIRO_BRANCH = 'main'
const HIRO_DIR = path.join(ROOT, '..', 'HIRO-mirror')

// 화이트리스트 — 명시 안 된 것은 HIRO 리포에 안 들어감.
// 2벌 구성: (1) 실제 작동 .claude/ + 헌법 (Claude/Codex 자동 로드) (2) harness-mirror/ 사람용 미러
const INCLUDE = [
  // (1) 실제 작동
  'CLAUDE.md',
  'AGENTS.md',
  '.claude/settings.json',
  '.claude/rules',
  '.claude/skills',
  '.claude/hooks',
  '.claude/agents',
  // (2) 사람용 미러 + 가이드 HTML (CLAUDE.md / AGENTS.md / .claude/ 1:1 미러 + docs/{HARNESS,CHART_LIBRARY,HUMAN_GUIDE,hooks/*})
  'harness-mirror',
]

function run(cmd, opts = {}) {
  console.log('▶', cmd)
  return execSync(cmd, { stdio: 'inherit', ...opts })
}

function runQ(cmd, opts = {}) {
  return execSync(cmd, { encoding: 'utf8', ...opts }).trim()
}

function tryQ(cmd, opts = {}) {
  try { return runQ(cmd, opts) } catch { return null }
}

function copyRecursive(src, dst) {
  if (!fs.existsSync(src)) return
  const stat = fs.statSync(src)
  if (stat.isDirectory()) {
    fs.mkdirSync(dst, { recursive: true })
    for (const entry of fs.readdirSync(src)) {
      copyRecursive(path.join(src, entry), path.join(dst, entry))
    }
  } else {
    fs.mkdirSync(path.dirname(dst), { recursive: true })
    fs.copyFileSync(src, dst)
  }
}

// 이전 INCLUDE 였다가 제거된 경로 — HIRO 리포 안에서 함께 청소해야 stale 잔재 방지.
// 신규 화이트리스트 (INCLUDE) 로 옮긴 후에도 옛 경로의 파일이 그대로 남기 때문.
const STALE = [
  'docs/agents',
]

function cleanWhitelistedAreas(dir) {
  // HIRO 리포 안의 화이트리스트 영역만 제거 (clean slate). .git 보존.
  for (const inc of [...INCLUDE, ...STALE]) {
    const target = path.join(dir, inc)
    if (fs.existsSync(target)) {
      fs.rmSync(target, { recursive: true, force: true })
    }
  }
}

// ──────────────────────────────────────────────────────────────────
// 1) 본 저장소 push (이미 push 됐으면 no-op)
// ──────────────────────────────────────────────────────────────────
console.log('\n=== STEP 1: 본 저장소 push ===')
const srcBranch = runQ('git rev-parse --abbrev-ref HEAD', { cwd: ROOT })
const dirtyStatus = runQ('git status --porcelain', { cwd: ROOT })
if (dirtyStatus) {
  console.error('[publish-hiro] ⚠ 본 저장소에 uncommitted 변경 있음. 먼저 커밋하세요:')
  console.error(dirtyStatus)
  process.exit(1)
}
try {
  run(`git push origin ${srcBranch}`, { cwd: ROOT })
} catch (e) {
  console.error('[publish-hiro] ⚠ 본 저장소 push 실패 — 계속 진행 (HIRO mirror 만 시도)')
}

// ──────────────────────────────────────────────────────────────────
// 2) HIRO 리포 clone or pull
// ──────────────────────────────────────────────────────────────────
console.log('\n=== STEP 2: HIRO 리포 준비 ===')
if (!fs.existsSync(HIRO_DIR)) {
  console.log(`[publish-hiro] HIRO 리포 clone → ${HIRO_DIR}`)
  try {
    run(`git clone ${HIRO_REPO} "${HIRO_DIR}"`)
  } catch (e) {
    console.log('[publish-hiro] clone 실패 — 빈 리포로 init')
    fs.mkdirSync(HIRO_DIR, { recursive: true })
    run('git init', { cwd: HIRO_DIR })
    run(`git remote add origin ${HIRO_REPO}`, { cwd: HIRO_DIR })
    run(`git checkout -b ${HIRO_BRANCH}`, { cwd: HIRO_DIR })
  }
} else {
  console.log(`[publish-hiro] HIRO 리포 pull → ${HIRO_DIR}`)
  tryQ('git fetch origin', { cwd: HIRO_DIR })
  // 빈 리포는 origin/main 없을 수도 — 무시
  tryQ(`git checkout ${HIRO_BRANCH}`, { cwd: HIRO_DIR }) ||
    tryQ(`git checkout -b ${HIRO_BRANCH}`, { cwd: HIRO_DIR })
  tryQ(`git pull --ff-only origin ${HIRO_BRANCH}`, { cwd: HIRO_DIR })
}

// ──────────────────────────────────────────────────────────────────
// 3) 화이트리스트 영역 clean + 복사
// ──────────────────────────────────────────────────────────────────
console.log('\n=== STEP 3: 화이트리스트 파일 동기 ===')
cleanWhitelistedAreas(HIRO_DIR)
for (const inc of INCLUDE) {
  const src = path.join(ROOT, inc)
  const dst = path.join(HIRO_DIR, inc)
  if (fs.existsSync(src)) {
    copyRecursive(src, dst)
    console.log(`  ✓ ${inc}`)
  } else {
    console.log(`  ⊘ ${inc} (원본 없음, skip)`)
  }
}

// ──────────────────────────────────────────────────────────────────
// 4) HIRO 리포 README 생성 (자동 갱신)
// ──────────────────────────────────────────────────────────────────
const readme = `# 🐈‍⬛ HIRO

**Harness for Interactive Reporting Optimization**

> Built for beginners. Engineered for repetition.

HIRO optimizes how you build interactive dashboards with Claude Code. Instead of crafting data parsers, chart components, and newsletter templates from scratch every time, HIRO ships a reusable harness — **skills, rules, hooks, and scenario-based bootstraps** — that turns the manual workflow into a standardized, repeatable pipeline.

HIRO 는 Claude Code 로 인터랙티브 대시보드를 만드는 작업을 최적화합니다. 데이터 파서, 차트 컴포넌트, 뉴스레터 템플릿을 매번 처음부터 짜는 대신, HIRO 는 재사용 가능한 하네스 — **스킬·룰·훅·시나리오 기반 부트스트랩** — 를 제공해 수작업 워크플로우를 표준화된 반복 가능한 파이프라인으로 바꿉니다.

---

## 본 리포

본 리포는 [\`my-geo-newsletter\`](https://github.com/mts8787-droid/my-geo-newsletter) 의 **sanitized mirror** — \`scripts/publish-hiro.mjs\` 가 화이트리스트 파일만 복사해서 자동 동기화. 본 리포는 직접 수정하지 말고 원본 저장소에서 수정.

## 적용 (다른 프로젝트에 도입)

\`\`\`bash
# 1) 본 리포 통째로 clone
git clone https://github.com/mts8787-droid/HIRO.git

# 2) 대상 프로젝트 루트에 복사 (실제 작동 + 사람용 미러 2벌)
cp -r HIRO/CLAUDE.md HIRO/AGENTS.md HIRO/.claude HIRO/harness-mirror <your-project>/

# 3) Hook 실행 권한
cd <your-project>
chmod +x .claude/hooks/*.sh

# 4) Claude Code 실행 → CLAUDE.md / .claude/* 자동 로드
\`\`\`

\`harness-mirror/\` 는 사람용 설명 사본 — 실제 작동에는 영향 X. 필요 없으면 삭제 가능.

## 구조 (2벌 정리)

### 1) 실제 작동 — Claude / Codex 자동 로드
| 파일/폴더 | 역할 |
|---|---|
| \`CLAUDE.md\` | Claude Code 프로젝트 헌법 (자동 로드) |
| \`AGENTS.md\` | OpenAI Codex / Antigravity 자동 로드 표준 |
| \`.claude/settings.json\` | Hook 등록 (JSON 강제 — 100% 시스템 차단) |
| \`.claude/hooks/*.sh\` | 자동 검사 스크립트 (syntax-check, block-dist, newsletter-guard) |
| \`.claude/rules/*.md\` | Rule 매뉴얼 (data / design / ai / newsletter) + BOOTSTRAP 시나리오 |
| \`.claude/skills/<name>/SKILL.md\` | 작업 매뉴얼 (data-add / design-chart / newsletter-make 등) |
| \`.claude/agents/*.md\` | Sub-Agent (read-only 진단 전담 등) |

### 2) 사람용 미러 — \`harness-mirror/\`
| 파일/폴더 | 역할 |
|---|---|
| \`harness-mirror/CLAUDE.md\` · \`AGENTS.md\` | 루트 헌법 1:1 미러 |
| \`harness-mirror/.claude/\` | 실제 \`.claude/\` 1:1 미러 (그대로 다른 프로젝트에 사용 가능) |
| \`harness-mirror/docs/HARNESS.{md,html}\` | 전체 하네스 설명 (브라우저 더블클릭으로 열림) |
| \`harness-mirror/docs/CHART_LIBRARY.html\` | 차트 분류 카탈로그 정적 스냅샷 |
| \`harness-mirror/docs/HUMAN_GUIDE.md\` | 사람 사용 설명서 (hand-edited) |
| \`harness-mirror/docs/hooks/{data,design}.md\` | Hook 의 영역별 영향 설명 |

## 라이브 뷰

본 저장소 운영 인스턴스의 \`/hiro\` 페이지에서 인증 없이 열람 가능 (외부 게시).

---

🐈‍⬛ *히로 — 본 하네스의 마스코트 검은 고양이. 부트스트랩 시나리오 같은 대화형 작업에서 친근한 안내자로 말을 건넵니다.*
`
fs.writeFileSync(path.join(HIRO_DIR, 'README.md'), readme, 'utf8')

// ──────────────────────────────────────────────────────────────────
// 5) commit + push
// ──────────────────────────────────────────────────────────────────
console.log('\n=== STEP 4: HIRO 리포 commit + push ===')
const srcHash = runQ('git rev-parse --short HEAD', { cwd: ROOT })
const srcMsg = runQ('git log -1 --pretty=%s', { cwd: ROOT })
const date = new Date().toISOString().slice(0, 10)

run('git add -A', { cwd: HIRO_DIR })
const hiroDiff = runQ('git status --porcelain', { cwd: HIRO_DIR })
if (!hiroDiff) {
  console.log('[publish-hiro] 변경 없음 — push 생략')
  console.log('\n✓ HIRO 리포 이미 최신 상태')
  process.exit(0)
}

const commitMsg = `chore(mirror): sync from my-geo-newsletter@${srcHash} (${date})

본 리포 출처: https://github.com/mts8787-droid/my-geo-newsletter
원본 마지막 커밋: ${srcMsg} (${srcHash})

자동 동기화 by scripts/publish-hiro.mjs
`
const tmpMsg = path.join(ROOT, '.hiro-commit-msg.tmp')
fs.writeFileSync(tmpMsg, commitMsg, 'utf8')
run(`git commit -F "${tmpMsg}"`, { cwd: HIRO_DIR })
fs.unlinkSync(tmpMsg)

// upstream 없으면 -u, 있으면 그냥 push
const hasUpstream = tryQ('git rev-parse --abbrev-ref --symbolic-full-name @{u}', { cwd: HIRO_DIR })
try {
  if (hasUpstream) {
    run(`git push origin ${HIRO_BRANCH}`, { cwd: HIRO_DIR })
  } else {
    run(`git push -u origin ${HIRO_BRANCH}`, { cwd: HIRO_DIR })
  }
} catch (e) {
  console.error('\n[publish-hiro] ⚠ HIRO 리포 push 실패 — git credential 확인')
  console.error('  HTTPS auth 필요: ~/.netrc 또는 git credential helper / GITHUB_TOKEN 환경 변수')
  process.exit(1)
}

console.log('\n✓ 두 리포 동시 push 완료')
console.log(`  본 저장소: my-geo-newsletter@${srcHash}`)
console.log(`  HIRO 미러: ${HIRO_REPO}`)
