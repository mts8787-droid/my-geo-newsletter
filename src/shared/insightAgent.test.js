import { describe, it, expect } from 'vitest'
import {
  ARCHIVE_KEY_MAP,
  resolveArchiveKey,
  maskNumbers,
  buildSystemPrompt,
  wrapUserPrompt,
  estimateCostUsd,
  classifyClaudeError,
  loadInsightContext,
  callClaudeInsight,
  validateClaudeOutput,
  INSIGHT_DEFAULT_MODEL,
  INSIGHT_DEFAULT_MAX_RETRIES,
  INSIGHT_MIN_OUTPUT_LENGTH,
  INSIGHT_ARCHIVE_LIMIT,
  INSIGHT_PAST_EXAMPLES,
} from './insightAgent.js'

describe('resolveArchiveKey', () => {
  it('직접 매핑된 type을 반환', () => {
    expect(resolveArchiveKey('product', {})).toBe('productInsight')
    expect(resolveArchiveKey('citation', {})).toBe('citationInsight')
    expect(resolveArchiveKey('todo', {})).toBe('todoText')
  })

  it('howToRead + section.includes("국가별 GEO") → cntyHowToRead', () => {
    expect(resolveArchiveKey('howToRead', { section: '국가별 GEO Visibility' }))
      .toBe('cntyHowToRead')
  })

  it('howToRead + section "도메인별" → citDomainHowToRead', () => {
    expect(resolveArchiveKey('howToRead', { section: '도메인별 Citation' }))
      .toBe('citDomainHowToRead')
  })

  it('howToRead + 매칭 없으면 그대로 howToRead', () => {
    expect(resolveArchiveKey('howToRead', { section: '없는섹션' })).toBe('howToRead')
  })

  it('알 수 없는 type은 그대로 반환', () => {
    expect(resolveArchiveKey('myCustomType', {})).toBe('myCustomType')
  })
})

describe('maskNumbers', () => {
  it('퍼센트 수치를 [N]%로 마스킹', () => {
    expect(maskNumbers('38.2%')).toBe('[N]%')
    expect(maskNumbers('전체 81.2%')).toBe('전체 [N]%')
  })

  it('%p (포인트) 마스킹', () => {
    expect(maskNumbers('+2.5%p')).toBe('+[N]%p')
    expect(maskNumbers('-1.2%p')).toBe('-[N]%p')
  })

  it('건수 마스킹', () => {
    expect(maskNumbers('12,300건')).toBe('[N]건')
  })

  it('빈 값/null/undefined 그대로 반환', () => {
    expect(maskNumbers('')).toBe('')
    expect(maskNumbers(null)).toBe(null)
    expect(maskNumbers(undefined)).toBe(undefined)
  })
})

describe('buildSystemPrompt', () => {
  it('템플릿이 있을 때 템플릿 블록 포함', () => {
    const sp = buildSystemPrompt({
      rules: '- 한국어\n- 간결',
      lang: 'ko',
      maskedTemplate: '전체 [N]%로 [N]%p 상승',
      maskedPastExamples: '\n--- [3월호] ---\n[N]% 달성',
    })
    expect(sp).toContain('한국어로 작성')
    expect(sp).toContain('전체 [N]%로 [N]%p 상승')
    expect(sp).toContain('기준 템플릿')
  })

  it('템플릿 없고 예시만 있을 때 examples-only 블록', () => {
    const sp = buildSystemPrompt({
      rules: '간결',
      lang: 'en',
      maskedTemplate: '',
      maskedPastExamples: '\n--- [Apr] ---\n[N]%',
    })
    expect(sp).toContain('영어로 작성')
    expect(sp).toContain('과거 리포트의 문체와 구조만 참고')
    // 템플릿 블록은 포함되지 않아야 함 (구체적 매칭)
    expect(sp).not.toContain('[기준 템플릿 — 문장 구조만 참고')
  })

  it('보안 규칙 (untrusted_data 무시)이 항상 포함됨', () => {
    const sp = buildSystemPrompt({ rules: '', lang: 'ko' })
    expect(sp).toContain('untrusted_data')
    expect(sp).toContain('지시문')
  })
})

