// 구글 시트의 선택된 탭만 CSV로 묶어 ZIP 으로 다운로드 응답
// (?tabs= 미지정 시 기존 동작: 시트 전체 xlsx 로 export)
// 인증: 서비스 계정 (env: GOOGLE_SERVICE_ACCOUNT_JSON 또는 GOOGLE_APPLICATION_CREDENTIALS)
//       시트는 서비스 계정 이메일에 "보기" 이상 권한으로 공유되어야 함
import { Router } from 'express'
import { GoogleAuth } from 'google-auth-library'
import JSZip from 'jszip'
import { logFor } from '../lib/logger.js'

const log = logFor('sheet-download')
export const sheetDownloadRouter = Router()

const SCOPES = [
  'https://www.googleapis.com/auth/drive.readonly',
  'https://www.googleapis.com/auth/spreadsheets.readonly',
]
const XLSX_MIME = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
const ZIP_MIME = 'application/zip'

let _authPromise = null
function getAuth() {
  if (_authPromise) return _authPromise
  const raw = process.env.GOOGLE_SERVICE_ACCOUNT_JSON
  if (!raw && !process.env.GOOGLE_APPLICATION_CREDENTIALS) {
    throw new Error('서비스 계정 미설정: Render env 에 GOOGLE_SERVICE_ACCOUNT_JSON (서비스 계정 키 JSON 전체 문자열) 추가 필요')
  }
  let opts
  if (raw) {
    let credentials
    try { credentials = JSON.parse(raw) }
    catch (e) { throw new Error('GOOGLE_SERVICE_ACCOUNT_JSON 파싱 실패 — JSON 형식 확인 필요: ' + e.message) }
    if (!credentials.client_email || !credentials.private_key) {
      throw new Error('GOOGLE_SERVICE_ACCOUNT_JSON 에 client_email/private_key 필드가 없습니다 — 서비스 계정 키 JSON 전체를 붙여넣으세요')
    }
    opts = { credentials, scopes: SCOPES }
  } else {
    opts = { scopes: SCOPES }
  }
  _authPromise = new GoogleAuth(opts).getClient().catch(e => { _authPromise = null; throw e })
  return _authPromise
}

function extractSheetId(input) {
  const s = String(input || '').trim()
  if (!s) return ''
  const m = s.match(/\/d\/([a-zA-Z0-9_-]{20,})/)
  if (m) return m[1]
  if (/^[a-zA-Z0-9_-]{20,}$/.test(s)) return s
  return ''
}

function rowsToCSV(rows) {
  if (!rows || !rows.length) return ''
  return rows.map(row =>
    (row || []).map(cell => {
      const s = cell == null ? '' : String(cell)
      return /[,"\n\r]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s
    }).join(',')
  ).join('\r\n')
}

function sanitizeFileName(s) {
  return String(s || 'sheet').replace(/[\/\\?%*:|"<>]/g, '_').slice(0, 100) || 'sheet'
}

sheetDownloadRouter.get('/api/sheet-download', async (req, res) => {
  try {
    const id = extractSheetId(req.query.id || req.query.url)
    const name = String(req.query.name || 'sheet').replace(/[^\w가-힣\-_]/g, '_').slice(0, 80) || 'sheet'
    if (!id) return res.status(400).json({ error: 'sheet id/url 필수 (?id=... 또는 ?url=https://docs.google.com/spreadsheets/d/...)' })

    const tabsParam = req.query.tabs ? String(req.query.tabs) : ''
    const tabs = tabsParam ? tabsParam.split(',').map(s => s.trim()).filter(Boolean) : []

    const client = await getAuth()
    const accessToken = (await client.getAccessToken()).token
    if (!accessToken) return res.status(500).json({ error: '서비스 계정 토큰 발급 실패' })

    // 탭 미지정 → 기존 동작 (전체 xlsx)
    if (tabs.length === 0) {
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
      log.info({ id, name, bytes: buf.length }, 'sheet downloaded (xlsx)')
      return
    }

    // 선택 탭 → CSV ZIP
    // 시트명에 공백/특수문자가 있어도 안전하게 — 시트명을 단독 range 로 전달 (전체 시트 의미)
    const rangesQS = tabs.map(t => `ranges=${encodeURIComponent(t)}`).join('&')
    const sheetsUrl = `https://sheets.googleapis.com/v4/spreadsheets/${encodeURIComponent(id)}/values:batchGet?${rangesQS}&valueRenderOption=FORMATTED_VALUE&dateTimeRenderOption=FORMATTED_STRING`
    const sr = await fetch(sheetsUrl, { headers: { Authorization: `Bearer ${accessToken}` } })
    if (!sr.ok) {
      const text = await sr.text().catch(() => '')
      log.warn({ status: sr.status, id, body: text.slice(0, 1000) }, 'sheets batchGet failed')
      // Google API 에러 본문 파싱 → 가장 도움되는 메시지 추출
      let gMsg = ''
      try { const j = JSON.parse(text); gMsg = j.error?.message || j.message || '' } catch {}
      let hint = ''
      if (sr.status === 403 && /has not been used|disabled|SERVICE_DISABLED/i.test(gMsg + ' ' + text)) {
        hint = ' — Google Cloud Console 에서 서비스 계정 프로젝트의 "Google Sheets API" 를 활성화하세요 (https://console.cloud.google.com/apis/library/sheets.googleapis.com)'
      } else if (sr.status === 403) {
        hint = ' — 시트가 서비스 계정 이메일에 공유되어 있는지 확인하세요 (Drive 공유 권한)'
      } else if (sr.status === 400 && /Unable to parse range/i.test(gMsg)) {
        hint = ' — 시트에 해당 이름의 탭이 없습니다. 시트 탭명을 확인하세요'
      }
      const errMsg = `sheets batchGet 실패 (${sr.status})` + (gMsg ? `: ${gMsg}` : '') + hint
      return res.status(sr.status).json({ error: errMsg, status: sr.status, detail: text.slice(0, 1000) })
    }
    const data = await sr.json()
    const valueRanges = data.valueRanges || []

    const zip = new JSZip()
    let included = 0
    valueRanges.forEach((vr, i) => {
      const tabName = tabs[i] || `sheet${i + 1}`
      const csv = rowsToCSV(vr.values)
      // UTF-8 BOM — Excel 이 한글 깨짐 없이 열도록
      zip.file(`${sanitizeFileName(tabName)}.csv`, '﻿' + csv)
      included++
    })
    const buf = await zip.generateAsync({ type: 'nodebuffer', compression: 'DEFLATE' })

    res.setHeader('Content-Type', ZIP_MIME)
    res.setHeader('Content-Disposition', `attachment; filename*=UTF-8''${encodeURIComponent(name + '.zip')}`)
    res.setHeader('Cache-Control', 'no-store')
    res.send(buf)
    log.info({ id, name, tabs: included, bytes: buf.length }, 'sheet downloaded (zip)')
  } catch (e) {
    log.error({ err: e.message }, 'sheet-download error')
    res.status(500).json({ error: e.message })
  }
})
