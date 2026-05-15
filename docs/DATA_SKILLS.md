# AGENT.md — Data Parsing / Validation / Cleaning Skills

> 코딩 에이전트가 데이터 파싱·정제·검증·동기화 작업 시 참조하는 스킬셋.
> 디자인/UI 는 별도 `DESIGN_SKILLS.md` 참조.

---

## 1. PROJECT CONTEXT (DATA)

- **Source**: Google Sheets (사용자 편집) + 시스템 하드코딩 디폴트
- **Sync flow**: Sheets API `batchGet` → 탭별 parser → JS 객체 → React state → 게시 시 HTML 인라인
- **File layout**:
  ```
  src/excelUtils.js               # 모든 시트 파서 (parseSheet switch)
  src/googleSheetsUtils.js        # Google Sheets API 동기화
  src/shared/sheetTabsForMode.js  # 모드별 필요 탭 목록
  src/shared/api.js               # publish 시 extra 조립
  ```

## 2. COMMANDS

| 목적 | 명령 |
|---|---|
| 파서 단위 테스트 | `npx vitest run test/excelUtils.test.js` |
| 전체 테스트 | `npx vitest run` |

## 3. DATA INTERFACES (CANONICAL)

본 레포 전체 가정하는 데이터 shape. 신규 데이터 추가 시 이 shape 부터 매핑.

```js
// 단일 시계열
{ labels: ['T1','T2','T3','T4'], data: [12, 15, 18, 14] }

// 다중 시계열
{
  labels: ['T1','T2','T3'],
  series: { cat1:[12,15,18], cat2:[10,11,13], cat3:[8,9,11] }
}

// 카드 (productsPartial)
{
  id, label, score, prev, vsComp, compName,
  status: 'lead'|'behind'|'critical',
  weekly: [80,82,85,88],
  monthlyScores: [{ date, score, comp, allScores }]
}

// 그룹별 (productsCnty — 국가×제품×월)
{
  product, country, date, score, prev,
  vsComp, compName, compScore,
  allScores: { LG: 88.1, Samsung: 90.9, ... },
  monthlyScores: [{ date, score, compScore, compName, allScores }]  // 시간순 정렬됨
}

// 그룹 차트 (multi-bar)
{ id, label, values: { cat1:87, cat2:90, cat3:42 } }

// 랭킹 (Bump Chart)
{
  months: ['M1','M2','M3'],
  rankings: { item1:{M1:1, M2:2, M3:1}, item2:{...} }
}

// 미출시 매핑
unlaunchedMap = { 'BR|AV': true, 'VN|AV': true, ... }  // ${country}|${UL_CODE}
```

## 4. SHEETS 동기화 흐름

### 4.1 전체 흐름

```
시트 편집 (사용자)
  ↓ Sidebar "구글 시트 동기화" 클릭
syncFromGoogleSheets(url, mode)
  ↓ sheetTabsForMode[mode] 로 필요 탭만 batchGet
parseSheet(sheetName, rows) — switch 분기
  ↓ 시트별 파서 (parseProductCnty, parseUnlaunched 등)
parsed 결과 → { products, productsCnty, citations, ... }
  ↓ React state 저장 + localStorage 캐시
publishCombinedDashboard() / generateXxxHTML()
  ↓ JSON.stringify 인라인 임베드
정적 HTML → PUB_DIR
```

### 4.2 신규 시트 추가 절차

1. `SHEET_NAMES` 에 등록 (excelUtils.js 상단)
2. `parseSheet` switch 에 분기 추가
3. `sheetTabsForMode` 에 모드별 노출 결정
4. 결과 데이터를 React state 어디에 저장할지 결정 (App.jsx)
5. `publishCombinedDashboard()` 에 `extra` 로 전달
6. `generateXxxHTML()` 에서 활용

## 5. DATA DIRECTIVES

### 5.1 날짜 파싱 (`parseMonthFromDate`)

지원해야 할 형식:

