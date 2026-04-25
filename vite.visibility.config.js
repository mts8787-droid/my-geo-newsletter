import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import { appVersion, serveFontsPlugin, serveHtmlPlugin, gsheetsProxy, apiProxy, manualChunks } from './vite.shared.js'

const __dirname = dirname(fileURLToPath(import.meta.url))

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
      output: { manualChunks },
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
