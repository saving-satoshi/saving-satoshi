import { test as base } from '@playwright/test'
import { AuthModal } from '../pages/authModal'
import { InputChallengePage, TerminalChallengePage } from '../pages/challenges'
import { ChaptersPage } from '../pages/chaptersPage'
import { LessonPage } from '../pages/lessonPage'

/**
 * Fixtures for the E2E tests. This is a union of all the Page Object Models (POMs) used
 * in the tests. It is used to extend the base test object with the POMs so that they are
 * available to all tests. This approach is used so each test can use the POMs without
 * having to construct them individually.
 */
type Fixtures = {
  authModal: AuthModal
  lessonPage: LessonPage
  chaptersPage: ChaptersPage
  inputChallenge: InputChallengePage
  terminalChallenge: TerminalChallengePage
}

/**
 * Extend the base test object with the POMs so that they are available to all tests.
 */
export const test = base.extend<Fixtures>({
  // Auth modal POM for UI-based auth flows.
  authModal: async ({ page }, use) => {
    await use(new AuthModal(page))
  },

  // Page Object Models - auto-instantiated for each test.
  lessonPage: async ({ page }, use) => {
    await use(new LessonPage(page))
  },

  chaptersPage: async ({ page }, use) => {
    await use(new ChaptersPage(page))
  },

  inputChallenge: async ({ page }, use) => {
    await use(new InputChallengePage(page))
  },

  terminalChallenge: async ({ page }, use) => {
    await use(new TerminalChallengePage(page))
  },
})

// Re-export expect from Playwright test so tests can import both expect and test from
// this file.
export { expect } from '@playwright/test'
