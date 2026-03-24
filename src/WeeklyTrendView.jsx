import { useState, useMemo } from 'react'
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'

const FONT = "'LG Smart','Arial Narrow',Arial,sans-serif"
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

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null
  return (
    <div style={{ background: '#1E293B', border: '1px solid #334155', borderRadius: 8,
      padding: '10px 14px', fontFamily: FONT, fontSize: 11 }}>
      <p style={{ margin: '0 0 6px', color: '#94A3B8', fontWeight: 700 }}>{label}</p>
      {payload.sort((a, b) => (b.value || 0) - (a.value || 0)).map(p => (
        <div key={p.dataKey} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '1px 0' }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: p.color, flexShrink: 0 }} />
          <span style={{ color: '#CBD5E1', minWidth: 70 }}>{p.dataKey}</span>
          <span style={{ color: '#FFFFFF', fontWeight: 700 }}>{p.value?.toFixed(1)}%</span>
        </div>
      ))}
    </div>
  )
}

function ProductTrend({ product, brandData, labels, allBrands }) {
  const st = STATUS[product.status] || STATUS.behind

  const chartData = useMemo(() => {
    if (!labels?.length) return []
    return labels.map((week, i) => {
      const point = { week }
      allBrands.forEach(b => { point[b] = brandData[b]?.[i] ?? null })
      return point
    })
  }, [brandData, labels, allBrands])

  const lgLatest = brandData.LG?.[brandData.LG.length - 1]

  return (
    <div style={{ marginBottom: 28 }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
        <div style={{ width: 3, height: 16, borderRadius: 2, background: LG_RED, flexShrink: 0 }} />
        <span style={{ fontSize: 15, fontWeight: 700, color: '#F1F5F9', fontFamily: FONT }}>
          {product.kr}
        </span>
        <span style={{ fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 10,
          background: st.bg, color: st.color, border: `1px solid ${st.border}` }}>
          {st.label}
        </span>
        {lgLatest != null && (
          <span style={{ fontSize: 13, fontWeight: 700, color: '#E2E8F0', fontFamily: FONT }}>
            LG {lgLatest.toFixed(1)}%
          </span>
        )}
        {product.compName && (
          <span style={{ fontSize: 11, color: '#64748B', fontFamily: FONT }}>
            vs {product.compName} {product.compRatio}%
          </span>
        )}
      </div>

      {/* Chart — marginLeft로 테이블 Brand 컬럼과 X축 정렬 */}
      <div style={{ marginLeft: BRAND_COL, background: '#0F172A', borderRadius: 10,
        border: '1px solid #1E293B', padding: '16px 0 4px 0' }}>
        <ResponsiveContainer width="100%" height={220}>
          <LineChart data={chartData} margin={{ top: 8, right: 0, left: 0, bottom: 4 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" />
            <XAxis dataKey="week" tick={{ fill: '#64748B', fontSize: 11, fontFamily: FONT }}
              axisLine={{ stroke: '#1E293B' }} tickLine={false} />
            <Tooltip content={<CustomTooltip />} />
            {allBrands.map((brand, i) => (
              <Line key={brand} type="monotone" dataKey={brand}
                stroke={brandColor(brand, i)}
                strokeWidth={brand === 'LG' ? 3 : 1.5}
                dot={{ r: brand === 'LG' ? 4 : 2.5, fill: brandColor(brand, i), strokeWidth: 0 }}
                activeDot={{ r: 5, strokeWidth: 2, stroke: '#0F172A' }}
                opacity={brand === 'LG' ? 1 : 0.7}
                connectNulls />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 14px', padding: '8px 4px 0' }}>
        {allBrands.map((brand, i) => (
          <div key={brand} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <span style={{ width: 10, height: 3, borderRadius: 1, background: brandColor(brand, i),
              opacity: brand === 'LG' ? 1 : 0.7 }} />
            <span style={{ fontSize: 10, color: brand === 'LG' ? '#E2E8F0' : '#64748B',
              fontWeight: brand === 'LG' ? 700 : 400, fontFamily: FONT }}>{brand}</span>
          </div>
        ))}
      </div>

      {/* Data Table — table-layout:fixed + colgroup으로 차트와 동일 X축 정렬 */}
      <div style={{ marginTop: 8, borderRadius: 8, overflow: 'hidden', border: '1px solid #1E293B' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', tableLayout: 'fixed',
          fontFamily: FONT, fontSize: 11 }}>
          <colgroup>
            <col style={{ width: BRAND_COL }} />
            {labels.map(w => <col key={w} />)}
          </colgroup>
          <thead>
            <tr style={{ background: '#0F172A' }}>
              <th style={{ padding: '6px 6px', textAlign: 'left', color: '#64748B', fontWeight: 600,
                borderBottom: '1px solid #1E293B' }}>Brand</th>
              {labels.map(w => (
                <th key={w} style={{ padding: '6px 2px', textAlign: 'center', color: '#64748B',
                  fontWeight: 600, borderBottom: '1px solid #1E293B' }}>{w}</th>
              ))}
            </tr>
          </thead>
          <tbody>
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
  padding: '6px 10px', fontSize: 12, color: '#E2E8F0', fontFamily: FONT,
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
          <div style={{ width: 3, height: 16, borderRadius: 2, background: LG_RED }} />
          <span style={{ fontSize: 13, fontWeight: 700, color: '#F1F5F9', fontFamily: FONT,
            marginRight: 8 }}>Weekly Trend</span>

          <label style={{ fontSize: 10, color: '#64748B', fontFamily: FONT }}>본부</label>
          <select value={selectedDiv} onChange={e => { setSelectedDiv(e.target.value); setSelectedCountry('Total') }}
            style={selectStyle}>
            {['MS', 'HS', 'ES'].map(d => <option key={d} value={d}>{d}</option>)}
          </select>

          <label style={{ fontSize: 10, color: '#64748B', fontFamily: FONT }}>국가</label>
          <select value={country} onChange={e => setSelectedCountry(e.target.value)}
            style={selectStyle}>
            {countries.map(c => <option key={c} value={c}>{c === 'Total' ? '전체 (Total)' : c}</option>)}
          </select>

          <span style={{ flex: 1 }} />
          <span style={{ fontSize: 10, color: '#475569', fontFamily: FONT }}>
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
                <div style={{ width: 3, height: 16, borderRadius: 2, background: LG_RED }} />
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
