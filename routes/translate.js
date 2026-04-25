// ─── Translate API — /api/translate ──────────────────────────────────────
import { Router } from 'express'
import translate from 'google-translate-api-x'
import { validateBody, TranslateSchema } from '../lib/validate.js'

const TRANSLATE_BATCH = 20

export const translateRouter = Router()

translateRouter.post('/api/translate', validateBody(TranslateSchema), async (req, res) => {
  const { texts, from, to } = req.body
  try {
    const translated = []
    for (let i = 0; i < texts.length; i += TRANSLATE_BATCH) {
      const batch = texts.slice(i, i + TRANSLATE_BATCH)
      const results = await translate(batch, { from: from || 'ko', to })
      const arr = Array.isArray(results) ? results : [results]
      translated.push(...arr.map(r => r.text))
    }
    res.json({ ok: true, translated })
  } catch (err) {
    console.error('[TRANSLATE] Error:', err.message, err.stack)
    res.status(500).json({ ok: false, error: '번역 실패: ' + err.message })
  }
})
