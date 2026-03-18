import { expect, test } from './fixtures'
import { getAnswerFromFile } from './helpers/answerLoader'
import { describeForEachLanguage } from './helpers/describeLanguage'

/**
 * Chapter 6 E2E tests.
 *
 * Chapter 6 has two tracks:
 *  - normal (3 put-it-together lessons)
 *  - hard (6 put-it-together lessons)
 *
 * Normal track lessons (11 total):
 * - 2 intros (intro-1, intro-2)
 * - 5 in-out lessons (in-out-1 through in-out-5, with in-out-4-normal being narrative)
 * - 3 put-it-together lessons (scripting challenges)
 * - 1 outro
 *
 * Hard track lessons (14 total):
 * - 2 intros (intro-1, intro-2)
 * - 5 in-out lessons (in-out-1 through in-out-5, with in-out-4-hard being a scripting challenge)
 * - 6 put-it-together lessons (scripting challenges)
 * - 1 outro
 */
describeForEachLanguage(
  'Chapter 6: Building SegWit Transactions',
  (language) => {
    test('complete chapter 6 - normal', async ({
      page,
      auth,
      lessonPage,
      chaptersPage,
      scriptingChallenge,
      authModal,
    }) => {
      test.setTimeout(60_000) // 1 minute - scripting challenges take time

      // Setup: authenticate via UI, then set progress via API.
      await page.goto('/en')
      await authModal.signUp()

      // Set progress to have chapters 1-5 completed via API.
      await auth.setProgressToChapter(6)

      // Navigate to chapters page and wait for chapter 6 to be unlocked.
      await page.goto('/en/chapters')
      await page.waitForLoadState('networkidle')

      // Wait for chapter 6 link to appear (indicates progress loaded).
      const chapter6Link = page.getByRole('link', {
        name: /start.*chapter.*6|continue.*chapter.*6/i,
      })
      await chapter6Link.waitFor({ timeout: 15000 })

      // Click on chapter 6 link.
      await chapter6Link.click()

      // --- INTRO-1 (narrative) ---
      await expect(page).toHaveURL(/chapter-6.*intro-1/)
      await lessonPage.clickProgressButton()

      // --- INTRO-2 (narrative) ---
      await expect(page).toHaveURL(/intro-2/)
      await lessonPage.clickProgressButton()

      // --- IN-OUT-1 (PlainEditor narrative) ---
      await expect(page).toHaveURL(/in-out-1/)
      await lessonPage.clickProgressButton()

      // --- IN-OUT-2 (ChapterIntro narrative) ---
      await expect(page).toHaveURL(/in-out-2/)
      await lessonPage.clickProgressButton()

      // --- IN-OUT-3 (Introduction narrative) ---
      await expect(page).toHaveURL(/in-out-3/)
      await lessonPage.clickProgressButton()

      // --- IN-OUT-4-NORMAL (PlainEditor narrative with code - not a challenge) ---
      await expect(page).toHaveURL(/in-out-4-normal/)
      await lessonPage.clickProgressButton()

      // --- IN-OUT-5 (scripting challenge) ---
      await expect(page).toHaveURL(/in-out-5/)
      const inOut5Code = getAnswerFromFile(6, 'in-out-5', language)
      await scriptingChallenge.solveWithLanguage(inOut5Code, language)
      await lessonPage.clickProgressButton()

      // --- PUT-IT-TOGETHER-1-NORMAL (scripting challenge) ---
      await expect(page).toHaveURL(/put-it-together-1-normal/)
      const pit1Code = getAnswerFromFile(6, 'put-it-together-1', language)
      await scriptingChallenge.solveWithLanguage(pit1Code, language)
      await lessonPage.clickProgressButton()

      // --- PUT-IT-TOGETHER-2-NORMAL (scripting challenge) ---
      await expect(page).toHaveURL(/put-it-together-2-normal/)
      const pit2Code = getAnswerFromFile(6, 'put-it-together-2', language)
      await scriptingChallenge.solveWithLanguage(pit2Code, language)
      await lessonPage.clickProgressButton()

      // --- PUT-IT-TOGETHER-3-NORMAL (scripting challenge) ---
      await expect(page).toHaveURL(/put-it-together-3-normal/)
      const pit3Code = getAnswerFromFile(6, 'put-it-together-3', language)
      await scriptingChallenge.solveWithLanguage(pit3Code, language)
      await lessonPage.clickProgressButton()

      // --- OUTRO-1 (completion screen) ---
      await expect(page).toHaveURL(/outro-1/)

      // Verify success screen heading is visible.
      await expect(
        page.getByRole('heading', { name: /you did it!/i })
      ).toBeVisible({
        timeout: 10000,
      })

      // Click Continue to go to chapters page.
      await lessonPage.clickProgressButton()

      // Navigate to the chapters page to verify the lesson list.
      await page.goto('/en/chapters')

      // Verify we are on the chapters page.
      await expect(page).toHaveURL(/chapters/)

      // Click the Challenges tab in Chapter 6 section to see the lesson list.
      const chapter6 = chaptersPage.getChapterSection(6)
      await chapter6.clickChallenges()

      // Normal track has 11 lessons total (2 intros + 8 lessons + 1 outro).
      // After completion, each should show a checkmark icon.
      await expect(chapter6.checkIcons).toHaveCount(11)
    })

    test('complete chapter 6 - hard', async ({
      page,
      auth,
      lessonPage,
      chaptersPage,
      scriptingChallenge,
      authModal,
    }) => {
      test.setTimeout(120_000) // 2 minutes - more scripting challenges in hard mode

      // Setup: authenticate via UI, then set progress via API.
      await page.goto('/en')
      await authModal.signUp()

      // Set progress to have chapters 1-5 completed via API.
      await auth.setProgressToChapter(6)

      // Navigate to chapters page and wait for chapter 6 to be unlocked.
      await page.goto('/en/chapters')
      await page.waitForLoadState('networkidle')

      // Wait for chapter 6 link to appear (indicates progress loaded).
      const chapter6Link = page.getByRole('link', {
        name: /start.*chapter.*6|continue.*chapter.*6/i,
      })
      await chapter6Link.waitFor({ timeout: 15000 })

      // Toggle to hard difficulty before starting the chapter.
      // Find the difficulty toggle within the chapter 6 section.
      const chapter6 = chaptersPage.getChapterSection(6)
      await chapter6.toggleDifficulty()

      // Click on chapter 6 link.
      await chapter6Link.click()

      // --- INTRO-1 (narrative) ---
      await expect(page).toHaveURL(/chapter-6.*intro-1/)
      await lessonPage.clickProgressButton()

      // --- INTRO-2 (narrative) ---
      await expect(page).toHaveURL(/intro-2/)
      await lessonPage.clickProgressButton()

      // --- IN-OUT-1 (PlainEditor narrative) ---
      await expect(page).toHaveURL(/in-out-1/)
      await lessonPage.clickProgressButton()

      // --- IN-OUT-2 (ChapterIntro narrative) ---
      await expect(page).toHaveURL(/in-out-2/)
      await lessonPage.clickProgressButton()

      // --- IN-OUT-3 (Introduction narrative) ---
      await expect(page).toHaveURL(/in-out-3/)
      await lessonPage.clickProgressButton()

      // --- IN-OUT-4-HARD (scripting challenge - Input class implementation) ---
      await expect(page).toHaveURL(/in-out-4-hard/)
      // Hard track in-out-4 is a scripting challenge to implement Input.from_output and serialize.
      const inOut4HardAnswer = getAnswerFromFile(6, 'in-out-4-hard', language)
      await scriptingChallenge.solveWithLanguage(inOut4HardAnswer, language)
      await lessonPage.clickProgressButton()

      // --- IN-OUT-5 (scripting challenge) ---
      await expect(page).toHaveURL(/in-out-5/)
      const inOut5Code = getAnswerFromFile(6, 'in-out-5', language)
      await scriptingChallenge.solveWithLanguage(inOut5Code, language)
      await lessonPage.clickProgressButton()

      // --- PUT-IT-TOGETHER-1-HARD (scripting challenge - Witness class) ---
      await expect(page).toHaveURL(/put-it-together-1-hard/)
      const pit1HardAnswer = getAnswerFromFile(
        6,
        'put-it-together-1-hard',
        language
      )
      await scriptingChallenge.solveWithLanguage(pit1HardAnswer, language)
      await lessonPage.clickProgressButton()

      // --- PUT-IT-TOGETHER-2-HARD (scripting challenge - Transaction.serialize unsigned) ---
      await expect(page).toHaveURL(/put-it-together-2-hard/)
      const pit2HardAnswer = getAnswerFromFile(
        6,
        'put-it-together-2-hard',
        language
      )
      await scriptingChallenge.solveWithLanguage(pit2HardAnswer, language)
      await lessonPage.clickProgressButton()

      // --- PUT-IT-TOGETHER-3-HARD (scripting challenge - Transaction.digest) ---
      await expect(page).toHaveURL(/put-it-together-3-hard/)
      const pit3HardAnswer = getAnswerFromFile(
        6,
        'put-it-together-3-hard',
        language
      )
      await scriptingChallenge.solveWithLanguage(pit3HardAnswer, language)
      await lessonPage.clickProgressButton()

      // --- PUT-IT-TOGETHER-4-HARD (scripting challenge - compute_input_signature) ---
      await expect(page).toHaveURL(/put-it-together-4-hard/)
      const pit4HardAnswer = getAnswerFromFile(
        6,
        'put-it-together-4-hard',
        language
      )
      await scriptingChallenge.solveWithLanguage(pit4HardAnswer, language)
      await lessonPage.clickProgressButton()

      // --- PUT-IT-TOGETHER-5-HARD (scripting challenge - sign_input) ---
      await expect(page).toHaveURL(/put-it-together-5-hard/)
      const pit5HardAnswer = getAnswerFromFile(
        6,
        'put-it-together-5-hard',
        language
      )
      await scriptingChallenge.solveWithLanguage(pit5HardAnswer, language)
      await lessonPage.clickProgressButton()

      // --- PUT-IT-TOGETHER-6-HARD (scripting challenge - final serialize with witness) ---
      await expect(page).toHaveURL(/put-it-together-6-hard/)
      const pit6HardAnswer = getAnswerFromFile(
        6,
        'put-it-together-6-hard',
        language
      )
      await scriptingChallenge.solveWithLanguage(pit6HardAnswer, language)
      await lessonPage.clickProgressButton()

      // --- OUTRO-1 (completion screen) ---
      await expect(page).toHaveURL(/outro-1/)

      // Verify success screen heading is visible.
      await expect(
        page.getByRole('heading', { name: /you did it!/i })
      ).toBeVisible({
        timeout: 10000,
      })

      // Click Continue to go to chapters page.
      await lessonPage.clickProgressButton()

      // Navigate to the chapters page to verify the lesson list.
      await page.goto('/en/chapters')

      // Verify we are on the chapters page.
      await expect(page).toHaveURL(/chapters/)

      // Click the Challenges tab in Chapter 6 section to see the lesson list.
      await chapter6.clickChallenges()

      // Hard track has 14 lessons total (2 intros + 11 lessons + 1 outro).
      // After completion, each should show a checkmark icon.
      await expect(chapter6.checkIcons).toHaveCount(14)
    })
  }
)
