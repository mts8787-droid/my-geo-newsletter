// ─── GEO KPI 대시보드 — 독립 시각화 (이메일 템플릿 미사용) ─────────────────────
import { buildDashboardStyles } from './dashboardStyles.js'
import {
  FONT, RED, COMP, T,
  BRAND_COLORS, FALLBACK_COLORS, COUNTRY_FULL_NAME,
  REGIONS, ALL_10_COUNTRIES,
  UL_PROD_MAP, DC_COLS, DC_SAM, TREND_BRAND_COL,
} from './dashboardConsts.js'
// N1 — 순수 함수 분리 (테스트 대상)
import { statusInfo, fmt, mdBold, stripDomain, cntyStatus, cntyFullName, cntyOfficial } from './dashboardFormat.js'
import { svgLine, svgMultiLine, brandColor } from './dashboardSvg.js'
// C12 step3 — 인라인 클라이언트 스크립트 분리 (1,186줄)
import { buildDashboardClientScript } from './dashboardClient.js'

// SVG 차트(svgLine·svgMultiLine·brandColor) → ./dashboardSvg.js
// 포맷 헬퍼(statusInfo·fmt·mdBold·stripDomain·cntyStatus·cntyFullName) → ./dashboardFormat.js
// 인라인 클라이언트 JS(switchTab·filterTrend·_buildHero 등) → ./dashboardClient.js

// ─── 베이스라인 리셋 제품 ──────────────────────────────────────────────────────
// 오디오: W13/Apr (boundary W12→W13 회색 연결)
// RAC/Aircare: W16 (boundary W15→W16 끊김)
// 이전 기간 데이터는 그래프에서 회색 페이드, MoM 표기 숨김
const BASELINE_RESET_PRODUCTS = ['audio', 'rac', 'aircare']
function isBaselineResetProduct(prodOrId) {
  const id = typeof prodOrId === 'string' ? prodOrId : (prodOrId?.id || prodOrId?.category || '')
  return BASELINE_RESET_PRODUCTS.includes(String(id).toLowerCase())
}
function _baselineWeekFor(prodOrId) {
  const id = String(typeof prodOrId === 'string' ? prodOrId : (prodOrId?.id || prodOrId?.category || '')).toLowerCase()
  if (id === 'audio') return 13
  if (id === 'rac' || id === 'aircare') return 16
  return 0
}
function baselineIdxFor(prodOrId, labels) {
  if (!isBaselineResetProduct(prodOrId) || !labels) return -1
  const wk = _baselineWeekFor(prodOrId)
  if (wk > 0) {
    const wkIdx = labels.findIndex(l => {
      const m = String(l || '').trim().match(/^W?(\d+)$/i)
      return m && parseInt(m[1], 10) === wk
    })
    if (wkIdx >= 0) return wkIdx
  }
  // 월간 라벨 — 모두 Apr 기준 (월간 베이스라인은 단순화)
  return labels.findIndex(l => {
    const s = String(l || '').trim()
    return /^Apr(il)?$/i.test(s) || s === '4월'
  })
}
function shouldBridgeBaseline(prodOrId) {
  const id = String(typeof prodOrId === 'string' ? prodOrId : (prodOrId?.id || prodOrId?.category || '')).toLowerCase()
  return id === 'audio'  // 오디오만 boundary 회색 연결 (RAC/Aircare 는 끊김)
}
// ─── Baseline 재조정 각주 (4월) ──────────────────────────────────────────────
const BASELINE_NOTES = {
  ko: {
    title: '*Baseline 재조정 (4월)',
    audio: '-Audio : 오디오 신제품 Sound Suite의 브랜드 전략 및 핵심 경쟁력 고려하여 기존 DAFC 토픽 외 Speaker Set, Spatial Sound, Connectivity 등 고객들이 주로 질문할 주요 USP 관점의 프롬프트 추가함',
    racair: '-RAC/Aircare : 사업 중요도에 따라서 국가별 Prompt를 재분배 함(브라질, 멕시코, 베트남, 인도 확대 / 미국, 영국, 독일, 호주 축소). 제조사 브랜드가 노출되지 않는 Prompt를 중심으로 삭제 함 (브랜드 노출수 Avg 0.2개 Prompt)',
  },
  en: {
    title: '*Baseline reset (April)',
    audio: '-Audio: Considering the brand strategy and core competitiveness of the new Sound Suite, added prompts from key USP perspectives (Speaker Set, Spatial Sound, Connectivity, etc.) frequently asked by customers, beyond existing DAFC topics',
    racair: '-RAC/Aircare: Redistributed prompts by country based on business priority (expanded: Brazil, Mexico, Vietnam, India / reduced: US, UK, Germany, Australia). Removed prompts where manufacturer brand was not exposed (avg 0.2 brand mentions per prompt)',
  },
}
function baselineNoteFullHtml(lang) {
  const n = BASELINE_NOTES[lang] || BASELINE_NOTES.ko
  return `<p style="margin:8px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:500">${n.title}</p>
<p style="margin:2px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:400">${n.audio}</p>
<p style="margin:2px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:400">${n.racair}</p>`
}
function baselineNotePerProductHtml(prodOrId, lang) {
  const id = String(typeof prodOrId === 'string' ? prodOrId : (prodOrId?.id || prodOrId?.category || '')).toLowerCase()
  const n = BASELINE_NOTES[lang] || BASELINE_NOTES.ko
  if (id === 'audio') return `<p style="margin:6px 0 0;font-size:11px;color:#64748B;line-height:1.5">${n.audio}</p>`
  if (id === 'rac' || id === 'aircare') return `<p style="margin:6px 0 0;font-size:11px;color:#64748B;line-height:1.5">${n.racair}</p>`
  return ''
}

// ─── 경쟁사 트렌드 섹션 ────────────────────────────────────────────────────
function trendDetailHtml(products, weeklyAll, wLabels, t, lang, ulMap, periodTag) {
  if (!weeklyAll || !Object.keys(weeklyAll).length) return ''
  const BU_ORDER = ['MS', 'HS', 'ES']

  const buGroups = BU_ORDER.map(bu => {
    const prods = products.filter(p => p.bu === bu)
    if (!prods.length) return ''
    const rows = prods.map(p => {
      const data = weeklyAll[p.id]?.['Total'] || {}
      const brands = Object.keys(data).sort((a, b) => {
        if (a === 'LG') return -1; if (b === 'LG') return 1
        const la = data[a]?.[data[a].length - 1] || 0
        const lb = data[b]?.[data[b].length - 1] || 0
        return lb - la
      })
      if (!brands.length) return ''
      const st = statusInfo(p.status, lang)
      const lgLatest = data.LG?.[data.LG.length - 1]
      const legend = brands.map((b, i) => {
        const c = brandColor(b, i)
        const isLG = b === 'LG'
        return `<span style="display:inline-flex;align-items:center;gap:3px;margin-right:12px"><i style="display:inline-block;width:10px;height:3px;border-radius:1px;background:${c};opacity:${isLG ? 1 : 0.7}"></i><span style="font-size:13px;color:${isLG ? '#1A1A1A' : '#94A3B8'};font-weight:${isLG ? 700 : 400}">${b}</span></span>`
      }).join('')
      // 차트+표 통합 테이블: colgroup 공유로 X축 정렬 보장
      const N = wLabels.length
      const colgroup = `<colgroup><col style="width:${TREND_BRAND_COL}px">${wLabels.map(() => '<col>').join('')}</colgroup>`
      const _wFadeIdx = baselineIdxFor(p, wLabels)
      const chartRow = `<tr><td style="padding:0;border:0"></td><td colspan="${N}" style="padding:8px 0;border:0">${svgMultiLine(data, wLabels, N * 80, 180, { fadeBeforeIdx: _wFadeIdx, baselineLabel: _wFadeIdx > 0 ? '*Baseline 재설정' : '' })}</td></tr>`
      const legendRow = `<tr><td style="padding:0;border:0"></td><td colspan="${N}" style="padding:4px 0 6px;border:0">${legend}</td></tr>`
      const thead = `<tr style="border-top:1px solid #E8EDF2"><th style="text-align:left;padding:5px 6px;font-size:14px;color:#94A3B8;font-weight:600;border-bottom:1px solid #F1F5F9">Brand</th>${wLabels.map(w => `<th style="text-align:center;padding:5px 2px;font-size:14px;color:#94A3B8;font-weight:600;border-bottom:1px solid #F1F5F9">${w}</th>`).join('')}</tr>`
      const tbody = brands.map((b, i) => {
        const c = brandColor(b, i)
        const isLG = b === 'LG'
        const cells = wLabels.map((_, wi) => {
          const val = data[b]?.[wi]
          return `<td style="text-align:center;padding:5px 2px;font-size:14px;color:${val != null ? (isLG ? '#1A1A1A' : '#475569') : '#CBD5E1'};font-weight:${isLG ? 700 : 400};border-bottom:1px solid #F8FAFC;font-variant-numeric:tabular-nums">${val != null ? val.toFixed(1) : '—'}</td>`
        }).join('')
        return `<tr style="background:${isLG ? '#FFF8F9' : i % 2 === 0 ? '#fff' : '#FAFBFC'}"><td style="padding:5px 6px;font-size:13px;font-weight:${isLG ? 700 : 500};color:${c};border-bottom:1px solid #F8FAFC;white-space:nowrap;overflow:hidden;text-overflow:ellipsis"><i style="display:inline-block;width:6px;height:6px;border-radius:50%;background:${c};margin-right:4px;vertical-align:0"></i>${b}</td>${cells}</tr>`
      }).join('')

      const _trAllUL = isAllUnlaunched(p.id || p.category, ulMap)
      return `<div class="trend-row${_trAllUL ? ' is-unlaunched' : ''}" data-prodid="${p.id || p.category}" style="margin-bottom:24px">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px">
          <span style="width:4px;height:22px;border-radius:4px;background:${RED};flex-shrink:0"></span>
          <span style="font-size:20px;font-weight:700;color:#1A1A1A">${prodNameUL(p, ulMap)}</span>
          <span class="trend-status-badge" style="font-size:14px;font-weight:700;padding:2px 8px;border-radius:10px;background:${_trAllUL ? '#F1F5F9' : st.bg};color:${_trAllUL ? '#64748B' : st.color};border:1px solid ${_trAllUL ? '#CBD5E1' : st.border}">${_trAllUL ? (lang === 'en' ? 'Unlaunched' : '미출시') : st.label}</span>
          ${lgLatest != null ? `<span style="font-size:16px;font-weight:700;color:#1A1A1A">LG ${lgLatest.toFixed(1)}%</span>` : ''}
          ${p.compName ? `<span style="font-size:14px;color:#94A3B8">vs ${p.compName} ${p.compRatio || ''}%</span>` : ''}
        </div>
        <div style="border:1px solid #E8EDF2;border-radius:10px;overflow:hidden"><table style="width:100%;border-collapse:collapse;table-layout:fixed;font-family:${FONT}">${colgroup}<tbody>${chartRow}${legendRow}${thead}${tbody}</tbody></table></div>
        ${baselineNotePerProductHtml(p, lang)}
      </div>`
    }).join('')

    if (!rows) return ''
    return `<div class="bu-group" data-bu="${bu}" style="margin-bottom:20px">
      <div class="bu-header"><span class="bu-label">${bu}</span></div>
      ${rows}
    </div>`
  }).join('')

  if (!buGroups.trim()) return ''
  return `<div class="section-card">
    <div class="section-header">
      <div class="section-title">${lang === 'en' ? 'Weekly Competitor Trend' : '주간 경쟁사 트렌드'}</div>
      <span class="legend">${periodTag || ''} &nbsp;|&nbsp; ${wLabels[0]}–${wLabels[wLabels.length - 1]} (${wLabels.length}${lang === 'en' ? ' weeks' : '주'})</span>
    </div>
    <div class="section-body">${buGroups}</div>
  </div>`
}

