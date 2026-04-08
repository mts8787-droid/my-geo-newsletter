// ─── 이메일 호환 HTML 생성기 ─────────────────────────────────────────────────
// 규칙: table 기반 레이아웃, 인라인 스타일, 외부 폰트 없음, flex/grid 없음

const EM_RED  = '#CF0652'
const EM_DARK = '#A0003E'
const EM_FONT = "'LG Smart', 'Arial Narrow', Arial, sans-serif"

// ─── HTML Sanitization (XSS 방지) ──────────────────────────────────────────
function escapeHtml(str) {
  if (typeof str !== 'string') return String(str ?? '')
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

// ─── 다국어 번역 ─────────────────────────────────────────────────────────────
const T = {
  ko: {
    lead: '선도', behind: '추격', critical: '취약', normal: '보통',
    weekTrend: '주간 트렌드',
    monthTrend: '월별 트렌드',
    weeklyTab: '주별',
    monthlyTab: '월별',
    vsComp: '대비',
    categories: '개 카테고리',
    productTitle: '제품별 GEO Visibility 현황',
    legendLead: '선도 ≥100%', legendBehind: '추격 ≥80%', legendCritical: '취약 <80%',
    lgBasis: 'LG/1위 기준',
    cntyTitle: '국가별 GEO Visibility 현황',
    cntyComp: '1위 경쟁사',
    citationTitle: '도메인 카테고리별 Citation 현황',
    citationDomainTitle: '도메인별 Citation 현황',
    citationCntyTitle: '국가별 Citation 도메인',
    citationLegend: 'Citation Score 건수 (비중)',
    dotcomTitle: '닷컴 Citation (경쟁사대비)',
    dotcomTTL: 'TTL (전체)',
    dotcomLgOnly: '— (LG only)',
    dotcomLgWin: 'LG 우위',
    dotcomSsWin: 'SS 우위',
    dotcomNone: '없음',
    insight: 'INSIGHT',
    howToRead: 'HOW TO READ',
    notice: 'Notice',
    kpiLogic: 'KPI Logic',
    geoInsight: 'Executive Summary',
    todoTitle: 'Action Plan',
    footer: '해외영업본부 D2C해외영업그룹 D2C마케팅담당 D2C디지털마케팅팀',
  },
  en: {
    lead: 'Lead', behind: 'Behind', critical: 'Critical', normal: 'Normal',
    weekTrend: 'Weekly Trend',
    monthTrend: 'Monthly Trend',
    weeklyTab: 'Weekly',
    monthlyTab: 'Monthly',
    vsComp: 'vs',
    categories: ' Categories',
    productTitle: 'GEO Visibility by Product',
    legendLead: 'Lead ≥100%', legendBehind: 'Behind ≥80%', legendCritical: 'Critical <80%',
    lgBasis: 'LG/Top 1 Basis',
    cntyTitle: 'GEO Visibility by Country',
    cntyComp: 'Top 1 Competitor',
    citationTitle: 'Citation by Domain Category',
    citationDomainTitle: 'Citation by Domain',
    citationCntyTitle: 'Citation Domain by Country',
    citationLegend: 'Citation Score Count (Ratio)',
    dotcomTitle: 'Dotcom Citation (vs Competitor)',
    dotcomTTL: 'TTL (Total)',
    dotcomLgOnly: '— (LG only)',
    dotcomLgWin: 'LG Leads',
    dotcomSsWin: 'SS Leads',
    dotcomNone: 'None',
    insight: 'INSIGHT',
    howToRead: 'HOW TO READ',
    notice: 'Notice',
    kpiLogic: 'KPI Logic',
    geoInsight: 'Executive Summary',
    todoTitle: 'Action Plan',
    footer: 'Overseas Sales HQ · D2C Overseas Sales Group · D2C Marketing · D2C Digital Marketing Team',
  },
}

function statusInfo(status, lang = 'ko') {
  const t = T[lang] || T.ko
  if (status === 'lead')     return { bg: '#F0FDF4', border: '#BBF7D0', color: '#15803D', label: t.lead }
  if (status === 'behind')   return { bg: '#FFFBEB', border: '#FDE68A', color: '#B45309', label: t.behind }
  if (status === 'critical') return { bg: '#FFF1F2', border: '#FECDD3', color: '#BE123C', label: t.critical }
  return                            { bg: '#F8FAFC', border: '#E2E8F0', color: '#475569', label: t.normal }
}

function fmt(n) {
  return Number(n).toLocaleString('en-US')
}

function mdBold(text) {
  return escapeHtml(text || '')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\r\n/g, '<br>')
    .replace(/\n/g, '<br>')
}

// ─── 삼성 → SS 치환 ─────────────────────────────────────────────────────────
function ssName(name) {
  if (!name) return ''
  return escapeHtml(name.replace(/삼성전자/g, 'SS').replace(/삼성/g, 'SS').replace(/Samsung/gi, 'SS'))
}

function delta(score, prev) { return +(score - prev).toFixed(1) }

function deltaHtml(d, size = 15, mom = false) {
  if (d === 0) return `<span style="color:#94A3B8;font-size:${size}px;">─</span>`
  const arrow = d > 0 ? '▲' : '▼'
  const color = d > 0 ? '#16A34A' : '#DC2626'
  const prefix = mom ? 'MoM ' : ''
  return `<span style="color:${color};font-size:${size}px;font-weight:700;">${prefix}${arrow} ${Math.abs(d).toFixed(1)}%p</span>`
}

// ─── 주간 트렌드 바 차트 (이메일 호환, 제품별 상대 스케일) ────────────────────
function weeklyTrendHtml(weekly, color, globalMax, globalMin, weeklyLabels) {
  if (!weekly || weekly.length === 0) return ''
  // 제품 자체 min/max 사용 → 작은 증감도 바 높낮이에 반영
  const valid = weekly.filter(v => v != null)
  const localMin = valid.length ? Math.min(...valid) : 0
  const localMax = valid.length ? Math.max(...valid) : 1
  const range = localMax - localMin || 1
  const MAX_H = 24
  // 실제 주차 라벨 사용 (weeklyLabels에서 데이터 길이만큼 뒤에서 가져옴)
  const fallback = weekly.map((_, i) => `W${i + 1}`)
  const labels = weeklyLabels && weeklyLabels.length >= weekly.length
    ? weeklyLabels.slice(weeklyLabels.length - weekly.length)
    : fallback

  const bars = weekly.map((v, i) => {
    if (v == null) return ''
    const h = Math.round(((v - localMin) / range) * MAX_H) + 4
    const spacer = MAX_H - h
    return `<td style="vertical-align:bottom;text-align:center;padding:0 2px;">
      <table border="0" cellpadding="0" cellspacing="0" align="center" style="margin:0 auto;">
        <tr><td style="font-size:10px;font-weight:700;color:${color};font-family:${EM_FONT};padding-bottom:1px;">${v.toFixed(1)}</td></tr>
        ${spacer > 0 ? `<tr><td height="${spacer}" style="font-size:0;line-height:0;">&nbsp;</td></tr>` : ''}
        <tr><td width="10" height="${h}" style="background:${color};font-size:0;line-height:0;">&nbsp;</td></tr>
        <tr><td style="font-size:10px;color:#94A3B8;font-family:${EM_FONT};padding-top:2px;">${labels[i] || ''}</td></tr>
      </table>
    </td>`
  }).join('')

  return `<!--[if mso]><table border="0" cellpadding="0" cellspacing="0"><tr><td><![endif]-->
  <table border="0" cellpadding="0" cellspacing="0" style="display:inline-table;">
    <tr>${bars}</tr>
  </table>
  <!--[if mso]></td></tr></table><![endif]-->`
}

// ─── 월별 트렌드 바 차트 (대시보드용, 균일 최대 높이) ─────────────────────────
function monthlyTrendHtml(monthly, color, globalMax, globalMin) {
  if (!monthly || monthly.length === 0) return ''
  const range = globalMax - globalMin || 1
  const MAX_H = 24
  const cnt = monthly.length
  const labels = cnt <= 4
    ? ['M-3', 'M-2', 'M-1', 'M0'].slice(-cnt)
    : monthly.map((_, i) => `M${i + 1}`)

  const bars = monthly.map((v, i) => {
    const h = Math.round(((v - globalMin) / range) * MAX_H) + 4
    const spacer = MAX_H - h
    return `<td style="vertical-align:bottom;text-align:center;padding:0 1px;">
      <table border="0" cellpadding="0" cellspacing="0" align="center" style="margin:0 auto;">
        ${spacer > 0 ? `<tr><td height="${spacer}" style="font-size:0;line-height:0;">&nbsp;</td></tr>` : ''}
        <tr><td width="10" height="${h}" style="background:${color};font-size:0;line-height:0;">&nbsp;</td></tr>
        <tr><td style="font-size:11px;color:#94A3B8;font-family:${EM_FONT};padding-top:2px;">${labels[i] || ''}</td></tr>
      </table>
    </td>`
  }).join('')

  return `<!--[if mso]><table border="0" cellpadding="0" cellspacing="0"><tr><td><![endif]-->
  <table border="0" cellpadding="0" cellspacing="0" style="display:inline-table;">
    <tr>${bars}</tr>
  </table>
  <!--[if mso]></td></tr></table><![endif]-->`
}

