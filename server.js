import express from 'express'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import { existsSync } from 'fs'
import dotenv from 'dotenv'

// C11 step1·2 — 헬퍼들을 lib/ 모듈로 분리
import { DATA_DIR, SNAP_FILE, readSnapshots } from './lib/storage.js'
import { ADMIN_PASSWORD, activeSessions, getSessionToken } from './lib/auth.js'

// C11 step3 — 라우트 모듈
import { snapshotsRouter } from './routes/snapshots.js'
import { syncRouter } from './routes/sync.js'
import { insightRouter } from './routes/insight.js'
import { emailRouter } from './routes/email.js'
import { translateRouter } from './routes/translate.js'
import { ipRouter } from './routes/ip-allowlist.js'
import { aiSettingsRouter } from './routes/ai-settings.js'
import { archivesRouter } from './routes/archives.js'
import { publishRouter } from './routes/publish.js'
import { proxyRouter } from './routes/proxy.js'
import { authRouter } from './routes/auth-api.js'
import { publishedRouter } from './routes/published.js'
import { spaStaticRouter } from './routes/spa-static.js'
import { adminPagesRouter } from './routes/admin-pages.js'
import { landingRouter } from './routes/landing.js'

dotenv.config()

const __dirname = dirname(fileURLToPath(import.meta.url))
const app = express()
const PORT = process.env.PORT || 3000

app.set('trust proxy', 1)  // trust only the first proxy (Render load balancer)

// 헬퍼·storage·auth·sanitize·lock·insight-runs 는 lib/ 에서 import (C11 step1·2)
// 글로벌 SNAP_FILE / SYNC_FILE 은 storage 모듈에서 export됨

// ─── Security Headers ────────────────────────────────────────────────────────
app.use((req, res, next) => {
  res.set('X-Content-Type-Options', 'nosniff')
  res.set('X-Frame-Options', 'SAMEORIGIN')
  res.set('X-XSS-Protection', '1; mode=block')
  res.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  if (process.env.NODE_ENV === 'production') {
    res.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains')
  }
  next()
})

// ─── JSON body parser ────────────────────────────────────────────────────────
app.use(express.json({ limit: '50mb' }))

// /admin/login HTML + /api/auth/login·logout는 routes/auth-api.js로 분리됨

// ─── Auth Middleware ─────────────────────────────────────────────────────────
app.use((req, res, next) => {
  if (req.path.startsWith('/p/') || req.path === '/') return next()
  if (req.path === '/admin/login') return next()
  if (req.path.startsWith('/api/auth/')) return next()
  if (req.path === '/api/tracker-snapshot') return next()
  if (req.path.startsWith('/admin/progress-tracker/assets/')) return next()
  if (req.path.startsWith('/admin') || req.path.startsWith('/api/')) {
    const token = getSessionToken(req)
    if (!token || !activeSessions.has(token)) {
      if (req.path.startsWith('/api/')) return res.status(401).json({ ok: false, error: 'Unauthorized' })
      return res.redirect('/admin/login')
    }
    // CSRF protection: state-changing API requests must include X-Requested-With header
    if (req.path.startsWith('/api/') && ['POST', 'PUT', 'DELETE'].includes(req.method)) {
      if (req.headers['content-type']?.includes('application/json') && !req.headers['x-requested-with']) {
        return res.status(403).json({ ok: false, error: 'CSRF 검증 실패' })
      }
    }
  }
  next()
})

// /gsheets-proxy/* + /api/gsheet-export는 routes/proxy.js로 분리됨

// ─── 라우트 모듈 마운트 (C11 step3) ────────────────────────────────────────
app.use(authRouter)
app.use(proxyRouter)
app.use(publishedRouter)
app.use(snapshotsRouter)
app.use(syncRouter)
app.use(insightRouter)
app.use(emailRouter)
app.use(translateRouter)
app.use(ipRouter)
app.use(aiSettingsRouter)
app.use(archivesRouter)
app.use(publishRouter)
app.use(adminPagesRouter)
app.use(spaStaticRouter)
app.use(landingRouter)

// gsheet-export는 routes/proxy.js로 분리됨

// translate · insight · ip · ai-settings 라우트는 모두 routes/ 모듈로 분리됨

// validateMode·publish 라우트는 routes/publish.js로 분리됨
// makeLangBarHtml/injectLangBar/readMetaFile은 publish 모듈 내부로 이동

// /font, /p/*, 게시본 트래커는 routes/published.js + spa-static.js로 분리됨

// 7개 SPA 정적 서빙·root(/) 안내·admin UI 페이지는 모두 routes/ 모듈로 분리됨

// ─── Catch-all: redirect unknown paths to landing page ──────────────────────
app.use((req, res, next) => {
  if (req.method === 'GET' || req.method === 'HEAD') return res.redirect('/')
  next()
})

// ─── Error handler ───────────────────────────────────────────────────────────
app.use((err, req, res, _next) => {
  console.error('[SERVER] Error:', err.message)
  res.status(500).json({ ok: false, error: '서버 내부 오류' })
})

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`)
  console.log(`DATA_DIR = ${DATA_DIR}`)
  console.log(`SNAP_FILE = ${SNAP_FILE}`)
  console.log(`SNAP_FILE exists = ${existsSync(SNAP_FILE)}`)
  if (ADMIN_PASSWORD === 'changeme') console.log('[WARN] Using default admin password. Set ADMIN_PASSWORD env var.')
  try {
    const snaps = readSnapshots()
    console.log(`Snapshots count = ${snaps.length}`)
  } catch (e) { console.log(`Snapshots read error: ${e.message}`) }
})
