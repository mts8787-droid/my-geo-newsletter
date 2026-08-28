// ─── 한/영 이름 매핑 (기본 번역 폴백) ──────────────────────────────────────────
const CNTY_EN = { '미국':'US','영국':'UK','독일':'Germany','브라질':'Brazil','인도':'India','멕시코':'Mexico','스페인':'Spain','호주':'Australia','베트남':'Vietnam','캐나다':'Canada' }
const PROD_EN = { 'TV':'TV','세탁기':'Washing Machine','냉장고':'Refrigerator','모니터':'Monitor','오디오':'Audio','Cooking':'Cooking','식기세척기':'Dishwasher','청소기':'Vacuum Cleaner','RAC':'RAC','Aircare':'Aircare' }
const COMP_EN = { '삼성':'Samsung','삼성전자':'Samsung','보쉬':'Bosch','다이슨':'Dyson','소니':'Sony' }

export function resolveDataForLang(products, productsCnty, citations, citationsCnty, lang) {
  if (lang !== 'en') return { products, productsCnty, citations, citationsCnty }
  return {
    products: products.map(p => ({
      ...p,
      kr: p.en || PROD_EN[p.kr] || p.kr,
      compName: p.compNameEn || COMP_EN[p.compName] || p.compName,
    })),
    productsCnty: productsCnty.map(r => ({
      ...r,
      country: r.countryEn || CNTY_EN[r.country] || r.country,
      product: r.productEn || PROD_EN[r.product] || r.product,
      compName: r.compNameEn || COMP_EN[r.compName] || r.compName,
    })),
    citations: citations.map(c => ({
      ...c,
      category: c.categoryEn || PROD_EN[c.category] || c.category,
    })),
    citationsCnty: citationsCnty.map(r => ({
      ...r,
      cnty: r.cntyEn || r.cnty,
    })),
  }
}

// ─── 클라이언트 측 Google Translate (비공식 API) ─────────────────────────────
// 번역 — 서버 프록시(/api/translate) 경유가 기본.
//
// 과거에는 브라우저에서 translate.googleapis.com 의 비공식 gtx 엔드포인트를
// 텍스트 1개당 1요청(60+건, 20 병렬)으로 직접 호출했다. Google 이 IP 단위로
// 강하게 rate-limit 해서 운영 환경에서 429 로 통째 실패 → "번역 버튼이 안 먹는"
// 증상이 됐다 (사용자 보고 2026-08-28). routes/translate.js 가 이미 있으므로
// 그쪽(google-translate-api-x, 배열 배치 지원)을 쓴다.
//
// 서버 경로가 실패하면 기존 직접 호출로 폴백 — dev 서버에 라우트가 없을 때 대비.
export async function translateTexts(texts, { from = 'ko', to = 'en' } = {}) {
  try {
    const res = await fetch('/api/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest' },
      body: JSON.stringify({ texts, from, to }),
    })
    const data = await res.json().catch(() => ({}))
    if (!res.ok || !data.ok) throw new Error(data.error || `번역 실패 (${res.status})`)
    if (!Array.isArray(data.translated) || data.translated.length !== texts.length) {
      throw new Error(`번역 결과 길이 불일치 (${data.translated?.length} ≠ ${texts.length})`)
    }
    return data.translated
  } catch (err) {
    console.warn('[translate] 서버 프록시 실패 → 직접 호출 폴백:', err.message)
    return translateTextsDirect(texts, { from, to })
  }
}

// 폴백 — 브라우저에서 직접 호출 (rate-limit 취약, 서버 경로 불가 시에만)
async function translateTextsDirect(texts, { from = 'ko', to = 'en' } = {}) {
  const BATCH = 5
  const translated = []
  for (let i = 0; i < texts.length; i += BATCH) {
    const batch = texts.slice(i, i + BATCH)
    const results = await Promise.all(batch.map(async (text) => {
      if (!text || !text.trim()) return text
      const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${from}&tl=${to}&dt=t&q=${encodeURIComponent(text)}`
      const res = await fetch(url)
      if (!res.ok) throw new Error(`번역 실패 (${res.status})`)
      const data = await res.json()
      return data[0].map(s => s[0]).join('')
    }))
    translated.push(...results)
  }
  return translated
}

export function statusStyle(status) {
  if (status === 'lead')     return { bg: '#F0FDF4', border: '#BBF7D0', text: '#15803D', badge: '선도' }
  if (status === 'behind')   return { bg: '#FFFBEB', border: '#FDE68A', text: '#B45309', badge: '추격' }
  if (status === 'critical') return { bg: '#FFF1F2', border: '#FECDD3', text: '#BE123C', badge: '취약' }
  return                            { bg: '#F8FAFC', border: '#E2E8F0', text: '#475569', badge: '보통' }
}
