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

/**
 * Opcode challenge answer structure (loaded from JSON files).
 */
export interface OpcodeAnswer {
  script: string
  initialStack: string
  secondStack?: string
  nextBlockHeight?: string
}

/**
 * Get opcode answer from JSON file.
 * JSON files are stored as: test/e2e/answers/chapter{N}/{lesson}.json
 */
export function getOpcodeAnswer(chapter: number, lesson: string): OpcodeAnswer {
  const filePath = path.join(ANSWERS_DIR, `chapter${chapter}`, `${lesson}.json`)
  if (!fs.existsSync(filePath)) {
    throw new Error(`Opcode answer file not found: ${filePath}`)
  }
  const content = fs.readFileSync(filePath, 'utf-8')
  return JSON.parse(content) as OpcodeAnswer
}

/**
 * Check if an opcode answer JSON file exists.
 */
export function hasOpcodeAnswer(chapter: number, lesson: string): boolean {
  const filePath = path.join(ANSWERS_DIR, `chapter${chapter}`, `${lesson}.json`)
  return fs.existsSync(filePath)
}

/**
 * Transaction challenge answer structure (loaded from JSON files).
 * Used for Chapter 10 payment channel challenges.
 */
export interface TransactionAnswer {
  output_0?: {
    sats?: string
    script?: string
  }
  output_1?: {
    sats?: string
    script?: string
  }
}

/**
 * Get transaction answer from JSON file.
 * JSON files are stored as: test/e2e/answers/chapter{N}/{lesson}-answer.json
 */
export function getTransactionAnswer(
  chapter: number,
  lesson: string
): TransactionAnswer {
  const filePath = path.join(
    ANSWERS_DIR,
    `chapter${chapter}`,
    `${lesson}-answer.json`
  )
  if (!fs.existsSync(filePath)) {
    throw new Error(`Transaction answer file not found: ${filePath}`)
  }
  const content = fs.readFileSync(filePath, 'utf-8')
  return JSON.parse(content) as TransactionAnswer
}

/**
 * Check if a transaction answer JSON file exists.
 */
export function hasTransactionAnswer(chapter: number, lesson: string): boolean {
  const filePath = path.join(
    ANSWERS_DIR,
    `chapter${chapter}`,
    `${lesson}-answer.json`
  )
  return fs.existsSync(filePath)
}

// Re-export spoiler loader for convenience.
export { getAnswerFromSpoiler, getAnswersFromSpoiler } from './spoilerLoader'
