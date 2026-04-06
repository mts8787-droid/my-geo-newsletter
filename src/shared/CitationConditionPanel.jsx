import React, { useState, useMemo } from 'react'
import { LG_RED, FONT } from './constants.js'
import { Sparkles } from 'lucide-react'
import { inputStyle } from './components.jsx'
import { generateCitationInsight, generateCitationHowToRead, generateCitDomainInsight, generateCitDomainHowToRead, generateCitCntyInsight, generateCitCntyHowToRead } from './insights.js'
import { generateAIInsight } from './api.js'

// ── 리전/국가 매핑 ──────────────────────────────────────────────────────────
export const CITATION_REGIONS = [
  { key: 'NA',    label: 'North America', countries: ['US', 'CA'] },
  { key: 'EU',    label: 'Europe',        countries: ['UK', 'DE', 'ES'] },
  { key: 'APAC',  label: 'Asia Pacific',  countries: ['IN', 'AU', 'VN'] },
  { key: 'LATAM', label: 'Latin America', countries: ['MX', 'BR'] },
]

export const CITATION_COUNTRY_LABELS = {
  TTL: 'Total', US: '미국', CA: '캐나다', MX: '멕시코',
  UK: '영국', DE: '독일', ES: '스페인',
  IN: '인도', AU: '호주', VN: '베트남',
  BR: '브라질',
}

// 전체 국가코드 리스트 (TTL 제외)
const ALL_COUNTRIES = CITATION_REGIONS.flatMap(r => r.countries)

