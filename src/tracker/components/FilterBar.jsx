import React from 'react'
import { X } from 'lucide-react'

export default function FilterBar({ filterOptions, filters, onFilterChange, onClearAll }) {
  if (!filterOptions || Object.keys(filterOptions).length === 0) return null

  // Show only filterable columns (those with reasonable number of unique values)
  const filterableKeys = Object.keys(filterOptions).filter(k => {
    const opts = filterOptions[k]
    return opts && opts.length >= 2 && opts.length <= 50
  })

  const hasActiveFilters = Object.values(filters).some(v => v !== '')

  return (
    <div className="flex flex-wrap items-center gap-2">
      {filterableKeys.map(key => (
        <select
          key={key}
          value={filters[key] || ''}
          onChange={e => onFilterChange(key, e.target.value)}
          className="bg-slate-800 border border-slate-700 text-slate-300 text-xs rounded-lg px-3 py-1.5 outline-none focus:border-[#CF0652] transition-colors"
        >
          <option value="">{key} (전체)</option>
          {filterOptions[key].map(opt => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      ))}
      {hasActiveFilters && (
        <button
          onClick={onClearAll}
          className="flex items-center gap-1 text-xs text-slate-400 hover:text-slate-200 px-2 py-1.5 rounded-lg hover:bg-slate-800 transition-colors"
        >
          <X size={12} /> 필터 초기화
        </button>
      )}
    </div>
  )
}
