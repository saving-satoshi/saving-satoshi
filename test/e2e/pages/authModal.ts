import { expect, Locator, Page } from '@playwright/test'

/**
 * Page Object Model for authentication modals (Sign In, Sign Up, Account Info).
 *
 * Encapsulates the three auth-related modal flows:
 * - Sign In: Enter private key to restore account
 * - Sign Up: Create new account with avatar selection
 * - Account Info: View/copy private key, sign out
 */
export class AuthModal {
  readonly page: Page

  // Common elements
  readonly profileButton: Locator
  readonly closeButton: Locator

  // Sign In modal elements
  readonly privateKeyInput: Locator
  readonly signInButton: Locator
  readonly dontHaveAccountButton: Locator

  // Sign Up modal elements
  readonly avatarButtons: Locator
  readonly toggleSwitch: Locator
  readonly doneButton: Locator
  readonly privateKeyDisplay: Locator
  readonly copyButton: Locator

  // Account Info modal elements
  readonly signOutButton: Locator

  constructor(page: Page) {
    this.page = page

    // Common
    this.profileButton = page.getByRole('button', { name: 'profile' })
    this.closeButton = page.getByRole('button', { name: 'Close' })

    // Sign In
    this.privateKeyInput = page.getByRole('textbox', {
      name: 'Enter your private key',
    })
    this.signInButton = page.getByRole('button', { name: 'Sign in' })
    this.dontHaveAccountButton = page.getByRole('button', {
      name: "Don't have an account?",
    })

    // Sign Up
    this.avatarButtons = page.locator('[role="button"][name*="Select avatar"]')
    this.toggleSwitch = page.locator('.toggle-switch .slider')
    this.doneButton = page.getByRole('button', { name: 'Done' })
    this.privateKeyDisplay = page.locator('code')
    this.copyButton = page.getByRole('button', { name: 'Copy' })

    // Account Info
    this.signOutButton = page.getByRole('button', { name: 'Sign out' })
  }

  /**
   * Open the auth modal by clicking the profile button in navbar.
   */
  async openModal(): Promise<void> {
    await this.profileButton.click()
  }

  /**
   * Close the modal.
   */
  async close(): Promise<void> {
    await this.closeButton.click()
  }

  /**
   * Sign in with an existing private key.
   */
  async signIn(privateKey: string): Promise<void> {
    await this.openModal()
    await this.privateKeyInput.fill(privateKey)
    await this.signInButton.click()
    await this.page.waitForLoadState('networkidle')
  }

  /**
   * Sign up for a new account.
   * @param avatar - Avatar name to select (e.g., 'red spacesuit', 'white spacesuit')
   * @returns The generated private key
   */
  async signUp(avatar = 'red spacesuit'): Promise<string> {
    await this.openModal()
    await this.dontHaveAccountButton.click()
    await this.selectAvatar(avatar)
    const privateKey = await this.getDisplayedPrivateKey()
    await this.acknowledgeKeyBackup()
    await this.doneButton.click()
    await this.page.waitForLoadState('networkidle')
    // Wait until the saving-satoshi-token exists in localStorage
    await this.page.waitForFunction(
      () => !!window.localStorage.getItem('saving-satoshi-token'),
      undefined,
      { timeout: 5000 }
    )
    // Add an additional delay to reduce flakiness
    await this.page.waitForTimeout(500)
    return privateKey
  }

  /**
   * Sign up directly from "Save my progress" button on completion screen.
   * @param avatar - Avatar name to select
   * @returns The generated private key
   */
  async signUpFromSaveProgress(avatar = 'red spacesuit'): Promise<string> {
    await this.page.getByRole('button', { name: 'Save my progress' }).click()
    await this.selectAvatar(avatar)
    const privateKey = await this.getDisplayedPrivateKey()
    await this.acknowledgeKeyBackup()
    await this.doneButton.click()
    await this.page.waitForLoadState('networkidle')
    return privateKey
  }

  /**
   * Sign out of the current account.
   */
  async signOut(): Promise<void> {
    await this.openModal()
    await this.signOutButton.click()
    await this.page.waitForLoadState('networkidle')
  }

  /**
   * Select an avatar by name.
   * @param avatar - Partial avatar name (e.g., 'red spacesuit', 'bunny engineer')
   */
  async selectAvatar(avatar: string): Promise<void> {
    const avatarButton = this.page.getByRole('button', {
      name: new RegExp(`Select avatar with ${avatar}`, 'i'),
    })
    await avatarButton.click()
  }

  /**
   * Click the toggle switch to acknowledge private key backup.
   */
  async acknowledgeKeyBackup(): Promise<void> {
    await this.toggleSwitch.click()
  }

  /**
   * Get the displayed private key from the modal.
   */
  async getDisplayedPrivateKey(): Promise<string> {
    return (await this.privateKeyDisplay.textContent()) || ''
  }

  /**
   * Copy the private key to clipboard.
   */
  async copyPrivateKey(): Promise<void> {
    await this.copyButton.click()
  }

  /**
   * Check if the user is currently logged in.
   * When logged in, clicking profile shows "You are logged in" heading.
   */
  async isLoggedIn(): Promise<boolean> {
    await this.openModal()
    const isLoggedIn = await this.page
      .getByRole('heading', { name: /you are logged in/i })
      .isVisible()
    await this.close()
    return isLoggedIn
  }

  /**
   * Assert that the Sign In modal is visible.
   */
  async expectSignInModalVisible(): Promise<void> {
    await expect(
      this.page.getByRole('heading', { name: 'Sign in' })
    ).toBeVisible()
  }

  /**
   * Assert that the Sign Up modal is visible.
   */
  async expectSignUpModalVisible(): Promise<void> {
    await expect(
      this.page.getByRole('heading', { name: 'Save your progress' })
    ).toBeVisible()
  }

  /**
   * Assert that the Account Info modal is visible.
   */
  async expectAccountInfoModalVisible(): Promise<void> {
    await expect(
      this.page.getByRole('heading', { name: /you are logged in/i })
    ).toBeVisible()
  }
}
