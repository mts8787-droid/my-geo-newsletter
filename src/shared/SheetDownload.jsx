// 동기화에 쓰는 시트 URL 을 그대로 받아 다운로드 (서버: /api/sheet-download)
// mode 가 주어지면 해당 대시보드에서 사용하는 탭만 CSV ZIP 으로, 없으면 전체 xlsx 로.
// 사용법: <SheetDownload url={gsUrl} downloadName="citation-sheet" mode="citation" />
import { useState } from 'react'
import { tabsForMode } from './sheetTabsForMode.js'

const FONT = "'LG Smart','Arial Narrow',Arial,sans-serif"

function extractSheetId(input) {
  const s = String(input || '').trim()
  if (!s) return ''
  const m = s.match(/\/d\/([a-zA-Z0-9_-]{20,})/)
  if (m) return m[1]
  if (/^[a-zA-Z0-9_-]{20,}$/.test(s)) return s
  return ''
}

export default function SheetDownload({ url, downloadName = 'sheet', mode }) {
  const [busy, setBusy] = useState(false)
  const [msg, setMsg] = useState('')

  const tabs = mode ? tabsForMode(mode) : []
  const ext = tabs.length ? 'zip' : 'xlsx'
  const label = tabs.length ? `📥 시트 CSV ZIP 다운로드 (탭 ${tabs.length}개)` : '📥 시트 xlsx 다운로드'

  async function handleDownload() {
    const id = extractSheetId(url)
    if (!id) { setMsg('ERROR: 동기화 URL 비어있거나 잘못됨'); return }
    setBusy(true); setMsg('')
    try {
      const params = new URLSearchParams({ id, name: downloadName })
      if (tabs.length) params.set('tabs', tabs.join(','))
      const r = await fetch(`/api/sheet-download?${params.toString()}`, {
        credentials: 'include',
      })
      if (!r.ok) {
        const text = await r.text().catch(() => '')
        let detail = text
        try { const j = JSON.parse(text); detail = j.error || j.detail || text } catch {}
        throw new Error(`(${r.status}) ${detail}`)
      }
      const blob = await r.blob()
      const a = document.createElement('a')
      a.href = URL.createObjectURL(blob)
      a.download = `${downloadName}.${ext}`
      document.body.appendChild(a); a.click(); a.remove()
      setTimeout(() => URL.revokeObjectURL(a.href), 1000)
      setMsg('다운로드 완료')
    } catch (e) {
      setMsg('ERROR: ' + (e.message || String(e)))
    } finally {
      setBusy(false)
    }
  }

  return (
    <div style={{ marginBottom: 8 }}>
      <button
        onClick={handleDownload}
        disabled={busy || !url}
        style={{ width: '100%', padding: '8px 0', borderRadius: 8, border: 'none',
          background: (busy || !url) ? '#1E293B' : '#1D4ED8',
          color: (busy || !url) ? '#94A3B8' : '#DBEAFE',
          fontSize: 11, fontWeight: 700, fontFamily: FONT,
          cursor: (busy || !url) ? 'not-allowed' : 'pointer' }}
      >
        {busy ? '다운로드 중…' : label}
      </button>
      {msg && (
        <div style={{ marginTop: 6, padding: '4px 8px', borderRadius: 4, fontSize: 10, fontFamily: FONT,
          background: msg.startsWith('ERROR') ? '#450A0A' : '#14532D',
          color: msg.startsWith('ERROR') ? '#FCA5A5' : '#86EFAC' }}>{msg}</div>
      )}
    </div>
  )
}
