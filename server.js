import express from 'express'
import nodemailer from 'nodemailer'
import translate from 'google-translate-api-x'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync, unlinkSync } from 'fs'
import dotenv from 'dotenv'

dotenv.config()

const __dirname = dirname(fileURLToPath(import.meta.url))
const app = express()
const PORT = process.env.PORT || 3000

// ─── Snapshots file storage ──────────────────────────────────────────────────
const DATA_DIR = process.env.DATA_DIR || join(__dirname, 'data')
const SNAP_FILE = join(DATA_DIR, 'snapshots.json')
const PUB_DIR = join(DATA_DIR, 'published')
if (!existsSync(DATA_DIR)) mkdirSync(DATA_DIR, { recursive: true })
if (!existsSync(PUB_DIR)) mkdirSync(PUB_DIR, { recursive: true })

function readSnapshots() {
  try { return JSON.parse(readFileSync(SNAP_FILE, 'utf-8')) } catch { return [] }
}
function writeSnapshots(list) {
  writeFileSync(SNAP_FILE, JSON.stringify(list, null, 2))
}

// ─── JSON body parser ────────────────────────────────────────────────────────
app.use(express.json({ limit: '5mb' }))

// ─── Google Sheets proxy (fetch-based) ──────────────────────────────────────
app.get('/gsheets-proxy/*', async (req, res) => {
  const target = 'https://docs.google.com' + req.originalUrl.replace('/gsheets-proxy', '')
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
    res.status(502).json({ error: err.message })
  }
})

// ─── Email API ───────────────────────────────────────────────────────────────
app.post('/api/send-email', (req, res) => {
  console.log('[EMAIL] Route hit')
  const { to, subject, html } = req.body || {}

  if (!to || !subject || !html) {
    return res.status(400).json({ ok: false, error: 'to, subject, html 필수' })
  }

  const host = process.env.SMTP_HOST || 'smtp.gmail.com'
  const port = parseInt(process.env.SMTP_PORT || '587')
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS

  if (!user || !pass) {
    return res.status(500).json({ ok: false, error: 'SMTP 설정이 없습니다.' })
  }

  const transporter = nodemailer.createTransport({
    host, port, secure: port === 465,
    auth: { user, pass },
  })

  transporter.sendMail({
    from: process.env.SMTP_FROM || user,
    to, subject, html,
  })
    .then(() => {
      console.log('[EMAIL] Sent to', to)
      res.json({ ok: true })
    })
    .catch((err) => {
      console.error('[EMAIL] Send error:', err.message)
      res.status(500).json({ ok: false, error: err.message })
    })
})

// ─── Snapshots API ───────────────────────────────────────────────────────────
app.get('/api/snapshots', (req, res) => {
  res.json(readSnapshots())
})

app.post('/api/snapshots', (req, res) => {
  const { name, data } = req.body || {}
  if (!name || !data) return res.status(400).json({ ok: false, error: 'name, data 필수' })
  const snap = { name, ts: Date.now(), data }
  const list = [snap, ...readSnapshots()].slice(0, 50)
  writeSnapshots(list)
  res.json({ ok: true, snapshots: list })
})

app.put('/api/snapshots/:ts', (req, res) => {
  const ts = parseInt(req.params.ts)
  const { data } = req.body || {}
  if (!data) return res.status(400).json({ ok: false, error: 'data 필수' })
  const list = readSnapshots().map(s => s.ts === ts ? { ...s, data, updatedAt: Date.now() } : s)
  writeSnapshots(list)
  res.json({ ok: true, snapshots: list })
})

app.delete('/api/snapshots/:ts', (req, res) => {
  const ts = parseInt(req.params.ts)
  const list = readSnapshots().filter(s => s.ts !== ts)
  writeSnapshots(list)
  res.json({ ok: true, snapshots: list })
})

// ─── Google Sheet Export (Apps Script proxy) ────────────────────────────────
app.post('/api/gsheet-export', async (req, res) => {
  const { scriptUrl, data } = req.body || {}
  if (!scriptUrl || !data) {
    return res.status(400).json({ ok: false, error: 'scriptUrl, data 필수' })
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
    res.status(500).json({ ok: false, error: err.message })
  }
})

// ─── Translate API ───────────────────────────────────────────────────────────
app.post('/api/translate', async (req, res) => {
  const { texts, from, to } = req.body || {}
  if (!texts || !Array.isArray(texts) || !to) {
    return res.status(400).json({ ok: false, error: 'texts (array), to 필수' })
  }
  try {
    const results = await translate(texts, { from: from || 'ko', to })
    const translated = results.map(r => r.text)
    res.json({ ok: true, translated })
  } catch (err) {
    console.error('[TRANSLATE] Error:', err.message)
    res.status(500).json({ ok: false, error: err.message })
  }
})

