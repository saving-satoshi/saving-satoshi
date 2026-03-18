import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './test/e2e',
  // run tests sequentially locally to avoid race conditions in the backend. In CI, we
  // run 2 tests at a time as it can handle it and it speeds up the feedback loop.
  workers: process.env.CI ? 2 : 1,
  // tests will run up to 3 times to account for flakiness
  retries: 2,
  // abort the whole test run if a test fails after the retries
  maxFailures: 1,

  use: {
    // the `chromium` channel allows us to use the headless mode
    // https://playwright.dev/docs/browsers#chromium-new-headless-mode
    ...devices['Desktop Chrome'],
    channel: 'chromium',

    baseURL: 'http://localhost:3000',
    viewport: { width: 1920, height: 1080 },
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  webServer: {
    command: 'yarn build && yarn start',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
  },
})
