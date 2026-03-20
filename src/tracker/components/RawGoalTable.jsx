import { MONTHS, STAKEHOLDER_COLORS } from '../utils/constants'

export default function RawGoalTable({ rows, totals, selectedSH }) {
  const filtered = selectedSH === '전체' ? rows : rows.filter(r => r.stakeholder === selectedSH)

  return (
    <div className="bg-white rounded-xl border border-[#E8EDF2] overflow-hidden shadow-sm">
      <div className="px-5 py-4 border-b border-[#E8EDF2]">
        <h3 className="text-lg font-bold text-black">[참고] Stakeholders별 월간 목표 원본 데이터</h3>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 text-sm text-gray-500 uppercase tracking-wider">
              <th className="px-3 py-3 text-left sticky left-0 z-10 bg-gray-50 min-w-[80px]">Stakeholder</th>
              <th className="px-3 py-3 text-left min-w-[140px]">과제</th>
              <th className="px-3 py-3 text-left min-w-[80px]">Page Type</th>
              {MONTHS.map(m => (
                <th key={m} className="px-2 py-3 text-right min-w-[60px]">{m}</th>
              ))}
              <th className="px-3 py-3 text-right min-w-[70px] font-black">연간</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filtered.map((r, i) => {
              const color = STAKEHOLDER_COLORS[r.stakeholder] || '#94A3B8'
              return (
                <tr key={i} className="hover:bg-gray-50 transition-colors">
                  <td className="px-3 py-2.5 sticky left-0 z-10 bg-white">
                    <span
                      className="inline-block px-2 py-0.5 rounded text-xs font-bold whitespace-nowrap"
                      style={{ backgroundColor: color + '18', color, border: `1px solid ${color}30` }}
                    >
                      {r.stakeholder}
                    </span>
                  </td>
                  <td className="px-3 py-2.5 text-gray-900 font-medium">{r.task}</td>
                  <td className="px-3 py-2.5 text-gray-500">{r.pageType}</td>
                  {MONTHS.map(m => {
                    const v = r.monthly?.[m]
                    return (
                      <td key={m} className="px-2 py-2.5 text-right tabular-nums text-gray-700">
                        {typeof v === 'number' && v > 0 ? v.toLocaleString() : '\u2014'}
                      </td>
                    )
                  })}
                  <td className="px-3 py-2.5 text-right tabular-nums font-bold text-gray-900">
                    {typeof r.annual === 'number' && r.annual > 0 ? r.annual.toLocaleString() : '\u2014'}
                  </td>
                </tr>
              )
            })}

            {/* Totals row */}
            {totals && (
              <tr className="bg-gray-50 font-bold border-t-2 border-gray-300">
                <td className="px-3 py-2.5 sticky left-0 z-10 bg-gray-50 text-gray-900" colSpan={3}>
                  합계
                </td>
                {MONTHS.map(m => {
                  const v = totals.monthly?.[m]
                  return (
                    <td key={m} className="px-2 py-2.5 text-right tabular-nums text-gray-900">
                      {typeof v === 'number' && v > 0 ? v.toLocaleString() : '\u2014'}
                    </td>
                  )
                })}
                <td className="px-3 py-2.5 text-right tabular-nums text-gray-900">
                  {typeof totals.annual === 'number' && totals.annual > 0 ? totals.annual.toLocaleString() : '\u2014'}
                </td>
              </tr>
            )}

            {filtered.length === 0 && (
              <tr>
                <td colSpan={3 + MONTHS.length + 1} className="px-3 py-8 text-center text-gray-400 text-base">
                  해당 스테이크홀더의 데이터가 없습니다.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
