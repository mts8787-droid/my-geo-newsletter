import express from 'express'
import crypto from 'crypto'
import nodemailer from 'nodemailer'
import translate from 'google-translate-api-x'
import Anthropic from '@anthropic-ai/sdk'
import { buildInsightPrompt } from './src/shared/insightPrompts.js'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync, unlinkSync } from 'fs'
import dotenv from 'dotenv'

dotenv.config()

// ─── HTML Sanitizer (strip <script> tags for published pages) ────────────────
function sanitizeHtml(html) {
  return html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script\s*>/gi, '')
             .replace(/\son\w+\s*=\s*["'][^"']*["']/gi, '')
             .replace(/\son\w+\s*=\s*[^\s>]+/gi, '')
}

const __dirname = dirname(fileURLToPath(import.meta.url))
const app = express()
const PORT = process.env.PORT || 3000

app.set('trust proxy', 1)  // trust only the first proxy (Render load balancer)

// ─── Snapshots file storage ──────────────────────────────────────────────────
const DATA_DIR = process.env.DATA_DIR || join(__dirname, 'data')
const SNAP_FILE = join(DATA_DIR, 'snapshots.json')
const PUB_DIR = join(DATA_DIR, 'published')
if (!existsSync(DATA_DIR)) mkdirSync(DATA_DIR, { recursive: true })
if (!existsSync(PUB_DIR)) mkdirSync(PUB_DIR, { recursive: true })

// ─── Mode-specific file paths (newsletter / dashboard 분리 저장) ─────────────
const NL_SNAP_FILE = join(DATA_DIR, 'newsletter-snapshots.json')
const DB_SNAP_FILE = join(DATA_DIR, 'dashboard-snapshots.json')
const CT_SNAP_FILE = join(DATA_DIR, 'citation-snapshots.json')
const MR_SNAP_FILE = join(DATA_DIR, 'monthly-report-snapshots.json')
const NL_SYNC_FILE = join(DATA_DIR, 'newsletter-sync-data.json')
const DB_SYNC_FILE = join(DATA_DIR, 'dashboard-sync-data.json')
const CT_SYNC_FILE = join(DATA_DIR, 'citation-sync-data.json')
const MR_SYNC_FILE = join(DATA_DIR, 'monthly-report-sync-data.json')

// ─── AI Settings storage ─────────────────────────────────────────────────────
const AI_SETTINGS_FILE = join(DATA_DIR, 'ai-settings.json')
const DEFAULT_AI_SETTINGS = {
  promptRules: `- 제공된 데이터에 있는 수치만 사용할 것 (추가 계산·추정 금지)\n- 리포트에 표시된 제품명, 점수, 경쟁사명을 그대로 인용\n- 존재하지 않는 수치를 만들어내지 말 것\n- 전문적이지만 간결하게 3~5문장\n- 비즈니스 보고서 톤 (한국어 작성 시)`,
  model: 'claude-sonnet-4-20250514',
  maxTokens: 500,
}
function readAiSettings() {
  try { return { ...DEFAULT_AI_SETTINGS, ...JSON.parse(readFileSync(AI_SETTINGS_FILE, 'utf-8')) } } catch { return { ...DEFAULT_AI_SETTINGS } }
}
function writeAiSettings(settings) {
  writeFileSync(AI_SETTINGS_FILE, JSON.stringify(settings, null, 2))
}

// ─── Archives storage (AI 학습 데이터) ───────────────────────────────────────
const ARCHIVES_FILE = join(DATA_DIR, 'archives.json')
function readArchives() {
  try {
    const data = JSON.parse(readFileSync(ARCHIVES_FILE, 'utf-8'))
    return Array.isArray(data) ? data : []
  } catch (err) {
    console.log(`[ARCHIVES] readArchives: file=${ARCHIVES_FILE}, error=${err.message}`)
    return []
  }
}
function writeArchives(list) {
  writeFileSync(ARCHIVES_FILE, JSON.stringify(list, null, 2))
  console.log(`[ARCHIVES] writeArchives: ${list.length}건 저장 → ${ARCHIVES_FILE}`)
}

// ─── IP Allowlist storage ────────────────────────────────────────────────────
const IP_FILE = join(DATA_DIR, 'ip-allowlist.json')

let _ipAllowlistCache = null
function readIpAllowlist() {
  if (_ipAllowlistCache) return _ipAllowlistCache
  try { _ipAllowlistCache = JSON.parse(readFileSync(IP_FILE, 'utf-8')); return _ipAllowlistCache } catch { return [] }
}
function writeIpAllowlist(list) {
  writeFileSync(IP_FILE, JSON.stringify(list, null, 2))
  _ipAllowlistCache = list
}

function extractIPv4(ip) {
  if (!ip) return null
  if (ip.startsWith('::ffff:')) return ip.slice(7)
  if (/^\d{1,3}(\.\d{1,3}){3}$/.test(ip)) return ip
  return null
}

function ipToNum(ip) {
  return ip.split('.').reduce((sum, octet) => (sum << 8) + parseInt(octet), 0) >>> 0
}

function ipMatchesCidr(ip, cidr) {
  const ipv4 = extractIPv4(ip)
  if (!ipv4) return false
  const [range, bitsStr] = cidr.split('/')
  const rangeIpv4 = extractIPv4(range)
  if (!rangeIpv4) return false
  const bits = bitsStr ? parseInt(bitsStr) : 32
  if (bits === 0) return true
  const mask = (~0 << (32 - bits)) >>> 0
  return (ipToNum(ipv4) & mask) === (ipToNum(rangeIpv4) & mask)
}

function getRealIp(req) {
  return req.headers['cf-connecting-ip'] || req.headers['x-real-ip'] || req.ip
}

function isIpAllowed(req) {
  const list = readIpAllowlist()
  if (list.length === 0) return true
  const ip = getRealIp(req)
  return list.some(entry => ipMatchesCidr(ip, entry.cidr))
}

// ─── Admin Auth ──────────────────────────────────────────────────────────────
if (!process.env.ADMIN_PASSWORD) {
  console.error('⚠️  ADMIN_PASSWORD 환경 변수가 설정되지 않았습니다. 서버를 시작할 수 없습니다.')
  process.exit(1)
}
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD
const activeSessions = new Set()

function getSessionToken(req) {
  const cookie = req.headers.cookie
  if (!cookie) return null
  const match = cookie.split(';').map(c => c.trim()).find(c => c.startsWith('admin_token='))
  return match ? match.split('=')[1] : null
}

// ─── File lock for concurrent write safety ──────────────────────────────────
const fileLocks = new Map()
function withFileLock(file, fn) {
  const chain = (fileLocks.get(file) || Promise.resolve()).then(fn).catch(fn)
  fileLocks.set(file, chain.then(() => {}, () => {}))
  return chain
}

function readSnapshots() {
  try { return JSON.parse(readFileSync(SNAP_FILE, 'utf-8')) } catch { return [] }
}
function writeSnapshots(list) {
  writeFileSync(SNAP_FILE, JSON.stringify(list, null, 2))
}

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

// ─── Admin Login Page ────────────────────────────────────────────────────────
app.get('/admin/login', (req, res) => {
  const token = getSessionToken(req)
  if (token && activeSessions.has(token)) return res.redirect('/admin/')
  res.set('Content-Type', 'text/html; charset=utf-8')
  res.send(`<!DOCTYPE html>
<html lang="ko"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Admin Login</title>
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{min-height:100vh;display:flex;align-items:center;justify-content:center;background:#0F172A;font-family:'LG Smart','Arial Narrow',Arial,sans-serif;color:#E2E8F0}
.card{background:#1E293B;border:1px solid #334155;border-radius:16px;padding:40px 36px;width:100%;max-width:400px}
h1{font-size:20px;font-weight:700;color:#F8FAFC;margin-bottom:8px;text-align:center}
.sub{font-size:13px;color:#64748B;text-align:center;margin-bottom:28px}
label{display:block;font-size:12px;color:#94A3B8;margin-bottom:6px;font-weight:600}
input{width:100%;padding:12px 14px;border-radius:8px;border:1px solid #334155;background:#0F172A;color:#E2E8F0;font-size:14px;outline:none;transition:border-color .2s}
input:focus{border-color:#CF0652}
button{width:100%;margin-top:20px;padding:14px;border:none;border-radius:10px;background:#CF0652;color:#fff;font-size:14px;font-weight:700;cursor:pointer;transition:opacity .15s}
button:hover{opacity:.9}button:disabled{opacity:.5;cursor:not-allowed}
.err{color:#F87171;font-size:12px;margin-top:12px;text-align:center;display:none}
</style></head><body>
<div class="card">
  <h1>Admin Login</h1>
  <p class="sub">GEO Newsletter Management</p>
  <form id="f">
    <label for="pw">Password</label>
    <input type="password" id="pw" placeholder="관리자 비밀번호 입력" autofocus>
    <button type="submit">로그인</button>
    <p class="err" id="err"></p>
  </form>
</div>
<script>
document.getElementById('f').addEventListener('submit', async function(e) {
  e.preventDefault();
  var btn = e.target.querySelector('button');
  var err = document.getElementById('err');
  btn.disabled = true; err.style.display = 'none';
  try {
    var r = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({password: document.getElementById('pw').value})
    });
    var j = await r.json();
    if (j.ok) { location.href = '/admin/'; }
    else { err.textContent = j.error; err.style.display = 'block'; }
  } catch(ex) { err.textContent = '서버 연결 실패'; err.style.display = 'block'; }
  btn.disabled = false;
});
</script></body></html>`)
})

// ─── Login Rate Limiter ──────────────────────────────────────────────────────
const loginAttempts = new Map()  // ip -> { count, resetAt }
const MAX_LOGIN_ATTEMPTS = 5
const LOGIN_WINDOW_MS = 15 * 60 * 1000  // 15 minutes

