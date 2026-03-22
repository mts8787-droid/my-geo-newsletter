import React, { useState, useRef, useCallback, useEffect, useMemo } from 'react'
import { ChevronLeft, ChevronRight, TrendingUp, TrendingDown, Minus, Copy, Download, RefreshCw, Check, Send, Sparkles, Save, FolderOpen, Trash2, Languages, Globe, ExternalLink, Link2, PanelLeftClose, PanelLeftOpen } from 'lucide-react'
import { downloadTemplate } from './excelUtils'
import { extractSheetId, syncFromGoogleSheets } from './googleSheetsUtils'
import { generateEmailHTML } from './emailTemplate'
import WeeklyTrendView from './WeeklyTrendView'
let generateDashboardHTML = null
if (window.__DASHBOARD_MODE__) {
  import('./dashboard/dashboardTemplate.js').then(m => { generateDashboardHTML = m.generateDashboardHTML })
}

// ─── localStorage 캐시 ─────────────────────────────────────────────────────────
const IS_DASHBOARD = !!window.__DASHBOARD_MODE__
const STORAGE_KEY = IS_DASHBOARD ? 'geo-dashboard-cache' : 'geo-newsletter-cache'
const CACHE_VERSION = 3
function loadCache() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw)
    if (parsed._v === 2) {
      // v2 → v3 마이그레이션: meta → metaKo
      return { metaKo: parsed.meta, metaEn: null, total: parsed.total, products: parsed.products,
        citations: parsed.citations, dotcom: parsed.dotcom, productsCnty: parsed.productsCnty,
        citationsCnty: parsed.citationsCnty, _v: 3 }
    }
    if (parsed._v !== CACHE_VERSION) { localStorage.removeItem(STORAGE_KEY); return null }
    return parsed
  } catch { return null }
}
function saveCache(data) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...data, _v: CACHE_VERSION })) } catch {}
}

// ─── 버전 스냅샷 (서버 저장) ─────────────────────────────────────────────────
async function fetchSnapshots() {
  try { const r = await fetch('/api/snapshots'); return r.ok ? await r.json() : [] } catch { return [] }
}
async function postSnapshot(name, data) {
  try {
    const r = await fetch('/api/snapshots', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, data }),
    })
    const j = await r.json()
    return j.ok ? j.snapshots : null
  } catch { return null }
}
async function updateSnapshot(ts, data) {
  try {
    const r = await fetch(`/api/snapshots/${ts}`, {
      method: 'PUT', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data }),
    })
    const j = await r.json()
    return j.ok ? j.snapshots : null
  } catch { return null }
}
async function deleteSnapshot(ts) {
  try {
    const r = await fetch(`/api/snapshots/${ts}`, { method: 'DELETE' })
    const j = await r.json()
    return j.ok ? j.snapshots : null
  } catch { return null }
}

// ─── 동기화 데이터 서버 저장/로드 ─────────────────────────────────────────────────
async function fetchSyncData() {
  try {
    const r = await fetch('/api/sync-data')
    if (!r.ok) return null
    const j = await r.json()
    return j.ok ? j.data : null
  } catch { return null }
}
async function saveSyncData(data) {
  try {
    await fetch('/api/sync-data', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data }),
    })
  } catch {}
}

// ─── AI 인사이트 자동 생성 ──────────────────────────────────────────────────────
function generateProductInsight(products) {
  const fmtN = n => Number(n).toLocaleString('en-US')
  const leads    = products.filter(p => p.status === 'lead')
  const behinds  = products.filter(p => p.status === 'behind')
  const criticals = products.filter(p => p.status === 'critical')
  const best     = [...products].sort((a, b) => b.score - a.score)[0]
  const worst    = [...products].sort((a, b) => a.score - b.score)[0]
  const avgScore = (products.reduce((s, p) => s + p.score, 0) / products.length).toFixed(1)

  const lines = []
  lines.push(`전체 ${products.length}개 카테고리 평균 가시성은 ${avgScore}%이며, 선도 ${leads.length}개·추격 ${behinds.length}개·취약 ${criticals.length}개로 분류됩니다.`)
  if (best) lines.push(`가장 높은 카테고리는 ${best.kr} ${best.score.toFixed(1)}%이고, 가장 낮은 카테고리는 ${worst.kr} ${worst.score.toFixed(1)}%로 상·하위 간 ${(best.score - worst.score).toFixed(1)}%p의 편차가 존재합니다.`)
  if (criticals.length) lines.push(`취약 카테고리(${criticals.map(p => p.kr).join('·')})는 경쟁사 대비 80% 미만으로 가시성 격차가 두드러지는 영역입니다.`)
  else if (behinds.length) lines.push(`추격 카테고리(${behinds.map(p => p.kr).join('·')})는 80~100% 구간으로 경쟁사와 근접한 수준입니다.`)
  return lines.join(' ')
}

function generateCitationInsight(citations) {
  if (!citations.length) return ''
  const fmtN = n => Number(n).toLocaleString('en-US')
  const top3    = citations.slice(0, 3)
  const total   = citations.reduce((s, c) => s + c.score, 0)
  const top3Sum = top3.reduce((s, c) => s + c.score, 0)
  const top3Pct = total > 0 ? ((top3Sum / total) * 100).toFixed(1) : 0

  const lines = []
  lines.push(`전체 Citation ${fmtN(total)}건 중 상위 3개 도메인(${top3.map(c => c.source).join(', ')})이 ${fmtN(top3Sum)}건으로 전체의 ${top3Pct}%를 차지합니다.`)
  lines.push(`1위 ${top3[0].source}는 ${fmtN(top3[0].score)}건(${top3[0].ratio ? top3[0].ratio.toFixed(1) + '%' : ''})으로 가장 높은 인용 비중을 보이며, ${top3[1].source} ${fmtN(top3[1].score)}건, ${top3[2].source} ${fmtN(top3[2].score)}건이 뒤를 잇고 있습니다.`)
  const lower = citations.slice(-3)
  if (lower.length) lines.push(`하위 도메인(${lower.map(c => c.source).join('·')})은 각각 ${lower.map(c => fmtN(c.score) + '건').join(', ')}으로 상위권 대비 인용 빈도가 낮은 구간입니다.`)
  return lines.join(' ')
}

function generateProductHowToRead() {
  return 'GEO 가시성 점수는 생성형 AI 엔진(ChatGPT, Gemini 등)에서 해당 카테고리 관련 질문 시 LG 제품이 언급·추천되는 빈도를 0~100%로 수치화한 지표입니다. MoM은 전월 대비 증감이며, 경쟁사 대비는 (LG 점수 / 1위 브랜드 점수) × 100%로 산출합니다. 100% 이상=선도, 80% 이상=추격, 80% 미만=취약입니다.'
}

function generateCitationHowToRead() {
  return 'Citation Score는 생성형 AI가 LG 제품 관련 답변 시 참조하는 외부 출처(리뷰 사이트, 미디어 등)의 영향력을 점수화한 지표입니다. 점수가 높을수록 해당 출처가 AI 답변에 자주 인용되며, 증감은 전월 대비 기여도 변화를 나타냅니다.'
}

