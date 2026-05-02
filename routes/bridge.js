// ─── BigQuery → sync-data JSON 브릿지 ───────────────────────────────────────
// `dashboard-raw-data` 레포(writer)가 채운 BigQuery 테이블을 읽어
// 기존 편집 페이지의 sync-data JSON 형식으로 변환해 전달한다.
//
// 두 레포 사이 결합 지점은 BIGQUERY_SCHEMA.md 단일 — 코드 공유 없음.
//
// 라우트:
//   GET /api/bridge/health           — BigQuery 연결 상태
//   GET /api/bridge/ai-visibility    — 최근 N일 AI Visibility 요약
//   GET /api/bridge/freshness        — 데이터 신선도 (마지막 _loaded_at)
//
// 환경변수:
//   GCP_PROJECT_ID   — 미설정 시 503 반환
//   BQ_DATASET       — 기본 'semrush_data'

import { Router } from 'express'
import { getBigQueryClient, tableRef, BQ_DATASET } from '../lib/bigquery.js'
import { logFor } from '../lib/logger.js'

const log = logFor('bridge')

export const bridgeRouter = Router()

// ─── 헬스 체크 ────────────────────────────────────────────────────
bridgeRouter.get('/api/bridge/health', async (req, res) => {
  const client = await getBigQueryClient()
  if (!client) {
    return res.status(503).json({
      ok: false,
      error: 'BigQuery 미설정 (GCP_PROJECT_ID 환경변수 필요)',
      configured: false,
    })
  }
  res.json({
    ok: true,
    configured: true,
    projectId: process.env.GCP_PROJECT_ID,
    dataset: BQ_DATASET,
  })
})

// ─── 신선도 — 마지막 적재 시각 ────────────────────────────────────
bridgeRouter.get('/api/bridge/freshness', async (req, res) => {
  const client = await getBigQueryClient()
  if (!client) return res.status(503).json({ ok: false, error: 'BigQuery 미설정' })

  try {
    const [rows] = await client.query({
      query: `
        SELECT
          MAX(_loaded_at) AS last_loaded_at,
          COUNT(DISTINCT date) AS days,
          COUNT(*) AS rows
        FROM ${tableRef('ai_visibility')}
        WHERE _source = 'semrush_enterprise'
      `,
    })
    const r = rows[0] || {}
    const lastTs = r.last_loaded_at?.value ? new Date(r.last_loaded_at.value).getTime() : null
    const ageMs = lastTs ? Date.now() - lastTs : null
    const stale = ageMs == null ? true : ageMs > 24 * 3600 * 1000  // 24h 초과 = stale
    res.json({
      ok: true,
      lastLoadedAt: r.last_loaded_at?.value || null,
      ageMs,
      stale,
      days: Number(r.days || 0),
      rows: Number(r.rows || 0),
    })
  } catch (err) {
    log.error({ err: err.message }, 'freshness query failed')
    res.status(502).json({ ok: false, error: `BigQuery 쿼리 실패: ${err.message}` })
  }
})

// ─── AI Visibility — 최근 N일, 모델별 일평균 ────────────────────────
bridgeRouter.get('/api/bridge/ai-visibility', async (req, res) => {
  const client = await getBigQueryClient()
  if (!client) return res.status(503).json({ ok: false, error: 'BigQuery 미설정' })

  // ?days=7 (기본 7), ?brand=LG (기본 LG), ?model=search-gpt (선택)
  const days = Math.max(1, Math.min(90, parseInt(String(req.query.days ?? '7')) || 7))
  const model = req.query.model ? String(req.query.model) : null

  // 동적 SQL 위험 차단: model 화이트리스트만 허용 (SEMrushClient.AI_MODELS)
  const ALLOWED_MODELS = ['search-gpt', 'perplexity', 'gpt-5', 'gemini-2.5-flash', 'copilot', 'claude', 'meta-ai']
  if (model && !ALLOWED_MODELS.includes(model)) {
    return res.status(400).json({ ok: false, error: `유효하지 않은 모델: ${model}` })
  }

  try {
    const sql = `
      SELECT
        model,
        date,
        AVG(SAFE_CAST(visibility AS FLOAT64)) AS visibility_avg,
        AVG(SAFE_CAST(sov AS FLOAT64)) AS sov_avg,
        AVG(SAFE_CAST(position AS FLOAT64)) AS position_avg,
        COUNT(*) AS row_count
      FROM ${tableRef('ai_visibility')}
      WHERE _source = 'semrush_enterprise'
        AND date BETWEEN FORMAT_DATE('%Y-%m-%d', DATE_SUB(CURRENT_DATE(), INTERVAL @days DAY))
                     AND FORMAT_DATE('%Y-%m-%d', CURRENT_DATE())
        ${model ? 'AND model = @model' : ''}
      GROUP BY model, date
      ORDER BY date DESC, model ASC
    `
    const params = { days }
    if (model) params.model = model
    const [rows] = await client.query({ query: sql, params })
    res.json({ ok: true, days, model, rows })
  } catch (err) {
    log.error({ err: err.message }, 'ai-visibility query failed')
    res.status(502).json({ ok: false, error: `BigQuery 쿼리 실패: ${err.message}` })
  }
})
