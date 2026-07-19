// ─── Email API (월간 뉴스레터 발송) — /api/send-email ──────────────────────
import { Router } from 'express'
import nodemailer from 'nodemailer'
import { validateBody, SendEmailSchema } from '../lib/validate.js'
import { renderChartPng } from '../lib/renderChartPng.js'
import { logFor } from '../lib/logger.js'

const log = logFor('email')

// 이메일 차트(<img src=".../api/hl-chart?d=...">)를 CID 인라인 첨부로 변환.
// 외부 URL 이미지는 Outlook 기본 차단 / 사내 메일 게이트웨이 제거 대상 → 메일에 직접 첨부하면
// 어느 클라이언트에서도 확실히 표시된다. 발송 직전 서버에서 PNG 생성 후 src 를 cid:로 치환.
function embedChartsAsCid(html) {
  const attachments = []
  const byD = new Map() // d → cid (중복 차트 재사용)
  const re = /(?:https?:\/\/[^"'\s)]*?)?\/api\/hl-chart\?d=([A-Za-z0-9_-]+)/g
  const newHtml = String(html || '').replace(re, (full, d) => {
    let cid = byD.get(d)
    if (!cid) {
      try {
        const png = renderChartPng(d)
        if (!png) return full
        const idx = attachments.length
        cid = `hlchart${idx}@geo-newsletter`
        attachments.push({ filename: `chart${idx}.png`, content: png, cid, contentType: 'image/png' })
        byD.set(d, cid)
      } catch (err) {
        log.warn({ err: err.message }, 'chart CID 변환 실패 — 외부 URL 유지')
        return full  // 실패 시 원본 URL 그대로 (최소한 링크는 남김)
      }
    }
    return `cid:${cid}`
  })
  return { html: newHtml, attachments }
}

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

emailRouter.post('/api/send-email', validateBody(SendEmailSchema), (req, res) => {
  const { to, subject, html } = req.body

  const transporter = getSmtpTransporter()
  if (!transporter) return res.status(500).json({ ok: false, error: 'SMTP 설정이 없습니다.' })

  // 차트 이미지를 CID 인라인 첨부로 변환 (Outlook·사내 메일 호환)
  const { html: htmlCid, attachments } = embedChartsAsCid(html)

  transporter.sendMail({
    from: process.env.SMTP_FROM || process.env.SMTP_USER,
    to, subject, html: htmlCid,
    ...(attachments.length ? { attachments } : {}),
  })
    .then(() => {
      log.info({ to, charts: attachments.length }, 'email sent')
      res.json({ ok: true })
    })
    .catch((err) => {
      log.error({ to, err: err.message, code: err.code }, 'email send failed')
      res.status(500).json({ ok: false, error: `이메일 전송 실패: ${err.message}` })
    })
})
