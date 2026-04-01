import React, { useState, useEffect, useMemo } from 'react'
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
    title: 'Appendix — Prompt List',
    subtitle: 'GEO KPI 측정에 사용되는 프롬프트 목록입니다.',
    filterCountry: '국가',
    filterDivision: 'Division',
    filterBranded: '유형',
    filterCEJ: 'CEJ',
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
    title: 'Appendix — Prompt List',
    subtitle: 'List of prompts used for GEO KPI measurement.',
    filterCountry: 'Country',
    filterDivision: 'Division',
    filterBranded: 'Type',
    filterCEJ: 'CEJ',
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

function Badge({ text, color }) {
  return (
    <span style={{
      display: 'inline-block', padding: '2px 8px', borderRadius: 4,
      fontSize: 11, fontWeight: 700, background: color + '22', color,
      whiteSpace: 'nowrap',
    }}>{text}</span>
  )
}

export default function AppendixPage({ lang = 'ko' }) {
  const [prompts, setPrompts] = useState([])
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState({ country: '', division: '', branded: '', cej: '' })
  const L = LABELS[lang] || LABELS.ko

  // Fetch appendix data from sync-data
  useEffect(() => {
    setLoading(true)
    fetchSyncData('dashboard')
      .then(d => setPrompts(d?.appendixPrompts || []))
      .catch(() => setPrompts([]))
      .finally(() => setLoading(false))
  }, [])

  // Extract unique values for filters
  const filterOptions = useMemo(() => ({
    country:  [...new Set(prompts.map(p => p.country))].filter(Boolean).sort(),
    division: [...new Set(prompts.map(p => p.division))].filter(Boolean).sort(),
    branded:  [...new Set(prompts.map(p => p.branded))].filter(Boolean).sort(),
    cej:      [...new Set(prompts.map(p => p.cej))].filter(Boolean).sort(),
  }), [prompts])

  const filtered = useMemo(() => {
    return prompts.filter(p => {
      if (filters.country && p.country !== filters.country) return false
      if (filters.division && p.division !== filters.division) return false
      if (filters.branded && p.branded !== filters.branded) return false
      if (filters.cej && p.cej !== filters.cej) return false
      return true
    })
  }, [prompts, filters])

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

  return (
    <div style={{ flex: 1, overflowY: 'auto', background: BG, padding: '32px 40px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <h2 style={{ fontSize: 24, fontWeight: 800, color: TEXT, marginBottom: 6 }}>{L.title}</h2>
        <p style={{ fontSize: 15, color: TEXT_DIM, marginBottom: 20 }}>{L.subtitle}</p>

        {/* Filters */}
        <div style={{ display: 'flex', gap: 12, marginBottom: 20, flexWrap: 'wrap' }}>
          {[
            { key: 'country', label: L.filterCountry },
            { key: 'division', label: L.filterDivision },
            { key: 'branded', label: L.filterBranded },
            { key: 'cej', label: L.filterCEJ },
          ].map(f => (
            <div key={f.key} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: TEXT_MUTED }}>{f.label}</span>
              <select
                value={filters[f.key]}
                onChange={e => setFilters(prev => ({ ...prev, [f.key]: e.target.value }))}
                style={{
                  background: CARD_BG, color: TEXT, border: `1px solid ${BORDER}`,
                  borderRadius: 6, padding: '4px 8px', fontSize: 12,
                  cursor: 'pointer', outline: 'none',
                }}
              >
                <option value="">{L.all}</option>
                {filterOptions[f.key].map(v => <option key={v} value={v}>{v}</option>)}
              </select>
            </div>
          ))}
          <span style={{ fontSize: 12, color: TEXT_MUTED, alignSelf: 'center', marginLeft: 8 }}>
            {L.total} {filtered.length}{L.items ? ` ${L.items}` : ''}
          </span>
        </div>

        {/* Table */}
        <div style={{ background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
            <thead>
              <tr style={{ background: 'rgba(15,23,42,0.6)' }}>
                <th style={thStyle}>#</th>
                <th style={thStyle}>{L.country}</th>
                <th style={{ ...thStyle, textAlign: 'left', minWidth: 300 }}>{L.prompt}</th>
                <th style={thStyle}>{L.division}</th>
                <th style={thStyle}>{L.category}</th>
                <th style={thStyle}>{L.branded}</th>
                <th style={thStyle}>{L.cej}</th>
                <th style={thStyle}>{L.topic}</th>
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
