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
export default function DoubleInputChallenge({
  children,
  answerOne,
  answerTwo,
  labelOne,
  labelTwo,
  pattern,
  hints,
  precedingText,
  successMessage,
  direction = LessonDirection.Vertical,
  inputClassNames = '',
  onStepUpdate,
}: {
  children: any
  answerOne: string
  answerTwo: string
  labelOne: string
  labelTwo: string
  pattern?: RegExp
  hints?: boolean
  precedingText?: string
  successMessage?: string
  successElement?: ReactElement
  successColorGroups?: ColorGroup[]
  direction?: LessonDirection
  inputClassNames?: string
  onStepUpdate: (newStep: number) => void
}) {
  const [userInputOne, setUserInputOne] = useState('')
  const [userInputTwo, setUserInputTwo] = useState('')
  const [success, setSuccess] = useState<boolean | null>(null)
  const [userHint, setUserHint] = useState<boolean | null>(null)

  useEffect(() => {
    if (userInputOne === answerOne && userInputTwo !== answerTwo) {
      onStepUpdate(1)
    }
    if (!userInputOne && !userInputTwo && !success) {
      setSuccess(null)
    } else if (
      !success &&
      answerOne.startsWith(userInputOne) &&
      userInputOne !== answerOne
    ) {
      setSuccess(false)
      setUserHint(true)
    } else if (
      !success &&
      !answerOne.startsWith(userInputOne) &&
      userInputOne !== answerOne
    ) {
      setSuccess(false)
      setUserHint(false)
    } else if (
      !success &&
      answerTwo.startsWith(userInputTwo) &&
      userInputTwo !== answerTwo
    ) {
      setSuccess(false)
      setUserHint(true)
    } else if (
      !success &&
      !answerTwo.startsWith(userInputTwo) &&
      userInputTwo !== answerTwo
    ) {
      setSuccess(false)
      setUserHint(false)
    } else if (userInputOne === answerOne && userInputTwo === answerTwo) {
      onStepUpdate(2)
      setSuccess(true)
    }
  }, [answerOne, answerTwo, userInputOne, userInputTwo])

  return (
    <Lesson direction={direction} onViewChange={() => null}>
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
          className="flex max-w-[1280px] items-center justify-center px-4 py-8 md:px-20"
          label={labelOne}
          answer={answerOne}
          onChange={setUserInputOne}
          pattern={pattern}
          hints={hints}
          precedingText={precedingText}
          inputClassNames={inputClassNames}
        />
        <LessonPrompt
          className="flex max-w-[1280px] items-center justify-center border-t border-white/50 px-4 py-8 md:px-20"
          label={labelTwo}
          answer={answerTwo}
          onChange={setUserInputTwo}
          pattern={pattern}
          hints={hints}
          precedingText={precedingText}
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
