// ─── Archives API (학습 데이터) — /api/archives ──────────────────────────
import { Router } from 'express'
import crypto from 'crypto'
import { readArchives, writeArchives } from '../lib/storage.js'
import { validateBody, ArchivePostSchema } from '../lib/validate.js'

export const archivesRouter = Router()

archivesRouter.get('/api/archives', (req, res) => {
  const archives = readArchives()
  console.log(`[ARCHIVES] GET — ${archives.length}건 반환`)
  res.json({ ok: true, archives })
})

archivesRouter.post('/api/archives', validateBody(ArchivePostSchema), (req, res) => {
  const { period, insights } = req.body
  console.log(`[ARCHIVES] POST — period="${period}", insights keys: ${Object.keys(insights).filter(k => insights[k]).join(',')}`)
  const list = readArchives()
  const idx = list.findIndex(a => a.period === period)
  const entry = { id: crypto.randomBytes(8).toString('hex'), period, insights, createdAt: Date.now() }
  if (idx >= 0) { entry.id = list[idx].id; list[idx] = entry }
  else list.unshift(entry)
  writeArchives(list)
  res.json({ ok: true, archives: list })
})

archivesRouter.delete('/api/archives/:id', (req, res) => {
  const list = readArchives().filter(a => a.id !== req.params.id)
  writeArchives(list)
  res.json({ ok: true, archives: list })
})
