import { RefreshCw, ChevronDown, Globe, Trash2 } from 'lucide-react'
import { MONTHS } from '../utils/constants'

export default function Header({ onRefresh, loading, selectedMonth, setSelectedMonth, isPublic, onPublish, publishing, publishInfo, onUnpublish }) {
  return (
    <header className="sticky top-0 z-30 bg-slate-900/90 backdrop-blur border-b border-slate-800">
      <div className="max-w-[1400px] mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="w-2 h-6 rounded-full bg-[#CF0652]" />
          <h1 className="text-base font-bold text-white tracking-tight">GEO KPI Tracker</h1>
          {isPublic
            ? <span className="text-[11px] text-emerald-400 font-medium ml-1 bg-emerald-500/10 px-2 py-0.5 rounded">Published</span>
            : <span className="text-[11px] text-slate-500 font-medium ml-1">Admin</span>
          }
        </div>

        <div className="flex items-center gap-3">
          {/* 월 선택 */}
          <div className="relative">
            <select
              value={selectedMonth}
              onChange={e => setSelectedMonth(e.target.value)}
              className="appearance-none bg-slate-800 border border-slate-700 rounded-lg px-3 py-1.5 pr-8 text-xs font-bold text-white cursor-pointer hover:border-slate-600 focus:outline-none focus:border-[#CF0652] transition-colors"
            >
              {MONTHS.map(m => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
            <ChevronDown size={14} className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
          </div>

          {/* 관리자 전용 버튼 */}
          {!isPublic && (
            <>
              <button
                onClick={onRefresh}
                disabled={loading}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs text-slate-400 hover:text-white hover:bg-slate-800 transition-colors disabled:opacity-40"
              >
                <RefreshCw size={14} className={loading ? 'animate-spin' : ''} />
                새로고침
              </button>

              <button
                onClick={onPublish}
                disabled={publishing}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-violet-600 hover:bg-violet-500 text-white transition-colors disabled:opacity-50"
              >
                <Globe size={14} className={publishing ? 'animate-spin' : ''} />
                {publishing ? '게시 중...' : '웹 게시'}
              </button>

              {publishInfo?.published && (
                <button
                  onClick={onUnpublish}
                  className="flex items-center gap-1 px-2 py-1.5 rounded-lg text-xs text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-colors"
                  title="게시 취소"
                >
                  <Trash2 size={12} />
                </button>
              )}
            </>
          )}
        </div>
      </div>

      {/* 게시 상태 바 (관리자 모드) */}
      {!isPublic && publishInfo?.published && (
        <div className="bg-emerald-900/20 border-t border-emerald-800/30 px-4 py-1.5 flex items-center justify-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[11px] text-emerald-400">
            게시됨 — {publishInfo.ts ? new Date(publishInfo.ts).toLocaleString('ko-KR') : ''}
          </span>
          <a
            href="/p/progress-tracker/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] text-emerald-400 underline hover:text-emerald-300"
          >
            공개 URL 열기
          </a>
        </div>
      )}
    </header>
  )
}
