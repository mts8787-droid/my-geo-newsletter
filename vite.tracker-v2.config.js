// Progress Tracker v2 SPA 빌드 — geo-progress-tracker-v2 레포에서 통합
// base: /admin/progress-tracker-v2/ — 어드민 편집용
// 게시본은 /p/progress-tracker-v2/ 로 동일 dist 정적 서빙
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import { appVersion, serveFontsPlugin, gsheetsProxy, manualChunks } from './vite.shared.js'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  base: '/admin/progress-tracker-v2/',
  define: {
    __APP_VERSION__: JSON.stringify(appVersion),
  },
  // tailwind는 본 SPA에만 적용 (다른 SPA 영향 없도록 inline postcss 사용)
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
  plugins: [
    react(),
    serveFontsPlugin(),
    {
      name: 'serve-tracker-v2-html',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === '/' || req.url === '') {
            res.writeHead(302, { Location: '/admin/progress-tracker-v2/' })
            res.end()
            return
          }
          if (req.url === '/admin/progress-tracker-v2/' || req.url === '/admin/progress-tracker-v2') {
            req.url = '/tracker-v2.html'
          }
          next()
        })
      },
    },
  ],
  build: {
    outDir: 'dist-tracker-v2',
    emptyOutDir: true,
    rollupOptions: {
      input: resolve(__dirname, 'tracker-v2.html'),
      output: { manualChunks },
    },
  },
  server: {
    port: 5181,
    proxy: {
      ...gsheetsProxy,
    },
  },
})
