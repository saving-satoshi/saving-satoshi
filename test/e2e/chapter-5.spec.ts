import { expect, test } from './fixtures'
import { describeForEachLanguage } from './helpers/describeLanguage'
import {
  getAnswerFromFile,
  getAnswerFromSpoiler,
  getAnswersFromSpoiler,
} from './helpers/answerLoader'

/**
 * Chapter 5 E2E tests.
 *
 * Challenge types in Chapter 5:
 * - 4 input challenges (derive-message-3, derive-message-4, derive-message-6, verify-signature-3, verify-signature-4)
 * - 7 scripting challenges (derive-message-7, verify-signature-2, verify-signature-5, validate-signature-1 through 4)
 */
describeForEachLanguage(
  'Chapter 5: Will the Real Satoshi Please Stand Up',
  (language) => {
    test('complete chapter 5', async ({
      page,
      auth,
      lessonPage,
      chaptersPage,
      scriptingChallenge,
      inputChallenge,
      authModal,
    }) => {
      test.setTimeout(180_000) // 3 minutes - many scripting challenges

      // Setup: authenticate via UI, then set progress via API.
      // UI signup properly initializes frontend auth state.
      await page.goto('/en')
      await authModal.signUp('red spacesuit')

      // Now set progress to have chapters 1-4 completed via API.
      await auth.setProgressToChapter(5)

      // Navigate to chapters page and wait for chapter 5 to be unlocked.
      await page.goto('/en/chapters')
      await page.waitForLoadState('networkidle')

      // Wait for chapter 5 link to appear (indicates progress loaded).
      const chapter5Link = page.getByRole('link', {
        name: /start.*chapter.*5|continue.*chapter.*5/i,
      })
      await chapter5Link.waitFor({ timeout: 15000 })

      // Click on chapter 5 link (should now be unlocked).
      await chapter5Link.click()

      // --- INTRO-1 (narrative) ---
      await expect(page).toHaveURL(/chapter-5.*intro-1/)
      await lessonPage.clickProgressButton()

      // --- INTRO-2 (narrative) ---
      await expect(page).toHaveURL(/intro-2/)
      await lessonPage.clickProgressButton()

      // --- INTRO-3 (narrative) ---
      await expect(page).toHaveURL(/intro-3/)
      await lessonPage.clickProgressButton()

      // --- DERIVE-MESSAGE-1 (narrative) ---
      await expect(page).toHaveURL(/derive-message-1/)
      await lessonPage.clickProgressButton()

      // --- DERIVE-MESSAGE-2 (narrative) ---
      await expect(page).toHaveURL(/derive-message-2/)
      await lessonPage.clickProgressButton()

      // --- DERIVE-MESSAGE-3 (input challenge) ---
      await expect(page).toHaveURL(/derive-message-3/)
      const dm3Answer = await getAnswerFromSpoiler(page)
      await inputChallenge.solveWith(dm3Answer)
      await lessonPage.clickProgressButton()

      // --- DERIVE-MESSAGE-4 (input challenge) ---
      await expect(page).toHaveURL(/derive-message-4/)
      const dm4Answer = await getAnswerFromSpoiler(page)
      await inputChallenge.solveWith(dm4Answer)
      await lessonPage.clickProgressButton()

      // --- DERIVE-MESSAGE-5 (narrative) ---
      await expect(page).toHaveURL(/derive-message-5/)
      await lessonPage.clickProgressButton()

      // --- DERIVE-MESSAGE-6 (input challenge) ---
      await expect(page).toHaveURL(/derive-message-6/)
      const dm6Answer = await getAnswerFromSpoiler(page)
      await inputChallenge.solveWith(dm6Answer)
      await lessonPage.clickProgressButton()

      // --- DERIVE-MESSAGE-7 (scripting challenge) ---
      await expect(page).toHaveURL(/derive-message-7/)
      const dm7Code = getAnswerFromFile(5, 'derive-message-7', language)
      await scriptingChallenge.solveWithLanguage(dm7Code, language)
      await lessonPage.clickProgressButton()

      // --- VERIFY-SIGNATURE-1 (narrative) ---
      await expect(page).toHaveURL(/verify-signature-1/)
      await lessonPage.clickProgressButton()

      // --- VERIFY-SIGNATURE-2 (scripting challenge) ---
      await expect(page).toHaveURL(/verify-signature-2/)
      const vs2Code = getAnswerFromFile(5, 'verify-signature-2', language)
      await scriptingChallenge.solveWithLanguage(vs2Code, language)
      await lessonPage.clickProgressButton()

      // --- VERIFY-SIGNATURE-3 (double input challenge: R and S values) ---
      await expect(page).toHaveURL(/verify-signature-3/)
      const vs3Answers = await getAnswersFromSpoiler(page)
      await inputChallenge.solveDoubleInput(vs3Answers[0], vs3Answers[1])
      await lessonPage.clickProgressButton()

      // --- VERIFY-SIGNATURE-4 (double input challenge: X and Y values) ---
      await expect(page).toHaveURL(/verify-signature-4/)
      const vs4Answers = await getAnswersFromSpoiler(page)
      await inputChallenge.solveDoubleInput(vs4Answers[0], vs4Answers[1])
      await lessonPage.clickProgressButton()

      // --- VERIFY-SIGNATURE-5 (scripting challenge) ---
      await expect(page).toHaveURL(/verify-signature-5/)
      const vs5Code = getAnswerFromFile(5, 'verify-signature-5', language)
      await scriptingChallenge.solveWithLanguage(vs5Code, language)
      await lessonPage.clickProgressButton()

      // --- VALIDATE-SIGNATURE-1 (scripting challenge) ---
      await expect(page).toHaveURL(/validate-signature-1/)
      const vls1Code = getAnswerFromFile(5, 'validate-signature-1', language)
      await scriptingChallenge.solveWithLanguage(vls1Code, language)
      await lessonPage.clickProgressButton()

      // --- VALIDATE-SIGNATURE-2 (scripting challenge) ---
      await expect(page).toHaveURL(/validate-signature-2/)
      const vls2Code = getAnswerFromFile(5, 'validate-signature-2', language)
      await scriptingChallenge.solveWithLanguage(vls2Code, language)
      await lessonPage.clickProgressButton()

      // --- VALIDATE-SIGNATURE-3 (scripting challenge) ---
      await expect(page).toHaveURL(/validate-signature-3/)
      const vls3Code = getAnswerFromFile(5, 'validate-signature-3', language)
      await scriptingChallenge.solveWithLanguage(vls3Code, language)
      await lessonPage.clickProgressButton()

      // --- VALIDATE-SIGNATURE-4 (scripting challenge) ---
      await expect(page).toHaveURL(/validate-signature-4/)
      const vls4Code = getAnswerFromFile(5, 'validate-signature-4', language)
      await scriptingChallenge.solveWithLanguage(vls4Code, language)
      await lessonPage.clickProgressButton()

      // --- OUTRO-1 (completion screen) ---
      await expect(page).toHaveURL(/outro-1/)

      // Verify success screen heading is visible.
      await expect(
        page.getByRole('heading', { name: /Vanderpoole lied!/i })
      ).toBeVisible({
        timeout: 10000,
      })

      // Click Continue to go to chapters page.
      await lessonPage.clickProgressButton()

      // Verify we are on the chapters page.
      await expect(page).toHaveURL(/chapters/)

      // Click the Challenges tab in Chapter 5 section to see the lesson list.
      const chapter5 = chaptersPage.getChapterSection(5)
      await chapter5.clickChallenges()

      // Chapter 5 has 20 lessons total (3 intros + 16 lessons + 1 outro).
      // After completion, each should show a checkmark icon.
      await expect(chapter5.checkIcons).toHaveCount(20)
    })
  }
)
