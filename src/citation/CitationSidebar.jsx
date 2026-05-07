import React, { useState, useEffect } from 'react'
import { RefreshCw, Globe, Link2 } from 'lucide-react'
import { extractSheetId, syncFromGoogleSheets } from '../googleSheetsUtils'
import { LG_RED, FONT } from '../shared/constants.js'
import { inputStyle } from '../shared/components.jsx'
import { resolveDataForLang } from '../shared/utils.js'
import { saveSyncData, publishCombinedDashboard } from '../shared/api.js'
import { generateDashboardHTML } from '../dashboard/dashboardTemplate.js'

export default function CitationSidebar({
  mode, meta, setMeta, metaKo, setMetaKo, metaEn, setMetaEn,
  citations, setCitations, citationsCnty, setCitationsCnty, dotcom, setDotcom,
  citationsByCnty, setCitationsByCnty, citationsByPrd, setCitationsByPrd, dotcomByCnty, setDotcomByCnty,
  citTouchPointsTrend, setCitTouchPointsTrend, citTrendMonths, setCitTrendMonths,
  citDomainTrend, setCitDomainTrend, citDomainMonths, setCitDomainMonths,
  dotcomTrend, setDotcomTrend, dotcomTrendMonths, setDotcomTrendMonths,
  resolved, previewLang, setPreviewLang, generateHTML,
}) {
  const [gsUrl,     setGsUrl]     = useState('https://docs.google.com/spreadsheets/d/1v4V7ZsHNFXXqbAWqvyVkgNIeXx188hSZ9l7FDsRYy2Y/edit')
  const [gsSyncing, setGsSyncing] = useState(false)
  const [gsStatus,  setGsStatus]  = useState(null)
  const [gsMsg,     setGsMsg]     = useState('')
  const [debugLog,  setDebugLog]  = useState('')
  const [publishing, setPublishing] = useState(false)
  const [publishMsg, setPublishMsg] = useState('')
  const [combPublishing, setCombPublishing] = useState(false)
  const [combMsg, setCombMsg] = useState('')
  const [publishInfo, setPublishInfo] = useState(null)

  // 게시 상태 로드
  useEffect(() => {
    fetch('/api/publish-citation')
      .then(r => r.ok ? r.json() : null)
      .then(setPublishInfo)
      .catch(() => {})
  }, [])

  async function handleGsSync() {
    if (gsSyncing) return
    const sheetId = extractSheetId(gsUrl.trim())
    if (!sheetId) {
      setGsStatus('error'); setGsMsg('올바른 Google Sheets URL을 입력하세요.')
      setTimeout(() => setGsStatus(null), 3000); return
    }
    setGsSyncing(true); setGsStatus(null); setGsMsg(''); setDebugLog('')
    const _log = []
    try {
      const parsed = await syncFromGoogleSheets(sheetId, msg => setGsMsg(msg))
      _log.push(`[Sync] parsed keys: ${Object.keys(parsed).join(', ') || '(없음)'}`)
      _log.push(`[Sync] meta keys: ${parsed.meta ? Object.keys(parsed.meta).join(', ') : '(없음)'}`)
      _log.push(`[Sync] citations: ${parsed.citations?.length ?? 0}건`)
      if (parsed.citations?.length) _log.push(`  → top: ${parsed.citations.slice(0, 3).map(c => `${c.source}(${c.score})`).join(', ')}`)
      _log.push(`[Sync] citationsCnty: ${parsed.citationsCnty?.length ?? 0}건`)
      if (parsed.citationsCnty?.length) _log.push(`  → countries: ${[...new Set(parsed.citationsCnty.map(r => r.cnty))].join(', ')}`)
      _log.push(`[Sync] dotcom: ${parsed.dotcom ? `lg=${JSON.stringify(parsed.dotcom.lg?.TTL ?? 'none')}, ss=${JSON.stringify(parsed.dotcom.samsung?.TTL ?? 'none')}` : '(없음)'}`)
      _log.push(`[Sync] citTouchPointsTrend: ${parsed.citTouchPointsTrend ? Object.keys(parsed.citTouchPointsTrend).join(', ') : '(없음)'}`)
      _log.push(`[Sync] citTrendMonths: ${parsed.citTrendMonths?.join(', ') || '(없음)'}`)
      _log.push(`[Sync] citDomainTrend: ${parsed.citDomainTrend ? Object.keys(parsed.citDomainTrend).length + '건' : '(없음)'}`)
      _log.push(`[Sync] citDomainMonths: ${parsed.citDomainMonths?.join(', ') || '(없음)'}`)
      _log.push(`[Sync] (브라우저 콘솔에서 [parseCitTouchPoints], [parseCitDomain] 로그를 확인하세요)`)
      console.log(_log.join('\n'))

      if (parsed.meta) {
        // Citation 대시보드에서는 Citation 관련 섹션을 항상 표시
        const citMeta = { ...parsed.meta, showCitations: true, showCitDomain: true, showCitCnty: true, showDotcom: true }
        // Citation 데이터의 최신 월로 기간 자동 갱신
        if (parsed.citDerivedPeriod) {
          citMeta.period = parsed.citDerivedPeriod
        }
        setMetaKo(m => ({ ...m, ...citMeta }))
        setMetaEn(m => ({ ...m, period: citMeta.period, dateLine: citMeta.dateLine, reportNo: citMeta.reportNo }))
      }
      if (parsed.citations)     setCitations(parsed.citations)
      if (parsed.citationsByCnty) setCitationsByCnty(parsed.citationsByCnty)
      if (parsed.citationsByPrd) setCitationsByPrd(parsed.citationsByPrd)
      if (parsed.dotcom)        setDotcom(d => ({ ...d, ...parsed.dotcom }))
      if (parsed.dotcomByCnty)  setDotcomByCnty(parsed.dotcomByCnty)
      if (parsed.citationsCnty) setCitationsCnty(parsed.citationsCnty)
      if (parsed.citTouchPointsTrend) setCitTouchPointsTrend(parsed.citTouchPointsTrend)
      if (parsed.citTrendMonths) setCitTrendMonths(parsed.citTrendMonths)
      if (parsed.citDomainTrend) setCitDomainTrend(parsed.citDomainTrend)
      if (parsed.citDomainMonths) setCitDomainMonths(parsed.citDomainMonths)
      if (parsed.dotcomTrend && setDotcomTrend) setDotcomTrend(parsed.dotcomTrend)
      if (parsed.dotcomTrendMonths && setDotcomTrendMonths) setDotcomTrendMonths(parsed.dotcomTrendMonths)

      // 파싱 결과 요약을 상태 메시지에 표시
      const summary = [
        parsed.citations?.length ? `카테고리 ${parsed.citations.length}건` : '',
        parsed.citationsCnty?.length ? `도메인 ${parsed.citationsCnty.length}건` : '',
        parsed.dotcom ? '닷컴 OK' : '',
        parsed.citTouchPointsTrend ? `트렌드 ${Object.keys(parsed.citTouchPointsTrend).length}건` : '',
      ].filter(Boolean).join(', ')

      // 서버에 동기화 데이터 저장
      setTimeout(() => {
        saveSyncData(mode, {
          meta: parsed.meta || null,
          citations: parsed.citations || null,
          citationsByCnty: parsed.citationsByCnty || null,
          citationsByPrd: parsed.citationsByPrd || null,
          dotcom: parsed.dotcom || null,
          dotcomByCnty: parsed.dotcomByCnty || null,
          citationsCnty: parsed.citationsCnty || null,
          citTouchPointsTrend: parsed.citTouchPointsTrend || null,
          citTrendMonths: parsed.citTrendMonths || null,
          citDomainTrend: parsed.citDomainTrend || null,
          citDomainMonths: parsed.citDomainMonths || null,
          dotcomTrend: parsed.dotcomTrend || null,
          dotcomTrendMonths: parsed.dotcomTrendMonths || null,
        })
      }, 100)

      setGsStatus('ok'); setGsMsg(`동기화 완료! (${summary || '데이터 없음'})`)
      setDebugLog(_log.join('\n'))
    } catch (err) {
      _log.push(`[ERROR] ${err.message}`)
      setGsStatus('error'); setGsMsg(err.message)
      setDebugLog(_log.join('\n'))
    } finally {
      setGsSyncing(false)
      setTimeout(() => { setGsStatus(null); setGsMsg('') }, 6000)
    }
  }

  async function handlePublish() {
    if (publishing) return
    setPublishing(true); setPublishMsg('')
    try {
      const resolvedKo = resolveDataForLang([], [], citations, citationsCnty, 'ko')
      const resolvedEn = resolveDataForLang([], [], citations, citationsCnty, 'en')
      const trendData = { citTouchPointsTrend, citTrendMonths, citDomainTrend, citDomainMonths, dotcomTrend, dotcomTrendMonths }
      const htmlKo = generateHTML(metaKo, null, [], resolvedKo.citations, dotcom, 'ko', [], resolvedKo.citationsCnty, trendData, citationsByCnty, dotcomByCnty, citationsByPrd)
      const htmlEn = generateHTML(metaEn, null, [], resolvedEn.citations, dotcom, 'en', [], resolvedEn.citationsCnty, trendData, citationsByCnty, dotcomByCnty, citationsByPrd)
      const title = `${metaKo.period || ''} Citation Dashboard`.trim()
      const res = await fetch('/api/publish-citation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest' },
        body: JSON.stringify({ title, htmlKo, htmlEn }),
      })
      const data = await res.json()
      if (!data.ok) throw new Error(data.error || '게시 실패')
      setPublishInfo({ ...data, published: true })
      const koUrl = `${window.location.origin}${data.urls.ko}`
      const enUrl = `${window.location.origin}${data.urls.en}`
      try { await navigator.clipboard.writeText(koUrl + '\n' + enUrl) } catch {}
      setPublishMsg(`KO: ${koUrl}\nEN: ${enUrl}`)
    } catch (err) {
      setPublishMsg('ERROR: ' + err.message)
    } finally {
      setPublishing(false)
      setTimeout(() => setPublishMsg(''), 20000)
    }
  }

  async function handleUnpublish() {
    try {
      const res = await fetch('/api/publish-citation', { method: 'DELETE' })
      const data = await res.json()
      if (data.ok) setPublishInfo(null)
    } catch {}
  }

  async function handleCombinedPublish() {
    if (combPublishing) return
    setCombPublishing(true); setCombMsg('')
    try {
      const result = await publishCombinedDashboard(generateDashboardHTML, resolveDataForLang)
      setCombMsg(`통합 게시 완료!\nKO: ${window.location.origin}${result.urls.ko}\nEN: ${window.location.origin}${result.urls.en}`)
    } catch (err) {
      setCombMsg('ERROR: ' + err.message)
    } finally {
      setCombPublishing(false)
      setTimeout(() => setCombMsg(''), 15000)
    }
  }

  return (
    <div style={{ width: 520, minWidth: 520, borderRight: '1px solid #1E293B',
      background: '#0F172A', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>

      {/* 로고 */}
      <div style={{ padding: '16px 18px 14px', borderBottom: '1px solid #1E293B' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
          <div style={{ width: 28, height: 28, borderRadius: 7, background: LG_RED,
            display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: 11, fontWeight: 900, color: '#FFFFFF', fontFamily: FONT }}>LG</span>
          </div>
          <div>
            <p style={{ margin: 0, fontSize: 11, fontWeight: 700, color: '#FFFFFF', fontFamily: FONT }}>
              GEO Citation <span style={{ fontSize: 11, fontWeight: 400, color: '#64748B' }}>v{__APP_VERSION__}</span>
            </p>
            <p style={{ margin: 0, fontSize: 11, color: '#475569', fontFamily: FONT }}>Citation 대시보드</p>
          </div>
        </div>
      </div>

      {/* 메인 영역 */}
      <div style={{ padding: '16px 14px', flex: 1, overflowY: 'auto' }}>

        {/* ── 구글 시트 동기화 ── */}
        <p style={{ margin: '0 0 8px 2px', fontSize: 11, fontWeight: 700, color: '#475569',
          textTransform: 'uppercase', letterSpacing: 1, fontFamily: FONT }}>
          구글 시트 동기화
        </p>
        <p style={{ margin: '0 0 4px', fontSize: 11, color: '#475569', fontFamily: FONT }}>Google Sheets URL</p>
        <input
          value={gsUrl}
          onChange={e => setGsUrl(e.target.value)}
          placeholder="https://docs.google.com/spreadsheets/d/..."
          style={{ ...inputStyle, fontSize: 11, padding: '7px 9px', marginBottom: 8,
            color: gsUrl ? '#E2E8F0' : '#334155' }}
        />
        <button onClick={handleGsSync}
          style={{ width: '100%', padding: '10px 0', borderRadius: 8, border: 'none',
            cursor: gsSyncing ? 'wait' : 'pointer',
            background: gsSyncing ? '#1E293B' : LG_RED,
            fontSize: 12, fontWeight: 700,
            color: gsSyncing ? '#94A3B8' : '#FFFFFF',
            fontFamily: FONT, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
            marginBottom: 8, transition: 'all 0.2s' }}>
          <RefreshCw size={13} style={{ animation: gsSyncing ? 'spin 1s linear infinite' : 'none' }} />
          {gsSyncing ? '동기화 중...' : '구글 시트 동기화'}
        </button>
        {(gsStatus || (gsSyncing && gsMsg)) && (
          <div style={{
            padding: '8px 10px', borderRadius: 7, fontSize: 11, fontFamily: FONT, lineHeight: 1.6,
            background: gsStatus === 'ok' ? '#14532D' : gsStatus === 'error' ? '#450A0A' : '#1E293B',
            color:      gsStatus === 'ok' ? '#86EFAC' : gsStatus === 'error' ? '#FCA5A5' : '#94A3B8',
            border: `1px solid ${gsStatus === 'ok' ? '#22C55E33' : gsStatus === 'error' ? '#EF444433' : '#334155'}`,
            marginBottom: 8,
          }}>
            {gsMsg}
          </div>
        )}
        {debugLog && (
          <div style={{
            padding: '8px 10px', borderRadius: 7, fontSize: 10, fontFamily: 'monospace', lineHeight: 1.7,
            background: '#0F172A', color: '#94A3B8',
            border: '1px solid #1E293B', marginBottom: 8,
            whiteSpace: 'pre-wrap', wordBreak: 'break-all', maxHeight: 200, overflowY: 'auto',
          }}>
            {debugLog}
            <button
              onClick={() => {
                navigator.clipboard.writeText(debugLog).then(() => {
                  const btn = document.getElementById('debug-copy-btn')
                  if (btn) { btn.textContent = '복사됨!'; setTimeout(() => { btn.textContent = '로그 복사' }, 1500) }
                })
              }}
              id="debug-copy-btn"
              style={{
                display: 'block', marginTop: 6, padding: '4px 10px', borderRadius: 5,
                border: '1px solid #334155', background: '#1E293B', color: '#94A3B8',
                fontSize: 10, fontWeight: 700, fontFamily: FONT, cursor: 'pointer',
              }}
            >로그 복사</button>
          </div>
        )}

        <div style={{ height: 1, background: '#1E293B', marginBottom: 16 }} />

        {/* ── 노티스 ── */}
        <div style={{ marginBottom: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: '#475569', textTransform: 'uppercase', letterSpacing: 1, fontFamily: FONT }}>Notice</span>
            <button onClick={() => setMeta(m => ({ ...m, showNotice: !m.showNotice }))}
              style={{ padding: '2px 8px', borderRadius: 4, border: 'none', cursor: 'pointer', fontSize: 10, fontWeight: 700, fontFamily: FONT,
                background: meta.showNotice ? '#166534' : '#1E293B', color: meta.showNotice ? '#86EFAC' : '#64748B' }}>
              {meta.showNotice ? 'ON' : 'OFF'}
            </button>
          </div>
          <textarea value={meta.noticeText || ''} onChange={e => setMeta(m => ({ ...m, noticeText: e.target.value }))}
            rows={3} placeholder="공지사항 텍스트 (**bold** 지원)"
            style={{ ...inputStyle, fontSize: 11, lineHeight: 1.6 }} />
        </div>

        {/* ── 월간 트렌드 표시 ── */}
        <div style={{ marginBottom: 16 }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: '#475569', textTransform: 'uppercase', letterSpacing: 1, fontFamily: FONT, display: 'block', marginBottom: 8 }}>월간 트렌드 표시</span>
          {[
            { show: 'showCitTouchPointsTrend', label: '외부접점채널 월간 트렌드' },
            { show: 'showCitDomainTrend', label: '도메인 월간 트렌드' },
            { show: 'showDotcomTrend', label: '닷컴 월간 트렌드' },
          ].map(f => {
            const on = meta[f.show] !== false  // 디폴트 ON (undefined === !== false === true)
            return (
              <div key={f.show} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6, padding: '6px 10px', borderRadius: 6, background: '#0F172A', border: '1px solid #1E293B' }}>
                <label style={{ fontSize: 11, color: '#94A3B8', fontFamily: FONT }}>{f.label}</label>
                <button onClick={() => setMeta(m => ({ ...m, [f.show]: !on }))}
                  style={{ padding: '2px 8px', borderRadius: 4, border: 'none', cursor: 'pointer', fontSize: 10, fontWeight: 700, fontFamily: FONT,
                    background: on ? '#166534' : '#1E293B', color: on ? '#86EFAC' : '#64748B' }}>
                  {on ? 'ON' : 'OFF'}
                </button>
              </div>
            )
          })}
        </div>

        <div style={{ height: 1, background: '#1E293B', marginBottom: 16 }} />

        {/* ── 웹 게시 ── */}
        <p style={{ margin: '0 0 10px 2px', fontSize: 11, fontWeight: 700, color: '#475569',
          textTransform: 'uppercase', letterSpacing: 1, fontFamily: FONT }}>
          웹 게시
        </p>
        <button onClick={handlePublish} disabled={publishing}
          style={{ width: '100%', padding: '10px 0', borderRadius: 8, border: 'none',
            background: publishing ? '#1E293B' : '#166534', color: publishing ? '#94A3B8' : '#86EFAC',
            fontSize: 12, fontWeight: 700, fontFamily: FONT, cursor: publishing ? 'wait' : 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, marginBottom: 8 }}>
          <Globe size={13} /> {publishing ? '게시 중...' : '웹 게시 (KO + EN)'}
        </button>
        <button onClick={handleCombinedPublish} disabled={combPublishing}
          style={{ width: '100%', padding: '10px 0', borderRadius: 8, border: 'none',
            background: combPublishing ? '#1E293B' : '#1D4ED8', color: combPublishing ? '#94A3B8' : '#FFFFFF',
            fontSize: 12, fontWeight: 700, fontFamily: FONT, cursor: combPublishing ? 'wait' : 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, marginBottom: 8 }}>
          <Globe size={13} /> {combPublishing ? '통합 게시 중...' : '통합 대시보드 게시'}
        </button>
        {combMsg && (
          <div style={{ padding: '8px 10px', borderRadius: 7, fontSize: 11, fontFamily: FONT, lineHeight: 1.6,
            background: combMsg.startsWith('ERROR') ? '#450A0A' : '#14532D',
            color: combMsg.startsWith('ERROR') ? '#FCA5A5' : '#86EFAC',
            marginBottom: 8, wordBreak: 'break-all', whiteSpace: 'pre-line' }}>{combMsg.startsWith('ERROR:') ? combMsg.slice(6) : combMsg}</div>
        )}
        {publishMsg && (
          <div style={{ padding: '8px 10px', borderRadius: 7, fontSize: 11, fontFamily: FONT, lineHeight: 1.6,
            background: publishMsg.startsWith('ERROR') ? '#450A0A' : '#14532D',
            color: publishMsg.startsWith('ERROR') ? '#FCA5A5' : '#86EFAC',
            marginBottom: 8, whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>
            {publishMsg}
          </div>
        )}
        {publishInfo?.published && (
          <div style={{ display: 'flex', gap: 4, marginBottom: 8 }}>
            <a href={publishInfo.urls?.ko} target="_blank" rel="noopener noreferrer"
              style={{ flex: 1, textAlign: 'center', padding: '6px 0', borderRadius: 6,
                background: '#0F172A', border: '1px solid #334155', color: '#94A3B8',
                fontSize: 10, fontFamily: FONT, textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 3 }}>
              <Link2 size={10} /> KO
            </a>
            <a href={publishInfo.urls?.en} target="_blank" rel="noopener noreferrer"
              style={{ flex: 1, textAlign: 'center', padding: '6px 0', borderRadius: 6,
                background: '#0F172A', border: '1px solid #334155', color: '#94A3B8',
                fontSize: 10, fontFamily: FONT, textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 3 }}>
              <Link2 size={10} /> EN
            </a>
            <button onClick={handleUnpublish}
              style={{ padding: '6px 10px', borderRadius: 6, border: 'none', cursor: 'pointer',
                background: '#7F1D1D', color: '#FCA5A5', fontSize: 10, fontWeight: 700, fontFamily: FONT }}>
              게시 해제
            </button>
          </div>
        )}

      </div>
    </div>
  )
}
