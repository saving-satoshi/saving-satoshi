import { test as base } from '@playwright/test'
import { AuthModal } from '../pages/authModal'
import {
  HashChallengePage,
  HashRateChallengePage,
  InputChallengePage,
  OpCodeChallengePage,
  ScriptingChallengePage,
  TerminalChallengePage,
  TransactionsChallengePage,
} from '../pages/challenges'
import { ChaptersPage } from '../pages/chaptersPage'
import { LessonPage } from '../pages/lessonPage'
import { AuthHelper } from './auth'

export type Language = 'javascript' | 'python'

/**
 * Fixtures for the E2E tests. This is a union of all the Page Object Models (POMs) used
 * in the tests. It is used to extend the base test object with the POMs so that they are
 * available to all tests. This approach is used so each test can use the POMs without
 * having to construct them individually.
 */
type Fixtures = {
  auth: AuthHelper
  authModal: AuthModal
  lessonPage: LessonPage
  chaptersPage: ChaptersPage
  scriptingChallenge: ScriptingChallengePage
  inputChallenge: InputChallengePage
  hashChallenge: HashChallengePage
  hashRateChallenge: HashRateChallengePage
  terminalChallenge: TerminalChallengePage
  opCodeChallenge: OpCodeChallengePage
  transactionsChallenge: TransactionsChallengePage
}

/**
 * Extend the base test object with the POMs so that they are available to all tests.
 */
export const test = base.extend<Fixtures>({
  // Auth helper - auto-instantiated for each test.
  auth: async ({ page, request }, use) => {
    const auth = new AuthHelper(page, request)
    await use(auth)
  },

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

  scriptingChallenge: async ({ page }, use) => {
    await use(new ScriptingChallengePage(page))
  },

  inputChallenge: async ({ page }, use) => {
    await use(new InputChallengePage(page))
  },

  hashChallenge: async ({ page }, use) => {
    await use(new HashChallengePage(page))
  },

  hashRateChallenge: async ({ page }, use) => {
    await use(new HashRateChallengePage(page))
  },

  terminalChallenge: async ({ page }, use) => {
    await use(new TerminalChallengePage(page))
  },

  opCodeChallenge: async ({ page }, use) => {
    await use(new OpCodeChallengePage(page))
  },

  transactionsChallenge: async ({ page }, use) => {
    await use(new TransactionsChallengePage(page))
  },
})

// Re-export expect from Playwright test so tests can import both expect and test from
// this file.
export { expect } from '@playwright/test'
