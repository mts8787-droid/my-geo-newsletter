# AI Rule (AI Rules) — Anthropic API / 응답 검증 / 비용 추적

> Anthropic SDK 호출 / AI 인사이트 생성 / 응답 검증 / 비용·신뢰성 패턴.
> Rule 매뉴얼 (참조용). 권고 (~80%). 100% 강제는 Hook 영역.
> 본 저장소 구체 변수명·경로는 마지막의 **Reference Example** 섹션 참조.

---

## 1. 사용 위치 (도메인 무관)

AI 호출이 필요한 곳 (필요 항목 — 이름은 자유):
- **AI 에이전트 모듈** — Anthropic SDK 직접 호출 + 응답 검증 + 에러 분류
- **프롬프트 템플릿** — type 별 시스템/유저 프롬프트
- **API 엔드포인트** — 어드민/사용자 요청 받는 라우트
- **관측 페이지** — 호출 통계 시각화 (비용·지연·실패율)
- **호출 로그 저장소** — 모든 호출 영구 기록 (JSONL 파일 또는 DB 테이블)

## 2. AI INTERFACES (CANONICAL)

### 호출 흐름

```
사용자 요청 → POST API endpoint (type, lang, payload)
  ↓ AI agent.call(prompt, type, ...)
Anthropic SDK (streaming) → 응답 chunk 누적
  ↓ 응답 본문 검증 (빈 / 거절 / 길이 하한)
  ↓ 호출 로그 영구 기록 (ts, type, kind, latency, tokens, cost, ok, error)
응답 → UI 반영
```

### 응답 데이터 shape (도메인 무관)

```js
{
  ts: <timestamp>,
  type: <비즈니스 영역 type — 도메인별 정의>,
  model: 'claude-opus-4-7-20251022' | 'claude-sonnet-4-6' | 'claude-haiku-4-5',
  inputTokens: <number>,
  outputTokens: <number>,
  costUsd: <number>,
  latencyMs: <number>,
  ok: true | false,
  kind: 'invalid_output' | 'overloaded' | 'rate_limit' | 'auth' | 'network' | undefined,
  error: '<error message>' | undefined,
  preview: '<output sample>' | undefined,
}
```

## 3. AI DIRECTIVES

### 3.1 Streaming 강제

**RULE**: `max_tokens > 4096` 인 경우 non-streaming 호출 금지. 반드시 streaming.
- 이유: Anthropic API 가 large output 시 timeout 또는 403 반환
- 패턴:
  ```js
  const stream = client.messages.stream({ model, max_tokens, messages })
  for await (const chunk of stream) { /* ... */ }
  ```

### 3.2 응답 본문 검증 (invalid_output 분류)

**RULE**: Anthropic 응답이 유효한지 다음 항목으로 검증. 실패 시 `invalid_output` 분류 + throw.

| 검증 항목 | 기준 | 사유 |
|---|---|---|
| 빈 본문 | 응답 텍스트 길이 == 0 | 모델이 응답을 안 한 케이스 |
| 거절 응답 | `I cannot`, `I'm sorry`, `As an AI`, `안전상의 이유로` 같은 거절 패턴 검출 | 사용자가 받은 결과로 부적합 |
| 길이 하한 | 응답 길이 < 50 자 (또는 type 별 기준) | 너무 짧은 응답 — 의미 없음 |
| JSON 응답 type | `JSON.parse` 실패 시 | 파싱 안 되는 응답 거부 |

