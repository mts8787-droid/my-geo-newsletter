// ─── Publish API (게시본 HTML 저장·조회·삭제) ─────────────────────────────
// 6종 채널: newsletter / dashboard / citation / monthly-report / visibility / tracker
import { Router } from 'express'
import { readFileSync, writeFileSync, existsSync, unlinkSync } from 'fs'
import { join } from 'path'
import { DATA_DIR, PUB_DIR } from '../lib/storage.js'
import { validateBody, PublishPostSchema, TrackerPublishSchema } from '../lib/validate.js'
import { logFor } from '../lib/logger.js'

const log = logFor('publish')
import { CHANNELS, readMetaFile, publishChannel, injectLangBar } from '../lib/publish-core.js'
import { runUnifiedPublish, readUnifiedPublishMeta, readPublishConfig, writePublishConfig } from '../lib/republish.mjs'
// 기존 import 경로 호환 (routes/landing.js · routes/published.js 가 여기서 가져감)
export { CHANNELS, readMetaFile }

function deleteIfExists(path, tag) {
  try { unlinkSync(path) } catch (e) {
    if (e.code !== 'ENOENT') log.warn({ tag, err: e.message }, 'delete failed')
  }
}

// ─── 월별 발행 채널용 슬러그 헬퍼 ─────────────────────────────────────────
function monthSuffix(slug, month) { return `${slug}-${month}` }
function isValidMonth(m) { return typeof m === 'string' && /^\d{4}-(0[1-9]|1[0-2])$/.test(m) }
function readMonthlyMeta(metaPath) {
  const m = readMetaFile(metaPath)
  if (m && m.months && typeof m.months === 'object') return m
  return { months: {} }
}
function monthlyEntry(ch, month) {
  const koSlug = monthSuffix(ch.koSlug, month)
  const enSlug = monthSuffix(ch.enSlug, month)
  return {
    koSlug, enSlug,
    koPath: join(PUB_DIR, `${koSlug}.html`),
    enPath: join(PUB_DIR, `${enSlug}.html`),
  }
}

