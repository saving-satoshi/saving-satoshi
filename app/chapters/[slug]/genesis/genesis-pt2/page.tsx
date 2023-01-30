'use client'

import TerminalChallengeLayout from 'components/templates/TerminalChallenge/TerminalChallengeLayout'
import { CopyButton } from 'components/ui/CopyButton'

const TipAdditionalContent: React.FC = () => (
  <CopyButton
    classes="mt-2"
    content={
      '04ffff001d0104455468652054696d65732030332f4a616e2f32303039204368616e63656c6c6f72206f6e206272696e6b206f66207365636f6e64206261696c6f757420666f722062616e6b73'
    }
  >
    Copy ScriptSigHex value
  </CopyButton>
)

export default function GenesisPt2() {
  return (
    <TerminalChallengeLayout
      slug="genesis-pt2"
      next="/chapters/chapter-1/transacting/"
      tips="This is the scriptSigHex value you found in the previous challenge. Press the button below to copy it to your clipboard."
      tipTitle="How do I find the scriptSigHex value again?"
      instruction="Waiting for you to write and run the script...."
      chapterInfo="chapter-1"
      expectedInput="04ffff001d0104455468652054696d65732030332f4a616e2f32303039204368616e63656c6c6f72206f6e206272696e6b206f66207365636f6e64206261696c6f757420666f722062616e6b73"
      challengeInfo="transacting"
      successMessage="That’s correct! Nice work. We don’t know why tacos were so important to the anonymous sender of this transaction, but here we are. Some more lesson and story copy here..."
      copyableCodeContent="echo scriptSigHex | xxd -r -p"
      TipAdditionalContent={TipAdditionalContent}
    />
  )
}
