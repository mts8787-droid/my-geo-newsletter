// ─── Publish API (게시본 HTML 저장·조회·삭제) ─────────────────────────────
// 6종 채널: newsletter / dashboard / citation / monthly-report / visibility / tracker
import { Router } from 'express'
import { readFileSync, writeFileSync, existsSync, unlinkSync } from 'fs'
import { join } from 'path'
import { DATA_DIR, PUB_DIR } from '../lib/storage.js'

// ─── 채널별 슬러그·메타 파일 매핑 ──────────────────────────────────────────
export const CHANNELS = {
  newsletter: {
    koSlug: 'GEO-Monthly-Report-KO',
    enSlug: 'GEO-Monthly-Report-EN',
    metaFile: join(DATA_DIR, 'publish-meta.json'),
    title: 'GEO Monthly Report',
    injectLangBar: true,
    logTag: 'PUBLISH',
  },
  dashboard: {
    koSlug: 'GEO-KPI-Dashboard-KO',
    enSlug: 'GEO-KPI-Dashboard-EN',
    metaFile: join(DATA_DIR, 'dashboard-meta.json'),
    title: 'GEO KPI Dashboard',
    logTag: 'PUBLISH-DASH',
  },
  citation: {
    koSlug: 'GEO-Citation-Dashboard-KO',
    enSlug: 'GEO-Citation-Dashboard-EN',
    metaFile: join(DATA_DIR, 'citation-meta.json'),
    title: 'GEO Citation Dashboard',
    logTag: 'PUBLISH-CIT',
  },
  'monthly-report': {
    koSlug: 'GEO-Monthly-Report-Internal-KO',
    enSlug: 'GEO-Monthly-Report-Internal-EN',
    metaFile: join(DATA_DIR, 'monthly-report-meta.json'),
    title: 'GEO Monthly Report',
    logTag: 'PUBLISH-MR',
  },
  visibility: {
    koSlug: 'GEO-Visibility-Dashboard-KO',
    enSlug: 'GEO-Visibility-Dashboard-EN',
    metaFile: join(DATA_DIR, 'visibility-meta.json'),
    title: 'GEO Visibility Dashboard',
    logTag: 'PUBLISH-VIS',
  },
}

// ─── 공통 언어 전환 바 (newsletter용) ─────────────────────────────────────
function makeLangBarHtml(activeLang, koSlug, enSlug) {
  const btn = (lang, label, href) => {
    const active = lang === activeLang
    return `<a href="${href}" style="display:inline-block;font-size:13px;text-decoration:none;padding:6px 18px;border-radius:20px;margin:0 4px;color:${active ? '#FFFFFF' : '#94A3B8'};font-weight:${active ? '700' : '500'};background:${active ? '#CF0652' : 'rgba(255,255,255,0.08)'};">${label}</a>`
  }
  return `<div style="background:#0F172A;padding:12px 0;text-align:center;font-family:'LG Smart','Arial Narrow',Arial,sans-serif;">${btn('ko','한국어','/p/'+koSlug)}${btn('en','English','/p/'+enSlug)}</div>`
}
function injectLangBar(html, lang, koSlug, enSlug) {
  const bar = makeLangBarHtml(lang, koSlug, enSlug)
  if (html.match(/<body[^>]*>/i)) return html.replace(/(<body[^>]*>)/i, `$1${bar}`)
  return bar + html
}

export function readMetaFile(metaPath) {
  try { return JSON.parse(readFileSync(metaPath, 'utf-8')) } catch { return null }
}

function deleteIfExists(path, tag) {
  try { unlinkSync(path) } catch (e) {
    if (e.code !== 'ENOENT') console.error(`[${tag}] Delete error:`, e.message)
  }
}

// ─── 채널별 POST/GET/DELETE 핸들러 빌더 ───────────────────────────────────
function buildPostHandler(ch) {
  return (req, res) => {
    const { htmlKo, htmlEn, title } = req.body || {}
    if (!htmlKo || !htmlEn) return res.status(400).json({ ok: false, error: 'htmlKo, htmlEn 필수' })
    try {
      const koPath = join(PUB_DIR, `${ch.koSlug}.html`)
      const enPath = join(PUB_DIR, `${ch.enSlug}.html`)
      const finalKo = ch.injectLangBar ? injectLangBar(htmlKo, 'ko', ch.koSlug, ch.enSlug) : htmlKo
      const finalEn = ch.injectLangBar ? injectLangBar(htmlEn, 'en', ch.koSlug, ch.enSlug) : htmlEn
      writeFileSync(koPath, finalKo)
      writeFileSync(enPath, finalEn)
      const meta = { title: title || ch.title, ts: Date.now() }
      writeFileSync(ch.metaFile, JSON.stringify(meta, null, 2))
      console.log(`[${ch.logTag}]`, meta.title, `-> /p/${ch.koSlug}, /p/${ch.enSlug}`)
      res.json({ ok: true, urls: { ko: `/p/${ch.koSlug}`, en: `/p/${ch.enSlug}` }, ...meta })
    } catch (err) {
      console.error(`[${ch.logTag}] Write error:`, err.message)
      res.status(500).json({ ok: false, error: '파일 저장 실패: ' + err.message })
    }
  }
}
function buildGetHandler(ch) {
  return (req, res) => {
    const meta = readMetaFile(ch.metaFile)
    const ko = existsSync(join(PUB_DIR, `${ch.koSlug}.html`))
    const en = existsSync(join(PUB_DIR, `${ch.enSlug}.html`))
    res.json({ published: ko && en, ko, en, ...(meta || {}), urls: { ko: `/p/${ch.koSlug}`, en: `/p/${ch.enSlug}` } })
  }
}
function buildDeleteHandler(ch) {
  return (req, res) => {
    deleteIfExists(join(PUB_DIR, `${ch.koSlug}.html`), ch.logTag)
    deleteIfExists(join(PUB_DIR, `${ch.enSlug}.html`), ch.logTag)
    deleteIfExists(ch.metaFile, ch.logTag)
    res.json({ ok: true })
  }
}

