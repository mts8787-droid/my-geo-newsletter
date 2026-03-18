import React, { useState, useMemo } from 'react'
import FilterBar from './FilterBar'
import DataMartTable from './DataMartTable'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'
import { Loader2, AlertCircle, Link2, CheckCircle, XCircle } from 'lucide-react'

export default function HSDataMart({ data, loading, error }) {
  const [filters, setFilters] = useState({})

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="animate-spin text-slate-500" size={32} />
        <span className="ml-3 text-slate-400 text-sm">HS 관리 데이터 로딩 중... (대용량 데이터)</span>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-64 text-red-400 gap-2">
        <AlertCircle size={20} />
        <span className="text-sm">{error}</span>
      </div>
    )
  }

  if (!data) {
    return (
      <div className="flex items-center justify-center h-64 text-slate-500 text-sm">
        데이터를 불러오려면 새로고침 버튼을 누르세요
      </div>
    )
  }

  const { headers, data: allData, summary, filterOptions } = data

  // Apply filters
  const filteredData = useMemo(() => {
    return allData.filter(row => {
      return Object.entries(filters).every(([key, val]) => {
        if (!val) return true
        return String(row[key]) === val
      })
    })
  }, [allData, filters])

  // Recalculate summary for filtered data
  const pfField = headers.find(h => /^P[-\/]?F$|pass.*fail|결과|판정/i.test(h)) || 'P/F'
  const filteredPass = filteredData.filter(r => /^P$|pass|통과|적합/i.test(String(r[pfField]))).length
  const filteredFail = filteredData.filter(r => /^F$|fail|미통과|부적합/i.test(String(r[pfField]))).length
  const filteredPassRate = filteredData.length > 0 ? Math.round((filteredPass / filteredData.length) * 100) : 0

  const pieData = [
    { name: 'Pass', value: filteredPass, color: '#10B981' },
    { name: 'Fail', value: filteredFail, color: '#EF4444' },
  ]
  if (filteredData.length - filteredPass - filteredFail > 0) {
    pieData.push({ name: 'Other', value: filteredData.length - filteredPass - filteredFail, color: '#334155' })
  }

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }))
  }

  const clearFilters = () => setFilters({})

  const isFiltered = Object.values(filters).some(v => v !== '')

  return (
    <div className="space-y-5">
      {/* Summary Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-4">
          <div className="flex items-center gap-2 text-slate-400 mb-1">
            <Link2 size={14} />
            <span className="text-xs font-semibold">Total URLs</span>
          </div>
          <p className="text-2xl font-bold text-slate-50">{filteredData.length.toLocaleString()}</p>
          {isFiltered && (
            <p className="text-[10px] text-slate-500 mt-1">전체 {allData.length.toLocaleString()}</p>
          )}
        </div>
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-4">
          <div className="flex items-center gap-2 text-emerald-400 mb-1">
            <CheckCircle size={14} />
            <span className="text-xs font-semibold">Pass</span>
          </div>
          <p className="text-2xl font-bold text-emerald-400">{filteredPass.toLocaleString()}</p>
        </div>
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-4">
          <div className="flex items-center gap-2 text-red-400 mb-1">
            <XCircle size={14} />
            <span className="text-xs font-semibold">Fail</span>
          </div>
          <p className="text-2xl font-bold text-red-400">{filteredFail.toLocaleString()}</p>
        </div>
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 flex items-center gap-4">
          <div className="flex-1">
            <span className="text-xs font-semibold text-slate-400">Pass Rate</span>
            <p className="text-2xl font-bold text-slate-50">{filteredPassRate}%</p>
          </div>
          <div style={{ width: 60, height: 60 }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%" cy="50%"
                  innerRadius={18} outerRadius={28}
                  dataKey="value"
                  strokeWidth={0}
                >
                  {pieData.map((entry, i) => (
                    <Cell key={i} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-slate-800 border border-slate-700 rounded-xl p-4">
        <FilterBar
          filterOptions={filterOptions}
          filters={filters}
          onFilterChange={handleFilterChange}
          onClearAll={clearFilters}
        />
      </div>

      {/* Data Table */}
      <DataMartTable headers={headers} data={filteredData} />
    </div>
  )
}
