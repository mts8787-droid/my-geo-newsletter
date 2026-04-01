import React, { useState, useEffect, useMemo, useRef } from 'react'
import { fetchSyncData } from '../shared/api.js'

const BG = '#0F172A'
const CARD_BG = '#1E293B'
const BORDER = '#334155'
const TEXT = '#E2E8F0'
const TEXT_DIM = '#94A3B8'
const TEXT_MUTED = '#64748B'
const LG_RED = '#A50034'

const DIVISION_COLORS = {
  MS: '#3B82F6', HS: '#10B981', ES: '#F59E0B', PR: '#8B5CF6',
}

const CEJ_COLORS = {
  Awareness: '#6366F1', Interest: '#3B82F6', Conversion: '#10B981',
}

const LABELS = {
  ko: {
    title: 'Prompt List',
    subtitle: 'GEO KPI 측정에 사용되는 프롬프트 목록입니다.',
    all: '전체',
    total: '총',
    items: '개',
    prompt: '프롬프트',
    country: '국가',
    division: 'Division',
    category: '카테고리',
    branded: '유형',
    cej: 'CEJ',
    topic: '토픽',
    noData: '동기화된 Prompt 데이터가 없습니다.\nVisibility 편집기에서 Google Sheets 동기화를 실행해 주세요.',
  },
  en: {
    title: 'Prompt List',
    subtitle: 'List of prompts used for GEO KPI measurement.',
    all: 'All',
    total: 'Total',
    items: '',
    prompt: 'Prompt',
    country: 'Country',
    division: 'Division',
    category: 'Category',
    branded: 'Type',
    cej: 'CEJ',
    topic: 'Topic',
    noData: 'No Prompt data synced.\nPlease run Google Sheets sync from the Visibility editor.',
  },
}

// 필터 가능한 컬럼 정의
const FILTER_COLUMNS = [
  { key: 'country',  dataKey: 'country' },
  { key: 'division', dataKey: 'division' },
  { key: 'category', dataKey: 'category' },
  { key: 'branded',  dataKey: 'branded' },
  { key: 'cej',      dataKey: 'cej' },
  { key: 'topic',    dataKey: 'topic' },
]

function Badge({ text, color }) {
  return (
    <span style={{
      display: 'inline-block', padding: '2px 8px', borderRadius: 4,
      fontSize: 11, fontWeight: 700, background: color + '22', color,
      whiteSpace: 'nowrap',
    }}>{text}</span>
  )
}

