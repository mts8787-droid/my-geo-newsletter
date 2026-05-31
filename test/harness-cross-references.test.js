// HIRO 하네스의 cross-reference 무결성 검증.
// Skill / Rule / 헌법 파일이 참조하는 .claude/* / harness-mirror/* / src/* / routes/* / lib/* / docs/*
// 경로가 실제 존재하는지 검사. broken link 1건이라도 있으면 npm test 실패.
//
// 이식 테스트 (2026-05-31) 에서 자동 검출 도구로 진행 → 영구 테스트로 통합.

import { describe, it, expect } from 'vitest'
import fs from 'fs'
import path from 'path'

const REPO_ROOT = process.cwd()

// 검증 제외 경로 (의도된 미구현 / 외부 / 예시 placeholder)
const ALLOWED_MISSING = new Set([
  '.claude/CLAUDE.md',             // ~/.claude/CLAUDE.md (사용자 글로벌 — 본 프로젝트 외부)
  '.claude/skills/ai/SKILL.md',    // HIRO_REFERENCE.md 의 '향후 미구현' 명시
  'src/design/tokens.js',          // BOOTSTRAP STEP 4 '예시' 경로
  'src/styles/consts.js',          // BOOTSTRAP STEP 4 '예시' 경로
])

function collectMarkdownSources() {
  const sources = []
  function walk(dir) {
    if (!fs.existsSync(dir)) return
    fs.readdirSync(dir).forEach(name => {
      const p = path.join(dir, name)
      const st = fs.statSync(p)
      if (st.isDirectory()) walk(p)
      else if (name.endsWith('.md')) sources.push(p)
    })
  }
  walk('.claude/skills')
  walk('.claude/rules')
  sources.push('CLAUDE.md')
  sources.push('AGENTS.md')
  return sources
}

function extractReferences(content) {
  const refs = new Set()
  // 두 가지 패턴:
  //   1. backtick 안의 경로: `path/to/file.ext`
  //   2. 일반 텍스트의 경로: path/to/file.ext (단어 경계)
  // jsx / json / html / md / sh / js 순서 (alternation 우선순위 — jsx 먼저)
  const re1 = /`([^`]*\.(jsx|json|html|md|sh|js))`/g
  const re2 = /((?:\.claude|harness-mirror|docs|src|routes|lib)\/[\w\-\/.]+?\.(jsx|json|html|md|sh|js))(?![\w.])/g
  for (const m of content.matchAll(re1)) refs.add(m[1])
  for (const m of content.matchAll(re2)) refs.add(m[1])
  return refs
}

function isProjectRef(ref) {
  return /^(\.claude|harness-mirror|docs|src|routes|lib)\//.test(ref)
}

function isPlaceholder(ref) {
  return /[<>{*]/.test(ref) || ref.includes('...')
}

describe('HIRO 하네스 cross-reference 무결성', () => {
  const sources = collectMarkdownSources()
  const broken = []

  sources.forEach(src => {
    const content = fs.readFileSync(path.join(REPO_ROOT, src), 'utf8')
    const refs = extractReferences(content)
    refs.forEach(ref => {
      ref = ref.replace(/^\.\//, '')
      if (!isProjectRef(ref)) return
      if (isPlaceholder(ref)) return
      if (ALLOWED_MISSING.has(ref)) return
      if (!fs.existsSync(path.join(REPO_ROOT, ref))) {
        broken.push({ src, ref })
      }
    })
  })

  it(`전체 하네스 파일의 참조 경로 (.claude/* / harness-mirror/* / src/* 등) 모두 존재`, () => {
    if (broken.length > 0) {
      const msg = broken.map(b => `  · ${b.src} → ${b.ref}`).join('\n')
      throw new Error(`broken link ${broken.length}건:\n${msg}\n\n` +
        `의도된 미구현/예시면 test/harness-cross-references.test.js 의 ALLOWED_MISSING 에 추가.`)
    }
    expect(broken).toEqual([])
  })

  it(`검증 대상 ${sources.length} 파일 중 본 저장소 참조 패턴 모두 검사`, () => {
    expect(sources.length).toBeGreaterThanOrEqual(10)
  })
})
