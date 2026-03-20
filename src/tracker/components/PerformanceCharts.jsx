import {
  ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts'

const FONT = "'LG Smart','Arial Narrow',Arial,sans-serif"
const RED = '#CF0652'
const BLUE = '#3B82F6'

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null
  return (
    <div className="bg-white border border-gray-200 rounded-lg px-3 py-2 shadow-lg text-sm">
      <p className="font-bold text-black mb-1">{label}</p>
      {payload.map((p, i) => (
        p.value != null && (
          <p key={i} style={{ color: p.color }} className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full" style={{ background: p.color }} />
            {p.name}: <span className="font-bold">{Number(p.value).toLocaleString()}</span>
          </p>
        )
      ))}
    </div>
  )
}

export default function PerformanceCharts({ monthlyTotals, cumulative, annualTarget, selectedMonth }) {
  const comboData = monthlyTotals.map(d => ({
    ...d,
    isSelected: d.month === selectedMonth,
  }))

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {/* 월별 목표 대비 실적 */}
      <div className="bg-white rounded-xl border border-[#E8EDF2] p-5 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-bold text-black">월별 목표 대비 실적</h3>
            <p className="text-sm text-[#64748B] mt-0.5">Goal (Line) · Actual (Bar)</p>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <ComposedChart data={comboData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E8EDF2" vertical={false} />
            <XAxis
              dataKey="month"
              tick={{ fill: '#475569', fontSize: 13, fontFamily: FONT }}
              tickLine={false}
              axisLine={{ stroke: '#CBD5E1' }}
            />
            <YAxis
              tick={{ fill: '#64748B', fontSize: 12, fontFamily: FONT }}
              tickLine={false}
              axisLine={false}
              tickFormatter={v => v >= 1000 ? `${(v / 1000).toFixed(0)}k` : v}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend
              wrapperStyle={{ fontSize: 13, fontFamily: FONT }}
              iconType="circle"
              iconSize={8}
            />
            <Bar
              dataKey="actual"
              name="실적"
              fill={RED}
              radius={[4, 4, 0, 0]}
              maxBarSize={36}
            />
            <Line
              dataKey="goal"
              name="목표"
              type="monotone"
              stroke={BLUE}
              strokeWidth={2.5}
              dot={{ r: 4, fill: BLUE, stroke: '#fff', strokeWidth: 2 }}
              activeDot={{ r: 6 }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      {/* 연간 누적 목표대비 실적 — 목표는 12월까지, 실적은 해당월까지 */}
      <div className="bg-white rounded-xl border border-[#E8EDF2] p-5 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-bold text-black">연간 누적 목표대비 실적</h3>
            <p className="text-sm text-[#64748B] mt-0.5">~{selectedMonth} 실적 · 12월까지 목표</p>
          </div>
          <span className="text-sm text-[#475569] bg-[#F8FAFC] border border-[#E8EDF2] px-2 py-1 rounded">
            연간 {annualTarget >= 1000 ? `${(annualTarget / 1000).toFixed(1)}k` : annualTarget}
          </span>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <ComposedChart data={cumulative} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E8EDF2" vertical={false} />
            <XAxis
              dataKey="month"
              tick={{ fill: '#475569', fontSize: 13, fontFamily: FONT }}
              tickLine={false}
              axisLine={{ stroke: '#CBD5E1' }}
            />
            <YAxis
              tick={{ fill: '#64748B', fontSize: 12, fontFamily: FONT }}
              tickLine={false}
              axisLine={false}
              tickFormatter={v => v >= 1000 ? `${(v / 1000).toFixed(0)}k` : v}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend
              wrapperStyle={{ fontSize: 13, fontFamily: FONT }}
              iconType="circle"
              iconSize={8}
            />
            <Line
              dataKey="cumGoal"
              name="누적 목표"
              type="monotone"
              stroke={BLUE}
              strokeWidth={2.5}
              dot={{ r: 4, fill: BLUE, stroke: '#fff', strokeWidth: 2 }}
              activeDot={{ r: 6 }}
              connectNulls
            />
            <Bar
              dataKey="cumActual"
              name="누적 실적"
              fill={RED}
              radius={[4, 4, 0, 0]}
              maxBarSize={40}
              fillOpacity={0.85}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
