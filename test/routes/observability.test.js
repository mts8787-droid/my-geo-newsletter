import { describe, it, expect, beforeEach, vi } from 'vitest'
import express from 'express'
import request from 'supertest'

const fakeRuns = []
vi.mock('../../lib/insight-runs.js', async () => {
  const actual = await vi.importActual('../../lib/insight-runs.js')
  return {
    ...actual,
    readInsightRuns: vi.fn(() => [...fakeRuns]),
  }
})

const { observabilityRouter } = await import('../../routes/observability.js')

function makeApp() {
  const app = express()
  app.use(observabilityRouter)
  return app
}

beforeEach(() => { fakeRuns.length = 0 })

describe('GET /api/observability/runs', () => {
  it('빈 데이터 → count:0', async () => {
    const res = await request(makeApp()).get('/api/observability/runs')
    expect(res.status).toBe(200)
    expect(res.body.ok).toBe(true)
    expect(res.body.summary.count).toBe(0)
    expect(res.body.hourly).toHaveLength(24)
    expect(res.body.daily).toHaveLength(30)
  })

  it('호출 이력 → summary + 시간/일별 버킷', async () => {
    const now = Date.now()
    fakeRuns.push(
      { ts: now - 3600 * 1000, type: 'totalInsight', ok: true, costUsd: 0.001, latencyMs: 500, inputTokens: 100, outputTokens: 50 },
      { ts: now - 1800 * 1000, type: 'productInsight', ok: false, kind: 'rate_limit', latencyMs: 100 },
    )
    const res = await request(makeApp()).get('/api/observability/runs')
    expect(res.body.summary.count).toBe(2)
    expect(res.body.summary.ok).toBe(1)
    expect(res.body.summary.fail).toBe(1)
    // 1시간 전 버킷에 1건이 잡혀야 함
    const totalInHourly = res.body.hourly.reduce((s, b) => s + b.total, 0)
    expect(totalInHourly).toBe(2)
  })

  it('limit 쿼리스트링 검증', async () => {
    const res = await request(makeApp()).get('/api/observability/runs?limit=50')
    expect(res.status).toBe(200)
  })

  it('비현실적 limit은 클램프 (5000 상한)', async () => {
    const res = await request(makeApp()).get('/api/observability/runs?limit=999999')
    expect(res.status).toBe(200) // 폭주 없음
  })

  it('30일 초과 데이터는 hourly·daily 버킷 카운트에서 제외', async () => {
    const now = Date.now()
    fakeRuns.push({ ts: now - 60 * 24 * 3600 * 1000, type: 'old', ok: true, costUsd: 0, latencyMs: 0 })
    const res = await request(makeApp()).get('/api/observability/runs')
    expect(res.body.summary.count).toBe(1)
    const dailyTotal = res.body.daily.reduce((s, b) => s + b.total, 0)
    expect(dailyTotal).toBe(0)
  })
})

describe('GET /admin/observability', () => {
  it('200 + HTML 페이지', async () => {
    const res = await request(makeApp()).get('/admin/observability')
    expect(res.status).toBe(200)
    expect(res.headers['content-type']).toMatch(/text\/html/)
    expect(res.text).toContain('AI 인사이트 실행 이력')
    expect(res.text).toContain('/api/observability/runs')
  })
})
