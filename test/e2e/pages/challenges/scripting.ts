import { Locator, Page } from '@playwright/test'
import { MonacoHelper } from '../../helpers/monaco'
import {
  getLanguageTab,
  getRunButton,
  SUCCESS_INDICATOR,
} from '../../helpers/selectors'
import { BasePage } from '../basePage'

export class ScriptingChallengePage extends BasePage {
  private monaco: MonacoHelper

  constructor(page: Page) {
    super(page)
    this.monaco = new MonacoHelper(page)
  }

  /**
   * Wait for Monaco editor to be ready.
   */
  async waitForMonaco(): Promise<void> {
    await this.monaco.waitForReady()
  }

  /**
   * Set code in the Monaco editor.
   */
  async setCode(code: string, startLine: number): Promise<void> {
    await this.monaco.setCode(code, startLine)
  }

  /**
   * Get current code from the editor.
   */
  async getCode(): Promise<string> {
    return this.monaco.getCode()
  }

  /**
   * Run the code by clicking the Run button.
   */
  async runCode(): Promise<void> {
    const runBtn = getRunButton(this.page)
    await runBtn.click()
  }

  /**
   * Switch to a different language tab.
   */
  async switchLanguage(language: 'javascript' | 'python'): Promise<void> {
    const tab = getLanguageTab(this.page, language)
    await tab.last().click()
    // Wait for Monaco to reinitialize with new language.
    await this.page.waitForTimeout(300)
    await this.monaco.waitForReady()
  }

  /**
   * Get the success indicator locator.
   */
  get successIndicator(): Locator {
    return this.page.locator(SUCCESS_INDICATOR)
  }

  /**
   * Set code, run, and wait for success.
   */
  async solveWith(code: string, startLine: number): Promise<void> {
    await this.setCode(code, startLine)
    await this.runCode()
    await this.waitForSuccess()
  }

  /**
   * Switch language, set code, run, and wait for success.
   * @param code - The code used to solve the challenge.
   * @param language - The language to solve the code in.
   * @param startLine - The line number to start the code at. Existing code will be preserved.
   */
  async solveWithLanguage(
    code: string,
    language: 'javascript' | 'python',
    startLine = 1
  ): Promise<void> {
    await this.switchLanguage(language)
    await this.solveWith(code, startLine)
  }
}
