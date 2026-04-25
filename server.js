import express from 'express'
import crypto from 'crypto'
import { parseAppendix } from './src/excelUtils.js'
import XLSX from 'xlsx-js-style'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { readFileSync, writeFileSync, readdirSync, unlinkSync, existsSync } from 'fs'
import dotenv from 'dotenv'

// C11 step1·2 — 헬퍼들을 lib/ 모듈로 분리
import {
  DATA_DIR, PUB_DIR, VALID_MODES, SNAP_FILE,
  readModeSyncData,
  readAiSettings,
  readArchives,
  readSnapshots,
} from './lib/storage.js'
import { ADMIN_PASSWORD, activeSessions, getSessionToken, createSessionToken, revokeSessionToken } from './lib/auth.js'
import { isIpAllowed } from './lib/network.js'
import { sanitizeHtml } from './lib/sanitize.js'
import { validateMode } from './lib/middleware.js'

// C11 step3 — 라우트 모듈
import { snapshotsRouter } from './routes/snapshots.js'
import { syncRouter } from './routes/sync.js'
import { insightRouter } from './routes/insight.js'
import { emailRouter } from './routes/email.js'
import { translateRouter } from './routes/translate.js'
import { ipRouter } from './routes/ip-allowlist.js'
import { aiSettingsRouter } from './routes/ai-settings.js'
import { archivesRouter } from './routes/archives.js'
import { publishRouter } from './routes/publish.js'

dotenv.config()

const __dirname = dirname(fileURLToPath(import.meta.url))
const app = express()
const PORT = process.env.PORT || 3000

app.set('trust proxy', 1)  // trust only the first proxy (Render load balancer)

// 헬퍼·storage·auth·sanitize·lock·insight-runs 는 lib/ 에서 import (C11 step1·2)
// 글로벌 SNAP_FILE / SYNC_FILE 은 storage 모듈에서 export됨

// ─── Security Headers ────────────────────────────────────────────────────────
app.use((req, res, next) => {
  res.set('X-Content-Type-Options', 'nosniff')
  res.set('X-Frame-Options', 'SAMEORIGIN')
  res.set('X-XSS-Protection', '1; mode=block')
  res.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  if (process.env.NODE_ENV === 'production') {
    res.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains')
  }
  next()
})

// ─── JSON body parser ────────────────────────────────────────────────────────
app.use(express.json({ limit: '50mb' }))

// ─── Admin Login Page ────────────────────────────────────────────────────────
app.get('/admin/login', (req, res) => {
  const token = getSessionToken(req)
  if (token && activeSessions.has(token)) return res.redirect('/admin/')
  res.set('Content-Type', 'text/html; charset=utf-8')
  res.send(`<!DOCTYPE html>
<html lang="ko"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Admin Login</title>
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{min-height:100vh;display:flex;align-items:center;justify-content:center;background:#0F172A;font-family:'LG Smart','Arial Narrow',Arial,sans-serif;color:#E2E8F0}
.card{background:#1E293B;border:1px solid #334155;border-radius:16px;padding:40px 36px;width:100%;max-width:400px}
h1{font-size:20px;font-weight:700;color:#F8FAFC;margin-bottom:8px;text-align:center}
.sub{font-size:13px;color:#64748B;text-align:center;margin-bottom:28px}
label{display:block;font-size:12px;color:#94A3B8;margin-bottom:6px;font-weight:600}
input{width:100%;padding:12px 14px;border-radius:8px;border:1px solid #334155;background:#0F172A;color:#E2E8F0;font-size:14px;outline:none;transition:border-color .2s}
input:focus{border-color:#CF0652}
button{width:100%;margin-top:20px;padding:14px;border:none;border-radius:10px;background:#CF0652;color:#fff;font-size:14px;font-weight:700;cursor:pointer;transition:opacity .15s}
button:hover{opacity:.9}button:disabled{opacity:.5;cursor:not-allowed}
.err{color:#F87171;font-size:12px;margin-top:12px;text-align:center;display:none}
</style></head><body>
<div class="card">
  <h1>Admin Login</h1>
  <p class="sub">GEO Newsletter Management</p>
  <form id="f">
    <label for="pw">Password</label>
    <input type="password" id="pw" placeholder="관리자 비밀번호 입력" autofocus>
    <button type="submit">로그인</button>
    <p class="err" id="err"></p>
  </form>
</div>
<script>
document.getElementById('f').addEventListener('submit', async function(e) {
  e.preventDefault();
  var btn = e.target.querySelector('button');
  var err = document.getElementById('err');
  btn.disabled = true; err.style.display = 'none';
  try {
    var r = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({password: document.getElementById('pw').value})
    });
    var j = await r.json();
    if (j.ok) { location.href = '/admin/'; }
    else { err.textContent = j.error; err.style.display = 'block'; }
  } catch(ex) { err.textContent = '서버 연결 실패'; err.style.display = 'block'; }
  btn.disabled = false;
});
</script></body></html>`)
})