// ─── 제품 카드 (이메일용) ──────────────────────────────────────────────────────
function productCardHtml(p, globalMax, globalMin, lang = 'ko', opts = {}) {
  const t   = T[lang] || T.ko
  const st  = statusInfo(p.status, lang)
  const d   = delta(p.score, p.prev)
  const { showTrendTabs = false, monthlyGlobalMax = 100, monthlyGlobalMin = 0, weeklyLabels } = opts
  // 8주 트렌드 고정 — 항상 마지막 8주만 표시
  const TREND_WEEKS = 8
  const fullWeekly = p.weekly || []
  const trendArr = fullWeekly.slice(-TREND_WEEKS)
  const trimmedLabels = weeklyLabels && weeklyLabels.length >= TREND_WEEKS ? weeklyLabels.slice(-TREND_WEEKS) : weeklyLabels
  const monthlyArr = p.monthly || (p.prev ? [p.prev, p.score] : [])
  const sparkColor = p.status === 'critical' ? '#BE123C' : p.status === 'behind' ? '#E8910C' : '#15803D'
  const trendTitle = lang === 'en' ? `${TREND_WEEKS}W Trend` : `${TREND_WEEKS}주 트렌드`

  // 트렌드 영역: 대시보드 모드일 때 주별/월별 모두 생성
  const weeklyContent = `<table border="0" cellpadding="0" cellspacing="0" width="100%"><tr><td align="right" style="font-size:12px;color:#94A3B8;padding-bottom:2px;font-family:${EM_FONT};">${trendTitle}</td></tr></table>
                ${weeklyTrendHtml(trendArr, sparkColor, globalMax, globalMin, trimmedLabels)}`
  const monthlyContent = `<table border="0" cellpadding="0" cellspacing="0" width="100%"><tr><td align="right" style="font-size:12px;color:#94A3B8;padding-bottom:2px;font-family:${EM_FONT};">${t.monthTrend}</td></tr></table>
                ${monthlyTrendHtml(monthlyArr, sparkColor, monthlyGlobalMax, monthlyGlobalMin)}`

  const trendCell = showTrendTabs
    ? `<div class="trend-weekly">${weeklyContent}</div><div class="trend-monthly" style="display:none;">${monthlyContent}</div>`
    : weeklyContent

  return `
  <td width="33%" style="padding:5px;vertical-align:top;height:180px;">
    <table border="0" cellpadding="0" cellspacing="0" width="100%" height="180" style="border:2px solid ${st.border};border-radius:10px;background:#FFFFFF;font-family:${EM_FONT};">
      <tr>
        <td style="padding:12px 13px 6px;">
          <table border="0" cellpadding="0" cellspacing="0" width="100%">
            <tr>
              <td style="font-size:19px;font-weight:900;color:#1A1A1A;line-height:22px;vertical-align:middle;">${escapeHtml(p.kr)}</td>
              <td align="right" style="vertical-align:middle;">
                <table border="0" cellpadding="0" cellspacing="0" align="right"><tr>
                  <td style="background:${st.bg};color:${st.color};border:1px solid ${st.border};border-radius:10px;padding:2px 7px;font-size:13px;font-weight:700;line-height:22px;font-family:${EM_FONT};">${st.label}</td>
                </tr></table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td style="padding:4px 13px 8px;">
          <table border="0" cellpadding="0" cellspacing="0" width="100%">
            <tr>
              <td>
                <span style="font-size:29px;font-weight:900;color:#1A1A1A;">${p.score.toFixed(1)}</span>
                <span style="font-size:16px;color:#94A3B8;"> %</span>
              </td>
              <td align="right" style="vertical-align:top;padding-top:2px;">
                ${trendCell}
              </td>
            </tr>
            <tr>
              <td colspan="2" style="padding-top:4px;">${p.prev ? deltaHtml(d, 13, true) : `<span style="color:#94A3B8;font-size:15px;">MoM —</span>`}</td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td style="padding:0 13px 12px;">
          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background:#F8FAFC;border-radius:6px;">
            <tr>
              <td style="padding:6px 8px;font-size:15px;color:#1A1A1A;">${lang === 'en' ? `${t.vsComp} ${ssName(p.compName)}` : `${ssName(p.compName)} ${t.vsComp}`}</td>
              <td align="right" style="padding:6px 8px;font-size:15px;font-weight:700;color:${(p.compRatio || 0) >= 100 ? '#15803D' : (p.compRatio || 0) >= 80 ? '#E8910C' : '#BE123C'};">
                ${(() => {
                  const curRatio = p.compRatio || Math.round(p.vsComp > 0 ? (p.score / p.vsComp) * 100 : 100)
                  if (!p.prev || !p.vsComp) return `${curRatio}%`
                  const prevRatio = Math.round((p.prev / p.vsComp) * 100)
                  const rd = curRatio - prevRatio
                  const rdColor = rd > 0 ? '#16A34A' : rd < 0 ? '#DC2626' : '#94A3B8'
                  return `${curRatio}% <span style="font-size:13px;color:${rdColor};">${rd > 0 ? '+' : ''}${rd}%p</span>`
                })()}
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </td>`
}

// ─── BU 섹션 ──────────────────────────────────────────────────────────────────
function buSectionHtml(buKey, buProducts, globalMax, globalMin, lang = 'ko', opts = {}) {
  const t = T[lang] || T.ko
  const buTotal = (opts.buTotals || {})[buKey]
  const rows = []
  for (let i = 0; i < buProducts.length; i += 3) {
    const rowProducts = buProducts.slice(i, i + 3)
    while (rowProducts.length < 3) rowProducts.push(null)
    rows.push(rowProducts)
  }

  const rowsHtml = rows.map(row => `
    <tr>
      ${row.map(p => p ? productCardHtml(p, globalMax, globalMin, lang, opts) : '<td width="33%" style="padding:5px;"></td>').join('')}
    </tr>`).join('')

  const buScoreHtml = `<span style="font-size:16px;color:#94A3B8;font-family:${EM_FONT};">${buProducts.length}${t.categories}</span>`

  return `
  <!-- ${buKey} BU 헤더 -->
  <tr>
    <td style="padding:8px 0 6px;">
      <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <tr>
          <td style="background:#F1F5F9;border-radius:7px;padding:7px 12px;">
            <table border="0" cellpadding="0" cellspacing="0" width="100%">
              <tr>
                <td style="font-size:17px;font-weight:700;color:#1A1A1A;font-family:${EM_FONT};">${escapeHtml(buKey)}</td>
                <td align="right">${buScoreHtml}</td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>
  <!-- ${buKey} 제품 카드 -->
  <tr>
    <td style="padding-bottom:8px;">
      <table border="0" cellpadding="0" cellspacing="0" width="100%">
        ${rowsHtml}
      </table>
    </td>
  </tr>`
}

// ─── Insight / HowToRead 블록 (이메일용) ────────────────────────────────────
function insightBlockHtml(insight, showInsight, howToRead, showHowToRead, lang = 'ko') {
  const t = T[lang] || T.ko
  let html = ''
  if (showInsight && insight) {
    html += `
    <tr>
      <td style="padding:10px 16px;">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-radius:8px;background:#FFF4F7;border:1px solid #F5CCD8;">
          <tr>
            <td style="padding:10px 14px;">
              <p style="margin:0 0 4px;font-size:13px;font-weight:700;color:${EM_RED};font-family:${EM_FONT};">${t.insight}</p>
              <p style="margin:0;font-size:14px;color:#1A1A1A;line-height:22px;font-family:${EM_FONT};">${mdBold(insight)}</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>`
  }
  if (showHowToRead && howToRead) {
    html += `
    <tr>
      <td style="padding:0 16px 10px;">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-radius:8px;background:#F8FAFC;border:1px solid #E2E8F0;">
          <tr>
            <td style="padding:10px 14px;">
              <p style="margin:0 0 4px;font-size:13px;font-weight:700;color:#64748B;font-family:${EM_FONT};">${t.howToRead}</p>
              <p style="margin:0;font-size:14px;color:#475569;line-height:22px;font-family:${EM_FONT};">${mdBold(howToRead)}</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>`
  }
  return html
}

// ─── 국가별 Visibility ────────────────────────────────────────────────────────
function cntyStatus(score, compScore) {
  if (compScore <= 0) return 'lead'
  const ratio = score / compScore * 100
  if (ratio >= 100) return 'lead'
  if (ratio >= 80)  return 'behind'
  return 'critical'
}

