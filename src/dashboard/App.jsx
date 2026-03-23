import React, { useState, useEffect } from 'react'
import { FONT, LG_RED } from '../shared/constants.js'

const TABS = [
  { key: 'visibility', label: 'Visibility' },
  { key: 'citation',   label: 'Citation' },
  { key: 'readability', label: 'Readability' },
  { key: 'tracker',    label: 'Progress Tracker' },
]

const IFRAME_PATHS = {
  visibility: { ko: '/p/GEO-KPI-Dashboard-KO', en: '/p/GEO-KPI-Dashboard-EN' },
  citation:   { ko: '/p/GEO-Citation-Dashboard-KO', en: '/p/GEO-Citation-Dashboard-EN' },
  tracker:    '/p/progress-tracker/',
}

const EDITOR_LINKS = {
  visibility:  '/admin/newsletter',
  citation:    '/admin/citation',
  readability: null,
  tracker:     '/admin/progress-tracker',
}

// ─── 스타일 토큰 ──────────────────────────────────────────────────────────────
const BG        = '#0F172A'
const CARD_BG   = '#1E293B'
const BORDER    = '#334155'
const TEXT       = '#E2E8F0'
const TEXT_DIM   = '#94A3B8'
const TEXT_MUTED = '#64748B'

// ─── 메인 앱 ──────────────────────────────────────────────────────────────────
export default function App() {
  const [activeTab, setActiveTab] = useState('visibility')
  const [lang, setLang] = useState('ko')
  const [publishData, setPublishData] = useState(null)
  const [trackerData, setTrackerData] = useState(null)

  // Fetch publish statuses
  useEffect(() => {
    fetch('/api/publish-history')
      .then(r => r.ok ? r.json() : null)
      .then(d => { if (d) setPublishData(d) })
      .catch(() => {})

    fetch('/api/publish-tracker')
      .then(r => r.ok ? r.json() : null)
      .then(d => { if (d) setTrackerData(d) })
      .catch(() => {})
  }, [])

  // Derive status for active tab
  function getTabStatus(tabKey) {
    if (tabKey === 'readability') return { published: false, urls: [] }
    if (tabKey === 'tracker') {
      if (!trackerData) return { published: false, urls: [] }
      return {
        published: !!trackerData.published,
        urls: trackerData.urls || (trackerData.url ? [trackerData.url] : []),
      }
    }
    if (!publishData) return { published: false, urls: [] }
    const key = tabKey === 'visibility' ? 'dashboard' : 'citation'
    const entry = publishData[key]
    if (!entry) return { published: false, urls: [] }
    return {
      published: !!entry.published,
      urls: entry.urls || (entry.url ? [entry.url] : []),
    }
  }

  const status = getTabStatus(activeTab)
  const hasLangToggle = activeTab === 'visibility' || activeTab === 'citation'
  const editorLink = EDITOR_LINKS[activeTab]

  // Build iframe src
  let iframeSrc = null
  if (activeTab === 'visibility' || activeTab === 'citation') {
    iframeSrc = IFRAME_PATHS[activeTab][lang]
  } else if (activeTab === 'tracker') {
    iframeSrc = IFRAME_PATHS.tracker
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', background: BG, fontFamily: FONT, color: TEXT }}>

      {/* ─── Top Bar: Tabs + Language Toggle ─── */}
      <div style={{
        height: 48, flexShrink: 0,
        borderBottom: `1px solid ${BORDER}`,
        background: 'rgba(15,23,42,0.95)', backdropFilter: 'blur(8px)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 20px',
      }}>
        {/* Tabs */}
        <div style={{ display: 'flex', gap: 2 }}>
          {TABS.map(tab => {
            const isActive = activeTab === tab.key
            return (
              <button key={tab.key} onClick={() => setActiveTab(tab.key)} style={{
                padding: '6px 16px', borderRadius: 6, border: 'none', cursor: 'pointer',
                background: isActive ? LG_RED : 'transparent',
                color: isActive ? '#FFFFFF' : TEXT_MUTED,
                fontSize: 12, fontWeight: 700, fontFamily: FONT,
                transition: 'background 0.15s, color 0.15s',
              }}>
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* Language Toggle */}
        {hasLangToggle && (
          <div style={{ display: 'flex', gap: 2, background: BG, borderRadius: 6, padding: 2 }}>
            {['ko', 'en'].map(l => (
              <button key={l} onClick={() => setLang(l)} style={{
                padding: '3px 10px', borderRadius: 5, border: 'none',
                background: lang === l ? LG_RED : 'transparent',
                color: lang === l ? '#FFFFFF' : TEXT_MUTED,
                fontSize: 10, fontWeight: 700, fontFamily: FONT, cursor: 'pointer',
              }}>
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* ─── Body: Sidebar + Main ─── */}
      <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>

        {/* ─── Left Sidebar ─── */}
        <div style={{
          width: 300, flexShrink: 0,
          borderRight: `1px solid ${BORDER}`,
          background: BG, overflowY: 'auto',
          padding: 20, display: 'flex', flexDirection: 'column', gap: 20,
        }}>
          {/* Tab Title */}
          <h2 style={{ margin: 0, fontSize: 18, fontWeight: 800, color: TEXT }}>
            {TABS.find(t => t.key === activeTab)?.label}
          </h2>

          {/* Readability placeholder */}
          {activeTab === 'readability' ? (
            <div style={{
              background: CARD_BG, borderRadius: 10, padding: 24,
              textAlign: 'center', color: TEXT_DIM, fontSize: 14,
            }}>
              준비 중
            </div>
          ) : (
            <>
              {/* Published Status */}
              <div style={{
                background: CARD_BG, borderRadius: 10, padding: 16,
                display: 'flex', flexDirection: 'column', gap: 12,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ fontSize: 12, fontWeight: 700, color: TEXT_DIM }}>발행 상태</span>
                  <span style={{
                    padding: '2px 8px', borderRadius: 4, fontSize: 10, fontWeight: 700,
                    background: status.published ? '#166534' : '#7F1D1D',
                    color: status.published ? '#86EFAC' : '#FCA5A5',
                  }}>
                    {status.published ? 'Published' : 'Unpublished'}
                  </span>
                </div>

                {/* Published URLs */}
                {status.urls.length > 0 && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <span style={{ fontSize: 11, fontWeight: 700, color: TEXT_DIM }}>발행 URL</span>
                    {status.urls.map((url, i) => (
                      <a key={i} href={url} target="_blank" rel="noopener noreferrer" style={{
                        fontSize: 11, color: '#60A5FA', wordBreak: 'break-all',
                        textDecoration: 'none',
                      }}
                        onMouseEnter={e => e.target.style.textDecoration = 'underline'}
                        onMouseLeave={e => e.target.style.textDecoration = 'none'}
                      >
                        {url}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Editor Link */}
              <a
                href={editorLink || '#'}
                onClick={e => { if (!editorLink) e.preventDefault() }}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  padding: '10px 16px', borderRadius: 8, border: 'none',
                  background: editorLink ? '#1D4ED8' : CARD_BG,
                  color: editorLink ? '#FFFFFF' : TEXT_MUTED,
                  fontSize: 13, fontWeight: 700, fontFamily: FONT,
                  textDecoration: 'none',
                  cursor: editorLink ? 'pointer' : 'default',
                  opacity: editorLink ? 1 : 0.5,
                }}>
                편집기 열기
              </a>
            </>
          )}
        </div>

        {/* ─── Main Content Area ─── */}
        <div style={{ flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
          {activeTab === 'readability' ? (
            <div style={{
              flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: TEXT_DIM, fontSize: 20, fontWeight: 700,
            }}>
              Coming Soon
            </div>
          ) : iframeSrc ? (
            <iframe
              key={`${activeTab}-${lang}`}
              src={iframeSrc}
              title={`${activeTab}-viewer`}
              style={{ width: '100%', height: '100%', border: 'none', background: '#F1F5F9' }}
            />
          ) : null}
        </div>
      </div>

      {/* ─── Version Footer ─── */}
      <div style={{
        height: 28, flexShrink: 0,
        borderTop: `1px solid ${BORDER}`,
        background: 'rgba(15,23,42,0.95)',
        display: 'flex', alignItems: 'center', justifyContent: 'flex-end',
        padding: '0 16px',
      }}>
        <span style={{ fontSize: 10, color: TEXT_MUTED, fontFamily: FONT }}>v{__APP_VERSION__}</span>
      </div>
    </div>
  )
}
