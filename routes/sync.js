// ─── Sync Data API — /api/sync-data, /api/:mode/sync-data ─────────────────
import { Router } from 'express'
import {
  readSyncData, writeSyncData,
  readModeSyncData, writeModeSyncData, readModeSyncMeta,
} from '../lib/storage.js'
import { validateMode } from '../lib/middleware.js'
import { validateBody, SyncDataPostSchema } from '../lib/validate.js'
import { logFor } from '../lib/logger.js'

const log = logFor('sync')

export const STALE_THRESHOLD_MS = 24 * 60 * 60 * 1000

export const syncRouter = Router()

// 글로벌 (newsletter 호환)
syncRouter.get('/api/sync-data', (req, res) => {
  const data = readSyncData()
  if (!data) return res.json({ ok: false, data: null })
  res.json({ ok: true, data })
})

syncRouter.post('/api/sync-data', validateBody(SyncDataPostSchema), (req, res) => {
  const { data } = req.body
  writeSyncData({ ...data, savedAt: Date.now() })
  log.info({ mode: 'global' }, 'sync-data saved')
  res.json({ ok: true })
})

// C16 — 신선도 필드 (sync-data 응답 · 경량 sync-meta 응답 공통)
export function freshness(savedAt, now = Date.now()) {
  const s = typeof savedAt === 'number' ? savedAt : null
  const ageMs = s ? Math.max(0, now - s) : null
  const stale = ageMs != null ? ageMs > STALE_THRESHOLD_MS : true
  return { savedAt: s, ageMs, stale, staleThresholdMs: STALE_THRESHOLD_MS }
}

// 모드별 — C16 신선도 메타 응답 포함
syncRouter.get('/api/:mode/sync-data', validateMode, (req, res) => {
  const data = readModeSyncData(req.params.mode)
  if (!data) return res.json({ ok: false, data: null })
  res.json({ ok: true, data, ...freshness(data.savedAt) })
})

// C16 경량 — 메타만 (<1KB). 사이드바 신선도 배지 폴링 전용 (본문 data 미포함·미파싱)
syncRouter.get('/api/:mode/sync-meta', validateMode, (req, res) => {
  const meta = readModeSyncMeta(req.params.mode)
  if (!meta) return res.json({ ok: false })
  res.set('Cache-Control', 'no-store')
  res.json({ ok: true, ...freshness(meta.savedAt) })
})

syncRouter.post('/api/:mode/sync-data', validateMode, validateBody(SyncDataPostSchema), (req, res) => {
  const { mode } = req.params
  const { data } = req.body
  writeModeSyncData(mode, { ...data, savedAt: Date.now() })
  log.info({ mode }, 'sync-data saved')
  res.json({ ok: true })
})
