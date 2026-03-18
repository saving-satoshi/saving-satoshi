import { Page } from '@playwright/test'
import { BasePage } from '../basePage'

/**
 * TransactionChallenge answer structure.
 * For lessons that require script/sats input.
 */
export interface TransactionAnswer {
  output_0?: {
    sats?: string
    script?: string
  }
  output_1?: {
    sats?: string
    script?: string
  }
}

export class TransactionsChallengePage extends BasePage {
  constructor(page: Page) {
    super(page)
  }

  /**
   * Get the output section by output number (0 or 1).
   */
  private getOutputSection(outputNum: 0 | 1) {
    // Locate by text "Output 0" or "Output 1" within the challenge container.
    return this.page.locator(
      `.challenge-container >> text=output ${outputNum} >> ..`
    )
  }

  /**
   * Fill in the sats input for a specific output.
   */
  async fillSats(outputNum: 0 | 1, value: string): Promise<void> {
    // Find the sats input placeholder.
    const outputSection = this.getOutputSection(outputNum)
    const satsInput = outputSection.locator('input[placeholder="Enter Sats"]')

    // Wait and fill.
    await satsInput.waitFor({ state: 'visible', timeout: 5000 })

    // Clear existing value and type new one.
    await satsInput.click({ clickCount: 3 })
    await satsInput.pressSequentially(value, { delay: 30 })
    await this.page.waitForTimeout(100)
  }

  /**
   * Fill in the script textarea for a specific output.
   */
  async fillScript(outputNum: 0 | 1, script: string): Promise<void> {
    const outputSection = this.getOutputSection(outputNum)
    const scriptTextarea = outputSection.locator(
      'textarea[placeholder="Enter Script"]'
    )

    // Wait and fill.
    await scriptTextarea.waitFor({ state: 'visible', timeout: 5000 })

    // Clear and fill script.
    await scriptTextarea.fill(script)
    await this.page.waitForTimeout(100)
  }

  /**
   * Click the sign button to submit the transaction.
   * Button text varies: "Sign", "Sign and Broadcast", "Send to Laszlo".
   */
  async clickSign(): Promise<void> {
    // Button text varies: "Sign", "Sign and Broadcast", "Send to Laszlo".
    // Some pages have multiple buttons (e.g., dual signature), so click first enabled.
    const signBtn = this.page
      .getByRole('button', {
        name: /^(sign|sign and broadcast|send to laszlo)$/i,
      })
      .and(this.page.locator(':not([disabled])'))
      .first()
    await signBtn.waitFor({ state: 'visible', timeout: 5000 })
    await signBtn.click()
  }

  /**
   * Click the "Next" button (for alwaysShowButton lessons).
   */
  async clickNext(): Promise<void> {
    const nextBtn = this.page.getByRole('button', { name: 'Continue' })
    await nextBtn.waitFor({ state: 'visible', timeout: 5000 })
    await nextBtn.click()
  }

  /**
   * Build a transaction by filling in script and sats for outputs.
   */
  async buildTransaction(answer: TransactionAnswer): Promise<void> {
    // Fill output 0 if provided.
    if (answer.output_0) {
      if (answer.output_0.sats) {
        await this.fillSats(0, answer.output_0.sats)
      }
      if (answer.output_0.script) {
        await this.fillScript(0, answer.output_0.script)
      }
    }

    // Fill output 1 if provided.
    if (answer.output_1) {
      if (answer.output_1.sats) {
        await this.fillSats(1, answer.output_1.sats)
      }
      if (answer.output_1.script) {
        await this.fillScript(1, answer.output_1.script)
      }
    }
  }

  /**
   * Broadcast the built transaction (alias for clickSign).
   */
  async broadcast(): Promise<void> {
    await this.clickSign()
  }

  /**
   * Build and broadcast transaction, wait for success.
   * @param answer - The transaction answer with sats and script for each output.
   */
  async solveWith(answer: TransactionAnswer): Promise<void> {
    await this.buildTransaction(answer)
    await this.broadcast()
    await this.waitForSuccess()
  }

  /**
   * Solve a pre-filled lesson by just clicking Next.
   * For lessons with alwaysShowButton=true.
   */
  async solvePrefilled(): Promise<void> {
    await this.clickNext()
  }

  /**
   * Solve a two-step transaction challenge.
   * Step 1: Fill first answer and sign.
   * Step 2: Wait, then fill second answer and sign.
   */
  async solveTwoStep(
    step1Answer: TransactionAnswer,
    step2Answer: TransactionAnswer
  ): Promise<void> {
    // Step 1.
    await this.buildTransaction(step1Answer)
    await this.clickSign()

    // Wait for partial success / step transition.
    await this.page.waitForTimeout(3000)

    // Step 2.
    await this.buildTransaction(step2Answer)
    await this.clickSign()
    await this.waitForSuccess()
  }
}
