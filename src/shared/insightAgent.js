// ─── 리포트 생성 에이전트 — 순수 함수 모듈 (server.js 핸들러 분해) ───────────
// C2(핸들러 분해) + C5(프롬프트 버전 관리) + C7(정규식 분리)

import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const PROMPT_ROOT = join(__dirname, '..', '..', 'prompts')

export const INSIGHT_ARCHIVE_LIMIT = 12
export const INSIGHT_PAST_EXAMPLES = 3
export const INSIGHT_DEFAULT_MODEL = 'claude-sonnet-4-5-20251001'
export const INSIGHT_DEFAULT_MAX_TOKENS = 4096
// Claude Sonnet 4.5 단가 (per 1M tokens)
export const CLAUDE_INPUT_USD_PER_1M = 3
export const CLAUDE_OUTPUT_USD_PER_1M = 15

// type → archives 키 매핑
export const ARCHIVE_KEY_MAP = {
  totalInsight: 'totalInsight',
  product: 'productInsight', productHowToRead: 'productHowToRead',
  citation: 'citationInsight', citationHowToRead: 'citationHowToRead',
  dotcom: 'dotcomInsight', dotcomHowToRead: 'dotcomHowToRead',
  cnty: 'cntyInsight', cntyHowToRead: 'cntyHowToRead',
  citDomain: 'citDomainInsight', citDomainHowToRead: 'citDomainHowToRead',
  citCnty: 'citCntyInsight', citCntyHowToRead: 'citCntyHowToRead',
  todo: 'todoText', notice: 'noticeText', kpiLogic: 'kpiLogicText',
}

export function resolveArchiveKey(type, data) {
  let key = ARCHIVE_KEY_MAP[type] || type
  if (type === 'howToRead' && data?.section) {
    if (data.section.includes('제품')) key = 'productHowToRead'
    else if (data.section.includes('국가별 GEO')) key = 'cntyHowToRead'
    else if (data.section.includes('도메인별')) key = 'citDomainHowToRead'
    else if (data.section.includes('국가별 Citation')) key = 'citCntyHowToRead'
    else if (data.section.includes('Citation')) key = 'citationHowToRead'
    else if (data.section.includes('닷컴')) key = 'dotcomHowToRead'
  }
  return key
}

// 과거 발행본 수치 마스킹 — 옛 숫자 복사 방지
export function maskNumbers(text) {
  if (!text) return text
  return text
    .replace(/[\d,]+\.?\d*\s*%p/g, '[N]%p')
    .replace(/[\d,]+\.?\d*\s*%/g, '[N]%')
    .replace(/[\d,]+\.?\d*\s*건/g, '[N]건')
    .replace(/(?<![a-zA-Z])[\d,]+\.?\d*(?=\s*[~→개위])/g, '[N]')
}

// 프롬프트 파일 로더 (버전별로 폴더 분리: prompts/v1, v2, ...)
function loadPromptFile(version, name) {
  return readFileSync(join(PROMPT_ROOT, version, `${name}.txt`), 'utf-8')
}

function applyTemplate(template, vars) {
  return Object.entries(vars).reduce((acc, [k, v]) => acc.replaceAll(`{{${k}}}`, v ?? ''), template)
}

/**
 * system prompt를 빌드한다.
 * @param {object} opts
 * @param {string} opts.rules — AI Settings의 작성 규칙
 * @param {string} opts.lang — 'ko' | 'en'
 * @param {string} opts.maskedTemplate — 마스킹된 기준 템플릿 (없을 수 있음)
 * @param {string} opts.maskedPastExamples — 마스킹된 과거 예시들 (없을 수 있음)
 * @param {string} [opts.version='v1']
 */
export function buildSystemPrompt({ rules, lang, maskedTemplate, maskedPastExamples, version = 'v1' }) {
  const langInstruction = lang === 'en' ? '영어로 작성' : '한국어로 작성'
  let templateBlock = ''
  if (maskedTemplate) {
    templateBlock = applyTemplate(loadPromptFile(version, 'system.template'), {
      TEMPLATE: maskedTemplate,
      PAST_EXAMPLES: maskedPastExamples || '',
    })
  } else if (maskedPastExamples) {
    templateBlock = applyTemplate(loadPromptFile(version, 'system.examples-only'), {
      PAST_EXAMPLES: maskedPastExamples,
    })
  }
  return applyTemplate(loadPromptFile(version, 'system.base'), {
    RULES: rules || '',
    LANG_INSTRUCTION: langInstruction,
    TEMPLATE_BLOCK: templateBlock,
  })
}

