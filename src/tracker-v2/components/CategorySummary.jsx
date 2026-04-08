import { useState } from 'react'
import { STAKEHOLDER_COLORS, SECTION_BAR, statusOfDark as statusOf } from '../utils/constants'
import { t, tSH, tCat, tMonth } from '../../shared/i18n.js'

function fmt(n) { return Number(n).toLocaleString('en-US') }

function CategoryTooltip({ cat, lang }) {
  return (
    <div style={{
      position: 'absolute', top: 'calc(100% + 8px)', left: 0, right: 0,
      background: '#1E293B', color: '#E2E8F0', borderRadius: 8, padding: '12px 16px',
      fontSize: 13, lineHeight: 1.7, zIndex: 9999,
      boxShadow: '0 8px 24px rgba(0,0,0,0.25)', pointerEvents: 'none',
      whiteSpace: 'normal',
    }}>
      <div style={{
        position: 'absolute', top: -6, left: '50%', transform: 'translateX(-50%)',
        width: 0, height: 0, borderLeft: '6px solid transparent', borderRight: '6px solid transparent', borderBottom: '6px solid #1E293B',
      }} />
      <div style={{ fontWeight: 700, marginBottom: 6, color: '#F8FAFC' }}>{tCat(lang, cat.category)}</div>
      <div style={{ color: '#94A3B8' }}>{t(lang, 'tooltipTaskCount', cat.taskCount)}</div>
      <div style={{ color: '#94A3B8' }}>{t(lang, 'monthlyRate', '')} {cat.monthRate}% ({fmt(cat.monthActual)} / {fmt(cat.monthGoal)})</div>
      <div style={{ color: '#94A3B8' }}>{t(lang, 'cumulativeRate')} {cat.cumRate}% ({fmt(cat.cumActual)} / {fmt(cat.cumGoal)})</div>
      {cat.stakeholders && cat.stakeholders.length > 0 && (
        <div style={{ marginTop: 6 }}>
          <span style={{ color: '#94A3B8', fontSize: 12 }}>{t(lang, 'tooltipOrgs')}:</span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginTop: 4 }}>
            {cat.stakeholders.map(sh => (
              <span key={sh.name} style={{ padding: '1px 6px', borderRadius: 3, fontSize: 11, fontWeight: 600, background: '#334155', color: '#CBD5E1' }}>
                {tSH(lang, sh.name)} {sh.rate}%
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default function CategorySummary({ categories, month, lang = 'ko', selectedCategory, onSelectCategory }) {
  const [hoveredCat, setHoveredCat] = useState(null)

  if (!categories || categories.length === 0) return null

  return (
    <div style={{ background: '#1E293B', border: '1px solid #334155', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}>
      <div style={{ padding: '16px 20px', borderBottom: '1px solid #334155', background: '#1E293B', borderRadius: '12px 12px 0 0', display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={SECTION_BAR} />
        <h3 style={{ fontSize: 20, fontWeight: 700, color: '#F1F5F9', margin: 0 }}>{t(lang, 'categorySummary')}</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4" style={{ padding: 16, overflow: 'visible' }}>
        {categories.map(cat => {
          const ms = statusOf(cat.monthRate)
          const cs = statusOf(cat.cumRate)
          const shCount = cat.stakeholders ? cat.stakeholders.length : 0
          const isSelected = selectedCategory === cat.category
          const isHovered = hoveredCat === cat.category

          return (
            <div
              key={cat.category}
              className="rounded-xl"
              role="button"
              tabIndex={0}
              onClick={() => onSelectCategory?.(isSelected ? null : cat.category)}
              onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onSelectCategory?.(isSelected ? null : cat.category) } }}
              onMouseEnter={() => setHoveredCat(cat.category)}
              onMouseLeave={() => setHoveredCat(null)}
              style={{
                border: isSelected ? `2px solid ${ms.dot}` : `1px solid ${ms.border}`,
                background: ms.bg,
                padding: isSelected ? 15 : 16,
                cursor: 'pointer',
                position: 'relative',
                zIndex: isHovered ? 100 : 'auto',
                transition: 'all 0.15s ease',
                transform: isSelected ? 'scale(1.02)' : 'none',
                boxShadow: isSelected ? `0 4px 12px ${ms.dot}25` : 'none',
              }}
            >
              {/* Tooltip */}
              {isHovered && <CategoryTooltip cat={cat} lang={lang} />}

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                <span style={{ fontSize: 20, fontWeight: 700, color: '#F1F5F9' }}>{tCat(lang, cat.category)}</span>
                <span style={{ fontSize: 14, color: '#64748B' }}>{t(lang, 'stakeholderCount', shCount)}</span>
              </div>

              {/* 월 달성률 */}
              <div style={{ marginBottom: 10 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
                  <span style={{ fontSize: 15, color: '#94A3B8', width: 82, flexShrink: 0 }}>{t(lang, 'monthlyRate', tMonth(lang, month))}</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexShrink: 0, justifyContent: 'flex-end' }}>
                    <span style={{ width: 12, height: 12, borderRadius: '50%', background: ms.dot, display: 'inline-block', boxShadow: `0 0 6px ${ms.dot}55` }} />
                    <span style={{ fontSize: 20, fontWeight: 700, color: ms.text }}>{cat.monthRate}%</span>
                    <span style={{ fontSize: 14, color: '#64748B' }}>{fmt(cat.monthActual)} / {fmt(cat.monthGoal)}</span>
                  </div>
                </div>
                <div style={{ height: 6, background: 'rgba(255,255,255,0.15)', borderRadius: 3, overflow: 'hidden' }}>
                  <div style={{ height: '100%', borderRadius: 3, background: ms.bar, width: `${Math.min(cat.monthRate, 100)}%`, transition: 'width 0.5s' }} />
                </div>
              </div>

              {/* 누적 달성률 */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
                  <span style={{ fontSize: 15, color: '#94A3B8', width: 82, flexShrink: 0 }}>{t(lang, 'cumulativeRate')}</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexShrink: 0, justifyContent: 'flex-end' }}>
                    <span style={{ width: 12, height: 12, borderRadius: '50%', background: cs.dot, display: 'inline-block', boxShadow: `0 0 6px ${cs.dot}55` }} />
                    <span style={{ fontSize: 20, fontWeight: 700, color: cs.text }}>{cat.cumRate}%</span>
                    <span style={{ fontSize: 14, color: '#64748B' }}>{fmt(cat.cumActual)} / {fmt(cat.cumGoal)}</span>
                  </div>
                </div>
                <div style={{ height: 6, background: 'rgba(255,255,255,0.15)', borderRadius: 3, overflow: 'hidden' }}>
                  <div style={{ height: '100%', borderRadius: 3, background: cs.bar, width: `${Math.min(cat.cumRate, 100)}%`, transition: 'width 0.5s' }} />
                </div>
              </div>

              {/* 조직 네임택 */}
              {cat.stakeholders && cat.stakeholders.length > 0 && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginTop: 20 }}>
                  {cat.stakeholders.map(sh => {
                    const st = statusOf(sh.rate)
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
                        {tSH(lang, sh.name)}
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
