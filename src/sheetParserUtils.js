// ─── Sheet Parser 공통 헬퍼 ─────────────────────────────────────────────────
// SKILL.md §6.2 의 5단계 ERROR CATCHING 패턴 — 문서 정의를 실코드로 구현.
// 모든 파서가 import 해서 사용. 신규 파서 추가 시 본 헬퍼만 호출하면 일관 보장.

// ─── [2] CLASSIFY + [5] SURFACE — 로그 레벨 통일 ─────────────────────────────
// 반환값 규약:
//   _logFatal → 호출자가 그대로 return 가능한 empty result ({})
//   _logWarn  → 호출자가 그대로 return 가능한 empty result ({})
//   _logInfo  → undefined (호출자는 무시)
// fatal vs warning 의 차이는 console 레벨과 의미 — fatal 은 파싱 자체 불가, warning 은 부분 손실.

/**
 * 파싱 자체 불가능 (시트 부재, 모든 컬럼 누락) 시 호출. console.error + 빈 객체 반환.
 * @param {string} scope - 호출 위치 식별자 (예: 'parseUnlaunched')
 * @param {string} msg - 사람이 읽을 메시지
 * @param {object} [ctx] - 재현 컨텍스트 (rowIdx, raw, parsed 등)
 * @returns {{}} 빈 객체 — 호출자가 그대로 return 가능
 */
export function _logFatal(scope, msg, ctx) {
  console.error(`[${scope}] FATAL:`, msg, ctx ?? '')
  return {}
}

/**
 * 부분 처리 가능 (일부 행 손상, 헤더 일부 누락) 시 호출. console.warn + 빈 객체 반환.
 * @param {string} scope - 호출 위치 식별자
 * @param {string} msg - 사람이 읽을 메시지
 * @param {object} [ctx] - 재현 컨텍스트
 * @returns {{}} 빈 객체 — silent `return {}` 대체
 */
export function _logWarn(scope, msg, ctx) {
  console.warn(`[${scope}] WARN:`, msg, ctx ?? '')
  return {}
}

/**
 * 정상 흐름 + 메타 정보 (파싱 N건 성공, 디폴트 적용 등) 추적. 항상 출력.
 * @param {string} scope
 * @param {string} msg
 * @param {object} [ctx]
 * @returns {void}
 */
export function _logInfo(scope, msg, ctx) {
  console.log(`[${scope}]`, msg, ctx ?? '')
}

// ─── [1] DETECT — 입력 자체 검증 ─────────────────────────────────────────────
/**
 * rows 가 배열인지, 빈 배열이 아닌지 검증. 위반 시 _logFatal + false 반환.
 * @param {unknown} rows - 검증할 시트 행 배열
 * @param {string} scope - 호출 위치
 * @returns {boolean} true 면 통과, false 면 호출자가 early return 해야 함
 * @example
 *   if (!assertRows(rows, 'parseSheetRows:meta')) return {}
 */
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
/**
 * 헤더 행을 자동 탐지. requiredCols 의 모든 패턴이 한 행에서 만족되어야 매칭 (AND).
 * OR 매칭 / 단일 컬럼 / 복잡 분기 케이스는 본 함수 부적합 — rows.findIndex 직접 사용.
 * @param {any[][]} rows - 시트 행 배열
 * @param {(RegExp | string)[]} requiredCols - 매칭할 컬럼 패턴들
 * @returns {number} 헤더 행 인덱스. 못 찾으면 -1.
 * @example
 *   const idx = findHeaderIdx(rows, [/^(country|county)$/, /^(launched|status)$/])
 *   if (idx < 0) return _logWarn('parseXxx', 'header not found', { firstRows: rows.slice(0,5) })
 */
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
/**
 * sync 결과의 invariant (products 유무, DEFAULT 보존, 라벨 폴백 등) 검증.
 * SKILL.md §7.4 패턴. console.warn 출력 + issues 배열 반환.
 * @param {object} result - syncFromGoogleSheets 의 반환 객체
 * @param {string} [scope='sync'] - 로그 식별자
 * @returns {string[]} issues — UI 알림 등으로 surface 가능 (빈 배열이면 통과)
 */
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
/**
 * forEach 의 try/catch 래퍼. 한 행 throw 가 후속 행 처리를 막지 않음.
 * fn 반환값 truthy → okCount++, falsy → skipCount++. catch → skipCount++ + warn.
 * SKILL.md §6.3 표준 컨텍스트 dump (rowIdx, raw, error).
 * @template T
 * @param {T[]} data - 처리할 행 배열
 * @param {number} headerOffset - 헤더 행 인덱스 (시트 절대 rowIdx 계산용)
 * @param {string} scope - 로그 식별자
 * @param {(r: T, rowIdx: number) => unknown} fn - 행별 처리. truthy 반환=성공.
 * @returns {{ okCount: number, skipCount: number }}
 */
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
