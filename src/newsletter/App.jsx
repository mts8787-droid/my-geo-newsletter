import React, { useState, useRef, useCallback, useEffect, useMemo } from 'react'
import { Save, FolderOpen, Trash2, Copy, Check, PanelLeftClose, PanelLeftOpen, MessageSquare, Send, X, Sparkles } from 'lucide-react'
import { generateEmailHTML, generateSemiAnnualEmailHTML } from '../emailTemplate'

// 템플릿 선택 — meta.letterTemplate 기준 생성기 디스패치 (드롭인 시그니처)
function genHTMLFor(meta) {
  return (meta?.letterTemplate === 'semiannual') ? generateSemiAnnualEmailHTML : generateEmailHTML
}
import { INIT_META, INIT_TOTAL, INIT_PRODUCTS, INIT_DOTCOM, INIT_PRODUCTS_CNTY, INIT_CITATIONS_CNTY, INIT_CITATIONS, FONT, LG_RED } from '../shared/constants.js'
import { loadCache, saveCache } from '../shared/cache.js'
import { fetchSnapshots, postSnapshot, updateSnapshot, deleteSnapshot, fetchSyncData, generateAIInsight, fetchBackups } from '../shared/api.js'
import { resolveDataForLang } from '../shared/utils.js'
import { computeCategoryStats, extractMonthFromPeriod } from '../shared/trackerCategoryStats.js'
import { parseKPISheet } from '../tracker-v2/utils/sheetParser.js'
// N2 — XLSX는 사용 시점에만 동적 로드 (~870KB)
import { loadXlsx } from '../shared/loadXlsx.js'
import Sidebar from '../shared/Sidebar.jsx'
import LlmModelSelect from '../shared/LlmModelSelect.jsx'

const TRACKER_SHEET_ID = '1lAzhlYJIjHVqDeywD3YMR1E9qf2LlDohFc0r6SAnVaE'
const TRACKER_SHEET_NAME = '파싱시트'

const MODE = 'newsletter'
const STORAGE_KEY = 'geo-newsletter-cache'

