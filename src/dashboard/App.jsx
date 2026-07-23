import React, { useState, useEffect, useCallback } from 'react'
import { FONT, LG_RED } from '../shared/constants.js'
import { generateDashboardHTML } from './dashboardTemplate.js'
import { resolveDataForLang } from '../shared/utils.js'
import { publishCombinedDashboard, publishReadability, fetchReadabilityStatus } from '../shared/api.js'
import GlossaryPage from './GlossaryPage.jsx'

const TABS = [
  { key: 'visibility', label: 'Visibility' },
  { key: 'citation',   label: 'Citation' },
  { key: 'readability', label: 'Readability' },
  { key: 'tracker',    label: 'Progress Tracker' },
  { key: 'glossary',   label: 'Glossary' },
]

const TAB_KEYS = TABS.map(t => t.key)

const IFRAME_PATHS = {
  visibility: { ko: '/p/GEO-Visibility-Dashboard-KO', en: '/p/GEO-Visibility-Dashboard-EN' },
  citation:   { ko: '/p/GEO-Citation-Dashboard-KO', en: '/p/GEO-Citation-Dashboard-EN' },
  tracker:    '/p/progress-tracker-v2/',
}

const EDITOR_LINKS = {
  visibility:  '/admin/visibility',
  citation:    '/admin/citation',
  readability: null,
  tracker:     '/admin/progress-tracker-v2/',
  glossary:    null,
}

// ─── 스타일 토큰 ──────────────────────────────────────────────────────────────
const BG        = '#0F172A'
const CARD_BG   = '#1E293B'
const BORDER    = '#334155'
const TEXT       = '#E2E8F0'
const TEXT_DIM   = '#94A3B8'
const TEXT_MUTED = '#64748B'

function getTabFromHash() {
  const hash = window.location.hash.replace('#', '')
  return TAB_KEYS.includes(hash) ? hash : 'visibility'
}

