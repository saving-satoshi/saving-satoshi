'use client'

import { useState } from 'react'
import {
  Lesson,
  LessonInfo,
  CodeExample,
  Text,
  Title,
  LessonTerminal,
} from 'ui'
import { LessonDirection } from 'types'

export default function Transacting2() {
  const [lines, setLines] = useState([
    {
      value: 'Enter your commands here and press Enter...',
      type: 'output',
    },
  ])
  const [success, setSuccess] = useState(false)
  const [answer, setAnswer] = useState('')

  function onChange(input) {
    setLines((lines) => [...lines, { value: input, type: 'input' }])

    // echo scriptSigHex | xxd -r -p
    if (input.startsWith('echo') && input.endsWith('| xxd -r -p')) {
      const scriptSigHex = input.split(' ')[1]
      const scriptSig = Buffer.from(scriptSigHex, 'hex').toString('utf8')
      setLines((lines) => [...lines, { value: scriptSig, type: 'output' }])

      console.log(scriptSigHex)

      if (scriptSigHex === '6a127461636f7320666f722065766572796f6e65') {
        setTimeout(() => {
          setSuccess(true)
        }, 1000)
        setAnswer(scriptSig)
      }
    }
  }

  return (
    <Lesson direction={LessonDirection.Horizontal}>
      <LessonInfo>
        <Title>Another secret message</Title>

        <Text className="text-lg">
          Then, look for the hex representation of the ScriptPubKey field.
        </Text>

        <Text className="text-lg">
          Once you’ve found it, decode the hidden message, just like we did in
          the previous exercise.
        </Text>

        <Text>And remember, ’Bitcoin is for everyone’.</Text>

        <CodeExample
          code={'echo scriptPubKeyHex | xxd -r -p'}
          language="shell"
        />
      </LessonInfo>

      <LessonTerminal
        answer={answer}
        success={success}
        onChange={onChange}
        lines={lines}
        next="/chapters/chapter-1/done"
      />
    </Lesson>
  )
}

export const metadata = {
  title: 'Transacting',
}
