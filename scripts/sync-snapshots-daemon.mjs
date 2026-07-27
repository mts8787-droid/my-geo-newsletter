#!/usr/bin/env node
// ─── 뉴스레터 저장본 양방향 동기화 데몬 (맥미니 ↔ 원격/Render) ─────────────────
// 맥미니의 로컬 파일(data/<mode>-snapshots.json)에 자동 접속해 원격과 동기화:
//   [pull] 원격 신규·갱신 저장본 → 로컬 파일에 내려받아 병합
//          (어드민 '저장하기/새로 저장' 이 주기 내 자동 반영)
//   [push] 로컬 파일에만 있는 저장본 → 원격 /api/:mode/snapshots/import 로 자동 업로드
//          (수동 파일 업로드 불필요 — 맥미니에 저장돼 있던 작성본이 서버에 자동 등장)
// 주기 폴링 기본 15초. (맥미니는 외부 접근 불가 → 브릿지는 맥미니 쪽에서 실행)
//
// 사용:
//   node scripts/sync-snapshots-daemon.mjs --remote https://<앱>.onrender.com
//   옵션: --interval 15  (초)  /  --modes newsletter,monthly-report  /  --once (1회만)
//   비밀번호: env REMOTE_ADMIN_PASSWORD (없으면 ADMIN_PASSWORD — .env 자동 로드)
//
// 병합 규칙 (로컬은 아카이브 — 데이터 보호 우선):
//   [pull] 원격에만 있는 저장본(ts 기준) → 로컬 추가 / 원격 updatedAt 최신 → 로컬 교체
//          로컬 전용은 삭제 안 함 (원격에서 지워져도 로컬 아카이브 보존). ts 내림차순, 로컬 cap 200.
//   [push] 원격에 없는 ts 만 import (원격이 중복 skip — 덮어쓰기 없음). 원격 cap(50) 밖으로
//          밀려날 오래된 로컬 전용분은 push 대상에서 제외 (무한 재푸시 방지).
import 'dotenv/config'
import { readModeSnapshots, writeModeSnapshots, VALID_MODES } from '../lib/storage.js'

const LOCAL_CAP = 200
const REMOTE_CAP = 50      // 서버 SNAPSHOT_LIMIT 와 동일
const PUSH_CHUNK = 100     // import 스키마 배열 상한

function parseArgs() {
  const a = process.argv.slice(2)
  const out = { interval: 15, modes: ['newsletter'], once: false }
  for (let i = 0; i < a.length; i++) {
    if (a[i] === '--remote') out.remote = a[++i]
    else if (a[i] === '--interval') out.interval = Math.max(5, parseInt(a[++i]) || 15)
    else if (a[i] === '--modes') out.modes = a[++i].split(',').map(s => s.trim()).filter(Boolean)
    else if (a[i] === '--once') out.once = true
  }
  return out
}

const args = parseArgs()
const REMOTE = (args.remote || process.env.REMOTE_URL || '').replace(/\/+$/, '')
const PASSWORD = process.env.REMOTE_ADMIN_PASSWORD || process.env.ADMIN_PASSWORD
if (!REMOTE) { console.error('[sync] FATAL: --remote <url> (또는 REMOTE_URL env) 필요'); process.exit(1) }
if (!PASSWORD) { console.error('[sync] FATAL: REMOTE_ADMIN_PASSWORD 또는 ADMIN_PASSWORD env 필요'); process.exit(1) }
const badModes = args.modes.filter(m => !VALID_MODES.includes(m))
if (badModes.length) { console.error(`[sync] FATAL: 알 수 없는 mode ${badModes.join(',')} (허용: ${VALID_MODES.join(',')})`); process.exit(1) }

let cookie = null