| 형식 | 예 | 추출 |
|---|---|---|
| ISO | `2026-04`, `2026/04` | year=2026, month=4 |
| 한국식 4자리 | `2026년 4월` | year=2026, month=4 |
| 한국식 2자리 | `26년 4월` | year=2000+26=2026, month=4 |
| 영문 풀 | `April 2026` | year=2026, month=4 |
| 영문 약 + 4자리 | `Apr 2026` | year=2026, month=4 |
| 영문 약 + 2자리 | `Apr 26` | year=2000+26=2026, month=4 |
| 월만 (연도 없음) | `4월`, `Apr` | year=0, month=4 |

**반환**: `year ? year * 12 + month : month` (정렬 키).

**구현 패턴**:
```js
function parseMonthFromDate(s) {
  s = String(s || '').trim()
  let year = 0, month = 0
  // 1) 4자리 연도
  const y4 = s.match(/(\d{4})/)
  if (y4) year = parseInt(y4[1])
  else {
    // 2) 한국식 2자리 '26년'
    const ky2 = s.match(/(\d{2})년/)
    if (ky2) year = 2000 + parseInt(ky2[1])
    // 3) 영문 약 + 2자리 'Apr 26'
    else {
      const ey2 = s.match(/\b(?:jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)\w*\s+(\d{2})\b/i)
      if (ey2) year = 2000 + parseInt(ey2[1])
    }
  }
  // 월 추출
  const km = s.match(/(\d{1,2})월/)
  if (km) month = parseInt(km[1])
  else {
    const em = s.match(/\b(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i)
    if (em) month = MONTHS_MAP[em[1].toLowerCase()]
    else {
      const iso = s.match(/\d{4}[-\/](\d{1,2})/)
      if (iso) month = parseInt(iso[1])
    }
  }
  return year ? year * 12 + month : month
}
```

**ANTI-PATTERN**:
- `(\d{4})` 만 매칭 → 한국식 2자리 누락 → sort 깨짐 → MoM 부호 반전 등 광범위 버그.

### 5.2 시트 헤더 자동 탐지

시트마다 헤더 위치가 다를 수 있음 (1행 또는 N행 후).

**패턴**:
```js
function findHeaderIdx(rows, requiredCols) {
  return rows.findIndex(r => {
    if (!r) return false
    const cells = r.map(c => String(c || '').trim().toLowerCase())
    return requiredCols.every(req => cells.some(c => req.test ? req.test(c) : c === req))
  })
}

// 사용
const headerIdx = findHeaderIdx(rows, [
  /^(country|county)$/,
  /^(launched|launch|status|출시여부|출시)$/,
])
if (headerIdx < 0) {
  console.warn('[parser] 헤더 못찾음. 첫 10행:', rows.slice(0, 10))
  return { /* fallback or empty */ }
}
```

**RULE**:
- 대소문자/공백 무관 매칭 (`.toLowerCase().replace(/\s+/g, ' ')`)
- 한/영 동의어 모두 허용
- 헤더 못 찾으면 console.warn + 첫 10행 출력 (디버그)

### 5.3 빈 값 / Null / 0 구분

| 시트 값 | 의미 | JS 변환 |
|---|---|---|
| (빈 셀) | 데이터 없음 | `null` |
| `"-"` / `"–"` / `"—"` | 측정 안 됨 | `null` |
| `"NA"` / `"N/A"` / `"na"` | 해당 없음 | `null` |
| `0` / `"0"` | 실제 0 측정 | `0` |
| `87.5` / `"87.5"` / `"87.5%"` | 실측 값 | `87.5` |

**구현 패턴**:
```js
function parseCell(v) {
  if (v == null) return null
  const s = String(v).trim()
  if (!s) return null
  if (/^[-–—]$/.test(s)) return null
  if (/^(na|n\/a)$/i.test(s)) return null
  return s
}

function parseNumber(v) {
  const s = parseCell(v)
  if (s === null) return null
  const cleaned = s.replace(/[%,점\s]/g, '')
  const n = parseFloat(cleaned)
  return isNaN(n) ? null : n
}
```

**RULE**:
- 데이터 없음(`null`) 과 실제 0 (`0`) 명확 구분.
- 차트 렌더 시 `v == null` → 점 미렌더 (line break).
- 평균 계산 시 `null` 제외하고 count 분모 조정.

