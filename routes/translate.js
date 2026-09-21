// ─── Translate API — /api/translate ──────────────────────────────────────
// 1차: google-translate-api-x (비공식·무료). 운영(Render) IP 가 Google 에 rate-limit/차단되면
// 통째 실패하는 반복 이슈 (2026-08-28 브라우저 직접 호출 → 서버 프록시 이전, 2026-09-21 서버도 차단).
// 2차 폴백: Anthropic Claude (Haiku) — HTML 태그 보존 + JSON 배열 왕복 + 길이 검증 (invalid_output 거부).
import { Router } from 'express'
import translate from 'google-translate-api-x'
import Anthropic from '@anthropic-ai/sdk'
import { callClaudeInsight, INSIGHT_DEFAULT_MAX_RETRIES, classifyClaudeError } from '../src/shared/insightAgent.js'
import { appendInsightRun } from '../lib/insight-runs.js'
import { validateBody, TranslateSchema } from '../lib/validate.js'
import { logFor } from '../lib/logger.js'

const log = logFor('translate')

const TRANSLATE_BATCH = 20
// Claude 폴백 — 한 호출당 입력 총량 제한 (출력 JSON 이 max_tokens 안에 안전히 들어오게)
const CLAUDE_BATCH_CHARS = 6000
const CLAUDE_MODEL = 'claude-haiku-4-5'
const CLAUDE_MAX_TOKENS = 16000
// Haiku 단가 ($/1M tokens) — insightAgent.estimateCostUsd 는 Opus 고정 단가라 여기서 재계산
const HAIKU_IN_USD_PER_1M = 1
const HAIKU_OUT_USD_PER_1M = 5

async function googleTranslate(texts, from, to) {
  const translated = []
  for (let i = 0; i < texts.length; i += TRANSLATE_BATCH) {
    const batch = texts.slice(i, i + TRANSLATE_BATCH)
    const results = await translate(batch, { from: from || 'ko', to })
    const arr = Array.isArray(results) ? results : [results]
    translated.push(...arr.map(r => r.text))
  }
  return translated
}

// 입력 총 글자수 기준 배치 분할 — 단일 항목이 상한을 넘으면 그 항목만 단독 배치
export function _chunkForClaude(texts, maxChars = CLAUDE_BATCH_CHARS) {
  const batches = []
  let cur = [], curLen = 0
  for (const t of texts) {
    const len = String(t).length
    if (cur.length && curLen + len > maxChars) { batches.push(cur); cur = []; curLen = 0 }
    cur.push(t); curLen += len
  }
  if (cur.length) batches.push(cur)
  return batches
}

// 모델 출력에서 JSON 배열 추출 — 코드펜스/앞뒤 설명 방어. 실패 시 null.
export function _parseJsonArray(text) {
  const s = String(text || '')
  const start = s.indexOf('[')
  const end = s.lastIndexOf(']')
  if (start < 0 || end <= start) return null
  try {
    const arr = JSON.parse(s.slice(start, end + 1))
    return Array.isArray(arr) ? arr : null
  } catch { return null }
}

async function claudeTranslate(texts, from, to) {
  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) return null
  const client = new Anthropic({ apiKey, maxRetries: INSIGHT_DEFAULT_MAX_RETRIES })
  const systemPrompt = [
    '너는 번역기다. JSON 배열로 주어진 각 문자열을 지정된 언어로 번역해, 같은 길이·같은 순서의 JSON 배열 하나만 출력한다.',
    'HTML 태그·속성·인라인 스타일·엔티티(&nbsp; 등)·숫자·URL·브랜드명은 그대로 보존하고, 사람이 읽는 텍스트만 번역한다.',
    '원문의 의미·톤·약어를 유지하고 임의로 다듬거나 보강하지 않는다.',
    '출력은 JSON 배열 하나뿐 — 설명·코드펜스·주석 금지.',
  ].join('\n')
  const out = []
  for (const batch of _chunkForClaude(texts)) {
    // 대용량 데이터는 지시보다 위에 배치 (ai.md §3.8)
    const userPrompt = `[입력 JSON 배열 — 원문 언어: ${from || 'ko'}]\n${JSON.stringify(batch)}\n\n[지시]\n위 배열의 각 문자열을 '${to}' 언어로 번역한 JSON 배열만 출력하라.`
    const t0 = Date.now()
    try {
      const r = await callClaudeInsight({ client, systemPrompt, userPrompt, model: CLAUDE_MODEL, maxTokens: CLAUDE_MAX_TOKENS })
      const arr = _parseJsonArray(r.insight)
      if (!arr || arr.length !== batch.length) {
        const err = new Error(`invalid_output: 번역 결과 배열 불일치 (${arr ? arr.length : 'parse실패'} ≠ ${batch.length})`)
        // @ts-ignore
        err.kind = 'invalid_output'
        throw err
      }
      appendInsightRun({
        type: 'translate', model: CLAUDE_MODEL, ok: true,
        inputTokens: r.inputTokens, outputTokens: r.outputTokens,
        costUsd: +(r.inputTokens * HAIKU_IN_USD_PER_1M / 1e6 + r.outputTokens * HAIKU_OUT_USD_PER_1M / 1e6).toFixed(6),
        latencyMs: r.latencyMs,
        preview: String(arr[0] || '').slice(0, 200),
      })
      out.push(...arr.map(String))
    } catch (e) {
      appendInsightRun({
        type: 'translate', model: CLAUDE_MODEL, ok: false,
        kind: e?.kind || classifyClaudeError(e)?.kind || 'unknown',
        error: String(e?.message || e).slice(0, 300),
        latencyMs: Date.now() - t0,
      })
      throw e
    }
  }
  return out
}

export const translateRouter = Router()

translateRouter.post('/api/translate', validateBody(TranslateSchema), async (req, res) => {
  const { texts, from, to } = req.body
  try {
    const translated = await googleTranslate(texts, from, to)
    res.json({ ok: true, translated })
  } catch (gErr) {
    log.warn({ err: gErr.message }, 'google translate failed → Claude 폴백 시도')
    try {
      const translated = await claudeTranslate(texts, from, to)
      if (!translated) {
        return res.status(500).json({ ok: false, error: '번역 실패: ' + gErr.message + ' (ANTHROPIC_API_KEY 미설정 — Claude 폴백 불가)' })
      }
      res.json({ ok: true, translated, engine: 'claude' })
    } catch (cErr) {
      log.error({ google: gErr.message, claude: cErr.message }, 'translate failed (google + claude)')
      res.status(500).json({ ok: false, error: '번역 실패: ' + cErr.message })
    }
  }
})
