import process from 'node:process'
import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  // e2e 用例目录
  testDir: 'e2e',
  fullyParallel: true,
  // CI 下禁止 --forbid-only（避免用例里残留 test.only 导致整条流水线空跑）
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: 'html',

  use: {
    baseURL: 'http://localhost:3333',
    // 首次重试时录制 trace，失败用例可打开报告回放
    trace: 'on-first-retry',
  },

  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
  ],

  // 对构建产物（vite preview）跑用例，而非 dev server，保证测的是真实上线形态
  webServer: {
    command: 'pnpm build && pnpm preview --port 3333 --strictPort',
    url: 'http://localhost:3333',
    reuseExistingServer: !process.env.CI,
  },
})
