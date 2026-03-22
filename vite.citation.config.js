import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { readFileSync, existsSync, createReadStream } from 'fs'
import { execSync } from 'child_process'

const pkg = JSON.parse(readFileSync('./package.json', 'utf-8'))
const [major, minor] = pkg.version.split('.')
const patch = (() => { try { return execSync('git rev-list --count HEAD', { encoding: 'utf-8' }).trim() } catch { return '0' } })()
const appVersion = `${major}.${minor}.${patch}`

function serveCitationHtml() {
  return {
    name: 'serve-citation-html',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url.split('?')[0]
        if (url === '/admin/citation/' || url === '/admin/citation' ||
            (url.startsWith('/admin/citation/') && !url.includes('.'))) {
          req.url = '/admin/citation/citation.html'
        }
        next()
      })
    },
  }
}

function serveFontsPlugin() {
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

export default defineConfig({
  base: '/admin/citation/',
  define: {
    __APP_VERSION__: JSON.stringify(appVersion),
  },
  plugins: [serveCitationHtml(), serveFontsPlugin(), react()],
  build: {
    outDir: 'dist-citation',
    emptyOutDir: true,
    rollupOptions: {
      input: resolve(__dirname, 'citation.html'),
    },
  },
  server: {
    port: 5177,
    proxy: {
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
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },
})