function generateDotcomInsight(dotcom) {
  if (!dotcom || !dotcom.lg) return ''
  const lg = dotcom.lg, sam = dotcom.samsung
  const fmtN = n => Number(n).toLocaleString('en-US')
  const lines = []

  const ttlDiff = lg.TTL - sam.TTL
  const ttlRatio = sam.TTL > 0 ? ((lg.TTL / sam.TTL) * 100).toFixed(0) : 100
  lines.push(`LG 닷컴 전체 Citation ${fmtN(lg.TTL)}건, SS ${fmtN(sam.TTL)}건으로 LG가 SS 대비 ${ttlRatio}% 수준(${ttlDiff > 0 ? '+' : ''}${fmtN(ttlDiff)}건)입니다.`)

  const lgWins = DOTCOM_SAM_COLS.filter(c => (lg[c] || 0) > (sam[c] || 0))
  const samWins = DOTCOM_SAM_COLS.filter(c => (sam[c] || 0) > (lg[c] || 0))
  if (lgWins.length) lines.push(`LG 우위 영역은 ${lgWins.join(', ')} ${lgWins.length}개입니다.`)
  if (samWins.length) lines.push(`SS 우위 영역은 ${samWins.join(', ')} ${samWins.length}개로, 해당 페이지 유형에서 SS의 인용 빈도가 LG보다 높게 나타납니다.`)

  // 가장 큰 차이 영역
  const allCols = DOTCOM_SAM_COLS.filter(c => c !== 'TTL')
  const maxLgGap = allCols.sort((a, b) => ((lg[b]||0) - (sam[b]||0)) - ((lg[a]||0) - (sam[a]||0)))[0]
  if (maxLgGap && (lg[maxLgGap]||0) > (sam[maxLgGap]||0)) lines.push(`LG가 가장 큰 차이를 보이는 영역은 ${maxLgGap}(LG ${fmtN(lg[maxLgGap])}건 vs SS ${fmtN(sam[maxLgGap])}건)입니다.`)
  return lines.join(' ')
}

function generateDotcomHowToRead() {
  return '닷컴 Citation은 생성형 AI가 답변 시 LG·Samsung 공식 사이트의 각 페이지 유형(TTL, PLP, PDP 등)을 인용하는 빈도를 나타냅니다. TTL은 전체 합계, PLP는 카테고리 목록, PDP는 제품 상세, Microsites는 캠페인 페이지 인용 수입니다.'
}

function generateCntyHowToRead() {
  return '국가별 GEO 가시성은 각 법인(미국, 영국, 독일 등)에서 생성형 AI 엔진이 해당 제품 카테고리 질문 시 LG를 언급·추천하는 비율입니다. 막대 색상은 경쟁사 대비 상대 점수를 나타내며, 녹색(선도)·주황(추격)·빨강(취약)으로 구분됩니다. 하단 수치는 1위 경쟁사 점수와 LG와의 격차(%p)입니다.'
}

function generateCitDomainInsight(citationsCnty) {
  if (!citationsCnty || !citationsCnty.length) return ''
  const fmtN = n => Number(n).toLocaleString('en-US')
  const ttlRows = citationsCnty.filter(r => r.cnty === 'TTL').sort((a, b) => a.rank - b.rank)
  if (!ttlRows.length) return ''
  const total = ttlRows.reduce((s, r) => s + r.citations, 0)
  const top3 = ttlRows.slice(0, 3)
  const top3Sum = top3.reduce((s, r) => s + r.citations, 0)
  const top3Pct = total > 0 ? ((top3Sum / total) * 100).toFixed(1) : 0
  const lines = []
  lines.push(`전체 도메인 Citation ${fmtN(total)}건 중 상위 3개 도메인(${top3.map(r => r.domain).join(', ')})이 ${fmtN(top3Sum)}건으로 전체의 ${top3Pct}%를 차지합니다.`)
  lines.push(`1위 ${top3[0].domain}은(는) ${fmtN(top3[0].citations)}건으로 가장 높은 인용 빈도를 보이며, ${top3[1].domain} ${fmtN(top3[1].citations)}건, ${top3[2].domain} ${fmtN(top3[2].citations)}건이 뒤를 잇고 있습니다.`)
  return lines.join(' ')
}

function generateCitDomainHowToRead() {
  return '도메인별 Citation은 생성형 AI가 LG 관련 답변 시 인용하는 외부 도메인(웹사이트)의 빈도를 나타냅니다. 도메인 유형(Review, Media, Retailer 등)에 따라 AI 답변 내 인용 패턴을 파악할 수 있으며, 비중(%)은 전체 Citation 대비 해당 도메인의 기여도를 의미합니다.'
}

function generateCitCntyInsight(citationsCnty) {
  if (!citationsCnty || !citationsCnty.length) return ''
  const fmtN = n => Number(n).toLocaleString('en-US')
  const cntyMap = new Map()
  citationsCnty.filter(r => r.cnty !== 'TTL').forEach(r => {
    if (!cntyMap.has(r.cnty)) cntyMap.set(r.cnty, [])
    cntyMap.get(r.cnty).push(r)
  })
  const cntySums = [...cntyMap.entries()].map(([cnty, rows]) => ({
    cnty, total: rows.reduce((s, r) => s + r.citations, 0), top: rows.sort((a, b) => b.citations - a.citations)[0]
  })).sort((a, b) => b.total - a.total)
  if (!cntySums.length) return ''
  const lines = []
  const topCnty = cntySums[0]
  const botCnty = cntySums[cntySums.length - 1]
  lines.push(`${cntySums.length}개 국가 중 Citation이 가장 많은 국가는 ${topCnty.cnty}(${fmtN(topCnty.total)}건)이며, 가장 적은 국가는 ${botCnty.cnty}(${fmtN(botCnty.total)}건)입니다.`)
  lines.push(`${topCnty.cnty}에서는 ${topCnty.top.domain}이(가) ${fmtN(topCnty.top.citations)}건으로 1위를 차지하고 있습니다.`)
  return lines.join(' ')
}

function generateCitCntyHowToRead() {
  return '국가별 Citation 도메인은 각 국가에서 생성형 AI가 LG 관련 답변 시 가장 많이 인용하는 도메인 Top 10을 보여줍니다. 국가별로 인용 패턴이 다르므로, 각 시장에 맞는 Citation Optimization 전략 수립에 활용할 수 있습니다.'
}

// ─── 한/영 이름 매핑 (기본 번역 폴백) ──────────────────────────────────────────
const CNTY_EN = { '미국':'US','영국':'UK','독일':'Germany','브라질':'Brazil','인도':'India','멕시코':'Mexico','스페인':'Spain','호주':'Australia','베트남':'Vietnam','캐나다':'Canada' }
const PROD_EN = { 'TV':'TV','세탁기':'Washing Machine','냉장고':'Refrigerator','모니터':'Monitor','오디오':'Audio','Cooking':'Cooking','식기세척기':'Dishwasher','청소기':'Vacuum Cleaner','RAC':'RAC','Aircare':'Aircare' }
const COMP_EN = { '삼성':'Samsung','삼성전자':'Samsung','보쉬':'Bosch','다이슨':'Dyson','소니':'Sony' }

function resolveDataForLang(products, productsCnty, citations, citationsCnty, lang) {
  if (lang !== 'en') return { products, productsCnty, citations, citationsCnty }
  return {
    products: products.map(p => ({
      ...p,
      kr: p.en || PROD_EN[p.kr] || p.kr,
      compName: p.compNameEn || COMP_EN[p.compName] || p.compName,
    })),
    productsCnty: productsCnty.map(r => ({
      ...r,
      country: r.countryEn || CNTY_EN[r.country] || r.country,
      product: r.productEn || PROD_EN[r.product] || r.product,
      compName: r.compNameEn || COMP_EN[r.compName] || r.compName,
    })),
    citations: citations.map(c => ({
      ...c,
      category: c.categoryEn || PROD_EN[c.category] || c.category,
    })),
    citationsCnty: citationsCnty.map(r => ({
      ...r,
      cnty: r.cntyEn || r.cnty,
    })),
  }
}

// ─── 브랜드 토큰 ──────────────────────────────────────────────────────────────
const LG_RED  = '#CF0652'
const LG_DARK = '#A0003E'
const FONT    = "'LG Smart','Arial Narrow',Arial,sans-serif"

