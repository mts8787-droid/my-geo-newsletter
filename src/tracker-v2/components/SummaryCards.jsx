import { statusOf } from '../utils/constants'
import { t, tMonth } from '../../shared/i18n.js'

function fmt(n) { return Number(n).toLocaleString('en-US') }

export default function SummaryCards({ avgRate, monthActual, monthGoal, annualProgressRate, cumulativeActual, annualTarget, achievedCount, missedCount, month, lang = 'ko' }) {
  const s = statusOf(avgRate)
  const ps = statusOf(annualProgressRate)

  return (
    <div>
      {/* Status bar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', fontSize: 21, fontWeight: 700, color: '#111827', height: 38 }}>{t(lang, 'allStakeholders')}</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ width: 16, height: 16, borderRadius: '50%', background: s.dot, display: 'inline-block', boxShadow: `0 0 10px ${s.dot}55` }} />
          <span style={{ fontSize: 23, fontWeight: 800, color: s.text }}>{t(lang, s.label)}</span>
          <span style={{ fontSize: 21, color: '#64748B' }}>({avgRate.toFixed(1)}%)</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* 1. 월 달성률 */}
        <div className="rounded-xl p-5" style={{ background: s.bg, border: `1px solid ${s.border}` }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
            <span style={{ fontSize: 20, fontWeight: 700, color: '#111827' }}>{t(lang, 'monthRate', tMonth(lang, month))}</span>
            <span style={{ width: 12, height: 12, borderRadius: '50%', background: s.dot, display: 'inline-block', boxShadow: `0 0 6px ${s.dot}55` }} />
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-black" style={{ color: s.text }}>{avgRate.toFixed(1)}</span>
            <span style={{ fontSize: 21, color: '#94A3B8' }}>%</span>
          </div>
          <div style={{ marginTop: 8, height: 6, background: 'rgba(255,255,255,0.6)', borderRadius: 3, overflow: 'hidden' }}>
            <div style={{ height: '100%', borderRadius: 3, width: `${Math.min(avgRate, 100)}%`, background: s.bar, transition: 'width 0.5s' }} />
          </div>
          <p style={{ fontSize: 17, color: '#64748B', marginTop: 4 }}>{fmt(monthActual)} / {fmt(monthGoal)}</p>
        </div>

        {/* 2. 연간 진척률 */}
        <div className="rounded-xl p-5" style={{ background: ps.bg, border: `1px solid ${ps.border}` }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
            <span style={{ fontSize: 20, fontWeight: 700, color: '#111827' }}>{t(lang, 'annualProgress')}</span>
            <span style={{ width: 12, height: 12, borderRadius: '50%', background: ps.dot, display: 'inline-block', boxShadow: `0 0 6px ${ps.dot}55` }} />
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-black" style={{ color: ps.text }}>{annualProgressRate.toFixed(1)}</span>
            <span style={{ fontSize: 21, color: '#94A3B8' }}>%</span>
          </div>
          <div style={{ marginTop: 8, height: 6, background: 'rgba(255,255,255,0.6)', borderRadius: 3, overflow: 'hidden' }}>
            <div style={{ height: '100%', borderRadius: 3, background: ps.bar, width: `${Math.min(annualProgressRate, 100)}%`, transition: 'width 0.5s' }} />
          </div>
          <p style={{ fontSize: 17, color: '#64748B', marginTop: 4 }}>{fmt(cumulativeActual)} / {fmt(annualTarget)}</p>
        </div>

        {/* 3. 달성과제 */}
        <div className="rounded-xl p-5" style={{ background: '#ECFDF5', border: '1px solid #A7F3D0' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
            <span style={{ fontSize: 20, fontWeight: 700, color: '#111827' }}>{lang === 'en' ? 'Achieved Tasks' : '달성 과제'}</span>
            <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#15803D', display: 'inline-block', boxShadow: '0 0 6px #15803D55' }} />
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-black" style={{ color: '#15803D' }}>{achievedCount}</span>
            <span style={{ fontSize: 19, color: '#94A3B8' }}>{t(lang, 'count')}</span>
          </div>
          <p style={{ fontSize: 17, color: '#64748B', marginTop: 4 }}>{lang === 'en' ? 'Achievement ≥ 80%' : '달성률 ≥ 80%'}</p>
        </div>

        {/* 4. 미달성과제 */}
        <div className="rounded-xl p-5" style={{ background: '#FFF1F2', border: '1px solid #FECDD3' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
            <span style={{ fontSize: 20, fontWeight: 700, color: '#111827' }}>{lang === 'en' ? 'Missed Tasks' : '미달성 과제'}</span>
            <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#BE123C', display: 'inline-block', boxShadow: '0 0 6px #BE123C55' }} />
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-black" style={{ color: '#BE123C' }}>{missedCount}</span>
            <span style={{ fontSize: 19, color: '#94A3B8' }}>{t(lang, 'count')}</span>
          </div>
          <p style={{ fontSize: 17, color: '#64748B', marginTop: 4 }}>{lang === 'en' ? 'Achievement < 80%' : '달성률 < 80%'}</p>
        </div>
      </div>
    </div>
  )
}
