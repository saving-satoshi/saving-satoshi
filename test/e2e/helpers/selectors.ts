import { Locator, Page } from '@playwright/test'

/**
 * Centralized selector utilities for e2e tests.
 * Prefer semantic selectors (role, label, text) over CSS selectors.
 * Only use CSS selectors when semantic alternatives aren't available.
 */

// ─── Semantic Selectors ─────────────────────────────────────────────────────

export function getNextButton(page: Page): Locator {
  return page.getByRole('button', { name: /next/i })
}

export function getContinueButton(page: Page): Locator {
  return page.getByRole('button', { name: /continue/i })
}

export function getSuccessText(page: Page): Locator {
  return page.getByText(/success/i)
}

export function getInputField(page: Page, label?: string): Locator {
  if (label) {
    return page.getByLabel(label)
  }
  // Fallback for inputs without labels
  return page.getByRole('textbox')
}

/**
 * Get any progress button (continue, next, start, complete, let's go, or tell me more).
 * Different pages use different button text for progression.
 */
export function getProgressButton(page: Page): Locator {
  return page
    .getByRole('button', {
      name: /continue|next|start|complete|let's go|tell me more/i,
    })
    .last()
}

export function getSubmitButton(page: Page): Locator {
  return page.getByRole('button', { name: /submit/i })
}

// ─── CSS Selectors (fallbacks for components without accessible roles) ──────

/**
 * Terminal component uses custom styling.
 * Note: Terminal uses a custom textbox, not a native input element.
 */
export const TERMINAL_WRAPPER = '.react-terminal-wrapper'

/**
 * Success indicator styling (green background).
 */
export const SUCCESS_INDICATOR = '[class*="bg-green"], [class*="success"]'

// ─── Helper Functions ───────────────────────────────────────────────────────

export function getTerminal(page: Page): Locator {
  return page.locator(TERMINAL_WRAPPER)
}

export function getTerminalInput(page: Page): Locator {
  // Terminal uses a custom textbox element, not a native input.
  return page.locator(TERMINAL_WRAPPER).getByRole('textbox')
}

/**
 * Check if a success indicator is visible on the page.
 */
export async function isSuccessVisible(page: Page): Promise<boolean> {
  // Try semantic selector first
  const successText = getSuccessText(page)
  if (await successText.isVisible().catch(() => false)) {
    return true
  }
  // Fall back to CSS selector for success indicators
  const successIndicator = page.locator(SUCCESS_INDICATOR)
  return successIndicator.isVisible().catch(() => false)
}

/**
 * Wait for success indicator to appear.
 * Different challenge types show different success messages.
 */
export async function waitForSuccess(
  page: Page,
  timeout = 30000
): Promise<void> {
  // Success patterns: "Nicely done!", "Success", or the Next button appearing.
  // Use .first() because multiple success indicators may be visible.
  const successLocator = page
    .getByText(/nicely done|success/i)
    .or(page.getByRole('button', { name: /next/i }))
    .or(page.locator(SUCCESS_INDICATOR))
    .first()
  await successLocator.waitFor({ timeout })
}