// ─── 초기 데이터 ──────────────────────────────────────────────────────────────
const INIT_META  = {
  period: '2026년 3월', team: 'D2C디지털마케팅팀', reportNo: 'Vol.03',
  reportType: 'GEO 월간 성과 분석 리포트',
  title: '생성형 AI 엔진 가시성(Visibility) 성과 분석',
  titleFontSize: 24, titleColor: '#1A1A1A',
  dateLine: '2026년 3월 기준',
  totalInsight: '권위 있는 인용 출처와 통계 데이터를 활용한 Citation Optimization 전략은 생성형 AI 검색 엔진에서의 가시성을 최대 30~40% 향상시킬 수 있습니다. 청소기·식기세척기 카테고리의 구조화 데이터 강화가 시급히 필요합니다.',
  productInsight: '', showProductInsight: true,
  productHowToRead: '', showProductHowToRead: true,
  citationInsight: '', showCitationInsight: true,
  citationHowToRead: '', showCitationHowToRead: true,
  dotcomInsight: '', showDotcomInsight: true,
  dotcomHowToRead: '', showDotcomHowToRead: true,
  cntyInsight: '', showCntyInsight: true,
  cntyHowToRead: '', showCntyHowToRead: true,
  kpiLogicText: '', showKpiLogic: false,
  citDomainInsight: '', showCitDomainInsight: true,
  citDomainHowToRead: '', showCitDomainHowToRead: true,
  citCntyInsight: '', showCitCntyInsight: true,
  citCntyHowToRead: '', showCitCntyHowToRead: true,
  noticeText: '', showNotice: false,
  todoText: '', showTodo: false,
  showTotal: true, showProducts: true, showCnty: true, showCitations: true,
  showCitDomain: true, showCitCnty: true,
  citationTopN: 10, citDomainTopN: 10,
  showDotcom: true,
  cntyProductFilter: {},
}
const INIT_TOTAL = { score: 42.7, prev: 42.2, vsComp: 42.2, rank: 1, totalBrands: 12 }

const BU_CONFIG = {
  MS: { label: 'MS', color: '#94A3B8', bg: 'rgba(148,163,184,0.07)', border: 'rgba(148,163,184,0.18)' },
  HS: { label: 'HS', color: '#8B9CB0', bg: 'rgba(139,156,176,0.07)', border: 'rgba(139,156,176,0.18)' },
  ES: { label: 'ES', color: '#9AAFC0', bg: 'rgba(154,175,192,0.07)', border: 'rgba(154,175,192,0.18)' },
}

const INIT_PRODUCTS = [
  { id: 'tv',      kr: 'TV',         bu: 'MS', score: 45.5, prev: 45.2, vsComp: 41.2, compName: '삼성전자', compRatio: 110, status: 'lead',     weekly: [44.2,45.2,44.9,45.5] },
  { id: 'monitor', kr: '모니터',     bu: 'MS', score: 59.0, prev: 56.9, vsComp: 49.0, compName: '삼성전자', compRatio: 120, status: 'lead',     weekly: [55.2,56.9,57.4,59.0] },
  { id: 'audio',   kr: '오디오',     bu: 'MS', score: 38.2, prev: 36.5, vsComp: 36.1, compName: '소니',    compRatio: 106, status: 'lead',     weekly: [35.1,36.5,37.0,38.2] },
  { id: 'fridge',  kr: '냉장고',     bu: 'HS', score: 50.2, prev: 48.7, vsComp: 48.7, compName: '삼성전자', compRatio: 103, status: 'lead',     weekly: [48.7,48.3,49.6,50.2] },
  { id: 'washer',  kr: '세탁기',     bu: 'HS', score: 44.1, prev: 42.8, vsComp: 40.9, compName: '삼성전자', compRatio: 108, status: 'lead',     weekly: [42.8,43.0,43.6,44.1] },
  { id: 'cooking', kr: 'Cooking',    bu: 'HS', score: 32.4, prev: 31.0, vsComp: 34.7, compName: '보쉬',    compRatio: 93,  status: 'behind',   weekly: [31.0,31.8,32.0,32.4] },
  { id: 'dw',      kr: '식기세척기', bu: 'HS', score: 26.9, prev: 29.2, vsComp: 35.4, compName: '보쉬',    compRatio: 76,  status: 'critical', weekly: [28.5,27.8,27.3,26.9] },
  { id: 'vacuum',  kr: '청소기',     bu: 'HS', score:  6.1, prev:  7.3, vsComp: 22.4, compName: '다이슨',  compRatio: 27,  status: 'critical', weekly: [7.0,6.8,6.4,6.1] },
  { id: 'rac',     kr: 'RAC',        bu: 'ES', score: 33.1, prev: 33.9, vsComp: 28.5, compName: '삼성전자', compRatio: 116, status: 'lead',     weekly: [33.9,34.1,33.5,33.1] },
  { id: 'aircare', kr: 'Aircare',    bu: 'ES', score: 28.5, prev: 26.0, vsComp: 23.3, compName: '다이슨',  compRatio: 122, status: 'lead',     weekly: [24.8,26.0,27.1,28.5] },
]

const DOTCOM_LG_COLS  = ['TTL','PLP','Microsites','PDP','Newsroom','Support','Buying-guide','Experience']
const DOTCOM_SAM_COLS = ['TTL','PLP','Microsites','PDP','Newsroom','Support','Buying-guide']

const INIT_DOTCOM = {
  lg:      { TTL:222447, PLP:52378, Microsites:24075, PDP:46880, Newsroom:21131, Support:15666, 'Buying-guide':14471, Experience:47846 },
  samsung: { TTL:199180, PLP:34177, Microsites:14708, PDP:35709, Newsroom:43152, Support:39144, 'Buying-guide':32290 },
}

const INIT_PRODUCTS_CNTY = [
  { product:'TV', country:'미국', score:87.1, compName:'삼성', compScore:87.2, gap:-5.5 },
  { product:'TV', country:'영국', score:87.2, compName:'삼성', compScore:86.3, gap:-1.7 },
  { product:'TV', country:'독일', score:85.3, compName:'삼성', compScore:84.2, gap:-1.5 },
  { product:'TV', country:'브라질', score:85.7, compName:'삼성', compScore:86.3, gap:-6.6 },
  { product:'TV', country:'인도', score:84.7, compName:'삼성', compScore:85.2, gap:-5.1 },
  { product:'TV', country:'멕시코', score:84.8, compName:'삼성', compScore:84.7, gap:0.7 },
  { product:'TV', country:'스페인', score:83.7, compName:'삼성', compScore:82.7, gap:-1.5 },
  { product:'TV', country:'호주', score:87.4, compName:'삼성', compScore:87.3, gap:1.4 },
  { product:'TV', country:'베트남', score:83.8, compName:'삼성', compScore:84.4, gap:-2.5 },
  { product:'TV', country:'캐나다', score:86.1, compName:'삼성', compScore:86.2, gap:-0.9 },
  { product:'세탁기', country:'미국', score:44.7, compName:'', compScore:0, gap:-0.6 },
  { product:'세탁기', country:'영국', score:36.8, compName:'', compScore:0, gap:3.5 },
  { product:'세탁기', country:'독일', score:19.0, compName:'', compScore:0, gap:-9.8 },
  { product:'세탁기', country:'브라질', score:37.7, compName:'', compScore:0, gap:3.1 },
  { product:'세탁기', country:'인도', score:50.0, compName:'', compScore:0, gap:0.8 },
  { product:'세탁기', country:'멕시코', score:43.4, compName:'', compScore:0, gap:-0.8 },
  { product:'세탁기', country:'스페인', score:35.5, compName:'', compScore:0, gap:1.4 },
  { product:'세탁기', country:'호주', score:49.3, compName:'', compScore:0, gap:0.6 },
  { product:'세탁기', country:'베트남', score:51.3, compName:'', compScore:0, gap:1.4 },
  { product:'세탁기', country:'캐나다', score:46.1, compName:'', compScore:0, gap:-0.4 },
  { product:'냉장고', country:'미국', score:43.6, compName:'', compScore:0, gap:3.3 },
  { product:'냉장고', country:'영국', score:42.6, compName:'', compScore:0, gap:2.5 },
  { product:'냉장고', country:'독일', score:35.8, compName:'', compScore:0, gap:-6.4 },
  { product:'냉장고', country:'브라질', score:33.3, compName:'', compScore:0, gap:-2.2 },
  { product:'냉장고', country:'인도', score:52.9, compName:'', compScore:0, gap:1.9 },
  { product:'냉장고', country:'멕시코', score:50.2, compName:'', compScore:0, gap:-2.3 },
  { product:'냉장고', country:'스페인', score:36.9, compName:'', compScore:0, gap:1.4 },
  { product:'냉장고', country:'호주', score:45.8, compName:'', compScore:0, gap:1.3 },
  { product:'냉장고', country:'베트남', score:48.8, compName:'', compScore:0, gap:2.2 },
  { product:'냉장고', country:'캐나다', score:39.2, compName:'', compScore:0, gap:1.6 },
]

