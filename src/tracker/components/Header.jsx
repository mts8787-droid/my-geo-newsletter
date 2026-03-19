import React from 'react'
import { RefreshCw } from 'lucide-react'

const TABS = [
  { key: 'overview', label: 'Overview' },
  { key: 'hs', label: 'HS' },
  { key: 'hs-mgmt', label: 'HS 관리' },
]

export default function Header({ activeTab, onTabChange, onRefresh, loading }) {
  return (
    <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">
          {/* Left: logo + back */}
          <div className="flex items-center gap-3">
            <a
              href="/admin/"
              className="text-slate-500 hover:text-slate-300 text-sm transition-colors"
            >
              &larr;
            </a>
            <h1 className="text-sm font-bold text-slate-50 tracking-wide">
              GEO Progress Tracker
            </h1>
          </div>

          {/* Center: tabs */}
          <nav className="flex items-center gap-1 bg-slate-800 rounded-lg p-0.5">
            {TABS.map(tab => (
              <button
                key={tab.key}
                onClick={() => onTabChange(tab.key)}
                className={`px-4 py-1.5 rounded-md text-xs font-semibold transition-all ${
                  activeTab === tab.key
                    ? 'bg-[#CF0652] text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>

          {/* Right: refresh */}
          <button
            onClick={onRefresh}
            disabled={loading}
            className="p-2 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-colors disabled:opacity-50"
            title="데이터 새로고침"
          >
            <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
          </button>
        </div>
      </div>
    </header>
  )
}
