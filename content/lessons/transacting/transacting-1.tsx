'use client'

import { useState } from 'react'
import {
  Button,
  StatusBar,
  Lesson,
  LessonInfo,
  LessonPrompt,
  LessonTabs,
  Text,
  Title,
} from 'ui'

const inputAmount = 40
const answer = '6a127461636f7320666f722065766572796f6e65'

const tabData = [
  {
    id: 'info',
    text: 'Info',
  },
  {
    id: 'code',
    text: 'Code',
  },
]

export default function Transacting1() {
  const [userInput, setUserInput] = useState('')

  return (
    <Lesson>
      <LessonTabs items={tabData} classes="px-4 py-2 w-full" stretch={true} />

      <LessonInfo>
        <Title>OP_RETURN</Title>

        <Text className="text-lg">
          For the following transaction, identify the output of type OP_RETURN.
        </Text>

        <Text code>
          75764fd0c95b4c17b728d10f7555509adfc0789ddc47683c45aeddd1c34727f8
        </Text>

        <Button
          href="https://blockstream.info/tx/75764fd0c95b4c17b728d10f7555509adfc0789ddc47683c45aeddd1c34727f8?expand"
          external={true}
          classes="mt-4"
        >
          View transaction
        </Button>
      </LessonInfo>

      <hr className="border-1 invisible h-1 w-full border-white/25 md:visible" />

      <LessonPrompt
        className="max-w-[840px] px-4 py-8 md:items-center"
        label="Enter the OP_RETURN type"
        amount={inputAmount}
        onChange={setUserInput}
      />

      <StatusBar
        next="/chapters/chapter-1/transacting-2"
        full
        input={userInput}
        expected={answer}
      />
    </Lesson>
  )
}

export const metadata = {
  title: 'Transacting',
}