const INIT_CITATIONS_CNTY = [
  { cnty:'TTL', rank:1, domain:'reddit.com', type:'Community', citations:209008 },
  { cnty:'TTL', rank:2, domain:'youtube.com', type:'SNS', citations:143718 },
  { cnty:'TTL', rank:3, domain:'rtings.com', type:'Review', citations:74054 },
  { cnty:'TTL', rank:4, domain:'bestbuy.com', type:'Retail', citations:72185 },
  { cnty:'TTL', rank:5, domain:'consumerreports.org', type:'Review', citations:66544 },
  { cnty:'TTL', rank:6, domain:'lg.com', type:'Brand/Manufacturer', citations:52190 },
  { cnty:'TTL', rank:7, domain:'tomsguide.com', type:'Review', citations:43815 },
  { cnty:'TTL', rank:8, domain:'techradar.com', type:'Review', citations:40717 },
  { cnty:'TTL', rank:9, domain:'homedepot.com', type:'Retail', citations:37577 },
  { cnty:'TTL', rank:10, domain:'samsung.com', type:'Brand/Manufacturer', citations:37144 },
  { cnty:'US', rank:1, domain:'reddit.com', type:'Community', citations:209008 },
  { cnty:'US', rank:2, domain:'youtube.com', type:'SNS', citations:143718 },
  { cnty:'US', rank:3, domain:'rtings.com', type:'Review', citations:74054 },
  { cnty:'US', rank:4, domain:'bestbuy.com', type:'Retail', citations:72185 },
  { cnty:'US', rank:5, domain:'consumerreports.org', type:'Review', citations:66544 },
  { cnty:'US', rank:6, domain:'lg.com', type:'Brand/Manufacturer', citations:52190 },
  { cnty:'US', rank:7, domain:'tomsguide.com', type:'Review', citations:43815 },
  { cnty:'US', rank:8, domain:'techradar.com', type:'Review', citations:40717 },
  { cnty:'US', rank:9, domain:'homedepot.com', type:'Retail', citations:37577 },
  { cnty:'US', rank:10, domain:'samsung.com', type:'Brand/Manufacturer', citations:37144 },
  { cnty:'CA', rank:1, domain:'reddit.com', type:'Community', citations:59466 },
  { cnty:'CA', rank:2, domain:'bestbuy.ca', type:'Retail', citations:41998 },
  { cnty:'CA', rank:3, domain:'youtube.com', type:'SNS', citations:26500 },
  { cnty:'CA', rank:4, domain:'lg.com', type:'Brand/Manufacturer', citations:14999 },
  { cnty:'CA', rank:5, domain:'samsung.com', type:'Brand/Manufacturer', citations:13439 },
  { cnty:'CA', rank:6, domain:'rtings.com', type:'Review', citations:12627 },
  { cnty:'CA', rank:7, domain:'consumerreports.org', type:'Review', citations:12212 },
  { cnty:'CA', rank:8, domain:'homedepot.ca', type:'Retail', citations:11769 },
  { cnty:'CA', rank:9, domain:'canadianappliance.ca', type:'Retail', citations:9861 },
  { cnty:'CA', rank:10, domain:'bestbuy.com', type:'Retail', citations:8150 },
  { cnty:'UK', rank:1, domain:'reddit.com', type:'Community', citations:131755 },
  { cnty:'UK', rank:2, domain:'youtube.com', type:'SNS', citations:73974 },
  { cnty:'UK', rank:3, domain:'rtings.com', type:'Review', citations:55309 },
  { cnty:'UK', rank:4, domain:'lg.com', type:'Brand/Manufacturer', citations:50213 },
  { cnty:'UK', rank:5, domain:'techradar.com', type:'Review', citations:45964 },
  { cnty:'UK', rank:6, domain:'samsung.com', type:'Brand/Manufacturer', citations:42969 },
  { cnty:'UK', rank:7, domain:'which.co.uk', type:'Review', citations:39853 },
  { cnty:'UK', rank:8, domain:'appliancesdirect.co.uk', type:'Retail', citations:32901 },
  { cnty:'UK', rank:9, domain:'whathifi.com', type:'Review', citations:29891 },
  { cnty:'UK', rank:10, domain:'expertreviews.co.uk', type:'Review', citations:26351 },
  { cnty:'DE', rank:1, domain:'youtube.com', type:'SNS', citations:97202 },
  { cnty:'DE', rank:2, domain:'chip.de', type:'Review', citations:65528 },
  { cnty:'DE', rank:3, domain:'reddit.com', type:'Community', citations:63371 },
  { cnty:'DE', rank:4, domain:'idealo.de', type:'Comparison', citations:43501 },
  { cnty:'DE', rank:5, domain:'mediamarkt.de', type:'Retail', citations:34355 },
  { cnty:'DE', rank:6, domain:'lg.com', type:'Brand/Manufacturer', citations:31262 },
  { cnty:'DE', rank:7, domain:'testsieger.de', type:'Comparison', citations:28953 },
  { cnty:'DE', rank:8, domain:'samsung.com', type:'Brand/Manufacturer', citations:25570 },
  { cnty:'DE', rank:9, domain:'hifi.de', type:'Review', citations:24035 },
  { cnty:'DE', rank:10, domain:'otto.de', type:'Retail', citations:22910 },
  { cnty:'ES', rank:1, domain:'youtube.com', type:'SNS', citations:50561 },
  { cnty:'ES', rank:2, domain:'reddit.com', type:'Community', citations:16846 },
  { cnty:'ES', rank:3, domain:'lg.com', type:'Brand/Manufacturer', citations:16675 },
  { cnty:'ES', rank:4, domain:'ocu.org', type:'Information', citations:14782 },
  { cnty:'ES', rank:5, domain:'pccomponentes.com', type:'Retail', citations:14455 },
  { cnty:'ES', rank:6, domain:'samsung.com', type:'Brand/Manufacturer', citations:13560 },
  { cnty:'ES', rank:7, domain:'elcorteingles.es', type:'Retail', citations:12732 },
  { cnty:'ES', rank:8, domain:'xataka.com', type:'Review', citations:9762 },
  { cnty:'ES', rank:9, domain:'leroymerlin.es', type:'Retail', citations:7951 },
  { cnty:'ES', rank:10, domain:'idealo.es', type:'Comparison', citations:7281 },
  { cnty:'BR', rank:1, domain:'youtube.com', type:'SNS', citations:58026 },
  { cnty:'BR', rank:2, domain:'reddit.com', type:'Community', citations:27019 },
  { cnty:'BR', rank:3, domain:'buscape.com.br', type:'Comparison', citations:25459 },
  { cnty:'BR', rank:4, domain:'lg.com', type:'Brand/Manufacturer', citations:16497 },
  { cnty:'BR', rank:5, domain:'zoom.com.br', type:'Comparison', citations:16435 },
  { cnty:'BR', rank:6, domain:'magazineluiza.com.br', type:'Retail', citations:15170 },
  { cnty:'BR', rank:7, domain:'samsung.com', type:'Brand/Manufacturer', citations:13731 },
  { cnty:'BR', rank:8, domain:'promobit.com.br', type:'Comparison', citations:10504 },
  { cnty:'BR', rank:9, domain:'br.my-best.com', type:'Comparison', citations:7635 },
  { cnty:'BR', rank:10, domain:'ubuy.com.br', type:'Retail', citations:7016 },
  { cnty:'MX', rank:1, domain:'youtube.com', type:'SNS', citations:61023 },
  { cnty:'MX', rank:2, domain:'reddit.com', type:'Community', citations:30060 },
  { cnty:'MX', rank:3, domain:'lg.com', type:'Brand/Manufacturer', citations:20344 },
  { cnty:'MX', rank:4, domain:'samsung.com', type:'Brand/Manufacturer', citations:18068 },
  { cnty:'MX', rank:5, domain:'translate.google.com', type:'etc.', citations:9052 },
  { cnty:'MX', rank:6, domain:'pccomponentes.com', type:'Retail', citations:7868 },
  { cnty:'MX', rank:7, domain:'consumerreports.org', type:'Review', citations:6966 },
  { cnty:'MX', rank:8, domain:'ocu.org', type:'Information', citations:6127 },
  { cnty:'MX', rank:9, domain:'xataka.com', type:'Review', citations:5869 },
  { cnty:'MX', rank:10, domain:'mejoresmarcas.com.mx', type:'Comparison', citations:5473 },
  { cnty:'IN', rank:1, domain:'reddit.com', type:'Community', citations:47458 },
  { cnty:'IN', rank:2, domain:'youtube.com', type:'SNS', citations:41583 },
  { cnty:'IN', rank:3, domain:'samsung.com', type:'Brand/Manufacturer', citations:17434 },
  { cnty:'IN', rank:4, domain:'lg.com', type:'Brand/Manufacturer', citations:15525 },
  { cnty:'IN', rank:5, domain:'croma.com', type:'Retail', citations:14224 },
  { cnty:'IN', rank:6, domain:'bajajfinserv.in', type:'Service', citations:12098 },
  { cnty:'IN', rank:7, domain:'rtings.com', type:'Review', citations:10664 },
  { cnty:'IN', rank:8, domain:'shop.haierindia.com', type:'Brand/Manufacturer', citations:8871 },
  { cnty:'IN', rank:9, domain:'flipkart.com', type:'Retail', citations:7886 },
  { cnty:'IN', rank:10, domain:'timesofindia.indiatimes.com', type:'News', citations:7048 },
  { cnty:'AU', rank:1, domain:'reddit.com', type:'Community', citations:49142 },
  { cnty:'AU', rank:2, domain:'appliancesonline.com.au', type:'Retail', citations:31543 },
  { cnty:'AU', rank:3, domain:'choice.com.au', type:'Review', citations:24167 },
  { cnty:'AU', rank:4, domain:'youtube.com', type:'SNS', citations:21724 },
  { cnty:'AU', rank:5, domain:'thegoodguys.com.au', type:'Retail', citations:20874 },
  { cnty:'AU', rank:6, domain:'samsung.com', type:'Brand/Manufacturer', citations:16161 },
  { cnty:'AU', rank:7, domain:'lg.com', type:'Brand/Manufacturer', citations:13313 },
  { cnty:'AU', rank:8, domain:'techradar.com', type:'Review', citations:13296 },
  { cnty:'AU', rank:9, domain:'rtings.com', type:'Review', citations:11385 },
  { cnty:'AU', rank:10, domain:'productreview.com.au', type:'Community', citations:9370 },
  { cnty:'VN', rank:1, domain:'youtube.com', type:'SNS', citations:42020 },
  { cnty:'VN', rank:2, domain:'dienmayxanh.com', type:'Retail', citations:25059 },
  { cnty:'VN', rank:3, domain:'fptshop.com.vn', type:'Retail', citations:21174 },
  { cnty:'VN', rank:4, domain:'dienmaycholon.com', type:'Retail', citations:18112 },
  { cnty:'VN', rank:5, domain:'lg.com', type:'Brand/Manufacturer', citations:11371 },
  { cnty:'VN', rank:6, domain:'samsung.com', type:'Brand/Manufacturer', citations:11193 },
  { cnty:'VN', rank:7, domain:'reddit.com', type:'Community', citations:10238 },
  { cnty:'VN', rank:8, domain:'panasonic.com', type:'Brand/Manufacturer', citations:8453 },
  { cnty:'VN', rank:9, domain:'cellphones.com.vn', type:'Retail', citations:8176 },
  { cnty:'VN', rank:10, domain:'dienmaythienphu.vn', type:'Retail', citations:8070 },
]

