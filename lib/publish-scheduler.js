// ─── 매일 00시 KST 자동 데이터 새로고침 + 통합 게시 스케줄러 ─────────────────
// KST 00:00 = UTC 15:00 (KST 는 서머타임 없음 — 연중 고정 오프셋 +9).
// 외부 라이브러리 없이 setTimeout 체인: 다음 경계까지 대기 → 실행 → 재무장.
// Render starter plan(상시 가동) 전제 — 서버가 자정에 깨어 있어야 발화한다.
//
// 부팅 catch-up: 재배포/재시작으로 자정을 놓쳤으면(마지막 실행 < 직전 경계) 부팅 30초 후 1회 보상 실행.
// uncaughtException 핸들러가 process.exit(1) 하므로 잡 전체를 try/catch 로 감싼다 — sync 실패 1회가 서버를 죽이면 안 된다.

import { runUnifiedPublish, readUnifiedPublishMeta } from './republish.mjs'
import { logFor } from './logger.js'

const log = logFor('publish-scheduler')

// 외부 진단용 상태 — /api/publish-health 가 읽는다 (비밀정보 없음).
// "자동 게시가 안 됐다" 는 보고에서 서버 로그 접근 없이는 armed 여부·다음 발화
// 시각조차 알 수 없던 문제 (2026-09-02).
const state = { started: false, enabled: false, armedAt: null, nextRunUtc: null, lastFire: null }
export function schedulerHealth() {
  const last = readUnifiedPublishMeta()
  return {
    ...state,
    lastRun: last ? { ts: last.ts, at: new Date(last.ts).toISOString(), trigger: last.trigger, ok: last.ok, errors: (last.errors || []).length, durationMs: last.durationMs } : null,
  }
}

const KST_OFFSET_MS = 9 * 60 * 60 * 1000

// 다음 KST 00:00 경계의 epoch ms — 순수 함수 (테스트 대상)
export function nextKstMidnight(nowMs) {
  const kstDayMs = 24 * 60 * 60 * 1000
  // KST 기준 "오늘"의 시작 = floor((now + 9h) / 24h) * 24h - 9h
  const kstDayStart = Math.floor((nowMs + KST_OFFSET_MS) / kstDayMs) * kstDayMs - KST_OFFSET_MS
  return kstDayStart + kstDayMs
}

// 직전 KST 00:00 경계 — catch-up 판정용
export function prevKstMidnight(nowMs) {
  return nextKstMidnight(nowMs) - 24 * 60 * 60 * 1000
}

// 마지막 자동 실행이 직전 경계 이전이면 놓친 것 (수동 실행도 카운트 — 이미 최신이면 보상 불필요)
export function missedRun(lastRunTs, nowMs) {
  if (lastRunTs == null) return true
  return lastRunTs < prevKstMidnight(nowMs)
}

async function fireOnce(trigger) {
  state.lastFire = { trigger, at: new Date().toISOString(), status: 'running' }
  log.info({ trigger }, 'auto publish firing')
  try {
    const r = await runUnifiedPublish({ trigger })
    state.lastFire.status = r.ok ? 'ok' : 'errors'
    if (!r.ok) log.warn({ trigger, errors: r.errors }, 'auto publish finished with errors')
  } catch (e) {
    // 절대 throw 로 새어나가면 안 됨 — uncaughtException → process.exit(1)
    state.lastFire.status = 'failed: ' + e.message
    log.error({ trigger, err: e.message }, 'auto publish failed')
  }
}

// opts.enabled 강제 / opts._now 테스트 주입
export function startPublishScheduler(opts = {}) {
  const enabled = opts.enabled ?? (process.env.NODE_ENV === 'production' || process.env.AUTO_PUBLISH === '1')
  state.started = true
  state.enabled = enabled
  if (!enabled) {
    log.info({}, 'auto publish scheduler disabled (production 또는 AUTO_PUBLISH=1 에서만 활성)')
    return null
  }

  let timer = null
  const arm = () => {
    const now = Date.now()
    const target = nextKstMidnight(now)
    const delay = Math.max(1000, target - now)
    state.armedAt = new Date(now).toISOString()
    state.nextRunUtc = new Date(target).toISOString()
    log.info({ nextRunUtc: state.nextRunUtc, inMinutes: Math.round(delay / 60000) }, 'auto publish armed (KST 00:00)')
    timer = setTimeout(async () => {
      await fireOnce('cron')
      arm()  // 재무장 — setInterval 대신 매번 경계 재계산 (drift 방지)
    }, delay)
    timer.unref?.()  // 스케줄러가 프로세스 종료를 막지 않게
  }
  arm()

  // 부팅 catch-up — 두 조건 중 하나면 120초 후 1회 재게시:
  //   (a) 자정 놓침 (재배포로 건너뜀)
  //   (b) 코드 버전 변경 — 게시본은 굽는 시점의 코드로 얼어붙으므로, 렌더 수정이
  //       배포돼도 다음 자정까지 옛 게시본이 남았다 ("재게시 필요" 안내의 근본 원인).
  //       배포마다 자동 재게시로 셀프힐 (2026-09-02).
  // 120초: 연쇄 재배포 직후 트래픽·메모리 안정 후 (512MB 인스턴스 OOM 회피).
  const last = readUnifiedPublishMeta()
  const curVer = process.env.RENDER_GIT_COMMIT || null
  const versionChanged = !!curVer && last?.codeVersion !== curVer
  if (missedRun(last?.ts, Date.now()) || versionChanged) {
    log.info({ lastRun: last?.ts ? new Date(last.ts).toISOString() : null, versionChanged, curVer }, 'catch-up in 120s (missed run 또는 코드 버전 변경)')
    const t = setTimeout(() => fireOnce('catchup'), 120_000)
    t.unref?.()
  }

  return { stop: () => timer && clearTimeout(timer) }
}
