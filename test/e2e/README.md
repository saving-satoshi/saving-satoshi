# E2E Tests

End-to-end tests for Saving Satoshi using [Playwright](https://playwright.dev/).

## Directory Structure

```
test/e2e/
├── answers/           # Challenge solutions (cloned from challenges repo)
│   └── chapter{N}/
│       ├── javascript/
│       │   └── {lesson}-answer.js
│       ├── python/
│       │   └── {lesson}-answer.py
│       ├── {lesson}-answer.txt    # Non-code challenges
│       └── {lesson}.json          # Opcode challenges
├── fixtures/          # Playwright test fixtures
│   ├── index.ts                   # Base test with page object fixtures
│   └── describe-for-each-language.ts  # Factory for language-parameterized tests
├── helpers/           # Test utilities and answer loaders
├── pages/             # Page Object Models
│   └── challenges/    # Challenge-specific page objects
├── chapter-{N}.spec.ts  # Test spec files (one per chapter)
└── navigation.spec.ts   # Smoke/navigation tests
```

## How Language Parameterization Works

Chapters that include scripting challenges (2, 4, 5, 6, 7, 8) need to run once per language (JavaScript and Python). Chapters without scripting challenges (1, 3, 9, 10) run once.

This is handled by `describeForEachLanguage`, a factory function that wraps tests in parameterized `test.describe` blocks:

```typescript
import { describeForEachLanguage } from '../fixtures/describe-for-each-language'

describeForEachLanguage('Chapter 4: Claiming Your 1.61 Bitcoin', (language) => {
  test('complete chapter 4', async ({ scriptingChallenge }) => {
    const code = getAnswerFromFile(4, 'public-key-3', language)
    await scriptingChallenge.solveWithLanguage(code, language)
  })
})
```

This creates two test entries in the report:

```
Chapter 4: Claiming Your 1.61 Bitcoin [javascript] > complete chapter 4
Chapter 4: Claiming Your 1.61 Bitcoin [python] > complete chapter 4
```

Language-agnostic chapters use plain `test.describe` and run once.

## How Answers Are Sourced

Challenge answers are stored in the [saving-satoshi/challenges](https://github.com/saving-satoshi/challenges) repository and cloned into `test/e2e/answers/` during setup.

The `answer-loader.ts` helper provides functions to load answers:

- **Scripting challenges**: `getAnswerFromFile(chapter, lesson, language)` loads from `answers/chapter{N}/{language}/{lesson}-answer.{js|py}`
- **Text challenges**: `getAnswerFromFile(chapter, lesson)` loads from `answers/chapter{N}/{lesson}-answer.txt`
- **Opcode challenges**: `getOpcodeAnswer(chapter, lesson)` loads JSON from `answers/chapter{N}/{lesson}.json`
- **Spoiler-based**: `getAnswerFromSpoiler()` extracts answers from the lesson's spoiler component

## Running Locally

### Prerequisites

1. **Backend running** on port 8000 (see `saving-satoshi-backend/` README)
2. **Answers cloned** into `test/e2e/answers/`

### Setup

Clone the answers repository (one-time setup):

```bash
./scripts/setup-e2e.sh
```

### Run Tests

```bash
# Run all tests (both languages where applicable)
yarn e2e all

# Run smoke tests only (navigation)
yarn e2e smoke

# Run all tests in a specific chapter (both languages)
yarn e2e 4

# Run a specific chapter with JavaScript only
yarn e2e 4:js

# Run a specific chapter with Python only
yarn e2e 4:py

# Run only JavaScript variants across all chapters
yarn e2e all:js

# Run only Python variants across all chapters
yarn e2e all:py

# Open Playwright UI mode (interactive debugging)
yarn e2e ui
```

Individual chapter tests (`N`, `N:js`, `N:py`) run in headed mode so you can watch the browser.

Language-agnostic chapters (1, 3, 9, 10) are ignored in `:js`/`:py` filters since they have no language variants.
