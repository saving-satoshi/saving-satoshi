import { test as base } from '@playwright/test'

export const test = base.extend({})

// Re-export expect from Playwright test so tests can import both expect and test from
// this file.
export { expect } from '@playwright/test'
