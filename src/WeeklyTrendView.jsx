import { useState, useMemo, useRef, useEffect, useCallback } from 'react'

const FONT = "'LGEIText','LG Smart','Arial Narrow',Arial,sans-serif"
const LG_RED = '#CF0652'
const BRAND_COL = 90

const BRAND_COLORS = {
  LG: LG_RED, Samsung: '#3B82F6', Sony: '#7C3AED', Hisense: '#059669',
  TCL: '#D97706', Asus: '#0EA5E9', Dell: '#6366F1', MSI: '#EF4444',
  JBL: '#F97316', Bose: '#8B5CF6', Bosch: '#14B8A6', Whirlpool: '#06B6D4',
  Haier: '#22C55E', Miele: '#A855F7', Dyson: '#EC4899', Xiaomi: '#F59E0B',
  Shark: '#6B7280', Daikin: '#2563EB', Mitsubishi: '#DC2626', Media: '#10B981',
  Panasonic: '#0D9488', Blueair: '#0284C7', Philips: '#7C3AED',
}
const FALLBACK = ['#94A3B8','#64748B','#475569','#CBD5E1','#E2E8F0']

const STATUS = {
  lead:     { bg: '#022c22', border: '#15803D', color: '#4ADE80', label: '선도' },
  behind:   { bg: '#422006', border: '#D97706', color: '#FBBF24', label: '추격' },
  critical: { bg: '#4c0519', border: '#BE123C', color: '#FB7185', label: '취약' },
}

function brandColor(name, idx) {
  return BRAND_COLORS[name] || FALLBACK[idx % FALLBACK.length]
}

