import { statusOf } from '../utils/constants'
import { t, tCat, tMonth } from '../../shared/i18n.js'

function fmt(n) { return Number(n).toLocaleString('en-US') }

// 카테고리 중심 상단 요약: 전체 요약 큰 카드 + 카테고리별 미니 카드 그리드
export default function SummaryCards({
  avgRate, monthActual, monthGoal,
  annualProgressRate, cumulativeActual, annualTarget,
  achievedCount, missedCount,
  categoryStats = [],
  month, lang = 'ko',
}) {
  const s = statusOf(avgRate)
  const ps = statusOf(annualProgressRate)

  return (
    <div>
      {/* 전체 요약 — 한 줄 4분할 */}
      <div style={{
        background: 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)',
        border: '1px solid #E2E8F0', borderRadius: 14,
        padding: 22, marginBottom: 16,
        boxShadow: '0 1px 3px rgba(15,23,42,0.06)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
          <span style={{ width: 4, height: 22, background: '#CF0652', borderRadius: 2 }} />
          <h3 style={{ margin: 0, fontSize: 17, fontWeight: 800, color: '#0F172A' }}>
            {lang === 'en' ? 'Overall Summary' : '전체 요약'}
          </h3>
          <span style={{ fontSize: 12, color: '#94A3B8' }}>· {tMonth(lang, month)}</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* 1. 월 달성률 */}
          <Metric
            label={t(lang, 'monthRate', tMonth(lang, month))}
            value={avgRate.toFixed(1)}
            unit="%"
            sub={`${fmt(monthActual)} / ${fmt(monthGoal)}`}
            color={s.text} dot={s.dot} bar={s.bar} bg={s.bg} border={s.border}
            barRate={Math.min(avgRate, 100)}
          />
          {/* 2. 연간 진척율 */}
          <Metric
            label={t(lang, 'annualProgress')}
            value={annualProgressRate.toFixed(1)}
            unit="%"
            sub={`${fmt(cumulativeActual)} / ${fmt(annualTarget)}`}
            color={ps.text} dot={ps.dot} bar={ps.bar} bg={ps.bg} border={ps.border}
            barRate={Math.min(annualProgressRate, 100)}
          />
          {/* 3. 달성과제 */}
          <Metric
            label={lang === 'en' ? 'Achieved Tasks' : '달성 과제'}
            value={achievedCount}
            unit={t(lang, 'count')}
            sub={lang === 'en' ? 'Achievement ≥ 80%' : '달성률 ≥ 80%'}
            color="#15803D" dot="#22C55E" bar="#22C55E"
            bg="#ECFDF5" border="#A7F3D0"
            barRate={achievedCount + missedCount > 0 ? (achievedCount / (achievedCount + missedCount)) * 100 : 0}
          />
          {/* 4. 미달성과제 */}
          <Metric
            label={lang === 'en' ? 'Missed Tasks' : '미달성 과제'}
            value={missedCount}
            unit={t(lang, 'count')}
            sub={lang === 'en' ? 'Achievement < 80%' : '달성률 < 80%'}
            color="#BE123C" dot="#EF4444" bar="#EF4444"
            bg="#FEF2F2" border="#FECACA"
            barRate={achievedCount + missedCount > 0 ? (missedCount / (achievedCount + missedCount)) * 100 : 0}
          />
        </div>
      </div>

      {/* 카테고리별 미니 요약 — 한 줄 그리드 */}
      {categoryStats.length > 0 && (
        <div style={{
          background: '#FFFFFF',
          border: '1px solid #E2E8F0', borderRadius: 14,
          padding: 22,
          boxShadow: '0 1px 3px rgba(15,23,42,0.06)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <span style={{ width: 4, height: 22, background: '#1D4ED8', borderRadius: 2 }} />
            <h3 style={{ margin: 0, fontSize: 17, fontWeight: 800, color: '#0F172A' }}>
              {lang === 'en' ? 'By Category' : '카테고리별 요약'}
            </h3>
            <span style={{ fontSize: 12, color: '#94A3B8' }}>· {categoryStats.length}{lang === 'en' ? ' categories' : '개'}</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {categoryStats.map(c => {
              const ms = statusOf(c.monthRate || 0)
              const ps2 = statusOf(c.progressRate || 0)
              return (
                <div key={c.category} style={{
                  background: '#F8FAFC',
                  border: `1px solid #E2E8F0`,
                  borderLeft: `4px solid ${ps2.dot}`,
                  borderRadius: 10,
                  padding: '12px 14px',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                    <h4 style={{ margin: 0, fontSize: 14, fontWeight: 800, color: '#0F172A' }}>{tCat(lang, c.category)}</h4>
                    <span style={{ fontSize: 11, color: '#94A3B8' }}>{c.taskCount}{lang === 'en' ? '' : '개'}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 6 }}>
                    <span style={{ fontSize: 11, color: '#64748B', minWidth: 36 }}>{lang === 'en' ? 'Month' : '월'}</span>
                    <span style={{ fontSize: 18, fontWeight: 900, color: ms.text, fontVariantNumeric: 'tabular-nums' }}>
                      {(c.monthRate || 0).toFixed(0)}<span style={{ fontSize: 11 }}>%</span>
                    </span>
                  </div>
                  <div style={{ height: 5, background: 'rgba(15,23,42,0.06)', borderRadius: 3, overflow: 'hidden', marginBottom: 8 }}>
                    <div style={{ height: '100%', borderRadius: 3, width: `${Math.min(c.monthRate || 0, 100)}%`, background: ms.bar }} />
                  </div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 6 }}>
                    <span style={{ fontSize: 11, color: '#64748B', minWidth: 36 }}>{lang === 'en' ? 'Annual' : '연간'}</span>
                    <span style={{ fontSize: 18, fontWeight: 900, color: ps2.text, fontVariantNumeric: 'tabular-nums' }}>
                      {(c.progressRate || 0).toFixed(0)}<span style={{ fontSize: 11 }}>%</span>
                    </span>
                  </div>
                  <div style={{ height: 5, background: 'rgba(15,23,42,0.06)', borderRadius: 3, overflow: 'hidden', marginBottom: 10 }}>
                    <div style={{ height: '100%', borderRadius: 3, width: `${Math.min(c.progressRate || 0, 100)}%`, background: ps2.bar }} />
                  </div>
                  <div style={{ display: 'flex', gap: 6, fontSize: 11 }}>
                    <span style={{ flex: 1, padding: '3px 6px', background: '#ECFDF5', border: '1px solid #A7F3D0', borderRadius: 4, textAlign: 'center', color: '#15803D', fontWeight: 700 }}>
                      ✓ {c.achieved || 0}
                    </span>
                    <span style={{ flex: 1, padding: '3px 6px', background: '#FEF2F2', border: '1px solid #FECACA', borderRadius: 4, textAlign: 'center', color: '#BE123C', fontWeight: 700 }}>
                      ✗ {c.missed || 0}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

function Metric({ label, value, unit, sub, color, dot, bar, bg, border, barRate }) {
  return (
    <div style={{
      background: bg || '#FFFFFF',
      border: `1px solid ${border || '#E2E8F0'}`,
      borderRadius: 12,
      padding: 16,
      position: 'relative',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
        <span style={{ fontSize: 13, fontWeight: 700, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.3px' }}>{label}</span>
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: dot, boxShadow: `0 0 6px ${dot}55` }} />
      </div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 6 }}>
        <span style={{ fontSize: 34, fontWeight: 900, color, lineHeight: 1, fontVariantNumeric: 'tabular-nums' }}>{value}</span>
        <span style={{ fontSize: 16, color: '#94A3B8', fontWeight: 600 }}>{unit}</span>
      </div>
      {barRate != null && (
        <div style={{ height: 5, background: 'rgba(15,23,42,0.08)', borderRadius: 3, overflow: 'hidden', marginBottom: 6 }}>
          <div style={{ height: '100%', borderRadius: 3, width: `${barRate}%`, background: bar, transition: 'width 0.6s' }} />
        </div>
      )}
      <p style={{ margin: 0, fontSize: 12, color: '#64748B' }}>{sub}</p>
    </div>
  )
}