// ─── Auth API ────────────────────────────────────────────────────────────────
app.post('/api/auth/login', (req, res) => {
  const ip = req.ip
  const now = Date.now()
  const attempt = loginAttempts.get(ip)
  if (attempt && now < attempt.resetAt && attempt.count >= MAX_LOGIN_ATTEMPTS) {
    const retryAfter = Math.ceil((attempt.resetAt - now) / 1000)
    return res.status(429).json({ ok: false, error: `너무 많은 로그인 시도. ${retryAfter}초 후 재시도하세요.` })
  }
  const { password } = req.body || {}
  if (password !== ADMIN_PASSWORD) {
    const entry = attempt && now < attempt.resetAt ? attempt : { count: 0, resetAt: now + LOGIN_WINDOW_MS }
    entry.count++
    loginAttempts.set(ip, entry)
    return res.status(401).json({ ok: false, error: '비밀번호가 올바르지 않습니다.' })
  }
  loginAttempts.delete(ip)
  const token = crypto.randomBytes(32).toString('hex')
  activeSessions.add(token)
  res.cookie('admin_token', token, {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    maxAge: 24 * 60 * 60 * 1000,
    path: '/',
  })
  res.json({ ok: true })
})

app.post('/api/auth/logout', (req, res) => {
  const token = getSessionToken(req)
  if (token) activeSessions.delete(token)
  res.clearCookie('admin_token', { path: '/' })
  res.json({ ok: true })
})

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

// ─── Google Sheets proxy (fetch-based) ──────────────────────────────────────
app.get('/gsheets-proxy/*', async (req, res) => {
  const target = 'https://docs.google.com' + req.originalUrl.replace('/gsheets-proxy', '')
  try {
    const parsed = new URL(target)
    if (parsed.hostname !== 'docs.google.com') {
      return res.status(403).json({ error: 'docs.google.com만 프록시 허용' })
    }
  } catch {
    return res.status(400).json({ error: '유효하지 않은 URL' })
  }
  console.log('[PROXY]', target.slice(0, 120))
  try {
    const gRes = await fetch(target, {
      headers: { 'User-Agent': 'Mozilla/5.0' },
    })
    if (!gRes.ok) {
      console.log('[PROXY] Google returned', gRes.status)
      return res.status(gRes.status).send(await gRes.text())
    }
    res.set('Content-Type', gRes.headers.get('content-type') || 'text/csv')
    res.set('Cache-Control', 'no-store, no-cache, must-revalidate')
    const body = await gRes.text()
    res.send(body)
  } catch (err) {
    console.error('[PROXY] Error:', err.message)
    res.status(502).json({ error: '프록시 요청 실패' })
  }
})

// ─── Email API ───────────────────────────────────────────────────────────────
let _smtpTransporter = null
function getSmtpTransporter() {
  if (_smtpTransporter) return _smtpTransporter
  const host = process.env.SMTP_HOST || 'smtp.gmail.com'
  const port = parseInt(process.env.SMTP_PORT || '587')
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS
  if (!user || !pass) return null
  _smtpTransporter = nodemailer.createTransport({
    host, port, secure: port === 465,
    auth: { user, pass },
    pool: true,
  })
  return _smtpTransporter
}

app.post('/api/send-email', (req, res) => {
  console.log('[EMAIL] Route hit')
  const { to, subject, html } = req.body || {}

  if (!to || !subject || !html) {
    return res.status(400).json({ ok: false, error: 'to, subject, html 필수' })
  }

  const transporter = getSmtpTransporter()
  if (!transporter) {
    return res.status(500).json({ ok: false, error: 'SMTP 설정이 없습니다.' })
  }

  transporter.sendMail({
    from: process.env.SMTP_FROM || process.env.SMTP_USER,
    to, subject, html,
  })
    .then(() => {
      console.log('[EMAIL] Sent to', to)
      res.json({ ok: true })
    })
    .catch((err) => {
      console.error('[EMAIL] Send error:', err.message, err.code, err.response)
      res.status(500).json({ ok: false, error: `이메일 전송 실패: ${err.message}` })
    })
})

// ─── Snapshots API ───────────────────────────────────────────────────────────
app.get('/api/snapshots', (req, res) => {
  res.json(readSnapshots())
})

app.post('/api/snapshots', (req, res) => {
  const { name, data } = req.body || {}
  if (!name || !data) return res.status(400).json({ ok: false, error: 'name, data 필수' })
  withFileLock(SNAP_FILE, () => {
    const snap = { name, ts: Date.now(), data }
    const list = [snap, ...readSnapshots()].slice(0, 50)
    writeSnapshots(list)
    res.json({ ok: true, snapshots: list })
  })
})

app.put('/api/snapshots/:ts', (req, res) => {
  const ts = parseInt(req.params.ts)
  const { data } = req.body || {}
  if (!data) return res.status(400).json({ ok: false, error: 'data 필수' })
  withFileLock(SNAP_FILE, () => {
    const list = readSnapshots().map(s => s.ts === ts ? { ...s, data, updatedAt: Date.now() } : s)
    writeSnapshots(list)
    res.json({ ok: true, snapshots: list })
  })
})

app.delete('/api/snapshots/:ts', (req, res) => {
  const ts = parseInt(req.params.ts)
  withFileLock(SNAP_FILE, () => {
    const list = readSnapshots().filter(s => s.ts !== ts)
    writeSnapshots(list)
    res.json({ ok: true, snapshots: list })
  })
})

// ─── Sync Data (Google Sheets 동기화 데이터 서버 저장) ────────────────────────
const SYNC_FILE = join(DATA_DIR, 'sync-data.json')

function readSyncData() {
  try { return JSON.parse(readFileSync(SYNC_FILE, 'utf-8')) } catch { return null }
}
function writeSyncData(data) {
  writeFileSync(SYNC_FILE, JSON.stringify(data, null, 2))
}

app.get('/api/sync-data', (req, res) => {
  const data = readSyncData()
  if (!data) return res.json({ ok: false, data: null })
  res.json({ ok: true, data })
})

app.post('/api/sync-data', (req, res) => {
  const { data } = req.body || {}
  if (!data) return res.status(400).json({ ok: false, error: 'data 필수' })
  const payload = { ...data, savedAt: Date.now() }
  writeSyncData(payload)
  console.log('[SYNC-DATA] Saved at', new Date().toISOString())
  res.json({ ok: true })
})

// ─── Mode-specific Snapshots & Sync Data (newsletter / dashboard 분리) ──────
function modeSnapFile(mode) {
  if (mode === 'dashboard') return DB_SNAP_FILE
  if (mode === 'citation') return CT_SNAP_FILE
  if (mode === 'monthly-report') return MR_SNAP_FILE
  return NL_SNAP_FILE
}
function modeSyncFile(mode) {
  if (mode === 'dashboard') return DB_SYNC_FILE
  if (mode === 'citation') return CT_SYNC_FILE
  if (mode === 'monthly-report') return MR_SYNC_FILE
  return NL_SYNC_FILE
}
function readModeSnapshots(mode) {
  try { return JSON.parse(readFileSync(modeSnapFile(mode), 'utf-8')) } catch { return [] }
}
function writeModeSnapshots(mode, list) {
  writeFileSync(modeSnapFile(mode), JSON.stringify(list, null, 2))
}
function readModeSyncData(mode) {
  try { return JSON.parse(readFileSync(modeSyncFile(mode), 'utf-8')) } catch { return null }
}
function writeModeSyncData(mode, data) {
  writeFileSync(modeSyncFile(mode), JSON.stringify(data, null, 2))
}

// Snapshots — /api/:mode/snapshots (validateMode 미들웨어로 검증 통합)
app.get('/api/:mode/snapshots', validateMode, (req, res) => {
  res.json(readModeSnapshots(req.params.mode))
})
app.post('/api/:mode/snapshots', validateMode, (req, res) => {
  const { mode } = req.params
  const { name, data } = req.body || {}
  if (!name || !data) return res.status(400).json({ ok: false, error: 'name, data 필수' })
  const snap = { name, ts: Date.now(), data }
  const list = [snap, ...readModeSnapshots(mode)].slice(0, 50)
  writeModeSnapshots(mode, list)
  res.json({ ok: true, snapshots: list })
})
app.put('/api/:mode/snapshots/:ts', validateMode, (req, res) => {
  const ts = parseInt(req.params.ts)
  const { data } = req.body || {}
  if (!data) return res.status(400).json({ ok: false, error: 'data 필수' })
  const list = readModeSnapshots(req.params.mode).map(s => s.ts === ts ? { ...s, data, updatedAt: Date.now() } : s)
  writeModeSnapshots(req.params.mode, list)
  res.json({ ok: true, snapshots: list })
})
app.delete('/api/:mode/snapshots/:ts', validateMode, (req, res) => {
  const ts = parseInt(req.params.ts)
  const list = readModeSnapshots(req.params.mode).filter(s => s.ts !== ts)
  writeModeSnapshots(req.params.mode, list)
  res.json({ ok: true, snapshots: list })
})

// Sync Data — /api/:mode/sync-data (validateMode 미들웨어로 검증 통합)
app.get('/api/:mode/sync-data', validateMode, (req, res) => {
  const data = readModeSyncData(req.params.mode)
  if (!data) return res.json({ ok: false, data: null })
  res.json({ ok: true, data })
})
app.post('/api/:mode/sync-data', validateMode, (req, res) => {
  const { mode } = req.params
  const { data } = req.body || {}
  if (!data) return res.status(400).json({ ok: false, error: 'data 필수' })
  const payload = { ...data, savedAt: Date.now() }
  writeModeSyncData(mode, payload)
  console.log(`[SYNC-DATA:${mode}] Saved at`, new Date().toISOString())
  res.json({ ok: true })
})

