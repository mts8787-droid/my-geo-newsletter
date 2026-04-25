// ─── AI Settings API — /api/ai-settings ──────────────────────────────────
import { Router } from 'express'
import { readAiSettings, writeAiSettings } from '../lib/storage.js'
import { validateBody, AiSettingsPutSchema } from '../lib/validate.js'

export const aiSettingsRouter = Router()

aiSettingsRouter.get('/api/ai-settings', (req, res) => {
  res.json({ ok: true, settings: readAiSettings() })
})

aiSettingsRouter.put('/api/ai-settings', validateBody(AiSettingsPutSchema), (req, res) => {
  const current = readAiSettings()
  const { promptRules, model, maxTokens } = req.body
  if (promptRules !== undefined) current.promptRules = promptRules
  if (model !== undefined) current.model = model
  if (maxTokens !== undefined) current.maxTokens = parseInt(maxTokens) || 500
  writeAiSettings(current)
  res.json({ ok: true, settings: current })
})
