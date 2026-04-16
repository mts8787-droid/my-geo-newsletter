import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import { appVersion, serveFontsPlugin, serveHtmlPlugin, gsheetsProxy, apiProxy } from './vite.shared.js'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  base: '/admin/weekly-report/',
  define: {
    __APP_VERSION__: JSON.stringify(appVersion),
  },
  plugins: [serveHtmlPlugin('weekly-report', '/admin/weekly-report/', 'weekly-report.html'), serveFontsPlugin(), react()],
  build: {
    outDir: 'dist-weekly-report',
    emptyOutDir: true,
    rollupOptions: {
      input: resolve(__dirname, 'weekly-report.html'),
    },
  },
  server: {
    port: 5180,
    proxy: {
      ...gsheetsProxy,
      ...apiProxy,
    },
  },
})