// user prompt를 untrusted_data로 격리 (C3 인젝션 방어)
export function wrapUserPrompt(rawPrompt) {
  return `<untrusted_data>\n${rawPrompt}\n</untrusted_data>`
}

// Claude Sonnet 4.5 단가 기준 비용 계산
export function estimateCostUsd(inputTokens, outputTokens) {
  return +(
    inputTokens * CLAUDE_INPUT_USD_PER_1M / 1_000_000 +
    outputTokens * CLAUDE_OUTPUT_USD_PER_1M / 1_000_000
  ).toFixed(6)
}

/**
 * C8 — 인사이트 컨텍스트 로더 (archives 의존성 주입)
 * @param {object} opts
 * @param {string} opts.type
 * @param {object} opts.data
 * @param {() => Array} opts.readArchives — 의존성 주입(테스트 용이)
 * @returns {{ archiveKey: string, latestTemplate: string, pastExamples: string,
 *             maskedTemplate: string, maskedPastExamples: string }}
 */
export function loadInsightContext({ type, data, readArchives }) {
  const archiveKey = resolveArchiveKey(type, data)
  const archives = (readArchives() || []).slice(0, INSIGHT_ARCHIVE_LIMIT)
  const latestTemplate = archives[0]?.insights?.[archiveKey] || ''
  const pastExamples = archives.slice(0, INSIGHT_PAST_EXAMPLES).map(a => {
    const text = a.insights?.[archiveKey] || ''
    return text ? `\n--- [${a.period}] ---\n${text}` : ''
  }).filter(Boolean).join('\n')
  return {
    archiveKey,
    latestTemplate,
    pastExamples,
    maskedTemplate: maskNumbers(latestTemplate),
    maskedPastExamples: maskNumbers(pastExamples),
  }
}

/**
 * C8 — Claude 호출 + 관찰성 메타 산출 (Anthropic SDK 의존성 주입)
 * @param {object} opts
 * @param {object} opts.client — Anthropic SDK 인스턴스
 * @param {string} opts.systemPrompt
 * @param {string} opts.userPrompt
 * @param {string} opts.model
 * @param {number} opts.maxTokens
 * @returns {Promise<{ insight: string, inputTokens: number, outputTokens: number,
 *                    latencyMs: number, costUsd: number, stopReason: string }>}
 */
export async function callClaudeInsight({ client, systemPrompt, userPrompt, model, maxTokens }) {
  const t0 = Date.now()
  const message = await client.messages.create({
    model,
    max_tokens: maxTokens,
    system: systemPrompt,
    messages: [{ role: 'user', content: userPrompt }],
  })
  const latencyMs = Date.now() - t0
  const usage = message.usage || {}
  const inputTokens = usage.input_tokens || 0
  const outputTokens = usage.output_tokens || 0
  return {
    insight: message.content?.[0]?.text || '',
    inputTokens,
    outputTokens,
    latencyMs,
    costUsd: estimateCostUsd(inputTokens, outputTokens),
    stopReason: message.stop_reason,
  }
}

// Anthropic SDK 에러를 분류 (C13)
export function classifyClaudeError(err) {
  const status = err?.status
  const msg = err?.message || ''
  if (status === 429 || /rate.?limit/i.test(msg)) return { kind: 'rate_limit', httpStatus: 429 }
  if (status === 529 || /overload/i.test(msg)) return { kind: 'overloaded', httpStatus: 503 }
  if (status === 400) return { kind: 'bad_request', httpStatus: 400 }
  if (status === 401 || status === 403) return { kind: 'auth', httpStatus: 502 }
  if (status >= 500) return { kind: 'upstream_5xx', httpStatus: 502 }
  return { kind: 'error', httpStatus: 500 }
}
