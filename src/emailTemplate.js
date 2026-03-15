// ─── 이메일 호환 HTML 생성기 ─────────────────────────────────────────────────
// 규칙: table 기반 레이아웃, 인라인 스타일, 외부 폰트 없음, flex/grid 없음

const EM_RED  = '#CF0652'
const EM_DARK = '#A0003E'
const EM_FONT = "'LG Smart', 'Arial Narrow', Arial, sans-serif"

// ─── 다국어 번역 ─────────────────────────────────────────────────────────────
const T = {
  ko: {
    lead: '선도', behind: '추격', critical: '취약', normal: '보통',
    weekTrend: '4주 트렌드',
    vsComp: '대비',
    categories: '개 카테고리',
    productTitle: '제품별 GEO Visibility 현황',
    legendLead: '선도 ≥100%', legendBehind: '추격 ≥80%', legendCritical: '취약 <80%',
    lgBasis: 'LG/1위 기준',
    citationTitle: '도메인 카테고리별 Citation 현황',
    citationLegend: 'Citation Score (MoM 증감)',
    dotcomTitle: '닷컴 Citation (경쟁사대비)',
    dotcomTTL: 'TTL (전체)',
    dotcomLgOnly: '— (LG only)',
    dotcomLgWin: 'LG 우위',
    dotcomSsWin: 'SS 우위',
    dotcomNone: '없음',
    insight: 'INSIGHT',
    howToRead: 'HOW TO READ',
    notice: 'Notice',
    geoInsight: 'Executive Summary',
    todoTitle: 'Action Plan',
    footer: '해외영업본부 D2C해외영업그룹 D2C마케팅담당 D2C디지털마케팅팀',
  },
  en: {
    lead: 'Lead', behind: 'Behind', critical: 'Critical', normal: 'Normal',
    weekTrend: '4-Week Trend',
    vsComp: 'vs',
    categories: ' Categories',
    productTitle: 'GEO Visibility by Product',
    legendLead: 'Lead ≥100%', legendBehind: 'Behind ≥80%', legendCritical: 'Critical <80%',
    lgBasis: 'LG/Top 1 Basis',
    citationTitle: 'Citation by Domain Category',
    citationLegend: 'Citation Score (MoM Change)',
    dotcomTitle: 'Dotcom Citation (vs Competitor)',
    dotcomTTL: 'TTL (Total)',
    dotcomLgOnly: '— (LG only)',
    dotcomLgWin: 'LG Leads',
    dotcomSsWin: 'SS Leads',
    dotcomNone: 'None',
    insight: 'INSIGHT',
    howToRead: 'HOW TO READ',
    notice: 'Notice',
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
  return (text || '')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\r\n/g, '<br>')
    .replace(/\n/g, '<br>')
}

function delta(score, prev) { return +(score - prev).toFixed(1) }

function deltaHtml(d, size = 15, mom = false) {
  if (d === 0) return `<span style="color:#94A3B8;font-size:${size}px;">─</span>`
  const arrow = d > 0 ? '▲' : '▼'
  const color = d > 0 ? '#16A34A' : '#DC2626'
  const prefix = mom ? 'MoM ' : ''
  return `<span style="color:${color};font-size:${size}px;font-weight:700;">${prefix}${arrow} ${Math.abs(d).toFixed(1)}%p</span>`
}

