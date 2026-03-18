import { Locator, Page } from '@playwright/test'
import { BasePage } from './basePage'

/**
 * Represents a single chapter section on the chapters page.
 * Provides access to chapter-specific elements like the Challenges tab and completion indicators.
 */
export class ChapterSection {
  readonly section: Locator

  constructor(section: Locator) {
    this.section = section
  }

  /**
   * Locator for the difficulty toggle switch.
   */
  get difficultyToggle(): Locator {
    return this.section.locator('.toggle-switch .slider')
  }

  /**
   * Locator for the Challenges tab button.
   */
  get challengesButton(): Locator {
    return this.section.getByRole('button', { name: 'Challenges' })
  }

  /**
   * Locator for check icons indicating completed lessons.
   * Uses the unique viewBox attribute of the check SVG.
   */
  get checkIcons(): Locator {
    return this.section.locator('svg[viewBox="0 0 29 29"]')
  }

  /**
   * Click the Challenges tab to show the lesson list.
   */
  async clickChallenges(): Promise<void> {
    await this.challengesButton.click()
  }

  /**
   * Click the difficulty toggle switch to toggle the difficulty.
   */
  async toggleDifficulty(): Promise<void> {
    await this.difficultyToggle.click()
  }
}

/**
 * Page Object Model for the chapters overview page.
 * Provides access to individual chapter sections.
 */
export class ChaptersPage extends BasePage {
  constructor(page: Page) {
    super(page)
  }

  /**
   * Get a ChapterSection by chapter number.
   * @param chapter Chapter number (1-10)
   */
  getChapterSection(chapter: number): ChapterSection {
    const section = this.page.locator(`#chapter-${chapter}`)
    return new ChapterSection(section)
  }
}
