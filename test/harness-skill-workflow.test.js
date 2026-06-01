// HIRO Skill body 워크플로우 무결성 검증.
// 각 SKILL.md 의 body 가 참조하는 다른 Skill / Rule 이 실제 존재하는지.
// Skill 인덱스 (data / design / newsletter) 가 sub-skill 을 명시 참조하는지.

import { describe, it, expect } from 'vitest'
import fs from 'fs'

const SKILLS = fs.readdirSync('.claude/skills')
const SKILL_BODIES = {}
SKILLS.forEach(name => {
  SKILL_BODIES[name] = fs.readFileSync(`.claude/skills/${name}/SKILL.md`, 'utf8')
})

describe('HIRO Skill 인덱스가 sub-skill 명시 참조', () => {
  // 인덱스 SKILL → 분기 명시 검증
  const indices = {
    data: ['data-add', 'data-debug', 'data-refactor'],
    design: ['design-layout', 'design-chart', 'design-component', 'design-tune'],
    newsletter: ['newsletter-make', 'newsletter-debug', 'newsletter-send'],
  }

  Object.entries(indices).forEach(([index, subskills]) => {
    it(`${index} 인덱스가 ${subskills.length} sub-skill 모두 명시 참조`, () => {
      const body = SKILL_BODIES[index]
      const missing = subskills.filter(s => !body.includes(s))
      if (missing.length > 0) {
        throw new Error(`인덱스 ${index} 가 다음 sub-skill 참조 누락: ${missing.join(', ')}`)
      }
      expect(missing).toEqual([])
    })

    subskills.forEach(sub => {
      it(`sub-skill ${sub} 실제 존재 + frontmatter OK`, () => {
        expect(SKILLS).toContain(sub)
        const fm = SKILL_BODIES[sub].match(/^---\n([\s\S]*?)\n---/)
        expect(fm, `${sub} frontmatter 없음`).toBeTruthy()
      })
    })
  })
})

describe('HIRO Skill body 가 참조하는 Rule 파일 존재', () => {
  // Skill body 의 `.claude/rules/*.md` 참조가 실제 존재해야
  SKILLS.forEach(name => {
    const body = SKILL_BODIES[name]
    const ruleRefs = [...body.matchAll(/\.claude\/rules\/[\w\-\/]+\.md/g)].map(m => m[0])
    const uniqueRefs = [...new Set(ruleRefs)]

    if (uniqueRefs.length > 0) {
      it(`${name} 의 Rule 참조 ${uniqueRefs.length} 개 모두 존재`, () => {
        const missing = uniqueRefs.filter(r => !fs.existsSync(r))
        if (missing.length > 0) {
          throw new Error(`${name} → 깨진 Rule 참조: ${missing.join(', ')}`)
        }
        expect(missing).toEqual([])
      })
    }
  })
})

describe('HIRO Sub-Agent 정의 무결성', () => {
  const agents = fs.readdirSync('.claude/agents').filter(n => n.endsWith('.md'))

  agents.forEach(name => {
    it(`${name} — tools 필드 명시 (read-only 명확)`, () => {
      const content = fs.readFileSync(`.claude/agents/${name}`, 'utf8')
      const fm = content.match(/^---\n([\s\S]*?)\n---/)
      expect(fm, `frontmatter 없음`).toBeTruthy()
      // tools 명시 — 권한 범위 명확
      expect(fm[1]).toMatch(/^tools:\s*/m)
    })
  })
})