const INIT_CITATIONS = [
  { rank: 1, source: 'TechRadar',       category: '모니터',     score: 87, delta: +5.2, ratio: 18.5 },
  { rank: 2, source: 'RTINGS.com',      category: 'TV',         score: 82, delta: +2.1, ratio: 17.4 },
  { rank: 3, source: "Tom's Guide",     category: '청소기',     score: 76, delta: -1.3, ratio: 16.2 },
  { rank: 4, source: 'Wirecutter',      category: '냉장고',     score: 71, delta: +8.4, ratio: 15.1 },
  { rank: 5, source: 'CNET',            category: '세탁기',     score: 68, delta: +3.7, ratio: 14.5 },
  { rank: 6, source: '디지털타임스',    category: 'TV',         score: 64, delta: -2.5, ratio: 13.6 },
  { rank: 7, source: 'PCMag',           category: '모니터',     score: 61, delta: +1.9, ratio: 13.0 },
]

// ─── 유틸 ─────────────────────────────────────────────────────────────────────
function statusStyle(status) {
  if (status === 'lead')     return { bg: '#F0FDF4', border: '#BBF7D0', text: '#15803D', badge: '선도' }
  if (status === 'behind')   return { bg: '#FFFBEB', border: '#FDE68A', text: '#B45309', badge: '추격' }
  if (status === 'critical') return { bg: '#FFF1F2', border: '#FECDD3', text: '#BE123C', badge: '취약' }
  return                            { bg: '#F8FAFC', border: '#E2E8F0', text: '#475569', badge: '보통' }
}

function DeltaBadge({ delta, size = 'sm', mom = false, noPrev = false }) {
  const fs = size === 'lg' ? 14 : 11
  if (noPrev) {
    return <span style={{ display: 'inline-flex', alignItems: 'center', gap: 3, color: '#94A3B8', fontSize: fs, fontWeight: 700, fontFamily: FONT }}>{mom ? 'MoM ' : ''}—</span>
  }
  const abs   = Math.abs(delta).toFixed(1)
  const up    = delta > 0
  const zero  = delta === 0
  const Icon  = zero ? Minus : up ? TrendingUp : TrendingDown
  const color = zero ? '#94A3B8' : up ? '#16A34A' : '#DC2626'
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 3, color, fontSize: fs, fontWeight: 700, fontFamily: FONT }}>
      <Icon size={fs} strokeWidth={2.5} />
      {zero ? '변동 없음' : `${mom ? 'MoM ' : ''}${up ? '+' : '-'}${abs}%p`}
    </span>
  )
}

function SectionTitle({ label, sub, right }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 3, height: 16, background: LG_RED, borderRadius: 2, flexShrink: 0 }} />
          <h2 style={{ margin: 0, fontSize: 13, fontWeight: 800, color: '#1A1A1A', fontFamily: FONT }}>
            {label}
          </h2>
        </div>
        {right && <div style={{ display: 'flex', alignItems: 'center' }}>{right}</div>}
      </div>
      {sub && <p style={{ margin: '4px 0 0 11px', fontSize: 11, color: '#94A3B8', fontFamily: FONT }}>{sub}</p>}
    </div>
  )
}

// ─── 스파크라인 ───────────────────────────────────────────────────────────────
function Sparkline({ data, color, width = 100, height = 32 }) {
  const min = Math.min(...data)
  const max = Math.max(...data)
  const range = max - min || 1
  const pts = data.map((v, i) => {
    const x = (i / (data.length - 1)) * width
    const y = height - ((v - min) / range) * (height - 6) - 3
    return `${x},${y}`
  })
  const areaPath = `M${pts[0]} ` + pts.slice(1).map(p => `L${p}`).join(' ') + ` L${width},${height} L0,${height} Z`
  const linePath = `M${pts[0]} ` + pts.slice(1).map(p => `L${p}`).join(' ')
  const lastPt   = pts[pts.length - 1].split(',')
  const gid      = `sg-${color.replace(/[^a-zA-Z0-9]/g, '')}`
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} style={{ overflow: 'visible' }}>
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.18" />
          <stop offset="100%" stopColor={color} stopOpacity="0.02" />
        </linearGradient>
      </defs>
      <path d={areaPath} fill={`url(#${gid})`} />
      <path d={linePath} fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx={lastPt[0]} cy={lastPt[1]} r="3" fill={color} />
    </svg>
  )
}

