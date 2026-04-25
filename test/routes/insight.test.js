import { describe, it, expect, beforeEach, vi } from 'vitest'
import express from 'express'
import request from 'supertest'

// ─── Anthropic SDK 모킹 ─────────────────────────────────────────────────
const messagesCreateMock = vi.fn()
vi.mock('@anthropic-ai/sdk', () => ({
  default: function MockAnthropic() {
    return { messages: { create: messagesCreateMock } }
  },
}))

// storage 모킹
const fakeArchives = []
const fakeAiSettings = { promptRules: '', model: 'claude-sonnet-4-5-20251001', maxTokens: 4096 }
vi.mock('../../lib/storage.js', () => ({
  readArchives: vi.fn(() => [...fakeArchives]),
  readAiSettings: vi.fn(() => ({ ...fakeAiSettings })),
}))

// insight-runs 모킹 (디스크 쓰기 차단)
const appendInsightRunMock = vi.fn()
vi.mock('../../lib/insight-runs.js', () => ({
  appendInsightRun: (...args) => appendInsightRunMock(...args),
}))

const { insightRouter } = await import('../../routes/insight.js')

function makeApp() {
  const app = express()
  app.use(express.json({ limit: '10mb' }))
  app.use(insightRouter)
  return app
}

beforeEach(() => {
  messagesCreateMock.mockReset()
  appendInsightRunMock.mockReset()
  fakeArchives.length = 0
  process.env.ANTHROPIC_API_KEY = 'sk-test-key'
})

describe('POST /api/generate-insight', () => {
  it('정상 호출 → ok:true + insight 본문 반환', async () => {
    messagesCreateMock.mockResolvedValue({
      content: [{ text: '인사이트 본문' }],
      usage: { input_tokens: 100, output_tokens: 50 },
      stop_reason: 'end_turn',
    })
    const res = await request(makeApp()).post('/api/generate-insight').send({
      type: 'totalInsight',
      data: { foo: 'bar' },
      lang: 'ko',
    })
    expect(res.status).toBe(200)
    expect(res.body.ok).toBe(true)
    expect(res.body.insight).toBe('인사이트 본문')
    expect(messagesCreateMock).toHaveBeenCalledOnce()
    expect(appendInsightRunMock).toHaveBeenCalledOnce()
    const run = appendInsightRunMock.mock.calls[0][0]
    expect(run.ok).toBe(true)
    expect(run.inputTokens).toBe(100)
    expect(run.outputTokens).toBe(50)
  })

  it('ANTHROPIC_API_KEY 미설정 → 500', async () => {
    delete process.env.ANTHROPIC_API_KEY
    const res = await request(makeApp()).post('/api/generate-insight').send({
      type: 'totalInsight', data: { x: 1 },
    })
    expect(res.status).toBe(500)
    expect(res.body.error).toContain('ANTHROPIC_API_KEY')
    expect(messagesCreateMock).not.toHaveBeenCalled()
  })

  it('type 누락 → 400 (Zod)', async () => {
    const res = await request(makeApp()).post('/api/generate-insight').send({ data: { x: 1 } })
    expect(res.status).toBe(400)
    expect(messagesCreateMock).not.toHaveBeenCalled()
  })

  it('data 누락 → 400 (Zod)', async () => {
    const res = await request(makeApp()).post('/api/generate-insight').send({ type: 'totalInsight' })
    expect(res.status).toBe(400)
  })

  it('429 rate_limit → 429 + kind:rate_limit', async () => {
    messagesCreateMock.mockRejectedValue(Object.assign(new Error('rate limit exceeded'), { status: 429 }))
    const res = await request(makeApp()).post('/api/generate-insight').send({
      type: 'totalInsight', data: { x: 1 },
    })
    expect(res.status).toBe(429)
    expect(res.body.kind).toBe('rate_limit')
    expect(appendInsightRunMock).toHaveBeenCalledOnce()
    expect(appendInsightRunMock.mock.calls[0][0].ok).toBe(false)
    expect(appendInsightRunMock.mock.calls[0][0].kind).toBe('rate_limit')
  })

  it('529 overloaded → 503 + kind:overloaded', async () => {
    messagesCreateMock.mockRejectedValue(Object.assign(new Error('overloaded'), { status: 529 }))
    const res = await request(makeApp()).post('/api/generate-insight').send({
      type: 'totalInsight', data: { x: 1 },
    })
    expect(res.status).toBe(503)
    expect(res.body.kind).toBe('overloaded')
  })

  it('400 bad_request → 400 + kind:bad_request', async () => {
    messagesCreateMock.mockRejectedValue(Object.assign(new Error('bad input'), { status: 400 }))
    const res = await request(makeApp()).post('/api/generate-insight').send({
      type: 'totalInsight', data: { x: 1 },
    })
    expect(res.status).toBe(400)
    expect(res.body.kind).toBe('bad_request')
  })

  it('401 auth → 502 + kind:auth (업스트림 인증 실패)', async () => {
    messagesCreateMock.mockRejectedValue(Object.assign(new Error('unauthorized'), { status: 401 }))
    const res = await request(makeApp()).post('/api/generate-insight').send({
      type: 'totalInsight', data: { x: 1 },
    })
    expect(res.status).toBe(502)
    expect(res.body.kind).toBe('auth')
  })

  it('500 upstream_5xx → 502', async () => {
    messagesCreateMock.mockRejectedValue(Object.assign(new Error('upstream'), { status: 500 }))
    const res = await request(makeApp()).post('/api/generate-insight').send({
      type: 'totalInsight', data: { x: 1 },
    })
    expect(res.status).toBe(502)
    expect(res.body.kind).toBe('upstream_5xx')
  })

  it('일반 에러 → 500 + kind:error', async () => {
    messagesCreateMock.mockRejectedValue(new Error('unknown failure'))
    const res = await request(makeApp()).post('/api/generate-insight').send({
      type: 'totalInsight', data: { x: 1 },
    })
    expect(res.status).toBe(500)
    expect(res.body.kind).toBe('error')
  })
})
