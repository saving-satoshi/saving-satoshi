import { expect, test } from './fixtures'
import { getAnswerFromFile } from './helpers/answerLoader'
import { describeForEachLanguage } from './helpers/describeLanguage'

/**
 * Chapter 2 E2E tests.
 *
 * Challenge types in Chapter 2:
 * - 3 hash challenges (hashing-2, hashing-4, hashing-6)
 * - 1 scripting challenge (scripting-2)
 * - 1 complex interactive lesson (mining-1)
 */
describeForEachLanguage('Chapter 2: Hashing Out a Plan', (language) => {
  test('complete chapter 2', async ({
    page,
    auth,
    lessonPage,
    chaptersPage,
    hashChallenge,
    scriptingChallenge,
    authModal,
  }) => {
    test.setTimeout(60_000)

    // Setup: authenticate via UI, then set progress via API.
    // UI signup properly initializes frontend auth state.
    await page.goto('/en')
    await authModal.signUp('red spacesuit')

    // Now set progress to have chapter 1 completed via API.
    await auth.setProgressToChapter(2)

    // Navigate to chapters page and wait for chapter 2 to be unlocked.
    await page.goto('/en/chapters')
    await page.waitForLoadState('networkidle')

    // Wait for chapter 2 link to appear (indicates progress loaded).
    const chapter2Link = page.getByRole('link', {
      name: /start.*chapter.*2|continue.*chapter.*2/i,
    })
    await chapter2Link.waitFor({ timeout: 15000 })

    // Click on chapter 2 link (should now be unlocked).
    await chapter2Link.click()

    // --- INTRO-1 ---
    await expect(page).toHaveURL(/chapter-2.*intro-1/)
    await lessonPage.clickProgressButton()

    // --- INTRO-2 ---
    await expect(page).toHaveURL(/chapter-2.*intro-2/)
    await lessonPage.clickProgressButton()

    // --- HASHING-1 (narrative) ---
    await expect(page).toHaveURL(/hashing-1/)
    await lessonPage.clickProgressButton()

    // --- HASHING-2 (hash challenge: 8+ character input) ---
    await expect(page).toHaveURL(/hashing-2/)
    await hashChallenge.solveWith(getAnswerFromFile(2, 'hashing-2'))
    await lessonPage.clickProgressButton()

    // --- HASHING-3 (narrative) ---
    await expect(page).toHaveURL(/hashing-3/)
    await lessonPage.clickProgressButton()

    // --- HASHING-4 (hash challenge: hash starts with "0") ---
    await expect(page).toHaveURL(/hashing-4/)
    await hashChallenge.solveWith(getAnswerFromFile(2, 'hashing-4'))
    await lessonPage.clickProgressButton()

    // --- HASHING-5 (narrative) ---
    await expect(page).toHaveURL(/hashing-5/)
    await lessonPage.clickProgressButton()

    // --- HASHING-6 (hash challenge: hash starts with "00") ---
    await expect(page).toHaveURL(/hashing-6/)
    await hashChallenge.solveWith(getAnswerFromFile(2, 'hashing-6'))
    await lessonPage.clickProgressButton()

    // --- SCRIPTING-1 (narrative) ---
    await expect(page).toHaveURL(/scripting-1/)
    await lessonPage.clickProgressButton()

    // --- SCRIPTING-2 (scripting challenge: find nonce that hashes to 5 zeroes) ---
    await expect(page).toHaveURL(/scripting-2/)
    const code = getAnswerFromFile(2, 'scripting-2', language)
    await scriptingChallenge.solveWithLanguage(code, language)
    await lessonPage.clickProgressButton()

    // --- MINING-1 (complex interactive mining simulation) ---
    await expect(page).toHaveURL(/mining-1/)
    await solveMining1(page)

    // --- OUTRO-1 (completion screen) ---
    await expect(page).toHaveURL(/outro-1/)

    // Verify success screen is visible.
    await expect(
      page.getByRole('heading', { name: /great job/i })
    ).toBeVisible()

    // Click Continue to go to chapters page.
    await lessonPage.clickProgressButton()

    // Verify we are on the chapters page.
    await expect(page).toHaveURL(/chapters/)

    // Click the Challenges tab in Chapter 2 section to see the lesson list.
    const chapter2 = chaptersPage.getChapterSection(2)
    await chapter2.clickChallenges()

    // Chapter 2 has 12 lessons total (2 intros + 9 lessons + 1 outro).
    // After completion, each should show a checkmark icon.
    await expect(chapter2.checkIcons).toHaveCount(12)
  })
})

/**
 * Solve the mining-1 interactive lesson.
 *
 * This lesson requires:
 * 1. Click "Turn on" to start mining
 * 2. Click 100x to speed up (after hint appears)
 * 3. Wait for 100 blocks to be mined
 * 4. Click through explanation steps (Tell me more)
 * 5. Click Next to complete
 */
async function solveMining1(page: import('@playwright/test').Page) {
  // Step 1: Click "Turn on" button to start mining.
  const turnOnButton = page.getByRole('button', { name: /turn on/i })
  await turnOnButton.click()

  // Step 2: After first block, click "Turn on" again to continue.
  // Wait for first block (step transitions from 1 to 2).
  await turnOnButton.click({ timeout: 10_000 })

  // Step 3: Click 100x button to speed up mining.
  // Wait for 100x hint to appear (7 seconds after step 3 starts).
  // The 100x button increases hash power, making blocks mine faster.
  const tenXButton = page.getByText('100x', { exact: true })
  await expect(tenXButton).toHaveClass(/animate-pulse/, { timeout: 10_000 })
  await tenXButton.click()

  // Wait for 100 blocks to be mined (with 100x boost, this takes ~10-15 seconds).
  // The lesson auto-transitions to step 4 when blocks === 100.
  const tellMeMoreButton = page.getByRole('button', { name: /tell me more/i })
  await tellMeMoreButton.waitFor({ timeout: 15_000 })

  // Step 4, 5, 6: Click through explanation steps.
  for (let i = 0; i < 3; i++) {
    if (await tellMeMoreButton.isVisible().catch(() => false)) {
      await tellMeMoreButton.click()
      await page.waitForTimeout(500)
    }
  }

  // Step 7: Click Next to complete the lesson.
  const nextButton = page.getByRole('button', { name: /continue/i })
  await nextButton.waitFor({ timeout: 5000 })
  await nextButton.click()
}
