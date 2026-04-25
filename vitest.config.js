import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['src/**/*.test.{js,jsx}', 'test/**/*.test.{js,jsx}'],
    environment: 'node',
    globals: false,
  },
})
