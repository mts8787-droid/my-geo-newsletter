import { describe, it, expect, beforeEach, vi } from 'vitest'
import express from 'express'
import request from 'supertest'

// storage 모킹 — 라우트 로직만 격리 검증
const fakeSnapshots = []
const fakeModeSnapshots = {}
vi.mock('../../lib/storage.js', () => ({
  SNAP_FILE: '/tmp/_test-snap.json',
  VALID_MODES: ['newsletter','dashboard','citation','monthly-report','weekly-report','visibility'],
  readSnapshots: vi.fn(() => [...fakeSnapshots]),
  writeSnapshots: vi.fn((list) => { fakeSnapshots.length = 0; fakeSnapshots.push(...list) }),
  readModeSnapshots: vi.fn((mode) => [...(fakeModeSnapshots[mode] || [])]),
  writeModeSnapshots: vi.fn((mode, list) => { fakeModeSnapshots[mode] = [...list] }),
  BACKUP_LIMIT: 5,
  readBackups: vi.fn(() => []),
  writeBackups: vi.fn(),
  readModeBackups: vi.fn(() => []),
  writeModeBackups: vi.fn(),
}))
vi.mock('../../lib/lock.js', () => ({
  withFileLock: (file, fn) => fn(),
}))

const { snapshotsRouter } = await import('../../routes/snapshots.js')

function makeApp() {
  const app = express()
  app.use(express.json())
  app.use(snapshotsRouter)
  return app
}

beforeEach(() => {
  fakeSnapshots.length = 0
  for (const k of Object.keys(fakeModeSnapshots)) delete fakeModeSnapshots[k]
})

describe('Snapshots router', () => {
  it('GET /api/snapshots empty', async () => {
    const r = await request(makeApp()).get('/api/snapshots')
    expect(r.status).toBe(200)
    expect(r.body).toEqual([])
  })

  it('POST /api/snapshots → 저장 + 반환', async () => {
    const r = await request(makeApp())
      .post('/api/snapshots')
      .send({ name: '4월호', data: { x: 1 } })
    expect(r.status).toBe(200)
    expect(r.body.ok).toBe(true)
    expect(r.body.snapshots[0].name).toBe('4월호')
    expect(r.body.snapshots[0].ts).toBeTypeOf('number')
  })

  it('POST /api/snapshots Zod 검증 실패 (name 빈문자)', async () => {
    const r = await request(makeApp())
      .post('/api/snapshots')
      .send({ name: '', data: { x: 1 } })
    expect(r.status).toBe(400)
    expect(r.body.error).toMatch(/name/)
  })

  it('POST /api/snapshots Zod 검증 실패 (data 누락)', async () => {
    const r = await request(makeApp())
      .post('/api/snapshots')
      .send({ name: '4월' })
    expect(r.status).toBe(400)
  })

  it('PUT /api/snapshots/:ts 변경', async () => {
    fakeSnapshots.push({ name: '3월호', ts: 1000, data: { v: 1 } })
    const r = await request(makeApp())
      .put('/api/snapshots/1000')
      .send({ data: { v: 2 } })
    expect(r.status).toBe(200)
    expect(r.body.snapshots[0].data.v).toBe(2)
    expect(r.body.snapshots[0].updatedAt).toBeTypeOf('number')
  })

  it('DELETE /api/snapshots/:ts', async () => {
    fakeSnapshots.push({ name: 'x', ts: 1000, data: {} })
    fakeSnapshots.push({ name: 'y', ts: 2000, data: {} })
    const r = await request(makeApp()).delete('/api/snapshots/1000')
    expect(r.status).toBe(200)
    expect(r.body.snapshots).toHaveLength(1)
    expect(r.body.snapshots[0].ts).toBe(2000)
  })

  it('GET /api/:mode/snapshots — invalid mode → 400', async () => {
    const r = await request(makeApp()).get('/api/wrongmode/snapshots')
    expect(r.status).toBe(400)
    expect(r.body.error).toMatch(/invalid mode/)
  })

  it('POST /api/:mode/snapshots 모드별 분리 저장', async () => {
    await request(makeApp()).post('/api/dashboard/snapshots').send({ name: 'd', data: {} })
    await request(makeApp()).post('/api/visibility/snapshots').send({ name: 'v', data: {} })
    expect(fakeModeSnapshots.dashboard).toHaveLength(1)
    expect(fakeModeSnapshots.visibility).toHaveLength(1)
  })

  it('POST /api/:mode/snapshots 50건 제한', async () => {
    for (let i = 0; i < 60; i++) {
      await request(makeApp()).post('/api/dashboard/snapshots').send({ name: `s${i}`, data: {} })
    }
    expect(fakeModeSnapshots.dashboard).toHaveLength(50)
  })

  it('POST /api/:mode/snapshots/import — 새 항목 병합 + ts 내림차순', async () => {
    fakeModeSnapshots.newsletter = [{ name: '기존', ts: 2000, data: { v: 1 } }]
    const r = await request(makeApp())
      .post('/api/newsletter/snapshots/import')
      .send({ snapshots: [
        { name: '로컬A', ts: 3000, data: { v: 2 } },
        { name: '로컬B', ts: 1000, data: { v: 3 }, updatedAt: 1500 },
      ] })
    expect(r.status).toBe(200)
    expect(r.body.ok).toBe(true)
    expect(r.body.imported).toBe(2)
    expect(r.body.skipped).toBe(0)
    expect(r.body.snapshots.map(s => s.ts)).toEqual([3000, 2000, 1000])
    expect(r.body.snapshots[2].updatedAt).toBe(1500)
  })

  it('POST /api/:mode/snapshots/import — ts 중복은 기존 유지 (skip)', async () => {
    fakeModeSnapshots.newsletter = [{ name: '기존', ts: 2000, data: { v: 'server' } }]
    const r = await request(makeApp())
      .post('/api/newsletter/snapshots/import')
      .send({ snapshots: [
        { name: '로컬 덮어쓰기 시도', ts: 2000, data: { v: 'local' } },
        { name: '신규', ts: 5000, data: {} },
      ] })
    expect(r.status).toBe(200)
    expect(r.body.imported).toBe(1)
    expect(r.body.skipped).toBe(1)
    const kept = r.body.snapshots.find(s => s.ts === 2000)
    expect(kept.name).toBe('기존')
    expect(kept.data.v).toBe('server')
  })

  it('POST /api/:mode/snapshots/import — Zod 검증 실패 (snapshots 비어있음)', async () => {
    const r = await request(makeApp())
      .post('/api/newsletter/snapshots/import')
      .send({ snapshots: [] })
    expect(r.status).toBe(400)
  })
})
