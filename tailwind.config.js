/** @type {import('tailwindcss').Config} */
// v2 트래커 SPA 전용 — 다른 SPA에 영향 없도록 content를 v2 파일만 스캔.
// 적용은 vite.tracker-v2.config.js의 css.postcss inline 설정으로만.
export default {
  content: [
    './tracker-v2.html',
    './src/tracker-v2/**/*.{js,jsx}',
    './src/shared/**/*.{js,jsx}',
  ],
  theme: { extend: {} },
  plugins: [],
}
