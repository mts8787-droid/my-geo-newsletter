import { SECTION_BAR, statusOf } from '../utils/constants'
import { t, tCat, tMonth } from '../../shared/i18n.js'

function fmt(n) { return Number(n).toLocaleString('en-US') }

export default function CategoryRanking({ categories, month, selectedCategory, onSelectCategory, lang = 'ko' }) {
  const filtered = selectedCategory ? categories.filter(c => c.category === selectedCategory) : categories

  return (
    <div style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: 12, overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
      {/* Header */}
      <div style={{ padding: '16px 20px', borderBottom: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={SECTION_BAR} />
          <h3 style={{ fontSize: 20, fontWeight: 700, color: '#111827', margin: 0 }}>
            {lang === 'en' ? 'Category Achievement Rate' : '과제 카테고리별 달성률'}
          </h3>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 16, color: '#64748B' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><span style={{ width: 8, height: 8, borderRadius: '50%', background: '#15803D', display: 'inline-block' }} /> ≥100%</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><span style={{ width: 8, height: 8, borderRadius: '50%', background: '#D97706', display: 'inline-block' }} /> ≥80%</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><span style={{ width: 8, height: 8, borderRadius: '50%', background: '#BE123C', display: 'inline-block' }} /> {'<80%'}</span>
        </div>
      </div>

      {/* Column headers */}
      <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr 240px 40px 240px', gap: 0, padding: '10px 20px', borderBottom: '1px solid #E2E8F0', background: '#F8FAFC' }}>
        <span style={{ fontSize: 16, fontWeight: 600, color: '#475569', textAlign: 'center', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{lang === 'en' ? 'Category' : '카테고리'}</span>
        <span style={{ fontSize: 16, fontWeight: 600, color: '#475569', textAlign: 'center', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{lang === 'en' ? 'Tasks / Orgs' : '과제 / 조직'}</span>
        <span style={{ fontSize: 16, fontWeight: 600, color: '#475569', textAlign: 'center', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{t(lang, 'monthlyRate', tMonth(lang, month))}</span>
        <span />
        <span style={{ fontSize: 16, fontWeight: 600, color: '#475569', textAlign: 'center', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{lang === 'en' ? 'Annual Progress' : '연간 진척율'}</span>
      </div>

      {/* Category rows */}
      <div style={{ padding: '0 20px 12px' }}>
        {filtered.map(cat => {
          const mSt = statusOf(cat.monthRate)
          const pSt = statusOf(cat.progressRate || cat.cumRate)
          const monthBarW = Math.min(cat.monthRate, 100)
          const progressBarW = Math.min(cat.progressRate || cat.cumRate, 100)
          const isSelected = selectedCategory === cat.category
          const shCount = (cat.stakeholders && cat.stakeholders.length) || 0

          return (
            <div
              key={cat.category}
              role="button"
              tabIndex={0}
              onClick={() => onSelectCategory?.(isSelected ? null : cat.category)}
              onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onSelectCategory?.(isSelected ? null : cat.category) } }}
              style={{
                borderBottom: '1px solid #F1F5F9',
                padding: '14px 0',
                cursor: 'pointer',
                background: isSelected ? '#EFF6FF' : 'transparent',
                transition: 'background 0.15s ease',
              }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr 240px 40px 240px', gap: 0, alignItems: 'center' }}>
                {/* Category badge */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ display: 'inline-block', padding: '6px 12px', borderRadius: 6, fontSize: 15, fontWeight: 700, background: mSt.dot + '20', color: '#111827', border: `1px solid ${mSt.dot}40`, textAlign: 'center' }}>
                    {tCat(lang, cat.category)}
                  </span>
                </div>

                {/* Task count + stakeholder badges */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 10px', fontSize: 16, color: '#475569', alignItems: 'center' }}>
                  <span style={{ fontSize: 15, color: '#64748B', padding: '4px 8px', background: '#F8FAFC', borderRadius: 4, border: '1px solid #F1F5F9' }}>
                    {lang === 'en' ? `${cat.taskCount} tasks` : `${cat.taskCount}개 과제`}
                  </span>
                  {shCount > 0 && (
                    <span style={{ fontSize: 15, color: '#64748B', padding: '4px 8px', background: '#F8FAFC', borderRadius: 4, border: '1px solid #F1F5F9' }}>
                      {lang === 'en' ? `${shCount} orgs` : `${shCount}개 조직`}
                    </span>
                  )}
                </div>

                {/* Month rate column */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                  <div style={{ flex: 1, height: 18, background: '#F1F5F9', borderRadius: 4, overflow: 'hidden', position: 'relative', minWidth: 50 }}>
                    <div style={{ height: '100%', borderRadius: 4, width: `${monthBarW}%`, background: mSt.dot, transition: 'width 0.7s ease-out' }} />
                  </div>
                  <span style={{ fontSize: 14, color: '#475569', whiteSpace: 'nowrap', textAlign: 'center', fontVariantNumeric: 'tabular-nums', width: 60, flexShrink: 0 }}>
                    {fmt(cat.monthActual)}/{fmt(cat.monthGoal)}
                  </span>
                  <span style={{ fontSize: 16, fontWeight: 900, color: mSt.text, width: 50, flexShrink: 0, textAlign: 'left', fontVariantNumeric: 'tabular-nums' }}>
                    {(cat.monthRate || 0).toFixed(1)}%
                  </span>
                </div>

                <div />

                {/* Progress rate column */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                  <div style={{ flex: 1, height: 18, background: '#F1F5F9', borderRadius: 4, overflow: 'hidden', position: 'relative', minWidth: 50 }}>
                    <div style={{ height: '100%', borderRadius: 4, width: `${progressBarW}%`, background: pSt.dot, transition: 'width 0.7s ease-out' }} />
                  </div>
                  <span style={{ fontSize: 14, color: '#475569', whiteSpace: 'nowrap', textAlign: 'center', fontVariantNumeric: 'tabular-nums', width: 60, flexShrink: 0 }}>
                    {fmt(cat.cumActual)}/{fmt(cat.annualGoal || cat.cumGoal)}
                  </span>
                  <span style={{ fontSize: 16, fontWeight: 900, color: pSt.text, width: 50, flexShrink: 0, textAlign: 'left', fontVariantNumeric: 'tabular-nums' }}>
                    {(cat.progressRate || cat.cumRate || 0).toFixed(1)}%
                  </span>
                </div>
              </div>
            </div>
          )
        })}

        {filtered.length === 0 && (
          <p style={{ textAlign: 'center', color: '#94A3B8', padding: '16px 0', fontSize: 16 }}>
            {lang === 'en' ? 'No category data' : '카테고리 데이터가 없습니다'}
          </p>
        )}
      </div>
    </div>
  )
}
