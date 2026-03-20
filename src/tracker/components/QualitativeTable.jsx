import { MONTHS, STAKEHOLDER_COLORS } from '../utils/constants'

function statusDot(val) {
  if (!val || val === '') return { dot: '#CBD5E1', label: '\u2014' }
  const s = String(val).trim().toUpperCase()
  if (s === 'O' || s === 'Y' || s === 'YES' || s === '완료' || s === '달성') return { dot: '#15803D', label: val }
  if (s === 'X' || s === 'N' || s === 'NO' || s === '미달성') return { dot: '#BE123C', label: val }
  if (s === '진행중' || s === '진행' || s === 'WIP') return { dot: '#D97706', label: val }
  return { dot: '#94A3B8', label: val }
}

export default function QualitativeTable({ goals, results, selectedSH, month }) {
  // 스테이크홀더별로 그룹핑
  const allSH = [...new Set(goals.map(g => g.stakeholder))]
  const shList = selectedSH === '전체' ? allSH : allSH.filter(s => s === selectedSH)

  return (
    <div style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: 12, overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
      <div style={{ padding: '16px 20px', borderBottom: '1px solid #E2E8F0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 2 }}><span style={{ width: 3, height: 16, borderRadius: 8, background: '#CF0652', flexShrink: 0 }} /><h3 style={{ fontSize: 15, fontWeight: 700, color: '#111827', margin: 0 }}>정성 과제 현황</h3></div>
        <p style={{ fontSize: 12, color: '#64748B', margin: 0 }}>{month} 기준</p>
      </div>

      <div className="overflow-x-auto">
        <table style={{ width: '100%', fontSize: 13, borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#F8FAFC', borderBottom: '1px solid #E2E8F0' }}>
              <th style={{ padding: '10px 12px', textAlign: 'left', fontSize: 11, fontWeight: 600, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.05em', minWidth: 80 }}>Stakeholder</th>
              <th style={{ padding: '10px 12px', textAlign: 'left', fontSize: 11, fontWeight: 600, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.05em', minWidth: 150 }}>과제</th>
              <th style={{ padding: '10px 12px', textAlign: 'left', fontSize: 11, fontWeight: 600, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.05em', minWidth: 80 }}>Page Type</th>
              <th style={{ padding: '10px 12px', textAlign: 'left', fontSize: 11, fontWeight: 600, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.05em', minWidth: 200 }}>목표 상세</th>
              <th style={{ padding: '10px 12px', textAlign: 'center', fontSize: 11, fontWeight: 600, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.05em', minWidth: 90 }}>{month} 달성</th>
            </tr>
          </thead>
          <tbody>
            {shList.map(sh => {
              const color = STAKEHOLDER_COLORS[sh] || '#94A3B8'
              const shGoals = goals.filter(g => g.stakeholder === sh)
              const shResults = results.filter(r => r.stakeholder === sh)

              if (shGoals.length === 0) {
                return (
                  <tr key={sh} style={{ borderBottom: '1px solid #F1F5F9' }}>
                    <td style={{ padding: '9px 12px' }}>
                      <span style={{ display: 'inline-block', padding: '2px 8px', borderRadius: 4, fontSize: 11, fontWeight: 700, background: color + '18', color, border: `1px solid ${color}30` }}>{sh}</span>
                    </td>
                    <td colSpan={4} style={{ padding: '9px 12px', color: '#94A3B8', fontStyle: 'italic' }}>없음</td>
                  </tr>
                )
              }

              return shGoals.map((g, gi) => {
                const r = shResults[gi]
                const resultVal = r?.monthly?.[month] ?? ''
                const st = statusDot(resultVal)
                return (
                  <tr key={`${sh}-${gi}`} style={{ borderBottom: '1px solid #F1F5F9' }} className="hover:bg-[#F8FAFC] transition-colors">
                    <td style={{ padding: '9px 12px' }}>
                      {gi === 0 && (
                        <span style={{ display: 'inline-block', padding: '2px 8px', borderRadius: 4, fontSize: 11, fontWeight: 700, background: color + '18', color, border: `1px solid ${color}30` }}>{sh}</span>
                      )}
                    </td>
                    <td style={{ padding: '9px 12px', color: '#1E293B', fontWeight: 500 }}>{g.task}</td>
                    <td style={{ padding: '9px 12px', color: '#64748B' }}>{g.pageType}</td>
                    <td style={{ padding: '9px 12px', color: '#475569', maxWidth: 300 }}>
                      <span style={{ display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} title={g.detail}>{g.detail}</span>
                    </td>
                    <td style={{ padding: '9px 12px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                        <span style={{ width: 9, height: 9, borderRadius: '50%', background: st.dot, display: 'inline-block' }} />
                        <span style={{ color: st.dot === '#CBD5E1' ? '#94A3B8' : st.dot, fontWeight: 600 }}>
                          {st.label}
                        </span>
                      </div>
                    </td>
                  </tr>
                )
              })
            })}

            {shList.length === 0 && (
              <tr>
                <td colSpan={5} style={{ padding: '32px 12px', textAlign: 'center', color: '#94A3B8', fontSize: 13 }}>
                  해당 스테이크홀더의 정성 과제가 없습니다.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