// ─── Login Rate Limiter ──────────────────────────────────────────────────────
const loginAttempts = new Map()  // ip -> { count, resetAt }
const MAX_LOGIN_ATTEMPTS = 5
const LOGIN_WINDOW_MS = 15 * 60 * 1000  // 15 minutes

// ─── Auth API ────────────────────────────────────────────────────────────────
app.post('/api/auth/login', (req, res) => {
  const ip = req.ip
  const now = Date.now()
  const attempt = loginAttempts.get(ip)
  if (attempt && now < attempt.resetAt && attempt.count >= MAX_LOGIN_ATTEMPTS) {
    const retryAfter = Math.ceil((attempt.resetAt - now) / 1000)
    return res.status(429).json({ ok: false, error: `너무 많은 로그인 시도. ${retryAfter}초 후 재시도하세요.` })
  }
  const { password } = req.body || {}
  if (password !== ADMIN_PASSWORD) {
    const entry = attempt && now < attempt.resetAt ? attempt : { count: 0, resetAt: now + LOGIN_WINDOW_MS }
    entry.count++
    loginAttempts.set(ip, entry)
    return res.status(401).json({ ok: false, error: '비밀번호가 올바르지 않습니다.' })
  }
  loginAttempts.delete(ip)
  const token = createSessionToken()
  res.cookie('admin_token', token, {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    maxAge: 24 * 60 * 60 * 1000,
    path: '/',
  })
  res.json({ ok: true })
})

app.post('/api/auth/logout', (req, res) => {
  const token = getSessionToken(req)
  revokeSessionToken(token)
  res.clearCookie('admin_token', { path: '/' })
  res.json({ ok: true })
})

// ─── Auth Middleware ─────────────────────────────────────────────────────────
app.use((req, res, next) => {
  if (req.path.startsWith('/p/') || req.path === '/') return next()
  if (req.path === '/admin/login') return next()
  if (req.path.startsWith('/api/auth/')) return next()
  if (req.path === '/api/tracker-snapshot') return next()
  if (req.path.startsWith('/admin/progress-tracker/assets/')) return next()
  if (req.path.startsWith('/admin') || req.path.startsWith('/api/')) {
    const token = getSessionToken(req)
    if (!token || !activeSessions.has(token)) {
      if (req.path.startsWith('/api/')) return res.status(401).json({ ok: false, error: 'Unauthorized' })
      return res.redirect('/admin/login')
    }
    // CSRF protection: state-changing API requests must include X-Requested-With header
    if (req.path.startsWith('/api/') && ['POST', 'PUT', 'DELETE'].includes(req.method)) {
      if (req.headers['content-type']?.includes('application/json') && !req.headers['x-requested-with']) {
        return res.status(403).json({ ok: false, error: 'CSRF 검증 실패' })
      }
    }
  }
  next()
})