// ─── 뉴스레터 미리보기 (iframe) ──────────────────────────────────────────────
function NewsletterPreview({ meta, total, products, citations, dotcom, productsCnty = [], citationsCnty = [], lang = 'ko', weeklyLabels, weeklyAll = {}, categoryStats, unlaunchedMap = {}, llmModel, monthlyVis, citTouchPointsTrend = null, citTrendMonths = [], citDomainTrend = null, citDomainMonths = [], citTouchPointsByLlm = null, citDomainByLlm = null, citDomainByLlmTrend = null, dotcomByLlm = null, editMode = false, iframeRef: externalRef = null }) {
  const localRef = useRef(null)
  const iframeRef = externalRef || localRef
  const html = useMemo(
    () => genHTMLFor(meta)(meta, total, products, citations, dotcom, lang, productsCnty, citationsCnty, { weeklyLabels, weeklyAll, categoryStats, unlaunchedMap, productCardVersion: meta.productCardVersion || 'v1', trendMode: meta.trendMode || 'weekly', assetBase: (typeof window !== "undefined" ? window.location.origin : ""), llmModel, monthlyVis, citTouchPointsTrend, citTrendMonths, citDomainTrend, citDomainMonths, citTouchPointsByLlm, citDomainByLlm, citDomainByLlmTrend, dotcomByLlm, editable: editMode }),
    [meta, total, products, citations, dotcom, lang, productsCnty, citationsCnty, weeklyLabels, weeklyAll, categoryStats, unlaunchedMap, llmModel, monthlyVis, citTouchPointsTrend, citTrendMonths, citDomainTrend, citDomainMonths, citTouchPointsByLlm, citDomainByLlm, citDomainByLlmTrend, dotcomByLlm, editMode]
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
function HtmlCodeViewer({ meta, total, products, citations, dotcom, productsCnty = [], citationsCnty = [], lang = 'ko', weeklyLabels, weeklyAll = {}, categoryStats, unlaunchedMap = {}, citTouchPointsTrend = null, citTrendMonths = [], citDomainTrend = null, citDomainMonths = [], citTouchPointsByLlm = null, citDomainByLlm = null, citDomainByLlmTrend = null, dotcomByLlm = null }) {
  const [copied, setCopied] = useState(false)
  const html = useMemo(() => genHTMLFor(meta)(meta, total, products, citations, dotcom, lang, productsCnty, citationsCnty, { weeklyLabels, weeklyAll, categoryStats, unlaunchedMap, productCardVersion: meta.productCardVersion || 'v1', trendMode: meta.trendMode || 'weekly', assetBase: (typeof window !== "undefined" ? window.location.origin : ""), citTouchPointsTrend, citTrendMonths, citDomainTrend, citDomainMonths, citTouchPointsByLlm, citDomainByLlm, citDomainByLlmTrend, dotcomByLlm }), [meta, total, products, citations, dotcom, lang, productsCnty, citationsCnty, weeklyLabels, weeklyAll, categoryStats, unlaunchedMap, citTouchPointsTrend, citTrendMonths, citDomainTrend, citDomainMonths, citTouchPointsByLlm, citDomainByLlm, citDomainByLlmTrend, dotcomByLlm])

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

// ─── AI 인사이트 채팅 패널 (우측) ────────────────────────────────────────────
// 인사이트 항목 선택 + 추가 프롬프트 입력 → generateAIInsight(…, extraPrompt) 호출
const CHAT_INSIGHT_ITEMS = [
  { label: 'GEO 전략 인사이트', field: 'totalInsight', type: 'totalInsight', build: c => ({ products: c.products, productsCnty: c.productsCnty, total: c.total, todoText: c.meta.todoText || '', unlaunchedMap: c.unlaunchedMap }) },
  { label: 'Highlight 인사이트', field: 'highlightInsight', type: 'highlight', showKey: 'showHighlightInsight', build: c => ({ products: c.products, weeklyAll: c.weeklyAll }) },
  { label: '제품 인사이트', field: 'productInsight', type: 'product', showKey: 'showProductInsight', build: c => ({ products: c.products, total: c.total }) },
  { label: '제품 How to Read', field: 'productHowToRead', type: 'howToRead', showKey: 'showProductHowToRead', build: () => ({ section: '제품별 GEO Visibility' }) },
  { label: '모델 증감 인사이트', field: 'modelDeltaInsight', type: 'modelDelta', showKey: 'showModelDeltaInsight', build: c => ({ products: c.products }) },
  { label: '국가별 인사이트', field: 'cntyInsight', type: 'cnty', showKey: 'showCntyInsight', build: c => ({ productsCnty: c.productsCnty, unlaunchedMap: c.unlaunchedMap }) },
  { label: '국가별 How to Read', field: 'cntyHowToRead', type: 'howToRead', showKey: 'showCntyHowToRead', build: () => ({ section: '국가별 GEO Visibility' }) },
  { label: 'Citation 인사이트', field: 'citationInsight', type: 'citation', showKey: 'showCitationInsight', build: c => ({ citations: c.citations }) },
  { label: '제품별 Citation 인사이트', field: 'citPrdInsight', type: 'citPrd', showKey: 'showCitPrdInsight', build: c => ({ citationsCnty: c.citationsCnty }) },
  { label: '닷컴 인사이트', field: 'dotcomInsight', type: 'dotcom', showKey: 'showDotcomInsight', build: c => ({ dotcom: c.dotcom }) },
  { label: 'Action Plan 인사이트', field: 'todoText', type: 'todo', showKey: 'showTodo', build: c => ({ products: c.products }) },
]

function InsightChatPanel({ ctx, setMeta, previewLang, onClose }) {
  const [field, setField] = useState(CHAT_INSIGHT_ITEMS[0].field)
  const [prompt, setPrompt] = useState('')
  const [msgs, setMsgs] = useState([])
  const [busy, setBusy] = useState(false)
  const scrollRef = useRef(null)
  const item = CHAT_INSIGHT_ITEMS.find(i => i.field === field) || CHAT_INSIGHT_ITEMS[0]

  useEffect(() => { if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight }, [msgs, busy])

  async function generate() {
    if (busy) return
    const p = prompt.trim()
    setBusy(true)
    setMsgs(m => [...m, { role: 'user', label: item.label, prompt: p }])
    try {
      const insight = await generateAIInsight(item.type, item.build(ctx), previewLang, '', p)
      setMeta(m => ({ ...m, [item.field]: insight, ...(item.showKey ? { [item.showKey]: true } : {}) }))
      setMsgs(m => [...m, { role: 'ai', label: item.label, text: insight }])
      setPrompt('')
    } catch (e) {
      setMsgs(m => [...m, { role: 'ai', label: item.label, text: `[생성 실패: ${e.message}]`, error: true }])
    } finally { setBusy(false) }
  }

  const inputStyle = { width: '100%', background: '#0F172A', border: '1px solid #334155', borderRadius: 8, padding: '8px 10px', fontSize: 12, color: '#E2E8F0', fontFamily: FONT, outline: 'none', boxSizing: 'border-box' }

  return (
    <div style={{ width: 340, flexShrink: 0, borderLeft: '1px solid #1E293B', background: '#0B1220', display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <div style={{ height: 48, borderBottom: '1px solid #1E293B', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 14px', flexShrink: 0 }}>
        <span style={{ fontSize: 12, fontWeight: 700, color: '#E2E8F0', fontFamily: FONT, display: 'flex', alignItems: 'center', gap: 6 }}><MessageSquare size={14} /> AI 인사이트 채팅</span>
        <button onClick={onClose} title="닫기" style={{ background: 'transparent', border: 'none', color: '#64748B', cursor: 'pointer', display: 'flex' }}><X size={16} /></button>
      </div>

      <div ref={scrollRef} style={{ flex: 1, overflowY: 'auto', padding: '14px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {msgs.length === 0 && (
          <p style={{ margin: 0, fontSize: 12, color: '#475569', fontFamily: FONT, lineHeight: 1.7 }}>
            인사이트 항목을 고르고, 필요하면 추가 지시(프롬프트)를 입력한 뒤 생성하세요.<br />
            결과는 해당 항목에 반영되고 미리보기에 표시됩니다.
          </p>
        )}
        {msgs.map((m, i) => m.role === 'user' ? (
          <div key={i} style={{ alignSelf: 'flex-end', maxWidth: '90%', background: '#1D4ED8', color: '#fff', borderRadius: '10px 10px 2px 10px', padding: '8px 11px' }}>
            <p style={{ margin: '0 0 3px', fontSize: 10, fontWeight: 700, color: '#BFDBFE', fontFamily: FONT }}>{m.label}</p>
            <p style={{ margin: 0, fontSize: 12, color: '#fff', fontFamily: FONT, lineHeight: 1.5, whiteSpace: 'pre-wrap' }}>{m.prompt || '(추가 프롬프트 없음)'}</p>
          </div>
        ) : (
          <div key={i} style={{ alignSelf: 'flex-start', maxWidth: '92%', background: m.error ? '#3B1418' : '#1E293B', border: `1px solid ${m.error ? '#7F1D1D' : '#334155'}`, borderRadius: '10px 10px 10px 2px', padding: '8px 11px' }}>
            <p style={{ margin: '0 0 3px', fontSize: 10, fontWeight: 700, color: m.error ? '#FCA5A5' : '#86EFAC', fontFamily: FONT, display: 'flex', alignItems: 'center', gap: 3 }}><Sparkles size={9} /> {m.label}</p>
            <p style={{ margin: 0, fontSize: 12, color: m.error ? '#FCA5A5' : '#CBD5E1', fontFamily: FONT, lineHeight: 1.6, whiteSpace: 'pre-wrap', maxHeight: 220, overflowY: 'auto' }}>{m.text}</p>
          </div>
        ))}
        {busy && <div style={{ alignSelf: 'flex-start', fontSize: 12, color: '#64748B', fontFamily: FONT, display: 'flex', alignItems: 'center', gap: 6 }}><Sparkles size={11} /> 생성 중…</div>}
      </div>

      <div style={{ borderTop: '1px solid #1E293B', padding: '12px 14px', flexShrink: 0, background: '#0F172A' }}>
        <label style={{ fontSize: 10, fontWeight: 700, color: '#64748B', fontFamily: FONT, display: 'block', marginBottom: 4 }}>인사이트 항목</label>
        <select value={field} onChange={e => setField(e.target.value)} style={{ ...inputStyle, marginBottom: 8, cursor: 'pointer' }}>
          {CHAT_INSIGHT_ITEMS.map(i => <option key={i.field} value={i.field}>{i.label}</option>)}
        </select>
        <textarea value={prompt} onChange={e => setPrompt(e.target.value)}
          onKeyDown={e => { if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) { e.preventDefault(); generate() } }}
          rows={3} placeholder="추가 지시(선택) — 예: '경쟁 열위 제품 위주로, 3문장 이내'  (⌘/Ctrl+Enter 로 생성)"
          style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.5, marginBottom: 8 }} />
        <button onClick={generate} disabled={busy}
          style={{ width: '100%', padding: '9px 0', borderRadius: 8, border: 'none', cursor: busy ? 'wait' : 'pointer', background: busy ? '#1E293B' : '#4F46E5', color: busy ? '#64748B' : '#fff', fontSize: 12, fontWeight: 700, fontFamily: FONT, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
          <Send size={12} /> {busy ? '생성 중…' : `${item.label} 생성`}
        </button>
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
  const [citTouchPointsTrend, setCitTouchPointsTrend] = useState(cache?.citTouchPointsTrend ?? null)
  const [citTrendMonths, setCitTrendMonths] = useState(cache?.citTrendMonths ?? [])
  const [citDomainTrend, setCitDomainTrend] = useState(cache?.citDomainTrend ?? null)
  const [citDomainMonths, setCitDomainMonths] = useState(cache?.citDomainMonths ?? [])
  const [citTouchPointsByLlm, setCitTouchPointsByLlm] = useState(cache?.citTouchPointsByLlm ?? null)
  const [citDomainByLlm, setCitDomainByLlm] = useState(cache?.citDomainByLlm ?? null)
  const [citDomainByLlmTrend, setCitDomainByLlmTrend] = useState(cache?.citDomainByLlmTrend ?? null)
  const [dotcomByLlm, setDotcomByLlm] = useState(cache?.dotcomByLlm ?? null)
  const [unlaunchedMap, setUnlaunchedMap] = useState(cache?.unlaunchedMap ?? {})
  const [activeTab, setActiveTab] = useState('preview')
  const [previewLang, setPreviewLang] = useState('ko')
  const [llmModel, setLlmModel] = useState('Total')
  const [monthlyVis, setMonthlyVis] = useState(cache?.monthlyVis ?? [])
  const [categoryStats, setCategoryStats] = useState(null)
  // 핵심 과제 진척 — 사용자가 사이드바에서 선택. null = 자동(데이터의 월과 동일)
  const [progressMonth, setProgressMonth] = useState(null)
  const [snapshots,  setSnapshots]  = useState([])
  const [snapName,   setSnapName]   = useState('')
  const [snapOpen,   setSnapOpen]   = useState(false)
  const [snapMsg,    setSnapMsg]    = useState('')
  const [activeSnap, setActiveSnap] = useState(null)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [editMode, setEditMode] = useState(false)
  const [chatOpen, setChatOpen] = useState(true)
  const [backups, setBackups] = useState([])
  const [backupOpen, setBackupOpen] = useState(false)
  const previewIframeRef = useRef(null)
  // 상단바 서식 도구 → 미리보기 iframe 의 편집 선택 영역에 execCommand 전달
  const sendFormat = useCallback((cmd, value) => {
    const w = previewIframeRef.current && previewIframeRef.current.contentWindow
    if (w) w.postMessage({ type: 'format', cmd, value }, '*')
  }, [])

  const meta    = previewLang === 'en' ? metaEn : metaKo
  const setMeta = previewLang === 'en' ? setMetaEn : setMetaKo

  // 미리보기 iframe 인라인 편집 수신 — emailTemplate editable 모드의 postMessage({type:'editMeta'})
  // previewLang 파생 setMeta 사용 → KO/EN 각각 올바른 meta 에 저장
  useEffect(() => {
    function onEditMessage(e) {
      if (!e.data || e.data.type !== 'editMeta' || typeof e.data.field !== 'string') return
      const { field, value } = e.data
      setMeta(m => ({ ...m, [field]: value }))
    }
    window.addEventListener('message', onEditMessage)
    return () => window.removeEventListener('message', onEditMessage)
  }, [setMeta])

  const resolved = useMemo(
    () => resolveDataForLang(products, productsCnty, citations, citationsCnty, previewLang),
    [products, productsCnty, citations, citationsCnty, previewLang]
  )

  useEffect(() => { fetchSnapshots(MODE).then(setSnapshots); fetchBackups(MODE).then(setBackups) }, [])

  // tracker 데이터: Google Sheets에서 직접 가져와서 categoryStats 계산
  useEffect(() => {
    let cancelled = false
    // 기본: 데이터의 월과 동일 (사용자가 progressMonth 로 override 가능)
    const dataMonth = extractMonthFromPeriod(metaKo.period) || `${new Date().getMonth() + 1}월`
    const targetMonth = progressMonth || dataMonth
    console.log('[CategoryCards] targetMonth:', targetMonth, '(dataMonth:', dataMonth, 'override:', progressMonth, ')')

    // 알려진 카테고리 (영어 매핑이 emailTemplate.js CATEGORY_EN 에 존재) — 그 외엔 AI 번역 필요
    const KNOWN_EN_CATEGORIES = new Set(['콘텐츠수정', '콘텐츠 수정', '신규콘텐츠제작', '신규 콘텐츠 제작', '외부채널관리', '외부 채널 관리', '닷컴기술개선', '닷컴 기술 개선'])

    // 미지의 카테고리 이름은 AI 번역 → categoryEn 필드로 enrich
    async function enrichWithEnTranslation(stats) {
      if (cancelled || !stats?.length) return stats
      const unknown = [...new Set(stats.map(s => s.category).filter(c => c && !KNOWN_EN_CATEGORIES.has(String(c).replace(/\s+/g, ''))))].filter(Boolean)
      if (unknown.length === 0) return stats
      try {
        const r = await fetch('/api/translate', {
          method: 'POST', headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ texts: unknown, from: 'ko', to: 'en' }),
        })
        const j = await r.json()
        if (!j?.ok || !Array.isArray(j.translated)) return stats
        const map = {}
        unknown.forEach((k, i) => { map[k] = j.translated[i] })
        return stats.map(s => map[s.category] ? { ...s, categoryEn: map[s.category] } : s)
      } catch (e) {
        console.warn('[CategoryCards] auto-translate failed:', e.message)
        return stats
      }
    }

    async function setStatsWithTranslation(stats) {
      if (!stats?.length || cancelled) return
      setCategoryStats(stats)
      const enriched = await enrichWithEnTranslation(stats)
      if (enriched !== stats && !cancelled) setCategoryStats(enriched)
    }

    // 1차: tracker-snapshot API 시도 (기존 게시 데이터)
    // 2차: 실패 시 Google Sheets에서 직접 fetch
    async function loadTrackerData() {
      // API 시도
      try {
        const r = await fetch('/api/tracker-snapshot-v2')
        const j = r.ok ? await r.json() : null
        if (j?.ok && j.data?.quantitativeGoals?.rows?.length) {
          console.log('[CategoryCards] tracker-snapshot OK, rows:', j.data.quantitativeGoals.rows.length)
          const stats = computeCategoryStats(j.data, targetMonth)
          if (stats?.length && !cancelled) { await setStatsWithTranslation(stats); return }
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
        if (stats?.length && !cancelled) await setStatsWithTranslation(stats)
      } catch (e) { console.warn('[CategoryCards] Google Sheets fetch failed:', e.message) }
    }
    loadTrackerData()
    return () => { cancelled = true }
  }, [metaKo.period, progressMonth])

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
      if (d.monthlyVis)    setMonthlyVis(d.monthlyVis)
      if (d.citTouchPointsTrend) setCitTouchPointsTrend(d.citTouchPointsTrend)
      if (d.citTrendMonths)      setCitTrendMonths(d.citTrendMonths)
      if (d.citDomainTrend)      setCitDomainTrend(d.citDomainTrend)
      if (d.citDomainMonths)     setCitDomainMonths(d.citDomainMonths)
      if (d.citTouchPointsByLlm) setCitTouchPointsByLlm(d.citTouchPointsByLlm)
      if (d.citDomainByLlm)      setCitDomainByLlm(d.citDomainByLlm)
      if (d.citDomainByLlmTrend) setCitDomainByLlmTrend(d.citDomainByLlmTrend)
      if (d.dotcomByLlm)         setDotcomByLlm(d.dotcomByLlm)
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
    saveCache(STORAGE_KEY, { metaKo, metaEn, total, products, citations, dotcom, productsCnty, citationsCnty, weeklyLabels, weeklyAll, unlaunchedMap, citTouchPointsTrend, citTrendMonths, citDomainTrend, citDomainMonths, citTouchPointsByLlm, citDomainByLlm, citDomainByLlmTrend, dotcomByLlm })
  }, [metaKo, metaEn, total, products, citations, dotcom, productsCnty, citationsCnty, weeklyLabels, weeklyAll, unlaunchedMap, citTouchPointsTrend, citTrendMonths, citDomainTrend, citDomainMonths, citTouchPointsByLlm, citDomainByLlm, citDomainByLlmTrend, dotcomByLlm])

  async function handleSnapOverwrite() {
    if (!activeSnap) return
    const data = { metaKo, metaEn, total, products, citations, dotcom, productsCnty, citationsCnty, weeklyLabels, weeklyAll, citTouchPointsTrend, citTrendMonths, citDomainTrend, citDomainMonths, citTouchPointsByLlm, citDomainByLlm, citDomainByLlmTrend, dotcomByLlm }
    const result = await updateSnapshot(MODE, activeSnap, data)
    if (result) setSnapshots(result)
    showSnapMsg(result ? '저장 완료!' : '저장 실패')
  }
  async function handleSnapSaveNew() {
    const name = snapName.trim() || `${meta.period || 'Untitled'} — ${new Date().toLocaleString('ko-KR')}`
    const result = await postSnapshot(MODE, name, { metaKo, metaEn, total, products, citations, dotcom, productsCnty, citationsCnty, weeklyLabels, weeklyAll, citTouchPointsTrend, citTrendMonths, citDomainTrend, citDomainMonths, citTouchPointsByLlm, citDomainByLlm, citDomainByLlmTrend, dotcomByLlm })
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
    if (d.citTouchPointsTrend) setCitTouchPointsTrend(d.citTouchPointsTrend)
    if (d.citTrendMonths)      setCitTrendMonths(d.citTrendMonths)
    if (d.citDomainTrend)      setCitDomainTrend(d.citDomainTrend)
    if (d.citDomainMonths)     setCitDomainMonths(d.citDomainMonths)
    if (d.citTouchPointsByLlm) setCitTouchPointsByLlm(d.citTouchPointsByLlm)
    if (d.citDomainByLlm)      setCitDomainByLlm(d.citDomainByLlm)
    if (d.citDomainByLlmTrend) setCitDomainByLlmTrend(d.citDomainByLlmTrend)
    if (d.dotcomByLlm)         setDotcomByLlm(d.dotcomByLlm)
    setActiveSnap(snap.ts)
    showSnapMsg(`"${snap.name}" 불러옴`)
  }
  async function handleSnapDelete(idx) {
    const snap = snapshots[idx]
    if (!snap) return
    const result = await deleteSnapshot(MODE, snap.ts)
    if (result) setSnapshots(result)
    if (activeSnap === snap.ts) setActiveSnap(null)
    fetchBackups(MODE).then(setBackups)  // 삭제분이 백업에 추가됨 — 목록 갱신
  }

  return (
    <div style={{ display: 'flex', height: '100vh', background: '#0A0F1C', fontFamily: FONT }}>
      {sidebarOpen && (
        <Sidebar
          mode={MODE}
          editMode={editMode} setEditMode={setEditMode}
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
          generateHTML={(mm, ...rest) => genHTMLFor(meta)(mm, ...rest)}
          categoryStats={categoryStats}
          progressMonth={progressMonth}
          setProgressMonth={setProgressMonth}
          progressDataMonth={extractMonthFromPeriod(metaKo.period) || `${new Date().getMonth() + 1}월`}
          extra={{ unlaunchedMap, citTouchPointsTrend, citTrendMonths, citDomainTrend, citDomainMonths, citTouchPointsByLlm, citDomainByLlm, citDomainByLlmTrend, dotcomByLlm }}
          onSyncExtra={({ unlaunchedMap: ulm, citTouchPointsTrend: cptt, citTrendMonths: ctm, citDomainTrend: cdt, citDomainMonths: cdm, citTouchPointsByLlm: cptl, citDomainByLlm: cdl, citDomainByLlmTrend: cdlt, dotcomByLlm: dbl }) => {
            if (ulm) setUnlaunchedMap(ulm)
            if (cptt) setCitTouchPointsTrend(cptt)
            if (ctm) setCitTrendMonths(ctm)
            if (cdt) setCitDomainTrend(cdt)
            if (cdm) setCitDomainMonths(cdm)
            if (cptl) setCitTouchPointsByLlm(cptl)
            if (cdl) setCitDomainByLlm(cdl)
            if (cdlt) setCitDomainByLlmTrend(cdlt)
            if (dbl) setDotcomByLlm(dbl)
          }}
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
            {/* 템플릿 선택 탭 (월간 / 반기) */}
            <div style={{ display: 'flex', gap: 2, background: '#0F172A', border: '1px solid #1E293B', borderRadius: 8, padding: 2, marginRight: 6 }}>
              {[
                { key: 'monthly', label: '월간 레터' },
                { key: 'semiannual', label: '반기 레터' },
              ].map(({ key, label }) => {
                const cur = meta.letterTemplate || 'monthly'
                const on = cur === key
                return (
                  <button key={key} onClick={() => setMeta(m => ({ ...m, letterTemplate: key }))} style={{
                    padding: '5px 12px', borderRadius: 6, border: 'none', cursor: 'pointer',
                    background: on ? LG_RED : 'transparent', color: on ? '#FFFFFF' : '#64748B',
                    fontSize: 11, fontWeight: on ? 700 : 500, fontFamily: FONT,
                  }}>{label}</button>
                )
              })}
            </div>
            <div style={{ width: 1, height: 20, background: '#1E293B', margin: '0 4px' }} />
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
            <button onClick={() => setChatOpen(v => !v)} title="AI 인사이트 채팅"
              style={{ padding: '4px 10px', borderRadius: 6, border: 'none', cursor: 'pointer',
                background: chatOpen ? '#4F46E5' : '#1E293B', color: chatOpen ? '#FFFFFF' : '#94A3B8',
                fontSize: 11, fontWeight: 700, fontFamily: FONT, display: 'flex', alignItems: 'center', gap: 4 }}>
              <MessageSquare size={12} /> AI 채팅
            </button>
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
            {/* 백업 불러오기 (삭제된 저장본 최근 5개) */}
            <div style={{ position: 'relative' }}>
              <button onClick={() => setBackupOpen(!backupOpen)} title="삭제된 저장본 백업 (최근 5개) 불러오기"
                style={{ padding: '4px 10px', borderRadius: 6, border: 'none', cursor: 'pointer',
                  background: backupOpen ? '#334155' : '#1E293B', color: '#E2E8F0', fontSize: 11, fontWeight: 700, fontFamily: FONT,
                  display: 'flex', alignItems: 'center', gap: 4 }}>
                <FolderOpen size={11} /> 백업 불러오기 {backups.length > 0 && <span style={{ fontSize: 11, color: '#94A3B8' }}>({backups.length})</span>}
              </button>
              {backupOpen && (
                <div style={{ position: 'absolute', top: 32, right: 0, width: 320, maxHeight: 360, overflowY: 'auto',
                  background: '#1E293B', border: '1px solid #334155', borderRadius: 10, zIndex: 100, padding: 8,
                  boxShadow: '0 8px 24px rgba(0,0,0,0.4)' }}
                  onClick={e => e.stopPropagation()}>
                  <p style={{ margin: '2px 6px 8px', fontSize: 10, color: '#64748B', fontFamily: FONT }}>삭제해도 최근 5개는 자동 백업됩니다</p>
                  {backups.length === 0 ? (
                    <p style={{ margin: 0, padding: 12, fontSize: 11, color: '#64748B', fontFamily: FONT, textAlign: 'center' }}>백업이 없습니다</p>
                  ) : backups.map((snap) => (
                    <div key={snap.ts} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 10px',
                      borderRadius: 7, marginBottom: 2, background: '#0F172A', border: '1px solid transparent' }}>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <p style={{ margin: 0, fontSize: 11, fontWeight: 700, color: '#E2E8F0', fontFamily: FONT,
                          overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{snap.name}</p>
                        <p style={{ margin: 0, fontSize: 11, color: '#64748B', fontFamily: FONT }}>
                          삭제 {snap.deletedAt ? new Date(snap.deletedAt).toLocaleString('ko-KR') : new Date(snap.ts).toLocaleString('ko-KR')}
                        </p>
                      </div>
                      <button onClick={() => { handleSnapLoad(snap); setBackupOpen(false) }}
                        style={{ padding: '3px 8px', borderRadius: 5, border: 'none', cursor: 'pointer',
                          background: '#166534', color: '#FFFFFF', fontSize: 11, fontWeight: 700, fontFamily: FONT }}>
                        복원
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 서식 도구 바 (편집 모드 + 미리보기일 때만) — mousedown preventDefault 로 iframe 선택 유지 */}
        {editMode && activeTab === 'preview' && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap',
            padding: '6px 22px', background: '#0B1220', borderBottom: '1px solid #1E293B', flexShrink: 0 }}>
            <span style={{ fontSize: 11, color: '#64748B', fontFamily: FONT, fontWeight: 700 }}>서식</span>
            <button title="굵게" onMouseDown={e => { e.preventDefault(); sendFormat('bold') }}
              style={{ width: 26, height: 24, borderRadius: 5, border: '1px solid #334155', cursor: 'pointer',
                background: '#1E293B', color: '#E2E8F0', fontSize: 13, fontWeight: 800, fontFamily: 'Georgia,serif' }}>B</button>
            <button title="밑줄" onMouseDown={e => { e.preventDefault(); sendFormat('underline') }}
              style={{ width: 26, height: 24, borderRadius: 5, border: '1px solid #334155', cursor: 'pointer',
                background: '#1E293B', color: '#E2E8F0', fontSize: 13, fontWeight: 700, textDecoration: 'underline', fontFamily: 'Georgia,serif' }}>U</button>
            <button title="기울임" onMouseDown={e => { e.preventDefault(); sendFormat('italic') }}
              style={{ width: 26, height: 24, borderRadius: 5, border: '1px solid #334155', cursor: 'pointer',
                background: '#1E293B', color: '#E2E8F0', fontSize: 13, fontWeight: 700, fontStyle: 'italic', fontFamily: 'Georgia,serif' }}>I</button>
            <span style={{ width: 1, height: 18, background: '#1E293B', margin: '0 2px' }} />
            <span style={{ fontSize: 11, color: '#64748B', fontFamily: FONT }}>크기</span>
            {[['작게', '2'], ['보통', '3'], ['크게', '5'], ['특대', '6']].map(([label, val]) => (
              <button key={val} title={`글자 ${label}`} onMouseDown={e => { e.preventDefault(); sendFormat('fontSize', val) }}
                style={{ height: 24, padding: '0 8px', borderRadius: 5, border: '1px solid #334155', cursor: 'pointer',
                  background: '#1E293B', color: '#94A3B8', fontSize: 11, fontWeight: 700, fontFamily: FONT }}>{label}</button>
            ))}
            <span style={{ width: 1, height: 18, background: '#1E293B', margin: '0 2px' }} />
            <span style={{ fontSize: 11, color: '#64748B', fontFamily: FONT }}>색</span>
            {['#1A1A1A', '#CF0652', '#1D4ED8', '#15803D', '#B45309', '#64748B'].map(c => (
              <button key={c} title={`글자색 ${c}`} onMouseDown={e => { e.preventDefault(); sendFormat('foreColor', c) }}
                style={{ width: 20, height: 20, borderRadius: '50%', border: '2px solid #334155', cursor: 'pointer', background: c, padding: 0 }} />
            ))}
            <span style={{ width: 1, height: 18, background: '#1E293B', margin: '0 2px' }} />
            <button title="서식 지우기" onMouseDown={e => { e.preventDefault(); sendFormat('removeFormat') }}
              style={{ height: 24, padding: '0 10px', borderRadius: 5, border: '1px solid #334155', cursor: 'pointer',
                background: '#1E293B', color: '#94A3B8', fontSize: 11, fontWeight: 700, fontFamily: FONT }}>서식 지우기</button>
            <span style={{ fontSize: 10, color: '#475569', fontFamily: FONT, marginLeft: 'auto' }}>미리보기에서 텍스트 선택 후 적용</span>
          </div>
        )}

        {/* 컨텐츠 영역 */}
        {activeTab === 'preview' ? (
          <div style={{ flex: 1, minWidth: 0, overflowY: 'auto', overflowX: 'hidden', padding: '28px 36px',
            background: 'linear-gradient(180deg, #0A0F1C 0%, #0F172A 100%)' }}>
            <div style={{ maxWidth: 960, width: '100%', margin: '0 auto', minWidth: 0 }}>
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 12, padding: '6px 12px', background: '#F8FAFC', borderRadius: 6 }}>
                <LlmModelSelect value={llmModel} onChange={setLlmModel} products={resolved.products} productsCnty={resolved.productsCnty} monthlyVis={monthlyVis} />
              </div>
              <NewsletterPreview meta={meta} total={total} products={resolved.products} citations={resolved.citations} dotcom={dotcom} productsCnty={resolved.productsCnty} citationsCnty={resolved.citationsCnty} lang={previewLang} weeklyLabels={weeklyLabels} weeklyAll={weeklyAll} categoryStats={categoryStats} unlaunchedMap={unlaunchedMap} llmModel={llmModel} monthlyVis={monthlyVis} citTouchPointsTrend={citTouchPointsTrend} citTrendMonths={citTrendMonths} citDomainTrend={citDomainTrend} citDomainMonths={citDomainMonths} citTouchPointsByLlm={citTouchPointsByLlm} citDomainByLlm={citDomainByLlm} citDomainByLlmTrend={citDomainByLlmTrend} dotcomByLlm={dotcomByLlm} editMode={editMode} iframeRef={previewIframeRef} />
            </div>
          </div>
        ) : (
          <HtmlCodeViewer meta={meta} total={total} products={resolved.products} citations={resolved.citations} dotcom={dotcom} productsCnty={resolved.productsCnty} citationsCnty={resolved.citationsCnty} lang={previewLang} weeklyLabels={weeklyLabels} weeklyAll={weeklyAll} categoryStats={categoryStats} unlaunchedMap={unlaunchedMap} citTouchPointsTrend={citTouchPointsTrend} citTrendMonths={citTrendMonths} citDomainTrend={citDomainTrend} citDomainMonths={citDomainMonths} citTouchPointsByLlm={citTouchPointsByLlm} citDomainByLlm={citDomainByLlm} citDomainByLlmTrend={citDomainByLlmTrend} dotcomByLlm={dotcomByLlm} />
        )}
        <div style={{ height: 28, borderTop: '1px solid #1E293B', background: 'rgba(15,23,42,0.95)',
          display: 'flex', alignItems: 'center', justifyContent: 'flex-end', padding: '0 16px', flexShrink: 0 }}>
          <span style={{ fontSize: 10, color: '#475569', fontFamily: FONT }}>v{__APP_VERSION__}</span>
        </div>
      </div>
      {chatOpen && (
        <InsightChatPanel
          ctx={{ products: resolved.products, productsCnty: resolved.productsCnty, total, citations: resolved.citations, citationsCnty: resolved.citationsCnty, dotcom, weeklyAll, monthlyVis, unlaunchedMap, meta }}
          setMeta={setMeta}
          previewLang={previewLang}
          onClose={() => setChatOpen(false)}
        />
      )}
    </div>
  )
}
