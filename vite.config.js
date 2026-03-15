import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

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

export default defineConfig({
  plugins: [react(), emailApiPlugin()],
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
