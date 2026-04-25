// ─── 파일 기반 저장소 (snapshots / sync-data / archives / ai-settings / ip-allowlist) ───
// C11 step1 — server.js의 storage helpers를 모듈로 추출
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs'
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

// ─── 글로벌 snapshots ───────────────────────────────────────────────────────
export function readSnapshots() {
  try { return JSON.parse(readFileSync(SNAP_FILE, 'utf-8')) } catch { return [] }
}
export function writeSnapshots(list) {
  writeFileSync(SNAP_FILE, JSON.stringify(list, null, 2))
}

// ─── 글로벌 sync-data ───────────────────────────────────────────────────────
export function readSyncData() {
  try { return JSON.parse(readFileSync(SYNC_FILE, 'utf-8')) } catch { return null }
}
export function writeSyncData(data) {
  writeFileSync(SYNC_FILE, JSON.stringify(data, null, 2))
}

// ─── 모드별 snapshots / sync-data ───────────────────────────────────────────
export function readModeSnapshots(mode) {
  try { return JSON.parse(readFileSync(modeSnapFile(mode), 'utf-8')) } catch { return [] }
}
export function writeModeSnapshots(mode, list) {
  writeFileSync(modeSnapFile(mode), JSON.stringify(list, null, 2))
}
export function readModeSyncData(mode) {
  try { return JSON.parse(readFileSync(modeSyncFile(mode), 'utf-8')) } catch { return null }
}
export function writeModeSyncData(mode, data) {
  writeFileSync(modeSyncFile(mode), JSON.stringify(data, null, 2))
}

// ─── AI 설정 ─────────────────────────────────────────────────────────────────
const AI_SETTINGS_FILE = join(DATA_DIR, 'ai-settings.json')
export const DEFAULT_AI_SETTINGS = {
  promptRules: `- 제공된 데이터에 있는 수치만 사용할 것 (추가 계산·추정 금지)\n- 리포트에 표시된 제품명, 점수, 경쟁사명을 그대로 인용\n- 존재하지 않는 수치를 만들어내지 말 것\n- 전문적이지만 간결하게 3~5문장\n- 비즈니스 보고서 톤 (한국어 작성 시)`,
  model: 'claude-sonnet-4-5-20251001',
  maxTokens: 500,
}
export function readAiSettings() {
  try { return { ...DEFAULT_AI_SETTINGS, ...JSON.parse(readFileSync(AI_SETTINGS_FILE, 'utf-8')) } }
  catch { return { ...DEFAULT_AI_SETTINGS } }
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