// ─── 전체 GEO 가시성 섹션 ─────────────────────────────────────────────────────
function TotalSection({ total, totalInsight }) {
  const delta = +(total.score - total.prev).toFixed(1)
  return (
    <div style={{
      background: 'linear-gradient(135deg, #0F172A 0%, #1E1B4B 50%, #0F172A 100%)',
      borderRadius: 14, padding: '22px 28px', marginBottom: 22, position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', right: -30, top: -30, width: 220, height: 220, borderRadius: '50%',
        background: `radial-gradient(circle, ${LG_RED}22 0%, transparent 70%)`, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', left: '40%', bottom: -40, width: 160, height: 160, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
        <p style={{ margin: 0, fontSize: 20, fontWeight: 700, color: '#FFFFFF',
          textTransform: 'uppercase', fontFamily: FONT }}>
          LG GEO Visibility %
        </p>
        <span style={{ fontSize: 11, color: '#94A3B8', fontFamily: FONT, textAlign: 'right' }}>Model : ChatGPT, ChatGPT Search, Gemini, Perplexity<br/>Subsidiary : US, CA, UK, DE, ES, BR, MX, IN, AU, VN</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 14, marginBottom: 16, flexWrap: 'wrap' }}>
        <div>
          <span style={{ fontSize: 52, fontWeight: 900, color: '#FFFFFF', fontFamily: FONT, lineHeight: 1 }}>
            {total.score}
          </span>
          <span style={{ fontSize: 20, fontWeight: 700, color: '#94A3B8', fontFamily: FONT, marginLeft: 2 }}>%</span>
        </div>
        <div style={{ paddingBottom: 8 }}>
          <DeltaBadge delta={delta} size="lg" noPrev={!total.prev} />
          <p style={{ margin: '3px 0 0', fontSize: 11, color: '#64748B', fontFamily: FONT }}>MoM</p>
        </div>
        <div style={{ marginLeft: 'auto', paddingBottom: 6, textAlign: 'right' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 5,
            background: 'rgba(207,6,82,0.18)', border: `1px solid ${LG_RED}55`, borderRadius: 8, padding: '6px 12px' }}>
            <span style={{ fontSize: 18, fontWeight: 900, color: LG_RED, fontFamily: FONT }}>{total.rank}위</span>
            <span style={{ fontSize: 11, color: '#94A3B8', fontFamily: FONT }}>/ {total.totalBrands}개 브랜드 중</span>
          </div>
        </div>
      </div>
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
          <span style={{ fontSize: 11, color: '#64748B', fontFamily: FONT }}>0%</span>
          <span style={{ fontSize: 11, color: '#64748B', fontFamily: FONT }}>100%</span>
        </div>
        <div style={{ position: 'relative', height: 10, background: 'rgba(255,255,255,0.1)', borderRadius: 10 }}>
          <div style={{ position: 'absolute', left: `${total.prev}%`, top: -4, bottom: -4,
            width: 2, background: '#475569', borderRadius: 2 }} />
          <div style={{ width: `${total.score}%`, height: '100%',
            background: `linear-gradient(90deg, ${LG_DARK}, ${LG_RED})`, borderRadius: 10 }} />
          <div style={{ position: 'absolute', left: `calc(${total.score}% - 6px)`, top: '50%',
            transform: 'translateY(-50%)', width: 12, height: 12, background: '#FFFFFF',
            border: `3px solid ${LG_RED}`, borderRadius: '50%', boxShadow: `0 0 0 3px ${LG_RED}33` }} />
        </div>
        <div style={{ display: 'flex', gap: 16, marginTop: 8 }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 11, color: '#94A3B8', fontFamily: FONT }}>
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#FFFFFF',
              border: `2px solid ${LG_RED}`, display: 'inline-block' }} />
            LG전자 {total.score}%
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 11, color: '#94A3B8', fontFamily: FONT }}>
            <span style={{ width: 2, height: 10, background: '#475569', display: 'inline-block', borderRadius: 2 }} />
            prev {total.prev}%
          </span>
        </div>
      </div>
      {totalInsight && (
        <div style={{ marginTop: 18, borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 16 }}>
          <p style={{ margin: '0 0 6px', fontSize: 11, fontWeight: 700, color: LG_RED,
            textTransform: 'uppercase', letterSpacing: 1.5, fontFamily: FONT }}>GEO 전략 인사이트</p>
          <p style={{ margin: 0, fontSize: 11, color: '#CBD5E1', lineHeight: 1.8, fontFamily: FONT }}>
            {totalInsight}
          </p>
        </div>
      )}
    </div>
  )
}

