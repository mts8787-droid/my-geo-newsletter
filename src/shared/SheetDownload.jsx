// 구글 시트 URL 입력 + xlsx 다운로드 버튼 (서버: /api/sheet-download)
// 사용법: <SheetDownload storageKey="geo-citation-sheet-url" downloadName="citation" />
import { useState } from 'react'

const FONT = "'LG Smart','Arial Narrow',Arial,sans-serif"

function extractSheetId(input) {
  const s = String(input || '').trim()
  if (!s) return ''
  const m = s.match(/\/d\/([a-zA-Z0-9_-]{20,})/)
  if (m) return m[1]
  if (/^[a-zA-Z0-9_-]{20,}$/.test(s)) return s
  return ''
}

export default function SheetDownload({ storageKey, downloadName = 'sheet', label = '구글 시트' }) {
  const [url, setUrl] = useState(() => {
    try { return localStorage.getItem(storageKey) || '' } catch { return '' }
  })
  const [busy, setBusy] = useState(false)
  const [msg, setMsg] = useState('')

  function persist(v) {
    setUrl(v)
    try { localStorage.setItem(storageKey, v) } catch {}
  }

  async function handleDownload() {
    const id = extractSheetId(url)
    if (!id) { setMsg('ERROR: 시트 URL 또는 ID 입력 필요'); return }
    setBusy(true); setMsg('')
    try {
      const r = await fetch(`/api/sheet-download?id=${encodeURIComponent(id)}&name=${encodeURIComponent(downloadName)}`, {
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
      a.download = `${downloadName}.xlsx`
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
    <div style={{ marginBottom: 12 }}>
      <p style={{ margin: '0 0 6px 2px', fontSize: 11, fontWeight: 700, color: '#475569',
        textTransform: 'uppercase', letterSpacing: 1, fontFamily: FONT }}>{label}</p>
      <input
        value={url}
        onChange={e => persist(e.target.value)}
        placeholder="https://docs.google.com/spreadsheets/d/..."
        style={{ width: '100%', padding: '6px 8px', fontSize: 11, fontFamily: FONT,
          borderRadius: 4, border: '1px solid #334155', background: '#0F172A', color: '#E2E8F0',
          marginBottom: 6 }}
      />
      <button
        onClick={handleDownload}
        disabled={busy}
        style={{ width: '100%', padding: '6px 0', borderRadius: 6, border: 'none',
          background: busy ? '#1E293B' : '#1D4ED8', color: busy ? '#94A3B8' : '#DBEAFE',
          fontSize: 11, fontWeight: 700, fontFamily: FONT,
          cursor: busy ? 'wait' : 'pointer' }}
      >
        {busy ? '다운로드 중…' : '📥 시트 xlsx 다운로드'}
      </button>
      {msg && (
        <div style={{ marginTop: 6, padding: '4px 8px', borderRadius: 4, fontSize: 10, fontFamily: FONT,
          background: msg.startsWith('ERROR') ? '#450A0A' : '#14532D',
          color: msg.startsWith('ERROR') ? '#FCA5A5' : '#86EFAC' }}>{msg}</div>
      )}
    </div>
  )
}
