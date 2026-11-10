// GEO 액션아이템 실행 대시보드 — GET /admin/geo-actions (인증 게이트 /admin/* 안)
// 데이터: data/geo-actions/ 의 최신 geo_actions_v*.json (리포 커밋, 엑셀 v18 변환본).
// 진척: 영구 디스크(lib/storage DATA_DIR)의 geo-actions-progress.json — 팀 공용, 재배포 생존.
//   GET /api/geo-actions/progress  → { ok, progress }
//   PUT /api/geo-actions/progress  ← { items: [{ id, s, m }] }  (s ∈ 미착수·진행·완료, 미착수+빈 메모 = 삭제)

import { Router } from 'express'
import { readFileSync, writeFileSync, existsSync, readdirSync, renameSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import { renderGeoActionsHTML } from '../scripts/render-geo-actions.mjs'
import { DATA_DIR as STORAGE_DIR } from '../lib/storage.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const SRC_DIR = join(__dirname, '..', 'data', 'geo-actions')
const PROGRESS_FILE = () => join(STORAGE_DIR, 'geo-actions-progress.json')
const STATUSES = ['미착수', '진행', '완료']
const MEMO_MAX = 500
const ITEMS_MAX = 1000

let cache = { file: null, data: null, ids: null }
export function loadGeoActions() {
  if (!existsSync(SRC_DIR)) return null
  // 파일명 사전순 마지막 = 최신 판 (v9 < v18 문제 방지: 숫자 비교)
  const ver = f => +(f.match(/_v(\d+)\.json$/) || [0, 0])[1]
  const files = readdirSync(SRC_DIR).filter(f => /^geo_actions_v\d+\.json$/.test(f)).sort((a, b) => ver(a) - ver(b))
  if (!files.length) { console.warn('[geo-actions] WARN: no data file', { dir: SRC_DIR }); return null }
  const file = files[files.length - 1]
  if (cache.file !== file) {
    const data = JSON.parse(readFileSync(join(SRC_DIR, file), 'utf8'))
    cache = { file, data, ids: new Set(data.rows.map(r => r.id)) }
  }
  return cache
}

export function readProgress() {
  try { return JSON.parse(readFileSync(PROGRESS_FILE(), 'utf8')) || {} }
  catch (e) { if (e.code !== 'ENOENT') console.warn('[geo-actions] WARN: progress read failed', { error: e.message }); return {} }
}
function writeProgress(p) {
  const f = PROGRESS_FILE(), tmp = f + '.tmp'
  writeFileSync(tmp, JSON.stringify(p))
  renameSync(tmp, f) // 쓰는 도중 끊겨도 기존 파일이 깨지지 않게
}

const stamp = () => new Date(Date.now() + 9 * 3600e3).toISOString().slice(0, 16).replace('T', ' ') // KST

export const geoActionsRouter = Router()

geoActionsRouter.get('/admin/geo-actions', (req, res) => {
  const src = loadGeoActions()
  if (!src) return res.status(503).type('text/plain').send('GEO 액션아이템 데이터 없음 — data/geo-actions/geo_actions_v*.json 필요')
  res.type('html').send(renderGeoActionsHTML(src.data, { progress: readProgress(), progressApi: '/api/geo-actions/progress' }))
})

geoActionsRouter.get('/api/geo-actions/progress', (req, res) => {
  res.json({ ok: true, progress: readProgress() })
})

geoActionsRouter.put('/api/geo-actions/progress', (req, res) => {
  const src = loadGeoActions()
  if (!src) return res.status(503).json({ ok: false, error: '데이터 없음' })
  const items = req.body && req.body.items
  if (!Array.isArray(items) || !items.length || items.length > ITEMS_MAX) {
    return res.status(400).json({ ok: false, error: `items 배열(1~${ITEMS_MAX}건)이 필요함` })
  }
  for (const it of items) {
    if (!it || !src.ids.has(it.id)) return res.status(400).json({ ok: false, error: `알 수 없는 세부과제 ID: ${String(it && it.id).slice(0, 40)}` })
    if (!STATUSES.includes(it.s)) return res.status(400).json({ ok: false, error: `진척 값은 ${STATUSES.join('·')} 중 하나: ${it.id}` })
    if (it.m != null && (typeof it.m !== 'string' || it.m.length > MEMO_MAX)) return res.status(400).json({ ok: false, error: `메모는 ${MEMO_MAX}자 이하 문자열: ${it.id}` })
  }
  const prog = readProgress(), t = stamp()
  items.forEach(({ id, s, m }) => {
    const memo = (m || '').trim()
    if (s === '미착수' && !memo) delete prog[id]
    else prog[id] = { s, m: memo, t }
  })
  try { writeProgress(prog) }
  catch (e) { console.error('[geo-actions] FATAL: progress write failed', { error: e.message }); return res.status(500).json({ ok: false, error: '저장 실패' }) }
  res.json({ ok: true, saved: items.length, t })
})
