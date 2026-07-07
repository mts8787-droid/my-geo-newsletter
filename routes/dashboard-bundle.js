// 대시보드 계열 소스 번들 다운로드 — /admin/dashboards + /api/dashboards/zip
// 진입점에서 로컬 import 그래프를 따라가 self-contained 소스 세트를 ZIP 으로 묶는다
// (repo 나머지에 의존 없이 분리 = "디팬던시 없이 따로"). 외부 npm 은 생성 package.json 에 선언.
// ZIP 생성 시점에 실제 파일을 읽으므로 항상 최신 — 별도 동기화 단계 없음.
import { Router } from 'express'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import JSZip from 'jszip'
import { collectDashboardSources, isBundleworthy } from '../lib/collectDashboardSources.mjs'
import { themeStyle, themeToggleButton } from '../lib/theme.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..')

// 대시보드 계열 진입점 — 서버 렌더 생성기 + React SPA. 여기서 도달 가능한 로컬 파일 전부 수집.
const ENTRIES = [
  'scripts/render-readability.mjs',   // Readability 대시보드 (서버 렌더 HTML)
  'routes/readability.js',            //   + 라우트/데이터 서빙
  'src/dashboard/dashboardTemplate.js', // 메인 GEO KPI 대시보드 (서버 렌더)
  'src/dashboard/main.jsx',           //   + 어드민 SPA
  'src/citation/citationTemplate.js', // Citation (Bump Chart)
  'src/citation/main.jsx',
  'src/visibility/main.jsx',          // Visibility SPA
  'src/tracker-v2/main.jsx',          // Progress Tracker SPA
]

function repoDepVersions() {
  try {
    const p = JSON.parse(fs.readFileSync(path.join(ROOT, 'package.json'), 'utf8'))
    return { ...(p.dependencies || {}), ...(p.devDependencies || {}) }
  } catch { return {} }
}

function buildBundle() {
  const res = collectDashboardSources(ENTRIES, ROOT)
  const files = res.files.filter(isBundleworthy)
  const versions = repoDepVersions()
  const dependencies = {}
  for (const d of res.npmDeps) dependencies[d] = versions[d] || '*'
  return { files, dependencies, builtins: res.builtins, npmDeps: res.npmDeps, missing: res.missing }
}

function makePackageJson(dependencies) {
  return JSON.stringify({
    name: 'geo-dashboards-bundle',
    version: '0.0.0',
    private: true,
    type: 'module',
    description: 'HIRO 대시보드 계열 소스 번들 (진입점 도달 가능 로컬 소스 자립 세트).',
    dependencies,
  }, null, 2) + '\n'
}

function makeReadme({ files, npmDeps, builtins, missing }) {
  const date = new Date().toISOString().slice(0, 10)
  const entryList = ENTRIES.map(e => `- \`${e}\``).join('\n')
  const fileList = files.map(f => `- \`${f}\``).join('\n')
  return `# GEO 대시보드 계열 소스 번들

생성일: ${date} · 파일 ${files.length}개 · 외부 의존 ${npmDeps.length}개

이 ZIP 은 대시보드 계열 코드를 **repo 의 나머지에 의존하지 않고** 분리한 소스 세트입니다.
아래 진입점에서 **로컬 import 그래프를 따라가 도달 가능한 파일만** 담았습니다(orphan/미사용 파일 제외).
그러므로 여기 담긴 로컬 \`import\` 는 모두 번들 내부에서 해결됩니다(= self-contained).

## 진입점 (Entry Points)
${entryList}

## 외부 의존 (npm)
\`package.json\` 의 \`dependencies\` 로 선언됨. 사용하려면:
\`\`\`
npm install
\`\`\`
포함: ${npmDeps.map(d => `\`${d}\``).join(', ') || '(없음)'}
Node 빌트인 사용: ${builtins.map(d => `\`${d}\``).join(', ') || '(없음)'}

