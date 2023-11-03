'use client'

import { useState, useEffect } from 'react'
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
  label,
  pattern,
  hints,
  precedingText,
  successMessage,
}: {
  children: any
  answer: string
  label: string
  pattern?: RegExp
  hints?: boolean
  precedingText?: string
  successMessage?: string
}) {
  const [userInput, setUserInput] = useState('')
  const [success, setSuccess] = useState<boolean | null>(null)
  const [userHint, setUserHint] = useState<boolean | null>(null)

  useEffect(() => {
    if (!userInput && !success) {
      setSuccess(null)
    } else if (
      userInput &&
      !success &&
      hints &&
      answer.startsWith(userInput) &&
      userInput !== answer
    ) {
      setSuccess(false)
      setUserHint(true)
    } else if (userInput && !success && !answer.startsWith(userInput)) {
      setSuccess(false)
      setUserHint(false)
    } else if (userInput === answer) {
      setSuccess(true)
    }
  }, [answer, userInput])

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
        success={success}
        hints={userHint}
        successMessage={successMessage}
      />
    </Lesson>
  )
}
