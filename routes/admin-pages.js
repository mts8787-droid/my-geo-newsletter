// ─── Admin UI 페이지 라우트 (HTML 렌더 모음) ─────────────────────────────
// /admin/, /admin/plan, /admin/infra, /admin/de-prompts*, /admin/ip-manager,
// /admin/archives, /admin/ai-settings — 모두 인증 후 접근
import { Router } from 'express'
import express from 'express'
import { readFileSync, writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import XLSX from 'xlsx-js-style'
import { parseAppendix } from '../src/excelUtils.js'
import { readModeSyncData, writeModeSyncData } from '../lib/storage.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const PROJECT_ROOT = join(__dirname, '..')

// ─── Prompting Skills — 컴포넌트 라이브 프리뷰 HTML ────────────────────────
// PROMPTING_SKILLS.md 의 C-01 ~ C-13 컴포넌트를 실제 렌더된 HTML 로 보여주는 갤러리.
// MD 파일은 그대로 두고, 웹 페이지에만 갤러리 섹션 주입.
const PROMPTING_SKILLS_PREVIEW = `
<style>
  .preview-section{margin-top:40px;padding-top:32px;border-top:2px solid #CF0652;font-family:'LGEIText','LG Smart','Arial Narrow',Arial,sans-serif}
  .preview-section h2{font-size:22px;color:#F8FAFC;margin-bottom:24px}
  .preview-card{background:#fff;border-radius:10px;padding:24px;margin:18px 0;color:#1A1A1A;box-shadow:0 2px 8px rgba(0,0,0,.3)}
  .preview-label{display:inline-block;background:#CF0652;color:#fff;font-size:11px;font-weight:700;padding:3px 10px;border-radius:5px;letter-spacing:1px;margin-bottom:10px}
  .preview-name{font-size:14px;color:#475569;margin-bottom:14px;font-weight:600;margin-left:10px}
  /* 실제 대시보드와 동일한 prod-card 스타일 */
  .pc{font-family:'LGEIText','LG Smart','Arial Narrow',Arial,sans-serif}
</style>
<div class="preview-section">
<h2>Live Examples — 컴포넌트 미리보기 (실제 디자인 통일)</h2>

<!-- C-01 Hero — 실제 대시보드 hero 와 동일 -->
<div class="preview-card pc">
  <span class="preview-label">C-01</span><span class="preview-name">Hero 카드 (대시보드 상단 요약)</span>
  <div style="background:linear-gradient(135deg,#0F172A 0%,#1E293B 100%);color:#E2E8F0;padding:28px 32px;border-radius:16px;border:1px solid #334155">
    <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:24px;flex-wrap:wrap">
      <div>
        <div style="font-size:11px;color:#94A3B8;letter-spacing:3px;text-transform:uppercase;margin-bottom:8px;font-weight:700">A계열 KPI %</div>
        <div style="display:flex;align-items:baseline;gap:14px">
          <span style="font-size:64px;font-weight:900;color:#fff;line-height:1;letter-spacing:-3px">41.9</span>
          <span style="font-size:22px;color:#94A3B8">%</span>
          <span style="font-size:15px;color:#22C55E;font-weight:700">▲ 1.2%p</span>
          <span style="font-size:11px;color:#64748B;letter-spacing:1px">MoM</span>
        </div>
        <div style="display:flex;gap:14px;margin-top:12px;font-size:13px;align-items:center">
          <span style="color:#94A3B8">B계열</span>
          <span style="color:#fff;font-weight:600">45.2%</span>
          <span style="color:#EF4444;font-weight:700">Gap −3.3%p</span>
        </div>
      </div>
      <div style="font-size:11px;color:#94A3B8;line-height:1.7;text-align:right">
        <div>Source : Channel-1, Channel-2, Channel-3</div>
        <div>Scope : Region A · B · C · D</div>
      </div>
    </div>
  </div>
</div>

<!-- C-02 Notice / KPI Logic — 뉴스레터/대시보드 안내 박스 -->
<div class="preview-card pc">
  <span class="preview-label">C-02</span><span class="preview-name">Notice / KPI Logic 박스</span>
  <div style="background:#FEF2F4;border:1px solid #FECDD3;border-radius:10px;padding:16px 20px;margin-bottom:12px">
    <div style="font-size:11px;font-weight:700;color:#BE123C;letter-spacing:1.5px;margin-bottom:6px">NOTICE</div>
    <div style="font-size:13px;color:#1A1A1A;line-height:1.7">본 리포트는 <strong>4월 기준</strong>으로 작성되었으며, 일부 카테고리는 베이스라인 재조정이 적용됨</div>
  </div>
  <div style="background:#F8FAFC;border:1px solid #CBD5E1;border-radius:10px;padding:16px 20px">
    <div style="font-size:11px;font-weight:700;color:#475569;letter-spacing:1.5px;margin-bottom:6px">KPI LOGIC</div>
    <div style="font-size:13px;color:#1A1A1A;line-height:1.7"><strong>비율(%)</strong>: 자사 점수 / 1위 비교 그룹 점수 × 100</div>
  </div>
</div>

<!-- C-03 카테고리 카드 (간단) — 대시보드 prod-card 와 동일 -->
<div class="preview-card pc">
  <span class="preview-label">C-03</span><span class="preview-name">카테고리 카드 (대시보드 prod-card)</span>
  <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:14px">
    ${[
      ['항목 A', 88.1, 88.9, 'B계열', 95, 'lead', '#A7F3D0','#ECFDF5','#15803D','Lead'],
      ['항목 B', 65.2, 67.0, 'B계열', 78, 'behind', '#FDE68A','#FFFBEB','#B45309','Behind'],
      ['항목 C', 38.5, 40.1, 'B계열', 52, 'critical', '#FECDD3','#FFF1F2','#BE123C','Critical'],
    ].map(([label, score, prev, compName, ratio, status, border, bg, color, slabel]) => {
      const delta = score - prev
      const dColor = delta > 0 ? '#22C55E' : delta < 0 ? '#EF4444' : '#94A3B8'
      const dArrow = delta > 0 ? '▲' : delta < 0 ? '▼' : '─'
      return `<div style="border:2px solid ${border};border-radius:10px;background:#fff;padding:14px">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
          <span style="font-size:15px;font-weight:900;color:#1A1A1A;letter-spacing:-0.5px">${label}</span>
          <span style="background:${bg};color:${color};border:1px solid ${border};border-radius:6px;padding:2px 8px;font-size:11px;font-weight:700">${slabel}</span>
        </div>
        <div style="display:flex;align-items:baseline;gap:6px;margin-bottom:6px">
          <span style="font-size:26px;font-weight:900;color:#1A1A1A;letter-spacing:-1.5px">${score.toFixed(1)}</span>
          <span style="font-size:12px;color:#94A3B8">%</span>
          <span style="font-size:12px;font-weight:700;color:${dColor};margin-left:4px">${dArrow}${Math.abs(delta).toFixed(1)}%p</span>
        </div>
        <div style="font-size:11px;color:#64748B;margin-bottom:10px">${compName} 대비 <span style="color:${color};font-weight:700">${ratio}%</span></div>
        <svg viewBox="0 0 280 70" style="width:100%;height:70px;background:#FAFBFC;border-radius:6px">
          <defs><linearGradient id="lg${status}" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="${color}" stop-opacity="0.25"/><stop offset="100%" stop-color="${color}" stop-opacity="0.03"/></linearGradient></defs>
          ${(() => {
            const vals = status === 'lead' ? [80,82,84,86,88] : status === 'behind' ? [70,68,67,66,65] : [45,42,40,39,38]
            const pts = vals.map((v, i) => ({x: 20 + i*60, y: 60 - (v - Math.min(...vals)) * 1.5}))
            const line = pts.map((p, i) => (i?'L':'M') + p.x + ',' + p.y).join(' ')
            const area = line + ' L' + pts[pts.length-1].x + ',60 L20,60 Z'
            return `<path d="${area}" fill="url(#lg${status})"/>
              <path d="${line}" stroke="${color}" fill="none" stroke-width="2" stroke-linecap="round"/>
              ${pts.map(p => `<circle cx="${p.x}" cy="${p.y}" r="3" fill="#fff" stroke="${color}" stroke-width="2"/>`).join('')}
              ${pts.map(p => `<text x="${p.x}" y="${p.y - 6}" text-anchor="middle" font-size="10" font-weight="700" fill="${color}">${vals[pts.indexOf(p)]}</text>`).join('')}`
          })()}
        </svg>
      </div>`
    }).join('')}
  </div>
</div>

<!-- C-04 카테고리 카드 (그룹 막대형) — 뉴스레터 V3 컨셉 -->
<div class="preview-card pc">
  <span class="preview-label">C-04</span><span class="preview-name">카테고리 카드 (그룹 막대형)</span>
  <div style="border:2px solid #A7F3D0;border-radius:10px;background:#fff;padding:14px;max-width:480px">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">
      <div>
        <span style="font-size:15px;font-weight:900;letter-spacing:-0.5px">항목 A</span>
        <span style="font-size:22px;font-weight:900;margin-left:8px;letter-spacing:-1.5px">88.1<span style="font-size:12px;color:#94A3B8">%</span></span>
        <span style="font-size:12px;font-weight:700;color:#22C55E;margin-left:6px">▲1.2%p</span>
      </div>
      <span style="background:#ECFDF5;color:#15803D;border:1px solid #A7F3D0;border-radius:6px;padding:2px 8px;font-size:11px;font-weight:700">Lead</span>
    </div>
    <div style="display:flex;justify-content:space-between;align-items:flex-end;gap:4px;height:80px">
      ${[87,86,85,84,86,88,90,87,85,84].map((v, i) => {
        const hPx = (v - 80) * 6 + 8
        return `<div style="flex:1;display:flex;flex-direction:column;align-items:center">
          <span style="font-size:10px;font-weight:700;color:#15803D;margin-bottom:2px">${v}</span>
          <div style="width:18px;height:${hPx}px;background:#15803D;border-radius:3px 3px 0 0"></div>
          <span style="font-size:9px;color:#94A3B8;margin-top:4px;font-weight:600">G${i+1}</span>
        </div>`
      }).join('')}
    </div>
  </div>
</div>

<!-- C-05 막대 그래프 (그룹 vbar) — 대시보드 vbar 와 동일 -->
<div class="preview-card pc">
  <span class="preview-label">C-05</span><span class="preview-name">막대 그래프 (그룹 vbar — 대시보드 Visibility)</span>
  <div style="display:flex;gap:32px;padding:10px;flex-wrap:wrap">
    ${['A','B','C','D'].map((label, idx) => {
      const vals = [[87,90,42],[55,50,60],[68,71,30],[42,45,38]][idx]
      const colors = ['#CF0652','#94A3B8','#9333EA']
      const names = ['cat1','cat2','cat3']
      const maxV = Math.max(...vals, 95)
      return `<div style="text-align:center">
        <div style="display:flex;gap:3px;align-items:flex-end;justify-content:center;height:130px">
          ${vals.map((v,i) => `<div style="display:flex;flex-direction:column;align-items:center;width:26px">
            <span style="font-size:11px;font-weight:700;color:${colors[i]};margin-bottom:2px">${v.toFixed(1)}</span>
            <div style="width:100%;height:${Math.round(v/maxV*100)}px;background:${colors[i]};border-radius:4px 4px 0 0"></div>
            <span style="font-size:10px;color:#94A3B8;margin-top:3px;letter-spacing:-0.6px;font-weight:600">${names[i]}</span>
          </div>`).join('')}
        </div>
        <div style="font-size:14px;font-weight:600;color:#475569;margin-top:6px">${label}</div>
      </div>`
    }).join('')}
  </div>
</div>

<!-- C-06 가로 막대 Top N -->
<div class="preview-card pc">
  <span class="preview-label">C-06</span><span class="preview-name">가로 막대 (Top N 순위)</span>
  <div style="max-width:600px">
    ${[['item-alpha', 1234, 0.35], ['item-beta', 980, 0.28], ['item-gamma', 720, 0.21], ['item-delta', 510, 0.14], ['item-epsilon', 280, 0.08]].map(([n,v,r], i) => {
      const color = i === 0 ? '#15803D' : i < 3 ? '#22C55E' : '#94A3B8'
      const w = (v/1234*100).toFixed(1)
      return `<div style="display:flex;align-items:center;gap:10px;padding:6px 0;border-bottom:1px solid #F1F5F9">
        <span style="width:24px;height:24px;border-radius:50%;background:${i===0?'#FEF3C7':'#F1F5F9'};color:${i===0?'#B45309':'#475569'};display:inline-flex;align-items:center;justify-content:center;font-size:11px;font-weight:700">${i+1}</span>
        <span style="width:120px;font-size:13px;font-weight:600;color:#1A1A1A">${n}</span>
        <div style="flex:1;background:#F1F5F9;border-radius:4px;height:20px;position:relative;overflow:hidden">
          <div style="width:${w}%;height:100%;background:${color};border-radius:4px"></div>
        </div>
        <span style="width:130px;text-align:right;font-size:12px;font-weight:700;color:${color};font-variant-numeric:tabular-nums">${v.toLocaleString()} (${(r*100).toFixed(1)}%)</span>
      </div>`
    }).join('')}
  </div>
</div>

<!-- C-07 단일 라인 (svgLine) — 실제 svgLine 와 동일 구조 -->
<div class="preview-card pc">
  <span class="preview-label">C-07</span><span class="preview-name">단일 라인 차트 (svgLine, area + line + values)</span>
  <div style="max-width:400px;background:#FAFBFC;padding:8px;border-radius:8px">
    <svg viewBox="0 0 320 110" width="100%" height="110" style="background:#fff;border-radius:6px;overflow:visible">
      <defs><linearGradient id="g7" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#CF0652" stop-opacity="0.25"/><stop offset="100%" stop-color="#CF0652" stop-opacity="0.03"/></linearGradient></defs>
      ${(() => {
        const vals = [80.1,82.5,84.7,86.1,87.2,88.0,88.4,88.7,88.9]
        const pts = vals.map((v, i) => ({x: 14 + i*36, y: 80 - (v-80)*6, v}))
        const line = pts.map((p,i) => (i?'L':'M') + p.x.toFixed(1) + ',' + p.y.toFixed(1)).join(' ')
        const area = line + ' L' + pts[pts.length-1].x + ',80 L14,80 Z'
        return `<path d="${area}" fill="url(#g7)"/>
          <path d="${line}" stroke="#CF0652" fill="none" stroke-width="2" stroke-linecap="round"/>
          ${pts.map(p => `<circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="3.5" fill="#fff" stroke="#CF0652" stroke-width="2"/>`).join('')}
          ${pts.map(p => `<text x="${p.x.toFixed(1)}" y="${Math.max(p.y - 7, 12).toFixed(1)}" text-anchor="middle" font-size="11" font-weight="700" fill="#CF0652">${p.v}</text>`).join('')}
          ${['T1','T2','T3','T4','T5','T6','T7','T8','T9'].map((l,i) => `<text x="${14 + i*36}" y="98" text-anchor="middle" font-size="11" fill="#94A3B8">${l}</text>`).join('')}`
      })()}
    </svg>
  </div>
</div>

<!-- C-08 다중 라인 (svgMultiLine) — 메인 시리즈 굵게, 비교 가늘게 -->
<div class="preview-card pc">
  <span class="preview-label">C-08</span><span class="preview-name">다중 라인 차트 (svgMultiLine — 주간/월간 트렌드)</span>
  <div style="border:1px solid #E8EDF2;border-radius:10px;overflow:hidden">
    <svg viewBox="0 0 600 200" width="100%" height="200" style="background:#fff;display:block">
      <g>${[20,60,100,140,180].map(y => `<line x1="0" y1="${y}" x2="600" y2="${y}" stroke="#E8EDF2" stroke-width="1"/>`).join('')}</g>
      ${(() => {
        const series = [
          { name:'cat1', color:'#CF0652', vals:[60,55,50,42,38,32,28,25,22] },
          { name:'cat2', color:'#94A3B8', vals:[90,88,85,82,78,75,72,70,68] },
          { name:'cat3', color:'#059669', vals:[120,118,115,108,100,95,88,82,75] },
          { name:'cat4', color:'#D97706', vals:[150,148,145,140,138,132,128,125,122] },
        ]
        let out = ''
        series.forEach(s => {
          const pts = s.vals.map((v, i) => ({x: 30 + i*68, y: v}))
          const line = pts.map((p,i) => (i?'L':'M') + p.x + ',' + p.y).join(' ')
          const isMain = s.name === 'cat1'
          out += `<path d="${line}" stroke="${s.color}" fill="none" stroke-width="${isMain?2.5:1.5}" stroke-linecap="round" opacity="${isMain?1:0.7}"/>`
          pts.forEach(p => {
            out += `<circle cx="${p.x}" cy="${p.y}" r="${isMain?3.5:2.5}" fill="#fff" stroke="${s.color}" stroke-width="${isMain?2:1.5}" opacity="${isMain?1:0.7}"/>`
          })
        })
        return out
      })()}
    </svg>
    <div style="background:#FAFBFC;padding:8px 14px;border-top:1px solid #E8EDF2;display:flex;gap:18px;font-size:12px;color:#475569">
      ${[['cat1','#CF0652'],['cat2','#94A3B8'],['cat3','#059669'],['cat4','#D97706']].map(([n,c]) => `<span style="display:inline-flex;align-items:center;gap:4px"><i style="display:inline-block;width:10px;height:3px;background:${c};border-radius:1px"></i><span style="font-weight:${n==='cat1'?700:400};color:${n==='cat1'?'#1A1A1A':'#94A3B8'}">${n}</span></span>`).join('')}
    </div>
  </div>
</div>

<!-- C-09 범프 차트 — 실제 bumpChartSvg 와 동일한 ribbon 스타일 -->
<div class="preview-card pc">
  <span class="preview-label">C-09</span><span class="preview-name">범프 차트 (도메인 순위 변동)</span>
  <div style="border:1px solid #E8EDF2;border-radius:10px;overflow:hidden;background:#fff">
    <svg viewBox="0 0 800 280" width="100%" style="background:#fff;display:block">
      ${(() => {
        const months = ['M1','M2','M3','M4','M5']
        const data = [
          { name:'item-A', color:'#CF0652', ranks:[1,2,1,1,2] },
          { name:'item-B', color:'#1D4ED8', ranks:[2,1,3,2,1] },
          { name:'item-C', color:'#059669', ranks:[3,3,2,3,3] },
          { name:'item-D', color:'#D97706', ranks:[4,4,4,4,4] },
        ]
        const padL = 100, padR = 60, padT = 20, padB = 30
        const chartW = 800 - padL - padR, chartH = 280 - padT - padB
        const maxRank = 5, ROW_H = chartH / maxRank, ribbon = ROW_H * 0.34
        let out = ''
        data.forEach(({name, color, ranks}) => {
          const pts = ranks.map((r, i) => ({
            x: padL + (i / 4) * chartW,
            y: padT + ((r - 0.5) / maxRank) * chartH
          }))
          // Smooth ribbon (simplified — use stroke for visibility)
          const path = pts.map((p,i) => (i?'L':'M') + p.x + ',' + p.y).join(' ')
          out += `<path d="${path}" stroke="${color}" fill="none" stroke-width="${ribbon*2}" stroke-linecap="round" stroke-linejoin="round" opacity="0.5"/>`
          pts.forEach(p => {
            out += `<text x="${p.x}" y="${p.y + 5}" text-anchor="middle" fill="#0F172A" font-size="13" font-weight="700">${name}</text>`
          })
        })
        // X labels
        months.forEach((m, i) => {
          out += `<text x="${padL + (i/4)*chartW}" y="${280 - 8}" text-anchor="middle" fill="#94A3B8" font-size="12">${m}</text>`
        })
        // Y labels (rank)
        for (let r = 1; r <= maxRank; r++) {
          const y = padT + ((r - 0.5) / maxRank) * chartH
          out += `<text x="${padL - 10}" y="${y + 5}" text-anchor="end" fill="#94A3B8" font-size="11" font-weight="600">#${r}</text>`
        }
        return out
      })()}
    </svg>
  </div>
