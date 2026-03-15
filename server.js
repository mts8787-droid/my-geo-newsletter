import express from 'express'
import nodemailer from 'nodemailer'
import translate from 'google-translate-api-x'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs'
import dotenv from 'dotenv'

dotenv.config()

const __dirname = dirname(fileURLToPath(import.meta.url))
const app = express()
const PORT = process.env.PORT || 3000

// ─── Snapshots file storage ──────────────────────────────────────────────────
const DATA_DIR = join(__dirname, 'data')
const SNAP_FILE = join(DATA_DIR, 'snapshots.json')
if (!existsSync(DATA_DIR)) mkdirSync(DATA_DIR, { recursive: true })

function readSnapshots() {
  try { return JSON.parse(readFileSync(SNAP_FILE, 'utf-8')) } catch { return [] }
}
function writeSnapshots(list) {
  writeFileSync(SNAP_FILE, JSON.stringify(list, null, 2))
}

// ─── JSON body parser ────────────────────────────────────────────────────────
app.use(express.json({ limit: '5mb' }))

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

// ─── Static files ────────────────────────────────────────────────────────────
app.use(express.static(join(__dirname, 'dist')))
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'))
})

// ─── Error handler ───────────────────────────────────────────────────────────
app.use((err, req, res, _next) => {
  console.error('[SERVER] Error:', err.message)
  res.status(500).json({ ok: false, error: err.message })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
