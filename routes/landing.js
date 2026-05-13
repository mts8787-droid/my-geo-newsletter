// ─── Landing — / (게시본 안내 페이지, IP 화이트리스트) ───────────────────
import { Router } from 'express'
import { isIpAllowed } from '../lib/network.js'
import { CHANNELS, readMetaFile } from './publish.js'

export const landingRouter = Router()

landingRouter.get('/', (req, res) => {
  if (!isIpAllowed(req)) {
    res.status(403)
    res.set('Content-Type', 'text/html; charset=utf-8')
    return res.send(`<!DOCTYPE html><html lang="ko"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Access Denied</title><style>*{margin:0;padding:0;box-sizing:border-box}body{min-height:100vh;display:flex;align-items:center;justify-content:center;background:#0F172A;font-family:'LG Smart','Arial Narrow',Arial,sans-serif;color:#E2E8F0}.w{text-align:center;padding:40px 24px}h1{font-size:48px;font-weight:700;color:#334155;margin-bottom:16px}p{font-size:15px;color:#64748B}</style></head><body><div class="w"><h1>403</h1><p>접근이 허용되지 않은 IP입니다.</p></div></body></html>`)
  }
  const nl = CHANNELS.newsletter
  const dash = CHANNELS.dashboard
  const meta = readMetaFile(nl.metaFile)
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
.admin{margin-top:40px;font-size:11px;color:#475569}
.admin a{color:#64748B;text-decoration:none;border-bottom:1px solid #334155;padding-bottom:1px}
.admin a:hover{color:#94A3B8}
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
    <a class="btn btn-ko" href="/p/${nl.koSlug}"><span class="flag">🇰🇷</span> 한국어 리포트</a>
    <a class="btn btn-en" href="/p/${nl.enSlug}"><span class="flag">🇺🇸</span> English Report</a>
    <p class="section-label">Dashboard</p>
    <a class="btn btn-ko" href="/p/${dash.koSlug}"><span class="flag">🇰🇷</span> 한국어 대시보드</a>
    <a class="btn btn-en" href="/p/${dash.enSlug}"><span class="flag">🇺🇸</span> English Dashboard</a>
  </div>
  <p class="admin">관리자: <a href="/admin/newsletter">admin 페이지</a></p>
</div>
</body>
</html>`)
})
