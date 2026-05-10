import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import nodemailer from 'nodemailer'
import translate from 'google-translate-api-x'
import Anthropic from '@anthropic-ai/sdk'
import dotenv from 'dotenv'
import { readFileSync, writeFileSync, mkdirSync, existsSync, unlinkSync } from 'fs'
import { resolve } from 'path'
import { appVersion, serveFontsPlugin, gsheetsProxy, manualChunks } from './vite.shared.js'

dotenv.config()

// ─── Vite 플러그인: /api/send-email 엔드포인트 ──────────────────────────────
function emailApiPlugin() {
  return {
    name: 'email-api',
    configureServer(server) {
      server.middlewares.use('/api/send-email', (req, res) => {
        if (req.method !== 'POST') { res.statusCode = 405; res.end(); return }
        let body = ''
        req.on('data', chunk => (body += chunk))
        req.on('end', async () => {
          try {
            const { to, subject, html } = JSON.parse(body)
            if (!to || !subject || !html) throw new Error('to, subject, html 필수')

            const host = process.env.SMTP_HOST || 'smtp.gmail.com'
            const port = parseInt(process.env.SMTP_PORT || '587')
            const user = process.env.SMTP_USER
            const pass = process.env.SMTP_PASS
            if (!user || !pass) throw new Error('SMTP 설정이 없습니다. .env 파일에 SMTP_USER, SMTP_PASS를 추가하세요.')

            const transporter = nodemailer.createTransport({
              host, port, secure: port === 465,
              auth: { user, pass },
            })
            await transporter.sendMail({
              from: process.env.SMTP_FROM || user,
              to,
              subject,
              html,
            })

            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ ok: true }))
          } catch (err) {
            res.statusCode = 500
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ ok: false, error: err.message }))
          }
        })
      })
    },
  }
}

// ─── Vite 플러그인: /api/translate 엔드포인트 ──────────────────────────────
function translateApiPlugin() {
  return {
    name: 'translate-api',
    configureServer(server) {
      server.middlewares.use('/api/translate', (req, res) => {
        if (req.method !== 'POST') { res.statusCode = 405; res.end(); return }
        let body = ''
        req.on('data', c => (body += c))
        req.on('end', async () => {
          try {
            const { texts, from, to } = JSON.parse(body)
            if (!texts || !Array.isArray(texts) || !to) throw new Error('texts (array), to 필수')
            const results = await translate(texts, { from: from || 'ko', to })
            const translated = results.map(r => r.text)
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ ok: true, translated }))
          } catch (err) {
            res.statusCode = 500
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ ok: false, error: err.message }))
          }
        })
      })
    },
  }
}

// ─── Vite 플러그인: /api/generate-insight (Claude API) ───────────────────
function insightApiPlugin() {
  return {
    name: 'insight-api',
    configureServer(server) {
      server.middlewares.use('/api/generate-insight', (req, res) => {
        if (req.method !== 'POST') { res.statusCode = 405; res.end(); return }
        let body = ''
        req.on('data', c => (body += c))
        req.on('end', async () => {
          try {
            const { type, data, lang, rules } = JSON.parse(body)
            if (!type || !data) throw new Error('type, data 필수')
            const apiKey = process.env.ANTHROPIC_API_KEY
            if (!apiKey) throw new Error('ANTHROPIC_API_KEY가 설정되지 않았습니다. .env 파일에 추가해주세요.')
            const client = new Anthropic({ apiKey })
            const defaultRules = `- 제공된 데이터에 있는 수치만 사용 (추가 계산·추정 금지)
- 리포트에 표시된 제품명, 점수, 경쟁사명을 그대로 인용
- 존재하지 않는 수치를 만들어내지 말 것`
            const userRules = rules || defaultRules
            const systemPrompt = `당신은 LG전자 D2C 디지털마케팅팀의 GEO(Generative Engine Optimization) 데이터 분석 전문가입니다.
생성형 AI 엔진(ChatGPT, Gemini, Perplexity 등)에서의 LG 브랜드 가시성(Visibility) 데이터를 분석하여 인사이트를 작성합니다.

작성 규칙:
${userRules}
- ${lang === 'en' ? '영어로 작성' : '한국어로 작성 (비즈니스 보고서 톤)'}`
            const { buildInsightPrompt } = await import('./src/shared/insightPrompts.js')
            const userPrompt = buildInsightPrompt(type, data)
            const message = await client.messages.create({
              model: 'claude-sonnet-4-20250514',
              max_tokens: 500,
              system: systemPrompt,
              messages: [{ role: 'user', content: userPrompt }],
            })
            const insight = message.content[0]?.text || ''
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ ok: true, insight }))
          } catch (err) {
            console.error('[INSIGHT] Error:', err.message)
            res.statusCode = 500
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ ok: false, error: err.message }))
          }
        })
      })
    },
  }
}