```js
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

### 3.3 Anthropic SDK 에러 분류

응답 실패 시 `err.kind` 로 분류 — 관측 페이지의 분포 표시에 사용.

| kind | 트리거 | 사용자 대응 |
|---|---|---|
| `invalid_output` | 위 검증 실패 | 재시도 (모델/프롬프트 조정) |
| `overloaded` | HTTP 529 | 잠시 후 재시도 |
| `rate_limit` | HTTP 429 | rate limit 정책 검토 |
| `auth` | HTTP 401 | API key 확인 |
| `network` | fetch 실패 / timeout | 네트워크 / proxy 확인 |
| `unknown` | 분류 안 됨 | error 메시지 보기 |

```js
function classifyError(e) {
  if (e?.kind) return e.kind  // invalid_output 우선
  const status = e?.status || e?.response?.status
  if (status === 529) return 'overloaded'
  if (status === 429) return 'rate_limit'
  if (status === 401) return 'auth'
  if (e?.code === 'ECONNREFUSED' || e?.code === 'ETIMEDOUT') return 'network'
  return 'unknown'
}
```

### 3.4 비용 / 토큰 추적

**RULE**: 모든 호출은 호출 로그 (JSONL 파일 또는 DB 테이블) 에 영구 기록. 분실 X.

기록 시점:
- 호출 종료 직전 (성공·실패 모두)
- 필수 필드: `ts`, `type`, `model`, `inputTokens`, `outputTokens`, `costUsd`, `latencyMs`, `ok`, `kind`, `error`
- 옵셔널: `preview` (output sample, 200자 truncate)

비용 계산 (Anthropic 모델별 단가):
```js
const PRICING = {
  'claude-opus-4-7':   { input: 0.000015, output: 0.000075 },  // $/token
  'claude-sonnet-4-6': { input: 0.000003, output: 0.000015 },
  'claude-haiku-4-5':  { input: 0.000001, output: 0.000005 },
}
const cost = inputTokens * pricing.input + outputTokens * pricing.output
```

### 3.5 사용자 텍스트 보호

**RULE**: AI 가 받은 사용자 텍스트는 **그대로** 사용. 임의 다듬기 / 정정 / 보강 금지.
- 사용자의 의도 / 톤 / 어휘 선택 존중
- 명백한 오타도 사용자 확인 후만 수정

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
NEVER  AI 호출 결과를 영구 로그에 기록 안 함 → 비용 추적 + 디버깅 불가
NEVER  사용자 텍스트를 AI 가 임의 다듬기 → 톤·어휘 의도 훼손
NEVER  invalid_output 거부 없이 재시도 무한 루프 → 비용 폭증
NEVER  API key 를 client-side 코드에 노출 → 서버에서만 보유 (.env)
NEVER  Anthropic SDK 의 deprecated 모델 사용 → 최신 모델 ID
```

## 5. VERIFICATION

### 5.1 관측 페이지 활용

관측 페이지에서 다음 항목 모니터링:
- 누적 비용 / 토큰
- 평균 / p95 지연
- 실패율 / kind 분포 (invalid_output 비율 등)
- 최근 실패 10건 (시각·type·kind·메시지)

### 5.2 신규 type 추가 시

1. AI 에이전트에 type 추가
2. 적절한 프롬프트 템플릿
3. 응답 검증 기준 (길이 하한 / JSON 파싱 필요 여부 등)
4. 관측 페이지의 byType 자동 표시 — 별도 작업 X

### 5.3 비용 알림 (선택)

월간 비용 임계값 초과 시 알림:
```js
const monthlyTotal = sumCost(runs, MONTH_AGO)
if (monthlyTotal > USD_LIMIT) notify(`AI 비용 ${monthlyTotal} 초과`)
```

---

## Reference Example (HIRO 본 저장소)

본 저장소의 AI 호출 구체 위치·변수명·도메인 type 매핑 → 별도 파일: **`.claude/rules/HIRO_REFERENCE.md`** ("ai.md" 섹션).

Claude 가 본 저장소 작업 시 변수명·type 정보 필요할 때 명시 import. 본문 Rule 만으로 부족 시.

---


---

**For Adopters (이식자 참고)**: 같은 가전 산업 내 영업·매출·전략·마케팅·R&D 등 다른 직무 도메인 적용 가이드 (핵심 패턴 + 부트스트랩 사용법) → `.claude/rules/HIRO_REFERENCE.md` (For Adopters 통합 섹션).
