import express from 'express'
import nodemailer from 'nodemailer'
import { createProxyMiddleware } from 'http-proxy-middleware'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import dotenv from 'dotenv'

dotenv.config()

const __dirname = dirname(fileURLToPath(import.meta.url))
const app = express()
const PORT = process.env.PORT || 3000

// ─── JSON body parser ────────────────────────────────────────────────────────
app.use(express.json({ limit: '5mb' }))

// ─── Google Sheets proxy ─────────────────────────────────────────────────────
app.use('/gsheets-proxy', createProxyMiddleware({
  target: 'https://docs.google.com',
  changeOrigin: true,
  secure: true,
  pathRewrite: { '^/gsheets-proxy': '' },
  onProxyRes: (proxyRes) => {
    delete proxyRes.headers['cache-control']
    delete proxyRes.headers['expires']
    delete proxyRes.headers['etag']
    proxyRes.headers['cache-control'] = 'no-store, no-cache, must-revalidate'
  },
}))

// ─── Email API ───────────────────────────────────────────────────────────────
app.post('/api/send-email', (req, res) => {
  console.log('[EMAIL] Route hit')
  const { to, subject, html } = req.body || {}
  console.log('[EMAIL] Request:', { to, subjectLen: subject?.length, htmlLen: html?.length })

  if (!to || !subject || !html) {
    console.log('[EMAIL] Missing fields')
    return res.status(400).json({ ok: false, error: 'to, subject, html 필수' })
  }

  const host = process.env.SMTP_HOST || 'smtp.gmail.com'
  const port = parseInt(process.env.SMTP_PORT || '587')
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS
  console.log('[EMAIL] SMTP:', { host, port, user: user ? user.slice(0, 4) + '***' : 'MISSING', pass: pass ? 'SET' : 'MISSING' })

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
