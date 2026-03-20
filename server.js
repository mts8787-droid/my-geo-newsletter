import express from 'express'
import crypto from 'crypto'
import nodemailer from 'nodemailer'
import translate from 'google-translate-api-x'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync, unlinkSync } from 'fs'
import dotenv from 'dotenv'

dotenv.config()

const __dirname = dirname(fileURLToPath(import.meta.url))
const app = express()
const PORT = process.env.PORT || 3000

app.set('trust proxy', true)

// ─── Snapshots file storage ──────────────────────────────────────────────────
const DATA_DIR = process.env.DATA_DIR || join(__dirname, 'data')
const SNAP_FILE = join(DATA_DIR, 'snapshots.json')
const PUB_DIR = join(DATA_DIR, 'published')
if (!existsSync(DATA_DIR)) mkdirSync(DATA_DIR, { recursive: true })
if (!existsSync(PUB_DIR)) mkdirSync(PUB_DIR, { recursive: true })

// ─── IP Allowlist storage ────────────────────────────────────────────────────
const IP_FILE = join(DATA_DIR, 'ip-allowlist.json')

function readIpAllowlist() {
  try { return JSON.parse(readFileSync(IP_FILE, 'utf-8')) } catch { return [] }
}
function writeIpAllowlist(list) {
  writeFileSync(IP_FILE, JSON.stringify(list, null, 2))
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

function isIpAllowed(ip) {
  const list = readIpAllowlist()
  if (list.length === 0) return true
  return list.some(entry => ipMatchesCidr(ip, entry.cidr))
}

// ─── Admin Auth ──────────────────────────────────────────────────────────────
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'changeme'
const activeSessions = new Set()

function getSessionToken(req) {
  const cookie = req.headers.cookie
  if (!cookie) return null
  const match = cookie.split(';').map(c => c.trim()).find(c => c.startsWith('admin_token='))
  return match ? match.split('=')[1] : null
}

function readSnapshots() {
  try { return JSON.parse(readFileSync(SNAP_FILE, 'utf-8')) } catch { return [] }
}
function writeSnapshots(list) {
  writeFileSync(SNAP_FILE, JSON.stringify(list, null, 2))
}

// ─── JSON body parser ────────────────────────────────────────────────────────
app.use(express.json({ limit: '5mb' }))

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

// ─── Auth API ────────────────────────────────────────────────────────────────
app.post('/api/auth/login', (req, res) => {
  const { password } = req.body || {}
  if (password !== ADMIN_PASSWORD) {
    return res.status(401).json({ ok: false, error: '비밀번호가 올바르지 않습니다.' })
  }
  const token = crypto.randomBytes(32).toString('hex')
  activeSessions.add(token)
  res.cookie('admin_token', token, {
    httpOnly: true,
    sameSite: 'lax',
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

  if (req.path.startsWith('/admin') || req.path.startsWith('/api/')) {
    const token = getSessionToken(req)
    if (!token || !activeSessions.has(token)) {
      if (req.path.startsWith('/api/')) return res.status(401).json({ ok: false, error: 'Unauthorized' })
      return res.redirect('/admin/login')
    }
  }
  next()
})

// ─── Google Sheets proxy (fetch-based) ──────────────────────────────────────
app.get('/gsheets-proxy/*', async (req, res) => {
  const target = 'https://docs.google.com' + req.originalUrl.replace('/gsheets-proxy', '')
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
    res.status(502).json({ error: err.message })
  }
})

// ─── Email API ───────────────────────────────────────────────────────────────
app.post('/api/send-email', (req, res) => {
  console.log('[EMAIL] Route hit')
  const { to, subject, html } = req.body || {}

  if (!to || !subject || !html) {
    return res.status(400).json({ ok: false, error: 'to, subject, html 필수' })
  }

  const host = process.env.SMTP_HOST || 'smtp.gmail.com'
  const port = parseInt(process.env.SMTP_PORT || '587')
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS

  if (!user || !pass) {
    return res.status(500).json({ ok: false, error: 'SMTP 설정이 없습니다.' })
  }

  const transporter = nodemailer.createTransport({
    host, port, secure: port === 465,
    auth: { user, pass },
  })

  transporter.sendMail({
    from: process.env.SMTP_FROM || user,
    to, subject, html,
  })
    .then(() => {
      console.log('[EMAIL] Sent to', to)
      res.json({ ok: true })
    })
    .catch((err) => {
      console.error('[EMAIL] Send error:', err.message)
      res.status(500).json({ ok: false, error: err.message })
    })
})

// ─── Snapshots API ───────────────────────────────────────────────────────────
app.get('/api/snapshots', (req, res) => {
  res.json(readSnapshots())
})

app.post('/api/snapshots', (req, res) => {
  const { name, data } = req.body || {}
  if (!name || !data) return res.status(400).json({ ok: false, error: 'name, data 필수' })
  const snap = { name, ts: Date.now(), data }
  const list = [snap, ...readSnapshots()].slice(0, 50)
  writeSnapshots(list)
  res.json({ ok: true, snapshots: list })
})

app.put('/api/snapshots/:ts', (req, res) => {
  const ts = parseInt(req.params.ts)
  const { data } = req.body || {}
  if (!data) return res.status(400).json({ ok: false, error: 'data 필수' })
  const list = readSnapshots().map(s => s.ts === ts ? { ...s, data, updatedAt: Date.now() } : s)
  writeSnapshots(list)
  res.json({ ok: true, snapshots: list })
})

app.delete('/api/snapshots/:ts', (req, res) => {
  const ts = parseInt(req.params.ts)
  const list = readSnapshots().filter(s => s.ts !== ts)
  writeSnapshots(list)
  res.json({ ok: true, snapshots: list })
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

// ─── Google Sheet Export (Apps Script proxy) ────────────────────────────────
app.post('/api/gsheet-export', async (req, res) => {
  const { scriptUrl, data } = req.body || {}
  if (!scriptUrl || !data) {
    return res.status(400).json({ ok: false, error: 'scriptUrl, data 필수' })
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
    res.status(500).json({ ok: false, error: err.message })
  }
})

// ─── Translate API ───────────────────────────────────────────────────────────
app.post('/api/translate', async (req, res) => {
  const { texts, from, to } = req.body || {}
  if (!texts || !Array.isArray(texts) || !to) {
    return res.status(400).json({ ok: false, error: 'texts (array), to 필수' })
  }
  try {
    const results = await translate(texts, { from: from || 'ko', to })
    const translated = results.map(r => r.text)
    res.json({ ok: true, translated })
  } catch (err) {
    console.error('[TRANSLATE] Error:', err.message)
    res.status(500).json({ ok: false, error: err.message })
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
  res.json({ ip: req.ip })
})

// ─── Publish API (KO+EN 동시 게시, 고정 URL) ────────────────────────────────
const KO_SLUG = 'GEO-Monthly-Report-KO'
const EN_SLUG = 'GEO-Monthly-Report-EN'
const PUB_META = join(DATA_DIR, 'publish-meta.json')

function readPubMeta() {
  try { return JSON.parse(readFileSync(PUB_META, 'utf-8')) } catch { return null }
}

function langBarHtml(activeLang) {
  const btn = (lang, label, href) => {
    const active = lang === activeLang
    return `<a href="${href}" style="display:inline-block;font-size:13px;text-decoration:none;padding:6px 18px;border-radius:20px;margin:0 4px;color:${active ? '#FFFFFF' : '#94A3B8'};font-weight:${active ? '700' : '500'};background:${active ? '#CF0652' : 'rgba(255,255,255,0.08)'};">${label}</a>`
  }
  return `<div style="background:#0F172A;padding:12px 0;text-align:center;font-family:'LG Smart','Arial Narrow',Arial,sans-serif;">${btn('ko','한국어','/p/'+KO_SLUG)}${btn('en','English','/p/'+EN_SLUG)}</div>`
}

function injectLangBar(html, lang) {
  const bar = langBarHtml(lang)
  if (html.match(/<body[^>]*>/i)) return html.replace(/(<body[^>]*>)/i, `$1${bar}`)
  return bar + html
}

app.post('/api/publish', (req, res) => {
  const { htmlKo, htmlEn, title } = req.body || {}
  if (!htmlKo || !htmlEn) return res.status(400).json({ ok: false, error: 'htmlKo, htmlEn 필수' })
  writeFileSync(join(PUB_DIR, `${KO_SLUG}.html`), injectLangBar(htmlKo, 'ko'))
  writeFileSync(join(PUB_DIR, `${EN_SLUG}.html`), injectLangBar(htmlEn, 'en'))
  const meta = { title: title || 'GEO Monthly Report', ts: Date.now() }
  writeFileSync(PUB_META, JSON.stringify(meta, null, 2))
  console.log('[PUBLISH]', meta.title, `-> /p/${KO_SLUG}, /p/${EN_SLUG}`)
  res.json({ ok: true, urls: { ko: `/p/${KO_SLUG}`, en: `/p/${EN_SLUG}` }, ...meta })
})

app.get('/api/publish', (req, res) => {
  const meta = readPubMeta()
  const ko = existsSync(join(PUB_DIR, `${KO_SLUG}.html`))
  const en = existsSync(join(PUB_DIR, `${EN_SLUG}.html`))
  res.json({ published: ko && en, ko, en, ...(meta || {}), urls: { ko: `/p/${KO_SLUG}`, en: `/p/${EN_SLUG}` } })
})

app.delete('/api/publish', (req, res) => {
  try { unlinkSync(join(PUB_DIR, `${KO_SLUG}.html`)) } catch {}
  try { unlinkSync(join(PUB_DIR, `${EN_SLUG}.html`)) } catch {}
  try { unlinkSync(PUB_META) } catch {}
  res.json({ ok: true })
})

// ─── Dashboard Publish API (별도 슬러그) ─────────────────────────────────────
const DASH_KO_SLUG = 'GEO-KPI-Dashboard-KO'
const DASH_EN_SLUG = 'GEO-KPI-Dashboard-EN'
const DASH_META = join(DATA_DIR, 'dashboard-meta.json')

function readDashMeta() {
  try { return JSON.parse(readFileSync(DASH_META, 'utf-8')) } catch { return null }
}

function dashLangBarHtml(activeLang) {
  const btn = (lang, label, href) => {
    const active = lang === activeLang
    return `<a href="${href}" style="display:inline-block;font-size:13px;text-decoration:none;padding:6px 18px;border-radius:20px;margin:0 4px;color:${active ? '#FFFFFF' : '#94A3B8'};font-weight:${active ? '700' : '500'};background:${active ? '#CF0652' : 'rgba(255,255,255,0.08)'};">${label}</a>`
  }
  return `<div style="background:#0F172A;padding:12px 0;text-align:center;font-family:'LG Smart','Arial Narrow',Arial,sans-serif;">${btn('ko','한국어','/p/'+DASH_KO_SLUG)}${btn('en','English','/p/'+DASH_EN_SLUG)}</div>`
}

function injectDashLangBar(html, lang) {
  const bar = dashLangBarHtml(lang)
  if (html.match(/<body[^>]*>/i)) return html.replace(/(<body[^>]*>)/i, `$1${bar}`)
  return bar + html
}

app.post('/api/publish-dashboard', (req, res) => {
  const { htmlKo, htmlEn, title } = req.body || {}
  if (!htmlKo || !htmlEn) return res.status(400).json({ ok: false, error: 'htmlKo, htmlEn 필수' })
  writeFileSync(join(PUB_DIR, `${DASH_KO_SLUG}.html`), injectDashLangBar(htmlKo, 'ko'))
  writeFileSync(join(PUB_DIR, `${DASH_EN_SLUG}.html`), injectDashLangBar(htmlEn, 'en'))
  const meta = { title: title || 'GEO KPI Dashboard', ts: Date.now() }
  writeFileSync(DASH_META, JSON.stringify(meta, null, 2))
  console.log('[PUBLISH-DASH]', meta.title, `-> /p/${DASH_KO_SLUG}, /p/${DASH_EN_SLUG}`)
  res.json({ ok: true, urls: { ko: `/p/${DASH_KO_SLUG}`, en: `/p/${DASH_EN_SLUG}` }, ...meta })
})

app.get('/api/publish-dashboard', (req, res) => {
  const meta = readDashMeta()
  const ko = existsSync(join(PUB_DIR, `${DASH_KO_SLUG}.html`))
  const en = existsSync(join(PUB_DIR, `${DASH_EN_SLUG}.html`))
  res.json({ published: ko && en, ko, en, ...(meta || {}), urls: { ko: `/p/${DASH_KO_SLUG}`, en: `/p/${DASH_EN_SLUG}` } })
})

// ─── Publish History (Newsletter + Dashboard 통합 조회) ──────────────────────
app.get('/api/publish-history', (req, res) => {
  const newsletter = readPubMeta()
  const dashboard = readDashMeta()
  const nlKo = existsSync(join(PUB_DIR, `${KO_SLUG}.html`))
  const nlEn = existsSync(join(PUB_DIR, `${EN_SLUG}.html`))
  const dashKo = existsSync(join(PUB_DIR, `${DASH_KO_SLUG}.html`))
  const dashEn = existsSync(join(PUB_DIR, `${DASH_EN_SLUG}.html`))
  res.json({
    newsletter: newsletter ? { ...newsletter, published: nlKo && nlEn, urls: { ko: `/p/${KO_SLUG}`, en: `/p/${EN_SLUG}` } } : null,
    dashboard: dashboard ? { ...dashboard, published: dashKo && dashEn, urls: { ko: `/p/${DASH_KO_SLUG}`, en: `/p/${DASH_EN_SLUG}` } } : null,
  })
})

app.delete('/api/publish-dashboard', (req, res) => {
  try { unlinkSync(join(PUB_DIR, `${DASH_KO_SLUG}.html`)) } catch {}
  try { unlinkSync(join(PUB_DIR, `${DASH_EN_SLUG}.html`)) } catch {}
  try { unlinkSync(DASH_META) } catch {}
  res.json({ ok: true })
})

// ─── Progress Tracker Publish (데이터 스냅샷 게시) ────────────────────────────
const TRACKER_SNAP = join(DATA_DIR, 'tracker-snapshot.json')
const TRACKER_META = join(DATA_DIR, 'tracker-meta.json')

function readTrackerMeta() {
  try { return JSON.parse(readFileSync(TRACKER_META, 'utf-8')) } catch { return null }
}

app.post('/api/publish-tracker', (req, res) => {
  const { data } = req.body || {}
  if (!data) return res.status(400).json({ ok: false, error: 'data 필수' })
  writeFileSync(TRACKER_SNAP, JSON.stringify(data, null, 2))
  const meta = { title: 'GEO KPI Progress Tracker', ts: Date.now() }
  writeFileSync(TRACKER_META, JSON.stringify(meta, null, 2))
  console.log('[PUBLISH-TRACKER]', new Date().toISOString())
  res.json({ ok: true, ...meta, url: '/p/progress-tracker/' })
})

app.get('/api/publish-tracker', (req, res) => {
  const meta = readTrackerMeta()
  const hasData = existsSync(TRACKER_SNAP)
  res.json({ published: !!meta && hasData, ...(meta || {}), url: '/p/progress-tracker/' })
})

app.delete('/api/publish-tracker', (req, res) => {
  try { unlinkSync(TRACKER_SNAP) } catch {}
  try { unlinkSync(TRACKER_META) } catch {}
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

// ─── Public Progress Tracker (게시된 버전, IP 체크) ──────────────────────────
app.use('/p/progress-tracker', (req, res, next) => {
  if (!isIpAllowed(req.ip)) {
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
  if (!isIpAllowed(req.ip)) {
    res.status(403)
    res.set('Content-Type', 'text/html; charset=utf-8')
    return res.send(`<!DOCTYPE html><html lang="ko"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Access Denied</title><style>*{margin:0;padding:0;box-sizing:border-box}body{min-height:100vh;display:flex;align-items:center;justify-content:center;background:#0F172A;font-family:'LG Smart','Arial Narrow',Arial,sans-serif;color:#E2E8F0}.w{text-align:center;padding:40px 24px}h1{font-size:48px;font-weight:700;color:#334155;margin-bottom:16px}p{font-size:15px;color:#64748B}</style></head><body><div class="w"><h1>403</h1><p>접근이 허용되지 않은 IP입니다.</p></div></body></html>`)
  }
  const file = join(PUB_DIR, `${req.params.slug}.html`)
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
.logout{background:none;border:1px solid #334155;color:#64748B;padding:10px 24px;border-radius:8px;font-size:13px;cursor:pointer}
.logout:hover{border-color:#64748B;color:#94A3B8}
</style></head><body>
<div class="wrap">
  <div class="logo">GEO Newsletter</div>
  <h1>Admin Dashboard</h1>
  <div class="cards">
    <a class="card" href="/admin/newsletter">
      <div class="card-title">Newsletter Generator</div>
      <div class="card-desc">GEO 모니터링 리포트 생성, 편집 및 발송</div>
    </a>
    <a class="card" href="/admin/dashboard">
      <div class="card-title">KPI Dashboard Builder</div>
      <div class="card-desc">GEO KPI 대시보드 생성 및 게시</div>
    </a>
    <a class="card" href="/admin/progress-tracker">
      <div class="card-title">Progress Tracker</div>
      <div class="card-desc">GEO 과제 진행 현황 대시보드</div>
    </a>
    <a class="card" href="/admin/ip-manager">
      <div class="card-title">IP Access Manager</div>
      <div class="card-desc">게시된 리포트 열람 허용 IP 대역 관리</div>
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
  var r=await fetch('/api/ip-allowlist',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({cidr:cidr,country:country,label:label})});
  var j=await r.json();
  if(j.ok){list=j.list;render();document.getElementById('cidr').value='';document.getElementById('country').value='';document.getElementById('label').value='';st.textContent='추가되었습니다';st.className='status ok'}
  else{st.textContent=j.error;st.className='status err'}
}
async function del(id){
  if(!confirm('삭제하시겠습니까?'))return;
  var r=await fetch('/api/ip-allowlist/'+id,{method:'DELETE'});var j=await r.json();
  if(j.ok){list=j.list;render()}
}
document.addEventListener('click',function(e){if(e.target.classList.contains('del-btn'))del(e.target.dataset.id)});
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

// ─── Static files (Progress Tracker at /admin/progress-tracker) ─────────────
app.use('/admin/progress-tracker', express.static(join(__dirname, 'dist-tracker')))
app.get('/admin/progress-tracker', (req, res) => {
  res.sendFile(join(__dirname, 'dist-tracker', 'tracker.html'))
})
app.get('/admin/progress-tracker/*', (req, res) => {
  res.sendFile(join(__dirname, 'dist-tracker', 'tracker.html'))
})
app.get('/', (req, res) => {
  if (!isIpAllowed(req.ip)) {
    res.status(403)
    res.set('Content-Type', 'text/html; charset=utf-8')
    return res.send(`<!DOCTYPE html><html lang="ko"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Access Denied</title><style>*{margin:0;padding:0;box-sizing:border-box}body{min-height:100vh;display:flex;align-items:center;justify-content:center;background:#0F172A;font-family:'LG Smart','Arial Narrow',Arial,sans-serif;color:#E2E8F0}.w{text-align:center;padding:40px 24px}h1{font-size:48px;font-weight:700;color:#334155;margin-bottom:16px}p{font-size:15px;color:#64748B}</style></head><body><div class="w"><h1>403</h1><p>접근이 허용되지 않은 IP입니다.</p></div></body></html>`)
  }
  const meta = readPubMeta()
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
  res.status(500).json({ ok: false, error: err.message })
})

app.listen(PORT, () => {
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
