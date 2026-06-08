// LLM Model 선택 드롭다운 — 5개 admin SPA 공용.
// 가용 LLM Model 자동 추출 + 선택 시 부모 콜백 호출.
import React from 'react'
import { getAvailableLlmModels } from './llmModel.js'

export default function LlmModelSelect({ value, onChange, products, productsCnty, monthlyVis, style }) {
  const available = React.useMemo(
    () => getAvailableLlmModels(products, productsCnty, monthlyVis),
    [products, productsCnty, monthlyVis]
  )
  if (!available.length || (available.length === 1 && available[0] === 'Total')) return null
  return (
    <label style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: '#475569', ...style }}>
      <span style={{ fontWeight: 600 }}>LLM Model</span>
      <select
        value={value || 'Total'}
        onChange={e => onChange(e.target.value)}
        style={{ padding: '4px 8px', borderRadius: 6, border: '1px solid #CBD5E1', fontSize: 13, background: '#fff', cursor: 'pointer' }}
      >
        {available.map(m => <option key={m} value={m}>{m}</option>)}
      </select>
    </label>
  )
}
