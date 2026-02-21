import { Page } from '@playwright/test'
import { MONACO_EDITOR, MONACO_TEXTAREA } from './selectors'

/**
 * Helper utilities for interacting with Monaco Editor.
 * Monaco doesn't expose accessible roles, so we use CSS selectors.
 */
export class MonacoHelper {
  constructor(private page: Page) {}

  /**
   * Wait for Monaco to fully initialize (async loading).
   */
  async waitForReady(): Promise<void> {
    // Wait for Monaco editor container.
    await this.page.waitForSelector(MONACO_EDITOR)
    // Wait for editor to be interactive (textarea is the input target).
    await this.page.waitForSelector(MONACO_TEXTAREA)
  }

  /**
   * Clear existing code and set new content.
   */
  async setCode(code: string, startLine: number): Promise<void> {
    await this.waitForReady()
    const editor = this.page.locator(MONACO_EDITOR)

    // Focus the editor.
    await editor.click()
    await this.page.waitForTimeout(500)

    await this.page.evaluate(
      ({ code, startLine }) => {
        const editors = (window as any).monaco?.editor?.getEditors()
        // Find the visible editor by checking which one's DOM node is visible.
        const editor = editors.find((e: any) => {
          const domNode = e.getDomNode()
          if (!domNode) return false
          const rect = domNode.getBoundingClientRect()
          // Check if the editor has positive dimensions and is in the viewport.
          return (
            rect.width > 0 &&
            rect.height > 0 &&
            rect.top < window.innerHeight &&
            rect.bottom > 0
          )
        })

        if (!editor) {
          throw new Error('No visible Monaco editor found')
        }

        if (startLine <= 1) {
          // Replace entire content.
          editor.setValue(code)
        } else {
          // Preserve lines before startLine.
          const value: string = editor.getValue()
          const lines = value.split('\n')
          const newLines = lines.slice(0, startLine - 1)
          const newCode = newLines.join('\n')
          editor.setValue(newCode + code)
        }
      },
      { code, startLine }
    )
  }

  /**
   * Get current editor content.
   */
  async getCode(): Promise<string> {
    return await this.page.evaluate(() => {
      // Access Monaco's model through the global monaco instance.
      const editors = (window as any).monaco?.editor?.getEditors()
      // Find the visible editor by checking which one's DOM node is visible.
      const editor = editors?.find((e: any) => {
        const domNode = e.getDomNode()
        if (!domNode) return false
        const rect = domNode.getBoundingClientRect()
        // Check if the editor has positive dimensions and is in the viewport.
        return (
          rect.width > 0 &&
          rect.height > 0 &&
          rect.top < window.innerHeight &&
          rect.bottom > 0
        )
      })

      if (!editor) {
        throw new Error('No visible Monaco editor found')
      }

      return editor.getValue()
    })
  }

  /**
   * Focus the editor.
   */
  async focus(): Promise<void> {
    await this.waitForReady()
    await this.page.locator(MONACO_EDITOR).click()
  }
}