// ─── Google Sheet Export (Apps Script proxy) ────────────────────────────────
app.post('/api/gsheet-export', async (req, res) => {
  const { scriptUrl, data } = req.body || {}
  if (!scriptUrl || !data) {
    return res.status(400).json({ ok: false, error: 'scriptUrl, data 필수' })
  }
  const ALLOWED_ORIGINS = ['https://script.google.com', 'https://script.googleusercontent.com']
  try {
    const parsed = new URL(scriptUrl)
    if (!ALLOWED_ORIGINS.some(o => parsed.origin === o)) {
      return res.status(403).json({ ok: false, error: 'Google Apps Script URL만 허용됩니다' })
    }
  } catch {
    return res.status(400).json({ ok: false, error: '유효하지 않은 URL입니다' })
  }
  try {
    const gRes = await fetch(scriptUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(data),
      redirect: 'follow',
    })
    const text = await gRes.text()
    let result
    try { result = JSON.parse(text) } catch { result = { ok: false, error: text } }
    res.json(result)
  } catch (err) {
    console.error('[GSHEET-EXPORT] Error:', err.message)
    res.status(500).json({ ok: false, error: 'Google Sheet 내보내기 실패' })
  }
})

// ─── Translate API ───────────────────────────────────────────────────────────
app.post('/api/translate', async (req, res) => {
  const { texts, from, to } = req.body || {}
  if (!texts || !Array.isArray(texts) || !to) {
    return res.status(400).json({ ok: false, error: 'texts (array), to 필수' })
  }
  try {
    // 배치 처리: 한 번에 너무 많이 보내면 Google이 차단할 수 있으므로 20개씩 나눠서 번역
    const BATCH = 20
    const translated = []
    for (let i = 0; i < texts.length; i += BATCH) {
      const batch = texts.slice(i, i + BATCH)
      const results = await translate(batch, { from: from || 'ko', to })
      const arr = Array.isArray(results) ? results : [results]
      translated.push(...arr.map(r => r.text))
    }
    res.json({ ok: true, translated })
  } catch (err) {
    console.error('[TRANSLATE] Error:', err.message, err.stack)
    res.status(500).json({ ok: false, error: '번역 실패: ' + err.message })
  }
})

// ─── AI Insight Generation (Claude API) ─────────────────────────────────────
app.post('/api/generate-insight', async (req, res) => {
  const { type, data, lang, rules } = req.body || {}
  if (!type || !data) {
    return res.status(400).json({ ok: false, error: 'type, data 필수' })
  }
  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) {
    return res.status(500).json({ ok: false, error: 'ANTHROPIC_API_KEY가 설정되지 않았습니다' })
  }
  try {
    const client = new Anthropic({ apiKey })
    const aiSettings = readAiSettings()
    const finalRules = rules || aiSettings.promptRules
    // 아카이브에서 학습 템플릿 추출 (최대 12건, 가장 최근 것을 주 템플릿으로)
    // type → 아카이브 키 매핑
    const ARCHIVE_KEY_MAP = {
      totalInsight: 'totalInsight',
      product: 'productInsight', productHowToRead: 'productHowToRead',
      citation: 'citationInsight', citationHowToRead: 'citationHowToRead',
      dotcom: 'dotcomInsight', dotcomHowToRead: 'dotcomHowToRead',
      cnty: 'cntyInsight', cntyHowToRead: 'cntyHowToRead',
      citDomain: 'citDomainInsight', citDomainHowToRead: 'citDomainHowToRead',
      citCnty: 'citCntyInsight', citCntyHowToRead: 'citCntyHowToRead',
      todo: 'todoText', notice: 'noticeText', kpiLogic: 'kpiLogicText',
    }
    // howToRead 타입은 섹션명으로 키 결정
    let archiveKey = ARCHIVE_KEY_MAP[type] || type
    if (type === 'howToRead' && data.section) {
      if (data.section.includes('제품')) archiveKey = 'productHowToRead'
      else if (data.section.includes('국가별 GEO')) archiveKey = 'cntyHowToRead'
      else if (data.section.includes('도메인별')) archiveKey = 'citDomainHowToRead'
      else if (data.section.includes('국가별 Citation')) archiveKey = 'citCntyHowToRead'
      else if (data.section.includes('Citation')) archiveKey = 'citationHowToRead'
      else if (data.section.includes('닷컴')) archiveKey = 'dotcomHowToRead'
    }
    const archives = readArchives().slice(0, 12)
    const latestArchive = archives[0]
    const latestTemplate = latestArchive?.insights?.[archiveKey] || ''
    // 과거 아카이브들에서 해당 타입의 텍스트 수집
    const pastExamples = archives.slice(0, 3).map(a => {
      const text = a.insights?.[archiveKey] || ''
      return text ? `\n--- [${a.period}] ---\n${text}` : ''
    }).filter(Boolean).join('\n')
    console.log(`[INSIGHT] type=${type}, archiveKey=${archiveKey}, hasTemplate=${!!latestTemplate}, pastExamples=${pastExamples.length > 0}`)

    const templateInstruction = latestTemplate
      ? `\n\n★ 핵심 지시: 아래 "기준 템플릿"의 문장 구조, 포맷, 어투, 볼드 처리, 줄바꿈 패턴을 90% 이상 그대로 유지하세요.
수치(%, 건수, 비율)와 제품명/국가명만 새 데이터로 교체하세요.
템플릿에 없는 새로운 문장을 추가하지 마세요. 구조를 변경하지 마세요.

★ 전월 대비 분석 필수: 각 주요 수치에 대해 전월 대비 증감을 반드시 포함하세요.
- 예: "42.7%(전월 대비 +1.2%p)" 또는 "전월 38.5% → 이번달 42.7%로 +4.2%p 상승"
- 전월 데이터가 제공된 경우 개선/악화된 항목을 구분하여 언급
- 전월 데이터가 없는 항목은 증감 없이 현재 수치만 기재

[기준 템플릿 — 이 포맷을 따라 수치만 교체]
${latestTemplate}

[참고: 과거 리포트들]${pastExamples}`
      : pastExamples ? `\n\n과거 리포트의 문체와 구조를 90% 이상 유지하고, 수치만 새 데이터로 교체하세요:\n${pastExamples}` : ''

    const systemPrompt = `당신은 LG전자 D2C 디지털마케팅팀의 GEO 리포트 작성자입니다.
기존 리포트의 포맷과 문체를 충실히 따르면서, 새 데이터의 수치로만 업데이트합니다.

작성 규칙:
${finalRules}
- 기준 템플릿이 있으면 문장 구조·볼드·줄바꿈을 그대로 유지하고 수치만 교체
- 템플릿의 **볼드 처리 패턴**을 동일하게 적용
- 새로운 문장이나 해석을 추가하지 말 것
- 제공된 데이터에 있는 수치만 그대로 사용 (평균 계산, 합산, 비율 계산 등 절대 금지)
- "전체 LG Visibility" 값은 데이터에 명시된 값을 그대로 사용 (제품별 점수의 평균이 아님)
- ${lang === 'en' ? '영어로 작성' : '한국어로 작성'}${templateInstruction}`

    const userPrompt = buildInsightPrompt(type, data)
    const message = await client.messages.create({
      model: aiSettings.model || 'claude-sonnet-4-20250514',
      max_tokens: aiSettings.maxTokens || 4096,
      system: systemPrompt,
      messages: [{ role: 'user', content: userPrompt }],
    })
    const insight = message.content[0]?.text || ''
    res.json({ ok: true, insight })
  } catch (err) {
    console.error('[INSIGHT] Error:', err.message)
    res.status(500).json({ ok: false, error: 'AI 인사이트 생성 실패: ' + err.message })
  }
})

// ─── IP Allowlist API ────────────────────────────────────────────────────────
app.get('/api/ip-allowlist', (req, res) => {
  res.json(readIpAllowlist())
})

app.post('/api/ip-allowlist', (req, res) => {
  const { cidr, country, label } = req.body || {}
  if (!cidr) return res.status(400).json({ ok: false, error: 'cidr 필수' })
  const m = cidr.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})(\/(\d{1,2}))?$/)
  if (!m || [m[1],m[2],m[3],m[4]].some(o => parseInt(o) > 255) || (m[6] && parseInt(m[6]) > 32)) {
    return res.status(400).json({ ok: false, error: 'CIDR 형식이 올바르지 않습니다 (예: 192.168.0.0/16)' })
  }
  const entry = { id: crypto.randomBytes(8).toString('hex'), cidr, country: country || '', label: label || '', createdAt: Date.now() }
  const list = [...readIpAllowlist(), entry]
  writeIpAllowlist(list)
  res.json({ ok: true, list })
})

app.delete('/api/ip-allowlist/:id', (req, res) => {
  const list = readIpAllowlist().filter(e => e.id !== req.params.id)
  writeIpAllowlist(list)
  res.json({ ok: true, list })
})

app.get('/api/my-ip', (req, res) => {
  res.json({ ip: getRealIp(req) })
})

// ─── AI Settings API ─────────────────────────────────────────────────────────
app.get('/api/ai-settings', (req, res) => {
  res.json({ ok: true, settings: readAiSettings() })
})
app.put('/api/ai-settings', (req, res) => {
  const current = readAiSettings()
  const { promptRules, model, maxTokens } = req.body || {}
  if (promptRules !== undefined) current.promptRules = promptRules
  if (model !== undefined) current.model = model
  if (maxTokens !== undefined) current.maxTokens = parseInt(maxTokens) || 500
  writeAiSettings(current)
  res.json({ ok: true, settings: current })
})

// ─── 공통 언어 전환 바 (Newsletter / Dashboard / Citation 공용) ───────────────
function makeLangBarHtml(activeLang, koSlug, enSlug) {
  const btn = (lang, label, href) => {
    const active = lang === activeLang
    return `<a href="${href}" style="display:inline-block;font-size:13px;text-decoration:none;padding:6px 18px;border-radius:20px;margin:0 4px;color:${active ? '#FFFFFF' : '#94A3B8'};font-weight:${active ? '700' : '500'};background:${active ? '#CF0652' : 'rgba(255,255,255,0.08)'};">${label}</a>`
  }
  return `<div style="background:#0F172A;padding:12px 0;text-align:center;font-family:'LG Smart','Arial Narrow',Arial,sans-serif;">${btn('ko','한국어','/p/'+koSlug)}${btn('en','English','/p/'+enSlug)}</div>`
}

