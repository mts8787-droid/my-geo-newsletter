// ─── Citation 도메인 행 집계 (single source) ─────────────────────────────────
// parseCitDomain (src/excelUtils.js) 의 result 행은 (cnty, domain, type, prd) 조합마다 1행.
// 같은 (cnty, domain) 이 type 표기 차이 / prd 분해 때문에 여러 행으로 나올 수 있다
// (excelUtils.js citDomainTrend 의 주석 "복수 TTL 행 (type 상이) 합산" 참조).
// 랭킹 목록을 그릴 때는 반드시 도메인 단위로 병합해야 함 — 병합 없이 rank 순 slice 하면
// 같은 도메인이 2회 노출되고 (rtings 2번 등) ratio 분모까지 부풀려져 모든 % 가 틀어진다.
//
// 병합 규칙 = excelUtils.js 의 citDomainTrend 와 동일 (double-count 방지):
//   · TTL 제품(prd) 행이 하나라도 있으면 → TTL 행들만 합산 (type 상이한 복수 TTL 행은 합산 대상)
//   · TTL 제품 행이 없을 때만 → PRD-specific 행 합산 (폴백. 여러 PRD 행의 합 = total)
//
// prd / type 필드는 citationsCnty 원본 행에 그대로 남아 있어야 한다
// (citationTemplate.js 의 "도메인별 → 제품별 분해" 가 prd 를 사용) —
// 따라서 병합은 파서가 아니라 렌더 직전 (consumer) 에서 수행한다.

/** prd 값이 TTL(전 제품 합계) 인가 */
export function isTtlPrdVal(p) {
  const u = String(p == null ? '' : p).trim().toUpperCase()
  return !u || u === 'TTL' || u === 'TOTAL'
}

/** llm 값이 TTL(전 모델 합계) 인가 — result 행에 llm 이 없으면(undefined) TTL 취급 */
export function isTtlLlmVal(m) {
  const u = String(m == null ? '' : m).trim()
  return !u || /^(total|all|ttl)$/i.test(u)
}

/** cnty 값이 TTL/Global 류인가 */
export function isTtlCntyVal(c) {
  return /^(ttl|total|global|all|ww|world|worldwide|globe|글로벌|전체|월드|총계)$/i.test(String(c == null ? '' : c).trim())
}

/**
 * citationsCnty 행 배열을 도메인 단위로 병합 + citations 내림차순 정렬 + rank 재부여.
 * 입력 행은 이미 한 국가(또는 TTL) 로 필터링돼 있어야 한다.
 *
 * @param {Array<{cnty?:string, domain:string, type?:string, prd?:string, citations:number}>} rows
 * @returns {Array<{cnty:string, domain:string, type:string, citations:number, rank:number}>}
 */
export function mergeCitDomainRows(rows) {
  const map = new Map()
  ;(rows || []).forEach(r => {
    if (!r || !r.domain) return
    const cit = Number(r.citations) || 0
    if (!(cit > 0)) return
    if (!map.has(r.domain)) {
      map.set(r.domain, { cnty: r.cnty, domain: r.domain, ttlSum: 0, ttlTop: 0, ttlType: '', prdSum: 0, prdTop: 0, prdType: '' })
    }
    const s = map.get(r.domain)
    if (isTtlPrdVal(r.prd)) {
      s.ttlSum += cit
      if (cit > s.ttlTop) { s.ttlTop = cit; s.ttlType = r.type || '' }   // 최대 기여 행의 type 채택
    } else {
      s.prdSum += cit
      if (cit > s.prdTop) { s.prdTop = cit; s.prdType = r.type || '' }
    }
  })

  const out = []
  map.forEach(s => {
    const useTtl = s.ttlSum > 0
    const citations = useTtl ? s.ttlSum : s.prdSum
    if (!(citations > 0)) return
    out.push({ cnty: s.cnty, domain: s.domain, type: (useTtl ? s.ttlType : s.prdType) || '', citations })
  })
  out.sort((a, b) => b.citations - a.citations || String(a.domain).localeCompare(String(b.domain)))
  out.forEach((r, i) => { r.rank = i + 1 })
  return out
}
