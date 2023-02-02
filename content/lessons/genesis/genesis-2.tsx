'use client'

import {
  CopyButton,
  CodeExample,
  LessonInfo,
  Title,
  Text,
  Tips,
  Tip,
  TerminalChallenge,
} from 'ui'

export default function Genesis2() {
  return (
    <TerminalChallenge
      expectedInput={
        '04ffff001d0104455468652054696d65732030332f4a616e2f32303039204368616e63656c6c6f72206f6e206272696e6b206f66207365636f6e64206261696c6f757420666f722062616e6b73'
      }
      saveInfo={{
        chapter: 'chapter-1',
        challenge: 'transacting',
      }}
      next={'/chapters/chapter-1/transacting'}
      instruction="Waiting for you to write and run the script...."
      successMessage="That’s correct! Nice work. We don’t know why tacos were so important to the anonymous sender of this transaction, but here we are. Some more lesson and story copy here..."
    >
      <LessonInfo>
        <Title>{`Let's make sense of this`}</Title>

        <Text className="text-lg">{`Use the following command to decode Satoshi's secret HEX message
            into ASCII, a more human readable format:`}</Text>

        <CodeExample code={'echo scriptSigHex | xxd -r -p'} language="shell" />

        <Tips>
          <Tip title="What was the scriptSigHex value again?">
            This is the scriptSigHex value you found in the previous challenge.
            Press the button below to copy it to your clipboard.
            <br />
            <CopyButton
              classes="mt-2"
              content={
                '04ffff001d0104455468652054696d65732030332f4a616e2f32303039204368616e63656c6c6f72206f6e206272696e6b206f66207365636f6e64206261696c6f757420666f722062616e6b73'
              }
            >
              Copy ScriptSigHex value
            </CopyButton>
          </Tip>
        </Tips>
      </LessonInfo>
    </TerminalChallenge>
  )
}

export const metadata = {
  title: 'Genesis',
}
