import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import { appVersion, serveFontsPlugin, serveHtmlPlugin, gsheetsProxy, apiProxy, manualChunks } from './vite.shared.js'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  base: '/admin/monthly-report/',
  define: {
    __APP_VERSION__: JSON.stringify(appVersion),
  },
  plugins: [serveHtmlPlugin('monthly-report', '/admin/monthly-report/', 'monthly-report.html'), serveFontsPlugin(), react()],
  build: {
    outDir: 'dist-monthly-report',
    emptyOutDir: true,
    rollupOptions: {
      input: resolve(__dirname, 'monthly-report.html'),
      output: { manualChunks },
    },
  },
  server: {
    port: 5179,
    proxy: {
      ...gsheetsProxy,
      ...apiProxy,
    },
  },
})
