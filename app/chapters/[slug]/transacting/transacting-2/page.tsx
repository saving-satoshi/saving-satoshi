'use client'

import TerminalChallengeLayout from 'components/templates/TerminalChallenge/TerminalChallengeLayout'

export default function TransactingPt2() {
  return (
    <TerminalChallengeLayout
      slug="transacting-2"
      next="/chapters/chapter-1/done"
      chapterInfo="chapter-1"
      instruction="Waiting for you to write and run the script...."
      successMessage="jtacos for everyone"
      challengeInfo="done"
      expectedInput="6a127461636f7320666f722065766572796f6e65"
      copyableCodeContent="echo scriptPubKeyHex | xxd -r -p"
    />
  )
}