### 5.4 숫자 포맷 정규화

시트의 다양한 숫자 표기:
- `"87.5"` / `87.5` (raw)
- `"87.5%"` (% 접미)
- `"87.5점"` (점 접미)
- `"1,234"` / `"1,234.5"` (콤마 천 단위)
- `"  87.5  "` (공백)

**패턴** (`parseNumber` 위 참고). 항상:
1. `String(v).trim()`
2. `replace(/[%,점\s]/g, '')` 으로 노이즈 제거
3. `parseFloat()`
4. `isNaN(n) ? null : n`

### 5.5 카테고리 ID 양방향 매핑

한/영/약자/category 변환은 빈번. 양방향 lookup 테이블 권장.

**패턴** (excelUtils.js 참고):
```js
const CATEGORY_ID_MAP = {
  'TV': 'tv', 'Monitor': 'monitor', 'IT': 'monitor',
  'Audio': 'audio', 'AV': 'audio',
  'WM': 'washer', 'Washing Machine': 'washer',
  'REF': 'fridge', 'Refrigerator': 'fridge',
  ...
}
const CATEGORY_KR_MAP = { 'TV':'TV', 'Monitor':'모니터', 'Audio':'오디오', ... }
const UL_PROD_MAP = { tv:'TV', monitor:'IT', audio:'AV', ... }
const PROD_NAME_TO_ID = {
  'TV':'tv', '오디오':'audio', 'Audio':'audio', 'Refrigerator':'fridge', ...
}
```

**RULE**:
- 사용자는 다양한 표기로 입력 가능 → lookup 시 fallback chain:
  ```js
  const id = CATEGORY_ID_MAP[raw] || raw.toLowerCase()
  ```
- 신규 카테고리 추가 시 4개 매핑 모두 업데이트 (id, KR, EN, UL_CODE).

### 5.6 시간순 정렬 invariant

**RULE**: `monthlyScores` / `weeklyAll` 배열은 **항상 시간순 정렬** 후 저장.

```js
entries.sort((a, b) => parseMonthFromDate(a.date) - parseMonthFromDate(b.date))
const latest = entries[entries.length - 1]
const prev = entries.length >= 2 ? entries[entries.length - 2].score : null
const monthlyScores = entries.map(e => ({ date: e.date, score: e.score, ... }))
```

**클라이언트에서 활용 시**:
- 배열 끝 = 최신
- 끝-1 = 직전
- 길이가 카테고리/그룹마다 다를 수 있음 (USA 12개월, BR 3개월 등) → date 매칭으로 정합 보장

### 5.7 그룹 필터 + 재집계 (date 매칭)

**ANTI-PATTERN**: 배열 인덱스로 합산 → 카테고리/그룹별 length 다를 때 잘못된 월 비교.

**올바른 패턴**:
```js
function _filteredMonthlySeries(prodId, groups) {
  // 1) prodKeys 결정 (id/kr/en/category)
  // 2) 매칭 entry 수집 (group filter 적용)
  // 3) date 키로 byDate 누적 (sum/count)
  // 4) 첫 매칭 entry 의 dates 순서를 canonical 로 사용 (서버 시간순 정렬됨)
  const byDate = {}
  matched.forEach(r => {
    (r.monthlyScores || []).forEach(m => {
      if (m.score == null) return
      const d = m.date
      if (!byDate[d]) byDate[d] = { sum: 0, count: 0 }
      byDate[d].sum += Number(m.score) || 0
      byDate[d].count++
    })
  })
  const canonical = (matched[0].monthlyScores || []).map(m => m.date)
  const dates = Object.keys(byDate).sort((a, b) => canonical.indexOf(a) - canonical.indexOf(b))
  return { data: dates.map(d => byDate[d].sum / byDate[d].count), labels: dates }
}
```

### 5.8 하드코딩 디폴트 병합

시트 데이터가 누락될 수 있는 경우 디폴트 보완.

