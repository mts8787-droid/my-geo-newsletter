// ─── 파일 기반 저장소 (snapshots / sync-data / archives / ai-settings / ip-allowlist) ───
// C11 step1 — server.js의 storage helpers를 모듈로 추출
import { readFileSync, writeFileSync, mkdirSync, existsSync, renameSync, readdirSync, rmSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const PROJECT_ROOT = join(__dirname, '..')

export const DATA_DIR = process.env.DATA_DIR || join(PROJECT_ROOT, 'data')
export const PUB_DIR = join(DATA_DIR, 'published')

if (!existsSync(DATA_DIR)) mkdirSync(DATA_DIR, { recursive: true })
if (!existsSync(PUB_DIR)) mkdirSync(PUB_DIR, { recursive: true })

// ─── 글로벌 (newsletter 호환용) ─────────────────────────────────────────────
export const SNAP_FILE = join(DATA_DIR, 'snapshots.json')
export const SYNC_FILE = join(DATA_DIR, 'sync-data.json')

// ─── 모드별 파일 경로 ────────────────────────────────────────────────────────
const SNAP_BY_MODE = {
  newsletter: join(DATA_DIR, 'newsletter-snapshots.json'),
  dashboard: join(DATA_DIR, 'dashboard-snapshots.json'),
  citation: join(DATA_DIR, 'citation-snapshots.json'),
  'monthly-report': join(DATA_DIR, 'monthly-report-snapshots.json'),
  'weekly-report': join(DATA_DIR, 'weekly-report-snapshots.json'),
  visibility: join(DATA_DIR, 'visibility-snapshots.json'),
}
const SYNC_BY_MODE = {
  newsletter: join(DATA_DIR, 'newsletter-sync-data.json'),
  dashboard: join(DATA_DIR, 'dashboard-sync-data.json'),
  citation: join(DATA_DIR, 'citation-sync-data.json'),
  'monthly-report': join(DATA_DIR, 'monthly-report-sync-data.json'),
  'weekly-report': join(DATA_DIR, 'weekly-report-sync-data.json'),
  visibility: join(DATA_DIR, 'visibility-sync-data.json'),
}

export const VALID_MODES = Object.keys(SNAP_BY_MODE)

export function modeSnapFile(mode) { return SNAP_BY_MODE[mode] || SNAP_BY_MODE.newsletter }
export function modeSyncFile(mode) { return SYNC_BY_MODE[mode] || SYNC_BY_MODE.newsletter }

// 대용량 JSON 안전 쓰기 — compact(pretty-print 대비 용량 절반) + atomic(tmp→rename).
// 크래시(OOM kill 등)가 쓰기 도중 발생해도 원본 파일이 잘린 채 손상되지 않음.
function writeJsonAtomic(path, value) {
  const tmp = `${path}.tmp`
  writeFileSync(tmp, JSON.stringify(value))
  renameSync(tmp, path)
}

// ─── 글로벌 snapshots ───────────────────────────────────────────────────────
export function readSnapshots() {
  try { return JSON.parse(readFileSync(SNAP_FILE, 'utf-8')) } catch { return [] }
}
export function writeSnapshots(list) {
  writeJsonAtomic(SNAP_FILE, list)
}

// ─── 글로벌 sync-data ───────────────────────────────────────────────────────
export function readSyncData() {
  try { return JSON.parse(readFileSync(SYNC_FILE, 'utf-8')) } catch { return null }
}
export function writeSyncData(data) {
  writeJsonAtomic(SYNC_FILE, data)
}

// ─── 모드별 snapshots — 파일 분리 저장 (per-snapshot file + light 인덱스) ─────
// 배경(회귀 fix): 저장본이 커지며(모델별 byLlm 등) 단일 JSON(수십~수백MB) 통파싱이
// Render(512MB) OOM → 저장·불러오기 전면 불능. 목록은 인덱스(_index.json)만 읽고,
// 단건은 개별 파일(<ts>.json)만 읽어 메모리 사용을 항목 1개 크기로 제한.
// 기존 단일 파일(<mode>-snapshots.json)은 첫 접근 시 1회 자동 분리(마이그레이션),
// 원본은 .migrated 로 보존.
export const BACKUP_LIMIT = 5
const SNAP_ROOT = join(DATA_DIR, 'snapshots')
const snapMeta = ({ name, ts, updatedAt, deletedAt }) => ({
  name, ts,
  ...(updatedAt != null ? { updatedAt } : {}),
  ...(deletedAt != null ? { deletedAt } : {}),
})

// dirName 하위에 per-item 저장소 구성 (마이그레이션 소스 legacyFile 지정 가능)
function itemStore(dirName, legacyFile) {
  const dir = join(SNAP_ROOT, dirName)
  const indexFile = join(dir, '_index.json')
  function ensure() {
    if (existsSync(indexFile)) return
    mkdirSync(dir, { recursive: true })
    let list = []
    if (legacyFile && existsSync(legacyFile)) {
      try { list = JSON.parse(readFileSync(legacyFile, 'utf-8')) } catch { list = [] }
    }
    const idx = []
    for (const s of (Array.isArray(list) ? list : [])) {
      if (!s || typeof s.ts !== 'number') continue
      writeJsonAtomic(join(dir, `${s.ts}.json`), s)
      idx.push(snapMeta(s))
    }
    idx.sort((a, b) => b.ts - a.ts)
    writeJsonAtomic(indexFile, idx)
    if (legacyFile && existsSync(legacyFile)) renameSync(legacyFile, `${legacyFile}.migrated`)
  }
  function list() {
    ensure()
    try { const l = JSON.parse(readFileSync(indexFile, 'utf-8')); return Array.isArray(l) ? l : [] } catch { return [] }
  }
  function readOne(ts) {
    ensure()
    try { return JSON.parse(readFileSync(join(dir, `${ts}.json`), 'utf-8')) } catch { return null }
  }
  // 저장(신규/교체) + 인덱스 갱신 + cap 초과분 파일 제거. 반환: 갱신된 light 인덱스
  function saveOne(snap, cap) {
    ensure()
    writeJsonAtomic(join(dir, `${snap.ts}.json`), snap)
    let idx = [snapMeta(snap), ...list().filter(m => m.ts !== snap.ts)].sort((a, b) => b.ts - a.ts)
    const over = idx.slice(cap)
    idx = idx.slice(0, cap)
    writeJsonAtomic(indexFile, idx)
    for (const m of over) { try { rmSync(join(dir, `${m.ts}.json`)) } catch {} }
    return idx
  }
  function removeOne(ts) {
    ensure()
    const removed = readOne(ts)
    const idx = list().filter(m => m.ts !== ts)
    writeJsonAtomic(indexFile, idx)
    try { rmSync(join(dir, `${ts}.json`)) } catch {}
    return { removed, index: idx }
  }
  // 전체 교체 (데몬 동기화용 whole-list 시맨틱)
  function replaceAll(items) {
    ensure()
    const keep = new Set()
    const idx = []
    for (const s of (Array.isArray(items) ? items : [])) {
      if (!s || typeof s.ts !== 'number') continue
      keep.add(s.ts)
      writeJsonAtomic(join(dir, `${s.ts}.json`), s)
      idx.push(snapMeta(s))
    }
    idx.sort((a, b) => b.ts - a.ts)
    writeJsonAtomic(indexFile, idx)
    for (const f of readdirSync(dir)) {
      const m = f.match(/^(\d+)\.json$/)
      if (m && !keep.has(Number(m[1]))) { try { rmSync(join(dir, f)) } catch {} }
    }
  }
  return { list, readOne, saveOne, removeOne, replaceAll }
}

const snapStores = {}
const snapStore = mode => {
  const m = SNAP_BY_MODE[mode] ? mode : 'newsletter'
  return snapStores[m] || (snapStores[m] = itemStore(m, modeSnapFile(m)))
}
const backupStores = {}
const backupStore = mode => {
  const m = SNAP_BY_MODE[mode] ? mode : 'newsletter'
  return backupStores[m] || (backupStores[m] = itemStore(`${m}-backups`, join(DATA_DIR, `${m}-backups.json`)))
}

// per-item API (routes/snapshots.js 사용)
export function listModeSnapshots(mode) { return snapStore(mode).list() }
export function readModeSnapshot(mode, ts) { return snapStore(mode).readOne(ts) }
export function saveModeSnapshot(mode, snap, cap = 50) { return snapStore(mode).saveOne(snap, cap) }
export function deleteModeSnapshot(mode, ts) { return snapStore(mode).removeOne(ts) }
export function listModeBackups(mode) { return backupStore(mode).list() }
export function readModeBackup(mode, ts) { return backupStore(mode).readOne(ts) }
export function pushModeBackup(mode, snap) { return backupStore(mode).saveOne(snap, BACKUP_LIMIT) }

// whole-list 호환 API (동기화 데몬 등) — per-file 백엔드 위에서 동작
export function readModeSnapshots(mode) {
  return listModeSnapshots(mode).map(m => readModeSnapshot(mode, m.ts)).filter(Boolean)
}
export function writeModeSnapshots(mode, list) {
  snapStore(mode).replaceAll(list)
}
export function readModeBackups(mode) {
  return listModeBackups(mode).map(m => readModeBackup(mode, m.ts)).filter(Boolean)
}
export function writeModeBackups(mode, list) {
  backupStore(mode).replaceAll(list)
}

export function readModeSyncData(mode) {
  try { return JSON.parse(readFileSync(modeSyncFile(mode), 'utf-8')) } catch { return null }
}
export function writeModeSyncData(mode, data) {
  writeJsonAtomic(modeSyncFile(mode), data)
}
export const BACKUP_FILE = join(DATA_DIR, 'backups.json')
export function readBackups() {
  try { return JSON.parse(readFileSync(BACKUP_FILE, 'utf-8')) } catch { return [] }
}
export function writeBackups(list) {
  writeJsonAtomic(BACKUP_FILE, list)
}

// ─── AI 설정 ─────────────────────────────────────────────────────────────────
const AI_SETTINGS_FILE = join(DATA_DIR, 'ai-settings.json')
export const DEFAULT_AI_SETTINGS = {
  promptRules: `- 제공된 데이터에 있는 수치만 사용할 것 (추가 계산·추정 금지)\n- 리포트에 표시된 제품명, 점수, 경쟁사명을 그대로 인용\n- 존재하지 않는 수치를 만들어내지 말 것\n- 전문적이지만 간결하게 3~5문장\n- 비즈니스 보고서 톤 (한국어 작성 시)`,
  model: 'claude-opus-4-8',
  maxTokens: 500,
  // C1 — tool use 옵트인. true이면 Claude가 lookup 도구로 데이터 직접 조회 가능
  useTools: false,
}
// 현재 유효한 모델 목록 — 저장된 설정에 은퇴/폐기 모델(예: claude-opus-4-20250514)이 남아
// 404 not_found_error 가 나던 것을 방지. 목록에 없으면 읽을 때 기본값으로 self-heal.
// 신규 Claude 모델 출시 시 이 목록에 추가 (드롭다운 routes/admin-pages.js 와 동기 유지).
export const ALLOWED_AI_MODELS = [
  'claude-opus-4-8', 'claude-opus-4-7', 'claude-sonnet-4-6', 'claude-haiku-4-5',
]
export function readAiSettings() {
  let s
  try { s = { ...DEFAULT_AI_SETTINGS, ...JSON.parse(readFileSync(AI_SETTINGS_FILE, 'utf-8')) } }
  catch { s = { ...DEFAULT_AI_SETTINGS } }
  // 저장된 모델이 은퇴/폐기(=현재 유효 목록에 없음)면 기본값으로 폴백 → 404 방지 (self-heal)
  if (!ALLOWED_AI_MODELS.includes(s.model)) s.model = DEFAULT_AI_SETTINGS.model
  return s
}
export function writeAiSettings(settings) {
  writeFileSync(AI_SETTINGS_FILE, JSON.stringify(settings, null, 2))
}

// ─── Archives (AI 학습 데이터) ───────────────────────────────────────────────
const ARCHIVES_FILE = join(DATA_DIR, 'archives.json')
export function readArchives() {
  try {
    const data = JSON.parse(readFileSync(ARCHIVES_FILE, 'utf-8'))
    return Array.isArray(data) ? data : []
  } catch (err) {
    console.log(`[ARCHIVES] read failed: ${err.message}`)
    return []
  }
}
export function writeArchives(list) {
  writeFileSync(ARCHIVES_FILE, JSON.stringify(list, null, 2))
  console.log(`[ARCHIVES] saved ${list.length}`)
}

// ─── IP 화이트리스트 (캐시 포함) ─────────────────────────────────────────────
const IP_FILE = join(DATA_DIR, 'ip-allowlist.json')
let _ipCache = null
export function readIpAllowlist() {
  if (_ipCache) return _ipCache
  try { _ipCache = JSON.parse(readFileSync(IP_FILE, 'utf-8')); return _ipCache }
  catch { return [] }
}
export function writeIpAllowlist(list) {
  writeFileSync(IP_FILE, JSON.stringify(list, null, 2))
  _ipCache = list
}
