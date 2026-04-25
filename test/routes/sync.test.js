import { describe, it, expect, beforeEach, vi } from 'vitest'
import express from 'express'
import request from 'supertest'

const fakeGlobal = { current: null }
const fakeMode = {}
vi.mock('../../lib/storage.js', () => ({
  VALID_MODES: ['newsletter','dashboard','visibility'],
  readSyncData: vi.fn(() => fakeGlobal.current),
  writeSyncData: vi.fn((d) => { fakeGlobal.current = d }),
  readModeSyncData: vi.fn((mode) => fakeMode[mode] || null),
  writeModeSyncData: vi.fn((mode, d) => { fakeMode[mode] = d }),
}))

const { syncRouter, STALE_THRESHOLD_MS } = await import('../../routes/sync.js')

function makeApp() {
  const app = express()
  app.use(express.json())
  app.use(syncRouter)
  return app
}

beforeEach(() => {
  fakeGlobal.current = null
  for (const k of Object.keys(fakeMode)) delete fakeMode[k]
})

describe('Sync router (글로벌)', () => {
  it('GET 빈 상태', async () => {
    const r = await request(makeApp()).get('/api/sync-data')
    expect(r.status).toBe(200)
    expect(r.body).toEqual({ ok: false, data: null })
  })

  it('POST → savedAt 자동 부착', async () => {
    const r = await request(makeApp()).post('/api/sync-data').send({ data: { x: 1 } })
    expect(r.status).toBe(200)
    expect(r.body.ok).toBe(true)
    expect(fakeGlobal.current.savedAt).toBeTypeOf('number')
    expect(fakeGlobal.current.x).toBe(1)
  })

  it('POST data 누락 → 400 (Zod)', async () => {
    const r = await request(makeApp()).post('/api/sync-data').send({})
    expect(r.status).toBe(400)
  })
})

describe('Sync router (모드별 + 신선도)', () => {
  it('GET 모드별 빈 상태', async () => {
    const r = await request(makeApp()).get('/api/visibility/sync-data')
    expect(r.status).toBe(200)
    expect(r.body).toEqual({ ok: false, data: null })
  })

  it('GET — invalid mode 400', async () => {
    const r = await request(makeApp()).get('/api/wrongmode/sync-data')
    expect(r.status).toBe(400)
  })

  it('POST 후 GET — savedAt/ageMs/stale 응답', async () => {
    const t0 = Date.now()
    await request(makeApp()).post('/api/dashboard/sync-data').send({ data: { y: 2 } })
    const r = await request(makeApp()).get('/api/dashboard/sync-data')
    expect(r.status).toBe(200)
    expect(r.body.ok).toBe(true)
    expect(r.body.savedAt).toBeGreaterThanOrEqual(t0)
    expect(r.body.ageMs).toBeGreaterThanOrEqual(0)
    expect(r.body.stale).toBe(false)
    expect(r.body.staleThresholdMs).toBe(STALE_THRESHOLD_MS)
  })

  it('GET — 24h 지난 데이터는 stale=true', async () => {
    fakeMode.dashboard = { x: 1, savedAt: Date.now() - (25 * 60 * 60 * 1000) }
    const r = await request(makeApp()).get('/api/dashboard/sync-data')
    expect(r.body.stale).toBe(true)
    expect(r.body.ageMs).toBeGreaterThan(STALE_THRESHOLD_MS)
  })

  it('STALE_THRESHOLD_MS = 24h', () => {
    expect(STALE_THRESHOLD_MS).toBe(24 * 60 * 60 * 1000)
  })
})
