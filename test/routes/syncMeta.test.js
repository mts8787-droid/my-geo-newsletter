// C16 경량 신선도 메타 — /api/:mode/sync-meta (Render 대역폭 절감 2026-11-24)
import { describe, it, expect, afterAll } from 'vitest'
import express from 'express'
import request from 'supertest'
import { mkdtempSync, writeFileSync, existsSync, readFileSync, rmSync } from 'fs'
import { join } from 'path'
import { tmpdir } from 'os'

const TMP = mkdtempSync(join(tmpdir(), 'sync-meta-'))
process.env.DATA_DIR = TMP
const storage = await import('../../lib/storage.js')
const { syncRouter } = await import('../../routes/sync.js')
afterAll(() => { try { rmSync(TMP, { recursive: true, force: true }) } catch {} })

const app = express()
app.use(express.json({ limit: '10mb' }))
app.use(syncRouter)

describe('GET /api/:mode/sync-meta', () => {
  it('데이터 없으면 ok:false', async () => {
    const r = await request(app).get('/api/citation/sync-meta')
    expect(r.body).toEqual({ ok: false })
  })

  it('저장 시 사이드카 기록 → 본문 data 없이 1KB 미만 응답', async () => {
    const savedAt = Date.now() - 1000
    storage.writeModeSyncData('dashboard', { big: 'x'.repeat(500_000), savedAt })
    const r = await request(app).get('/api/dashboard/sync-meta')
    expect(r.body.ok).toBe(true)
    expect(r.body.data).toBeUndefined()
    expect(r.body.savedAt).toBe(savedAt)
    expect(r.body.stale).toBe(false)
    expect(r.body.ageMs).toBeGreaterThanOrEqual(1000)
    expect(r.text.length).toBeLessThan(1024)
  })

  it('사이드카 없는 옛 저장분은 1회 백필', async () => {
    const savedAt = Date.now() - 48 * 3600 * 1000
    writeFileSync(join(TMP, 'visibility-sync-data.json'), JSON.stringify({ a: 1, savedAt }))
    const r = await request(app).get('/api/visibility/sync-meta')
    expect(r.body).toMatchObject({ ok: true, savedAt, stale: true })
    expect(existsSync(join(TMP, 'visibility-sync-meta.json'))).toBe(true)
    expect(JSON.parse(readFileSync(join(TMP, 'visibility-sync-meta.json'), 'utf8'))).toEqual({ savedAt })
  })

  it('sync-data 응답의 신선도 필드는 기존과 동일', async () => {
    const r = await request(app).get('/api/dashboard/sync-data')
    expect(r.body.ok).toBe(true)
    expect(r.body.data.big.length).toBe(500_000)
    expect(Object.keys(r.body)).toEqual(['ok', 'data', 'savedAt', 'ageMs', 'stale', 'staleThresholdMs'])
  })
})