function injectLangBar(html, lang, koSlug, enSlug) {
  const bar = makeLangBarHtml(lang, koSlug, enSlug)
  if (html.match(/<body[^>]*>/i)) return html.replace(/(<body[^>]*>)/i, `$1${bar}`)
  return bar + html
}

// ─── 공통 Publish 메타 읽기 ─────────────────────────────────────────────────
function readMetaFile(metaPath) {
  try { return JSON.parse(readFileSync(metaPath, 'utf-8')) } catch { return null }
}

// ─── 모드 검증 미들웨어 ──────────────────────────────────────────────────────
const VALID_MODES = ['newsletter', 'dashboard', 'citation', 'monthly-report']
function validateMode(req, res, next) {
  if (!VALID_MODES.includes(req.params.mode)) {
    return res.status(400).json({ ok: false, error: `invalid mode: ${req.params.mode}. allowed: ${VALID_MODES.join(', ')}` })
  }
  next()
}

// ─── Publish API (KO+EN 동시 게시, 고정 URL) ────────────────────────────────
const KO_SLUG = 'GEO-Monthly-Report-KO'
const EN_SLUG = 'GEO-Monthly-Report-EN'
const PUB_META = join(DATA_DIR, 'publish-meta.json')

app.post('/api/publish', (req, res) => {
  const { htmlKo, htmlEn, title } = req.body || {}
  if (!htmlKo || !htmlEn) return res.status(400).json({ ok: false, error: 'htmlKo, htmlEn 필수' })
  try {
    writeFileSync(join(PUB_DIR, `${KO_SLUG}.html`), injectLangBar(htmlKo, 'ko', KO_SLUG, EN_SLUG))
    writeFileSync(join(PUB_DIR, `${EN_SLUG}.html`), injectLangBar(htmlEn, 'en', KO_SLUG, EN_SLUG))
    const meta = { title: title || 'GEO Monthly Report', ts: Date.now() }
    writeFileSync(PUB_META, JSON.stringify(meta, null, 2))
    console.log('[PUBLISH]', meta.title, `-> /p/${KO_SLUG}, /p/${EN_SLUG}`)
    res.json({ ok: true, urls: { ko: `/p/${KO_SLUG}`, en: `/p/${EN_SLUG}` }, ...meta })
  } catch (err) {
    console.error('[PUBLISH] Write error:', err.message)
    res.status(500).json({ ok: false, error: '파일 저장 실패: ' + err.message })
  }
})

app.get('/api/publish', (req, res) => {
  const meta = readMetaFile(PUB_META)
  const ko = existsSync(join(PUB_DIR, `${KO_SLUG}.html`))
  const en = existsSync(join(PUB_DIR, `${EN_SLUG}.html`))
  res.json({ published: ko && en, ko, en, ...(meta || {}), urls: { ko: `/p/${KO_SLUG}`, en: `/p/${EN_SLUG}` } })
})

app.delete('/api/publish', (req, res) => {
  try { unlinkSync(join(PUB_DIR, `${KO_SLUG}.html`)) } catch (e) { if (e.code !== 'ENOENT') console.error('[PUBLISH] Delete KO error:', e.message) }
  try { unlinkSync(join(PUB_DIR, `${EN_SLUG}.html`)) } catch (e) { if (e.code !== 'ENOENT') console.error('[PUBLISH] Delete EN error:', e.message) }
  try { unlinkSync(PUB_META) } catch (e) { if (e.code !== 'ENOENT') console.error('[PUBLISH] Delete meta error:', e.message) }
  res.json({ ok: true })
})

// ─── Dashboard Publish API (별도 슬러그) ─────────────────────────────────────
const DASH_KO_SLUG = 'GEO-KPI-Dashboard-KO'
const DASH_EN_SLUG = 'GEO-KPI-Dashboard-EN'
const DASH_META = join(DATA_DIR, 'dashboard-meta.json')

app.post('/api/publish-dashboard', (req, res) => {
  const { htmlKo, htmlEn, title } = req.body || {}
  if (!htmlKo || !htmlEn) return res.status(400).json({ ok: false, error: 'htmlKo, htmlEn 필수' })
  try {
    writeFileSync(join(PUB_DIR, `${DASH_KO_SLUG}.html`), htmlKo)
    writeFileSync(join(PUB_DIR, `${DASH_EN_SLUG}.html`), htmlEn)
    const meta = { title: title || 'GEO KPI Dashboard', ts: Date.now() }
    writeFileSync(DASH_META, JSON.stringify(meta, null, 2))
    console.log('[PUBLISH-DASH]', meta.title, `-> /p/${DASH_KO_SLUG}, /p/${DASH_EN_SLUG}`)
    res.json({ ok: true, urls: { ko: `/p/${DASH_KO_SLUG}`, en: `/p/${DASH_EN_SLUG}` }, ...meta })
  } catch (err) {
    console.error('[PUBLISH-DASH] Write error:', err.message)
    res.status(500).json({ ok: false, error: '파일 저장 실패: ' + err.message })
  }
})

app.get('/api/publish-dashboard', (req, res) => {
  const meta = readMetaFile(DASH_META)
  const ko = existsSync(join(PUB_DIR, `${DASH_KO_SLUG}.html`))
  const en = existsSync(join(PUB_DIR, `${DASH_EN_SLUG}.html`))
  res.json({ published: ko && en, ko, en, ...(meta || {}), urls: { ko: `/p/${DASH_KO_SLUG}`, en: `/p/${DASH_EN_SLUG}` } })
})

// ─── Citation Publish API (별도 슬러그) ──────────────────────────────────────
const CIT_KO_SLUG = 'GEO-Citation-Dashboard-KO'
const CIT_EN_SLUG = 'GEO-Citation-Dashboard-EN'
const CIT_META = join(DATA_DIR, 'citation-meta.json')

app.post('/api/publish-citation', (req, res) => {
  const { htmlKo, htmlEn, title } = req.body || {}
  if (!htmlKo || !htmlEn) return res.status(400).json({ ok: false, error: 'htmlKo, htmlEn 필수' })
  try {
    writeFileSync(join(PUB_DIR, `${CIT_KO_SLUG}.html`), htmlKo)
    writeFileSync(join(PUB_DIR, `${CIT_EN_SLUG}.html`), htmlEn)
    const meta = { title: title || 'GEO Citation Dashboard', ts: Date.now() }
    writeFileSync(CIT_META, JSON.stringify(meta, null, 2))
    console.log('[PUBLISH-CIT]', meta.title, `-> /p/${CIT_KO_SLUG}, /p/${CIT_EN_SLUG}`)
    res.json({ ok: true, urls: { ko: `/p/${CIT_KO_SLUG}`, en: `/p/${CIT_EN_SLUG}` }, ...meta })
  } catch (err) {
    console.error('[PUBLISH-CIT] Write error:', err.message)
    res.status(500).json({ ok: false, error: '파일 저장 실패: ' + err.message })
  }
})

app.get('/api/publish-citation', (req, res) => {
  const meta = readMetaFile(CIT_META)
  const ko = existsSync(join(PUB_DIR, `${CIT_KO_SLUG}.html`))
  const en = existsSync(join(PUB_DIR, `${CIT_EN_SLUG}.html`))
  res.json({ published: ko && en, ko, en, ...(meta || {}), urls: { ko: `/p/${CIT_KO_SLUG}`, en: `/p/${CIT_EN_SLUG}` } })
})

app.delete('/api/publish-citation', (req, res) => {
  try { unlinkSync(join(PUB_DIR, `${CIT_KO_SLUG}.html`)) } catch (e) { if (e.code !== 'ENOENT') console.error('[PUBLISH-CIT] Delete error:', e.message) }
  try { unlinkSync(join(PUB_DIR, `${CIT_EN_SLUG}.html`)) } catch (e) { if (e.code !== 'ENOENT') console.error('[PUBLISH-CIT] Delete error:', e.message) }
  try { unlinkSync(CIT_META) } catch (e) { if (e.code !== 'ENOENT') console.error('[PUBLISH-CIT] Delete meta error:', e.message) }
  res.json({ ok: true })
})

// ─── Monthly Report Publish API ──────────────────────────────────────────────
const MR_KO_SLUG = 'GEO-Monthly-Report-Internal-KO'
const MR_EN_SLUG = 'GEO-Monthly-Report-Internal-EN'
const MR_META = join(DATA_DIR, 'monthly-report-meta.json')

app.post('/api/publish-monthly-report', (req, res) => {
  const { htmlKo, htmlEn, title } = req.body || {}
  if (!htmlKo || !htmlEn) return res.status(400).json({ ok: false, error: 'htmlKo, htmlEn 필수' })
  try {
    writeFileSync(join(PUB_DIR, `${MR_KO_SLUG}.html`), htmlKo)
    writeFileSync(join(PUB_DIR, `${MR_EN_SLUG}.html`), htmlEn)
    const meta = { title: title || 'GEO Monthly Report', ts: Date.now() }
    writeFileSync(MR_META, JSON.stringify(meta, null, 2))
    console.log('[PUBLISH-MR]', meta.title)
    res.json({ ok: true, urls: { ko: `/p/${MR_KO_SLUG}`, en: `/p/${MR_EN_SLUG}` }, ...meta })
  } catch (err) {
    console.error('[PUBLISH-MR] Write error:', err.message)
    res.status(500).json({ ok: false, error: '파일 저장 실패: ' + err.message })
  }
})

app.get('/api/publish-monthly-report', (req, res) => {
  const meta = readMetaFile(MR_META)
  const ko = existsSync(join(PUB_DIR, `${MR_KO_SLUG}.html`))
  const en = existsSync(join(PUB_DIR, `${MR_EN_SLUG}.html`))
  res.json({ published: ko && en, ko, en, ...(meta || {}), urls: { ko: `/p/${MR_KO_SLUG}`, en: `/p/${MR_EN_SLUG}` } })
})

