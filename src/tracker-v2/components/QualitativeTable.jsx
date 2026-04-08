import { STAKEHOLDER_COLORS, SECTION_BAR } from '../utils/constants'
import { t, tSH, tCat, tMonth } from '../../shared/i18n.js'

function statusDot(val, lang) {
  if (!val || val === '') return { dot: '#CBD5E1', label: '\u2014', bg: 'transparent' }
  const s = String(val).trim().toUpperCase()
  if (s === 'PASS' || s === 'O' || s === 'Y' || s === 'YES' || s === '완료' || s === '달성') return { dot: '#15803D', label: t(lang, 'qualAchieved'), bg: '#ECFDF5' }
  if (s === 'NON-PASS' || s === 'NONPASS' || s === 'X' || s === 'N' || s === 'NO' || s === '미달성') return { dot: '#BE123C', label: t(lang, 'qualNotAchieved'), bg: '#FFF1F2' }
  if (s === '진행중' || s === '진행' || s === 'WIP' || s === 'ING' || s === '추진') return { dot: '#D97706', label: t(lang, 'qualInProgress'), bg: '#FFFBEB' }
  return { dot: '#94A3B8', label: val, bg: 'transparent' }
}

function _tr(lang, tr, text) { return lang === 'en' && tr && tr[text] ? tr[text] : text }

const CATEGORY_ORDER = ['콘텐츠수정', '신규콘텐츠제작', '외부채널관리', '닷컴기술개선']
function catSortKey(name) {
  const idx = CATEGORY_ORDER.indexOf(name)
  return idx >= 0 ? idx : 999
}

