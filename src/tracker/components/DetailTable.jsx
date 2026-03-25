import { STAKEHOLDER_COLORS } from '../utils/constants'
import { t } from '../../shared/i18n.js'

function statusOf(rate) {
  if (rate === null) return { color: '#94A3B8', dot: '#CBD5E1' }
  if (rate >= 100) return { color: '#15803D', dot: '#15803D' }
  if (rate >= 80)  return { color: '#D97706', dot: '#D97706' }
  return { color: '#BE123C', dot: '#BE123C' }
}

function fmtRate(rate) {
  if (rate === null) return '\u2014'
  return `${rate.toFixed(1)}%`
}

export default function DetailTable({ tasks, month, lang = 'ko' }) {
  return (
    <div style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: 12, overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
      <div style={{ padding: '16px 20px', borderBottom: '1px solid #E2E8F0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 2 }}><span style={{ width: 3, height: 16, borderRadius: 8, background: '#CF0652', flexShrink: 0 }} /><h3 style={{ fontSize: 20, fontWeight: 700, color: '#111827', margin: 0 }}>{t(lang, 'quantitativeTasks')}</h3></div>
      </div>

      <div className="overflow-x-auto">
        <table style={{ width: '100%', fontSize: 16, borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#F8FAFC', borderBottom: '1px solid #E2E8F0' }}>
              <th style={{ padding: '10px 12px', textAlign: 'center', fontSize: 16, fontWeight: 600, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.05em', position: 'sticky', left: 0, zIndex: 10, background: '#F8FAFC', width: 100, minWidth: 100 }}>{t(lang, 'org')}</th>
              <th style={{ padding: '10px 12px', textAlign: 'center', fontSize: 16, fontWeight: 600, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.05em', width: 160, minWidth: 160 }}>{t(lang, 'taskCategory')}</th>
              <th style={{ padding: '10px 12px', textAlign: 'left', fontSize: 16, fontWeight: 600, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.05em', width: 240, minWidth: 240 }}>{t(lang, 'task')}</th>
              <th style={{ padding: '10px 12px', textAlign: 'left', fontSize: 16, fontWeight: 600, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.05em', width: 140, minWidth: 140 }}>Page Type</th>
              <th style={{ padding: '10px 12px', textAlign: 'left', fontSize: 16, fontWeight: 600, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.05em', minWidth: 160 }}>{t(lang, 'goalDetail')}</th>
              <th style={{ padding: '10px 12px', textAlign: 'right', fontSize: 16, fontWeight: 600, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.05em', minWidth: 60 }}>{t(lang, 'goalLabel')}</th>
              <th style={{ padding: '10px 12px', textAlign: 'right', fontSize: 16, fontWeight: 600, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.05em', minWidth: 60 }}>{t(lang, 'actualLabel')}</th>
              <th style={{ padding: '10px 12px', textAlign: 'center', fontSize: 16, fontWeight: 600, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.05em', minWidth: 90 }}>{t(lang, 'rateLabel')}</th>
              <th style={{ padding: '10px 12px', textAlign: 'right', fontSize: 16, fontWeight: 600, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.05em', minWidth: 60 }}>{t(lang, 'annualGoal')}</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((tk, i) => {
              const color = STAKEHOLDER_COLORS[tk.stakeholder] || '#94A3B8'
              const st = statusOf(tk.rate)
              return (
                <tr key={i} style={{ borderBottom: '1px solid #F1F5F9' }} className="hover:bg-[#F8FAFC] transition-colors">
                  <td style={{ padding: '9px 12px', position: 'sticky', left: 0, zIndex: 10, background: '#fff', textAlign: 'center' }}>
                    <span style={{ display: 'inline-block', padding: '2px 8px', borderRadius: 4, fontSize: 16, fontWeight: 700, background: color + '18', color: '#111827', border: `1px solid ${color}30` }}>
                      {tk.stakeholder}
                    </span>
                  </td>
                  <td style={{ padding: '9px 12px', textAlign: 'center', color: '#64748B' }}>{tk.taskCategory}</td>
                  <td style={{ padding: '9px 12px', color: '#1E293B', fontWeight: 500 }}>{tk.task}</td>
                  <td style={{ padding: '9px 12px', color: '#64748B' }}>{tk.pageType}</td>
                  <td style={{ padding: '9px 12px', color: '#475569', maxWidth: 280 }}>
                    <span style={{ display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} title={tk.detail}>{tk.detail}</span>
                  </td>
                  <td style={{ padding: '9px 12px', textAlign: 'right', color: '#64748B', fontVariantNumeric: 'tabular-nums' }}>
                    {typeof tk.goal === 'number' && tk.goal > 0 ? tk.goal.toLocaleString() : '\u2014'}
                  </td>
                  <td style={{ padding: '9px 12px', textAlign: 'right', color: '#1E293B', fontWeight: 600, fontVariantNumeric: 'tabular-nums' }}>
                    {typeof tk.actual === 'number' && tk.actual > 0 ? tk.actual.toLocaleString() : '\u2014'}
                  </td>
                  <td style={{ padding: '9px 12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                      <span style={{ width: 9, height: 9, borderRadius: '50%', background: st.dot, display: 'inline-block' }} />
                      <span style={{ fontWeight: tk.rate !== null ? 700 : 400, color: st.color, fontVariantNumeric: 'tabular-nums' }}>{fmtRate(tk.rate)}</span>
                    </div>
                  </td>
                  <td style={{ padding: '9px 12px', textAlign: 'right', color: '#94A3B8', fontVariantNumeric: 'tabular-nums' }}>
                    {tk.goalAnnual > 0 ? tk.goalAnnual.toLocaleString() : '\u2014'}
                  </td>
                </tr>
              )
            })}
            {tasks.length === 0 && (
              <tr>
                <td colSpan={9} style={{ padding: '32px 12px', textAlign: 'center', color: '#94A3B8', fontSize: 16 }}>
                  {t(lang, 'noTasksForSH')}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
