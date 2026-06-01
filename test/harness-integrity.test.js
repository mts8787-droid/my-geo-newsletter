// HIRO 하네스 시스템 무결성 검증.
// 1. YAML frontmatter — 16 SKILL.md + agent 파일의 frontmatter 가 valid YAML 인지
// 2. Hook bash syntax — .claude/hooks/*.sh 가 bash 신택스 OK 인지
// 3. 도메인 무관성 — 헌법(CLAUDE.md)·Rule 본문에 본 저장소 가전 도메인 키워드가
//    Reference Example 외부에 박혀있지 않은지

import { describe, it, expect } from 'vitest'
import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'

const REPO_ROOT = process.cwd()

describe('HIRO Skill/Agent frontmatter YAML 무결성', () => {
  const files = []
  function walk(dir) {
    if (!fs.existsSync(dir)) return
    fs.readdirSync(dir).forEach(name => {
      const p = path.join(dir, name)
      const st = fs.statSync(p)
      if (st.isDirectory()) walk(p)
      else if (name.endsWith('.md')) files.push(p)
    })
  }
  walk('.claude/skills')
  walk('.claude/agents')

  files.forEach(f => {
    it(`${f} — frontmatter parse 성공`, () => {
      const content = fs.readFileSync(f, 'utf8')
      const m = content.match(/^---\n([\s\S]*?)\n---/)
      expect(m, `frontmatter 없음`).toBeTruthy()

      const fm = m[1]
      // 필수 필드: name, description
      const hasName = /^name:\s*\S+/m.test(fm)
      const hasDescription = /^description:\s*['"]/m.test(fm)
      expect(hasName, `name 필드 없음`).toBe(true)
      expect(hasDescription, `description 필드 없음 (single-quoted YAML)`).toBe(true)

      // description 이 single-quoted 또는 double-quoted YAML 로 닫혀있는지
      const descLine = fm.split('\n').find(l => l.startsWith('description:'))
      const value = descLine.replace(/^description:\s*/, '').trim()
      const isQuoted = (value.startsWith("'") && value.endsWith("'")) ||
                       (value.startsWith('"') && value.endsWith('"'))
      expect(isQuoted, `description 이 quote 로 둘러싸이지 않음`).toBe(true)
    })
  })
})

describe('HIRO Hook bash syntax 무결성', () => {
  const hooks = fs.readdirSync('.claude/hooks').filter(n => n.endsWith('.sh'))

  hooks.forEach(name => {
    it(`.claude/hooks/${name} — bash -n 통과`, () => {
      try {
        execSync(`bash -n .claude/hooks/${name}`, { stdio: 'pipe' })
      } catch (e) {
        throw new Error(`bash syntax 오류: ${e.stderr?.toString() || e.message}`)
      }
    })

    it(`.claude/hooks/${name} — 실행 권한 (-rwxr-xr-x)`, () => {
      const stat = fs.statSync(`.claude/hooks/${name}`)
      const mode = stat.mode & 0o777
      expect(mode & 0o100, `소유자 실행 권한 없음 (chmod +x 누락)`).toBeGreaterThan(0)
    })
  })
})

describe('HIRO 헌법(CLAUDE.md) 도메인 무관성', () => {
  // 본 저장소 가전 GEO KPI 도메인 특정 키워드가 헌법 본문에 박혀있으면 실패.
  // (이식자가 헌법을 그대로 사용하려면 도메인 무관해야)
  const DOMAIN_KEYWORDS = [
    '가전',     // 가전 산업
    'LG',       // 본 저장소 자사
    'Samsung',  // 본 저장소 비교 대상
    'Whirlpool',
    'STYLER',   // 가전 카테고리
    'PROD_ID',  // 본 저장소 변수명 prefix
    'UL_CODE',  // 본 저장소 외부 코드
  ]

  // 도메인 무관 키워드가 본문에 박힌 위치 검출
  it('CLAUDE.md 본문에 본 저장소 도메인 키워드 박힘 없음', () => {
    const content = fs.readFileSync('CLAUDE.md', 'utf8')
    // PROJECT_REF / HIRO_REFERENCE / For Adopters 같은 분리된 영역은 본문 아님
    // 헌법 = '## 하네스 4 개념' ~ '## 작업 흐름' 사이
    const lines = content.split('\n')
    const found = []
    lines.forEach((line, i) => {
      DOMAIN_KEYWORDS.forEach(kw => {
        if (line.includes(kw)) {
          // 줄 자체에 'PROJECT_REF' / 'HIRO_REFERENCE' / 'For Adopters' 참조 형태면 OK
          if (/PROJECT_REF|HIRO_REFERENCE|For Adopters|이식자/.test(line)) return
          found.push(`라인 ${i + 1}: "${line.trim().slice(0, 80)}..." (키워드: ${kw})`)
        }
      })
    })
    if (found.length > 0) {
      throw new Error(
        `헌법(CLAUDE.md) 에 본 저장소 도메인 키워드 박힘 ${found.length}건:\n` +
        found.join('\n') +
        '\n\n→ PROJECT_REF.md / HIRO_REFERENCE.md 로 이동 권장 (헌법 본문은 도메인 무관 유지)'
      )
    }
    expect(found).toEqual([])
  })

  it('AGENTS.md 본문에 본 저장소 도메인 키워드 박힘 없음', () => {
    const content = fs.readFileSync('AGENTS.md', 'utf8')
    const lines = content.split('\n')
    const found = []
    lines.forEach((line, i) => {
      DOMAIN_KEYWORDS.forEach(kw => {
        if (line.includes(kw)) {
          if (/PROJECT_REF|HIRO_REFERENCE|For Adopters|이식자/.test(line)) return
          found.push(`라인 ${i + 1}: "${line.trim().slice(0, 80)}..." (키워드: ${kw})`)
        }
      })
    })
    if (found.length > 0) {
      throw new Error(
        `AGENTS.md 에 본 저장소 도메인 키워드 박힘 ${found.length}건:\n` +
        found.join('\n')
      )
    }
    expect(found).toEqual([])
  })
})

describe('HIRO 이식 ZIP 구조 — 화이트리스트 외 파일 제외', () => {
  // routes/harness.js 의 ZIP 생성 라우트가 settings.local.json 등을 제외하는지
  // 정적 검증 — 실제 ZIP 다운로드 + unzip 까지는 부담이라 코드 검증으로 대체
  it('routes/harness.js 의 ZIP 생성 라우트가 settings.local.json 제외', () => {
    const content = fs.readFileSync('routes/harness.js', 'utf8')
    expect(content).toMatch(/skip:\s*\[[^\]]*settings\.local\.json/)
  })

  it('publish-hiro 스크립트가 settings.local.json 격리', () => {
    const content = fs.readFileSync('scripts/publish-hiro.mjs', 'utf8')
    // 화이트리스트 방식 — settings.local.json 은 INCLUDE 에 없어야
    expect(content).not.toMatch(/INCLUDE\s*=[\s\S]*settings\.local\.json/)
  })

  it('sync-harness 가 settings.local.json 미러 제외', () => {
    const content = fs.readFileSync('scripts/sync-harness.mjs', 'utf8')
    expect(content).toMatch(/skip:\s*\[[^\]]*settings\.local\.json/)
  })
})
