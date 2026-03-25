import { RefreshCw, Globe, Trash2, X } from 'lucide-react'
import { MONTHS, STAKEHOLDER_COLORS } from '../utils/constants'
import { t } from '../../shared/i18n.js'

export default function Header({
  onRefresh, loading, selectedMonth, setSelectedMonth,
  selectedSH, setSelectedSH, stakeholderList,
  isPublic, onPublish, publishing, publishInfo, onUnpublish,
  lang = 'ko', selectedCategory, onClearCategory,
}) {
  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur border-b border-[#E2E8F0] shadow-sm">
      <div className="max-w-[1400px] mx-auto px-5 py-3 flex items-center justify-between gap-3 flex-wrap">
        {/* Left: title */}
        <div className="flex items-center gap-3">
          <span className="w-2 h-6 rounded-full bg-[#CF0652]" />
          <h1 className="text-[20px] font-bold text-[#111827] tracking-tight">{t(lang, 'headerTitle')}</h1>
          {isPublic
            ? <span className="text-[16px] font-semibold text-[#15803D] bg-[#ECFDF5] border border-[#A7F3D0] px-2 py-0.5 rounded">{t(lang, 'published')}</span>
            : <span className="text-[16px] font-medium text-[#94A3B8] ml-1">{t(lang, 'admin')}</span>
          }
        </div>

        {/* Center: month selector + stakeholder filter + category badge */}
        <div className="flex items-center gap-2 flex-wrap">
          <select
            value={selectedMonth}
            onChange={e => setSelectedMonth(e.target.value)}
            className="appearance-none bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg px-3 py-1.5 pr-8 text-[16px] font-bold text-[#111827] cursor-pointer hover:border-[#CBD5E1] focus:outline-none focus:border-[#CF0652] transition-colors"
          >
            {MONTHS.map(m => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>

          <div className="flex items-center gap-1 flex-wrap">
            {[t(lang, 'all'), ...stakeholderList].map((sh, i) => {
              const rawSH = i === 0 ? '전체' : sh
              const isActive = selectedSH === rawSH
              const color = rawSH === '전체' ? '#64748B' : (STAKEHOLDER_COLORS[rawSH] || '#64748B')
              return (
                <button
                  key={rawSH}
                  onClick={() => setSelectedSH(rawSH)}
                  className={`px-2.5 py-1 rounded-md text-[16px] font-bold transition-all ${
                    isActive ? 'text-white shadow-sm' : 'text-[#111827] hover:text-[#1E293B] hover:bg-[#F1F5F9]'
                  }`}
                  style={isActive ? { backgroundColor: color } : undefined}
                >
                  {sh}
                </button>
              )
            })}
          </div>

          {/* Active category filter badge */}
          {selectedCategory && (
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 4,
              padding: '4px 10px', borderRadius: 6, fontSize: 14, fontWeight: 700,
              background: '#EEF2FF', color: '#4338CA', border: '1px solid #C7D2FE',
            }}>
              {selectedCategory}
              <button
                onClick={onClearCategory}
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', color: '#6366F1' }}
                title={t(lang, 'clearFilter')}
              >
                <X size={14} />
              </button>
            </span>
          )}
        </div>

        {/* Right: admin buttons */}
        <div className="flex items-center gap-2">
          {!isPublic && (
            <>
              <button
                onClick={onRefresh}
                disabled={loading}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[16px] text-[#64748B] hover:text-[#111827] hover:bg-[#F1F5F9] transition-colors disabled:opacity-40"
              >
                <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
                {t(lang, 'refresh')}
              </button>

              <button
                onClick={onPublish}
                disabled={publishing}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[16px] font-bold bg-[#CF0652] hover:bg-[#B8044A] text-white transition-colors disabled:opacity-50"
              >
                <Globe size={16} className={publishing ? 'animate-spin' : ''} />
                {publishing ? t(lang, 'publishing') : t(lang, 'webPublish')}
              </button>

              {publishInfo?.published && (
                <button
                  onClick={onUnpublish}
                  className="flex items-center gap-1 px-2 py-1.5 rounded-md text-[16px] text-[#BE123C] hover:bg-[#FFF1F2] transition-colors"
                  title={t(lang, 'unpublish')}
                >
                  <Trash2 size={16} />
                </button>
              )}
            </>
          )}
        </div>
      </div>

      {/* Publish status bar */}
      {!isPublic && publishInfo?.published && (
        <div className="bg-[#ECFDF5] border-t border-[#A7F3D0] px-5 py-1.5 flex items-center justify-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
          <span className="text-[16px] text-[#15803D]">
            {t(lang, 'publishedAt')} — {publishInfo.ts ? new Date(publishInfo.ts).toLocaleString('ko-KR') : ''}
          </span>
          <a href="/p/progress-tracker/" target="_blank" rel="noopener noreferrer"
            className="text-[16px] text-[#15803D] underline hover:text-[#166534]">
            {t(lang, 'openPublicUrl')}
          </a>
        </div>
      )}
    </header>
  )
}
