import { test, Language } from '../fixtures/index'

const languages: Language[] = ['javascript', 'python']

/**
 * This is a wrapper around test.describe that runs the same test for each language. It
 * should be used in test suites for chapters that have ScriptChallenges.
 */
export function describeForEachLanguage(
  title: string,
  fn: (language: Language) => void
) {
  for (const language of languages) {
    test.describe(`${title} (${language})`, () => fn(language))
  }
}
