// ─── Snapshots API — /api/snapshots, /api/:mode/snapshots ──────────────────
import { Router } from 'express'
import {
  SNAP_FILE,
  readSnapshots, writeSnapshots,
  readModeSnapshots, writeModeSnapshots,
  BACKUP_LIMIT,
  readBackups, writeBackups,
  readModeBackups, writeModeBackups,
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

// 삭제된 백업 목록 (글로벌)
snapshotsRouter.get('/api/backups', (req, res) => {
  res.json(readBackups())
})

snapshotsRouter.delete('/api/snapshots/:ts', (req, res) => {
  const ts = parseInt(req.params.ts)
  withFileLock(SNAP_FILE, () => {
    const cur = readSnapshots()
    const removed = cur.find(s => s.ts === ts)
    const list = cur.filter(s => s.ts !== ts)
    writeSnapshots(list)
    if (removed) writeBackups([{ ...removed, deletedAt: Date.now() }, ...readBackups()].slice(0, BACKUP_LIMIT))
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

// 삭제된 백업 목록 (모드별)
snapshotsRouter.get('/api/:mode/backups', validateMode, (req, res) => {
  res.json(readModeBackups(req.params.mode))
})

snapshotsRouter.delete('/api/:mode/snapshots/:ts', validateMode, (req, res) => {
  const ts = parseInt(req.params.ts)
  const { mode } = req.params
  const cur = readModeSnapshots(mode)
  const removed = cur.find(s => s.ts === ts)
  const list = cur.filter(s => s.ts !== ts)
  writeModeSnapshots(mode, list)
  if (removed) writeModeBackups(mode, [{ ...removed, deletedAt: Date.now() }, ...readModeBackups(mode)].slice(0, BACKUP_LIMIT))
  res.json({ ok: true, snapshots: list })
})
