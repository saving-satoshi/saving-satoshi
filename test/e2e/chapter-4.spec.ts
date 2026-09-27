import { expect, test } from './fixtures'
import { getAnswerFromFile } from './helpers/answerLoader'
import { describeForEachLanguage } from './helpers/describeLanguage'

/**
 * Chapter 4 E2E tests.
 *
 * Challenge types in Chapter 4:
 * - 4 scripting challenges (public-key-3, public-key-4, address-2, address-3)
 */
describeForEachLanguage('Chapter 4: Claiming Your 1.61 Bitcoin', (language) => {
  test('complete chapter 4', async ({
    page,
    auth,
    lessonPage,
    chaptersPage,
    scriptingChallenge,
    authModal,
  }) => {
    test.setTimeout(120_000) // 2 minutes - scripting challenges can be slow

    // Setup: authenticate via UI, then set progress via API.
    // UI signup properly initializes frontend auth state.
    await page.goto('/en')
    await authModal.signUp('red spacesuit')

    // Now set progress to have chapters 1-3 completed via API.
    await auth.setProgressToChapter(4)

    // Navigate to chapters page and wait for chapter 4 to be unlocked.
    await page.goto('/en/chapters')
    await page.waitForLoadState('networkidle')

    // Wait for chapter 4 link to appear (indicates progress loaded).
    const chapter4Link = page.getByRole('link', {
      name: /start.*chapter.*4|continue.*chapter.*4/i,
    })
    await chapter4Link.waitFor({ timeout: 15000 })

    // Click on chapter 4 link (should now be unlocked).
    await chapter4Link.click()

    // --- INTRO-1 (narrative) ---
    await expect(page).toHaveURL(/chapter-4.*intro-1/)
    await lessonPage.clickProgressButton()

    // --- PUBLIC-KEY-1 (narrative) ---
    await expect(page).toHaveURL(/public-key-1/)
    await lessonPage.clickProgressButton()

    // --- PUBLIC-KEY-2 (narrative) ---
    await expect(page).toHaveURL(/public-key-2/)
    await lessonPage.clickProgressButton()

    // --- PUBLIC-KEY-3 (scripting challenge: private key to public key) ---
    await expect(page).toHaveURL(/public-key-3/)
    const publicKey3Code = getAnswerFromFile(4, 'public-key-3', language)
    await scriptingChallenge.solveWithLanguage(publicKey3Code, language)
    await lessonPage.clickProgressButton()

    // --- PUBLIC-KEY-4 (scripting challenge: compress public key) ---
    await expect(page).toHaveURL(/public-key-4/)
    const publicKey4Code = getAnswerFromFile(4, 'public-key-4', language)
    await scriptingChallenge.solveWithLanguage(publicKey4Code, language, 3)
    await lessonPage.clickProgressButton()

    // --- ADDRESS-1 (narrative) ---
    await expect(page).toHaveURL(/address-1/)
    await lessonPage.clickProgressButton()

    // --- ADDRESS-2 (scripting challenge: hash compressed key) ---
    await expect(page).toHaveURL(/address-2/)
    const address2Code = getAnswerFromFile(4, 'address-2', language)
    await scriptingChallenge.solveWithLanguage(address2Code, language)
    await lessonPage.clickProgressButton()

    // --- ADDRESS-3 (scripting challenge: encode address) ---
    await expect(page).toHaveURL(/address-3/)
    const address3Code = getAnswerFromFile(4, 'address-3', language)
    await scriptingChallenge.solveWithLanguage(address3Code, language)
    await lessonPage.clickProgressButton()

    // --- TABCONF-CLUE-1 (outro narrative with Next button) ---
    await expect(page).toHaveURL(/tabconf-clue-1/)
    await lessonPage.clickProgressButton()

    // --- OUTRO-1 (completion screen) ---
    await expect(page).toHaveURL(/outro-1/)

    // Verify success screen heading is visible.
    await expect(page.getByRole('heading', { name: /success/i })).toBeVisible({
      timeout: 10000,
    })

    // Click Continue to go to chapters page.
    await lessonPage.clickProgressButton()

    // Verify we are on the chapters page.
    await expect(page).toHaveURL(/chapters/)

    // Click the Challenges tab in Chapter 4 section to see the lesson list.
    const chapter4 = chaptersPage.getChapterSection(4)
    await chapter4.clickChallenges()

    // Chapter 4 has 10 lessons total (1 intro + 7 lessons + 2 outros).
    // After completion, each should show a checkmark icon.
    await expect(chapter4.checkIcons).toHaveCount(10)
  })
})
