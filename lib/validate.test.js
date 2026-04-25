import { describe, it, expect } from 'vitest'
import {
  SnapshotPostSchema, SyncDataPostSchema, InsightPostSchema,
  PublishPostSchema, ArchivePostSchema, SendEmailSchema,
  TranslateSchema, IpAllowlistPostSchema, AiSettingsPutSchema,
} from './validate.js'

describe('SnapshotPostSchema', () => {
  it('정상 입력', () => {
    const r = SnapshotPostSchema.safeParse({ name: '4월호', data: { x: 1 } })
    expect(r.success).toBe(true)
  })
  it('빈 name 거부', () => {
    expect(SnapshotPostSchema.safeParse({ name: '', data: { x: 1 } }).success).toBe(false)
  })
  it('data 누락 거부', () => {
    expect(SnapshotPostSchema.safeParse({ name: '4월' }).success).toBe(false)
  })
})

describe('InsightPostSchema', () => {
  it('정상 입력 + lang 없어도 통과', () => {
    const r = InsightPostSchema.safeParse({ type: 'product', data: {} })
    expect(r.success).toBe(true)
  })
  it('lang 잘못된 값 거부', () => {
    expect(InsightPostSchema.safeParse({ type: 'product', data: {}, lang: 'jp' }).success).toBe(false)
  })
  it('type 누락 거부', () => {
    expect(InsightPostSchema.safeParse({ data: {} }).success).toBe(false)
  })
})

describe('PublishPostSchema', () => {
  it('htmlKo + htmlEn 필수', () => {
    expect(PublishPostSchema.safeParse({ htmlKo: '<a/>', htmlEn: '<b/>' }).success).toBe(true)
    expect(PublishPostSchema.safeParse({ htmlKo: '<a/>' }).success).toBe(false)
  })
})

describe('SendEmailSchema', () => {
  it('to/subject/html 필수', () => {
    expect(SendEmailSchema.safeParse({ to: 'a@b.c', subject: 's', html: '<p/>' }).success).toBe(true)
    expect(SendEmailSchema.safeParse({ to: 'a@b.c', subject: 's' }).success).toBe(false)
  })
})

describe('TranslateSchema', () => {
  it('texts 배열 + to 필수', () => {
    expect(TranslateSchema.safeParse({ texts: ['hi'], to: 'ko' }).success).toBe(true)
    expect(TranslateSchema.safeParse({ texts: [], to: 'ko' }).success).toBe(false)
    expect(TranslateSchema.safeParse({ to: 'ko' }).success).toBe(false)
  })
})

describe('IpAllowlistPostSchema', () => {
  it('CIDR 정상', () => {
    expect(IpAllowlistPostSchema.safeParse({ cidr: '192.168.0.0/16' }).success).toBe(true)
    expect(IpAllowlistPostSchema.safeParse({ cidr: '10.0.0.1' }).success).toBe(true)
  })
  it('잘못된 형식 거부', () => {
    expect(IpAllowlistPostSchema.safeParse({ cidr: 'abc' }).success).toBe(false)
    expect(IpAllowlistPostSchema.safeParse({ cidr: '192.168' }).success).toBe(false)
  })
})

describe('ArchivePostSchema', () => {
  it('insights 비어있으면 거부', () => {
    expect(ArchivePostSchema.safeParse({ period: '4월', insights: {} }).success).toBe(false)
    expect(ArchivePostSchema.safeParse({ period: '4월', insights: { x: 'y' } }).success).toBe(true)
  })
})

describe('AiSettingsPutSchema', () => {
  it('전부 옵셔널', () => {
    expect(AiSettingsPutSchema.safeParse({}).success).toBe(true)
    expect(AiSettingsPutSchema.safeParse({ model: 'claude-x' }).success).toBe(true)
    expect(AiSettingsPutSchema.safeParse({ maxTokens: 1024 }).success).toBe(true)
    expect(AiSettingsPutSchema.safeParse({ maxTokens: '1024' }).success).toBe(true)
  })
})
