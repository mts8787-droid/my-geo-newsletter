// ─── BigQuery 클라이언트 (lazy 초기화) ───────────────────────────────────────
// 적재 에이전트(`dashboard-raw-data` 레포)가 채운 BigQuery 테이블을 읽기 전용으로 조회.
// 환경변수 부재 시 null을 반환해 라우트가 503으로 안내 — 서버 부팅에는 영향 없음.

import { logFor } from './logger.js'

const log = logFor('bigquery')
let _client = null
let _checked = false

/**
 * BigQuery 클라이언트를 lazy 초기화.
 * GCP_PROJECT_ID 미설정 시 null 반환 (Phase 2 이전 dev 환경 호환).
 */
export async function getBigQueryClient() {
  if (_checked) return _client
  _checked = true
  const projectId = process.env.GCP_PROJECT_ID
  if (!projectId) {
    log.warn('GCP_PROJECT_ID 미설정 — BigQuery 브릿지 비활성')
    return null
  }
  try {
    const { BigQuery } = await import('@google-cloud/bigquery')
    _client = new BigQuery({ projectId })
    log.info({ projectId }, 'BigQuery 클라이언트 초기화')
    return _client
  } catch (err) {
    log.error({ err: err.message }, 'BigQuery 클라이언트 초기화 실패')
    return null
  }
}

export const BQ_DATASET = process.env.BQ_DATASET || 'semrush_data'

/**
 * 데이터셋·테이블 fully-qualified ID
 */
export function tableRef(table) {
  const projectId = process.env.GCP_PROJECT_ID
  return `\`${projectId}.${BQ_DATASET}.${table}\``
}
