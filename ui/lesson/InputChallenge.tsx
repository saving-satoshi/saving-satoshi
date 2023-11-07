'use client'

import clsx from 'clsx'
import { useState, useEffect, ReactElement } from 'react'
import { ColorGroup, LessonDirection } from 'types'
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
  successElement,
  successColorGroups,
  direction = LessonDirection.Vertical,
  inputClassNames = '',
}: {
  children: any
  answer: string
  label: string
  pattern?: RegExp
  hints?: boolean
  precedingText?: string
  successMessage?: string
  successElement?: ReactElement
  successColorGroups?: ColorGroup[]
  direction?: LessonDirection
  inputClassNames?: string
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
    <Lesson direction={direction}>
      <LessonTabs items={tabData} classes="px-4 py-2 w-full" stretch={true} />

      {children}

      {direction === LessonDirection.Vertical ? (
        <hr className="border-1 invisible h-1 w-full border-white/50 md:visible" />
      ) : (
        <div className="block w-1 border-r border-white/50"></div>
      )}
      <div
        className={clsx('flex grow flex-col', {
          'md:max-w-[50%]': direction === LessonDirection.Horizontal,
        })}
      >
        <LessonPrompt
          className={clsx('max-w-[1280px] items-start px-4 py-8', {
            'md:items-center': direction === LessonDirection.Vertical,
          })}
          label={label}
          answer={answer}
          onChange={setUserInput}
          pattern={pattern}
          hints={hints}
          precedingText={precedingText}
          successElement={Boolean(success) ? successElement : null}
          successColorGroups={successColorGroups}
          inputClassNames={inputClassNames}
        />

        <StatusBar
          success={success}
          hints={userHint}
          successMessage={successMessage}
        />
      </div>
    </Lesson>
  )
}
