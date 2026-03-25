import React from 'react'

const GLOSSARY = {
  ko: [
    { term: 'GEO (Generative Engine Optimization)', def: '생성형 AI 검색 엔진(예: ChatGPT, Gemini, Perplexity 등)에서 자사 브랜드 및 제품이 더 잘 노출·추천되도록 콘텐츠를 최적화하는 전략.' },
    { term: 'Visibility (가시성)', def: 'AI 검색 결과에서 자사 브랜드/제품이 얼마나 자주 등장하는지를 나타내는 지표. 노출 빈도, 순위, 커버리지 등을 포괄한다.' },
    { term: 'Citation (인용)', def: 'AI 응답 내에서 특정 소스(URL, 도메인)가 참조·링크되는 것. Citation Rate는 자사 도메인이 인용된 비율을 뜻한다.' },
    { term: 'Readability (가독성)', def: '콘텐츠가 AI 엔진에 의해 얼마나 쉽게 파싱·이해되는지를 평가하는 지표. 구조화된 데이터, 명확한 문장 구조 등이 영향을 미친다.' },
    { term: 'Progress Tracker (과제 현황)', def: '각 유관조직(Stakeholder)별 GEO 개선 과제의 목표 대비 실적 달성률을 추적하는 대시보드.' },
    { term: 'Stakeholder (유관조직)', def: 'GEO 개선 활동에 참여하는 조직 단위. 예: MS(MC/BS사업부), HS(H&A사업부), ES(VS사업부), PR, 브랜드 등.' },
    { term: '과제 구분 (Task Category)', def: '과제의 성격에 따른 분류. 예: 콘텐츠 수정, 신규 콘텐츠 제작, 기술 SEO, 구조화 데이터 등.' },
    { term: '달성률', def: '해당 월의 실적을 목표로 나눈 백분율. (실적 ÷ 목표) × 100.' },
    { term: '누적 달성률', def: '연초부터 해당 월까지의 누적 실적을 누적 목표로 나눈 백분율.' },
    { term: '연간 진척률', def: '연초부터 현재까지의 누적 실적을 연간 총 목표로 나눈 백분율.' },
    { term: '주의 필요 과제', def: '달성률이 80% 미만인 과제. 즉각적인 관심과 조치가 필요한 항목.' },
    { term: 'Deep Link (딥링크)', def: '특정 페이지나 섹션으로 직접 이동할 수 있는 URL. 월간 리포트에서 대시보드 특정 탭으로 바로 연결 가능.' },
    { term: 'KPI (Key Performance Indicator)', def: '핵심 성과 지표. GEO에서는 Visibility, Citation Rate, Readability Score 등이 해당된다.' },
    { term: 'BU (Business Unit)', def: '사업부 단위. MC/BS(MS), H&A(HS), VS(ES) 등으로 구분된다.' },
  ],
  en: [
    { term: 'GEO (Generative Engine Optimization)', def: 'A strategy to optimize content so that brands and products are better surfaced and recommended by generative AI search engines (e.g., ChatGPT, Gemini, Perplexity).' },
    { term: 'Visibility', def: 'A metric measuring how frequently a brand/product appears in AI search results. Encompasses exposure frequency, ranking, and coverage.' },
    { term: 'Citation', def: 'When a specific source (URL, domain) is referenced or linked within an AI response. Citation Rate refers to the percentage of responses that cite a given domain.' },
    { term: 'Readability', def: 'A metric evaluating how easily content can be parsed and understood by AI engines. Influenced by structured data, clear sentence structure, etc.' },
    { term: 'Progress Tracker', def: 'A dashboard tracking goal-vs-actual achievement rates for GEO improvement tasks by each stakeholder organization.' },
    { term: 'Stakeholder', def: 'An organizational unit participating in GEO improvement activities. E.g., MS (MC/BS Division), HS (H&A Division), ES (VS Division), PR, Brand, etc.' },
    { term: 'Task Category', def: 'Classification of tasks by nature. E.g., Content Modification, New Content Creation, Technical SEO, Structured Data, etc.' },
    { term: 'Achievement Rate', def: 'Monthly actual performance divided by target, expressed as a percentage. (Actual ÷ Goal) × 100.' },
    { term: 'Cumulative Achievement Rate', def: 'Year-to-date cumulative actual divided by cumulative goal, expressed as a percentage.' },
    { term: 'Annual Progress Rate', def: 'Year-to-date cumulative actual divided by the total annual target, expressed as a percentage.' },
    { term: 'Tasks Needing Attention', def: 'Tasks with an achievement rate below 80%. Items requiring immediate attention and action.' },
    { term: 'Deep Link', def: 'A URL that navigates directly to a specific page or section. Enables direct linking from monthly reports to specific dashboard tabs.' },
    { term: 'KPI (Key Performance Indicator)', def: 'Core performance metrics. In GEO, these include Visibility, Citation Rate, Readability Score, etc.' },
    { term: 'BU (Business Unit)', def: 'Organizational division. Categorized as MC/BS (MS), H&A (HS), VS (ES), etc.' },
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
        <p style={{ fontSize: 13, color: TEXT_DIM, marginBottom: 28 }}>{subtitle}</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {entries.map((e, i) => (
            <div key={i} style={{
              background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: 10,
              padding: '16px 20px',
            }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: '#F8FAFC', marginBottom: 6 }}>{e.term}</div>
              <div style={{ fontSize: 13, color: TEXT_DIM, lineHeight: 1.7 }}>{e.def}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
