import React, { useState, useEffect } from 'react'
import { Copy, Download, RefreshCw, Check, Send, Sparkles, Languages, Globe, Link2 } from 'lucide-react'
import { downloadTemplate } from '../excelUtils'
import { extractSheetId, syncFromGoogleSheets } from '../googleSheetsUtils'
import { LG_RED, FONT } from './constants.js'
import { inputStyle } from './components.jsx'
import { resolveDataForLang } from './utils.js'
import { saveSyncData } from './api.js'
import { generateProductInsight, generateCitationInsight, generateProductHowToRead, generateCitationHowToRead, generateDotcomInsight, generateDotcomHowToRead, generateCntyHowToRead, generateCitDomainInsight, generateCitDomainHowToRead, generateCitCntyInsight, generateCitCntyHowToRead } from './insights.js'

export default
function Sidebar({ mode, meta, setMeta, metaKo, setMetaKo, metaEn, setMetaEn, total, setTotal, products, setProducts, citations, setCitations, dotcom, setDotcom, productsCnty, setProductsCnty, citationsCnty, setCitationsCnty, resolved, previewLang, setPreviewLang, snapshots, setSnapshots, setWeeklyLabels, setWeeklyAll, weeklyLabels, weeklyAll, generateHTML }) {
  const [gsUrl,     setGsUrl]     = useState('https://docs.google.com/spreadsheets/d/1v4V7ZsHNFXXqbAWqvyVkgNIeXx188hSZ9l7FDsRYy2Y/edit')
  const [gsSyncing, setGsSyncing] = useState(false)
  const [gsStatus,  setGsStatus]  = useState(null)
  const [gsMsg,     setGsMsg]     = useState('')
  const [copied,    setCopied]    = useState(false)
  const [toEmail,   setToEmail]   = useState('')
  const [mailSent,  setMailSent]  = useState(false)
  const [showTranslatePopup, setShowTranslatePopup] = useState(false)
  const [translating, setTranslating] = useState(false)
  const [scriptUrl, setScriptUrl] = useState(localStorage.getItem('geo-script-url') || '')
  const [exporting, setExporting] = useState(false)
  const [exportMsg, setExportMsg] = useState('')
  const [publishing, setPublishing] = useState(false)
  const [publishMsg, setPublishMsg] = useState('')

  // 게시 상태 로드
  const [publishInfo, setPublishInfo] = useState(null)
  useEffect(() => {
    const ep = mode === 'dashboard' ? '/api/publish-dashboard' : '/api/publish'
    fetch(ep).then(r => r.ok ? r.json() : null).then(setPublishInfo).catch(() => {})
  }, [])

  async function handlePublish() {
    if (publishing) return
    setPublishing(true); setPublishMsg('')
    try {
      const resolvedKo = resolveDataForLang(products, productsCnty, citations, citationsCnty, 'ko')
      const resolvedEn = resolveDataForLang(products, productsCnty, citations, citationsCnty, 'en')
      let htmlKo, htmlEn, title
      if (mode === 'dashboard') {
        htmlKo = generateHTML(metaKo, total, resolvedKo.products, resolvedKo.citations, dotcom, 'ko', resolvedKo.productsCnty, resolvedKo.citationsCnty, weeklyLabels, weeklyAll)
        htmlEn = generateHTML(metaEn, total, resolvedEn.products, resolvedEn.citations, dotcom, 'en', resolvedEn.productsCnty, resolvedEn.citationsCnty, weeklyLabels, weeklyAll)
        title = `${metaKo.period || ''} ${metaKo.title || 'KPI Dashboard'}`.trim()
      } else {
        htmlKo = generateHTML(metaKo, total, resolvedKo.products, resolvedKo.citations, dotcom, 'ko', resolvedKo.productsCnty, resolvedKo.citationsCnty)
        htmlEn = generateHTML(metaEn, total, resolvedEn.products, resolvedEn.citations, dotcom, 'en', resolvedEn.productsCnty, resolvedEn.citationsCnty)
        title = `${metaKo.period || ''} ${metaKo.title || 'Newsletter'}`.trim()
      }
      const ep = mode === 'dashboard' ? '/api/publish-dashboard' : '/api/publish'
      const res = await fetch(ep, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
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
      setPublishMsg('ERROR:' + err.message)
    } finally {
      setPublishing(false)
      setTimeout(() => setPublishMsg(''), 20000)
    }
  }

  async function handleUnpublish() {
    try {
      const ep = mode === 'dashboard' ? '/api/publish-dashboard' : '/api/publish'
      const res = await fetch(ep, { method: 'DELETE' })
      const data = await res.json()
      if (data.ok) setPublishInfo(null)
    } catch {}
  }

  async function handleTranslate() {
    if (previewLang !== 'en') {
      alert('EN 탭에서만 AI 번역 기능을 사용할 수 있습니다.\n상단에서 "뉴스레터미리보기 (EN)" 탭을 먼저 선택해주세요.')
      return
    }
    setShowTranslatePopup(true)
  }

  async function executeTranslate(overrides) {
    setShowTranslatePopup(false)
    setTranslating(true)
    // overrides로 최신 데이터를 직접 받을 수 있음 (동기화 직후 state가 아직 반영 안 된 경우)
    const _products = overrides?.products ?? products
    const _productsCnty = overrides?.productsCnty ?? productsCnty
    const _citations = overrides?.citations ?? citations
    const _citationsCnty = overrides?.citationsCnty ?? citationsCnty
    try {
      // 번역 소스는 항상 한글(metaKo)
      const src = metaKo
      const metaTexts = [
        src.title || '', src.dateLine || '', src.noticeText || '',
        src.totalInsight || '', src.reportType || '',
        src.productInsight || '', src.productHowToRead || '',
        src.citationInsight || '', src.citationHowToRead || '',
        src.dotcomInsight || '', src.dotcomHowToRead || '',
        src.todoText || '', src.kpiLogicText || '',
        src.cntyInsight || '', src.cntyHowToRead || '',
        src.citDomainInsight || '', src.citDomainHowToRead || '',
        src.citCntyInsight || '', src.citCntyHowToRead || '',
        src.period || '', src.team || '', src.reportNo || '',
      ]
      // 제품명 + 경쟁사명 (한글 원본)
      const productKrTexts = _products.map(p => p.kr || '')
      const productCompTexts = _products.map(p => p.compName || '')
      // Citation category
      const citCategoryTexts = _citations.map(c => c.category || '')
      // 국가별 — 고유 country, product, compName
      const cntyCountries = [...new Set(_productsCnty.map(r => r.country || ''))]
      const cntyProducts = [...new Set(_productsCnty.map(r => r.product || ''))]
      const cntyCompNames = [...new Set(_productsCnty.map(r => r.compName || ''))]
      // 국가별 Citation — 고유 cnty
      const citCntyNames = [...new Set(_citationsCnty.map(r => r.cnty || '').filter(c => c && c !== 'TTL'))]

      const allTexts = [...metaTexts, ...productKrTexts, ...productCompTexts, ...citCategoryTexts, ...cntyCountries, ...cntyProducts, ...cntyCompNames, ...citCntyNames].map(t => t || ' ')

      const res = await fetch('/api/translate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ texts: allTexts, from: 'ko', to: 'en' }),
      })
      const data = await res.json()
      if (!data.ok) throw new Error(data.error || '번역 실패')

      const tr = data.translated
      let idx = 0
      // EN meta = metaKo 기반 + 번역된 텍스트 덮어쓰기 (항상 setMetaEn 사용)
      const newMetaEn = { ...metaKo,
        title: tr[idx++] || src.title,
        dateLine: tr[idx++] || src.dateLine,
        noticeText: tr[idx++] || src.noticeText,
        totalInsight: tr[idx++] || src.totalInsight,
        reportType: tr[idx++] || src.reportType,
        productInsight: tr[idx++] || src.productInsight,
        productHowToRead: tr[idx++] || src.productHowToRead,
        citationInsight: tr[idx++] || src.citationInsight,
        citationHowToRead: tr[idx++] || src.citationHowToRead,
        dotcomInsight: tr[idx++] || src.dotcomInsight,
        dotcomHowToRead: tr[idx++] || src.dotcomHowToRead,
        todoText: tr[idx++] || src.todoText,
        kpiLogicText: tr[idx++] || src.kpiLogicText,
        cntyInsight: tr[idx++] || src.cntyInsight,
        cntyHowToRead: tr[idx++] || src.cntyHowToRead,
        citDomainInsight: tr[idx++] || src.citDomainInsight,
        citDomainHowToRead: tr[idx++] || src.citDomainHowToRead,
        citCntyInsight: tr[idx++] || src.citCntyInsight,
        citCntyHowToRead: tr[idx++] || src.citCntyHowToRead,
        period: tr[idx++] || src.period,
        team: tr[idx++] || src.team,
        reportNo: tr[idx++] || src.reportNo,
      }

      const capitalize = s => s ? s.replace(/\b\w/g, c => c.toUpperCase()) : s
      const ssReplace = s => (s || '').replace(/samsung\s*(electronics)?/gi, 'SS').replace(/삼성전자/g, 'SS').replace(/삼성/g, 'SS')

      // EN 번역 매핑 테이블 생성
      const enMap = {}
      _products.forEach((p, i) => {
        enMap[p.id] = {
          en: capitalize(tr[idx + i] || p.kr),
          compNameEn: ssReplace(tr[idx + productKrTexts.length + i] || p.compName),
        }
      })
      idx += productKrTexts.length + productCompTexts.length

      // Citation categoryEn 매핑
      const citEnMap = {}
      _citations.forEach((c, i) => {
        citEnMap[`${c.rank}_${c.source}`] = capitalize(tr[idx + i] || c.category)
      })
      idx += citCategoryTexts.length

      // 국가별 매핑
      const countryMap = {}
      cntyCountries.forEach((v, i) => { countryMap[v] = tr[idx + i] || v })
      idx += cntyCountries.length
      const cntyProductMap = {}
      cntyProducts.forEach((v, i) => { cntyProductMap[v] = tr[idx + i] || v })
      idx += cntyProducts.length
      const cntyCompMap = {}
      cntyCompNames.forEach((v, i) => { cntyCompMap[v] = tr[idx + i] || v })
      idx += cntyCompNames.length
      const citCntyMap = {}
      citCntyNames.forEach((v, i) => { citCntyMap[v] = tr[idx + i] || v })

      // ★ 핵심 수정: callback form 사용 → 최신 state를 기준으로 EN 필드만 추가
      // 기존 숫자 데이터(score, weekly, vsComp 등)를 절대 덮어쓰지 않음
      setMetaEn(newMetaEn)
      setProducts(prev => prev.map(p => ({
        ...p,
        en: enMap[p.id]?.en || p.en || p.kr,
        compNameEn: enMap[p.id]?.compNameEn || p.compNameEn || p.compName,
      })))
      setCitations(prev => prev.map(c => ({
        ...c,
        categoryEn: citEnMap[`${c.rank}_${c.source}`] || c.categoryEn || c.category,
      })))
      setProductsCnty(prev => prev.map(r => ({
        ...r,
        countryEn: capitalize(countryMap[r.country] || r.country),
        productEn: capitalize(cntyProductMap[r.product] || r.product),
        compNameEn: ssReplace(cntyCompMap[r.compName] || r.compName),
      })))
      setCitationsCnty(prev => prev.map(r => ({
        ...r,
        cntyEn: r.cnty === 'TTL' ? 'TTL' : capitalize(citCntyMap[r.cnty] || r.cnty),
      })))

      setTranslating(false)
    } catch (err) {
      alert('번역 오류: ' + err.message)
      setTranslating(false)
    }
  }

  async function handleCopyHtml() {
    const html = generateHTML(meta, total, resolved.products, resolved.citations, dotcom, previewLang, resolved.productsCnty, resolved.citationsCnty)
    try {
      await navigator.clipboard.writeText(html)
    } catch {
      // fallback for older browsers
      const ta = document.createElement('textarea')
      ta.value = html
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  function handleDownload() {
    downloadTemplate(meta, total, products, citations, dotcom)
  }

  async function handleSendMail() {
    if (mailSent === 'sending') return
    setMailSent('sending')
    try {
      const html    = generateHTML(meta, total, resolved.products, resolved.citations, dotcom, previewLang, resolved.productsCnty, resolved.citationsCnty)
      const subject = `[LG GEO] ${meta.title} · ${meta.period}`
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ to: toEmail.trim(), subject, html }),
      })
      const data = await res.json()
      if (!data.ok) throw new Error(data.error || '발송 실패')
      setMailSent('ok')
      setTimeout(() => setMailSent(false), 4000)
    } catch (err) {
      setMailSent('error')
      setGsMsg(err.message)
      setTimeout(() => { setMailSent(false); setGsMsg('') }, 5000)
    }
  }

  async function handleGsSync() {
    if (gsSyncing) return
    const sheetId = extractSheetId(gsUrl.trim())
    if (!sheetId) {
      setGsStatus('error'); setGsMsg('올바른 Google Sheets URL을 입력하세요.')
      setTimeout(() => setGsStatus(null), 3000); return
    }
    setGsSyncing(true); setGsStatus(null); setGsMsg('')
    try {
      const parsed = await syncFromGoogleSheets(sheetId, msg => setGsMsg(msg))
      if (parsed.meta)         setMetaKo(m => ({ ...m, ...parsed.meta }))
      if (parsed.citations)    setCitations(parsed.citations)
      if (parsed.dotcom)       setDotcom(d => ({ ...d, ...parsed.dotcom }))
      if (parsed.productsCnty) setProductsCnty(parsed.productsCnty)
      if (parsed.citationsCnty) setCitationsCnty(parsed.citationsCnty)
      // 주차 라벨: meta.weekStart 기반 자동 생성, 없으면 시트 파싱 값 사용
      const weekCount = parsed.weeklyMap ? Math.max(...Object.values(parsed.weeklyMap).map(a => a.length), 0) : 0
      const ws = parsed.meta?.weekStart
      const wl = ws && weekCount
        ? Array.from({ length: weekCount }, (_, i) => `W${ws + i}`)
        : (parsed.meta?.weeklyLabels || parsed.weeklyLabels)
      if (wl) setWeeklyLabels(wl)
      if (parsed.weeklyAll) setWeeklyAll(prev => ({ ...prev, ...parsed.weeklyAll }))
      // 제품: productsPartial이 있으면 새로 생성, 없으면 weeklyMap만 병합
      console.log('[SYNC] parsed keys:', Object.keys(parsed))
      const wmKeys = parsed.weeklyMap ? Object.keys(parsed.weeklyMap) : []
      const ppIds  = parsed.productsPartial?.map(p => p.id) || []
      console.log('[SYNC] weeklyMap keys:', wmKeys.length ? wmKeys : 'NONE')
      console.log('[SYNC] productsPartial IDs:', ppIds.length ? ppIds : 'NONE')
      // ── 진단: ID 불일치 감지 ──
      if (wmKeys.length && ppIds.length) {
        const missingWeekly = ppIds.filter(id => !wmKeys.includes(id))
        const orphanWeekly  = wmKeys.filter(k => !ppIds.includes(k))
        if (missingWeekly.length) console.warn('[SYNC] ⚠ 제품에 weekly 없음:', missingWeekly)
        if (orphanWeekly.length)  console.warn('[SYNC] ⚠ weekly에 제품 없음:', orphanWeekly)
        if (!missingWeekly.length && !orphanWeekly.length) console.log('[SYNC] ✓ 모든 제품-weekly ID 일치')
      }
      if (parsed.productsPartial) {
        const newProducts = parsed.productsPartial.map(p => {
          const weekly = parsed.weeklyMap?.[p.id] || []
          if (!weekly.length) console.warn(`[SYNC] product "${p.id}" (bu:${p.bu}) has NO weekly data — weeklyMap has: [${wmKeys}]`)
          else console.log(`[SYNC] product "${p.id}" weekly:`, weekly)
          const ratio = p.vsComp > 0 ? (p.score / p.vsComp) * 100 : 100
          return { ...p, weekly, monthly: [], compRatio: Math.round(ratio),
            status: ratio >= 100 ? 'lead' : ratio >= 80 ? 'behind' : 'critical' }
        })
        setProducts(newProducts)
      } else if (parsed.weeklyMap) {
        setProducts(prev => prev.map(p => {
          const weekly = parsed.weeklyMap?.[p.id]
          return weekly ? { ...p, weekly } : p
        }))
      }
      // total: visSummary에서 왔으면 사용, 없으면 productsPartial에서 계산
      if (parsed.total) {
        setTotal(t => ({ ...t, ...parsed.total }))
      } else if (parsed.productsPartial && parsed.productsPartial.length > 0) {
        const pp = parsed.productsPartial
        const lgAvg = +(pp.reduce((s, p) => s + p.score, 0) / pp.length).toFixed(1)
        const compAvg = +(pp.reduce((s, p) => s + (p.vsComp || 0), 0) / pp.length).toFixed(1)
        setTotal(t => ({ ...t, score: lgAvg, vsComp: compAvg, rank: lgAvg >= compAvg ? 1 : 2 }))
      }
      // 서버에 동기화 데이터 저장 (parsed 데이터 직접 사용, stale closure 의존 제거)
      // setProducts callback이 반영된 후 저장되도록 약간의 지연 사용
      setTimeout(() => {
        // 이 시점에서 React state가 반영됨 — 하지만 closure 문제로 직접 참조 불가
        // parsed 데이터만으로 서버 저장 데이터 구성
        saveSyncData(mode, {
          meta: parsed.meta || null,
          total: parsed.total || null,
          productsPartial: parsed.productsPartial || null,
          weeklyMap: parsed.weeklyMap || null,
          weeklyLabels: parsed.weeklyLabels || null,
          weeklyAll: parsed.weeklyAll || null,
          citations: parsed.citations || null,
          dotcom: parsed.dotcom || null,
          productsCnty: parsed.productsCnty || null,
          citationsCnty: parsed.citationsCnty || null,
        })
      }, 100)
      setGsStatus('ok'); setGsMsg(mode === 'dashboard' ? '동기화 완료! EN 자동 번역 중...' : '동기화 완료!')
      // Dashboard mode: auto-translate after sync
      // executeTranslate는 이제 callback form을 사용하므로 override 불필요
      if (mode === 'dashboard') {
        try { await executeTranslate() } catch {}
        setGsMsg('동기화 + 번역 완료!')
      }
    } catch (err) {
      setGsStatus('error'); setGsMsg(err.message)
    } finally {
      setGsSyncing(false)
      setTimeout(() => { setGsStatus(null); setGsMsg('') }, 4000)
    }
  }

  async function handleExportMeta() {
    if (exporting || !scriptUrl.trim()) return
    setExporting(true); setExportMsg('')
    localStorage.setItem('geo-script-url', scriptUrl.trim())
    try {
      const exportData = {
        action: 'writeMeta',
        meta: {
          period: meta.period, team: meta.team, reportNo: meta.reportNo,
          reportType: meta.reportType, title: meta.title,
          titleFontSize: meta.titleFontSize, titleColor: meta.titleColor,
          dateLine: meta.dateLine, totalInsight: meta.totalInsight,
          productInsight: meta.productInsight, productHowToRead: meta.productHowToRead,
          citationInsight: meta.citationInsight, citationHowToRead: meta.citationHowToRead,
          dotcomInsight: meta.dotcomInsight, dotcomHowToRead: meta.dotcomHowToRead,
          cntyInsight: meta.cntyInsight, cntyHowToRead: meta.cntyHowToRead,
          citDomainInsight: meta.citDomainInsight, citDomainHowToRead: meta.citDomainHowToRead,
          citCntyInsight: meta.citCntyInsight, citCntyHowToRead: meta.citCntyHowToRead,
          kpiLogicText: meta.kpiLogicText,
          noticeText: meta.noticeText,
          showNotice: meta.showNotice, showKpiLogic: meta.showKpiLogic,
          showProductInsight: meta.showProductInsight, showProductHowToRead: meta.showProductHowToRead,
          showCitationInsight: meta.showCitationInsight, showCitationHowToRead: meta.showCitationHowToRead,
          showDotcomInsight: meta.showDotcomInsight, showDotcomHowToRead: meta.showDotcomHowToRead,
          showCntyInsight: meta.showCntyInsight, showCntyHowToRead: meta.showCntyHowToRead,
          showCitDomainInsight: meta.showCitDomainInsight, showCitDomainHowToRead: meta.showCitDomainHowToRead,
          showCitCntyInsight: meta.showCitCntyInsight, showCitCntyHowToRead: meta.showCitCntyHowToRead,
        },
        total,
      }
      const res = await fetch('/api/gsheet-export', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ scriptUrl: scriptUrl.trim(), data: exportData }),
      })
      const result = await res.json()
      if (!result.ok) throw new Error(result.error || '내보내기 실패')
      setExportMsg('✓ 구글 시트 내보내기 완료!')
    } catch (err) {
      setExportMsg('✗ ' + err.message)
    } finally {
      setExporting(false)
      setTimeout(() => setExportMsg(''), 5000)
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
            <p style={{ margin: 0, fontSize: 11, fontWeight: 700, color: '#FFFFFF', fontFamily: FONT }}>GEO Builder <span style={{ fontSize: 11, fontWeight: 400, color: '#64748B' }}>v{__APP_VERSION__}</span></p>
            <p style={{ margin: 0, fontSize: 11, color: '#475569', fontFamily: FONT }}>{mode === 'dashboard' ? '대시보드 생성기' : '뉴스레터 생성기'}</p>
          </div>
        </div>
      </div>

      {/* 메인 영역 */}
      <div style={{ padding: '16px 14px', flex: 1, overflowY: 'auto' }}>

        {/* ── 구글 시트 동기화 (최상단) ── */}
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
        <button
          onClick={handleGsSync}
          style={{
            width: '100%', padding: '10px 0', borderRadius: 8, border: 'none',
            cursor: gsSyncing ? 'wait' : 'pointer',
            background: gsSyncing ? '#1E293B' : LG_RED,
            fontSize: 12, fontWeight: 700,
            color: gsSyncing ? '#94A3B8' : '#FFFFFF',
            fontFamily: FONT, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
            marginBottom: 8, transition: 'all 0.2s',
          }}>
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
        <div style={{ height: 1, background: '#1E293B', marginBottom: 16 }} />

        {/* ── 헤더 편집 ── */}
        <p style={{ margin: '0 0 10px 2px', fontSize: 11, fontWeight: 700, color: '#475569',
          textTransform: 'uppercase', letterSpacing: 1, fontFamily: FONT }}>
          헤더 편집
        </p>

        {/* 리포트 유형 (좌상단) */}
        <p style={{ margin: '0 0 3px', fontSize: 11, color: '#64748B', fontFamily: FONT }}>리포트 유형 <span style={{ color: '#334155' }}>(좌상단)</span></p>
        <input value={meta.reportType} onChange={e => setMeta(m => ({ ...m, reportType: e.target.value }))}
          style={{ ...inputStyle, marginBottom: 8 }} />

        {/* 보고서 번호 + 기간 (레드바) */}
        <div style={{ display: 'flex', gap: 6, marginBottom: 8 }}>
          <div style={{ flex: 1 }}>
            <p style={{ margin: '0 0 3px', fontSize: 11, color: '#64748B', fontFamily: FONT }}>보고서 번호</p>
            <input value={meta.reportNo} onChange={e => setMeta(m => ({ ...m, reportNo: e.target.value }))}
              style={{ ...inputStyle }} />
          </div>
          <div style={{ flex: 1.4 }}>
            <p style={{ margin: '0 0 3px', fontSize: 11, color: '#64748B', fontFamily: FONT }}>기간 <span style={{ color: '#334155' }}>(레드바)</span></p>
            <input value={meta.period} onChange={e => setMeta(m => ({ ...m, period: e.target.value }))}
              style={{ ...inputStyle }} />
          </div>
        </div>

        {/* 제목 텍스트 */}
        <p style={{ margin: '0 0 3px', fontSize: 11, color: '#64748B', fontFamily: FONT }}>제목 텍스트</p>
        <textarea
          value={meta.title}
          onChange={e => setMeta(m => ({ ...m, title: e.target.value }))}
          rows={4}
          style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6, marginBottom: 8 }}
        />

        {/* 팀명 (우하단 첫째줄) */}
        <p style={{ margin: '0 0 3px', fontSize: 11, color: '#64748B', fontFamily: FONT }}>팀명 <span style={{ color: '#334155' }}>(우하단)</span></p>
        <input value={meta.team} onChange={e => setMeta(m => ({ ...m, team: e.target.value }))}
          style={{ ...inputStyle, marginBottom: 8 }} />

        {/* 기준 텍스트 (팀명 바로 아래 우하단) */}
        <p style={{ margin: '0 0 3px', fontSize: 11, color: '#64748B', fontFamily: FONT }}>기준 텍스트 <span style={{ color: '#334155' }}>(팀명 아래)</span></p>
        <input value={meta.dateLine} onChange={e => setMeta(m => ({ ...m, dateLine: e.target.value }))}
          style={{ ...inputStyle, marginBottom: 10 }} />

        {/* Notice */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
          <p style={{ margin: 0, fontSize: 11, color: '#64748B', fontFamily: FONT }}>Notice</p>
          <button onClick={() => setMeta(m => ({ ...m, showNotice: !m.showNotice }))}
            style={{ background: meta.showNotice ? LG_RED : '#334155', border: 'none', borderRadius: 8,
              width: 32, height: 16, cursor: 'pointer', position: 'relative', padding: 0, transition: 'background 0.2s' }}>
            <span style={{ position: 'absolute', top: 2, left: meta.showNotice ? 17 : 3,
              width: 12, height: 12, borderRadius: '50%', background: '#FFFFFF', transition: 'left 0.2s' }} />
          </button>
        </div>
        {meta.showNotice && (<>
          <textarea value={meta.noticeText} onChange={e => setMeta(m => ({ ...m, noticeText: e.target.value }))}
            rows={4} placeholder="Notice 내용을 입력하세요..."
            style={{ ...inputStyle, marginBottom: 4, resize: 'vertical' }} />
          <p style={{ margin: '0 0 10px', fontSize: 11, color: '#475569', fontFamily: FONT }}>**텍스트** → <strong>볼드</strong></p>
        </>)}

        {/* KPI Logic */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
          <p style={{ margin: 0, fontSize: 11, color: '#64748B', fontFamily: FONT }}>KPI Logic</p>
          <button onClick={() => setMeta(m => ({ ...m, showKpiLogic: !m.showKpiLogic }))}
            style={{ background: meta.showKpiLogic ? LG_RED : '#334155', border: 'none', borderRadius: 8,
              width: 32, height: 16, cursor: 'pointer', position: 'relative', padding: 0, transition: 'background 0.2s' }}>
            <span style={{ position: 'absolute', top: 2, left: meta.showKpiLogic ? 17 : 3,
              width: 12, height: 12, borderRadius: '50%', background: '#FFFFFF', transition: 'left 0.2s' }} />
          </button>
        </div>
        {meta.showKpiLogic && (<>
          <textarea value={meta.kpiLogicText} onChange={e => setMeta(m => ({ ...m, kpiLogicText: e.target.value }))}
            rows={4} placeholder="KPI Logic 내용을 입력하세요..."
            style={{ ...inputStyle, marginBottom: 4, resize: 'vertical' }} />
          <p style={{ margin: '0 0 10px', fontSize: 11, color: '#475569', fontFamily: FONT }}>**텍스트** → <strong>볼드</strong></p>
        </>)}

        {/* 폰트 크기 */}
        <div style={{ marginBottom: 10 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
            <p style={{ margin: 0, fontSize: 11, color: '#64748B', fontFamily: FONT }}>폰트 크기</p>
            <p style={{ margin: 0, fontSize: 11, color: '#94A3B8', fontFamily: FONT, fontWeight: 700 }}>
              {meta.titleFontSize}px
            </p>
          </div>
          <input
            type="range" min={14} max={48} step={1}
            value={meta.titleFontSize}
            onChange={e => setMeta(m => ({ ...m, titleFontSize: Number(e.target.value) }))}
            style={{ width: '100%', accentColor: LG_RED, cursor: 'pointer' }}
          />
        </div>

        {/* 색상 */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
          <p style={{ margin: 0, fontSize: 11, color: '#64748B', fontFamily: FONT, flex: 1 }}>제목 색상</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <input
              type="color"
              value={meta.titleColor}
              onChange={e => setMeta(m => ({ ...m, titleColor: e.target.value }))}
              style={{ width: 32, height: 26, border: '1px solid #334155', borderRadius: 5,
                background: 'none', cursor: 'pointer', padding: 2 }}
            />
            <span style={{ fontSize: 11, color: '#475569', fontFamily: FONT }}>{meta.titleColor}</span>
            {/* 빠른 색상 프리셋 */}
            {[['#1A1A1A','다크'],['#CF0652','LG 레드'],['#1D4ED8','블루'],['#FFFFFF','화이트']].map(([c, label]) => (
              <button key={c} onClick={() => setMeta(m => ({ ...m, titleColor: c }))}
                title={label}
                style={{ width: 16, height: 16, borderRadius: '50%', background: c,
                  border: meta.titleColor === c ? '2px solid #FFFFFF' : '1px solid #334155',
                  cursor: 'pointer', padding: 0, flexShrink: 0 }} />
            ))}
          </div>
        </div>

        <div style={{ height: 1, background: '#1E293B', marginBottom: 16 }} />

        {/* 섹션 표시/숨김 토글 */}
        <p style={{ margin: '0 0 8px 2px', fontSize: 11, fontWeight: 700, color: '#475569',
          textTransform: 'uppercase', letterSpacing: 1, fontFamily: FONT }}>
          섹션 표시
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginBottom: 16 }}>
          {[
            { key: 'showTotal',     label: 'GEO 지수' },
            { key: 'showProducts',  label: '제품별' },
            { key: 'showCnty',      label: '국가별' },
            { key: 'showCitations', label: 'Citation' },
            { key: 'showCitDomain', label: '도메인별 Citation' },
            { key: 'showCitCnty',   label: '국가별 Citation' },
            { key: 'showDotcom',    label: '닷컴' },
            { key: 'showTodo',      label: 'Action Plan' },
          ].map(({ key, label }) => (
            <button key={key} onClick={() => setMeta(m => ({ ...m, [key]: !m[key] }))}
              style={{ padding: '5px 12px', borderRadius: 20, border: 'none', cursor: 'pointer',
                background: meta[key] ? LG_RED : '#1E293B',
                color: meta[key] ? '#FFFFFF' : '#475569',
                fontSize: 11, fontWeight: 700, fontFamily: FONT }}>
              {label}
            </button>
          ))}
        </div>

        {/* Top N 설정 */}
        <p style={{ margin: '0 0 6px 2px', fontSize: 11, fontWeight: 700, color: '#475569',
          textTransform: 'uppercase', letterSpacing: 1, fontFamily: FONT }}>
          표시 개수
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 16, alignItems: 'center' }}>
          <span style={{ fontSize: 11, color: '#64748B', fontFamily: FONT }}>카테고리 Citation</span>
          {[5, 10].map(n => (
            <button key={`citN${n}`} onClick={() => setMeta(m => ({ ...m, citationTopN: n }))}
              style={{ padding: '4px 10px', borderRadius: 12, border: 'none', cursor: 'pointer',
                background: meta.citationTopN === n ? LG_RED : '#1E293B',
                color: meta.citationTopN === n ? '#FFFFFF' : '#475569',
                fontSize: 11, fontWeight: 700, fontFamily: FONT }}>
              Top {n}
            </button>
          ))}
          <span style={{ fontSize: 11, color: '#64748B', fontFamily: FONT, marginLeft: 8 }}>도메인 Citation</span>
          {[5, 10].map(n => (
            <button key={`domN${n}`} onClick={() => setMeta(m => ({ ...m, citDomainTopN: n }))}
              style={{ padding: '4px 10px', borderRadius: 12, border: 'none', cursor: 'pointer',
                background: meta.citDomainTopN === n ? LG_RED : '#1E293B',
                color: meta.citDomainTopN === n ? '#FFFFFF' : '#475569',
                fontSize: 11, fontWeight: 700, fontFamily: FONT }}>
              Top {n}
            </button>
          ))}
        </div>

        {/* ── 콘텐츠 편집 ── */}
        <p style={{ margin: '0 0 10px 2px', fontSize: 11, fontWeight: 700, color: '#475569',
          textTransform: 'uppercase', letterSpacing: 1, fontFamily: FONT }}>
          콘텐츠 편집
        </p>

        {/* GEO 전략 인사이트 */}
        <p style={{ margin: '0 0 3px', fontSize: 11, color: '#64748B', fontFamily: FONT }}>GEO 전략 인사이트</p>
        <textarea
          value={meta.totalInsight}
          onChange={e => setMeta(m => ({ ...m, totalInsight: e.target.value }))}
          rows={12}
          placeholder="전체 GEO 가시성 카드에 표시할 전략 인사이트를 입력하세요..."
          style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6, marginBottom: 4 }}
        />
        <p style={{ margin: '0 0 10px', fontSize: 11, color: '#475569', fontFamily: FONT }}>**텍스트** → <strong>볼드</strong> · 줄바꿈 지원</p>

        {/* 제품 섹션 인사이트 */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
          <p style={{ margin: 0, fontSize: 11, color: '#64748B', fontFamily: FONT }}>제품 섹션 인사이트</p>
          <div style={{ display: 'flex', gap: 4 }}>
            <button onClick={() => setMeta(m => ({ ...m, productInsight: generateProductInsight(resolved.products) }))}
              title="AI 인사이트 자동생성"
              style={{ padding: '2px 6px', borderRadius: 4, border: 'none', cursor: 'pointer',
                background: '#4F46E5', color: '#FFFFFF',
                fontSize: 11, fontWeight: 700, fontFamily: FONT, display: 'flex', alignItems: 'center', gap: 3 }}>
              <Sparkles size={9} /> AI 생성
            </button>
            <button onClick={() => setMeta(m => ({ ...m, showProductInsight: !m.showProductInsight }))}
              style={{ padding: '2px 8px', borderRadius: 4, border: 'none', cursor: 'pointer',
                background: meta.showProductInsight ? LG_RED : '#1E293B',
                color: meta.showProductInsight ? '#FFFFFF' : '#475569',
                fontSize: 11, fontWeight: 700, fontFamily: FONT }}>
              {meta.showProductInsight ? 'ON' : 'OFF'}
            </button>
          </div>
        </div>
        <textarea
          value={meta.productInsight}
          onChange={e => setMeta(m => ({ ...m, productInsight: e.target.value }))}
          rows={12}
          placeholder="제품 섹션 인사이트를 입력하세요... (AI 생성 버튼으로 자동 작성 가능)"
          style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6, marginBottom: 8 }}
        />

        {/* 제품 섹션 How to Read */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
          <p style={{ margin: 0, fontSize: 11, color: '#64748B', fontFamily: FONT }}>제품 섹션 How to Read</p>
          <div style={{ display: 'flex', gap: 4 }}>
            <button onClick={() => setMeta(m => ({ ...m, productHowToRead: generateProductHowToRead() }))}
              title="AI 인사이트 자동생성"
              style={{ padding: '2px 6px', borderRadius: 4, border: 'none', cursor: 'pointer',
                background: '#4F46E5', color: '#FFFFFF',
                fontSize: 11, fontWeight: 700, fontFamily: FONT, display: 'flex', alignItems: 'center', gap: 3 }}>
              <Sparkles size={9} /> AI 생성
            </button>
            <button onClick={() => setMeta(m => ({ ...m, showProductHowToRead: !m.showProductHowToRead }))}
              style={{ padding: '2px 8px', borderRadius: 4, border: 'none', cursor: 'pointer',
                background: meta.showProductHowToRead ? LG_RED : '#1E293B',
                color: meta.showProductHowToRead ? '#FFFFFF' : '#475569',
                fontSize: 11, fontWeight: 700, fontFamily: FONT }}>
              {meta.showProductHowToRead ? 'ON' : 'OFF'}
            </button>
          </div>
        </div>
        <textarea
          value={meta.productHowToRead}
          onChange={e => setMeta(m => ({ ...m, productHowToRead: e.target.value }))}
          rows={4}
          placeholder="제품 섹션 How to Read 설명을 입력하세요... (AI 생성 버튼으로 자동 작성 가능)"
          style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6, marginBottom: 8 }}
        />

        {/* 국가별 섹션 인사이트 */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
          <p style={{ margin: 0, fontSize: 11, color: '#64748B', fontFamily: FONT }}>국가별 섹션 인사이트</p>
          <button onClick={() => setMeta(m => ({ ...m, showCntyInsight: !m.showCntyInsight }))}
            style={{ padding: '2px 8px', borderRadius: 4, border: 'none', cursor: 'pointer',
              background: meta.showCntyInsight ? LG_RED : '#1E293B',
              color: meta.showCntyInsight ? '#FFFFFF' : '#475569',
              fontSize: 11, fontWeight: 700, fontFamily: FONT }}>
            {meta.showCntyInsight ? 'ON' : 'OFF'}
          </button>
        </div>
        <textarea
          value={meta.cntyInsight}
          onChange={e => setMeta(m => ({ ...m, cntyInsight: e.target.value }))}
          rows={8}
          placeholder="국가별 섹션 인사이트를 입력하세요..."
          style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6, marginBottom: 8 }}
        />

        {/* 국가별 How to Read */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
          <p style={{ margin: 0, fontSize: 11, color: '#64748B', fontFamily: FONT }}>국가별 How to Read</p>
          <div style={{ display: 'flex', gap: 4 }}>
            <button onClick={() => setMeta(m => ({ ...m, cntyHowToRead: generateCntyHowToRead() }))}
              title="AI 인사이트 자동생성"
              style={{ padding: '2px 6px', borderRadius: 4, border: 'none', cursor: 'pointer',
                background: '#4F46E5', color: '#FFFFFF',
                fontSize: 11, fontWeight: 700, fontFamily: FONT, display: 'flex', alignItems: 'center', gap: 3 }}>
              <Sparkles size={9} /> AI 생성
            </button>
            <button onClick={() => setMeta(m => ({ ...m, showCntyHowToRead: !m.showCntyHowToRead }))}
              style={{ padding: '2px 8px', borderRadius: 4, border: 'none', cursor: 'pointer',
                background: meta.showCntyHowToRead ? LG_RED : '#1E293B',
                color: meta.showCntyHowToRead ? '#FFFFFF' : '#475569',
                fontSize: 11, fontWeight: 700, fontFamily: FONT }}>
              {meta.showCntyHowToRead ? 'ON' : 'OFF'}
            </button>
          </div>
        </div>
        <textarea
          value={meta.cntyHowToRead}
          onChange={e => setMeta(m => ({ ...m, cntyHowToRead: e.target.value }))}
          rows={4}
          placeholder="국가별 How to Read 설명을 입력하세요..."
          style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6, marginBottom: 8 }}
        />

        {/* 국가별 제품군 ON/OFF */}
        {productsCnty.length > 0 && (() => {
          const productNames = [...new Set(resolved.productsCnty.map(r => r.product))]
          return (
            <div style={{ marginBottom: 8 }}>
              <p style={{ margin: '0 0 6px', fontSize: 11, color: '#64748B', fontFamily: FONT }}>국가별 제품군 표시</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                {productNames.map(name => {
                  const isOn = (meta.cntyProductFilter || {})[name] !== false
                  return (
                    <button key={name} onClick={() => setMeta(m => ({
                      ...m,
                      cntyProductFilter: { ...(m.cntyProductFilter || {}), [name]: !isOn }
                    }))}
                      style={{ padding: '4px 10px', borderRadius: 16, border: 'none', cursor: 'pointer',
                        background: isOn ? '#166534' : '#1E293B',
                        color: isOn ? '#86EFAC' : '#475569',
                        fontSize: 11, fontWeight: 700, fontFamily: FONT }}>
                      {name}
                    </button>
                  )
                })}
              </div>
            </div>
          )
        })()}

        {/* Citation 인사이트 */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
          <p style={{ margin: 0, fontSize: 11, color: '#64748B', fontFamily: FONT }}>Citation 섹션 인사이트</p>
          <div style={{ display: 'flex', gap: 4 }}>
            <button onClick={() => setMeta(m => ({ ...m, citationInsight: generateCitationInsight(resolved.citations) }))}
              title="AI 인사이트 자동생성"
              style={{ padding: '2px 6px', borderRadius: 4, border: 'none', cursor: 'pointer',
                background: '#4F46E5', color: '#FFFFFF',
                fontSize: 11, fontWeight: 700, fontFamily: FONT, display: 'flex', alignItems: 'center', gap: 3 }}>
              <Sparkles size={9} /> AI 생성
            </button>
            <button onClick={() => setMeta(m => ({ ...m, showCitationInsight: !m.showCitationInsight }))}
              style={{ padding: '2px 8px', borderRadius: 4, border: 'none', cursor: 'pointer',
                background: meta.showCitationInsight ? LG_RED : '#1E293B',
                color: meta.showCitationInsight ? '#FFFFFF' : '#475569',
                fontSize: 11, fontWeight: 700, fontFamily: FONT }}>
              {meta.showCitationInsight ? 'ON' : 'OFF'}
            </button>
          </div>
        </div>
        <textarea
          value={meta.citationInsight}
          onChange={e => setMeta(m => ({ ...m, citationInsight: e.target.value }))}
          rows={12}
          placeholder="Citation 섹션 인사이트를 입력하세요... (AI 생성 버튼으로 자동 작성 가능)"
          style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6, marginBottom: 8 }}
        />

        {/* Citation How to Read */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
          <p style={{ margin: 0, fontSize: 11, color: '#64748B', fontFamily: FONT }}>Citation How to Read</p>
          <div style={{ display: 'flex', gap: 4 }}>
            <button onClick={() => setMeta(m => ({ ...m, citationHowToRead: generateCitationHowToRead() }))}
              title="AI 인사이트 자동생성"
              style={{ padding: '2px 6px', borderRadius: 4, border: 'none', cursor: 'pointer',
                background: '#4F46E5', color: '#FFFFFF',
                fontSize: 11, fontWeight: 700, fontFamily: FONT, display: 'flex', alignItems: 'center', gap: 3 }}>
              <Sparkles size={9} /> AI 생성
            </button>
            <button onClick={() => setMeta(m => ({ ...m, showCitationHowToRead: !m.showCitationHowToRead }))}
              style={{ padding: '2px 8px', borderRadius: 4, border: 'none', cursor: 'pointer',
                background: meta.showCitationHowToRead ? LG_RED : '#1E293B',
                color: meta.showCitationHowToRead ? '#FFFFFF' : '#475569',
                fontSize: 11, fontWeight: 700, fontFamily: FONT }}>
              {meta.showCitationHowToRead ? 'ON' : 'OFF'}
            </button>
          </div>
        </div>
        <textarea
          value={meta.citationHowToRead}
          onChange={e => setMeta(m => ({ ...m, citationHowToRead: e.target.value }))}
          rows={4}
          placeholder="Citation How to Read 설명을 입력하세요... (AI 생성 버튼으로 자동 작성 가능)"
          style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6, marginBottom: 8 }}
        />

        {/* 도메인별 Citation 인사이트 */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
          <p style={{ margin: 0, fontSize: 11, color: '#64748B', fontFamily: FONT }}>도메인별 Citation 인사이트</p>
          <div style={{ display: 'flex', gap: 4 }}>
            <button onClick={() => setMeta(m => ({ ...m, citDomainInsight: generateCitDomainInsight(resolved.citationsCnty) }))}
              title="AI 인사이트 자동생성"
              style={{ padding: '2px 6px', borderRadius: 4, border: 'none', cursor: 'pointer',
                background: '#4F46E5', color: '#FFFFFF',
                fontSize: 11, fontWeight: 700, fontFamily: FONT, display: 'flex', alignItems: 'center', gap: 3 }}>
              <Sparkles size={9} /> AI 생성
            </button>
            <button onClick={() => setMeta(m => ({ ...m, showCitDomainInsight: !m.showCitDomainInsight }))}
              style={{ padding: '2px 8px', borderRadius: 4, border: 'none', cursor: 'pointer',
                background: meta.showCitDomainInsight ? LG_RED : '#1E293B',
                color: meta.showCitDomainInsight ? '#FFFFFF' : '#475569',
                fontSize: 11, fontWeight: 700, fontFamily: FONT }}>
              {meta.showCitDomainInsight ? 'ON' : 'OFF'}
            </button>
          </div>
        </div>
        <textarea
          value={meta.citDomainInsight}
          onChange={e => setMeta(m => ({ ...m, citDomainInsight: e.target.value }))}
          rows={8}
          placeholder="도메인별 Citation 인사이트를 입력하세요..."
          style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6, marginBottom: 8 }}
        />

        {/* 도메인별 Citation How to Read */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
          <p style={{ margin: 0, fontSize: 11, color: '#64748B', fontFamily: FONT }}>도메인별 Citation How to Read</p>
          <div style={{ display: 'flex', gap: 4 }}>
            <button onClick={() => setMeta(m => ({ ...m, citDomainHowToRead: generateCitDomainHowToRead() }))}
              title="AI 인사이트 자동생성"
              style={{ padding: '2px 6px', borderRadius: 4, border: 'none', cursor: 'pointer',
                background: '#4F46E5', color: '#FFFFFF',
                fontSize: 11, fontWeight: 700, fontFamily: FONT, display: 'flex', alignItems: 'center', gap: 3 }}>
              <Sparkles size={9} /> AI 생성
            </button>
            <button onClick={() => setMeta(m => ({ ...m, showCitDomainHowToRead: !m.showCitDomainHowToRead }))}
              style={{ padding: '2px 8px', borderRadius: 4, border: 'none', cursor: 'pointer',
                background: meta.showCitDomainHowToRead ? LG_RED : '#1E293B',
                color: meta.showCitDomainHowToRead ? '#FFFFFF' : '#475569',
                fontSize: 11, fontWeight: 700, fontFamily: FONT }}>
              {meta.showCitDomainHowToRead ? 'ON' : 'OFF'}
            </button>
          </div>
        </div>
        <textarea
          value={meta.citDomainHowToRead}
          onChange={e => setMeta(m => ({ ...m, citDomainHowToRead: e.target.value }))}
          rows={4}
          placeholder="도메인별 Citation How to Read 설명을 입력하세요..."
          style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6, marginBottom: 8 }}
        />

        {/* 국가별 Citation 인사이트 */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
          <p style={{ margin: 0, fontSize: 11, color: '#64748B', fontFamily: FONT }}>국가별 Citation 인사이트</p>
          <div style={{ display: 'flex', gap: 4 }}>
            <button onClick={() => setMeta(m => ({ ...m, citCntyInsight: generateCitCntyInsight(resolved.citationsCnty) }))}
              title="AI 인사이트 자동생성"
              style={{ padding: '2px 6px', borderRadius: 4, border: 'none', cursor: 'pointer',
                background: '#4F46E5', color: '#FFFFFF',
                fontSize: 11, fontWeight: 700, fontFamily: FONT, display: 'flex', alignItems: 'center', gap: 3 }}>
              <Sparkles size={9} /> AI 생성
            </button>
            <button onClick={() => setMeta(m => ({ ...m, showCitCntyInsight: !m.showCitCntyInsight }))}
              style={{ padding: '2px 8px', borderRadius: 4, border: 'none', cursor: 'pointer',
                background: meta.showCitCntyInsight ? LG_RED : '#1E293B',
                color: meta.showCitCntyInsight ? '#FFFFFF' : '#475569',
                fontSize: 11, fontWeight: 700, fontFamily: FONT }}>
              {meta.showCitCntyInsight ? 'ON' : 'OFF'}
            </button>
          </div>
        </div>
        <textarea
          value={meta.citCntyInsight}
          onChange={e => setMeta(m => ({ ...m, citCntyInsight: e.target.value }))}
          rows={8}
          placeholder="국가별 Citation 인사이트를 입력하세요..."
          style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6, marginBottom: 8 }}
        />

        {/* 국가별 Citation How to Read */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
          <p style={{ margin: 0, fontSize: 11, color: '#64748B', fontFamily: FONT }}>국가별 Citation How to Read</p>
          <div style={{ display: 'flex', gap: 4 }}>
            <button onClick={() => setMeta(m => ({ ...m, citCntyHowToRead: generateCitCntyHowToRead() }))}
              title="AI 인사이트 자동생성"
              style={{ padding: '2px 6px', borderRadius: 4, border: 'none', cursor: 'pointer',
                background: '#4F46E5', color: '#FFFFFF',
                fontSize: 11, fontWeight: 700, fontFamily: FONT, display: 'flex', alignItems: 'center', gap: 3 }}>
              <Sparkles size={9} /> AI 생성
            </button>
            <button onClick={() => setMeta(m => ({ ...m, showCitCntyHowToRead: !m.showCitCntyHowToRead }))}
              style={{ padding: '2px 8px', borderRadius: 4, border: 'none', cursor: 'pointer',
                background: meta.showCitCntyHowToRead ? LG_RED : '#1E293B',
                color: meta.showCitCntyHowToRead ? '#FFFFFF' : '#475569',
                fontSize: 11, fontWeight: 700, fontFamily: FONT }}>
              {meta.showCitCntyHowToRead ? 'ON' : 'OFF'}
            </button>
          </div>
        </div>
        <textarea
          value={meta.citCntyHowToRead}
          onChange={e => setMeta(m => ({ ...m, citCntyHowToRead: e.target.value }))}
          rows={4}
          placeholder="국가별 Citation How to Read 설명을 입력하세요..."
          style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6, marginBottom: 8 }}
        />

        {/* 닷컴 Citation 인사이트 */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
          <p style={{ margin: 0, fontSize: 11, color: '#64748B', fontFamily: FONT }}>닷컴 Citation 인사이트</p>
          <div style={{ display: 'flex', gap: 4 }}>
            <button onClick={() => setMeta(m => ({ ...m, dotcomInsight: generateDotcomInsight(dotcom) }))}
              title="AI 인사이트 자동생성"
              style={{ padding: '2px 6px', borderRadius: 4, border: 'none', cursor: 'pointer',
                background: '#4F46E5', color: '#FFFFFF',
                fontSize: 11, fontWeight: 700, fontFamily: FONT, display: 'flex', alignItems: 'center', gap: 3 }}>
              <Sparkles size={9} /> AI 생성
            </button>
            <button onClick={() => setMeta(m => ({ ...m, showDotcomInsight: !m.showDotcomInsight }))}
              style={{ padding: '2px 8px', borderRadius: 4, border: 'none', cursor: 'pointer',
                background: meta.showDotcomInsight ? LG_RED : '#1E293B',
                color: meta.showDotcomInsight ? '#FFFFFF' : '#475569',
                fontSize: 11, fontWeight: 700, fontFamily: FONT }}>
              {meta.showDotcomInsight ? 'ON' : 'OFF'}
            </button>
          </div>
        </div>
        <textarea
          value={meta.dotcomInsight}
          onChange={e => setMeta(m => ({ ...m, dotcomInsight: e.target.value }))}
          rows={12}
          placeholder="닷컴 Citation 인사이트를 입력하세요... (AI 생성 버튼으로 자동 작성 가능)"
          style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6, marginBottom: 8 }}
        />

        {/* 닷컴 Citation How to Read */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
          <p style={{ margin: 0, fontSize: 11, color: '#64748B', fontFamily: FONT }}>닷컴 Citation How to Read</p>
          <div style={{ display: 'flex', gap: 4 }}>
            <button onClick={() => setMeta(m => ({ ...m, dotcomHowToRead: generateDotcomHowToRead() }))}
              title="AI 인사이트 자동생성"
              style={{ padding: '2px 6px', borderRadius: 4, border: 'none', cursor: 'pointer',
                background: '#4F46E5', color: '#FFFFFF',
                fontSize: 11, fontWeight: 700, fontFamily: FONT, display: 'flex', alignItems: 'center', gap: 3 }}>
              <Sparkles size={9} /> AI 생성
            </button>
            <button onClick={() => setMeta(m => ({ ...m, showDotcomHowToRead: !m.showDotcomHowToRead }))}
              style={{ padding: '2px 8px', borderRadius: 4, border: 'none', cursor: 'pointer',
                background: meta.showDotcomHowToRead ? LG_RED : '#1E293B',
                color: meta.showDotcomHowToRead ? '#FFFFFF' : '#475569',
                fontSize: 11, fontWeight: 700, fontFamily: FONT }}>
              {meta.showDotcomHowToRead ? 'ON' : 'OFF'}
            </button>
          </div>
        </div>
        <textarea
          value={meta.dotcomHowToRead}
          onChange={e => setMeta(m => ({ ...m, dotcomHowToRead: e.target.value }))}
          rows={4}
          placeholder="닷컴 Citation How to Read 설명을 입력하세요... (AI 생성 버튼으로 자동 작성 가능)"
          style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6, marginBottom: 16 }}
        />

        {/* Action Plan 섹션 */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
          <p style={{ margin: 0, fontSize: 11, color: '#64748B', fontFamily: FONT }}>Action Plan 섹션</p>
          <button onClick={() => setMeta(m => ({ ...m, showTodo: !m.showTodo }))}
            style={{ padding: '2px 8px', borderRadius: 4, border: 'none', cursor: 'pointer',
              background: meta.showTodo ? LG_RED : '#1E293B',
              color: meta.showTodo ? '#FFFFFF' : '#475569',
              fontSize: 11, fontWeight: 700, fontFamily: FONT }}>
            {meta.showTodo ? 'ON' : 'OFF'}
          </button>
        </div>
        <textarea
          value={meta.todoText}
          onChange={e => setMeta(m => ({ ...m, todoText: e.target.value }))}
          rows={12}
          placeholder="Action Plan을 입력하세요...&#10;예: - Citation Optimization 전략 수립&#10;- 구조화 데이터 업데이트"
          style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6, marginBottom: 4 }}
        />
        <p style={{ margin: '0 0 16px', fontSize: 11, color: '#475569', fontFamily: FONT }}>**텍스트** → <strong>볼드</strong> · 줄바꿈 지원</p>

        <div style={{ height: 1, background: '#1E293B', marginBottom: 16 }} />

        {/* AI 번역 */}
        <button onClick={handleTranslate} disabled={translating} style={{
          width: '100%', padding: '9px 0', background: translating ? '#1E293B' : '#4F46E5', border: '1px solid #6366F133',
          borderRadius: 8, fontSize: 11, fontWeight: 700, color: '#E0E7FF', fontFamily: FONT,
          cursor: translating ? 'wait' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5, marginBottom: 12,
          opacity: translating ? 0.6 : 1,
        }}>
          <Languages size={13} /> {translating ? '번역 중...' : 'AI 번역 (EN)'}
        </button>

        {/* 번역 확인 팝업 */}
        {showTranslatePopup && (
          <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', zIndex: 9999,
            display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ background: '#1E293B', border: '1px solid #334155', borderRadius: 14,
              padding: '24px 28px', maxWidth: 380, width: '90%', boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}>
              <p style={{ margin: '0 0 6px', fontSize: 15, fontWeight: 700, color: '#FFFFFF', fontFamily: FONT }}>
                AI 번역 확인
              </p>
              <p style={{ margin: '0 0 20px', fontSize: 12, color: '#94A3B8', lineHeight: 1.6, fontFamily: FONT }}>
                좌측 패널의 모든 텍스트를 영어로 번역하고,<br/>
                영어 버전 스냅샷을 자동 저장합니다.<br/>
                진행하시겠습니까?
              </p>
              <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
                <button onClick={() => setShowTranslatePopup(false)} style={{
                  padding: '8px 20px', borderRadius: 8, border: '1px solid #334155', background: 'transparent',
                  color: '#94A3B8', fontSize: 12, fontWeight: 600, fontFamily: FONT, cursor: 'pointer' }}>
                  아니오
                </button>
                <button onClick={executeTranslate} style={{
                  padding: '8px 20px', borderRadius: 8, border: 'none', background: '#4F46E5',
                  color: '#FFFFFF', fontSize: 12, fontWeight: 700, fontFamily: FONT, cursor: 'pointer' }}>
                  예, 번역하기
                </button>
              </div>
            </div>
          </div>
        )}

        <div style={{ height: 1, background: '#1E293B', marginBottom: 16 }} />

        {/* 데이터 연동 */}
        <p style={{ margin: '0 0 10px 2px', fontSize: 11, fontWeight: 700, color: '#475569',
          textTransform: 'uppercase', letterSpacing: 1, fontFamily: FONT }}>
          데이터 연동
        </p>

        {/* 템플릿 다운로드 */}
        <button onClick={handleDownload} style={{
          width: '100%', padding: '9px 0', background: '#166534', border: '1px solid #22C55E33',
          borderRadius: 8, fontSize: 11, fontWeight: 700, color: '#86EFAC', fontFamily: FONT,
          cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5, marginBottom: 12,
        }}>
          <Download size={12} /> 구글 시트 템플릿 다운로드
        </button>

        {/* 사용 방법 */}
        <div style={{ background: '#1E293B', borderRadius: 8, padding: '10px 12px', marginBottom: 12 }}>
          <p style={{ margin: '0 0 6px', fontSize: 11, fontWeight: 700, color: '#64748B', fontFamily: FONT,
            textTransform: 'uppercase', letterSpacing: 0.8 }}>연동 방법</p>
          <p style={{ margin: 0, fontSize: 11, color: '#475569', fontFamily: FONT, lineHeight: 1.8 }}>
            ① 템플릿 다운로드 (.xlsx)<br />
            ② Google Sheets → 파일 → 가져오기<br />
            ③ 공유 → <span style={{ color: '#94A3B8' }}>링크가 있는 모든 사용자 (뷰어)</span><br />
            ④ URL 붙여넣기 후 동기화
          </p>
        </div>

        {/* ── 구글 시트 내보내기 ── */}
        <div style={{ height: 1, background: '#1E293B', margin: '16px 0' }} />
        <p style={{ margin: '0 0 10px 2px', fontSize: 11, fontWeight: 700, color: '#475569',
          textTransform: 'uppercase', letterSpacing: 1, fontFamily: FONT }}>
          구글 시트 내보내기
        </p>

        <p style={{ margin: '0 0 4px', fontSize: 11, color: '#475569', fontFamily: FONT }}>Apps Script 웹앱 URL</p>
        <input
          value={scriptUrl}
          onChange={e => setScriptUrl(e.target.value)}
          placeholder="https://script.google.com/macros/s/.../exec"
          style={{ ...inputStyle, fontSize: 11, padding: '7px 9px', marginBottom: 8 }}
        />

        <button onClick={handleExportMeta} disabled={exporting || !scriptUrl.trim()} style={{
          width: '100%', padding: '9px 0', borderRadius: 8, border: 'none',
          cursor: (exporting || !scriptUrl.trim()) ? 'not-allowed' : 'pointer',
          background: exporting ? '#1E293B' : !scriptUrl.trim() ? '#1E293B' : '#1D4ED8',
          color: exporting ? '#94A3B8' : !scriptUrl.trim() ? '#334155' : '#FFFFFF',
          fontSize: 11, fontWeight: 700, fontFamily: FONT,
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5,
          marginBottom: 8, transition: 'all 0.2s',
        }}>
          <RefreshCw size={12} style={{ animation: exporting ? 'spin 1s linear infinite' : 'none' }} />
          {exporting ? '내보내는 중...' : 'MetaData 내보내기'}
        </button>

        {exportMsg && (
          <div style={{
            padding: '8px 10px', borderRadius: 7, fontSize: 11, fontFamily: FONT, lineHeight: 1.6,
            background: exportMsg.startsWith('✓') ? '#14532D' : '#450A0A',
            color: exportMsg.startsWith('✓') ? '#86EFAC' : '#FCA5A5',
            border: `1px solid ${exportMsg.startsWith('✓') ? '#22C55E33' : '#EF444433'}`,
            marginBottom: 8,
          }}>
            {exportMsg}
          </div>
        )}

        {/* Apps Script 설정 안내 */}
        <div style={{ background: '#1E293B', borderRadius: 8, padding: '10px 12px', marginBottom: 8 }}>
          <p style={{ margin: '0 0 6px', fontSize: 11, fontWeight: 700, color: '#64748B', fontFamily: FONT,
            textTransform: 'uppercase', letterSpacing: 0.8 }}>Apps Script 설정</p>
          <p style={{ margin: 0, fontSize: 11, color: '#475569', fontFamily: FONT, lineHeight: 1.8 }}>
            ① Google Sheets → 확장 프로그램 → Apps Script<br />
            ② 코드 붙여넣기 후 배포 → 웹 앱<br />
            ③ 액세스: <span style={{ color: '#94A3B8' }}>모든 사용자</span><br />
            ④ 배포 URL 붙여넣기
          </p>
        </div>

        <div style={{ height: 1, background: '#1E293B', margin: '16px 0' }} />

        {/* 출력 */}
        <p style={{ margin: '0 0 10px 2px', fontSize: 11, fontWeight: 700, color: '#475569',
          textTransform: 'uppercase', letterSpacing: 1, fontFamily: FONT }}>
          출력
        </p>

        {/* 웹 게시 (KO+EN 동시) */}
        <button onClick={handlePublish} disabled={publishing} style={{
          width: '100%', padding: '9px 0',
          background: publishing ? '#1E293B' : '#7C3AED',
          border: 'none', borderRadius: 8, fontSize: 11, fontWeight: 700,
          color: publishing ? '#94A3B8' : '#FFFFFF',
          fontFamily: FONT, cursor: publishing ? 'wait' : 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5,
          marginBottom: 8, transition: 'all 0.2s',
        }}>
          <Globe size={12} />
          {publishing ? '게시 중...' : '웹사이트 게시 (KO + EN)'}
        </button>

        {publishMsg && (
          <div style={{
            padding: '8px 10px', borderRadius: 7, fontSize: 11, fontFamily: FONT, lineHeight: 1.8,
            background: publishMsg.startsWith('ERROR:') ? '#450A0A' : '#14532D',
            color: publishMsg.startsWith('ERROR:') ? '#FCA5A5' : '#86EFAC',
            border: `1px solid ${publishMsg.startsWith('ERROR:') ? '#EF444433' : '#22C55E33'}`,
            marginBottom: 8, wordBreak: 'break-all', whiteSpace: 'pre-line',
          }}>
            {publishMsg.startsWith('ERROR:') ? publishMsg.slice(6) : (
              <span style={{ display: 'flex', alignItems: 'flex-start', gap: 5 }}>
                <Link2 size={11} style={{ marginTop: 3, flexShrink: 0 }} /> <span>{publishMsg}<br/><span style={{ color: '#64748B' }}>(복사됨)</span></span>
              </span>
            )}
          </div>
        )}

        {/* 게시 상태 */}
        {publishInfo?.published && (
          <div style={{ background: '#1E293B', borderRadius: 8, padding: '8px 10px', marginBottom: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
              <span style={{ fontSize: 10, fontWeight: 700, color: '#64748B', fontFamily: FONT, textTransform: 'uppercase', letterSpacing: 0.8 }}>게시 중</span>
              <button onClick={handleUnpublish} style={{ padding: '2px 8px', borderRadius: 4, border: 'none', cursor: 'pointer',
                background: '#7F1D1D', color: '#FCA5A5', fontSize: 10, fontFamily: FONT, fontWeight: 600 }}>삭제</button>
            </div>
            {[{ label: 'KO', url: publishInfo.urls.ko }, { label: 'EN', url: publishInfo.urls.en }].map(({ label, url }) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 3 }}>
                <a href={url} target="_blank" rel="noopener noreferrer"
                  style={{ flex: 1, fontSize: 11, color: '#A78BFA', fontFamily: FONT, textDecoration: 'none', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {label}: {url}
                </a>
                <button onClick={() => navigator.clipboard.writeText(`${window.location.origin}${url}`)} title="URL 복사"
                  style={{ padding: '2px 5px', borderRadius: 4, border: 'none', cursor: 'pointer', background: '#334155', color: '#94A3B8', fontSize: 10, display: 'flex' }}>
                  <Link2 size={10} />
                </button>
              </div>
            ))}
            <span style={{ fontSize: 10, color: '#475569', fontFamily: FONT }}>
              {publishInfo.ts ? new Date(publishInfo.ts).toLocaleString('ko-KR') : ''}
            </span>
          </div>
        )}

        {/* HTML 복사 */}
        <button onClick={handleCopyHtml} style={{
          width: '100%', padding: '9px 0', background: copied ? '#14532D' : 'transparent',
          border: `1px solid ${copied ? '#22C55E44' : '#334155'}`,
          borderRadius: 8, fontSize: 11, fontWeight: 600,
          color: copied ? '#86EFAC' : '#64748B',
          fontFamily: FONT, cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5,
          transition: 'all 0.2s', marginBottom: 12,
        }}>
          {copied ? <><Check size={12} /> 복사됨!</> : <><Copy size={12} /> 이메일 HTML 복사</>}
        </button>

        {/* 메일 발송 */}
        <p style={{ margin: '0 0 4px', fontSize: 11, color: '#64748B', fontFamily: FONT }}>수신 이메일 주소</p>
        <input
          type="email"
          value={toEmail}
          onChange={e => setToEmail(e.target.value)}
          placeholder="recipient@example.com"
          style={{ ...inputStyle, fontSize: 11, marginBottom: 8 }}
        />
        <button
          onClick={handleSendMail}
          disabled={mailSent === 'sending' || !toEmail.trim()}
          style={{
            width: '100%', padding: '9px 0', borderRadius: 8, border: 'none',
            cursor: (mailSent === 'sending' || !toEmail.trim()) ? 'not-allowed' : 'pointer',
            background: mailSent === 'ok' ? '#14532D' : mailSent === 'error' ? '#7F1D1D' : mailSent === 'sending' ? '#1E3A5F' : !toEmail.trim() ? '#1E293B' : '#1D4ED8',
            color: mailSent === 'ok' ? '#86EFAC' : mailSent === 'error' ? '#FCA5A5' : !toEmail.trim() ? '#334155' : '#FFFFFF',
            fontSize: 11, fontWeight: 700, fontFamily: FONT,
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5,
            transition: 'all 0.2s',
          }}>
          {mailSent === 'sending' ? <><RefreshCw size={12} style={{ animation: 'spin 1s linear infinite' }} /> 발송 중...</>
            : mailSent === 'ok' ? <><Check size={12} /> 발송 완료!</>
            : mailSent === 'error' ? <><Send size={12} /> 발송 실패 — 다시 시도</>
            : <><Send size={12} /> 메일 발송</>}
        </button>
      </div>

      {/* 폰트 안내 */}
      <div style={{ padding: '10px 14px', borderTop: '1px solid #1E293B' }}>
        <p style={{ margin: 0, fontSize: 11, color: '#1E293B', fontFamily: FONT, lineHeight: 1.6 }}>
          LG 스마트체 · Arial Narrow
        </p>
      </div>
    </div>
  )
}