// ─── Google Sheets proxy (fetch-based) ──────────────────────────────────────
app.get('/gsheets-proxy/*', async (req, res) => {
  const target = 'https://docs.google.com' + req.originalUrl.replace('/gsheets-proxy', '')
  try {
    const parsed = new URL(target)
    if (parsed.hostname !== 'docs.google.com') {
      return res.status(403).json({ error: 'docs.google.com만 프록시 허용' })
    }
  } catch {
    return res.status(400).json({ error: '유효하지 않은 URL' })
  }
  console.log('[PROXY]', target.slice(0, 120))
  try {
    const gRes = await fetch(target, {
      headers: { 'User-Agent': 'Mozilla/5.0' },
    })
    if (!gRes.ok) {
      console.log('[PROXY] Google returned', gRes.status)
      return res.status(gRes.status).send(await gRes.text())
    }
    res.set('Content-Type', gRes.headers.get('content-type') || 'text/csv')
    res.set('Cache-Control', 'no-store, no-cache, must-revalidate')
    const body = await gRes.text()
    res.send(body)
  } catch (err) {
    console.error('[PROXY] Error:', err.message)
    res.status(502).json({ error: '프록시 요청 실패' })
  }
})

// ─── 라우트 모듈 마운트 (C11 step3) ────────────────────────────────────────
app.use(snapshotsRouter)
app.use(syncRouter)
app.use(insightRouter)
app.use(emailRouter)
app.use(translateRouter)
app.use(ipRouter)
app.use(aiSettingsRouter)
app.use(archivesRouter)
app.use(publishRouter)

// ─── Google Sheet Export (Apps Script proxy) ────────────────────────────────
app.post('/api/gsheet-export', async (req, res) => {
  const { scriptUrl, data } = req.body || {}
  if (!scriptUrl || !data) {
    return res.status(400).json({ ok: false, error: 'scriptUrl, data 필수' })
  }
  const ALLOWED_ORIGINS = ['https://script.google.com', 'https://script.googleusercontent.com']
  try {
    const parsed = new URL(scriptUrl)
    if (!ALLOWED_ORIGINS.some(o => parsed.origin === o)) {
      return res.status(403).json({ ok: false, error: 'Google Apps Script URL만 허용됩니다' })
    }
  } catch {
    return res.status(400).json({ ok: false, error: '유효하지 않은 URL입니다' })
  }
  try {
    const gRes = await fetch(scriptUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(data),
      redirect: 'follow',
    })
    const text = await gRes.text()
    let result
    try { result = JSON.parse(text) } catch { result = { ok: false, error: text } }
    res.json(result)
  } catch (err) {
    console.error('[GSHEET-EXPORT] Error:', err.message)
    res.status(500).json({ ok: false, error: 'Google Sheet 내보내기 실패' })
  }
})

// translate · insight · ip · ai-settings 라우트는 모두 routes/ 모듈로 분리됨

// validateMode·publish 라우트는 routes/publish.js로 분리됨
// makeLangBarHtml/injectLangBar/readMetaFile은 publish 모듈 내부로 이동

// ─── Font static files ──────────────────────────────────────────────────────
app.use('/font', express.static(join(__dirname, 'font'), { maxAge: '1y', immutable: true }))

// ─── Public Progress Tracker (게시된 버전, IP 체크) ──────────────────────────
app.use('/p/progress-tracker', (req, res, next) => {
  if (!isIpAllowed(req)) {
    res.status(403)
    res.set('Content-Type', 'text/html; charset=utf-8')
    return res.send('<!DOCTYPE html><html><head><meta charset="UTF-8"></head><body style="background:#0F172A;display:flex;align-items:center;justify-content:center;height:100vh;font-family:sans-serif;color:#64748B"><p>403 — Access Denied</p></body></html>')
  }
  next()
})
app.use('/p/progress-tracker', express.static(join(__dirname, 'dist-tracker')))
app.get('/p/progress-tracker', (req, res) => {
  res.sendFile(join(__dirname, 'dist-tracker', 'tracker.html'))
})
app.get('/p/progress-tracker/*', (req, res) => {
  res.sendFile(join(__dirname, 'dist-tracker', 'tracker.html'))
})

