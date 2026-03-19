import React from 'react'

export default function StatusBadge({ value }) {
  const isPass = /^P$|pass|통과|적합/i.test(String(value))
  const isFail = /^F$|fail|미통과|부적합/i.test(String(value))

  if (isPass) {
    return (
      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold bg-emerald-500/15 text-emerald-400 ring-1 ring-emerald-500/30">
        P
      </span>
    )
  }
  if (isFail) {
    return (
      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold bg-red-500/15 text-red-400 ring-1 ring-red-500/30">
        F
      </span>
    )
  }
  return (
    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs text-slate-500">
      {String(value || '-')}
    </span>
  )
}
