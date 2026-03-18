import React from 'react'
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts'

export default function ProgressRing({ value, label, color = '#CF0652', size = 140 }) {
  const pct = Math.min(Math.max(value || 0, 0), 100)
  const data = [
    { name: 'bg', value: 100, fill: '#1E293B' },
    { name: 'progress', value: pct, fill: color },
  ]

  return (
    <div className="flex flex-col items-center gap-1">
      <div style={{ width: size, height: size }} className="relative">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            cx="50%" cy="50%"
            innerRadius="70%" outerRadius="100%"
            startAngle={90} endAngle={-270}
            data={data}
            barSize={10}
          >
            <RadialBar
              dataKey="value"
              cornerRadius={5}
              background={false}
            />
          </RadialBarChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-slate-50">{pct}%</span>
        </div>
      </div>
      {label && (
        <span className="text-xs font-semibold text-slate-400">{label}</span>
      )}
    </div>
  )
}
