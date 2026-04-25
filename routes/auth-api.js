// ─── 관리자 인증 — /admin/login HTML + /api/auth/login,logout API ────────
import { Router } from 'express'
import {
  ADMIN_PASSWORD,
  activeSessions,
  getSessionToken,
  createSessionToken,
  revokeSessionToken,
} from '../lib/auth.js'

// ─── 로그인 시도 횟수 제한 (in-memory; 멀티 인스턴스시 Redis 권장) ────────
export const loginAttempts = new Map()
const MAX_LOGIN_ATTEMPTS = 5
const LOGIN_WINDOW_MS = 15 * 60 * 1000

export const authRouter = Router()

// ─── /admin/login HTML 페이지 ──────────────────────────────────────────
authRouter.get('/admin/login', (req, res) => {
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

// ─── 로그인 API (rate-limited) ─────────────────────────────────────────
authRouter.post('/api/auth/login', (req, res) => {
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

// ─── 로그아웃 ──────────────────────────────────────────────────────────
authRouter.post('/api/auth/logout', (req, res) => {
  const token = getSessionToken(req)
  revokeSessionToken(token)
  res.clearCookie('admin_token', { path: '/' })
  res.json({ ok: true })
})
