// ─── 뉴스레터 복사용 페이지 빌더 (클라이언트·서버 공용, React 비의존) ────────────
// 사용처: Sidebar '복사용 페이지 열기'(새 탭) + routes/publish.js 월별 게시(-Copy 정적 페이지).
// 발송 메일과 동일한 KO+EN 합본을 보여주고, 버튼 한 번으로 본문 전체 선택+복사한다.

// 두 언어(KO/EN) 이메일 HTML 을 하나의 문서로 이어붙임 — KO 본문 → 구분선 → EN 본문.
// 각 generateHTML 은 완전한 HTML 문서를 반환하므로, KO 문서의 <body> 안에 EN 본문 내용만 삽입한다.
export function mergeBilingualEmail(htmlKo, htmlEn) {
  const bodyRe = /<body[^>]*>([\s\S]*)<\/body>/i
  const enBody = (htmlEn.match(bodyRe) || [])[1]
  if (!enBody) {
    console.warn('[mergeBilingualEmail] EN <body> 추출 실패 — KO 단독 발송')
    return htmlKo
  }
  const divider = `
  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin:0;background:#F1F5F9;">
    <tr><td align="center" style="padding:28px 16px;">
      <div style="border-top:2px dashed #CBD5E1;max-width:600px;margin:0 auto;padding-top:18px;font-family:'LGEIText','LG Smart','Arial Narrow',Arial,sans-serif;font-size:12px;font-weight:700;color:#64748B;letter-spacing:2px;">&#9660;&nbsp;&nbsp;ENGLISH VERSION&nbsp;&nbsp;&#9660;</div>
    </td></tr>
  </table>`
  if (!/<\/body>/i.test(htmlKo)) {
    console.warn('[mergeBilingualEmail] KO </body> 미발견 — 단순 연결')
    return htmlKo + divider + enBody
  }
  return htmlKo.replace(/<\/body>/i, `${divider}${enBody}</body>`)
}

// 합본 메일 HTML 을 복사용 페이지로 감싼다 — 상단 고정 '전체 선택 + 복사' 바 + 임베드 스크립트.
// 차트 <img>(/api/hl-chart)는 로드 시 data: URI 로 임베드 — 붙여넣은 메일에서도 수신자가
// 차트를 볼 수 있게 (SMTP 발송 경로의 CID 첨부와 같은 이유: 외부 URL 은 수신 측 접근 불가).
export function buildCopyPageHtml(mailHtml, title) {
  const head = (mailHtml.match(/<head[^>]*>([\s\S]*?)<\/head>/i) || [])[1] || ''
  const body = (mailHtml.match(/<body[^>]*>([\s\S]*)<\/body>/i) || [])[1] || mailHtml
  const script = `(function(){
    var btn = document.getElementById('copybtn')
    var msg = document.getElementById('copymsg')
    var imgs = Array.prototype.slice.call(document.querySelectorAll('#mailwrap img')).filter(function(im){
      return (im.getAttribute('src') || '').indexOf('/api/hl-chart') !== -1
    })
    var left = imgs.length
    btn.disabled = true
    function ready(){ btn.disabled = false; msg.textContent = '버튼을 누르면 본문 전체가 선택·복사됩니다 — 메일 작성창에 붙여넣기(Ctrl+V / Cmd+V) 하세요' }
    if (!left) ready()
    imgs.forEach(function(im){
      fetch(im.src).then(function(r){ return r.blob() }).then(function(b){
        return new Promise(function(res){ var fr = new FileReader(); fr.onload = function(){ im.src = fr.result; res() }; fr.readAsDataURL(b) })
      }).catch(function(){}).then(function(){ if (--left <= 0) ready() })
    })
    btn.addEventListener('click', function(){
      var range = document.createRange()
      range.selectNodeContents(document.getElementById('mailwrap'))
      var sel = window.getSelection()
      sel.removeAllRanges()
      sel.addRange(range)
      var ok = false
      try { ok = document.execCommand('copy') } catch(e){}
      if (ok) {
        btn.textContent = '복사 완료 \\u2713'
        btn.style.background = '#14532D'
        msg.textContent = '메일 작성창 본문에 붙여넣기 하세요 — 서식 그대로 들어갑니다'
        setTimeout(function(){ btn.textContent = '전체 선택 + 복사'; btn.style.background = '#CF0652' }, 3000)
      } else {
        msg.textContent = '자동 복사 실패 — 본문이 선택된 상태이니 Ctrl+C (Cmd+C) 를 눌러주세요'
      }
    })
  })()`
  return `<!doctype html><html><head><meta charset="utf-8"><title>${title} — 복사용</title>${head}</head>
<body style="margin:0;background:#E2E8F0">
<div id="copybar" style="position:sticky;top:0;z-index:9999;background:#0F172A;padding:12px 20px;font-family:-apple-system,'Malgun Gothic',sans-serif;display:flex;align-items:center;gap:14px">
<button id="copybtn" style="padding:10px 22px;border:none;border-radius:8px;background:#CF0652;color:#fff;font-size:14px;font-weight:700;cursor:pointer">전체 선택 + 복사</button>
<span id="copymsg" style="color:#94A3B8;font-size:13px">차트 이미지 임베드 중...</span>
</div>
<div id="mailwrap">${body}</div>
<script>${script}</script>
</body></html>`
}
