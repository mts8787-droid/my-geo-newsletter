import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import { appVersion, serveFontsPlugin, gsheetsProxy } from './vite.shared.js'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  base: '/admin/progress-tracker-v2/',
  define: {
    __APP_VERSION__: JSON.stringify(appVersion),
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
    },
  },
  server: {
    port: 5180,
    proxy: {
      ...gsheetsProxy,
    },
  },
})