// ─── Vite 플러그인: /api/snapshots 엔드포인트 ─────────────────────────────
function snapshotsApiPlugin() {
  const DATA_DIR = resolve('data')
  const SNAP_FILE = resolve('data/snapshots.json')
  if (!existsSync(DATA_DIR)) mkdirSync(DATA_DIR, { recursive: true })

  const read = () => { try { return JSON.parse(readFileSync(SNAP_FILE, 'utf-8')) } catch { return [] } }
  const write = list => writeFileSync(SNAP_FILE, JSON.stringify(list, null, 2))

  return {
    name: 'snapshots-api',
    configureServer(server) {
      server.middlewares.use('/api/snapshots', (req, res) => {
        // GET
        if (req.method === 'GET') {
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify(read()))
          return
        }
        // POST
        if (req.method === 'POST') {
          let body = ''
          req.on('data', c => (body += c))
          req.on('end', () => {
            try {
              const { name, data } = JSON.parse(body)
              if (!name || !data) throw new Error('name, data 필수')
              const snap = { name, ts: Date.now(), data }
              const list = [snap, ...read()].slice(0, 50)
              write(list)
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify({ ok: true, snapshots: list }))
            } catch (err) {
              res.statusCode = 400
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify({ ok: false, error: err.message }))
            }
          })
          return
        }
        // PUT — path: /api/snapshots/1234567890
        if (req.method === 'PUT') {
          let body = ''
          req.on('data', c => (body += c))
          req.on('end', () => {
            try {
              const ts = parseInt(req.url.replace(/^\//, ''))
              const { data } = JSON.parse(body)
              if (!data) throw new Error('data 필수')
              const list = read().map(s => s.ts === ts ? { ...s, data, updatedAt: Date.now() } : s)
              write(list)
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify({ ok: true, snapshots: list }))
            } catch (err) {
              res.statusCode = 400
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify({ ok: false, error: err.message }))
            }
          })
          return
        }
        // DELETE — path: /api/snapshots/1234567890
        if (req.method === 'DELETE') {
          const ts = parseInt(req.url.replace(/^\//, ''))
          const list = read().filter(s => s.ts !== ts)
          write(list)
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ ok: true, snapshots: list }))
          return
        }
        res.statusCode = 405; res.end()
      })
    },
  }
}

// ─── Vite 플러그인: /api/gsheet-export 엔드포인트 ─────────────────────────
function gsheetExportPlugin() {
  return {
    name: 'gsheet-export-api',
    configureServer(server) {
      server.middlewares.use('/api/gsheet-export', (req, res) => {
        if (req.method !== 'POST') { res.statusCode = 405; res.end(); return }
        let body = ''
        req.on('data', c => (body += c))
        req.on('end', async () => {
          try {
            const { scriptUrl, data } = JSON.parse(body)
            if (!scriptUrl || !data) throw new Error('scriptUrl, data 필수')
            const ALLOWED_ORIGINS = ['https://script.google.com', 'https://script.googleusercontent.com']
            const parsed = new URL(scriptUrl)
            if (!ALLOWED_ORIGINS.some(o => parsed.origin === o)) {
              throw new Error('Google Apps Script URL만 허용됩니다')
            }
            const gRes = await fetch(scriptUrl, {
              method: 'POST',
              headers: { 'Content-Type': 'text/plain;charset=utf-8' },
              body: JSON.stringify(data),
              redirect: 'follow',
            })
            const text = await gRes.text()
            let result
            try { result = JSON.parse(text) } catch { result = { ok: false, error: text } }
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify(result))
          } catch (err) {
            res.statusCode = 500
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ ok: false, error: err.message }))
          }
        })
      })
    },
  }
}

