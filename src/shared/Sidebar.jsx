import React, { useState, useEffect } from 'react'
import { Copy, Download, RefreshCw, Check, Send, Sparkles, Languages, Globe, Link2, Archive } from 'lucide-react'
import { downloadTemplate } from '../excelUtils'
import { extractSheetId, syncFromGoogleSheets } from '../googleSheetsUtils'
import { LG_RED, FONT } from './constants.js'
import { inputStyle } from './components.jsx'
import { resolveDataForLang, translateTexts } from './utils.js'
import { saveSyncData, fetchSyncData, publishCombinedDashboard, generateAIInsight } from './api.js'
import { generateDashboardHTML } from '../dashboard/dashboardTemplate.js'
import { generateProductInsight, generateProductHowToRead, generateCntyHowToRead } from './insights.js'

export default
function Sidebar({ mode, meta, setMeta, metaKo, setMetaKo, metaEn, setMetaEn, total, setTotal, products, setProducts, citations, setCitations, dotcom, setDotcom, productsCnty, setProductsCnty, citationsCnty, setCitationsCnty, resolved, previewLang, setPreviewLang, snapshots, setSnapshots, setWeeklyLabels, setWeeklyAll, weeklyLabels, weeklyAll, citationsByCnty, dotcomByCnty, generateHTML, publishEndpoint, setMonthlyVis, onSyncExtra }) {
  const [gsUrl,     setGsUrl]     = useState('https://docs.google.com/spreadsheets/d/1v4V7ZsHNFXXqbAWqvyVkgNIeXx188hSZ9l7FDsRYy2Y/edit')
  const [gsSyncing, setGsSyncing] = useState(false)
  const [gsStatus,  setGsStatus]  = useState(null)
  const [gsMsg,     setGsMsg]     = useState('')
  const [debugLog,  setDebugLog]  = useState('')
  const [copied,    setCopied]    = useState(false)
  const [toEmail,   setToEmail]   = useState('')
  const [mailSent,  setMailSent]  = useState(false)
  const [showTranslatePopup, setShowTranslatePopup] = useState(false)
  const [translating, setTranslating] = useState(false)
  const [publishing, setPublishing] = useState(false)
  const [publishMsg, setPublishMsg] = useState('')
  const [combPublishing, setCombPublishing] = useState(false)
  const [includeTracker, setIncludeTracker] = useState(false)
  const [combMsg, setCombMsg] = useState('')

  // 게시 상태 로드
  const [publishInfo, setPublishInfo] = useState(null)
  useEffect(() => {
    const ep = publishEndpoint || (mode === 'dashboard' ? '/api/publish-dashboard' : '/api/publish')
    fetch(ep).then(r => r.ok ? r.json() : null).then(setPublishInfo).catch(() => {})
  }, [mode, publishEndpoint])

  async function handlePublish() {
    if (publishing) return
    setPublishing(true); setPublishMsg('')
    try {
      const resolvedKo = resolveDataForLang(products, productsCnty, citations, citationsCnty, 'ko')
      const resolvedEn = resolveDataForLang(products, productsCnty, citations, citationsCnty, 'en')
      let htmlKo, htmlEn, title
      if (mode === 'dashboard') {
        htmlKo = generateHTML(metaKo, total, resolvedKo.products, resolvedKo.citations, dotcom, 'ko', resolvedKo.productsCnty, resolvedKo.citationsCnty, weeklyLabels, weeklyAll, citationsByCnty, dotcomByCnty)
        htmlEn = generateHTML(metaEn, total, resolvedEn.products, resolvedEn.citations, dotcom, 'en', resolvedEn.productsCnty, resolvedEn.citationsCnty, weeklyLabels, weeklyAll, citationsByCnty, dotcomByCnty)
        title = `${metaKo.period || ''} ${metaKo.title || 'KPI Dashboard'}`.trim()
      } else {
        htmlKo = generateHTML(metaKo, total, resolvedKo.products, resolvedKo.citations, dotcom, 'ko', resolvedKo.productsCnty, resolvedKo.citationsCnty)
        htmlEn = generateHTML(metaEn, total, resolvedEn.products, resolvedEn.citations, dotcom, 'en', resolvedEn.productsCnty, resolvedEn.citationsCnty)
        title = `${metaKo.period || ''} ${metaKo.title || 'Newsletter'}`.trim()
      }
      const ep = publishEndpoint || (mode === 'dashboard' ? '/api/publish-dashboard' : '/api/publish')
      const res = await fetch(ep, {
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
      setPublishMsg('ERROR:' + err.message)
    } finally {
      setPublishing(false)
      setTimeout(() => setPublishMsg(''), 20000)
    }
  }

  async function handleCombinedPublish() {
    if (combPublishing) return
    setCombPublishing(true); setCombMsg('')
    try {
      const result = await publishCombinedDashboard(generateDashboardHTML, resolveDataForLang, { includeProgressTracker: includeTracker })
      setCombMsg(`통합 게시 완료!\nKO: ${window.location.origin}${result.urls.ko}\nEN: ${window.location.origin}${result.urls.en}`)
    } catch (err) {
      setCombMsg('ERROR: ' + err.message)
    } finally {
      setCombPublishing(false)
      setTimeout(() => setCombMsg(''), 15000)
    }
  }

  async function handleUnpublish() {
    try {
      const ep = publishEndpoint || (mode === 'dashboard' ? '/api/publish-dashboard' : '/api/publish')
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

      const tr = await translateTexts(allTexts, { from: 'ko', to: 'en' })
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
        period: (idx++, src.period),
        team: tr[idx++] || src.team,
        reportNo: (idx++, src.reportNo),
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

      // 국가별 매핑 — 2~3자리 대문자 코드(US, VN, TTL 등)는 번역하지 않음
      const countryMap = {}
      cntyCountries.forEach((v, i) => {
        countryMap[v] = /^[A-Z]{2,3}$/.test(v) ? v : (tr[idx + i] || v)
      })
      idx += cntyCountries.length
      const cntyProductMap = {}
      cntyProducts.forEach((v, i) => { cntyProductMap[v] = tr[idx + i] || v })
      idx += cntyProducts.length
      const cntyCompMap = {}
      cntyCompNames.forEach((v, i) => { cntyCompMap[v] = tr[idx + i] || v })
      idx += cntyCompNames.length
      const citCntyMap = {}
      citCntyNames.forEach((v, i) => {
        citCntyMap[v] = /^[A-Z]{2,3}$/.test(v) ? v : (tr[idx + i] || v)
      })

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
        headers: { 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest' },
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
    setGsSyncing(true); setGsStatus(null); setGsMsg(''); setDebugLog('')
    const _log = []
    try {
      const parsed = await syncFromGoogleSheets(sheetId, msg => setGsMsg(msg))
      _log.push(`[Sync] parsed keys: ${Object.keys(parsed).join(', ') || '(없음)'}`)
      if (parsed.meta) _log.push(`[Sync] meta keys: ${Object.keys(parsed.meta).join(', ')}`)
      if (parsed.productsPartial) _log.push(`[Sync] products: ${parsed.productsPartial.length}건`)
      _log.push(`[Sync] citations: ${parsed.citations?.length ?? 0}건`)
      _log.push(`[Sync] citationsCnty: ${parsed.citationsCnty?.length ?? 0}건`)
      _log.push(`[Sync] dotcom: ${parsed.dotcom ? 'OK' : '(없음)'}`)
      _log.push(`[Sync] productsCnty: ${parsed.productsCnty?.length ?? 0}건`)
      if (parsed.meta) {
        // 텍스트 칸: 기존 값이 있으면 덮어쓰지 않음 (빈 값인 경우에만 적용)
        const textKeys = ['totalInsight','productInsight','productHowToRead','citationInsight','citationHowToRead',
          'dotcomInsight','dotcomHowToRead','cntyInsight','cntyHowToRead','citDomainInsight','citDomainHowToRead',
          'citCntyInsight','citCntyHowToRead','noticeText','kpiLogicText','todoText','aiPromptRules']
        setMetaKo(m => {
          const merged = { ...m }
          for (const [k, v] of Object.entries(parsed.meta)) {
            if (textKeys.includes(k)) {
              if (!m[k]) merged[k] = v
            } else {
              merged[k] = v
            }
          }
          return merged
        })
        setMetaEn(m => ({ ...m, period: parsed.meta.period, dateLine: parsed.meta.dateLine, reportNo: parsed.meta.reportNo }))
      }
      if (parsed.citations)    setCitations(parsed.citations)
      if (parsed.dotcom)       setDotcom(d => ({ ...d, ...parsed.dotcom }))
      if (parsed.productsCnty) setProductsCnty(parsed.productsCnty)
      if (parsed.citationsCnty) setCitationsCnty(parsed.citationsCnty)
      if (parsed.monthlyVis && setMonthlyVis) setMonthlyVis(parsed.monthlyVis)
      if (onSyncExtra) onSyncExtra({
        weeklyPR: parsed.weeklyPR || null,
        weeklyPRLabels: parsed.weeklyPRLabels || null,
        weeklyBrandPrompt: parsed.weeklyBrandPrompt || null,
        weeklyBrandPromptLabels: parsed.weeklyBrandPromptLabels || null,
      })
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
          // prev: 시트에 이전 월 데이터가 없으면 weekly 첫 non-null 값으로 폴백
          const firstValid = weekly.find(v => v != null && v > 0)
          const prev = p.prev || firstValid || 0
          const monthly = prev > 0 ? [prev, p.score] : []
          return { ...p, prev, weekly, monthly, compRatio: Math.round(ratio),
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
        setTotal(t => ({
          ...t,
          ...parsed.total,
          ...(parsed.buTotals ? { buTotals: parsed.buTotals } : {}),
          ...(parsed.buTotalsPrev ? { buTotalsPrev: parsed.buTotalsPrev } : {}),
          ...(parsed.countryTotals ? { countryTotals: parsed.countryTotals } : {}),
          ...(parsed.countryTotalsPrev ? { countryTotalsPrev: parsed.countryTotalsPrev } : {}),
        }))
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
          total: parsed.total ? {
            ...parsed.total,
            ...(parsed.buTotals ? { buTotals: parsed.buTotals } : {}),
            ...(parsed.buTotalsPrev ? { buTotalsPrev: parsed.buTotalsPrev } : {}),
            ...(parsed.countryTotals ? { countryTotals: parsed.countryTotals } : {}),
            ...(parsed.countryTotalsPrev ? { countryTotalsPrev: parsed.countryTotalsPrev } : {}),
          } : null,
          productsPartial: parsed.productsPartial || null,
          weeklyMap: parsed.weeklyMap || null,
          weeklyLabels: parsed.weeklyLabels || null,
          weeklyAll: parsed.weeklyAll || null,
          citations: parsed.citations || null,
          dotcom: parsed.dotcom || null,
          productsCnty: parsed.productsCnty || null,
          citationsCnty: parsed.citationsCnty || null,
          citationsByCnty: parsed.citationsByCnty || null,
          dotcomByCnty: parsed.dotcomByCnty || null,
          appendixPrompts: parsed.appendixPrompts || null,
          monthlyVis: parsed.monthlyVis || null,
          weeklyPR: parsed.weeklyPR || null,
          weeklyPRLabels: parsed.weeklyPRLabels || null,
          monthlyPR: parsed.monthlyPR || null,
          monthlyPRLabels: parsed.monthlyPRLabels || null,
          weeklyBrandPrompt: parsed.weeklyBrandPrompt || null,
          weeklyBrandPromptLabels: parsed.weeklyBrandPromptLabels || null,
          monthlyBrandPrompt: parsed.monthlyBrandPrompt || null,
          monthlyBrandPromptLabels: parsed.monthlyBrandPromptLabels || null,
          dotcomTrend: parsed.dotcomTrend || null,
          dotcomTrendMonths: parsed.dotcomTrendMonths || null,
        })
      }, 100)
      setDebugLog(_log.join('\n'))
      setGsStatus('ok'); setGsMsg(mode === 'dashboard' ? '동기화 완료! EN 자동 번역 중...' : '동기화 완료!')
      // Dashboard mode: auto-translate after sync (overrides로 최신 parsed 데이터 전달)
      if (mode === 'dashboard') {
        const overrides = {}
        if (parsed.productsPartial) {
          overrides.products = parsed.productsPartial.map(p => {
            const weekly = parsed.weeklyMap?.[p.id] || []
            const ratio = p.vsComp > 0 ? (p.score / p.vsComp) * 100 : 100
            const firstValid = weekly.find(v => v != null && v > 0)
            const prev = (p.prev != null && p.prev > 0) ? p.prev : (firstValid || 0)
            const monthly = prev > 0 ? [prev, p.score] : []
            return { ...p, prev, weekly, monthly, compRatio: Math.round(ratio),
              status: ratio >= 100 ? 'lead' : ratio >= 80 ? 'behind' : 'critical' }
          })
        }
        if (parsed.productsCnty) overrides.productsCnty = parsed.productsCnty
        if (parsed.citations) overrides.citations = parsed.citations
        if (parsed.citationsCnty) overrides.citationsCnty = parsed.citationsCnty
        try { await executeTranslate(overrides) } catch {}
        setGsMsg('동기화 + 번역 완료!')
      }
    } catch (err) {
      _log.push(`[ERROR] ${err.message}`)
      setGsStatus('error'); setGsMsg(err.message)
      setDebugLog(_log.join('\n'))
    } finally {
      setGsSyncing(false)
      setTimeout(() => { setGsStatus(null); setGsMsg('') }, 4000)
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
                  const btn = document.getElementById('vis-debug-copy-btn')
                  if (btn) { btn.textContent = '복사됨!'; setTimeout(() => { btn.textContent = '로그 복사' }, 1500) }
                })
              }}
              id="vis-debug-copy-btn"
              style={{
                display: 'block', marginTop: 6, padding: '4px 10px', borderRadius: 5,
                border: '1px solid #334155', background: '#1E293B', color: '#94A3B8',
                fontSize: 10, fontWeight: 700, fontFamily: FONT, cursor: 'pointer',
              }}
            >로그 복사</button>
          </div>
        )}

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

        {/* 구글 시트 템플릿 다운로드 */}
        <button onClick={handleDownload} style={{
          width: '100%', padding: '9px 0', background: '#166534', border: '1px solid #22C55E33',
          borderRadius: 8, fontSize: 11, fontWeight: 700, color: '#86EFAC', fontFamily: FONT,
          cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5, marginBottom: 12,
        }}>
          <Download size={12} /> 구글 시트 템플릿 다운로드
        </button>

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

        {mode === 'dashboard' && (
          <>
            <label style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6, fontSize: 11, color: '#94A3B8', fontFamily: FONT, cursor: 'pointer' }}>
              <input type="checkbox" checked={includeTracker} onChange={e => setIncludeTracker(e.target.checked)} style={{ cursor: 'pointer' }} />
              Progress Tracker 포함 (체크 안하면 Coming Soon으로 표시)
            </label>
            <button onClick={handleCombinedPublish} disabled={combPublishing} style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, width: '100%',
              padding: '8px 12px', borderRadius: 8, border: 'none',
              background: combPublishing ? '#1E293B' : '#166534',
              color: combPublishing ? '#94A3B8' : '#86EFAC',
              fontSize: 11, fontWeight: 700,
              fontFamily: FONT, cursor: combPublishing ? 'wait' : 'pointer',
              marginBottom: 6,
            }}>
              <Globe size={12} />
              {combPublishing ? '통합 게시 중...' : '통합 대시보드 게시'}
            </button>
            {combMsg && (
              <div style={{
                padding: '8px 10px', borderRadius: 7, fontSize: 11, fontFamily: FONT, lineHeight: 1.8,
                background: combMsg.startsWith('ERROR') ? '#450A0A' : '#14532D',
                color: combMsg.startsWith('ERROR') ? '#FCA5A5' : '#86EFAC',
                marginBottom: 8, wordBreak: 'break-all', whiteSpace: 'pre-line',
              }}>{combMsg.startsWith('ERROR:') ? combMsg.slice(6) : combMsg}</div>
            )}
          </>
        )}

        {/* 아카이빙 (AI 학습 데이터) */}
        <button onClick={async () => {
          const insights = {
            totalInsight: meta.totalInsight || '', productInsight: meta.productInsight || '',
            productHowToRead: meta.productHowToRead || '', cntyInsight: meta.cntyInsight || '',
            cntyHowToRead: meta.cntyHowToRead || '', citationInsight: meta.citationInsight || '',
            citationHowToRead: meta.citationHowToRead || '', citDomainInsight: meta.citDomainInsight || '',
            citDomainHowToRead: meta.citDomainHowToRead || '', citCntyInsight: meta.citCntyInsight || '',
            citCntyHowToRead: meta.citCntyHowToRead || '', dotcomInsight: meta.dotcomInsight || '',
            dotcomHowToRead: meta.dotcomHowToRead || '', todoText: meta.todoText || '',
            noticeText: meta.noticeText || '', kpiLogicText: meta.kpiLogicText || '',
          }
          const hasContent = Object.values(insights).some(v => v.trim())
          if (!hasContent) { alert('아카이빙할 인사이트 콘텐츠가 없습니다.'); return }
          if (!confirm(`"${meta.period || '현재'}" 리포트를 AI 학습 데이터로 아카이빙하시겠습니까?`)) return
          try {
            const r = await fetch('/api/archives', {
              method: 'POST', headers: { 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest' },
              body: JSON.stringify({ period: meta.period || 'Unknown', insights }),
            })
            const j = await r.json()
            if (j.ok) alert('아카이빙 완료! AI 생성 시 학습 데이터로 활용됩니다.')
            else alert('아카이빙 실패: ' + (j.error || ''))
          } catch (err) { alert('아카이빙 실패: ' + err.message) }
        }} style={{
          width: '100%', padding: '9px 0',
          background: 'transparent', border: '1px solid #334155', borderRadius: 8,
          fontSize: 11, fontWeight: 700, color: '#94A3B8',
          fontFamily: FONT, cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5,
          marginBottom: 8,
        }}>
          <Archive size={12} /> 완성본 아카이빙 (AI 학습)
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

        {/* ── 콘텐츠 편집 ── */}
        <p style={{ margin: '0 0 10px 2px', fontSize: 11, fontWeight: 700, color: '#475569',
          textTransform: 'uppercase', letterSpacing: 1, fontFamily: FONT }}>
          콘텐츠 편집
        </p>

        {/* GEO 전략 인사이트 */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
          <p style={{ margin: 0, fontSize: 11, color: '#64748B', fontFamily: FONT }}>GEO 전략 인사이트</p>
          <button onClick={async () => {
              try {
                setMeta(m => ({ ...m, totalInsight: '⏳ AI 생성 중...' }))
                const insight = await generateAIInsight('totalInsight', { products: resolved.products, total, todoText: meta.todoText || '' }, previewLang)
                setMeta(m => ({ ...m, totalInsight: insight }))
              } catch (err) { console.error('[AI]', err); setMeta(m => ({ ...m, totalInsight: `[AI 실패: ${err.message}]` })) }
            }}
            style={{ padding: '2px 6px', borderRadius: 4, border: 'none', cursor: 'pointer',
              background: '#4F46E5', color: '#FFFFFF',
              fontSize: 11, fontWeight: 700, fontFamily: FONT, display: 'flex', alignItems: 'center', gap: 3 }}>
            <Sparkles size={9} /> AI 생성
          </button>
        </div>
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
            <button onClick={async () => {
                try {
                  setMeta(m => ({ ...m, productInsight: '⏳ AI 생성 중...' }))
                  const insight = await generateAIInsight('product', { products: resolved.products, total }, previewLang)
                  setMeta(m => ({ ...m, productInsight: insight }))
                } catch (err) { console.error('[AI]', err); setMeta(m => ({ ...m, productInsight: `[AI 실패: ${err.message}]\n\n` + generateProductInsight(resolved.products) })) }
              }}
              title="AI 인사이트 자동생성 (Claude)"
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
            <button onClick={async () => {
                try {
                  setMeta(m => ({ ...m, productHowToRead: '⏳ AI 생성 중...' }))
                  const insight = await generateAIInsight('howToRead', { section: '제품별 GEO Visibility' }, previewLang)
                  setMeta(m => ({ ...m, productHowToRead: insight }))
                } catch { setMeta(m => ({ ...m, productHowToRead: generateProductHowToRead() })) }
              }}
              title="AI How to Read 자동생성"
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
          <div style={{ display: 'flex', gap: 4 }}>
            <button onClick={async () => {
                try {
                  setMeta(m => ({ ...m, cntyInsight: '⏳ AI 생성 중...' }))
                  const insight = await generateAIInsight('cnty', { productsCnty: resolved.productsCnty }, previewLang)
                  setMeta(m => ({ ...m, cntyInsight: insight }))
                } catch (err) { console.error('[AI]', err); setMeta(m => ({ ...m, cntyInsight: `[AI 실패: ${err.message}]` })) }
              }}
              style={{ padding: '2px 6px', borderRadius: 4, border: 'none', cursor: 'pointer',
                background: '#4F46E5', color: '#FFFFFF',
                fontSize: 11, fontWeight: 700, fontFamily: FONT, display: 'flex', alignItems: 'center', gap: 3 }}>
              <Sparkles size={9} /> AI 생성
            </button>
            <button onClick={() => setMeta(m => ({ ...m, showCntyInsight: !m.showCntyInsight }))}
              style={{ padding: '2px 8px', borderRadius: 4, border: 'none', cursor: 'pointer',
                background: meta.showCntyInsight ? LG_RED : '#1E293B',
                color: meta.showCntyInsight ? '#FFFFFF' : '#475569',
                fontSize: 11, fontWeight: 700, fontFamily: FONT }}>
              {meta.showCntyInsight ? 'ON' : 'OFF'}
            </button>
          </div>
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
            <button onClick={async () => {
                try {
                  setMeta(m => ({ ...m, cntyHowToRead: '⏳ AI 생성 중...' }))
                  const insight = await generateAIInsight('howToRead', { section: '국가별 GEO Visibility' }, previewLang)
                  setMeta(m => ({ ...m, cntyHowToRead: insight }))
                } catch { setMeta(m => ({ ...m, cntyHowToRead: generateCntyHowToRead() })) }
              }}
              title="AI How to Read 자동생성"
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

        {/* ── Citation 인사이트 ── */}
        <div style={{ height: 1, background: '#1E293B', margin: '12px 0' }} />

        {/* 도메인 카테고리별 Citation 인사이트 */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
          <p style={{ margin: 0, fontSize: 11, color: '#64748B', fontFamily: FONT }}>Citation 카테고리 인사이트</p>
          <div style={{ display: 'flex', gap: 4 }}>
            <button onClick={async () => {
                try {
                  setMeta(m => ({ ...m, citationInsight: '⏳ AI 생성 중...' }))
                  const insight = await generateAIInsight('citation', { citations: resolved.citations }, previewLang)
                  setMeta(m => ({ ...m, citationInsight: insight }))
                } catch (err) { console.error('[AI]', err); setMeta(m => ({ ...m, citationInsight: `[AI 실패: ${err.message}]` })) }
              }}
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
          rows={8}
          placeholder="Citation 카테고리별 인사이트..."
          style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6, marginBottom: 8 }}
        />

        {/* Citation How to Read */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
          <p style={{ margin: 0, fontSize: 11, color: '#64748B', fontFamily: FONT }}>Citation How to Read</p>
          <div style={{ display: 'flex', gap: 4 }}>
            <button onClick={async () => {
                try {
                  setMeta(m => ({ ...m, citationHowToRead: '⏳ AI 생성 중...' }))
                  const insight = await generateAIInsight('howToRead', { section: 'Citation 도메인별 현황' }, previewLang)
                  setMeta(m => ({ ...m, citationHowToRead: insight }))
                } catch { setMeta(m => ({ ...m, citationHowToRead: '' })) }
              }}
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
          placeholder="Citation How to Read..."
          style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6, marginBottom: 8 }}
        />

        {/* 도메인별 Citation 인사이트 */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
          <p style={{ margin: 0, fontSize: 11, color: '#64748B', fontFamily: FONT }}>도메인별 Citation 인사이트</p>
          <div style={{ display: 'flex', gap: 4 }}>
            <button onClick={async () => {
                try {
                  setMeta(m => ({ ...m, citDomainInsight: '⏳ AI 생성 중...' }))
                  const insight = await generateAIInsight('citDomain', { citationsCnty: resolved.citationsCnty }, previewLang)
                  setMeta(m => ({ ...m, citDomainInsight: insight }))
                } catch (err) { console.error('[AI]', err); setMeta(m => ({ ...m, citDomainInsight: `[AI 실패: ${err.message}]` })) }
              }}
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
          placeholder="도메인별 Citation 인사이트..."
          style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6, marginBottom: 8 }}
        />

        {/* 도메인별 How to Read */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
          <p style={{ margin: 0, fontSize: 11, color: '#64748B', fontFamily: FONT }}>도메인별 How to Read</p>
          <div style={{ display: 'flex', gap: 4 }}>
            <button onClick={async () => {
                try {
                  setMeta(m => ({ ...m, citDomainHowToRead: '⏳ AI 생성 중...' }))
                  const insight = await generateAIInsight('howToRead', { section: '도메인별 Citation 현황' }, previewLang)
                  setMeta(m => ({ ...m, citDomainHowToRead: insight }))
                } catch { setMeta(m => ({ ...m, citDomainHowToRead: '' })) }
              }}
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
          placeholder="도메인별 How to Read..."
          style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6, marginBottom: 8 }}
        />

        {/* 국가별 Citation 인사이트 */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
          <p style={{ margin: 0, fontSize: 11, color: '#64748B', fontFamily: FONT }}>국가별 Citation 인사이트</p>
          <div style={{ display: 'flex', gap: 4 }}>
            <button onClick={async () => {
                try {
                  setMeta(m => ({ ...m, citCntyInsight: '⏳ AI 생성 중...' }))
                  const insight = await generateAIInsight('citCnty', { citationsCnty: resolved.citationsCnty }, previewLang)
                  setMeta(m => ({ ...m, citCntyInsight: insight }))
                } catch (err) { console.error('[AI]', err); setMeta(m => ({ ...m, citCntyInsight: `[AI 실패: ${err.message}]` })) }
              }}
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
          placeholder="국가별 Citation 인사이트..."
          style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6, marginBottom: 8 }}
        />

        {/* 국가별 Citation How to Read */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
          <p style={{ margin: 0, fontSize: 11, color: '#64748B', fontFamily: FONT }}>국가별 Citation How to Read</p>
          <div style={{ display: 'flex', gap: 4 }}>
            <button onClick={async () => {
                try {
                  setMeta(m => ({ ...m, citCntyHowToRead: '⏳ AI 생성 중...' }))
                  const insight = await generateAIInsight('howToRead', { section: '국가별 Citation 도메인' }, previewLang)
                  setMeta(m => ({ ...m, citCntyHowToRead: insight }))
                } catch { setMeta(m => ({ ...m, citCntyHowToRead: '' })) }
              }}
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
          placeholder="국가별 Citation How to Read..."
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

        {/* 닷컴 Citation 인사이트 */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
          <p style={{ margin: 0, fontSize: 11, color: '#64748B', fontFamily: FONT }}>닷컴 Citation 인사이트</p>
          <div style={{ display: 'flex', gap: 4 }}>
            <button onClick={async () => {
                try {
                  setMeta(m => ({ ...m, dotcomInsight: '⏳ AI 생성 중...' }))
                  const insight = await generateAIInsight('dotcom', { dotcom }, previewLang)
                  setMeta(m => ({ ...m, dotcomInsight: insight }))
                } catch (err) { console.error('[AI]', err); setMeta(m => ({ ...m, dotcomInsight: `[AI 실패: ${err.message}]` })) }
              }}
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
          rows={8}
          placeholder="닷컴 Citation 인사이트를 입력하세요..."
          style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6, marginBottom: 8 }}
        />

        {/* 닷컴 How to Read */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
          <p style={{ margin: 0, fontSize: 11, color: '#64748B', fontFamily: FONT }}>닷컴 How to Read</p>
          <div style={{ display: 'flex', gap: 4 }}>
            <button onClick={async () => {
                try {
                  setMeta(m => ({ ...m, dotcomHowToRead: '⏳ AI 생성 중...' }))
                  const insight = await generateAIInsight('howToRead', { section: '닷컴 Citation' }, previewLang)
                  setMeta(m => ({ ...m, dotcomHowToRead: insight }))
                } catch (err) { setMeta(m => ({ ...m, dotcomHowToRead: '' })) }
              }}
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
          placeholder="닷컴 How to Read 설명을 입력하세요..."
          style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6, marginBottom: 8 }}
        />

        {/* Action Plan 섹션 */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
          <p style={{ margin: 0, fontSize: 11, color: '#64748B', fontFamily: FONT }}>Action Plan 섹션</p>
          <div style={{ display: 'flex', gap: 4 }}>
            <button onClick={async () => {
                try {
                  setMeta(m => ({ ...m, todoText: '⏳ AI 생성 중...' }))
                  const insight = await generateAIInsight('todo', { products: resolved.products }, previewLang)
                  setMeta(m => ({ ...m, todoText: insight }))
                } catch (err) { console.error('[AI]', err); setMeta(m => ({ ...m, todoText: `[AI 실패: ${err.message}]` })) }
              }}
              style={{ padding: '2px 6px', borderRadius: 4, border: 'none', cursor: 'pointer',
                background: '#4F46E5', color: '#FFFFFF',
                fontSize: 11, fontWeight: 700, fontFamily: FONT, display: 'flex', alignItems: 'center', gap: 3 }}>
              <Sparkles size={9} /> AI 생성
            </button>
            <button onClick={() => setMeta(m => ({ ...m, showTodo: !m.showTodo }))}
              style={{ padding: '2px 8px', borderRadius: 4, border: 'none', cursor: 'pointer',
                background: meta.showTodo ? LG_RED : '#1E293B',
                color: meta.showTodo ? '#FFFFFF' : '#475569',
                fontSize: 11, fontWeight: 700, fontFamily: FONT }}>
              {meta.showTodo ? 'ON' : 'OFF'}
            </button>
          </div>
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
