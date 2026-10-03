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
    // 기본(첫 화면·뉴스레터 요약) 스냅샷은 최신 '정기' 어딧 — 비정기(adhoc)는 탭으로만.
    // 비정기(예: 9/29 베네룩스 2국)가 최신이라는 이유로 대시보드 얼굴·요약 수치가 되면 안 된다
    // (사용자 결정 2026-10-03). 정기가 하나도 없으면 전체 최신으로 폴백.
    const regulars = channelEntries.filter(e => (e.auditType || 'regular') !== 'adhoc')
    const pickFrom = regulars.length ? regulars : channelEntries
    if (pickFrom.length) latestDate = pickFrom[pickFrom.length - 1].date
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
  // dedup 키 = 월 + 커버 국가 구성. 같은 국가 구성의 재측정만 서로를 대체한다 —
  // 9/20(11국 확정본)과 9/29(베네룩스 2국)는 보완 관계라 둘 다 노출해야 한다
  // (2026-09-30: 승격 후 9/29 가 9/20 을 공개·스테이징 양쪽에서 가렸다).
  // dedup 키에 어딧 구분(정기/비정기)도 포함 — 비정기(adhoc) 스냅샷이 같은 달
  // 정기 확정본을 대체하지 않는다 (정기/비정기 탭 분리, 사용자 결정 2026-10-03).
  entries.filter(e => (e.channel || 'published') !== 'staging')
    .forEach(e => {
      const d = e.date
      const k = String(d).slice(0, 7) + '|' + (e.auditType || 'regular') + '|' +
        (Array.isArray(e.countries) ? [...e.countries].sort().join(',') : '')
      if (!byMonth[k] || byMonth[k] < d) byMonth[k] = d
    })
  const dateList = new Set(Object.values(byMonth))
  entries.filter(e => (e.channel || 'published') === 'staging')
    .forEach(({ date: d }) => dateList.add(d))
  dateList.add(latestDate)
  // 스냅샷 파일에 auditType 이 없으면 index 엔트리에서 백필 (구 스냅샷 호환)
  const typeByDate = Object.fromEntries(entries.map(e => [e.date, e.auditType || 'regular']))
  const snapshots = [...dateList].sort().map(d => {
    if (d === latestDate) return snapshot
    const p = join(DATA_DIR, `${d}.json`)
    if (!existsSync(p)) return null
    try { return JSON.parse(readFileSync(p, 'utf8')) } catch { return null }
  }).filter(Boolean)
  snapshots.forEach(s => { if (!s.auditType) s.auditType = typeByDate[s.date] || 'regular' })
  if (!snapshot.auditType) snapshot.auditType = typeByDate[snapshot.date] || 'regular'
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
  // 채널 상태 바 — 항상 표시. 승격 버튼이 '현재 스냅샷이 staging 일 때'만 뜨면
  // 승격 직후·월 전환 시 버튼이 사라져 조작 불가 (2026-09-30 사용자 리포트).
  // index 기준으로 staging 대기 목록 전체 + 최근 승격본의 되돌리기를 상시 노출한다.
  const entries = (index && index.snapshots) || []
  const stagingList = entries.filter(e => (e.channel || 'published') === 'staging')
  const promoted = [...entries].reverse().find(e => (e.channel || 'published') === 'published')
  const btn = (label, path, msg, color) =>
    `<button onclick="if(confirm('${msg}'))fetch('${path}',{method:'POST'})` +
    `.then(r=>r.json()).then(j=>{alert(j.ok?'완료':'실패: '+j.error);location.reload()})" ` +
    `style="background:#fff;color:${color};border:0;border-radius:6px;padding:3px 10px;` +
    `font-weight:700;cursor:pointer;margin-left:6px;">${label}</button>`
  let inner = ''
  if (stagingList.length) {
    inner = `<span>⚠ STAGING 대기: </span>` + stagingList.map(e =>
      `<span style="margin-right:4px;">${e.date} (${(e.countries || []).length}국, ${e.overallAvg})` +
      btn('공개로 승격', `/admin/readability/promote/${e.date}`,
          `${e.date} 스냅샷을 공개 대시보드로 승격할까요?`, '#b45309') + `</span>`).join('')
  } else {
    inner = `<span>스테이징 대기 스냅샷 없음 · 공개 최신: ${promoted ? promoted.date : '—'}</span>` +
      (promoted ? btn('스테이징으로 되돌리기', `/admin/readability/demote/${promoted.date}`,
          `${promoted.date} 를 공개에서 내리고 스테이징으로 되돌릴까요?`, '#475569') : '')
  }
  const bg = stagingList.length ? '#b45309' : '#475569'
  // 어딧 구분(정기/비정기) 전환 줄 — 스냅샷별 현재 구분 표시 + 반대 구분으로 전환 버튼
  const typeRow = entries.length
    ? `<div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;flex-basis:100%;` +
      `padding-top:6px;border-top:1px solid rgba(255,255,255,.25);">` +
      `<span style="opacity:.85;">어딧 구분:</span>` + entries.map(e => {
        const t = e.auditType || 'regular'
        const to = t === 'adhoc' ? 'regular' : 'adhoc'
        const label = t === 'adhoc' ? '비정기' : '정기'
        const toLabel = to === 'adhoc' ? '비정기' : '정기'
        return `<span style="background:rgba(255,255,255,.12);border-radius:6px;padding:2px 8px;">` +
          `${e.date} <b>${label}</b>` +
          btn(`${toLabel}로`, `/admin/readability/audit-type/${e.date}/${to}`,
              `${e.date} 를 ${toLabel} 어딧으로 전환할까요?`, '#475569') + `</span>`
      }).join('') + `</div>`
    : ''
  const banner = `<div style="position:sticky;top:0;z-index:999;background:${bg};color:#fff;` +
    `padding:8px 16px;font:600 12px -apple-system,sans-serif;display:flex;align-items:center;` +
    `gap:8px;flex-wrap:wrap;">${inner}` +
    `<span style="opacity:.7;font-weight:400;margin-left:auto;">승격/되돌리기 후에는 로컬 저장소 커밋 필요 (Render 재배포 시 초기화)</span>` +
    `${typeRow}</div>`
  html = html.replace(/(<body[^>]*>)/i, `$1${banner}`)
  res.send(html)
})