</div>

<!-- C-10 미니 트렌드 바 — 뉴스레터 weeklyTrendHtml -->
<div class="preview-card pc">
  <span class="preview-label">C-10</span><span class="preview-name">미니 트렌드 바 (뉴스레터 weeklyTrendHtml)</span>
  <table border="0" cellpadding="0" cellspacing="0" style="display:inline-table;background:#FAFBFC;padding:10px;border-radius:6px">
    <tr>
      ${[80,82,85,83,87,88,86,89,90,88].map((v, i) => {
        const localMin = 78, localMax = 92
        const h = Math.round(((v-localMin)/(localMax-localMin)) * 24) + 4
        const spacer = 28 - h
        return `<td style="vertical-align:bottom;text-align:center;padding:0 4px">
          <table align="center" style="margin:0 auto"><tr><td style="font-size:10px;font-weight:700;color:#15803D;padding-bottom:1px">${v}</td></tr>
          ${spacer > 0 ? `<tr><td height="${spacer}" style="font-size:0;line-height:0">&nbsp;</td></tr>` : ''}
          <tr><td width="10" height="${h}" style="background:#15803D;font-size:0;line-height:0">&nbsp;</td></tr>
          <tr><td style="font-size:10px;color:#94A3B8;padding-top:2px">W${i+1}</td></tr></table>
        </td>`
      }).join('')}
    </tr>
  </table>
</div>

<!-- C-11 신호등 / 뱃지 -->
<div class="preview-card pc">
  <span class="preview-label">C-11</span><span class="preview-name">신호등 / 뱃지 (4 status)</span>
  <div style="display:flex;gap:12px;align-items:center;flex-wrap:wrap">
    <span style="background:#ECFDF5;color:#15803D;border:1px solid #A7F3D0;border-radius:6px;padding:3px 10px;font-size:11px;font-weight:700">Lead</span>
    <span style="background:#FFFBEB;color:#B45309;border:1px solid #FDE68A;border-radius:6px;padding:3px 10px;font-size:11px;font-weight:700">Behind</span>
    <span style="background:#FFF1F2;color:#BE123C;border:1px solid #FECDD3;border-radius:6px;padding:3px 10px;font-size:11px;font-weight:700">Critical</span>
    <span style="background:#F8FAFC;color:#475569;border:1px solid #E2E8F0;border-radius:6px;padding:3px 10px;font-size:11px;font-weight:700">—</span>
    <span style="margin-left:20px;font-size:12px;color:#64748B">+ Hero dot 마커</span>
    <span style="width:14px;height:14px;border-radius:50%;background:#15803D;box-shadow:0 0 8px #15803D77"></span>
    <span style="width:14px;height:14px;border-radius:50%;background:#B45309;box-shadow:0 0 8px #B4530977"></span>
    <span style="width:14px;height:14px;border-radius:50%;background:#BE123C;box-shadow:0 0 8px #BE123C77"></span>
  </div>
</div>