// ─── Visibility Publish API (별도 슬러그) ─────────────────────────────────────
const VIS_KO_SLUG = 'GEO-Visibility-Dashboard-KO'
const VIS_EN_SLUG = 'GEO-Visibility-Dashboard-EN'
const VIS_META = join(DATA_DIR, 'visibility-meta.json')

app.post('/api/publish-visibility', (req, res) => {
  const { htmlKo, htmlEn, title } = req.body || {}
  if (!htmlKo || !htmlEn) return res.status(400).json({ ok: false, error: 'htmlKo, htmlEn 필수' })
  try {
    writeFileSync(join(PUB_DIR, `${VIS_KO_SLUG}.html`), htmlKo)
    writeFileSync(join(PUB_DIR, `${VIS_EN_SLUG}.html`), htmlEn)
    const meta = { title: title || 'GEO Visibility Dashboard', ts: Date.now() }
    writeFileSync(VIS_META, JSON.stringify(meta, null, 2))
    console.log('[PUBLISH-VIS]', meta.title, `-> /p/${VIS_KO_SLUG}, /p/${VIS_EN_SLUG}`)
    res.json({ ok: true, urls: { ko: `/p/${VIS_KO_SLUG}`, en: `/p/${VIS_EN_SLUG}` }, ...meta })
  } catch (err) {
    console.error('[PUBLISH-VIS] Write error:', err.message)
    res.status(500).json({ ok: false, error: '파일 저장 실패: ' + err.message })
  }
})

app.get('/api/publish-visibility', (req, res) => {
  const meta = readMetaFile(VIS_META)
  const ko = existsSync(join(PUB_DIR, `${VIS_KO_SLUG}.html`))
  const en = existsSync(join(PUB_DIR, `${VIS_EN_SLUG}.html`))
  res.json({ published: ko && en, ko, en, ...(meta || {}), urls: { ko: `/p/${VIS_KO_SLUG}`, en: `/p/${VIS_EN_SLUG}` } })
})

app.delete('/api/publish-visibility', (req, res) => {
  try { unlinkSync(join(PUB_DIR, `${VIS_KO_SLUG}.html`)) } catch (e) { if (e.code !== 'ENOENT') console.error('[PUBLISH-VIS] Delete error:', e.message) }
  try { unlinkSync(join(PUB_DIR, `${VIS_EN_SLUG}.html`)) } catch (e) { if (e.code !== 'ENOENT') console.error('[PUBLISH-VIS] Delete error:', e.message) }
  try { unlinkSync(VIS_META) } catch (e) { if (e.code !== 'ENOENT') console.error('[PUBLISH-VIS] Delete meta error:', e.message) }
  res.json({ ok: true })
})

// ─── Publish History (Newsletter + Dashboard 통합 조회) ──────────────────────
app.get('/api/publish-history', (req, res) => {
  const newsletter = readMetaFile(PUB_META)
  const dashboard = readMetaFile(DASH_META)
  const citation = readMetaFile(CIT_META)
  const nlKo = existsSync(join(PUB_DIR, `${KO_SLUG}.html`))
  const nlEn = existsSync(join(PUB_DIR, `${EN_SLUG}.html`))
  const dashKo = existsSync(join(PUB_DIR, `${DASH_KO_SLUG}.html`))
  const dashEn = existsSync(join(PUB_DIR, `${DASH_EN_SLUG}.html`))
  const citKo = existsSync(join(PUB_DIR, `${CIT_KO_SLUG}.html`))
  const citEn = existsSync(join(PUB_DIR, `${CIT_EN_SLUG}.html`))
  res.json({
    newsletter: newsletter ? { ...newsletter, published: nlKo && nlEn, urls: { ko: `/p/${KO_SLUG}`, en: `/p/${EN_SLUG}` } } : null,
    dashboard: dashboard ? { ...dashboard, published: dashKo && dashEn, urls: { ko: `/p/${DASH_KO_SLUG}`, en: `/p/${DASH_EN_SLUG}` } } : null,
    citation: citation ? { ...citation, published: citKo && citEn, urls: { ko: `/p/${CIT_KO_SLUG}`, en: `/p/${CIT_EN_SLUG}` } } : null,
  })
})

app.delete('/api/publish-dashboard', (req, res) => {
  try { unlinkSync(join(PUB_DIR, `${DASH_KO_SLUG}.html`)) } catch (e) { if (e.code !== 'ENOENT') console.error('[PUBLISH-DASH] Delete error:', e.message) }
  try { unlinkSync(join(PUB_DIR, `${DASH_EN_SLUG}.html`)) } catch (e) { if (e.code !== 'ENOENT') console.error('[PUBLISH-DASH] Delete error:', e.message) }
  try { unlinkSync(DASH_META) } catch (e) { if (e.code !== 'ENOENT') console.error('[PUBLISH-DASH] Delete meta error:', e.message) }
  res.json({ ok: true })
})

// ─── Progress Tracker Publish (데이터 스냅샷 게시) ────────────────────────────
const TRACKER_SNAP = join(DATA_DIR, 'tracker-snapshot.json')
const TRACKER_META = join(DATA_DIR, 'tracker-meta.json')

app.post('/api/publish-tracker', (req, res) => {
  const { data, dashboard, month } = req.body || {}
  if (!data) return res.status(400).json({ ok: false, error: 'data 필수' })
  try {
    const snap = { ...data, _dashboard: dashboard || null, _month: month || null }
    writeFileSync(TRACKER_SNAP, JSON.stringify(snap, null, 2))
    const meta = { title: 'GEO KPI Progress Tracker', ts: Date.now() }
    writeFileSync(TRACKER_META, JSON.stringify(meta, null, 2))
    console.log('[PUBLISH-TRACKER]', new Date().toISOString(), 'categoryStats:', dashboard?.categoryStats?.length || 0)
    res.json({ ok: true, ...meta, url: '/p/progress-tracker/' })
  } catch (err) {
    console.error('[PUBLISH-TRACKER] Write error:', err.message)
    res.status(500).json({ ok: false, error: '파일 저장 실패: ' + err.message })
  }
})

app.get('/api/publish-tracker', (req, res) => {
  const meta = readMetaFile(TRACKER_META)
  const hasData = existsSync(TRACKER_SNAP)
  res.json({ published: !!meta && hasData, ...(meta || {}), url: '/p/progress-tracker/' })
})

app.delete('/api/publish-tracker', (req, res) => {
  try { unlinkSync(TRACKER_SNAP) } catch (e) { if (e.code !== 'ENOENT') console.error('[PUBLISH-TRACKER] Delete error:', e.message) }
  try { unlinkSync(TRACKER_META) } catch (e) { if (e.code !== 'ENOENT') console.error('[PUBLISH-TRACKER] Delete meta error:', e.message) }
  res.json({ ok: true })
})

// ─── Tracker Snapshot (공개, 인증 불필요) ─────────────────────────────────────
app.get('/api/tracker-snapshot', (req, res) => {
  try {
    const data = JSON.parse(readFileSync(TRACKER_SNAP, 'utf-8'))
    res.json({ ok: true, data })
  } catch {
    res.json({ ok: false, data: null })
  }
})

// ─── Font static files ──────────────────────────────────────────────────────
app.use('/font', express.static(join(__dirname, 'font'), { maxAge: '1y', immutable: true }))

// ─── Public Progress Tracker (게시된 버전, IP 체크) ──────────────────────────
app.use('/p/progress-tracker', (req, res, next) => {
  if (!isIpAllowed(req)) {
    res.status(403)
    res.set('Content-Type', 'text/html; charset=utf-8')
    return res.send('<!DOCTYPE html><html><head><meta charset="UTF-8"></head><body style="background:#0F172A;display:flex;align-items:center;justify-content:center;height:100vh;font-family:sans-serif;color:#64748B"><p>403 — Access Denied</p></body></html>')
  }
  next()
})
app.use('/p/progress-tracker', express.static(join(__dirname, 'dist-tracker')))
app.get('/p/progress-tracker', (req, res) => {
  res.sendFile(join(__dirname, 'dist-tracker', 'tracker.html'))
})
app.get('/p/progress-tracker/*', (req, res) => {
  res.sendFile(join(__dirname, 'dist-tracker', 'tracker.html'))
})

app.get('/p/:slug', (req, res) => {
  if (!isIpAllowed(req)) {
    res.status(403)
    res.set('Content-Type', 'text/html; charset=utf-8')
    return res.send(`<!DOCTYPE html><html lang="ko"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Access Denied</title><style>*{margin:0;padding:0;box-sizing:border-box}body{min-height:100vh;display:flex;align-items:center;justify-content:center;background:#0F172A;font-family:'LG Smart','Arial Narrow',Arial,sans-serif;color:#E2E8F0}.w{text-align:center;padding:40px 24px}h1{font-size:48px;font-weight:700;color:#334155;margin-bottom:16px}p{font-size:15px;color:#64748B}</style></head><body><div class="w"><h1>403</h1><p>접근이 허용되지 않은 IP입니다.</p></div></body></html>`)
  }
  const slug = req.params.slug
  if (!/^[a-zA-Z0-9\-]+$/.test(slug)) return res.status(400).send('Invalid slug')
  const file = join(PUB_DIR, `${slug}.html`)
  if (!existsSync(file)) return res.status(404).send('Not found')
  res.set('Content-Type', 'text/html; charset=utf-8')
  res.send(readFileSync(file, 'utf-8'))
})

