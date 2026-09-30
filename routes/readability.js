// Readability (GEO 어딧) 대시보드 라우트 — GET /admin/readability
// data/readability/ 의 최신 스냅샷을 요청 시 읽어 render-readability 에 주입.
// 데이터는 .gitignore (/data/) — 로컬 내부 데이터. 인증 게이트 (/admin/*) 안.

import { Router } from 'express'
import { localizeUrlsCsv } from '../src/shared/readabilityCsv.js'
import { readFileSync, writeFileSync, existsSync, readdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import { renderReadabilityHTML } from '../scripts/render-readability.mjs'
import { renderCriteriaHTML, loadRows } from '../scripts/render-criteria.mjs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const DATA_DIR = join(__dirname, '..', 'data', 'readability')

// DATA_DIR 에서 정규식 매칭 파일 중 사전순 마지막(=최신 날짜) 반환 — csv/checks 공용.
function latestFile(re) {
  if (!existsSync(DATA_DIR)) return null
  const files = readdirSync(DATA_DIR).filter(f => re.test(f)).sort()
  return files.length ? files[files.length - 1] : null
}

// 절대경로 파일을 스트리밍 서빙(ETag/Last-Modified/304) — 대용량(fails 3MB) 반복 read 방지.
function sendFileTyped(res, file, contentType) {
  res.set('Content-Type', contentType)
  res.sendFile(file, err => { if (err && !res.headersSent) res.status(500).end() })
}

// channel: 'published'(기본) — staging 스냅샷을 제외한 최신. 공개 게시본(/p/*)과
//          뉴스레터 요약이 쓴다.
//          'staging' — staging 포함 전체의 최신. 내부 스테이징 대시보드
//          (/admin/readability)가 쓴다. 테스트 어딧을 공개 전에 전체 화면으로
//          검수하기 위한 채널 분리 (사용자 결정 2026-09-28).
// channel 필드가 없는 기존 스냅샷은 published 로 취급한다.
export function loadLatest(channel = 'published') {
  if (!existsSync(DATA_DIR)) return { snapshot: null, index: null }
  let index = null
  const indexPath = join(DATA_DIR, 'index.json')
  if (existsSync(indexPath)) {
    try { index = JSON.parse(readFileSync(indexPath, 'utf8')) } catch { index = null }
  }
  const inChannel = (e) => channel === 'staging' || (e.channel || 'published') !== 'staging'
  // 최신 날짜 결정: index 우선, 없으면 디렉토리 스캔
  let latestDate = null
  let channelEntries = null
  if (index && Array.isArray(index.snapshots) && index.snapshots.length) {
    channelEntries = index.snapshots.filter(inChannel)
    if (channelEntries.length) latestDate = channelEntries[channelEntries.length - 1].date
  } else {
    const files = readdirSync(DATA_DIR).filter(f => /^\d{4}-\d{2}-\d{2}\.json$/.test(f)).sort()
    if (files.length) latestDate = files[files.length - 1].replace('.json', '')
  }
  if (!latestDate) return { snapshot: null, index, snapshots: [] }
  const snapPath = join(DATA_DIR, `${latestDate}.json`)
  if (!existsSync(snapPath)) return { snapshot: null, index, snapshots: [] }
  let snapshot = null
  try { snapshot = JSON.parse(readFileSync(snapPath, 'utf8')) } catch { snapshot = null }
  if (!snapshot) return { snapshot: null, index, snapshots: [] }
  // 월별 최신 스냅샷 목록 (측정 월 필터용) — 같은 달 복수 측정 시 그 달의 최신만.
  // 단, 월 dedup 은 published 끼리만 한다: staging 스냅샷(예: 9/29 베네룩스 2개국)이
  // 같은 달의 published 확정본(9/20 11개국)을 가리면 스테이징 대시보드에서
  // 확정본이 사라진다 (2026-09-30 실측). staging 은 별도 항목으로 추가 노출.
  const byMonth = {}
  const entries = (channelEntries && channelEntries.length)
    ? channelEntries
    : [{ date: latestDate }]
  entries.filter(e => (e.channel || 'published') !== 'staging')
    .forEach(({ date: d }) => {
      const m = String(d).slice(0, 7)
      if (!byMonth[m] || byMonth[m] < d) byMonth[m] = d
    })
  const dateList = new Set(Object.values(byMonth))
  entries.filter(e => (e.channel || 'published') === 'staging')
    .forEach(({ date: d }) => dateList.add(d))
  dateList.add(latestDate)
  const snapshots = [...dateList].sort().map(d => {
    if (d === latestDate) return snapshot
    const p = join(DATA_DIR, `${d}.json`)
    if (!existsSync(p)) return null
    try { return JSON.parse(readFileSync(p, 'utf8')) } catch { return null }
  }).filter(Boolean)
  return { snapshot, index, snapshots }
}

export const latestCsvFile = () => latestFile(/^urls-\d{4}-\d{2}-\d{2}\.csv$/)
export const latestChecksFile = () => latestFile(/^checks-\d{4}-\d{2}-\d{2}\.json$/)
// 채널 분리 후에는 '최신 파일'이 아니라 해당 스냅샷 날짜의 파일을 서빙한다.
export const csvFileFor = (date) => {
  const f = `urls-${date}.csv`
  return existsSync(join(DATA_DIR, f)) ? f : latestCsvFile()
}
export const checksFileFor = (date) => {
  const f = `checks-${date}.json`
  return existsSync(join(DATA_DIR, f)) ? f : latestChecksFile()
}
export { DATA_DIR as READABILITY_DATA_DIR }

export const readabilityRouter = Router()

// ?lang=en 으로 영문본. 게시본(/p/GEO-Readability-Dashboard-EN)과 같은 렌더러를 쓴다.
readabilityRouter.get('/admin/readability', (req, res) => {
  // 어드민 = 스테이징 대시보드: staging 포함 최신을 공개본과 동일한 화면으로 렌더.
  const { snapshot, index, snapshots } = loadLatest('staging')
  const lang = String(req.query.lang || '').toLowerCase() === 'en' ? 'en' : 'ko'
  res.set('Content-Type', 'text/html; charset=utf-8')
  let html = renderReadabilityHTML({ snapshot, index, snapshots, adminMode: true, lang })
  if (snapshot && (snapshot.channel || 'published') === 'staging') {
    const banner = `<div style="position:sticky;top:0;z-index:999;background:#b45309;color:#fff;` +
      `padding:10px 16px;font:600 13px/-apple-system,sans-serif;display:flex;align-items:center;gap:12px;">` +
      `<span>⚠ STAGING — ${snapshot.date} 테스트 어딧 (공개 대시보드에는 반영되지 않음)</span>` +
      `<button onclick="if(confirm('${snapshot.date} 스냅샷을 공개 대시보드로 승격할까요?'))` +
      `fetch('/admin/readability/promote/${snapshot.date}',{method:'POST'})` +
      `.then(r=>r.json()).then(j=>{alert(j.ok?'승격 완료 — 공개 대시보드에 반영됩니다.':'실패: '+j.error);location.reload()})" ` +
      `style="background:#fff;color:#b45309;border:0;border-radius:6px;padding:4px 12px;font-weight:700;cursor:pointer;">` +
      `공개로 승격</button></div>`
    html = html.replace(/(<body[^>]*>)/i, `$1${banner}`)
  }
  res.send(html)
})

// staging 스냅샷 승격 — channel 을 published 로 전환 (스냅샷 파일 + index 양쪽).
readabilityRouter.post('/admin/readability/promote/:date', (req, res) => {
  const date = String(req.params.date || '')
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return res.status(400).json({ ok: false, error: '날짜 형식 오류' })
  const snapPath = join(DATA_DIR, `${date}.json`)
  if (!existsSync(snapPath)) return res.status(404).json({ ok: false, error: '스냅샷 없음' })
  try {
    const snap = JSON.parse(readFileSync(snapPath, 'utf8'))
    snap.channel = 'published'
    snap.promotedAt = new Date().toISOString()
    writeFileSync(snapPath, JSON.stringify(snap))
    const indexPath = join(DATA_DIR, 'index.json')
    const idx = JSON.parse(readFileSync(indexPath, 'utf8'))
    for (const e of idx.snapshots || []) if (e.date === date) { e.channel = 'published' }
    writeFileSync(indexPath, JSON.stringify(idx, null, 2))
    res.json({ ok: true, date })
  } catch (e) {
    res.status(500).json({ ok: false, error: e.message })
  }
})

// 뉴스레터 Highlight 섹션용 요약 — 최신 스냅샷에서 필요한 것만 추려 반환.
// 뉴스레터 어드민(React)이 이걸 fetch 해 generateEmailHTML 의 options.readability 로 넘긴다.
// 전체 스냅샷(390KB)을 그대로 물리면 미리보기가 무거워지므로 수 KB 로 압축.
readabilityRouter.get('/api/readability-summary', (req, res) => {
  const { snapshot } = loadLatest('published')
  if (!snapshot) return res.status(404).json({ ok: false, error: 'Readability 스냅샷 없음' })
  const o = snapshot.overall
  const rate = (scope, cid) => {
    const c = (scope.checks || {})[cid]
    return c && c.applicable ? +(c.pass / c.applicable * 100).toFixed(1) : null
  }
  // 본문에서 인용하는 체크만 (전체 38개를 다 싣지 않음)
  const CITED = ['ai_ssr_ratio', 'a11y_heading_hier', 'seo_h1', 'seo_meta_desc', 'seo_sitemap', 'ai_citable', 'ai_author_source']
  const checks = {}
  for (const cid of CITED) {
    const c = (o.checks || {})[cid]
    if (!c) continue
    checks[cid] = { label: c.label, rate: rate(o, cid) }
  }
  const byPt = {}
  for (const [id, v] of Object.entries(o.pageTypes || {})) {
    byPt[id] = { label: v.label, avgScore: v.avgScore, checks: Object.fromEntries(CITED.map(c => [c, rate(v, c)])) }
  }
  res.json({
    ok: true,
    date: snapshot.date,
    urlCount: o.urlCount,
    avgScore: o.avgScore,
    countryCount: Object.keys(snapshot.countries || {}).length,
    categoryLabels: snapshot.categoryLabels,
    categories: o.categories,
    countries: Object.entries(snapshot.countries || {})
      .map(([cc, v]) => ({ cc, avgScore: v.avgScore, checks: Object.fromEntries(CITED.map(c => [c, rate(v, c)])) }))
      .sort((a, b) => b.avgScore - a.avgScore),
    pageTypes: byPt,
    checks,
  })
})

// 검수 기준 체크리스트 (self-host) — 원본 onrender 가 x-frame-options:DENY 라 iframe 불가 → 동일출처 서빙
readabilityRouter.get('/admin/readability/checklist.html', (req, res) => {
  const file = join(DATA_DIR, 'geo-agent-checklist.html')
  if (!existsSync(file)) return res.status(404).send('체크리스트 HTML 없음 — data/readability/geo-agent-checklist.html 필요')
  res.set('Content-Type', 'text/html; charset=utf-8')
  res.send(readFileSync(file, 'utf8'))
})

// 검수 기준 전체 항목표 (점수 제외) — 대시보드 '검수 기준' 탭이 iframe 으로 임베드.
// 웹 게시본(/p/GEO-Readability-Criteria)과 같은 내용이되 통과율 열만 뺀다 —
// 기준 문서로서 읽히게 하고, 실측치는 대시보드 본문에서 보게 분리.
readabilityRouter.get('/admin/readability/criteria.html', (req, res) => {
  try {
    const rows = loadRows()
    res.set('Content-Type', 'text/html; charset=utf-8')
    res.send(renderCriteriaHTML({ rows, snapshot: null, withScores: false, lang: String(req.query.lang || '').toLowerCase() === 'en' ? 'en' : 'ko' }))
  } catch (e) {
    res.status(404).send(`검수 기준 생성 실패 — ${e.message}`)
  }
})

// Raw 데이터(PASS+FAIL) — 최신 checks-<date>.json. "Raw 데이터" 탭이 조합 필터로 사용.
readabilityRouter.get('/admin/readability/checks.json', (req, res) => {
  const { snapshot } = loadLatest('staging')
  const file = snapshot ? checksFileFor(snapshot.date) : latestChecksFile()
  if (!file) return res.status(404).json({ error: 'raw 데이터 없음 — node scripts/aggregate-readability.mjs 실행 필요' })
  sendFileTyped(res, join(DATA_DIR, file), 'application/json; charset=utf-8')
})

// 검수 URL 목록 다운로드 — 최신 urls-<date>.csv (URL · 국가 · 페이지타입 · 점수)
readabilityRouter.get('/admin/readability/urls.csv', (req, res) => {
  const { snapshot } = loadLatest('staging')
  const file = snapshot ? csvFileFor(snapshot.date) : latestCsvFile()
  if (!file) return res.status(404).send('검수 URL CSV 없음 — node scripts/aggregate-readability.mjs 실행 필요')
  // ?lang=en 이면 page_type 컬럼을 영문 라벨로 변환 (CSV 원본은 한 벌)
  const lang = String(req.query.lang || '').toLowerCase() === 'en' ? 'en' : 'ko'
  const body = localizeUrlsCsv(readFileSync(join(DATA_DIR, file), 'utf8'), lang)
  const name = lang === 'en' ? file.replace(/\.csv$/, '-en.csv') : file
  res.set('Content-Type', 'text/csv; charset=utf-8')
  res.set('Content-Disposition', `attachment; filename="${name}"`)
  res.send(body)
})
