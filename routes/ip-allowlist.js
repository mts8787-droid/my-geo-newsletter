// ─── IP Allowlist API — /api/ip-allowlist, /api/my-ip ────────────────────
import { Router } from 'express'
import crypto from 'crypto'
import { readIpAllowlist, writeIpAllowlist } from '../lib/storage.js'
import { getRealIp } from '../lib/network.js'
import { validateBody, IpAllowlistPostSchema } from '../lib/validate.js'

export const ipRouter = Router()

ipRouter.get('/api/ip-allowlist', (req, res) => {
  res.json(readIpAllowlist())
})

ipRouter.post('/api/ip-allowlist', validateBody(IpAllowlistPostSchema), (req, res) => {
  const { cidr, country, label } = req.body
  // Zod 정규식 통과 후 옥텟·CIDR 비트 범위 추가 검증
  const m = cidr.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})(\/(\d{1,2}))?$/)
  if (!m || [m[1],m[2],m[3],m[4]].some(o => parseInt(o) > 255) || (m[6] && parseInt(m[6]) > 32)) {
    return res.status(400).json({ ok: false, error: 'CIDR 옥텟/비트 범위가 올바르지 않습니다 (예: 192.168.0.0/16)' })
  }
  const entry = {
    id: crypto.randomBytes(8).toString('hex'),
    cidr,
    country: country || '',
    label: label || '',
    createdAt: Date.now(),
  }
  const list = [...readIpAllowlist(), entry]
  writeIpAllowlist(list)
  res.json({ ok: true, list })
})

ipRouter.delete('/api/ip-allowlist/:id', (req, res) => {
  const list = readIpAllowlist().filter(e => e.id !== req.params.id)
  writeIpAllowlist(list)
  res.json({ ok: true, list })
})

ipRouter.get('/api/my-ip', (req, res) => {
  res.json({ ip: getRealIp(req) })
})
