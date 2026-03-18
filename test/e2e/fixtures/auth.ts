import { APIRequestContext, Page } from '@playwright/test'
import { createProgressAtChapter } from '../helpers/progress'

const API_URL = process.env.NEXT_PUBLIC_API_ENDPOINT || 'http://localhost:8000'

export class AuthHelper {
  private token: string | null = null

  constructor(private page: Page, private request: APIRequestContext) {}

  /**
   * Set progress to start of a specific chapter via API.
   */
  async setProgressToChapter(chapter: number): Promise<void> {
    this.token = await this.page.evaluate(() => {
      return localStorage.getItem('saving-satoshi-token')
    })

    // ensure the chapter is unlocked on the backend
    await this.request.put(`${API_URL}/v1/features`, {
      headers: { Authorization: `Bearer ${this.token}` },
      data: {
        feature_name: `chapter_${chapter}_enabled`,
        feature_value: 1,
      },
    })

    // Mark all chapters before target as completed
    const progressState = createProgressAtChapter(chapter)

    // Set the progress for this token on the backend
    await this.request.put(`${API_URL}/v1/progress`, {
      headers: { Authorization: `Bearer ${this.token}` },
      data: { progress_state: progressState },
    })
  }
}