// ─── Admin Dashboard ─────────────────────────────────────────────────────────
app.get('/admin/', (req, res) => {
  res.set('Content-Type', 'text/html; charset=utf-8')
  res.send(`<!DOCTYPE html><html lang="ko"><head><meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>GEO Newsletter Admin</title>
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{min-height:100vh;display:flex;align-items:center;justify-content:center;background:#0F172A;font-family:'LG Smart','Arial Narrow',Arial,sans-serif;color:#E2E8F0}
.wrap{text-align:center;padding:40px 24px;max-width:540px;width:100%}
.logo{font-size:11px;font-weight:700;letter-spacing:3px;color:#64748B;text-transform:uppercase;margin-bottom:28px}
h1{font-size:24px;font-weight:700;color:#F8FAFC;margin-bottom:32px}
.cards{display:flex;flex-direction:column;gap:14px;margin-bottom:32px}
a.card{display:block;background:#1E293B;border:1px solid #334155;border-radius:12px;padding:24px;text-decoration:none;text-align:left;transition:border-color .2s,transform .15s}
a.card:hover{border-color:#CF0652;transform:translateY(-2px)}
.card-title{font-size:16px;font-weight:700;color:#F8FAFC;margin-bottom:4px}
.card-desc{font-size:13px;color:#94A3B8}
.section-title{font-size:13px;font-weight:700;color:#64748B;text-transform:uppercase;letter-spacing:2px;margin:24px 0 12px}
.logout{background:none;border:1px solid #334155;color:#64748B;padding:10px 24px;border-radius:8px;font-size:13px;cursor:pointer}
.logout:hover{border-color:#64748B;color:#94A3B8}
</style></head><body>
<div class="wrap">
  <div class="logo">GEO Newsletter</div>
  <h1>Admin Dashboard</h1>
  <div class="cards">
    <div class="section-title" style="margin-top:0">뉴스레터 관리</div>
    <a class="card" href="/admin/newsletter">
      <div class="card-title">Newsletter Generator</div>
      <div class="card-desc">GEO 모니터링 리포트 생성, 편집 및 발송</div>
    </a>
    <div class="section-title">대시보드 관리</div>
    <a class="card" href="/admin/dashboard">
      <div class="card-title">Dashboard Viewer</div>
      <div class="card-desc">Visibility · Citation · Readability · Tracker 통합 뷰어 — 여기서 통합 대시보드 게시</div>
    </a>
    <a class="card" href="/admin/visibility">
      <div class="card-title">Visibility Editor</div>
      <div class="card-desc">GEO Visibility KPI 편집 — Visibility 단독 게시</div>
    </a>
    <a class="card" href="/admin/citation">
      <div class="card-title">Citation Editor</div>
      <div class="card-desc">Citation 분석 편집 — Citation 단독 게시</div>
    </a>
    <a class="card" href="/admin/monthly-report">
      <div class="card-title">Monthly Report</div>
      <div class="card-desc">월간 보고용 단순 표 형태 리포트 — 색상/그래프 없음</div>
    </a>
    <a class="card" href="/admin/readability" style="opacity:0.5;pointer-events:none">
      <div class="card-title">Readability Editor</div>
      <div class="card-desc">추후 고도화 예정</div>
    </a>
    <a class="card" href="/admin/progress-tracker">
      <div class="card-title">Progress Tracker</div>
      <div class="card-desc">GEO 과제 진행 현황 대시보드</div>
    </a>
    <div class="section-title">공통 인프라</div>
    <a class="card" href="/admin/ip-manager">
      <div class="card-title">IP Access Manager</div>
      <div class="card-desc">게시된 리포트 열람 허용 IP 대역 관리</div>
    </a>
    <a class="card" href="/admin/ai-settings">
      <div class="card-title">AI Settings</div>
      <div class="card-desc">AI 인사이트 생성 프롬프트 규칙 · 모델 설정</div>
    </a>
    <a class="card" href="/admin/archives">
      <div class="card-title">Archives (학습 데이터)</div>
      <div class="card-desc">완성본 아카이빙 · AI 인사이트 생성 시 문체 학습 데이터로 활용</div>
    </a>
  </div>
  <button class="logout" onclick="fetch('/api/auth/logout',{method:'POST'}).then(function(){location.href='/admin/login'})">로그아웃</button>
</div></body></html>`)
})

// ─── IP Access Manager UI ────────────────────────────────────────────────────
app.get('/admin/ip-manager', (req, res) => {
  res.set('Content-Type', 'text/html; charset=utf-8')
  res.send(`<!DOCTYPE html><html lang="ko"><head><meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>IP Access Manager</title>
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{background:#0F172A;font-family:'LG Smart','Arial Narrow',Arial,sans-serif;color:#E2E8F0;padding:32px 24px}
.container{max-width:720px;margin:0 auto}
.top{display:flex;align-items:center;justify-content:space-between;margin-bottom:20px}
.back{color:#64748B;text-decoration:none;font-size:13px}.back:hover{color:#94A3B8}
.logout{background:none;border:1px solid #334155;color:#64748B;padding:6px 16px;border-radius:6px;font-size:12px;cursor:pointer}.logout:hover{border-color:#64748B;color:#94A3B8}
h1{font-size:22px;font-weight:700;color:#F8FAFC;margin-bottom:6px}
.desc{font-size:13px;color:#64748B;margin-bottom:24px}
.info{background:#1E3A5F;border:1px solid #2563EB;border-radius:8px;padding:12px 16px;font-size:12px;color:#93C5FD;margin-bottom:24px;line-height:1.7}
.info strong{color:#BFDBFE}
.section{background:#1E293B;border:1px solid #334155;border-radius:12px;padding:24px;margin-bottom:20px}
.section h2{font-size:15px;font-weight:700;margin-bottom:16px;color:#F8FAFC}
.form-row{display:flex;gap:10px;margin-bottom:12px}
.form-row input{flex:1;padding:10px 12px;border-radius:8px;border:1px solid #334155;background:#0F172A;color:#E2E8F0;font-size:13px;outline:none}
.form-row input:focus{border-color:#CF0652}
.add-btn{padding:10px 20px;border:none;border-radius:8px;background:#CF0652;color:#fff;font-weight:700;font-size:13px;cursor:pointer;white-space:nowrap}
.add-btn:hover{opacity:.9}
table{width:100%;border-collapse:collapse;font-size:13px}
th{text-align:left;color:#64748B;font-weight:600;padding:8px 12px;border-bottom:1px solid #334155}
td{padding:10px 12px;border-bottom:1px solid rgba(51,65,85,.5)}
code{background:#0F172A;padding:2px 8px;border-radius:4px;font-size:12px;color:#7DD3FC}
.empty{text-align:center;padding:24px;color:#64748B;font-size:13px}
.del-btn{background:none;border:1px solid #EF4444;color:#EF4444;padding:4px 12px;border-radius:6px;font-size:12px;cursor:pointer}
.del-btn:hover{background:#EF4444;color:#fff}
.status{font-size:12px;margin-top:8px;min-height:18px}.status.ok{color:#4ADE80}.status.err{color:#F87171}
</style></head><body>
<div class="container">
  <div class="top">
    <a class="back" href="/admin/">&#8592; Admin Dashboard</a>
    <button class="logout" onclick="fetch('/api/auth/logout',{method:'POST'}).then(function(){location.href='/admin/login'})">로그아웃</button>
  </div>
  <h1>IP Access Manager</h1>
  <p class="desc">게시된 리포트(/p/*)에 접근할 수 있는 IP 대역을 관리합니다.</p>
  <div class="info">
    허용 목록이 비어있으면 <strong>모든 IP에서 접근 가능</strong>합니다.<br>
    하나 이상 등록하면 등록된 IP 대역에서만 접근할 수 있습니다.<br>
    현재 접속 IP: <strong id="myip">확인 중...</strong>
  </div>
  <div class="section">
    <h2>IP 대역 추가</h2>
    <div class="form-row">
      <input type="text" id="cidr" placeholder="CIDR (예: 192.168.0.0/16)">
      <input type="text" id="country" placeholder="국가 (예: KR)" style="max-width:100px">
      <input type="text" id="label" placeholder="설명 (예: 사무실)" style="max-width:160px">
      <button class="add-btn" onclick="addEntry()">추가</button>
    </div>
    <p class="status" id="status"></p>
  </div>
  <div class="section">
    <h2>허용 목록</h2>
    <div id="list"></div>
  </div>
</div>
<script>
var list=[];
async function load(){
  var r=await fetch('/api/ip-allowlist');
  if(r.status===401){location.href='/admin/login';return}
  list=await r.json();render();
  fetch('/api/my-ip').then(function(r){return r.json()}).then(function(j){document.getElementById('myip').textContent=j.ip});
}
function esc(s){var d=document.createElement('div');d.textContent=s;return d.innerHTML}
function render(){
  var el=document.getElementById('list');
  if(list.length===0){el.innerHTML='<p class="empty">등록된 IP 대역이 없습니다. 모든 IP에서 접근 가능합니다.</p>';return}
  var h='<table><thead><tr><th>CIDR</th><th>국가</th><th>설명</th><th>등록일</th><th></th></tr></thead><tbody>';
  for(var i=0;i<list.length;i++){var e=list[i];var d=new Date(e.createdAt).toLocaleDateString('ko-KR');
    h+='<tr><td><code>'+esc(e.cidr)+'</code></td><td>'+esc(e.country||'-')+'</td><td>'+esc(e.label||'-')+'</td><td>'+d+'</td><td><button class="del-btn" data-id="'+e.id+'">삭제</button></td></tr>'}
  h+='</tbody></table>';el.innerHTML=h;
}
async function addEntry(){
  var cidr=document.getElementById('cidr').value.trim();
  var country=document.getElementById('country').value.trim();
  var label=document.getElementById('label').value.trim();
  var st=document.getElementById('status');
  if(!cidr){st.textContent='CIDR을 입력하세요';st.className='status err';return}
  var r=await fetch('/api/ip-allowlist',{method:'POST',headers:{'Content-Type':'application/json','X-Requested-With':'XMLHttpRequest'},body:JSON.stringify({cidr:cidr,country:country,label:label})});
  var j=await r.json();
  if(j.ok){list=j.list;render();document.getElementById('cidr').value='';document.getElementById('country').value='';document.getElementById('label').value='';st.textContent='추가되었습니다';st.className='status ok'}
  else{st.textContent=j.error;st.className='status err'}
}
async function del(id){
  if(!confirm('삭제하시겠습니까?'))return;
  var r=await fetch('/api/ip-allowlist/'+id,{method:'DELETE',headers:{'X-Requested-With':'XMLHttpRequest'}});var j=await r.json();
  if(j.ok){list=j.list;render()}
}
document.addEventListener('click',function(e){if(e.target.classList.contains('del-btn'))del(e.target.dataset.id)});
load();
</script></body></html>`)
})