// ─── Vite 플러그인: /api/publish 엔드포인트 (KO+EN 동시 게시) ─────────────
function publishApiPlugin() {
  const DATA_DIR = resolve('data')
  const PUB_DIR = resolve('data/published')
  const PUB_META = resolve('data/publish-meta.json')
  const KO_SLUG = 'GEO-Monthly-Report-KO'
  const EN_SLUG = 'GEO-Monthly-Report-EN'
  if (!existsSync(DATA_DIR)) mkdirSync(DATA_DIR, { recursive: true })
  if (!existsSync(PUB_DIR)) mkdirSync(PUB_DIR, { recursive: true })

  const readMeta = () => { try { return JSON.parse(readFileSync(PUB_META, 'utf-8')) } catch { return null } }

  function langBarHtml(activeLang) {
    const btn = (lang, label, href) => {
      const active = lang === activeLang
      return `<a href="${href}" style="display:inline-block;font-size:13px;text-decoration:none;padding:6px 18px;border-radius:20px;margin:0 4px;color:${active ? '#FFFFFF' : '#94A3B8'};font-weight:${active ? '700' : '500'};background:${active ? '#CF0652' : 'rgba(255,255,255,0.08)'};">${label}</a>`
    }
    return `<div style="background:#0F172A;padding:12px 0;text-align:center;font-family:'LGEIText','LG Smart','Arial Narrow',Arial,sans-serif;">${btn('ko','한국어','/p/'+KO_SLUG)}${btn('en','English','/p/'+EN_SLUG)}</div>`
  }

  function injectLangBar(html, lang) {
    const bar = langBarHtml(lang)
    if (html.match(/<body[^>]*>/i)) return html.replace(/(<body[^>]*>)/i, `$1${bar}`)
    return bar + html
  }

  return {
    name: 'publish-api',
    configureServer(server) {
      // GET /api/publish — status
      server.middlewares.use('/api/publish', (req, res, next) => {
        if (req.method === 'GET') {
          const meta = readMeta()
          const ko = existsSync(resolve(PUB_DIR, `${KO_SLUG}.html`))
          const en = existsSync(resolve(PUB_DIR, `${EN_SLUG}.html`))
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ published: ko && en, ko, en, ...(meta || {}), urls: { ko: `/p/${KO_SLUG}`, en: `/p/${EN_SLUG}` } }))
          return
        }
        // POST /api/publish
        if (req.method === 'POST') {
          let body = ''
          req.on('data', c => (body += c))
          req.on('end', () => {
            try {
              const { htmlKo, htmlEn, title } = JSON.parse(body)
              if (!htmlKo || !htmlEn) throw new Error('htmlKo, htmlEn 필수')
              writeFileSync(resolve(PUB_DIR, `${KO_SLUG}.html`), injectLangBar(htmlKo, 'ko'))
              writeFileSync(resolve(PUB_DIR, `${EN_SLUG}.html`), injectLangBar(htmlEn, 'en'))
              const meta = { title: title || 'GEO Monthly Report', ts: Date.now() }
              writeFileSync(PUB_META, JSON.stringify(meta, null, 2))
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify({ ok: true, urls: { ko: `/p/${KO_SLUG}`, en: `/p/${EN_SLUG}` }, ...meta }))
            } catch (err) {
              res.statusCode = 400
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify({ ok: false, error: err.message }))
            }
          })
          return
        }
        // DELETE /api/publish
        if (req.method === 'DELETE') {
          try { unlinkSync(resolve(PUB_DIR, `${KO_SLUG}.html`)) } catch {}
          try { unlinkSync(resolve(PUB_DIR, `${EN_SLUG}.html`)) } catch {}
          try { unlinkSync(PUB_META) } catch {}
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ ok: true }))
          return
        }
        res.statusCode = 405; res.end()
      })
      // GET /p/:slug — serve published pages
      server.middlewares.use('/p', (req, res, next) => {
        const slug = req.url.replace(/^\//, '').replace(/\?.*$/, '')
        if (slug.includes('..') || slug.includes('/')) { res.statusCode = 400; res.end('Bad request'); return }
        const pubDir = resolve(PUB_DIR)
        const file = resolve(PUB_DIR, `${slug}.html`)
        if (!file.startsWith(pubDir)) { res.statusCode = 403; res.end('Forbidden'); return }
        if (!existsSync(file)) { res.statusCode = 404; res.end('Not found'); return }
        res.setHeader('Content-Type', 'text/html; charset=utf-8')
        res.end(readFileSync(file, 'utf-8'))
      })
    },
  }
}

export default defineConfig({
  base: '/admin/newsletter/',
  define: {
    __APP_VERSION__: JSON.stringify(appVersion),
  },
  plugins: [react(), serveFontsPlugin(), emailApiPlugin(), translateApiPlugin(), insightApiPlugin(), snapshotsApiPlugin(), gsheetExportPlugin(), publishApiPlugin()],
  build: {
    rollupOptions: {
      output: { manualChunks },
    },
  },
  server: {
    proxy: {
      ...gsheetsProxy,
    },
  },
})
