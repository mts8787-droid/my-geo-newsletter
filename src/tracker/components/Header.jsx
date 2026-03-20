import { RefreshCw, Globe, Trash2 } from 'lucide-react'
import { MONTHS, STAKEHOLDER_COLORS } from '../utils/constants'

export default function Header({
  onRefresh, loading, selectedMonth, setSelectedMonth,
  selectedSH, setSelectedSH, stakeholderList,
  isPublic, onPublish, publishing, publishInfo, onUnpublish,
}) {
  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur border-b border-gray-200 shadow-sm">
      <div className="max-w-[1400px] mx-auto px-4 py-3 flex items-center justify-between gap-3 flex-wrap">
        {/* Left: title */}
        <div className="flex items-center gap-3">
          <span className="w-2 h-6 rounded-full bg-[#CF0652]" />
          <h1 className="text-lg font-bold text-black tracking-tight">Stakeholders별 Action Item Progress Tracker</h1>
          {isPublic
            ? <span className="text-xs text-emerald-600 font-medium ml-1 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">Published</span>
            : <span className="text-xs text-gray-400 font-medium ml-1">Admin</span>
          }
        </div>

        {/* Center: month selector + stakeholder filter */}
        <div className="flex items-center gap-2 flex-wrap">
          {/* Month selector */}
          <select
            value={selectedMonth}
            onChange={e => setSelectedMonth(e.target.value)}
            className="appearance-none bg-gray-100 border border-gray-200 rounded-lg px-3 py-1.5 pr-8 text-sm font-bold text-gray-900 cursor-pointer hover:border-gray-300 focus:outline-none focus:border-[#CF0652] transition-colors"
          >
            {MONTHS.map(m => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>

          {/* Stakeholder filter buttons */}
          <div className="flex items-center gap-1 flex-wrap">
            {['전체', ...stakeholderList].map(sh => {
              const isActive = selectedSH === sh
              const color = sh === '전체' ? '#6B7280' : (STAKEHOLDER_COLORS[sh] || '#6B7280')
              return (
                <button
                  key={sh}
                  onClick={() => setSelectedSH(sh)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                    isActive
                      ? 'text-white shadow-sm'
                      : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                  }`}
                  style={isActive
                    ? { backgroundColor: color, color: '#fff' }
                    : { border: '1px solid transparent' }
                  }
                >
                  {sh}
                </button>
              )
            })}
          </div>
        </div>

        {/* Right: admin buttons */}
        <div className="flex items-center gap-2">
          {!isPublic && (
            <>
              <button
                onClick={onRefresh}
                disabled={loading}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors disabled:opacity-40"
              >
                <RefreshCw size={14} className={loading ? 'animate-spin' : ''} />
                새로고침
              </button>

              <button
                onClick={onPublish}
                disabled={publishing}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-bold bg-violet-600 hover:bg-violet-500 text-white transition-colors disabled:opacity-50"
              >
                <Globe size={14} className={publishing ? 'animate-spin' : ''} />
                {publishing ? '게시 중...' : '웹 게시'}
              </button>

              {publishInfo?.published && (
                <button
                  onClick={onUnpublish}
                  className="flex items-center gap-1 px-2 py-1.5 rounded-lg text-sm text-red-500 hover:text-red-600 hover:bg-red-50 transition-colors"
                  title="게시 취소"
                >
                  <Trash2 size={14} />
                </button>
              )}
            </>
          )}
        </div>
      </div>

      {/* Publish status bar */}
      {!isPublic && publishInfo?.published && (
        <div className="bg-emerald-50 border-t border-emerald-200 px-4 py-1.5 flex items-center justify-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs text-emerald-700">
            게시됨 — {publishInfo.ts ? new Date(publishInfo.ts).toLocaleString('ko-KR') : ''}
          </span>
          <a
            href="/p/progress-tracker/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-emerald-600 underline hover:text-emerald-800"
          >
            공개 URL 열기
          </a>
        </div>
      )}
    </header>
  )
}
