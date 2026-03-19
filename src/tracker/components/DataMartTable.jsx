import React, { useState, useMemo } from 'react'
import StatusBadge from './StatusBadge'
import { ChevronUp, ChevronDown, ChevronsUpDown } from 'lucide-react'

const PAGE_SIZE = 50

export default function DataMartTable({ headers, data }) {
  const [page, setPage] = useState(0)
  const [sortKey, setSortKey] = useState(null)
  const [sortDir, setSortDir] = useState('asc')

  const sorted = useMemo(() => {
    if (!sortKey) return data
    return [...data].sort((a, b) => {
      const va = a[sortKey] ?? ''
      const vb = b[sortKey] ?? ''
      if (typeof va === 'number' && typeof vb === 'number') {
        return sortDir === 'asc' ? va - vb : vb - va
      }
      const cmp = String(va).localeCompare(String(vb), 'ko')
      return sortDir === 'asc' ? cmp : -cmp
    })
  }, [data, sortKey, sortDir])

  const totalPages = Math.ceil(sorted.length / PAGE_SIZE)
  const pageData = sorted.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE)

  const handleSort = (key) => {
    if (sortKey === key) {
      setSortDir(d => d === 'asc' ? 'desc' : 'asc')
    } else {
      setSortKey(key)
      setSortDir('asc')
    }
    setPage(0)
  }

  const isPFColumn = (h) => /^P[-\/]?F$|pass.*fail|결과|판정/i.test(h)
  const isUrlColumn = (h) => /url|링크|link/i.test(h)

  return (
    <div>
      <div className="overflow-x-auto rounded-xl border border-slate-700">
        <table className="w-full text-xs">
          <thead className="bg-slate-800/80 sticky top-0">
            <tr>
              <th className="text-left text-slate-500 font-semibold px-3 py-2 border-b border-slate-700 w-10">
                #
              </th>
              {headers.map(h => (
                <th
                  key={h}
                  onClick={() => handleSort(h)}
                  className="text-left text-slate-400 font-semibold px-3 py-2 border-b border-slate-700 whitespace-nowrap cursor-pointer hover:text-slate-200 select-none"
                >
                  <span className="inline-flex items-center gap-1">
                    {h}
                    {sortKey === h ? (
                      sortDir === 'asc' ? <ChevronUp size={12} /> : <ChevronDown size={12} />
                    ) : (
                      <ChevronsUpDown size={10} className="text-slate-600" />
                    )}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {pageData.map((row, i) => (
              <tr key={i} className="border-b border-slate-700/40 hover:bg-slate-800/50">
                <td className="px-3 py-2 text-slate-600">{page * PAGE_SIZE + i + 1}</td>
                {headers.map((h, j) => {
                  const val = row[h]
                  if (isPFColumn(h)) {
                    return <td key={j} className="px-3 py-2"><StatusBadge value={val} /></td>
                  }
                  if (isUrlColumn(h) && typeof val === 'string' && val.startsWith('http')) {
                    return (
                      <td key={j} className="px-3 py-2">
                        <a
                          href={val}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300 underline truncate block max-w-[300px]"
                          title={val}
                        >
                          {val.replace(/^https?:\/\//, '').slice(0, 50)}
                        </a>
                      </td>
                    )
                  }
                  return (
                    <td key={j} className="px-3 py-2 text-slate-300 whitespace-nowrap max-w-xs truncate">
                      {val === '' || val === null || val === undefined ? '-' : String(val)}
                    </td>
                  )
                })}
              </tr>
            ))}
            {pageData.length === 0 && (
              <tr>
                <td colSpan={headers.length + 1} className="text-center text-slate-500 py-8">
                  데이터가 없습니다
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between mt-3">
          <span className="text-xs text-slate-500">
            {sorted.length}건 중 {page * PAGE_SIZE + 1}-{Math.min((page + 1) * PAGE_SIZE, sorted.length)}
          </span>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setPage(0)}
              disabled={page === 0}
              className="px-2 py-1 text-xs rounded bg-slate-800 text-slate-400 hover:text-slate-200 disabled:opacity-30"
            >
              &laquo;
            </button>
            <button
              onClick={() => setPage(p => Math.max(0, p - 1))}
              disabled={page === 0}
              className="px-2 py-1 text-xs rounded bg-slate-800 text-slate-400 hover:text-slate-200 disabled:opacity-30"
            >
              &lsaquo;
            </button>
            <span className="px-3 py-1 text-xs text-slate-300">
              {page + 1} / {totalPages}
            </span>
            <button
              onClick={() => setPage(p => Math.min(totalPages - 1, p + 1))}
              disabled={page >= totalPages - 1}
              className="px-2 py-1 text-xs rounded bg-slate-800 text-slate-400 hover:text-slate-200 disabled:opacity-30"
            >
              &rsaquo;
            </button>
            <button
              onClick={() => setPage(totalPages - 1)}
              disabled={page >= totalPages - 1}
              className="px-2 py-1 text-xs rounded bg-slate-800 text-slate-400 hover:text-slate-200 disabled:opacity-30"
            >
              &raquo;
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
