import React, { useState, useRef, useCallback, useEffect, useMemo } from 'react'
import { Save, FolderOpen, Trash2, Copy, Check, PanelLeftClose, PanelLeftOpen } from 'lucide-react'
import { generateEmailHTML } from '../emailTemplate'
import { INIT_META, INIT_TOTAL, INIT_PRODUCTS, INIT_DOTCOM, INIT_PRODUCTS_CNTY, INIT_CITATIONS_CNTY, INIT_CITATIONS, FONT, LG_RED } from '../shared/constants.js'
import { loadCache, saveCache } from '../shared/cache.js'
import { fetchSnapshots, postSnapshot, updateSnapshot, deleteSnapshot, fetchSyncData } from '../shared/api.js'
import { resolveDataForLang } from '../shared/utils.js'
import { computeCategoryStats, extractMonthFromPeriod, previousMonth } from '../shared/trackerCategoryStats.js'
import { parseKPISheet } from '../tracker/utils/sheetParser.js'
// N2 — XLSX는 사용 시점에만 동적 로드 (~870KB)
import { loadXlsx } from '../shared/loadXlsx.js'
import Sidebar from '../shared/Sidebar.jsx'

const TRACKER_SHEET_ID = '1lAzhlYJIjHVqDeywD3YMR1E9qf2LlDohFc0r6SAnVaE'
const TRACKER_SHEET_NAME = '파싱시트'

const MODE = 'newsletter'
const STORAGE_KEY = 'geo-newsletter-cache'

// ─── 뉴스레터 미리보기 (iframe) ──────────────────────────────────────────────
function NewsletterPreview({ meta, total, products, citations, dotcom, productsCnty = [], citationsCnty = [], lang = 'ko', weeklyLabels, categoryStats, unlaunchedMap = {} }) {
  const iframeRef = useRef(null)
  const html = useMemo(
    () => generateEmailHTML(meta, total, products, citations, dotcom, lang, productsCnty, citationsCnty, { weeklyLabels, categoryStats, unlaunchedMap, productCardVersion: meta.productCardVersion || 'v1', trendMode: meta.trendMode || 'weekly' }),
    [meta, total, products, citations, dotcom, lang, productsCnty, citationsCnty, weeklyLabels, categoryStats, unlaunchedMap]
  )

  React.useEffect(() => {
    const iframe = iframeRef.current
    if (!iframe) return
    const doc = iframe.contentDocument || iframe.contentWindow.document
    doc.open()
    doc.write(html)
    doc.close()
    const adjust = () => {
      try {
        doc.body.style.overflow = 'hidden'
        doc.documentElement.style.overflow = 'hidden'
        const h = doc.documentElement.scrollHeight
        if (h) iframe.style.height = h + 20 + 'px'
      } catch {}
    }
    setTimeout(adjust, 150)
    setTimeout(adjust, 400)
    setTimeout(adjust, 1000)
    setTimeout(adjust, 2000)
  }, [html])

  return (
    <iframe
      ref={iframeRef}
      title="newsletter-preview"
      scrolling="no"
      style={{ width: '100%', maxWidth: '100%', border: 'none', minHeight: 800, background: '#F1F5F9', overflow: 'hidden', display: 'block' }}
      sandbox="allow-same-origin allow-scripts"
    />
  )
}

