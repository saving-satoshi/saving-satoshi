#!/bin/bash
# Setup script for e2e tests - clones challenges repo into test/e2e/answers
# Preserves chapter structure: test/e2e/answers/chapter4/javascript/answer.js

set -e
cd "$(dirname "$0")/.."

ANSWERS_DIR="test/e2e/answers"

if [ -d "$ANSWERS_DIR/.git" ]; then
  echo "✅ E2E answers already cloned at $ANSWERS_DIR"
  exit 0
fi

# Clone challenges repo directly into test/e2e/answers
git clone git@github.com:saving-satoshi/challenges.git "$ANSWERS_DIR"

echo "✅ E2E answers cloned to $ANSWERS_DIR"
