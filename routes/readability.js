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

function loadLatest() {
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

export const readabilityRouter = Router()

readabilityRouter.get('/admin/readability', (req, res) => {
  const { snapshot, index } = loadLatest()
  res.set('Content-Type', 'text/html; charset=utf-8')
  res.send(renderReadabilityHTML({ snapshot, index, adminMode: true }))
})
