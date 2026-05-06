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

// ─── Markdown 문서 렌더 헬퍼 ────────────────────────────────────────────────
// /admin/plan, /admin/infra, /admin/cloud-run-job, /admin/bigquery-schema 공통.
// marked + mermaid CDN로 클라이언트 렌더 (iOS Safari 호환).
function renderMarkdownPage(res, { mdFile, title, downloadHref, downloadName }) {
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
  document.getElementById('root').innerHTML = marked.parse(md, { renderer })
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
      <a class="card" href="/admin/monthly-report">
        <div class="card-title">Monthly Report</div>
        <div class="card-desc">월간 보고용 단순 표 형태 리포트 — 색상/그래프 없음</div>
      </a>
      <a class="card" href="/admin/weekly-report">
        <div class="card-title">Weekly Report</div>
        <div class="card-desc">주간 보고용 표 리포트 — 국가별 제품별 전주대비 포함</div>
      </a>
      <a class="card" href="/admin/readability" style="opacity:0.5;pointer-events:none">
        <div class="card-title">Readability Editor</div>
        <div class="card-desc">추후 고도화 예정</div>
      </a>
      <a class="card" href="/admin/progress-tracker-v2/">
        <div class="card-title">Progress Tracker</div>
        <div class="card-desc">GEO 과제 진행 현황 대시보드 — 카테고리별 정량/정성 KPI</div>
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

