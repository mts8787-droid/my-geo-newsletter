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
    const insightText = '이번 달 LG 가시성은 전월 대비 2.3%p 상승했습니다. 주요 요인은 미국·독일 시장에서의 OLED 카테고리 강세입니다.'
    messagesCreateMock.mockResolvedValue({
      content: [{ text: insightText }],
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
    expect(res.body.insight).toBe(insightText)
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

  it('빈 응답 → 502 + kind:invalid_output (N3)', async () => {
    messagesCreateMock.mockResolvedValue({
      content: [{ text: '' }],
      usage: { input_tokens: 10, output_tokens: 0 },
      stop_reason: 'end_turn',
    })
    const res = await request(makeApp()).post('/api/generate-insight').send({
      type: 'totalInsight', data: { x: 1 },
    })
    expect(res.status).toBe(502)
    expect(res.body.kind).toBe('invalid_output')
    expect(appendInsightRunMock.mock.calls[0][0].reason).toBe('empty')
  })

  it('거절 응답 → 502 + kind:invalid_output/refusal (N3)', async () => {
    messagesCreateMock.mockResolvedValue({
      content: [{ text: '죄송합니다. 도와드릴 수 없습니다. 다른 질문이 있으시면 알려주세요.' }],
      usage: { input_tokens: 10, output_tokens: 20 },
      stop_reason: 'end_turn',
    })
    const res = await request(makeApp()).post('/api/generate-insight').send({
      type: 'totalInsight', data: { x: 1 },
    })
    expect(res.status).toBe(502)
    expect(res.body.kind).toBe('invalid_output')
    expect(appendInsightRunMock.mock.calls[0][0].reason).toBe('refusal')
  })

  it('하한 미달 응답 → 502 + kind:invalid_output/too_short (N3)', async () => {
    messagesCreateMock.mockResolvedValue({
      content: [{ text: '음.' }],
      usage: { input_tokens: 10, output_tokens: 1 },
      stop_reason: 'end_turn',
    })
    const res = await request(makeApp()).post('/api/generate-insight').send({
      type: 'totalInsight', data: { x: 1 },
    })
    expect(res.status).toBe(502)
    expect(res.body.kind).toBe('invalid_output')
    expect(appendInsightRunMock.mock.calls[0][0].reason).toBe('too_short')
  })

  it('aiSettings.useTools=true → tool 루프 활성화, tool_use 처리 후 응답 (C1)', async () => {
    fakeAiSettings.useTools = true
    // 첫 응답: lookup tool_use
    messagesCreateMock.mockResolvedValueOnce({
      content: [
        { type: 'text', text: '데이터 확인 중' },
        { type: 'tool_use', id: 'tu1', name: 'lookup', input: { path: 'products[0].score' } },
      ],
      usage: { input_tokens: 50, output_tokens: 20 },
      stop_reason: 'tool_use',
    })
    // 두 번째 응답: 텍스트 (충분히 긴 길이로 검증 통과)
    messagesCreateMock.mockResolvedValueOnce({
      content: [{ type: 'text', text: 'lookup 결과 80을 근거로 LG의 가시성이 강세를 보입니다. 추가 검토가 필요합니다.' }],
      usage: { input_tokens: 60, output_tokens: 30 },
      stop_reason: 'end_turn',
    })
    const res = await request(makeApp()).post('/api/generate-insight').send({
      type: 'totalInsight',
      data: { products: [{ score: 80 }] },
    })
    expect(res.status).toBe(200)
    expect(res.body.ok).toBe(true)
    expect(messagesCreateMock).toHaveBeenCalledTimes(2)
    // 첫 호출에 tools 포함되어야 함
    expect(messagesCreateMock.mock.calls[0][0].tools).toBeDefined()
    expect(messagesCreateMock.mock.calls[0][0].tools[0].name).toBe('lookup')
    // 두 번째 호출의 messages 안에 tool_result 포함
    const secondMessages = messagesCreateMock.mock.calls[1][0].messages
    const toolResultMsg = secondMessages.find(m => Array.isArray(m.content) && m.content.some(c => c.type === 'tool_result'))
    expect(toolResultMsg).toBeDefined()
    // observability 적재에 toolCalls 카운트 포함
    expect(appendInsightRunMock.mock.calls[0][0].toolCalls).toBe(1)
    expect(appendInsightRunMock.mock.calls[0][0].steps).toBe(1)
    fakeAiSettings.useTools = false  // cleanup
  })

  it('aiSettings.useTools=false → tools 미전달 (기본 동작)', async () => {
    fakeAiSettings.useTools = false
    messagesCreateMock.mockResolvedValue({
      content: [{ text: '단일 호출 — 도구 없이 충분히 긴 응답 본문을 반환합니다.' }],
      usage: { input_tokens: 100, output_tokens: 50 },
      stop_reason: 'end_turn',
    })
    const res = await request(makeApp()).post('/api/generate-insight').send({
      type: 'totalInsight', data: { x: 1 },
    })
    expect(res.status).toBe(200)
    expect(messagesCreateMock.mock.calls[0][0].tools).toBeUndefined()
  })
})
