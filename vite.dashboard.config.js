import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { appVersion, serveFontsPlugin, serveHtmlPlugin, gsheetsProxy, apiProxy } from './vite.shared.js'

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
