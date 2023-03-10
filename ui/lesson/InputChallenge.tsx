'use client'

import { useState } from 'react'
import { Lesson, LessonTabs, LessonPrompt, StatusBar } from 'ui'

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

/**
 * @answer {string} correct answer to the challenge problem
 * @next {string} link to next part of chapter
 * @label {string} label on top of input field
 * @pattern {RegEx} pattern for input field
 * @hints {boolean} determine whether the input field displays hints for the user
 */
export default function InputChallenge({
  children,
  answer,
  next,
  label,
  pattern,
  hints,
  precedingText,
}: {
  children: any
  answer: string
  next: any
  label: string
  pattern?: RegExp
  hints?: boolean
  precedingText?: string
}) {
  const [userInput, setUserInput] = useState('')

  return (
    <Lesson>
      <LessonTabs items={tabData} classes="px-4 py-2 w-full" stretch={true} />

      {children}

      <hr className="border-1 invisible h-1 w-full border-white/25 md:visible" />

      <LessonPrompt
        className="max-w-[1280px] items-start px-4 py-8 md:items-center"
        label={label}
        answer={answer}
        onChange={setUserInput}
        pattern={pattern}
        hints={hints}
        precedingText={precedingText}
      />

      <StatusBar
        full
        next={next}
        input={userInput}
        expected={answer}
        hints={hints}
      />
    </Lesson>
  )
}
