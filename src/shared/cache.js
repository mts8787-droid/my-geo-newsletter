const CACHE_VERSION = 3

export function loadCache(storageKey) {
  try {
    const raw = localStorage.getItem(storageKey)
    if (!raw) return null
    const parsed = JSON.parse(raw)
    if (parsed._v === 2) {
      return { metaKo: parsed.meta, metaEn: null, total: parsed.total, products: parsed.products,
        citations: parsed.citations, dotcom: parsed.dotcom, productsCnty: parsed.productsCnty,
        citationsCnty: parsed.citationsCnty, _v: 3 }
    }
    if (parsed._v !== CACHE_VERSION) { localStorage.removeItem(storageKey); return null }
    return parsed
  } catch { return null }
}

export function saveCache(storageKey, data) {
  try { localStorage.setItem(storageKey, JSON.stringify({ ...data, _v: CACHE_VERSION })) } catch {}
}
