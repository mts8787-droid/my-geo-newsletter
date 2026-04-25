// ─── Google Sheets / Apps Script 프록시 ──────────────────────────────────
// /gsheets-proxy/*  : docs.google.com CSV 중계 (sheet 동기화용)
// /api/gsheet-export: Apps Script Web App 프록시 (시트 export 자동화용)
import { Router } from 'express'

export const proxyRouter = Router()

// ─── Google Sheets CSV proxy ────────────────────────────────────────────
proxyRouter.get('/gsheets-proxy/*', async (req, res) => {
  const target = 'https://docs.google.com' + req.originalUrl.replace('/gsheets-proxy', '')
  try {
    const parsed = new URL(target)
    if (parsed.hostname !== 'docs.google.com') {
      return res.status(403).json({ error: 'docs.google.com만 프록시 허용' })
    }
  } catch {
    return res.status(400).json({ error: '유효하지 않은 URL' })
  }
  console.log('[PROXY]', target.slice(0, 120))
  try {
    const gRes = await fetch(target, { headers: { 'User-Agent': 'Mozilla/5.0' } })
    if (!gRes.ok) {
      console.log('[PROXY] Google returned', gRes.status)
      return res.status(gRes.status).send(await gRes.text())
    }
    res.set('Content-Type', gRes.headers.get('content-type') || 'text/csv')
    res.set('Cache-Control', 'no-store, no-cache, must-revalidate')
    res.send(await gRes.text())
  } catch (err) {
    console.error('[PROXY] Error:', err.message)
    res.status(502).json({ error: '프록시 요청 실패' })
  }
})

// ─── Apps Script (Web App) 프록시 ────────────────────────────────────────
const APPS_SCRIPT_ORIGINS = ['https://script.google.com', 'https://script.googleusercontent.com']

proxyRouter.post('/api/gsheet-export', async (req, res) => {
  const { scriptUrl, data } = req.body || {}
  if (!scriptUrl || !data) return res.status(400).json({ ok: false, error: 'scriptUrl, data 필수' })
  try {
    const parsed = new URL(scriptUrl)
    if (!APPS_SCRIPT_ORIGINS.includes(parsed.origin)) {
      return res.status(403).json({ ok: false, error: 'Google Apps Script URL만 허용됩니다' })
    }
  } catch {
    return res.status(400).json({ ok: false, error: '유효하지 않은 URL입니다' })
  }
  try {
    const gRes = await fetch(scriptUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(data),
      redirect: 'follow',
    })
    const text = await gRes.text()
    let result
    try { result = JSON.parse(text) } catch { result = { ok: false, error: text } }
    res.json(result)
  } catch (err) {
    console.error('[GSHEET-EXPORT] Error:', err.message)
    res.status(500).json({ ok: false, error: 'Google Sheet 내보내기 실패' })
  }
})
