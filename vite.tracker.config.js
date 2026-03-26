import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import { appVersion, serveFontsPlugin, gsheetsProxy } from './vite.shared.js'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  base: '/admin/progress-tracker/',
  define: {
    __APP_VERSION__: JSON.stringify(appVersion),
  },
  plugins: [
    react(),
    serveFontsPlugin(),
    {
      name: 'serve-tracker-html',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === '/' || req.url === '') {
            res.writeHead(302, { Location: '/admin/progress-tracker/' })
            res.end()
            return
          }
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
      ...gsheetsProxy,
    },
  },
})
