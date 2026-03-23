// ─── Vite 공통 플러그인 및 설정 ──────────────────────────────────────────────
import { resolve } from 'path'
import { readFileSync, existsSync, createReadStream } from 'fs'
import { execSync } from 'child_process'

// ─── 앱 버전 (package.json + git commit count) ──────────────────────────────
const pkg = JSON.parse(readFileSync('./package.json', 'utf-8'))
const [major, minor] = pkg.version.split('.')
const patch = (() => { try { return execSync('git rev-list --count HEAD', { encoding: 'utf-8' }).trim() } catch { return '0' } })()
export const appVersion = `${major}.${minor}.${patch}`

// ─── 공통 플러그인: /font 정적 서빙 ─────────────────────────────────────────
export function serveFontsPlugin() {
  return {
    name: 'serve-fonts',
    configureServer(server) {
      server.middlewares.use('/font', (req, res, next) => {
        const file = resolve('font', decodeURIComponent(req.url).replace(/^\//, '').split('?')[0])
        if (!existsSync(file)) return next()
        res.setHeader('Content-Type', 'font/ttf')
        res.setHeader('Cache-Control', 'public, max-age=31536000, immutable')
        createReadStream(file).pipe(res)
      })
    },
  }
}

// ─── 공통 플러그인: SPA HTML 리라이트 팩토리 ─────────────────────────────────
export function serveHtmlPlugin(name, basePath, htmlFile) {
  return {
    name: `serve-${name}-html`,
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url.split('?')[0]
        if (url === basePath || url === basePath.replace(/\/$/, '') ||
            (url.startsWith(basePath) && !url.includes('.'))) {
          req.url = `${basePath}${htmlFile}`
        }
        next()
      })
    },
  }
}

// ─── 공통 Google Sheets 프록시 설정 ─────────────────────────────────────────
export const gsheetsProxy = {
  '/gsheets-proxy': {
    target: 'https://docs.google.com',
    changeOrigin: true,
    secure: true,
    rewrite: path => path.replace(/^\/gsheets-proxy/, ''),
    configure: proxy => {
      proxy.on('proxyRes', proxyRes => {
        delete proxyRes.headers['cache-control']
        delete proxyRes.headers['expires']
        delete proxyRes.headers['etag']
        proxyRes.headers['cache-control'] = 'no-store, no-cache, must-revalidate'
      })
    },
  },
}

// ─── 공통 API 프록시 설정 (dev 서버용) ───────────────────────────────────────
export const apiProxy = {
  '/api': {
    target: 'http://localhost:3000',
    changeOrigin: true,
  },
}