// ─── 월간 경쟁사 트렌드 섹션 ──────────────────────────────────────────────
function monthlyTrendDetailHtml(products, monthlyVis, t, lang, ulMap, periodTag) {
  if (!monthlyVis || !monthlyVis.length) return ''
  const BU_ORDER = ['MS', 'HS', 'ES']
  const MNAMES = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
  const enMonthMap = {jan:0,feb:1,mar:2,apr:3,may:4,jun:5,jul:6,aug:7,sep:8,oct:9,nov:10,dec:11}
  function parseMIdx(d) { const km = String(d).match(/(\d{1,2})월/); if (km) return parseInt(km[1])-1; const em = String(d).match(/(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i); return em ? enMonthMap[em[1].toLowerCase()] : -1 }

  // 12개월 고정 (Jan~Dec)
  const sortedMonths = [0,1,2,3,4,5,6,7,8,9,10,11]
  const mLabels = MNAMES.slice()

  const buGroups = BU_ORDER.map(bu => {
    const prods = products.filter(p => p.bu === bu)
    if (!prods.length) return ''
    const rows = prods.map(p => {
      // monthlyScores에서 모든 경쟁사 데이터 추출
      const ms = p.monthlyScores || []
      let brandData = {}
      if (ms.length >= 2) {
        // allScores에서 모든 브랜드 수집
        const allBrands = new Set()
        ms.forEach(m => { if (m.allScores) Object.keys(m.allScores).forEach(b => allBrands.add(b)) })
        allBrands.forEach(brand => {
          brandData[brand] = sortedMonths.map(mi => {
            const found = ms.find(m => parseMIdx(m.date) === mi)
            return found?.allScores?.[brand] ?? null
          })
        })
        // allScores가 없으면 LG+Comp 폴백
        if (!allBrands.size) {
          brandData.LG = sortedMonths.map(mi => { const f = ms.find(m => parseMIdx(m.date) === mi); return f ? f.score : null })
          if (p.vsComp > 0) {
            const compArr = sortedMonths.map(mi => { const f = ms.find(m => parseMIdx(m.date) === mi); return f?.comp ?? null })
            if (compArr.some(v => v != null)) brandData[p.compName || 'Comp'] = compArr
          }
        }
      } else {
        // 폴백: monthlyVis에서 BU TOTAL 데이터
        const buRows = monthlyVis.filter(r => r.division === bu && (r.country === 'TOTAL' || r.country === 'TTL'))
        const byMonth = {}
        buRows.forEach(r => { const mi = parseMIdx(r.date); if (mi >= 0) byMonth[mi] = r })
        const lgArr = sortedMonths.map(mi => byMonth[mi]?.lg || null)
        const compArr = sortedMonths.map(mi => byMonth[mi]?.comp || null)
        brandData = { LG: lgArr }
        if (compArr.some(v => v != null && v > 0)) brandData['Samsung'] = compArr
      }

      const brands = Object.keys(brandData).sort((a, b) => {
        if (a === 'LG') return -1; if (b === 'LG') return 1
        const la = (brandData[a] || []).filter(v => v != null).pop() || 0
        const lb = (brandData[b] || []).filter(v => v != null).pop() || 0
        return lb - la
      })
      if (!brands.length) return ''
      const st = statusInfo(p.status, lang)
      const lgLatest = (brandData.LG || []).filter(v => v != null).pop()
      const legend = brands.map((b, i) => {
        const c = brandColor(b, i)
        const isLG = b === 'LG'
        return `<span style="display:inline-flex;align-items:center;gap:3px;margin-right:12px"><i style="display:inline-block;width:10px;height:3px;border-radius:1px;background:${c};opacity:${isLG ? 1 : 0.7}"></i><span style="font-size:13px;color:${isLG ? '#1A1A1A' : '#94A3B8'};font-weight:${isLG ? 700 : 400}">${b}</span></span>`
      }).join('')
      const N = mLabels.length
      const colgroup = `<colgroup><col style="width:${TREND_BRAND_COL}px">${mLabels.map(() => '<col>').join('')}</colgroup>`
      const _mFadeIdx = baselineIdxFor(p, mLabels)
      const chartRow = `<tr><td style="padding:0;border:0"></td><td colspan="${N}" style="padding:8px 0;border:0">${svgMultiLine(brandData, mLabels, N * 80, 180, { fadeBeforeIdx: _mFadeIdx, baselineLabel: _mFadeIdx > 0 ? '*Baseline 재설정' : '' })}</td></tr>`
      const legendRow = `<tr><td style="padding:0;border:0"></td><td colspan="${N}" style="padding:4px 0 6px;border:0">${legend}</td></tr>`
      const thead = `<tr style="border-top:1px solid #E8EDF2"><th style="text-align:left;padding:5px 6px;font-size:14px;color:#94A3B8;font-weight:600;border-bottom:1px solid #F1F5F9">Brand</th>${mLabels.map(m => `<th style="text-align:center;padding:5px 2px;font-size:14px;color:#94A3B8;font-weight:600;border-bottom:1px solid #F1F5F9">${m}</th>`).join('')}</tr>`
      const tbody = brands.map((b, i) => {
        const c = brandColor(b, i)
        const isLG = b === 'LG'
        const cells = mLabels.map((_, mi) => {
          const val = brandData[b]?.[mi]
          return `<td style="text-align:center;padding:5px 2px;font-size:14px;color:${val != null ? (isLG ? '#1A1A1A' : '#475569') : '#CBD5E1'};font-weight:${isLG ? 700 : 400};border-bottom:1px solid #F8FAFC;font-variant-numeric:tabular-nums">${val != null ? val.toFixed(1) : '—'}</td>`
        }).join('')
        return `<tr style="background:${isLG ? '#FFF8F9' : i % 2 === 0 ? '#fff' : '#FAFBFC'}"><td style="padding:5px 6px;font-size:13px;font-weight:${isLG ? 700 : 500};color:${c};border-bottom:1px solid #F8FAFC;white-space:nowrap;overflow:hidden;text-overflow:ellipsis"><i style="display:inline-block;width:6px;height:6px;border-radius:50%;background:${c};margin-right:4px;vertical-align:0"></i>${b}</td>${cells}</tr>`
      }).join('')

      const _trAllUL = isAllUnlaunched(p.id || p.category, ulMap)
      return `<div class="trend-row${_trAllUL ? ' is-unlaunched' : ''}" data-prodid="${p.id || p.category}" style="margin-bottom:24px">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px">
          <span style="width:4px;height:22px;border-radius:4px;background:${RED};flex-shrink:0"></span>
          <span style="font-size:20px;font-weight:700;color:#1A1A1A">${prodNameUL(p, ulMap)}</span>
          <span class="trend-status-badge" style="font-size:14px;font-weight:700;padding:2px 8px;border-radius:10px;background:${_trAllUL ? '#F1F5F9' : st.bg};color:${_trAllUL ? '#64748B' : st.color};border:1px solid ${_trAllUL ? '#CBD5E1' : st.border}">${_trAllUL ? (lang === 'en' ? 'Unlaunched' : '미출시') : st.label}</span>
          ${lgLatest != null ? `<span style="font-size:16px;font-weight:700;color:#1A1A1A">LG ${lgLatest.toFixed(1)}%</span>` : ''}
          ${p.compName ? `<span style="font-size:14px;color:#94A3B8">vs ${p.compName} ${p.compRatio || ''}%</span>` : ''}
        </div>
        <div style="border:1px solid #E8EDF2;border-radius:10px;overflow:hidden"><table style="width:100%;border-collapse:collapse;table-layout:fixed;font-family:${FONT}">${colgroup}<tbody>${chartRow}${legendRow}${thead}${tbody}</tbody></table></div>
        ${baselineNotePerProductHtml(p, lang)}
      </div>`
    }).join('')

    if (!rows) return ''
    return `<div class="bu-group" data-bu="${bu}" style="margin-bottom:20px">
      <div class="bu-header"><span class="bu-label">${bu}</span></div>
      ${rows}
    </div>`
  }).join('')

  if (!buGroups.trim()) return ''
  return `<div class="section-card">
    <div class="section-header">
      <div class="section-title">${lang === 'en' ? 'Monthly Trend' : '월간 트렌드'}</div>
      <span class="legend">${periodTag || ''} &nbsp;|&nbsp; ${mLabels[0]}–${mLabels[mLabels.length - 1]} (${mLabels.length}${lang === 'en' ? ' months' : '개월'})</span>
    </div>
    <div class="section-body">${buGroups}</div>
  </div>`
}

// ─── Insight / HowToRead — GEO 인사이트 기능 제거됨 (빈 문자열 반환) ────────────
function insightHtml() { return '' }

// ─── Hero KPI ───────────────────────────────────────────────────────────────
function heroHtml(total, meta, t, lang) {
  const d = +(total.score - total.prev).toFixed(1)
  const compAvg = total.vsComp || 0
  const gap = +(total.score - compAvg).toFixed(1)
  const dArrow = d > 0 ? '▲' : d < 0 ? '▼' : '─'
  const dColor = d > 0 ? '#22C55E' : d < 0 ? '#EF4444' : '#94A3B8'
  return `<div class="hero" id="hero-section">
    <div class="hero-top">
      <div><span class="hero-brand">LG ELECTRONICS</span></div>
      <div class="hero-ctx" id="hero-ctx">
        <span class="hero-ctx-badge">${meta.period || ''}</span>
        <span class="hero-ctx-badge">${lang === 'en' ? 'All Divisions' : '전체 본부'}</span>
        <span class="hero-ctx-badge">${lang === 'en' ? 'All Products' : '전체 제품'}</span>
        <span class="hero-ctx-badge">${lang === 'en' ? 'All Countries' : '전체 국가'}</span>
      </div>
    </div>
    <div class="hero-body">
      <div class="hero-left">
        <div class="hero-label">LG GEO Visibility %</div>
        <div class="hero-score-row">
          <span class="hero-score">${total.score}</span><span class="hero-pct">%</span>
          <span class="hero-delta" style="color:${dColor}">${dArrow} ${Math.abs(d).toFixed(1)}%p</span>
          <span class="hero-mom">MoM</span>
        </div>
        <div class="hero-gauge">
          <div class="hero-gauge-track">
            <div class="hero-gauge-bar" style="width:${Math.min(total.score, 100)}%;background:${RED}"></div>
          </div>
          ${compAvg > 0 ? `<div class="hero-gauge-track" style="margin-top:6px">
            <div class="hero-gauge-bar" style="width:${Math.min(compAvg, 100)}%;background:${COMP}"></div>
          </div>` : ''}
          <div class="hero-legend">
            <span><i style="background:${RED}"></i> LG ${total.score}%</span>
            ${compAvg > 0 ? `<span><i style="background:${COMP}"></i> Samsung ${compAvg}%</span>` : ''}
            <span><i style="background:#475569"></i> prev ${total.prev}%</span>
          </div>
        </div>
      </div>
      <div class="hero-right">
        ${compAvg > 0 ? `<div class="hero-comp">
          <span class="hero-comp-label">SAMSUNG</span> <span class="hero-comp-score">${compAvg}%</span>
          <span class="hero-comp-gap" style="color:${gap >= 0 ? '#22C55E' : '#EF4444'}">Gap ${gap >= 0 ? '+' : ''}${gap}%p</span>
        </div>` : ''}
        <div class="hero-info">Model : ChatGPT, ChatGPT Search, Gemini, Perplexity<br/>Subsidiary : US, CA, UK, DE, ES, BR, MX, AU, VN, IN</div>
      </div>
    </div>
  </div>`
}

// ─── 제품 섹션 ──────────────────────────────────────────────────────────────
// UL_PROD_MAP·ALL_10_COUNTRIES는 dashboardConsts.js에서 import
function getULCntys(prodId, ulMap) {
  const code = UL_PROD_MAP[prodId] || (prodId || '').toUpperCase()
  return Object.keys(ulMap || {}).filter(k => k.endsWith('|' + code)).map(k => k.split('|')[0])
}
function isAllUnlaunched(prodId, ulMap) {
  return ALL_10_COUNTRIES.every(c => {
    const code = UL_PROD_MAP[prodId] || (prodId || '').toUpperCase()
    return (ulMap || {})[`${c}|${code}`]
  })
}
function prodNameUL(p, ulMap) { const c = getULCntys(p.id || p.category, ulMap); return c.length ? `${p.kr}*` : p.kr }

function productSectionHtml(products, meta, t, lang, wLabels, ulMap, monthlyVis, weeklyAll, periodTag) {
  if (!products.length) return ''
  const BU_ORDER = ['MS', 'HS', 'ES']

  const buGroups = BU_ORDER.map(bu => {
    const prods = products.filter(p => p.bu === bu)
    if (!prods.length) return ''
    const cards = prods.map(p => {
      const weekly = p.weekly || []
      // null 제외한 유효 주간값 (빈 셀이 null로 들어올 수 있음)
      const validWeekly = weekly.filter(v => v != null)
      // Weekly/Monthly 두 버전 점수
      const wScore = p.weeklyScore || (validWeekly.length > 0 ? validWeekly[validWeekly.length - 1] : p.score)
      const mScore = p.monthlyScore || p.score
      const latestScore = wScore
      // 주간 경쟁사: weeklyAll에서 마지막 주 1위 경쟁사 점수
      const wAll = weeklyAll?.[p.id]?.['Total'] || weeklyAll?.[p.id]?.['TTL'] || {}
      let wComp = 0
      Object.entries(wAll).forEach(([brand, arr]) => {
        if (brand === 'LG' || brand === 'lg') return
        const last = Array.isArray(arr) && arr.length ? arr[arr.length - 1] : 0
        if (last > wComp) wComp = last
      })
      const mComp = p.vsComp || 0
      // 소수점까지 반영한 비율 (100% 경계 정확 판별)
      const wRatioExact = wComp > 0 ? (wScore / wComp * 100) : (mComp > 0 ? (wScore / mComp * 100) : 100)
      const mRatioExact = mComp > 0 ? (mScore / mComp * 100) : 100
      const wRatio = Math.round(wRatioExact * 10) / 10 // 소수 1자리
      const mRatio = Math.round(mRatioExact * 10) / 10
      const latestRatio = wRatio
      const latestStatus = wRatioExact >= 100 ? 'lead' : wRatioExact >= 80 ? 'behind' : 'critical'
      const st = statusInfo(latestStatus, lang)
      // WoW: 유효값 기준 마지막 2주 차이 (null 섞여있어도 정확히 계산)
      const wLast = validWeekly.length >= 1 ? validWeekly[validWeekly.length - 1] : null
      const wPrev = validWeekly.length >= 2 ? validWeekly[validWeekly.length - 2] : null
      const wd = (wLast != null && wPrev != null) ? +(wLast - wPrev).toFixed(1) : null
      const wArrow = wd > 0 ? '▲' : wd < 0 ? '▼' : '─'
      const wColor = wd > 0 ? '#22C55E' : wd < 0 ? '#EF4444' : '#94A3B8'
      const sparkColor = latestStatus === 'critical' ? '#BE123C' : latestStatus === 'behind' ? '#D97706' : '#15803D'
      // MoM: monthlyVis에서 BU별 월간 트렌드 구성 (제품별 월간 데이터 없으면 BU 대리)
      const MLNAMES = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
      const enMonthMap = {jan:0,feb:1,mar:2,apr:3,may:4,jun:5,jul:6,aug:7,sep:8,oct:9,nov:10,dec:11}
      function parseMIdx(d) { const km = String(d).match(/(\d{1,2})월/); if (km) return parseInt(km[1])-1; const em = String(d).match(/(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i); return em ? enMonthMap[em[1].toLowerCase()] : -1 }
      // monthlyScores 우선, 없으면 monthlyVis의 BU TOTAL
      let ms = (p.monthlyScores || [])
      if (ms.length < 2 && monthlyVis.length > 0) {
        const buRows = monthlyVis.filter(r => r.division === p.bu && (r.country === 'TOTAL' || r.country === 'TTL'))
        const byMonth = {}
        buRows.forEach(r => { const mi = parseMIdx(r.date); if (mi >= 0) byMonth[mi] = { date: r.date, score: r.lg, comp: r.comp } })
        ms = Object.keys(byMonth).sort((a,b) => a - b).map(k => byMonth[k])
      }
      const m4Labels = ms.length > 0
        ? ms.map(m => { const mi = parseMIdx(m.date); return mi >= 0 ? MLNAMES[mi] : m.date })
        : ['M-3','M-2','M-1','M0']
      const m4Data = ms.length > 0 ? ms.map(m => m.score) : [null, null, null, p.score]
      const momD = ms.length >= 2 ? +(ms[ms.length-1].score - ms[ms.length-2].score).toFixed(1) : null
      const momArrow = momD > 0 ? '▲' : momD < 0 ? '▼' : '─'
      const momColor = momD > 0 ? '#22C55E' : momD < 0 ? '#EF4444' : '#94A3B8'
      const compPct = latestRatio
      const compColor = compPct >= 100 ? '#15803D' : compPct >= 80 ? '#D97706' : '#BE123C'
      const wPrevScore = p.weeklyPrev || (validWeekly.length >= 5 ? validWeekly[validWeekly.length - 5] : (validWeekly[0] || 0))
      const wMomD = wScore && wPrevScore ? +(wScore - wPrevScore).toFixed(1) : null
      const mMomD = mScore && (p.monthlyPrev || p.prev) ? +(mScore - (p.monthlyPrev || p.prev)).toFixed(1) : null
      const ulCntys = getULCntys(p.id || p.category, ulMap)
      const allUL = isAllUnlaunched(p.id || p.category, ulMap)
      // 기본 렌더는 전체 국가 기준 (전 국가 미출시면 회색). 필터 시 클라이언트 JS가 재계산.
      const GRAY = { border: '#CBD5E1', bg: '#F1F5F9', color: '#64748B', label: lang === 'en' ? 'Unlaunched' : '미출시' }
      const finalSt = allUL ? GRAY : st
      return `<div class="prod-card${allUL ? ' is-unlaunched' : ''}" data-prodid="${p.id || p.category}" data-ws="${wScore.toFixed(1)}" data-ms="${mScore.toFixed(1)}" data-wr="${wRatio}" data-mr="${mRatio}" data-wmom="${wMomD != null ? wMomD : ''}" data-mmom="${mMomD != null ? mMomD : ''}" style="border-color:${finalSt.border}">
        <div class="prod-head">
          <span class="prod-name">${prodNameUL(p, ulMap)}</span>
          ${ulCntys.length > 0 ? `<span class="prod-ul-note" style="display:block;font-size:11px;color:#94A3B8;margin-top:1px">* ${lang === 'en' ? 'Not launched countries' : '제품 미출시 국가'}</span>` : ''}
          <span class="prod-badge" style="background:${finalSt.bg};color:${finalSt.color};border-color:${finalSt.border}">${finalSt.label}</span>
        </div>
        <div class="prod-score-row">
          <span class="prod-score">${latestScore.toFixed(1)}<small>%</small></span>
          <span class="prod-delta prod-wow" style="color:${wColor}">${wd != null ? `WoW ${wArrow} ${Math.abs(wd).toFixed(1)}%p` : 'WoW —'}</span>
          <span class="prod-delta prod-mom" style="display:none;color:${momColor}">${(isBaselineResetProduct(p) || momD == null) ? '' : `MoM ${momArrow} ${Math.abs(momD).toFixed(1)}%p`}</span>
        </div>
        <div class="prod-chart">
          <div class="trend-weekly">${(() => {
            const _ls = wLabels.slice(-10); const _fi = baselineIdxFor(p, _ls)
            const _id = String(p.id || '').toLowerCase()
            const _labOff = _id === 'aircare' ? 30 : _id === 'rac' ? 20 : 0  // RAC +20, Aircare +30 (주간)
            return svgLine(weekly.slice(-10), _ls, 300, 90, sparkColor, { fadeBeforeIdx: _fi, baselineLabel: _fi > 0 ? '*Baseline 재설정' : '', labelOffsetY: _labOff })
          })()}</div>
          <div class="trend-monthly" style="display:none">${(() => {
            const _fi = baselineIdxFor(p, m4Labels)
            const _id = String(p.id || '').toLowerCase()
            const _audMon = _id === 'audio'  // 오디오 월간: 라벨만 -60px (점선은 기본 유지)
            return svgLine(m4Data, m4Labels, 300, 90, sparkColor, { fadeBeforeIdx: _fi, baselineLabel: _fi > 0 ? '*Baseline 재설정' : '', labelOffsetY: _audMon ? -60 : 0 })
          })()}</div>
        </div>
        <div class="prod-comp">
          <span class="prod-comp-name">${lang === 'en' ? `vs ${p.compName}` : `${p.compName} ${t.vsComp}`}</span>
          <div class="prod-comp-bar-wrap">
            <div class="prod-comp-bar" style="width:${Math.min(compPct, 120)}%;background:${compColor}"></div>
          </div>
          <span class="prod-comp-pct" style="color:${compColor}">${compPct}%</span>
        </div>
      </div>`
    }).join('')
    return `<div class="bu-group" data-bu="${bu}">
      <div class="bu-header"><span class="bu-label">${bu}</span><span class="bu-count">${prods.length}${t.categories}</span></div>
      <div class="prod-grid">${cards}</div>
    </div>`
  }).join('')

  return `<div class="section-card">
    <div class="section-header">
      <div class="section-title">${t.productTitle}</div>
      <span class="legend">${periodTag || ''}${periodTag ? ' &nbsp;|&nbsp; ' : ''}<i style="background:#15803D"></i>${t.legendLead} <i style="background:#D97706"></i>${t.legendBehind} <i style="background:#BE123C"></i>${t.legendCritical}</span>
    </div>
    ${insightHtml(meta.productInsight, meta.showProductInsight, meta.productHowToRead, meta.showProductHowToRead, t)}
    <div class="section-body">${buGroups}${(() => {
      const footnotes = products.filter(p => getULCntys(p.id || p.category, ulMap).length > 0)
        .map(p => `${((p.id || '').toLowerCase() === 'audio' || p.kr === '오디오') ? 'Audio-Sound Suite' : p.kr}: ${getULCntys(p.id || p.category, ulMap).map(c => cntyOfficial(c, lang)).join(', ')} ${lang === 'en' ? 'not launched' : '미출시'}`)
      return (footnotes.length ? `<p style="margin:12px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:500">* ${footnotes.join(' / ')}</p>` : '') + baselineNoteFullHtml(lang)
    })()}</div>
  </div>`
}

// ─── 국가별 Visibility ──────────────────────────────────────────────────────
// cntyStatus, cntyFullName, COUNTRY_FULL_NAME → ./dashboardFormat.js / ./dashboardConsts.js

function cntyColHtml(r, maxScore, label, ulMap) {
  // 제품명(kr) → id 역매핑
  const NAME_TO_ID = { 'TV':'tv', '모니터':'monitor', '오디오':'audio', '세탁기':'washer', '냉장고':'fridge', '식기세척기':'dw', '청소기':'vacuum', 'Cooking':'cooking', 'RAC':'rac', 'Aircare':'aircare' }
  const prodId = NAME_TO_ID[r.product] || String(r.product || '').toLowerCase()
  const ulCode = UL_PROD_MAP[prodId] || (prodId || '').toUpperCase()
  const isUL = ulMap && ulMap[`${r.country}|${ulCode}`]
  const st = cntyStatus(r.score, r.compScore)
  const barColor = isUL ? '#94A3B8' : (st === 'lead' ? '#15803D' : st === 'behind' ? '#D97706' : '#BE123C')
  const gap = +(r.score - r.compScore).toFixed(1)
  const gapColor = isUL ? '#64748B' : (gap >= 0 ? '#15803D' : '#BE123C')
  const BAR_H = 130
  // 중국 브랜드 1위 (TCL/Hisense/Haier — partial match)
  const C_BRAND_KEYS = ['TCL', 'HISENSE', 'HAIER']
  let cBrandName = '', cBrandScore = 0
  if (r.allScores) {
    Object.entries(r.allScores).forEach(([brand, score]) => {
      const brandUp = String(brand).toUpperCase()
      const isCBrand = C_BRAND_KEYS.some(k => brandUp.includes(k))
      if (isCBrand && score > cBrandScore) {
        cBrandName = brand
        cBrandScore = score
      }
    })
  }
  const localMax = Math.max(maxScore, cBrandScore)
  const hPx = Math.max(3, Math.round(r.score / localMax * BAR_H))
  const cPx = r.compScore > 0 ? Math.max(3, Math.round(r.compScore / localMax * BAR_H)) : 0
  const cbPx = cBrandScore > 0 ? Math.max(3, Math.round(cBrandScore / localMax * BAR_H)) : 0
  const cBrandColor = '#9333EA'
  return `<div class="vbar-item${isUL ? ' is-unlaunched' : ''}" data-product="${r.product}" data-country="${r.country}" data-prodid="${prodId}">
    <div class="vbar-cols">
      <div class="vbar-col-wrap">
        <span class="vbar-val" style="color:${barColor}">${r.score.toFixed(1)}</span>
        <div class="vbar-col" style="height:${hPx}px;background:${barColor}"></div>
        <span class="vbar-col-name">LG</span>
      </div>
      ${r.compScore > 0 ? `<div class="vbar-col-wrap">
        <span class="vbar-val comp-val" style="color:${COMP}">${r.compScore.toFixed(1)}</span>
        <div class="vbar-col" style="height:${cPx}px;background:${COMP}"></div>
        <span class="vbar-col-name">${r.compName.toUpperCase() === 'SAMSUNG' ? 'SS' : r.compName}</span>
      </div>` : ''}
      ${cBrandScore > 0 ? `<div class="vbar-col-wrap cbrand-bar">
        <span class="vbar-val" style="color:${cBrandColor}">${cBrandScore.toFixed(1)}</span>
        <div class="vbar-col" style="height:${cbPx}px;background:${cBrandColor}"></div>
        <span class="vbar-col-name" style="color:${cBrandColor}">${cBrandName.toUpperCase()}</span>
      </div>` : ''}
    </div>
    <span class="vbar-gap" style="color:${gapColor}">${gap >= 0 ? '+' : ''}${gap}%p</span>
    <span class="vbar-label">${label}</span>
  </div>`
}
// 국가 코드 → 풀네임

function countrySectionHtml(productsCnty, meta, t, lang, ulMap, periodTag) {
  if (!productsCnty || !productsCnty.length) return ''

  // ── View 1: 제품별 (By Product) ──
  const productMap = new Map()
  productsCnty.forEach(r => { if (!productMap.has(r.product)) productMap.set(r.product, []); productMap.get(r.product).push(r) })
  const filter = meta.cntyProductFilter || {}
  const byProductHtml = [...productMap.entries()].filter(([n]) => filter[n] !== false).map(([name, rows]) => {
    const maxScore = Math.max(...rows.map(r => Math.max(r.score, r.compScore)), 1)
    const bars = rows.map(r => cntyColHtml(r, maxScore, cntyFullName(r.country), ulMap)).join('')
    return `<div class="cnty-product" data-group-product="${name}"><div class="bu-header"><span class="bu-label">${name}</span></div><div class="vbar-chart">${bars}</div></div>`
  }).join('')

  // ── View 2: 국가별 (By Country) ──
  const countryMap = new Map()
  productsCnty.forEach(r => { if (!countryMap.has(r.country)) countryMap.set(r.country, []); countryMap.get(r.country).push(r) })
  const _CORD = ['US','CA','UK','DE','ES','BR','MX','AU','VN','IN']
  const sortedCountries = _CORD.filter(c => countryMap.has(c)).concat([...countryMap.keys()].filter(c => !_CORD.includes(c)))
  const byCountryHtml = sortedCountries.map(cnty => {
    const rows = countryMap.get(cnty)
    if (!rows) return ''
    const maxScore = Math.max(...rows.map(r => Math.max(r.score, r.compScore)), 1)
    const bars = rows.map(r => cntyColHtml(r, maxScore, r.product, ulMap)).join('')
    return `<div class="cnty-product" data-group-country="${cnty}"><div class="bu-header"><span class="bu-label">${cntyFullName(cnty)}</span></div><div class="vbar-chart">${bars}</div></div>`
  }).join('')

  return `<div class="section-card cnty-section">
    <div class="section-header">
      <div class="section-title cnty-section-title">${t.cntyTitle}</div>
      <div class="section-header-right">
        ${periodTag ? `<span class="legend">${periodTag}</span>` : ''}
        <div class="trend-tabs">
          <button class="cnty-view-tab active" onclick="switchCntyView('country')">${t.byCountry}</button>
          <button class="cnty-view-tab" onclick="switchCntyView('product')">${t.byProduct}</button>
        </div>
        <label style="display:inline-flex;align-items:center;gap:5px;font-size:13px;color:#475569;cursor:pointer;margin-left:8px;">
          <input type="checkbox" class="cnty-cbrand-toggle" checked onchange="toggleCBrand(this)" style="cursor:pointer;" />
          ${t.cBrandCompare}
        </label>
        <span class="legend"><i style="background:#15803D"></i>${t.legendLead} <i style="background:#D97706"></i>${t.legendBehind} <i style="background:#BE123C"></i>${t.legendCritical} <i style="background:${COMP}"></i>Comp. <i style="background:#9333EA"></i>C-Brand</span>
      </div>
    </div>
    ${insightHtml(meta.cntyInsight, meta.showCntyInsight, meta.cntyHowToRead, meta.showCntyHowToRead, t)}
    <div class="section-body">
      <div class="cnty-view-country">${byCountryHtml}</div>
      <div class="cnty-view-product" style="display:none">${byProductHtml}</div>
      ${(() => {
        if (!ulMap || !Object.keys(ulMap).length) return ''
        // 제품명(kr) → id 역매핑
        const NAME_TO_ID = { 'TV':'tv', '모니터':'monitor', '오디오':'audio', '세탁기':'washer', '냉장고':'fridge', '식기세척기':'dw', '청소기':'vacuum', 'Cooking':'cooking', 'RAC':'rac', 'Aircare':'aircare' }
        const products = [...new Set(productsCnty.map(r => r.product))]
        const footnotes = products.map(name => {
          const id = NAME_TO_ID[name] || String(name).toLowerCase()
          const cntys = getULCntys(id, ulMap)
          const displayName = id === 'audio' ? 'Audio-Sound Suite' : name
          return cntys.length ? `${displayName}: ${cntys.join(', ')} ${lang === 'en' ? 'not launched' : '미출시'}` : null
        }).filter(Boolean)
        return footnotes.length ? `<p style="margin:12px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:500">* ${footnotes.join(' / ')}</p>` : ''
      })()}
    </div>
  </div>`
}

// ─── Citation 카테고리 ──────────────────────────────────────────────────────
function citationSectionHtml(citations, meta, t) {
  if (!citations || !citations.length) return ''
  const topN = meta.citationTopN || 10
  const list = citations.slice(0, topN)
  const maxScore = Math.max(...list.map(c => c.score), 1)
  const totalScore = citations.reduce((s, c) => s + c.score, 0)
  const rows = list.map((c, i) => {
    const pct = (c.score / maxScore * 100).toFixed(1)
    const ratio = totalScore > 0 ? ((c.score / totalScore) * 100).toFixed(1) : '0.0'
    const d = c.delta || 0
    const dArrow = d > 0 ? '▲' : d < 0 ? '▼' : ''
    const dColor = d > 0 ? '#22C55E' : d < 0 ? '#EF4444' : '#94A3B8'
    return `<div class="cit-row">
      <span class="cit-rank ${i < 3 ? 'top' : ''}">${c.rank || i+1}</span>
      <div class="cit-info"><span class="cit-source">${c.source}</span><span class="cit-cat">${c.category}</span></div>
      <div class="cit-bar-wrap"><div class="cit-bar" style="width:${pct}%"></div></div>
      <span class="cit-score">${fmt(c.score)}</span>
      <span class="cit-ratio">(${ratio}%)</span>
      ${d ? `<span class="cit-delta" style="color:${dColor}">${dArrow} ${Math.abs(d).toFixed(1)}</span>` : ''}
    </div>`
  }).join('')
  return `<div class="section-card">
    <div class="section-header"><div class="section-title">${t.citationTitle}</div><span class="legend">${t.citLegend}</span></div>
    ${insightHtml(meta.citationInsight, meta.showCitationInsight, meta.citationHowToRead, meta.showCitationHowToRead, t)}
    <div class="section-body">${rows}</div>
  </div>`
}

// ─── 도메인별 Citation (국가 필터 통합) ────────────────────────────────────
function citDomainSectionHtml(citationsCnty, meta, t, citations, lang) {
  if (!citationsCnty || !citationsCnty.length) return ''
  const topN = meta.citDomainTopN || 10
  // 국가 목록 (TTL 포함)
  const cntyNames = ['TTL', ...([...new Set(citationsCnty.map(r => r.cnty))].filter(c => c !== 'TTL'))]

  // 각 국가별 도메인 리스트 HTML 생성
  const panels = cntyNames.map(cnty => {
    const rows = citationsCnty.filter(r => r.cnty === cnty).sort((a, b) => a.rank - b.rank).slice(0, topN)
    if (!rows.length) return ''
    const maxScore = Math.max(...rows.map(r => r.citations), 1)
    const totalCit = cnty === 'TTL' && citations && citations.length
      ? citations.reduce((s, c) => s + c.score, 0)
      : rows.reduce((s, r) => s + r.citations, 0)
    const html = rows.map((c, i) => {
      const pct = (c.citations / maxScore * 100).toFixed(1)
      const ratio = totalCit > 0 ? ((c.citations / totalCit) * 100).toFixed(1) : '0.0'
      return `<div class="cit-row">
        <span class="cit-rank ${i < 3 ? 'top' : ''}">${c.rank}</span>
        <div class="cit-info"><span class="cit-source">${stripDomain(c.domain)}</span><span class="cit-cat">${c.type}</span></div>
        <div class="cit-bar-wrap"><div class="cit-bar" style="width:${pct}%"></div></div>
        <span class="cit-score">${fmt(c.citations)}</span>
        <span class="cit-ratio">(${ratio}%)</span>
      </div>`
    }).join('')
    return `<div class="cit-cnty-panel" data-cit-cnty="${cnty}" style="${cnty !== 'TTL' ? 'display:none' : ''}">${html}</div>`
  }).join('')

  // 국가 필터 칩
  const chips = cntyNames.map(c =>
    `<button class="filter-chip ${c === 'TTL' ? 'active' : ''}" data-cit-cnty-val="${c}" onclick="switchCitCnty(this)">${c === 'TTL' ? t.dotcomTTL.replace(/ \(.*/, '') || 'TTL' : c}</button>`
  ).join('')

  return `<div class="section-card" id="cit-domain-section">
    <div class="section-header">
      <div class="section-title">${t.citDomainTitle}</div>
      <span class="legend">Top ${topN} Domains</span>
    </div>
    ${insightHtml(meta.citDomainInsight, meta.showCitDomainInsight, meta.citDomainHowToRead, meta.showCitDomainHowToRead, t)}
    ${insightHtml(meta.citCntyInsight, meta.showCitCntyInsight, meta.citCntyHowToRead, meta.showCitCntyHowToRead, t)}
    <div class="cnty-filters"><div class="filter-group" id="cit-cnty-chips"><span class="filter-label">${lang === 'ko' ? '국가' : 'Country'}</span>${chips}</div></div>
    <div class="section-body">${panels}</div>
  </div>`
}

// ─── 닷컴 Citation 비교 (DC_COLS·DC_SAM는 dashboardConsts.js에서 import) ────
function dotcomSectionHtml(dotcom, meta, t) {
  if (!dotcom || !dotcom.lg) return ''
  const lg = dotcom.lg, sam = dotcom.samsung || {}
  const maxVal = Math.max(...DC_COLS.map(c => Math.max(lg[c]||0, sam[c]||0)), 1)
  const lgWins = DC_SAM.filter(c => (lg[c]||0) > (sam[c]||0))
  const samWins = DC_SAM.filter(c => (sam[c]||0) > (lg[c]||0))
  const rows = DC_COLS.map(col => {
    const lv = lg[col]||0, sv = sam[col]||0
    const hasSam = col !== 'Experience'
    const isTTL = col === 'TTL'
    const lgPct = (lv/maxVal*100).toFixed(1), samPct = (sv/maxVal*100).toFixed(1)
    const diff = lv - sv
    let badge = ''
    if (diff > 0) badge = `<span class="dc-badge lg">LG +${fmt(diff)}</span>`
    else if (diff < 0 && hasSam) badge = `<span class="dc-badge ss">SS +${fmt(Math.abs(diff))}</span>`
    return `<div class="dc-row ${isTTL ? 'ttl' : ''}">
      <span class="dc-label">${isTTL ? t.dotcomTTL : col}${badge}</span>
      <div class="dc-bars">
        <div class="dc-bar-pair">
          <div class="dc-bar lg" style="width:${lgPct}%"></div>
          <span class="dc-val ${lv >= sv ? 'win' : ''}">${fmt(lv)}</span>
        </div>
        ${hasSam ? `<div class="dc-bar-pair">
          <div class="dc-bar ss" style="width:${samPct}%"></div>
          <span class="dc-val ${sv > lv ? 'win' : ''}">${fmt(sv)}</span>
        </div>` : `<div class="dc-bar-pair"><span class="dc-val muted">${t.dotcomLgOnly}</span></div>`}
      </div>
    </div>`
  }).join('')
  return `<div class="section-card">
    <div class="section-header"><div class="section-title">${t.dotcomTitle}</div>
      <span class="legend"><i style="background:${RED}"></i>LG <i style="background:${COMP}"></i>SS</span>
    </div>
    ${insightHtml(meta.dotcomInsight, meta.showDotcomInsight, meta.dotcomHowToRead, meta.showDotcomHowToRead, t)}
    <div class="section-body">
      ${rows}
      <div class="dc-summary">
        <span class="dc-sum-item lg">${t.dotcomLgWin} (${lgWins.length})</span> <span class="dc-sum-list">${lgWins.length ? lgWins.join(', ') : t.dotcomNone}</span>
        <span class="dc-sum-item ss">${t.dotcomSsWin} (${samWins.length})</span> <span class="dc-sum-list">${samWins.length ? samWins.join(', ') : t.dotcomNone}</span>
      </div>
    </div>
  </div>`
}


// ─── Glossary 탭 HTML ──────────────────────────────────────────────────────
const GLOSSARY_DATA = {
  ko: [
    { term: 'GEO (Generative Engine Optimization)', def: '생성형 AI 검색 엔진(예: ChatGPT, Gemini, Perplexity 등)에서 자사 브랜드 및 제품이 더 잘 노출·추천되도록 콘텐츠를 최적화하는 전략.' },
    { term: 'Visibility (가시성)', def: 'GEO 가시성 점수는 생성형 AI 엔진(ChatGPT, Gemini 등)에서 해당 카테고리 관련 질문 시 LG 제품이 언급·추천되는 빈도를 0~100%로 수치화한 지표입니다. MoM은 전월 대비 증감이며, 경쟁사 대비는 (LG 점수 / 1위 브랜드 점수) × 100%로 산출합니다. 100% 이상=선도, 80% 이상=추격, 80% 미만=취약입니다.' },
    { term: 'Visibility — 국가별', def: '국가별 GEO 가시성은 각 법인(미국, 영국, 독일 등)에서 생성형 AI 엔진이 해당 제품 카테고리 질문 시 LG를 언급·추천하는 비율입니다. 막대 색상은 경쟁사 대비 상대 점수를 나타내며, 녹색(선도)·주황(추격)·빨강(취약)으로 구분됩니다. 하단 수치는 1위 경쟁사 점수와 LG와의 격차(%p)입니다.' },
    { term: 'Citation (인용)', def: 'Citation Score는 생성형 AI가 LG 제품 관련 답변 시 참조하는 외부 출처(리뷰 사이트, 미디어 등)의 영향력을 점수화한 지표입니다. 점수가 높을수록 해당 출처가 AI 답변에 자주 인용되며, 증감은 전월 대비 기여도 변화를 나타냅니다.' },
    { term: 'Citation — 닷컴', def: '닷컴 Citation은 생성형 AI가 답변 시 LG·Samsung 공식 사이트의 각 페이지 유형(TTL, PLP, PDP 등)을 인용하는 빈도를 나타냅니다. TTL은 전체 합계, PLP는 카테고리 목록, PDP는 제품 상세, Microsites는 캠페인 페이지 인용 수입니다.' },
    { term: 'Readability (가독성)', def: '콘텐츠가 AI 엔진에 의해 얼마나 쉽게 파싱·이해되는지를 평가하는 지표. 구조화된 데이터, 명확한 문장 구조 등이 영향을 미친다.' },
    { term: 'KPI (Key Performance Indicator)', def: '핵심 성과 지표. GEO에서는 Visibility, Citation Rate, Readability Score 등이 해당된다.' },
    { term: 'BU (Business Unit)', def: '사업부 단위. MS, HS, ES 등으로 구분된다.' },
    { term: 'Stakeholder (유관조직)', def: 'GEO 개선 활동에 참여하는 조직 단위. 예: MS, HS, ES, PR, 브랜드 등.' },
    { term: '달성률', def: '해당 월의 실적을 목표로 나눈 백분율. (실적 ÷ 목표) × 100.' },
    { term: '누적 달성률', def: '연초부터 해당 월까지의 누적 실적을 누적 목표로 나눈 백분율.' },
    { term: '연간 진척률', def: '연초부터 현재까지의 누적 실적을 연간 총 목표로 나눈 백분율.' },
    { term: '신호등 체계', def: '100% 이상 = 선도(녹색), 80~100% = 추격(주황), 80% 미만 = 취약(빨강). 경쟁사 대비 상대 점수 기준으로 색상 분류.' },
  ],
  en: [
    { term: 'GEO (Generative Engine Optimization)', def: 'A strategy to optimize content so that brands and products are better surfaced and recommended by generative AI search engines (e.g., ChatGPT, Gemini, Perplexity).' },
    { term: 'Visibility', def: 'GEO Visibility Score quantifies how often LG products are mentioned/recommended by generative AI engines (ChatGPT, Gemini, etc.) on a 0–100% scale. MoM shows month-over-month change. Competitor comparison is calculated as (LG Score / Top Brand Score) × 100%. ≥100% = Lead, ≥80% = Behind, <80% = Critical.' },
    { term: 'Visibility — by Country', def: 'Country-level GEO Visibility measures how often AI engines mention/recommend LG for each product category in each market (US, UK, DE, etc.). Bar colors indicate relative scores vs competitors: green (Lead), orange (Behind), red (Critical). Values below show top competitor score and gap in %p.' },
    { term: 'Citation', def: 'Citation Score quantifies the influence of external sources (review sites, media, etc.) referenced by AI when answering LG product queries. Higher scores indicate more frequent citation. Changes reflect month-over-month contribution shifts.' },
    { term: 'Citation — Dotcom', def: 'Dotcom Citation measures how often AI cites LG/Samsung official site page types (TTL, PLP, PDP, etc.). TTL = total, PLP = category listing, PDP = product detail, Microsites = campaign page citation counts.' },
    { term: 'Readability', def: 'A metric evaluating how easily content can be parsed and understood by AI engines. Influenced by structured data, clear sentence structure, etc.' },
    { term: 'KPI (Key Performance Indicator)', def: 'Core performance metrics. In GEO, these include Visibility, Citation Rate, Readability Score, etc.' },
    { term: 'BU (Business Unit)', def: 'Organizational division. Categorized as MS, HS, ES, etc.' },
    { term: 'Stakeholder', def: 'An organizational unit participating in GEO improvement activities. E.g., MS, HS, ES, PR, Brand, etc.' },
    { term: 'Achievement Rate', def: 'Monthly actual performance divided by target, expressed as a percentage. (Actual / Goal) x 100.' },
    { term: 'Cumulative Achievement Rate', def: 'Year-to-date cumulative actual divided by cumulative goal, expressed as a percentage.' },
    { term: 'Annual Progress Rate', def: 'Year-to-date cumulative actual divided by the total annual target, expressed as a percentage.' },
    { term: 'Traffic Light System', def: '≥100% = Lead (green), 80–100% = Behind (orange), <80% = Critical (red). Color-coded based on relative score vs competitor.' },
  ],
}

function glossaryTabHtml(lang) {
  const entries = GLOSSARY_DATA[lang] || GLOSSARY_DATA.ko
  const title = lang === 'en' ? 'GEO Glossary' : 'GEO 용어 사전'
  const subtitle = lang === 'en'
    ? 'Key terms and definitions used across the GEO dashboards.'
    : 'GEO 대시보드 전반에서 사용되는 주요 용어와 정의입니다.'
  return `<div style="max-width:840px;margin:32px auto;padding:0 40px">
    <h2 style="font-size:24px;font-weight:800;color:#1A1A1A;margin-bottom:6px">${title}</h2>
    <p style="font-size:15px;color:#64748B;margin-bottom:28px">${subtitle}</p>
    <div style="display:flex;flex-direction:column;gap:12px">
      ${entries.map(e => `<div style="background:#fff;border:1px solid #E2E8F0;border-radius:10px;padding:16px 20px">
        <div style="font-size:16px;font-weight:700;color:#1A1A1A;margin-bottom:6px">${e.term}</div>
        <div style="font-size:15px;color:#64748B;line-height:1.7">${e.def}</div>
      </div>`).join('')}
    </div>
  </div>`
}

function promptListTabHtml(appendixPrompts, lang) {
  if (!appendixPrompts || appendixPrompts.length === 0) {
    const msg = lang === 'en' ? 'No Prompt data available.' : '프롬프트 데이터가 없습니다.'
    return `<div style="display:flex;align-items:center;justify-content:center;min-height:400px;color:#64748B;font-size:16px">${msg}</div>`
  }
  const title = lang === 'en' ? 'Prompt List' : 'Prompt List'
  const subtitle = lang === 'en' ? 'List of prompts used for GEO KPI measurement.' : 'GEO KPI 측정에 사용되는 프롬프트 목록입니다.'
  const allLabel = lang === 'en' ? 'All' : '전체'
  const totalLabel = lang === 'en' ? 'Total' : '총'
  const itemsLabel = lang === 'en' ? '' : '개'
  const clearLabel = lang === 'en' ? 'Clear filters' : '필터 초기화'
  const cols = [
    { key: 'country', label: lang === 'en' ? 'Country' : '국가' },
    { key: 'division', label: 'Division' },
    { key: 'category', label: lang === 'en' ? 'Category' : '카테고리' },
    { key: 'branded', label: lang === 'en' ? 'Type' : '유형' },
    { key: 'cej', label: 'CEJ' },
    { key: 'topic', label: lang === 'en' ? 'Topic' : '토픽' },
  ]

  // Build unique options per column
  const optionsMap = {}
  cols.forEach(c => {
    const set = new Set()
    appendixPrompts.forEach(p => { if (p[c.key]) set.add(p[c.key]) })
    optionsMap[c.key] = [...set].sort()
  })

  // Embed data as JSON for client-side filtering
  const jsonData = JSON.stringify(appendixPrompts).replace(/</g, '\\u003c').replace(/>/g, '\\u003e')
  const jsonOptions = JSON.stringify(optionsMap).replace(/</g, '\\u003c').replace(/>/g, '\\u003e')

  const divColors = JSON.stringify({ MS: '#3B82F6', HS: '#10B981', ES: '#F59E0B', PR: '#8B5CF6' })
  const cejColors = JSON.stringify({ Awareness: '#6366F1', Interest: '#3B82F6', Conversion: '#10B981' })

  return `<div style="max-width:1200px;margin:32px auto;padding:0 40px">
    <h2 style="font-size:24px;font-weight:800;color:#1A1A1A;margin-bottom:6px">${title}</h2>
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:20px">
      <span style="font-size:15px;color:#64748B">${subtitle}</span>
      <span id="pl-count" style="font-size:12px;color:#94A3B8">${totalLabel} ${appendixPrompts.length}${itemsLabel ? ' ' + itemsLabel : ''}</span>
      <span id="pl-clear" onclick="_plClear()" style="font-size:11px;color:#3B82F6;cursor:pointer;display:none">${clearLabel}</span>
    </div>
    <div style="background:#fff;border:1px solid #E2E8F0;border-radius:10px;overflow:hidden">
      <table id="pl-table" style="width:100%;border-collapse:collapse;font-size:13px">
        <thead>
          <tr style="background:#F8FAFC">
            <th style="padding:10px 12px;text-align:center;font-size:11px;font-weight:700;color:#64748B">#</th>
            ${cols.map(c => `<th data-col="${c.key}" onclick="_plToggle('${c.key}')" style="padding:10px 12px;text-align:center;font-size:11px;font-weight:700;color:#64748B;cursor:pointer;position:relative;white-space:nowrap;user-select:none">${c.label} <span id="pl-arrow-${c.key}" style="font-size:9px;color:#94A3B8">▽</span></th>`).join('')}
            <th style="padding:10px 12px;text-align:left;font-size:11px;font-weight:700;color:#64748B;min-width:300px">${lang === 'en' ? 'Prompt' : '프롬프트'}</th>
          </tr>
        </thead>
        <tbody id="pl-body"></tbody>
      </table>
    </div>
    <!-- Filter dropdowns (hidden by default) -->
    ${cols.map(c => `<div id="pl-dd-${c.key}" style="display:none;position:fixed;z-index:999;background:#fff;border:1px solid #E2E8F0;border-radius:8px;padding:6px;min-width:140px;max-height:240px;overflow-y:auto;box-shadow:0 8px 24px rgba(0,0,0,0.15)">
      <div onclick="_plFilter('${c.key}','')" style="padding:5px 10px;border-radius:4px;cursor:pointer;font-size:12px;color:#64748B">${allLabel}</div>
      ${optionsMap[c.key].map(v => `<div onclick="_plFilter('${c.key}','${v.replace(/'/g, "\\'")}')" style="padding:5px 10px;border-radius:4px;cursor:pointer;font-size:12px;color:#64748B">${v}</div>`).join('')}
    </div>`).join('')}
  </div>
  <script>
  (function(){
    var _plData=${jsonData};
    var _plFilters={};
    var _divC=${divColors};
    var _cejC=${cejColors};
    var _openDD=null;
    function badge(t,c){return '<span style="display:inline-block;padding:2px 8px;border-radius:4px;font-size:11px;font-weight:700;background:'+c+'22;color:'+c+';white-space:nowrap">'+t+'</span>';}
    function render(){
      var f=_plData.filter(function(p){
        for(var k in _plFilters){if(_plFilters[k]&&p[k]!==_plFilters[k])return false;}
        return true;
      });
      var html='';
      f.forEach(function(p,i){
        html+='<tr style="border-top:1px solid #E2E8F0" onmouseenter="this.style.background=\\'#F8FAFC\\'" onmouseleave="this.style.background=\\'transparent\\'">';
        html+='<td style="padding:8px 12px;text-align:center;font-size:13px;color:#64748B">'+(i+1)+'</td>';
        html+='<td style="padding:8px 12px;text-align:center">'+badge(p.country,'#3B82F6')+'</td>';
        html+='<td style="padding:8px 12px;text-align:center">'+badge(p.division,_divC[p.division]||'#64748B')+'</td>';
        html+='<td style="padding:8px 12px;text-align:center;font-size:13px;color:#64748B">'+p.category+'</td>';
        html+='<td style="padding:8px 12px;text-align:center">'+badge(p.branded,p.branded==='Brand'?'#A50034':'#64748B')+'</td>';
        html+='<td style="padding:8px 12px;text-align:center">'+badge(p.cej,_cejC[p.cej]||'#64748B')+'</td>';
        html+='<td style="padding:8px 12px;text-align:center;font-size:13px;color:#64748B">'+p.topic+'</td>';
        html+='<td style="padding:8px 12px;text-align:left;font-size:13px;color:#1A1A1A;font-weight:500">'+p.prompt+'</td>';
        html+='</tr>';
      });
      document.getElementById('pl-body').innerHTML=html;
      document.getElementById('pl-count').textContent='${totalLabel} '+f.length+'${itemsLabel ? ' ' + itemsLabel : ''}';
      var hasF=Object.keys(_plFilters).some(function(k){return !!_plFilters[k];});
      document.getElementById('pl-clear').style.display=hasF?'':'none';
      // Update arrows
      ${JSON.stringify(cols.map(c => c.key))}.forEach(function(k){
        document.getElementById('pl-arrow-'+k).textContent=_plFilters[k]?'▼':'▽';
        document.getElementById('pl-arrow-'+k).style.color=_plFilters[k]?'#3B82F6':'#94A3B8';
      });
    }
    window._plToggle=function(col){
      if(_openDD===col){_closeDD();return;}
      _closeDD();
      var th=document.querySelector('th[data-col="'+col+'"]');
      var rect=th.getBoundingClientRect();
      var dd=document.getElementById('pl-dd-'+col);
      dd.style.display='block';
      dd.style.left=rect.left+'px';
      dd.style.top=rect.bottom+2+'px';
      // highlight active
      var children=dd.children;
      for(var i=0;i<children.length;i++){
        var isActive=i===0?!_plFilters[col]:children[i].textContent===_plFilters[col];
        children[i].style.color=isActive?'#3B82F6':'#64748B';
        children[i].style.fontWeight=isActive?'700':'400';
        children[i].style.background=isActive?'rgba(59,130,246,0.08)':'transparent';
      }
      _openDD=col;
    };
    function _closeDD(){
      if(_openDD){document.getElementById('pl-dd-'+_openDD).style.display='none';_openDD=null;}
    }
    window._plFilter=function(col,val){
      _plFilters[col]=val;_closeDD();render();
    };
    window._plClear=function(){_plFilters={};_closeDD();render();};
    document.addEventListener('click',function(e){
      if(_openDD&&!e.target.closest('th[data-col]')&&!e.target.closest('[id^="pl-dd-"]'))_closeDD();
    });
    render();
  })();
  </script>`
}

// ─── PR Visibility 탭 HTML ──────────────────────────────────────────────────
function prVisibilityTabHtml(weeklyPR, weeklyPRLabels, lang, meta, appendixPrompts, extra) {
  if (!weeklyPR || !weeklyPR.length) {
    const msg = lang === 'en' ? 'No PR Visibility data available.' : 'PR Visibility 데이터가 없습니다.'
    return `<div style="display:flex;align-items:center;justify-content:center;min-height:calc(100vh - 160px);color:#94A3B8;font-size:16px">${msg}</div>`
  }
  const ALL_COUNTRIES = ['US','CA','UK','DE','ES','BR','MX','AU','VN','IN']
  // W5부터 시작하는 12주 고정 라벨
  const W12 = []
  for (let i = 0; i < 12; i++) W12.push('w' + (5 + i))

  const topics = [...new Set(weeklyPR.map(r => r.topic))].filter(Boolean)
  const types = [...new Set(weeklyPR.map(r => r.type))].filter(Boolean)
  const dataCnts = [...new Set(weeklyPR.map(r => r.country))].filter(c => c && c !== 'TTL')
  const countries = ALL_COUNTRIES.filter(c => dataCnts.includes(c)).concat(ALL_COUNTRIES.filter(c => !dataCnts.includes(c)))

  const jsonPR = JSON.stringify(weeklyPR).replace(/</g, '\\u003c')
  const jsonW12 = JSON.stringify(W12)
  const jsonTopics = JSON.stringify(topics)
  const jsonTypes = JSON.stringify(types)
  const jsonCountries = JSON.stringify(countries)
  const CW = 72 // 각 주차 컬럼 고정 너비 (px)

  // ── raw 문자열 → 맵 파서 ──
  function parseKeyValRaw(raw) {
    const map = {}
    if (!raw) return map
    String(raw).split('\n').forEach(line => {
      const idx = line.indexOf('=')
      if (idx > 0) { const k = line.slice(0, idx).trim(), v = line.slice(idx + 1).trim(); if (k) map[k] = v }
    })
    return map
  }

  // ── 토픽별 US 핵심 프롬프트 매핑 ──
  const topicPromptMap = parseKeyValRaw(meta?.prTopicPromptsRaw)
  if (appendixPrompts && appendixPrompts.length) {
    topics.forEach(tp => {
      if (!topicPromptMap[tp]) {
        const match = appendixPrompts.find(p => p.topic === tp && p.country === 'US')
        if (match) topicPromptMap[tp] = match.prompt
      }
    })
  }

  // ── PR Topic List 시트에서 토픽 설명/카테고리 매핑 ──
  const prTopicList = extra?.prTopicList || []
  const sheetDescMap = {}
  const sheetCatMap = {}
  prTopicList.forEach(t => {
    // topic 또는 topicRow로 매칭
    const keys = [t.topic, t.topicRow, t.oldTopic].filter(Boolean).map(k => k.trim())
    keys.forEach(k => {
      if (t.explanation && !sheetDescMap[k]) sheetDescMap[k] = t.explanation
      if (t.bu && !sheetCatMap[k]) sheetCatMap[k] = t.bu
    })
  })
  const DEFAULT_TOPIC_DESCS = {
    'TV': 'OLED·QNED 등 TV 제품 라인업 관련',
    'TV Platform': 'webOS 등 스마트 TV 플랫폼·솔루션 관련',
    'Audio': '오디오 제품군 전반',
    'PC': '그램(gram) 노트북·모니터 등 IT 제품 관련',
    'IT': '모니터·그램(gram) 노트북 등 IT 제품 관련',
  }
  const topicDescMap = { ...DEFAULT_TOPIC_DESCS, ...sheetDescMap, ...parseKeyValRaw(meta?.prTopicDescsRaw) }

  // ── 토픽 카테고리 분류: PR Topic List 시트의 BU 기준 ──
  const topicCategoryMap = {}
  topics.forEach(tp => {
    const sheetBU = sheetCatMap[tp]
    if (sheetBU) {
      topicCategoryMap[tp] = sheetBU
    } else {
      // 폴백: 기존 분류
      const CONSUMER_TOPICS = ['Audio', 'Kitchen', 'Living', 'TV', 'TV Platform', 'IT', 'PC']
      topicCategoryMap[tp] = CONSUMER_TOPICS.some(ct => tp.toLowerCase().includes(ct.toLowerCase()))
        ? 'MS/HS' : 'CORP/ES/VS'
    }
  })

  return `<div style="max-width:1400px;margin:0 auto;padding:28px 40px;font-family:${FONT}">
    <!-- 필터 바 -->
    <div id="pr-filters" style="display:flex;gap:16px;align-items:center;flex-wrap:wrap;margin-bottom:16px;padding:10px 16px;background:#fff;border:1px solid #E8EDF2;border-radius:10px">
      <div style="display:flex;align-items:center;gap:6px">
        <span style="font-size:18px;font-weight:700;color:#64748B">${lang === 'en' ? 'Type' : '유형'}</span>
        <div id="pr-type-chips"></div>
      </div>
      <div style="width:1px;height:24px;background:#E8EDF2"></div>
      <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
        <span style="font-size:18px;font-weight:700;color:#64748B">${lang === 'en' ? 'Country' : '국가'}</span>
        <div id="pr-cnty-chips" style="display:flex;gap:4px;flex-wrap:wrap"></div>
      </div>
    </div>
    <!-- NOTICE -->
    <div style="margin:0 0 24px;padding:16px;background:#0F172A;border:1px solid #1E293B;border-radius:10px">
      <span style="display:block;font-size:14px;font-weight:700;color:${RED};text-transform:uppercase;margin-bottom:6px">NOTICE</span>
      <span style="font-size:15px;color:#fff;line-height:1.8">${(meta?.prNotice) || (lang === 'en'
        ? 'PR Visibility tracks how well "LG Electronics" is featured in AI search engine responses to queries related to our key business areas, product lines, and service topics. It monitors the visibility of our information versus competitors by major topic. For "Brand" type queries, items with Visibility below 100% indicate the need for GEO strategy review.'
        : 'PR Visibility 는 AI 검색 엔진 내 자사 주요 사업/제품군/서비스 토픽 관련 질의에 대한 답변에서 \'LG전자\'가 얼마나 잘 노출되는지를 추적합니다. 주요 토픽 별로 경쟁사 대비 자사 정보의 가시성을 모니터링 하며, \'브랜드\' 유형의 경우, Visibility 100% 미만 항목은 GEO 전략 검토가 필요함을 의미합니다.')}</span>
    </div>
    <!-- 상단 요약 매트릭스 -->
    <div class="section-card" style="margin-bottom:24px">
      <div class="section-header">
        <div class="section-title">${lang === 'en' ? 'PR Visibility Overview' : 'PR Visibility 현황'} <span style="font-size:12px;font-weight:600;color:#3B82F6;background:#EFF6FF;padding:2px 8px;border-radius:6px;border:1px solid #93C5FD">${weeklyPRLabels?.length ? weeklyPRLabels[weeklyPRLabels.length - 1].toUpperCase() : ''} ${lang === 'en' ? 'data' : '기준'}</span></div>
        <span class="legend"><i style="background:#15803D"></i>${lang === 'en' ? 'Lead ≥100%' : '선도 ≥100%'} <i style="background:#D97706"></i>${lang === 'en' ? 'Behind ≥80%' : '추격 ≥80%'} <i style="background:#BE123C"></i>${lang === 'en' ? 'Critical <80%' : '취약 <80%'} <span style="color:#94A3B8;font-size:11px;margin-left:6px">${lang === 'en' ? '() = vs SS ratio' : '() 는 SS 대비 경쟁비'}</span></span>
      </div>
      <div class="section-body" id="pr-matrix"></div>
    </div>
    <!-- 토픽별 주간 트렌드 -->
    <div class="section-card">
      <div class="section-header">
        <div class="section-title">${lang === 'en' ? 'Weekly Competitor Trend by Topic' : '토픽별 주간 경쟁사 트렌드'}</div>
        <span class="legend">W5–W16 (12${lang === 'en' ? ' weeks' : '주'})</span>
      </div>
      <div class="section-body" id="pr-sections"></div>
    </div>
  </div>
  <script>
  (function(){
    var D=${jsonPR},W=${jsonW12},TP=${jsonTopics},TY=${jsonTypes},CN=${jsonCountries};
    var CW=${CW};
    var TOPIC_CAT=${JSON.stringify(topicCategoryMap)};
    var TOPIC_PROMPT=${JSON.stringify(topicPromptMap).replace(/</g, '\\u003c')};
    var TOPIC_DESC=${JSON.stringify(topicDescMap).replace(/</g, '\\u003c')};
    var _prTopicList=${JSON.stringify(prTopicList).replace(/</g, '\\u003c')};
    var _CF=${JSON.stringify(COUNTRY_FULL_NAME)};
    function cf(c){return _CF[c]||_CF[c&&c.toUpperCase()]||c}
    var fType=TY[0]||'non-brand';
    var fCnty={};CN.forEach(function(c){fCnty[c]=true});
    var RED='${RED}',COMP='${COMP}';
    var BC={'LG':RED,'Samsung':COMP,'Google':'#4285F4','Apple':'#A2AAAD','Sony':'#000','Bosch':'#EA0016','Dyson':'#6B21A8'};
    var FB=['#3B82F6','#10B981','#F59E0B','#8B5CF6','#EC4899','#06B6D4','#84CC16','#F97316'];
    function bc(n,i){return BC[n]||FB[i%FB.length]}
    // 신호등 3단: lead(≥100%) / behind(≥80%) / critical(<80%) — 다른 대시보드와 통일
    function tl(lg,ss){
      if(lg==null)return{bg:'#F8FAFC',color:'#94A3B8',border:'#E2E8F0',label:'—'};
      if(ss==null||ss===0)return{bg:'#ECFDF5',color:'#15803D',border:'#A7F3D0',label:'${lang==='en'?'Lead':'선도'}'};
      var r=lg/ss*100;
      if(r>=100)return{bg:'#ECFDF5',color:'#15803D',border:'#A7F3D0',label:'${lang==='en'?'Lead':'선도'}'};
      if(r>=80) return{bg:'#FFFBEB',color:'#B45309',border:'#FDE68A',label:'${lang==='en'?'Behind':'추격'}'};
      return{bg:'#FFF1F2',color:'#BE123C',border:'#FECDD3',label:'${lang==='en'?'Critical':'취약'}'};
    }
    function chip(txt,on,onclick){return'<span onclick="'+onclick+'" style="padding:3px 10px;border-radius:6px;font-size:17px;font-weight:600;cursor:pointer;border:1px solid '+(on?'#0F172A':'#E2E8F0')+';background:'+(on?'#0F172A':'#F8FAFC')+';color:'+(on?'#fff':'#475569')+';white-space:nowrap;user-select:none">'+txt+'</span>'}
    function renderFilters(){
      var te=document.getElementById('pr-type-chips');if(te)te.innerHTML=TY.map(function(t){return chip(t,fType===t,"_prSetType('"+t+"')")}).join(' ');
      var ce=document.getElementById('pr-cnty-chips');if(!ce)return;
      var allOn=CN.every(function(c){return fCnty[c]});
      ce.innerHTML=chip('${lang==='en'?'All':'전체'}',allOn,'_prCntyAll()')+' '+CN.map(function(c){return chip(cf(c),!!fCnty[c],"_prCntyTog('"+c+"')")}).join(' ');
    }
    // 특정 토픽+국가+브랜드의 특정 주 값
    function val(topic,cnty,brand,wk){
      var r=D.find(function(x){return x.topic===topic&&x.country===cnty&&x.brand===brand&&x.type===fType});
      return r&&r.scores[wk]!=null?r.scores[wk]:null;
    }
    function lastVal(topic,cnty,brand){for(var i=W.length-1;i>=0;i--){var v=val(topic,cnty,brand,W[i]);if(v!=null)return v}return null}
    // ── 상단 매트릭스: PR Topic List 시트 전용 ──
    // PR Topic List의 토픽만 행으로 사용. 기존 토픽(oldTopic)으로 Weekly PR 데이터 JOIN.
    function renderMatrix(){
      var el=document.getElementById('pr-matrix');if(!el)return;
      if(!_prTopicList||!_prTopicList.length){el.innerHTML='<p style="text-align:center;color:#94A3B8;padding:20px">PR Topic List 시트를 동기화해주세요.</p>';return}
      var lastW=W[W.length-1];
      var ac=CN.filter(function(c){return fCnty[c]});
      var cols=['TTL'].concat(ac);
      var h='<div style="overflow-x:auto"><table style="border-collapse:collapse;width:100%">';
      h+='<thead><tr><th style="padding:8px 6px;text-align:center;font-size:16px;font-weight:700;color:#64748B;border-bottom:2px solid #E8EDF2;width:60px">BU</th>';
      h+='<th style="padding:8px 10px;text-align:left;font-size:16px;font-weight:700;color:#64748B;border-bottom:2px solid #E8EDF2;min-width:120px">${lang==='en'?'Topic':'토픽'} <span style="font-weight:400;color:#94A3B8">('+lastW+')</span></th>';
      h+='<th style="padding:8px 10px;text-align:left;font-size:16px;font-weight:700;color:#64748B;border-bottom:2px solid #E8EDF2;min-width:140px">${lang==='en'?'Description':'설명'}</th>';
      cols.forEach(function(c){h+='<th style="padding:8px 6px;text-align:center;font-size:16px;font-weight:700;color:#64748B;border-bottom:2px solid #E8EDF2;min-width:56px">'+cf(c)+'</th>'});
      h+='</tr></thead><tbody>';
      var prevBU='';
      _prTopicList.forEach(function(row,idx){
        var bu=row.bu||'';
        var isNewBU=bu&&bu!==prevBU;
        var buCount=0;
        if(isNewBU){_prTopicList.forEach(function(r){if(r.bu===bu)buCount++})}
        var dataKey=(row.oldTopic||'').trim();
        h+='<tr style="border-bottom:1px solid #F1F5F9;'+(isNewBU&&idx>0?'border-top:2px solid #CBD5E1;':'')+'">';
        if(isNewBU){
          h+='<td rowspan="'+buCount+'" style="padding:6px 8px;font-size:15px;font-weight:700;color:#475569;vertical-align:middle;text-align:center;border-right:2px solid #E8EDF2;background:#F8FAFC;line-height:1.4;word-break:keep-all">'+bu+'</td>';
          prevBU=bu;
        }
        h+='<td style="padding:6px 10px;font-size:16px;font-weight:600;color:#1A1A1A">'+row.topic+'</td>';
        h+='<td style="padding:6px 10px;font-size:14px;color:#64748B;line-height:1.4">'+((row.explanation||''))+'</td>';
        if(!dataKey){
          h+='<td colspan="'+cols.length+'" style="padding:8px 12px;text-align:center;font-size:13px;color:#94A3B8;font-style:italic;border:1px solid #F1F5F9;background:#FAFBFC">${lang==='en'?'Prompt addition/modification in progress (KPI tracking planned within April)':'Prompt 추가/수정 진행 중 (4월 내 KPI 추적 진행 예정)'}</td>';
        }else{
          cols.forEach(function(cnty){
            var lg=lastVal(dataKey,cnty,'LG');
            var ss=lastVal(dataKey,cnty,'Samsung');
            var s=tl(lg,ss);
            var ratio=(lg!=null&&ss!=null&&ss>0)?Math.round(lg/ss*100)+'%':'';
            h+='<td style="padding:4px 6px;text-align:center;background:'+s.bg+';color:'+s.color+';font-size:15px;font-weight:700;font-variant-numeric:tabular-nums;border:1px solid '+s.border+'">'+(lg!=null?lg.toFixed(1)+'%':'—')+(ratio?'<div style="font-size:13px;font-weight:400;color:#64748B">('+ratio+')</div>':'')+'</td>';
          });
        }
        h+='</tr>';
      });
      h+='</tbody></table></div>';
      el.innerHTML=h;
    }
    // ── SVG 차트 (고정 컬럼 너비로 정렬) ──
    function svgChart(brandData,w,h){
      var brands=Object.keys(brandData);if(!brands.length)return'';
      var N=W.length;var pl=0,pr=0,pt=16,pb=4;var cw=w;var ch=h-pt-pb;
      var mn=Infinity,mx=-Infinity;
      brands.forEach(function(b){(brandData[b]||[]).forEach(function(v){if(v!=null){if(v<mn)mn=v;if(v>mx)mx=v}})});
      if(!isFinite(mn)){mn=0;mx=100}
      var pad=Math.max((mx-mn)*0.1,2);mn-=pad;mx+=pad;var rng=mx-mn||1;
      var s='<svg viewBox="0 0 '+w+' '+h+'" width="'+w+'" height="'+h+'" xmlns="http://www.w3.org/2000/svg">';
      for(var g=0;g<=4;g++){var gy=pt+(g/4)*ch;s+='<line x1="0" y1="'+gy+'" x2="'+w+'" y2="'+gy+'" stroke="#F1F5F9" stroke-width="1"/>';}
      brands.forEach(function(b,bi){
        var vals=brandData[b]||[];var c=bc(b,bi);var isLG=b==='LG';
        var pts=[];
        vals.forEach(function(v,i){if(v!=null){var x=(i+0.5)*(cw/N);var y=pt+((mx-v)/rng)*ch;pts.push({x:x,y:y})}});
        if(!pts.length)return;
        var path=pts.map(function(p,i){return(i?'L':'M')+p.x.toFixed(1)+','+p.y.toFixed(1)}).join(' ');
        s+='<path d="'+path+'" fill="none" stroke="'+c+'" stroke-width="'+(isLG?2.5:1.5)+'" opacity="'+(isLG?1:0.5)+'"/>';
        pts.forEach(function(p){s+='<circle cx="'+p.x.toFixed(1)+'" cy="'+p.y.toFixed(1)+'" r="'+(isLG?4:3)+'" fill="'+c+'" opacity="'+(isLG?1:0.5)+'"/>'});
      });
      s+='</svg>';return s;
    }
    // ── 토픽별 섹션 렌더 ──
    function renderSections(){
      var el=document.getElementById('pr-sections');if(!el)return;
      var N=W.length;var tblW=CW*N;var html='';
      // PR Topic List의 기존 토픽(oldTopic)이 있는 토픽만 섹션 표시
      var validTopics=[];
      if(_prTopicList&&_prTopicList.length){
        _prTopicList.forEach(function(t){if(t.oldTopic&&t.oldTopic.trim())validTopics.push(t.oldTopic.trim())});
      }
      var sectionTopics=validTopics.length?validTopics:TP;
      sectionTopics.forEach(function(topic){
        var ttl=D.filter(function(r){return r.topic===topic&&r.country==='TTL'&&r.type===fType});
        if(!ttl.length)return;
        var brandMap={};
        ttl.forEach(function(r){if(!brandMap[r.brand])brandMap[r.brand]={}; W.forEach(function(wk){if(r.scores[wk]!=null){brandMap[r.brand][wk]=r.scores[wk]}})});
        var brands=Object.keys(brandMap).sort(function(a,b){if(a==='LG')return -1;if(b==='LG')return 1;return 0});
        var chartData={};
        brands.forEach(function(b){chartData[b]=W.map(function(wk){return brandMap[b][wk]!=null?brandMap[b][wk]:null})});
        var lgLast=chartData.LG?chartData.LG[N-1]:null;
        var ssLast=chartData.Samsung?chartData.Samsung[N-1]:null;
        var st=tl(lgLast,ssLast);
        var legend=brands.map(function(b,i){var c=bc(b,i);var isLG=b==='LG';return'<span style="display:inline-flex;align-items:center;gap:3px;margin-right:10px"><i style="display:inline-block;width:10px;height:3px;border-radius:1px;background:'+c+'"></i><span style="font-size:15px;color:'+(isLG?'#1A1A1A':'#94A3B8')+';font-weight:'+(isLG?700:400)+'">'+b+'</span></span>'}).join('');
        // 국가별 LG 서브
        var ac=CN.filter(function(c){return fCnty[c]});
        var cntyHtml=ac.map(function(cn){
          var cr=D.filter(function(r){return r.topic===topic&&r.country===cn&&r.brand==='LG'&&r.type===fType});
          if(!cr.length)return'';
          var cells=W.map(function(wk){var v=cr[0]&&cr[0].scores[wk];return'<td style="width:'+CW+'px;min-width:'+CW+'px;max-width:'+CW+'px;text-align:center;padding:5px 0;font-size:16px;color:#475569;font-variant-numeric:tabular-nums">'+(v!=null?v.toFixed(1)+'%':'—')+'</td>'}).join('');
          return'<tr style="border-top:1px solid #F1F5F9"><td style="padding:5px 8px;font-size:16px;font-weight:600;color:#64748B;white-space:nowrap">'+cf(cn)+'</td>'+cells+'</tr>';
        }).filter(Boolean).join('');

        html+='<div style="border:1px solid #E8EDF2;border-radius:12px;margin-bottom:20px;overflow:hidden">';
        // 헤더
        html+='<div style="padding:14px 20px;background:#FAFBFC;border-bottom:1px solid #F1F5F9;display:flex;align-items:center;gap:10px;flex-wrap:wrap">';
        html+='<span style="width:4px;height:22px;border-radius:4px;background:'+RED+';flex-shrink:0"></span>';
        html+='<span style="font-size:21px;font-weight:700;color:#1A1A1A">'+topic+'</span>';
        var tpPrompt=TOPIC_PROMPT[topic]||'';
        if(tpPrompt)html+='<span style="font-size:18px;color:#64748B;font-weight:500;font-style:italic;max-width:700px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">"'+tpPrompt+'"</span>';
        if(st.label!=='—')html+='<span style="font-size:17px;font-weight:700;padding:2px 10px;border-radius:10px;background:'+st.bg+';color:'+st.color+';border:1px solid '+st.border+'">'+st.label+'</span>';
        if(lgLast!=null)html+='<span style="font-size:18px;font-weight:700;color:#1A1A1A">LG '+lgLast.toFixed(1)+'%</span>';
        if(ssLast!=null)html+='<span style="font-size:17px;color:#94A3B8">vs Samsung '+ssLast.toFixed(1)+'%</span>';
        html+='<span style="margin-left:auto">'+legend+'</span></div>';
        // 차트+테이블 (같은 너비 정렬)
        html+='<div style="overflow-x:auto;padding:0 16px 12px"><div style="display:flex"><div style="width:120px;flex-shrink:0"></div><div style="width:'+tblW+'px;flex-shrink:0;padding:8px 0">'+svgChart(chartData,tblW,160)+'</div></div>';
        // 테이블
        html+='<table style="border-collapse:collapse;table-layout:fixed;width:'+(120+tblW)+'px">';
        html+='<colgroup><col style="width:120px">';W.forEach(function(){html+='<col style="width:'+CW+'px">'});html+='</colgroup>';
        html+='<tr style="border-bottom:1px solid #E8EDF2"><th style="text-align:left;padding:5px 8px;font-size:17px;color:#94A3B8;font-weight:600">Brand</th>';
        W.forEach(function(wk){html+='<th style="text-align:center;padding:5px 0;font-size:17px;color:#94A3B8;font-weight:600">'+wk+'</th>'});
        html+='</tr>';
        brands.forEach(function(b,i){
          var c=bc(b,i);var isLG=b==='LG';
          html+='<tr style="background:'+(isLG?'#FFF8F9':i%2===0?'#fff':'#FAFBFC')+'"><td style="padding:5px 8px;font-size:17px;font-weight:'+(isLG?700:500)+';color:'+c+';white-space:nowrap"><i style="display:inline-block;width:6px;height:6px;border-radius:50%;background:'+c+';margin-right:4px;vertical-align:0"></i>'+b+'</td>';
          W.forEach(function(wk,wi){var v=chartData[b][wi];html+='<td style="text-align:center;padding:5px 0;font-size:17px;color:'+(v!=null?(isLG?'#1A1A1A':'#475569'):'#CBD5E1')+';font-weight:'+(isLG?700:400)+';font-variant-numeric:tabular-nums">'+(v!=null?v.toFixed(1)+'%':'—')+'</td>'});
          html+='</tr>';
        });
        if(cntyHtml){
          html+='<tr><td colspan="'+(N+1)+'" style="padding:6px 8px;font-size:14px;font-weight:700;color:#64748B;background:#F8FAFC;border-top:2px solid #E8EDF2">${lang==='en'?'LG by Country':'LG 국가별'}</td></tr>'+cntyHtml;
        }
        html+='</table></div></div>';
      });
      if(!html)html='<div style="text-align:center;padding:60px;color:#94A3B8">${lang==='en'?'No data':'데이터 없음'}</div>';
      el.innerHTML=html;
    }
    function renderAll(){renderFilters();renderMatrix();renderSections()}
    window._prSetType=function(t){fType=t;renderAll()};
    window._prCntyTog=function(c){fCnty[c]=!fCnty[c];renderAll()};
    window._prCntyAll=function(){var on=CN.every(function(c){return fCnty[c]});CN.forEach(function(c){fCnty[c]=!on});renderAll()};
    renderAll();
  })();
  </script>`
}

// ─── Brand Prompt Visibility 탭 HTML (stakeholder 필터링) ────────────────────
function brandPromptTabHtml(bpData, bpLabels, lang, stakeholderFilter, tabTitle, meta) {
  const filtered = (bpData || []).filter(r => !stakeholderFilter || r.stakeholder === stakeholderFilter)
  if (!filtered.length) {
    const msg = lang === 'en' ? 'No data available.' : '데이터가 없습니다.'
    return `<div style="display:flex;align-items:center;justify-content:center;min-height:calc(100vh - 160px);color:#94A3B8;font-size:16px">${msg}</div>`
  }
  // W5부터 12주 고정
  const W12 = []
  for (let i = 0; i < 12; i++) W12.push('w' + (5 + i))
  // stakeholder별로 topic 그룹핑 (null이면 모든 stakeholder)
  const stakeholders = stakeholderFilter
    ? [stakeholderFilter]
    : [...new Set(filtered.map(r => r.stakeholder))].filter(Boolean)
  const groupedByStakeholder = stakeholders.map(sh => ({
    stakeholder: sh,
    topics: [...new Set(filtered.filter(r => r.stakeholder === sh).map(r => r.topic))].filter(Boolean),
  }))
  const CW = 72

  const jsonBP = JSON.stringify(filtered).replace(/</g, '\\u003c')
  const jsonW12 = JSON.stringify(W12)
  const jsonGroups = JSON.stringify(groupedByStakeholder)
  const elId = stakeholderFilter ? stakeholderFilter.replace(/[^a-zA-Z]/g, '') : 'bp'

  return `<div style="max-width:1400px;margin:0 auto;padding:28px 40px;font-family:${FONT}">
    <div class="section-card">
      <div class="section-header">
        <div class="section-title">${tabTitle || (lang === 'en' ? 'Brand Prompt Anomaly Check' : 'Brand Prompt 이상 점검')}</div>
        <span class="legend">W5–W16 (12${lang === 'en' ? ' weeks' : '주'})</span>
      </div>
      <div style="margin:16px 28px 0;padding:16px;background:#0F172A;border:1px solid #1E293B;border-radius:10px">
        <span style="display:block;font-size:14px;font-weight:700;color:${RED};text-transform:uppercase;margin-bottom:6px">Dashboard Guide</span>
        <span style="font-size:15px;color:#fff;line-height:1.8">${(meta?.bpNotice) || (lang === 'en'
          ? 'Brand Prompts should always return 100% visibility. If a prompt falls below 100%, it indicates a potential issue — check for negative sentiment, incorrect brand association, or competitor hijacking in the AI response.'
          : 'Brand Prompt는 자사 브랜드명을 직접 포함한 질의이므로 Visibility가 항상 100%여야 정상입니다. 100% 미만인 경우 AI 응답에서 부정적 sentiment, 브랜드 오인식, 경쟁사 대체 추천 등의 이슈가 발생했을 수 있으므로 해당 프롬프트의 응답 내용을 확인해야 합니다.')}</span>
      </div>
      <div class="section-body" id="${elId}-sections"></div>
    </div>
  </div>
  <script>
  (function(){
    var D=${jsonBP},W=${jsonW12},GROUPS=${jsonGroups};
    var CW=${CW},RED='${RED}';
    var N=W.length,tblW=CW*N;
    function svgChart(vals,w,h,color){
      if(!vals||!vals.length)return'';
      var pt=12,pb=4,ch=h-pt-pb;
      var mn=Infinity,mx=-Infinity;
      vals.forEach(function(v){if(v!=null){if(v<mn)mn=v;if(v>mx)mx=v}});
      if(!isFinite(mn)){mn=0;mx=100}
      var pad=Math.max((mx-mn)*0.1,1);mn-=pad;mx+=pad;var rng=mx-mn||1;
      var s='<svg viewBox="0 0 '+w+' '+h+'" width="'+w+'" height="'+h+'" xmlns="http://www.w3.org/2000/svg">';
      for(var g=0;g<=4;g++){var gy=pt+(g/4)*ch;s+='<line x1="0" y1="'+gy+'" x2="'+w+'" y2="'+gy+'" stroke="#F1F5F9" stroke-width="1"/>';}
      var pts=[];
      vals.forEach(function(v,i){if(v!=null){var x=(i+0.5)*(w/N);var y=pt+((mx-v)/rng)*ch;pts.push({x:x,y:y})}});
      if(pts.length>0){
        var path=pts.map(function(p,i){return(i?'L':'M')+p.x.toFixed(1)+','+p.y.toFixed(1)}).join(' ');
        s+='<path d="'+path+'" fill="none" stroke="'+color+'" stroke-width="2.5"/>';
        pts.forEach(function(p){s+='<circle cx="'+p.x.toFixed(1)+'" cy="'+p.y.toFixed(1)+'" r="4" fill="'+color+'"/>'});
      }
      s+='</svg>';return s;
    }
    // 신호등 3단
    function tl(v){
      if(v==null)return{bg:'#F8FAFC',color:'#94A3B8',border:'#E2E8F0',label:'—'};
      if(v>=100)return{bg:'#ECFDF5',color:'#15803D',border:'#A7F3D0',label:'${lang==='en'?'Lead':'선도'}'};
      if(v>=80) return{bg:'#FFFBEB',color:'#B45309',border:'#FDE68A',label:'${lang==='en'?'Behind':'추격'}'};
      return{bg:'#FFF1F2',color:'#BE123C',border:'#FECDD3',label:'${lang==='en'?'Critical':'취약'}'};
    }
    function renderTopic(topic, stakeholder){
      var rows=D.filter(function(r){return r.topic===topic&&r.stakeholder===stakeholder&&r.country==='TTL'});
      if(!rows.length)rows=D.filter(function(r){return r.topic===topic&&r.stakeholder===stakeholder});
      if(!rows.length)return '';
      var topicHtml=''
      ;(function(){
        var vals=W.map(function(wk){var r=rows[0];return r&&r.scores[wk]!=null?r.scores[wk]:null});
        var lastV=null;for(var i=vals.length-1;i>=0;i--){if(vals[i]!=null){lastV=vals[i];break}}
        var st=tl(lastV);

        topicHtml+='<div style="border:1px solid #E8EDF2;border-radius:12px;margin-bottom:16px;overflow:hidden">';
        topicHtml+='<div style="padding:14px 20px;background:#FAFBFC;border-bottom:1px solid #F1F5F9;display:flex;align-items:center;gap:10px;flex-wrap:wrap">';
        topicHtml+='<span style="width:4px;height:22px;border-radius:4px;background:'+RED+';flex-shrink:0"></span>';
        topicHtml+='<span style="font-size:18px;font-weight:700;color:#1A1A1A">'+topic+'</span>';
        topicHtml+='<span style="font-size:14px;font-weight:700;padding:2px 10px;border-radius:10px;background:'+st.bg+';color:'+st.color+';border:1px solid '+st.border+'">'+st.label+'</span>';
        if(lastV!=null)topicHtml+='<span style="font-size:15px;font-weight:700;color:'+st.color+'">'+lastV.toFixed(1)+'%</span>';
        topicHtml+='</div>';
        topicHtml+='<div style="overflow-x:auto;padding:0 16px 12px"><div style="display:flex"><div style="width:120px;flex-shrink:0"></div><div style="width:'+tblW+'px;flex-shrink:0;padding:8px 0">'+svgChart(vals,tblW,120,RED)+'</div></div>';
        topicHtml+='<table style="border-collapse:collapse;table-layout:fixed;width:'+(120+tblW)+'px">';
        topicHtml+='<colgroup><col style="width:120px">';W.forEach(function(){topicHtml+='<col style="width:'+CW+'px">'});topicHtml+='</colgroup>';
        topicHtml+='<tr style="border-bottom:1px solid #E8EDF2"><th style="text-align:left;padding:5px 8px;font-size:14px;color:#94A3B8;font-weight:600">${lang==='en'?'Week':'주차'}</th>';
        W.forEach(function(wk){topicHtml+='<th style="text-align:center;padding:5px 0;font-size:14px;color:#94A3B8;font-weight:600">'+wk+'</th>'});
        topicHtml+='</tr>';
        topicHtml+='<tr style="background:#FFF8F9"><td style="padding:5px 8px;font-size:14px;font-weight:700;color:'+RED+'">Score</td>';
        vals.forEach(function(v){topicHtml+='<td style="text-align:center;padding:5px 0;font-size:14px;color:'+(v!=null?'#1A1A1A':'#CBD5E1')+';font-weight:700;font-variant-numeric:tabular-nums">'+(v!=null?v.toFixed(1)+'%':'—')+'</td>'});
        topicHtml+='</tr></table></div></div>';
      })();
      return topicHtml;
    }
    function render(){
      var el=document.getElementById('${elId}-sections');if(!el)return;
      var html='';
      GROUPS.forEach(function(g){
        var inner='';
        g.topics.forEach(function(t){inner+=renderTopic(t,g.stakeholder)});
        if(!inner)return;
        // stakeholder 헤더
        html+='<div style="margin-bottom:24px">';
        var shName=g.stakeholder;
        ${lang !== 'en' ? "if(shName==='CVIOS')shName='고가혁';" : ''}
        html+='<h3 style="font-size:20px;font-weight:800;color:#0F172A;margin:0 0 12px;padding:8px 0;border-bottom:2px solid '+RED+'">'+shName+'</h3>';
        html+=inner;
        html+='</div>';
      });
      if(!html)html='<div style="text-align:center;padding:60px;color:#94A3B8">${lang==='en'?'No data':'데이터 없음'}</div>';
      el.innerHTML=html;
    }
    render();
  })();
  </script>`
}

// ═══════════════════════════════════════════════════════════════════════════
// 메인 생성 함수
// ═══════════════════════════════════════════════════════════════════════════
export function generateVisibilityHTML(meta, total, products, citations, dotcom, lang, productsCnty, citationsCnty, weeklyLabels, weeklyAll, citationsByCnty, dotcomByCnty, monthlyVis, extra) {
  return generateDashboardHTML(meta, total, products, citations, dotcom, lang, productsCnty, citationsCnty, weeklyLabels, weeklyAll, citationsByCnty, dotcomByCnty, { visibilityOnly: true, monthlyVis, weeklyLabelsFull: extra?.weeklyLabelsFull }, extra)
}

export function generateDashboardHTML(meta, total, products, citations, dotcom, lang, productsCnty, citationsCnty, weeklyLabels, weeklyAll, citationsByCnty, dotcomByCnty, opts, extra) {
  // ─── weekly 배열 null → 0 정규화 (대시보드 클라이언트 필터/트렌드 호환) ───
  // 뉴스레터는 null 유지(빈 셀 미표시)지만 대시보드 클라이언트 JS는 0 기반으로 동작
  products = (products || []).map(p => ({
    ...p,
    weekly: (p.weekly || []).map(v => v == null ? 0 : v),
    monthly: (p.monthly || []).map(v => v == null ? 0 : v),
  }))
  if (weeklyAll && typeof weeklyAll === 'object') {
    Object.values(weeklyAll).forEach(prod => {
      if (!prod || typeof prod !== 'object') return
      Object.values(prod).forEach(cnty => {
        if (!cnty || typeof cnty !== 'object') return
        Object.keys(cnty).forEach(brand => {
          const arr = cnty[brand]
          if (Array.isArray(arr)) cnty[brand] = arr.map(v => v == null ? 0 : v)
        })
      })
    })
  }
  // ─── 제품별 고정 경쟁사(emailTemplate의 PREFERRED_COMP 대시보드 버전) ───
  const PREFERRED_COMP = { aircare: 'Xiaomi' }
  products = products.map(p => {
    const pref = PREFERRED_COMP[(p.id || '').toLowerCase()]
    if (!pref || !p.allScores) return p
    const match = Object.entries(p.allScores).find(([k]) => k.toLowerCase() === pref.toLowerCase() && k.toLowerCase() !== 'lg')
    if (!match) return p
    const compScore = match[1]
    if (!(compScore > 0)) return p
    const ratio = Math.round((p.score / compScore) * 100)
    return { ...p, compName: match[0], vsComp: compScore, compRatio: ratio, status: ratio >= 100 ? 'lead' : ratio >= 80 ? 'behind' : 'critical' }
  })
  const visibilityOnly = opts?.visibilityOnly || false
  const includePromptList = opts?.includePromptList || false
  const includeReadability = opts?.includeReadability === true
  const ulMap = extra?.unlaunchedMap || {}
  // 트래커는 v2(geo-progress-tracker-v2 통합본)만 사용 — 항상 포함
  const trackerSrc = `/p/progress-tracker-v2/?lang=${lang}`
  const trackerTabContent = `<iframe id="tracker-iframe" src="${trackerSrc}" style="width:100%;min-height:calc(100vh - 60px);border:none;background:#0A0F1E" title="Progress Tracker"></iframe>`
  // _sid는 dashboardSvg.js의 모듈 카운터 — 단조 증가로 ID 고유성 충분 (리셋 불필요)
  const t = T[lang] || T.ko

  // 주차 라벨 — 시트에서 파싱된 weeklyLabels 우선 사용, 없으면 데이터 길이 기반 생성
  let wLabels
  if (weeklyLabels && weeklyLabels.length) {
    wLabels = weeklyLabels.map(l => String(l).toUpperCase().startsWith('W') ? l.toUpperCase() : l)
  } else {
    const _dataLen = weeklyAll ? Math.max(...Object.values(weeklyAll).flatMap(byC => Object.values(byC).flatMap(brands => Object.values(brands).map(arr => arr?.length || 0))), 0) : 0
    const _startW = meta.weekStart || Math.max(1, _dataLen - 11)
    wLabels = Array.from({ length: Math.max(12, _dataLen) }, (_, i) => `W${_startW + i}`)
  }

  // 인사이트는 meta 설정값을 존중 (강제 true 제거)

  // 국가 목록 추출 (weeklyAll + productsCnty)
  const countries = new Set()
  if (weeklyAll) Object.values(weeklyAll).forEach(byC => Object.keys(byC).forEach(c => { if (c !== 'Total') countries.add(c) }))
  if (productsCnty) productsCnty.forEach(r => { if (r.country && r.country !== 'TTL') countries.add(r.country) })
  const countryList = [...countries].sort()

  // ─── Filter Layer HTML (체크박스 형태) ───
  const allLabel = lang === 'en' ? 'All' : '전체'
  const BU_LIST = ['MS', 'HS', 'ES']
  const productCheckboxes = products.map(p =>
    `<label class="fl-chk-label"><input type="checkbox" class="fl-chk" data-filter="product" data-bu="${p.bu}" value="${p.id}" checked onchange="onFilterChange()"><span>${p.kr}</span></label>`
  ).join('')
  const buCheckboxes = BU_LIST.map(bu =>
    `<label class="fl-chk-label"><input type="checkbox" class="fl-chk" data-filter="bu" value="${bu}" checked onchange="onBuChange('${bu}')"><span>${bu}</span></label>`
  ).join('')
  const countryCheckboxes = countryList.map(c =>
    `<label class="fl-chk-label"><input type="checkbox" class="fl-chk" data-filter="country" value="${c}" checked onchange="onFilterChange()"><span>${cntyFullName(c)}</span></label>`
  ).join('')
  const regionCheckboxes = Object.entries(REGIONS).map(([k, v]) =>
    `<label class="fl-chk-label"><input type="checkbox" class="fl-chk" data-filter="region" value="${k}" checked onchange="onRegionChange('${k}')"><span>${v.labelEn}</span></label>`
  ).join('')

  const langToggleHtml = `<div class="fl-group"><div style="display:flex;gap:2px;background:#F1F5F9;border-radius:6px;padding:2px"><button class="lang-btn${lang==='ko'?' active':''}" onclick="switchLang('ko')">KO</button><button class="lang-btn${lang==='en'?' active':''}" onclick="switchLang('en')">EN</button></div></div><div class="fl-divider"></div>`
  // 주차/월 드롭다운 옵션 — wLabels 전체, monthlyLabels(아래에서 정의)
  const weekFullLabels = (opts?.weeklyLabelsFull && opts.weeklyLabelsFull.length === wLabels.length) ? opts.weeklyLabelsFull : wLabels
  const weekOptionsHtml = wLabels.map((w, i) => `<option value="${i}"${i === wLabels.length - 1 ? ' selected' : ''}>${weekFullLabels[i] || w}</option>`).join('')
  // monthlyLabels는 아래 monthlyContent 섹션에서 만들지만, dropdown용으로 미리 계산
  const _monthOptsRaw = (products[0]?.monthlyScores || []).map(m => {
    const MNAMES = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    const km = String(m.date).match(/(\d{1,2})월/)
    const em = String(m.date).match(/(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i)
    return km ? MNAMES[parseInt(km[1])-1] : em ? em[1].charAt(0).toUpperCase()+em[1].slice(1).toLowerCase() : m.date
  })
  const monthOptionsHtml = _monthOptsRaw.map((m, i) => `<option value="${i}"${i === _monthOptsRaw.length - 1 ? ' selected' : ''}>${m}</option>`).join('')
  const dropSelStyle = `padding:3px 8px;border-radius:6px;border:1px solid #CBD5E1;font-size:13px;background:#fff;cursor:pointer;font-family:${FONT}`

  const filterLayerHtml = `<div class="filter-layer" id="filter-layer">
    <div class="fl-row">
      ${langToggleHtml}
      <div class="fl-group">
        <span class="fl-label">${lang === 'en' ? 'Period' : '기간'}</span>
        <span class="fl-badge" id="period-badge" style="display:none">${meta.period || '—'}</span>
        <span class="fl-badge" id="period-weekly-badge" style="background:#EFF6FF;color:#1D4ED8;border:1px solid #93C5FD">${wLabels[wLabels.length - 1]} ${lang === 'en' ? 'data' : '기준'}</span>
      </div>
      <div class="fl-divider"></div>
      <div class="fl-group">
        <span class="fl-label">${lang === 'en' ? 'View' : '조회'}</span>
        <div class="trend-tabs" id="period-toggle">
          <button class="trend-tab active" onclick="switchPeriodPage('weekly')">${lang === 'en' ? 'Weekly' : '주간'}</button>
          <button class="trend-tab" onclick="switchPeriodPage('monthly')">${lang === 'en' ? 'Monthly' : '월간'}</button>
        </div>
      </div>
      <div class="fl-divider"></div>
      <div class="fl-group" id="vis-week-select-group"${wLabels.length > 1 ? '' : ' style="display:none"'}>
        <span class="fl-label">${lang === 'en' ? 'Week' : '주차'}</span>
        <select id="vis-week-select" onchange="switchVisWeek(parseInt(this.value))" style="${dropSelStyle}">${weekOptionsHtml}</select>
      </div>
      <div class="fl-group" id="vis-month-select-group" style="display:none">
        <span class="fl-label">${lang === 'en' ? 'Month' : '월'}</span>
        <select id="vis-month-select" onchange="switchVisMonth(parseInt(this.value))" style="${dropSelStyle}"${_monthOptsRaw.length > 0 ? '' : ' disabled'}>${monthOptionsHtml || '<option>—</option>'}</select>
      </div>
    </div>
    <div class="fl-row">
      <div class="fl-group">
        <span class="fl-label">${lang === 'en' ? 'Division' : '본부'}</span>
        <label class="fl-chk-label fl-all-label"><input type="checkbox" class="fl-chk-all" data-target="bu" checked onchange="toggleAll(this,'bu')"><span>${allLabel}</span></label>
        ${buCheckboxes}
      </div>
      <div class="fl-divider"></div>
      <div class="fl-group">
        <span class="fl-label">${lang === 'en' ? 'Product' : '제품'}</span>
        <label class="fl-chk-label fl-all-label"><input type="checkbox" class="fl-chk-all" data-target="product" checked onchange="toggleAll(this,'product')"><span>${allLabel}</span></label>
        ${productCheckboxes}
      </div>
    </div>
    <div class="fl-row">
      <div class="fl-group">
        <span class="fl-label">Region</span>
        <label class="fl-chk-label fl-all-label"><input type="checkbox" class="fl-chk-all" data-target="region" checked onchange="toggleAll(this,'region')"><span>${allLabel}</span></label>
        ${regionCheckboxes}
      </div>
      <div class="fl-divider"></div>
      <div class="fl-group">
        <span class="fl-label">${lang === 'en' ? 'Country' : '국가'}</span>
        <label class="fl-chk-label fl-all-label"><input type="checkbox" class="fl-chk-all" data-target="country" checked onchange="toggleAll(this,'country')"><span>${allLabel}</span></label>
        ${countryCheckboxes}
      </div>
    </div>
  </div>`

  // Citation 탭은 iframe으로 별도 페이지 사용 (citFilterLayerHtml 불필요)

  const noticeHtml = meta.showNotice && meta.noticeText ? `<div class="notice-box"><div class="notice-title">${lang === 'en' ? 'NOTICE' : '공지사항'}</div><div class="notice-text">${mdBold(meta.noticeText)}</div></div>` : ''

  // 주간/월간 공통 상단
  const commonTop = [
    noticeHtml,
    meta.showTotal !== false ? heroHtml(total, meta, t, lang) : '',
  ].join('')

  // 주간 국가별: weeklyAll에서 마지막 주 데이터로 productsCnty 형태 생성
  const weeklyProductsCnty = []
  if (weeklyAll && Object.keys(weeklyAll).length) {
    const ID_KR = { tv: 'TV', monitor: '모니터', audio: '오디오', washer: '세탁기', fridge: '냉장고', dw: '식기세척기', vacuum: '청소기', cooking: 'Cooking', rac: 'RAC', aircare: 'Aircare' }
    Object.entries(weeklyAll).forEach(([prodId, cntyData]) => {
      const pInfo = products.find(p => p.id === prodId)
      const prodName = pInfo?.kr || ID_KR[prodId] || prodId
      Object.entries(cntyData).forEach(([cnty, brandData]) => {
        if (cnty === 'Total' || cnty === 'TTL' || cnty === 'TOTAL') return
        const lgArr = brandData.LG || brandData.lg || []
        const lgScore = lgArr.length > 0 ? lgArr[lgArr.length - 1] : 0
        if (lgScore <= 0) return
        // 1위 경쟁사 찾기
        let topCompName = '', topCompScore = 0
        Object.entries(brandData).forEach(([brand, arr]) => {
          if (brand === 'LG' || brand === 'lg') return
          const last = Array.isArray(arr) && arr.length ? arr[arr.length - 1] : 0
          if (last > topCompScore) { topCompScore = last; topCompName = brand }
        })
        const gap = +(lgScore - topCompScore).toFixed(1)
        // brandData는 { LG: [w5,w6,...] } 형태 → 마지막 주 값만 뽑아 { LG: 85.2, Samsung: 78 } 형태로 평탄화 (C-Brand 감지용)
        const flatScores = {}
        Object.entries(brandData).forEach(([brand, arr]) => {
          if (Array.isArray(arr) && arr.length) {
            const last = arr[arr.length - 1]
            if (last != null) flatScores[brand] = last
          }
        })
        weeklyProductsCnty.push({ product: prodName, country: cnty, score: lgScore, compName: topCompName, compScore: topCompScore, gap, allScores: flatScores })
      })
    })
  }

  // 주간 기간 라벨 (마지막 주차 + 날짜 범위)
  const lastWeekLabelFull = opts?.weeklyLabelsFull?.[opts.weeklyLabelsFull.length - 1] || wLabels[wLabels.length - 1] || ''
  const weeklyPeriodTag = lastWeekLabelFull ? `<span style="font-size:12px;font-weight:600;color:#3B82F6;background:#EFF6FF;padding:2px 8px;border-radius:6px;border:1px solid #93C5FD">${lastWeekLabelFull} ${lang === 'en' ? 'data' : '기준'}</span>` : ''

  // 주간 콘텐츠
  const weeklyContent = [
    commonTop,
    meta.showProducts !== false ? productSectionHtml(products, meta, t, lang, wLabels, ulMap, opts?.monthlyVis || [], weeklyAll, weeklyPeriodTag) : '',
    `<div id="trend-container">${trendDetailHtml(products, weeklyAll, wLabels, t, lang, ulMap, weeklyPeriodTag)}</div>`,
    meta.showCnty !== false ? countrySectionHtml(weeklyProductsCnty, meta, t, lang, ulMap, weeklyPeriodTag) : '',
  ].join('')

  // 월간 콘텐츠 (제품 카드를 월간 데이터로 렌더링)
  const monthlyProducts = products.map(p => {
    const ms = p.monthlyScore || p.score
    const mp = p.monthlyPrev || p.prev
    const mc = p.vsComp || 0
    const r = mc > 0 ? ms / mc * 100 : 100
    return {
      ...p,
      score: ms,
      prev: mp,
      weeklyScore: ms,      // productSectionHtml이 wScore = p.weeklyScore를 사용하므로 월간값으로 덮어쓰기
      weeklyPrev: mp,
      monthlyScore: ms,
      monthlyPrev: mp,
      weekly: (p.monthlyScores || []).map(m => m.score),
      status: r >= 100 ? 'lead' : r >= 80 ? 'behind' : 'critical',
    }
  })
  const monthlyLabels = (products[0]?.monthlyScores || []).map(m => {
    const MNAMES = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    const km = String(m.date).match(/(\d{1,2})월/)
    const em = String(m.date).match(/(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i)
    return km ? MNAMES[parseInt(km[1])-1] : em ? em[1].charAt(0).toUpperCase()+em[1].slice(1).toLowerCase() : m.date
  })
  const mVis = opts?.monthlyVis || []
  const monthlyPeriodTag = meta.period ? `<span style="font-size:12px;font-weight:600;color:#7C3AED;background:#F5F3FF;padding:2px 8px;border-radius:6px;border:1px solid #C4B5FD">${meta.period}</span>` : ''
  const monthlyContent = [
    commonTop,
    meta.showProducts !== false ? productSectionHtml(monthlyProducts, meta, t, lang, monthlyLabels.length ? monthlyLabels : ['Feb','Mar'], ulMap, mVis, {}, monthlyPeriodTag) : '',
    `<div id="monthly-trend-container">${monthlyTrendDetailHtml(monthlyProducts, mVis, t, lang, ulMap, monthlyPeriodTag)}</div>`,
    meta.showCnty !== false ? countrySectionHtml(productsCnty, meta, t, lang, ulMap, monthlyPeriodTag) : '',
  ].join('')

  // 기존 호환: visContent는 주간 기본
  const visContent = weeklyContent
  // Citation 탭은 iframe으로 별도 사이테이션 페이지를 가져옴

  return `<!DOCTYPE html>
<html lang="${lang === 'en' ? 'en' : 'ko'}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${meta.title || 'GEO KPI Dashboard'} — ${meta.period || ''}</title>
<link href="https://fonts.cdnfonts.com/css/lg-smart" rel="stylesheet"/>
<style>@font-face{font-family:'LGEIText';font-weight:100 300;font-style:normal;src:url('/font/LGEIText%20Light.ttf') format('truetype');font-display:swap}@font-face{font-family:'LGEIText';font-weight:400 500;font-style:normal;src:url('/font/LGEIText%20Regular.otf') format('opentype'),url('/font/LGEIText%20Regular.ttf') format('truetype');font-display:swap}@font-face{font-family:'LGEIText';font-weight:600;font-style:normal;src:url('/font/LGEIText%20SemiBold.ttf') format('truetype');font-display:swap}@font-face{font-family:'LGEIText';font-weight:700 900;font-style:normal;src:url('/font/LGEIText%20Bold.ttf') format('truetype');font-display:swap}${buildDashboardStyles({ FONT, RED, COMP })}</style>
</head>
<body>
${visibilityOnly ? `
<div id="gnb-visibility" class="gnb-sub active" style="position:sticky;top:0;z-index:99">
  <button class="gnb-sub-btn active" onclick="switchVisSub('bu')">${lang === 'en' ? 'Business Division' : '사업본부'}</button>
  <button class="gnb-sub-btn" onclick="switchVisSub('pr')">PR</button>
  <button class="gnb-sub-btn" onclick="switchVisSub('brandprompt')">${lang === 'en' ? 'Brand Prompt Anomaly Check' : 'Brand Prompt 이상 점검'}</button>
</div>
<div id="vis-sub-bu" class="vis-sub-panel">
  ${filterLayerHtml.replace('top:86px', 'top:37px')}
  <div id="bu-weekly-content" class="dash-container">${weeklyContent}</div>
  <div id="bu-monthly-content" class="dash-container" style="display:none">${monthlyContent}</div>
</div>
<div id="vis-sub-pr" class="vis-sub-panel" style="display:none">
  ${prVisibilityTabHtml(extra?.weeklyPR, extra?.weeklyPRLabels, lang, meta, extra?.appendixPrompts, extra)}
</div>
<div id="vis-sub-brandprompt" class="vis-sub-panel" style="display:none">
  ${brandPromptTabHtml(extra?.weeklyBrandPrompt, extra?.weeklyBrandPromptLabels, lang, null, lang === 'en' ? 'Brand Prompt Anomaly Check' : 'Brand Prompt 이상 점검', meta)}
</div>
` : `
<div class="tab-bar">
  <div style="display:flex;gap:4px;align-items:center">
    <button class="tab-btn active" onclick="switchTab('visibility')">Visibility</button>
    <button class="tab-btn" onclick="switchTab('citation')">Citation</button>
    ${includeReadability ? `<button class="tab-btn" onclick="switchTab('readability')">Readability</button>` : ''}
    <button class="tab-btn" onclick="switchTab('progress')">Progress Tracker</button>
    ${includePromptList ? `<button class="tab-btn" onclick="switchTab('promptlist')">Prompt List</button>` : ''}
    <button class="tab-btn" onclick="switchTab('glossary')">Glossary</button>
  </div>
  <div id="lang-toggle" style="display:flex;gap:2px;background:#1E293B;border-radius:6px;padding:2px">
    <button class="lang-btn${lang === 'ko' ? ' active' : ''}" onclick="switchLang('ko')">KO</button>
    <button class="lang-btn${lang === 'en' ? ' active' : ''}" onclick="switchLang('en')">EN</button>
  </div>
</div>
<div id="gnb-visibility" class="gnb-sub active">
  <button class="gnb-sub-btn active" onclick="switchVisSub('bu')">${lang === 'en' ? 'Business Division' : '사업본부'}</button>
  <button class="gnb-sub-btn" onclick="switchVisSub('pr')">PR</button>
  <button class="gnb-sub-btn" onclick="switchVisSub('brandprompt')">${lang === 'en' ? 'Brand Prompt Anomaly Check' : 'Brand Prompt 이상 점검'}</button>
</div>
<div id="gnb-citation" class="gnb-sub">
  <button class="gnb-sub-btn active" onclick="switchCitSub('touchpoint')">${lang === 'en' ? 'Touch Points' : '외부접점채널'}</button>
  <button class="gnb-sub-btn" onclick="switchCitSub('dotcom')">${lang === 'en' ? 'Dotcom' : '닷컴'}</button>
</div>
<div id="tab-visibility" class="tab-panel active">
  <div id="vis-sub-bu" class="vis-sub-panel active">
    ${filterLayerHtml}
    <div id="bu-weekly-content" class="dash-container">${weeklyContent}</div>
    <div id="bu-monthly-content" class="dash-container" style="display:none">${monthlyContent}</div>
  </div>
  <div id="vis-sub-pr" class="vis-sub-panel" style="display:none">
    ${prVisibilityTabHtml(extra?.weeklyPR, extra?.weeklyPRLabels, lang, meta, extra?.appendixPrompts, extra)}
  </div>
  <div id="vis-sub-brandprompt" class="vis-sub-panel" style="display:none">
    ${brandPromptTabHtml(extra?.weeklyBrandPrompt, extra?.weeklyBrandPromptLabels, lang, null, lang === 'en' ? 'Brand Prompt Anomaly Check' : 'Brand Prompt 이상 점검', meta)}
  </div>
</div>
<div id="tab-citation" class="tab-panel">
  <div id="cit-sub-touchpoint">
    <iframe id="cit-iframe-tp" src="/p/${lang === 'en' ? 'GEO-Citation-Dashboard-EN' : 'GEO-Citation-Dashboard-KO'}?tab=touchpoint" style="width:100%;min-height:calc(100vh - 100px);border:none;background:#F1F5F9" title="Citation - Touch Points"></iframe>
  </div>
  <div id="cit-sub-dotcom" style="display:none">
    <iframe id="cit-iframe-dc" data-src="/p/${lang === 'en' ? 'GEO-Citation-Dashboard-EN' : 'GEO-Citation-Dashboard-KO'}?tab=dotcom" style="width:100%;min-height:calc(100vh - 100px);border:none;background:#F1F5F9" title="Citation - Dotcom"></iframe>
  </div>
</div>
${includeReadability ? `<div id="tab-readability" class="tab-panel">
  <div class="progress-placeholder"><div class="inner">
    <div class="icon">📖</div>
    <h2>Readability</h2>
    <p>${t.readabilityMsg}</p>
  </div></div>
</div>` : ''}
<div id="tab-progress" class="tab-panel">
  ${trackerTabContent}
</div>
<div id="tab-promptlist" class="tab-panel">
  ${promptListTabHtml(extra?.appendixPrompts, lang)}
</div>
<div id="tab-glossary" class="tab-panel">
  ${glossaryTabHtml(lang)}
</div>
`}
<div class="dash-footer">
  <span><strong>LG Electronics</strong> ${t.footer}</span>
  <span>© 2026 LG Electronics Inc. All Rights Reserved.</span>
</div>
<script>
${buildDashboardClientScript({
  lang,
  weeklyAll,
  products,
  productsCnty,
  ulMap,
  monthlyVis: opts?.monthlyVis,
  total,
  meta,
  wLabels,
})}
</script>
</body>
</html>`
}
