// ─── Progress Tracker 스냅샷 사전 번역 (2026-09-11) ──────────────────────────
// 게시본(/p/progress-tracker-v2/?lang=en)은 비인증이라 /api/translate(401)를 못 써
// 액션아이템 세부내용 등 데이터 한글이 EN 모드에서 그대로 노출됐다 (사용자 보고).
// 해법: 게시(스냅샷 저장) 시점에 서버가 한글 문자열을 전부 번역해 스냅샷에
// _i18n.en = { 한글: 영어 } 로 내장 — SPA 는 맵 조회만 (런타임 API 불필요).
import { readFileSync, writeFileSync, existsSync } from 'fs'
import translate from 'google-translate-api-x'
import { logFor } from './logger.js'

const log = logFor('tracker-i18n')

const BATCH = 20
const MAX_LEN = 400       // 이보다 긴 문자열은 데이터 덩어리일 가능성 — 제외
const MAX_STRINGS = 1200  // 폭주 방지 상한

// 스냅샷 전체를 깊이 순회하며 한글 포함 문자열 수집 (중복 제거).
// _i18n 자신은 건너뛴다. 키는 안 모으고 값만 — 표시되는 건 값이다.
export function collectKoreanStrings(obj) {
  const out = new Set()
  const walk = (v) => {
    if (out.size >= MAX_STRINGS) return
    if (typeof v === 'string') {
      const s = v.trim()
      if (s && s.length <= MAX_LEN && /[가-힣]/.test(s)) out.add(s)
    } else if (Array.isArray(v)) {
      v.forEach(walk)
    } else if (v && typeof v === 'object') {
      for (const [k, val] of Object.entries(v)) {
        if (k === '_i18n') continue
        walk(val)
      }
    }
  }
  walk(obj)
  return [...out]
}

// texts → { 원문: 번역 } (실패 배치는 건너뜀 — 부분 성공 허용)
export async function translateMap(texts, { from = 'ko', to = 'en' } = {}) {
  const map = {}
  for (let i = 0; i < texts.length; i += BATCH) {
    const batch = texts.slice(i, i + BATCH)
    try {
      const results = await translate(batch, { from, to })
      const arr = Array.isArray(results) ? results : [results]
      batch.forEach((src, j) => { if (arr[j]?.text) map[src] = arr[j].text })
    } catch (e) {
      log.warn({ err: e.message, batch: i / BATCH }, 'translate batch failed — skip')
    }
  }
  return map
}

// 스냅샷 객체에 _i18n.en 을 채워 반환 (기존 번역은 보존, 누락분만 추가 번역).
export async function enrichSnapshotI18n(snap) {
  const texts = collectKoreanStrings(snap)
  const existing = snap._i18n?.en || {}
  const missing = texts.filter(t => !existing[t])
  if (!missing.length) return { snap, added: 0, total: Object.keys(existing).length }
  const added = await translateMap(missing)
  snap._i18n = { en: { ...existing, ...added }, translatedAt: Date.now() }
  log.info({ added: Object.keys(added).length, missing: missing.length, total: Object.keys(snap._i18n.en).length }, 'tracker snapshot i18n enriched')
  return { snap, added: Object.keys(added).length, total: Object.keys(snap._i18n.en).length }
}

// 파일 기반 셀프힐 — 이미 게시돼 있는 스냅샷에 번역이 없거나 누락분이 있으면 채워 저장.
// 통합 게시(cron·배포 catch-up)가 호출: 운영의 기존 스냅샷도 사용자 조치 없이 번역된다.
export async function ensureTrackerI18nFile(snapPath) {
  if (!existsSync(snapPath)) return { skipped: 'no snapshot' }
  const snap = JSON.parse(readFileSync(snapPath, 'utf-8'))
  const { added, total } = await enrichSnapshotI18n(snap)
  if (added > 0) writeFileSync(snapPath, JSON.stringify(snap, null, 2))
  return { added, total }
}
