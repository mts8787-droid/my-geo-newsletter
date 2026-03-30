import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { appVersion, serveFontsPlugin, serveHtmlPlugin, gsheetsProxy, apiProxy } from './vite.shared.js'

export default defineConfig({
  base: '/admin/citation/',
  define: {
    __APP_VERSION__: JSON.stringify(appVersion),
  },
  plugins: [serveHtmlPlugin('citation', '/admin/citation/', 'citation.html'), serveFontsPlugin(), react()],
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
      ...gsheetsProxy,
      ...apiProxy,
    },
  },
})
