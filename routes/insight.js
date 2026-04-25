// ─── AI Insight Generation (Claude API) — /api/generate-insight ───────────
import { Router } from 'express'
import Anthropic from '@anthropic-ai/sdk'
import { buildInsightPrompt } from '../src/shared/insightPrompts.js'
import {
  INSIGHT_DEFAULT_MODEL,
  INSIGHT_DEFAULT_MAX_TOKENS,
  loadInsightContext,
  buildSystemPrompt,
  wrapUserPrompt,
  callClaudeInsight,
  classifyClaudeError,
} from '../src/shared/insightAgent.js'
import { readArchives, readAiSettings } from '../lib/storage.js'
import { appendInsightRun } from '../lib/insight-runs.js'
import { logFor } from '../lib/logger.js'
import { validateBody, InsightPostSchema } from '../lib/validate.js'

const log = logFor('insight')

export const insightRouter = Router()

insightRouter.post('/api/generate-insight', validateBody(InsightPostSchema), async (req, res) => {
  const { type, data, lang, rules } = req.body
  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) return res.status(500).json({ ok: false, error: 'ANTHROPIC_API_KEY가 설정되지 않았습니다' })

  const t0 = Date.now()
  let archiveKey = type
  let model = INSIGHT_DEFAULT_MODEL
  try {
    const client = new Anthropic({ apiKey })
    const aiSettings = readAiSettings()

    const ctx = loadInsightContext({ type, data, readArchives })
    archiveKey = ctx.archiveKey

    const systemPrompt = buildSystemPrompt({
      rules: rules || aiSettings.promptRules,
      lang,
      maskedTemplate: ctx.maskedTemplate,
      maskedPastExamples: ctx.maskedPastExamples,
    })
    const userPrompt = wrapUserPrompt(buildInsightPrompt(type, data))

    model = aiSettings.model || INSIGHT_DEFAULT_MODEL
    const result = await callClaudeInsight({
      client, systemPrompt, userPrompt, model,
      maxTokens: aiSettings.maxTokens || INSIGHT_DEFAULT_MAX_TOKENS,
    })

    log.info({
      type, archiveKey, model, lang: lang || 'ko',
      inputTokens: result.inputTokens, outputTokens: result.outputTokens,
      latencyMs: result.latencyMs, costUsd: result.costUsd,
      stopReason: result.stopReason,
    }, 'insight ok')
    appendInsightRun({
      type, archiveKey, model, lang: lang || 'ko',
      inputTokens: result.inputTokens, outputTokens: result.outputTokens,
      latencyMs: result.latencyMs, costUsd: result.costUsd,
      stopReason: result.stopReason, ok: true,
    })

    res.json({ ok: true, insight: result.insight })
  } catch (err) {
    const latencyMs = Date.now() - t0
    const { kind, httpStatus } = classifyClaudeError(err)
    log.error({ kind, type, latencyMs, err: err.message }, 'insight failed')
    appendInsightRun({
      type, archiveKey, model, lang: lang || 'ko',
      inputTokens: 0, outputTokens: 0, latencyMs, costUsd: 0,
      stopReason: null, ok: false, kind, error: err.message,
    })
    res.status(httpStatus).json({ ok: false, kind, error: 'AI 인사이트 생성 실패: ' + err.message })
  }
})
