import { expect, test } from './fixtures'
import { getAnswerFromSpoiler } from './helpers/answerLoader'

/**
 * Chapter 1 E2E tests.
 *
 * Tests both unauthenticated and authenticated user flows.
 * - Unauthenticated: User completes chapter, then creates account via "Save my progress"
 * - Authenticated: User logs in first, completes chapter, goes directly to chapters page
 */
test.describe('Chapter 1: Genesis', () => {
  test('complete chapter 1 (unauthenticated)', async ({
    page,
    lessonPage,
    chaptersPage,
    inputChallenge,
    terminalChallenge,
    authModal,
  }) => {
    // Navigate to chapter 1 from home.
    await lessonPage.navigateToChapter(1)

    // --- INTRO-1 ---
    await expect(page).toHaveURL(/intro-1/)
    await lessonPage.clickProgressButton()

    // --- INTRO-2 ---
    await expect(page).toHaveURL(/intro-2/)
    await lessonPage.clickProgressButton()

    // --- GENESIS-1 (chapter intro with Start button) ---
    await expect(page).toHaveURL(/genesis-1/)
    await lessonPage.clickProgressButton()

    // --- GENESIS-2 (input challenge: paste SCRIPTSIG HEX) ---
    await expect(page).toHaveURL(/genesis-2/)
    await inputChallenge.solveWith(await getAnswerFromSpoiler(page))
    await lessonPage.clickProgressButton()

    // --- GENESIS-3 (terminal challenge: decode hex) ---
    await expect(page).toHaveURL(/genesis-3/)
    await terminalChallenge.solveWith(await getAnswerFromSpoiler(page))
    await lessonPage.clickProgressButton()

    // --- GENESIS-4 (narrative) ---
    await expect(page).toHaveURL(/genesis-4/)
    await lessonPage.clickProgressButton()

    // --- TRANSACTING-1 (chapter intro with Next button) ---
    await expect(page).toHaveURL(/transacting-1/)
    await lessonPage.clickProgressButton()

    // --- TRANSACTING-2 (input challenge: paste OP_RETURN HEX) ---
    await expect(page).toHaveURL(/transacting-2/)
    await inputChallenge.solveWith(await getAnswerFromSpoiler(page))
    await lessonPage.clickProgressButton()

    // --- TRANSACTING-3 (terminal challenge: decode hex) ---
    await expect(page).toHaveURL(/transacting-3/)
    await terminalChallenge.solveWith(await getAnswerFromSpoiler(page))
    await lessonPage.clickProgressButton()

    // --- OUTRO-1 ---
    await expect(page).toHaveURL(/outro-1/)
    await lessonPage.clickProgressButton()

    // --- OUTRO-2 / COMPLETION SCREEN ---
    await expect(page).toHaveURL(/outro-2/)

    // Verify success screen is visible.
    await expect(
      page.getByRole('heading', { name: /you did it/i })
    ).toBeVisible()

    // Save my progress - opens SignUp modal.
    await authModal.signUpFromSaveProgress('red spacesuit')

    // Verify we are on the chapters page
    await expect(page).toHaveURL(/chapters/)

    // Click the Challenges tab in Chapter 1 section to see the lesson list.
    const chapter1 = chaptersPage.getChapterSection(1)
    await chapter1.clickChallenges()

    // Chapter 1 has 11 lessons total (2 intros + 7 lessons + 2 outros).
    // After completion, each should show a checkmark icon.
    await expect(chapter1.checkIcons).toHaveCount(11)
  })

  test('complete chapter 1 (authenticated)', async ({
    page,
    lessonPage,
    chaptersPage,
    inputChallenge,
    terminalChallenge,
    authModal,
  }) => {
    // Navigate to home page.
    await page.goto('/en')

    // --- REGISTER VIA UI ---
    await authModal.signUp('red spacesuit')

    // Navigate to chapter 1 from home.
    await lessonPage.navigateToChapter(1)
    await expect(page).toHaveURL(/chapter-1/)

    // --- INTRO-1 ---
    await expect(page).toHaveURL(/intro-1/)
    await lessonPage.clickProgressButton()

    // --- INTRO-2 ---
    await expect(page).toHaveURL(/intro-2/)
    await lessonPage.clickProgressButton()

    // --- GENESIS-1 (chapter intro with Start button) ---
    await expect(page).toHaveURL(/genesis-1/)
    await lessonPage.clickProgressButton()

    // --- GENESIS-2 (input challenge: paste SCRIPTSIG HEX) ---
    await expect(page).toHaveURL(/genesis-2/)
    await inputChallenge.solveWith(await getAnswerFromSpoiler(page))
    await lessonPage.clickProgressButton()

    // --- GENESIS-3 (terminal challenge: decode hex) ---
    await expect(page).toHaveURL(/genesis-3/)
    await terminalChallenge.solveWith(await getAnswerFromSpoiler(page))
    await lessonPage.clickProgressButton()

    // --- GENESIS-4 (narrative) ---
    await expect(page).toHaveURL(/genesis-4/)
    await lessonPage.clickProgressButton()

    // --- TRANSACTING-1 (chapter intro with Next button) ---
    await expect(page).toHaveURL(/transacting-1/)
    await lessonPage.clickProgressButton()

    // --- TRANSACTING-2 (input challenge: paste OP_RETURN HEX) ---
    await expect(page).toHaveURL(/transacting-2/)
    await inputChallenge.solveWith(await getAnswerFromSpoiler(page))
    await lessonPage.clickProgressButton()

    // --- TRANSACTING-3 (terminal challenge: decode hex) ---
    await expect(page).toHaveURL(/transacting-3/)
    await terminalChallenge.solveWith(await getAnswerFromSpoiler(page))
    await lessonPage.clickProgressButton()

    // --- OUTRO-1 ---
    await expect(page).toHaveURL(/outro-1/)
    await lessonPage.clickProgressButton()

    // --- OUTRO-2 / COMPLETION SCREEN ---
    await expect(page).toHaveURL(/outro-2/)

    // Verify success screen is visible.
    await expect(
      page.getByRole('heading', { name: /you did it/i })
    ).toBeVisible()

    // AUTHENTICATED USER: Button should say "Continue" (not "Save my progress").
    const continueButton = page.getByRole('button', { name: 'Continue' })
    await expect(continueButton).toBeVisible()

    // Verify "Save my progress" button is NOT present.
    await expect(
      page.getByRole('button', { name: 'Save my progress' })
    ).not.toBeVisible()

    // Click Continue - should go directly to chapters page (no signup modal).
    await continueButton.click()

    // Verify we are on the chapters page.
    await expect(page).toHaveURL(/chapters/)

    // Click the Challenges tab in Chapter 1 section to see the lesson list.
    const chapter1 = chaptersPage.getChapterSection(1)
    await chapter1.clickChallenges()

    // Chapter 1 has 11 lessons total (2 intros + 7 lessons + 2 outros).
    // After completion, each should show a checkmark icon.
    await expect(chapter1.checkIcons).toHaveCount(11)
  })
})