// ─── 4주 트렌드 바 차트 (이메일 호환, 균일 최대 높이) ────────────────────────
function weeklyTrendHtml(weekly, color, globalMax, globalMin) {
  if (!weekly || weekly.length === 0) return ''
  const range = globalMax - globalMin || 1
  const MAX_H = 24
  const labels = ['W1', 'W2', 'W3', 'W4']

  const bars = weekly.map((v, i) => {
    const h = Math.round(((v - globalMin) / range) * MAX_H) + 4
    const spacer = MAX_H - h
    return `<td style="vertical-align:bottom;text-align:center;padding:0 1px;">
      <table border="0" cellpadding="0" cellspacing="0" align="center" style="margin:0 auto;">
        ${spacer > 0 ? `<tr><td height="${spacer}" style="font-size:0;line-height:0;">&nbsp;</td></tr>` : ''}
        <tr><td width="10" height="${h}" style="background:${color};font-size:0;line-height:0;">&nbsp;</td></tr>
        <tr><td style="font-size:9px;color:#94A3B8;font-family:${EM_FONT};padding-top:2px;">${labels[i] || ''}</td></tr>
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
function productCardHtml(p, globalMax, globalMin, lang = 'ko') {
  const t   = T[lang] || T.ko
  const st  = statusInfo(p.status, lang)
  const d   = delta(p.score, p.prev)
  const trendArr = p.weekly || []
  const sparkColor = p.status === 'critical' ? '#BE123C' : p.status === 'behind' ? '#E8910C' : '#15803D'

  return `
  <td width="33%" style="padding:5px;vertical-align:top;height:180px;">
    <table border="0" cellpadding="0" cellspacing="0" width="100%" height="180" style="border:2px solid ${st.border};border-radius:10px;background:#FFFFFF;font-family:${EM_FONT};">
      <tr>
        <td style="padding:12px 13px 6px;">
          <table border="0" cellpadding="0" cellspacing="0" width="100%">
            <tr>
              <td style="font-size:17px;font-weight:900;color:#1A1A1A;line-height:22px;vertical-align:middle;">${p.kr}</td>
              <td align="right" style="vertical-align:middle;">
                <table border="0" cellpadding="0" cellspacing="0" align="right"><tr>
                  <td style="background:${st.bg};color:${st.color};border:1px solid ${st.border};border-radius:10px;padding:2px 7px;font-size:11px;font-weight:700;line-height:22px;font-family:${EM_FONT};">${st.label}</td>
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
                <span style="font-size:28px;font-weight:900;color:#1A1A1A;">${p.score.toFixed(1)}</span>
                <span style="font-size:14px;color:#94A3B8;"> %</span>
              </td>
              <td align="right" style="vertical-align:top;padding-top:2px;">
                <table border="0" cellpadding="0" cellspacing="0" width="100%"><tr><td align="right" style="font-size:10px;color:#94A3B8;padding-bottom:2px;font-family:${EM_FONT};">${t.weekTrend}</td></tr></table>
                ${weeklyTrendHtml(trendArr, sparkColor, globalMax, globalMin)}
              </td>
            </tr>
            <tr>
              <td colspan="2" style="padding-top:4px;">${p.prev ? deltaHtml(d, 13, true) : `<span style="color:#94A3B8;font-size:13px;">MoM —</span>`}</td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td style="padding:0 13px 12px;">
          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background:#F8FAFC;border-radius:6px;">
            <tr>
              <td style="padding:6px 8px;font-size:13px;color:#1A1A1A;">${lang === 'en' ? `${t.vsComp} ${p.compName}` : `${p.compName} ${t.vsComp}`}</td>
              <td align="right" style="padding:6px 8px;font-size:13px;font-weight:700;color:${(p.compRatio || 0) >= 100 ? '#15803D' : (p.compRatio || 0) >= 80 ? '#E8910C' : '#BE123C'};">
                ${p.compRatio || Math.round(p.vsComp > 0 ? (p.score / p.vsComp) * 100 : 100)}%
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </td>`
}

// ─── BU 섹션 ──────────────────────────────────────────────────────────────────
function buSectionHtml(buKey, buProducts, globalMax, globalMin, lang = 'ko') {
  const t = T[lang] || T.ko
  const rows = []
  for (let i = 0; i < buProducts.length; i += 3) {
    const rowProducts = buProducts.slice(i, i + 3)
    while (rowProducts.length < 3) rowProducts.push(null)
    rows.push(rowProducts)
  }

  const rowsHtml = rows.map(row => `
    <tr>
      ${row.map(p => p ? productCardHtml(p, globalMax, globalMin, lang) : '<td width="33%" style="padding:5px;"></td>').join('')}
    </tr>`).join('')

  return `
  <!-- ${buKey} BU 헤더 -->
  <tr>
    <td style="padding:8px 0 6px;">
      <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <tr>
          <td style="background:#F1F5F9;border-radius:7px;padding:7px 12px;">
            <table border="0" cellpadding="0" cellspacing="0" width="100%">
              <tr>
                <td style="font-size:15px;font-weight:700;color:#1A1A1A;font-family:${EM_FONT};">${buKey}</td>
                <td align="right" style="font-size:14px;color:#94A3B8;font-family:${EM_FONT};">${buProducts.length}${t.categories}</td>
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
      <td style="padding:8px 20px;">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-radius:8px;background:#FFF4F7;border:1px solid #F5CCD8;">
          <tr>
            <td style="padding:10px 14px;">
              <p style="margin:0 0 4px;font-size:11px;font-weight:700;color:${EM_RED};font-family:${EM_FONT};">${t.insight}</p>
              <p style="margin:0;font-size:12px;color:#1A1A1A;line-height:22px;font-family:${EM_FONT};">${mdBold(insight)}</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>`
  }
  if (showHowToRead && howToRead) {
    html += `
    <tr>
      <td style="padding:0 20px 8px;">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-radius:8px;background:#F8FAFC;border:1px solid #E2E8F0;">
          <tr>
            <td style="padding:10px 14px;">
              <p style="margin:0 0 4px;font-size:11px;font-weight:700;color:#64748B;font-family:${EM_FONT};">${t.howToRead}</p>
              <p style="margin:0;font-size:12px;color:#475569;line-height:22px;font-family:${EM_FONT};">${mdBold(howToRead)}</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>`
  }
  return html
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
            <table border="0" cellpadding="0" cellspacing="0"><tr><td width="22" height="22" style="background:${rankBg};color:${rankColor};border-radius:4px;font-size:11px;font-weight:800;text-align:center;line-height:22px;font-family:${EM_FONT};">${c.rank}</td></tr></table>
          </td>
          <td style="padding-left:5px;vertical-align:top;">
            <table border="0" cellpadding="0" cellspacing="0"><tr><td style="font-size:13px;font-weight:700;color:#1A1A1A;font-family:${EM_FONT};line-height:20px;">${c.source}</td></tr></table>
            <table border="0" cellpadding="0" cellspacing="0"><tr><td style="font-size:11px;color:#94A3B8;background:#F8FAFC;border-radius:4px;padding:1px 5px;font-family:${EM_FONT};">${c.category}</td></tr></table>
          </td>
        </tr>
      </table>
    </td>
    <td style="padding:6px 16px 6px 0;vertical-align:top;">
      <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <tr>
          <td width="${barPct}%" style="background:${EM_RED};border-radius:6px;height:24px;font-size:0;">&nbsp;</td>
          <td style="height:24px;padding-left:8px;white-space:nowrap;vertical-align:middle;">
            <span style="font-size:13px;font-weight:700;color:${EM_RED};font-family:${EM_FONT};">${scoreStr}</span>
            <span style="font-size:13px;color:#64748B;font-family:${EM_FONT};">&nbsp;(${c.ratio ? c.ratio.toFixed(1) + '%' : ''})</span>
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
    if (lgWin)  badge = `&nbsp;&nbsp;<span style="background:#FFF1F2;color:${EM_RED};font-size:10px;font-weight:800;border-radius:3px;padding:1px 5px;font-family:${EM_FONT};mso-line-height-rule:exactly;line-height:18px;">LG +${fmt(lgVal - samVal)}</span>`
    if (samWin && hasSam) badge = `&nbsp;&nbsp;<span style="background:#EFF6FF;color:#3B82F6;font-size:10px;font-weight:800;border-radius:3px;padding:1px 5px;font-family:${EM_FONT};mso-line-height-rule:exactly;line-height:18px;">SS +${fmt(samVal - lgVal)}</span>`

    // TTL 행: 볼드 + 배경 살짝 + 하단 실선 구분
    const labelStyle = isTTL
      ? `font-size:13px;font-weight:700;color:#1A1A1A;font-family:${EM_FONT};`
      : `font-size:13px;font-weight:700;color:#1A1A1A;font-family:${EM_FONT};`
    const rowBg = isTTL ? 'background:#F8FAFC;' : ''
    const rowBorder = isTTL
      ? 'border-bottom:2px solid #E2E8F0;'
      : (isLast ? '' : 'border-bottom:1px solid #F1F5F9;')
    const barH = isTTL ? 16 : 14
    const numStyle = isTTL ? 'font-size:13px;font-weight:700;' : 'font-size:13px;font-weight:700;'

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
                    : `<td style="padding-left:0;font-size:13px;color:#CBD5E1;font-family:${EM_FONT};">${t.dotcomLgOnly}</td>`
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
                <td style="background:${EM_RED};color:#FFFFFF;font-size:13px;font-weight:700;border-radius:4px;padding:2px 8px;font-family:${EM_FONT};">${t.dotcomLgWin} (${lgWinCols.length})</td>
                <td style="padding-left:6px;font-size:13px;color:#64748B;font-family:${EM_FONT};">${lgWinCols.length ? lgWinCols.join(', ') : t.dotcomNone}</td>
              </tr></table>
            </td>
          </tr>
          <tr>
            <td style="padding:4px 0;vertical-align:top;">
              <table border="0" cellpadding="0" cellspacing="0"><tr>
                <td style="background:#3B82F6;color:#FFFFFF;font-size:13px;font-weight:700;border-radius:4px;padding:2px 8px;font-family:${EM_FONT};">${t.dotcomSsWin} (${samWinCols.length})</td>
                <td style="padding-left:6px;font-size:13px;color:#64748B;font-family:${EM_FONT};">${samWinCols.length ? samWinCols.join(', ') : t.dotcomNone}</td>
              </tr></table>
            </td>
          </tr>
        </table>
      </td>
    </tr>`

  return `
              <!-- ══ 닷컴 Citation (경쟁사대비) ══ -->
              <tr>
                <td style="padding-bottom:20px;">
                  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background:#FFFFFF;border-radius:16px;border:2px solid #E8EDF2;">
                    <tr>
                      <td style="padding:18px 20px 16px;background:#FAFBFC;border-bottom:1px solid #F1F5F9;">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                          <tr>
                            <td style="vertical-align:middle;">
                              <table border="0" cellpadding="0" cellspacing="0">
                                <tr>
                                  <td width="3" style="background:${EM_RED};border-radius:2px;">&nbsp;</td>
                                  <td style="padding-left:8px;font-size:17px;font-weight:700;color:#1A1A1A;font-family:${EM_FONT};">${t.dotcomTitle}</td>
                                </tr>
                              </table>
                            </td>
                            <td align="right" style="vertical-align:middle;">
                              <table border="0" cellpadding="0" cellspacing="0" align="right"><tr>
                                <td width="10" height="10" style="background:${EM_RED};border-radius:2px;font-size:0;">&nbsp;</td>
                                <td style="padding:0 8px 0 3px;font-size:11px;color:#94A3B8;font-family:${EM_FONT};">LG</td>
                                <td width="10" height="10" style="background:#3B82F6;border-radius:2px;font-size:0;">&nbsp;</td>
                                <td style="padding-left:3px;font-size:11px;color:#94A3B8;font-family:${EM_FONT};">SS</td>
                              </tr></table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    ${insightBlockHtml(meta.dotcomInsight, meta.showDotcomInsight, meta.dotcomHowToRead, meta.showDotcomHowToRead, lang)}
                    <tr>
                      <td style="padding:8px 20px 16px;">
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

// ─── 메인 생성 함수 ───────────────────────────────────────────────────────────
export function generateEmailHTML(meta, total, products, citations, dotcom = {}, lang = 'ko') {
  const t = T[lang] || T.ko
  const totalDelta = delta(total.score, total.prev)
  const scoreBarW  = Math.round(total.score)

  // 경쟁사 평균 visibility (products의 vsComp 평균)
  const compProducts = products.filter(p => p.vsComp > 0)
  const compAvg = compProducts.length ? +(compProducts.reduce((s, p) => s + p.vsComp, 0) / compProducts.length).toFixed(1) : 0
  const lgVsComp = +(total.score - compAvg).toFixed(1)

  // 주간 트렌드 전역 min/max 계산 (모든 제품 동일 스케일)
  const allWeekly = products.flatMap(p => p.weekly || [])
  const globalMax = allWeekly.length ? Math.max(...allWeekly) : 100
  const globalMin = allWeekly.length ? Math.min(...allWeekly) : 0

  const BU_ORDER = ['MS', 'HS', 'ES']
  const buSections = BU_ORDER.map(buKey => {
    const buProducts = products.filter(p => p.bu === buKey)
    return buProducts.length ? buSectionHtml(buKey, buProducts, globalMax, globalMin, lang) : ''
  }).join('')

  const citationList = citations.slice(0, 10)
  const citMaxScore = citationList.length ? Math.max(...citationList.map(c => c.score)) : 100
  const citationRows = citationList.map((c, i) => citationRowHtml(c, i === citationList.length - 1, citMaxScore)).join('')

  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>LG GEO Newsletter ${meta.period}</title>
  <link href="https://fonts.cdnfonts.com/css/lg-smart" rel="stylesheet" />
  <!--[if mso]>
  <style type="text/css">
    table { border-collapse: collapse; }
    td { font-family: 'LG Smart', Arial, sans-serif; }
  </style>
  <![endif]-->
</head>
<body style="margin:0;padding:0;background-color:#F1F5F9;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;">

<table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color:#F1F5F9;">
  <tr>
    <td align="center" style="padding:24px 12px;">

      <!-- 메인 컨테이너 -->
      <table border="0" cellpadding="0" cellspacing="0" width="680" style="max-width:680px;background:#FFFFFF;border-radius:16px;font-family:${EM_FONT};">

        <!-- ══ 헤더 상단 레드 바 ══ -->
        <tr>
          <td style="background:${EM_RED};padding:9px 20px;">
            <table border="0" cellpadding="0" cellspacing="0" width="100%">
              <tr>
                <td style="font-size:13px;font-weight:700;color:#FFCCD8;font-family:${EM_FONT};">LG ELECTRONICS</td>
                <td align="right" style="font-size:12px;color:#FFB0C0;font-family:${EM_FONT};">${meta.reportNo} · ${meta.period}</td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- ══ 헤더 타이틀 ══ -->
        <tr>
          <td style="background:#FFFFFF;padding:22px 20px 14px;">
            <table border="0" cellpadding="0" cellspacing="0" width="100%">
              <tr>
                <td style="font-size:12px;color:#94A3B8;font-family:${EM_FONT};font-weight:400;">${meta.reportType || (lang === 'en' ? 'GEO Monthly Performance Report' : 'GEO 월간 성과 분석 리포트')}</td>
                <td align="right" style="font-size:12px;color:#94A3B8;font-family:${EM_FONT};font-weight:400;">${meta.team}</td>
              </tr>
            </table>
            <p style="margin:16px 0 10px;text-align:center;line-height:1.2;">
              <span style="font-size:${meta.titleFontSize || 24}px;font-weight:700;color:${meta.titleColor || '#1A1A1A'};font-family:${EM_FONT};">${meta.title || (lang === 'en' ? 'Generative AI Engine Visibility Performance Analysis' : '생성형 AI 엔진 가시성(Visibility) 성과 분석')}</span>
            </p>
            <p style="margin:0;text-align:center;">
              <span style="font-size:16px;color:#475569;font-family:${EM_FONT};font-weight:400;">${meta.dateLine || (lang === 'en' ? 'As of ' + meta.period : meta.period + ' 기준')}</span>
            </p>
            ${meta.showNotice && meta.noticeText ? `
            <table border="0" cellpadding="0" cellspacing="0" width="100%">
              <tr><td height="14" style="font-size:0;line-height:0;">&nbsp;</td></tr>
              <tr>
                <td style="background:#FEF2F2;border:1px solid #FECACA;border-radius:8px;padding:12px 16px;">
                  <p style="margin:0 0 4px;font-size:13px;font-weight:700;color:${EM_RED};font-family:${EM_FONT};">${t.notice}</p>
                  <p style="margin:0;font-size:12px;color:#1A1A1A;font-family:${EM_FONT};line-height:21px;">${mdBold(meta.noticeText)}</p>
                </td>
              </tr>
            </table>` : ''}
          </td>
        </tr>
        <!-- 구분선 (직선) -->
        <tr>
          <td style="background:#FFFFFF;padding:20px 20px 0;">
            <table border="0" cellpadding="0" cellspacing="0" width="100%">
              <tr>
                <td height="2" style="background:${EM_RED};font-size:0;line-height:0;">&nbsp;</td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- ══ 본문 ══ -->
        <tr>
          <td style="background:#F8FAFC;padding:24px 20px;">
            <table border="0" cellpadding="0" cellspacing="0" width="100%">

              <!-- ── 전체 GEO 가시성 지수 ── -->
              <tr>
                <td style="padding-bottom:20px;">
                  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background:#0F172A;border-radius:14px;">
                    <tr>
                      <td style="padding:20px 16px 18px;">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                          <tr>
                            <td style="font-size:22px;font-weight:700;color:#FFFFFF;text-transform:uppercase;font-family:${EM_FONT};">LG GEO Visibility %</td>
                            <td align="right" style="font-size:12px;color:#94A3B8;font-family:${EM_FONT};">Model : ChatGPT, ChatGPT Search, Gemini<br/>Subsidiary : US, CA, UK, DE, ES, BR, MX, IN, AU, VN</td>
                          </tr>
                        </table>
                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                          <tr>
                            <td style="vertical-align:bottom;">
                              <span style="font-size:50px;font-weight:900;color:#FFFFFF;font-family:${EM_FONT};">${total.score}</span>
                              <span style="font-size:20px;color:#94A3B8;font-family:${EM_FONT};"> %</span>
                              &nbsp;&nbsp;${total.prev ? deltaHtml(totalDelta, 16) : `<span style="color:#94A3B8;font-size:16px;">—</span>`}
                              <span style="font-size:13px;color:#64748B;font-family:${EM_FONT};"> MoM</span>
                            </td>
                            <td align="right" style="vertical-align:bottom;padding-bottom:8px;">
                              ${compAvg > 0 ? `<span style="font-size:14px;color:#3B82F6;font-weight:800;font-family:${EM_FONT};">SAMSUNG</span>
                              <span style="font-size:14px;color:#94A3B8;font-weight:500;font-family:${EM_FONT};">&nbsp;${compAvg}%</span>
                              <span style="font-size:12px;color:#64748B;font-family:${EM_FONT};">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                              <span style="font-size:14px;font-weight:800;color:${lgVsComp >= 0 ? '#16A34A' : '#DC2626'};font-family:${EM_FONT};">Gap ${lgVsComp >= 0 ? '+' : ''}${lgVsComp}%p</span>` : ''}
                            </td>
                          </tr>
                        </table>
                        <!-- 게이지 바 -->
                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                          <tr><td height="14" style="font-size:0;line-height:0;">&nbsp;</td></tr>
                          <tr>
                            <td style="font-size:11px;color:#64748B;font-family:${EM_FONT};">0%</td>
                            <td align="right" style="font-size:11px;color:#64748B;font-family:${EM_FONT};">100%</td>
                          </tr>
                          <tr>
                            <td colspan="2" style="padding-top:4px;">
                              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background:#1E2433;border-radius:8px;height:10px;">
                                <tr>
                                  <td width="${scoreBarW}%" style="background:${EM_RED};border-radius:8px;height:10px;font-size:0;">&nbsp;</td>
                                  <td></td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                        ${meta.totalInsight ? `
                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                        <tr><td height="16" style="font-size:0;line-height:0;">&nbsp;</td></tr>
                          <tr>
                            <td style="padding:14px 16px;background:#1E0F18;border:1px solid #3D1528;border-radius:10px;">
                              <p style="margin:0 0 6px;font-size:12px;font-weight:700;color:${EM_RED};text-transform:uppercase;font-family:${EM_FONT};">${t.geoInsight}</p>
                              <p style="margin:0;font-size:13px;color:#FFFFFF;line-height:24px;font-family:${EM_FONT};">${mdBold(meta.totalInsight)}</p>
                            </td>
                          </tr>
                        </table>` : ''}
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- ══ 제품별 현황 (통합 카드) ══ -->
              <tr>
                <td style="padding-bottom:20px;">
                  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background:#FFFFFF;border-radius:16px;border:2px solid #E8EDF2;">
                    <tr>
                      <td style="padding:18px 20px 16px;background:#FAFBFC;border-bottom:1px solid #F1F5F9;">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                          <tr>
                            <td style="vertical-align:middle;">
                              <table border="0" cellpadding="0" cellspacing="0">
                                <tr>
                                  <td width="3" style="background:${EM_RED};border-radius:2px;">&nbsp;</td>
                                  <td style="padding-left:8px;font-size:17px;font-weight:700;color:#1A1A1A;font-family:${EM_FONT};">${t.productTitle}</td>
                                </tr>
                              </table>
                            </td>
                            <td align="right" style="vertical-align:middle;font-size:11px;color:#94A3B8;font-family:${EM_FONT};">
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
                    <tr>
                      <td style="padding:16px 20px;">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                          ${buSections}
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- ══ 도메인별 Citation 현황 (통합 카드) ══ -->
              <tr>
                <td style="padding-bottom:8px;">
                  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background:#FFFFFF;border-radius:16px;border:2px solid #E8EDF2;">
                    <tr>
                      <td style="padding:18px 20px 16px;background:#FAFBFC;border-bottom:1px solid #F1F5F9;">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                          <tr>
                            <td style="vertical-align:middle;">
                              <table border="0" cellpadding="0" cellspacing="0">
                                <tr>
                                  <td width="3" style="background:${EM_RED};border-radius:2px;">&nbsp;</td>
                                  <td style="padding-left:8px;font-size:17px;font-weight:700;color:#1A1A1A;font-family:${EM_FONT};">${t.citationTitle}</td>
                                </tr>
                              </table>
                            </td>
                            <td align="right" style="vertical-align:middle;">
                              <table border="0" cellpadding="0" cellspacing="0" align="right"><tr>
                                <td width="14" height="5" style="background:${EM_RED};border-radius:3px;font-size:0;">&nbsp;</td>
                                <td style="padding-left:4px;font-size:11px;color:#94A3B8;font-family:${EM_FONT};">${t.citationLegend}</td>
                              </tr></table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    ${insightBlockHtml(meta.citationInsight, meta.showCitationInsight, meta.citationHowToRead, meta.showCitationHowToRead, lang)}
                    <tr>
                      <td style="padding:16px 20px;">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                          ${citationRows}
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              ${dotcomSectionHtml(dotcom, meta, lang)}

              ${meta.showTodo && meta.todoText ? `
              <!-- ══ To-do List ══ -->
              <tr>
                <td style="padding-bottom:20px;">
                  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background:#FFFFFF;border-radius:16px;border:2px solid #E8EDF2;">
                    <tr>
                      <td style="padding:18px 20px 16px;background:#FAFBFC;border-bottom:1px solid #F1F5F9;">
                        <table border="0" cellpadding="0" cellspacing="0">
                          <tr>
                            <td width="3" style="background:${EM_RED};border-radius:2px;">&nbsp;</td>
                            <td style="padding-left:8px;font-size:17px;font-weight:700;color:#1A1A1A;font-family:${EM_FONT};">${t.todoTitle}</td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:16px 20px;">
                        <p style="margin:0;font-size:12px;color:#1A1A1A;line-height:22px;font-family:${EM_FONT};">${mdBold(meta.todoText)}</p>
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
          <td style="background:#1A1A1A;padding:14px 20px;">
            <table border="0" cellpadding="0" cellspacing="0" width="100%">
              <tr>
                <td>
                  <p style="margin:0;font-size:11px;font-weight:700;color:#FFFFFF;font-family:${EM_FONT};">LG Electronics &nbsp;<span style="font-weight:400;color:#94A3B8;">${t.footer}</span></p>
                </td>
                <td align="right">
                  <p style="margin:0;font-size:9px;color:#FFFFFF;font-family:${EM_FONT};">© 2026 LG Electronics Inc. All Rights Reserved.</p>
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
