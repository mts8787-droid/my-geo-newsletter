import { MONTHS, STAKEHOLDER_COLORS } from '../utils/constants'

export default function RawGoalTable({ rows, selectedSH }) {
  const filtered = selectedSH === '전체' ? rows : rows.filter(r => r.stakeholder === selectedSH)

  // 필터된 행 기준으로 합계 계산
  const computedTotals = {
    monthly: Object.fromEntries(MONTHS.map(m => [
      m, filtered.reduce((s, r) => s + (typeof r.monthly?.[m] === 'number' ? r.monthly[m] : 0), 0)
    ])),
    annual: filtered.reduce((s, r) => s + (typeof r.annual === 'number' ? r.annual : 0), 0),
  }

  return (
    <div style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: 12, overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
      <div style={{ padding: '16px 20px', borderBottom: '1px solid #E2E8F0' }}>
        <span style={{ display: 'inline-block', width: 3, height: 16, borderRadius: 8, background: '#CF0652', marginRight: 8, verticalAlign: 'middle' }} /><h3 style={{ display: 'inline', fontSize: 15, fontWeight: 700, color: '#111827', margin: 0 }}>[참고] Stakeholders별 월간 목표 원본 데이터</h3>
      </div>

      <div className="overflow-x-auto">
        <table style={{ width: '100%', fontSize: 13, borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#F8FAFC', borderBottom: '1px solid #E2E8F0' }}>
              <th style={{ padding: '10px 12px', textAlign: 'left', fontSize: 11, fontWeight: 600, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.05em', position: 'sticky', left: 0, zIndex: 10, background: '#F8FAFC', minWidth: 80 }}>Stakeholder</th>
              <th style={{ padding: '10px 12px', textAlign: 'left', fontSize: 11, fontWeight: 600, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.05em', minWidth: 130 }}>과제</th>
              <th style={{ padding: '10px 12px', textAlign: 'left', fontSize: 11, fontWeight: 600, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.05em', minWidth: 70 }}>Page Type</th>
              {MONTHS.map(m => (
                <th key={m} style={{ padding: '10px 8px', textAlign: 'right', fontSize: 11, fontWeight: 600, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.05em', minWidth: 52 }}>{m}</th>
              ))}
              <th style={{ padding: '10px 12px', textAlign: 'right', fontSize: 11, fontWeight: 800, color: '#111827', textTransform: 'uppercase', letterSpacing: '0.05em', minWidth: 60 }}>연간</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((r, i) => {
              const color = STAKEHOLDER_COLORS[r.stakeholder] || '#94A3B8'
              return (
                <tr key={i} style={{ borderBottom: '1px solid #F1F5F9' }} className="hover:bg-[#F8FAFC] transition-colors">
                  <td style={{ padding: '9px 12px', position: 'sticky', left: 0, zIndex: 10, background: '#fff' }}>
                    <span style={{ display: 'inline-block', padding: '2px 8px', borderRadius: 4, fontSize: 11, fontWeight: 700, background: color + '18', color, border: `1px solid ${color}30` }}>
                      {r.stakeholder}
                    </span>
                  </td>
                  <td style={{ padding: '9px 12px', color: '#1E293B', fontWeight: 500 }}>{r.task}</td>
                  <td style={{ padding: '9px 12px', color: '#64748B' }}>{r.pageType}</td>
                  {MONTHS.map(m => {
                    const v = r.monthly?.[m]
                    return (
                      <td key={m} style={{ padding: '9px 8px', textAlign: 'right', fontVariantNumeric: 'tabular-nums', color: '#475569' }}>
                        {typeof v === 'number' && v > 0 ? v.toLocaleString() : '\u2014'}
                      </td>
                    )
                  })}
                  <td style={{ padding: '9px 12px', textAlign: 'right', fontVariantNumeric: 'tabular-nums', fontWeight: 700, color: '#111827' }}>
                    {typeof r.annual === 'number' && r.annual > 0 ? r.annual.toLocaleString() : '\u2014'}
                  </td>
                </tr>
              )
            })}

            {filtered.length > 0 && (
              <tr style={{ background: '#F8FAFC', borderTop: '2px solid #CBD5E1' }}>
                <td style={{ padding: '9px 12px', position: 'sticky', left: 0, zIndex: 10, background: '#F8FAFC', fontWeight: 700, color: '#111827' }} colSpan={3}>합계</td>
                {MONTHS.map(m => {
                  const v = computedTotals.monthly[m]
                  return (
                    <td key={m} style={{ padding: '9px 8px', textAlign: 'right', fontVariantNumeric: 'tabular-nums', fontWeight: 700, color: '#111827' }}>
                      {v > 0 ? v.toLocaleString() : '\u2014'}
                    </td>
                  )
                })}
                <td style={{ padding: '9px 12px', textAlign: 'right', fontVariantNumeric: 'tabular-nums', fontWeight: 700, color: '#111827' }}>
                  {computedTotals.annual > 0 ? computedTotals.annual.toLocaleString() : '\u2014'}
                </td>
              </tr>
            )}

            {filtered.length === 0 && (
              <tr>
                <td colSpan={3 + MONTHS.length + 1} style={{ padding: '32px 12px', textAlign: 'center', color: '#94A3B8', fontSize: 13 }}>
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
