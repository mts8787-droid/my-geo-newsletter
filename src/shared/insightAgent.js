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
export const INSIGHT_DEFAULT_MAX_RETRIES = 3
export const INSIGHT_MIN_OUTPUT_LENGTH = 30
// Claude가 거절했을 때 본문에 자주 등장하는 패턴 (KO/EN). 부분 일치 거부 신호로만 사용
export const REFUSAL_PATTERNS = [
  /i\s+can(?:'|no)t\s+(?:help|assist|provide)/i,
  /i'?m\s+(?:unable|sorry)/i,
  /도와드릴\s*수\s*없습니다/,
  /답변(?:을)?\s*드릴\s*수\s*없습니다/,
  /응답할\s*수\s*없습니다/,
]
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

// C1 — tool use 루프 최대 반복 횟수 (무한 루프 방지)
export const INSIGHT_MAX_TOOL_STEPS = 5

/**
 * C8 + C1 — Claude 호출. tools 미지정 시 단일 호출, 지정 시 tool use 루프.
 * @param {object} opts
 * @param {object} opts.client — Anthropic SDK 인스턴스
 * @param {string} opts.systemPrompt
 * @param {string} opts.userPrompt
 * @param {string} opts.model
 * @param {number} opts.maxTokens
 * @param {Array}  [opts.tools] — Anthropic tool schemas (선택). 빈/미지정이면 단일 호출.
 * @param {(call: {name:string,input:any}) => Promise<any>|any} [opts.executeTool] — tool dispatcher
 * @param {number} [opts.maxSteps=INSIGHT_MAX_TOOL_STEPS] — tool use 루프 상한
 * @returns {Promise<{ insight: string, inputTokens: number, outputTokens: number,
 *                    latencyMs: number, costUsd: number, stopReason: string,
 *                    steps: number, toolCalls: Array }>}
 */
export async function callClaudeInsight({ client, systemPrompt, userPrompt, model, maxTokens, tools, executeTool, maxSteps = INSIGHT_MAX_TOOL_STEPS }) {
  const t0 = Date.now()
  const useTools = Array.isArray(tools) && tools.length > 0 && typeof executeTool === 'function'
  const messages = [{ role: 'user', content: userPrompt }]
  let inputTokens = 0, outputTokens = 0
  let stopReason = null
  const toolCalls = []
  let steps = 0
  let lastMessage = null

  for (steps = 0; steps <= maxSteps; steps++) {
    const req = { model, max_tokens: maxTokens, system: systemPrompt, messages }
    if (useTools) req.tools = tools
    const message = await client.messages.create(req)
    lastMessage = message
    const usage = message.usage || {}
    inputTokens += usage.input_tokens || 0
    outputTokens += usage.output_tokens || 0
    stopReason = message.stop_reason

    if (!useTools) break  // 단일 호출 모드 — 즉시 종료

    // tool use 블록 수집
    const toolUses = (message.content || []).filter(b => b.type === 'tool_use')
    if (!toolUses.length) break  // 모델이 더 이상 도구를 부르지 않으면 종료

    if (steps >= maxSteps) {
      const err = new Error(`tool use 루프가 ${maxSteps}회를 초과했습니다`)
      err.kind = 'tool_loop_exceeded'
      throw err
    }

    // assistant 응답을 messages에 누적, tool_result 직렬화
    messages.push({ role: 'assistant', content: message.content })
    const toolResults = []
    for (const use of toolUses) {
      let result, isError = false
      try {
        result = await executeTool({ name: use.name, input: use.input })
      } catch (err) {
        result = `tool error: ${err?.message || String(err)}`
        isError = true
      }
      toolCalls.push({ name: use.name, input: use.input, isError })
      toolResults.push({
        type: 'tool_result',
        tool_use_id: use.id,
        content: typeof result === 'string' ? result : JSON.stringify(result),
        ...(isError ? { is_error: true } : {}),
      })
    }
    messages.push({ role: 'user', content: toolResults })
  }

  const latencyMs = Date.now() - t0
  // 마지막 응답의 text 블록만 합산 (tool_use 블록은 제외).
  // 실제 SDK는 type:'text'를 항상 보내지만, 단일 호출 호환을 위해 type 미설정 + text 보유 블록도 수용
  const insight = (lastMessage?.content || [])
    .filter(b => b.type === 'text' || (b.type == null && typeof b.text === 'string'))
    .map(b => b.text || '')
    .join('\n')
    .trim()
  return {
    insight,
    inputTokens,
    outputTokens,
    latencyMs,
    costUsd: estimateCostUsd(inputTokens, outputTokens),
    stopReason,
    steps,
    toolCalls,
  }
}

// C1 — JSON 데이터를 안전하게 path로 조회 (점 표기·인덱스 지원, 프로토타입 오염 차단)
// 예: 'products[0].score', 'total.LG', 'citations[2].domain'
export function lookupByPath(root, path) {
  if (root == null || typeof path !== 'string') return undefined
  const parts = path.match(/[^.[\]]+/g) || []
  let cur = root
  for (const part of parts) {
    if (cur == null) return undefined
    // 프로토타입 오염 방지
    if (part === '__proto__' || part === 'prototype' || part === 'constructor') return undefined
    if (Array.isArray(cur)) {
      const idx = Number(part)
      if (!Number.isInteger(idx)) return undefined
      cur = cur[idx]
    } else if (typeof cur === 'object') {
      cur = cur[part]
    } else {
      return undefined
    }
  }
  return cur
}

// C1 — 기본 도구 빌더: 데이터 컨텍스트를 클로저로 캡처
export function buildLookupTool(dataContext) {
  return {
    schema: {
      name: 'lookup',
      description: '제공된 데이터에서 특정 경로의 값을 조회합니다. 수치 환각 방지·근거 검증에 사용. 예: "products[0].score", "total.LG"',
      input_schema: {
        type: 'object',
        properties: {
          path: { type: 'string', description: '점·괄호 표기 경로 (예: products[0].score)' },
        },
        required: ['path'],
      },
    },
    execute: ({ input }) => {
      const v = lookupByPath(dataContext, input?.path)
      if (v === undefined) return { ok: false, error: `path not found: ${input?.path}` }
      return { ok: true, value: v }
    },
  }
}

// N3 — Claude 응답 본문 검증. 빈 본문·refuse 응답·길이 하한 미달은 'invalid_output'으로 거부
export function validateClaudeOutput(insight, { minLength = INSIGHT_MIN_OUTPUT_LENGTH } = {}) {
  const text = String(insight || '').trim()
  if (!text) throwInvalidOutput('empty', '응답 본문이 비어있습니다')
  if (text.length < minLength) throwInvalidOutput('too_short', `응답 길이가 너무 짧습니다 (${text.length}자, 하한 ${minLength})`)
  for (const re of REFUSAL_PATTERNS) {
    if (re.test(text)) throwInvalidOutput('refusal', '모델이 응답을 거절했습니다')
  }
}

function throwInvalidOutput(reason, message) {
  const err = new Error(message)
  err.kind = 'invalid_output'
  err.reason = reason
  throw err
}

// Anthropic SDK 에러를 분류 (C13). N3 invalid_output은 미리 표시된 err.kind를 우선
export function classifyClaudeError(err) {
  if (err?.kind === 'invalid_output') return { kind: 'invalid_output', httpStatus: 502 }
  const status = err?.status
  const msg = err?.message || ''
  if (status === 429 || /rate.?limit/i.test(msg)) return { kind: 'rate_limit', httpStatus: 429 }
  if (status === 529 || /overload/i.test(msg)) return { kind: 'overloaded', httpStatus: 503 }
  if (status === 400) return { kind: 'bad_request', httpStatus: 400 }
  if (status === 401 || status === 403) return { kind: 'auth', httpStatus: 502 }
  if (status >= 500) return { kind: 'upstream_5xx', httpStatus: 502 }
  return { kind: 'error', httpStatus: 500 }
}
