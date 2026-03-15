import React, { useState, useRef, useCallback, useEffect } from 'react'
import { ChevronLeft, ChevronRight, TrendingUp, TrendingDown, Minus, Copy, Download, RefreshCw, Check, Send, Sparkles, Save, FolderOpen, Trash2, Languages } from 'lucide-react'
import { downloadTemplate } from './excelUtils'
import { extractSheetId, syncFromGoogleSheets } from './googleSheetsUtils'
import { generateEmailHTML } from './emailTemplate'

// ─── localStorage 캐시 ─────────────────────────────────────────────────────────
const STORAGE_KEY = 'geo-newsletter-cache'
const CACHE_VERSION = 2
function loadCache() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw)
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
  noticeText: '', showNotice: false,
  todoText: '', showTodo: false,
}
const INIT_TOTAL = { score: 42.7, prev: 42.2, rank: 1, totalBrands: 12 }

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
      {sub && <p style={{ margin: '4px 0 0 11px', fontSize: 10, color: '#94A3B8', fontFamily: FONT }}>{sub}</p>}
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
        <span style={{ fontSize: 10, color: '#94A3B8', fontFamily: FONT, textAlign: 'right' }}>Model : ChatGPT, ChatGPT Search, Gemini<br/>Subsidiary : US, CA, UK, DE, ES, BR, MX, IN, AU, VN</span>
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
          <p style={{ margin: '3px 0 0', fontSize: 10, color: '#64748B', fontFamily: FONT }}>MoM</p>
        </div>
        <div style={{ marginLeft: 'auto', paddingBottom: 6, textAlign: 'right' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 5,
            background: 'rgba(207,6,82,0.18)', border: `1px solid ${LG_RED}55`, borderRadius: 8, padding: '6px 12px' }}>
            <span style={{ fontSize: 18, fontWeight: 900, color: LG_RED, fontFamily: FONT }}>{total.rank}위</span>
            <span style={{ fontSize: 10, color: '#94A3B8', fontFamily: FONT }}>/ {total.totalBrands}개 브랜드 중</span>
          </div>
        </div>
      </div>
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
          <span style={{ fontSize: 10, color: '#64748B', fontFamily: FONT }}>0%</span>
          <span style={{ fontSize: 10, color: '#64748B', fontFamily: FONT }}>100%</span>
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
          <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 10, color: '#94A3B8', fontFamily: FONT }}>
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#FFFFFF',
              border: `2px solid ${LG_RED}`, display: 'inline-block' }} />
            LG전자 {total.score}%
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 10, color: '#94A3B8', fontFamily: FONT }}>
            <span style={{ width: 2, height: 10, background: '#475569', display: 'inline-block', borderRadius: 2 }} />
            prev {total.prev}%
          </span>
        </div>
      </div>
      {totalInsight && (
        <div style={{ marginTop: 18, borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 16 }}>
          <p style={{ margin: '0 0 6px', fontSize: 10, fontWeight: 700, color: LG_RED,
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
          <p style={{ margin: 0, fontSize: 9, color: '#94A3B8', fontFamily: FONT, marginBottom: 2 }}>카테고리</p>
          <h3 style={{ margin: 0, fontSize: 14, fontWeight: 800, color: '#1A1A1A', fontFamily: FONT }}>
            {product.kr}
          </h3>
        </div>
        <span style={{ background: st.bg, color: st.text, border: `1px solid ${st.border}`,
          borderRadius: 20, padding: '2px 8px', fontSize: 9, fontWeight: 700, fontFamily: FONT }}>
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
          <div style={{ fontSize: 9, color: '#94A3B8', fontFamily: FONT, marginBottom: 3, textAlign: 'right' }}>4주 트렌드</div>
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
                  fontSize: 9, fontWeight: 800, fontFamily: FONT,
                  display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {c.rank}
                </span>
                <div>
                  <p style={{ margin: 0, fontSize: 11, fontWeight: 700, color: '#1A1A1A', fontFamily: FONT }}>{c.source}</p>
                  <span style={{ fontSize: 9, color: '#94A3B8', fontFamily: FONT,
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
          <p style={{ margin: '0 0 4px', fontSize: 9, fontWeight: 700, color: LG_RED,
            letterSpacing: 1.3, fontFamily: FONT }}>INSIGHT</p>
          <p style={{ margin: 0, fontSize: 11, color: '#1A1A1A', lineHeight: 1.75, fontFamily: FONT }}>{insight}</p>
        </div>
      )}
      {hasHowToRead && (
        <div style={{ borderRadius: 8, background: '#F8FAFC', border: '1px solid #E2E8F0', padding: '10px 14px' }}>
          <p style={{ margin: '0 0 4px', fontSize: 9, fontWeight: 700, color: '#64748B',
            letterSpacing: 1.3, fontFamily: FONT }}>HOW TO READ</p>
          <p style={{ margin: 0, fontSize: 11, color: '#475569', lineHeight: 1.75, fontFamily: FONT }}>{howToRead}</p>
        </div>
      )}
    </div>
  )
}

// ─── 뉴스레터 캔버스 ──────────────────────────────────────────────────────────
function NewsletterPreview({ meta, total, products, citations, dotcom, lang = 'ko' }) {
  const iframeRef = useRef(null)
  const html = generateEmailHTML(meta, total, products, citations, dotcom, lang)

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

// ─── 사이드바 ─────────────────────────────────────────────────────────────────
const inputStyle = {
  width: '100%', background: '#1E293B', border: '1px solid #334155',
  borderRadius: 7, padding: '6px 10px', fontSize: 11, color: '#E2E8F0',
  fontFamily: FONT, outline: 'none', boxSizing: 'border-box',
}

function Sidebar({ meta, total, products, citations, dotcom, setMeta, setTotal, setProducts, setCitations, setDotcom, previewLang, setPreviewLang, snapshots, setSnapshots }) {
  const [gsUrl,     setGsUrl]     = useState('https://docs.google.com/spreadsheets/d/1fTciJRUAqU5lhkPCb39mzv1Y4kNBslF8EuHjZ5H3JY0/edit?gid=1331469350#gid=1331469350')
  const [gsSyncing, setGsSyncing] = useState(false)
  const [gsStatus,  setGsStatus]  = useState(null)
  const [gsMsg,     setGsMsg]     = useState('')
  const [copied,    setCopied]    = useState(false)
  const [toEmail,   setToEmail]   = useState('')
  const [mailSent,  setMailSent]  = useState(false)
  const [showTranslatePopup, setShowTranslatePopup] = useState(false)
  const [translating, setTranslating] = useState(false)

  async function handleTranslate() {
    if (previewLang !== 'en') {
      alert('EN 탭에서만 AI 번역 기능을 사용할 수 있습니다.\n상단에서 "뉴스레터미리보기 (EN)" 탭을 먼저 선택해주세요.')
      return
    }
    setShowTranslatePopup(true)
  }

  async function executeTranslate() {
    setShowTranslatePopup(false)
    setTranslating(true)
    try {
      // 번역할 텍스트 수집
      const metaTexts = [
        meta.title || '', meta.dateLine || '', meta.noticeText || '',
        meta.totalInsight || '', meta.reportType || '',
        meta.productInsight || '', meta.productHowToRead || '',
        meta.citationInsight || '', meta.citationHowToRead || '',
        meta.dotcomInsight || '', meta.dotcomHowToRead || '',
        meta.todoText || '',
      ]
      const productNames = products.map(p => p.kr || '')
      const allTexts = [...metaTexts, ...productNames].map(t => t || ' ')

      const res = await fetch('/api/translate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ texts: allTexts, from: 'ko', to: 'en' }),
      })
      const data = await res.json()
      if (!data.ok) throw new Error(data.error || '번역 실패')

      const tr = data.translated
      const newMeta = { ...meta,
        title: tr[0] || meta.title,
        dateLine: tr[1] || meta.dateLine,
        noticeText: tr[2] || meta.noticeText,
        totalInsight: tr[3] || meta.totalInsight,
        reportType: tr[4] || meta.reportType,
        productInsight: tr[5] || meta.productInsight,
        productHowToRead: tr[6] || meta.productHowToRead,
        citationInsight: tr[7] || meta.citationInsight,
        citationHowToRead: tr[8] || meta.citationHowToRead,
        dotcomInsight: tr[9] || meta.dotcomInsight,
        dotcomHowToRead: tr[10] || meta.dotcomHowToRead,
        todoText: tr[11] || meta.todoText,
      }
      const newProducts = products.map((p, i) => ({ ...p, kr: tr[metaTexts.length + i] || p.kr }))

      setMeta(newMeta)
      setProducts(newProducts)

      // 스냅샷 저장
      const snapName = `[EN] ${meta.period || 'Untitled'} — ${new Date().toLocaleString('ko-KR')}`
      const snapRes = await postSnapshot(snapName, { meta: newMeta, total, products: newProducts, citations, dotcom })
      if (snapRes) setSnapshots(snapRes)

      setTranslating(false)
    } catch (err) {
      alert('번역 오류: ' + err.message)
      setTranslating(false)
    }
  }

  async function handleCopyHtml() {
    const html = generateEmailHTML(meta, total, products, citations, dotcom)
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
      const html    = generateEmailHTML(meta, total, products, citations, dotcom)
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
      if (parsed.meta)        setMeta(m => ({ ...m, ...parsed.meta }))
      if (parsed.total)       setTotal(t => ({ ...t, ...parsed.total }))
      if (parsed.citations)   setCitations(parsed.citations)
      if (parsed.dotcom)      setDotcom(d => ({ ...d, ...parsed.dotcom }))
      if (parsed.productsPartial || parsed.weeklyMap) {
        setProducts(prev => prev.map(p => {
          const part   = parsed.productsPartial?.find(x => x.id === p.id)
          const weekly = parsed.weeklyMap?.[p.id]
          const next   = { ...p }
          if (part)   Object.assign(next, part)
          if (weekly) next.weekly = weekly
          // LG score / 경쟁사 score
          const ratio = next.vsComp > 0 ? (next.score / next.vsComp) * 100 : 100
          next.compRatio = Math.round(ratio)
          next.status = ratio >= 100 ? 'lead' : ratio >= 80 ? 'behind' : 'critical'
          return next
        }))
      }
      setGsStatus('ok'); setGsMsg('동기화 완료!')
    } catch (err) {
      setGsStatus('error'); setGsMsg(err.message)
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
            <p style={{ margin: 0, fontSize: 11, fontWeight: 700, color: '#FFFFFF', fontFamily: FONT }}>GEO Builder <span style={{ fontSize: 9, fontWeight: 400, color: '#64748B' }}>v{__APP_VERSION__}</span></p>
            <p style={{ margin: 0, fontSize: 9, color: '#475569', fontFamily: FONT }}>뉴스레터 생성기</p>
          </div>
        </div>
      </div>

      {/* 메인 영역 */}
      <div style={{ padding: '16px 14px', flex: 1, overflowY: 'auto' }}>

        {/* ── 헤더 편집 ── */}
        <p style={{ margin: '0 0 10px 2px', fontSize: 10, fontWeight: 700, color: '#475569',
          textTransform: 'uppercase', letterSpacing: 1, fontFamily: FONT }}>
          헤더 편집
        </p>

        {/* 리포트 유형 (좌상단) */}
        <p style={{ margin: '0 0 3px', fontSize: 9, color: '#64748B', fontFamily: FONT }}>리포트 유형 <span style={{ color: '#334155' }}>(좌상단)</span></p>
        <input value={meta.reportType} onChange={e => setMeta(m => ({ ...m, reportType: e.target.value }))}
          style={{ ...inputStyle, marginBottom: 8 }} />

        {/* 보고서 번호 + 기간 (레드바) */}
        <div style={{ display: 'flex', gap: 6, marginBottom: 8 }}>
          <div style={{ flex: 1 }}>
            <p style={{ margin: '0 0 3px', fontSize: 9, color: '#64748B', fontFamily: FONT }}>보고서 번호</p>
            <input value={meta.reportNo} onChange={e => setMeta(m => ({ ...m, reportNo: e.target.value }))}
              style={{ ...inputStyle }} />
          </div>
          <div style={{ flex: 1.4 }}>
            <p style={{ margin: '0 0 3px', fontSize: 9, color: '#64748B', fontFamily: FONT }}>기간 <span style={{ color: '#334155' }}>(레드바)</span></p>
            <input value={meta.period} onChange={e => setMeta(m => ({ ...m, period: e.target.value }))}
              style={{ ...inputStyle }} />
          </div>
        </div>

        {/* 제목 텍스트 */}
        <p style={{ margin: '0 0 3px', fontSize: 9, color: '#64748B', fontFamily: FONT }}>제목 텍스트</p>
        <textarea
          value={meta.title}
          onChange={e => setMeta(m => ({ ...m, title: e.target.value }))}
          rows={4}
          style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6, marginBottom: 8 }}
        />

        {/* 팀명 (우하단 첫째줄) */}
        <p style={{ margin: '0 0 3px', fontSize: 9, color: '#64748B', fontFamily: FONT }}>팀명 <span style={{ color: '#334155' }}>(우하단)</span></p>
        <input value={meta.team} onChange={e => setMeta(m => ({ ...m, team: e.target.value }))}
          style={{ ...inputStyle, marginBottom: 8 }} />

        {/* 기준 텍스트 (팀명 바로 아래 우하단) */}
        <p style={{ margin: '0 0 3px', fontSize: 9, color: '#64748B', fontFamily: FONT }}>기준 텍스트 <span style={{ color: '#334155' }}>(팀명 아래)</span></p>
        <input value={meta.dateLine} onChange={e => setMeta(m => ({ ...m, dateLine: e.target.value }))}
          style={{ ...inputStyle, marginBottom: 10 }} />

        {/* Notice */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
          <p style={{ margin: 0, fontSize: 9, color: '#64748B', fontFamily: FONT }}>Notice</p>
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
          <p style={{ margin: '0 0 10px', fontSize: 8, color: '#475569', fontFamily: FONT }}>**텍스트** → <strong>볼드</strong></p>
        </>)}

        {/* 폰트 크기 */}
        <div style={{ marginBottom: 10 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
            <p style={{ margin: 0, fontSize: 9, color: '#64748B', fontFamily: FONT }}>폰트 크기</p>
            <p style={{ margin: 0, fontSize: 9, color: '#94A3B8', fontFamily: FONT, fontWeight: 700 }}>
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
          <p style={{ margin: 0, fontSize: 9, color: '#64748B', fontFamily: FONT, flex: 1 }}>제목 색상</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <input
              type="color"
              value={meta.titleColor}
              onChange={e => setMeta(m => ({ ...m, titleColor: e.target.value }))}
              style={{ width: 32, height: 26, border: '1px solid #334155', borderRadius: 5,
                background: 'none', cursor: 'pointer', padding: 2 }}
            />
            <span style={{ fontSize: 9, color: '#475569', fontFamily: FONT }}>{meta.titleColor}</span>
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

        {/* ── 콘텐츠 편집 ── */}
        <p style={{ margin: '0 0 10px 2px', fontSize: 10, fontWeight: 700, color: '#475569',
          textTransform: 'uppercase', letterSpacing: 1, fontFamily: FONT }}>
          콘텐츠 편집
        </p>

        {/* GEO 전략 인사이트 */}
        <p style={{ margin: '0 0 3px', fontSize: 9, color: '#64748B', fontFamily: FONT }}>GEO 전략 인사이트</p>
        <textarea
          value={meta.totalInsight}
          onChange={e => setMeta(m => ({ ...m, totalInsight: e.target.value }))}
          rows={12}
          placeholder="전체 GEO 가시성 카드에 표시할 전략 인사이트를 입력하세요..."
          style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6, marginBottom: 4 }}
        />
        <p style={{ margin: '0 0 10px', fontSize: 8, color: '#475569', fontFamily: FONT }}>**텍스트** → <strong>볼드</strong> · 줄바꿈 지원</p>

        {/* 제품 섹션 인사이트 */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
          <p style={{ margin: 0, fontSize: 9, color: '#64748B', fontFamily: FONT }}>제품 섹션 인사이트</p>
          <div style={{ display: 'flex', gap: 4 }}>
            <button onClick={() => setMeta(m => ({ ...m, productInsight: generateProductInsight(products) }))}
              title="AI 인사이트 자동생성"
              style={{ padding: '2px 6px', borderRadius: 4, border: 'none', cursor: 'pointer',
                background: '#4F46E5', color: '#FFFFFF',
                fontSize: 9, fontWeight: 700, fontFamily: FONT, display: 'flex', alignItems: 'center', gap: 3 }}>
              <Sparkles size={9} /> AI 생성
            </button>
            <button onClick={() => setMeta(m => ({ ...m, showProductInsight: !m.showProductInsight }))}
              style={{ padding: '2px 8px', borderRadius: 4, border: 'none', cursor: 'pointer',
                background: meta.showProductInsight ? LG_RED : '#1E293B',
                color: meta.showProductInsight ? '#FFFFFF' : '#475569',
                fontSize: 9, fontWeight: 700, fontFamily: FONT }}>
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
          <p style={{ margin: 0, fontSize: 9, color: '#64748B', fontFamily: FONT }}>제품 섹션 How to Read</p>
          <div style={{ display: 'flex', gap: 4 }}>
            <button onClick={() => setMeta(m => ({ ...m, productHowToRead: generateProductHowToRead() }))}
              title="AI 인사이트 자동생성"
              style={{ padding: '2px 6px', borderRadius: 4, border: 'none', cursor: 'pointer',
                background: '#4F46E5', color: '#FFFFFF',
                fontSize: 9, fontWeight: 700, fontFamily: FONT, display: 'flex', alignItems: 'center', gap: 3 }}>
              <Sparkles size={9} /> AI 생성
            </button>
            <button onClick={() => setMeta(m => ({ ...m, showProductHowToRead: !m.showProductHowToRead }))}
              style={{ padding: '2px 8px', borderRadius: 4, border: 'none', cursor: 'pointer',
                background: meta.showProductHowToRead ? LG_RED : '#1E293B',
                color: meta.showProductHowToRead ? '#FFFFFF' : '#475569',
                fontSize: 9, fontWeight: 700, fontFamily: FONT }}>
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

        {/* Citation 인사이트 */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
          <p style={{ margin: 0, fontSize: 9, color: '#64748B', fontFamily: FONT }}>Citation 섹션 인사이트</p>
          <div style={{ display: 'flex', gap: 4 }}>
            <button onClick={() => setMeta(m => ({ ...m, citationInsight: generateCitationInsight(citations) }))}
              title="AI 인사이트 자동생성"
              style={{ padding: '2px 6px', borderRadius: 4, border: 'none', cursor: 'pointer',
                background: '#4F46E5', color: '#FFFFFF',
                fontSize: 9, fontWeight: 700, fontFamily: FONT, display: 'flex', alignItems: 'center', gap: 3 }}>
              <Sparkles size={9} /> AI 생성
            </button>
            <button onClick={() => setMeta(m => ({ ...m, showCitationInsight: !m.showCitationInsight }))}
              style={{ padding: '2px 8px', borderRadius: 4, border: 'none', cursor: 'pointer',
                background: meta.showCitationInsight ? LG_RED : '#1E293B',
                color: meta.showCitationInsight ? '#FFFFFF' : '#475569',
                fontSize: 9, fontWeight: 700, fontFamily: FONT }}>
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
          <p style={{ margin: 0, fontSize: 9, color: '#64748B', fontFamily: FONT }}>Citation How to Read</p>
          <div style={{ display: 'flex', gap: 4 }}>
            <button onClick={() => setMeta(m => ({ ...m, citationHowToRead: generateCitationHowToRead() }))}
              title="AI 인사이트 자동생성"
              style={{ padding: '2px 6px', borderRadius: 4, border: 'none', cursor: 'pointer',
                background: '#4F46E5', color: '#FFFFFF',
                fontSize: 9, fontWeight: 700, fontFamily: FONT, display: 'flex', alignItems: 'center', gap: 3 }}>
              <Sparkles size={9} /> AI 생성
            </button>
            <button onClick={() => setMeta(m => ({ ...m, showCitationHowToRead: !m.showCitationHowToRead }))}
              style={{ padding: '2px 8px', borderRadius: 4, border: 'none', cursor: 'pointer',
                background: meta.showCitationHowToRead ? LG_RED : '#1E293B',
                color: meta.showCitationHowToRead ? '#FFFFFF' : '#475569',
                fontSize: 9, fontWeight: 700, fontFamily: FONT }}>
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

        {/* 닷컴 Citation 인사이트 */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
          <p style={{ margin: 0, fontSize: 9, color: '#64748B', fontFamily: FONT }}>닷컴 Citation 인사이트</p>
          <div style={{ display: 'flex', gap: 4 }}>
            <button onClick={() => setMeta(m => ({ ...m, dotcomInsight: generateDotcomInsight(dotcom) }))}
              title="AI 인사이트 자동생성"
              style={{ padding: '2px 6px', borderRadius: 4, border: 'none', cursor: 'pointer',
                background: '#4F46E5', color: '#FFFFFF',
                fontSize: 9, fontWeight: 700, fontFamily: FONT, display: 'flex', alignItems: 'center', gap: 3 }}>
              <Sparkles size={9} /> AI 생성
            </button>
            <button onClick={() => setMeta(m => ({ ...m, showDotcomInsight: !m.showDotcomInsight }))}
              style={{ padding: '2px 8px', borderRadius: 4, border: 'none', cursor: 'pointer',
                background: meta.showDotcomInsight ? LG_RED : '#1E293B',
                color: meta.showDotcomInsight ? '#FFFFFF' : '#475569',
                fontSize: 9, fontWeight: 700, fontFamily: FONT }}>
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
          <p style={{ margin: 0, fontSize: 9, color: '#64748B', fontFamily: FONT }}>닷컴 Citation How to Read</p>
          <div style={{ display: 'flex', gap: 4 }}>
            <button onClick={() => setMeta(m => ({ ...m, dotcomHowToRead: generateDotcomHowToRead() }))}
              title="AI 인사이트 자동생성"
              style={{ padding: '2px 6px', borderRadius: 4, border: 'none', cursor: 'pointer',
                background: '#4F46E5', color: '#FFFFFF',
                fontSize: 9, fontWeight: 700, fontFamily: FONT, display: 'flex', alignItems: 'center', gap: 3 }}>
              <Sparkles size={9} /> AI 생성
            </button>
            <button onClick={() => setMeta(m => ({ ...m, showDotcomHowToRead: !m.showDotcomHowToRead }))}
              style={{ padding: '2px 8px', borderRadius: 4, border: 'none', cursor: 'pointer',
                background: meta.showDotcomHowToRead ? LG_RED : '#1E293B',
                color: meta.showDotcomHowToRead ? '#FFFFFF' : '#475569',
                fontSize: 9, fontWeight: 700, fontFamily: FONT }}>
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
          <p style={{ margin: 0, fontSize: 9, color: '#64748B', fontFamily: FONT }}>Action Plan 섹션</p>
          <button onClick={() => setMeta(m => ({ ...m, showTodo: !m.showTodo }))}
            style={{ padding: '2px 8px', borderRadius: 4, border: 'none', cursor: 'pointer',
              background: meta.showTodo ? LG_RED : '#1E293B',
              color: meta.showTodo ? '#FFFFFF' : '#475569',
              fontSize: 9, fontWeight: 700, fontFamily: FONT }}>
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
        <p style={{ margin: '0 0 16px', fontSize: 8, color: '#475569', fontFamily: FONT }}>**텍스트** → <strong>볼드</strong> · 줄바꿈 지원</p>

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
        <p style={{ margin: '0 0 10px 2px', fontSize: 10, fontWeight: 700, color: '#475569',
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
          <p style={{ margin: '0 0 6px', fontSize: 9, fontWeight: 700, color: '#64748B', fontFamily: FONT,
            textTransform: 'uppercase', letterSpacing: 0.8 }}>연동 방법</p>
          <p style={{ margin: 0, fontSize: 9, color: '#475569', fontFamily: FONT, lineHeight: 1.8 }}>
            ① 템플릿 다운로드 (.xlsx)<br />
            ② Google Sheets → 파일 → 가져오기<br />
            ③ 공유 → <span style={{ color: '#94A3B8' }}>링크가 있는 모든 사용자 (뷰어)</span><br />
            ④ URL 붙여넣기 후 동기화
          </p>
        </div>

        {/* URL 입력 */}
        <p style={{ margin: '0 0 4px', fontSize: 9, color: '#475569', fontFamily: FONT }}>Google Sheets URL</p>
        <input
          value={gsUrl}
          onChange={e => setGsUrl(e.target.value)}
          placeholder="https://docs.google.com/spreadsheets/d/..."
          style={{ ...inputStyle, fontSize: 9, padding: '7px 9px', marginBottom: 8,
            color: gsUrl ? '#E2E8F0' : '#334155' }}
        />

        {/* 동기화 버튼 — 항상 클릭 가능 (유효성은 핸들러에서 검사) */}
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

        {/* 상태 메시지 */}
        {(gsStatus || (gsSyncing && gsMsg)) && (
          <div style={{
            padding: '8px 10px', borderRadius: 7, fontSize: 9, fontFamily: FONT, lineHeight: 1.6,
            background: gsStatus === 'ok' ? '#14532D' : gsStatus === 'error' ? '#450A0A' : '#1E293B',
            color:      gsStatus === 'ok' ? '#86EFAC' : gsStatus === 'error' ? '#FCA5A5' : '#94A3B8',
            border: `1px solid ${gsStatus === 'ok' ? '#22C55E33' : gsStatus === 'error' ? '#EF444433' : '#334155'}`,
            marginBottom: 8,
          }}>
            {gsMsg}
          </div>
        )}

        <div style={{ height: 1, background: '#1E293B', margin: '16px 0' }} />

        {/* 출력 */}
        <p style={{ margin: '0 0 10px 2px', fontSize: 10, fontWeight: 700, color: '#475569',
          textTransform: 'uppercase', letterSpacing: 1, fontFamily: FONT }}>
          출력
        </p>

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
        <p style={{ margin: '0 0 4px', fontSize: 9, color: '#64748B', fontFamily: FONT }}>수신 이메일 주소</p>
        <input
          type="email"
          value={toEmail}
          onChange={e => setToEmail(e.target.value)}
          placeholder="recipient@example.com"
          style={{ ...inputStyle, fontSize: 10, marginBottom: 8 }}
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
        <p style={{ margin: 0, fontSize: 9, color: '#1E293B', fontFamily: FONT, lineHeight: 1.6 }}>
          LG 스마트체 · Arial Narrow
        </p>
      </div>
    </div>
  )
}

// ─── HTML 코드 뷰어 ───────────────────────────────────────────────────────────
function HtmlCodeViewer({ meta, total, products, citations, dotcom, lang = 'ko' }) {
  const [copied, setCopied] = useState(false)
  const html = generateEmailHTML(meta, total, products, citations, dotcom, lang)

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
          <span style={{ fontSize: 9, color: '#334155', fontFamily: FONT, marginLeft: 10 }}>
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
  const [meta,      setMeta]      = useState({ ...INIT_META, ...(cache?.meta ?? {}) })
  const [total,     setTotal]     = useState(cache?.total     ?? INIT_TOTAL)
  const [products,  setProducts]  = useState(cache?.products  ?? INIT_PRODUCTS)
  const [citations, setCitations] = useState(cache?.citations ?? INIT_CITATIONS)
  const [dotcom,    setDotcom]    = useState((cache?.dotcom && cache.dotcom.lg) ? cache.dotcom : INIT_DOTCOM)
  const [activeTab, setActiveTab] = useState('preview') // 'preview' | 'code'
  const [previewLang, setPreviewLang] = useState('ko') // 'ko' | 'en'
  const [snapshots,  setSnapshots]  = useState([])
  const [snapName,   setSnapName]   = useState('')
  const [snapOpen,   setSnapOpen]   = useState(false)
  const [snapMsg,    setSnapMsg]    = useState('')
  const [activeSnap, setActiveSnap] = useState(null) // 현재 불러온 스냅샷 (ts 기준)

  // 서버에서 스냅샷 목록 로드
  useEffect(() => { fetchSnapshots().then(setSnapshots) }, [])

  // 상태 변경 시 localStorage에 자동 저장
  useEffect(() => {
    saveCache({ meta, total, products, citations, dotcom })
  }, [meta, total, products, citations, dotcom])

  // 저장 (기존 스냅샷 덮어쓰기)
  async function handleSnapOverwrite() {
    if (!activeSnap) return
    const data = { meta, total, products, citations, dotcom }
    const result = await updateSnapshot(activeSnap, data)
    if (result) setSnapshots(result)
    setSnapMsg(result ? '저장 완료!' : '저장 실패'); setTimeout(() => setSnapMsg(''), 2000)
  }
  // 새로 저장
  async function handleSnapSaveNew() {
    const name = snapName.trim() || `${meta.period || 'Untitled'} — ${new Date().toLocaleString('ko-KR')}`
    const result = await postSnapshot(name, { meta, total, products, citations, dotcom })
    if (result) { setSnapshots(result); setSnapName(''); setActiveSnap(result[0]?.ts || null) }
    setSnapMsg(result ? '새로 저장 완료!' : '저장 실패'); setTimeout(() => setSnapMsg(''), 2000)
  }
  function handleSnapLoad(snap) {
    const d = snap.data
    if (d.meta)      setMeta({ ...INIT_META, ...d.meta })
    if (d.total)     setTotal(d.total)
    if (d.products)  setProducts(d.products)
    if (d.citations) setCitations(d.citations)
    if (d.dotcom)    setDotcom(d.dotcom)
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
      <Sidebar
        meta={meta} total={total} products={products} citations={citations} dotcom={dotcom}
        setMeta={setMeta} setTotal={setTotal} setProducts={setProducts} setCitations={setCitations} setDotcom={setDotcom}
        previewLang={previewLang} setPreviewLang={setPreviewLang} snapshots={snapshots} setSnapshots={setSnapshots}
      />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        {/* 탑바 */}
        <div style={{ height: 48, borderBottom: '1px solid #1E293B',
          background: 'rgba(15,23,42,0.95)', backdropFilter: 'blur(8px)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '0 22px', flexShrink: 0 }}>
          <div style={{ display: 'flex', gap: 3, alignItems: 'center' }}>
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
            {snapMsg && <span style={{ fontSize: 10, color: '#22C55E', fontFamily: FONT }}>{snapMsg}</span>}
            {/* 저장 — activeSnap이 있을 때만 활성 */}
            <button onClick={handleSnapOverwrite} disabled={!activeSnap}
              title={activeSnap ? '현재 버전에 덮어쓰기' : '불러온 버전이 없습니다'}
              style={{ padding: '4px 10px', borderRadius: 6, border: 'none', cursor: activeSnap ? 'pointer' : 'default',
                background: activeSnap ? '#1D4ED8' : '#1E293B', color: activeSnap ? '#FFFFFF' : '#475569',
                fontSize: 10, fontWeight: 700, fontFamily: FONT,
                display: 'flex', alignItems: 'center', gap: 4, opacity: activeSnap ? 1 : 0.5 }}>
              <Save size={11} /> 저장
            </button>
            {/* 새로 저장 */}
            <input value={snapName} onChange={e => setSnapName(e.target.value)}
              placeholder="버전 이름..."
              onKeyDown={e => e.key === 'Enter' && handleSnapSaveNew()}
              style={{ width: 120, background: '#1E293B', border: '1px solid #334155', borderRadius: 6,
                padding: '4px 8px', fontSize: 10, color: '#E2E8F0', fontFamily: FONT, outline: 'none' }} />
            <button onClick={handleSnapSaveNew} title="새 버전으로 저장"
              style={{ padding: '4px 10px', borderRadius: 6, border: 'none', cursor: 'pointer',
                background: '#166534', color: '#86EFAC', fontSize: 10, fontWeight: 700, fontFamily: FONT,
                display: 'flex', alignItems: 'center', gap: 4 }}>
              <Save size={11} /> 새로 저장
            </button>
            {/* 불러오기 */}
            <div style={{ position: 'relative' }}>
              <button onClick={() => setSnapOpen(!snapOpen)} title="저장된 버전 불러오기"
                style={{ padding: '4px 10px', borderRadius: 6, border: 'none', cursor: 'pointer',
                  background: snapOpen ? '#334155' : '#1E293B', color: '#E2E8F0', fontSize: 10, fontWeight: 700, fontFamily: FONT,
                  display: 'flex', alignItems: 'center', gap: 4 }}>
                <FolderOpen size={11} /> 불러오기 {snapshots.length > 0 && <span style={{ fontSize: 9, color: '#94A3B8' }}>({snapshots.length})</span>}
              </button>
              {snapOpen && (
                <div style={{ position: 'absolute', top: 32, right: 0, width: 320, maxHeight: 360, overflowY: 'auto',
                  background: '#1E293B', border: '1px solid #334155', borderRadius: 10, zIndex: 100, padding: 8,
                  boxShadow: '0 8px 24px rgba(0,0,0,0.4)' }}
                  onClick={e => e.stopPropagation()}>
                  {snapshots.length === 0 ? (
                    <p style={{ margin: 0, padding: 12, fontSize: 10, color: '#64748B', fontFamily: FONT, textAlign: 'center' }}>저장된 버전이 없습니다</p>
                  ) : snapshots.map((snap, i) => (
                    <div key={snap.ts} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 10px',
                      borderRadius: 7, marginBottom: 2, background: activeSnap === snap.ts ? '#1E3A5F' : '#0F172A',
                      border: activeSnap === snap.ts ? '1px solid #3B82F6' : '1px solid transparent' }}>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <p style={{ margin: 0, fontSize: 11, fontWeight: 700, color: '#E2E8F0', fontFamily: FONT,
                          overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{snap.name}</p>
                        <p style={{ margin: 0, fontSize: 9, color: '#64748B', fontFamily: FONT }}>
                          {new Date(snap.ts).toLocaleString('ko-KR')}
                        </p>
                      </div>
                      <button onClick={() => { handleSnapLoad(snap); setSnapOpen(false) }}
                        style={{ padding: '3px 8px', borderRadius: 5, border: 'none', cursor: 'pointer',
                          background: '#166534', color: '#FFFFFF', fontSize: 9, fontWeight: 700, fontFamily: FONT }}>
                        적용
                      </button>
                      <button onClick={() => handleSnapDelete(i)}
                        style={{ padding: '3px 5px', borderRadius: 5, border: 'none', cursor: 'pointer',
                          background: '#7F1D1D', color: '#FCA5A5', fontSize: 9, display: 'flex' }}>
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
          <div style={{ flex: 1, overflowY: 'auto', padding: '28px 36px',
            background: 'linear-gradient(180deg, #0A0F1C 0%, #0F172A 100%)' }}>
            <div style={{ maxWidth: 720, margin: '0 auto' }}>
              <NewsletterPreview meta={meta} total={total} products={products} citations={citations} dotcom={dotcom} lang={previewLang} />
            </div>
          </div>
        ) : (
          <HtmlCodeViewer meta={meta} total={total} products={products} citations={citations} dotcom={dotcom} lang={previewLang} />
        )}
      </div>
    </div>
  )
}
