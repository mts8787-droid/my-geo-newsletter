import { describe, it, expect, vi, beforeEach } from 'vitest'

vi.mock('./storage.js', () => ({
  VALID_MODES: ['newsletter', 'dashboard', 'citation', 'monthly-report', 'weekly-report', 'visibility'],
}))

const { validateMode } = await import('./middleware.js')

function makeRes() {
  const res = {}
  res.status = vi.fn(() => res)
  res.json = vi.fn(() => res)
  return res
}

describe('validateMode', () => {
  let next
  beforeEach(() => { next = vi.fn() })

  it('허용된 mode → next 호출', () => {
    const req = { params: { mode: 'newsletter' } }
    const res = makeRes()
    validateMode(req, res, next)
    expect(next).toHaveBeenCalledOnce()
    expect(res.status).not.toHaveBeenCalled()
  })

  it('모든 VALID_MODES 통과', () => {
    const modes = ['newsletter', 'dashboard', 'citation', 'monthly-report', 'weekly-report', 'visibility']
    for (const mode of modes) {
      const req = { params: { mode } }
      const res = makeRes()
      const n = vi.fn()
      validateMode(req, res, n)
      expect(n).toHaveBeenCalledOnce()
    }
  })

  it('잘못된 mode → 400 반환, next 미호출', () => {
    const req = { params: { mode: 'invalid-mode' } }
    const res = makeRes()
    validateMode(req, res, next)
    expect(res.status).toHaveBeenCalledWith(400)
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({
      ok: false,
      error: expect.stringContaining('invalid mode: invalid-mode'),
    }))
    expect(next).not.toHaveBeenCalled()
  })

  it('빈 mode → 400 반환', () => {
    const req = { params: { mode: '' } }
    const res = makeRes()
    validateMode(req, res, next)
    expect(res.status).toHaveBeenCalledWith(400)
    expect(next).not.toHaveBeenCalled()
  })

  it('에러 메시지에 허용 mode 목록 포함', () => {
    const req = { params: { mode: 'xyz' } }
    const res = makeRes()
    validateMode(req, res, next)
    const errMsg = res.json.mock.calls[0][0].error
    expect(errMsg).toContain('newsletter')
    expect(errMsg).toContain('dashboard')
  })
})
