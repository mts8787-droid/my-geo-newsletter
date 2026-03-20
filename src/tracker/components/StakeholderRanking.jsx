import { STAKEHOLDER_COLORS } from '../utils/constants'

function statusOf(rate) {
  if (rate >= 100) return { color: '#15803D', dot: '#15803D' }
  if (rate >= 80)  return { color: '#D97706', dot: '#D97706' }
  return { color: '#BE123C', dot: '#BE123C' }
}

function fmt(n) { return Number(n).toLocaleString('en-US') }

export default function StakeholderRanking({ stakeholders, month, selectedSH }) {
  const filtered = selectedSH === '전체' ? stakeholders : stakeholders.filter(s => s.name === selectedSH)
  const totalWarnings = filtered.reduce((s, sh) => s + sh.warnings, 0)
  const maxRate = Math.max(...filtered.map(s => Math.max(s.monthRate, s.cumRate)), 100)

  return (
    <div style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: 12, overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
      {/* Header */}
      <div style={{ padding: '16px 20px', borderBottom: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ width: 3, height: 16, borderRadius: 8, background: '#CF0652', flexShrink: 0 }} /><h3 style={{ fontSize: 15, fontWeight: 700, color: '#111827', margin: 0 }}>Stakeholders별 달성률</h3></div>
          {totalWarnings > 0 && (
            <span style={{ fontSize: 12, fontWeight: 700, color: '#BE123C', background: '#FFF1F2', border: '1px solid #FECDD3', padding: '2px 8px', borderRadius: 4 }}>
              미달성 과제 {totalWarnings}건
            </span>
          )}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 11, color: '#64748B' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><span style={{ width: 8, height: 8, borderRadius: '50%', background: '#15803D', display: 'inline-block' }} /> ≥100%</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><span style={{ width: 8, height: 8, borderRadius: '50%', background: '#D97706', display: 'inline-block' }} /> ≥80%</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><span style={{ width: 8, height: 8, borderRadius: '50%', background: '#BE123C', display: 'inline-block' }} /> {'<80%'}</span>
        </div>
      </div>

      {/* Column labels */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, padding: '12px 20px 4px' }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: '#475569', textAlign: 'center' }}>{month} 달성률</div>
        <div style={{ fontSize: 12, fontWeight: 700, color: '#475569', textAlign: 'center' }}>누적 달성률</div>
      </div>

      {/* Rows */}
      <div style={{ padding: '0 20px 20px' }}>
        {filtered.map(sh => {
          const color = STAKEHOLDER_COLORS[sh.name] || '#94A3B8'
          const mSt = statusOf(sh.monthRate)
          const cSt = statusOf(sh.cumRate)
          const monthBarW = Math.min((sh.monthRate / maxRate) * 100, 100)
          const cumBarW = Math.min((sh.cumRate / maxRate) * 100, 100)

          return (
            <div key={sh.name} style={{ marginTop: 14 }}>
              {/* Name + traffic light */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                <span style={{ display: 'inline-block', padding: '2px 8px', borderRadius: 4, fontSize: 12, fontWeight: 700, background: color + '18', color, border: `1px solid ${color}30` }}>
                  {sh.name}
                </span>
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: mSt.dot, boxShadow: `0 0 5px ${mSt.dot}66`, display: 'inline-block' }} />
                <span style={{ fontSize: 11, color: '#64748B' }}>
                  {sh.taskCount}건{sh.warnings > 0 && <span style={{ color: '#BE123C', marginLeft: 4 }}>({sh.warnings} 주의)</span>}
                </span>
              </div>

              {/* Dual bars */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                {/* Month */}
                <div>
                  <div style={{ fontSize: 11, color: '#111827', marginBottom: 3 }}>
                    실적 <strong>{fmt(sh.monthActual)}</strong> / 목표 <strong>{fmt(sh.monthGoal)}</strong>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ flex: 1, height: 24, background: '#F1F5F9', borderRadius: 6, overflow: 'hidden', position: 'relative' }}>
                      <div style={{ height: '100%', borderRadius: 6, width: `${monthBarW}%`, background: mSt.dot, transition: 'width 0.7s ease-out' }} />
                      <div style={{ position: 'absolute', top: 0, height: '100%', width: 1, background: '#CBD5E1', left: `${Math.min(100 / maxRate * 100, 100)}%` }} />
                    </div>
                    <span style={{ fontSize: 13, fontWeight: 900, color: mSt.color, minWidth: 54, textAlign: 'right', fontVariantNumeric: 'tabular-nums' }}>
                      {sh.monthRate.toFixed(1)}%
                    </span>
                  </div>
                </div>

                {/* Cumulative */}
                <div>
                  <div style={{ fontSize: 11, color: '#111827', marginBottom: 3 }}>
                    실적 <strong>{fmt(sh.cumActual)}</strong> / 목표 <strong>{fmt(sh.cumGoal)}</strong>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ flex: 1, height: 24, background: '#F1F5F9', borderRadius: 6, overflow: 'hidden', position: 'relative' }}>
                      <div style={{ height: '100%', borderRadius: 6, width: `${cumBarW}%`, background: cSt.dot, transition: 'width 0.7s ease-out' }} />
                      <div style={{ position: 'absolute', top: 0, height: '100%', width: 1, background: '#CBD5E1', left: `${Math.min(100 / maxRate * 100, 100)}%` }} />
                    </div>
                    <span style={{ fontSize: 13, fontWeight: 900, color: cSt.color, minWidth: 54, textAlign: 'right', fontVariantNumeric: 'tabular-nums' }}>
                      {sh.cumRate.toFixed(1)}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )
        })}

        {filtered.length === 0 && (
          <p style={{ textAlign: 'center', color: '#94A3B8', padding: '16px 0', fontSize: 13 }}>해당 스테이크홀더가 없습니다.</p>
        )}
      </div>
    </div>
  )
}
