import { describe, it, expect, beforeEach, vi } from 'vitest'
import express from 'express'
import request from 'supertest'

const fake = { list: [] }
vi.mock('../../lib/storage.js', () => ({
  readArchives: vi.fn(() => [...fake.list]),
  writeArchives: vi.fn((l) => { fake.list = [...l] }),
}))

const { archivesRouter } = await import('../../routes/archives.js')

function makeApp() {
  const app = express()
  app.use(express.json())
  app.use(archivesRouter)
  return app
}

beforeEach(() => { fake.list = [] })

describe('Archives router', () => {
  it('GET 빈 목록', async () => {
    const r = await request(makeApp()).get('/api/archives')
    expect(r.body.ok).toBe(true)
    expect(r.body.archives).toEqual([])
  })

  it('POST 신규 entry', async () => {
    const r = await request(makeApp())
      .post('/api/archives')
      .send({ period: '2026-04', insights: { totalInsight: '본문 …' } })
    expect(r.status).toBe(200)
    expect(r.body.archives).toHaveLength(1)
    expect(r.body.archives[0].period).toBe('2026-04')
    expect(r.body.archives[0].id).toMatch(/^[a-f0-9]{16}$/)
  })

  it('POST 동일 period 재등록 → 덮어쓰기 (id 유지)', async () => {
    fake.list = [{ id: 'fixed', period: '2026-04', insights: { x: '구버전' }, createdAt: 1 }]
    const r = await request(makeApp())
      .post('/api/archives')
      .send({ period: '2026-04', insights: { x: '신버전' } })
    expect(r.body.archives).toHaveLength(1)
    expect(r.body.archives[0].id).toBe('fixed')
    expect(r.body.archives[0].insights.x).toBe('신버전')
  })

  it('POST insights 비어있으면 400', async () => {
    const r = await request(makeApp())
      .post('/api/archives')
      .send({ period: '2026-04', insights: {} })
    expect(r.status).toBe(400)
  })

  it('DELETE id로 제거', async () => {
    fake.list = [{ id: 'a', period: 'p1', insights: {} }, { id: 'b', period: 'p2', insights: {} }]
    const r = await request(makeApp()).delete('/api/archives/a')
    expect(r.body.archives).toHaveLength(1)
    expect(r.body.archives[0].id).toBe('b')
  })
})