// ─── 메인 앱 ──────────────────────────────────────────────────────────────────
export default function App() {
  const [activeTab, setActiveTab] = useState(getTabFromHash)
  const [lang, setLang] = useState('ko')
  const [publishData, setPublishData] = useState(null)
  const [trackerData, setTrackerData] = useState(null)
  const [publishing, setPublishing] = useState(false)
  const [publishMsg, setPublishMsg] = useState('')
  const [includeReadability, setIncludeReadability] = useState(false)  // 기본 미포함
  const [readPublishing, setReadPublishing] = useState(false)
  const [readPublishMsg, setReadPublishMsg] = useState('')
  const [readStatus, setReadStatus] = useState(null)

  // Hash routing
  useEffect(() => {
    function onHashChange() {
      setActiveTab(getTabFromHash())
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const navigateTab = useCallback((key) => {
    window.location.hash = '#' + key
  }, [])

  // Fetch publish statuses
  useEffect(() => {
    fetch('/api/publish-history')
      .then(r => r.ok ? r.json() : null)
      .then(d => { if (d) setPublishData(d) })
      .catch(() => {})

    fetch('/api/publish-tracker-v2')
      .then(r => r.ok ? r.json() : null)
      .then(d => { if (d) setTrackerData(d) })
      .catch(() => {})
  }, [])

  // Readability 게시 상태 조회
  useEffect(() => { fetchReadabilityStatus().then(setReadStatus) }, [])

  // Readability 독립 게시 (별도 URL) — 게시 후 통합 대시보드 뷰어가 이 게시본을 재사용
  async function handlePublishReadability() {
    if (readPublishing) return
    setReadPublishing(true); setReadPublishMsg('')
    try {
      const result = await publishReadability()
      setReadPublishMsg(`게시 완료!\n${window.location.origin}${result.url}`)
      fetchReadabilityStatus().then(setReadStatus)
    } catch (err) {
      setReadPublishMsg('ERROR: ' + err.message)
    } finally {
      setReadPublishing(false)
      setTimeout(() => setReadPublishMsg(''), 15000)
    }
  }

  // 통합 대시보드 게시
  async function handlePublishCombined() {
    if (publishing) return
    setPublishing(true); setPublishMsg('')
    try {
      const result = await publishCombinedDashboard(generateDashboardHTML, resolveDataForLang, { includeReadability })
      setPublishMsg(`게시 완료!\nKO: ${window.location.origin}${result.urls.ko}\nEN: ${window.location.origin}${result.urls.en}`)
      fetch('/api/publish-history').then(r => r.ok ? r.json() : null).then(d => { if (d) setPublishData(d) })
    } catch (err) {
      setPublishMsg('ERROR: ' + err.message)
    } finally {
      setPublishing(false)
      setTimeout(() => setPublishMsg(''), 15000)
    }
  }

  // Derive status for active tab
  function getTabStatus(tabKey) {
    if (tabKey === 'readability') return { published: false, urls: [] }
    if (tabKey === 'glossary') {
      // Glossary는 통합 대시보드에 포함되어 게시됨
      if (!publishData) return { published: false, urls: [] }
      const entry = publishData['dashboard']
      if (!entry) return { published: false, urls: [] }
      const u = entry.urls
      const urlList = u && typeof u === 'object' && !Array.isArray(u)
        ? Object.values(u) : Array.isArray(u) ? u : (entry.url ? [entry.url] : [])
      return { published: !!entry.published, urls: urlList }
    }
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
    const u = entry.urls
    const urlList = u && typeof u === 'object' && !Array.isArray(u)
      ? Object.values(u)
      : Array.isArray(u) ? u : (entry.url ? [entry.url] : [])
    return {
      published: !!entry.published,
      urls: urlList,
    }
  }

  const status = getTabStatus(activeTab)
  const editorLink = EDITOR_LINKS[activeTab]

  // Build iframe src
  let iframeSrc = null
  if (activeTab === 'visibility' || activeTab === 'citation') {
    iframeSrc = IFRAME_PATHS[activeTab][lang]
  } else if (activeTab === 'tracker') {
    iframeSrc = IFRAME_PATHS.tracker + '?lang=' + lang
  } else if (activeTab === 'readability') {
    iframeSrc = '/admin/readability'  // 자체 서버 렌더 HTML (KO 단독, lang 무관)
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
              <button key={tab.key} onClick={() => navigateTab(tab.key)} style={{
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

        {/* Language Toggle — always visible */}
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

          {/* Readability — GEO 어딧 대시보드 (자체 서버 렌더, 우측 임베드) */}
          {activeTab === 'readability' ? (
            <>
              <div style={{
                background: CARD_BG, borderRadius: 10, padding: 16,
                color: TEXT_DIM, fontSize: 13, lineHeight: 1.7,
              }}>
                {lang === 'en'
                  ? 'GEO audit readability scores across countries — page types, categories, and per-check pass rates.'
                  : 'GEO 어딧 가독성(Readability) 점수 — 국가·페이지타입·카테고리·체크별 통과율을 집계한 대시보드입니다.'}
              </div>
              <a href="/admin/readability" target="_blank" rel="noopener noreferrer" style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                padding: '10px 16px', borderRadius: 8, border: 'none',
                background: '#1D4ED8', color: '#FFFFFF',
                fontSize: 13, fontWeight: 700, fontFamily: FONT,
                textDecoration: 'none', cursor: 'pointer',
              }}>
                {lang === 'en' ? 'Open full screen' : '전체 화면으로 열기'}
              </a>
              <a href="/admin/readability/urls.csv" style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                padding: '10px 16px', borderRadius: 8, border: `1px solid ${BORDER}`,
                background: 'transparent', color: TEXT,
                fontSize: 13, fontWeight: 700, fontFamily: FONT,
                textDecoration: 'none', cursor: 'pointer',
              }}>
                {lang === 'en' ? 'Download URL CSV' : '검수 URL CSV 다운로드'}
              </a>

              {/* Readability 독립 웹 게시 (별도 URL) */}
              <button onClick={handlePublishReadability} disabled={readPublishing}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  padding: '10px 16px', borderRadius: 8, border: 'none', width: '100%',
                  background: '#166534', color: '#86EFAC',
                  fontSize: 13, fontWeight: 700, fontFamily: FONT,
                  cursor: readPublishing ? 'wait' : 'pointer', opacity: readPublishing ? 0.6 : 1,
                }}>
                {readPublishing ? (lang === 'en' ? 'Publishing...' : '게시 중...') : (lang === 'en' ? 'Publish Readability (web)' : 'Readability 웹 게시')}
              </button>
              {readStatus?.published && (
                <a href={readStatus.url} target="_blank" rel="noopener noreferrer" style={{
                  fontSize: 11, color: '#86EFAC', textDecoration: 'none', textAlign: 'center', fontFamily: FONT,
                }}>
                  {lang === 'en' ? 'View published: ' : '게시본 보기: '}{readStatus.url}
                </a>
              )}
              {readPublishMsg && (
                <pre style={{ fontSize: 10, color: readPublishMsg.startsWith('ERROR') ? '#FCA5A5' : '#86EFAC', whiteSpace: 'pre-wrap', margin: 0, lineHeight: 1.5 }}>{readPublishMsg}</pre>
              )}
            </>
          ) : (
            <>
              {/* 탭 설명 (glossary) */}
              {activeTab === 'glossary' && (
                <div style={{
                  background: CARD_BG, borderRadius: 10, padding: 16,
                  color: TEXT_DIM, fontSize: 13, lineHeight: 1.7,
                }}>
                  {lang === 'en'
                    ? 'Reference for GEO terminology used across all dashboards.'
                    : 'GEO 대시보드 전반에서 사용되는 주요 용어 설명입니다.'}
                </div>
              )}

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
              {editorLink && (
                <a href={editorLink} style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  padding: '10px 16px', borderRadius: 8, border: 'none',
                  background: '#1D4ED8', color: '#FFFFFF',
                  fontSize: 13, fontWeight: 700, fontFamily: FONT,
                  textDecoration: 'none', cursor: 'pointer',
                }}>
                  편집기 열기
                </a>
              )}

              {/* Readability 포함 여부 (기본 미포함) */}
              <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: '#CBD5E1', fontFamily: FONT, cursor: 'pointer', marginBottom: 2 }}>
                <input type="checkbox" checked={includeReadability} onChange={e => setIncludeReadability(e.target.checked)} style={{ cursor: 'pointer' }} />
                Readability 포함
              </label>

              {/* 통합 대시보드 게시 버튼 */}
              <button onClick={handlePublishCombined} disabled={publishing}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  padding: '10px 16px', borderRadius: 8, border: 'none', width: '100%',
                  background: '#166534', color: '#86EFAC',
                  fontSize: 13, fontWeight: 700, fontFamily: FONT,
                  cursor: publishing ? 'wait' : 'pointer',
                  opacity: publishing ? 0.6 : 1,
                }}>
                {publishing ? '게시 중...' : '통합 대시보드 게시'}
              </button>
              {publishMsg && (
                <pre style={{ fontSize: 10, color: publishMsg.startsWith('ERROR') ? '#FCA5A5' : '#86EFAC', whiteSpace: 'pre-wrap', margin: 0, lineHeight: 1.5 }}>{publishMsg}</pre>
              )}
            </>
          )}
        </div>

        {/* ─── Main Content Area ─── */}
        <div style={{ flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
          {activeTab === 'glossary' ? (
            <GlossaryPage lang={lang} />
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