**패턴** (unlaunchedMap 예):
```js
// 시트 누락 대비 — 항상 포함되어야 할 미출시 정보
const DEFAULT_UNLAUNCHED = {
  'BR|AV': true, 'VN|AV': true, 'IN|AV': true,  // 비즈니스 fact
}

function parseUnlaunched(rows) {
  const unlaunchedMap = { ...DEFAULT_UNLAUNCHED }  // 디폴트로 시작
  // ... 시트 데이터로 추가
  return { unlaunchedMap }
}
```

**RULE**:
- 디폴트는 **비즈니스 fact** 만 (절대 변하지 않는 정보).
- 가변 데이터는 디폴트 X → 시트에서만.
- 디폴트 값은 코드 코멘트로 출처/사유 명시.

### 5.9 타입 / 범위 검증

신뢰할 수 없는 외부 입력 (시트, API 응답) 은 범위/타입 검증.

**패턴**:
```js
function isValidScore(n) {
  return typeof n === 'number' && !isNaN(n) && n >= 0 && n <= 100
}
function isValidRatio(n) {
  return typeof n === 'number' && !isNaN(n) && n >= 0 && n <= 1000  // 자사/경쟁 비율
}
function isValidDate(s) {
  return parseMonthFromDate(s) > 0
}

// 검증 후 fallback
if (!isValidScore(score)) {
  console.warn('[parser] invalid score:', score, 'row:', r)
  score = null  // 또는 0
}
```

**RULE**:
- 검증 실패 → `null` (또는 명시적 fallback) + `console.warn` (디버그)
- throw 는 dev 모드만, production 은 silent fallback
- 비즈니스적으로 불가능한 값(예: score > 100) 은 항상 검증

### 5.10 에러 처리

시트 부재 / 컬럼 누락 / API 실패 등:

| 케이스 | 대응 |
|---|---|
| 시트 없음 | parser 호출 안 됨 → 다운스트림 fallback (`extra.x \|\| {}`) |
| 헤더 못 찾음 | `console.warn` + 첫 10행 dump + `return {}` |
| 필수 컬럼 누락 | `console.warn` + 컬럼 인덱스 정보 + `return {}` |
| 행 데이터 손상 | per-row try/catch + warn + 그 행만 skip |
| API 실패 (403 streaming) | streaming API 로 폴백 (insightAgent.js 패턴) |

**ANTI-PATTERN**:
- silent fail (warn 없이 빈 객체 반환) — 디버깅 어려움
- throw 후 미처리 — 전체 동기화 중단
- 첫 행만 보고 헤더 판단 — 시트마다 시작 위치 다름

### 5.11 archive / snapshot 호환

옛 저장 데이터와 호환 유지:

**패턴** (insightAgent.js `ARCHIVE_KEY_MAP`):
```js
const ARCHIVE_KEY_MAP = {
  // 새 키 ← 옛 키들
  monthlyReportBody: ['monthlyReportText', 'monthlyText'],
  productInsight: ['prodInsight'],
  ...
}

function loadArchive(snapshot) {
  const out = {}
  Object.entries(ARCHIVE_KEY_MAP).forEach(([newKey, oldKeys]) => {
    out[newKey] = snapshot[newKey] ?? oldKeys.find(k => snapshot[k] != null && snapshot[k] !== '') ?? ''
  })
  return out
}
```

**RULE**:
- 키 이름 변경 시 옛 키도 호환 lookup 유지
- 단순 데이터 변환은 lazy migration (저장 시 신규 키만)
- 깊은 schema 변경은 명시적 migration 함수

## 6. ERROR CATCHING PROCESS

데이터 파이프라인 곳곳에서 발생 가능한 오류를 **단계별로 탐지·분류·기록·복구**하는 표준 프로세스. 외부 입력(시트, API)·파싱 로직·다운스트림 변환 모든 경계점에 적용.

### 6.1 5단계 워크플로우

