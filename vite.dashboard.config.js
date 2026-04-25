import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import { appVersion, serveFontsPlugin, serveHtmlPlugin, gsheetsProxy, apiProxy, manualChunks } from './vite.shared.js'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  base: '/admin/dashboard/',
  define: {
    __APP_VERSION__: JSON.stringify(appVersion),
  },
  plugins: [serveHtmlPlugin('dashboard', '/admin/dashboard/', 'dashboard.html'), serveFontsPlugin(), react()],
  build: {
    outDir: 'dist-dashboard',
    emptyOutDir: true,
    rollupOptions: {
      input: resolve(__dirname, 'dashboard.html'),
      output: { manualChunks },
    },
  },
  server: {
    port: 5176,
    proxy: {
      ...gsheetsProxy,
      ...apiProxy,
    },
  },
})
