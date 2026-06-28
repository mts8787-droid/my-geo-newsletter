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

// 해석 리포트(감점 사유 종합) — my-geo-audit 가 생성하는 텍스트 해석본.
// 라이브로 읽어 항상 최신 반영. 경로는 env 로 재정의 가능 (aggregate DEFAULT_SRC 와 동일 컨벤션).
// 외부 audit 경로가 없으면 data/readability/audit_report.txt 로컬 사본으로 폴백.
const AUDIT_REPORT_PATH = process.env.AUDIT_REPORT_PATH ||
  '/Users/dubaba/my-geo-project/my-geo-audit/reports/audit_report.txt'
function resolveAuditReport() {
  if (existsSync(AUDIT_REPORT_PATH)) return AUDIT_REPORT_PATH
  const local = join(DATA_DIR, 'audit_report.txt')
  return existsSync(local) ? local : null
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

// 최신 검수 URL CSV 파일명 (urls-<YYYY-MM-DD>.csv) — 집계 스크립트가 스냅샷과 함께 생성
function latestCsvFile() {
  if (!existsSync(DATA_DIR)) return null
  const files = readdirSync(DATA_DIR).filter(f => /^urls-\d{4}-\d{2}-\d{2}\.csv$/.test(f)).sort()
  return files.length ? files[files.length - 1] : null
}

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

// 해석 리포트(감점 사유 종합) 텍스트 — 라이브 서빙. 대시보드 "해석 리포트" 탭이 fetch.
readabilityRouter.get('/admin/readability/audit-report.txt', (req, res) => {
  const file = resolveAuditReport()
  if (!file) return res.status(404).type('text/plain; charset=utf-8')
    .send('해석 리포트 없음 — audit_report.txt 가 없습니다 (AUDIT_REPORT_PATH 또는 data/readability/audit_report.txt).')
  res.set('Content-Type', 'text/plain; charset=utf-8')
  res.send(readFileSync(file, 'utf8'))
})

// 검수 URL 목록 다운로드 — 최신 urls-<date>.csv (URL · 국가 · 페이지타입 · 점수)
readabilityRouter.get('/admin/readability/urls.csv', (req, res) => {
  const file = latestCsvFile()
  if (!file) return res.status(404).send('검수 URL CSV 없음 — node scripts/aggregate-readability.mjs 실행 필요')
  res.set('Content-Type', 'text/csv; charset=utf-8')
  res.set('Content-Disposition', `attachment; filename="${file}"`)
  res.send(readFileSync(join(DATA_DIR, file), 'utf8'))
})
