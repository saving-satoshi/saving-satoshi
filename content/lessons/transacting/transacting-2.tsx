'use client'

import { LessonInfo, CodeExample, Text, Title, TerminalChallenge } from 'ui'

export default function Transacting2() {
  return (
    <TerminalChallenge
      expectedInput={'6a127461636f7320666f722065766572796f6e65'}
      saveInfo={{
        chapter: 'chapter-1',
        challenge: 'done',
      }}
      next="/chapters/chapter-1/done"
      successMessage="jtacos for everyone"
      customLines={'Enter your commands here and press Enter...\n\n Note that $scriptPubKeyHex is not defined for you this time. You’ll need to replace this variable in the code with the value you found in the previous challenge'}
      commonError={{
        error: '$scriptPubKeyHex',
        message: 'Almost. Take another look to find the correct value'
      }}
    >
      <LessonInfo>
        <Title>Another secret message</Title>

        <Text className="text-lg">
          Then, look for the hex representation of the ScriptPubKey field.
        </Text>

        <Text className="text-lg">
          Once you’ve found it, decode the hidden message, just like we did in
          the previous exercise.
        </Text>

        <Text className="text-lg">
          And remember, ’Bitcoin is for everyone’.
        </Text>

        <CodeExample
          code={'echo $scriptPubKeyHex | xxd -r -p'}
          language="shell"
          copy
        />
      </LessonInfo>
    </TerminalChallenge>
  )
}

export const metadata = {
  title: 'Transacting',
}
