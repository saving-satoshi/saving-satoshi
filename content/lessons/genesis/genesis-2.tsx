'use client'

import { useState } from 'react'
import {
  CopyButton,
  CodeExample,
  Lesson,
  LessonInfo,
  LessonTerminal,
  Title,
  Text,
  Tips,
  Tip,
} from 'ui'

import { setUserProgress } from 'lib/user'
import { getUserLessonStatus } from 'lib/content'
import { LessonDirection } from 'types'

function saveProgress() {
  const status = getUserLessonStatus('chapter-1', 'transacting')

  if (!status.completed) {
    setUserProgress('chapter-1', 'transacting')
  }
}

export default function Genesis2() {
  const [answer, setAnswer] = useState('')
  const [success, setSuccess] = useState(false)
  const [lines, setLines] = useState([
    {
      value: 'Enter your commands here and press Enter...',
      type: 'output',
    },
  ])

  const onChange = (value) => {
    setLines((lines) => [...lines, { value, type: 'input' }])

    // echo scriptSigHex | xxd -r -p
    if (value.startsWith('echo') && value.endsWith('| xxd -r -p')) {
      const scriptSigHex = value.split(' ')[1]
      const scriptSig = Buffer.from(scriptSigHex, 'hex').toString('utf8')
      setLines((lines) => [...lines, { value: scriptSig, type: 'output' }])

      if (
        scriptSigHex ===
        '04ffff001d0104455468652054696d65732030332f4a616e2f32303039204368616e63656c6c6f72206f6e206272696e6b206f66207365636f6e64206261696c6f757420666f722062616e6b73'
      ) {
        setTimeout(() => {
          saveProgress()
          setSuccess(true)
        }, 1000)

        setAnswer(scriptSig)
      }
    }
  }

  return (
    <Lesson direction={LessonDirection.Horizontal}>
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

      <LessonTerminal
        success={success}
        answer={answer}
        lines={lines}
        onChange={onChange}
        next="/chapters/chapter-1/transacting"
      />
    </Lesson>
  )
}

export const metadata = {
  title: 'Genesis',
}
