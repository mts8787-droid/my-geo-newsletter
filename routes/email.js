// ─── Email API (월간 뉴스레터 발송) — /api/send-email ──────────────────────
import { Router } from 'express'
import nodemailer from 'nodemailer'

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

export const emailRouter = Router()

emailRouter.post('/api/send-email', (req, res) => {
  console.log('[EMAIL] Route hit')
  const { to, subject, html } = req.body || {}
  if (!to || !subject || !html) return res.status(400).json({ ok: false, error: 'to, subject, html 필수' })

  const transporter = getSmtpTransporter()
  if (!transporter) return res.status(500).json({ ok: false, error: 'SMTP 설정이 없습니다.' })

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
