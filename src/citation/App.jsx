import React, { useState, useRef, useEffect, useMemo } from 'react'
import { Save, FolderOpen, Trash2, PanelLeftClose, PanelLeftOpen } from 'lucide-react'
import { generateCitationHTML } from './citationTemplate.js'
import { INIT_META, INIT_CITATIONS, INIT_CITATIONS_CNTY, INIT_DOTCOM, FONT, LG_RED } from '../shared/constants.js'
import { loadCache, saveCache } from '../shared/cache.js'
import { fetchSnapshots, postSnapshot, updateSnapshot, deleteSnapshot, fetchSyncData } from '../shared/api.js'
import { resolveDataForLang } from '../shared/utils.js'
import CitationSidebar from './CitationSidebar.jsx'

const MODE = 'citation'
const STORAGE_KEY = 'geo-citation-cache'

// ─── Citation 대시보드 미리보기 ─────────────────────────────────────────────
function CitationPreview({ meta, setMeta, citations, dotcom, citationsCnty = [], citationsByCnty = {}, citationsByPrd = {}, dotcomByCnty = {}, lang = 'ko', citTouchPointsTrend, citTrendMonths, citDomainTrend, citDomainMonths, dotcomTrend, dotcomTrendMonths }) {
  const iframeRef = useRef(null)
  const html = useMemo(
    () => generateCitationHTML(meta, null, [], citations, dotcom, lang, [], citationsCnty, { citTouchPointsTrend, citTrendMonths, citDomainTrend, citDomainMonths, dotcomTrend, dotcomTrendMonths }, citationsByCnty, dotcomByCnty, citationsByPrd),
    [meta, citations, dotcom, lang, citationsCnty, citTouchPointsTrend, citTrendMonths, citDomainTrend, citDomainMonths, citationsByCnty, citationsByPrd, dotcomByCnty, dotcomTrend, dotcomTrendMonths]
  )

  React.useEffect(() => {
    const iframe = iframeRef.current
    if (!iframe) return
    const doc = iframe.contentDocument || iframe.contentWindow.document
    doc.open()
    doc.write(html)
    doc.close()
  }, [html])

  return (
    <iframe
      ref={iframeRef}
      title="citation-preview"
      style={{ width: '100%', height: '100%', border: 'none', background: '#F1F5F9' }}
      sandbox="allow-same-origin allow-scripts"
    />
  )
}