// ─── 채널별 POST/GET/DELETE 핸들러 빌더 ───────────────────────────────────
function buildPostHandler(ch) {
  return (req, res) => {
    const { htmlKo, htmlEn, title } = req.body
    try {
      // 쓰기 본체는 lib/publish-core.js publishChannel — 서버 통합 게시(lib/republish.mjs)와 공유
      res.json(publishChannel(ch, { htmlKo, htmlEn, title }))
    } catch (err) {
      log.error({ tag: ch.logTag, err: err.message }, 'publish write failed')
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

// ─── 월별 발행 채널 핸들러 (newsletter 등 monthly: true) ─────────────────
function buildMonthlyPostHandler(ch) {
  return (req, res) => {
    const { htmlKo, htmlEn, title, month } = req.body
    if (!isValidMonth(month)) return res.status(400).json({ ok: false, error: 'month(YYYY-MM) 필수' })
    try {
      const e = monthlyEntry(ch, month)
      const finalKo = ch.injectLangBar ? injectLangBar(htmlKo, 'ko', e.koSlug, e.enSlug) : htmlKo
      const finalEn = ch.injectLangBar ? injectLangBar(htmlEn, 'en', e.koSlug, e.enSlug) : htmlEn
      writeFileSync(e.koPath, finalKo)
      writeFileSync(e.enPath, finalEn)
      const all = readMonthlyMeta(ch.metaFile)
      all.months[month] = { title: title || ch.title, ts: Date.now() }
      writeFileSync(ch.metaFile, JSON.stringify(all, null, 2))
      log.info({ tag: ch.logTag, month, title: all.months[month].title, koSlug: e.koSlug }, 'monthly published')
      res.json({ ok: true, month, urls: { ko: `/p/${e.koSlug}`, en: `/p/${e.enSlug}` }, ...all.months[month] })
    } catch (err) {
      log.error({ tag: ch.logTag, err: err.message }, 'monthly publish write failed')
      res.status(500).json({ ok: false, error: '파일 저장 실패: ' + err.message })
    }
  }
}
function buildMonthlyGetHandler(ch) {
  return (req, res) => {
    const all = readMonthlyMeta(ch.metaFile)
    const reqMonth = req.query.month
    if (reqMonth) {
      if (!isValidMonth(reqMonth)) return res.status(400).json({ error: 'month(YYYY-MM) 형식 오류' })
      const e = monthlyEntry(ch, reqMonth)
      const ko = existsSync(e.koPath), en = existsSync(e.enPath)
      const meta = all.months[reqMonth] || null
      return res.json({ month: reqMonth, published: ko && en, ko, en, ...(meta || {}), urls: { ko: `/p/${e.koSlug}`, en: `/p/${e.enSlug}` } })
    }
    const months = Object.entries(all.months || {})
      .map(([m, meta]) => {
        const e = monthlyEntry(ch, m)
        const ko = existsSync(e.koPath), en = existsSync(e.enPath)
        return { month: m, published: ko && en, ko, en, ...meta, urls: { ko: `/p/${e.koSlug}`, en: `/p/${e.enSlug}` } }
      })
      .filter(x => x.ko || x.en)
      .sort((a, b) => b.month.localeCompare(a.month))
    res.json({ months })
  }
}
function buildMonthlyDeleteHandler(ch) {
  return (req, res) => {
    const month = req.query.month
    if (!isValidMonth(month)) return res.status(400).json({ ok: false, error: 'month(YYYY-MM) 쿼리 필수' })
    const e = monthlyEntry(ch, month)
    deleteIfExists(e.koPath, ch.logTag)
    deleteIfExists(e.enPath, ch.logTag)
    const all = readMonthlyMeta(ch.metaFile)
    delete all.months[month]
    writeFileSync(ch.metaFile, JSON.stringify(all, null, 2))
    log.info({ tag: ch.logTag, month }, 'monthly unpublished')
    res.json({ ok: true, month })
  }
}

export const publishRouter = Router()

// 5개 채널 일괄 등록 (path는 /api/publish[-{key}])
// newsletter 는 월별 발행 모드 — 각 월(YYYY-MM)이 별도 정적 페이지
publishRouter.post('/api/publish', validateBody(PublishPostSchema), buildMonthlyPostHandler(CHANNELS.newsletter))
publishRouter.get('/api/publish', buildMonthlyGetHandler(CHANNELS.newsletter))
publishRouter.delete('/api/publish', buildMonthlyDeleteHandler(CHANNELS.newsletter))

publishRouter.post('/api/publish-dashboard', validateBody(PublishPostSchema), buildPostHandler(CHANNELS.dashboard))
publishRouter.get('/api/publish-dashboard', buildGetHandler(CHANNELS.dashboard))
publishRouter.delete('/api/publish-dashboard', buildDeleteHandler(CHANNELS.dashboard))

// Readability 독립 게시 — 서버 스냅샷 기반이라 body 검증 불필요 (클라이언트 HTML 미전송)
// Readability 게시 API 는 제거됨 (2026-08-27) —
// /p/GEO-Readability-Dashboard 가 요청 시 렌더라 게시 조작 자체가 불필요하다.
// (routes/published.js 의 전용 라우트 참조)

publishRouter.post('/api/publish-citation', validateBody(PublishPostSchema), buildPostHandler(CHANNELS.citation))
publishRouter.get('/api/publish-citation', buildGetHandler(CHANNELS.citation))
publishRouter.delete('/api/publish-citation', buildDeleteHandler(CHANNELS.citation))

publishRouter.post('/api/publish-monthly-report', validateBody(PublishPostSchema), buildPostHandler(CHANNELS['monthly-report']))
publishRouter.get('/api/publish-monthly-report', buildGetHandler(CHANNELS['monthly-report']))
publishRouter.delete('/api/publish-monthly-report', buildDeleteHandler(CHANNELS['monthly-report']))

publishRouter.post('/api/publish-visibility', validateBody(PublishPostSchema), buildPostHandler(CHANNELS.visibility))
publishRouter.get('/api/publish-visibility', buildGetHandler(CHANNELS.visibility))
publishRouter.delete('/api/publish-visibility', buildDeleteHandler(CHANNELS.visibility))

// ─── 통합 게시 (publish-all) — 시트 동기화 + 3개 대시보드 서버 렌더 + 일괄 게시 ──
// 브라우저가 HTML 을 만들어 보내는 개별 게시와 달리, 서버가 sync-data·스냅샷으로
// 직접 렌더한다 (lib/republish.mjs). 매일 00시 KST 자동 실행도 같은 함수를 쓴다.
let unifiedRunning = false  // 동시 실행 가드 (수동 클릭 + cron 겹침 방지)
publishRouter.post('/api/publish-all', async (req, res) => {
  if (unifiedRunning) return res.status(409).json({ ok: false, error: '통합 게시가 이미 실행 중입니다' })
  unifiedRunning = true
  try {
    const { sheetUrl, includeReadability } = req.body || {}
    if (typeof includeReadability === 'boolean') {
      writePublishConfig({ ...readPublishConfig(), includeReadability })
    }
    const result = await runUnifiedPublish({ sheetUrl, trigger: 'manual' })
    res.json(result)
  } catch (err) {
    log.error({ tag: 'PUBLISH-ALL', err: err.message }, 'unified publish failed')
    res.status(500).json({ ok: false, error: err.message })
  } finally {
    unifiedRunning = false
  }
})
publishRouter.get('/api/publish-all', (req, res) => {
  res.json({ lastRun: readUnifiedPublishMeta(), config: readPublishConfig(), running: unifiedRunning })
})

// 통합 이력 조회
publishRouter.get('/api/publish-history', (req, res) => {
  const result = {}
  for (const [key, ch] of Object.entries(CHANNELS)) {
    if (key === 'monthly-report' || key === 'visibility') continue // history는 newsletter/dashboard/citation 3종만
    if (ch.monthly) {
      // newsletter: 월별 발행 — 가장 최근 월을 latest 로 노출
      const all = readMonthlyMeta(ch.metaFile)
      const sorted = Object.entries(all.months || {})
        .map(([m, meta]) => {
          const e = monthlyEntry(ch, m)
          return { month: m, meta, ko: existsSync(e.koPath), en: existsSync(e.enPath), urls: { ko: `/p/${e.koSlug}`, en: `/p/${e.enSlug}` } }
        })
        .filter(x => x.ko || x.en)
        .sort((a, b) => b.month.localeCompare(a.month))
      const latest = sorted[0]
      result[key] = latest ? { ...latest.meta, month: latest.month, published: latest.ko && latest.en, urls: latest.urls, allMonths: sorted.map(s => ({ month: s.month, urls: s.urls, ts: s.meta?.ts })) } : null
    } else {
      const meta = readMetaFile(ch.metaFile)
      const ko = existsSync(join(PUB_DIR, `${ch.koSlug}.html`))
      const en = existsSync(join(PUB_DIR, `${ch.enSlug}.html`))
      result[key] = meta ? { ...meta, published: ko && en, urls: { ko: `/p/${ch.koSlug}`, en: `/p/${ch.enSlug}` } } : null
    }
  }
  res.json(result)
})

// ─── Progress Tracker (v2 only — geo-progress-tracker-v2 통합) ────────────
const TRACKER_V2_SNAP = join(DATA_DIR, 'tracker-v2-snapshot.json')
const TRACKER_V2_META = join(DATA_DIR, 'tracker-v2-meta.json')

publishRouter.post('/api/publish-tracker-v2', validateBody(TrackerPublishSchema), (req, res) => {
  const { data, dashboard, month } = req.body
  try {
    const snap = { ...data, _dashboard: dashboard || null, _month: month || null }
    writeFileSync(TRACKER_V2_SNAP, JSON.stringify(snap, null, 2))
    const meta = { title: 'GEO KPI Progress Tracker v2', ts: Date.now() }
    writeFileSync(TRACKER_V2_META, JSON.stringify(meta, null, 2))
    log.info({ tag: 'PUBLISH-TRACKER-V2', categoryStats: dashboard?.categoryStats?.length || 0 }, 'tracker v2 published')
    res.json({ ok: true, ...meta, url: '/p/progress-tracker-v2/' })
  } catch (err) {
    log.error({ tag: 'PUBLISH-TRACKER-V2', err: err.message }, 'tracker v2 write failed')
    res.status(500).json({ ok: false, error: '파일 저장 실패: ' + err.message })
  }
})

publishRouter.get('/api/publish-tracker-v2', (req, res) => {
  const meta = readMetaFile(TRACKER_V2_META)
  const hasData = existsSync(TRACKER_V2_SNAP)
  res.json({ published: !!meta && hasData, ...(meta || {}), url: '/p/progress-tracker-v2/' })
})

publishRouter.delete('/api/publish-tracker-v2', (req, res) => {
  deleteIfExists(TRACKER_V2_SNAP, 'PUBLISH-TRACKER-V2')
  deleteIfExists(TRACKER_V2_META, 'PUBLISH-TRACKER-V2')
  res.json({ ok: true })
})

// 공개(인증 불필요): /api/tracker-snapshot-v2
publishRouter.get('/api/tracker-snapshot-v2', (req, res) => {
  try {
    const data = JSON.parse(readFileSync(TRACKER_V2_SNAP, 'utf-8'))
    res.json({ ok: true, data })
  } catch {
    res.json({ ok: false, data: null })
  }
})
