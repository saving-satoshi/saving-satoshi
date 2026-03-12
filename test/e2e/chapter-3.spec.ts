import { expect, test } from './fixtures'

import type { Page } from '@playwright/test'

/**
 * Chapter 3 E2E tests.
 *
 * All challenges in Chapter 3 are hashrate challenges (mining simulations):
 * - solo-1: You vs BitRey (you lose)
 * - pool-2: Pool vs BitRey (still lose but with more blocks)
 * - coop-3: Coop vs BitRey
 * - split-2: Split vs BitRey (with multi-step explanation after)
 */
test.describe('Chapter 3: The 51% Attack', () => {
  test('complete chapter 3', async ({
    page,
    auth,
    lessonPage,
    chaptersPage,
    hashRateChallenge,
    authModal,
  }) => {
    test.setTimeout(180_000) // 3 minutes - hashrate simulations take time

    // Setup: authenticate via UI, then set progress via API.
    // UI signup properly initializes frontend auth state.
    await page.goto('/en')
    await authModal.signUp('red spacesuit')

    // Now set progress to have chapters 1-2 completed via API.
    await auth.setProgressToChapter(3)

    // Navigate to chapters page and wait for chapter 3 to be unlocked.
    await page.goto('/en/chapters')
    await page.waitForLoadState('networkidle')

    // Wait for chapter 3 link to appear (indicates progress loaded).
    const chapter3Link = page.getByRole('link', {
      name: /start.*chapter.*3|continue.*chapter.*3/i,
    })
    await chapter3Link.waitFor({ timeout: 15000 })

    // Click on chapter 3 link (should now be unlocked).
    await chapter3Link.click()

    // --- INTRO-1 (narrative) ---
    await expect(page).toHaveURL(/chapter-3.*intro-1/)
    await lessonPage.clickProgressButton()

    // --- SOLO-1 (hashrate challenge: You vs BitRey) ---
    await expect(page).toHaveURL(/solo-1/)
    await hashRateChallenge.solve()
    await lessonPage.clickProgressButton()

    // --- POOL-1 (narrative: introduces mining pool concept) ---
    await expect(page).toHaveURL(/pool-1/)
    await lessonPage.clickProgressButton()

    // --- POOL-2 (hashrate challenge: Pool vs BitRey) ---
    await expect(page).toHaveURL(/pool-2/)
    await hashRateChallenge.solve()
    await lessonPage.clickProgressButton()

    // --- COOP-1 (narrative) ---
    await expect(page).toHaveURL(/coop-1/)
    await lessonPage.clickProgressButton()

    // --- COOP-2 (narrative) ---
    await expect(page).toHaveURL(/coop-2/)
    await lessonPage.clickProgressButton()

    // --- COOP-3 (hashrate challenge: Coop mining) ---
    await expect(page).toHaveURL(/coop-3/)
    await hashRateChallenge.solve()
    await lessonPage.clickProgressButton()

    // --- SPLIT-1 (narrative) ---
    await expect(page).toHaveURL(/split-1/)
    await lessonPage.clickProgressButton()

    // --- SPLIT-2 (hashrate challenge: Split mining) ---
    await expect(page).toHaveURL(/split-2/)
    await hashRateChallenge.solve()

    // Split-2 has multi-step explanation after simulation.
    await clickThroughSplit2Explanation(page)

    // --- OUTRO-1 (completion screen) ---
    await expect(page).toHaveURL(/outro-1/)

    // Verify success screen heading is visible.
    // Chapter 3 outro has a story-specific heading.
    await expect(
      page.getByRole('heading', { name: /take that, vanderpoole/i })
    ).toBeVisible({ timeout: 10000 })

    // Click Continue to go to chapters page.
    await lessonPage.clickProgressButton()

    // Verify we are on the chapters page.
    await expect(page).toHaveURL(/chapters/)

    // Click the Challenges tab in Chapter 3 section to see the lesson list.
    const chapter3 = chaptersPage.getChapterSection(3)
    await chapter3.clickChallenges()

    // Chapter 3 has 10 lessons total (1 intro + 8 lessons + 1 outro).
    // After completion, each should show a checkmark icon.
    await expect(chapter3.checkIcons).toHaveCount(10)
  })
})

/**
 * After split-2 mining simulation completes, there's a multi-step explanation
 * with several "Tell me more" screens before reaching outro-1.
 * This helper clicks through all explanation steps.
 */
async function clickThroughSplit2Explanation(page: Page): Promise<void> {
  // Keep clicking "Tell me more" or "Continue" until we reach outro-1.
  while (!(await page.url()).includes('outro-1')) {
    const progressBtn = page.getByRole('button', {
      name: /tell me more|continue/i,
    })
    await progressBtn.waitFor({ timeout: 10000 })
    await progressBtn.click()
    // Brief wait for navigation.
    await page.waitForTimeout(500)
  }
}
