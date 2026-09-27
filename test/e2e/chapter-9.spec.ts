import { expect, test } from './fixtures'
import { getOpcodeAnswer } from './helpers/answerLoader'

/**
 * Chapter 9 E2E tests.
 *
 * Challenge types in Chapter 9:
 *  - 8 opcode challenges (opcodes-5, 6, 8, 9, 10 and proposal-2, 3, 4)
 */
test.describe('Chapter 9: Opcodes', () => {
  test('complete chapter 9', async ({
    page,
    auth,
    lessonPage,
    chaptersPage,
    opCodeChallenge,
    authModal,
  }) => {
    // Increase timeout for this test due to many drag-and-drop operations.
    test.setTimeout(180_000)
    // Setup: authenticate via UI, then set progress via API.
    await page.goto('/en')
    await authModal.signUp()

    // Set progress to have chapters 1-8 completed via API.
    await auth.setProgressToChapter(9)

    // Navigate to chapters page and wait for chapter 9 to be unlocked.
    await page.goto('/en/chapters')
    await page.waitForLoadState('networkidle')

    // Wait for chapter 9 link to appear (indicates progress loaded).
    const chapter9Link = page.getByRole('link', {
      name: /start.*chapter.*9|continue.*chapter.*9/i,
    })
    await chapter9Link.waitFor({ timeout: 15000 })

    // Click on chapter 9 link.
    await chapter9Link.click()

    // --- INTRO-1 (narrative) ---
    await expect(page).toHaveURL(/chapter-9.*intro-1/)
    await lessonPage.clickProgressButton()

    // --- INTRO-2 (narrative) ---
    await expect(page).toHaveURL(/intro-2/)
    await lessonPage.clickProgressButton()

    // --- OPCODES-1 (narrative - intro to script basics) ---
    await expect(page).toHaveURL(/opcodes-1/)
    await lessonPage.clickProgressButton()

    // --- OPCODES-2 (narrative - the stack) ---
    await expect(page).toHaveURL(/opcodes-2/)
    await lessonPage.clickProgressButton()

    // --- OPCODES-3 (narrative - intro to opcodes) ---
    await expect(page).toHaveURL(/opcodes-3/)
    await lessonPage.clickProgressButton()

    // --- OPCODES-4 (narrative - stack solution walkthrough) ---
    await expect(page).toHaveURL(/opcodes-4/)
    await lessonPage.clickProgressButton()

    // --- OPCODES-5 (opcode challenge - pre-populated arithmetic) ---
    await expect(page).toHaveURL(/opcodes-5/)
    await opCodeChallenge.solveFromAnswer(getOpcodeAnswer(9, 'opcodes-5'))
    await lessonPage.clickProgressButton()

    // --- OPCODES-6 (opcode challenge - pre-populated cryptography) ---
    await expect(page).toHaveURL(/opcodes-6/)
    await opCodeChallenge.solveFromAnswer(getOpcodeAnswer(9, 'opcodes-6'))
    await lessonPage.clickProgressButton()

    // --- OPCODES-7 (narrative - multisig intro) ---
    await expect(page).toHaveURL(/opcodes-7/)
    await lessonPage.clickProgressButton()

    // --- OPCODES-8 (opcode challenge - pre-populated multisig) ---
    await expect(page).toHaveURL(/opcodes-8/)
    await opCodeChallenge.solveFromAnswer(getOpcodeAnswer(9, 'opcodes-8'))
    await lessonPage.clickProgressButton()

    // --- OPCODES-9 (opcode challenge - pre-populated timelock) ---
    await expect(page).toHaveURL(/opcodes-9/)
    await opCodeChallenge.solveFromAnswer(getOpcodeAnswer(9, 'opcodes-9'))
    await lessonPage.clickProgressButton()

    // --- OPCODES-10 (opcode challenge - pre-populated conditionals) ---
    await expect(page).toHaveURL(/opcodes-10/)
    await opCodeChallenge.solveFromAnswer(getOpcodeAnswer(9, 'opcodes-10'))
    await lessonPage.clickProgressButton()

    // --- PROPOSAL-1 (narrative - transition to practice) ---
    await expect(page).toHaveURL(/proposal-1/)
    await lessonPage.clickProgressButton()

    // --- PROPOSAL-2 (opcode challenge - user builds 2-of-2 multisig) ---
    await expect(page).toHaveURL(/proposal-2/)
    await opCodeChallenge.solveFromAnswer(getOpcodeAnswer(9, 'proposal-2'))
    await lessonPage.clickProgressButton()

    // --- PROPOSAL-3 (advanced opcode challenge - conditional timelock) ---
    await expect(page).toHaveURL(/proposal-3/)
    await opCodeChallenge.solveFromAnswer(getOpcodeAnswer(9, 'proposal-3'))
    await lessonPage.clickProgressButton()

    // --- PROPOSAL-4 (advanced opcode challenge - hash preimage) ---
    await expect(page).toHaveURL(/proposal-4/)
    await opCodeChallenge.solveFromAnswer(getOpcodeAnswer(9, 'proposal-4'))
    await lessonPage.clickProgressButton()

    // --- OUTRO-1 (completion screen) ---
    await expect(page).toHaveURL(/outro-1/)

    // Verify success screen is visible.
    // Chapter 9 outro shows "Way to go!" message.
    await expect(
      page.getByText(/congratulations|well done|completed|way to go/i).first()
    ).toBeVisible({
      timeout: 10000,
    })

    // Click Continue to go to chapters page.
    await lessonPage.clickProgressButton()

    // Navigate to the chapters page to verify the lesson list.
    await page.goto('/en/chapters')

    // Verify we are on the chapters page.
    await expect(page).toHaveURL(/chapters/)

    // Click the Challenges tab in Chapter 9 section to see the lesson list.
    const chapter9 = chaptersPage.getChapterSection(9)
    await chapter9.clickChallenges()

    // Chapter 9 has 17 lessons total (2 intros + 10 opcodes + 4 proposals + 1 outro).
    // After completion, each should show a checkmark icon.
    await expect(chapter9.checkIcons).toHaveCount(17)
  })
})
