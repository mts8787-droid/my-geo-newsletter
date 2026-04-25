// N2 — xlsx-js-style은 ~870KB로 무거우므로 사용 시점에만 동적 로드.
// ES 모듈 시스템이 자체적으로 캐시하므로 재호출 시 비용 0.
export async function loadXlsx() {
  const mod = await import('xlsx-js-style')
  return mod.default || mod
}
