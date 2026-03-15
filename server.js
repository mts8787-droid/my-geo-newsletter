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
app.post('/api/send-email', async (req, res) => {
  try {
    const { to, subject, html } = req.body
    if (!to || !subject || !html) throw new Error('to, subject, html 필수')

    const host = process.env.SMTP_HOST || 'smtp.gmail.com'
    const port = parseInt(process.env.SMTP_PORT || '587')
    const user = process.env.SMTP_USER
    const pass = process.env.SMTP_PASS
    if (!user || !pass) throw new Error('SMTP 설정이 없습니다.')

    const transporter = nodemailer.createTransport({
      host, port, secure: port === 465,
      auth: { user, pass },
    })
    await transporter.sendMail({
      from: process.env.SMTP_FROM || user,
      to, subject, html,
    })
    res.json({ ok: true })
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message })
  }
})

// ─── Static files ────────────────────────────────────────────────────────────
app.use(express.static(join(__dirname, 'dist')))
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
