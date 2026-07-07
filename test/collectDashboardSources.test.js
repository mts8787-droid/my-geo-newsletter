// 대시보드 소스 수집 워커 단위 테스트 — 로컬 import 그래프 추적 / npm·builtin 분리 / 자립성.
import { describe, it, expect } from 'vitest'
import { collectDashboardSources, isBundleworthy } from '../lib/collectDashboardSources.mjs'
import fs from 'fs'
import os from 'os'
import path from 'path'

// 임시 미니 프로젝트를 만들어 워커의 그래프 추적을 격리 검증.
function scaffold(files) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'dash-walk-'))
  for (const [rel, content] of Object.entries(files)) {
    const abs = path.join(root, rel)
    fs.mkdirSync(path.dirname(abs), { recursive: true })
    fs.writeFileSync(abs, content)
  }
  return root
}

describe('collectDashboardSources', () => {
  it('진입점에서 로컬 import 를 재귀 추적하고 npm/builtin 을 분리', () => {
    const root = scaffold({
      'entry.js': "import a from './a.js'\nimport fs from 'fs'\nimport React from 'react'\n",
      'a.js': "export * from './sub/b.jsx'\nimport './styles.css'\n",
      'sub/b.jsx': "import { x } from '@scope/pkg'\nimport c from '../c'\n",  // 확장자 없는 상대
      'c.js': "export const c = 1\n",
      'styles.css': "body{}",
      'orphan.js': "import evil from 'never-imported'\n",  // 도달 불가 → 제외
    })
    const r = collectDashboardSources(['entry.js'], root)
    expect(r.files.sort()).toEqual(['a.js', 'c.js', 'entry.js', 'styles.css', 'sub/b.jsx'])
    expect(r.files).not.toContain('orphan.js')        // orphan 제외
    expect(r.npmDeps).toEqual(['@scope/pkg', 'react']) // scoped pkg 첫 2세그먼트
    expect(r.npmDeps).not.toContain('never-imported')  // orphan 의 dep 미포함
    expect(r.builtins).toEqual(['fs'])
    expect(r.missing).toEqual([])
    fs.rmSync(root, { recursive: true, force: true })
  })

  it('해석 안 되는 로컬 import 는 missing 으로 표면화', () => {
    const root = scaffold({ 'e.js': "import x from './nope.js'\n" })
    const r = collectDashboardSources(['e.js'], root)
    expect(r.missing).toEqual([{ from: 'e.js', spec: './nope.js' }])
    fs.rmSync(root, { recursive: true, force: true })
  })

  it('isBundleworthy 는 *.test.* 제외', () => {
    expect(isBundleworthy('src/x.js')).toBe(true)
    expect(isBundleworthy('src/x.test.js')).toBe(false)
    expect(isBundleworthy('src/x.test.jsx')).toBe(false)
  })
})