// ── Citation 조건 패널 ──────────────────────────────────────────────────────
export default function CitationConditionPanel({ meta, setMeta, resolved }) {
  const [expandedRegion, setExpandedRegion] = useState(null)

  // meta에서 Citation 국가 필터 읽기 (기본: 전체 ON)
  const cntyFilter = meta.citCntyFilter || {}
  const isCountryOn = (code) => cntyFilter[code] !== false

  // 리전 토글: 해당 리전의 모든 국가를 ON/OFF
  function toggleRegion(region) {
    const allOn = region.countries.every(c => isCountryOn(c))
    const updated = { ...cntyFilter }
    region.countries.forEach(c => { updated[c] = !allOn })
    setMeta(m => ({ ...m, citCntyFilter: updated }))
  }

  // 개별 국가 토글
  function toggleCountry(code) {
    setMeta(m => ({
      ...m,
      citCntyFilter: { ...(m.citCntyFilter || {}), [code]: !isCountryOn(code) }
    }))
  }

  // 리전 상태 계산
  function regionState(region) {
    const onCount = region.countries.filter(c => isCountryOn(c)).length
    if (onCount === region.countries.length) return 'all'
    if (onCount === 0) return 'none'
    return 'partial'
  }

  // 전체 선택/해제
  function toggleAll() {
    const allOn = ALL_COUNTRIES.every(c => isCountryOn(c))
    const updated = {}
    ALL_COUNTRIES.forEach(c => { updated[c] = !allOn })
    setMeta(m => ({ ...m, citCntyFilter: updated }))
  }

  const allOn = ALL_COUNTRIES.every(c => isCountryOn(c))

  const pillStyle = (active) => ({
    padding: '4px 10px', borderRadius: 16, border: 'none', cursor: 'pointer',
    background: active ? LG_RED : '#1E293B',
    color: active ? '#FFFFFF' : '#475569',
    fontSize: 11, fontWeight: 700, fontFamily: FONT,
    transition: 'all 0.15s',
  })

  const regionPillStyle = (state) => ({
    padding: '5px 12px', borderRadius: 16, border: 'none', cursor: 'pointer',
    background: state === 'all' ? '#166534' : state === 'partial' ? '#854D0E' : '#1E293B',
    color: state === 'all' ? '#86EFAC' : state === 'partial' ? '#FDE68A' : '#475569',
    fontSize: 11, fontWeight: 700, fontFamily: FONT,
    transition: 'all 0.15s',
  })

  return (
    <div style={{ marginBottom: 16 }}>
      {/* 타이틀 */}
      <p style={{ margin: '0 0 8px 2px', fontSize: 11, fontWeight: 700, color: '#475569',
        textTransform: 'uppercase', letterSpacing: 1, fontFamily: FONT }}>
        Citation 조건
      </p>

      {/* ── 섹션 표시 토글 ── */}
      <p style={{ margin: '0 0 6px 2px', fontSize: 10, color: '#64748B', fontFamily: FONT }}>섹션 표시</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginBottom: 12 }}>
        {[
          { key: 'showCitations', label: 'Citation' },
          { key: 'showCitDomain', label: '도메인별' },
          { key: 'showCitCnty',   label: '국가별' },
        ].map(({ key, label }) => (
          <button key={key} onClick={() => setMeta(m => ({ ...m, [key]: !m[key] }))}
            style={pillStyle(meta[key])}>
            {label}
          </button>
        ))}
      </div>

      {/* ── Top N 설정 ── */}
      <p style={{ margin: '0 0 6px 2px', fontSize: 10, color: '#64748B', fontFamily: FONT }}>표시 개수</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 12, alignItems: 'center' }}>
        <span style={{ fontSize: 10, color: '#64748B', fontFamily: FONT }}>카테고리</span>
        {[5, 10].map(n => (
          <button key={`citN${n}`} onClick={() => setMeta(m => ({ ...m, citationTopN: n }))}
            style={pillStyle(meta.citationTopN === n)}>
            Top {n}
          </button>
        ))}
        <span style={{ fontSize: 10, color: '#64748B', fontFamily: FONT, marginLeft: 6 }}>도메인</span>
        {[5, 10].map(n => (
          <button key={`domN${n}`} onClick={() => setMeta(m => ({ ...m, citDomainTopN: n }))}
            style={pillStyle(meta.citDomainTopN === n)}>
            Top {n}
          </button>
        ))}
      </div>

      <div style={{ height: 1, background: '#1E293B', marginBottom: 12 }} />

      {/* ── 리전/국가 필터 ── */}
      <p style={{ margin: '0 0 6px 2px', fontSize: 10, color: '#64748B', fontFamily: FONT }}>리전 / 국가 필터</p>

      {/* 전체 토글 */}
      <div style={{ marginBottom: 8 }}>
        <button onClick={toggleAll}
          style={{ ...pillStyle(allOn), padding: '3px 10px', fontSize: 10 }}>
          {allOn ? '전체 해제' : '전체 선택'}
        </button>
      </div>

      {/* 리전별 */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 12 }}>
        {CITATION_REGIONS.map(region => {
          const state = regionState(region)
          const isExpanded = expandedRegion === region.key
          return (
            <div key={region.key}>
              {/* 리전 행 */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                <button onClick={() => toggleRegion(region)}
                  style={regionPillStyle(state)}>
                  {region.label}
                </button>
                <button onClick={() => setExpandedRegion(isExpanded ? null : region.key)}
                  style={{ padding: '2px 6px', borderRadius: 4, border: 'none', cursor: 'pointer',
                    background: 'transparent', color: '#64748B', fontSize: 10, fontFamily: FONT }}>
                  {isExpanded ? '▾' : '▸'} {region.countries.filter(c => isCountryOn(c)).length}/{region.countries.length}
                </button>
              </div>
              {/* 국가 목록 (확장 시) */}
              {isExpanded && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginTop: 4, marginLeft: 12 }}>
                  {region.countries.map(code => (
                    <button key={code} onClick={() => toggleCountry(code)}
                      style={{ ...pillStyle(isCountryOn(code)), padding: '3px 8px', fontSize: 10 }}>
                      {CITATION_COUNTRY_LABELS[code] || code} ({code})
                    </button>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </div>

      <div style={{ height: 1, background: '#1E293B', marginBottom: 12 }} />

      {/* ── 도메인별 Citation 국가 표시 ON/OFF ── */}
      {(() => {
        const domainFilter = meta.citCntyDomainFilter || {}
        const enabledCountries = ALL_COUNTRIES.filter(c => isCountryOn(c))
        if (enabledCountries.length === 0) return null
        return (
          <div style={{ marginBottom: 12 }}>
            <p style={{ margin: '0 0 6px 2px', fontSize: 10, color: '#64748B', fontFamily: FONT }}>
              도메인별 Citation 국가 탭 표시
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
              {enabledCountries.map(code => {
                const isOn = domainFilter[code] !== false
                return (
                  <button key={code} onClick={() => setMeta(m => ({
                    ...m,
                    citCntyDomainFilter: { ...(m.citCntyDomainFilter || {}), [code]: !isOn }
                  }))}
                    style={{ ...pillStyle(isOn), padding: '3px 8px', fontSize: 10 }}>
                    {CITATION_COUNTRY_LABELS[code] || code}
                  </button>
                )
              })}
            </div>
          </div>
        )
      })()}

      <div style={{ height: 1, background: '#1E293B', marginBottom: 12 }} />

      {/* ── 콘텐츠 편집: Citation 인사이트/HowToRead ── */}
      <p style={{ margin: '0 0 8px 2px', fontSize: 10, color: '#64748B', fontFamily: FONT }}>콘텐츠 편집</p>

      {/* Category Citation 인사이트 */}
      <InsightEditor
        label="Citation 섹션 인사이트"
        value={meta.citationInsight}
        onChange={v => setMeta(m => ({ ...m, citationInsight: v }))}
        showKey="showCitationInsight"
        show={meta.showCitationInsight}
        onToggle={() => setMeta(m => ({ ...m, showCitationInsight: !m.showCitationInsight }))}
        onGenerate={async () => {
          try {
            setMeta(m => ({ ...m, citationInsight: '⏳ AI 생성 중...' }))
            const insight = await generateAIInsight('citation', { citations: resolved.citations }, 'ko')
            setMeta(m => ({ ...m, citationInsight: insight }))
          } catch (err) { console.error('[AI]', err); setMeta(m => ({ ...m, citationInsight: `[AI 실패: ${err.message}]\n\n` + generateCitationInsight(resolved.citations) })) }
        }}
        rows={12}
      />

      {/* Category Citation How to Read */}
      <InsightEditor
        label="Citation How to Read"
        value={meta.citationHowToRead}
        onChange={v => setMeta(m => ({ ...m, citationHowToRead: v }))}
        showKey="showCitationHowToRead"
        show={meta.showCitationHowToRead}
        onToggle={() => setMeta(m => ({ ...m, showCitationHowToRead: !m.showCitationHowToRead }))}
        onGenerate={async () => {
          try {
            setMeta(m => ({ ...m, citationHowToRead: '⏳ AI 생성 중...' }))
            const insight = await generateAIInsight('howToRead', { section: 'Citation 도메인별 현황' }, 'ko')
            setMeta(m => ({ ...m, citationHowToRead: insight }))
          } catch { setMeta(m => ({ ...m, citationHowToRead: generateCitationHowToRead() })) }
        }}
        rows={4}
      />

      {/* 도메인별 Citation 인사이트 */}
      <InsightEditor
        label="도메인별 Citation 인사이트"
        value={meta.citDomainInsight}
        onChange={v => setMeta(m => ({ ...m, citDomainInsight: v }))}
        showKey="showCitDomainInsight"
        show={meta.showCitDomainInsight}
        onToggle={() => setMeta(m => ({ ...m, showCitDomainInsight: !m.showCitDomainInsight }))}
        onGenerate={async () => {
          try {
            setMeta(m => ({ ...m, citDomainInsight: '⏳ AI 생성 중...' }))
            const insight = await generateAIInsight('citDomain', { citationsCnty: resolved.citationsCnty }, 'ko')
            setMeta(m => ({ ...m, citDomainInsight: insight }))
          } catch (err) { console.error('[AI]', err); setMeta(m => ({ ...m, citDomainInsight: `[AI 실패: ${err.message}]\n\n` + generateCitDomainInsight(resolved.citationsCnty) })) }
        }}
        rows={8}
      />

      {/* 도메인별 Citation How to Read */}
      <InsightEditor
        label="도메인별 Citation How to Read"
        value={meta.citDomainHowToRead}
        onChange={v => setMeta(m => ({ ...m, citDomainHowToRead: v }))}
        showKey="showCitDomainHowToRead"
        show={meta.showCitDomainHowToRead}
        onToggle={() => setMeta(m => ({ ...m, showCitDomainHowToRead: !m.showCitDomainHowToRead }))}
        onGenerate={async () => {
          try {
            setMeta(m => ({ ...m, citDomainHowToRead: '⏳ AI 생성 중...' }))
            const insight = await generateAIInsight('howToRead', { section: '도메인별 Citation 현황' }, 'ko')
            setMeta(m => ({ ...m, citDomainHowToRead: insight }))
          } catch { setMeta(m => ({ ...m, citDomainHowToRead: generateCitDomainHowToRead() })) }
        }}
        rows={4}
      />

      {/* 국가별 Citation 인사이트 */}
      <InsightEditor
        label="국가별 Citation 인사이트"
        value={meta.citCntyInsight}
        onChange={v => setMeta(m => ({ ...m, citCntyInsight: v }))}
        showKey="showCitCntyInsight"
        show={meta.showCitCntyInsight}
        onToggle={() => setMeta(m => ({ ...m, showCitCntyInsight: !m.showCitCntyInsight }))}
        onGenerate={async () => {
          try {
            setMeta(m => ({ ...m, citCntyInsight: '⏳ AI 생성 중...' }))
            const insight = await generateAIInsight('citCnty', { citationsCnty: resolved.citationsCnty }, 'ko')
            setMeta(m => ({ ...m, citCntyInsight: insight }))
          } catch (err) { console.error('[AI]', err); setMeta(m => ({ ...m, citCntyInsight: `[AI 실패: ${err.message}]\n\n` + generateCitCntyInsight(resolved.citationsCnty) })) }
        }}
        rows={8}
      />

      {/* 국가별 Citation How to Read */}
      <InsightEditor
        label="국가별 Citation How to Read"
        value={meta.citCntyHowToRead}
        onChange={v => setMeta(m => ({ ...m, citCntyHowToRead: v }))}
        showKey="showCitCntyHowToRead"
        show={meta.showCitCntyHowToRead}
        onToggle={() => setMeta(m => ({ ...m, showCitCntyHowToRead: !m.showCitCntyHowToRead }))}
        onGenerate={async () => {
          try {
            setMeta(m => ({ ...m, citCntyHowToRead: '⏳ AI 생성 중...' }))
            const insight = await generateAIInsight('howToRead', { section: '국가별 Citation 도메인' }, 'ko')
            setMeta(m => ({ ...m, citCntyHowToRead: insight }))
          } catch { setMeta(m => ({ ...m, citCntyHowToRead: generateCitCntyHowToRead() })) }
        }}
        rows={4}
      />
    </div>
  )
}

// ── 인사이트 편집 서브 컴포넌트 ─────────────────────────────────────────────
function InsightEditor({ label, value, onChange, show, onToggle, onGenerate, rows = 4 }) {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
        <p style={{ margin: 0, fontSize: 11, color: '#64748B', fontFamily: FONT }}>{label}</p>
        <div style={{ display: 'flex', gap: 4 }}>
          <button onClick={onGenerate}
            title="AI 인사이트 자동생성"
            style={{ padding: '2px 6px', borderRadius: 4, border: 'none', cursor: 'pointer',
              background: '#4F46E5', color: '#FFFFFF',
              fontSize: 11, fontWeight: 700, fontFamily: FONT, display: 'flex', alignItems: 'center', gap: 3 }}>
            <Sparkles size={9} /> AI 생성
          </button>
          <button onClick={onToggle}
            style={{ padding: '2px 8px', borderRadius: 4, border: 'none', cursor: 'pointer',
              background: show ? LG_RED : '#1E293B',
              color: show ? '#FFFFFF' : '#475569',
              fontSize: 11, fontWeight: 700, fontFamily: FONT }}>
            {show ? 'ON' : 'OFF'}
          </button>
        </div>
      </div>
      <textarea
        value={value}
        onChange={e => onChange(e.target.value)}
        rows={rows}
        placeholder={`${label}을 입력하세요...`}
        style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6, marginBottom: 8 }}
      />
    </>
  )
}
