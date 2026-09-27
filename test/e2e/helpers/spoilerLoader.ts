import { Page } from '@playwright/test'

// Selector for code block spoilers (syntax highlighted).
const CODE_BLOCK_SPOILER = 'pre span[class*="language-"]'

/**
 * Extract answer code from the Help modal's spoiler toggle.
 * Only works for lessons with actual runnable code in spoilers.
 */
export async function getAnswerFromSpoiler(page: Page): Promise<string> {
  // 1. Click help icon (the "?" button in navbar).
  // Use .last() because the first match is the tooltip span, second is the clickable div.
  const helpIcon = page.locator('nav').getByText('?').last()
  await helpIcon.click()

  // 2. Wait for help modal to open and find the spoiler toggle.
  const spoilerLabel = page.getByText('Yes, I want to see the solution')
  await spoilerLabel.waitFor({ timeout: 5000 })

  // 3. Toggle the spoiler checkbox.
  // The checkbox is visually hidden, so use JS to toggle it.
  const checkbox = page.getByRole('checkbox')
  await checkbox.evaluate((el: HTMLInputElement) => el.click())

  // 4. Wait for and extract spoiler content.
  // Try code block first (ScriptingChallenge), then plain text (InputChallenge).
  let answer = ''

  const codeBlock = page.locator(CODE_BLOCK_SPOILER)
  // Copy button has title="Copy", not text content.
  // Use .first() because there may be multiple Copy buttons (e.g., in terminal challenges).
  const copyButton = page.getByRole('button', { name: /copy/i }).first()

  // Wait for either spoiler type to appear.
  await Promise.race([
    codeBlock.waitFor({ timeout: 5000 }).catch(() => {}),
    copyButton.waitFor({ timeout: 5000 }).catch(() => {}),
  ])

  if (await codeBlock.isVisible().catch(() => false)) {
    // Code block spoiler (syntax highlighted).
    answer = (await codeBlock.textContent()) ?? ''
  } else if (await copyButton.isVisible().catch(() => false)) {
    // Plain text spoiler (has Copy button sibling).
    // Get the parent container's text content (button has no text, just icon).
    const container = copyButton.locator('..')
    answer = ((await container.textContent()) ?? '').trim()
  }

  // 5. Close modal by clicking the X button.
  await page.getByRole('button', { name: 'Close' }).click()

  return answer
}

/**
 * Extract multiple answers from the Help modal's spoiler toggle.
 * Used for DoubleInputChallenge pages that have two answers.
 */
export async function getAnswersFromSpoiler(page: Page): Promise<string[]> {
  // 1. Click help icon (the "?" button in navbar).
  const helpIcon = page.locator('nav').getByText('?').last()
  await helpIcon.click()

  // 2. Wait for help modal to open and find the spoiler toggle.
  const spoilerLabel = page.getByText('Yes, I want to see the solution')
  await spoilerLabel.waitFor({ timeout: 5000 })

  // 3. Toggle the spoiler checkbox.
  const checkbox = page.getByRole('checkbox')
  await checkbox.evaluate((el: HTMLInputElement) => el.click())

  // 4. Wait for Copy buttons to appear (one per answer).
  const copyButtons = page.getByRole('button', { name: /copy/i })
  await copyButtons.first().waitFor({ timeout: 5000 })

  // 5. Extract all answers from containers with Copy buttons.
  const answers: string[] = []
  const count = await copyButtons.count()
  for (let i = 0; i < count; i++) {
    const container = copyButtons.nth(i).locator('..')
    const text = ((await container.textContent()) ?? '').trim()
    if (text) {
      answers.push(text)
    }
  }

  // 6. Close modal by clicking the X button.
  await page.getByRole('button', { name: 'Close' }).click()

  return answers
}