## 구성
- **서버 렌더 생성기** (\`src/dashboard/dashboard*.js\`, \`src/citation/citationTemplate.js\`,
  \`scripts/render-readability.mjs\`): 정적 HTML/SVG 문자열을 생성. Node 에서 import 해 호출.
- **React SPA** (\`src/*/main.jsx\`, \`App.jsx\`): 어드민 편집 UI. 빌드에는 Vite + React 필요
  (이 번들엔 vite 설정은 없음 — 각 프로젝트 빌드 도구에 맞춰 진입점 main.jsx 를 연결).
- **공유 모듈** (\`src/categoryMap.js\`, \`src/shared/*\`, \`src/excelUtils.js\` 등): 진입점이
  실제로 import 하는 것만 자동 포함.

## 주의
- 파일 경로는 원 repo 기준 상대경로 그대로(상호 import 유지). 다른 프로젝트에 넣을 땐
  같은 상대 구조로 두거나 import 경로를 조정하세요.
- 서버 라우트(\`routes/readability.js\`)는 Express 앱에 마운트해야 동작합니다.
${missing.length ? `\n## 미해석 import (참고)\n${missing.slice(0, 20).map(m => `- \`${m.spec}\` (from \`${m.from}\`)`).join('\n')}` : ''}
`
}

export const dashboardBundleRouter = Router()

// ZIP 다운로드 — 실제 파일을 읽어 묶음(항상 최신).
dashboardBundleRouter.get('/api/dashboards/zip', async (req, res) => {
  try {
    const bundle = buildBundle()
    const zip = new JSZip()
    for (const rel of bundle.files) {
      const abs = path.join(ROOT, rel)
      if (fs.existsSync(abs)) zip.file(rel, fs.readFileSync(abs))
    }
    zip.file('package.json', makePackageJson(bundle.dependencies))
    zip.file('README.md', makeReadme(bundle))
    const buffer = await zip.generateAsync({ type: 'nodebuffer', compression: 'DEFLATE' })
    const fname = `geo-dashboards-${new Date().toISOString().slice(0, 10)}.zip`
    res.set('Content-Type', 'application/zip')
    res.set('Content-Disposition', `attachment; filename="${fname}"`)
    res.send(buffer)
  } catch (e) {
    res.status(500).json({ ok: false, error: e?.message || String(e) })
  }
})

// 다운로드 페이지 — 매니페스트(파일 목록·의존) + 다운로드 버튼.
dashboardBundleRouter.get('/admin/dashboards', (req, res) => {
  const b = buildBundle()
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  const rows = b.files.map(f => `<li><code>${esc(f)}</code></li>`).join('')
  const deps = Object.entries(b.dependencies).map(([k, v]) => `<code>${esc(k)}@${esc(v)}</code>`).join(' · ') || '(없음)'
  res.set('Content-Type', 'text/html; charset=utf-8')
  res.send(`<!DOCTYPE html><html lang="ko"><head><meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>대시보드 소스 번들 다운로드</title>
<style>${themeStyle()}
body{font-family:system-ui,-apple-system,'LG Smart',sans-serif;max-width:1000px;margin:0 auto;padding:32px 28px;line-height:1.6}
h1{font-size:24px;display:flex;align-items:center;gap:8px}
h1::before{content:'';width:5px;height:24px;background:#CF0652;border-radius:4px}
.meta{color:#64748B;font-size:14px;margin-bottom:20px}
.dl{display:inline-block;background:#CF0652;color:#fff;text-decoration:none;font-weight:700;padding:12px 24px;border-radius:10px;font-size:15px}
.dl:hover{opacity:.9}
.box{background:#F8FAFC;border:1px solid #E8EDF2;border-radius:12px;padding:16px 20px;margin:16px 0}
.box h2{font-size:15px;margin:0 0 8px}
code{background:rgba(15,23,42,.06);padding:1px 6px;border-radius:5px;font-size:12.5px}
ul{columns:2;font-size:12.5px;color:#475569}
li{margin:2px 0}
a.back{color:#64748B;font-size:14px;text-decoration:none}
</style></head><body>
${themeToggleButton()}
<a class="back" href="/admin/">← 어드민</a>
<h1>대시보드 계열 소스 번들</h1>
<p class="meta">진입점에서 도달 가능한 로컬 소스만 자동 수집 — repo 나머지에 의존 없이 분리. 파일 <strong>${b.files.length}</strong>개 · 외부 npm <strong>${b.npmDeps.length}</strong>개.</p>
<a class="dl" href="/api/dashboards/zip" download>ZIP 다운로드</a>
<div class="box"><h2>외부 의존 (npm — package.json 에 선언)</h2>${deps}</div>
<div class="box"><h2>포함 파일 (${b.files.length})</h2><ul>${rows}</ul></div>
</body></html>`)
})
