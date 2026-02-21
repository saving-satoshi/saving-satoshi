import { expect, Page } from '@playwright/test'
import { BasePage } from './basePage'

export class LessonPage extends BasePage {
  constructor(page: Page) {
    super(page)
  }

  /**
   * Navigate from home to a chapter's first intro via click-through.
   * This is the preferred way to navigate in e2e tests.
   * @param chapter Chapter number (1-10)
   * @param lang Locale (default 'en')
   */
  async navigateToChapter(chapter: number, lang = 'en'): Promise<void> {
    await this.page.goto(`/${lang}`)
    await this.page.getByRole('link', { name: /start|continue/i }).click()
    await this.page
      .getByRole('link', {
        name: new RegExp(`start.*${chapter}|chapter.*${chapter}`, 'i'),
      })
      .click()
    await expect(this.page).toHaveURL(new RegExp(`chapter-${chapter}`))
    await this.waitForPageLoad()
  }
}