app.get('/p/:slug', (req, res) => {
  if (!isIpAllowed(req)) {
    res.status(403)
    res.set('Content-Type', 'text/html; charset=utf-8')
    return res.send(`<!DOCTYPE html><html lang="ko"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Access Denied</title><style>*{margin:0;padding:0;box-sizing:border-box}body{min-height:100vh;display:flex;align-items:center;justify-content:center;background:#0F172A;font-family:'LG Smart','Arial Narrow',Arial,sans-serif;color:#E2E8F0}.w{text-align:center;padding:40px 24px}h1{font-size:48px;font-weight:700;color:#334155;margin-bottom:16px}p{font-size:15px;color:#64748B}</style></head><body><div class="w"><h1>403</h1><p>접근이 허용되지 않은 IP입니다.</p></div></body></html>`)
  }
  const slug = req.params.slug
  if (!/^[a-zA-Z0-9\-]+$/.test(slug)) return res.status(400).send('Invalid slug')
  const file = join(PUB_DIR, `${slug}.html`)
  if (!existsSync(file)) return res.status(404).send('Not found')
  res.set('Content-Type', 'text/html; charset=utf-8')
  res.send(readFileSync(file, 'utf-8'))
})

// ─── Admin Dashboard ─────────────────────────────────────────────────────────
app.get('/admin/', (req, res) => {
  res.set('Content-Type', 'text/html; charset=utf-8')
  res.send(`<!DOCTYPE html><html lang="ko"><head><meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>GEO Newsletter Admin</title>
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{min-height:100vh;display:flex;align-items:center;justify-content:center;background:#0F172A;font-family:'LG Smart','Arial Narrow',Arial,sans-serif;color:#E2E8F0}
.wrap{text-align:center;padding:40px 24px;max-width:540px;width:100%}
.logo{font-size:11px;font-weight:700;letter-spacing:3px;color:#64748B;text-transform:uppercase;margin-bottom:28px}
h1{font-size:24px;font-weight:700;color:#F8FAFC;margin-bottom:32px}
.cards{display:flex;flex-direction:column;gap:14px;margin-bottom:32px}
a.card{display:block;background:#1E293B;border:1px solid #334155;border-radius:12px;padding:24px;text-decoration:none;text-align:left;transition:border-color .2s,transform .15s}
a.card:hover{border-color:#CF0652;transform:translateY(-2px)}
.card-title{font-size:16px;font-weight:700;color:#F8FAFC;margin-bottom:4px}
.card-desc{font-size:13px;color:#94A3B8}
.section-title{font-size:13px;font-weight:700;color:#64748B;text-transform:uppercase;letter-spacing:2px;margin:24px 0 12px}
.logout{background:none;border:1px solid #334155;color:#64748B;padding:10px 24px;border-radius:8px;font-size:13px;cursor:pointer}
.logout:hover{border-color:#64748B;color:#94A3B8}
</style></head><body>
<div class="wrap">
  <div class="logo">GEO Newsletter</div>
  <h1>Admin Dashboard</h1>
  <div class="cards">
    <div class="section-title" style="margin-top:0">뉴스레터 관리</div>
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
    <a class="card" href="/admin/progress-tracker">
      <div class="card-title">Progress Tracker</div>
      <div class="card-desc">GEO 과제 진행 현황 대시보드</div>
    </a>
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
  </div>
  <button class="logout" onclick="fetch('/api/auth/logout',{method:'POST'}).then(function(){location.href='/admin/login'})">로그아웃</button>
</div></body></html>`)
})