```
[1] DETECT     — 경계 지점에서 입력 검증 (parser 시작 전)
    ↓
[2] CLASSIFY   — 심각도 분류 (fatal / warning / info)
    ↓
[3] CAPTURE    — 컨텍스트 수집 (입력 sample + 위치 + 시도 결과)
    ↓
[4] RECOVER    — fallback 전략 적용 (디폴트 / null / skip)
    ↓
[5] SURFACE    — 적절한 채널로 표면화 (warn / log / throw)
```

### 6.2 단계별 RULE

#### [1] DETECT — 경계 지점

다음 지점에서 **항상** 검증 실행:
- 시트 동기화 직후 (rows 길이, 첫 행 형태)
- 파서 진입 시 (헤더 탐지, 필수 컬럼)
- per-row 처리 (필수 필드 존재, 타입)
- 파서 종료 시 (output 비어있는지, 예상 카테고리 다 있는지)
- 다운스트림 변환 (필터 결과 비정상 0건)

```js
function parseProductCnty(rows) {
  // [1] DETECT: 입력 자체 검증
  if (!Array.isArray(rows) || rows.length === 0) {
    return _logFatal('parseProductCnty', 'empty rows', { len: rows?.length })
  }
  // 헤더 탐지
  const headerIdx = findHeaderIdx(rows, requiredCols)
  if (headerIdx < 0) {
    return _logWarn('parseProductCnty', 'header not found', { firstRows: rows.slice(0, 5) })
  }
  // ... per-row 처리
}
```

#### [2] CLASSIFY — 심각도

| 레벨 | 의미 | 예시 | 액션 |
|---|---|---|---|
| `fatal` | 파싱 자체 불가능 | 시트 부재, 모든 컬럼 누락 | 빈 객체 반환 + console.error |
| `warning` | 부분 처리 가능 | 일부 행 손상, 헤더 일부 누락 | console.warn + skip / fallback |
| `info` | 정상 + 메타 정보 | 파싱 N건 성공, 디폴트 적용 | console.log (디버그 모드만) |

```js
function _logFatal(scope, msg, ctx) {
  console.error(`[${scope}] FATAL:`, msg, ctx)
  return {}
}
function _logWarn(scope, msg, ctx) {
  console.warn(`[${scope}] WARN:`, msg, ctx)
  return null
}
function _logInfo(scope, msg, ctx) {
  if (process.env.DEBUG) console.log(`[${scope}] INFO:`, msg, ctx)
}
```

#### [3] CAPTURE — 컨텍스트 dump

오류 시 **재현 가능한 최소 컨텍스트** 함께 저장:

```js
// Bad — 정보 부족
console.warn('parse failed')

// Good — 재현 컨텍스트
console.warn('[parseProductCnty] WARN: invalid score', {
  scope: 'parseProductCnty',
  row: rows[i],
  rowIdx: i,
  cell: r[scoreCol],
  parsed: parseNumber(r[scoreCol]),
  expectedRange: '[0, 100]',
})
```

**필수 정보**:
- `scope`: 어느 함수/모듈
- `rowIdx` / `colIdx`: 위치
- `raw`: 원본 값 (parsing 전)
- `parsed`: 파싱 시도 결과
- `expected`: 기대 형식/범위

#### [4] RECOVER — fallback 전략

각 오류에 대한 명시적 복구:

| 오류 | Fallback |
|---|---|
| 시트 부재 | 다운스트림 `extra.x \|\| {}` 패턴 |
| 헤더 못 찾음 | DEFAULT 디폴트 + 빈 결과 + warn |
| 행 손상 (1건) | 그 행만 skip + warn (parser 중단 X) |
| 숫자 파싱 실패 | `null` (NOT 0) + warn |
| 날짜 파싱 실패 | year=0 fallback + warn (정렬은 month-of-year 만으로) |
| API 401/403 | 스트리밍 API 재시도 (insightAgent.js) |
| 데이터 검증 실패 | `null` + warn + 다음 행 |

#### [5] SURFACE — 표면화 채널

| 채널 | 사용 시기 |
|---|---|
| `console.error` | fatal — 파이프라인 깨짐, 사용자 알림 필요 |
| `console.warn` | warning — 부분 손실, 다운스트림 영향 가능 |
| `console.log` (DEBUG only) | info — 정상 흐름 추적 |
| `throw` | dev 모드만 — production 은 silent fallback |
| `insight_runs` 테이블 | AI 호출 등 외부 boundary — 영구 기록 |

