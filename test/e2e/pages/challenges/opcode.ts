import { Page } from '@playwright/test'
import { OpcodeAnswer } from '../../helpers/answerLoader'
import { BasePage } from '../basePage'

export class OpCodeChallengePage extends BasePage {
  constructor(page: Page) {
    super(page)
  }

  /**
   * Build a script by dragging opcodes from the palette.
   * For OP_PUSH opcodes, the next item in the array should be the push data.
   *
   * Example: ['OP_2', 'OP_PUSH', 'PUBKEY(ME)', 'OP_CHECKSIG']
   * This will drag OP_2, then OP_PUSH (and fill in PUBKEY(ME)), then OP_CHECKSIG.
   */
  async buildScript(script: string[]): Promise<void> {
    const dropZone = this.getScriptArea()

    let i = 0
    while (i < script.length) {
      const item = script[i]

      if (item === 'OP_PUSH') {
        // For OP_PUSH: drag, then fill script area with push data.
        const pushData = script[i + 1]
        await this.dragOpcode('OP_PUSH', dropZone)
        await this.fillPushDataInScriptArea(pushData)
        i += 2 // Skip the push data item.
      } else {
        // Drag regular opcode.
        await this.dragOpcode(item, dropZone)
        i += 1
      }
    }
    // Wait for script area to fully stabilize after all drops.
    await this.page.waitForTimeout(500)
  }

  /**
   * Set the initial stack for the opcode challenge.
   * The initial stack input is labeled "Initial stack".
   */
  async setInitialStack(values: string[]): Promise<void> {
    // Find the initial stack input field.
    const initialStackInput = this.page.locator(
      'text=Initial stack >> .. >> input'
    )
    // Join values with spaces.
    await initialStackInput.fill(values.join(' '))
  }

  /**
   * Set the next block height for timelock challenges.
   * The input is a number spinbutton labeled "Next block height".
   */
  async setNextBlockHeight(height: string): Promise<void> {
    // Find the spinbutton by its placeholder text.
    const blockHeightInput = this.page.getByRole('spinbutton', {
      name: /enter any number above/i,
    })
    await blockHeightInput.waitFor({ state: 'visible', timeout: 5000 })

    // Triple-click to select all existing text, then type the new value.
    // This is more reliable than fill() for React controlled inputs.
    await blockHeightInput.click({ clickCount: 3 })
    await this.page.waitForTimeout(100)
    await blockHeightInput.pressSequentially(height, { delay: 50 })
    await this.page.waitForTimeout(100)
    // Click elsewhere to trigger blur and state update.
    await this.page.locator('h1').first().click()
    await this.page.waitForTimeout(200)
  }

  /**
   * Execute the Bitcoin script by clicking the Run button.
   * The Run button in OpCodeChallenge has a play icon SVG.
   */
  async executeScript(): Promise<void> {
    // The Run button has a play icon (viewBox="0 0 10 15").
    const runBtn = this.page.locator('button:has(svg[viewBox="0 0 10 15"])')
    await runBtn.waitFor({ timeout: 10000 })
    await runBtn.click()
  }

  /**
   * Solve a pre-populated opcode challenge.
   * Just click Run and wait for success.
   */
  async solvePrePopulated(): Promise<void> {
    await this.executeScript()
    await this.waitForSuccess()
  }

  /**
   * Solve a user-input opcode challenge by building the script.
   */
  async solveWithScript(script: string[]): Promise<void> {
    await this.buildScript(script)
    await this.executeScript()
    await this.waitForSuccess()
  }

  /**
   * Solve an advanced opcode challenge (two-step).
   * Step 1: Build script, set first stack, and run.
   * Step 2: Enter second stack, set block height if needed, and run again.
   */
  async solveAdvanced(
    script: string[],
    firstStack: string[],
    secondStack: string[],
    nextBlockHeight?: string
  ): Promise<void> {
    // Step 1: Build script, set initial stack, and run.
    await this.buildScript(script)
    await this.setInitialStack(firstStack)
    await this.executeScript()

    // Wait for step 2 (partial success indicator).
    await this.page.waitForTimeout(2000)

    // Step 2: Enter second stack and run again.
    await this.setInitialStack(secondStack)
    // Set block height for step 2 (needed for timelock challenges).
    if (nextBlockHeight) {
      await this.setNextBlockHeight(nextBlockHeight)
    }
    await this.executeScript()
    await this.waitForSuccess()
  }

  /**
   * Solve with given stack values (legacy method for initial stack only).
   */
  async solveWith(stack: string[]): Promise<void> {
    await this.setInitialStack(stack)
    await this.executeScript()
    await this.waitForSuccess()
  }

