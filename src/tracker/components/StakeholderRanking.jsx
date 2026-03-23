import { STAKEHOLDER_COLORS } from '../utils/constants'

function statusOf(rate) {
  if (rate >= 100) return { color: '#15803D', dot: '#15803D', bg: '#ECFDF5' }
  if (rate >= 80)  return { color: '#D97706', dot: '#D97706', bg: '#FFFBEB' }
  return { color: '#BE123C', dot: '#BE123C', bg: '#FFF1F2' }
}

function fmt(n) { return Number(n).toLocaleString('en-US') }

export default function StakeholderRanking({ stakeholders, month, selectedSH }) {
  const filtered = selectedSH === '전체' ? stakeholders : stakeholders.filter(s => s.name === selectedSH)
  const totalWarnings = filtered.reduce((s, sh) => s + sh.warnings, 0)

  return (
    <div style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: 12, overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
      {/* Header */}
      <div style={{ padding: '16px 20px', borderBottom: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ width: 3, height: 16, borderRadius: 8, background: '#CF0652', flexShrink: 0 }} />
          <h3 style={{ fontSize: 20, fontWeight: 700, color: '#111827', margin: 0 }}>Stakeholders별 달성률</h3>
          {totalWarnings > 0 && (
            <span style={{ fontSize: 16, fontWeight: 700, color: '#BE123C', background: '#FFF1F2', border: '1px solid #FECDD3', padding: '2px 8px', borderRadius: 4 }}>
              미달성 과제 {totalWarnings}건
            </span>
          )}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 16, color: '#64748B' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><span style={{ width: 8, height: 8, borderRadius: '50%', background: '#15803D', display: 'inline-block' }} /> ≥100%</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><span style={{ width: 8, height: 8, borderRadius: '50%', background: '#D97706', display: 'inline-block' }} /> ≥80%</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><span style={{ width: 8, height: 8, borderRadius: '50%', background: '#BE123C', display: 'inline-block' }} /> {'<80%'}</span>
        </div>
      </div>

      {/* Column headers */}
      <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr 200px 200px', gap: 12, padding: '10px 20px', borderBottom: '1px solid #E2E8F0', background: '#F8FAFC' }}>
        <span style={{ fontSize: 16, fontWeight: 600, color: '#475569', textAlign: 'center', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Stakeholder</span>
        <span style={{ fontSize: 16, fontWeight: 600, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.05em' }}>과제 현황</span>
        <span style={{ fontSize: 16, fontWeight: 600, color: '#475569', textAlign: 'center', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{month} 달성률</span>
        <span style={{ fontSize: 16, fontWeight: 600, color: '#475569', textAlign: 'center', textTransform: 'uppercase', letterSpacing: '0.05em' }}>누적 달성률</span>
      </div>

      {/* Stakeholder rows */}
      <div style={{ padding: '0 20px 12px' }}>
        {filtered.map(sh => {
          const color = STAKEHOLDER_COLORS[sh.name] || '#94A3B8'
          const mSt = statusOf(sh.monthRate)
          const cSt = statusOf(sh.cumRate)
          const maxVal = Math.max(sh.monthRate, sh.cumRate, 100)
          const monthBarW = Math.min((sh.monthRate / maxVal) * 100, 100)
          const cumBarW = Math.min((sh.cumRate / maxVal) * 100, 100)

          return (
            <div key={sh.name} style={{ borderBottom: '1px solid #F1F5F9', padding: '14px 0' }}>
              {/* Single row: Badge | Tasks | Month Rate | Cum Rate */}
              <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr 200px 200px', gap: 12, alignItems: 'center' }}>
                {/* Stakeholder badge */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ display: 'inline-block', padding: '4px 10px', borderRadius: 5, fontSize: 16, fontWeight: 700, background: color + '18', color: '#111827', border: `1px solid ${color}30`, textAlign: 'center' }}>
                    {sh.name}
                  </span>
                </div>

                {/* Task details — individual tasks inline */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px 16px', fontSize: 16, color: '#475569' }}>
                  {(sh.taskDetails || []).map((td, i) => {
                    const tdSt = td.rate !== null ? statusOf(td.rate) : { color: '#94A3B8', dot: '#CBD5E1' }
                    return (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '2px 8px', background: '#F8FAFC', borderRadius: 4, border: '1px solid #F1F5F9' }}>
                        <span style={{ width: 14, height: 14, borderRadius: '50%', background: tdSt.dot, display: 'inline-block', flexShrink: 0 }} />
                        <span style={{ color: '#111827', fontWeight: 500, maxWidth: 180, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} title={td.task}>{td.task}</span>
                        <span style={{ color: '#64748B' }}>{fmt(td.monthActual)}/{fmt(td.monthGoal)}</span>
                        {td.rate !== null && (
                          <span style={{ fontWeight: 700, color: tdSt.color }}>{td.rate.toFixed(0)}%</span>
                        )}
                      </div>
                    )
                  })}
                </div>

                {/* Month rate column */}
                <div>
                  <div style={{ fontSize: 16, color: '#64748B', marginBottom: 3, textAlign: 'center' }}>
                    {month} <strong style={{ color: '#111827' }}>{fmt(sh.monthActual)}</strong>/<strong style={{ color: '#111827' }}>{fmt(sh.monthGoal)}</strong>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <div style={{ flex: 1, height: 20, background: '#F1F5F9', borderRadius: 5, overflow: 'hidden', position: 'relative' }}>
                      <div style={{ height: '100%', borderRadius: 5, width: `${monthBarW}%`, background: mSt.dot, transition: 'width 0.7s ease-out' }} />
                      <div style={{ position: 'absolute', top: 0, height: '100%', width: 1, background: '#CBD5E1', left: `${Math.min(100 / maxVal * 100, 100)}%` }} />
                    </div>
                    <span style={{ fontSize: 16, fontWeight: 900, color: mSt.color, minWidth: 60, textAlign: 'right', fontVariantNumeric: 'tabular-nums' }}>
                      {sh.monthRate.toFixed(1)}%
                    </span>
                  </div>
                </div>

                {/* Cumulative rate column */}
                <div>
                  <div style={{ fontSize: 16, color: '#64748B', marginBottom: 3, textAlign: 'center' }}>
                    누적 <strong style={{ color: '#111827' }}>{fmt(sh.cumActual)}</strong>/<strong style={{ color: '#111827' }}>{fmt(sh.cumGoal)}</strong>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <div style={{ flex: 1, height: 20, background: '#F1F5F9', borderRadius: 5, overflow: 'hidden', position: 'relative' }}>
                      <div style={{ height: '100%', borderRadius: 5, width: `${cumBarW}%`, background: cSt.dot, transition: 'width 0.7s ease-out' }} />
                      <div style={{ position: 'absolute', top: 0, height: '100%', width: 1, background: '#CBD5E1', left: `${Math.min(100 / maxVal * 100, 100)}%` }} />
                    </div>
                    <span style={{ fontSize: 16, fontWeight: 900, color: cSt.color, minWidth: 60, textAlign: 'right', fontVariantNumeric: 'tabular-nums' }}>
                      {sh.cumRate.toFixed(1)}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )
        })}

        {filtered.length === 0 && (
          <p style={{ textAlign: 'center', color: '#94A3B8', padding: '16px 0', fontSize: 16 }}>해당 스테이크홀더가 없습니다.</p>
        )}
      </div>
    </div>
  )
}
