import React from 'react'
import { TrendingUp, TrendingDown, Minus } from 'lucide-react'
import { LG_RED, LG_DARK, FONT } from './constants.js'
import { statusStyle } from './utils.js'

export function DeltaBadge({ delta, size = 'sm', mom = false, noPrev = false }) {
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

export function SectionTitle({ label, sub, right }) {
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

export function Sparkline({ data, color, width = 100, height = 32 }) {
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

export function TotalSection({ total, totalInsight }) {
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

export function ProductCard({ product, buColor }) {
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

export function CitationSection({ citations }) {
  const list     = citations.slice(0, 10)
  const maxScore = Math.max(...citations.map(c => c.score), 100)

  return (
    <div>
      <div style={{ overflow: 'hidden' }}>
        {list.map((c, i) => (
          <div key={`${c.rank}-${c.source}`} style={{ display: 'flex', alignItems: 'center',
            borderBottom: i < list.length - 1 ? '1px solid #F8FAFC' : 'none' }}>
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

export function InsightBlock({ insight, showInsight, howToRead, showHowToRead }) {
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

export const inputStyle = {
  width: '100%', background: '#1E293B', border: '1px solid #334155',
  borderRadius: 7, padding: '6px 10px', fontSize: 11, color: '#E2E8F0',
  fontFamily: FONT, outline: 'none', boxSizing: 'border-box',
}
