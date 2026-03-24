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
          <h3 style={{ fontSize: 20, fontWeight: 700, color: '#111827', margin: 0 }}>조직별 달성률</h3>
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

      {/* Column headers — all center aligned */}
      <div style={{ display: 'grid', gridTemplateColumns: '100px 1fr 240px 40px 240px', gap: 0, padding: '10px 20px', borderBottom: '1px solid #E2E8F0', background: '#F8FAFC' }}>
        <span style={{ fontSize: 16, fontWeight: 600, color: '#475569', textAlign: 'center', textTransform: 'uppercase', letterSpacing: '0.05em' }}>조직</span>
        <span style={{ fontSize: 16, fontWeight: 600, color: '#475569', textAlign: 'center', textTransform: 'uppercase', letterSpacing: '0.05em' }}>과제 현황</span>
        <span style={{ fontSize: 16, fontWeight: 600, color: '#475569', textAlign: 'center', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{month} 달성률</span>
        <span />
        <span style={{ fontSize: 16, fontWeight: 600, color: '#475569', textAlign: 'center', textTransform: 'uppercase', letterSpacing: '0.05em' }}>누적 달성률</span>
      </div>

      {/* Stakeholder rows */}
      <div style={{ padding: '0 20px 12px' }}>
        {filtered.map(sh => {
          const color = STAKEHOLDER_COLORS[sh.name] || '#94A3B8'
          const mSt = statusOf(sh.monthRate)
          const cSt = statusOf(sh.cumRate)
          const monthBarW = Math.min(sh.monthRate, 100)
          const cumBarW = Math.min(sh.cumRate, 100)

          return (
            <div key={sh.name} style={{ borderBottom: '1px solid #F1F5F9', padding: '14px 0' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '100px 1fr 240px 40px 240px', gap: 0, alignItems: 'center' }}>
                {/* Stakeholder badge */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ display: 'inline-block', padding: '4px 10px', borderRadius: 5, fontSize: 16, fontWeight: 700, background: color + '18', color: '#111827', border: `1px solid ${color}30`, textAlign: 'center' }}>
                    {sh.name}
                  </span>
                </div>

                {/* Task details */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 10px', fontSize: 16, color: '#475569' }}>
                  {(sh.taskDetails || []).map((td, i) => {
                    const tdSt = td.rate !== null ? statusOf(td.rate) : { color: '#94A3B8', dot: '#CBD5E1' }
                    return (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '2px 6px', background: '#F8FAFC', borderRadius: 4, border: '1px solid #F1F5F9' }}>
                        <span style={{ width: 10, height: 10, borderRadius: '50%', background: tdSt.dot, display: 'inline-block', flexShrink: 0 }} />
                        <span style={{ color: '#111827', fontWeight: 500, maxWidth: 150, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', fontSize: 16 }} title={td.task}>{td.task}</span>
                        <span style={{ fontSize: 14, color: '#64748B', whiteSpace: 'nowrap' }}>{fmt(td.monthActual)}/{fmt(td.monthGoal)}</span>
                        {td.rate !== null && (
                          <span style={{ fontWeight: 700, color: tdSt.color, fontSize: 16 }}>{td.rate.toFixed(0)}%</span>
                        )}
                      </div>
                    )
                  })}
                </div>

                {/* Month rate column: [bar] [실적/목표] [달성율] */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                  <div style={{ flex: 1, height: 18, background: '#F1F5F9', borderRadius: 4, overflow: 'hidden', position: 'relative', minWidth: 50 }}>
                    <div style={{ height: '100%', borderRadius: 4, width: `${monthBarW}%`, background: mSt.dot, transition: 'width 0.7s ease-out' }} />
                  </div>
                  <span style={{ fontSize: 14, color: '#475569', whiteSpace: 'nowrap', textAlign: 'center', fontVariantNumeric: 'tabular-nums', width: 60, flexShrink: 0 }}>
                    {fmt(sh.monthActual)}/{fmt(sh.monthGoal)}
                  </span>
                  <span style={{ fontSize: 16, fontWeight: 900, color: mSt.color, width: 50, flexShrink: 0, textAlign: 'left', fontVariantNumeric: 'tabular-nums' }}>
                    {sh.monthRate.toFixed(1)}%
                  </span>
                </div>

                {/* 20px spacer between month rate and cumulative */}
                <div />

                {/* Cumulative rate column: [bar] [실적/목표] [달성율] */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                  <div style={{ flex: 1, height: 18, background: '#F1F5F9', borderRadius: 4, overflow: 'hidden', position: 'relative', minWidth: 50 }}>
                    <div style={{ height: '100%', borderRadius: 4, width: `${cumBarW}%`, background: cSt.dot, transition: 'width 0.7s ease-out' }} />
                  </div>
                  <span style={{ fontSize: 14, color: '#475569', whiteSpace: 'nowrap', textAlign: 'center', fontVariantNumeric: 'tabular-nums', width: 60, flexShrink: 0 }}>
                    {fmt(sh.cumActual)}/{fmt(sh.cumGoal)}
                  </span>
                  <span style={{ fontSize: 16, fontWeight: 900, color: cSt.color, width: 50, flexShrink: 0, textAlign: 'left', fontVariantNumeric: 'tabular-nums' }}>
                    {sh.cumRate.toFixed(1)}%
                  </span>
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
