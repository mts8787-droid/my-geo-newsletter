// Readability (GEO 어딧) 대시보드 라우트 — GET /admin/readability
// data/readability/ 의 최신 스냅샷을 요청 시 읽어 render-readability 에 주입.
// 데이터는 .gitignore (/data/) — 로컬 내부 데이터. 인증 게이트 (/admin/*) 안.

import { Router } from 'express'
import { readFileSync, existsSync, readdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import { renderReadabilityHTML } from '../scripts/render-readability.mjs'

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

export function loadLatest() {
  if (!existsSync(DATA_DIR)) return { snapshot: null, index: null }
  let index = null
  const indexPath = join(DATA_DIR, 'index.json')
  if (existsSync(indexPath)) {
    try { index = JSON.parse(readFileSync(indexPath, 'utf8')) } catch { index = null }
  }
  // 최신 날짜 결정: index 우선, 없으면 디렉토리 스캔
  let latestDate = null
  if (index && Array.isArray(index.snapshots) && index.snapshots.length) {
    latestDate = index.snapshots[index.snapshots.length - 1].date
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
  // 월별 최신 스냅샷 목록 (측정 월 필터용) — 같은 달 복수 측정 시 그 달의 최신만
  const byMonth = {}
  const dates = (index && Array.isArray(index.snapshots) && index.snapshots.length)
    ? index.snapshots.map(s => s.date)
    : [latestDate]
  dates.forEach(d => {
    const m = String(d).slice(0, 7)
    if (!byMonth[m] || byMonth[m] < d) byMonth[m] = d
  })
  const snapshots = Object.values(byMonth).sort().map(d => {
    if (d === latestDate) return snapshot
    const p = join(DATA_DIR, `${d}.json`)
    if (!existsSync(p)) return null
    try { return JSON.parse(readFileSync(p, 'utf8')) } catch { return null }
  }).filter(Boolean)
  return { snapshot, index, snapshots }
}

const latestCsvFile = () => latestFile(/^urls-\d{4}-\d{2}-\d{2}\.csv$/)
const latestChecksFile = () => latestFile(/^checks-\d{4}-\d{2}-\d{2}\.json$/)

export const readabilityRouter = Router()

readabilityRouter.get('/admin/readability', (req, res) => {
  const { snapshot, index, snapshots } = loadLatest()
  res.set('Content-Type', 'text/html; charset=utf-8')
  res.send(renderReadabilityHTML({ snapshot, index, snapshots, adminMode: true }))
})

// 검수 기준 체크리스트 (self-host) — 원본 onrender 가 x-frame-options:DENY 라 iframe 불가 → 동일출처 서빙
readabilityRouter.get('/admin/readability/checklist.html', (req, res) => {
  const file = join(DATA_DIR, 'geo-agent-checklist.html')
  if (!existsSync(file)) return res.status(404).send('체크리스트 HTML 없음 — data/readability/geo-agent-checklist.html 필요')
  res.set('Content-Type', 'text/html; charset=utf-8')
  res.send(readFileSync(file, 'utf8'))
})

// Raw 데이터(PASS+FAIL) — 최신 checks-<date>.json. "Raw 데이터" 탭이 조합 필터로 사용.
readabilityRouter.get('/admin/readability/checks.json', (req, res) => {
  const file = latestChecksFile()
  if (!file) return res.status(404).json({ error: 'raw 데이터 없음 — node scripts/aggregate-readability.mjs 실행 필요' })
  sendFileTyped(res, join(DATA_DIR, file), 'application/json; charset=utf-8')
})

// 검수 URL 목록 다운로드 — 최신 urls-<date>.csv (URL · 국가 · 페이지타입 · 점수)
readabilityRouter.get('/admin/readability/urls.csv', (req, res) => {
  const file = latestCsvFile()
  if (!file) return res.status(404).send('검수 URL CSV 없음 — node scripts/aggregate-readability.mjs 실행 필요')
  res.set('Content-Type', 'text/csv; charset=utf-8')
  res.set('Content-Disposition', `attachment; filename="${file}"`)
  res.send(readFileSync(join(DATA_DIR, file), 'utf8'))
})
