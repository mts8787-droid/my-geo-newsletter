import {
  ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  AreaChart, Area, ReferenceLine,
} from 'recharts'
import { MONTHS } from '../utils/constants'

const FONT = "'LG Smart','Arial Narrow',Arial,sans-serif"

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 shadow-xl text-xs">
      <p className="font-bold text-white mb-1">{label}</p>
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
  // 선택된 월 강조를 위한 데이터 처리
  const comboData = monthlyTotals.map(d => ({
    ...d,
    isSelected: d.month === selectedMonth,
  }))

  // 누적 데이터에 연간 목표 라인 추가
  const cumulativeData = cumulative.map(d => ({
    ...d,
    annualTarget,
  }))

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {/* 월별 목표 vs 실적 (Combo Chart) */}
      <div className="bg-slate-900 rounded-xl border border-slate-800 p-5">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-sm font-bold text-white">월별 목표 vs 실적</h3>
            <p className="text-[11px] text-slate-500 mt-0.5">Goal (Line) · Actual (Bar)</p>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={280}>
          <ComposedChart data={comboData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" vertical={false} />
            <XAxis
              dataKey="month"
              tick={{ fill: '#94A3B8', fontSize: 11, fontFamily: FONT }}
              tickLine={false}
              axisLine={{ stroke: '#334155' }}
            />
            <YAxis
              tick={{ fill: '#64748B', fontSize: 10, fontFamily: FONT }}
              tickLine={false}
              axisLine={false}
              tickFormatter={v => v >= 1000 ? `${(v / 1000).toFixed(0)}k` : v}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend
              wrapperStyle={{ fontSize: 11, fontFamily: FONT }}
              iconType="circle"
              iconSize={8}
            />
            <Bar
              dataKey="actual"
              name="실적"
              fill="#CF0652"
              radius={[4, 4, 0, 0]}
              maxBarSize={32}
            />
            <Line
              dataKey="goal"
              name="목표"
              type="monotone"
              stroke="#60A5FA"
              strokeWidth={2.5}
              dot={{ r: 4, fill: '#60A5FA', stroke: '#0F172A', strokeWidth: 2 }}
              activeDot={{ r: 6 }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      {/* 연간 누적 진척도 (Area Chart) */}
      <div className="bg-slate-900 rounded-xl border border-slate-800 p-5">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-sm font-bold text-white">연간 누적 개선 URL 진척도</h3>
            <p className="text-[11px] text-slate-500 mt-0.5">Cumulative Actual vs Annual Target</p>
          </div>
          <span className="text-[11px] text-slate-500 bg-slate-800 px-2 py-1 rounded">
            목표 {annualTarget >= 1000 ? `${(annualTarget / 1000).toFixed(1)}k` : annualTarget}
          </span>
        </div>
        <ResponsiveContainer width="100%" height={280}>
          <AreaChart data={cumulativeData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
            <defs>
              <linearGradient id="cumGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#CF0652" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#CF0652" stopOpacity={0.02} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" vertical={false} />
            <XAxis
              dataKey="month"
              tick={{ fill: '#94A3B8', fontSize: 11, fontFamily: FONT }}
              tickLine={false}
              axisLine={{ stroke: '#334155' }}
            />
            <YAxis
              tick={{ fill: '#64748B', fontSize: 10, fontFamily: FONT }}
              tickLine={false}
              axisLine={false}
              tickFormatter={v => v >= 1000 ? `${(v / 1000).toFixed(0)}k` : v}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend
              wrapperStyle={{ fontSize: 11, fontFamily: FONT }}
              iconType="circle"
              iconSize={8}
            />
            <ReferenceLine
              y={annualTarget}
              stroke="#60A5FA"
              strokeDasharray="6 4"
              strokeWidth={1.5}
              label={{
                value: `연간 목표 ${annualTarget.toLocaleString()}`,
                position: 'right',
                fill: '#60A5FA',
                fontSize: 10,
                fontFamily: FONT,
              }}
            />
            <Area
              dataKey="cumulative"
              name="누적 실적"
              type="monotone"
              stroke="#CF0652"
              strokeWidth={2.5}
              fill="url(#cumGrad)"
              dot={{ r: 4, fill: '#CF0652', stroke: '#0F172A', strokeWidth: 2 }}
              activeDot={{ r: 6 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
