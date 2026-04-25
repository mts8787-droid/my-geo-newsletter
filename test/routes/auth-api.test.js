// ADMIN_PASSWORD을 import 이전에 설정 (lib/auth.js 모듈 로드 시 process.exit 방지)
process.env.ADMIN_PASSWORD = 'test-admin-pw'

import { describe, it, expect, beforeEach } from 'vitest'
import express from 'express'
import request from 'supertest'

const { authRouter, loginAttempts } = await import('../../routes/auth-api.js')
const { activeSessions } = await import('../../lib/auth.js')

function makeApp() {
  const app = express()
  app.use(express.json())
  app.set('trust proxy', 1)
  app.use(authRouter)
  return app
}

beforeEach(() => {
  activeSessions.clear()
  loginAttempts.clear()
})

describe('GET /admin/login', () => {
  it('미로그인 → HTML 로그인 페이지', async () => {
    const res = await request(makeApp()).get('/admin/login')
    expect(res.status).toBe(200)
    expect(res.headers['content-type']).toMatch(/text\/html/)
    expect(res.text).toContain('Admin Login')
    expect(res.text).toContain('GEO Newsletter Management')
  })

  it('이미 로그인 상태(쿠키 유효) → /admin/ 리다이렉트', async () => {
    // 로그인하여 쿠키 획득
    const agent = request.agent(makeApp())
    await agent.post('/api/auth/login').send({ password: 'test-admin-pw' })
    const res = await agent.get('/admin/login')
    expect(res.status).toBe(302)
    expect(res.headers.location).toBe('/admin/')
  })
})

describe('POST /api/auth/login', () => {
  it('정상 비밀번호 → ok:true + admin_token 쿠키', async () => {
    const res = await request(makeApp())
      .post('/api/auth/login')
      .send({ password: 'test-admin-pw' })
    expect(res.status).toBe(200)
    expect(res.body.ok).toBe(true)
    const setCookie = res.headers['set-cookie']?.[0] || ''
    expect(setCookie).toMatch(/admin_token=/)
    expect(setCookie).toMatch(/HttpOnly/i)
    expect(setCookie).toMatch(/SameSite=Lax/i)
    expect(activeSessions.size).toBe(1)
  })

  it('잘못된 비밀번호 → 401', async () => {
    const res = await request(makeApp())
      .post('/api/auth/login')
      .send({ password: 'wrong' })
    expect(res.status).toBe(401)
    expect(res.body.ok).toBe(false)
    expect(res.body.error).toContain('비밀번호')
    expect(activeSessions.size).toBe(0)
  })

  it('비밀번호 없는 본문 → 401', async () => {
    const res = await request(makeApp())
      .post('/api/auth/login')
      .send({})
    expect(res.status).toBe(401)
  })

  it('5회 연속 실패 → 429 (rate-limit)', async () => {
    const app = makeApp()
    for (let i = 0; i < 5; i++) {
      await request(app).post('/api/auth/login').send({ password: 'wrong' })
    }
    const res = await request(app).post('/api/auth/login').send({ password: 'wrong' })
    expect(res.status).toBe(429)
    expect(res.body.error).toContain('너무 많은 로그인 시도')
  })

  it('성공 후에는 시도 카운터 초기화', async () => {
    const app = makeApp()
    // 4회 실패 → 한 번 성공 → 다시 실패해도 1회로 시작
    for (let i = 0; i < 4; i++) {
      await request(app).post('/api/auth/login').send({ password: 'wrong' })
    }
    await request(app).post('/api/auth/login').send({ password: 'test-admin-pw' })
    // 다시 4번 실패해도 429가 아니어야 함
    for (let i = 0; i < 4; i++) {
      const res = await request(app).post('/api/auth/login').send({ password: 'wrong' })
      expect(res.status).toBe(401)
    }
  })
})

describe('POST /api/auth/logout', () => {
  it('로그아웃 → 세션 토큰 폐기 + 쿠키 삭제', async () => {
    const agent = request.agent(makeApp())
    await agent.post('/api/auth/login').send({ password: 'test-admin-pw' })
    expect(activeSessions.size).toBe(1)

    const res = await agent.post('/api/auth/logout')
    expect(res.status).toBe(200)
    expect(res.body.ok).toBe(true)
    expect(activeSessions.size).toBe(0)
    const clearCookie = res.headers['set-cookie']?.[0] || ''
    expect(clearCookie).toMatch(/admin_token=;/)
  })

  it('쿠키 없이 로그아웃 호출도 200 (idempotent)', async () => {
    const res = await request(makeApp()).post('/api/auth/logout')
    expect(res.status).toBe(200)
    expect(res.body.ok).toBe(true)
  })
})
