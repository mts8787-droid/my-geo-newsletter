import React, { useState, useRef, useEffect, useMemo } from 'react'
import { Save, FolderOpen, Trash2, PanelLeftClose, PanelLeftOpen } from 'lucide-react'
import { generateDashboardHTML, generateVisibilityHTML } from '../dashboard/dashboardTemplate.js'
import { INIT_META, INIT_TOTAL, INIT_PRODUCTS, INIT_DOTCOM, INIT_PRODUCTS_CNTY, INIT_CITATIONS_CNTY, INIT_CITATIONS, FONT, LG_RED } from '../shared/constants.js'
import { loadCache, saveCache } from '../shared/cache.js'
import { fetchSnapshots, postSnapshot, updateSnapshot, deleteSnapshot, fetchSyncData } from '../shared/api.js'
import { resolveDataForLang } from '../shared/utils.js'
import Sidebar from '../shared/Sidebar.jsx'

const MODE = 'dashboard'
const STORAGE_KEY = 'geo-dashboard-cache'

// ─── 대시보드 미리보기 ──────────────────────────────────────────────────────────
function DashboardPreview({ meta, total, products, citations, dotcom, productsCnty = [], citationsCnty = [], lang = 'ko', weeklyLabels, weeklyAll = {}, citationsByCnty = {}, dotcomByCnty = {}, monthlyVis = [], extra }) {
  const iframeRef = useRef(null)
  const html = useMemo(
    () => generateVisibilityHTML(meta, total, products, citations, dotcom, lang, productsCnty, citationsCnty, weeklyLabels, weeklyAll, citationsByCnty, dotcomByCnty, monthlyVis, extra),
    [meta, total, products, citations, dotcom, lang, productsCnty, citationsCnty, weeklyLabels, weeklyAll, citationsByCnty, dotcomByCnty, monthlyVis, extra]
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
      title="dashboard-preview"
      style={{ width: '100%', height: '100%', border: 'none', background: '#F1F5F9' }}
      sandbox="allow-same-origin allow-scripts"
    />
  )
}

