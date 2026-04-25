// ─── 공통 Express 미들웨어 ───────────────────────────────────────────────────
import { VALID_MODES } from './storage.js'

export function validateMode(req, res, next) {
  if (!VALID_MODES.includes(req.params.mode)) {
    return res.status(400).json({
      ok: false,
      error: `invalid mode: ${req.params.mode}. allowed: ${VALID_MODES.join(', ')}`,
    })
  }
  next()
}
