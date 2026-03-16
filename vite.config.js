import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import nodemailer from 'nodemailer'
import translate from 'google-translate-api-x'
import dotenv from 'dotenv'
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs'
import { resolve } from 'path'

const pkg = JSON.parse(readFileSync('./package.json', 'utf-8'))

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

export default defineConfig({
  define: {
    __APP_VERSION__: JSON.stringify(pkg.version),
  },
  plugins: [react(), emailApiPlugin(), translateApiPlugin(), snapshotsApiPlugin(), gsheetExportPlugin()],
  server: {
    proxy: {
      '/gsheets-proxy': {
        target: 'https://docs.google.com',
        changeOrigin: true,
        secure: true,
        rewrite: path => path.replace(/^\/gsheets-proxy/, ''),
        configure: proxy => {
          proxy.on('proxyRes', proxyRes => {
            delete proxyRes.headers['cache-control']
            delete proxyRes.headers['expires']
            delete proxyRes.headers['etag']
            proxyRes.headers['cache-control'] = 'no-store, no-cache, must-revalidate'
          })
        },
      },
    },
  },
})
