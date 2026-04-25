import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mkdtempSync, writeFileSync, rmSync } from 'fs'
import { tmpdir } from 'os'
import { join } from 'path'

const TMP = mkdtempSync(join(tmpdir(), 'runs-test-'))
vi.mock('./storage.js', () => ({ DATA_DIR: TMP }))

const { readInsightRuns, summarizeInsightRuns, appendInsightRun } = await import('./insight-runs.js')

const LOG = join(TMP, 'insight-runs.log')

beforeEach(() => {
  try { rmSync(LOG) } catch {}
})

describe('appendInsightRun + readInsightRuns', () => {
  it('append + read 라운드트립', () => {
    appendInsightRun({ type: 'totalInsight', ok: true, inputTokens: 100, outputTokens: 50, latencyMs: 800, costUsd: 0.001 })
    appendInsightRun({ type: 'productInsight', ok: false, kind: 'rate_limit', error: '429', latencyMs: 50 })
    const runs = readInsightRuns()
    expect(runs).toHaveLength(2)
    expect(runs[0].type).toBe('totalInsight')
    expect(runs[1].kind).toBe('rate_limit')
    expect(runs[0].ts).toBeTypeOf('number')
  })

  it('파일 없음 → 빈 배열', () => {
    expect(readInsightRuns()).toEqual([])
  })

  it('손상된 행은 스킵', () => {
    writeFileSync(LOG,
      JSON.stringify({ ts: 1, type: 'a', ok: true }) + '\n' +
      'CORRUPT_LINE\n' +
      JSON.stringify({ ts: 2, type: 'b', ok: true }) + '\n'
    )
    const runs = readInsightRuns()
    expect(runs).toHaveLength(2)
    expect(runs.map(r => r.type)).toEqual(['a', 'b'])
  })

  it('limit 옵션 — 마지막 N건만', () => {
    for (let i = 0; i < 50; i++) appendInsightRun({ type: 'x', ok: true, idx: i })
    const runs = readInsightRuns({ limit: 10 })
    expect(runs).toHaveLength(10)
    expect(runs[0].idx).toBe(40)
    expect(runs[9].idx).toBe(49)
  })
})

describe('summarizeInsightRuns', () => {
  it('빈 입력 → 0 카운트', () => {
    const s = summarizeInsightRuns([])
    expect(s).toEqual(expect.objectContaining({ count: 0, ok: 0, fail: 0, successRate: 0, totalCostUsd: 0 }))
  })

  it('성공·실패 카운트 + 성공률', () => {
    const runs = [
      { ok: true, costUsd: 0.001, inputTokens: 100, outputTokens: 50, latencyMs: 500 },
      { ok: true, costUsd: 0.002, inputTokens: 200, outputTokens: 80, latencyMs: 700 },
      { ok: false, kind: 'rate_limit', latencyMs: 100 },
      { ok: false, kind: 'invalid_output', reason: 'empty', latencyMs: 200 },
    ]
    const s = summarizeInsightRuns(runs)
    expect(s.count).toBe(4)
    expect(s.ok).toBe(2)
    expect(s.fail).toBe(2)
    expect(s.successRate).toBe(50)
    expect(s.totalCostUsd).toBe(0.003)
    expect(s.totalInputTokens).toBe(300)
    expect(s.totalOutputTokens).toBe(130)
    expect(s.byKind).toEqual({ rate_limit: 1, invalid_output: 1 })
  })

  it('지연 평균과 p95', () => {
    const runs = Array.from({ length: 20 }, (_, i) => ({ ok: true, latencyMs: (i + 1) * 100 }))
    // latencies 100..2000, avg = 1050, p95Idx = floor(20*0.95) = 19 → 2000
    const s = summarizeInsightRuns(runs)
    expect(s.avgLatencyMs).toBe(1050)
    expect(s.p95LatencyMs).toBe(2000)
  })

  it('byType 분포', () => {
    const runs = [
      { ok: true, type: 'totalInsight' },
      { ok: true, type: 'totalInsight' },
      { ok: true, type: 'productInsight' },
    ]
    expect(summarizeInsightRuns(runs).byType).toEqual({ totalInsight: 2, productInsight: 1 })
  })

  it('recentFailures: 최대 10건, 최신순', () => {
    const runs = []
    for (let i = 0; i < 15; i++) runs.push({ ok: false, type: `t${i}`, kind: 'error', error: `e${i}`, ts: i, latencyMs: i * 10 })
    const s = summarizeInsightRuns(runs)
    expect(s.recentFailures).toHaveLength(10)
    // 마지막 10건의 역순 → 가장 최근(t14)이 첫 항목
    expect(s.recentFailures[0].type).toBe('t14')
    expect(s.recentFailures[9].type).toBe('t5')
  })
})