// ─── 메인 앱 ────────────────────────────────────────────────────────────────
export default function App() {
  const cache = useRef(loadCache(STORAGE_KEY)).current
  const [metaKo,        setMetaKo]        = useState({ ...INIT_META, ...(cache?.metaKo ?? cache?.meta ?? {}) })
  const [metaEn,        setMetaEn]        = useState({ ...INIT_META, ...(cache?.metaEn ?? {}) })
  const [citations,     setCitations]     = useState(cache?.citations ?? INIT_CITATIONS)
  const [citationsCnty, setCitationsCnty] = useState(cache?.citationsCnty ?? INIT_CITATIONS_CNTY)
  const [dotcom,        setDotcom]        = useState((cache?.dotcom && cache.dotcom.lg) ? cache.dotcom : INIT_DOTCOM)
  const [citationsByCnty, setCitationsByCnty] = useState(cache?.citationsByCnty ?? {})
  const [citationsByPrd,  setCitationsByPrd]  = useState(cache?.citationsByPrd ?? {})
  const [dotcomByCnty,    setDotcomByCnty]    = useState(cache?.dotcomByCnty ?? {})
  const [citTouchPointsTrend, setCitTouchPointsTrend] = useState(cache?.citTouchPointsTrend ?? {})
  const [citTrendMonths, setCitTrendMonths] = useState(cache?.citTrendMonths ?? [])
  const [citDomainTrend, setCitDomainTrend] = useState(cache?.citDomainTrend ?? {})
  const [citDomainMonths, setCitDomainMonths] = useState(cache?.citDomainMonths ?? [])
  const [dotcomTrend, setDotcomTrend] = useState(cache?.dotcomTrend ?? {})
  const [dotcomTrendMonths, setDotcomTrendMonths] = useState(cache?.dotcomTrendMonths ?? [])
  const [previewLang,   setPreviewLang]   = useState('ko')
  const [snapshots,     setSnapshots]     = useState([])
  const [snapName,      setSnapName]      = useState('')
  const [snapOpen,      setSnapOpen]      = useState(false)
  const [snapMsg,       setSnapMsg]       = useState('')
  const [activeSnap,    setActiveSnap]    = useState(null)
  const [sidebarOpen,   setSidebarOpen]   = useState(true)

  const meta    = previewLang === 'en' ? metaEn : metaKo
  const setMeta = previewLang === 'en' ? setMetaEn : setMetaKo

  const resolved = useMemo(
    () => resolveDataForLang([], [], citations, citationsCnty, previewLang),
    [citations, citationsCnty, previewLang]
  )

  useEffect(() => { fetchSnapshots(MODE).then(setSnapshots) }, [])

  // 서버 동기화 데이터 로드
  useEffect(() => {
    let cancelled = false
    fetchSyncData(MODE).then(d => {
      if (cancelled || !d) return
      if (d.meta) {
        const citMeta = { ...d.meta }
        delete citMeta.showCitations
        delete citMeta.showCitDomain
        delete citMeta.showCitCnty
        delete citMeta.showDotcom
        setMetaKo(m => ({ ...m, ...citMeta }))
      }
      if (d.citations)     setCitations(d.citations)
      if (d.citationsByCnty) setCitationsByCnty(d.citationsByCnty)
      if (d.citationsByPrd) setCitationsByPrd(d.citationsByPrd)
      if (d.dotcom)        setDotcom(prev => ({ ...prev, ...d.dotcom }))
      if (d.dotcomByCnty)  setDotcomByCnty(d.dotcomByCnty)
      if (d.citationsCnty) setCitationsCnty(d.citationsCnty)
      if (d.citTouchPointsTrend) setCitTouchPointsTrend(d.citTouchPointsTrend)
      if (d.citTrendMonths) setCitTrendMonths(d.citTrendMonths)
      if (d.citDomainTrend) setCitDomainTrend(d.citDomainTrend)
      if (d.citDomainMonths) setCitDomainMonths(d.citDomainMonths)
      if (d.dotcomTrend) setDotcomTrend(d.dotcomTrend)
      if (d.dotcomTrendMonths) setDotcomTrendMonths(d.dotcomTrendMonths)
    })
    return () => { cancelled = true }
  }, [])

  // 캐시 저장
  useEffect(() => {
    saveCache(STORAGE_KEY, { metaKo, metaEn, citations, citationsCnty, dotcom, citationsByCnty, citationsByPrd, dotcomByCnty, citTouchPointsTrend, citTrendMonths, citDomainTrend, citDomainMonths, dotcomTrend, dotcomTrendMonths })
  }, [metaKo, metaEn, citations, citationsCnty, dotcom, citationsByCnty, citationsByPrd, dotcomByCnty, citTouchPointsTrend, citTrendMonths, citDomainTrend, citDomainMonths, dotcomTrend, dotcomTrendMonths])

  // 스냅샷 관리
  async function handleSnapOverwrite() {
    if (!activeSnap) return
    const data = { metaKo, metaEn, citations, citationsCnty, dotcom, citationsByCnty, citationsByPrd, dotcomByCnty, citTouchPointsTrend, citTrendMonths, citDomainTrend, citDomainMonths, dotcomTrend, dotcomTrendMonths }
    const result = await updateSnapshot(MODE, activeSnap, data)
    if (result) setSnapshots(result)
    setSnapMsg(result ? '저장 완료!' : '저장 실패'); setTimeout(() => setSnapMsg(''), 2000)
  }
  async function handleSnapSaveNew() {
    const name = snapName.trim() || `${meta.period || 'Untitled'} Citation — ${new Date().toLocaleString('ko-KR')}`
    const result = await postSnapshot(MODE, name, { metaKo, metaEn, citations, citationsCnty, dotcom, citationsByCnty, citationsByPrd, dotcomByCnty, citTouchPointsTrend, citTrendMonths, citDomainTrend, citDomainMonths, dotcomTrend, dotcomTrendMonths })
    if (result) { setSnapshots(result); setSnapName(''); setActiveSnap(result[0]?.ts || null) }
    setSnapMsg(result ? '새로 저장 완료!' : '저장 실패'); setTimeout(() => setSnapMsg(''), 2000)
  }
  function handleSnapLoad(snap) {
    const d = snap.data
    setMetaKo({ ...INIT_META, ...(d.metaKo || d.meta || {}) })
    setMetaEn({ ...INIT_META, ...(d.metaEn || {}) })
    if (d.citations)     setCitations(d.citations)
    if (d.citationsCnty) setCitationsCnty(d.citationsCnty)
    if (d.dotcom)        setDotcom(d.dotcom)
    if (d.citationsByCnty) setCitationsByCnty(d.citationsByCnty)
    if (d.citationsByPrd)  setCitationsByPrd(d.citationsByPrd)
    if (d.dotcomByCnty)    setDotcomByCnty(d.dotcomByCnty)
    if (d.citTouchPointsTrend) setCitTouchPointsTrend(d.citTouchPointsTrend)
    if (d.citTrendMonths)      setCitTrendMonths(d.citTrendMonths)
    if (d.citDomainTrend)      setCitDomainTrend(d.citDomainTrend)
    if (d.citDomainMonths)     setCitDomainMonths(d.citDomainMonths)
    setActiveSnap(snap.ts)
    setSnapMsg(`"${snap.name}" 불러옴`); setTimeout(() => setSnapMsg(''), 2000)
  }
  async function handleSnapDelete(idx) {
    const snap = snapshots[idx]
    if (!snap) return
    const result = await deleteSnapshot(MODE, snap.ts)
    if (result) setSnapshots(result)
    if (activeSnap === snap.ts) setActiveSnap(null)
  }

  return (
    <div style={{ display: 'flex', height: '100vh', background: '#0A0F1C', fontFamily: FONT }}>
      {sidebarOpen && (
        <CitationSidebar
          mode={MODE}
          meta={meta} setMeta={setMeta} metaKo={metaKo} setMetaKo={setMetaKo} metaEn={metaEn} setMetaEn={setMetaEn}
          citations={citations} setCitations={setCitations}
          citationsCnty={citationsCnty} setCitationsCnty={setCitationsCnty}
          dotcom={dotcom} setDotcom={setDotcom}
          citationsByCnty={citationsByCnty} setCitationsByCnty={setCitationsByCnty}
          citationsByPrd={citationsByPrd} setCitationsByPrd={setCitationsByPrd}
          dotcomByCnty={dotcomByCnty} setDotcomByCnty={setDotcomByCnty}
          citTouchPointsTrend={citTouchPointsTrend} setCitTouchPointsTrend={setCitTouchPointsTrend}
          citTrendMonths={citTrendMonths} setCitTrendMonths={setCitTrendMonths}
          citDomainTrend={citDomainTrend} setCitDomainTrend={setCitDomainTrend}
          citDomainMonths={citDomainMonths} setCitDomainMonths={setCitDomainMonths}
          dotcomTrend={dotcomTrend} setDotcomTrend={setDotcomTrend}
          dotcomTrendMonths={dotcomTrendMonths} setDotcomTrendMonths={setDotcomTrendMonths}
          resolved={resolved}
          previewLang={previewLang} setPreviewLang={setPreviewLang}
          generateHTML={generateCitationHTML}
        />
      )}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        {/* 탑바 */}
        <div style={{ height: 48, borderBottom: '1px solid #1E293B',
          background: 'rgba(15,23,42,0.95)', backdropFilter: 'blur(8px)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '0 22px', flexShrink: 0 }}>
          <div style={{ display: 'flex', gap: 3, alignItems: 'center' }}>
            <button onClick={() => setSidebarOpen(v => !v)} title={sidebarOpen ? '패널 닫기' : '패널 열기'}
              style={{ padding: '4px 6px', borderRadius: 6, border: 'none', cursor: 'pointer',
                background: 'transparent', color: '#94A3B8', display: 'flex', alignItems: 'center',
                marginRight: 4 }}>
              {sidebarOpen ? <PanelLeftClose size={16} /> : <PanelLeftOpen size={16} />}
            </button>
            <div style={{ display: 'flex', gap: 2, background: '#0F172A', borderRadius: 6, padding: 2 }}>
              {['ko', 'en'].map(l => (
                <button key={l} onClick={() => setPreviewLang(l)} style={{
                  padding: '3px 10px', borderRadius: 5, border: 'none',
                  background: previewLang === l ? LG_RED : 'transparent',
                  color: previewLang === l ? '#FFFFFF' : '#64748B',
                  fontSize: 10, fontWeight: 700, fontFamily: FONT, cursor: 'pointer',
                }}>{l.toUpperCase()}</button>
              ))}
            </div>
            <span style={{ fontSize: 12, fontWeight: 700, color: '#94A3B8', fontFamily: FONT, marginLeft: 8 }}>
              Citation Dashboard
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            {snapMsg && <span style={{ fontSize: 11, color: '#22C55E', fontFamily: FONT }}>{snapMsg}</span>}
            <button onClick={handleSnapOverwrite} disabled={!activeSnap}
              title={activeSnap ? '현재 버전에 덮어쓰기' : '불러온 버전이 없습니다'}
              style={{ padding: '4px 10px', borderRadius: 6, border: 'none', cursor: activeSnap ? 'pointer' : 'default',
                background: activeSnap ? '#1D4ED8' : '#1E293B', color: activeSnap ? '#FFFFFF' : '#475569',
                fontSize: 11, fontWeight: 700, fontFamily: FONT,
                display: 'flex', alignItems: 'center', gap: 4, opacity: activeSnap ? 1 : 0.5 }}>
              <Save size={11} /> 저장
            </button>
            <input value={snapName} onChange={e => setSnapName(e.target.value)}
              placeholder="버전 이름..."
              onKeyDown={e => e.key === 'Enter' && handleSnapSaveNew()}
              style={{ width: 120, background: '#1E293B', border: '1px solid #334155', borderRadius: 6,
                padding: '4px 8px', fontSize: 11, color: '#E2E8F0', fontFamily: FONT, outline: 'none' }} />
            <button onClick={handleSnapSaveNew} title="새 버전으로 저장"
              style={{ padding: '4px 10px', borderRadius: 6, border: 'none', cursor: 'pointer',
                background: '#166534', color: '#86EFAC', fontSize: 11, fontWeight: 700, fontFamily: FONT,
                display: 'flex', alignItems: 'center', gap: 4 }}>
              <Save size={11} /> 새로 저장
            </button>
            <div style={{ position: 'relative' }}>
              <button onClick={() => setSnapOpen(!snapOpen)} title="저장된 버전 불러오기"
                style={{ padding: '4px 10px', borderRadius: 6, border: 'none', cursor: 'pointer',
                  background: snapOpen ? '#334155' : '#1E293B', color: '#E2E8F0', fontSize: 11, fontWeight: 700, fontFamily: FONT,
                  display: 'flex', alignItems: 'center', gap: 4 }}>
                <FolderOpen size={11} /> 불러오기 {snapshots.length > 0 && <span style={{ fontSize: 11, color: '#94A3B8' }}>({snapshots.length})</span>}
              </button>
              {snapOpen && (
                <div style={{ position: 'absolute', top: 32, right: 0, width: 320, maxHeight: 360, overflowY: 'auto',
                  background: '#1E293B', border: '1px solid #334155', borderRadius: 10, zIndex: 100, padding: 8,
                  boxShadow: '0 8px 24px rgba(0,0,0,0.4)' }}
                  onClick={e => e.stopPropagation()}>
                  {snapshots.length === 0 ? (
                    <p style={{ margin: 0, padding: 12, fontSize: 11, color: '#64748B', fontFamily: FONT, textAlign: 'center' }}>저장된 버전이 없습니다</p>
                  ) : snapshots.map((snap, i) => (
                    <div key={snap.ts} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 10px',
                      borderRadius: 7, marginBottom: 2, background: activeSnap === snap.ts ? '#1E3A5F' : '#0F172A',
                      border: activeSnap === snap.ts ? '1px solid #3B82F6' : '1px solid transparent' }}>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <p style={{ margin: 0, fontSize: 11, fontWeight: 700, color: '#E2E8F0', fontFamily: FONT,
                          overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{snap.name}</p>
                        <p style={{ margin: 0, fontSize: 11, color: '#64748B', fontFamily: FONT }}>
                          {new Date(snap.ts).toLocaleString('ko-KR')}
                        </p>
                      </div>
                      <button onClick={() => { handleSnapLoad(snap); setSnapOpen(false) }}
                        style={{ padding: '3px 8px', borderRadius: 5, border: 'none', cursor: 'pointer',
                          background: '#166534', color: '#FFFFFF', fontSize: 11, fontWeight: 700, fontFamily: FONT }}>
                        적용
                      </button>
                      <button onClick={() => handleSnapDelete(i)}
                        style={{ padding: '3px 5px', borderRadius: 5, border: 'none', cursor: 'pointer',
                          background: '#7F1D1D', color: '#FCA5A5', fontSize: 11, display: 'flex' }}>
                        <Trash2 size={10} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 컨텐츠 영역 */}
        <div style={{ flex: 1, overflow: 'hidden' }}>
          <CitationPreview meta={meta} setMeta={setMeta} citations={resolved.citations} dotcom={dotcom} citationsCnty={resolved.citationsCnty} citationsByCnty={citationsByCnty} citationsByPrd={citationsByPrd} dotcomByCnty={dotcomByCnty} lang={previewLang} citTouchPointsTrend={citTouchPointsTrend} citTrendMonths={citTrendMonths} citDomainTrend={citDomainTrend} citDomainMonths={citDomainMonths} dotcomTrend={dotcomTrend} dotcomTrendMonths={dotcomTrendMonths} />
        </div>
        <div style={{ height: 28, borderTop: '1px solid #1E293B', background: 'rgba(15,23,42,0.95)',
          display: 'flex', alignItems: 'center', justifyContent: 'flex-end', padding: '0 16px', flexShrink: 0 }}>
          <span style={{ fontSize: 10, color: '#475569', fontFamily: FONT }}>v{__APP_VERSION__}</span>
        </div>
      </div>
    </div>
  )
}
