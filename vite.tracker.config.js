import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { existsSync, createReadStream } from 'fs'

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
  base: '/admin/progress-tracker/',
  plugins: [
    react(),
    serveFontsPlugin(),
    {
      name: 'serve-tracker-html',
      configureServer(server) {
        server.middlewares.use((req, _res, next) => {
          if (req.url === '/admin/progress-tracker/' || req.url === '/admin/progress-tracker') {
            req.url = '/tracker.html'
          }
          next()
        })
      },
    },
  ],
  build: {
    outDir: 'dist-tracker',
    emptyOutDir: true,
    rollupOptions: {
      input: resolve(__dirname, 'tracker.html'),
    },
  },
  server: {
    port: 5174,
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
    },
  },
})
