'use client'

import { useState, useEffect } from 'react'
import { LessonDirection } from 'types'
import { Lesson, LessonTabs, LessonTerminal } from 'ui'
import { useMediaQuery } from 'react-responsive'
import { setUserProgress } from 'lib/user'
import { useStatus } from 'hooks'

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
 * @expectedInput {string} | {userVariable, value} answer to the challenge problem or the input variable and the expected value
 * @saveInfo {chapter, challenge} information required for saving user progress
 * @next {string} link to next part of chapter
 * @instruction {string} terminal instruction for user
 * @successMessage {string} Message displayed to the user upon finishing a challenge
 * @customLines {string} Custom message displayed in terminal for the user to read
 * @commonError {error, message} Common error the user may make in completing this challenge and a return tip to help them
 */
export default function TerminalChallenge({
  children,
  expectedInput,
  saveInfo,
  next,
  instruction,
  successMessage,
  customLines,
  commonError,
}: {
  children: any
  expectedInput: string | any
  saveInfo: any
  next: string
  instruction: string
  successMessage: string
  customLines?: string
  commonError?: any
}) {
  const [hydrated, setHydrated] = useState(false)
  const [answer, setAnswer] = useState('')
  const [success, setSuccess] = useState(false)
  const [lines, setLines] = useState(
    customLines
      ? [
          {
            value: customLines,
            type: 'output',
          },
        ]
      : [
          {
            value: 'Enter your commands here and press Enter...',
            type: 'output',
          },
        ]
  )

  const isSmallScreen = useMediaQuery({ query: '(max-width: 767px)' })

  const status = useStatus(saveInfo.chapter, saveInfo.challenge)

  function saveProgress() {
    if (!status.completed) {
      setUserProgress(saveInfo.chapter, saveInfo.challenge)
    }
  }

  const onChange = (input) => {
    setLines((lines) => [...lines, { value: input, type: 'input' }])

    const inputs = [
      `echo ${expectedInput} | xxd -r -p`,
      `echo ${expectedInput.userVariable} | xxd -r -p`,
      `echo ${expectedInput.value} | xxd -r -p`,
    ]

    if (inputs.includes(input)) {
      const varInput =
        input === `echo ${expectedInput} | xxd -r -p`
          ? `echo ${expectedInput} | xxd -r -p`
          : `echo ${expectedInput.value} | xxd -r -p`

      const givenInput = varInput.split(' ')[1]
      const answerValue = Buffer.from(givenInput, 'hex').toString('utf8')
      setLines((lines) => [...lines, { value: answerValue, type: 'output' }])

      if (givenInput === expectedInput.value || expectedInput) {
        setTimeout(() => {
          saveProgress()
          setSuccess(true)
        }, 1000)
        setAnswer(answerValue)
      }
    } else if (commonError && input.includes(commonError.error)) {
      setLines((lines) => [
        ...lines,
        { value: commonError.message, type: 'output' },
      ])
    } else {
      setLines((lines) => [
        ...lines,
        { value: 'Hmm... Sorry that’s not quite right.', type: 'output' },
      ])
    }
  }

  useEffect(() => {
    setHydrated(true)
  }, [])

  return (
    hydrated && (
      <Lesson
        direction={
          isSmallScreen ? LessonDirection.Vertical : LessonDirection.Horizontal
        }
      >
        <LessonTabs items={tabData} classes="px-4 py-2 w-full" stretch={true} />
        {children}

        <LessonTerminal
          success={success}
          answer={answer}
          lines={lines}
          onChange={onChange}
          successMessage={successMessage}
          instruction={instruction}
          next={next}
        />
      </Lesson>
    )
  )
}
