import { Page, Locator, expect } from '@playwright/test'
import {
  getNextButton,
  getContinueButton,
  getProgressButton,
  isSuccessVisible,
  waitForSuccess,
} from '../helpers/selectors'

export class BasePage {
  readonly page: Page

  constructor(page: Page) {
    this.page = page
  }

  /**
   * Wait for the page to fully load (no network activity).
   */
  async waitForPageLoad(): Promise<void> {
    await this.page.waitForLoadState('networkidle')
  }

  /**
   * Check if the success state is visible.
   */
  async isSuccess(): Promise<boolean> {
    return isSuccessVisible(this.page)
  }

  /**
   * Wait for success indicator to appear.
   */
  async waitForSuccess(timeout = 30000): Promise<void> {
    await waitForSuccess(this.page, timeout)
  }

  /**
   * Click the Next button to proceed.
   */
  async clickNext(): Promise<void> {
    const nextBtn = getNextButton(this.page)
    await nextBtn.click()
    await this.waitForPageLoad()
  }

  /**
   * Click the Continue button (used in intros/outros).
   */
  async clickContinue(): Promise<void> {
    const continueBtn = getContinueButton(this.page)
    await continueBtn.click()
    await this.waitForPageLoad()
  }

  /**
   * Click any progress button (continue, next, start, or complete).
   * Use this when different pages may use different button text.
   */
  async clickProgressButton(): Promise<void> {
    const btn = getProgressButton(this.page)
    await btn.click()
    await this.waitForPageLoad()
  }

  /**
   * Wait for success and then click Next.
   */
  async waitForSuccessAndProceed(timeout = 30000): Promise<void> {
    await this.waitForSuccess(timeout)
    await this.clickNext()
  }

  /**
   * Take a screenshot for debugging.
   */
  async screenshot(name: string): Promise<void> {
    await this.page.screenshot({ path: `e2e/screenshots/${name}.png` })
  }
}
