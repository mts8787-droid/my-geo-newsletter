import express from 'express'
import rateLimit from 'express-rate-limit'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import { existsSync } from 'fs'
import dotenv from 'dotenv'

// C11 step1·2 — 헬퍼들을 lib/ 모듈로 분리
import { DATA_DIR, SNAP_FILE, readSnapshots } from './lib/storage.js'
import { ADMIN_PASSWORD, activeSessions, getSessionToken } from './lib/auth.js'
import { logger, logFor } from './lib/logger.js'

const log = logFor('server')

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
import { observabilityRouter } from './routes/observability.js'
import { bridgeRouter } from './routes/bridge.js'
import { landingRouter } from './routes/landing.js'

dotenv.config()

const __dirname = dirname(fileURLToPath(import.meta.url))
const app = express()
const PORT = Number(process.env.PORT) || 3000

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

// ─── JSON body parser (SEC10 라우트별 크기 차등) ────────────────────────────
// publish/snapshots/sync는 큰 HTML/구조화 데이터를 받으므로 50mb 허용
// 그 외 API는 1mb로 제한해 DOS 표면적 축소
const LARGE_JSON_PATHS = [
  /^\/api\/publish/,           // /api/publish, /api/publish-dashboard 등 모두
  /^\/api\/[^/]+\/snapshots/,  // /api/:mode/snapshots
  /^\/api\/snapshots/,         // legacy
  /^\/api\/[^/]+\/sync-data/,  // /api/:mode/sync-data
  /^\/api\/sync-data/,         // legacy
  /^\/api\/generate-insight/,  // 큰 데이터 컨텍스트
  /^\/api\/send-email/,        // HTML body
  /^\/api\/archives/,          // 인사이트 본문
]
const largeJson = express.json({ limit: '50mb' })
const smallJson = express.json({ limit: '1mb' })
app.use((req, res, next) => {
  const useLarge = LARGE_JSON_PATHS.some(re => re.test(req.path))
  return (useLarge ? largeJson : smallJson)(req, res, next)
})

// /admin/login HTML + /api/auth/login·logout는 routes/auth-api.js로 분리됨

// ─── SEC4 Rate Limit (전역 + 민감 경로 추가 강화) ────────────────────────
// 일반 API: 1분당 300회 (정상 PIC 사용 기준 충분, 봇/크롤러 차단)
const apiLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 300,
  standardHeaders: true,
  legacyHeaders: false,
  message: { ok: false, error: '요청이 너무 많습니다. 잠시 후 재시도하세요.' },
})
// 비싼 경로(LLM 호출·게시·시트 ETL): 1분당 30회
const expensiveLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 30,
  standardHeaders: true,
  legacyHeaders: false,
  message: { ok: false, error: '비용 높은 작업의 호출 한도를 초과했습니다.' },
})

app.use('/api/', apiLimiter)
app.use('/api/generate-insight', expensiveLimiter)
app.use('/api/translate', expensiveLimiter)
app.use('/api/publish', expensiveLimiter)
app.use('/api/publish-dashboard', expensiveLimiter)
app.use('/api/publish-citation', expensiveLimiter)
app.use('/api/publish-monthly-report', expensiveLimiter)
app.use('/api/publish-visibility', expensiveLimiter)
app.use('/api/publish-tracker', expensiveLimiter)
app.use('/api/send-email', expensiveLimiter)
app.use('/api/gsheet-export', expensiveLimiter)
// 로그인 자체는 routes/auth-api.js의 자체 rate-limiter(5회/15분)가 처리

// ─── Auth Middleware ─────────────────────────────────────────────────────────
app.use((req, res, next) => {
  if (req.path.startsWith('/p/') || req.path === '/') return next()
  if (req.path === '/admin/login') return next()
  if (req.path.startsWith('/api/auth/')) return next()
  if (req.path === '/api/tracker-snapshot-v2') return next()
  if (req.path.startsWith('/admin/progress-tracker/assets/')) return next()
  if (req.path.startsWith('/admin') || req.path.startsWith('/api/')) {
    const token = getSessionToken(req)
    if (!token || !activeSessions.has(token)) {
      if (req.path.startsWith('/api/')) return res.status(401).json({ ok: false, error: 'Unauthorized' })
      return res.redirect('/admin/login')
    }
    // CSRF protection (SEC5): state-changing API requests는 다음 중 하나 이상이 검증되어야 함
    // 1) X-Requested-With 헤더 (XHR/fetch만 보낼 수 있음, <form>은 못 보냄)
    // 2) Origin 또는 Referer가 본 사이트 호스트와 일치
    if (req.path.startsWith('/api/') && ['POST', 'PUT', 'DELETE'].includes(req.method)) {
      const isJson = req.headers['content-type']?.includes('application/json')
      if (isJson) {
        const xrw = !!req.headers['x-requested-with']
        const origin = req.headers.origin || ''
        const referer = req.headers.referer || ''
        const expectedHost = req.headers.host
        const fromSelf = (origin && origin.endsWith(`//${expectedHost}`)) ||
                        (referer && referer.includes(`//${expectedHost}/`))
        if (!xrw && !fromSelf) {
          return res.status(403).json({ ok: false, error: 'CSRF 검증 실패' })
        }
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
app.use(observabilityRouter)
app.use(bridgeRouter)
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
  log.error({ err: err.message, path: req.path, method: req.method }, 'unhandled')
  res.status(500).json({ ok: false, error: '서버 내부 오류' })
})

app.listen(PORT, '0.0.0.0', () => {
  let snapCount = 0
  try { snapCount = readSnapshots().length } catch {}
  log.info({
    port: PORT,
    dataDir: DATA_DIR,
    snapFile: SNAP_FILE,
    snapFileExists: existsSync(SNAP_FILE),
    snapshotsCount: snapCount,
  }, 'server started')
  if (ADMIN_PASSWORD === 'changeme') log.warn('default ADMIN_PASSWORD detected — set env var')
})