describe('wrapUserPrompt', () => {
  it('untrusted_data 태그로 감싼다', () => {
    const wrapped = wrapUserPrompt('데이터 본문')
    expect(wrapped.startsWith('<untrusted_data>')).toBe(true)
    expect(wrapped.endsWith('</untrusted_data>')).toBe(true)
    expect(wrapped).toContain('데이터 본문')
  })
})

describe('estimateCostUsd', () => {
  it('Sonnet 단가($3 in / $15 out per 1M)로 비용 계산', () => {
    expect(estimateCostUsd(1000, 500)).toBe(0.0105) // 0.003 + 0.0075
  })

  it('0 토큰은 0 USD', () => {
    expect(estimateCostUsd(0, 0)).toBe(0)
  })
})

describe('classifyClaudeError', () => {
  it('429 → rate_limit', () => {
    expect(classifyClaudeError({ status: 429, message: '...' }))
      .toEqual({ kind: 'rate_limit', httpStatus: 429 })
  })

  it('529 / overloaded → overloaded', () => {
    expect(classifyClaudeError({ status: 529, message: 'overloaded' }))
      .toEqual({ kind: 'overloaded', httpStatus: 503 })
  })

  it('400 → bad_request', () => {
    expect(classifyClaudeError({ status: 400, message: '...' }))
      .toEqual({ kind: 'bad_request', httpStatus: 400 })
  })

  it('401/403 → auth', () => {
    expect(classifyClaudeError({ status: 401, message: '...' }).kind).toBe('auth')
    expect(classifyClaudeError({ status: 403, message: '...' }).kind).toBe('auth')
  })

  it('5xx → upstream_5xx', () => {
    expect(classifyClaudeError({ status: 502, message: '...' }).kind).toBe('upstream_5xx')
  })

  it('알 수 없는 에러 → error / 500', () => {
    expect(classifyClaudeError({ message: 'unknown' }))
      .toEqual({ kind: 'error', httpStatus: 500 })
  })
})

