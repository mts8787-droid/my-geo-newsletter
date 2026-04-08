import { STAKEHOLDER_COLORS, SECTION_BAR, statusOf } from '../utils/constants'
import { t, tSH, tCat } from '../../shared/i18n.js'

function fmtRate(rate) {
  if (rate === null) return '\u2014'
  return `${rate.toFixed(1)}%`
}

function _tr(lang, tr, text) { return lang === 'en' && tr && tr[text] ? tr[text] : text }

const CATEGORY_ORDER = ['콘텐츠수정', '신규콘텐츠제작', '외부채널관리', '닷컴기술개선']
function catSortKey(name) {
  const idx = CATEGORY_ORDER.indexOf(name)
  return idx >= 0 ? idx : 999
}

export default function DetailTable({ tasks, month, lang = 'ko', tr = {} }) {
  // 카테고리별 그룹핑
  const byCategory = {}
  ;(tasks || []).forEach(tk => {
    const cat = tk.taskCategory || (lang === 'en' ? 'Uncategorized' : '미분류')
    if (!byCategory[cat]) byCategory[cat] = []
    byCategory[cat].push(tk)
  })
  const cats = Object.keys(byCategory).sort((a, b) => catSortKey(a) - catSortKey(b))

  // 카테고리별 요약 (총 goal/actual/rate)
  function summarize(rows) {
    let g = 0, a = 0
    rows.forEach(r => {
      if (typeof r.goal === 'number') g += r.goal
      if (typeof r.actual === 'number') a += r.actual
    })
    const rate = g > 0 ? (a / g) * 100 : null
    return { g, a, rate }
  }

  return (
    <div style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: 12, overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
      <div style={{ padding: '16px 20px', borderBottom: '1px solid #E2E8F0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={SECTION_BAR} />
          <h3 style={{ fontSize: 20, fontWeight: 700, color: '#111827', margin: 0 }}>{t(lang, 'quantitativeTasks')}</h3>
          <span style={{ fontSize: 13, color: '#64748B', marginLeft: 8 }}>
            {cats.length}{lang === 'en' ? ' categories' : '개 카테고리'}
          </span>
        </div>
      </div>

      {cats.length === 0 && (
        <p style={{ padding: '32px 12px', textAlign: 'center', color: '#94A3B8', fontSize: 16, margin: 0 }}>
          {t(lang, 'noTasksForSH')}
        </p>
      )}

      {cats.map(cat => {
        const rows = byCategory[cat]
        const sum = summarize(rows)
        const sumSt = statusOf(sum.rate || 0)
        return (
          <div key={cat}>
            {/* 카테고리 헤더 행 */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 20px', background: '#F1F5F9', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #CBD5E1', borderLeft: `4px solid ${sumSt.dot}` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <h4 style={{ margin: 0, fontSize: 16, fontWeight: 800, color: '#0F172A' }}>{tCat(lang, cat)}</h4>
                <span style={{ fontSize: 12, color: '#64748B', padding: '2px 8px', background: '#FFFFFF', borderRadius: 4, border: '1px solid #E2E8F0' }}>
                  {rows.length}{lang === 'en' ? ' tasks' : '개 과제'}
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 13, color: '#475569' }}>
                <span>{sum.a.toLocaleString()} / {sum.g.toLocaleString()}</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: sumSt.dot }} />
                  <span style={{ fontWeight: 800, color: sumSt.text, fontSize: 14 }}>{sum.rate != null ? sum.rate.toFixed(1) + '%' : '—'}</span>
                </span>
              </div>
            </div>

            {/* 카테고리 과제 테이블 */}
            <div className="overflow-x-auto">
              <table style={{ width: '100%', fontSize: 14, borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ background: '#F8FAFC', borderBottom: '1px solid #E2E8F0' }}>
                    <th style={{ padding: '8px 12px', textAlign: 'center', fontSize: 12, fontWeight: 600, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.05em', width: 100 }}>{t(lang, 'org')}</th>
                    <th style={{ padding: '8px 12px', textAlign: 'left', fontSize: 12, fontWeight: 600, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.05em', width: 240 }}>{t(lang, 'task')}</th>
                    <th style={{ padding: '8px 12px', textAlign: 'left', fontSize: 12, fontWeight: 600, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.05em', width: 130 }}>Page Type</th>
                    <th style={{ padding: '8px 12px', textAlign: 'left', fontSize: 12, fontWeight: 600, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{t(lang, 'goalDetail')}</th>
                    <th style={{ padding: '8px 12px', textAlign: 'right', fontSize: 12, fontWeight: 600, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.05em', width: 70 }}>{t(lang, 'goalLabel')}</th>
                    <th style={{ padding: '8px 12px', textAlign: 'right', fontSize: 12, fontWeight: 600, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.05em', width: 70 }}>{t(lang, 'actualLabel')}</th>
                    <th style={{ padding: '8px 12px', textAlign: 'center', fontSize: 12, fontWeight: 600, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.05em', width: 90 }}>{t(lang, 'rateLabel')}</th>
                    <th style={{ padding: '8px 12px', textAlign: 'right', fontSize: 12, fontWeight: 600, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.05em', width: 70 }}>{t(lang, 'annualGoal')}</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((tk, i) => {
                    const color = STAKEHOLDER_COLORS[tk.stakeholder] || '#94A3B8'
                    const st = statusOf(tk.rate)
                    return (
                      <tr key={i} style={{ borderBottom: '1px solid #F1F5F9' }} className="hover:bg-[#F8FAFC] transition-colors">
                        <td style={{ padding: '8px 12px', textAlign: 'center' }}>
                          <span style={{ display: 'inline-block', padding: '2px 8px', borderRadius: 4, fontSize: 13, fontWeight: 700, background: color + '18', color: '#111827', border: `1px solid ${color}30` }}>
                            {tSH(lang, tk.stakeholder)}
                          </span>
                        </td>
                        <td style={{ padding: '8px 12px', color: '#1E293B', fontWeight: 500 }}>{_tr(lang, tr, tk.task)}</td>
                        <td style={{ padding: '8px 12px', color: '#64748B' }}>{tk.pageType}</td>
                        <td style={{ padding: '8px 12px', color: '#475569', maxWidth: 280 }}>
                          <span style={{ display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} title={_tr(lang, tr, tk.detail)}>{_tr(lang, tr, tk.detail)}</span>
                        </td>
                        <td style={{ padding: '8px 12px', textAlign: 'right', color: '#64748B', fontVariantNumeric: 'tabular-nums' }}>
                          {typeof tk.goal === 'number' && tk.goal > 0 ? tk.goal.toLocaleString() : '\u2014'}
                        </td>
                        <td style={{ padding: '8px 12px', textAlign: 'right', color: '#1E293B', fontWeight: 600, fontVariantNumeric: 'tabular-nums' }}>
                          {typeof tk.actual === 'number' && tk.actual > 0 ? tk.actual.toLocaleString() : '\u2014'}
                        </td>
                        <td style={{ padding: '8px 12px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                            <span style={{ width: 8, height: 8, borderRadius: '50%', background: st.dot }} />
                            <span style={{ fontWeight: tk.rate !== null ? 700 : 400, color: st.text, fontVariantNumeric: 'tabular-nums' }}>{fmtRate(tk.rate)}</span>
                          </div>
                        </td>
                        <td style={{ padding: '8px 12px', textAlign: 'right', color: '#94A3B8', fontVariantNumeric: 'tabular-nums' }}>
                          {tk.goalAnnual > 0 ? tk.goalAnnual.toLocaleString() : '\u2014'}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )
      })}
    </div>
  )
}
