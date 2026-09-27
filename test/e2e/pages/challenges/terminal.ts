import { Page, Locator } from '@playwright/test'
import { BasePage } from '../basePage'
import { getTerminal, getTerminalInput } from '../../helpers/selectors'

export class TerminalChallengePage extends BasePage {
  constructor(page: Page) {
    super(page)
  }

  /**
   * Get the terminal wrapper locator.
   */
  get terminal(): Locator {
    return getTerminal(this.page)
  }

  /**
   * Enter a command in the terminal.
   */
  async enterCommand(command: string): Promise<void> {
    const input = getTerminalInput(this.page)
    await input.fill(command)
    await this.page.keyboard.press('Enter')
  }

  /**
   * Wait for terminal output to appear.
   */
  async waitForOutput(text?: string): Promise<void> {
    if (text) {
      await this.page.waitForSelector(`text="${text}"`)
    } else {
      await this.page.waitForTimeout(500)
    }
  }

  /**
   * Enter command and solve.
   */
  async solveWith(command: string): Promise<void> {
    await this.enterCommand(command)
    await this.waitForSuccess()
  }
}