// ─── 메인 앱 ──────────────────────────────────────────────────────────────────
export default function App() {
  const cache = useRef(loadCache(STORAGE_KEY)).current
  const [metaKo,    setMetaKo]    = useState({ ...INIT_META, ...(cache?.metaKo ?? cache?.meta ?? {}) })
  const [metaEn,    setMetaEn]    = useState({ ...INIT_META, ...(cache?.metaEn ?? {}) })
  const [total,     setTotal]     = useState(cache?.total     ?? INIT_TOTAL)
  const [products,  setProducts]  = useState(cache?.products  ?? INIT_PRODUCTS)
  const [citations, setCitations] = useState(cache?.citations ?? INIT_CITATIONS)
  const [dotcom,    setDotcom]    = useState((cache?.dotcom && cache.dotcom.lg) ? cache.dotcom : INIT_DOTCOM)
  const [productsCnty, setProductsCnty] = useState(cache?.productsCnty ?? INIT_PRODUCTS_CNTY)
  const [citationsCnty, setCitationsCnty] = useState(cache?.citationsCnty ?? INIT_CITATIONS_CNTY)
  const [weeklyLabels, setWeeklyLabels] = useState(cache?.weeklyLabels ?? null)
  const [weeklyAll, setWeeklyAll] = useState(cache?.weeklyAll ?? {})
  const [citationsByCnty, setCitationsByCnty] = useState(cache?.citationsByCnty ?? {})
  const [dotcomByCnty, setDotcomByCnty] = useState(cache?.dotcomByCnty ?? {})
  const [monthlyVis, setMonthlyVis] = useState(cache?.monthlyVis ?? [])
  const [weeklyPR, setWeeklyPR] = useState([])
  const [weeklyPRLabels, setWeeklyPRLabels] = useState([])
  const [weeklyBrandPrompt, setWeeklyBrandPrompt] = useState([])
  const [weeklyBrandPromptLabels, setWeeklyBrandPromptLabels] = useState([])
  const [appendixPrompts, setAppendixPrompts] = useState([])
  const [unlaunchedMap, setUnlaunchedMap] = useState({})
  const [weeklyLabelsFull, setWeeklyLabelsFull] = useState(null)
  const [previewLang, setPreviewLang] = useState('ko')
  const [snapshots,  setSnapshots]  = useState([])
  const [snapName,   setSnapName]   = useState('')
  const [snapOpen,   setSnapOpen]   = useState(false)
  const [snapMsg,    setSnapMsg]    = useState('')
  const [activeSnap, setActiveSnap] = useState(null)
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const meta    = previewLang === 'en' ? metaEn : metaKo
  const setMeta = previewLang === 'en' ? setMetaEn : setMetaKo

  const resolved = useMemo(
    () => resolveDataForLang(products, productsCnty, citations, citationsCnty, previewLang),
    [products, productsCnty, citations, citationsCnty, previewLang]
  )

  useEffect(() => { fetchSnapshots(MODE).then(setSnapshots) }, [])

  const serverSyncApplied = useRef(false)
  useEffect(() => {
    let cancelled = false
    fetchSyncData(MODE).then(d => {
      if (cancelled || !d) return
      serverSyncApplied.current = true
      if (d.meta) {
        // 서버 저장 period가 최신이 아닐 수 있으므로 데이터에서 재감지
        const enNames = ['','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
        let bestMonth = 0
        // citDerivedPeriod에서 추출
        if (d.citDerivedPeriod) {
          const cm = String(d.citDerivedPeriod).match(/(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/i)
          if (cm) { const ci = enNames.findIndex(m => m && m.toLowerCase() === cm[1].toLowerCase()); if (ci > bestMonth) bestMonth = ci }
        }
        // productsPartial의 최신 date에서 추출
        if (d.productsPartial?.length) {
          d.productsPartial.forEach(p => {
            if (p.date) {
              const km = String(p.date).match(/(\d{1,2})월/); if (km) { const n = parseInt(km[1]); if (n > bestMonth) bestMonth = n }
              const em = String(p.date).match(/(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/i)
              if (em) { const ci = enNames.findIndex(m => m && m.toLowerCase() === em[1].toLowerCase()); if (ci > bestMonth) bestMonth = ci }
            }
          })
        }
        // monthlyVis에서 최신 월 추출
        if (d.monthlyVis?.length) {
          d.monthlyVis.forEach(r => {
            if (r.date) {
              const km = String(r.date).match(/(\d{1,2})월/); if (km) { const n = parseInt(km[1]); if (n > bestMonth) bestMonth = n }
              const em = String(r.date).match(/(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/i)
              if (em) { const ci = enNames.findIndex(m => m && m.toLowerCase() === em[1].toLowerCase()); if (ci > bestMonth) bestMonth = ci }
            }
          })
        }
        const yr = new Date().getFullYear()
        const correctedMeta = { ...d.meta }
        if (bestMonth > 0) {
          correctedMeta.period = `${enNames[bestMonth]} ${yr}`
        }
        setMetaKo(m => ({ ...m, ...correctedMeta }))
        if (bestMonth > 0) setMetaEn(m => ({ ...m, period: `${enNames[bestMonth]} ${yr}` }))
      }
      if (d.total)         setTotal(t => ({ ...t, ...d.total }))
      if (d.citations)     setCitations(d.citations)
      if (d.dotcom)        setDotcom(prev => ({ ...prev, ...d.dotcom }))
      if (d.productsCnty)  setProductsCnty(d.productsCnty)
      if (d.citationsCnty) setCitationsCnty(d.citationsCnty)
      if (d.citationsByCnty) setCitationsByCnty(d.citationsByCnty)
      if (d.dotcomByCnty) setDotcomByCnty(d.dotcomByCnty)
      if (d.monthlyVis) setMonthlyVis(d.monthlyVis)
      if (d.weeklyPR) setWeeklyPR(d.weeklyPR)
      if (d.weeklyPRLabels) setWeeklyPRLabels(d.weeklyPRLabels)
      if (d.weeklyBrandPrompt) setWeeklyBrandPrompt(d.weeklyBrandPrompt)
      if (d.weeklyBrandPromptLabels) setWeeklyBrandPromptLabels(d.weeklyBrandPromptLabels)
      if (d.appendixPrompts) setAppendixPrompts(d.appendixPrompts)
      if (d.unlaunchedMap) setUnlaunchedMap(d.unlaunchedMap)
      if (d.weeklyLabels)  setWeeklyLabels(d.weeklyLabels)
      if (d.weeklyLabelsFull) setWeeklyLabelsFull(d.weeklyLabelsFull)
      if (d.weeklyAll)     setWeeklyAll(prev => ({ ...prev, ...d.weeklyAll }))
      if (d.productsPartial) {
        setProducts(d.productsPartial.map(p => {
          const weekly = d.weeklyMap?.[p.id] || []
          const validW = weekly.filter(v => v != null && v > 0)
          const monthlyScore = p.monthlyScore || p.score
          const monthlyPrev = p.monthlyPrev || p.prev || 0
          const weeklyScore = p.weeklyScore || (validW.length > 0 ? validW[validW.length - 1] : monthlyScore)
          const weeklyPrev = p.weeklyPrev || (validW.length >= 5 ? validW[validW.length - 5] : (validW[0] || 0))
          const ratio = p.vsComp > 0 ? Math.round(monthlyScore / p.vsComp * 100) : 100
          const monthly = monthlyPrev > 0 && monthlyPrev !== monthlyScore ? [monthlyPrev, monthlyScore] : []
          return { ...p, weekly, monthly, weeklyScore, weeklyPrev, monthlyScore, monthlyPrev,
            compRatio: ratio, status: ratio >= 100 ? 'lead' : ratio >= 80 ? 'behind' : 'critical' }
        }))
      } else if (d.weeklyMap) {
        setProducts(prev => prev.map(p => {
          const weekly = d.weeklyMap?.[p.id]
          return weekly ? { ...p, weekly } : p
        }))
      }
    })
    return () => { cancelled = true }
  }, [])

  useEffect(() => {
    saveCache(STORAGE_KEY, { metaKo, metaEn, total, products, citations, dotcom, productsCnty, citationsCnty, weeklyLabels, weeklyAll, citationsByCnty, dotcomByCnty, monthlyVis })
  }, [metaKo, metaEn, total, products, citations, dotcom, productsCnty, citationsCnty, weeklyLabels, weeklyAll, citationsByCnty, dotcomByCnty, monthlyVis])

  async function handleSnapOverwrite() {
    if (!activeSnap) return
    const data = { metaKo, metaEn, total, products, citations, dotcom, productsCnty, citationsCnty, weeklyLabels, weeklyAll, citationsByCnty, dotcomByCnty, monthlyVis }
    const result = await updateSnapshot(MODE, activeSnap, data)
    if (result) setSnapshots(result)
    setSnapMsg(result ? '저장 완료!' : '저장 실패'); setTimeout(() => setSnapMsg(''), 2000)
  }
  async function handleSnapSaveNew() {
    const name = snapName.trim() || `${meta.period || 'Untitled'} — ${new Date().toLocaleString('ko-KR')}`
    const result = await postSnapshot(MODE, name, { metaKo, metaEn, total, products, citations, dotcom, productsCnty, citationsCnty, weeklyLabels, weeklyAll, citationsByCnty, dotcomByCnty, monthlyVis })
    if (result) { setSnapshots(result); setSnapName(''); setActiveSnap(result[0]?.ts || null) }
    setSnapMsg(result ? '새로 저장 완료!' : '저장 실패'); setTimeout(() => setSnapMsg(''), 2000)
  }
  function handleSnapLoad(snap) {
    const d = snap.data
    setMetaKo({ ...INIT_META, ...(d.metaKo || d.meta || {}) })
    setMetaEn({ ...INIT_META, ...(d.metaEn || {}) })
    if (d.total)     setTotal(d.total)
    if (d.products)  setProducts(d.products)
    if (d.citations) setCitations(d.citations)
    if (d.dotcom)    setDotcom(d.dotcom)
    if (d.productsCnty)  setProductsCnty(d.productsCnty)
    if (d.citationsCnty) setCitationsCnty(d.citationsCnty)
    if (d.weeklyLabels)  setWeeklyLabels(d.weeklyLabels)
    if (d.weeklyAll)     setWeeklyAll(d.weeklyAll)
    if (d.citationsByCnty) setCitationsByCnty(d.citationsByCnty)
    if (d.dotcomByCnty)  setDotcomByCnty(d.dotcomByCnty)
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
        <Sidebar
          mode={MODE}
          meta={meta} setMeta={setMeta} metaKo={metaKo} setMetaKo={setMetaKo} metaEn={metaEn} setMetaEn={setMetaEn}
          total={total} setTotal={setTotal}
          products={products} setProducts={setProducts}
          citations={citations} setCitations={setCitations}
          dotcom={dotcom} setDotcom={setDotcom}
          productsCnty={productsCnty} setProductsCnty={setProductsCnty}
          citationsCnty={citationsCnty} setCitationsCnty={setCitationsCnty}
          resolved={resolved}
          previewLang={previewLang} setPreviewLang={setPreviewLang}
          snapshots={snapshots} setSnapshots={setSnapshots}
          setWeeklyLabels={setWeeklyLabels}
          setWeeklyAll={setWeeklyAll}
          weeklyLabels={weeklyLabels}
          weeklyAll={weeklyAll}
          citationsByCnty={citationsByCnty}
          dotcomByCnty={dotcomByCnty}
          generateHTML={generateVisibilityHTML}
          publishEndpoint="/api/publish-visibility"
          setMonthlyVis={setMonthlyVis}
          monthlyVis={monthlyVis}
          extra={{ weeklyPR, weeklyPRLabels, weeklyBrandPrompt, weeklyBrandPromptLabels, appendixPrompts, unlaunchedMap, weeklyLabelsFull }}
          onSyncExtra={({ weeklyPR, weeklyPRLabels, weeklyBrandPrompt, weeklyBrandPromptLabels, appendixPrompts, unlaunchedMap: ulm, weeklyLabelsFull: wlf }) => {
            if (weeklyPR) setWeeklyPR(weeklyPR)
            if (weeklyPRLabels) setWeeklyPRLabels(weeklyPRLabels)
            if (weeklyBrandPrompt) setWeeklyBrandPrompt(weeklyBrandPrompt)
            if (weeklyBrandPromptLabels) setWeeklyBrandPromptLabels(weeklyBrandPromptLabels)
            if (appendixPrompts) setAppendixPrompts(appendixPrompts)
            if (ulm) setUnlaunchedMap(ulm)
            if (wlf) setWeeklyLabelsFull(wlf)
          }}
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
          <DashboardPreview meta={meta} total={total} products={resolved.products} citations={resolved.citations} dotcom={dotcom} productsCnty={resolved.productsCnty} citationsCnty={resolved.citationsCnty} lang={previewLang} weeklyLabels={weeklyLabels} weeklyAll={weeklyAll} citationsByCnty={citationsByCnty} dotcomByCnty={dotcomByCnty} monthlyVis={monthlyVis} extra={{ weeklyPR, weeklyPRLabels, weeklyBrandPrompt, weeklyBrandPromptLabels, appendixPrompts, unlaunchedMap }} />
        </div>
        <div style={{ height: 28, borderTop: '1px solid #1E293B', background: 'rgba(15,23,42,0.95)',
          display: 'flex', alignItems: 'center', justifyContent: 'flex-end', padding: '0 16px', flexShrink: 0 }}>
          <span style={{ fontSize: 10, color: '#475569', fontFamily: FONT }}>v{__APP_VERSION__}</span>
        </div>
      </div>
    </div>
  )
}
