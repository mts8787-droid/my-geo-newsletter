import { describe, it, expect, beforeEach, vi } from 'vitest'
import express from 'express'
import request from 'supertest'

// storage 모킹 — 라우트 로직만 격리 검증 (per-item API 를 in-memory 로 재현)
const fakeSnapshots = []
const fakeModeSnapshots = {}
const fakeModeBackups = {}
const _meta = ({ name, ts, updatedAt, deletedAt }) => ({
  name, ts,
  ...(updatedAt != null ? { updatedAt } : {}),
  ...(deletedAt != null ? { deletedAt } : {}),
})
vi.mock('../../lib/storage.js', () => ({
  SNAP_FILE: '/tmp/_test-snap.json',
  VALID_MODES: ['newsletter','dashboard','citation','monthly-report','weekly-report','visibility'],
  readSnapshots: vi.fn(() => [...fakeSnapshots]),
  writeSnapshots: vi.fn((list) => { fakeSnapshots.length = 0; fakeSnapshots.push(...list) }),
  BACKUP_LIMIT: 5,
  readBackups: vi.fn(() => []),
  writeBackups: vi.fn(),
  // per-item API (실제 storage 의 파일 분리 저장 시맨틱을 in-memory 재현)
  listModeSnapshots: vi.fn((mode) => (fakeModeSnapshots[mode] || []).map(_meta)),
  readModeSnapshot: vi.fn((mode, ts) => (fakeModeSnapshots[mode] || []).find(s => s.ts === ts) || null),
  saveModeSnapshot: vi.fn((mode, snap, cap = 50) => {
    const arr = [snap, ...(fakeModeSnapshots[mode] || []).filter(s => s.ts !== snap.ts)]
      .sort((a, b) => b.ts - a.ts).slice(0, cap)
    fakeModeSnapshots[mode] = arr
    return arr.map(_meta)
  }),
  deleteModeSnapshot: vi.fn((mode, ts) => {
    const cur = fakeModeSnapshots[mode] || []
    const removed = cur.find(s => s.ts === ts) || null
    fakeModeSnapshots[mode] = cur.filter(s => s.ts !== ts)
    return { removed, index: fakeModeSnapshots[mode].map(_meta) }
  }),
  listModeBackups: vi.fn((mode) => (fakeModeBackups[mode] || []).map(_meta)),
  readModeBackup: vi.fn((mode, ts) => (fakeModeBackups[mode] || []).find(s => s.ts === ts) || null),
  pushModeBackup: vi.fn((mode, snap) => {
    const arr = [snap, ...(fakeModeBackups[mode] || []).filter(s => s.ts !== snap.ts)]
      .sort((a, b) => b.ts - a.ts).slice(0, 5)
    fakeModeBackups[mode] = arr
    return arr.map(_meta)
  }),
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
  for (const k of Object.keys(fakeModeBackups)) delete fakeModeBackups[k]
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

  it('PUT /api/snapshots/:ts 변경 — 응답은 light(데이터 미포함), 저장소엔 반영', async () => {
    fakeSnapshots.push({ name: '3월호', ts: 1000, data: { v: 1 } })
    const r = await request(makeApp())
      .put('/api/snapshots/1000')
      .send({ data: { v: 2 } })
    expect(r.status).toBe(200)
    expect(r.body.snapshots[0].updatedAt).toBeTypeOf('number')
    expect(r.body.snapshots[0].data).toBeUndefined()        // 목록 응답은 light
    expect(fakeSnapshots[0].data.v).toBe(2)                 // 저장소엔 실제 반영
  })

  it('GET /api/snapshots/:ts 단건 — data 포함 / 미존재 404', async () => {
    fakeSnapshots.push({ name: '3월호', ts: 1000, data: { v: 1 } })
    const ok = await request(makeApp()).get('/api/snapshots/1000')
    expect(ok.status).toBe(200)
    expect(ok.body.snapshot.data.v).toBe(1)
    const miss = await request(makeApp()).get('/api/snapshots/9999')
    expect(miss.status).toBe(404)
  })

  it('GET /api/:mode/snapshots 목록은 light (data 없음)', async () => {
    fakeModeSnapshots.newsletter = [{ name: '6월호', ts: 1000, data: { big: 'x'.repeat(100) } }]
    const r = await request(makeApp()).get('/api/newsletter/snapshots')
    expect(r.status).toBe(200)
    expect(r.body[0].name).toBe('6월호')
    expect(r.body[0].data).toBeUndefined()
  })

  it('GET /api/:mode/snapshots/:ts 단건 — data 포함', async () => {
    fakeModeSnapshots.newsletter = [{ name: '6월호', ts: 1000, data: { v: 7 } }]
    const r = await request(makeApp()).get('/api/newsletter/snapshots/1000')
    expect(r.status).toBe(200)
    expect(r.body.snapshot.data.v).toBe(7)
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
    // 응답은 light — 실제 저장소에서 기존 데이터 유지 확인
    const stored = fakeModeSnapshots.newsletter.find(s => s.ts === 2000)
    expect(stored.data.v).toBe('server')
  })

  it('POST /api/:mode/snapshots/import — Zod 검증 실패 (snapshots 비어있음)', async () => {
    const r = await request(makeApp())
      .post('/api/newsletter/snapshots/import')
      .send({ snapshots: [] })
    expect(r.status).toBe(400)
  })
})
