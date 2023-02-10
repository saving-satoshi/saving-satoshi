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
      instruction="Waiting for you to write and run the script...."
      successMessage="jtacos for everyone"
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
          code={'echo scriptPubKeyHex | xxd -r -p'}
          language="shell"
        />
      </LessonInfo>
    </TerminalChallenge>
  )
}

export const metadata = {
  title: 'transacting_three.title',
}