// ─── HTML 코드 뷰어 ───────────────────────────────────────────────────────────
function HtmlCodeViewer({ meta, total, products, citations, dotcom, productsCnty = [], citationsCnty = [], lang = 'ko', weeklyLabels, categoryStats, unlaunchedMap = {} }) {
  const [copied, setCopied] = useState(false)
  const html = useMemo(() => generateEmailHTML(meta, total, products, citations, dotcom, lang, productsCnty, citationsCnty, { weeklyLabels, categoryStats, unlaunchedMap, productCardVersion: meta.productCardVersion || 'v1', trendMode: meta.trendMode || 'weekly' }), [meta, total, products, citations, dotcom, lang, productsCnty, citationsCnty, weeklyLabels, categoryStats, unlaunchedMap])

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(html)
    } catch {
      const ta = document.createElement('textarea')
      ta.value = html; document.body.appendChild(ta); ta.select()
      document.execCommand('copy'); document.body.removeChild(ta)
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <div style={{ padding: '10px 22px', background: '#0F172A', borderBottom: '1px solid #1E293B',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }}>
        <div>
          <span style={{ fontSize: 11, fontWeight: 700, color: '#94A3B8', fontFamily: FONT }}>
            이메일 HTML 코드
          </span>
          <span style={{ fontSize: 11, color: '#334155', fontFamily: FONT, marginLeft: 10 }}>
            table 기반 · 인라인 스타일 · 이메일 클라이언트 호환
          </span>
        </div>
        <button onClick={handleCopy} style={{
          padding: '6px 14px', borderRadius: 7, border: 'none',
          background: copied ? '#14532D' : LG_RED,
          color: copied ? '#86EFAC' : '#FFFFFF',
          fontSize: 11, fontWeight: 700, fontFamily: FONT, cursor: 'pointer',
          display: 'flex', alignItems: 'center', gap: 5, transition: 'all 0.2s',
        }}>
          {copied ? <><Check size={12} /> 복사됨!</> : <><Copy size={12} /> HTML 복사</>}
        </button>
      </div>
      <div style={{ flex: 1, overflowY: 'auto', background: '#0A0F1C' }}>
        <pre style={{
          margin: 0, padding: '20px 24px',
          fontSize: 11, lineHeight: 1.6, color: '#94A3B8',
          fontFamily: "'Consolas','Courier New',monospace",
          whiteSpace: 'pre-wrap', wordBreak: 'break-all',
        }}>
          {html}
        </pre>
      </div>
    </div>
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
  const [unlaunchedMap, setUnlaunchedMap] = useState(cache?.unlaunchedMap ?? {})
  const [activeTab, setActiveTab] = useState('preview')
  const [previewLang, setPreviewLang] = useState('ko')
  const [categoryStats, setCategoryStats] = useState(null)
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

  // tracker 데이터: Google Sheets에서 직접 가져와서 categoryStats 계산
  useEffect(() => {
    let cancelled = false
    // 뉴스레터 진척사항은 항상 이전 달 (현재 발행월의 직전 달)
    const currentPeriodMonth = extractMonthFromPeriod(metaKo.period) || `${new Date().getMonth() + 1}월`
    const targetMonth = previousMonth(currentPeriodMonth)
    console.log('[CategoryCards] targetMonth(이전달):', targetMonth, 'period:', metaKo.period)

    // 1차: tracker-snapshot API 시도 (기존 게시 데이터)
    // 2차: 실패 시 Google Sheets에서 직접 fetch
    async function loadTrackerData() {
      // API 시도
      try {
        const r = await fetch('/api/tracker-snapshot')
        const j = r.ok ? await r.json() : null
        if (j?.ok && j.data?.quantitativeGoals?.rows?.length) {
          console.log('[CategoryCards] tracker-snapshot OK, rows:', j.data.quantitativeGoals.rows.length)
          const stats = computeCategoryStats(j.data, targetMonth)
          if (stats?.length && !cancelled) { setCategoryStats(stats); return }
        }
      } catch (e) { console.log('[CategoryCards] tracker-snapshot failed:', e.message) }

      // Google Sheets 직접 fetch
      console.log('[CategoryCards] Fetching from Google Sheets...')
      try {
        const rid = `${Date.now()}_${Math.random().toString(36).slice(2,8)}`
        const url = `/gsheets-proxy/spreadsheets/d/${TRACKER_SHEET_ID}/gviz/tq?sheet=${encodeURIComponent(TRACKER_SHEET_NAME)}&tqx=out:csv;reqId:${rid}&headers=1`
        const res = await fetch(url, { cache: 'no-store' })
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const csv = await res.text()
        const XLSX = await loadXlsx()
        const wb = XLSX.read(csv, { type: 'string' })
        const ws = wb.Sheets[wb.SheetNames[0]]
        const rows = XLSX.utils.sheet_to_json(ws, { header: 1, defval: '' })
        console.log('[CategoryCards] Sheet rows:', rows.length)
        const parsed = parseKPISheet(rows)
        console.log('[CategoryCards] Parsed goals:', parsed.quantitativeGoals?.rows?.length || 0)
        const stats = computeCategoryStats(parsed, targetMonth)
        console.log('[CategoryCards] Computed stats:', stats)
        if (stats?.length && !cancelled) setCategoryStats(stats)
      } catch (e) { console.warn('[CategoryCards] Google Sheets fetch failed:', e.message) }
    }
    loadTrackerData()
    return () => { cancelled = true }
  }, [metaKo.period])

  const snapMsgTimer = useRef(null)
  function showSnapMsg(msg, ms = 2000) {
    clearTimeout(snapMsgTimer.current)
    setSnapMsg(msg)
    snapMsgTimer.current = setTimeout(() => setSnapMsg(''), ms)
  }
  useEffect(() => () => clearTimeout(snapMsgTimer.current), [])

  const userLoadedSnapshot = useRef(false)
  useEffect(() => {
    let cancelled = false
    fetchSyncData(MODE).then(d => {
      if (cancelled || !d) return
      // 사용자가 이미 snapshot을 로드했으면 server sync data가 덮어쓰지 않도록 보호
      if (userLoadedSnapshot.current) return
      if (d.meta)          setMetaKo(m => ({ ...m, ...d.meta }))
      if (d.total)         setTotal(t => ({ ...t, ...d.total }))
      if (d.citations)     setCitations(d.citations)
      if (d.dotcom)        setDotcom(prev => ({ ...prev, ...d.dotcom }))
      if (d.productsCnty)  setProductsCnty(d.productsCnty)
      if (d.citationsCnty) setCitationsCnty(d.citationsCnty)
      if (d.weeklyLabels)  setWeeklyLabels(d.weeklyLabels)
      if (d.weeklyAll)     setWeeklyAll(prev => ({ ...prev, ...d.weeklyAll }))
      if (d.unlaunchedMap) setUnlaunchedMap(d.unlaunchedMap)
      if (d.productsPartial) {
        setProducts(d.productsPartial.map(p => {
          const weekly = d.weeklyMap?.[p.id] || []
          const ratio = p.vsComp > 0 ? (p.score / p.vsComp) * 100 : 100
          return { ...p, weekly, monthly: [], compRatio: Math.round(ratio),
            status: ratio >= 100 ? 'lead' : ratio >= 80 ? 'behind' : 'critical' }
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

  // newsletter sync에 unlaunchedMap이 없을 경우 visibility/dashboard sync에서 폴백
  useEffect(() => {
    if (Object.keys(unlaunchedMap).length > 0) return
    let cancelled = false
    ;(async () => {
      const [dVis, dDash] = await Promise.all([
        fetchSyncData('visibility').catch(() => null),
        fetchSyncData('dashboard').catch(() => null),
      ])
      const ulm = dVis?.unlaunchedMap || dDash?.unlaunchedMap
      if (ulm && !cancelled) setUnlaunchedMap(ulm)
    })()
    return () => { cancelled = true }
  }, [])

  useEffect(() => {
    saveCache(STORAGE_KEY, { metaKo, metaEn, total, products, citations, dotcom, productsCnty, citationsCnty, weeklyLabels, weeklyAll, unlaunchedMap })
  }, [metaKo, metaEn, total, products, citations, dotcom, productsCnty, citationsCnty, weeklyLabels, weeklyAll, unlaunchedMap])

  async function handleSnapOverwrite() {
    if (!activeSnap) return
    const data = { metaKo, metaEn, total, products, citations, dotcom, productsCnty, citationsCnty, weeklyLabels, weeklyAll }
    const result = await updateSnapshot(MODE, activeSnap, data)
    if (result) setSnapshots(result)
    showSnapMsg(result ? '저장 완료!' : '저장 실패')
  }
  async function handleSnapSaveNew() {
    const name = snapName.trim() || `${meta.period || 'Untitled'} — ${new Date().toLocaleString('ko-KR')}`
    const result = await postSnapshot(MODE, name, { metaKo, metaEn, total, products, citations, dotcom, productsCnty, citationsCnty, weeklyLabels, weeklyAll })
    if (result) { setSnapshots(result); setSnapName(''); setActiveSnap(result[0]?.ts || null) }
    showSnapMsg(result ? '새로 저장 완료!' : '저장 실패')
  }
  function handleSnapLoad(snap) {
    userLoadedSnapshot.current = true
    const d = snap.data
    setMetaKo({ ...INIT_META, ...(d.metaKo || d.meta || {}) })
    setMetaEn({ ...INIT_META, ...(d.metaEn || {}) })
    if (d.total)     setTotal(d.total)
    if (d.products)  setProducts(d.products)
    if (d.citations) setCitations(d.citations)
    if (d.dotcom)    setDotcom(d.dotcom)
    if (d.productsCnty)  setProductsCnty(d.productsCnty)
    if (d.citationsCnty) setCitationsCnty(d.citationsCnty)
    setWeeklyLabels(d.weeklyLabels || null)
    setWeeklyAll(d.weeklyAll || {})
    setActiveSnap(snap.ts)
    showSnapMsg(`"${snap.name}" 불러옴`)
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
          generateHTML={generateEmailHTML}
          categoryStats={categoryStats}
          extra={{ unlaunchedMap }}
        />
      )}
      <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
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
            {[
              { key: 'preview-ko', tab: 'preview', lang: 'ko', label: '뉴스레터미리보기 (KO)' },
              { key: 'preview-en', tab: 'preview', lang: 'en', label: '뉴스레터미리보기 (EN)' },
              { key: 'code',       tab: 'code',    lang: null, label: 'HTML 내보내기' },
            ].map(({ key, tab, lang, label }) => {
              const isActive = tab === 'code' ? activeTab === 'code' : (activeTab === 'preview' && previewLang === lang)
              return (
                <button key={key} onClick={() => { setActiveTab(tab); if (lang) setPreviewLang(lang) }} style={{
                  padding: '5px 12px', borderRadius: 7, border: 'none',
                  background: isActive ? '#1E293B' : 'transparent',
                  color: isActive ? '#FFFFFF' : '#475569',
                  fontSize: 11, fontWeight: isActive ? 700 : 500,
                  fontFamily: FONT, cursor: 'pointer',
                }}>
                  {label}
                </button>
              )
            })}
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
        {activeTab === 'preview' ? (
          <div style={{ flex: 1, minWidth: 0, overflowY: 'auto', overflowX: 'hidden', padding: '28px 36px',
            background: 'linear-gradient(180deg, #0A0F1C 0%, #0F172A 100%)' }}>
            <div style={{ maxWidth: 960, width: '100%', margin: '0 auto', minWidth: 0 }}>
              <NewsletterPreview meta={meta} total={total} products={resolved.products} citations={resolved.citations} dotcom={dotcom} productsCnty={resolved.productsCnty} citationsCnty={resolved.citationsCnty} lang={previewLang} weeklyLabels={weeklyLabels} categoryStats={categoryStats} unlaunchedMap={unlaunchedMap} />
            </div>
          </div>
        ) : (
          <HtmlCodeViewer meta={meta} total={total} products={resolved.products} citations={resolved.citations} dotcom={dotcom} productsCnty={resolved.productsCnty} citationsCnty={resolved.citationsCnty} lang={previewLang} weeklyLabels={weeklyLabels} categoryStats={categoryStats} unlaunchedMap={unlaunchedMap} />
        )}
        <div style={{ height: 28, borderTop: '1px solid #1E293B', background: 'rgba(15,23,42,0.95)',
          display: 'flex', alignItems: 'center', justifyContent: 'flex-end', padding: '0 16px', flexShrink: 0 }}>
          <span style={{ fontSize: 10, color: '#475569', fontFamily: FONT }}>v{__APP_VERSION__}</span>
        </div>
      </div>
    </div>
  )
}