function countryProductSectionHtml(productName, rows, lang) {
  const t = T[lang] || T.ko
  const maxScore = Math.max(...rows.map(r => Math.max(r.score, r.compScore)), 1)
  const BAR_MAX = 44

  const statuses      = rows.map(r => cntyStatus(r.score, r.compScore))
  const leadCount     = statuses.filter(s => s === 'lead').length
  const behindCount   = statuses.filter(s => s === 'behind').length
  const criticalCount = statuses.filter(s => s === 'critical').length

  const summaryParts = []
  if (leadCount)     summaryParts.push(`<span style="color:#15803D;font-weight:700;font-family:${EM_FONT};">${t.lead} ${leadCount}</span>`)
  if (behindCount)   summaryParts.push(`<span style="color:#E8910C;font-weight:700;font-family:${EM_FONT};">${t.behind} ${behindCount}</span>`)
  if (criticalCount) summaryParts.push(`<span style="color:#BE123C;font-weight:700;font-family:${EM_FONT};">${t.critical} ${criticalCount}</span>`)

  const colWidth = Math.floor(100 / rows.length)

  // 세로 바 컬럼들
  const barCols = rows.map(r => {
    const status   = cntyStatus(r.score, r.compScore)
    const barColor = status === 'lead' ? '#15803D' : status === 'behind' ? '#E8910C' : '#BE123C'
    const barH     = Math.max(Math.round((r.score / maxScore) * BAR_MAX), 3)
    const spacerH  = BAR_MAX - barH
    const ratio    = r.compScore > 0 ? Math.round((r.score / r.compScore) * 100) : 100
    const gapColor = ratio >= 100 ? '#15803D' : ratio >= 80 ? '#E8910C' : '#BE123C'
    const gapStr   = ratio + '%'

    return `<td width="${colWidth}%" style="vertical-align:bottom;text-align:center;padding:0 1px;overflow:hidden;">
      <table border="0" cellpadding="0" cellspacing="0" align="center" style="margin:0 auto;table-layout:fixed;width:100%;">
        ${spacerH > 0 ? `<tr><td height="${spacerH}" style="font-size:0;line-height:0;">&nbsp;</td></tr>` : ''}
        <tr><td height="${barH}" style="font-size:0;line-height:0;"><table border="0" cellpadding="0" cellspacing="0" align="center"><tr><td width="26" height="${barH}" style="background:${barColor};border-radius:3px 3px 0 0;font-size:0;line-height:0;">&nbsp;</td></tr></table></td></tr>
        <tr><td style="font-size:13px;font-weight:800;color:${barColor};font-family:${EM_FONT};padding-top:3px;white-space:nowrap;overflow:hidden;">${r.score.toFixed(1)}</td></tr>
        <tr><td style="font-size:12px;color:#475569;font-family:${EM_FONT};padding-top:2px;white-space:nowrap;overflow:hidden;">${escapeHtml(r.country)}</td></tr>
        <tr><td style="font-size:11px;color:#94A3B8;font-family:${EM_FONT};padding-top:2px;white-space:nowrap;overflow:hidden;">${ssName(r.compName)} ${r.compScore.toFixed(1)}</td></tr>
        <tr><td style="font-size:11px;font-weight:700;color:${gapColor};font-family:${EM_FONT};padding-top:1px;white-space:nowrap;overflow:hidden;">${gapStr}</td></tr>
      </table>
    </td>`
  }).join('')

  return `
  <tr>
    <td style="padding:8px 0 4px;">
      <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <tr>
          <td style="background:#F1F5F9;border-radius:7px;padding:7px 12px;">
            <table border="0" cellpadding="0" cellspacing="0" width="100%">
              <tr>
                <td style="font-size:16px;font-weight:700;color:#1A1A1A;font-family:${EM_FONT};">${escapeHtml(productName)}</td>
                <td align="right" style="font-size:13px;">
                  ${summaryParts.join(`<span style="color:#CBD5E1;font-family:${EM_FONT};"> &nbsp;·&nbsp; </span>`)}
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
    <td style="padding:0 4px 12px;">
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout:fixed;">
        <tr>${barCols}</tr>
      </table>
    </td>
  </tr>`
}

function countryVisibilitySectionHtml(productsCnty, meta, lang) {
  if (!productsCnty || !productsCnty.length) return ''
  const t = T[lang] || T.ko

  const productMap = new Map()
  productsCnty.forEach(row => {
    if (!productMap.has(row.product)) productMap.set(row.product, [])
    productMap.get(row.product).push(row)
  })

  // 제품별 on/off 필터 적용
  const filter = meta.cntyProductFilter || {}
  const productSections = [...productMap.entries()]
    .filter(([name]) => filter[name] !== false)
    .map(([name, rows]) => countryProductSectionHtml(name, rows, lang))
    .join('')

  return `
              <!-- ══ 국가별 GEO Visibility ══ -->
              <tr>
                <td style="padding-bottom:28px;">
                  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background:#FFFFFF;border-radius:16px;border:2px solid #E8EDF2;">
                    <tr>
                      <td style="padding:22px 16px 18px;background:#FAFBFC;border-bottom:1px solid #F1F5F9;">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                          <tr>
                            <td style="vertical-align:middle;">
                              <table border="0" cellpadding="0" cellspacing="0">
                                <tr>
                                  <td width="3" style="background:${EM_RED};border-radius:2px;">&nbsp;</td>
                                  <td style="padding-left:8px;font-size:19px;font-weight:700;color:#1A1A1A;font-family:${EM_FONT};">${t.cntyTitle}</td>
                                </tr>
                              </table>
                            </td>
                            <td align="right" style="vertical-align:middle;font-size:13px;color:#94A3B8;font-family:${EM_FONT};">
                              <span style="color:#15803D;">●</span> ${t.legendLead} &nbsp;
                              <span style="color:#E8910C;">●</span> ${t.legendBehind} &nbsp;
                              <span style="color:#BE123C;">●</span> ${t.legendCritical}
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    ${insightBlockHtml(meta.cntyInsight, meta.showCntyInsight, meta.cntyHowToRead, meta.showCntyHowToRead, lang)}
                    <tr>
                      <td style="padding:20px 16px;">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                          ${productSections}
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>`
}

// ─── 도메인 표시명 (TLD 제거) ─────────────────────────────────────────────────
function stripDomain(domain) {
  return (domain || '').replace(/\.(com|org|net|co\.uk|com\.br|com\.au|com\.vn|com\.mx|co\.kr|de|es|fr|ca|in|vn)$/i, '')
}

// ─── 도메인별 Citation 국가 서브섹션 (가로 바) ─────────────────────────────────
function citationDomainCntyRowsHtml(cntyRows, domTopN) {
  if (!cntyRows.length) return ''
  const maxScore = Math.max(...cntyRows.map(r => r.citations), 1)
  const totalCit = cntyRows.reduce((s, r) => s + r.citations, 0)
  const fmtN = n => Number(n).toLocaleString('en-US')

  return cntyRows.slice(0, domTopN).map((c, i, arr) => {
    const barPct = Math.min(Math.round((c.citations / maxScore) * 70), 70)
    const ratio = totalCit > 0 ? ((c.citations / totalCit) * 100).toFixed(1) : '0.0'
    return `<tr>
      <td style="border-bottom:${i < arr.length - 1 ? '1px solid #F8FAFC' : 'none'};">
        <table border="0" cellpadding="0" cellspacing="0" width="100%">
          <tr>
            <td width="150" style="padding:10px 12px 10px 16px;vertical-align:middle;">
              <table border="0" cellpadding="0" cellspacing="0"><tr>
                <td width="22" height="22" align="center" style="background:${c.rank <= 3 ? EM_RED : '#F1F5F9'};border-radius:4px;font-size:13px;font-weight:800;color:${c.rank <= 3 ? '#FFFFFF' : '#94A3B8'};font-family:${EM_FONT};line-height:22px;">${c.rank}</td>
                <td style="padding-left:7px;vertical-align:middle;">
                  <p style="margin:0;font-size:14px;font-weight:700;color:#1A1A1A;font-family:${EM_FONT};">${escapeHtml(stripDomain(c.domain))}</p>
                  <span style="font-size:12px;color:#94A3B8;font-family:${EM_FONT};background:#F8FAFC;border-radius:4px;padding:1px 5px;">${escapeHtml(c.type)}</span>
                </td>
              </tr></table>
            </td>
            <td style="padding:10px 16px 10px 0;vertical-align:top;">
              <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td width="${barPct}%" style="background:${EM_RED};border-radius:6px;height:24px;font-size:0;">&nbsp;</td>
                  <td style="height:24px;padding-left:8px;white-space:nowrap;vertical-align:middle;">
                    <span style="font-size:15px;font-weight:700;color:${EM_RED};font-family:${EM_FONT};">${fmtN(c.citations)}</span>
                    <span style="font-size:15px;color:#64748B;font-family:${EM_FONT};">&nbsp;(${ratio}%)</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>`
  }).join('')
}

