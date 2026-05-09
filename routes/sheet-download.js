// 구글 드라이브 시트를 xlsx 로 export 하여 사용자에게 다운로드 응답
// 인증: 서비스 계정 (env: GOOGLE_SERVICE_ACCOUNT_JSON 또는 GOOGLE_APPLICATION_CREDENTIALS)
//       시트는 서비스 계정 이메일에 "보기" 이상 권한으로 공유되어야 함
import { Router } from 'express'
import { GoogleAuth } from 'google-auth-library'
import { logFor } from '../lib/logger.js'

const log = logFor('sheet-download')
export const sheetDownloadRouter = Router()

const SCOPES = ['https://www.googleapis.com/auth/drive.readonly']
const XLSX_MIME = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'

let _authPromise = null
function getAuth() {
  if (_authPromise) return _authPromise
  const raw = process.env.GOOGLE_SERVICE_ACCOUNT_JSON
  let opts
  if (raw) {
    let credentials
    try { credentials = JSON.parse(raw) }
    catch (e) { throw new Error('GOOGLE_SERVICE_ACCOUNT_JSON parse 실패: ' + e.message) }
    opts = { credentials, scopes: SCOPES }
  } else {
    // GOOGLE_APPLICATION_CREDENTIALS 또는 metadata server 사용
    opts = { scopes: SCOPES }
  }
  _authPromise = new GoogleAuth(opts).getClient()
  return _authPromise
}

function extractSheetId(input) {
  const s = String(input || '').trim()
  if (!s) return ''
  const m = s.match(/\/d\/([a-zA-Z0-9_-]{20,})/)
  if (m) return m[1]
  // ID 만 입력한 경우
  if (/^[a-zA-Z0-9_-]{20,}$/.test(s)) return s
  return ''
}

sheetDownloadRouter.get('/api/sheet-download', async (req, res) => {
  try {
    const id = extractSheetId(req.query.id || req.query.url)
    const name = String(req.query.name || 'sheet').replace(/[^\w가-힣\-_]/g, '_').slice(0, 80) || 'sheet'
    if (!id) return res.status(400).json({ error: 'sheet id/url 필수 (?id=... 또는 ?url=https://docs.google.com/spreadsheets/d/...)' })

    const client = await getAuth()
    const accessToken = (await client.getAccessToken()).token
    if (!accessToken) return res.status(500).json({ error: '서비스 계정 토큰 발급 실패' })

    const driveUrl = `https://www.googleapis.com/drive/v3/files/${encodeURIComponent(id)}/export?mimeType=${encodeURIComponent(XLSX_MIME)}`
    const r = await fetch(driveUrl, { headers: { Authorization: `Bearer ${accessToken}` } })
    if (!r.ok) {
      const text = await r.text().catch(() => '')
      log.warn({ status: r.status, id, body: text.slice(0, 500) }, 'drive export failed')
      return res.status(r.status).json({ error: 'drive export 실패', status: r.status, detail: text.slice(0, 500) })
    }

    res.setHeader('Content-Type', XLSX_MIME)
    res.setHeader('Content-Disposition', `attachment; filename*=UTF-8''${encodeURIComponent(name + '.xlsx')}`)
    res.setHeader('Cache-Control', 'no-store')
    const buf = Buffer.from(await r.arrayBuffer())
    res.send(buf)
    log.info({ id, name, bytes: buf.length }, 'sheet downloaded')
  } catch (e) {
    log.error({ err: e.message }, 'sheet-download error')
    res.status(500).json({ error: e.message })
  }
})
