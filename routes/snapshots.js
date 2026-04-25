// ─── Snapshots API — /api/snapshots, /api/:mode/snapshots ──────────────────
import { Router } from 'express'
import {
  SNAP_FILE,
  readSnapshots, writeSnapshots,
  readModeSnapshots, writeModeSnapshots,
} from '../lib/storage.js'
import { withFileLock } from '../lib/lock.js'
import { validateMode } from '../lib/middleware.js'
import { validateBody, SnapshotPostSchema, SnapshotPutSchema } from '../lib/validate.js'

const SNAPSHOT_LIMIT = 50

export const snapshotsRouter = Router()

// 글로벌 (newsletter 호환)
snapshotsRouter.get('/api/snapshots', (req, res) => {
  res.json(readSnapshots())
})

snapshotsRouter.post('/api/snapshots', validateBody(SnapshotPostSchema), (req, res) => {
  const { name, data } = req.body
  withFileLock(SNAP_FILE, () => {
    const snap = { name, ts: Date.now(), data }
    const list = [snap, ...readSnapshots()].slice(0, SNAPSHOT_LIMIT)
    writeSnapshots(list)
    res.json({ ok: true, snapshots: list })
  })
})

snapshotsRouter.put('/api/snapshots/:ts', validateBody(SnapshotPutSchema), (req, res) => {
  const ts = parseInt(req.params.ts)
  const { data } = req.body
  withFileLock(SNAP_FILE, () => {
    const list = readSnapshots().map(s => s.ts === ts ? { ...s, data, updatedAt: Date.now() } : s)
    writeSnapshots(list)
    res.json({ ok: true, snapshots: list })
  })
})

snapshotsRouter.delete('/api/snapshots/:ts', (req, res) => {
  const ts = parseInt(req.params.ts)
  withFileLock(SNAP_FILE, () => {
    const list = readSnapshots().filter(s => s.ts !== ts)
    writeSnapshots(list)
    res.json({ ok: true, snapshots: list })
  })
})

// 모드별
snapshotsRouter.get('/api/:mode/snapshots', validateMode, (req, res) => {
  res.json(readModeSnapshots(req.params.mode))
})

snapshotsRouter.post('/api/:mode/snapshots', validateMode, validateBody(SnapshotPostSchema), (req, res) => {
  const { mode } = req.params
  const { name, data } = req.body
  const snap = { name, ts: Date.now(), data }
  const list = [snap, ...readModeSnapshots(mode)].slice(0, SNAPSHOT_LIMIT)
  writeModeSnapshots(mode, list)
  res.json({ ok: true, snapshots: list })
})

snapshotsRouter.put('/api/:mode/snapshots/:ts', validateMode, validateBody(SnapshotPutSchema), (req, res) => {
  const ts = parseInt(req.params.ts)
  const { data } = req.body
  const list = readModeSnapshots(req.params.mode).map(s => s.ts === ts ? { ...s, data, updatedAt: Date.now() } : s)
  writeModeSnapshots(req.params.mode, list)
  res.json({ ok: true, snapshots: list })
})

snapshotsRouter.delete('/api/:mode/snapshots/:ts', validateMode, (req, res) => {
  const ts = parseInt(req.params.ts)
  const list = readModeSnapshots(req.params.mode).filter(s => s.ts !== ts)
  writeModeSnapshots(req.params.mode, list)
  res.json({ ok: true, snapshots: list })
})
