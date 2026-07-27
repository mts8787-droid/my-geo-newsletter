// ─── Snapshots API — /api/snapshots, /api/:mode/snapshots ──────────────────
// 목록 응답은 메타(light)만 — data 는 단건 GET(/:ts)으로만 전송.
// 배경(회귀 fix): 저장본 data 가 커지며(모델별 byLlm·weeklyAll 등) 목록 GET 이
// 수십 MB 응답 + 서버 메모리 폭증 → Render(512MB) OOM 크래시 → 저장·불러오기 전면 불능.
import { Router } from 'express'
import {
  SNAP_FILE,
  readSnapshots, writeSnapshots,
  BACKUP_LIMIT,
  readBackups, writeBackups,
  listModeSnapshots, readModeSnapshot, saveModeSnapshot, deleteModeSnapshot,
  listModeBackups, readModeBackup, pushModeBackup,
} from '../lib/storage.js'
import { withFileLock } from '../lib/lock.js'
import { validateMode } from '../lib/middleware.js'
import { validateBody, SnapshotPostSchema, SnapshotPutSchema, SnapshotImportSchema } from '../lib/validate.js'

const SNAPSHOT_LIMIT = 50

// 목록용 경량 변환 — data 제거 (이름·시각·수정시각·삭제시각만)
function light(list) {
  return (Array.isArray(list) ? list : []).map(({ name, ts, updatedAt, deletedAt }) => ({
    name, ts,
    ...(updatedAt != null ? { updatedAt } : {}),
    ...(deletedAt != null ? { deletedAt } : {}),
  }))
}

export const snapshotsRouter = Router()

// ─── 글로벌 (newsletter 호환) ───────────────────────────────────────────────
snapshotsRouter.get('/api/snapshots', (req, res) => {
  res.json(light(readSnapshots()))
})

snapshotsRouter.post('/api/snapshots', validateBody(SnapshotPostSchema), (req, res) => {
  const { name, data } = req.body
  withFileLock(SNAP_FILE, () => {
    const snap = { name, ts: Date.now(), data }
    const list = [snap, ...readSnapshots()].slice(0, SNAPSHOT_LIMIT)
    writeSnapshots(list)
    res.json({ ok: true, snapshots: light(list) })
  })
})

// 단건 조회 (data 포함) — 불러오기 클릭 시에만 호출
snapshotsRouter.get('/api/snapshots/:ts', (req, res) => {
  const ts = parseInt(req.params.ts)
  const snap = readSnapshots().find(s => s.ts === ts)
  if (!snap) return res.status(404).json({ ok: false, error: '저장본 없음' })
  res.json({ ok: true, snapshot: snap })
})

snapshotsRouter.put('/api/snapshots/:ts', validateBody(SnapshotPutSchema), (req, res) => {
  const ts = parseInt(req.params.ts)
  const { data } = req.body
  withFileLock(SNAP_FILE, () => {
    const list = readSnapshots().map(s => s.ts === ts ? { ...s, data, updatedAt: Date.now() } : s)
    writeSnapshots(list)
    res.json({ ok: true, snapshots: light(list) })
  })
})

// 삭제된 백업 목록 (글로벌) — 경량
snapshotsRouter.get('/api/backups', (req, res) => {
  res.json(light(readBackups()))
})

snapshotsRouter.delete('/api/snapshots/:ts', (req, res) => {
  const ts = parseInt(req.params.ts)
  withFileLock(SNAP_FILE, () => {
    const cur = readSnapshots()
    const removed = cur.find(s => s.ts === ts)
    const list = cur.filter(s => s.ts !== ts)
    writeSnapshots(list)
    if (removed) writeBackups([{ ...removed, deletedAt: Date.now() }, ...readBackups()].slice(0, BACKUP_LIMIT))
    res.json({ ok: true, snapshots: light(list) })
  })
})

// ─── 모드별 — 파일 분리 저장소 (목록=인덱스만 / 단건=개별 파일만 읽음 → OOM 방지) ──
snapshotsRouter.get('/api/:mode/snapshots', validateMode, (req, res) => {
  res.json(listModeSnapshots(req.params.mode))
})

snapshotsRouter.post('/api/:mode/snapshots', validateMode, validateBody(SnapshotPostSchema), (req, res) => {
  const { mode } = req.params
  const { name, data } = req.body
  // ts = 저장본 식별키 — 같은 ms 연속 저장 시 충돌(덮어쓰기) 방지 위해 유일성 보장
  const taken = new Set(listModeSnapshots(mode).map(s => s.ts))
  let ts = Date.now()
  while (taken.has(ts)) ts++
  const index = saveModeSnapshot(mode, { name, ts, data }, SNAPSHOT_LIMIT)
  res.json({ ok: true, snapshots: index })
})

// 로컬 저장본 JSON 병합 import (동기화 데몬 push 통로) — ts 중복 시 기존 것 유지 (skip)
snapshotsRouter.post('/api/:mode/snapshots/import', validateMode, validateBody(SnapshotImportSchema), (req, res) => {
  const { mode } = req.params
  const { snapshots } = req.body
  const existingTs = new Set(listModeSnapshots(mode).map(s => s.ts))
  let imported = 0, skipped = 0
  for (const s of snapshots) {
    if (existingTs.has(s.ts)) { skipped++; continue }
    existingTs.add(s.ts)
    const snap = { name: s.name, ts: s.ts, data: s.data }
    if (s.updatedAt != null) snap.updatedAt = s.updatedAt
    saveModeSnapshot(mode, snap, SNAPSHOT_LIMIT)
    imported++
  }
  res.json({ ok: true, imported, skipped, snapshots: listModeSnapshots(mode) })
})

// 단건 조회 (data 포함) — 불러오기 클릭 시에만 호출
snapshotsRouter.get('/api/:mode/snapshots/:ts', validateMode, (req, res) => {
  const snap = readModeSnapshot(req.params.mode, parseInt(req.params.ts))
  if (!snap) return res.status(404).json({ ok: false, error: '저장본 없음' })
  res.json({ ok: true, snapshot: snap })
})

snapshotsRouter.put('/api/:mode/snapshots/:ts', validateMode, validateBody(SnapshotPutSchema), (req, res) => {
  const { mode } = req.params
  const ts = parseInt(req.params.ts)
  const cur = readModeSnapshot(mode, ts)
  if (cur) saveModeSnapshot(mode, { ...cur, data: req.body.data, updatedAt: Date.now() }, SNAPSHOT_LIMIT)
  res.json({ ok: true, snapshots: listModeSnapshots(mode) })
})

// 삭제된 백업 목록 (모드별) — 경량
snapshotsRouter.get('/api/:mode/backups', validateMode, (req, res) => {
  res.json(listModeBackups(req.params.mode))
})

// 백업 단건 조회 (data 포함) — 백업 복원 클릭 시에만 호출
snapshotsRouter.get('/api/:mode/backups/:ts', validateMode, (req, res) => {
  const snap = readModeBackup(req.params.mode, parseInt(req.params.ts))
  if (!snap) return res.status(404).json({ ok: false, error: '백업 없음' })
  res.json({ ok: true, snapshot: snap })
})

snapshotsRouter.delete('/api/:mode/snapshots/:ts', validateMode, (req, res) => {
  const { mode } = req.params
  const ts = parseInt(req.params.ts)
  const { removed, index } = deleteModeSnapshot(mode, ts)
  if (removed) pushModeBackup(mode, { ...removed, deletedAt: Date.now() })
  res.json({ ok: true, snapshots: index })
})
