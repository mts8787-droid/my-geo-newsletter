// 다크/라이트 테마 공통 헬퍼 — /admin/, /admin/harness 외 /hiro, /hiro/view, /hiro/chart-library 에서 사용.
// CSS 변수로 색상 토큰 정의 + localStorage 'hiro-theme' 저장 + 우측 상단 토글 버튼.

export function themeStyle() {
  return `<style>
:root, [data-theme="dark"] {
  --bg-primary:#0F172A; --bg-card:#1E293B; --bg-code:#0F172A;
  --text-primary:#E2E8F0; --text-strong:#F8FAFC; --text-desc:#CBD5E1;
  --text-sub:#94A3B8; --text-muted:#64748B;
  --border:#334155; --border-soft:#1E293B;
  --accent:#CF0652;
  --hero-bg:#3F1D2A; --hero-border:#7F1D3D; --hero-hover-bg:#4F2535; --hero-title:#FCA5A5;
}
[data-theme="light"] {
  --bg-primary:#F8FAFC; --bg-card:#FFFFFF; --bg-code:#F1F5F9;
  --text-primary:#1E293B; --text-strong:#0F172A; --text-desc:#475569;
  --text-sub:#64748B; --text-muted:#94A3B8;
  --border:#E2E8F0; --border-soft:#F1F5F9;
  --accent:#CF0652;
  --hero-bg:#FFF1F5; --hero-border:#FECDD3; --hero-hover-bg:#FFE4ED; --hero-title:#BE123C;
}
#theme-toggle{position:fixed;top:14px;right:14px;background:var(--bg-card);border:1px solid var(--border);color:var(--text-strong);padding:6px 14px;border-radius:8px;font-size:16px;cursor:pointer;z-index:9999;font-family:inherit;box-shadow:0 2px 8px rgba(0,0,0,.15);transition:transform .15s}
#theme-toggle:hover{transform:scale(1.05);border-color:var(--accent)}
</style>
<script>
(function(){
  var KEY='hiro-theme';
  var saved=localStorage.getItem(KEY)||'dark';
  document.documentElement.setAttribute('data-theme',saved);
  window.__toggleTheme=function(){
    var cur=document.documentElement.getAttribute('data-theme');
    var next=cur==='light'?'dark':'light';
    document.documentElement.setAttribute('data-theme',next);
    localStorage.setItem(KEY,next);
    var btn=document.getElementById('theme-toggle');
    if(btn) btn.textContent=next==='light'?'🌙':'☀️';
  };
  document.addEventListener('DOMContentLoaded',function(){
    var btn=document.getElementById('theme-toggle');
    if(btn){
      var cur=document.documentElement.getAttribute('data-theme');
      btn.textContent=cur==='light'?'🌙':'☀️';
    }
  });
})();
</script>`
}

export function themeToggleButton() {
  return `<button id="theme-toggle" onclick="__toggleTheme()" title="테마 전환 (다크/라이트)">☀️</button>`
}
