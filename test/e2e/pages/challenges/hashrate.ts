import { Page } from '@playwright/test'
import { BasePage } from '../basePage'
import { getStartButton, getContinueButton } from '../../helpers/selectors'

export class HashRateChallengePage extends BasePage {
  constructor(page: Page) {
    super(page)
  }

  /**
   * Click the Start button to begin mining simulation.
   */
  async clickStart(): Promise<void> {
    const startBtn = getStartButton(this.page)
    await startBtn.click()
  }

  /**
   * Wait for the mining simulation to complete.
   * Chapter 3 hashrate challenges show various buttons when done:
   * - "Continue" (most challenges)
   * - "Tell me more" (split-2, which has multi-step explanation)
   */
  async waitForCompletion(timeout = 60000): Promise<void> {
    // Wait for either success text or a completion button to appear.
    const completionLocator = this.page
      .getByRole('button', { name: /continue|tell me more/i })
      .or(this.page.getByText(/nicely done|success/i))
      .first()
    await completionLocator.waitFor({ timeout })
  }

  /**
   * Start and wait for completion.
   */
  async solve(): Promise<void> {
    await this.clickStart()
    await this.waitForCompletion()
  }
}
