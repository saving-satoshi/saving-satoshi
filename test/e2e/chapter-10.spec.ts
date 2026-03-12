import { expect, test } from './fixtures'
import { getTransactionAnswer } from './helpers/answerLoader'

/**
 * Chapter 10 E2E tests.
 *
 * Challenge types in Chapter 10:
 *  - 9 transaction challenges (2 prefilled, 6 single-step, 1 two-step)
 */

test.describe('Chapter 10: Payment Channels', () => {
  test('complete chapter 10', async ({
    page,
    auth,
    lessonPage,
    chaptersPage,
    transactionsChallenge,
    authModal,
  }) => {
    // Increase timeout due to many transaction challenges.
    test.setTimeout(300_000)

    // Setup: authenticate via UI, then set progress via API.
    await page.goto('/en')
    await authModal.signUp()

    // Set progress to have chapters 1-9 completed via API.
    await auth.setProgressToChapter(10)

    // Navigate to chapters page and wait for chapter 10 to be unlocked.
    await page.goto('/en/chapters')
    await page.waitForLoadState('networkidle')

    // Wait for chapter 10 link to appear (indicates progress loaded).
    const chapter10Link = page.getByRole('link', {
      name: /start.*chapter.*10|continue.*chapter.*10/i,
    })
    await chapter10Link.waitFor({ timeout: 15000 })

    // Click on chapter 10 link.
    await chapter10Link.click()

    // --- INTRO-1 (narrative) ---
    await expect(page).toHaveURL(/chapter-10.*intro-1/)
    await lessonPage.clickProgressButton()

    // --- INTRO-2 (narrative) ---
    await expect(page).toHaveURL(/intro-2/)
    await lessonPage.clickProgressButton()

    // --- INTRO-3 (narrative) ---
    await expect(page).toHaveURL(/intro-3/)
    await lessonPage.clickProgressButton()

    // --- OPENING-A-CHANNEL-1 (prefilled - just click Next) ---
    await expect(page).toHaveURL(/opening-a-channel-1/)
    await transactionsChallenge.solvePrefilled()

    // --- OPENING-A-CHANNEL-2 (transaction challenge - payment tab) ---
    await expect(page).toHaveURL(/opening-a-channel-2/)
    await transactionsChallenge.solveWith(
      getTransactionAnswer(10, 'opening-a-channel-2')
    )
    await lessonPage.clickProgressButton()

    // --- OPENING-A-CHANNEL-3 (narrative) ---
    await expect(page).toHaveURL(/opening-a-channel-3/)
    await lessonPage.clickProgressButton()

    // --- OPENING-A-CHANNEL-4 (transaction challenge - multisig tab) ---
    await expect(page).toHaveURL(/opening-a-channel-4/)
    await transactionsChallenge.solveWith(
      getTransactionAnswer(10, 'opening-a-channel-4')
    )
    await lessonPage.clickProgressButton()

    // --- OPENING-A-CHANNEL-5 (narrative) ---
    await expect(page).toHaveURL(/opening-a-channel-5/)
    await lessonPage.clickProgressButton()

    // --- UPDATING-THE-STATE-1 (transaction challenge - refund tab) ---
    await expect(page).toHaveURL(/updating-the-state-1/)
    await transactionsChallenge.solveWith(
      getTransactionAnswer(10, 'updating-the-state-1')
    )
    await lessonPage.clickProgressButton()

    // --- UPDATING-THE-STATE-2 (narrative) ---
    await expect(page).toHaveURL(/updating-the-state-2/)
    await lessonPage.clickProgressButton()

    // --- UPDATING-THE-STATE-3 (transaction challenge - refund_1 tab) ---
    await expect(page).toHaveURL(/updating-the-state-3/)
    await transactionsChallenge.solveWith(
      getTransactionAnswer(10, 'updating-the-state-3')
    )
    await lessonPage.clickProgressButton()

    // --- UPDATING-THE-STATE-4 (narrative) ---
    await expect(page).toHaveURL(/updating-the-state-4/)
    await lessonPage.clickProgressButton()

    // --- UPDATING-THE-STATE-5 (transaction challenge - refund_2 tab) ---
    await expect(page).toHaveURL(/updating-the-state-5/)
    await transactionsChallenge.solveWith(
      getTransactionAnswer(10, 'updating-the-state-5')
    )
    await lessonPage.clickProgressButton()

    // --- UPDATING-THE-STATE-6 (narrative) ---
    await expect(page).toHaveURL(/updating-the-state-6/)
    await lessonPage.clickProgressButton()

    // --- MAKING-A-PAYMENT-1 (narrative - recap) ---
    await expect(page).toHaveURL(/making-a-payment-1/)
    await lessonPage.clickProgressButton()

    // --- MAKING-A-PAYMENT-2 (transaction challenge - commitment_you tab) ---
    await expect(page).toHaveURL(/making-a-payment-2/)
    await transactionsChallenge.solveWith(
      getTransactionAnswer(10, 'making-a-payment-2')
    )
    await lessonPage.clickProgressButton()

    // --- MAKING-A-PAYMENT-3 (narrative) ---
    await expect(page).toHaveURL(/making-a-payment-3/)
    await lessonPage.clickProgressButton()

    // --- MAKING-A-PAYMENT-4 (narrative) ---
    await expect(page).toHaveURL(/making-a-payment-4/)
    await lessonPage.clickProgressButton()

    // --- MAKING-A-PAYMENT-5 (transaction challenge - commitment_laszlo tab) ---
    await expect(page).toHaveURL(/making-a-payment-5/)
    await transactionsChallenge.solveWith(
      getTransactionAnswer(10, 'making-a-payment-5')
    )
    await lessonPage.clickProgressButton()

    // --- MAKING-A-PAYMENT-6 (prefilled - just click Next) ---
    await expect(page).toHaveURL(/making-a-payment-6/)
    await transactionsChallenge.solvePrefilled()

    // --- MAKING-A-PAYMENT-7 (narrative) ---
    await expect(page).toHaveURL(/making-a-payment-7/)
    await lessonPage.clickProgressButton()

    // --- MAKING-A-PAYMENT-8 (two-step transaction challenge) ---
    await expect(page).toHaveURL(/making-a-payment-8/)
    await transactionsChallenge.solveTwoStep(
      getTransactionAnswer(10, 'making-a-payment-8-step1'),
      getTransactionAnswer(10, 'making-a-payment-8-step2')
    )
    await lessonPage.clickProgressButton()

    // --- OUTRO-1 (narrative) ---
    await expect(page).toHaveURL(/outro-1/)
    await lessonPage.clickProgressButton()

    // --- OUTRO-2 (narrative) ---
    await expect(page).toHaveURL(/outro-2/)
    await lessonPage.clickProgressButton()

    // --- OUTRO-3 (narrative) ---
    await expect(page).toHaveURL(/outro-3/)
    await lessonPage.clickProgressButton()

    // --- OUTRO-4 (narrative) ---
    await expect(page).toHaveURL(/outro-4/)
    await lessonPage.clickProgressButton()

    // --- OUTRO-5 (narrative) ---
    await expect(page).toHaveURL(/outro-5/)
    await lessonPage.clickProgressButton()

    // --- OUTRO-6 (completion screen) ---
    await expect(page).toHaveURL(/outro-6/)

    // Verify success screen is visible.
    // Chapter 10 outro shows "We are all Satoshi" message (it's the final chapter).
    await expect(page.getByText(/we are all satoshi/i).first()).toBeVisible({
      timeout: 10000,
    })

    // The final outro page has no Continue button - it ends with links to Bitcoin Dev Project.
    // Navigate directly to the chapters page to verify completion.
    await page.goto('/en/chapters')

    // Verify we are on the chapters page.
    await expect(page).toHaveURL(/chapters/)

    // Click the Challenges tab in Chapter 10 section to see the lesson list.
    const chapter10 = chaptersPage.getChapterSection(10)
    await chapter10.clickChallenges()

    // Chapter 10 has 28 lessons total (3 intros + 19 lessons + 6 outros).
    // The final outro (outro-6) doesn't have a Continue button, so it may not be marked complete.
    // After completing the chapter, 27 lessons should show checkmarks.
    await expect(chapter10.checkIcons).toHaveCount(27)
  })
})