// ─── Archives API (아카이빙 학습 데이터) ─────────────────────────────────────
app.get('/api/archives', (req, res) => {
  const archives = readArchives()
  console.log(`[ARCHIVES] GET — ${archives.length}건 반환`)
  res.json({ ok: true, archives })
})
app.post('/api/archives', (req, res) => {
  const { period, insights } = req.body || {}
  console.log(`[ARCHIVES] POST — period="${period}", insights keys: ${insights ? Object.keys(insights).filter(k => insights[k]).join(',') : 'NONE'}`)
  if (!period || !insights) return res.status(400).json({ ok: false, error: 'period, insights 필수' })
  const list = readArchives()
  // 같은 period가 있으면 덮어쓰기
  const idx = list.findIndex(a => a.period === period)
  const entry = { id: crypto.randomBytes(8).toString('hex'), period, insights, createdAt: Date.now() }
  if (idx >= 0) { entry.id = list[idx].id; list[idx] = entry }
  else list.unshift(entry)
  writeArchives(list)
  res.json({ ok: true, archives: list })
})
app.delete('/api/archives/:id', (req, res) => {
  const list = readArchives().filter(a => a.id !== req.params.id)
  writeArchives(list)
  res.json({ ok: true, archives: list })
})

// ─── Archives UI (학습 데이터 확인) ──────────────────────────────────────────
app.get('/admin/archives', (req, res) => {
  res.set('Content-Type', 'text/html; charset=utf-8')
  res.send(`<!DOCTYPE html><html lang="ko"><head><meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Archives (학습 데이터)</title>
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{background:#0F172A;font-family:'LG Smart','Arial Narrow',Arial,sans-serif;color:#E2E8F0;padding:32px 24px}
.container{max-width:860px;margin:0 auto}
.top{display:flex;align-items:center;justify-content:space-between;margin-bottom:20px}
.back{color:#64748B;text-decoration:none;font-size:13px}.back:hover{color:#94A3B8}
.logout{background:none;border:1px solid #334155;color:#64748B;padding:6px 16px;border-radius:6px;font-size:12px;cursor:pointer}.logout:hover{border-color:#64748B;color:#94A3B8}
h1{font-size:22px;font-weight:700;color:#F8FAFC;margin-bottom:6px}
.desc{font-size:13px;color:#64748B;margin-bottom:24px;line-height:1.6}
.archive{background:#1E293B;border:1px solid #334155;border-radius:12px;margin-bottom:16px;overflow:hidden}
.archive-head{display:flex;align-items:center;justify-content:space-between;padding:16px 20px;cursor:pointer;user-select:none}
.archive-head:hover{background:#263245}
.archive-title{font-size:16px;font-weight:700;color:#F8FAFC}
.archive-date{font-size:12px;color:#64748B}
.archive-body{display:none;padding:0 20px 20px;border-top:1px solid #334155}
.archive-body.open{display:block}
.field{margin-top:14px}
.field-label{font-size:11px;font-weight:700;color:#CF0652;text-transform:uppercase;margin-bottom:4px}
.field-text{font-size:13px;color:#CBD5E1;line-height:1.7;white-space:pre-wrap;background:#0F172A;border-radius:8px;padding:10px 14px;max-height:200px;overflow-y:auto}
.del-btn{background:none;border:1px solid #EF4444;color:#EF4444;padding:4px 12px;border-radius:6px;font-size:12px;cursor:pointer}.del-btn:hover{background:#EF4444;color:#fff}
.empty{text-align:center;padding:40px;color:#64748B;font-size:14px}
</style></head><body>
<div class="container">
  <div class="top">
    <a class="back" href="/admin/">&#8592; Admin Dashboard</a>
    <button class="logout" onclick="fetch('/api/auth/logout',{method:'POST'}).then(function(){location.href='/admin/login'})">로그아웃</button>
  </div>
  <h1>Archives (학습 데이터)</h1>
  <p class="desc">완성본을 아카이빙하면 AI 인사이트 생성 시 문체와 구조의 학습 데이터로 활용됩니다.<br>최근 12개월치 아카이브가 AI 프롬프트에 자동 포함됩니다.</p>
  <div id="list"></div>
</div>
<script>
var list=[];var FIELDS=[
  ['totalInsight','GEO 전략 인사이트'],['productInsight','제품별 인사이트'],['productHowToRead','제품별 How to Read'],
  ['cntyInsight','국가별 인사이트'],['cntyHowToRead','국가별 How to Read'],
  ['citationInsight','Citation 인사이트'],['citationHowToRead','Citation How to Read'],
  ['citDomainInsight','도메인별 인사이트'],['citDomainHowToRead','도메인별 How to Read'],
  ['citCntyInsight','국가별 Citation 인사이트'],['citCntyHowToRead','국가별 Citation How to Read'],
  ['dotcomInsight','닷컴 인사이트'],['dotcomHowToRead','닷컴 How to Read'],
  ['todoText','Action Plan'],['noticeText','Notice'],['kpiLogicText','KPI Logic']
];
async function load(){
  try{
    var r=await fetch('/api/archives');
    if(r.status===401){location.href='/admin/login';return}
    var j=await r.json();
    list=j.archives||[];
    document.getElementById('list').setAttribute('data-count',list.length);
    render()
  }catch(e){document.getElementById('list').innerHTML='<p class="empty">로드 실패: '+e.message+'</p>'}
}
function esc(s){var d=document.createElement('div');d.textContent=s;return d.innerHTML}
function render(){
  var el=document.getElementById('list');
  if(!list.length){el.innerHTML='<p class="empty">아카이빙된 리포트가 없습니다.<br>뉴스레터 편집기에서 완성본을 아카이빙해주세요.</p>';return}
  el.innerHTML=list.map(function(a,i){
    var d=new Date(a.createdAt).toLocaleDateString('ko-KR',{year:'numeric',month:'long',day:'numeric'});
    var cnt=FIELDS.filter(function(f){return(a.insights||{})[f[0]]}).length;
    var fields=FIELDS.map(function(f){
      var v=(a.insights||{})[f[0]];
      return v?'<div class="field"><div class="field-label">'+f[1]+'</div><div class="field-text">'+esc(v)+'</div></div>':''
    }).join('');
    var openClass=i===0?' open':'';
    return '<div class="archive"><div class="archive-head" onclick="toggle('+i+')"><div><span class="archive-title">'+esc(a.period)+'</span><span style="font-size:12px;color:#64748B;margin-left:8px;">'+cnt+'개 필드</span></div><div><span class="archive-date">'+d+'</span>&nbsp;&nbsp;<button class="del-btn" onclick="event.stopPropagation();del(&quot;'+a.id+'&quot;)">삭제</button></div></div><div class="archive-body'+openClass+'" id="ab'+i+'">'+fields+'</div></div>'
  }).join('')
}
function toggle(i){document.getElementById('ab'+i).classList.toggle('open')}
async function del(id){
  if(!confirm('삭제하시겠습니까?'))return;
  var r=await fetch('/api/archives/'+id,{method:'DELETE',headers:{'X-Requested-With':'XMLHttpRequest'}});
  var j=await r.json();if(j.ok){list=j.archives;render()}
}
load()
</script></body></html>`)
})

