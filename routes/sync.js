// ─── Sync Data API — /api/sync-data, /api/:mode/sync-data ─────────────────
import { Router } from 'express'
import {
  readSyncData, writeSyncData,
  readModeSyncData, writeModeSyncData,
} from '../lib/storage.js'
import { validateMode } from '../lib/middleware.js'

export const STALE_THRESHOLD_MS = 24 * 60 * 60 * 1000

export const syncRouter = Router()

// 글로벌 (newsletter 호환)
syncRouter.get('/api/sync-data', (req, res) => {
  const data = readSyncData()
  if (!data) return res.json({ ok: false, data: null })
  res.json({ ok: true, data })
})

syncRouter.post('/api/sync-data', (req, res) => {
  const { data } = req.body || {}
  if (!data) return res.status(400).json({ ok: false, error: 'data 필수' })
  writeSyncData({ ...data, savedAt: Date.now() })
  console.log('[SYNC-DATA] Saved at', new Date().toISOString())
  res.json({ ok: true })
})

// 모드별 — C16 신선도 메타 응답 포함
syncRouter.get('/api/:mode/sync-data', validateMode, (req, res) => {
  const data = readModeSyncData(req.params.mode)
  if (!data) return res.json({ ok: false, data: null })
  const savedAt = typeof data.savedAt === 'number' ? data.savedAt : null
  const ageMs = savedAt ? Math.max(0, Date.now() - savedAt) : null
  const stale = ageMs != null ? ageMs > STALE_THRESHOLD_MS : true
  res.json({ ok: true, data, savedAt, ageMs, stale, staleThresholdMs: STALE_THRESHOLD_MS })
})

syncRouter.post('/api/:mode/sync-data', validateMode, (req, res) => {
  const { mode } = req.params
  const { data } = req.body || {}
  if (!data) return res.status(400).json({ ok: false, error: 'data 필수' })
  writeModeSyncData(mode, { ...data, savedAt: Date.now() })
  console.log(`[SYNC-DATA:${mode}] Saved at`, new Date().toISOString())
  res.json({ ok: true })
})