function ColumnFilterDropdown({ options, value, onChange, allLabel, onClose }) {
  const ref = useRef(null)
  useEffect(() => {
    function handleClick(e) { if (ref.current && !ref.current.contains(e.target)) onClose() }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [onClose])

  return (
    <div ref={ref} style={{
      position: 'absolute', top: '100%', left: 0, zIndex: 100,
      background: '#1E293B', border: `1px solid ${BORDER}`, borderRadius: 8,
      padding: 6, minWidth: 140, maxHeight: 240, overflowY: 'auto',
      boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
    }}>
      <div
        onClick={() => onChange('')}
        style={{
          padding: '5px 10px', borderRadius: 4, cursor: 'pointer', fontSize: 12,
          color: !value ? '#60A5FA' : TEXT_DIM, fontWeight: !value ? 700 : 400,
          background: !value ? 'rgba(96,165,250,0.1)' : 'transparent',
        }}
      >{allLabel}</div>
      {options.map(opt => (
        <div key={opt} onClick={() => onChange(opt)} style={{
          padding: '5px 10px', borderRadius: 4, cursor: 'pointer', fontSize: 12,
          color: value === opt ? '#60A5FA' : TEXT_DIM, fontWeight: value === opt ? 700 : 400,
          background: value === opt ? 'rgba(96,165,250,0.1)' : 'transparent',
          whiteSpace: 'nowrap',
        }}>{opt}</div>
      ))}
    </div>
  )
}

export default function AppendixPage({ lang = 'ko' }) {
  const [prompts, setPrompts] = useState([])
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState({})
  const [openFilter, setOpenFilter] = useState(null) // which column filter is open
  const L = LABELS[lang] || LABELS.ko

  useEffect(() => {
    setLoading(true)
    fetchSyncData('dashboard')
      .then(d => setPrompts(d?.appendixPrompts || []))
      .catch(() => setPrompts([]))
      .finally(() => setLoading(false))
  }, [])

  // Extract unique values for each filterable column
  const filterOptions = useMemo(() => {
    const opts = {}
    FILTER_COLUMNS.forEach(col => {
      opts[col.key] = [...new Set(prompts.map(p => p[col.dataKey]))].filter(Boolean).sort()
    })
    return opts
  }, [prompts])

  const filtered = useMemo(() => {
    return prompts.filter(p => {
      for (const col of FILTER_COLUMNS) {
        if (filters[col.key] && p[col.dataKey] !== filters[col.key]) return false
      }
      return true
    })
  }, [prompts, filters])

  // Count active filters
  const activeFilterCount = Object.values(filters).filter(Boolean).length

  if (loading) {
    return (
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', background: BG, color: TEXT_DIM }}>
        Loading...
      </div>
    )
  }

  if (prompts.length === 0) {
    return (
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', background: BG, color: TEXT_DIM, fontSize: 14, whiteSpace: 'pre-line', textAlign: 'center' }}>
        {L.noData}
      </div>
    )
  }

  function renderFilterableHeader(colKey, label) {
    const isOpen = openFilter === colKey
    const hasFilter = !!filters[colKey]
    return (
      <th style={{ ...thStyle, position: 'relative', cursor: 'pointer', userSelect: 'none' }}
        onClick={() => setOpenFilter(isOpen ? null : colKey)}
      >
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
          {label}
          <span style={{ fontSize: 9, color: hasFilter ? '#60A5FA' : '#64748B' }}>
            {hasFilter ? '▼' : '▽'}
          </span>
        </span>
        {isOpen && (
          <ColumnFilterDropdown
            options={filterOptions[colKey] || []}
            value={filters[colKey] || ''}
            onChange={val => { setFilters(prev => ({ ...prev, [colKey]: val })); setOpenFilter(null) }}
            allLabel={L.all}
            onClose={() => setOpenFilter(null)}
          />
        )}
      </th>
    )
  }

  return (
    <div style={{ flex: 1, overflowY: 'auto', background: BG, padding: '32px 40px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <h2 style={{ fontSize: 24, fontWeight: 800, color: TEXT, marginBottom: 6 }}>{L.title}</h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
          <p style={{ fontSize: 15, color: TEXT_DIM, margin: 0 }}>{L.subtitle}</p>
          <span style={{ fontSize: 12, color: TEXT_MUTED }}>
            {L.total} {filtered.length}{L.items ? ` ${L.items}` : ''}
            {activeFilterCount > 0 && (
              <span onClick={() => setFilters({})} style={{
                marginLeft: 8, cursor: 'pointer', color: '#60A5FA', fontSize: 11,
              }}>
                {lang === 'en' ? 'Clear filters' : '필터 초기화'}
              </span>
            )}
          </span>
        </div>

        {/* Table */}
        <div style={{ background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
            <thead>
              <tr style={{ background: 'rgba(15,23,42,0.6)' }}>
                <th style={thStyle}>#</th>
                {renderFilterableHeader('country', L.country)}
                <th style={{ ...thStyle, textAlign: 'left', minWidth: 300 }}>{L.prompt}</th>
                {renderFilterableHeader('division', L.division)}
                {renderFilterableHeader('category', L.category)}
                {renderFilterableHeader('branded', L.branded)}
                {renderFilterableHeader('cej', L.cej)}
                {renderFilterableHeader('topic', L.topic)}
              </tr>
            </thead>
            <tbody>
              {filtered.map((p, i) => (
                <tr key={i} style={{ borderTop: `1px solid ${BORDER}` }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(51,65,85,0.3)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                >
                  <td style={tdStyle}>{i + 1}</td>
                  <td style={tdStyle}><Badge text={p.country} color="#60A5FA" /></td>
                  <td style={{ ...tdStyle, textAlign: 'left', color: TEXT, fontWeight: 500 }}>{p.prompt}</td>
                  <td style={tdStyle}><Badge text={p.division} color={DIVISION_COLORS[p.division] || '#64748B'} /></td>
                  <td style={tdStyle}>{p.category}</td>
                  <td style={tdStyle}>
                    <Badge text={p.branded} color={p.branded === 'Brand' ? LG_RED : '#64748B'} />
                  </td>
                  <td style={tdStyle}><Badge text={p.cej} color={CEJ_COLORS[p.cej] || '#64748B'} /></td>
                  <td style={tdStyle}>{p.topic}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

const thStyle = {
  padding: '10px 12px', textAlign: 'center', fontSize: 11, fontWeight: 700,
  color: '#94A3B8', whiteSpace: 'nowrap',
}

const tdStyle = {
  padding: '8px 12px', textAlign: 'center', fontSize: 13,
  color: '#94A3B8', whiteSpace: 'nowrap',
}