<!-- C-12 베이스라인 마커 — 실제 dashboardSvg.js 와 동일 -->
<div class="preview-card pc">
  <span class="preview-label">C-12</span><span class="preview-name">베이스라인 마커 (회색 페이드 + 시작점 + dashed)</span>
  <div style="max-width:400px;background:#FAFBFC;padding:8px;border-radius:8px">
    <svg viewBox="0 0 320 110" width="100%" height="110" style="background:#fff;border-radius:6px;overflow:visible">
      <defs><linearGradient id="g12" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#CF0652" stop-opacity="0.25"/><stop offset="100%" stop-color="#CF0652" stop-opacity="0.03"/></linearGradient></defs>
      <!-- Pre-baseline (gray) -->
      <path d="M14,55 L50,60 L86,58 L122,62 L158,65" stroke="#64748B" fill="none" stroke-width="2" opacity="0.85" stroke-linecap="round"/>
      ${[14,50,86,122,158].map((x, i) => `<circle cx="${x}" cy="${[55,60,58,62,65][i]}" r="3.5" fill="#fff" stroke="#64748B" stroke-width="2" opacity="0.85"/>`).join('')}
      ${[55,60,58,62,65].map((y, i) => `<text x="${[14,50,86,122,158][i]}" y="${y - 7}" text-anchor="middle" font-size="11" font-weight="700" fill="#64748B">${[34,33,34,33,32][i]}</text>`).join('')}
      <!-- Dashed vertical -->
      <line x1="194" y1="20" x2="194" y2="80" stroke="#64748B" stroke-width="1" stroke-dasharray="3,3"/>
      <!-- Post-baseline (color) -->
      <path d="M194,35 L230,30 L266,28 L302,25" stroke="#CF0652" fill="none" stroke-width="2" stroke-linecap="round"/>
      <path d="M194,35 L230,30 L266,28 L302,25 L302,80 L194,80 Z" fill="url(#g12)"/>
      <!-- Baseline start point (filled black) -->
      <circle cx="194" cy="35" r="4.5" fill="#000" stroke="#CF0652" stroke-width="3"/>
      <!-- Post circles -->
      ${[[230,30],[266,28],[302,25]].map(([x,y]) => `<circle cx="${x}" cy="${y}" r="3.5" fill="#fff" stroke="#CF0652" stroke-width="2"/>`).join('')}
      ${[35,30,28,25].map((y, i) => `<text x="${[194,230,266,302][i]}" y="${y - 7}" text-anchor="middle" font-size="11" font-weight="700" fill="#CF0652">${[44,45,46,47][i]}</text>`).join('')}
      <!-- Baseline label -->
      <text x="199" y="28" text-anchor="start" font-size="9" fill="#64748B">*Baseline 재설정</text>
      <!-- X labels -->
      ${['T1','T2','T3','T4','T5','T6','T7','T8','T9'].map((l,i) => `<text x="${14 + i*36}" y="98" text-anchor="middle" font-size="11" fill="#94A3B8">${l}</text>`).join('')}
    </svg>
  </div>
</div>

<!-- C-13 각주 3종 -->
<div class="preview-card pc">
  <span class="preview-label">C-13</span><span class="preview-name">각주 (Footnote) 3종</span>
  <p style="margin:0 0 4px;font-size:11px;color:#64748B;line-height:1.7">
    * 제외 항목 (항목 A : 그룹1,그룹3 / 항목 B : 그룹2 / 항목 C : 그룹4,그룹5)
  </p>
  <p style="margin:10px 0 0;font-size:12px;color:#1A1A1A;font-weight:500;line-height:1.6">*Baseline 재조정 (4월)</p>
  <p style="margin:2px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6">-항목 A : 신제품 출시에 따라 측정 기준 변경 (Speaker, Spatial, Connectivity 등 USP 관점 추가)</p>
  <p style="margin:2px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6">-항목 B/C : 그룹별 가중치 재분배 (그룹1, 그룹3 확대 / 그룹2, 그룹4 축소)</p>
  <div style="margin-top:14px;padding:8px 12px;background:#F8FAFC;border-left:3px solid #64748B;font-size:11px;color:#475569;line-height:1.6">
    (인라인 사례) 12개월 트렌드 차트의 각 항목 trend-row 끝에 해당 항목 안내 1줄.
  </div>
</div>

<!-- C-14 Composed (Bar+Line) — 트래커 스타일 -->
<div class="preview-card pc">
  <span class="preview-label">C-14</span><span class="preview-name">Composed 차트 (Bar 실적 + Line 목표 — Tracker)</span>
  <div style="background:#fff;border:1px solid #E2E8F0;border-radius:12px;padding:14px;box-shadow:0 1px 3px rgba(0,0,0,0.04);max-width:600px">
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px">
      <span style="width:4px;height:18px;background:#CF0652;border-radius:2px"></span>
      <h3 style="font-size:15px;font-weight:700;color:#111827;margin:0">월별 목표 대비 실적</h3>
    </div>
    <svg viewBox="0 0 540 200" width="100%" height="200" style="background:#fff">
      ${(() => {
        const actuals = [800,950,1050,1150,1200,1280]
        const goals = [1000,1100,1150,1200,1280,1340]
        const labels = ['M1','M2','M3','M4','M5','M6']
        const maxV = 1400, padL = 30, chartW = 510 - padL, padT = 20, padB = 30, chartH = 200 - padT - padB
        let out = ''
        // Grid
        for (let i = 0; i <= 4; i++) {
          const y = padT + (i/4) * chartH
          out += `<line x1="${padL}" y1="${y}" x2="540" y2="${y}" stroke="#F1F5F9" stroke-dasharray="3 3"/>`
          out += `<text x="${padL - 5}" y="${y + 4}" text-anchor="end" font-size="10" fill="#94A3B8">${Math.round(maxV * (1 - i/4) / 100) * 100}</text>`
        }
        // Bars
        actuals.forEach((v, i) => {
          const x = padL + 20 + i * 82
          const h = (v / maxV) * chartH
          out += `<rect x="${x - 16}" y="${padT + chartH - h}" width="32" height="${h}" fill="#CF0652" rx="4"/>`
          out += `<text x="${x}" y="${padT + chartH + 18}" text-anchor="middle" font-size="12" fill="#475569" font-weight="600">${labels[i]}</text>`
        })
        // Line (goals)
        const pts = goals.map((v, i) => ({x: padL + 20 + i*82, y: padT + chartH - (v/maxV)*chartH}))
        const line = pts.map((p, i) => (i?'L':'M') + p.x + ',' + p.y).join(' ')
        out += `<path d="${line}" stroke="#111827" fill="none" stroke-width="2"/>`
        pts.forEach(p => out += `<circle cx="${p.x}" cy="${p.y}" r="4" fill="#fff" stroke="#111827" stroke-width="2"/>`)
        return out
      })()}
    </svg>
    <div style="display:flex;gap:18px;font-size:12px;margin-top:8px;color:#475569;padding-left:30px">
      <span><i style="display:inline-block;width:10px;height:10px;background:#CF0652;border-radius:50%;margin-right:5px"></i>실적</span>
      <span><i style="display:inline-block;width:10px;height:10px;background:#111827;border-radius:50%;margin-right:5px"></i>목표</span>
    </div>
  </div>
</div>

<!-- C-15 Summary Metric 4-Grid — 트래커 SummaryCards 그대로 -->
<div class="preview-card pc">
  <span class="preview-label">C-15</span><span class="preview-name">Summary Metric 4-Grid (Tracker 상단)</span>
  <div style="display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:14px">
    ${[
      ['월 달성률 (4월)','92.5','%','1,234 / 1,334','#ECFDF5','#A7F3D0','#15803D','#15803D',92.5],
      ['연간 진척율','45.3','%','5,678 / 12,540','#FFFBEB','#FDE68A','#B45309','#D97706',45.3],
      ['달성 과제','12','건','달성률 ≥ 80%','#ECFDF5','#A7F3D0','#15803D','#15803D',75],
      ['미달성 과제','4','건','달성률 < 80%','#FFF1F2','#FECDD3','#BE123C','#BE123C',25],
    ].map(([label, val, unit, sub, bg, border, color, bar, rate]) => `
      <div style="background:${bg};border:1px solid ${border};border-radius:12px;padding:14px;position:relative">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
          <span style="font-size:11px;font-weight:700;color:#475569;text-transform:uppercase;letter-spacing:0.4px">${label}</span>
          <span style="width:10px;height:10px;border-radius:50%;background:${color};box-shadow:0 0 6px ${color}55"></span>
        </div>
        <div style="display:flex;align-items:baseline;gap:5px;margin-bottom:6px">
          <span style="font-size:30px;font-weight:900;color:${color};line-height:1;font-variant-numeric:tabular-nums">${val}</span>
          <span style="font-size:14px;color:#94A3B8;font-weight:600">${unit}</span>
        </div>
        <div style="height:4px;background:rgba(15,23,42,0.08);border-radius:3px;overflow:hidden;margin-bottom:6px">
          <div style="width:${rate}%;height:100%;background:${bar}"></div>
        </div>
        <div style="font-size:11px;color:#64748B;font-weight:500">${sub}</div>
      </div>
    `).join('')}
  </div>
</div>

<!-- C-16 KPI 정량 테이블 -->
<div class="preview-card pc">
  <span class="preview-label">C-16</span><span class="preview-name">KPI 정량 테이블</span>
  <div style="border:1px solid #E8EDF2;border-radius:10px;overflow:hidden">
    <table style="width:100%;border-collapse:collapse;font-size:13px">
      <thead>
        <tr style="background:#F8FAFC;border-bottom:2px solid #CF0652">
          <th style="padding:12px 14px;text-align:left;color:#475569;font-weight:700">담당</th>
          <th style="padding:12px 14px;text-align:left;color:#475569;font-weight:700">카테고리</th>
          <th style="padding:12px 14px;text-align:right;color:#475569;font-weight:700">목표</th>
          <th style="padding:12px 14px;text-align:right;color:#475569;font-weight:700">실적</th>
          <th style="padding:12px 14px;text-align:right;color:#475569;font-weight:700">달성률</th>
        </tr>
      </thead>
      <tbody>
        ${[
          ['팀A','시스템',1000,850,85.0,'#15803D'],
          ['팀A','데이터',800,720,90.0,'#15803D'],
          ['팀B','콘텐츠',1200,910,75.8,'#B45309'],
          ['팀B','채널',600,420,70.0,'#B45309'],
          ['팀C','마케팅',500,260,52.0,'#BE123C'],
        ].map((r, i) => `
          <tr style="border-bottom:1px solid #F1F5F9;${i % 2 === 0 ? 'background:#FAFBFC' : ''}">
            <td style="padding:10px 14px;color:#1A1A1A">${r[0]}</td>
            <td style="padding:10px 14px;color:#1A1A1A">${r[1]}</td>
            <td style="padding:10px 14px;text-align:right;font-variant-numeric:tabular-nums">${r[2].toLocaleString()}</td>
            <td style="padding:10px 14px;text-align:right;font-weight:600;font-variant-numeric:tabular-nums">${r[3].toLocaleString()}</td>
            <td style="padding:10px 14px;text-align:right;font-weight:700;color:${r[5]}">${r[4].toFixed(1)}%</td>
          </tr>
        `).join('')}
        <tr style="background:#1E293B;color:#fff;font-weight:700">
          <td style="padding:12px 14px" colspan="2">합계</td>
          <td style="padding:12px 14px;text-align:right;font-variant-numeric:tabular-nums">4,100</td>
          <td style="padding:12px 14px;text-align:right;font-variant-numeric:tabular-nums">3,160</td>
          <td style="padding:12px 14px;text-align:right">77.1%</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<!-- C-17 Qualitative 정성 테이블 -->
