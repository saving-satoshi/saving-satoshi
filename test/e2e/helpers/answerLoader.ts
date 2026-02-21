import * as fs from 'fs'
import * as path from 'path'

const ANSWERS_DIR = path.join(__dirname, '../answers')

/**
 * Get answer from file. Use for lessons without usable spoilers.
 * See docs/e2e-testing.md Answer Source Reference for which lessons use files vs spoilers.
 *
 * @param language - Required for scripting challenges, omit for non-code challenges
 */
export function getAnswerFromFile(
  chapter: number,
  lesson: string,
  language?: 'javascript' | 'python'
): string {
  let filePath: string
  if (language) {
    // Code challenge: test/e2e/answers/chapter{N}/{language}/{lesson}-answer.{js|py}
    const ext = language === 'javascript' ? 'js' : 'py'
    filePath = path.join(
      ANSWERS_DIR,
      `chapter${chapter}`,
      language,
      `${lesson}-answer.${ext}`
    )
  } else {
    // Non-code challenge: test/e2e/answers/chapter{N}/{lesson}-answer.txt
    filePath = path.join(
      ANSWERS_DIR,
      `chapter${chapter}`,
      `${lesson}-answer.txt`
    )
  }

  if (!fs.existsSync(filePath)) {
    throw new Error(`Answer file not found: ${filePath}`)
  }
  return fs.readFileSync(filePath, 'utf-8').trim()
}

/**
 * Check if an answer file exists.
 */
export function hasAnswerFile(
  chapter: number,
  lesson: string,
  language?: 'javascript' | 'python'
): boolean {
  let filePath: string
  if (language) {
    const ext = language === 'javascript' ? 'js' : 'py'
    filePath = path.join(
      ANSWERS_DIR,
      `chapter${chapter}`,
      language,
      `${lesson}-answer.${ext}`
    )
  } else {
    filePath = path.join(
      ANSWERS_DIR,
      `chapter${chapter}`,
      `${lesson}-answer.txt`
    )
  }
  return fs.existsSync(filePath)
}

// Re-export spoiler loader for convenience.
export { getAnswerFromSpoiler, getAnswersFromSpoiler } from './spoilerLoader'