**RULE**: production 에서 throw 금지. silent return + warn 으로 다운스트림 진행 보장.

### 6.3 표준 try/catch 패턴

per-row 처리는 try/catch 로 격리:

```js
const rows = data.slice(headerIdx + 1)
const out = []
let okCount = 0, skipCount = 0
rows.forEach((r, i) => {
  try {
    const parsed = parseRow(r, columns)
    if (parsed) { out.push(parsed); okCount++ }
    else skipCount++
  } catch (e) {
    skipCount++
    console.warn(`[parser] row ${i + headerIdx + 1} skipped:`, e.message, { row: r })
  }
})
console.log(`[parser] ${okCount} parsed, ${skipCount} skipped`)
return out
```

**RULE**: 한 행 실패가 전체 파싱을 멈추지 않게. 각 행 try/catch + skip count 집계.

---

## 7. SELF-LOGGING & HARNESS ENGINEERING

코딩 에이전트가 **자기 행위를 기록·검증·반성** 하는 패턴. 단순 logging 을 넘어 "내가 한 일이 의도대로 됐는지 스스로 확인" 하는 루프.

### 7.1 핵심 원칙

```
ACT     — 무언가 실행
LOG     — 실행한 행위 + 입력 + 결과 기록
VERIFY  — 결과가 예상과 일치하는지 검사
REFLECT — 불일치 시 진단 + 수정 시도
```

본 레포 사례: `insight_runs` 테이블 (AI 호출 로그) → `/admin/observability` 시각화.

### 7.2 구조화 로그 (Structured Log)

자유 텍스트 logging 대신 **JSON 친화 구조** 로 — 후처리·필터·집계 가능.

```js
function logStructured(entry) {
  const record = {
    ts: Date.now(),
    scope: entry.scope,
    level: entry.level,        // 'info' | 'warn' | 'error' | 'fatal'
    msg: entry.msg,
    input: entry.input,        // 입력 sample (truncated)
    output: entry.output,      // 결과 sample
    duration_ms: entry.duration,
    success: entry.success,
    error: entry.error?.message,
    context: entry.context,    // 추가 컨텍스트 (rowIdx 등)
  }
  console.log(JSON.stringify(record))  // 또는 DB 에 insert
}
```

**RULE**:
- 한 logical action = 한 record
- 한 줄 JSON (grep/jq 친화)
- 민감 정보 redact

### 7.3 외부 Boundary 기록 (Audit Trail)

외부 시스템 경계 호출은 **모두 영구 기록**:

| Boundary | 기록할 정보 |
|---|---|
| Google Sheets API | sheet name, row count, fetch latency, success |
| Anthropic API | model, input tokens, output tokens, cost, latency, success |
| File IO (게시) | path, byte size, success |
| User action (publish/sync) | user, timestamp, mode, target |

본 레포의 `insight_runs` 패턴 차용:
```js
async function callBoundary(scope, fn, input) {
  const start = Date.now()
  let result, error
  try {
    result = await fn(input)
  } catch (e) {
    error = e
  }
  const duration = Date.now() - start
  await db.insert('boundary_calls', {
    ts: start, scope, input_sample: truncate(input, 500),
    output_sample: truncate(result, 500),
    duration_ms: duration, success: !error, error: error?.message,
  })
  if (error) throw error
  return result
}
```

### 7.4 자기 검증 루프 (Verify-After-Act)

행위 직후 결과를 검증해서 의도와 일치하는지 확인:

