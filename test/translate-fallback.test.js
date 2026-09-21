// 번역 Claude 폴백 — 배치 분할·JSON 배열 추출 (2026-09-21: 운영 Google 차단 대응)
import { describe, it, expect } from 'vitest'
import { _chunkForClaude, _parseJsonArray } from '../routes/translate.js'

describe('_chunkForClaude — 입력 총량 기준 배치 분할', () => {
  it('상한 이하는 한 배치로 묶는다', () => {
    expect(_chunkForClaude(['a', 'b', 'c'], 100)).toEqual([['a', 'b', 'c']])
  })
  it('누적 글자수가 상한을 넘으면 배치를 나눈다 (순서 보존)', () => {
    const texts = ['aaaa', 'bbbb', 'cccc']
    expect(_chunkForClaude(texts, 8)).toEqual([['aaaa', 'bbbb'], ['cccc']])
  })
  it('단일 항목이 상한 초과여도 단독 배치로 포함한다 (누락 X)', () => {
    const big = 'x'.repeat(50)
    expect(_chunkForClaude([big, 'y'], 10)).toEqual([[big], ['y']])
  })
  it('flat 결과가 입력과 동일 순서·길이', () => {
    const texts = Array.from({ length: 17 }, (_, i) => 't'.repeat((i % 5) + 1) + i)
    expect(_chunkForClaude(texts, 12).flat()).toEqual(texts)
  })
})

describe('_parseJsonArray — 모델 출력 방어 파싱', () => {
  it('순수 JSON 배열', () => {
    expect(_parseJsonArray('["a","b"]')).toEqual(['a', 'b'])
  })
  it('코드펜스로 감싼 출력', () => {
    expect(_parseJsonArray('```json\n["hello","world"]\n```')).toEqual(['hello', 'world'])
  })
  it('앞뒤 설명 텍스트 제거', () => {
    expect(_parseJsonArray('결과입니다:\n["x"]\n이상입니다.')).toEqual(['x'])
  })
  it('HTML·이스케이프 보존', () => {
    expect(_parseJsonArray('["<td style=\\"a\\">&nbsp;1,234</td>"]')).toEqual(['<td style="a">&nbsp;1,234</td>'])
  })
  it('배열 아님/파싱 불가 → null', () => {
    expect(_parseJsonArray('{"a":1}')).toBeNull()
    expect(_parseJsonArray('배열 없음')).toBeNull()
    expect(_parseJsonArray('[broken')).toBeNull()
  })
})
