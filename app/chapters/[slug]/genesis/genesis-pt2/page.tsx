'use client'

import TerminalChallengeLayout from "components/templates/TerminalChallenge/TerminalChallengeLayout"

export default function GenesisPt2() {
  return (
    <TerminalChallengeLayout 
      slug="genesis-pt2" 
      expectedInput='04ffff001d0104455468652054696d65732030332f4a616e2f32303039204368616e63656c6c6f72206f6e206272696e6b206f66207365636f6e64206261696c6f757420666f722062616e6b73'
      next="/chapters/chapter-1/transacting/"
      chapterInfo="chapter-1"
      challengeInfo="transacting"
      copyableCodeContent="echo scriptSigHex | xxd -r -p"
    />
  )
}
