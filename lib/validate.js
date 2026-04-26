// ─── Zod 스키마 검증 미들웨어 (K8) ───────────────────────────────────────
import { z } from 'zod'

/**
 * Express 미들웨어 팩토리 — req.body를 Zod 스키마로 검증.
 * 통과 시 req.body를 sanitized 결과로 교체.
 * 실패 시 400 + 첫 issue 메시지 반환.
 */
export function validateBody(schema) {
  return (req, res, next) => {
    const r = schema.safeParse(req.body || {})
    if (!r.success) {
      const issue = r.error.issues[0]
      const msg = issue ? `${issue.path.join('.') || 'body'}: ${issue.message}` : 'invalid body'
      return res.status(400).json({ ok: false, error: msg })
    }
    req.body = r.data
    next()
  }
}

// ─── 공통 스키마 ─────────────────────────────────────────────────────────
const NonEmptyString = z.string().min(1)

export const SnapshotPostSchema = z.object({
  name: NonEmptyString,
  data: z.unknown().refine(v => v != null, 'data 필수'),
})

export const SnapshotPutSchema = z.object({
  data: z.unknown().refine(v => v != null, 'data 필수'),
})

export const SyncDataPostSchema = z.object({
  data: z.unknown().refine(v => v != null, 'data 필수'),
})

export const InsightPostSchema = z.object({
  type: NonEmptyString,
  data: z.unknown().refine(v => v != null, 'data 필수'),
  lang: z.enum(['ko', 'en']).optional(),
  rules: z.string().optional(),
})

export const PublishPostSchema = z.object({
  htmlKo: NonEmptyString,
  htmlEn: NonEmptyString,
  title: z.string().optional(),
})

export const TrackerPublishSchema = z.object({
  data: z.unknown().refine(v => v != null, 'data 필수'),
  dashboard: z.unknown().optional(),
  month: z.string().optional(),
})

export const ArchivePostSchema = z.object({
  period: NonEmptyString,
  insights: z.record(z.string(), z.unknown()).refine(v => v && Object.keys(v).length > 0, 'insights 비어있음'),
})

export const SendEmailSchema = z.object({
  to: NonEmptyString,
  subject: NonEmptyString,
  html: NonEmptyString,
})

export const TranslateSchema = z.object({
  texts: z.array(z.string()).min(1, 'texts 비어있음'),
  from: z.string().optional(),
  to: NonEmptyString,
})

export const IpAllowlistPostSchema = z.object({
  cidr: z.string().regex(
    /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(\/\d{1,2})?$/,
    'CIDR 형식이 올바르지 않습니다 (예: 192.168.0.0/16)',
  ),
  country: z.string().optional(),
  label: z.string().optional(),
})

export const AiSettingsPutSchema = z.object({
  promptRules: z.string().optional(),
  model: z.string().optional(),
  maxTokens: z.union([z.number(), z.string()]).optional(),
  useTools: z.boolean().optional(),
})
