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

// 해석 리포트(감점 사유 종합) — 기본은 집계 시 커밋된 사본(data/readability/audit_report.txt).
// 이 사본은 aggregate-readability.mjs 가 매 실행 시 audit 원본에서 복사 → fails-<date>.json 과
// 같은 run 을 반영(두 탭 정합). 개발 머신에서 라이브 원본을 우선하려면 AUDIT_REPORT_PATH env 지정.
// (하드코딩 dev 절대경로 제거 — 서버 코드에 머신 종속 경로를 두지 않음.)
function resolveAuditReport() {
  const envPath = process.env.AUDIT_REPORT_PATH
  if (envPath && existsSync(envPath)) return envPath
  const local = join(DATA_DIR, 'audit_report.txt')
  return existsSync(local) ? local : null
}

// DATA_DIR 에서 정규식 매칭 파일 중 사전순 마지막(=최신 날짜) 반환 — csv/fails 공용.
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
  if (!latestDate) return { snapshot: null, index }
  const snapPath = join(DATA_DIR, `${latestDate}.json`)
  if (!existsSync(snapPath)) return { snapshot: null, index }
  try {
    return { snapshot: JSON.parse(readFileSync(snapPath, 'utf8')), index }
  } catch {
    return { snapshot: null, index }
  }
}

const latestCsvFile = () => latestFile(/^urls-\d{4}-\d{2}-\d{2}\.csv$/)
const latestFailsFile = () => latestFile(/^fails-\d{4}-\d{2}-\d{2}\.json$/)

export const readabilityRouter = Router()

readabilityRouter.get('/admin/readability', (req, res) => {
  const { snapshot, index } = loadLatest()
  res.set('Content-Type', 'text/html; charset=utf-8')
  res.send(renderReadabilityHTML({ snapshot, index, adminMode: true }))
})

// 검수 기준 체크리스트 (self-host) — 원본 onrender 가 x-frame-options:DENY 라 iframe 불가 → 동일출처 서빙
readabilityRouter.get('/admin/readability/checklist.html', (req, res) => {
  const file = join(DATA_DIR, 'geo-agent-checklist.html')
  if (!existsSync(file)) return res.status(404).send('체크리스트 HTML 없음 — data/readability/geo-agent-checklist.html 필요')
  res.set('Content-Type', 'text/html; charset=utf-8')
  res.send(readFileSync(file, 'utf8'))
})

// 해석 리포트(감점 사유 종합) 텍스트 — 대시보드 "해석 리포트" 탭이 fetch.
readabilityRouter.get('/admin/readability/audit-report.txt', (req, res) => {
  const file = resolveAuditReport()
  if (!file) return res.status(404).type('text/plain; charset=utf-8')
    .send('해석 리포트 없음 — audit_report.txt 가 없습니다 (AUDIT_REPORT_PATH 또는 data/readability/audit_report.txt).')
  sendFileTyped(res, file, 'text/plain; charset=utf-8')
})

// 개선 항목(FAIL) 데이터 — 최신 fails-<date>.json. "개선 항목" 탭이 조합 필터로 사용.
readabilityRouter.get('/admin/readability/fails.json', (req, res) => {
  const file = latestFailsFile()
  if (!file) return res.status(404).json({ error: 'fails 데이터 없음 — node scripts/aggregate-readability.mjs 실행 필요' })
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