```js
async function syncAndVerify(sheetUrl) {
  // ACT
  const parsed = await syncFromGoogleSheets(sheetUrl)

  // VERIFY
  const issues = []
  if (!parsed.products?.length) issues.push('products empty')
  if (!parsed.productsCnty?.length) issues.push('productsCnty empty')

  // 카테고리 다 있나
  const expectedCategories = ['tv', 'monitor', 'fridge', 'washer']
  expectedCategories.forEach(c => {
    if (!parsed.products.find(p => p.id === c)) issues.push(`missing category: ${c}`)
  })

  // 시간순 정렬 invariant
  parsed.productsCnty.forEach(r => {
    const ms = r.monthlyScores || []
    for (let i = 1; i < ms.length; i++) {
      if (parseMonthFromDate(ms[i].date) < parseMonthFromDate(ms[i-1].date)) {
        issues.push(`unsorted monthlyScores: ${r.country}|${r.product}`)
        break
      }
    }
  })

  // REFLECT
  if (issues.length) {
    console.warn('[sync verify] issues found:', issues)
    return { parsed, issues }
  }
  return { parsed, issues: [] }
}
```

**RULE**: 모든 파이프라인 단계는 invariant 검증 함수 1개 보유. 변경 시 invariant 도 동시 업데이트.

### 7.5 Decision Audit (왜 이렇게 했는지 기록)

분기/fallback 선택 이유를 로그에 명시:

```js
// Bad — 결과만 기록
unlaunchedMap = parseUnlaunched(rows)

// Good — 결정 사유 기록
let unlaunchedMap
if (rows && rows.length > 0) {
  const result = parseUnlaunched(rows)
  if (Object.keys(result.unlaunchedMap).length === DEFAULT_UNLAUNCHED_COUNT) {
    logStructured({
      scope:'parseUnlaunched', level:'warn',
      msg:'sheet empty, using DEFAULT_UNLAUNCHED only',
      context: { sheetRows: rows.length, defaultCount: DEFAULT_UNLAUNCHED_COUNT }
    })
  }
  unlaunchedMap = result.unlaunchedMap
} else {
  logStructured({
    scope:'parseUnlaunched', level:'warn',
    msg:'no sheet — fallback to DEFAULT only', context:{}
  })
  unlaunchedMap = { ...DEFAULT_UNLAUNCHED }
}
```

후일 디버깅 시 "왜 이 데이터가 나왔지" 답을 로그가 직접 제공.

### 7.6 Observability Dashboard

수집한 로그를 **시각화** 해서 사람/에이전트가 패턴 식별:

본 레포 `/admin/observability` 사례:
- AI 호출별 토큰/비용/지연/실패 추적
- 시계열 차트 (시간당 호출 수, 평균 지연)
- 실패 케이스 테이블 (error message + 원본 input sample)
- 코스트 알림 (월간 임계값 초과 시 강조)

**RULE**: 외부 boundary 호출은 모두 dashboard 시각화 대상. log → DB → admin page 파이프라인 구축.

### 7.7 Self-Critique Loop (에이전트의 자기 반성)

코딩 에이전트가 자기 로그를 읽고 패턴 식별:

```js
// 주기적 self-check
async function selfCheck() {
  const recentRuns = await db.query('SELECT * FROM boundary_calls WHERE ts > NOW() - INTERVAL 24 HOUR')
  const failureRate = recentRuns.filter(r => !r.success).length / recentRuns.length
  if (failureRate > 0.05) {
    notify(`[harness] 24h failure rate ${(failureRate*100).toFixed(1)}% — investigate`)
  }
  // 평균 지연 회귀 검출
  const avgLatency = recentRuns.reduce((s,r) => s + r.duration_ms, 0) / recentRuns.length
  const baseline = await db.query('SELECT AVG(duration_ms) FROM boundary_calls WHERE ts BETWEEN ... AND ...')
  if (avgLatency > baseline * 1.5) {
    notify(`[harness] latency regression: ${avgLatency}ms vs baseline ${baseline}ms`)
  }
}
```

**RULE**: 정기 self-check (cron) → 임계값 초과 시 사용자/에이전트에 알림 → 수정 시도 → 결과 재기록 → 재검증.

### 7.8 Test-Verify-Document Loop

신규 데이터/파서 추가 시 표준 루프:

