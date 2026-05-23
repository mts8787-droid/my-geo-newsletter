<!-- 자동 생성 미러 — 원본: .claude/rules/ai.md
     수정은 원본에서. 본 파일은 npm run sync:harness 또는 prebuild 시 자동 갱신. -->

# AI 룰 (AI Rules) — Anthropic API / 인사이트 생성 작업 규칙

> Anthropic SDK 호출 / AI 인사이트 생성 / 응답 검증 / 비용·신뢰성 패턴.
> 실제 워크플로우 (step-by-step) 는 향후 `.claude/skills/ai/SKILL.md` 신설 시 작성.
> 본 문서는 룰 매뉴얼 (참조용). 권고 (~80%). 100% 강제는 훅 영역.

---

## 1. 사용 위치

- `src/shared/insightAgent.js` — AI 인사이트 생성 (Anthropic SDK 직접 호출)
- `src/shared/insightPrompts.js` — 프롬프트 템플릿
- `routes/insight.js` — `/api/generate-insight` 엔드포인트
- `routes/observability.js` — `insight_runs.jsonl` 시각화 (`/admin/observability`)
- `lib/insight-runs.js` — 호출 로그 영구 저장

## 2. AI INTERFACES (CANONICAL)

### 호출 흐름
```
사용자 어드민 → POST /api/generate-insight (type, lang, payload)
  ↓ insightAgent.callClaude(prompt, type, ...)
Anthropic SDK (streaming) → 응답 chunk 누적
  ↓ N3 응답 본문 검증 (빈/거절/길이 하한)
  ↓ insight_runs.jsonl 영구 기록 (ts, type, kind, latency, tokens, cost, ok, error)
응답 → 어드민 UI 반영
```

### 응답 데이터 shape
```js
{
  ts: 1716580000000,
  type: 'product' | 'citation' | 'monthly' | 'weekly' | 'visibility' | ...,
  model: 'claude-opus-4-7-20251022' | 'claude-sonnet-4-6' | ...,
  inputTokens: 12345,
  outputTokens: 3456,
  costUsd: 0.0234,
  latencyMs: 8500,
  ok: true | false,
  kind: 'invalid_output' | 'overloaded' | 'rate_limit' | 'auth' | 'network' | undefined,
  error: '<error message>' | undefined,
  preview: '<output sample>' | undefined,
}
```

## 3. AI DIRECTIVES

### 3.1 Streaming 강제 (N3 + CLAUDE.md NEVER 룰)

**RULE**: `max_tokens > 4096` 인 경우 non-streaming 호출 금지. 반드시 streaming.
- 이유: Anthropic API 가 large output 시 timeout 또는 403 반환
- 패턴 (`insightAgent.js`):
  ```js
  const stream = client.messages.stream({
    model, max_tokens, messages,
  })
  for await (const chunk of stream) { /* ... */ }
  ```

### 3.2 응답 본문 검증 (N3 — invalid_output 분류)

**RULE**: Anthropic 응답이 유효한지 다음 항목으로 검증. 실패 시 `invalid_output` 분류 + throw.

| 검증 항목 | 기준 | 사유 |
|---|---|---|
| **빈 본문** | 응답 텍스트 길이 == 0 | 모델이 응답을 안 한 케이스 |
| **거절 응답** | `I cannot`, `I'm sorry`, `As an AI`, `안전상의 이유로` 같은 거절 패턴 검출 | 사용자가 받은 결과로 부적합 |
| **길이 하한** | 응답 길이 < 50 자 (또는 type 별 기준) | 너무 짧은 응답 — 의미 없음 |
| **JSON 응답 type** | `JSON.parse` 실패 시 | 파싱 안 되는 응답 거부 |

```js
// insightAgent.js 패턴
if (!output || output.length < 50) {
  const err = new Error('invalid_output: empty or too short')
  err.kind = 'invalid_output'
  throw err
}
if (/^(I cannot|I'm sorry|As an AI)/i.test(output)) {
  const err = new Error('invalid_output: refusal pattern')
  err.kind = 'invalid_output'
  throw err
}
```

### 3.3 Anthropic SDK 에러 분류 (C13)

응답 실패 시 `err.kind` 로 분류 — Observability 페이지의 distribution 표시에 사용.

