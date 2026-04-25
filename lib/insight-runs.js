// ─── 리포트 생성 호출 로깅 (관찰성) ─────────────────────────────────────────
// /data/insight-runs.log 에 JSONL 형식으로 누적 — Looker Studio 대신
// 자체 관리자 대시보드(/admin/observability)에서 시각화 (To-Be)
import { appendFileSync } from 'fs'
import { join } from 'path'
import { DATA_DIR } from './storage.js'

const INSIGHT_RUNS_LOG = join(DATA_DIR, 'insight-runs.log')

export function appendInsightRun(entry) {
  try {
    appendFileSync(INSIGHT_RUNS_LOG, JSON.stringify({ ts: Date.now(), ...entry }) + '\n')
  } catch { /* 로깅 실패는 본 흐름에 영향 주지 않음 */ }
}