// ─── Publish API (KO+EN 동시 게시, 고정 URL) ────────────────────────────────
const KO_SLUG = 'GEO-Monthly-Report-KO'
const EN_SLUG = 'GEO-Monthly-Report-EN'
const PUB_META = join(DATA_DIR, 'publish-meta.json')

function readPubMeta() {
  try { return JSON.parse(readFileSync(PUB_META, 'utf-8')) } catch { return null }
}

function langBarHtml(activeLang) {
  const btn = (lang, label, href) => {
    const active = lang === activeLang
    return `<a href="${href}" style="display:inline-block;font-size:13px;text-decoration:none;padding:6px 18px;border-radius:20px;margin:0 4px;color:${active ? '#FFFFFF' : '#94A3B8'};font-weight:${active ? '700' : '500'};background:${active ? '#CF0652' : 'rgba(255,255,255,0.08)'};">${label}</a>`
  }
  return `<div style="background:#0F172A;padding:12px 0;text-align:center;font-family:'LG Smart','Arial Narrow',Arial,sans-serif;">${btn('ko','한국어','/p/'+KO_SLUG)}${btn('en','English','/p/'+EN_SLUG)}</div>`
}

function injectLangBar(html, lang) {
  const bar = langBarHtml(lang)
  if (html.match(/<body[^>]*>/i)) return html.replace(/(<body[^>]*>)/i, `$1${bar}`)
  return bar + html
}

app.post('/api/publish', (req, res) => {
  const { htmlKo, htmlEn, title } = req.body || {}
  if (!htmlKo || !htmlEn) return res.status(400).json({ ok: false, error: 'htmlKo, htmlEn 필수' })
  writeFileSync(join(PUB_DIR, `${KO_SLUG}.html`), injectLangBar(htmlKo, 'ko'))
  writeFileSync(join(PUB_DIR, `${EN_SLUG}.html`), injectLangBar(htmlEn, 'en'))
  const meta = { title: title || 'GEO Monthly Report', ts: Date.now() }
  writeFileSync(PUB_META, JSON.stringify(meta, null, 2))
  console.log('[PUBLISH]', meta.title, `-> /p/${KO_SLUG}, /p/${EN_SLUG}`)
  res.json({ ok: true, urls: { ko: `/p/${KO_SLUG}`, en: `/p/${EN_SLUG}` }, ...meta })
})

app.get('/api/publish', (req, res) => {
  const meta = readPubMeta()
  const ko = existsSync(join(PUB_DIR, `${KO_SLUG}.html`))
  const en = existsSync(join(PUB_DIR, `${EN_SLUG}.html`))
  res.json({ published: ko && en, ko, en, ...(meta || {}), urls: { ko: `/p/${KO_SLUG}`, en: `/p/${EN_SLUG}` } })
})

app.delete('/api/publish', (req, res) => {
  try { unlinkSync(join(PUB_DIR, `${KO_SLUG}.html`)) } catch {}
  try { unlinkSync(join(PUB_DIR, `${EN_SLUG}.html`)) } catch {}
  try { unlinkSync(PUB_META) } catch {}
  res.json({ ok: true })
})

app.get('/p/:slug', (req, res) => {
  const file = join(PUB_DIR, `${req.params.slug}.html`)
  if (!existsSync(file)) return res.status(404).send('Not found')
  res.set('Content-Type', 'text/html; charset=utf-8')
  res.send(readFileSync(file, 'utf-8'))
})

// ─── Static files (admin UI at /admin/newsletter) ───────────────────────────
app.use('/admin/newsletter', express.static(join(__dirname, 'dist')))
app.get('/admin/newsletter', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'))
})
app.get('/admin/newsletter/*', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'))
})
app.get('/', (req, res) => {
  const meta = readPubMeta()
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
    <a class="btn btn-ko" href="/p/${KO_SLUG}"><span class="flag">🇰🇷</span> 한국어 리포트</a>
    <a class="btn btn-en" href="/p/${EN_SLUG}"><span class="flag">🇺🇸</span> English Report</a>
  </div>
</div>
</body>
</html>`)
})

// ─── Error handler ───────────────────────────────────────────────────────────
app.use((err, req, res, _next) => {
  console.error('[SERVER] Error:', err.message)
  res.status(500).json({ ok: false, error: err.message })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