async function login() {
  const r = await fetch(`${REMOTE}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest' },
    body: JSON.stringify({ password: PASSWORD }),
  })
  if (!r.ok) throw new Error(`로그인 실패 HTTP ${r.status} — 비밀번호 확인`)
  const setCookie = r.headers.get('set-cookie') || ''
  const m = setCookie.match(/admin_token=[^;]+/)
  if (!m) throw new Error('로그인 응답에 admin_token 쿠키 없음')
  cookie = m[0]
}

async function fetchRemoteSnapshots(mode) {
  const r = await fetch(`${REMOTE}/api/${mode}/snapshots`, { headers: { cookie } })
  if (r.status === 401) { await login(); return fetchRemoteSnapshots(mode) }  // 세션 만료 → 재로그인 1회
  if (!r.ok) throw new Error(`GET snapshots HTTP ${r.status}`)
  const list = await r.json()
  if (!Array.isArray(list)) throw new Error('원격 응답이 배열 아님')
  return list
}

// 원격 목록을 로컬에 병합. 반환: { added, updated } (변경 없으면 write 안 함)
function mergeIntoLocal(mode, remote) {
  const local = readModeSnapshots(mode)
  const byTs = new Map(local.map(s => [s.ts, s]))
  let added = 0, updated = 0
  for (const r of remote) {
    if (!r || typeof r.ts !== 'number') continue
    const cur = byTs.get(r.ts)
    if (!cur) { byTs.set(r.ts, r); added++ }
    else if ((r.updatedAt || 0) > (cur.updatedAt || 0)) { byTs.set(r.ts, r); updated++ }
  }
  if (added || updated) {
    const merged = [...byTs.values()].sort((a, b) => b.ts - a.ts).slice(0, LOCAL_CAP)
    writeModeSnapshots(mode, merged)
  }
  return { added, updated }
}

// 이번 프로세스에서 이미 push 시도한 ts (모드별) — 원격 cap 에 밀려난 항목의 무한 재푸시 방지
const pushedTs = new Map()  // mode → Set<ts>

// [push] 로컬 파일에만 있는 저장본 → 원격 import (ts 중복은 원격이 skip — 안전)
async function pushLocalOnly(mode, remote) {
  const local = readModeSnapshots(mode)
  const remoteTs = new Set(remote.map(s => s.ts))
  if (!pushedTs.has(mode)) pushedTs.set(mode, new Set())
  const done = pushedTs.get(mode)
  // 원격이 cap 이면 원격 최솟값 ts 보다 오래된 로컬 전용분은 어차피 잘려나감 → 제외
  const remoteMin = remote.length >= REMOTE_CAP ? Math.min(...remote.map(s => s.ts)) : -Infinity
  const missing = local.filter(s =>
    s && typeof s.ts === 'number' && !remoteTs.has(s.ts) && !done.has(s.ts) && s.ts > remoteMin
  )
  if (!missing.length) return { pushed: 0 }
  let imported = 0, skipped = 0
  for (let i = 0; i < missing.length; i += PUSH_CHUNK) {
    const chunk = missing.slice(i, i + PUSH_CHUNK).map(s => ({
      name: String(s.name || '이름없음'), ts: s.ts, data: s.data,
      ...(typeof s.updatedAt === 'number' ? { updatedAt: s.updatedAt } : {}),
    }))
    const r = await fetch(`${REMOTE}/api/${mode}/snapshots/import`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest', cookie },
      body: JSON.stringify({ snapshots: chunk }),
    })
    if (r.status === 401) { await login(); i -= PUSH_CHUNK; continue }  // 세션 만료 → 재로그인 후 같은 chunk 재시도
    if (!r.ok) throw new Error(`push import HTTP ${r.status}`)
    const j = await r.json()
    imported += j.imported || 0
    skipped += j.skipped || 0
    chunk.forEach(s => done.add(s.ts))
  }
  return { pushed: missing.length, imported, skipped }
}

async function tick() {
  for (const mode of args.modes) {
    try {
      const remote = await fetchRemoteSnapshots(mode)
      const { added, updated } = mergeIntoLocal(mode, remote)
      if (added || updated) {
        console.log(`[sync] ${new Date().toLocaleTimeString()} ${mode}: [pull] 신규 ${added} · 갱신 ${updated} → 로컬 반영 (원격 ${remote.length}개)`)
      }
      const p = await pushLocalOnly(mode, remote)
      if (p.pushed) {
        console.log(`[sync] ${new Date().toLocaleTimeString()} ${mode}: [push] 로컬 전용 ${p.pushed}건 → 원격 반영 ${p.imported} · 중복 skip ${p.skipped}`)
      }
    } catch (e) {
      console.warn(`[sync] WARN ${mode}: ${e.message}`)
    }
  }
}

console.log(`[sync] 시작 — ${REMOTE} → 로컬 data/ · mode=[${args.modes.join(',')}] · ${args.once ? '1회' : args.interval + '초 간격'}`)
await login()
console.log('[sync] 로그인 OK')
await tick()
if (!args.once) {
  setInterval(tick, args.interval * 1000)
  console.log('[sync] 감시 중… (어드민에서 저장하면 자동으로 로컬 반영. Ctrl+C 로 종료)')
}
