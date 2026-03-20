import {
  ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts'

const FONT = "'LG Smart','Arial Narrow',Arial,sans-serif"

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null
  return (
    <div className="bg-white border border-gray-200 rounded-lg px-3 py-2 shadow-lg text-sm">
      <p className="font-bold text-gray-900 mb-1">{label}</p>
      {payload.map((p, i) => (
        <p key={i} style={{ color: p.color }} className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full" style={{ background: p.color }} />
          {p.name}: <span className="font-bold">{Number(p.value).toLocaleString()}</span>
        </p>
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
      {/* 월별 목표 vs 실적 (Combo Chart) */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-bold text-gray-900">월별 목표 vs 실적</h3>
            <p className="text-sm text-gray-400 mt-0.5">Goal (Line) · Actual (Bar)</p>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <ComposedChart data={comboData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" vertical={false} />
            <XAxis
              dataKey="month"
              tick={{ fill: '#6B7280', fontSize: 13, fontFamily: FONT }}
              tickLine={false}
              axisLine={{ stroke: '#D1D5DB' }}
            />
            <YAxis
              tick={{ fill: '#9CA3AF', fontSize: 12, fontFamily: FONT }}
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
              fill="#CF0652"
              radius={[4, 4, 0, 0]}
              maxBarSize={36}
            />
            <Line
              dataKey="goal"
              name="목표"
              type="monotone"
              stroke="#3B82F6"
              strokeWidth={2.5}
              dot={{ r: 4, fill: '#3B82F6', stroke: '#fff', strokeWidth: 2 }}
              activeDot={{ r: 6 }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      {/* 연간 누적 개선 URL 진척도 — Bar(실적) + Line(목표) */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-bold text-gray-900">연간 누적 개선 URL 진척도</h3>
            <p className="text-sm text-gray-400 mt-0.5">~{selectedMonth} 누적 · 실적(Bar) vs 목표(Line)</p>
          </div>
          <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
            연간 {annualTarget >= 1000 ? `${(annualTarget / 1000).toFixed(1)}k` : annualTarget}
          </span>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <ComposedChart data={cumulative} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" vertical={false} />
            <XAxis
              dataKey="month"
              tick={{ fill: '#6B7280', fontSize: 13, fontFamily: FONT }}
              tickLine={false}
              axisLine={{ stroke: '#D1D5DB' }}
            />
            <YAxis
              tick={{ fill: '#9CA3AF', fontSize: 12, fontFamily: FONT }}
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
              dataKey="cumActual"
              name="누적 실적"
              fill="#CF0652"
              radius={[4, 4, 0, 0]}
              maxBarSize={40}
              fillOpacity={0.85}
            />
            <Line
              dataKey="cumGoal"
              name="누적 목표"
              type="monotone"
              stroke="#3B82F6"
              strokeWidth={2.5}
              dot={{ r: 4, fill: '#3B82F6', stroke: '#fff', strokeWidth: 2 }}
              activeDot={{ r: 6 }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
