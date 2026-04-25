// ─── Archives API (학습 데이터) — /api/archives ──────────────────────────
import { Router } from 'express'
import crypto from 'crypto'
import { readArchives, writeArchives } from '../lib/storage.js'
import { validateBody, ArchivePostSchema } from '../lib/validate.js'
import { logFor } from '../lib/logger.js'

const log = logFor('archives')

export const archivesRouter = Router()

archivesRouter.get('/api/archives', (req, res) => {
  const archives = readArchives()
  log.debug({ count: archives.length }, 'archives list')
  res.json({ ok: true, archives })
})

archivesRouter.post('/api/archives', validateBody(ArchivePostSchema), (req, res) => {
  const { period, insights } = req.body
  log.info({ period, keys: Object.keys(insights).filter(k => insights[k]) }, 'archive saved')
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