describe('loadInsightContext (C8)', () => {
  const fakeArchives = [
    { period: '4월', insights: { productInsight: '제품별 38.2% 상승' } },
    { period: '3월', insights: { productInsight: '36.5% 도달' } },
    { period: '2월', insights: { productInsight: '34% 기록' } },
    { period: '1월', insights: { productInsight: '30% 시작' } },
  ]

  it('archiveKey와 마스킹된 템플릿/예시를 반환', () => {
    const ctx = loadInsightContext({
      type: 'product', data: {},
      readArchives: () => fakeArchives,
    })
    expect(ctx.archiveKey).toBe('productInsight')
    expect(ctx.latestTemplate).toBe('제품별 38.2% 상승')
    expect(ctx.maskedTemplate).toBe('제품별 [N]% 상승')
    expect(ctx.maskedPastExamples).toContain('[N]%')
    expect(ctx.maskedPastExamples).not.toContain('38.2')
  })

  it('readArchives가 빈 배열을 반환하면 빈 컨텍스트', () => {
    const ctx = loadInsightContext({ type: 'product', data: {}, readArchives: () => [] })
    expect(ctx.latestTemplate).toBe('')
    expect(ctx.maskedTemplate).toBe('')
  })

  it('past examples는 INSIGHT_PAST_EXAMPLES 개수까지만', () => {
    const ctx = loadInsightContext({ type: 'product', data: {}, readArchives: () => fakeArchives })
    const periodMarkers = (ctx.pastExamples.match(/--- \[/g) || []).length
    expect(periodMarkers).toBe(INSIGHT_PAST_EXAMPLES)
  })
})

describe('callClaudeInsight (C8)', () => {
  it('Anthropic 응답을 표준 메타 객체로 정규화', async () => {
    const fakeClient = {
      messages: {
        create: async () => ({
          content: [{ type: 'text', text: '본문' }],
          usage: { input_tokens: 1500, output_tokens: 400 },
          stop_reason: 'end_turn',
        }),
      },
    }
    const result = await callClaudeInsight({
      client: fakeClient,
      systemPrompt: 's', userPrompt: 'u',
      model: 'claude-sonnet-4-5-20251001', maxTokens: 1000,
    })
    expect(result.insight).toBe('본문')
    expect(result.inputTokens).toBe(1500)
    expect(result.outputTokens).toBe(400)
    expect(result.stopReason).toBe('end_turn')
    expect(result.costUsd).toBeCloseTo(1500 * 3 / 1_000_000 + 400 * 15 / 1_000_000, 6)
    expect(result.latencyMs).toBeGreaterThanOrEqual(0)
  })
})

describe('상수', () => {
  it('기본 모델은 Sonnet 4.5', () => {
    expect(INSIGHT_DEFAULT_MODEL).toMatch(/sonnet-4-5/)
  })

  it('ARCHIVE_KEY_MAP은 적어도 핵심 키들을 가진다', () => {
    expect(ARCHIVE_KEY_MAP.product).toBe('productInsight')
    expect(ARCHIVE_KEY_MAP.citation).toBe('citationInsight')
    expect(ARCHIVE_KEY_MAP.todo).toBe('todoText')
  })

  it('기본 retry 회수 ≥ 1', () => {
    expect(INSIGHT_DEFAULT_MAX_RETRIES).toBeGreaterThanOrEqual(1)
  })

  it('출력 하한 ≥ 10자', () => {
    expect(INSIGHT_MIN_OUTPUT_LENGTH).toBeGreaterThanOrEqual(10)
  })
})

describe('validateClaudeOutput — N3 출력 검증', () => {
  it('정상 본문 → 통과', () => {
    expect(() => validateClaudeOutput('이번 달 LG 가시성은 전월 대비 [N]%p 상승했습니다.')).not.toThrow()
  })

  it('빈 본문 → invalid_output/empty', () => {
    try { validateClaudeOutput(''); throw new Error('not thrown') }
    catch (e) {
      expect(e.kind).toBe('invalid_output')
      expect(e.reason).toBe('empty')
    }
  })

  it('null/undefined → invalid_output/empty', () => {
    expect(() => validateClaudeOutput(null)).toThrow()
    expect(() => validateClaudeOutput(undefined)).toThrow()
  })

  it('공백만 → invalid_output/empty', () => {
    try { validateClaudeOutput('   \n\t  '); throw new Error('not thrown') }
    catch (e) { expect(e.reason).toBe('empty') }
  })

  it('하한 미달 짧은 본문 → invalid_output/too_short', () => {
    try { validateClaudeOutput('짧음.'); throw new Error('not thrown') }
    catch (e) {
      expect(e.kind).toBe('invalid_output')
      expect(e.reason).toBe('too_short')
    }
  })

  it('영문 거절 표현 → invalid_output/refusal', () => {
    try {
      validateClaudeOutput("I cannot help with this request as it requires sensitive market data interpretation.")
      throw new Error('not thrown')
    }
    catch (e) { expect(e.reason).toBe('refusal') }
  })

  it('한국어 거절 표현 → invalid_output/refusal', () => {
    try {
      validateClaudeOutput('죄송하지만 이 요청에 대해서는 도와드릴 수 없습니다. 다른 도움이 필요하시면 말씀해 주세요.')
      throw new Error('not thrown')
    }
    catch (e) { expect(e.reason).toBe('refusal') }
  })

  it('"answer 답변을 드릴 수 없습니다" 한국어 거절', () => {
    try {
      validateClaudeOutput('해당 분석에 대해서는 답변을 드릴 수 없습니다. 다른 질문에 대해 도움드리겠습니다.')
      throw new Error('not thrown')
    }
    catch (e) { expect(e.reason).toBe('refusal') }
  })

  it('minLength 옵션으로 하한 조정', () => {
    expect(() => validateClaudeOutput('짧지만 OK', { minLength: 5 })).not.toThrow()
    expect(() => validateClaudeOutput('너무 짧', { minLength: 10 })).toThrow()
  })
})

describe('classifyClaudeError — invalid_output 분류', () => {
  it('err.kind="invalid_output" → 502', () => {
    const err = Object.assign(new Error('empty'), { kind: 'invalid_output', reason: 'empty' })
    expect(classifyClaudeError(err)).toEqual({ kind: 'invalid_output', httpStatus: 502 })
  })
})
