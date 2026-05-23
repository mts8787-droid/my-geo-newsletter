// ─── Sheet Parser 공통 헬퍼 ─────────────────────────────────────────────────
// SKILL.md §6.2 의 5단계 ERROR CATCHING 패턴 — 문서 정의를 실코드로 구현.
// 모든 파서가 import 해서 사용. 신규 파서 추가 시 본 헬퍼만 호출하면 일관 보장.

// ─── [2] CLASSIFY + [5] SURFACE — 로그 레벨 통일 ─────────────────────────────
// 반환값 규약:
//   _logFatal → 호출자가 그대로 return 가능한 empty result ({})
//   _logWarn  → 호출자가 그대로 return 가능한 empty result ({})
//   _logInfo  → undefined (호출자는 무시)
// fatal vs warning 의 차이는 console 레벨과 의미 — fatal 은 파싱 자체 불가, warning 은 부분 손실.

export function _logFatal(scope, msg, ctx) {
  console.error(`[${scope}] FATAL:`, msg, ctx ?? '')
  return {}
}

export function _logWarn(scope, msg, ctx) {
  console.warn(`[${scope}] WARN:`, msg, ctx ?? '')
  return {}
}

export function _logInfo(scope, msg, ctx) {
  // 정상 흐름 추적 — 항상 출력 (DEBUG 환경변수 미사용 환경 고려)
  console.log(`[${scope}]`, msg, ctx ?? '')
}

// ─── [1] DETECT — 입력 자체 검증 ─────────────────────────────────────────────
// rows 가 배열인지, 빈 배열이 아닌지. 위반 시 fatal 로그 + true 반환 (호출자가 early return)
// 사용 패턴:
//   if (assertRowsFatal(rows, 'parseXxx', defaultResult)) return defaultResult
// 호출자가 fallback 값을 정의해서 넘기면 그것을 _logFatal 에 컨텍스트로 표시.
export function assertRows(rows, scope) {
  if (!Array.isArray(rows)) {
    _logFatal(scope, 'invalid input: not an array', { type: typeof rows })
    return false
  }
  if (rows.length === 0) {
    _logFatal(scope, 'invalid input: empty rows', { len: 0 })
    return false
  }
  return true
}

// ─── 헤더 자동 탐지 — SKILL.md §5.2 ─────────────────────────────────────────
// requiredCols: 각 요구사항이 RegExp 또는 string. 모든 요구사항이 한 행에서 만족되어야 매칭.
// 못 찾으면 -1. 호출자가 _logWarn 으로 처리.
export function findHeaderIdx(rows, requiredCols) {
  return rows.findIndex(r => {
    if (!Array.isArray(r)) return false
    const cells = r.map(c => String(c ?? '').trim().toLowerCase())
    return requiredCols.every(req =>
      cells.some(c => req instanceof RegExp ? req.test(c) : c === String(req).toLowerCase())
    )
  })
}

// ─── Verify-After-Act — sync 종료 후 invariant 검증 ─────────────────────────
// SKILL.md §7.4 패턴. syncFromGoogleSheets 종료 시 호출. issues 배열 반환 + warn 출력.
// 호출자는 issues 를 UI 알림 등으로 surface 할 수 있음 (현재는 console 만).
export function verifySyncResult(result, scope = 'sync') {
  const issues = []
  if (!result || typeof result !== 'object') {
    issues.push('result 가 객체가 아님')
    console.warn(`[${scope}] verify FATAL:`, issues)
    return issues
  }

  // products / productsPartial 둘 다 비면 대시보드 카드 못 그림
  const hasProducts = (result.products?.length || result.productsPartial?.length)
  if (!hasProducts) {
    issues.push('products / productsPartial 둘 다 비어있음 — 대시보드 카드 누락 위험')
  }

  // productsCnty 비면 국가별 그리드 못 그림
  if (Array.isArray(result.productsCnty) && result.productsCnty.length === 0) {
    issues.push('productsCnty 비어있음 — 국가별 그리드 누락')
  }

  // unlaunchedMap DEFAULT 보존 확인 (parseUnlaunched 의 비즈니스 fact)
  if (result.unlaunchedMap && !result.unlaunchedMap['BR|AV']) {
    issues.push('unlaunchedMap DEFAULT 누락 (BR|AV) — parseUnlaunched 가 DEFAULT 병합 안 함')
  }

  // weeklyLabels 가 W1,W2,... 자동 생성된 채로 남으면 PR/BrandPrompt 라벨 폴백 미동작 의심
  if (result.weeklyLabels?.length) {
    const isAuto = result.weeklyLabels.every((l, i) => l === `W${i + 1}`)
    if (isAuto) {
      issues.push('weeklyLabels 가 자동 생성 (W1,W2,...) — PR 라벨 폴백 미동작')
    }
  }

  if (issues.length) {
    console.warn(`[${scope}] verify: ${issues.length}개 이슈 발견`, issues)
  } else {
    console.log(`[${scope}] verify: invariant 통과`)
  }
  return issues
}

// ─── [3] CAPTURE + [4] RECOVER — per-row 처리 안전 래퍼 ──────────────────────
// 한 행 처리 중 throw 가 나도 후속 행 처리는 계속.
// fn(r, rowIdx) 의 반환값이 truthy 면 ok, falsy 면 skip 으로 카운트.
// catch 시 SKILL.md §6.3 표준 컨텍스트 dump.
//
// 사용 패턴:
//   const { okCount, skipCount } = forEachRowSafe(data, headerIdx, 'parseXxx', (r, rowIdx) => {
//     // ... row 처리, throw 가능, falsy 반환하면 skip 카운트
//     return parsed  // truthy
//   })
export function forEachRowSafe(data, headerOffset, scope, fn) {
  let okCount = 0, skipCount = 0
  data.forEach((r, idx) => {
    const rowIdx = headerOffset + 1 + idx  // 시트 기준 절대 행번호
    try {
      const result = fn(r, rowIdx)
      if (result) okCount++
      else skipCount++
    } catch (e) {
      skipCount++
      let raw
      try { raw = Array.isArray(r) ? r.slice(0, 8) : r } catch { raw = '<unreadable>' }
      console.warn(`[${scope}] row error`, { rowIdx, raw, error: e?.message })
    }
  })
  return { okCount, skipCount }
}