// ─── AI Settings UI ──────────────────────────────────────────────────────────
app.get('/admin/ai-settings', (req, res) => {
  res.set('Content-Type', 'text/html; charset=utf-8')
  res.send(`<!DOCTYPE html><html lang="ko"><head><meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>AI Settings</title>
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{background:#0F172A;font-family:'LG Smart','Arial Narrow',Arial,sans-serif;color:#E2E8F0;padding:32px 24px}
.container{max-width:720px;margin:0 auto}
.top{display:flex;align-items:center;justify-content:space-between;margin-bottom:20px}
.back{color:#64748B;text-decoration:none;font-size:13px}.back:hover{color:#94A3B8}
.logout{background:none;border:1px solid #334155;color:#64748B;padding:6px 16px;border-radius:6px;font-size:12px;cursor:pointer}.logout:hover{border-color:#64748B;color:#94A3B8}
h1{font-size:22px;font-weight:700;color:#F8FAFC;margin-bottom:6px}
.desc{font-size:13px;color:#64748B;margin-bottom:24px}
.section{background:#1E293B;border:1px solid #334155;border-radius:12px;padding:24px;margin-bottom:20px}
.section h2{font-size:15px;font-weight:700;margin-bottom:12px;color:#F8FAFC}
.section p.hint{font-size:12px;color:#64748B;margin-bottom:12px;line-height:1.6}
label{display:block;font-size:12px;color:#94A3B8;margin-bottom:6px;font-weight:600}
textarea,input[type=text],select{width:100%;padding:10px 12px;border-radius:8px;border:1px solid #334155;background:#0F172A;color:#E2E8F0;font-size:13px;outline:none;font-family:inherit;line-height:1.6}
textarea:focus,input:focus,select:focus{border-color:#CF0652}
textarea{resize:vertical;min-height:120px}
.form-row{margin-bottom:16px}
.row2{display:flex;gap:12px}.row2>div{flex:1}
.save-btn{padding:10px 24px;border:none;border-radius:8px;background:#CF0652;color:#fff;font-weight:700;font-size:14px;cursor:pointer;margin-top:8px}
.save-btn:hover{opacity:.9}
.status{font-size:12px;margin-top:8px;min-height:18px}.status.ok{color:#4ADE80}.status.err{color:#F87171}
</style></head><body>
<div class="container">
  <div class="top">
    <a class="back" href="/admin/">&#8592; Admin Dashboard</a>
    <button class="logout" onclick="fetch('/api/auth/logout',{method:'POST'}).then(function(){location.href='/admin/login'})">로그아웃</button>
  </div>
  <h1>AI Settings</h1>
  <p class="desc">AI 인사이트 생성 시 적용되는 프롬프트 규칙과 모델 설정을 관리합니다.</p>
  <div class="section">
    <h2>프롬프트 규칙</h2>
    <p class="hint">모든 AI 생성 버튼에 공통 적용됩니다. 각 줄에 하나의 규칙을 작성하세요.</p>
    <div class="form-row">
      <textarea id="rules" rows="8"></textarea>
    </div>
  </div>
  <div class="section">
    <h2>모델 설정</h2>
    <div class="row2">
      <div>
        <label>모델</label>
        <select id="model">
          <option value="claude-sonnet-4-20250514">Claude Sonnet 4 (빠름, 저렴)</option>
          <option value="claude-opus-4-20250514">Claude Opus 4 (고품질)</option>
        </select>
      </div>
      <div>
        <label>최대 토큰</label>
        <input type="text" id="maxTokens" placeholder="500">
      </div>
    </div>
  </div>
  <button class="save-btn" onclick="save()">저장</button>
  <p class="status" id="status"></p>
</div>
<script>
async function load(){
  var r=await fetch('/api/ai-settings');
  if(r.status===401){location.href='/admin/login';return}
  var j=await r.json();if(!j.ok)return;
  document.getElementById('rules').value=j.settings.promptRules||'';
  document.getElementById('model').value=j.settings.model||'claude-sonnet-4-20250514';
  document.getElementById('maxTokens').value=j.settings.maxTokens||500;
}
async function save(){
  var st=document.getElementById('status');
  var body={
    promptRules:document.getElementById('rules').value,
    model:document.getElementById('model').value,
    maxTokens:parseInt(document.getElementById('maxTokens').value)||500
  };
  var r=await fetch('/api/ai-settings',{method:'PUT',headers:{'Content-Type':'application/json','X-Requested-With':'XMLHttpRequest'},body:JSON.stringify(body)});
  var j=await r.json();
  if(j.ok){st.textContent='저장되었습니다';st.className='status ok'}
  else{st.textContent=j.error||'저장 실패';st.className='status err'}
}
load();
</script></body></html>`)
})

// ─── Static files (admin UI at /admin/newsletter) ───────────────────────────
app.use('/admin/newsletter', express.static(join(__dirname, 'dist')))
app.get('/admin/newsletter', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'))
})
app.get('/admin/newsletter/*', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'))
})

// ─── Static files (KPI Dashboard at /admin/dashboard) ───────────────────────
app.use('/admin/dashboard', express.static(join(__dirname, 'dist-dashboard')))
app.get('/admin/dashboard', (req, res) => {
  res.sendFile(join(__dirname, 'dist-dashboard', 'dashboard.html'))
})
app.get('/admin/dashboard/*', (req, res) => {
  res.sendFile(join(__dirname, 'dist-dashboard', 'dashboard.html'))
})

// ─── Static files (Monthly Report at /admin/monthly-report) ────────────────
app.use('/admin/monthly-report', express.static(join(__dirname, 'dist-monthly-report')))
app.get('/admin/monthly-report', (req, res) => {
  res.sendFile(join(__dirname, 'dist-monthly-report', 'monthly-report.html'))
})
app.get('/admin/monthly-report/*', (req, res) => {
  res.sendFile(join(__dirname, 'dist-monthly-report', 'monthly-report.html'))
})

// ─── Static files (Citation Dashboard at /admin/citation) ───────────────────
app.use('/admin/citation', express.static(join(__dirname, 'dist-citation')))
app.get('/admin/citation', (req, res) => {
  res.sendFile(join(__dirname, 'dist-citation', 'citation.html'))
})
app.get('/admin/citation/*', (req, res) => {
  res.sendFile(join(__dirname, 'dist-citation', 'citation.html'))
})

// ─── Static files (Visibility Editor at /admin/visibility) ──────────────────
app.use('/admin/visibility', express.static(join(__dirname, 'dist-visibility')))
app.get('/admin/visibility', (req, res) => {
  res.sendFile(join(__dirname, 'dist-visibility', 'visibility.html'))
})
app.get('/admin/visibility/*', (req, res) => {
  res.sendFile(join(__dirname, 'dist-visibility', 'visibility.html'))
})

// ─── Static files (Progress Tracker at /admin/progress-tracker) ─────────────
app.use('/admin/progress-tracker', express.static(join(__dirname, 'dist-tracker')))
app.get('/admin/progress-tracker', (req, res) => {
  res.sendFile(join(__dirname, 'dist-tracker', 'tracker.html'))
})
app.get('/admin/progress-tracker/*', (req, res) => {
  res.sendFile(join(__dirname, 'dist-tracker', 'tracker.html'))
})
app.get('/', (req, res) => {
  if (!isIpAllowed(req)) {
    res.status(403)
    res.set('Content-Type', 'text/html; charset=utf-8')
    return res.send(`<!DOCTYPE html><html lang="ko"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Access Denied</title><style>*{margin:0;padding:0;box-sizing:border-box}body{min-height:100vh;display:flex;align-items:center;justify-content:center;background:#0F172A;font-family:'LG Smart','Arial Narrow',Arial,sans-serif;color:#E2E8F0}.w{text-align:center;padding:40px 24px}h1{font-size:48px;font-weight:700;color:#334155;margin-bottom:16px}p{font-size:15px;color:#64748B}</style></head><body><div class="w"><h1>403</h1><p>접근이 허용되지 않은 IP입니다.</p></div></body></html>`)
  }
  const meta = readMetaFile(PUB_META)
  const title = meta?.title || 'GEO Monthly Report'
  const ts = meta?.ts ? new Date(meta.ts).toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' }) : ''
  res.set('Content-Type', 'text/html; charset=utf-8')
  res.send(`<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${title}</title>
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{min-height:100vh;display:flex;align-items:center;justify-content:center;background:#0F172A;font-family:'LG Smart','Arial Narrow',Arial,sans-serif;color:#E2E8F0}
.wrap{text-align:center;padding:40px 24px;max-width:540px;width:100%}
.logo{font-size:11px;font-weight:700;letter-spacing:3px;color:#64748B;text-transform:uppercase;margin-bottom:28px}
h1{font-size:22px;font-weight:700;color:#F8FAFC;margin-bottom:8px;line-height:1.4}
.date{font-size:13px;color:#64748B;margin-bottom:32px}
.notice{text-align:left;background:#1E293B;border:1px solid #334155;border-radius:10px;padding:20px 22px;margin-bottom:32px;font-size:12px;line-height:1.85;color:#94A3B8}
.notice strong{color:#E2E8F0;font-weight:700}
.links{display:flex;flex-direction:column;gap:12px;align-items:center}
a.btn{display:flex;align-items:center;justify-content:center;gap:8px;width:280px;padding:14px 0;border-radius:10px;text-decoration:none;font-size:14px;font-weight:700;transition:transform .15s,box-shadow .15s}
a.btn:hover{transform:translateY(-2px);box-shadow:0 8px 24px rgba(0,0,0,.3)}
.btn-ko{background:#CF0652;color:#fff}
.btn-en{background:#1E293B;color:#E2E8F0;border:1px solid #334155}
.btn-en:hover{border-color:#64748B}
.flag{font-size:18px}
.section-label{font-size:11px;font-weight:700;letter-spacing:1px;color:#64748B;text-transform:uppercase;margin-top:20px;margin-bottom:8px}
</style>
</head>
<body>
<div class="wrap">
  <div class="logo">LG Electronics</div>
  <h1>${title}</h1>
  ${ts ? `<p class="date">${ts}</p>` : '<p class="date">&nbsp;</p>'}
  <div class="notice">
    <p>본 Letter는 ChatGPT, Gemini와 같은 LLM 서비스 내에서 소비자의 질의에 대해 <strong>1) 자사 브랜드가 얼마나 가시성 있게 노출</strong>되고 있는지, <strong>2) LLM 서비스가 자사를 언급 시 인용의 주요 출처(Citation)</strong>는 어떠한지 현황을 공유하여, 주요 LLM 응답에서의 브랜드 노출과 인용 출처를 체계적으로 관리하는 데 도움을 드리고자 합니다.</p>
    <br>
    <p>이에 <strong>10개 주요 국가</strong>(미국, 영국, 독일, 브라질, 인도, 멕시코, 스페인, 호주, 베트남, 캐나다)를 대상으로, 브랜드 노출 <strong>가시성(Visibility)</strong>과 출처 사이트의 <strong>인용(Citation)</strong>, 콘텐츠의 <strong>AI 가독성(Readability%)</strong> 지표를 기반으로 생성형 AI가 시장·제품군별로 LG전자를 어떻게 이해하고 활용하고 있는지에 대한 현황을 제시하고자 합니다.</p>
    <br>
    <p>또한 경쟁사와의 비교 분석을 통해 카테고리별·국가별 개선 영역을 도출하고 실질적인 전략 인사이트를 확보할 수 있도록 구성했습니다.</p>
  </div>
  <div class="links">
    <p class="section-label">Newsletter</p>
    <a class="btn btn-ko" href="/p/${KO_SLUG}"><span class="flag">🇰🇷</span> 한국어 리포트</a>
    <a class="btn btn-en" href="/p/${EN_SLUG}"><span class="flag">🇺🇸</span> English Report</a>
    <p class="section-label">KPI Dashboard</p>
    <a class="btn btn-ko" href="/p/${DASH_KO_SLUG}"><span class="flag">🇰🇷</span> 한국어 대시보드</a>
    <a class="btn btn-en" href="/p/${DASH_EN_SLUG}"><span class="flag">🇺🇸</span> English Dashboard</a>
  </div>
</div>
</body>
</html>`)
})

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
