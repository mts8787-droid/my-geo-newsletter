import React from 'react'

const GLOSSARY = {
  ko: [
    { term: 'GEO (Generative Engine Optimization)', def: '생성형 AI 검색 엔진(예: ChatGPT, Gemini, Perplexity 등)에서 자사 브랜드 및 제품이 더 잘 노출·추천되도록 콘텐츠를 최적화하는 전략.' },
    { term: 'Visibility (가시성)', def: 'GEO 가시성 점수는 생성형 AI 엔진(ChatGPT, Gemini 등)에서 해당 카테고리 관련 질문 시 LG 제품이 언급·추천되는 빈도를 0~100%로 수치화한 지표입니다. MoM은 전월 대비 증감이며, 경쟁사 대비는 (LG 점수 / 1위 브랜드 점수) × 100%로 산출합니다. 100% 이상=선도, 80% 이상=추격, 80% 미만=취약입니다.' },
    { term: 'Visibility — 국가별', def: '국가별 GEO 가시성은 각 법인(미국, 영국, 독일 등)에서 생성형 AI 엔진이 해당 제품 카테고리 질문 시 LG를 언급·추천하는 비율입니다. 막대 색상은 경쟁사 대비 상대 점수를 나타내며, 녹색(선도)·주황(추격)·빨강(취약)으로 구분됩니다. 하단 수치는 1위 경쟁사 점수와 LG와의 격차(%p)입니다.' },
    { term: 'Citation (인용)', def: 'Citation Score는 생성형 AI가 LG 제품 관련 답변 시 참조하는 외부 출처(리뷰 사이트, 미디어 등)의 영향력을 점수화한 지표입니다. 점수가 높을수록 해당 출처가 AI 답변에 자주 인용되며, 증감은 전월 대비 기여도 변화를 나타냅니다.' },
    { term: 'Citation — 닷컴', def: '닷컴 Citation은 생성형 AI가 답변 시 LG·Samsung 공식 사이트의 각 페이지 유형(TTL, PLP, PDP 등)을 인용하는 빈도를 나타냅니다. TTL은 전체 합계, PLP는 카테고리 목록, PDP는 제품 상세, Microsites는 캠페인 페이지 인용 수입니다.' },
    { term: 'Readability (가독성)', def: '콘텐츠가 AI 엔진에 의해 얼마나 쉽게 파싱·이해되는지를 평가하는 지표. 구조화된 데이터, 명확한 문장 구조 등이 영향을 미친다.' },
    { term: 'KPI (Key Performance Indicator)', def: '핵심 성과 지표. GEO에서는 Visibility, Citation Rate, Readability Score 등이 해당된다.' },
    { term: 'BU (Business Unit)', def: '사업부 단위. MS, HS, ES 등으로 구분된다.' },
    { term: 'Stakeholder (유관조직)', def: 'GEO 개선 활동에 참여하는 조직 단위. 예: MS, HS, ES, PR, 브랜드 등.' },
    { term: '달성률', def: '해당 월의 실적을 목표로 나눈 백분율. (실적 ÷ 목표) × 100.' },
    { term: '누적 달성률', def: '연초부터 해당 월까지의 누적 실적을 누적 목표로 나눈 백분율.' },
    { term: '연간 진척률', def: '연초부터 현재까지의 누적 실적을 연간 총 목표로 나눈 백분율.' },
    { term: '신호등 체계', def: '100% 이상 = 선도(녹색), 80~100% = 추격(주황), 80% 미만 = 취약(빨강). 경쟁사 대비 상대 점수 기준으로 색상 분류.' },
  ],
  en: [
    { term: 'GEO (Generative Engine Optimization)', def: 'A strategy to optimize content so that brands and products are better surfaced and recommended by generative AI search engines (e.g., ChatGPT, Gemini, Perplexity).' },
    { term: 'Visibility', def: 'GEO Visibility Score quantifies how often LG products are mentioned/recommended by generative AI engines (ChatGPT, Gemini, etc.) on a 0–100% scale. MoM shows month-over-month change. Competitor comparison is calculated as (LG Score / Top Brand Score) × 100%. ≥100% = Lead, ≥80% = Behind, <80% = Critical.' },
    { term: 'Visibility — by Country', def: 'Country-level GEO Visibility measures how often AI engines mention/recommend LG for each product category in each market (US, UK, DE, etc.). Bar colors indicate relative scores vs competitors: green (Lead), orange (Behind), red (Critical). Values below show top competitor score and gap in %p.' },
    { term: 'Citation', def: 'Citation Score quantifies the influence of external sources (review sites, media, etc.) referenced by AI when answering LG product queries. Higher scores indicate more frequent citation. Changes reflect month-over-month contribution shifts.' },
    { term: 'Citation — Dotcom', def: 'Dotcom Citation measures how often AI cites LG/Samsung official site page types (TTL, PLP, PDP, etc.). TTL = total, PLP = category listing, PDP = product detail, Microsites = campaign page citation counts.' },
    { term: 'Readability', def: 'A metric evaluating how easily content can be parsed and understood by AI engines. Influenced by structured data, clear sentence structure, etc.' },
    { term: 'KPI (Key Performance Indicator)', def: 'Core performance metrics. In GEO, these include Visibility, Citation Rate, Readability Score, etc.' },
    { term: 'BU (Business Unit)', def: 'Organizational division. Categorized as MS, HS, ES, etc.' },
    { term: 'Stakeholder', def: 'An organizational unit participating in GEO improvement activities. E.g., MS, HS, ES, PR, Brand, etc.' },
    { term: 'Achievement Rate', def: 'Monthly actual performance divided by target, expressed as a percentage. (Actual / Goal) x 100.' },
    { term: 'Cumulative Achievement Rate', def: 'Year-to-date cumulative actual divided by cumulative goal, expressed as a percentage.' },
    { term: 'Annual Progress Rate', def: 'Year-to-date cumulative actual divided by the total annual target, expressed as a percentage.' },
    { term: 'Traffic Light System', def: '≥100% = Lead (green), 80–100% = Behind (orange), <80% = Critical (red). Color-coded based on relative score vs competitor.' },
  ],
}

const BG = '#0F172A'
const CARD_BG = '#1E293B'
const BORDER = '#334155'
const TEXT = '#E2E8F0'
const TEXT_DIM = '#94A3B8'

export default function GlossaryPage({ lang = 'ko' }) {
  const entries = GLOSSARY[lang] || GLOSSARY.ko
  const title = lang === 'en' ? 'GEO Glossary' : 'GEO 용어 사전'
  const subtitle = lang === 'en'
    ? 'Key terms and definitions used across the GEO dashboards.'
    : 'GEO 대시보드 전반에서 사용되는 주요 용어와 정의입니다.'

  return (
    <div style={{ flex: 1, overflowY: 'auto', background: BG, padding: '32px 40px' }}>
      <div style={{ maxWidth: 840, margin: '0 auto' }}>
        <h2 style={{ fontSize: 24, fontWeight: 800, color: TEXT, marginBottom: 6 }}>{title}</h2>
        <p style={{ fontSize: 15, color: TEXT_DIM, marginBottom: 28 }}>{subtitle}</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {entries.map((e, i) => (
            <div key={i} style={{
              background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: 10,
              padding: '16px 20px',
            }}>
              <div style={{ fontSize: 16, fontWeight: 700, color: '#F8FAFC', marginBottom: 6 }}>{e.term}</div>
              <div style={{ fontSize: 15, color: TEXT_DIM, lineHeight: 1.7 }}>{e.def}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