// ─── 제품별 카드 ──────────────────────────────────────────────────────────────
function ProductCard({ product, buColor }) {
  const st         = statusStyle(product.status)
  const delta      = +(product.score - product.prev).toFixed(1)
  const sparkColor = product.status === 'critical' ? '#BE123C' : product.status === 'behind' ? '#E8910C' : '#15803D'
  return (
    <div style={{ background: '#FFFFFF', border: `1.5px solid ${st.border}`,
      borderRadius: 12, padding: '14px 16px', overflow: 'hidden' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
        <div>
          <p style={{ margin: 0, fontSize: 11, color: '#94A3B8', fontFamily: FONT, marginBottom: 2 }}>카테고리</p>
          <h3 style={{ margin: 0, fontSize: 14, fontWeight: 800, color: '#1A1A1A', fontFamily: FONT }}>
            {product.kr}
          </h3>
        </div>
        <span style={{ background: st.bg, color: st.text, border: `1px solid ${st.border}`,
          borderRadius: 20, padding: '2px 8px', fontSize: 11, fontWeight: 700, fontFamily: FONT }}>
          {st.badge}
        </span>
      </div>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 10 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 5 }}>
            <span style={{ fontSize: 30, fontWeight: 900, color: '#1A1A1A', fontFamily: FONT, lineHeight: 1 }}>
              {product.score.toFixed(1)}
            </span>
            <span style={{ fontSize: 12, color: '#94A3B8', fontFamily: FONT, paddingBottom: 3 }}>%</span>
          </div>
          <div style={{ marginTop: 4 }}><DeltaBadge delta={delta} mom noPrev={!product.prev} /></div>
        </div>
        <div style={{ flexShrink: 0 }}>
          <div style={{ fontSize: 11, color: '#94A3B8', fontFamily: FONT, marginBottom: 3, textAlign: 'right' }}>4주 트렌드</div>
          <Sparkline data={product.weekly} color={sparkColor} width={100} height={32} />
        </div>
      </div>
      <div style={{ background: '#F8FAFC', borderRadius: 7, padding: '7px 10px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: 11, color: '#94A3B8', fontFamily: FONT }}>{product.compName} 대비</span>
        <span style={{ fontSize: 11, fontWeight: 700, fontFamily: FONT,
          color: (product.compRatio || 0) >= 100 ? '#15803D' : (product.compRatio || 0) >= 80 ? '#E8910C' : '#BE123C' }}>
          {product.compRatio || Math.round(product.vsComp > 0 ? (product.score / product.vsComp) * 100 : 100)}%
        </span>
      </div>
    </div>
  )
}

// ─── Citation 섹션 ────────────────────────────────────────────────────────────
function CitationSection({ citations }) {
  const list     = citations.slice(0, 10)
  const maxScore = Math.max(...citations.map(c => c.score), 100)

  return (
    <div>
      <div style={{ overflow: 'hidden' }}>
        {list.map((c, i) => (
          <div key={`${c.rank}-${c.source}`} style={{ display: 'flex', alignItems: 'center',
            borderBottom: i < list.length - 1 ? '1px solid #F8FAFC' : 'none' }}>
            {/* 순위 + 출처명 + 카테고리 */}
            <div style={{ width: 150, padding: '12px 12px 12px 16px', flexShrink: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                <span style={{ width: 20, height: 20, borderRadius: '50%', flexShrink: 0,
                  background: c.rank <= 3 ? LG_RED : '#F1F5F9',
                  color: c.rank <= 3 ? '#FFFFFF' : '#94A3B8',
                  fontSize: 11, fontWeight: 800, fontFamily: FONT,
                  display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {c.rank}
                </span>
                <div>
                  <p style={{ margin: 0, fontSize: 11, fontWeight: 700, color: '#1A1A1A', fontFamily: FONT }}>{c.source}</p>
                  <span style={{ fontSize: 11, color: '#94A3B8', fontFamily: FONT,
                    background: '#F8FAFC', borderRadius: 4, padding: '1px 5px', display: 'inline-block', marginTop: 2 }}>
                    {c.category}
                  </span>
                </div>
              </div>
            </div>
            {/* 바 + 점수 + 델타 */}
            <div style={{ flex: 1, padding: '12px 16px 12px 0' }}>
              <div style={{ position: 'relative', height: 26, background: '#F8FAFC', borderRadius: 7 }}>
                <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0,
                  width: `${(c.score / maxScore) * 100}%`, borderRadius: 7,
                  background: `linear-gradient(90deg, ${LG_DARK}, ${LG_RED})`, transition: 'width 0.6s ease' }} />
                <div style={{ position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)',
                  display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ fontSize: 11, fontWeight: 800, color: LG_RED, fontFamily: FONT }}>{c.score}</span>
                  <DeltaBadge delta={c.delta} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── 섹션 인사이트/HowToRead 박스 ─────────────────────────────────────────────
function InsightBlock({ insight, showInsight, howToRead, showHowToRead }) {
  const hasInsight    = showInsight    && insight
  const hasHowToRead  = showHowToRead  && howToRead
  if (!hasInsight && !hasHowToRead) return null
  return (
    <div style={{ padding: '0 20px 14px' }}>
      {hasInsight && (
        <div style={{ borderRadius: 8, background: '#FFF4F7', border: `1px solid ${LG_RED}25`,
          padding: '10px 14px', marginBottom: hasHowToRead ? 8 : 0 }}>
          <p style={{ margin: '0 0 4px', fontSize: 11, fontWeight: 700, color: LG_RED,
            letterSpacing: 1.3, fontFamily: FONT }}>INSIGHT</p>
          <p style={{ margin: 0, fontSize: 11, color: '#1A1A1A', lineHeight: 1.75, fontFamily: FONT }}>{insight}</p>
        </div>
      )}
      {hasHowToRead && (
        <div style={{ borderRadius: 8, background: '#F8FAFC', border: '1px solid #E2E8F0', padding: '10px 14px' }}>
          <p style={{ margin: '0 0 4px', fontSize: 11, fontWeight: 700, color: '#64748B',
            letterSpacing: 1.3, fontFamily: FONT }}>HOW TO READ</p>
          <p style={{ margin: 0, fontSize: 11, color: '#475569', lineHeight: 1.75, fontFamily: FONT }}>{howToRead}</p>
        </div>
      )}
    </div>
  )
}

// ─── 뉴스레터 캔버스 ──────────────────────────────────────────────────────────
function NewsletterPreview({ meta, total, products, citations, dotcom, productsCnty = [], citationsCnty = [], lang = 'ko' }) {
  const iframeRef = useRef(null)
  const html = generateEmailHTML(meta, total, products, citations, dotcom, lang, productsCnty, citationsCnty)

  React.useEffect(() => {
    const iframe = iframeRef.current
    if (!iframe) return
    const doc = iframe.contentDocument || iframe.contentWindow.document
    doc.open()
    doc.write(html)
    doc.close()
    // 높이 자동 조절 — iframe 내부 스크롤바 제거
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
      style={{ width: '100%', border: 'none', minHeight: 800, background: '#F1F5F9', overflow: 'hidden' }}
      sandbox="allow-same-origin"
    />
  )
}

// ─── 대시보드 미리보기 (SVG 차트 기반 독립 시각화) ──────────────────────────────
function DashboardPreview({ meta, total, products, citations, dotcom, productsCnty = [], citationsCnty = [], lang = 'ko', weeklyLabels, weeklyAll = {} }) {
  const iframeRef = useRef(null)
  const html = generateDashboardHTML
    ? generateDashboardHTML(meta, total, products, citations, dotcom, lang, productsCnty, citationsCnty, weeklyLabels, weeklyAll)
    : '<!DOCTYPE html><html><body style="background:#F1F5F9;display:flex;align-items:center;justify-content:center;height:100vh;font-family:sans-serif;color:#64748B"><p>Loading dashboard...</p></body></html>'

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

// ─── 사이드바 ─────────────────────────────────────────────────────────────────
const inputStyle = {
  width: '100%', background: '#1E293B', border: '1px solid #334155',
  borderRadius: 7, padding: '6px 10px', fontSize: 11, color: '#E2E8F0',
  fontFamily: FONT, outline: 'none', boxSizing: 'border-box',
}

function Sidebar({ meta, setMeta, metaKo, setMetaKo, metaEn, setMetaEn, total, setTotal, products, setProducts, citations, setCitations, dotcom, setDotcom, productsCnty, setProductsCnty, citationsCnty, setCitationsCnty, resolved, previewLang, setPreviewLang, snapshots, setSnapshots, setWeeklyLabels, setWeeklyAll }) {
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
    const ep = window.__PUBLISH_API__ || '/api/publish'
    fetch(ep).then(r => r.ok ? r.json() : null).then(setPublishInfo).catch(() => {})
  }, [])

  async function handlePublish() {
    if (publishing) return
    setPublishing(true); setPublishMsg('')
    try {
      const resolvedKo = resolveDataForLang(products, productsCnty, citations, citationsCnty, 'ko')
      const resolvedEn = resolveDataForLang(products, productsCnty, citations, citationsCnty, 'en')
      let htmlKo, htmlEn, title
      if (IS_DASHBOARD && generateDashboardHTML) {
        htmlKo = generateDashboardHTML(metaKo, total, resolvedKo.products, resolvedKo.citations, dotcom, 'ko', resolvedKo.productsCnty, resolvedKo.citationsCnty, weeklyLabels, weeklyAll)
        htmlEn = generateDashboardHTML(metaEn, total, resolvedEn.products, resolvedEn.citations, dotcom, 'en', resolvedEn.productsCnty, resolvedEn.citationsCnty, weeklyLabels, weeklyAll)
        title = `${metaKo.period || ''} ${metaKo.title || 'KPI Dashboard'}`.trim()
      } else {
        htmlKo = generateEmailHTML(metaKo, total, resolvedKo.products, resolvedKo.citations, dotcom, 'ko', resolvedKo.productsCnty, resolvedKo.citationsCnty)
        htmlEn = generateEmailHTML(metaEn, total, resolvedEn.products, resolvedEn.citations, dotcom, 'en', resolvedEn.productsCnty, resolvedEn.citationsCnty)
        title = `${metaKo.period || ''} ${metaKo.title || 'Newsletter'}`.trim()
      }
      const ep = window.__PUBLISH_API__ || '/api/publish'
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
      const ep = window.__PUBLISH_API__ || '/api/publish'
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
    const html = generateEmailHTML(meta, total, resolved.products, resolved.citations, dotcom, previewLang, resolved.productsCnty, resolved.citationsCnty)
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
      const html    = generateEmailHTML(meta, total, resolved.products, resolved.citations, dotcom, previewLang, resolved.productsCnty, resolved.citationsCnty)
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
        saveSyncData({
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
      setGsStatus('ok'); setGsMsg(IS_DASHBOARD ? '동기화 완료! EN 자동 번역 중...' : '동기화 완료!')
      // Dashboard mode: auto-translate after sync
      // executeTranslate는 이제 callback form을 사용하므로 override 불필요
      if (IS_DASHBOARD) {
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
            <p style={{ margin: 0, fontSize: 11, color: '#475569', fontFamily: FONT }}>뉴스레터 생성기</p>
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

// ─── HTML 코드 뷰어 ───────────────────────────────────────────────────────────
function HtmlCodeViewer({ meta, total, products, citations, dotcom, productsCnty = [], citationsCnty = [], lang = 'ko' }) {
  const [copied, setCopied] = useState(false)
  const html = generateEmailHTML(meta, total, products, citations, dotcom, lang, productsCnty, citationsCnty)

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
      {/* 코드 뷰어 툴바 */}
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
      {/* 코드 영역 */}
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
  const cache = useRef(loadCache()).current
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
  const [activeTab, setActiveTab] = useState(IS_DASHBOARD ? 'visibility' : 'preview')
  const [previewLang, setPreviewLang] = useState('ko') // 'ko' | 'en'
  const [snapshots,  setSnapshots]  = useState([])
  const [snapName,   setSnapName]   = useState('')
  const [snapOpen,   setSnapOpen]   = useState(false)
  const [snapMsg,    setSnapMsg]    = useState('')
  const [activeSnap, setActiveSnap] = useState(null) // 현재 불러온 스냅샷 (ts 기준)
  const [sidebarOpen, setSidebarOpen] = useState(true)

  // 현재 언어에 따른 meta 선택
  const meta    = previewLang === 'en' ? metaEn : metaKo
  const setMeta = previewLang === 'en' ? setMetaEn : setMetaKo

  // 현재 언어에 맞게 데이터 해상도 적용 (제품명·국가명 등)
  const resolved = useMemo(
    () => resolveDataForLang(products, productsCnty, citations, citationsCnty, previewLang),
    [products, productsCnty, citations, citationsCnty, previewLang]
  )

  // 서버에서 스냅샷 목록 로드
  useEffect(() => { fetchSnapshots().then(setSnapshots) }, [])

  // 서버에서 동기화 데이터 로드 (초기 1회)
  // 레이스 컨디션 방지: 로드 완료 전 사용자가 동기화하면 무시
  const serverSyncApplied = useRef(false)
  useEffect(() => {
    let cancelled = false
    fetchSyncData().then(d => {
      if (cancelled || !d) return
      serverSyncApplied.current = true
      if (d.meta)          setMetaKo(m => ({ ...m, ...d.meta }))
      if (d.total)         setTotal(t => ({ ...t, ...d.total }))
      if (d.citations)     setCitations(d.citations)
      if (d.dotcom)        setDotcom(prev => ({ ...prev, ...d.dotcom }))
      if (d.productsCnty)  setProductsCnty(d.productsCnty)
      if (d.citationsCnty) setCitationsCnty(d.citationsCnty)
      if (d.weeklyLabels)  setWeeklyLabels(d.weeklyLabels)
      if (d.weeklyAll)     setWeeklyAll(prev => ({ ...prev, ...d.weeklyAll }))
      // productsPartial → 새로 생성, weeklyMap → 병합
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

  // 상태 변경 시 localStorage에 자동 저장
  useEffect(() => {
    saveCache({ metaKo, metaEn, total, products, citations, dotcom, productsCnty, citationsCnty, weeklyLabels, weeklyAll })
  }, [metaKo, metaEn, total, products, citations, dotcom, productsCnty, citationsCnty, weeklyAll])

  // 저장 (기존 스냅샷 덮어쓰기)
  async function handleSnapOverwrite() {
    if (!activeSnap) return
    const data = { metaKo, metaEn, total, products, citations, dotcom, productsCnty, citationsCnty }
    const result = await updateSnapshot(activeSnap, data)
    if (result) setSnapshots(result)
    setSnapMsg(result ? '저장 완료!' : '저장 실패'); setTimeout(() => setSnapMsg(''), 2000)
  }
  // 새로 저장
  async function handleSnapSaveNew() {
    const name = snapName.trim() || `${meta.period || 'Untitled'} — ${new Date().toLocaleString('ko-KR')}`
    const result = await postSnapshot(name, { metaKo, metaEn, total, products, citations, dotcom, productsCnty, citationsCnty })
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
    setActiveSnap(snap.ts)
    setSnapMsg(`"${snap.name}" 불러옴`); setTimeout(() => setSnapMsg(''), 2000)
  }
  async function handleSnapDelete(idx) {
    const snap = snapshots[idx]
    if (!snap) return
    const result = await deleteSnapshot(snap.ts)
    if (result) setSnapshots(result)
    if (activeSnap === snap.ts) setActiveSnap(null)
  }

  return (
    <div style={{ display: 'flex', height: '100vh', background: '#0A0F1C', fontFamily: FONT }}>
      {sidebarOpen && (
        <Sidebar
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
            {(IS_DASHBOARD ? [] : [
              { key: 'preview-ko', tab: 'preview', lang: 'ko', label: '뉴스레터미리보기 (KO)' },
              { key: 'preview-en', tab: 'preview', lang: 'en', label: '뉴스레터미리보기 (EN)' },
              { key: 'code',       tab: 'code',    lang: null, label: 'HTML 내보내기' },
            ]).map(({ key, tab, lang, label }) => {
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
            {IS_DASHBOARD && (
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
            )}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            {snapMsg && <span style={{ fontSize: 11, color: '#22C55E', fontFamily: FONT }}>{snapMsg}</span>}
            {/* 저장 — activeSnap이 있을 때만 활성 */}
            <button onClick={handleSnapOverwrite} disabled={!activeSnap}
              title={activeSnap ? '현재 버전에 덮어쓰기' : '불러온 버전이 없습니다'}
              style={{ padding: '4px 10px', borderRadius: 6, border: 'none', cursor: activeSnap ? 'pointer' : 'default',
                background: activeSnap ? '#1D4ED8' : '#1E293B', color: activeSnap ? '#FFFFFF' : '#475569',
                fontSize: 11, fontWeight: 700, fontFamily: FONT,
                display: 'flex', alignItems: 'center', gap: 4, opacity: activeSnap ? 1 : 0.5 }}>
              <Save size={11} /> 저장
            </button>
            {/* 새로 저장 */}
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
            {/* 불러오기 */}
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
        {IS_DASHBOARD ? (
          <div style={{ flex: 1, overflow: 'hidden' }}>
            <DashboardPreview meta={meta} total={total} products={resolved.products} citations={resolved.citations} dotcom={dotcom} productsCnty={resolved.productsCnty} citationsCnty={resolved.citationsCnty} lang={previewLang} weeklyLabels={weeklyLabels} weeklyAll={weeklyAll} />
          </div>
        ) : (
          activeTab === 'preview' ? (
            <div style={{ flex: 1, overflowY: 'auto', padding: '28px 36px',
              background: 'linear-gradient(180deg, #0A0F1C 0%, #0F172A 100%)' }}>
              <div style={{ maxWidth: 860, margin: '0 auto' }}>
                <NewsletterPreview meta={meta} total={total} products={resolved.products} citations={resolved.citations} dotcom={dotcom} productsCnty={resolved.productsCnty} citationsCnty={resolved.citationsCnty} lang={previewLang} />
              </div>
            </div>
          ) : (
            <HtmlCodeViewer meta={meta} total={total} products={resolved.products} citations={resolved.citations} dotcom={dotcom} productsCnty={resolved.productsCnty} citationsCnty={resolved.citationsCnty} lang={previewLang} />
          )
        )}
        <div style={{ height: 28, borderTop: '1px solid #1E293B', background: 'rgba(15,23,42,0.95)',
          display: 'flex', alignItems: 'center', justifyContent: 'flex-end', padding: '0 16px', flexShrink: 0 }}>
          <span style={{ fontSize: 10, color: '#475569', fontFamily: FONT }}>v{__APP_VERSION__}</span>
        </div>
      </div>
    </div>
  )
}
