import {
  ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts'

const FONT = "'LG Smart','Arial Narrow',Arial,sans-serif"
const RED = '#CF0652'
const BLUE = '#3B82F6'

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null
  return (
    <div style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: 8, padding: '8px 12px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', fontSize: 18, fontFamily: FONT }}>
      <p style={{ fontWeight: 700, color: '#111827', marginBottom: 4 }}>{label}</p>
      {payload.map((p, i) => (
        p.value != null && (
          <p key={i} style={{ color: p.color, margin: '2px 0', display: 'flex', alignItems: 'center', gap: 6 }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: p.color, display: 'inline-block' }} />
            {p.name}: <strong>{Number(p.value).toLocaleString()}</strong>
          </p>
        )
      ))}
    </div>
  )
}

export default function PerformanceCharts({ monthlyTotals, cumulative, annualTarget, selectedMonth }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {/* 월별 목표 대비 실적 */}
      <div style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: 12, padding: 20, boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 2 }}><span style={{ width: 3, height: 16, borderRadius: 8, background: '#CF0652', flexShrink: 0 }} /><h3 style={{ fontSize: 20, fontWeight: 700, color: '#111827', margin: 0 }}>월별 목표 대비 실적</h3></div>
        <p style={{ fontSize: 17, color: '#64748B', marginBottom: 16 }}>실적 (Bar) · 목표 (Line)</p>
        <ResponsiveContainer width="100%" height={280}>
          <ComposedChart data={monthlyTotals} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" vertical={false} />
            <XAxis dataKey="month" tick={{ fill: '#475569', fontSize: 17, fontFamily: FONT }} tickLine={false} axisLine={{ stroke: '#E2E8F0' }} />
            <YAxis tick={{ fill: '#94A3B8', fontSize: 16, fontFamily: FONT }} tickLine={false} axisLine={false} tickFormatter={v => v >= 1000 ? `${(v / 1000).toFixed(0)}k` : v} />
            <Tooltip content={<CustomTooltip />} />
            <Legend wrapperStyle={{ fontSize: 17, fontFamily: FONT }} iconType="circle" iconSize={7} />
            <Bar dataKey="actual" name="실적" fill={RED} radius={[4, 4, 0, 0]} maxBarSize={32} />
            <Line dataKey="goal" name="목표" type="monotone" stroke="#111827" strokeWidth={2} dot={{ r: 3.5, fill: '#111827', stroke: '#fff', strokeWidth: 2 }} activeDot={{ r: 5 }} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      {/* 연간 누적 목표대비 실적 */}
      <div style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: 12, padding: 20, boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 2 }}><span style={{ width: 3, height: 16, borderRadius: 8, background: '#CF0652', flexShrink: 0 }} /><h3 style={{ fontSize: 20, fontWeight: 700, color: '#111827', margin: 0 }}>연간 누적 목표대비 실적</h3></div>
            <p style={{ fontSize: 17, color: '#64748B' }}>Goal (Line) · Actual (Bar)</p>
          </div>
          <span style={{ fontSize: 17, color: '#475569', background: '#F8FAFC', border: '1px solid #E2E8F0', padding: '3px 8px', borderRadius: 4 }}>
            연간 {annualTarget >= 1000 ? `${(annualTarget / 1000).toFixed(1)}k` : annualTarget}
          </span>
        </div>
        <ResponsiveContainer width="100%" height={280}>
          <ComposedChart data={cumulative} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" vertical={false} />
            <XAxis dataKey="month" tick={{ fill: '#475569', fontSize: 17, fontFamily: FONT }} tickLine={false} axisLine={{ stroke: '#E2E8F0' }} />
            <YAxis tick={{ fill: '#94A3B8', fontSize: 16, fontFamily: FONT }} tickLine={false} axisLine={false} tickFormatter={v => v >= 1000 ? `${(v / 1000).toFixed(0)}k` : v} />
            <Tooltip content={<CustomTooltip />} />
            <Legend wrapperStyle={{ fontSize: 17, fontFamily: FONT }} iconType="circle" iconSize={7} />
            <Line dataKey="cumGoal" name="누적 목표" type="monotone" stroke="#111827" strokeWidth={2} dot={{ r: 3.5, fill: '#111827', stroke: '#fff', strokeWidth: 2 }} activeDot={{ r: 5 }} connectNulls />
            <Bar dataKey="cumActual" name="누적 실적" fill={RED} radius={[4, 4, 0, 0]} maxBarSize={36} fillOpacity={0.85} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