// ─── 도메인별 Citation (TTL + 국가별 CSS-only 탭) ───────────────────────────
// returns { html, css } — css는 <head>에 삽입
function citationDomainSectionHtml(citationsCnty, meta, lang, citations) {
  if (!citationsCnty || !citationsCnty.length) return { html: '', css: '' }
  const t = T[lang] || T.ko

  const domTopN = meta.citDomainTopN || 10
  const ttlRows = citationsCnty.filter(r => r.cnty === 'TTL').sort((a, b) => a.rank - b.rank).slice(0, domTopN)
  if (!ttlRows.length) return { html: '', css: '' }

  // 이메일은 동적 컨텐츠 불가 → TTL만 표시
  {
    const ttlHtml = citationDomainCntyRowsHtml(ttlRows, domTopN)
    return { css: '', html: `
              <tr>
                <td style="padding-bottom:28px;">
                  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background:#FFFFFF;border-radius:16px;border:2px solid #E8EDF2;">
                    <tr>
                      <td style="padding:22px 16px 18px;background:#FAFBFC;border-bottom:1px solid #F1F5F9;">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                          <tr>
                            <td style="vertical-align:middle;">
                              <table border="0" cellpadding="0" cellspacing="0">
                                <tr>
                                  <td width="3" style="background:${EM_RED};border-radius:2px;">&nbsp;</td>
                                  <td style="padding-left:8px;font-size:19px;font-weight:700;color:#1A1A1A;font-family:${EM_FONT};">${t.citationDomainTitle}</td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    ${insightBlockHtml(meta.citDomainInsight, meta.showCitDomainInsight, meta.citDomainHowToRead, meta.showCitDomainHowToRead, lang)}
                    <tr><td style="padding:20px 16px;"><table border="0" cellpadding="0" cellspacing="0" width="100%">${ttlHtml}</table></td></tr>
                  </table>
                </td>
              </tr>` }
  }
}

// ─── 국가별 Citation 도메인 (세로 막대 차트) ─────────────────────────────────
function citationCntyCountryHtml(cntyCode, rows, lang) {
  const maxScore = Math.max(...rows.map(r => r.citations), 1)
  const BAR_MAX = 44
  const fmtN = n => Number(n).toLocaleString('en-US')
  const colWidth = Math.floor(100 / rows.length)

  const barCols = rows.map(r => {
    const barH = Math.max(Math.round((r.citations / maxScore) * BAR_MAX), 3)
    const spacerH = BAR_MAX - barH
    const domainShort = stripDomain(r.domain)

    return `<td width="${colWidth}%" style="vertical-align:top;text-align:center;padding:0 1px;">
      <table border="0" cellpadding="0" cellspacing="0" align="center" style="margin:0 auto;table-layout:fixed;width:100%;">
        ${spacerH > 0 ? `<tr><td height="${spacerH}" style="font-size:0;line-height:0;">&nbsp;</td></tr>` : ''}
        <tr><td height="${barH}" style="font-size:0;line-height:0;"><table border="0" cellpadding="0" cellspacing="0" align="center"><tr><td width="22" height="${barH}" style="background:${EM_RED};border-radius:3px 3px 0 0;font-size:0;line-height:0;">&nbsp;</td></tr></table></td></tr>
        <tr><td style="font-size:13px;font-weight:800;color:${EM_RED};font-family:${EM_FONT};padding-top:3px;white-space:nowrap;">${fmtN(r.citations)}</td></tr>
        <tr><td style="font-size:13px;color:#1A1A1A;font-family:${EM_FONT};padding-top:2px;word-break:break-all;font-weight:600;">${domainShort}</td></tr>
        <tr><td style="font-size:13px;color:#94A3B8;font-family:${EM_FONT};padding-top:1px;word-break:break-all;">${r.type}</td></tr>
      </table>
    </td>`
  }).join('')

  return `
  <tr>
    <td style="padding:8px 0 4px;">
      <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <tr>
          <td style="background:#F1F5F9;border-radius:7px;padding:7px 12px;">
            <table border="0" cellpadding="0" cellspacing="0" width="100%">
              <tr>
                <td style="font-size:16px;font-weight:700;color:#1A1A1A;font-family:${EM_FONT};">${escapeHtml(cntyCode)}</td>
                <td align="right" style="font-size:13px;color:#94A3B8;font-family:${EM_FONT};">Top ${rows.length}</td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
    <td style="padding:0 4px 12px;">
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout:fixed;">
        <tr>${barCols}</tr>
      </table>
    </td>
  </tr>`
}

function citationCntySectionHtml(citationsCnty, meta, lang) {
  if (!citationsCnty || !citationsCnty.length) return ''
  const t = T[lang] || T.ko

  const cntyMap = new Map()
  citationsCnty.forEach(row => {
    if (row.cnty === 'TTL') return
    if (!cntyMap.has(row.cnty)) cntyMap.set(row.cnty, [])
    cntyMap.get(row.cnty).push(row)
  })

  const countrySections = [...cntyMap.entries()]
    .map(([cnty, rows]) => {
      const top10 = rows.sort((a, b) => a.rank - b.rank).slice(0, 10)
      return citationCntyCountryHtml(cnty, top10, lang)
    })
    .join('')

  return `
              <!-- ══ 국가별 Citation 도메인 ══ -->
              <tr>
                <td style="padding-bottom:28px;">
                  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background:#FFFFFF;border-radius:16px;border:2px solid #E8EDF2;">
                    <tr>
                      <td style="padding:22px 16px 18px;background:#FAFBFC;border-bottom:1px solid #F1F5F9;">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                          <tr>
                            <td style="vertical-align:middle;">
                              <table border="0" cellpadding="0" cellspacing="0">
                                <tr>
                                  <td width="3" style="background:${EM_RED};border-radius:2px;">&nbsp;</td>
                                  <td style="padding-left:8px;font-size:19px;font-weight:700;color:#1A1A1A;font-family:${EM_FONT};">${t.citationCntyTitle}</td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    ${insightBlockHtml(meta.citCntyInsight, meta.showCitCntyInsight, meta.citCntyHowToRead, meta.showCitCntyHowToRead, lang)}
                    <tr>
                      <td style="padding:20px 16px;">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                          ${countrySections}
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>`
}

// ─── Citation 행 ──────────────────────────────────────────────────────────────
const LABEL_WIDTH = 150

function citationRowHtml(c, isLast, maxScore) {
  const rankBg    = c.rank <= 3 ? EM_RED : '#F1F5F9'
  const rankColor = c.rank <= 3 ? '#FFFFFF' : '#94A3B8'
  const barPct    = Math.min(Math.round((c.score / maxScore) * 70), 70)
  const d         = c.delta
  const scoreStr  = fmt(c.score)

  return `
  <tr style="background:#FFFFFF;${isLast ? '' : 'border-bottom:1px solid #F8FAFC;'}">
    <td style="padding:6px 8px 6px 10px;width:${LABEL_WIDTH}px;vertical-align:top;">
      <table border="0" cellpadding="0" cellspacing="0">
        <tr>
          <td width="22" style="vertical-align:top;padding-top:1px;">
            <table border="0" cellpadding="0" cellspacing="0"><tr><td width="22" height="22" style="background:${rankBg};color:${rankColor};border-radius:4px;font-size:13px;font-weight:800;text-align:center;line-height:22px;font-family:${EM_FONT};">${c.rank}</td></tr></table>
          </td>
          <td style="padding-left:5px;vertical-align:top;">
            <table border="0" cellpadding="0" cellspacing="0"><tr><td style="font-size:15px;font-weight:700;color:#1A1A1A;font-family:${EM_FONT};line-height:20px;">${escapeHtml(c.source)}</td></tr></table>
            <table border="0" cellpadding="0" cellspacing="0"><tr><td style="font-size:13px;color:#94A3B8;background:#F8FAFC;border-radius:4px;padding:1px 5px;font-family:${EM_FONT};">${escapeHtml(c.category)}</td></tr></table>
          </td>
        </tr>
      </table>
    </td>
    <td style="padding:6px 16px 6px 0;vertical-align:top;">
      <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <tr>
          <td width="${barPct}%" style="background:${EM_RED};border-radius:6px;height:24px;font-size:0;">&nbsp;</td>
          <td style="height:24px;padding-left:8px;white-space:nowrap;vertical-align:middle;">
            <span style="font-size:15px;font-weight:700;color:${EM_RED};font-family:${EM_FONT};">${scoreStr}</span>
            <span style="font-size:15px;color:#64748B;font-family:${EM_FONT};">&nbsp;(${c.ratio ? c.ratio.toFixed(1) + '%' : ''})</span>
            &nbsp;${d ? deltaHtml(d, 12, false) : ''}
          </td>
        </tr>
      </table>
    </td>
  </tr>`
}

// ─── 닷컴 Citation 비교 차트 ──────────────────────────────────────────────────
const DC_DETAIL_COLS = ['PLP','Microsites','PDP','Newsroom','Support','Buying-guide','Experience']
const DC_SAM_COLS    = ['PLP','Microsites','PDP','Newsroom','Support','Buying-guide']

