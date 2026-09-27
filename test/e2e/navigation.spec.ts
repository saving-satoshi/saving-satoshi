import { expect, test } from './fixtures'

test.describe('Smoke Tests', () => {
  test('home page loads', async ({ page }) => {
    await page.goto('/en')
    await expect(page).toHaveTitle(/Saving Satoshi/)
  })

  test('can navigate to chapters page', async ({ page }) => {
    await page.goto('/en')

    // Click "Start Journey" button to go to chapters page.
    const startBtn = page.getByRole('link', { name: /start/i })
    await startBtn.click()

    // Should be on chapters page.
    await expect(page).toHaveURL(/chapters/)
  })

  test('can navigate to chapter 1 intro', async ({ page }) => {
    await page.goto('/en')

    // Click "Start Journey" to go to chapters page.
    await page.getByRole('link', { name: /start/i }).click()
    await expect(page).toHaveURL(/chapters/)

    // Click "Start Chapter 1" button.
    const startChapter1 = page.getByRole('link', {
      name: /start.*1|chapter.*1/i,
    })
    await startChapter1.click()

    // Should be on chapter 1 intro.
    await expect(page).toHaveURL(/chapter-1/)
  })

  test('chapter 1 intro has continue button', async ({ page }) => {
    await page.goto('/en')

    // Navigate to chapter 1 via clicks.
    await page.getByRole('link', { name: /start/i }).click()
    await page.getByRole('link', { name: /start.*1|chapter.*1/i }).click()

    // Should see continue/next button for intro.
    // The button text can be "Continue" or "Next" depending on localization.
    const continueBtn = page.getByRole('button', { name: /continue|next/i })
    await expect(continueBtn).toBeVisible()
  })
})
