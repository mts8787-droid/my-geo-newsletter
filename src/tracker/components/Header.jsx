import { RefreshCw, ChevronDown } from 'lucide-react'
import { MONTHS } from '../utils/constants'

export default function Header({ onRefresh, loading, selectedMonth, setSelectedMonth }) {
  return (
    <header className="sticky top-0 z-30 bg-slate-900/90 backdrop-blur border-b border-slate-800">
      <div className="max-w-[1400px] mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="w-2 h-6 rounded-full bg-[#CF0652]" />
          <h1 className="text-base font-bold text-white tracking-tight">GEO KPI Tracker</h1>
          <span className="text-[11px] text-slate-500 font-medium ml-1">Progress Dashboard</span>
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

          <button
            onClick={onRefresh}
            disabled={loading}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs text-slate-400 hover:text-white hover:bg-slate-800 transition-colors disabled:opacity-40"
          >
            <RefreshCw size={14} className={loading ? 'animate-spin' : ''} />
            새로고침
          </button>
        </div>
      </div>
    </header>
  )
}