function dotcomSectionHtml(dotcom, meta, lang = 'ko') {
  if (!dotcom || !dotcom.lg) return ''
  const t = T[lang] || T.ko

  const lg = dotcom.lg, sam = dotcom.samsung || {}

  // TTL 포함 전체 컬럼, maxVal은 TTL 포함 기준
  const allCols = ['TTL', ...DC_DETAIL_COLS]
  const allVals = allCols.map(c => Math.max(lg[c] || 0, sam[c] || 0))
  const maxVal  = Math.max(...allVals, 1)

  // LG 우위 / SS 우위 분류 (공통 비교 컬럼: TTL + DC_SAM_COLS)
  const compareCols = ['TTL', ...DC_SAM_COLS]
  const lgWinCols  = compareCols.filter(c => (lg[c] || 0) > (sam[c] || 0))
  const samWinCols = compareCols.filter(c => (sam[c] || 0) > (lg[c] || 0))
  const tieCols    = compareCols.filter(c => (lg[c] || 0) === (sam[c] || 0))

  // TTL은 항상 맨 위, 이후 LG 우위 → 동률 → SS 우위 → Experience(LG only) 순
  const detailLgWin  = lgWinCols.filter(c => c !== 'TTL')
  const detailSamWin = samWinCols.filter(c => c !== 'TTL')
  const detailTie    = tieCols.filter(c => c !== 'TTL')
  const sortedCols   = ['TTL', ...detailLgWin, ...detailTie, ...detailSamWin, 'Experience']

  const barRows = sortedCols.map((col, idx) => {
    const lgVal  = lg[col] || 0
    const samVal = sam[col] || 0
    const lgPct  = Math.max(Math.round((lgVal / maxVal) * 70), 1)
    const samPct = Math.max(Math.round((samVal / maxVal) * 70), 1)
    const lgWin  = lgVal > samVal
    const samWin = samVal > lgVal
    const isLast = idx === sortedCols.length - 1
    const hasSam = col !== 'Experience'
    const isTTL  = col === 'TTL'

    // 우위 배지
    let badge = ''
    if (lgWin)  badge = `&nbsp;&nbsp;<span style="background:#FFF1F2;color:${EM_RED};font-size:12px;font-weight:800;border-radius:3px;padding:1px 5px;font-family:${EM_FONT};mso-line-height-rule:exactly;line-height:18px;">LG +${fmt(lgVal - samVal)}</span>`
    if (samWin && hasSam) badge = `&nbsp;&nbsp;<span style="background:#EFF6FF;color:#3B82F6;font-size:12px;font-weight:800;border-radius:3px;padding:1px 5px;font-family:${EM_FONT};mso-line-height-rule:exactly;line-height:18px;">SS +${fmt(samVal - lgVal)}</span>`

    // TTL 행: 볼드 + 배경 살짝 + 하단 실선 구분
    const labelStyle = isTTL
      ? `font-size:15px;font-weight:700;color:#1A1A1A;font-family:${EM_FONT};`
      : `font-size:15px;font-weight:700;color:#1A1A1A;font-family:${EM_FONT};`
    const rowBg = isTTL ? 'background:#F8FAFC;' : ''
    const rowBorder = isTTL
      ? 'border-bottom:2px solid #E2E8F0;'
      : (isLast ? '' : 'border-bottom:1px solid #F1F5F9;')
    const barH = isTTL ? 16 : 14
    const numStyle = isTTL ? 'font-size:15px;font-weight:700;' : 'font-size:15px;font-weight:700;'

    return `
    <tr style="${rowBg}${rowBorder}">
      <td style="padding:7px 8px 7px 16px;width:${LABEL_WIDTH}px;vertical-align:middle;">
        <span style="${labelStyle}">${isTTL ? t.dotcomTTL : col}</span>${badge}
      </td>
      <td style="padding:5px 16px 5px 0;vertical-align:middle;">
        <table border="0" cellpadding="0" cellspacing="0" width="100%">
          <tr>
            <td style="padding:2px 0;">
              <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td width="${lgPct}%" style="height:${barH}px;background:${EM_RED};border-radius:3px;font-size:0;">&nbsp;</td>
                  <td style="padding-left:6px;${numStyle}color:${lgWin ? EM_RED : '#94A3B8'};font-family:${EM_FONT};white-space:nowrap;">${fmt(lgVal)}</td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:2px 0;">
              <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  ${hasSam
                    ? `<td width="${samPct}%" style="height:${barH}px;background:#3B82F6;border-radius:3px;font-size:0;">&nbsp;</td>
                       <td style="padding-left:6px;${numStyle}color:${samWin ? '#3B82F6' : '#94A3B8'};font-family:${EM_FONT};white-space:nowrap;">${fmt(samVal)}</td>`
                    : `<td style="padding-left:0;font-size:15px;color:#CBD5E1;font-family:${EM_FONT};">${t.dotcomLgOnly}</td>`
                  }
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>`
  }).join('')

  // 요약 행
  const summaryRow = `
    <tr>
      <td colspan="2" style="padding:12px 16px 4px;border-top:1px solid #E8EDF2;">
        <table border="0" cellpadding="0" cellspacing="0" width="100%">
          <tr>
            <td style="padding:4px 0;vertical-align:top;">
              <table border="0" cellpadding="0" cellspacing="0"><tr>
                <td style="background:${EM_RED};color:#FFFFFF;font-size:15px;font-weight:700;border-radius:4px;padding:2px 8px;font-family:${EM_FONT};">${t.dotcomLgWin} (${lgWinCols.length})</td>
                <td style="padding-left:6px;font-size:15px;color:#64748B;font-family:${EM_FONT};">${lgWinCols.length ? lgWinCols.join(', ') : t.dotcomNone}</td>
              </tr></table>
            </td>
          </tr>
          <tr>
            <td style="padding:4px 0;vertical-align:top;">
              <table border="0" cellpadding="0" cellspacing="0"><tr>
                <td style="background:#3B82F6;color:#FFFFFF;font-size:15px;font-weight:700;border-radius:4px;padding:2px 8px;font-family:${EM_FONT};">${t.dotcomSsWin} (${samWinCols.length})</td>
                <td style="padding-left:6px;font-size:15px;color:#64748B;font-family:${EM_FONT};">${samWinCols.length ? samWinCols.join(', ') : t.dotcomNone}</td>
              </tr></table>
            </td>
          </tr>
        </table>
      </td>
    </tr>`

  return `
              <!-- ══ 닷컴 Citation (경쟁사대비) ══ -->
              <tr>
                <td style="padding-bottom:28px;">
                  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background:#FFFFFF;border-radius:16px;border:2px solid #E8EDF2;">
                    <tr>
                      <td style="padding:22px 16px 18px;background:#FAFBFC;border-bottom:1px solid #F1F5F9;">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                          <tr>
                            <td style="vertical-align:middle;">
                              <table border="0" cellpadding="0" cellspacing="0">
                                <tr>
                                  <td width="3" style="background:${EM_RED};border-radius:2px;">&nbsp;</td>
                                  <td style="padding-left:8px;font-size:19px;font-weight:700;color:#1A1A1A;font-family:${EM_FONT};">${t.dotcomTitle}</td>
                                </tr>
                              </table>
                            </td>
                            <td align="right" style="vertical-align:middle;">
                              <table border="0" cellpadding="0" cellspacing="0" align="right"><tr>
                                <td width="10" height="10" style="background:${EM_RED};border-radius:2px;font-size:0;">&nbsp;</td>
                                <td style="padding:0 8px 0 3px;font-size:13px;color:#94A3B8;font-family:${EM_FONT};">LG</td>
                                <td width="10" height="10" style="background:#3B82F6;border-radius:2px;font-size:0;">&nbsp;</td>
                                <td style="padding-left:3px;font-size:13px;color:#94A3B8;font-family:${EM_FONT};">SS</td>
                              </tr></table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    ${insightBlockHtml(meta.dotcomInsight, meta.showDotcomInsight, meta.dotcomHowToRead, meta.showDotcomHowToRead, lang)}
                    <tr>
                      <td style="padding:12px 16px 20px;">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                          ${barRows}
                          ${summaryRow}
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>`
}