function AlignedChart({ brandData, labels, allBrands, height = 200 }) {
  const containerRef = useRef(null)
  const [w, setW] = useState(0)
  const [tooltip, setTooltip] = useState(null)

  const measure = useCallback(() => {
    if (containerRef.current) setW(containerRef.current.clientWidth)
  }, [])

  useEffect(() => {
    measure()
    const obs = new ResizeObserver(measure)
    if (containerRef.current) obs.observe(containerRef.current)
    return () => obs.disconnect()
  }, [measure])

  const N = labels.length
  const pt = 12, pb = 8, ch = height - pt - pb

  let mn = Infinity, mx = -Infinity
  allBrands.forEach(b => (brandData[b] || []).forEach(v => { if (v != null) { if (v < mn) mn = v; if (v > mx) mx = v } }))
  if (!isFinite(mn)) { mn = 0; mx = 100 }
  const pad = Math.max((mx - mn) * 0.15, 2)
  mn = Math.max(0, mn - pad); mx = Math.min(100, mx + pad)
  const rng = mx - mn || 1

  let gridLines = ''
  let brandPaths = ''
  if (w > 0) {
    for (let i = 0; i <= 4; i++) {
      const y = pt + (i / 4) * ch
      gridLines += `<line x1="0" y1="${y.toFixed(1)}" x2="${w}" y2="${y.toFixed(1)}" stroke="#1E293B" stroke-width="1"/>`
    }
    allBrands.forEach((b, bi) => {
      const vals = brandData[b] || []
      const color = brandColor(b, bi)
      const isLG = b === 'LG'
      const sw = isLG ? 3 : 1.5
      const opacity = isLG ? 1 : 0.7
      const pts = []
      vals.forEach((v, i) => {
        if (v == null || i >= N) return
        const x = ((i + 0.5) / N) * w
        const y = pt + (1 - (v - mn) / rng) * ch
        pts.push({ x, y, v, i })
      })
      if (pts.length < 2) return
      const d = pts.map((p, j) => `${j ? 'L' : 'M'}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ')
      brandPaths += `<path d="${d}" stroke="${color}" fill="none" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" opacity="${opacity}"/>`
      pts.forEach(p => {
        brandPaths += `<circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="${isLG ? 4 : 2.5}" fill="${color}" stroke="#0F172A" stroke-width="${isLG ? 2 : 1}" opacity="${opacity}"/>`
      })
    })
  }

  function handleMouseMove(e) {
    if (!w || !N) return
    const rect = containerRef.current.getBoundingClientRect()
    const mx = e.clientX - rect.left
    const col = Math.floor((mx / w) * N)
    if (col < 0 || col >= N) { setTooltip(null); return }
    const items = allBrands.map((b, i) => ({ brand: b, value: brandData[b]?.[col], color: brandColor(b, i) }))
      .filter(it => it.value != null).sort((a, b) => b.value - a.value)
    if (!items.length) { setTooltip(null); return }
    setTooltip({ x: e.clientX - rect.left, y: e.clientY - rect.top, label: labels[col], items })
  }

  return (
    <div ref={containerRef} style={{ position: 'relative', width: '100%', height, background: '#0F172A' }}
      onMouseMove={handleMouseMove} onMouseLeave={() => setTooltip(null)}>
      {w > 0 && (
        <svg width={w} height={height} style={{ display: 'block' }}
          dangerouslySetInnerHTML={{ __html: gridLines + brandPaths }} />
      )}
      {tooltip && (
        <div style={{ position: 'absolute', left: tooltip.x + 12, top: tooltip.y - 10,
          background: '#1E293B', border: '1px solid #334155', borderRadius: 8,
          padding: '10px 14px', fontFamily: FONT, fontSize: 14, zIndex: 10, pointerEvents: 'none',
          transform: tooltip.x > w * 0.7 ? 'translateX(-110%)' : 'none' }}>
          <p style={{ margin: '0 0 6px', color: '#94A3B8', fontWeight: 700 }}>{tooltip.label}</p>
          {tooltip.items.map(it => (
            <div key={it.brand} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '1px 0' }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: it.color, flexShrink: 0 }} />
              <span style={{ color: '#CBD5E1', minWidth: 70 }}>{it.brand}</span>
              <span style={{ color: '#FFFFFF', fontWeight: 700 }}>{it.value.toFixed(1)}%</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

function ProductTrend({ product, brandData, labels, allBrands }) {
  const st = STATUS[product.status] || STATUS.behind
  const lgLatest = brandData.LG?.[brandData.LG.length - 1]

  return (
    <div style={{ marginBottom: 28 }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
        <div style={{ width: 4, height: 22, borderRadius: 4, background: LG_RED, flexShrink: 0 }} />
        <span style={{ fontSize: 20, fontWeight: 700, color: '#F1F5F9', fontFamily: FONT }}>
          {product.kr}
        </span>
        <span style={{ fontSize: 14, fontWeight: 700, padding: '2px 8px', borderRadius: 10,
          background: st.bg, color: st.color, border: `1px solid ${st.border}` }}>
          {st.label}
        </span>
        {lgLatest != null && (
          <span style={{ fontSize: 16, fontWeight: 700, color: '#E2E8F0', fontFamily: FONT }}>
            LG {lgLatest.toFixed(1)}%
          </span>
        )}
        {product.compName && (
          <span style={{ fontSize: 14, color: '#64748B', fontFamily: FONT }}>
            vs {product.compName} {product.compRatio}%
          </span>
        )}
      </div>

      {/* 차트+표 통합: colgroup 공유로 X축 정렬 보장 */}
      <div style={{ borderRadius: 10, overflow: 'hidden', border: '1px solid #1E293B' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', tableLayout: 'fixed',
          fontFamily: FONT, fontSize: 14 }}>
          <colgroup>
            <col style={{ width: BRAND_COL }} />
            {labels.map(w => <col key={w} />)}
          </colgroup>
          <tbody>
            {/* Chart row */}
            <tr>
              <td style={{ padding: 0, border: 0 }} />
              <td colSpan={labels.length} style={{ padding: 0, border: 0 }}>
                <AlignedChart brandData={brandData} labels={labels} allBrands={allBrands} height={200} />
              </td>
            </tr>
            {/* Legend row */}
            <tr>
              <td style={{ padding: 0, border: 0 }} />
              <td colSpan={labels.length} style={{ padding: '4px 4px 6px', border: 0 }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 14px' }}>
                  {allBrands.map((brand, i) => (
                    <div key={brand} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <span style={{ width: 10, height: 3, borderRadius: 1, background: brandColor(brand, i),
                        opacity: brand === 'LG' ? 1 : 0.7 }} />
                      <span style={{ fontSize: 13, color: brand === 'LG' ? '#E2E8F0' : '#64748B',
                        fontWeight: brand === 'LG' ? 700 : 400, fontFamily: FONT }}>{brand}</span>
                    </div>
                  ))}
                </div>
              </td>
            </tr>
            {/* Header row */}
            <tr style={{ borderTop: '1px solid #1E293B' }}>
              <th style={{ padding: '6px 6px', textAlign: 'left', color: '#64748B', fontWeight: 600,
                borderBottom: '1px solid #1E293B' }}>Brand</th>
              {labels.map(w => (
                <th key={w} style={{ padding: '6px 2px', textAlign: 'center', color: '#64748B',
                  fontWeight: 600, borderBottom: '1px solid #1E293B' }}>{w}</th>
              ))}
            </tr>
            {/* Data rows */}
            {allBrands.map((brand, i) => (
              <tr key={brand} style={{
                background: brand === 'LG' ? '#1a0a1a' : i % 2 === 0 ? '#0F172A' : '#131C2E' }}>
                <td style={{ padding: '5px 6px', color: brandColor(brand, i),
                  fontWeight: brand === 'LG' ? 700 : 500, borderBottom: '1px solid #1E293B',
                  whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  <span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%',
                    background: brandColor(brand, i), marginRight: 4, verticalAlign: 'middle' }} />
                  {brand}
                </td>
                {labels.map((w, wi) => {
                  const val = brandData[brand]?.[wi]
                  return (
                    <td key={w} style={{ padding: '5px 2px', textAlign: 'center',
                      color: val != null ? (brand === 'LG' ? '#F1F5F9' : '#CBD5E1') : '#334155',
                      fontWeight: brand === 'LG' ? 700 : 400,
                      borderBottom: '1px solid #1E293B', fontVariantNumeric: 'tabular-nums' }}>
                      {val != null ? val.toFixed(1) : '-'}
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

const selectStyle = {
  background: '#1E293B', border: '1px solid #334155', borderRadius: 7,
  padding: '6px 10px', fontSize: 14, color: '#E2E8F0', fontFamily: FONT,
  outline: 'none', cursor: 'pointer', minWidth: 100,
}

export default function WeeklyTrendView({ weeklyAll, products, weeklyLabels }) {
  const [selectedDiv, setSelectedDiv] = useState('MS')
  const [selectedCountry, setSelectedCountry] = useState('Total')

  const divProducts = useMemo(() =>
    products.filter(p => p.bu === selectedDiv),
    [products, selectedDiv]
  )

  // 선택 가능한 국가 목록 (해당 division의 첫 product 기준)
  const countries = useMemo(() => {
    const first = divProducts[0]
    if (!first || !weeklyAll[first.id]) return ['Total']
    return Object.keys(weeklyAll[first.id]).sort((a, b) =>
      a === 'Total' ? -1 : b === 'Total' ? 1 : a.localeCompare(b)
    )
  }, [divProducts, weeklyAll])

  // country 변경 시 유효성 검사
  const country = countries.includes(selectedCountry) ? selectedCountry : 'Total'

  const labels = (weeklyLabels && weeklyLabels.length) ? weeklyLabels : Array.from({ length: 12 }, (_, i) => `W${i + 1}`)

  return (
    <div style={{ flex: 1, overflowY: 'auto', padding: '20px 28px',
      background: 'linear-gradient(180deg, #0A0F1C 0%, #0F172A 100%)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* Filter Bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20,
          padding: '12px 16px', background: '#0F172A', borderRadius: 10,
          border: '1px solid #1E293B' }}>
          <div style={{ width: 4, height: 22, borderRadius: 4, background: LG_RED }} />
          <span style={{ fontSize: 17, fontWeight: 700, color: '#F1F5F9', fontFamily: FONT,
            marginRight: 8 }}>Weekly Trend</span>

          <label style={{ fontSize: 14, color: '#64748B', fontFamily: FONT }}>본부</label>
          <select value={selectedDiv} onChange={e => { setSelectedDiv(e.target.value); setSelectedCountry('Total') }}
            style={selectStyle}>
            {['MS', 'HS', 'ES'].map(d => <option key={d} value={d}>{d}</option>)}
          </select>

          <label style={{ fontSize: 14, color: '#64748B', fontFamily: FONT }}>국가</label>
          <select value={country} onChange={e => setSelectedCountry(e.target.value)}
            style={selectStyle}>
            {countries.map(c => <option key={c} value={c}>{c === 'Total' ? '전체 (Total)' : c}</option>)}
          </select>

          <span style={{ flex: 1 }} />
          <span style={{ fontSize: 13, color: '#475569', fontFamily: FONT }}>
            {labels[0]}–{labels[labels.length - 1]} ({labels.length}주)
          </span>
        </div>

        {/* Product Rows */}
        {divProducts.length === 0 ? (
          <div style={{ textAlign: 'center', padding: 40, color: '#475569', fontFamily: FONT, fontSize: 13 }}>
            {selectedDiv} 본부에 해당하는 제품이 없습니다.
          </div>
        ) : divProducts.map(product => {
          const data = weeklyAll[product.id]?.[country] || {}
          const allBrands = Object.keys(data).sort((a, b) => {
            if (a === 'LG') return -1
            if (b === 'LG') return 1
            const lastA = data[a]?.[data[a].length - 1] || 0
            const lastB = data[b]?.[data[b].length - 1] || 0
            return lastB - lastA
          })
          if (!allBrands.length) return (
            <div key={product.id} style={{ marginBottom: 20, padding: 16, background: '#0F172A',
              borderRadius: 10, border: '1px solid #1E293B' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 4, height: 22, borderRadius: 4, background: LG_RED }} />
                <span style={{ fontSize: 15, fontWeight: 700, color: '#F1F5F9', fontFamily: FONT }}>
                  {product.kr}
                </span>
                <span style={{ fontSize: 11, color: '#475569' }}>— 데이터 없음</span>
              </div>
            </div>
          )
          return (
            <ProductTrend key={product.id} product={product} brandData={data}
              labels={labels} allBrands={allBrands} />
          )
        })}
      </div>
    </div>
  )
}
