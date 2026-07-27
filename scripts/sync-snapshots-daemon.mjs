#!/usr/bin/env node
// ─── 뉴스레터 저장본 실시간 동기화 데몬 (원격 → 로컬/맥미니) ─────────────────
// 어드민에서 "저장하기/새로 저장" 을 누르면 원격(Render) 목록이 갱신되고,
// 본 데몬이 주기 폴링(기본 15초)으로 그 변경을 즉시 로컬 data/ 에 병합한다.
// (맥미니는 외부에서 접근 불가 → Render 가 푸시할 수 없으므로 pull 방식이 정답)
//
// 사용:
//   node scripts/sync-snapshots-daemon.mjs --remote https://<앱>.onrender.com
//   옵션: --interval 15  (초)  /  --modes newsletter,monthly-report  /  --once (1회만)
//   비밀번호: env REMOTE_ADMIN_PASSWORD (없으면 ADMIN_PASSWORD — .env 자동 로드)
//
// 병합 규칙 (로컬은 아카이브 — 데이터 보호 우선):
//   - 원격에만 있는 저장본(ts 기준) → 로컬에 추가
//   - 양쪽에 있고 원격 updatedAt 이 더 최신 → 로컬 교체 (어드민 '저장하기' 덮어쓰기 반영)
//   - 로컬에만 있는 저장본 → 유지 (원격에서 삭제돼도 로컬 아카이브 보존)
//   - ts 내림차순, 로컬 최대 200개
import 'dotenv/config'
import { readModeSnapshots, writeModeSnapshots, VALID_MODES } from '../lib/storage.js'

const LOCAL_CAP = 200

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

async function tick() {
  for (const mode of args.modes) {
    try {
      const remote = await fetchRemoteSnapshots(mode)
      const { added, updated } = mergeIntoLocal(mode, remote)
      if (added || updated) {
        console.log(`[sync] ${new Date().toLocaleTimeString()} ${mode}: 신규 ${added} · 갱신 ${updated} → 로컬 반영 (원격 ${remote.length}개)`)
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