// ─── Category Cards (Progress Tracker 진척율) ──────────────────────────────
function categoryCardsHtml(categoryStats, lang) {
  if (!categoryStats || !categoryStats.length) {
    return `<div style="margin-bottom:14px;padding:14px 16px;background:#FEF3C7;border:1px solid #FCD34D;border-radius:8px;font-size:12px;color:#92400E;font-family:${EM_FONT};">${lang === 'en' ? 'Progress Tracker data not available.' : 'Progress Tracker 데이터가 없습니다.'}</div>`
  }
  const t = lang === 'en'
    ? { title: 'Category Progress', monthly: 'This Month', prev: 'Last Month', progress: 'YTD Progress' }
    : { title: '카테고리별 진척 현황', monthly: '이번 월', prev: '전월', progress: '연간 진척율' }
  function statusColor(rate) {
    if (rate >= 80) return { bg: '#F0FDF4', border: '#BBF7D0', bar: '#16A34A', text: '#15803D' }
    if (rate >= 50) return { bg: '#FFFBEB', border: '#FDE68A', bar: '#D97706', text: '#B45309' }
    return { bg: '#FEF2F2', border: '#FECACA', bar: '#DC2626', text: '#BE123C' }
  }
  const cards = categoryStats.map(c => {
    const ms = statusColor(c.monthRate || 0)
    const ps = statusColor(c.progressRate || 0)
    const prevMonthRate = c.prevMonthRate
    const hasPrev = prevMonthRate != null && prevMonthRate > 0
    const delta = hasPrev ? +((c.monthRate || 0) - prevMonthRate).toFixed(1) : null
    const deltaColor = delta == null ? '#94A3B8' : delta > 0 ? '#16A34A' : delta < 0 ? '#DC2626' : '#94A3B8'
    const deltaArrow = delta == null ? '' : delta > 0 ? '▲' : delta < 0 ? '▼' : '─'
    return `<td width="50%" valign="top" style="padding:6px;">
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background:#FFFFFF;border:1.5px solid #E8EDF2;border-radius:10px;">
        <tr><td style="padding:12px 14px;">
          <p style="margin:0 0 10px;font-size:14px;font-weight:800;color:#1A1A1A;font-family:${EM_FONT};">${escapeHtml(c.category)}</p>
          <!-- 이번 월 -->
          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom:4px;">
            <tr>
              <td style="font-size:11px;color:#64748B;font-family:${EM_FONT};">${t.monthly}</td>
              <td align="right" style="font-size:13px;font-weight:700;color:${ms.text};font-family:${EM_FONT};">${(c.monthRate || 0).toFixed(0)}%${hasPrev ? ` <span style="font-size:10px;font-weight:700;color:${deltaColor};">${deltaArrow}${Math.abs(delta).toFixed(0)}%p</span>` : ''}</td>
            </tr>
          </table>
          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background:#F1F5F9;border-radius:3px;margin-bottom:6px;">
            <tr><td height="6" style="font-size:0;line-height:0;">
              <table border="0" cellpadding="0" cellspacing="0" width="${Math.min(Math.round(c.monthRate || 0), 100)}%" style="background:${ms.bar};border-radius:3px;">
                <tr><td height="6" style="font-size:0;line-height:0;">&nbsp;</td></tr>
              </table>
            </td></tr>
          </table>
          ${hasPrev ? `
          <!-- 전월 -->
          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom:8px;">
            <tr>
              <td style="font-size:10px;color:#94A3B8;font-family:${EM_FONT};">${t.prev}</td>
              <td align="right" style="font-size:11px;font-weight:600;color:#64748B;font-family:${EM_FONT};">${prevMonthRate.toFixed(0)}%</td>
            </tr>
          </table>` : '<div style="height:8px"></div>'}
          <!-- 진척율 -->
          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom:4px;">
            <tr>
              <td style="font-size:11px;color:#64748B;font-family:${EM_FONT};">${t.progress}</td>
              <td align="right" style="font-size:13px;font-weight:700;color:${ps.text};font-family:${EM_FONT};">${(c.progressRate || 0).toFixed(0)}%</td>
            </tr>
          </table>
          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background:#F1F5F9;border-radius:3px;">
            <tr><td height="6" style="font-size:0;line-height:0;">
              <table border="0" cellpadding="0" cellspacing="0" width="${Math.min(Math.round(c.progressRate || 0), 100)}%" style="background:${ps.bar};border-radius:3px;">
                <tr><td height="6" style="font-size:0;line-height:0;">&nbsp;</td></tr>
              </table>
            </td></tr>
          </table>
        </td></tr>
      </table>
    </td>`
  })
  // 2열 그리드
  const rows = []
  for (let i = 0; i < cards.length; i += 2) {
    const pair = cards.slice(i, i + 2)
    while (pair.length < 2) pair.push('<td width="50%" style="padding:6px;"></td>')
    rows.push(`<tr>${pair.join('')}</tr>`)
  }
  return `
  <div style="margin-bottom:18px;">
    <p style="margin:0 0 10px;font-size:13px;font-weight:700;color:#475569;text-transform:uppercase;letter-spacing:0.5px;font-family:${EM_FONT};">${t.title}</p>
    <table border="0" cellpadding="0" cellspacing="0" width="100%">${rows.join('')}</table>
  </div>`
}

function dashboardLinkButtonHtml(lang) {
  const base = 'https://my-geo-newsletter.onrender.com'
  const langSuffix = lang === 'en' ? '-EN' : '-KO'
  const url = `${base}/p/GEO-KPI-Dashboard${langSuffix}`
  const label = lang === 'en' ? 'Open Integrated Dashboard' : '통합 대시보드 바로가기'
  return `
  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-top:16px;">
    <tr><td align="center">
      <!--[if mso]>
      <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${url}" style="height:48px;v-text-anchor:middle;width:100%;" arcsize="18%" strokecolor="${EM_RED}" fillcolor="${EM_RED}">
        <w:anchorlock/>
        <center style="color:#FFFFFF;font-family:'LG Smart',Arial,sans-serif;font-size:15px;font-weight:700;">${label}</center>
      </v:roundrect>
      <![endif]-->
      <!--[if !mso]><!-- -->
      <a href="${url}" target="_blank" rel="noopener" style="display:block;background:${EM_RED};border:1px solid ${EM_RED};border-radius:8px;color:#FFFFFF;font-family:${EM_FONT};font-size:15px;font-weight:700;line-height:48px;text-align:center;text-decoration:none;width:100%;">${label}</a>
      <!--<![endif]-->
    </td></tr>
  </table>`
}

// ─── 메인 생성 함수 ───────────────────────────────────────────────────────────
export { escapeHtml }

