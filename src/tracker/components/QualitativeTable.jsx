import { STAKEHOLDER_COLORS } from '../utils/constants'

function statusDot(val) {
  if (!val || val === '') return { dot: '#CBD5E1', label: '\u2014', bg: 'transparent' }
  const s = String(val).trim().toUpperCase()
  // 달성 (green)
  if (s === 'PASS' || s === 'O' || s === 'Y' || s === 'YES' || s === '완료' || s === '달성') return { dot: '#15803D', label: '달성', bg: '#ECFDF5' }
  // 미달성 (red)
  if (s === 'NON-PASS' || s === 'NONPASS' || s === 'X' || s === 'N' || s === 'NO' || s === '미달성') return { dot: '#BE123C', label: '미달성', bg: '#FFF1F2' }
  // 추진 (orange)
  if (s === '진행중' || s === '진행' || s === 'WIP' || s === 'ING' || s === '추진') return { dot: '#D97706', label: '추진', bg: '#FFFBEB' }
  return { dot: '#94A3B8', label: val, bg: 'transparent' }
}

export default function QualitativeTable({ goals, results, selectedSH, month }) {
  // Use results (표5) as the primary data source
  const allSH = [...new Set(results.map(r => r.stakeholder))].filter(sh => {
    if (selectedSH !== '전체') return sh === selectedSH
    return true
  })

  return (
    <div style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: 12, overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
      <div style={{ padding: '16px 20px', borderBottom: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ width: 3, height: 16, borderRadius: 8, background: '#CF0652', flexShrink: 0 }} />
          <h3 style={{ fontSize: 20, fontWeight: 700, color: '#111827', margin: 0 }}>정성 과제 현황</h3>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 16, color: '#64748B' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><span style={{ width: 8, height: 8, borderRadius: '50%', background: '#15803D', display: 'inline-block' }} /> 달성</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><span style={{ width: 8, height: 8, borderRadius: '50%', background: '#D97706', display: 'inline-block' }} /> 추진</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><span style={{ width: 8, height: 8, borderRadius: '50%', background: '#BE123C', display: 'inline-block' }} /> 미달성</span>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table style={{ width: '100%', fontSize: 16, borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#F8FAFC', borderBottom: '1px solid #E2E8F0' }}>
              <th style={{ padding: '10px 12px', textAlign: 'center', fontSize: 16, fontWeight: 600, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.05em', width: 100, minWidth: 100 }}>조직</th>
              <th style={{ padding: '10px 12px', textAlign: 'center', fontSize: 16, fontWeight: 600, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.05em', width: 130, minWidth: 130 }}>과제 구분</th>
              <th style={{ padding: '10px 12px', textAlign: 'left', fontSize: 16, fontWeight: 600, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.05em', width: 240, minWidth: 240 }}>과제</th>
              <th style={{ padding: '10px 12px', textAlign: 'left', fontSize: 16, fontWeight: 600, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.05em', width: 140, minWidth: 140 }}>Page Type</th>
              <th style={{ padding: '10px 12px', textAlign: 'left', fontSize: 16, fontWeight: 600, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.05em', minWidth: 160 }}>목표 상세</th>
              <th style={{ padding: '10px 12px', textAlign: 'center', fontSize: 16, fontWeight: 600, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.05em', minWidth: 90 }}>{month} 결과</th>
            </tr>
          </thead>
          <tbody>
            {allSH.map(sh => {
              const color = STAKEHOLDER_COLORS[sh] || '#94A3B8'
              const shResults = results.filter(r => r.stakeholder === sh)

              if (shResults.length === 0) return null

              return shResults.map((r, ri) => {
                const resultVal = r.monthly?.[month] ?? ''
                const st = statusDot(resultVal)
                const g = goals.find(g => g.stakeholder === sh && g.task === r.task)
                return (
                  <tr key={`${sh}-${ri}`} style={{ borderBottom: '1px solid #F1F5F9' }} className="hover:bg-[#F8FAFC] transition-colors">
                    <td style={{ padding: '9px 12px', textAlign: 'center' }}>
                      <span style={{ display: 'inline-block', padding: '2px 8px', borderRadius: 4, fontSize: 16, fontWeight: 700, background: color + '18', color: '#111827', border: `1px solid ${color}30` }}>{sh}</span>
                    </td>
                    <td style={{ padding: '9px 12px', textAlign: 'center', color: '#64748B' }}>{r.taskCategory || g?.taskCategory || ''}</td>
                    <td style={{ padding: '9px 12px', color: '#1E293B', fontWeight: 500 }}>{r.task}</td>
                    <td style={{ padding: '9px 12px', color: '#64748B' }}>{r.pageType || g?.pageType || ''}</td>
                    <td style={{ padding: '9px 12px', color: '#475569', maxWidth: 300 }}>
                      <span style={{ display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} title={r.detail || g?.detail || ''}>{r.detail || g?.detail || ''}</span>
                    </td>
                    <td style={{ padding: '9px 12px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                        <span style={{ width: 9, height: 9, borderRadius: '50%', background: st.dot, display: 'inline-block', boxShadow: st.dot !== '#CBD5E1' ? `0 0 6px ${st.dot}55` : 'none' }} />
                        <span style={{ color: st.dot === '#CBD5E1' ? '#94A3B8' : st.dot, fontWeight: 600 }}>
                          {st.label}
                        </span>
                      </div>
                    </td>
                  </tr>
                )
              })
            })}

            {allSH.length === 0 && (
              <tr>
                <td colSpan={6} style={{ padding: '32px 12px', textAlign: 'center', color: '#94A3B8', fontSize: 16 }}>
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
