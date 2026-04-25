import { describe, it, expect, beforeEach, vi } from 'vitest'
import express from 'express'
import request from 'supertest'

// nodemailer 모킹 — 실제 SMTP 호출 없이 라우트 검증
const sendMailMock = vi.fn()
vi.mock('nodemailer', () => ({
  default: {
    createTransport: vi.fn(() => ({ sendMail: sendMailMock })),
  },
}))

const { emailRouter } = await import('../../routes/email.js')

function makeApp() {
  const app = express()
  app.use(express.json())
  app.use(emailRouter)
  return app
}

beforeEach(() => {
  sendMailMock.mockReset()
  // 기본: SMTP 자격 증명 설정
  process.env.SMTP_USER = 'test@example.com'
  process.env.SMTP_PASS = 'pass'
  process.env.SMTP_FROM = 'noreply@example.com'
})

describe('POST /api/send-email', () => {
  it('정상 발송 → ok:true', async () => {
    sendMailMock.mockResolvedValue({ messageId: 'abc' })
    const res = await request(makeApp()).post('/api/send-email').send({
      to: 'user@example.com',
      subject: 'Hi',
      html: '<p>Hello</p>',
    })
    expect(res.status).toBe(200)
    expect(res.body.ok).toBe(true)
    expect(sendMailMock).toHaveBeenCalledOnce()
    const args = sendMailMock.mock.calls[0][0]
    expect(args.to).toBe('user@example.com')
    expect(args.subject).toBe('Hi')
    expect(args.html).toBe('<p>Hello</p>')
    expect(args.from).toBe('noreply@example.com')
  })

  it('to 필드 누락 → 400 (Zod)', async () => {
    const res = await request(makeApp()).post('/api/send-email').send({
      subject: 'Hi', html: '<p>X</p>',
    })
    expect(res.status).toBe(400)
    expect(sendMailMock).not.toHaveBeenCalled()
  })

  it('subject 빈 문자열 → 400', async () => {
    const res = await request(makeApp()).post('/api/send-email').send({
      to: 'user@example.com', subject: '', html: '<p>X</p>',
    })
    expect(res.status).toBe(400)
  })

  it('html 누락 → 400', async () => {
    const res = await request(makeApp()).post('/api/send-email').send({
      to: 'user@example.com', subject: 'Hi',
    })
    expect(res.status).toBe(400)
  })

  it('SMTP 발송 실패 → 500 + error 메시지', async () => {
    sendMailMock.mockRejectedValue(Object.assign(new Error('connection refused'), { code: 'ECONNREFUSED' }))
    const res = await request(makeApp()).post('/api/send-email').send({
      to: 'user@example.com', subject: 'Hi', html: '<p>X</p>',
    })
    expect(res.status).toBe(500)
    expect(res.body.ok).toBe(false)
    expect(res.body.error).toContain('connection refused')
  })
})
