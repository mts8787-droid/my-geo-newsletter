import { describe, it, expect, beforeEach, vi } from 'vitest'
import express from 'express'
import request from 'supertest'

const fake = { current: { promptRules: '기본', model: 'claude-sonnet-4-5', maxTokens: 500 } }
vi.mock('../../lib/storage.js', () => ({
  readAiSettings: vi.fn(() => ({ ...fake.current })),
  writeAiSettings: vi.fn((s) => { fake.current = { ...s } }),
}))

const { aiSettingsRouter } = await import('../../routes/ai-settings.js')

function makeApp() {
  const app = express()
  app.use(express.json())
  app.use(aiSettingsRouter)
  return app
}

beforeEach(() => {
  fake.current = { promptRules: '기본', model: 'claude-sonnet-4-5', maxTokens: 500 }
})

describe('AI Settings router', () => {
  it('GET 기본 설정', async () => {
    const r = await request(makeApp()).get('/api/ai-settings')
    expect(r.status).toBe(200)
    expect(r.body.ok).toBe(true)
    expect(r.body.settings.model).toMatch(/sonnet/)
  })

  it('PUT 부분 업데이트 — model만', async () => {
    const r = await request(makeApp())
      .put('/api/ai-settings')
      .send({ model: 'claude-opus-4-7' })
    expect(r.status).toBe(200)
    expect(fake.current.model).toBe('claude-opus-4-7')
    expect(fake.current.promptRules).toBe('기본') // 기존 값 유지
  })

  it('PUT maxTokens 문자열 입력 → 정수 변환', async () => {
    const r = await request(makeApp())
      .put('/api/ai-settings')
      .send({ maxTokens: '2048' })
    expect(r.status).toBe(200)
    expect(fake.current.maxTokens).toBe(2048)
  })

  it('PUT 빈 body → 200 (전부 옵셔널)', async () => {
    const r = await request(makeApp()).put('/api/ai-settings').send({})
    expect(r.status).toBe(200)
  })
})
