// ─── 리포트 생성 호출 로깅 (관찰성) ─────────────────────────────────────────
// /data/insight-runs.log 에 JSONL 형식으로 누적
// /admin/observability 대시보드에서 시각화
import { appendFileSync, readFileSync, existsSync } from 'fs'
import { join } from 'path'
import { DATA_DIR } from './storage.js'

const INSIGHT_RUNS_LOG = join(DATA_DIR, 'insight-runs.log')

export function appendInsightRun(entry) {
  try {
    appendFileSync(INSIGHT_RUNS_LOG, JSON.stringify({ ts: Date.now(), ...entry }) + '\n')
  } catch { /* 로깅 실패는 본 흐름에 영향 주지 않음 */ }
}

// /admin/observability 용 — JSONL 파싱, 손상된 행은 스킵
export function readInsightRuns({ limit = 1000 } = {}) {
  if (!existsSync(INSIGHT_RUNS_LOG)) return []
  try {
    const text = readFileSync(INSIGHT_RUNS_LOG, 'utf-8')
    const lines = text.split('\n').filter(Boolean)
    const tail = lines.slice(-limit)
    const runs = []
    for (const line of tail) {
      try { runs.push(JSON.parse(line)) } catch { /* skip malformed */ }
    }
    return runs
  } catch { return [] }
}

// 집계 — token·latency·cost·성공률·에러 분포
export function summarizeInsightRuns(runs) {
  if (!runs?.length) {
    return { count: 0, ok: 0, fail: 0, successRate: 0, totalCostUsd: 0, totalInputTokens: 0, totalOutputTokens: 0,
             avgLatencyMs: 0, p95LatencyMs: 0, byKind: {}, byType: {}, byModel: {}, recentFailures: [] }
  }
  const ok = runs.filter(r => r.ok).length
  const fail = runs.length - ok
  const totalCostUsd = +runs.reduce((s, r) => s + (r.costUsd || 0), 0).toFixed(4)
  const totalInputTokens = runs.reduce((s, r) => s + (r.inputTokens || 0), 0)
  const totalOutputTokens = runs.reduce((s, r) => s + (r.outputTokens || 0), 0)
  const latencies = runs.map(r => r.latencyMs || 0).sort((a, b) => a - b)
  const avgLatencyMs = Math.round(latencies.reduce((s, v) => s + v, 0) / latencies.length)
  const p95Idx = Math.min(latencies.length - 1, Math.floor(latencies.length * 0.95))
  const p95LatencyMs = latencies[p95Idx]
  const byKind = {}, byType = {}, byModel = {}
  for (const r of runs) {
    if (!r.ok && r.kind) byKind[r.kind] = (byKind[r.kind] || 0) + 1
    if (r.type) byType[r.type] = (byType[r.type] || 0) + 1
    if (r.model) byModel[r.model] = (byModel[r.model] || 0) + 1
  }
  const recentFailures = runs.filter(r => !r.ok).slice(-10).reverse()
    .map(r => ({ ts: r.ts, type: r.type, kind: r.kind, reason: r.reason, error: r.error, latencyMs: r.latencyMs }))
  return {
    count: runs.length, ok, fail, successRate: +(ok / runs.length * 100).toFixed(1),
    totalCostUsd, totalInputTokens, totalOutputTokens,
    avgLatencyMs, p95LatencyMs,
    byKind, byType, byModel, recentFailures,
  }
}
