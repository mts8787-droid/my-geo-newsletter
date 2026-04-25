// ─── Admin SPA 정적 서빙 — /admin/{newsletter|dashboard|...} ──────────────
import { Router } from 'express'
import express from 'express'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const PROJECT_ROOT = join(__dirname, '..')

// 7개 SPA: 경로 → dist 디렉터리 / 진입 HTML
const SPAS = [
  { path: '/admin/newsletter',       dir: 'dist',                  html: 'index.html' },
  { path: '/admin/dashboard',        dir: 'dist-dashboard',        html: 'dashboard.html' },
  { path: '/admin/monthly-report',   dir: 'dist-monthly-report',   html: 'monthly-report.html' },
  { path: '/admin/weekly-report',    dir: 'dist-weekly-report',    html: 'weekly-report.html' },
  { path: '/admin/citation',         dir: 'dist-citation',         html: 'citation.html' },
  { path: '/admin/visibility',       dir: 'dist-visibility',       html: 'visibility.html' },
  { path: '/admin/progress-tracker', dir: 'dist-tracker',          html: 'tracker.html' },
]

export const spaStaticRouter = Router()

// /font 정적 서빙 (모든 SPA가 공유)
spaStaticRouter.use('/font', express.static(join(PROJECT_ROOT, 'font'), { maxAge: '1y', immutable: true }))

for (const spa of SPAS) {
  const distDir = join(PROJECT_ROOT, spa.dir)
  const entry = join(distDir, spa.html)
  spaStaticRouter.use(spa.path, express.static(distDir))
  spaStaticRouter.get(spa.path, (req, res) => res.sendFile(entry))
  spaStaticRouter.get(spa.path + '/*', (req, res) => res.sendFile(entry))
}