<div class="preview-card pc">
  <span class="preview-label">C-17</span><span class="preview-name">Qualitative 정성 테이블 (상태 dot)</span>
  <div style="border:1px solid #E8EDF2;border-radius:10px;overflow:hidden">
    <table style="width:100%;border-collapse:collapse;font-size:13px">
      <thead>
        <tr style="background:#F8FAFC;border-bottom:2px solid #CF0652">
          <th style="padding:12px 14px;text-align:left;color:#475569;font-weight:700">카테고리</th>
          <th style="padding:12px 14px;text-align:left;color:#475569;font-weight:700">목표</th>
          <th style="padding:12px 14px;text-align:left;color:#475569;font-weight:700">상태</th>
          <th style="padding:12px 14px;text-align:left;color:#475569;font-weight:700">담당</th>
        </tr>
      </thead>
      <tbody>
        ${[
          ['시스템','신규 인증 모듈 도입 (Q2)','완료','#15803D','팀A'],
          ['데이터','데이터 파이프라인 자동화','진행','#D97706','팀A'],
          ['콘텐츠','외부 채널 운영 가이드 작성','진행','#D97706','팀B'],
          ['채널','신규 채널 발굴 (3개)','계획','#94A3B8','팀B'],
        ].map((r, i) => `
          <tr style="border-bottom:1px solid #F1F5F9;${i % 2 === 0 ? 'background:#FAFBFC' : ''}">
            <td style="padding:10px 14px;color:#1A1A1A;font-weight:600">${r[0]}</td>
            <td style="padding:10px 14px;line-height:1.5;color:#1A1A1A">${r[1]}</td>
            <td style="padding:10px 14px">
              <span style="display:inline-flex;align-items:center;gap:6px;font-weight:600;color:${r[3]}">
                <span style="width:8px;height:8px;border-radius:50%;background:${r[3]};box-shadow:0 0 4px ${r[3]}88"></span>
                ${r[2]}
              </span>
            </td>
            <td style="padding:10px 14px;color:#1A1A1A">${r[4]}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  </div>
</div>

<!-- C-18 Category Cards -->
<div class="preview-card pc">
  <span class="preview-label">C-18</span><span class="preview-name">Category Cards (좌측 컬러 보더)</span>
  <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px">
    ${[['시스템',85.0,80,'#15803D','Lead'],['데이터',75.8,80,'#B45309','Behind'],['콘텐츠',52.0,70,'#BE123C','Critical']].map(([n, sc, tg, color, slabel]) => `
      <div style="background:#fff;border:1px solid #E2E8F0;border-left:5px solid ${color};
        border-radius:8px;padding:12px 16px;display:flex;justify-content:space-between;align-items:center;cursor:pointer;transition:transform .15s">
        <div>
          <div style="font-size:12px;color:#64748B;margin-bottom:3px;font-weight:600">${n}</div>
          <div style="font-size:22px;font-weight:900;color:#1A1A1A;letter-spacing:-1px">${sc.toFixed(1)}<span style="font-size:13px;color:#94A3B8;margin-left:2px">%</span></div>
        </div>
        <div style="text-align:right">
          <div style="font-size:10px;color:#94A3B8;text-transform:uppercase;letter-spacing:0.5px">목표</div>
          <div style="font-size:15px;font-weight:700;color:${color}">${tg}%</div>
        </div>
      </div>
    `).join('')}
  </div>
</div>

<!-- C-19 파이 차트 — 5색 통일 -->
<div class="preview-card pc">
  <span class="preview-label">C-19</span><span class="preview-name">파이 차트 (5색 카테고리)</span>
  <div style="display:flex;align-items:center;gap:32px;flex-wrap:wrap">
    <svg viewBox="0 0 220 220" width="220" height="220">
      ${(() => {
        const slices = [['cat1', 35, '#CF0652'], ['cat2', 25, '#3B82F6'], ['cat3', 18, '#059669'], ['cat4', 14, '#D97706'], ['cat5', 8, '#7C3AED']]
        const cx = 110, cy = 110, r = 90
        const total = slices.reduce((s, x) => s + x[1], 0)
        let acc = 0, out = ''
        slices.forEach(([name, v, color]) => {
          const a0 = (acc / total) * 2 * Math.PI - Math.PI / 2
          const a1 = ((acc + v) / total) * 2 * Math.PI - Math.PI / 2
          acc += v
          const x0 = cx + r * Math.cos(a0), y0 = cy + r * Math.sin(a0)
          const x1 = cx + r * Math.cos(a1), y1 = cy + r * Math.sin(a1)
          const large = (a1 - a0) > Math.PI ? 1 : 0
          out += `<path d="M${cx},${cy} L${x0.toFixed(1)},${y0.toFixed(1)} A${r},${r} 0 ${large} 1 ${x1.toFixed(1)},${y1.toFixed(1)} Z" fill="${color}" stroke="#fff" stroke-width="2"/>`
          const am = (a0 + a1) / 2
          const lx = cx + (r * 0.65) * Math.cos(am), ly = cy + (r * 0.65) * Math.sin(am)
          if (v >= 8) out += `<text x="${lx.toFixed(1)}" y="${ly.toFixed(1)}" text-anchor="middle" font-size="14" font-weight="700" fill="#fff">${v}%</text>`
        })
        return out
      })()}
    </svg>
    <div style="display:flex;flex-direction:column;gap:10px;font-size:13px">
      ${[['cat1','#CF0652','35%','메인 시리즈'],['cat2','#3B82F6','25%','비교 1'],['cat3','#059669','18%','비교 2'],['cat4','#D97706','14%','비교 3'],['cat5','#7C3AED','8%','비교 4']].map(([n,c,p,d]) => `<div style="display:flex;align-items:center;gap:10px"><span style="width:14px;height:14px;border-radius:4px;background:${c}"></span><span style="width:50px;font-weight:600;color:#1A1A1A">${n}</span><span style="width:50px;color:#475569;font-weight:700">${p}</span><span style="color:#94A3B8;font-size:12px">${d}</span></div>`).join('')}
    </div>
  </div>
</div>

<!-- C-20 4분면 점도표 -->
<div class="preview-card pc">
  <span class="preview-label">C-20</span><span class="preview-name">4분면 점도표 (사분면 배경 색)</span>
  <div style="border:1px solid #E8EDF2;border-radius:10px;overflow:hidden;background:#fff;max-width:480px">
    <svg viewBox="0 0 480 360" width="100%" height="360" style="display:block">
      <rect x="240" y="20" width="200" height="160" fill="#ECFDF5"/>
      <rect x="40" y="180" width="200" height="160" fill="#FFF1F2"/>
      <line x1="40" y1="180" x2="440" y2="180" stroke="#94A3B8" stroke-width="1"/>
      <line x1="240" y1="20" x2="240" y2="340" stroke="#94A3B8" stroke-width="1"/>
      <rect x="40" y="20" width="400" height="320" fill="none" stroke="#CBD5E1"/>
      <text x="430" y="36" text-anchor="end" font-size="11" fill="#15803D" font-weight="700">우수</text>
      <text x="50" y="334" font-size="11" fill="#BE123C" font-weight="700">부진</text>
      ${[['A',80,85,'#CF0652',12],['B',60,40,'#3B82F6',9],['C',45,75,'#059669',7],['D',30,30,'#D97706',14],['E',90,65,'#7C3AED',8],['F',55,60,'#94A3B8',6]].map(([n,x,y,c,r]) => {
        const px = 40 + (x / 100) * 400
        const py = 20 + (1 - y / 100) * 320
        return `<circle cx="${px}" cy="${py}" r="${r}" fill="${c}" opacity="0.7" stroke="#fff" stroke-width="2"/>
                <text x="${px}" y="${py - r - 5}" text-anchor="middle" font-size="12" font-weight="700" fill="#1A1A1A">${n}</text>`
      }).join('')}
      <text x="240" y="356" text-anchor="middle" font-size="12" fill="#475569" font-weight="600">X 지표 (성과)</text>
      <text x="16" y="180" text-anchor="middle" font-size="12" fill="#475569" font-weight="600" transform="rotate(-90, 16, 180)">Y 지표 (효율)</text>
    </svg>
  </div>
</div>

<!-- C-21 제품 카드 V1 (뉴스레터, 트렌드 바) — 실제 emailTemplate V1 디자인 -->
<div class="preview-card pc">
  <span class="preview-label">C-21</span><span class="preview-name">제품 카드 V1 — Newsletter (트렌드 바 우측)</span>
  <table border="0" cellpadding="0" cellspacing="0" width="340" style="border:2px solid #A7F3D0;border-radius:8px;background:#fff">
    <tr><td style="padding:8px 10px 4px">
      <table width="100%" cellpadding="0" cellspacing="0"><tr>
        <td style="vertical-align:middle">
          <span style="font-size:13px;font-weight:900;color:#1A1A1A;letter-spacing:-0.3px">항목 A</span>
        </td>
        <td align="right" style="vertical-align:middle;white-space:nowrap">
          <span style="font-size:12px;font-weight:700;color:#15803D;letter-spacing:-0.5px">B계열 대비 95%</span>
          &nbsp;<span style="display:inline-block;background:#ECFDF5;color:#15803D;border:1px solid #A7F3D0;border-radius:6px;padding:1px 6px;font-size:10px;font-weight:700">Lead</span>
        </td>
      </tr></table>
    </td></tr>
    <tr><td style="padding:2px 10px 8px">
      <table width="100%" cellpadding="0" cellspacing="0"><tr>
        <td style="vertical-align:middle">
          <span style="font-size:24px;font-weight:900;color:#1A1A1A;letter-spacing:-1.5px">88.1</span><span style="font-size:12px;color:#94A3B8">%</span>
          &nbsp;<span style="font-size:12px;font-weight:700;color:#22C55E">▲1.2%p</span>
        </td>
        <td align="right">
          <table cellpadding="0" cellspacing="0"><tr>
            ${[80,82,85,83,87,88,86,90].map((v, i) => {
              const h = Math.round((v-78)/14 * 24) + 4
              const sp = 28 - h
              return `<td style="vertical-align:bottom;text-align:center;padding:0 2px"><table align="center"><tr><td style="font-size:9px;color:#15803D;font-weight:700;padding-bottom:1px">${v}</td></tr>${sp>0?`<tr><td height="${sp}" style="font-size:0;line-height:0">&nbsp;</td></tr>`:''}<tr><td width="8" height="${h}" style="background:#15803D;font-size:0;line-height:0">&nbsp;</td></tr><tr><td style="font-size:8px;color:#94A3B8;padding-top:2px">W${i+1}</td></tr></table></td>`
            }).join('')}
          </tr></table>
        </td>
      </tr></table>
    </td></tr>
  </table>
</div>

<!-- C-22 제품 카드 V2 (뉴스레터, 10그룹 막대) -->
<div class="preview-card pc">
  <span class="preview-label">C-22</span><span class="preview-name">제품 카드 V2 — Newsletter (10그룹 막대)</span>
  <table border="0" cellpadding="0" cellspacing="0" width="500" style="border:2px solid #A7F3D0;border-radius:8px;background:#fff">
    <tr><td style="padding:8px 10px 4px">
      <table width="100%" cellpadding="0" cellspacing="0"><tr>
        <td>
          <span style="font-size:14px;font-weight:900;color:#1A1A1A;letter-spacing:-0.5px">항목 A</span>
          <span style="font-size:18px;font-weight:900;color:#1A1A1A;letter-spacing:-1.5px;margin-left:4px">88.1<span style="font-size:11px;color:#94A3B8">%</span></span>
          <span style="font-size:12px;font-weight:700;color:#22C55E;margin-left:4px">▲1.2%p</span>
        </td>
        <td align="right" style="white-space:nowrap">
          <span style="font-size:12px;font-weight:700;color:#15803D">B계열 대비 95%</span>
          &nbsp;<span style="display:inline-block;background:#ECFDF5;color:#15803D;border:1px solid #A7F3D0;border-radius:6px;padding:1px 6px;font-size:10px;font-weight:700">Lead</span>
        </td>
      </tr></table>
    </td></tr>
    <tr><td style="padding:4px 8px 8px">
      <table width="100%" cellpadding="0" cellspacing="0" style="table-layout:fixed"><tr>
        ${['G1','G2','G3','G4','G5','G6','G7','G8','G9','G10'].map((g, i) => {
          const lg = [88,87,86,85,84,86,88,89,87,85][i]
          const comp = [85,86,84,83,82,85,87,84,86,84][i]
          const hPx = Math.round((lg-78)/14 * 36) + 4
          return `<td style="vertical-align:bottom;text-align:center;padding:0 1px;width:10%">
            <table align="center"><tr><td style="font-size:9px;font-weight:700;color:#15803D;padding-bottom:1px">${lg}</td></tr>
            <tr><td width="14" height="${hPx}" style="background:#15803D;border-radius:2px 2px 0 0;font-size:0;line-height:0">&nbsp;</td></tr>
            <tr><td style="font-size:9px;color:#94A3B8;font-weight:700;padding-top:2px">${g}</td></tr>
            <tr><td style="font-size:9px;color:#94A3B8;padding-top:1px">${comp}</td></tr></table>
          </td>`
        }).join('')}
      </tr></table>
    </td></tr>
  </table>
</div>

<!-- C-23 제품 카드 V3 (뉴스레터, 그룹별 1위 비교) — 실제 V3 디자인 -->
<div class="preview-card pc">
  <span class="preview-label">C-23</span><span class="preview-name">제품 카드 V3 — Newsletter (그룹별 1위 비교)</span>
  <table border="0" cellpadding="0" cellspacing="0" width="500" style="border:2px solid #A7F3D0;border-radius:8px;background:#fff">
    <tr><td style="padding:6px 8px 3px;white-space:nowrap">
      <span style="font-size:14px;font-weight:900;color:#1A1A1A;letter-spacing:-0.5px">항목 A</span>
      <span style="font-size:18px;font-weight:900;color:#1A1A1A;letter-spacing:-1.8px;margin-left:4px">88.1<span style="font-size:11px;color:#94A3B8;letter-spacing:-1.1px">%</span></span>
      &nbsp;<span style="font-size:12px;font-weight:700;color:#22C55E;letter-spacing:-1.2px">▲1.2%p</span>
      <span style="float:right;white-space:nowrap">
        <span style="font-size:13px;font-weight:700;color:#15803D;letter-spacing:-1.3px">B계열 95%</span>
        &nbsp;<span style="display:inline-block;background:#ECFDF5;color:#15803D;border:1px solid #A7F3D0;border-radius:5px;padding:0 4px;font-size:10px;font-weight:700;line-height:15px;vertical-align:middle">Lead</span>
      </span>
    </td></tr>
    <tr><td style="padding:2px 6px 8px">
      <table width="100%" cellpadding="0" cellspacing="0" style="table-layout:fixed"><tr>
        ${['G1','G2','G3','G4','G5','G6','G7','G8','G9','G10'].map((g, i) => {
          const sc = [88,87,86,85,84,86,88,89,87,85][i]
          const comp = [82,85,87,88,90,86,84,85,86,89][i]
          const ratio = Math.round(sc/comp*100)
          const color = ratio >= 100 ? '#15803D' : ratio >= 80 ? '#E8910C' : '#BE123C'
          const hPx = Math.round((sc-78)/14 * 28) + 4
          const spacer = 32 - hPx
          return `<td style="vertical-align:bottom;text-align:center;padding:0 1px;width:10%">
            <table align="center" style="width:100%">
              ${spacer > 0 ? `<tr><td height="${spacer}" style="font-size:0;line-height:0">&nbsp;</td></tr>` : ''}
              <tr><td height="${hPx}" style="font-size:0"><table cellpadding="0" cellspacing="0" align="center"><tr><td width="16" height="${hPx}" style="background:${color};border-radius:2px 2px 0 0;font-size:0;line-height:0">&nbsp;</td></tr></table></td></tr>
              <tr><td style="font-size:10px;font-weight:700;color:${color};text-align:center;padding-top:1px">${sc}</td></tr>
              <tr><td style="font-size:8px;font-weight:700;color:${color};text-align:center;line-height:1.1;letter-spacing:-0.3px">${g}</td></tr>
              <tr><td style="font-size:9px;color:#94A3B8;text-align:center;white-space:nowrap;letter-spacing:-0.5px">SS<br/>${ratio}%</td></tr>
            </table>
          </td>`
        }).join('')}
      </tr></table>
    </td></tr>
  </table>
</div>

</div>
`

// ─── Markdown 문서 렌더 헬퍼 ────────────────────────────────────────────────
// /admin/plan, /admin/infra, /admin/cloud-run-job, /admin/bigquery-schema 공통.
// marked + mermaid CDN로 클라이언트 렌더 (iOS Safari 호환).
function renderMarkdownPage(res, { mdFile, title, downloadHref, downloadName, livePreview }) {
  let md = ''
  try {
    md = readFileSync(join(PROJECT_ROOT, 'docs', mdFile), 'utf-8')
  } catch {
    return res.status(404).send(`${mdFile} 파일을 찾을 수 없습니다.`)
  }
  res.set('Content-Type', 'text/html; charset=utf-8')
  const mdJson = JSON.stringify(md)
  const titleEsc = String(title).replace(/[<>"']/g, c => ({ '<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]))
  res.send(`<!DOCTYPE html><html lang="ko"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${titleEsc}</title>
<style>
*{box-sizing:border-box}
body{margin:0;background:#0F172A;color:#E2E8F0;font-family:'LG Smart','Arial Narrow',Arial,sans-serif;padding:24px 32px;line-height:1.65}
.topbar{display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;flex-wrap:wrap;gap:12px}
.back{color:#CF0652;text-decoration:none;font-size:13px}
.actions{display:flex;gap:10px}
.btn{background:#1E293B;border:1px solid #334155;border-radius:8px;padding:8px 16px;font-size:12px;font-weight:600;color:#E2E8F0;text-decoration:none;cursor:pointer;font-family:inherit}
.btn:hover{background:#334155}
.content{max-width:1040px;margin:0 auto;background:#0B1220;border:1px solid #1E293B;border-radius:12px;padding:32px 40px}
.content h1{font-size:26px;color:#F8FAFC;margin:0 0 12px;padding-bottom:10px;border-bottom:2px solid #CF0652}
.content h2{font-size:20px;color:#F8FAFC;margin:28px 0 12px;padding-bottom:6px;border-bottom:1px solid #334155}
.content h3{font-size:16px;color:#F8FAFC;margin:22px 0 10px}
.content h4{font-size:14px;color:#CBD5E1;margin:18px 0 8px}
.content p{margin:10px 0;color:#CBD5E1;font-size:14px}
.content ul,.content ol{margin:10px 0 10px 22px;color:#CBD5E1;font-size:14px}
.content li{margin:4px 0}
.content code{background:#1E293B;color:#F8C4D7;padding:2px 6px;border-radius:4px;font-family:'Consolas','Courier New',monospace;font-size:12px}
.content pre{background:#1E293B;border:1px solid #334155;border-radius:8px;padding:14px 16px;overflow:auto;font-family:'Consolas','Courier New',monospace;font-size:12px;line-height:1.5}
.content pre code{background:none;padding:0;color:#E2E8F0}
.content table{border-collapse:collapse;width:100%;margin:14px 0;font-size:13px}
.content th,.content td{border:1px solid #334155;padding:8px 12px;text-align:left;vertical-align:top;color:#CBD5E1}
.content th{background:#1E293B;color:#F8FAFC;font-weight:700}
.content tr:nth-child(even) td{background:#0F172A}
.content blockquote{border-left:3px solid #CF0652;margin:14px 0;padding:6px 16px;background:#1E293B;color:#94A3B8;font-size:13px;border-radius:0 6px 6px 0}
.content a{color:#F472B6;text-decoration:none}
.content a:hover{text-decoration:underline}
.mermaid{background:#fff;border-radius:8px;padding:16px;margin:14px 0;overflow:auto;text-align:center}
.content hr{border:none;border-top:1px solid #334155;margin:22px 0}
</style></head><body>
<div class="topbar">
  <a class="back" href="/admin/">← 관리자</a>
  <div class="actions">
    <a class="btn" href="${downloadHref}" download="${downloadName}">MD 다운로드</a>
    <button class="btn" onclick="window.print()">인쇄/PDF 저장</button>
  </div>
</div>
<div id="root" class="content">로딩 중…</div>
<script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
<script type="module">
  import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs'
  mermaid.initialize({ startOnLoad: false, theme: 'dark', themeVariables: { darkMode: true, background: '#ffffff', primaryColor: '#CF0652', primaryTextColor: '#1A1A1A' } })
  const md = ${mdJson}
  marked.use({ gfm: true, breaks: false })
  const renderer = new marked.Renderer()
  const origCode = renderer.code.bind(renderer)
  renderer.code = function(code, infostring) {
    if (infostring && /^mermaid/i.test(infostring)) return '<div class="mermaid">' + code + '</div>'
    return origCode(code, infostring)
  }
  document.getElementById('root').innerHTML = marked.parse(md, { renderer }) + ${JSON.stringify(livePreview || '')}
  await mermaid.run({ querySelector: '.mermaid' })
</script>
</body></html>`)
}

function renderMarkdownDownload(res, mdFile) {
  try {
    const md = readFileSync(join(PROJECT_ROOT, 'docs', mdFile), 'utf-8')
    res.set('Content-Type', 'text/markdown; charset=utf-8')
    res.set('Content-Disposition', `attachment; filename="${mdFile}"`)
    res.send(md)
  } catch { res.status(404).send('not found') }
}

export const adminPagesRouter = Router()

// ─── Admin Dashboard ─────────────────────────────────────────────────────────
adminPagesRouter.get('/admin/', (req, res) => {
  res.set('Content-Type', 'text/html; charset=utf-8')
  res.send(`<!DOCTYPE html><html lang="ko"><head><meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>GEO Newsletter Admin</title>
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{min-height:100vh;background:#0F172A;font-family:'LG Smart','Arial Narrow',Arial,sans-serif;color:#E2E8F0;padding:40px 24px}
.wrap{max-width:1100px;margin:0 auto}
.header{text-align:center;margin-bottom:32px}
.logo{font-size:11px;font-weight:700;letter-spacing:3px;color:#64748B;text-transform:uppercase;margin-bottom:14px}
h1{font-size:24px;font-weight:700;color:#F8FAFC}
.columns{display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-bottom:32px}
@media (max-width:780px){.columns{grid-template-columns:1fr}}
.col{display:flex;flex-direction:column;gap:12px}
a.card{display:block;background:#1E293B;border:1px solid #334155;border-radius:12px;padding:18px 20px;text-decoration:none;text-align:left;transition:border-color .2s,transform .15s}
a.card:hover{border-color:#CF0652;transform:translateY(-2px)}
.card-title{font-size:15px;font-weight:700;color:#F8FAFC;margin-bottom:3px}
.card-desc{font-size:12px;color:#94A3B8;line-height:1.5}
.section-title{font-size:12px;font-weight:700;color:#64748B;text-transform:uppercase;letter-spacing:2px;margin:6px 0 4px}
.section-title:not(:first-child){margin-top:18px}
.footer{text-align:center}
.logout{background:none;border:1px solid #334155;color:#64748B;padding:10px 24px;border-radius:8px;font-size:13px;cursor:pointer;font-family:inherit}
.logout:hover{border-color:#64748B;color:#94A3B8}
</style></head><body>
<div class="wrap">
  <div class="header">
    <div class="logo">GEO Newsletter</div>
    <h1>Admin Dashboard</h1>
  </div>
  <div class="columns">
    <div class="col">
      <div class="section-title">뉴스레터 관리</div>
      <a class="card" href="/admin/newsletter">
        <div class="card-title">Newsletter Generator</div>
        <div class="card-desc">GEO 모니터링 리포트 생성, 편집 및 발송</div>
      </a>
      <div class="section-title">대시보드 관리</div>
      <a class="card" href="/admin/dashboard">
        <div class="card-title">Dashboard Viewer</div>
        <div class="card-desc">Visibility · Citation · Readability · Tracker 통합 뷰어 — 여기서 통합 대시보드 게시</div>
      </a>
      <a class="card" href="/admin/visibility">
        <div class="card-title">Visibility Editor</div>
        <div class="card-desc">GEO Visibility KPI 편집 — Visibility 단독 게시</div>
      </a>
      <a class="card" href="/admin/citation">
        <div class="card-title">Citation Editor</div>
        <div class="card-desc">Citation 분석 편집 — Citation 단독 게시</div>
      </a>
      <a class="card" href="/admin/readability" style="opacity:0.5;pointer-events:none">
        <div class="card-title">Readability Editor</div>
        <div class="card-desc">추후 고도화 예정</div>
      </a>
      <a class="card" href="/admin/progress-tracker-v2/">
        <div class="card-title">Progress Tracker</div>
        <div class="card-desc">GEO 과제 진행 현황 대시보드 — 카테고리별 정량/정성 KPI</div>
      </a>

      <div class="section-title">리포트</div>
      <a class="card" href="/admin/monthly-report">
        <div class="card-title">Monthly Report</div>
        <div class="card-desc">월간 보고용 단순 표 형태 리포트 — 색상/그래프 없음</div>
      </a>
      <a class="card" href="/admin/weekly-report">
        <div class="card-title">Weekly Report</div>
        <div class="card-desc">주간 보고용 표 리포트 — 국가별 제품별 전주대비 포함</div>
      </a>
    </div>
    <div class="col">
      <div class="section-title">공통 인프라</div>
      <a class="card" href="/admin/dashboard#promptlist">
        <div class="card-title">Prompt List</div>
        <div class="card-desc">GEO KPI 측정에 사용되는 프롬프트 목록 확인</div>
      </a>
      <a class="card" href="/admin/ip-manager">
        <div class="card-title">IP Access Manager</div>
        <div class="card-desc">게시된 리포트 열람 허용 IP 대역 관리</div>
      </a>
      <a class="card" href="/admin/ai-settings">
        <div class="card-title">AI Settings</div>
        <div class="card-desc">AI 인사이트 생성 프롬프트 규칙 · 모델 설정</div>
      </a>
      <a class="card" href="/admin/observability">
        <div class="card-title">Observability</div>
        <div class="card-desc">AI 인사이트 호출 토큰·비용·지연·실패 추적 (insight_runs 시각화)</div>
      </a>
      <a class="card" href="/admin/archives">
        <div class="card-title">Archives (학습 데이터)</div>
        <div class="card-desc">완성본 아카이빙 · AI 인사이트 생성 시 문체 학습 데이터로 활용</div>
      </a>
      <a class="card" href="/admin/de-prompts">
        <div class="card-title">독일 프롬프트 예시</div>
        <div class="card-desc">DE 국가 카테고리별·제품별·토픽별 대표 프롬프트 각 1개</div>
      </a>

      <div class="section-title">DB구축</div>
      <a class="card" href="/admin/plan">
        <div class="card-title">시스템 기획서</div>
        <div class="card-desc">현행 아키텍처 · 코드/보안 리뷰 · 기능 로드맵</div>
      </a>
      <a class="card" href="/admin/infra">
        <div class="card-title">GCP 인프라 구성도</div>
        <div class="card-desc">GCP 서비스·컴퓨트·데이터·IaC·CI/CD·비용·도입 체크리스트</div>
      </a>
      <a class="card" href="/admin/data-prd">
        <div class="card-title">Data Connection PRD</div>
        <div class="card-desc">dashboard-raw-data 셋업 PRD — GCP 프로젝트·서비스 계정·BigQuery 단계별 가이드 (이미 완료)</div>
      </a>
      <a class="card" href="/admin/cloud-run-job">
        <div class="card-title">Cloud Run Job 배포 절차</div>
        <div class="card-desc">PRD 다음 4단계 — Cloud Run Job 전환 + Scheduler + reader 키 + 본 시스템 연결</div>
      </a>
      <a class="card" href="/admin/bigquery-schema">
        <div class="card-title">BigQuery Schema 계약</div>
        <div class="card-desc">두 레포(writer·reader) 간 단일 결합 지점 — 테이블·시스템 컬럼 규약</div>
      </a>

      <div class="section-title">스킬</div>
      <a class="card" href="/admin/prompting-skills">
        <div class="card-title">Prompting Skills</div>
        <div class="card-desc">본 프로젝트를 만들 때 사용한 프롬프팅 패턴 — 대시보드 기능별 실전 사례</div>
      </a>
    </div>
  </div>
  <div class="footer">
    <button class="logout" onclick="fetch('/api/auth/logout',{method:'POST'}).then(function(){location.href='/admin/login'})">로그아웃</button>
  </div>
</div></body></html>`)
})

// ─── 마크다운 문서 페이지 (헬퍼 사용) ──────────────────────────────────────
// /admin/plan          — 시스템 기획서 (ADMIN_PLAN.md)
// /admin/infra         — GCP 인프라 (GCP_INFRA.md)
// /admin/cloud-run-job — Cloud Run Job 배포 절차 (CLOUD_RUN_JOB.md, dashboard-raw-data 동기본)
// /admin/bigquery-schema — BigQuery 스키마 계약 (BIGQUERY_SCHEMA.md, 동일)
adminPagesRouter.get('/admin/plan', (req, res) =>
  renderMarkdownPage(res, { mdFile: 'ADMIN_PLAN.md', title: '시스템 기획서', downloadHref: '/admin/plan.md', downloadName: 'ADMIN_PLAN.md' }))
adminPagesRouter.get('/admin/plan.md', (req, res) => renderMarkdownDownload(res, 'ADMIN_PLAN.md'))

adminPagesRouter.get('/admin/infra', (req, res) =>
  renderMarkdownPage(res, { mdFile: 'GCP_INFRA.md', title: 'GCP 인프라 구성도', downloadHref: '/admin/infra.md', downloadName: 'GCP_INFRA.md' }))
adminPagesRouter.get('/admin/infra.md', (req, res) => renderMarkdownDownload(res, 'GCP_INFRA.md'))

adminPagesRouter.get('/admin/cloud-run-job', (req, res) =>
  renderMarkdownPage(res, { mdFile: 'CLOUD_RUN_JOB.md', title: 'Cloud Run Job 배포 절차', downloadHref: '/admin/cloud-run-job.md', downloadName: 'CLOUD_RUN_JOB.md' }))
adminPagesRouter.get('/admin/cloud-run-job.md', (req, res) => renderMarkdownDownload(res, 'CLOUD_RUN_JOB.md'))

adminPagesRouter.get('/admin/bigquery-schema', (req, res) =>
  renderMarkdownPage(res, { mdFile: 'BIGQUERY_SCHEMA.md', title: 'BigQuery Schema 계약', downloadHref: '/admin/bigquery-schema.md', downloadName: 'BIGQUERY_SCHEMA.md' }))
adminPagesRouter.get('/admin/bigquery-schema.md', (req, res) => renderMarkdownDownload(res, 'BIGQUERY_SCHEMA.md'))

adminPagesRouter.get('/admin/prompting-skills', (req, res) =>
  renderMarkdownPage(res, { mdFile: 'PROMPTING_SKILLS.md', title: 'Prompting Skills — 대시보드 기능별 사례', downloadHref: '/admin/prompting-skills.md', downloadName: 'PROMPTING_SKILLS.md', livePreview: PROMPTING_SKILLS_PREVIEW }))
adminPagesRouter.get('/admin/prompting-skills.md', (req, res) => renderMarkdownDownload(res, 'PROMPTING_SKILLS.md'))

// dashboard-raw-data 셋업 PRD (자체 완결 HTML — 마크다운 변환 불필요)
adminPagesRouter.get('/admin/data-prd', (req, res) => {
  try {
    let html = readFileSync(join(PROJECT_ROOT, 'docs', 'prd-data-connection.html'), 'utf-8')
    // 다운로드 버튼 주입 (PRD 우측 상단 fixed, 기존 .back-top 버튼과 비슷한 스타일)
    const downloadBtn = `<a href="/admin/data-prd.html" download="prd-data-connection.html" style="position:fixed;top:1rem;right:1rem;z-index:1001;background:#0F1B2D;color:#fff;padding:.55rem 1rem;border-radius:8px;font-size:.78rem;text-decoration:none;box-shadow:0 2px 8px rgba(0,0,0,.15);font-family:'Noto Sans KR',sans-serif;font-weight:600">⬇ HTML 다운로드</a>`
    html = html.replace('<body>', '<body>\n' + downloadBtn)
    res.set('Content-Type', 'text/html; charset=utf-8')
    res.send(html)
  } catch {
    res.status(404).send('prd-data-connection.html 파일을 찾을 수 없습니다.')
  }
})

// PRD 원문 HTML 다운로드
adminPagesRouter.get('/admin/data-prd.html', (req, res) => {
  try {
    const html = readFileSync(join(PROJECT_ROOT, 'docs', 'prd-data-connection.html'), 'utf-8')
    res.set('Content-Type', 'text/html; charset=utf-8')
    res.set('Content-Disposition', 'attachment; filename="prd-data-connection.html"')
    res.send(html)
  } catch { res.status(404).send('not found') }
})

// ─── 독일(DE) 프롬프트 예시 페이지 ────────────────────────────────────────────
function isNonBrandedPrompt(p) {
  const v = String(p.branded || '').trim().toLowerCase().replace(/[\s\-_]/g, '')
  // 논브랜드 표현
  const NB = new Set(['nb', 'nonbrand', 'nonbranded', 'non', '논브랜드', '비브랜드', 'no', 'n', 'false', '0'])
  return NB.has(v)
}

function getDePromptCombos() {
  const vis = readModeSyncData('visibility') || {}
  const dash = readModeSyncData('dashboard') || {}
  const prompts = vis.appendixPrompts || dash.appendixPrompts || []
  const source = vis.appendixPrompts ? 'visibility' : (dash.appendixPrompts ? 'dashboard' : 'none')
  const dePrompts = prompts
    .filter(p => String(p.country || '').toUpperCase() === 'DE')
    .filter(isNonBrandedPrompt)
  // (category, topic, cej) 조합당 첫 1건
  const seen = new Set()
  const combos = []
  for (const p of dePrompts) {
    const key = `${p.category || ''}||${p.topic || ''}||${p.cej || ''}`
    if (seen.has(key)) continue
    seen.add(key)
    combos.push(p)
  }
  combos.sort((a, b) => {
    return String(a.category || '').localeCompare(String(b.category || ''))
      || String(a.topic || '').localeCompare(String(b.topic || ''))
      || String(a.cej || '').localeCompare(String(b.cej || ''))
  })
  return { combos, totalPrompts: prompts.length, deCount: dePrompts.length, source }
}

adminPagesRouter.get('/admin/de-prompts', (req, res) => {
  const { combos, totalPrompts, deCount, source } = getDePromptCombos()
  function esc(s) {
    return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
  }
  const rows = combos.map((p, i) => `
    <tr>
      <td class="num">${i + 1}</td>
      <td>${esc(p.category)}</td>
      <td>${esc(p.topic)}</td>
      <td>${esc(p.cej)}</td>
      <td class="prompt">${esc(p.prompt)}</td>
      <td class="meta">${esc(p.division)}</td>
      <td class="meta">${esc(p.launched)}</td>
      <td class="meta">${esc(p.branded)}</td>
    </tr>`).join('')

  res.set('Content-Type', 'text/html; charset=utf-8')
  res.send(`<!DOCTYPE html><html lang="ko"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>독일 프롬프트 예시</title>
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{min-height:100vh;background:#0F172A;color:#E2E8F0;font-family:'LG Smart','Arial Narrow',Arial,sans-serif;padding:28px 32px;line-height:1.5}
h1{font-size:22px;color:#F8FAFC;margin-bottom:4px}
.sub{font-size:13px;color:#64748B;margin-bottom:18px}
.back{color:#CF0652;text-decoration:none;font-size:13px;margin-right:14px}
.bar{display:flex;align-items:center;gap:14px;margin-bottom:16px;flex-wrap:wrap}
.info{font-size:12px;color:#94A3B8;background:#1E293B;border:1px solid #334155;border-radius:8px;padding:8px 14px}
.btn{background:#CF0652;color:#fff;border:none;border-radius:8px;padding:9px 18px;font-size:13px;font-weight:700;cursor:pointer;font-family:inherit;text-decoration:none;display:inline-block}
.btn:hover{opacity:.9}
.wrap{background:#1E293B;border:1px solid #334155;border-radius:12px;overflow:auto}
table{width:100%;border-collapse:collapse;font-size:12px}
thead th{background:#0F172A;color:#94A3B8;font-weight:700;padding:10px 12px;text-align:left;border-bottom:1px solid #334155;position:sticky;top:0;white-space:nowrap}
tbody td{padding:10px 12px;border-bottom:1px solid #1E293B;color:#E2E8F0;vertical-align:top}
tbody tr:nth-child(even){background:#182237}
.num{color:#64748B;font-weight:600;width:40px}
.prompt{min-width:380px;white-space:pre-wrap;word-break:break-word;color:#F8FAFC}
.meta{color:#94A3B8;font-size:11px}
.empty{padding:40px;text-align:center;color:#64748B}
.syncform{background:#1E293B;border:1px solid #334155;border-radius:10px;padding:14px 18px;margin-bottom:18px;display:flex;flex-wrap:wrap;gap:10px;align-items:center}
.syncform label{display:flex;flex-direction:column;font-size:11px;color:#94A3B8;gap:4px;flex:1;min-width:180px}
.syncform input{background:#0F172A;border:1px solid #334155;border-radius:6px;padding:8px 10px;color:#E2E8F0;font-size:13px;font-family:inherit}
.syncform .hint{font-size:11px;color:#64748B;flex-basis:100%}
</style></head><body>
<a class="back" href="/admin/">← 관리자</a>
<h1>독일(DE) 프롬프트 예시</h1>
<p class="sub">appendixPrompts 소스 · DE + 논브랜드 필터 후 (카테고리 × 토픽 × CEJ) 조합마다 대표 프롬프트 1개</p>
<div class="bar">
  <div class="info">소스: <strong>${esc(source)}</strong> · 전체: <strong>${totalPrompts}</strong>건 · DE: <strong>${deCount}</strong>건 · 조합: <strong>${combos.length}</strong>건</div>
  <a class="btn" href="/admin/de-prompts.xlsx" download>엑셀 다운로드</a>
  <a class="btn" href="/admin/de-prompts.csv" download>CSV 다운로드</a>
</div>
<form class="syncform" method="POST" action="/admin/de-prompts/sync-sheet">
  <label>Google Sheet URL 또는 ID <input type="text" name="sheet" placeholder="https://docs.google.com/spreadsheets/d/..." required></label>
  <label>탭 이름 <input type="text" name="tab" value="Appendix.Prompt List"></label>
  <button class="btn" type="submit">시트에서 동기화</button>
  <span class="hint">동기화하면 visibility sync-data의 appendixPrompts가 시트 최신값으로 교체됩니다.</span>
</form>
${combos.length === 0
  ? `<div class="wrap"><p class="empty">DE 프롬프트가 없습니다. visibility/dashboard 동기화 후 재시도하세요.</p></div>`
  : `<div class="wrap"><table>
    <thead><tr>
      <th>#</th><th>제품(Category)</th><th>토픽(Topic)</th><th>CEJ</th><th>프롬프트</th>
      <th>Division</th><th>Launched</th><th>Branded</th>
    </tr></thead>
    <tbody>${rows}</tbody>
  </table></div>`}
</body></html>`)
})

// CSV 다운로드 (UTF-8 BOM, 엑셀 한글 호환)
adminPagesRouter.get('/admin/de-prompts.csv', (req, res) => {
  const { combos } = getDePromptCombos()
  function csvCell(v) {
    const s = String(v ?? '')
    if (/[",\n\r]/.test(s)) return `"${s.replace(/"/g, '""')}"`
    return s
  }
  const header = ['#', 'Category', 'Topic', 'CEJ', 'Prompt', 'Division', 'Launched', 'Branded']
  const lines = [header.join(',')]
  combos.forEach((p, i) => {
    lines.push([i + 1, p.category, p.topic, p.cej, p.prompt, p.division, p.launched, p.branded].map(csvCell).join(','))
  })
  const body = '\uFEFF' + lines.join('\r\n')
  res.set('Content-Type', 'text/csv; charset=utf-8')
  res.set('Content-Disposition', 'attachment; filename="de-prompts.csv"')
  res.send(body)
})

function extractSheetId(raw) {
  const s = String(raw || '').trim()
  const m = s.match(/\/spreadsheets\/d\/([a-zA-Z0-9_-]+)/)
  if (m) return m[1]
  // 공백/기호 없는 순수 ID로 간주
  if (/^[a-zA-Z0-9_-]{20,}$/.test(s)) return s
  return null
}

adminPagesRouter.use('/admin/de-prompts/sync-sheet', express.urlencoded({ extended: false, limit: '1mb' }))
adminPagesRouter.post('/admin/de-prompts/sync-sheet', async (req, res) => {
  const sheetId = extractSheetId(req.body?.sheet)
  const tab = String(req.body?.tab || 'Appendix.Prompt List').trim() || 'Appendix.Prompt List'
  if (!sheetId) return res.status(400).send('유효한 Google Sheet URL/ID가 아닙니다. <a href="/admin/de-prompts">뒤로</a>')
  try {
    const rid = `${Date.now()}_${Math.random().toString(36).slice(2, 8)}`
    const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?sheet=${encodeURIComponent(tab)}&tqx=out:csv;reqId:${rid}&headers=1`
    const gRes = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } })
    if (!gRes.ok) return res.status(gRes.status).send(`Google Sheets 응답 실패: ${gRes.status}. 시트가 공개 보기 허용인지 확인하세요. <a href="/admin/de-prompts">뒤로</a>`)
    const csv = await gRes.text()
    const wb = XLSX.read(csv, { type: 'string' })
    const ws = wb.Sheets[wb.SheetNames[0]]
    const rows = XLSX.utils.sheet_to_json(ws, { header: 1, defval: '' })
    const parsed = parseAppendix(rows)
    const appendixPrompts = parsed.appendixPrompts || []
    if (!appendixPrompts.length) return res.status(422).send(`파싱 결과가 비어있습니다. 탭명/컬럼 헤더(country, prompts)를 확인하세요. <a href="/admin/de-prompts">뒤로</a>`)
    // visibility sync-data에 병합 저장
    const current = readModeSyncData('visibility') || {}
    current.appendixPrompts = appendixPrompts
    current.savedAt = Date.now()
    writeModeSyncData('visibility', current)
    console.log(`[DE-PROMPTS] sheet sync: ${appendixPrompts.length}건 저장 (sheet=${sheetId}, tab=${tab})`)
    res.redirect('/admin/de-prompts')
  } catch (err) {
    console.error('[DE-PROMPTS] sync error:', err.message)
    res.status(500).send(`동기화 실패: ${err.message}. <a href="/admin/de-prompts">뒤로</a>`)
  }
})

// 엑셀(.xlsx) 다운로드
adminPagesRouter.get('/admin/de-prompts.xlsx', async (req, res) => {
  const { combos } = getDePromptCombos()
  const data = [
    ['#', 'Category', 'Topic', 'CEJ', 'Prompt', 'Division', 'Launched', 'Branded'],
    ...combos.map((p, i) => [i + 1, p.category || '', p.topic || '', p.cej || '', p.prompt || '', p.division || '', p.launched || '', p.branded || '']),
  ]
  const ws = XLSX.utils.aoa_to_sheet(data)
  // 컬럼 너비
  ws['!cols'] = [{ wch: 4 }, { wch: 18 }, { wch: 22 }, { wch: 14 }, { wch: 80 }, { wch: 10 }, { wch: 10 }, { wch: 10 }]
  // 헤더 스타일
  const headerStyle = { font: { bold: true, color: { rgb: 'FFFFFF' } }, fill: { fgColor: { rgb: 'CF0652' } }, alignment: { vertical: 'center' } }
  for (let c = 0; c < data[0].length; c++) {
    const addr = XLSX.utils.encode_cell({ r: 0, c })
    if (ws[addr]) ws[addr].s = headerStyle
  }
  const wb = XLSX.utils.book_new()
  XLSX.utils.book_append_sheet(wb, ws, 'DE Prompts')
  const buf = XLSX.write(wb, { type: 'buffer', bookType: 'xlsx' })
  res.set('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
  res.set('Content-Disposition', 'attachment; filename="de-prompts.xlsx"')
  res.send(buf)
})

// ─── IP Access Manager UI ────────────────────────────────────────────────────
adminPagesRouter.get('/admin/ip-manager', (req, res) => {
  res.set('Content-Type', 'text/html; charset=utf-8')
  res.send(`<!DOCTYPE html><html lang="ko"><head><meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>IP Access Manager</title>
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{background:#0F172A;font-family:'LG Smart','Arial Narrow',Arial,sans-serif;color:#E2E8F0;padding:32px 24px}
.container{max-width:720px;margin:0 auto}
.top{display:flex;align-items:center;justify-content:space-between;margin-bottom:20px}
.back{color:#64748B;text-decoration:none;font-size:13px}.back:hover{color:#94A3B8}
.logout{background:none;border:1px solid #334155;color:#64748B;padding:6px 16px;border-radius:6px;font-size:12px;cursor:pointer}.logout:hover{border-color:#64748B;color:#94A3B8}
h1{font-size:22px;font-weight:700;color:#F8FAFC;margin-bottom:6px}
.desc{font-size:13px;color:#64748B;margin-bottom:24px}
.info{background:#1E3A5F;border:1px solid #2563EB;border-radius:8px;padding:12px 16px;font-size:12px;color:#93C5FD;margin-bottom:24px;line-height:1.7}
.info strong{color:#BFDBFE}
.section{background:#1E293B;border:1px solid #334155;border-radius:12px;padding:24px;margin-bottom:20px}
.section h2{font-size:15px;font-weight:700;margin-bottom:16px;color:#F8FAFC}
.form-row{display:flex;gap:10px;margin-bottom:12px}
.form-row input{flex:1;padding:10px 12px;border-radius:8px;border:1px solid #334155;background:#0F172A;color:#E2E8F0;font-size:13px;outline:none}
.form-row input:focus{border-color:#CF0652}
.add-btn{padding:10px 20px;border:none;border-radius:8px;background:#CF0652;color:#fff;font-weight:700;font-size:13px;cursor:pointer;white-space:nowrap}
.add-btn:hover{opacity:.9}
table{width:100%;border-collapse:collapse;font-size:13px}
th{text-align:left;color:#64748B;font-weight:600;padding:8px 12px;border-bottom:1px solid #334155}
td{padding:10px 12px;border-bottom:1px solid rgba(51,65,85,.5)}
code{background:#0F172A;padding:2px 8px;border-radius:4px;font-size:12px;color:#7DD3FC}
.empty{text-align:center;padding:24px;color:#64748B;font-size:13px}
.del-btn{background:none;border:1px solid #EF4444;color:#EF4444;padding:4px 12px;border-radius:6px;font-size:12px;cursor:pointer}
.del-btn:hover{background:#EF4444;color:#fff}
.status{font-size:12px;margin-top:8px;min-height:18px}.status.ok{color:#4ADE80}.status.err{color:#F87171}
</style></head><body>
<div class="container">
  <div class="top">
    <a class="back" href="/admin/">&#8592; Admin Dashboard</a>
    <button class="logout" onclick="fetch('/api/auth/logout',{method:'POST'}).then(function(){location.href='/admin/login'})">로그아웃</button>
  </div>
  <h1>IP Access Manager</h1>
  <p class="desc">게시된 리포트(/p/*)에 접근할 수 있는 IP 대역을 관리합니다.</p>
  <div class="info">
    허용 목록이 비어있으면 <strong>모든 IP에서 접근 가능</strong>합니다.<br>
    하나 이상 등록하면 등록된 IP 대역에서만 접근할 수 있습니다.<br>
    현재 접속 IP: <strong id="myip">확인 중...</strong>
  </div>
  <div class="section">
    <h2>IP 대역 추가</h2>
    <div class="form-row">
      <input type="text" id="cidr" placeholder="CIDR (예: 192.168.0.0/16)">
      <input type="text" id="country" placeholder="국가 (예: KR)" style="max-width:100px">
      <input type="text" id="label" placeholder="설명 (예: 사무실)" style="max-width:160px">
      <button class="add-btn" onclick="addEntry()">추가</button>
    </div>
    <p class="status" id="status"></p>
  </div>
  <div class="section">
    <h2>허용 목록</h2>
    <div id="list"></div>
  </div>
</div>
<script>
var list=[];
async function load(){
  var r=await fetch('/api/ip-allowlist');
  if(r.status===401){location.href='/admin/login';return}
  list=await r.json();render();
  fetch('/api/my-ip').then(function(r){return r.json()}).then(function(j){document.getElementById('myip').textContent=j.ip});
}
function esc(s){var d=document.createElement('div');d.textContent=s;return d.innerHTML}
function render(){
  var el=document.getElementById('list');
  if(list.length===0){el.innerHTML='<p class="empty">등록된 IP 대역이 없습니다. 모든 IP에서 접근 가능합니다.</p>';return}
  var h='<table><thead><tr><th>CIDR</th><th>국가</th><th>설명</th><th>등록일</th><th></th></tr></thead><tbody>';
  for(var i=0;i<list.length;i++){var e=list[i];var d=new Date(e.createdAt).toLocaleDateString('ko-KR');
    h+='<tr><td><code>'+esc(e.cidr)+'</code></td><td>'+esc(e.country||'-')+'</td><td>'+esc(e.label||'-')+'</td><td>'+d+'</td><td><button class="del-btn" data-id="'+e.id+'">삭제</button></td></tr>'}
  h+='</tbody></table>';el.innerHTML=h;
}
async function addEntry(){
  var cidr=document.getElementById('cidr').value.trim();
  var country=document.getElementById('country').value.trim();
  var label=document.getElementById('label').value.trim();
  var st=document.getElementById('status');
  if(!cidr){st.textContent='CIDR을 입력하세요';st.className='status err';return}
  var r=await fetch('/api/ip-allowlist',{method:'POST',headers:{'Content-Type':'application/json','X-Requested-With':'XMLHttpRequest'},body:JSON.stringify({cidr:cidr,country:country,label:label})});
  var j=await r.json();
  if(j.ok){list=j.list;render();document.getElementById('cidr').value='';document.getElementById('country').value='';document.getElementById('label').value='';st.textContent='추가되었습니다';st.className='status ok'}
  else{st.textContent=j.error;st.className='status err'}
}
async function del(id){
  if(!confirm('삭제하시겠습니까?'))return;
  var r=await fetch('/api/ip-allowlist/'+id,{method:'DELETE',headers:{'X-Requested-With':'XMLHttpRequest'}});var j=await r.json();
  if(j.ok){list=j.list;render()}
}
document.addEventListener('click',function(e){if(e.target.classList.contains('del-btn'))del(e.target.dataset.id)});
load();
</script></body></html>`)
})

// archives API는 routes/archives.js로 분리됨

// ─── Archives UI (학습 데이터 확인) ──────────────────────────────────────────
adminPagesRouter.get('/admin/archives', (req, res) => {
  res.set('Content-Type', 'text/html; charset=utf-8')
  res.send(`<!DOCTYPE html><html lang="ko"><head><meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Archives (학습 데이터)</title>
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{background:#0F172A;font-family:'LG Smart','Arial Narrow',Arial,sans-serif;color:#E2E8F0;padding:32px 24px}
.container{max-width:860px;margin:0 auto}
.top{display:flex;align-items:center;justify-content:space-between;margin-bottom:20px}
.back{color:#64748B;text-decoration:none;font-size:13px}.back:hover{color:#94A3B8}
.logout{background:none;border:1px solid #334155;color:#64748B;padding:6px 16px;border-radius:6px;font-size:12px;cursor:pointer}.logout:hover{border-color:#64748B;color:#94A3B8}
h1{font-size:22px;font-weight:700;color:#F8FAFC;margin-bottom:6px}
.desc{font-size:13px;color:#64748B;margin-bottom:24px;line-height:1.6}
.archive{background:#1E293B;border:1px solid #334155;border-radius:12px;margin-bottom:16px;overflow:hidden}
.archive-head{display:flex;align-items:center;justify-content:space-between;padding:16px 20px;cursor:pointer;user-select:none}
.archive-head:hover{background:#263245}
.archive-title{font-size:16px;font-weight:700;color:#F8FAFC}
.archive-date{font-size:12px;color:#64748B}
.archive-body{display:none;padding:0 20px 20px;border-top:1px solid #334155}
.archive-body.open{display:block}
.field{margin-top:14px}
.field-label{font-size:11px;font-weight:700;color:#CF0652;text-transform:uppercase;margin-bottom:4px}
.field-text{font-size:13px;color:#CBD5E1;line-height:1.7;white-space:pre-wrap;background:#0F172A;border-radius:8px;padding:10px 14px;max-height:200px;overflow-y:auto}
.del-btn{background:none;border:1px solid #EF4444;color:#EF4444;padding:4px 12px;border-radius:6px;font-size:12px;cursor:pointer}.del-btn:hover{background:#EF4444;color:#fff}
.empty{text-align:center;padding:40px;color:#64748B;font-size:14px}
</style></head><body>
<div class="container">
  <div class="top">
    <a class="back" href="/admin/">&#8592; Admin Dashboard</a>
    <button class="logout" onclick="fetch('/api/auth/logout',{method:'POST'}).then(function(){location.href='/admin/login'})">로그아웃</button>
  </div>
  <h1>Archives (학습 데이터)</h1>
  <p class="desc">완성본을 아카이빙하면 AI 인사이트 생성 시 문체와 구조의 학습 데이터로 활용됩니다.<br>최근 12개월치 아카이브가 AI 프롬프트에 자동 포함됩니다.</p>
  <div id="list"></div>
</div>
<script>
var list=[];var FIELDS=[
  ['totalInsight','GEO 전략 인사이트'],['productInsight','제품별 인사이트'],['productHowToRead','제품별 How to Read'],
  ['cntyInsight','국가별 인사이트'],['cntyHowToRead','국가별 How to Read'],
  ['citationInsight','Citation 인사이트'],['citationHowToRead','Citation How to Read'],
  ['citDomainInsight','도메인별 인사이트'],['citDomainHowToRead','도메인별 How to Read'],
  ['citCntyInsight','국가별 Citation 인사이트'],['citCntyHowToRead','국가별 Citation How to Read'],
  ['dotcomInsight','닷컴 인사이트'],['dotcomHowToRead','닷컴 How to Read'],
  ['todoText','Action Plan'],['noticeText','Notice'],['kpiLogicText','KPI Logic']
];
async function load(){
  try{
    var r=await fetch('/api/archives');
    if(r.status===401){location.href='/admin/login';return}
    var j=await r.json();
    list=j.archives||[];
    document.getElementById('list').setAttribute('data-count',list.length);
    render()
  }catch(e){document.getElementById('list').innerHTML='<p class="empty">로드 실패: '+e.message+'</p>'}
}
function esc(s){var d=document.createElement('div');d.textContent=s;return d.innerHTML}
function render(){
  var el=document.getElementById('list');
  if(!list.length){el.innerHTML='<p class="empty">아카이빙된 리포트가 없습니다.<br>뉴스레터 편집기에서 완성본을 아카이빙해주세요.</p>';return}
  el.innerHTML=list.map(function(a,i){
    var d=new Date(a.createdAt).toLocaleDateString('ko-KR',{year:'numeric',month:'long',day:'numeric'});
    var cnt=FIELDS.filter(function(f){return(a.insights||{})[f[0]]}).length;
    var fields=FIELDS.map(function(f){
      var v=(a.insights||{})[f[0]];
      return v?'<div class="field"><div class="field-label">'+f[1]+'</div><div class="field-text">'+esc(v)+'</div></div>':''
    }).join('');
    var openClass=i===0?' open':'';
    return '<div class="archive"><div class="archive-head" onclick="toggle('+i+')"><div><span class="archive-title">'+esc(a.period)+'</span><span style="font-size:12px;color:#64748B;margin-left:8px;">'+cnt+'개 필드</span></div><div><span class="archive-date">'+d+'</span>&nbsp;&nbsp;<button class="del-btn" onclick="event.stopPropagation();del(&quot;'+a.id+'&quot;)">삭제</button></div></div><div class="archive-body'+openClass+'" id="ab'+i+'">'+fields+'</div></div>'
  }).join('')
}
function toggle(i){document.getElementById('ab'+i).classList.toggle('open')}
async function del(id){
  if(!confirm('삭제하시겠습니까?'))return;
  var r=await fetch('/api/archives/'+id,{method:'DELETE',headers:{'X-Requested-With':'XMLHttpRequest'}});
  var j=await r.json();if(j.ok){list=j.archives;render()}
}
load()
</script></body></html>`)
})

// ─── AI Settings UI ──────────────────────────────────────────────────────────
adminPagesRouter.get('/admin/ai-settings', (req, res) => {
  res.set('Content-Type', 'text/html; charset=utf-8')
  res.send(`<!DOCTYPE html><html lang="ko"><head><meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>AI Settings</title>
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{background:#0F172A;font-family:'LG Smart','Arial Narrow',Arial,sans-serif;color:#E2E8F0;padding:32px 24px}
.container{max-width:720px;margin:0 auto}
.top{display:flex;align-items:center;justify-content:space-between;margin-bottom:20px}
.back{color:#64748B;text-decoration:none;font-size:13px}.back:hover{color:#94A3B8}
.logout{background:none;border:1px solid #334155;color:#64748B;padding:6px 16px;border-radius:6px;font-size:12px;cursor:pointer}.logout:hover{border-color:#64748B;color:#94A3B8}
h1{font-size:22px;font-weight:700;color:#F8FAFC;margin-bottom:6px}
.desc{font-size:13px;color:#64748B;margin-bottom:24px}
.section{background:#1E293B;border:1px solid #334155;border-radius:12px;padding:24px;margin-bottom:20px}
.section h2{font-size:15px;font-weight:700;margin-bottom:12px;color:#F8FAFC}
.section p.hint{font-size:12px;color:#64748B;margin-bottom:12px;line-height:1.6}
label{display:block;font-size:12px;color:#94A3B8;margin-bottom:6px;font-weight:600}
textarea,input[type=text],select{width:100%;padding:10px 12px;border-radius:8px;border:1px solid #334155;background:#0F172A;color:#E2E8F0;font-size:13px;outline:none;font-family:inherit;line-height:1.6}
textarea:focus,input:focus,select:focus{border-color:#CF0652}
textarea{resize:vertical;min-height:120px}
.form-row{margin-bottom:16px}
.row2{display:flex;gap:12px}.row2>div{flex:1}
.save-btn{padding:10px 24px;border:none;border-radius:8px;background:#CF0652;color:#fff;font-weight:700;font-size:14px;cursor:pointer;margin-top:8px}
.save-btn:hover{opacity:.9}
.status{font-size:12px;margin-top:8px;min-height:18px}.status.ok{color:#4ADE80}.status.err{color:#F87171}
</style></head><body>
<div class="container">
  <div class="top">
    <a class="back" href="/admin/">&#8592; Admin Dashboard</a>
    <button class="logout" onclick="fetch('/api/auth/logout',{method:'POST'}).then(function(){location.href='/admin/login'})">로그아웃</button>
  </div>
  <h1>AI Settings</h1>
  <p class="desc">AI 인사이트 생성 시 적용되는 프롬프트 규칙과 모델 설정을 관리합니다.</p>
  <div class="section">
    <h2>프롬프트 규칙</h2>
    <p class="hint">모든 AI 생성 버튼에 공통 적용됩니다. 각 줄에 하나의 규칙을 작성하세요.</p>
    <div class="form-row">
      <textarea id="rules" rows="8"></textarea>
    </div>
  </div>
  <div class="section">
    <h2>모델 설정</h2>
    <div class="row2">
      <div>
        <label>모델</label>
        <select id="model">
          <option value="claude-sonnet-4-20250514">Claude Sonnet 4 (빠름, 저렴)</option>
          <option value="claude-opus-4-20250514">Claude Opus 4 (고품질)</option>
        </select>
      </div>
      <div>
        <label>최대 토큰</label>
        <input type="text" id="maxTokens" placeholder="500">
      </div>
    </div>
  </div>
  <div class="section">
    <h2>에이전트 모드 (실험적)</h2>
    <p class="hint">활성화하면 Claude가 <code>lookup(path)</code> 도구를 사용해 데이터를 직접 조회합니다. 수치 환각이 줄지만 호출 비용이 증가합니다 (보통 1.5~2배).</p>
    <label style="display:flex;align-items:center;gap:8px;cursor:pointer;font-size:13px;color:#E2E8F0">
      <input type="checkbox" id="useTools" style="width:auto;margin:0">
      <span>tool use 루프 활성화 (lookup 도구)</span>
    </label>
  </div>
  <button class="save-btn" onclick="save()">저장</button>
  <p class="status" id="status"></p>
</div>
<script>
async function load(){
  var r=await fetch('/api/ai-settings');
  if(r.status===401){location.href='/admin/login';return}
  var j=await r.json();if(!j.ok)return;
  document.getElementById('rules').value=j.settings.promptRules||'';
  document.getElementById('model').value=j.settings.model||'claude-sonnet-4-20250514';
  document.getElementById('maxTokens').value=j.settings.maxTokens||500;
  document.getElementById('useTools').checked=!!j.settings.useTools;
}
async function save(){
  var st=document.getElementById('status');
  var body={
    promptRules:document.getElementById('rules').value,
    model:document.getElementById('model').value,
    maxTokens:parseInt(document.getElementById('maxTokens').value)||500,
    useTools:document.getElementById('useTools').checked
  };
  var r=await fetch('/api/ai-settings',{method:'PUT',headers:{'Content-Type':'application/json','X-Requested-With':'XMLHttpRequest'},body:JSON.stringify(body)});
  var j=await r.json();
  if(j.ok){st.textContent='저장되었습니다';st.className='status ok'}
  else{st.textContent=j.error||'저장 실패';st.className='status err'}
}
load();
</script></body></html>`)
})