```
[1] WRITE       — 신규 파서 작성
[2] TEST        — 단위 테스트 (입력 sample → 기대 출력)
[3] LOG         — parser 내부에 INFO 로그 삽입 (count, distribution)
[4] RUN         — 실제 시트 동기화 실행
[5] VERIFY      — 로그 확인 (예상 카테고리·국가 다 있나)
[6] DOCUMENT    — 본 문서 §5 에 RULE/PATTERN 등재
[7] ANTI-PAT    — 발견한 함정 §6 ANTI-PATTERN 으로 명문화
```

### 7.9 본 레포 적용 사례

| 컴포넌트 | Self-Logging 패턴 |
|---|---|
| `parseProductCnty` | `console.log` 로 카테고리·국가 카운트 출력 |
| `parseUnlaunched` | 매칭/총 행 카운트 + 디폴트 적용 여부 로그 |
| `insightAgent.js` | 모든 AI 호출을 `insight_runs` DB 테이블에 영구 저장 |
| `/admin/observability` | insight_runs 시각화 (토큰/비용/지연/실패) |
| `syncFromGoogleSheets` | batchGet 시작/종료 로그 + 탭별 row count |

**확장 방향** (현재 없음, 추가 가능):
- 모든 파서를 `boundary_calls` 테이블로 통합 기록
- `/admin/observability` 에 파서 메트릭스 추가 (카테고리·국가 누락 검출)
- 정기 self-check cron (failure rate, latency regression)

---

## 8. ANTI-PATTERNS (DATA)

```
NEVER  (\d{4}) 만 매칭 → 한국식 2자리 연도 (26년) 누락 → sort 깨짐
NEVER  date 비교를 배열 인덱스로 → 카테고리별 length 다를 때 잘못된 월
NEVER  null 과 0 동일 취급 → 평균/렌더 모두 깨짐
NEVER  "87%" / "87" 등 다양 포맷 직접 비교 → parseNumber() 정규화 후 사용
NEVER  헤더 위치 가정 (첫 행 == 헤더) → findHeaderIdx() 로 탐색
NEVER  silent fail (빈 객체 반환만) → console.warn + 컨텍스트 dump
NEVER  Anthropic non-streaming 으로 max_tokens > 4096 호출 → 403 streaming required
NEVER  monthlyScores 무정렬 저장 → 항상 parseMonthFromDate 로 sort 후 저장
NEVER  unlaunchedMap 디폴트 없이 시트만 의존 → DEFAULT 병합 필수
NEVER  타입 검증 없이 외부 입력 사용 → score > 100 등 누출 방지
```

## 9. VERIFICATION & DEBUGGING

### 7.1 파서 디버그 명령

```bash
# 시트 파싱 단위 테스트
npx vitest run test/excelUtils.test.js

# 특정 시트 파서 인스펙트
node -e "import('./src/excelUtils.js').then(m => console.log(m.SHEET_NAMES))"
```

### 7.2 iframe 콘솔 데이터 진단

```js
// 파싱 결과 원형
_productsCnty.find(r => r.country === 'US' && r.product === 'TV').monthlyScores

// 정렬 검증
_productsCnty.find(r => r.country === 'US').monthlyScores.map(m => m.date)
// → ['25년 12월', '26년 1월', '26년 2월', ...] 시간순이어야 함

// 필터 함수 반환값
_filteredMomD('tv', ['US'])
_filteredMonthlySeries('tv', ['US'])

// unlaunchedMap 디폴트 + 시트 병합 확인
_unlaunchedMap
```

### 7.3 사용자 안내 표준 문구

- 데이터 변경 후: "구글 시트 동기화 → 웹사이트 게시 → 재확인"
- 파싱 의심 시: "시트의 date 컬럼 값 형식 1~2개 예시 알려주세요"
- 데이터 shape 불명: iframe 콘솔에서 `_productsCnty[0]` JSON 공유 요청

## 10. META

신규 파서 추가 시 본 문서 §5 (DIRECTIVES) 에 RULE/ANTI-PATTERN 등재. 도메인 무관 — LG/제품/국가 등 특이값 없이 일반화.

신규 boundary 호출 추가 시 §7 (SELF-LOGGING) 패턴 적용 — `boundary_calls` 통합 기록 + observability dashboard 등록.