// 어딧 구분 전환 — 정기(regular) ↔ 비정기(adhoc). 스냅샷 파일 + index 양쪽 갱신.
// 대시보드의 '정기/비정기' 탭 분리와 짝 (사용자 결정 2026-10-03).
readabilityRouter.post('/admin/readability/audit-type/:date/:type', (req, res) => {
  const date = String(req.params.date || '')
  const type = String(req.params.type || '')
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return res.status(400).json({ ok: false, error: '날짜 형식 오류' })
  if (!['regular', 'adhoc'].includes(type)) return res.status(400).json({ ok: false, error: 'type 은 regular 또는 adhoc' })
  const snapPath = join(DATA_DIR, `${date}.json`)
  if (!existsSync(snapPath)) return res.status(404).json({ ok: false, error: '스냅샷 없음' })
  try {
    const snap = JSON.parse(readFileSync(snapPath, 'utf8'))
    snap.auditType = type
    writeFileSync(snapPath, JSON.stringify(snap))
    const indexPath = join(DATA_DIR, 'index.json')
    const idx = JSON.parse(readFileSync(indexPath, 'utf8'))
    for (const e of idx.snapshots || []) if (e.date === date) e.auditType = type
    writeFileSync(indexPath, JSON.stringify(idx, null, 2))
    res.json({ ok: true, date, auditType: type })
  } catch (e) {
    res.status(500).json({ ok: false, error: e.message })
  }
})

// 승격 취소 — channel 을 staging 으로 되돌린다 (실수 복구용).
readabilityRouter.post('/admin/readability/demote/:date', (req, res) => {
  const date = String(req.params.date || '')
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return res.status(400).json({ ok: false, error: '날짜 형식 오류' })
  const snapPath = join(DATA_DIR, `${date}.json`)
  if (!existsSync(snapPath)) return res.status(404).json({ ok: false, error: '스냅샷 없음' })
  try {
    const snap = JSON.parse(readFileSync(snapPath, 'utf8'))
    snap.channel = 'staging'
    delete snap.promotedAt
    writeFileSync(snapPath, JSON.stringify(snap))
    const idx = JSON.parse(readFileSync(join(DATA_DIR, 'index.json'), 'utf8'))
    for (const e of idx.snapshots || []) if (e.date === date) e.channel = 'staging'
    writeFileSync(join(DATA_DIR, 'index.json'), JSON.stringify(idx, null, 2))
    res.json({ ok: true, date })
  } catch (e) {
    res.status(500).json({ ok: false, error: e.message })
  }
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