// ─── 시스템 기획서 (ADMIN_PLAN.md 렌더) ──────────────────────────────────────
app.get('/admin/plan', (req, res) => {
  let md = ''
  try {
    md = readFileSync(join(__dirname, 'docs', 'ADMIN_PLAN.md'), 'utf-8')
  } catch (e) {
    return res.status(404).send('ADMIN_PLAN.md 파일을 찾을 수 없습니다.')
  }
  // 클라이언트에서 marked + mermaid CDN으로 렌더 (iOS Safari 호환)
  res.set('Content-Type', 'text/html; charset=utf-8')
  const mdJson = JSON.stringify(md)
  res.send(`<!DOCTYPE html><html lang="ko"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>시스템 기획서</title>
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
    <a class="btn" href="/admin/plan.md" download="ADMIN_PLAN.md">MD 다운로드</a>
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
  // mermaid 코드블록을 <div class="mermaid"> 로 변환
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
})

// 원문 MD 다운로드
app.get('/admin/plan.md', (req, res) => {
  try {
    const md = readFileSync(join(__dirname, 'docs', 'ADMIN_PLAN.md'), 'utf-8')
    res.set('Content-Type', 'text/markdown; charset=utf-8')
    res.set('Content-Disposition', 'attachment; filename="ADMIN_PLAN.md"')
    res.send(md)
  } catch { res.status(404).send('not found') }
})

// ─── GCP 인프라 구성도 (GCP_INFRA.md 렌더) ───────────────────────────────────
app.get('/admin/infra', (req, res) => {
  let md = ''
  try {
    md = readFileSync(join(__dirname, 'docs', 'GCP_INFRA.md'), 'utf-8')
  } catch (e) {
    return res.status(404).send('GCP_INFRA.md 파일을 찾을 수 없습니다.')
  }
  res.set('Content-Type', 'text/html; charset=utf-8')
  const mdJson = JSON.stringify(md)
  res.send(`<!DOCTYPE html><html lang="ko"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>GCP 인프라 구성도</title>
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
    <a class="btn" href="/admin/infra.md" download="GCP_INFRA.md">MD 다운로드</a>
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
})

app.get('/admin/infra.md', (req, res) => {
  try {
    const md = readFileSync(join(__dirname, 'docs', 'GCP_INFRA.md'), 'utf-8')
    res.set('Content-Type', 'text/markdown; charset=utf-8')
    res.set('Content-Disposition', 'attachment; filename="GCP_INFRA.md"')
    res.send(md)
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

app.get('/admin/de-prompts', (req, res) => {
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
app.get('/admin/de-prompts.csv', (req, res) => {
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

app.use('/admin/de-prompts/sync-sheet', express.urlencoded({ extended: false, limit: '1mb' }))
app.post('/admin/de-prompts/sync-sheet', async (req, res) => {
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
app.get('/admin/de-prompts.xlsx', async (req, res) => {
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
app.get('/admin/ip-manager', (req, res) => {
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
app.get('/admin/archives', (req, res) => {
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
app.get('/admin/ai-settings', (req, res) => {
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
}
async function save(){
  var st=document.getElementById('status');
  var body={
    promptRules:document.getElementById('rules').value,
    model:document.getElementById('model').value,
    maxTokens:parseInt(document.getElementById('maxTokens').value)||500
  };
  var r=await fetch('/api/ai-settings',{method:'PUT',headers:{'Content-Type':'application/json','X-Requested-With':'XMLHttpRequest'},body:JSON.stringify(body)});
  var j=await r.json();
  if(j.ok){st.textContent='저장되었습니다';st.className='status ok'}
  else{st.textContent=j.error||'저장 실패';st.className='status err'}
}
load();
</script></body></html>`)
})

// ─── Static files (admin UI at /admin/newsletter) ───────────────────────────
app.use('/admin/newsletter', express.static(join(__dirname, 'dist')))
app.get('/admin/newsletter', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'))
})
app.get('/admin/newsletter/*', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'))
})

// ─── Static files (KPI Dashboard at /admin/dashboard) ───────────────────────
app.use('/admin/dashboard', express.static(join(__dirname, 'dist-dashboard')))
app.get('/admin/dashboard', (req, res) => {
  res.sendFile(join(__dirname, 'dist-dashboard', 'dashboard.html'))
})
app.get('/admin/dashboard/*', (req, res) => {
  res.sendFile(join(__dirname, 'dist-dashboard', 'dashboard.html'))
})

// ─── Static files (Monthly Report at /admin/monthly-report) ────────────────
app.use('/admin/monthly-report', express.static(join(__dirname, 'dist-monthly-report')))
app.get('/admin/monthly-report', (req, res) => {
  res.sendFile(join(__dirname, 'dist-monthly-report', 'monthly-report.html'))
})
app.get('/admin/monthly-report/*', (req, res) => {
  res.sendFile(join(__dirname, 'dist-monthly-report', 'monthly-report.html'))
})

// ─── Static files (Weekly Report at /admin/weekly-report) ──────────────────
app.use('/admin/weekly-report', express.static(join(__dirname, 'dist-weekly-report')))
app.get('/admin/weekly-report', (req, res) => {
  res.sendFile(join(__dirname, 'dist-weekly-report', 'weekly-report.html'))
})
app.get('/admin/weekly-report/*', (req, res) => {
  res.sendFile(join(__dirname, 'dist-weekly-report', 'weekly-report.html'))
})

// ─── Static files (Citation Dashboard at /admin/citation) ───────────────────
app.use('/admin/citation', express.static(join(__dirname, 'dist-citation')))
app.get('/admin/citation', (req, res) => {
  res.sendFile(join(__dirname, 'dist-citation', 'citation.html'))
})
app.get('/admin/citation/*', (req, res) => {
  res.sendFile(join(__dirname, 'dist-citation', 'citation.html'))
})

// ─── Static files (Visibility Editor at /admin/visibility) ──────────────────
app.use('/admin/visibility', express.static(join(__dirname, 'dist-visibility')))
app.get('/admin/visibility', (req, res) => {
  res.sendFile(join(__dirname, 'dist-visibility', 'visibility.html'))
})
app.get('/admin/visibility/*', (req, res) => {
  res.sendFile(join(__dirname, 'dist-visibility', 'visibility.html'))
})

// ─── Static files (Progress Tracker at /admin/progress-tracker) ─────────────
app.use('/admin/progress-tracker', express.static(join(__dirname, 'dist-tracker')))
app.get('/admin/progress-tracker', (req, res) => {
  res.sendFile(join(__dirname, 'dist-tracker', 'tracker.html'))
})
app.get('/admin/progress-tracker/*', (req, res) => {
  res.sendFile(join(__dirname, 'dist-tracker', 'tracker.html'))
})
app.get('/', (req, res) => {
  if (!isIpAllowed(req)) {
    res.status(403)
    res.set('Content-Type', 'text/html; charset=utf-8')
    return res.send(`<!DOCTYPE html><html lang="ko"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Access Denied</title><style>*{margin:0;padding:0;box-sizing:border-box}body{min-height:100vh;display:flex;align-items:center;justify-content:center;background:#0F172A;font-family:'LG Smart','Arial Narrow',Arial,sans-serif;color:#E2E8F0}.w{text-align:center;padding:40px 24px}h1{font-size:48px;font-weight:700;color:#334155;margin-bottom:16px}p{font-size:15px;color:#64748B}</style></head><body><div class="w"><h1>403</h1><p>접근이 허용되지 않은 IP입니다.</p></div></body></html>`)
  }
  const meta = readMetaFile(PUB_META)
  const title = meta?.title || 'GEO Monthly Report'
  const ts = meta?.ts ? new Date(meta.ts).toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' }) : ''
  res.set('Content-Type', 'text/html; charset=utf-8')
  res.send(`<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${title}</title>
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{min-height:100vh;display:flex;align-items:center;justify-content:center;background:#0F172A;font-family:'LG Smart','Arial Narrow',Arial,sans-serif;color:#E2E8F0}
.wrap{text-align:center;padding:40px 24px;max-width:540px;width:100%}
.logo{font-size:11px;font-weight:700;letter-spacing:3px;color:#64748B;text-transform:uppercase;margin-bottom:28px}
h1{font-size:22px;font-weight:700;color:#F8FAFC;margin-bottom:8px;line-height:1.4}
.date{font-size:13px;color:#64748B;margin-bottom:32px}
.notice{text-align:left;background:#1E293B;border:1px solid #334155;border-radius:10px;padding:20px 22px;margin-bottom:32px;font-size:12px;line-height:1.85;color:#94A3B8}
.notice strong{color:#E2E8F0;font-weight:700}
.links{display:flex;flex-direction:column;gap:12px;align-items:center}
a.btn{display:flex;align-items:center;justify-content:center;gap:8px;width:280px;padding:14px 0;border-radius:10px;text-decoration:none;font-size:14px;font-weight:700;transition:transform .15s,box-shadow .15s}
a.btn:hover{transform:translateY(-2px);box-shadow:0 8px 24px rgba(0,0,0,.3)}
.btn-ko{background:#CF0652;color:#fff}
.btn-en{background:#1E293B;color:#E2E8F0;border:1px solid #334155}
.btn-en:hover{border-color:#64748B}
.flag{font-size:18px}
.section-label{font-size:11px;font-weight:700;letter-spacing:1px;color:#64748B;text-transform:uppercase;margin-top:20px;margin-bottom:8px}
</style>
</head>
<body>
<div class="wrap">
  <div class="logo">LG Electronics</div>
  <h1>${title}</h1>
  ${ts ? `<p class="date">${ts}</p>` : '<p class="date">&nbsp;</p>'}
  <div class="notice">
    <p>본 Letter는 ChatGPT, Gemini와 같은 LLM 서비스 내에서 소비자의 질의에 대해 <strong>1) 자사 브랜드가 얼마나 가시성 있게 노출</strong>되고 있는지, <strong>2) LLM 서비스가 자사를 언급 시 인용의 주요 출처(Citation)</strong>는 어떠한지 현황을 공유하여, 주요 LLM 응답에서의 브랜드 노출과 인용 출처를 체계적으로 관리하는 데 도움을 드리고자 합니다.</p>
    <br>
    <p>이에 <strong>10개 주요 국가</strong>(미국, 영국, 독일, 브라질, 인도, 멕시코, 스페인, 호주, 베트남, 캐나다)를 대상으로, 브랜드 노출 <strong>가시성(Visibility)</strong>과 출처 사이트의 <strong>인용(Citation)</strong>, 콘텐츠의 <strong>AI 가독성(Readability%)</strong> 지표를 기반으로 생성형 AI가 시장·제품군별로 LG전자를 어떻게 이해하고 활용하고 있는지에 대한 현황을 제시하고자 합니다.</p>
    <br>
    <p>또한 경쟁사와의 비교 분석을 통해 카테고리별·국가별 개선 영역을 도출하고 실질적인 전략 인사이트를 확보할 수 있도록 구성했습니다.</p>
  </div>
  <div class="links">
    <p class="section-label">Newsletter</p>
    <a class="btn btn-ko" href="/p/${KO_SLUG}"><span class="flag">🇰🇷</span> 한국어 리포트</a>
    <a class="btn btn-en" href="/p/${EN_SLUG}"><span class="flag">🇺🇸</span> English Report</a>
    <p class="section-label">KPI Dashboard</p>
    <a class="btn btn-ko" href="/p/${DASH_KO_SLUG}"><span class="flag">🇰🇷</span> 한국어 대시보드</a>
    <a class="btn btn-en" href="/p/${DASH_EN_SLUG}"><span class="flag">🇺🇸</span> English Dashboard</a>
  </div>
</div>
</body>
</html>`)
})

// ─── Catch-all: redirect unknown paths to landing page ──────────────────────
app.use((req, res, next) => {
  if (req.method === 'GET' || req.method === 'HEAD') return res.redirect('/')
  next()
})

// ─── Error handler ───────────────────────────────────────────────────────────
app.use((err, req, res, _next) => {
  console.error('[SERVER] Error:', err.message)
  res.status(500).json({ ok: false, error: '서버 내부 오류' })
})

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`)
  console.log(`DATA_DIR = ${DATA_DIR}`)
  console.log(`SNAP_FILE = ${SNAP_FILE}`)
  console.log(`SNAP_FILE exists = ${existsSync(SNAP_FILE)}`)
  if (ADMIN_PASSWORD === 'changeme') console.log('[WARN] Using default admin password. Set ADMIN_PASSWORD env var.')
  try {
    const snaps = readSnapshots()
    console.log(`Snapshots count = ${snaps.length}`)
  } catch (e) { console.log(`Snapshots read error: ${e.message}`) }
})