export const publishRouter = Router()

// 5개 채널 일괄 등록 (path는 /api/publish[-{key}])
publishRouter.post('/api/publish', buildPostHandler(CHANNELS.newsletter))
publishRouter.get('/api/publish', buildGetHandler(CHANNELS.newsletter))
publishRouter.delete('/api/publish', buildDeleteHandler(CHANNELS.newsletter))

publishRouter.post('/api/publish-dashboard', buildPostHandler(CHANNELS.dashboard))
publishRouter.get('/api/publish-dashboard', buildGetHandler(CHANNELS.dashboard))
publishRouter.delete('/api/publish-dashboard', buildDeleteHandler(CHANNELS.dashboard))

publishRouter.post('/api/publish-citation', buildPostHandler(CHANNELS.citation))
publishRouter.get('/api/publish-citation', buildGetHandler(CHANNELS.citation))
publishRouter.delete('/api/publish-citation', buildDeleteHandler(CHANNELS.citation))

publishRouter.post('/api/publish-monthly-report', buildPostHandler(CHANNELS['monthly-report']))
publishRouter.get('/api/publish-monthly-report', buildGetHandler(CHANNELS['monthly-report']))
publishRouter.delete('/api/publish-monthly-report', buildDeleteHandler(CHANNELS['monthly-report']))

publishRouter.post('/api/publish-visibility', buildPostHandler(CHANNELS.visibility))
publishRouter.get('/api/publish-visibility', buildGetHandler(CHANNELS.visibility))
publishRouter.delete('/api/publish-visibility', buildDeleteHandler(CHANNELS.visibility))

// 통합 이력 조회
publishRouter.get('/api/publish-history', (req, res) => {
  const result = {}
  for (const [key, ch] of Object.entries(CHANNELS)) {
    if (key === 'monthly-report' || key === 'visibility') continue // history는 newsletter/dashboard/citation 3종만
    const meta = readMetaFile(ch.metaFile)
    const ko = existsSync(join(PUB_DIR, `${ch.koSlug}.html`))
    const en = existsSync(join(PUB_DIR, `${ch.enSlug}.html`))
    result[key] = meta ? { ...meta, published: ko && en, urls: { ko: `/p/${ch.koSlug}`, en: `/p/${ch.enSlug}` } } : null
  }
  res.json(result)
})

// ─── Progress Tracker Publish (데이터 스냅샷) ─────────────────────────────
const TRACKER_SNAP = join(DATA_DIR, 'tracker-snapshot.json')
const TRACKER_META = join(DATA_DIR, 'tracker-meta.json')

publishRouter.post('/api/publish-tracker', (req, res) => {
  const { data, dashboard, month } = req.body || {}
  if (!data) return res.status(400).json({ ok: false, error: 'data 필수' })
  try {
    const snap = { ...data, _dashboard: dashboard || null, _month: month || null }
    writeFileSync(TRACKER_SNAP, JSON.stringify(snap, null, 2))
    const meta = { title: 'GEO KPI Progress Tracker', ts: Date.now() }
    writeFileSync(TRACKER_META, JSON.stringify(meta, null, 2))
    console.log('[PUBLISH-TRACKER]', new Date().toISOString(), 'categoryStats:', dashboard?.categoryStats?.length || 0)
    res.json({ ok: true, ...meta, url: '/p/progress-tracker/' })
  } catch (err) {
    console.error('[PUBLISH-TRACKER] Write error:', err.message)
    res.status(500).json({ ok: false, error: '파일 저장 실패: ' + err.message })
  }
})

publishRouter.get('/api/publish-tracker', (req, res) => {
  const meta = readMetaFile(TRACKER_META)
  const hasData = existsSync(TRACKER_SNAP)
  res.json({ published: !!meta && hasData, ...(meta || {}), url: '/p/progress-tracker/' })
})

publishRouter.delete('/api/publish-tracker', (req, res) => {
  deleteIfExists(TRACKER_SNAP, 'PUBLISH-TRACKER')
  deleteIfExists(TRACKER_META, 'PUBLISH-TRACKER')
  res.json({ ok: true })
})

// 공개(인증 불필요): /api/tracker-snapshot
// — 인증 미들웨어가 /api/tracker-snapshot을 화이트리스트로 통과시킴
publishRouter.get('/api/tracker-snapshot', (req, res) => {
  try {
    const data = JSON.parse(readFileSync(TRACKER_SNAP, 'utf-8'))
    res.json({ ok: true, data })
  } catch {
    res.json({ ok: false, data: null })
  }
})