  /**
   * Solve an opcode challenge using answer from JSON file.
   * Handles all challenge types based on the answer structure:
   * - Pre-populated (empty script): set initial stack and run
   * - Script-building (script + initialStack): build script, set initial stack, run
   * - Advanced (script + secondStack): two-step solve
   */
  async solveFromAnswer(answer: OpcodeAnswer): Promise<void> {
    const script = this.parseScript(answer.script)
    const initialStack = this.parseScript(answer.initialStack)

    // Set next block height if provided (for timelock challenges).
    if (answer.nextBlockHeight) {
      await this.setNextBlockHeight(answer.nextBlockHeight)
    }

    // Case 1: Pre-populated challenge (script is empty, just set initial stack).
    if (script.length === 0 && initialStack.length > 0) {
      await this.solveWith(initialStack)
      return
    }

    // Case 2: Advanced challenge (has secondStack for two-step solve).
    if (answer.secondStack) {
      const secondStack = this.parseScript(answer.secondStack)
      await this.solveAdvanced(
        script,
        initialStack,
        secondStack,
        answer.nextBlockHeight
      )
      return
    }

    // Case 3: Script-building challenge (build script, optionally set initial stack, run).
    if (script.length > 0) {
      await this.buildScript(script)
      if (initialStack.length > 0) {
        await this.setInitialStack(initialStack)
      }
      await this.executeScript()
      await this.waitForSuccess()
      return
    }

    // Fallback: just run (fully pre-populated).
    await this.solvePrePopulated()
  }

  // ---------------------------------------------------------------------------
  // Private methods
  // ---------------------------------------------------------------------------

  /**
   * Get an opcode item from the palette by its text.
   */
  private getOpcodeFromPalette(opcode: string) {
    // Target opcodes only in the palette area.
    // The palette has category sections with h2 headings (constant, arithmetic, crypto, etc.).
    // Each category has a parent div containing both the h2 and a div with opcode items.
    // Use :has(h2) to ensure we're in a category section, then find the opcode.
    return this.page
      .locator('div:has(> h2)')
      .getByText(opcode, { exact: true })
      .first()
  }

  /**
   * Get the drop target area where opcodes should be dragged.
   */
  private getScriptArea() {
    // Target the script container by finding the "Your script" paragraph's sibling div.
    return this.page.locator('p:has-text("Your script") + div')
  }

  /**
   * Drag an opcode from the palette to the script area using manual mouse operations.
   * Scrolls the script area to the end before each drop to ensure correct ordering.
   */
  private async dragOpcode(opcode: string, target: any): Promise<void> {
    const source = this.getOpcodeFromPalette(opcode)

    // Wait for both elements to be visible.
    await source.waitFor({ state: 'visible', timeout: 5000 })
    await target.waitFor({ state: 'visible', timeout: 5000 })

    // Scroll source into view and wait for layout to settle.
    await source.scrollIntoViewIfNeeded()
    await this.page.waitForTimeout(200)

    // Scroll the script area to the far right to ensure new items are appended.
    await target.evaluate((el: HTMLElement) => {
      el.scrollLeft = el.scrollWidth
    })
    await this.page.waitForTimeout(100)

    const sourceBox = await source.boundingBox()
    const targetBox = await target.boundingBox()

    if (!sourceBox || !targetBox) {
      throw new Error('Could not get bounding boxes for drag operation')
    }

    const sourceX = sourceBox.x + sourceBox.width / 2
    const sourceY = sourceBox.y + sourceBox.height / 2

    // Drop at the visible right edge of the container.
    // After scrolling to the end, drop near the right edge of the visible area.
    const targetX = targetBox.x + targetBox.width - 30
    const targetY = targetBox.y + targetBox.height / 4

    // Position mouse over source element.
    await this.page.mouse.move(sourceX, sourceY)
    await this.page.waitForTimeout(100)

    // Start drag.
    await this.page.mouse.down()
    await this.page.waitForTimeout(200) // Hold to initiate drag.

    // Move to target in smooth steps.
    const steps = 20
    for (let i = 1; i <= steps; i++) {
      const x = sourceX + ((targetX - sourceX) * i) / steps
      const y = sourceY + ((targetY - sourceY) * i) / steps
      await this.page.mouse.move(x, y)
      await this.page.waitForTimeout(20)
    }

    // Hover over target position to ensure drop zone is activated.
    await this.page.waitForTimeout(300)

    // Release to drop.
    await this.page.mouse.up()

    // Wait for DOM update.
    await this.page.waitForTimeout(500)
  }

  /**
   * Fill in the push data in the script area's OP_PUSH textbox after dragging.
   * Uses the LAST PUSH_DATA input since react-beautiful-dnd appends items when
   * dropped at the far right.
   */
  private async fillPushDataInScriptArea(value: string): Promise<void> {
    // Wait for DOM to stabilize after drag.
    await this.page.waitForTimeout(300)
    // Find textboxes within the "Your script" area.
    const scriptArea = this.page
      .locator('p:has-text("Your script")')
      .locator('..')
    const pushInputs = scriptArea.locator('input[placeholder="PUSH_DATA"]')
    // Use the LAST input since we always append to the end.
    const pushInput = pushInputs.last()
    await pushInput.waitFor({ state: 'visible', timeout: 5000 })
    await pushInput.fill(value)
    // Click somewhere neutral to blur the input and stabilize the DOM.
    await this.page.locator('h1').first().click()
    await this.page.waitForTimeout(100)
  }

  /**
   * Parse a space-separated script string into array format for buildScript.
   * Example: "OP_2 OP_PUSH PUBKEY(me)" -> ['OP_2', 'OP_PUSH', 'PUBKEY(me)']
   */
  private parseScript(script: string): string[] {
    if (!script || script.trim() === '') return []
    return script.trim().split(/\s+/)
  }
}
