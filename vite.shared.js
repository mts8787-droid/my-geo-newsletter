// ─── Vite 공통 플러그인 및 설정 ──────────────────────────────────────────────
import { resolve } from 'path'
import { readFileSync, existsSync, createReadStream } from 'fs'

// ─── 앱 버전 (package.json) ─────────────────────────────────────────────────
const pkg = JSON.parse(readFileSync('./package.json', 'utf-8'))
export const appVersion = pkg.version || '0.0.0'

// ─── 공통 플러그인: /font 정적 서빙 ─────────────────────────────────────────
export function serveFontsPlugin() {
  return {
    name: 'serve-fonts',
    configureServer(server) {
      server.middlewares.use('/font', (req, res, next) => {
        const fontDir = resolve('font')
        const file = resolve('font', decodeURIComponent(req.url).replace(/^\//, '').split('?')[0])
        if (!file.startsWith(fontDir)) return res.writeHead(403).end('Forbidden')
        if (!existsSync(file)) return next()
        const ext = file.toLowerCase().split('.').pop()
        const mime = ext === 'otf' ? 'font/otf' : ext === 'woff2' ? 'font/woff2' : ext === 'woff' ? 'font/woff' : 'font/ttf'
        res.setHeader('Content-Type', mime)
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

// ─── C17 코드 스플릿: 큰 라이브러리를 별도 청크로 분리 ──────────────────────
// 사용처: vite.config.js 등에서 build.rollupOptions.output.manualChunks 로 전달
export function manualChunks(id) {
  if (!id.includes('node_modules')) return undefined
  if (id.includes('xlsx-js-style') || id.includes('xlsx')) return 'xlsx'
  if (id.includes('recharts') || id.includes('d3-')) return 'recharts'
  if (id.includes('react-dom')) return 'react-dom'
  if (id.includes('react/') || id.includes('react@') || /node_modules\/react\//.test(id)) return 'react'
  if (id.includes('lucide-react')) return 'icons'
  return undefined
}
