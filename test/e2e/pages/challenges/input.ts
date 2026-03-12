import { Page, Locator } from '@playwright/test'
import { BasePage } from '../basePage'
import { getInputField, getSubmitButton } from '../../helpers/selectors'

export class InputChallengePage extends BasePage {
  constructor(page: Page) {
    super(page)
  }

  /**
   * Enter text into the challenge input field.
   */
  async enterAnswer(text: string): Promise<void> {
    const input = getInputField(this.page).first()
    await input.fill(text)
  }

  /**
   * Type answer slowly (for animations or debounced inputs).
   */
  async typeSlowly(text: string, delay = 100): Promise<void> {
    const input = getInputField(this.page).first()
    await input.click()
    await this.page.keyboard.type(text, { delay })
  }

  /**
   * Submit the answer.
   */
  async submit(): Promise<void> {
    const submitBtn = getSubmitButton(this.page)
    if (await submitBtn.isVisible()) {
      await submitBtn.click()
    }
  }

  /**
   * Enter answer and wait for success.
   */
  async solveWith(answer: string): Promise<void> {
    await this.enterAnswer(answer)
    await this.submit()
    await this.waitForSuccess()
  }

  /**
   * Solve a double input challenge (e.g., R/S or X/Y values).
   * Fills both inputs and waits for success after the second.
   */
  async solveDoubleInput(answer1: string, answer2: string): Promise<void> {
    const textboxes = this.page.getByRole('textbox')
    // Fill first input.
    await textboxes.first().fill(answer1)
    // Small delay for state update between inputs.
    await this.page.waitForTimeout(500)
    // Fill second input.
    await textboxes.nth(1).fill(answer2)
    await this.waitForSuccess()
  }
}
