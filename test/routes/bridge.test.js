import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import express from 'express'
import request from 'supertest'

// BigQuery 클라이언트 모킹 — 환경변수 설정·실제 GCP 호출 차단
const queryMock = vi.fn()
const fakeClient = { query: queryMock }
let bqConfigured = true  // 테스트별로 토글
vi.mock('../../lib/bigquery.js', () => ({
  getBigQueryClient: vi.fn(async () => bqConfigured ? fakeClient : null),
  tableRef: (table) => `\`test-project.semrush_data.${table}\``,
  BQ_DATASET: 'semrush_data',
}))

const { bridgeRouter } = await import('../../routes/bridge.js')

function makeApp() {
  const app = express()
  app.use(bridgeRouter)
  return app
}

beforeEach(() => {
  queryMock.mockReset()
  bqConfigured = true
  process.env.GCP_PROJECT_ID = 'test-project'
})
afterEach(() => { delete process.env.GCP_PROJECT_ID })

describe('GET /api/bridge/health', () => {
  it('정상 → 200 + configured:true', async () => {
    const res = await request(makeApp()).get('/api/bridge/health')
    expect(res.status).toBe(200)
    expect(res.body.ok).toBe(true)
    expect(res.body.configured).toBe(true)
    expect(res.body.dataset).toBe('semrush_data')
  })

  it('GCP_PROJECT_ID 미설정 → 503', async () => {
    bqConfigured = false
    const res = await request(makeApp()).get('/api/bridge/health')
    expect(res.status).toBe(503)
    expect(res.body.configured).toBe(false)
  })
})

describe('GET /api/bridge/freshness', () => {
  it('데이터 있음 → ageMs·stale 반환', async () => {
    const recent = new Date(Date.now() - 6 * 3600 * 1000).toISOString()  // 6시간 전
    queryMock.mockResolvedValue([[{
      last_loaded_at: { value: recent },
      days: 7,
      rows: 1234,
    }]])
    const res = await request(makeApp()).get('/api/bridge/freshness')
    expect(res.status).toBe(200)
    expect(res.body.ok).toBe(true)
    expect(res.body.stale).toBe(false)
    expect(res.body.ageMs).toBeGreaterThan(0)
    expect(res.body.days).toBe(7)
    expect(res.body.rows).toBe(1234)
  })

  it('24시간 초과 → stale:true', async () => {
    const old = new Date(Date.now() - 30 * 3600 * 1000).toISOString()
    queryMock.mockResolvedValue([[{ last_loaded_at: { value: old }, days: 1, rows: 10 }]])
    const res = await request(makeApp()).get('/api/bridge/freshness')
    expect(res.body.stale).toBe(true)
  })

  it('테이블 비어있음 → stale:true (last_loaded_at null)', async () => {
    queryMock.mockResolvedValue([[{ last_loaded_at: null, days: 0, rows: 0 }]])
    const res = await request(makeApp()).get('/api/bridge/freshness')
    expect(res.body.lastLoadedAt).toBeNull()
    expect(res.body.stale).toBe(true)
    expect(res.body.rows).toBe(0)
  })

  it('미설정 → 503', async () => {
    bqConfigured = false
    const res = await request(makeApp()).get('/api/bridge/freshness')
    expect(res.status).toBe(503)
  })

  it('BQ 쿼리 실패 → 502', async () => {
    queryMock.mockRejectedValue(new Error('access denied'))
    const res = await request(makeApp()).get('/api/bridge/freshness')
    expect(res.status).toBe(502)
    expect(res.body.error).toContain('BigQuery 쿼리 실패')
  })
})

describe('GET /api/bridge/ai-visibility', () => {
  it('기본 7일 → 결과 행 반환', async () => {
    queryMock.mockResolvedValue([[
      { model: 'search-gpt', date: '2026-05-01', visibility_avg: 42.5, sov_avg: 12.1, position_avg: 3.2, row_count: 10 },
      { model: 'perplexity', date: '2026-05-01', visibility_avg: 38.2, sov_avg: 10.5, position_avg: 4.1, row_count: 8 },
    ]])
    const res = await request(makeApp()).get('/api/bridge/ai-visibility')
    expect(res.status).toBe(200)
    expect(res.body.ok).toBe(true)
    expect(res.body.days).toBe(7)
    expect(res.body.model).toBeNull()
    expect(res.body.rows).toHaveLength(2)
    // SQL에 days 파라미터 전달
    expect(queryMock.mock.calls[0][0].params.days).toBe(7)
  })

  it('?days=30 — 범위 적용', async () => {
    queryMock.mockResolvedValue([[]])
    await request(makeApp()).get('/api/bridge/ai-visibility?days=30')
    expect(queryMock.mock.calls[0][0].params.days).toBe(30)
  })

  it('?days 비현실적 값 클램프 (1~90)', async () => {
    queryMock.mockResolvedValue([[]])
    await request(makeApp()).get('/api/bridge/ai-visibility?days=999999')
    expect(queryMock.mock.calls[0][0].params.days).toBe(90)
    queryMock.mockReset()
    queryMock.mockResolvedValue([[]])
    await request(makeApp()).get('/api/bridge/ai-visibility?days=0')
    expect(queryMock.mock.calls[0][0].params.days).toBe(7) // parseInt(0) || 7 → 7
  })

  it('?model=search-gpt — 화이트리스트 통과, 파라미터 전달', async () => {
    queryMock.mockResolvedValue([[]])
    await request(makeApp()).get('/api/bridge/ai-visibility?model=search-gpt')
    expect(queryMock.mock.calls[0][0].params.model).toBe('search-gpt')
    expect(queryMock.mock.calls[0][0].query).toContain('AND model = @model')
  })

  it('?model 화이트리스트 외 → 400 (SQL 인젝션 차단)', async () => {
    const res = await request(makeApp()).get("/api/bridge/ai-visibility?model=evil';DROP TABLE")
    expect(res.status).toBe(400)
    expect(res.body.error).toContain('유효하지 않은 모델')
    expect(queryMock).not.toHaveBeenCalled()
  })

  it('미설정 → 503', async () => {
    bqConfigured = false
    const res = await request(makeApp()).get('/api/bridge/ai-visibility')
    expect(res.status).toBe(503)
  })

  it('BQ 쿼리 실패 → 502', async () => {
    queryMock.mockRejectedValue(new Error('quota exceeded'))
    const res = await request(makeApp()).get('/api/bridge/ai-visibility')
    expect(res.status).toBe(502)
  })
})
