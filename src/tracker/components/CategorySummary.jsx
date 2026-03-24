import { STAKEHOLDER_COLORS } from '../utils/constants'

function statusOf(rate) {
  if (rate >= 100) return { text: '#15803D', bg: '#ECFDF5', border: '#A7F3D0', bar: '#15803D', dot: '#15803D', label: '달성' }
  if (rate >= 80)  return { text: '#D97706', bg: '#FFFBEB', border: '#FDE68A', bar: '#D97706', dot: '#D97706', label: '추진' }
  return { text: '#BE123C', bg: '#FFF1F2', border: '#FECDD3', bar: '#BE123C', dot: '#BE123C', label: '미달성' }
}

export default function CategorySummary({ categories, month }) {
  if (!categories || categories.length === 0) return null

  return (
    <div style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: 12, overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
      <div style={{ padding: '16px 20px', borderBottom: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ width: 3, height: 16, borderRadius: 8, background: '#CF0652', flexShrink: 0 }} />
        <h3 style={{ fontSize: 20, fontWeight: 700, color: '#111827', margin: 0 }}>과제 구분별 달성률</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4" style={{ padding: 16 }}>
        {categories.map(cat => {
          const ms = statusOf(cat.monthRate)
          const cs = statusOf(cat.cumRate)
          const shCount = cat.stakeholders ? cat.stakeholders.length : 0
          return (
            <div key={cat.category} className="rounded-xl" style={{ border: `1px solid ${ms.border}`, background: ms.bg, padding: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                <span style={{ fontSize: 17, fontWeight: 700, color: '#111827' }}>{cat.category}</span>
                <span style={{ fontSize: 13, color: '#94A3B8' }}>유관조직 {shCount}개</span>
              </div>

              {/* 월 달성률 */}
              <div style={{ marginBottom: 10 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
                  <span style={{ fontSize: 13, color: '#64748B', width: 82, flexShrink: 0 }}>{month} 달성률</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4, width: 70, flexShrink: 0, justifyContent: 'flex-end' }}>
                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: ms.dot, display: 'inline-block' }} />
                    <span style={{ fontSize: 15, fontWeight: 700, color: ms.text }}>{cat.monthRate}%</span>
                  </div>
                </div>
                <div style={{ height: 5, background: 'rgba(255,255,255,0.7)', borderRadius: 3, overflow: 'hidden' }}>
                  <div style={{ height: '100%', borderRadius: 3, background: ms.bar, width: `${Math.min(cat.monthRate, 100)}%`, transition: 'width 0.5s' }} />
                </div>
              </div>

              {/* 누적 달성률 */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
                  <span style={{ fontSize: 13, color: '#64748B', width: 82, flexShrink: 0 }}>누적 달성률</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4, width: 70, flexShrink: 0, justifyContent: 'flex-end' }}>
                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: cs.dot, display: 'inline-block' }} />
                    <span style={{ fontSize: 15, fontWeight: 700, color: cs.text }}>{cat.cumRate}%</span>
                  </div>
                </div>
                <div style={{ height: 5, background: 'rgba(255,255,255,0.7)', borderRadius: 3, overflow: 'hidden' }}>
                  <div style={{ height: '100%', borderRadius: 3, background: cs.bar, width: `${Math.min(cat.cumRate, 100)}%`, transition: 'width 0.5s' }} />
                </div>
              </div>

              {/* 조직 네임택 */}
              {cat.stakeholders && cat.stakeholders.length > 0 && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginTop: 3 }}>
                  {cat.stakeholders.map(sh => {
                    const st = statusOf(sh.rate)
                    const baseColor = STAKEHOLDER_COLORS[sh.name] || '#94A3B8'
                    return (
                      <span key={sh.name} style={{
                        display: 'inline-block',
                        padding: '2px 8px',
                        borderRadius: 4,
                        fontSize: 12,
                        fontWeight: 700,
                        background: st.bg,
                        color: st.text,
                        border: `1px solid ${st.border}`,
                      }}>
                        {sh.name}
                      </span>
                    )
                  })}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