export default function QualitativeTable({ goals, results, selectedSH, selectedCategory, month, lang = 'ko', tr = {} }) {
  let filtered = results
  if (selectedSH !== '전체') filtered = filtered.filter(r => r.stakeholder === selectedSH)
  if (selectedCategory) filtered = filtered.filter(r => {
    const cat = r.taskCategory || goals.find(g => g.stakeholder === r.stakeholder && g.task === r.task)?.taskCategory
    return cat === selectedCategory
  })

  // 카테고리별 그룹핑 (각 결과 row에 대해 category 결정)
  const byCategory = {}
  filtered.forEach(r => {
    const cat = r.taskCategory
      || goals.find(g => g.stakeholder === r.stakeholder && g.task === r.task)?.taskCategory
      || (lang === 'en' ? 'Uncategorized' : '미분류')
    if (!byCategory[cat]) byCategory[cat] = []
    byCategory[cat].push(r)
  })
  const cats = Object.keys(byCategory).sort((a, b) => catSortKey(a) - catSortKey(b))

  // 카테고리별 요약: 달성/진행/미달성/미정 카운트
  function summarize(rows) {
    let achieved = 0, inprog = 0, notAch = 0, blank = 0
    rows.forEach(r => {
      const v = String(r.monthly?.[month] ?? '').trim().toUpperCase()
      if (!v) blank++
      else if (v === 'PASS' || v === 'O' || v === 'Y' || v === 'YES' || v === '완료' || v === '달성') achieved++
      else if (v === 'NON-PASS' || v === 'NONPASS' || v === 'X' || v === 'N' || v === 'NO' || v === '미달성') notAch++
      else if (v === '진행중' || v === '진행' || v === 'WIP' || v === 'ING' || v === '추진') inprog++
      else blank++
    })
    return { achieved, inprog, notAch, blank }
  }

  return (
    <div style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: 12, overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
      <div style={{ padding: '16px 20px', borderBottom: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ ...SECTION_BAR }} />
          <h3 style={{ fontSize: 20, fontWeight: 700, color: '#111827', margin: 0 }}>{t(lang, 'qualitativeTasks')}</h3>
          <span style={{ fontSize: 13, color: '#64748B', marginLeft: 8 }}>
            {cats.length}{lang === 'en' ? ' categories' : '개 카테고리'}
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 13, color: '#64748B' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><span style={{ width: 8, height: 8, borderRadius: '50%', background: '#15803D' }} /> {t(lang, 'qualAchieved')}</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><span style={{ width: 8, height: 8, borderRadius: '50%', background: '#D97706' }} /> {t(lang, 'qualInProgress')}</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><span style={{ width: 8, height: 8, borderRadius: '50%', background: '#BE123C' }} /> {t(lang, 'qualNotAchieved')}</span>
        </div>
      </div>

      {cats.length === 0 && (
        <p style={{ padding: '32px 12px', textAlign: 'center', color: '#94A3B8', fontSize: 16, margin: 0 }}>
          {t(lang, 'noQualTasks')}
        </p>
      )}

      {cats.map(cat => {
        const rows = byCategory[cat]
        const sum = summarize(rows)
        const headerColor = sum.notAch > sum.achieved ? '#BE123C' : sum.achieved > 0 ? '#15803D' : '#94A3B8'
        return (
          <div key={cat}>
            {/* 카테고리 헤더 */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 20px', background: '#F1F5F9', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #CBD5E1', borderLeft: `4px solid ${headerColor}` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <h4 style={{ margin: 0, fontSize: 16, fontWeight: 800, color: '#0F172A' }}>{tCat(lang, cat)}</h4>
                <span style={{ fontSize: 12, color: '#64748B', padding: '2px 8px', background: '#FFFFFF', borderRadius: 4, border: '1px solid #E2E8F0' }}>
                  {rows.length}{lang === 'en' ? ' tasks' : '개 과제'}
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 12 }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 4, color: '#15803D', fontWeight: 700 }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#15803D' }} />
                  {lang === 'en' ? 'Achieved' : '달성'} {sum.achieved}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 4, color: '#D97706', fontWeight: 700 }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#D97706' }} />
                  {lang === 'en' ? 'In Progress' : '진행'} {sum.inprog}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 4, color: '#BE123C', fontWeight: 700 }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#BE123C' }} />
                  {lang === 'en' ? 'Missed' : '미달성'} {sum.notAch}
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
                    <th style={{ padding: '8px 12px', textAlign: 'center', fontSize: 12, fontWeight: 600, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.05em', width: 120 }}>{t(lang, 'result', tMonth(lang, month))}</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r, ri) => {
                    const resultVal = r.monthly?.[month] ?? ''
                    const st = statusDot(resultVal, lang)
                    const g = goals.find(g => g.stakeholder === r.stakeholder && g.task === r.task)
                    const color = STAKEHOLDER_COLORS[r.stakeholder] || '#94A3B8'
                    return (
                      <tr key={ri} style={{ borderBottom: '1px solid #F1F5F9' }} className="hover:bg-[#F8FAFC] transition-colors">
                        <td style={{ padding: '8px 12px', textAlign: 'center' }}>
                          <span style={{ display: 'inline-block', padding: '2px 8px', borderRadius: 4, fontSize: 13, fontWeight: 700, background: color + '18', color: '#111827', border: `1px solid ${color}30` }}>{tSH(lang, r.stakeholder)}</span>
                        </td>
                        <td style={{ padding: '8px 12px', color: '#1E293B', fontWeight: 500 }}>{_tr(lang, tr, r.task)}</td>
                        <td style={{ padding: '8px 12px', color: '#64748B' }}>{r.pageType || g?.pageType || ''}</td>
                        <td style={{ padding: '8px 12px', color: '#475569', maxWidth: 300 }}>
                          <span style={{ display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} title={_tr(lang, tr, r.detail || g?.detail || '')}>{_tr(lang, tr, r.detail || g?.detail || '')}</span>
                        </td>
                        <td style={{ padding: '8px 12px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                            <span style={{ width: 9, height: 9, borderRadius: '50%', background: st.dot, display: 'inline-block', boxShadow: st.dot !== '#CBD5E1' ? `0 0 6px ${st.dot}55` : 'none' }} />
                            <span style={{ color: st.dot === '#CBD5E1' ? '#94A3B8' : st.dot, fontWeight: 600 }}>
                              {st.label}
                            </span>
                          </div>
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
