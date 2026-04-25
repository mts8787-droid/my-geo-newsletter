// ─── 파일 단위 직렬화 락 (동시 쓰기 충돌 방지) ───────────────────────────────
const fileLocks = new Map()

/**
 * 같은 file 키의 작업을 직렬로 실행한다.
 * 이전 작업의 성공/실패와 무관하게 fn을 정확히 한 번만 호출.
 */
export function withFileLock(file, fn) {
  const prev = fileLocks.get(file) || Promise.resolve()
  const chain = prev.then(() => fn(), () => fn())
  fileLocks.set(file, chain.then(() => {}, () => {}))
  return chain
}
