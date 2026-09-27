#!/bin/bash
# E2E test runner - takes argument to determine which tests to run
# Usage: yarn e2e [target]

set -e
cd "$(dirname "$0")/.."

TARGET="${1}"

case "$TARGET" in
  smoke)
    npx playwright test test/e2e/navigation.spec.ts
    ;;
  all)
    npx playwright test
    ;;
  all:js)
    npx playwright test --grep "javascript"
    ;;
  all:py)
    npx playwright test --grep "python"
    ;;
  [0-9])
    npx playwright test "test/e2e/chapter-${TARGET}.spec.ts" --headed
    ;;
  [0-9][0-9])
    npx playwright test "test/e2e/chapter-${TARGET}.spec.ts" --headed
    ;;
  [0-9]:js)
    CHAPTER="${TARGET%:js}"
    npx playwright test "test/e2e/chapter-${CHAPTER}.spec.ts" --grep "javascript" --headed
    ;;
  [0-9]:py)
    CHAPTER="${TARGET%:py}"
    npx playwright test "test/e2e/chapter-${CHAPTER}.spec.ts" --grep "python" --headed
    ;;
  [0-9][0-9]:js)
    CHAPTER="${TARGET%:js}"
    npx playwright test "test/e2e/chapter-${CHAPTER}.spec.ts" --grep "javascript" --headed
    ;;
  [0-9][0-9]:py)
    CHAPTER="${TARGET%:py}"
    npx playwright test "test/e2e/chapter-${CHAPTER}.spec.ts" --grep "python" --headed
    ;;
  ui)
    npx playwright test --ui
    ;;
  *)
    echo "Unknown target: $TARGET"
    echo "Usage: yarn e2e [target]"
    echo ""
    echo "Targets:"
    echo "  all       - Run all tests (both languages where applicable)"
    echo "  all:js    - Run only JavaScript language variants"
    echo "  all:py    - Run only Python language variants"
    echo "  smoke     - Run smoke tests (basic site navigation)"
    echo "  N         - Chapter N, both languages (e.g., 4, 10)"
    echo "  N:js      - Chapter N with JavaScript only (e.g., 4:js, 10:js)"
    echo "  N:py      - Chapter N with Python only (e.g., 4:py, 10:py)"
    echo "  ui        - Open Playwright UI mode"
    echo ""
    echo "Language-agnostic chapters (1, 3, 9, 10) ignore :js/:py filters."
    echo "Individual chapter tests will show a browser window while running."
    exit 1
    ;;
esac
