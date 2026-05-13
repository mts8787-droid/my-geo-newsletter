// ─── 게시본 공개 라우트 — /p/:slug, /p/progress-tracker ─────────────────
// IP 화이트리스트 검증을 통과한 클라이언트만 열람 가능
import { Router } from 'express'
import express from 'express'
import { readFileSync, existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import { PUB_DIR } from '../lib/storage.js'
import { isIpAllowed } from '../lib/network.js'
import { CHANNELS, readMetaFile } from './publish.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const PROJECT_ROOT = join(__dirname, '..')

// ─── SEC2 — Content-Security-Policy (게시 HTML 전용) ──────────────────
// 게시 HTML은 인라인 style/script를 광범위 사용하므로 unsafe-inline 허용,
// 외부 도메인 화이트리스트:
//  - fonts.cdnfonts.com: LG Smart 웹폰트
// (Progress Tracker v2는 본 레포에 통합되어 same-origin이므로 외부 frame-src 불필요)
const PUBLISHED_CSP = [
  "default-src 'self'",
  "style-src 'self' 'unsafe-inline' https://fonts.cdnfonts.com",
  "font-src 'self' https://fonts.cdnfonts.com data:",
  "script-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https:",
  "frame-src 'self'",
  "frame-ancestors 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
].join('; ')

function setPublishedSecurityHeaders(res) {
  res.set('Content-Security-Policy', PUBLISHED_CSP)
  res.set('X-Content-Type-Options', 'nosniff')
  res.set('Referrer-Policy', 'strict-origin-when-cross-origin')
}

// ─── 403 응답 본문 ─────────────────────────────────────────────────────
function send403Page(res, kind = 'full') {
  res.status(403)
  res.set('Content-Type', 'text/html; charset=utf-8')
  if (kind === 'simple') {
    return res.send('<!DOCTYPE html><html><head><meta charset="UTF-8"></head><body style="background:#0F172A;display:flex;align-items:center;justify-content:center;height:100vh;font-family:sans-serif;color:#64748B"><p>403 — Access Denied</p></body></html>')
  }
  res.send(`<!DOCTYPE html><html lang="ko"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Access Denied</title><style>*{margin:0;padding:0;box-sizing:border-box}body{min-height:100vh;display:flex;align-items:center;justify-content:center;background:#0F172A;font-family:'LG Smart','Arial Narrow',Arial,sans-serif;color:#E2E8F0}.w{text-align:center;padding:40px 24px}h1{font-size:48px;font-weight:700;color:#334155;margin-bottom:16px}p{font-size:15px;color:#64748B}</style></head><body><div class="w"><h1>403</h1><p>접근이 허용되지 않은 IP입니다.</p></div></body></html>`)
}

export const publishedRouter = Router()

// ─── /p/progress-tracker-v2 (정적 SPA — geo-progress-tracker-v2 통합) ──
publishedRouter.use('/p/progress-tracker-v2', (req, res, next) => {
  if (!isIpAllowed(req)) return send403Page(res, 'simple')
  setPublishedSecurityHeaders(res)
  next()
})
publishedRouter.use('/p/progress-tracker-v2', express.static(join(PROJECT_ROOT, 'dist-tracker-v2')))
publishedRouter.get('/p/progress-tracker-v2', (req, res) => {
  res.sendFile(join(PROJECT_ROOT, 'dist-tracker-v2', 'tracker-v2.html'))
})
publishedRouter.get('/p/progress-tracker-v2/*', (req, res) => {
  res.sendFile(join(PROJECT_ROOT, 'dist-tracker-v2', 'tracker-v2.html'))
})

// ─── /p/GEO-Monthly-Report-{KO|EN} — 월별 리포트 허브 페이지 ─────────────
const HUB_NOTICE_KO = `<p>본 Letter는 ChatGPT, Gemini와 같은 LLM 서비스 내에서 소비자의 질의에 대해 <strong>1) 자사 브랜드가 얼마나 가시성 있게 노출</strong>되고 있는지, <strong>2) LLM 서비스가 자사를 언급 시 인용의 주요 출처(Citation)</strong>는 어떠한지 현황을 공유하여, 주요 LLM 응답에서의 브랜드 노출과 인용 출처를 체계적으로 관리하는 데 도움을 드리고자 합니다.</p><br><p>이에 <strong>10개 주요 국가</strong>(미국, 영국, 독일, 브라질, 인도, 멕시코, 스페인, 호주, 베트남, 캐나다)를 대상으로, 브랜드 노출 <strong>가시성(Visibility)</strong>과 출처 사이트의 <strong>인용(Citation)</strong>, 콘텐츠의 <strong>AI 가독성(Readability%)</strong> 지표를 기반으로 생성형 AI가 시장·제품군별로 LG전자를 어떻게 이해하고 활용하고 있는지에 대한 현황을 제시하고자 합니다.</p>`
const HUB_NOTICE_EN = `<p>This Letter aims to share <strong>1) how visibly our brand is exposed</strong> and <strong>2) which sources are primarily cited (Citation)</strong> when LLM services like ChatGPT and Gemini answer consumer queries — helping us systematically manage brand exposure and citation sources in major LLM responses.</p><br><p>Across <strong>10 key countries</strong> (USA, UK, Germany, Brazil, India, Mexico, Spain, AU, Vietnam, Canada), we track <strong>Visibility</strong>, <strong>Citation</strong>, and content <strong>AI Readability(%)</strong> — presenting how generative AI understands and utilizes LG Electronics across markets and product categories.</p>`

const HUB_CSS = `*{margin:0;padding:0;box-sizing:border-box}
body{min-height:100vh;display:flex;align-items:center;justify-content:center;background:#0F172A;font-family:'LGEIText','LG Smart','Arial Narrow',Arial,sans-serif;color:#E2E8F0;padding:32px 16px}
.wrap{text-align:center;max-width:540px;width:100%}
.logo{font-size:11px;font-weight:700;letter-spacing:3px;color:#64748B;text-transform:uppercase;margin-bottom:28px}
h1{font-size:22px;font-weight:700;color:#F8FAFC;margin-bottom:8px;line-height:1.4}
.date{font-size:13px;color:#64748B;margin-bottom:32px}
.notice{text-align:left;background:#1E293B;border:1px solid #334155;border-radius:10px;padding:20px 22px;margin-bottom:32px;font-size:12px;line-height:1.85;color:#94A3B8}
.notice strong{color:#E2E8F0;font-weight:700}
.links{display:flex;flex-direction:column;gap:10px;align-items:center}
a.btn{display:flex;align-items:center;justify-content:center;gap:8px;width:280px;padding:13px 0;border-radius:10px;text-decoration:none;font-size:14px;font-weight:700;transition:transform .15s,box-shadow .15s}
a.btn:hover{transform:translateY(-2px);box-shadow:0 8px 24px rgba(0,0,0,.3)}
.btn-prim{background:#CF0652;color:#fff}
.btn-sec{background:#1E293B;color:#E2E8F0;border:1px solid #334155}
.btn-sec:hover{border-color:#64748B}
.section-label{font-size:11px;font-weight:700;letter-spacing:1px;color:#64748B;text-transform:uppercase;margin-top:18px;margin-bottom:6px}
.empty{font-size:13px;color:#64748B;padding:14px}
.admin{margin-top:40px;font-size:11px;color:#475569}
.admin a{color:#64748B;text-decoration:none;border-bottom:1px solid #334155;padding-bottom:1px}
.admin a:hover{color:#94A3B8}`

function renderNewsletterHub(lang) {
  const nl = CHANNELS.newsletter
  const dash = CHANNELS.dashboard
  const meta = readMetaFile(nl.metaFile)
  const months = (meta?.months && typeof meta.months === 'object') ? meta.months : {}
  const sorted = Object.entries(months)
    .filter(([m]) => /^\d{4}-(0[1-9]|1[0-2])$/.test(m))
    .sort((a, b) => b[0].localeCompare(a[0]))
  const isEn = lang === 'en'
  const t = isEn ? {
    title: 'GEO Monthly Report',
    sectionMonths: 'Monthly Reports',
    sectionDashboard: 'Dashboard',
    dashboardLabel: 'Open Dashboard',
    noticeHtml: HUB_NOTICE_EN,
    emptyMsg: 'No monthly reports published yet.',
    adminPrefix: 'Admin: ',
    adminLabel: 'admin panel',
    monthLabel: m => {
      const [y, mo] = m.split('-')
      const names = ['','January','February','March','April','May','June','July','August','September','October','November','December']
      return `${names[parseInt(mo)]} ${y}`
    },
  } : {
    title: 'GEO 월간 리포트',
    sectionMonths: '월별 리포트',
    sectionDashboard: '대시보드',
    dashboardLabel: '대시보드 바로가기',
    noticeHtml: HUB_NOTICE_KO,
    emptyMsg: '아직 게시된 월별 리포트가 없습니다.',
    adminPrefix: '관리자: ',
    adminLabel: 'admin 페이지',
    monthLabel: m => {
      const [y, mo] = m.split('-')
      return `${y}년 ${parseInt(mo)}월`
    },
  }
  const targetSlug = isEn ? nl.enSlug : nl.koSlug
  const monthsHtml = sorted.length
    ? sorted.map(([m]) => `<a class="btn btn-prim" href="/p/${targetSlug}-${m}">${t.monthLabel(m)}</a>`).join('')
    : `<p class="empty">${t.emptyMsg}</p>`
  const dashboardSlug = isEn ? dash.enSlug : dash.koSlug
  return `<!DOCTYPE html><html lang="${isEn ? 'en' : 'ko'}"><head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${t.title}</title>
<style>${HUB_CSS}</style></head><body>
<div class="wrap">
  <div class="logo">LG Electronics</div>
  <h1>${t.title}</h1>
  <div class="notice">${t.noticeHtml}</div>
  <div class="links">
    <p class="section-label">${t.sectionMonths}</p>
    ${monthsHtml}
    <p class="section-label">${t.sectionDashboard}</p>
    <a class="btn btn-sec" href="/p/${dashboardSlug}">${t.dashboardLabel}</a>
  </div>
  <p class="admin">${t.adminPrefix}<a href="/admin/newsletter">${t.adminLabel}</a></p>
</div>
</body></html>`
}

publishedRouter.get('/p/GEO-Monthly-Report-KO', (req, res) => {
  if (!isIpAllowed(req)) return send403Page(res)
  setPublishedSecurityHeaders(res)
  res.set('Content-Type', 'text/html; charset=utf-8')
  res.send(renderNewsletterHub('ko'))
})
publishedRouter.get('/p/GEO-Monthly-Report-EN', (req, res) => {
  if (!isIpAllowed(req)) return send403Page(res)
  setPublishedSecurityHeaders(res)
  res.set('Content-Type', 'text/html; charset=utf-8')
  res.send(renderNewsletterHub('en'))
})

// ─── /p/:slug (게시된 HTML 단일 파일 + CSP) ─────────────────────────────
publishedRouter.get('/p/:slug', (req, res) => {
  if (!isIpAllowed(req)) return send403Page(res)
  const slug = req.params.slug
  // 경로 traversal 방어 (Appendix B S9)
  if (!/^[a-zA-Z0-9\-]+$/.test(slug)) return res.status(400).send('Invalid slug')
  const file = join(PUB_DIR, `${slug}.html`)
  if (!existsSync(file)) return res.status(404).send('Not found')
  setPublishedSecurityHeaders(res)
  res.set('Content-Type', 'text/html; charset=utf-8')
  res.send(readFileSync(file, 'utf-8'))
})
