import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { appVersion, serveFontsPlugin, serveHtmlPlugin, gsheetsProxy, apiProxy } from './vite.shared.js'

export default defineConfig({
  base: '/admin/visibility/',
  define: {
    __APP_VERSION__: JSON.stringify(appVersion),
  },
  plugins: [serveHtmlPlugin('visibility', '/admin/visibility/', 'visibility.html'), serveFontsPlugin(), react()],
  build: {
    outDir: 'dist-visibility',
    emptyOutDir: true,
    rollupOptions: {
      input: resolve(__dirname, 'visibility.html'),
    },
  },
  server: {
    port: 5178,
    proxy: {
      ...gsheetsProxy,
      ...apiProxy,
    },
  },
})