export function generateEmailHTML(meta, total, products, citations, dotcom = {}, lang = 'ko', productsCnty = [], citationsCnty = [], options = {}) {
  const { containerWidth = 920, showTrendTabs = false, weeklyLabels, categoryStats = null } = options
  const t = T[lang] || T.ko
  total = total || { score: 0, prev: 0, vsComp: 0, rank: 1, totalBrands: 12 }
  products = products || []
  citations = citations || []
  const totalDelta = delta(total.score, total.prev)
  const scoreBarW  = Math.round(total.score || 0)

  // 삼성전자 전체 GEO 점수 (total 시트의 vsComp)
  const compAvg = total.vsComp || 0
  const lgVsComp = +(total.score - compAvg).toFixed(1)
  // 전체 신호등: LG/경쟁사 비율 기준
  const totalRatio = compAvg > 0 ? Math.round((total.score / compAvg) * 100) : 100
  const totalSignal = totalRatio >= 100 ? '#22C55E' : totalRatio >= 80 ? '#F59E0B' : '#EF4444'

  // 주간 트렌드 전역 min/max 계산 (모든 제품 동일 스케일)
  const allWeekly = products.flatMap(p => p.weekly || [])
  const globalMax = allWeekly.length ? Math.max(...allWeekly) : 100
  const globalMin = allWeekly.length ? Math.min(...allWeekly) : 0

  // 월별 트렌드 전역 min/max 계산
  const allMonthly = products.flatMap(p => p.monthly || (p.prev ? [p.prev, p.score] : []))
  const monthlyGlobalMax = allMonthly.length ? Math.max(...allMonthly) : 100
  const monthlyGlobalMin = allMonthly.length ? Math.min(...allMonthly) : 0

  const buTotals = total.buTotals || {}
  const trendOpts = { showTrendTabs, monthlyGlobalMax, monthlyGlobalMin, weeklyLabels, buTotals }

  const BU_ORDER = ['MS', 'HS', 'ES']
  const buSections = BU_ORDER.map(buKey => {
    const buProducts = products.filter(p => p.bu === buKey)
    return buProducts.length ? buSectionHtml(buKey, buProducts, globalMax, globalMin, lang, trendOpts) : ''
  }).join('')

  const citTopN = meta.citationTopN || 10
  const citationList = (citations || []).slice(0, citTopN)
  const citMaxScore = citationList.length ? Math.max(...citationList.map(c => c.score)) : 100
  const citationRows = citationList.map((c, i) => citationRowHtml(c, i === citationList.length - 1, citMaxScore)).join('')

  // 도메인별 Citation 섹션 (CSS는 <head>에 삽입)
  const citDomainResult = meta.showCitDomain !== false
    ? citationDomainSectionHtml(citationsCnty, meta, lang, citations)
    : { html: '', css: '' }

  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>LG GEO Newsletter ${escapeHtml(meta.period)}</title>
  <link href="https://fonts.cdnfonts.com/css/lg-smart" rel="stylesheet" />
  <!--[if mso]>
  <style type="text/css">
    table { border-collapse: collapse; }
    td { font-family: 'LG Smart', Arial, sans-serif; }
  </style>
  <![endif]-->
  ${citDomainResult.css ? `<style type="text/css">${citDomainResult.css}</style>` : ''}
  <style type="text/css">
    html, body { overflow-x: hidden !important; max-width: 100vw; }
    body * { max-width: 100%; }
    table { table-layout: auto; }
    td, th { word-wrap: break-word; overflow-wrap: break-word; }
  </style>
</head>
<body style="margin:0;padding:0;background-color:#F1F5F9;overflow-x:hidden;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;">

<table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color:#F1F5F9;">
  <tr>
    <td align="center" style="padding:24px 12px;">

      <!-- 메인 컨테이너 -->
      <table border="0" cellpadding="0" cellspacing="0" width="${containerWidth}" style="width:${containerWidth}px;max-width:${containerWidth}px;table-layout:fixed;background:#FFFFFF;border-radius:16px;font-family:${EM_FONT};">

        <!-- ══ 헤더 상단 레드 바 ══ -->
        <tr>
          <td style="background:${EM_RED};padding:10px 16px;">
            <table border="0" cellpadding="0" cellspacing="0" width="100%">
              <tr>
                <td style="font-size:15px;font-weight:700;color:#FFCCD8;font-family:${EM_FONT};">LG ELECTRONICS</td>
                <td align="right" style="font-size:14px;color:#FFB0C0;font-family:${EM_FONT};">${escapeHtml(meta.reportNo)} · ${escapeHtml(meta.period)}</td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- ══ 헤더 타이틀 ══ -->
        <tr>
          <td style="background:#FFFFFF;padding:26px 28px 16px;">
            <table border="0" cellpadding="0" cellspacing="0" width="100%">
              <tr>
                <td style="font-size:14px;color:#94A3B8;font-family:${EM_FONT};font-weight:400;">${escapeHtml(meta.reportType || (lang === 'en' ? 'GEO Monthly Performance Report' : 'GEO 월간 성과 분석 리포트'))}</td>
                <td align="right" style="font-size:14px;color:#94A3B8;font-family:${EM_FONT};font-weight:400;">${escapeHtml(meta.team)}</td>
              </tr>
            </table>
            <p style="margin:16px 0 10px;text-align:center;line-height:1.2;">
              <span style="font-size:${meta.titleFontSize || 24}px;font-weight:700;color:${meta.titleColor || '#1A1A1A'};font-family:${EM_FONT};">${escapeHtml(meta.title || (lang === 'en' ? 'Generative AI Engine Visibility Performance Analysis' : '생성형 AI 엔진 가시성(Visibility) 성과 분석'))}</span>
            </p>
            <p style="margin:0;text-align:center;">
              <span style="font-size:18px;color:#475569;font-family:${EM_FONT};font-weight:400;">${escapeHtml(meta.dateLine || (lang === 'en' ? 'As of ' + meta.period : meta.period + ' 기준'))}</span>
            </p>
            ${meta.showNotice && meta.noticeText ? `
            <table border="0" cellpadding="0" cellspacing="0" width="100%">
              <tr><td height="14" style="font-size:0;line-height:0;">&nbsp;</td></tr>
              <tr>
                <td style="background:#FEF2F2;border:1px solid #FECACA;border-radius:8px;padding:14px 20px;">
                  <p style="margin:0 0 4px;font-size:15px;font-weight:700;color:${EM_RED};font-family:${EM_FONT};">${t.notice}</p>
                  <p style="margin:0;font-size:14px;color:#1A1A1A;font-family:${EM_FONT};line-height:21px;">${mdBold(meta.noticeText)}</p>
                </td>
              </tr>
            </table>` : ''}
            ${meta.showKpiLogic && meta.kpiLogicText ? `
            <table border="0" cellpadding="0" cellspacing="0" width="100%">
              <tr><td height="14" style="font-size:0;line-height:0;">&nbsp;</td></tr>
              <tr>
                <td style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:8px;padding:14px 20px;">
                  <p style="margin:0 0 4px;font-size:13px;font-weight:700;color:#64748B;font-family:${EM_FONT};">${t.kpiLogic}</p>
                  <p style="margin:0;font-size:14px;color:#475569;font-family:${EM_FONT};line-height:22px;">${mdBold(meta.kpiLogicText)}</p>
                </td>
              </tr>
            </table>` : ''}
          </td>
        </tr>
        <!-- 구분선 (직선) -->
        <tr>
          <td style="background:#FFFFFF;padding:24px 28px 0;">
            <table border="0" cellpadding="0" cellspacing="0" width="100%">
              <tr>
                <td height="2" style="background:${EM_RED};font-size:0;line-height:0;">&nbsp;</td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- ══ 본문 ══ -->
        <tr>
          <td style="background:#F8FAFC;padding:28px 28px;">
            <table border="0" cellpadding="0" cellspacing="0" width="100%">

              ${meta.showTotal !== false ? `<!-- ── 전체 GEO 가시성 지수 ── -->
              <tr>
                <td style="padding-bottom:28px;">
                  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background:#0F172A;border-radius:14px;">
                    <tr>
                      <td style="padding:24px 24px 22px;border-top:4px solid ${totalSignal};border-radius:14px;">
                        <!-- Executive Summary 제목 -->
                        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom:16px;">
                          <tr>
                            <td style="padding:10px 16px;background:linear-gradient(135deg,${EM_RED},#A0003E);border-radius:8px;">
                              <span style="font-size:20px;font-weight:900;color:#FFFFFF;text-transform:uppercase;letter-spacing:2px;font-family:${EM_FONT};">${t.geoInsight}</span>
                            </td>
                          </tr>
                        </table>
                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                          <tr>
                            <td style="font-size:24px;font-weight:700;color:#FFFFFF;text-transform:uppercase;font-family:${EM_FONT};">LG GEO Visibility %</td>
                            <td align="right" style="font-size:14px;color:#94A3B8;font-family:${EM_FONT};">Model : ChatGPT, ChatGPT Search, Gemini, Perplexity<br/>Subsidiary : US, CA, UK, DE, ES, BR, MX, IN, AU, VN</td>
                          </tr>
                        </table>
                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                          <tr>
                            <td style="vertical-align:bottom;">
                              <span style="font-size:52px;font-weight:900;color:#FFFFFF;font-family:${EM_FONT};">${total.score}</span>
                              <span style="font-size:22px;color:#94A3B8;font-family:${EM_FONT};"> %</span>
                              &nbsp;&nbsp;${total.prev ? deltaHtml(totalDelta, 16) : `<span style="color:#94A3B8;font-size:18px;">—</span>`}
                              <span style="font-size:15px;color:#64748B;font-family:${EM_FONT};"> MoM</span>
                            </td>
                            <td align="right" style="vertical-align:bottom;padding-bottom:8px;">
                              ${compAvg > 0 ? `<span style="font-size:16px;color:#3B82F6;font-weight:800;font-family:${EM_FONT};">SAMSUNG</span>
                              <span style="font-size:16px;color:#94A3B8;font-weight:500;font-family:${EM_FONT};">&nbsp;${compAvg}%</span>
                              <span style="font-size:14px;color:#64748B;font-family:${EM_FONT};">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                              <span style="font-size:16px;font-weight:800;color:${lgVsComp >= 0 ? '#16A34A' : '#DC2626'};font-family:${EM_FONT};">Gap ${lgVsComp >= 0 ? '+' : ''}${lgVsComp}%p</span>` : ''}
                            </td>
                          </tr>
                        </table>
                        <!-- 게이지 바 -->
                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                          <tr><td height="14" colspan="2" style="font-size:0;line-height:0;">&nbsp;</td></tr>
                          <tr>
                            <td style="font-size:13px;color:#64748B;font-family:${EM_FONT};">0%</td>
                            <td align="right" style="font-size:13px;color:#64748B;font-family:${EM_FONT};">100%</td>
                          </tr>
                          <!-- LG 바 -->
                          <tr>
                            <td colspan="2" style="padding-top:4px;">
                              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background:#1E2433;border-radius:8px;">
                                <tr>
                                  <td style="padding:0;">
                                    <table border="0" cellpadding="0" cellspacing="0" width="${scoreBarW}%" style="width:${scoreBarW}%;max-width:${scoreBarW}%;">
                                      <tr>
                                        <td height="10" style="background:${EM_RED};border-radius:8px;height:10px;font-size:0;line-height:0;">&nbsp;</td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                          ${compAvg > 0 ? `<!-- Samsung 바 -->
                          <tr>
                            <td colspan="2" style="padding-top:5px;">
                              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background:#1E2433;border-radius:8px;">
                                <tr>
                                  <td style="padding:0;">
                                    <table border="0" cellpadding="0" cellspacing="0" width="${Math.round(compAvg)}%" style="width:${Math.round(compAvg)}%;max-width:${Math.round(compAvg)}%;">
                                      <tr>
                                        <td height="10" style="background:#3B82F6;border-radius:8px;height:10px;font-size:0;line-height:0;">&nbsp;</td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>` : ''}
                          <!-- 범례 -->
                          <tr>
                            <td colspan="2" style="padding-top:8px;">
                              <table border="0" cellpadding="0" cellspacing="0"><tr>
                                <td width="10" height="10" style="background:${EM_RED};border-radius:5px;font-size:0;">&nbsp;</td>
                                <td style="padding-left:5px;font-size:13px;color:#94A3B8;font-family:${EM_FONT};">LG ${total.score}%</td>
                                ${compAvg > 0 ? `<td style="padding-left:14px;" width="10" height="10"><table border="0" cellpadding="0" cellspacing="0"><tr><td width="10" height="10" style="background:#3B82F6;border-radius:5px;font-size:0;">&nbsp;</td></tr></table></td>
                                <td style="padding-left:5px;font-size:13px;color:#94A3B8;font-family:${EM_FONT};">SS ${compAvg}%</td>` : ''}
                                <td style="padding-left:14px;" width="2" height="10"><table border="0" cellpadding="0" cellspacing="0"><tr><td width="2" height="10" style="background:#475569;border-radius:2px;font-size:0;">&nbsp;</td></tr></table></td>
                                <td style="padding-left:5px;font-size:13px;color:#94A3B8;font-family:${EM_FONT};">prev ${total.prev}%</td>
                              </tr></table>
                            </td>
                          </tr>
                        </table>
                        ${(() => {
                          // ── 본부별 미니 카드 (3열) ──
                          const buKeys = ['MS', 'HS', 'ES']
                          const buCards = buKeys.map(bu => {
                            const bt = buTotals[bu]
                            if (!bt) return `<td width="33%" style="padding:3px;"></td>`
                            const ratio = bt.comp > 0 ? Math.round((bt.lg / bt.comp) * 100) : 100
                            const sc = ratio >= 100 ? '#22C55E' : ratio >= 80 ? '#F59E0B' : '#EF4444'
                            const prevBt = (total.buPrev || {})[bu]
                            const mom = prevBt ? +(bt.lg - prevBt.lg).toFixed(1) : null
                            const momStr = mom != null ? (mom > 0 ? `▲${mom}` : mom < 0 ? `▼${Math.abs(mom)}` : '─') : '—'
                            const momColor = mom > 0 ? '#22C55E' : mom < 0 ? '#EF4444' : '#94A3B8'
                            const gap = +(bt.lg - bt.comp).toFixed(1)
                            return `<td width="33%" style="padding:2px 3px;">
                              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background:#1E293B;border-radius:6px;border-left:3px solid ${sc};table-layout:fixed;">
                                <tr><td style="padding:6px 8px;overflow:hidden;">
                                  <span style="font-size:13px;font-weight:700;color:#FFFFFF;font-family:${EM_FONT};">${bu}</span>
                                  <span style="font-size:16px;font-weight:900;color:#FFFFFF;font-family:${EM_FONT};margin-left:4px;">${bt.lg.toFixed(1)}%</span>
                                  <span style="font-size:10px;color:${momColor};font-family:${EM_FONT};margin-left:3px;">${momStr}</span>
                                  <span style="font-size:10px;color:#64748B;font-family:${EM_FONT};margin-left:4px;">SS ${bt.comp.toFixed(1)}%</span>
                                  <span style="font-size:10px;color:${gap >= 0 ? '#22C55E' : '#EF4444'};font-family:${EM_FONT};margin-left:2px;">${gap >= 0 ? '+' : ''}${gap}</span>
                                </td></tr>
                              </table>
                            </td>`
                          }).join('')
                          const hasBu = buKeys.some(bu => buTotals[bu])
                          return hasBu ? `
                          <table border="0" cellpadding="0" cellspacing="0" width="100%">
                            <tr><td height="12" style="font-size:0;line-height:0;">&nbsp;</td></tr>
                            <tr>${buCards}</tr>
                          </table>` : ''
                        })()}
                        ${meta.totalInsight ? `
                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                        <tr><td height="16" style="font-size:0;line-height:0;">&nbsp;</td></tr>
                          <tr>
                            <td style="padding:14px 16px;background:#1E0F18;border:1px solid #3D1528;border-radius:10px;">
                              <p style="margin:0 0 6px;font-size:14px;font-weight:700;color:${EM_RED};text-transform:uppercase;font-family:${EM_FONT};">INSIGHT</p>
                              <p style="margin:0;font-size:15px;color:#FFFFFF;line-height:24px;font-family:${EM_FONT};">${mdBold(meta.totalInsight)}</p>
                            </td>
                          </tr>
                        </table>` : ''}
                        <!-- 대시보드 바로가기 버튼은 Action Plan 섹션 아래로 이동됨 -->
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>` : ''}

              ${meta.showProducts !== false ? `<!-- ══ 제품별 현황 (통합 카드) ══ -->
              <tr>
                <td style="padding-bottom:28px;">
                  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background:#FFFFFF;border-radius:16px;border:2px solid #E8EDF2;">
                    <tr>
                      <td style="padding:22px 16px 18px;background:#FAFBFC;border-bottom:1px solid #F1F5F9;">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                          <tr>
                            <td style="vertical-align:middle;">
                              <table border="0" cellpadding="0" cellspacing="0">
                                <tr>
                                  <td width="3" style="background:${EM_RED};border-radius:2px;">&nbsp;</td>
                                  <td style="padding-left:8px;font-size:19px;font-weight:700;color:#1A1A1A;font-family:${EM_FONT};">${t.productTitle}</td>
                                </tr>
                              </table>
                            </td>
                            <td align="right" style="vertical-align:middle;font-size:13px;color:#94A3B8;font-family:${EM_FONT};">
                              ${t.lgBasis} &nbsp;
                              <span style="color:#15803D;">●</span> ${t.legendLead} &nbsp;
                              <span style="color:#E8910C;">●</span> ${t.legendBehind} &nbsp;
                              <span style="color:#BE123C;">●</span> ${t.legendCritical}
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    ${insightBlockHtml(meta.productInsight, meta.showProductInsight, meta.productHowToRead, meta.showProductHowToRead, lang)}
                    ${showTrendTabs ? `<tr>
                      <td style="padding:12px 28px 0;">
                        <div class="trend-tab-bar" style="display:inline-flex;gap:0;background:#F1F5F9;border-radius:8px;padding:3px;">
                          <button class="trend-tab-btn active" onclick="switchTrendMode('weekly')" style="padding:5px 16px;border-radius:6px;border:none;font-size:14px;font-weight:700;font-family:${EM_FONT};cursor:pointer;background:${EM_RED};color:#FFFFFF;transition:all .15s;">${t.weeklyTab}</button>
                          <button class="trend-tab-btn" onclick="switchTrendMode('monthly')" style="padding:5px 16px;border-radius:6px;border:none;font-size:14px;font-weight:700;font-family:${EM_FONT};cursor:pointer;background:transparent;color:#64748B;transition:all .15s;">${t.monthlyTab}</button>
                        </div>
                      </td>
                    </tr>` : ''}
                    <tr>
                      <td style="padding:20px 16px;">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                          ${buSections}
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>` : ''}

              ${meta.showCnty !== false ? countryVisibilitySectionHtml(productsCnty, meta, lang) : ''}

              ${meta.showCitations !== false ? `<!-- ══ 도메인별 Citation 현황 (통합 카드) ══ -->
              <tr>
                <td style="padding-bottom:28px;">
                  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background:#FFFFFF;border-radius:16px;border:2px solid #E8EDF2;">
                    <tr>
                      <td style="padding:22px 16px 18px;background:#FAFBFC;border-bottom:1px solid #F1F5F9;">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                          <tr>
                            <td style="vertical-align:middle;">
                              <table border="0" cellpadding="0" cellspacing="0">
                                <tr>
                                  <td width="3" style="background:${EM_RED};border-radius:2px;">&nbsp;</td>
                                  <td style="padding-left:8px;font-size:19px;font-weight:700;color:#1A1A1A;font-family:${EM_FONT};">${t.citationTitle}</td>
                                </tr>
                              </table>
                            </td>
                            <td align="right" style="vertical-align:middle;">
                              <table border="0" cellpadding="0" cellspacing="0" align="right"><tr>
                                <td width="14" height="5" style="background:${EM_RED};border-radius:3px;font-size:0;">&nbsp;</td>
                                <td style="padding-left:4px;font-size:13px;color:#94A3B8;font-family:${EM_FONT};">${t.citationLegend}</td>
                              </tr></table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    ${insightBlockHtml(meta.citationInsight, meta.showCitationInsight, meta.citationHowToRead, meta.showCitationHowToRead, lang)}
                    <tr>
                      <td style="padding:20px 16px;">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                          ${citationRows}
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>` : ''}

              ${citDomainResult.html}

              ${meta.showCitCnty !== false ? citationCntySectionHtml(citationsCnty, meta, lang) : ''}

              ${meta.showDotcom !== false ? dotcomSectionHtml(dotcom, meta, lang) : ''}

              ${meta.showTodo && meta.todoText ? `
              <!-- ══ To-do List + 카테고리 카드 + 대시보드 바로가기 ══ -->
              <tr>
                <td style="padding-bottom:28px;">
                  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background:#FFFFFF;border-radius:16px;border:2px solid #E8EDF2;">
                    <tr>
                      <td style="padding:22px 16px 18px;background:#FAFBFC;border-bottom:1px solid #F1F5F9;">
                        <table border="0" cellpadding="0" cellspacing="0">
                          <tr>
                            <td width="3" style="background:${EM_RED};border-radius:2px;">&nbsp;</td>
                            <td style="padding-left:8px;font-size:19px;font-weight:700;color:#1A1A1A;font-family:${EM_FONT};">${t.todoTitle}</td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:20px 16px;">
                        ${categoryCardsHtml(categoryStats, lang)}
                        <p style="margin:0;font-size:14px;color:#1A1A1A;line-height:22px;font-family:${EM_FONT};">${mdBold(meta.todoText)}</p>
                        ${dashboardLinkButtonHtml(lang)}
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>` : ''}

            </table>
          </td>
        </tr>

        <!-- ══ 푸터 ══ -->
        <tr>
          <td style="background:#1A1A1A;padding:16px 28px;">
            <table border="0" cellpadding="0" cellspacing="0" width="100%">
              <tr>
                <td>
                  <p style="margin:0;font-size:13px;font-weight:700;color:#FFFFFF;font-family:${EM_FONT};">LG Electronics &nbsp;<span style="font-weight:400;color:#94A3B8;">${t.footer}</span></p>
                </td>
                <td align="right">
                  <p style="margin:0;font-size:11px;color:#FFFFFF;font-family:${EM_FONT};">© 2026 LG Electronics Inc. All Rights Reserved.</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>

      </table>

    </td>
  </tr>
</table>

</body>
</html>`
}
