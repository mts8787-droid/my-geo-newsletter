// 대시보드 계열 소스 수집 — 진입점에서 시작해 로컬 import 그래프를 따라가며
// 도달 가능한 모든 로컬 소스 파일을 모은다(= repo 나머지에 대한 의존 없이 자립).
// 외부(npm) import 는 package.json deps 로, node 빌트인은 참고용으로 분리 수집.
// 손으로 파일 목록을 관리하지 않으므로 진입점만 맞으면 항상 정확한 self-contained 세트.
import fs from 'fs'
import path from 'path'

const NODE_BUILTINS = new Set([
  'fs', 'path', 'url', 'os', 'crypto', 'http', 'https', 'stream', 'util',
  'events', 'child_process', 'zlib', 'buffer', 'assert', 'process',
])

// import/export ... from '<spec>' + dynamic import('<spec>') 추출 (문자열/주석 오탐은 무시해도 무해).
function extractSpecifiers(code) {
  const specs = new Set()
  const re = /(?:import|export)\s[^;]*?\sfrom\s*['"]([^'"]+)['"]|import\s*\(\s*['"]([^'"]+)['"]\s*\)|require\s*\(\s*['"]([^'"]+)['"]\s*\)|import\s*['"]([^'"]+)['"]/g
  let m
  while ((m = re.exec(code))) specs.add(m[1] || m[2] || m[3] || m[4])
  return [...specs]
}

// 확장자 없는 상대경로 → 실제 파일로 해석 (.js/.jsx/.mjs/.ts, /index.*)
const TRY_EXT = ['', '.js', '.jsx', '.mjs', '.ts', '.tsx', '.json', '.css']
function resolveLocal(fromAbs, spec, root) {
  const base = path.resolve(path.dirname(fromAbs), spec)
  for (const ext of TRY_EXT) {
    const p = base + ext
    if (fs.existsSync(p) && fs.statSync(p).isFile()) return p
  }
  for (const ext of TRY_EXT.filter(Boolean)) {
    const p = path.join(base, 'index' + ext)
    if (fs.existsSync(p) && fs.statSync(p).isFile()) return p
  }
  return null
}

function pkgName(spec) {
  if (spec.startsWith('@')) return spec.split('/').slice(0, 2).join('/')
  return spec.split('/')[0]
}

// entries: repo-relative 경로 배열. root: repo 루트 절대경로.
// 반환: { files:[rel...], npmDeps:Set, builtins:Set, missing:[{from,spec}] }
export function collectDashboardSources(entries, root) {
  const seen = new Set()      // 절대경로
  const files = []            // repo-relative, 결정적 순서
  const npmDeps = new Set()
  const builtins = new Set()
  const missing = []
  const queue = []

  for (const e of entries) {
    const abs = path.resolve(root, e)
    if (fs.existsSync(abs)) queue.push(abs)
    else missing.push({ from: '(entry)', spec: e })
  }

  while (queue.length) {
    const abs = queue.shift()
    if (seen.has(abs)) continue
    seen.add(abs)
    files.push(path.relative(root, abs))
    if (/\.(css|json)$/.test(abs)) continue  // 리프 — import 파싱 안 함
    let code
    try { code = fs.readFileSync(abs, 'utf8') } catch { continue }
    for (const spec of extractSpecifiers(code)) {
      if (spec.startsWith('.') || spec.startsWith('/')) {
        const target = resolveLocal(abs, spec, root)
        if (target) { if (!seen.has(target)) queue.push(target) }
        else missing.push({ from: path.relative(root, abs), spec })
      } else if (NODE_BUILTINS.has(pkgName(spec)) || spec.startsWith('node:')) {
        builtins.add(spec.replace(/^node:/, ''))
      } else {
        npmDeps.add(pkgName(spec))
      }
    }
  }

  files.sort()
  return { files, npmDeps: [...npmDeps].sort(), builtins: [...builtins].sort(), missing }
}

// 테스트/제외 대상 파일 필터 (*.test.js 는 번들 제외).
export function isBundleworthy(rel) {
  return !/\.test\.(js|jsx|mjs|ts)$/.test(rel)
}