| kind | 트리거 | 사용자 대응 |
|---|---|---|
| `invalid_output` | 위 N3 검증 실패 | 재시도 (모델/프롬프트 조정) |
| `overloaded` | HTTP 529 | 잠시 후 재시도 |
| `rate_limit` | HTTP 429 | rate limit 정책 검토 |
| `auth` | HTTP 401 | API key 확인 |
| `network` | fetch 실패 / timeout | 네트워크 / proxy 확인 |
| `unknown` | 분류 안 됨 | error 메시지 보기 |

```js
// insightAgent.js 의 분류
function classifyError(e) {
  if (e?.kind) return e.kind  // N3 invalid_output 우선
  const status = e?.status || e?.response?.status
  if (status === 529) return 'overloaded'
  if (status === 429) return 'rate_limit'
  if (status === 401) return 'auth'
  if (e?.code === 'ECONNREFUSED' || e?.code === 'ETIMEDOUT') return 'network'
  return 'unknown'
}
```

### 3.4 비용 / 토큰 추적

**RULE**: 모든 호출은 `insight_runs.jsonl` 에 영구 기록. 분실 X.

기록 시점:
- 호출 종료 직전 (성공·실패 모두)
- `ts`, `type`, `model`, `inputTokens`, `outputTokens`, `costUsd`, `latencyMs`, `ok`, `kind`, `error` 필수
- `preview` (output sample, 200자 truncate) 옵셔널

비용 계산 (Anthropic 모델별 단가 — `lib/insight-runs.js` 의 `MODEL_PRICING`):
```js
const PRICING = {
  'claude-opus-4-7':   { input: 0.000015, output: 0.000075 },  // $/token
  'claude-sonnet-4-6': { input: 0.000003, output: 0.000015 },
  'claude-haiku-4-5':  { input: 0.000001, output: 0.000005 },
}
const cost = inputTokens * pricing.input + outputTokens * pricing.output
```

### 3.5 사용자 텍스트 보호 (CLAUDE.md NEVER 룰)

**RULE**: AI 가 받은 사용자 텍스트는 **그대로** 사용. 임의 다듬기 / 정정 / 보강 금지.
- 예: 사용자가 `"Q1 결과 발표"` 라고 적으면 AI 가 `"1분기 결과 발표"` 로 다듬는 것 금지
- 이유: 사용자의 의도 / 톤 / 어휘 선택 존중

프롬프트에 명시:
```
사용자가 작성한 텍스트는 그대로 사용하세요. 어휘·문체·약어 임의 변경 금지.
```

### 3.6 프롬프트 캐싱 (선택)

긴 시스템 프롬프트 + 반복 호출 패턴이면 `cache_control` 활용:
```js
const messages = [{
  role: 'system',
  content: [{
    type: 'text',
    text: longSystemPrompt,
    cache_control: { type: 'ephemeral' },
  }],
}]
```

비용 절감 (입력 토큰 캐싱 시 90% 할인).

## 4. ANTI-PATTERNS (AI)

```
NEVER  max_tokens > 4096 으로 non-streaming 호출 → 403 / timeout
NEVER  AI 응답을 검증 없이 사용자에게 노출 → 빈/거절/짧은 응답 노출 위험
NEVER  AI 호출 결과를 insight_runs 에 기록 안 함 → 비용 추적 + 디버깅 불가
NEVER  사용자 텍스트를 AI 가 임의 다듬기 → 톤·어휘 의도 훼손
NEVER  invalid_output 거부 없이 재시도 무한 루프 → 비용 폭증
NEVER  API key 를 client-side 코드에 노출 → 서버에서만 보유 (.env)
NEVER  Anthropic SDK 의 deprecated 모델 (`claude-3-opus-20240229` 등) 사용 → 최신 모델 ID
```

## 5. VERIFICATION

### 5.1 Observability 페이지 활용

`/admin/observability` 에서 다음 항목 모니터링:
- 누적 비용 / 토큰
- 평균 / p95 지연
- 실패율 / kind 분포 (invalid_output 비율 등)
- 최근 실패 10건 (시각·type·kind·메시지)

### 5.2 신규 type 추가 시

1. `insightAgent.js` 에 type 추가
2. 적절한 프롬프트 템플릿 (`insightPrompts.js`)
3. 응답 검증 기준 (길이 하한 / JSON 파싱 필요 여부 등)
4. `/admin/observability` 의 byType 자동 표시 — 별도 작업 X

### 5.3 비용 알림 (미구현)

월간 비용 임계값 초과 시 알림 (SKILL.md §7.7 self-critique 후보):
```js
const monthlyTotal = sumCost(runs, MONTH_AGO)
if (monthlyTotal > USD_LIMIT) notify(`AI 비용 ${monthlyTotal} 초과`)
```
