'use client'

import { useState, useEffect } from 'react'
import { LessonDirection } from 'types'
import { Lesson, LessonTabs, LessonTerminal } from 'ui'
import { useMediaQuery } from 'hooks'
import { useAtom } from 'jotai'
import { accountAtom } from 'state/state'

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
 * @instruction {string} terminal instruction for user
 * @successMessage {string} Message displayed to the user upon finishing a challenge
 * @customLines {string} Custom message displayed in terminal for the user to read
 * @commonError {error, message} Common error the user may make in completing this challenge and a return tip to help them
 */
export default function TerminalChallenge({
  children,
  expectedInput,
  lessonKey,
  successMessage,
  customLines,
  commonError,
}: {
  children: any
  expectedInput: string | any
  lessonKey: string
  successMessage: string
  customLines?: string
  commonError?: any
}) {
  const [account] = useAtom(accountAtom)
  const [hydrated, setHydrated] = useState(false)
  const [success, setSuccess] = useState<boolean | null>(null)
  const [challengeState, setChallengeState] = useState<string>('incomplete')
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

  const isSmallScreen = useMediaQuery({ width: 767 })

  const onChange = (input) => {
    const sanitizedInput = input
      .replace(/[\t\r\n]/g, '')
      .replace(/\s+/g, ' ')
      .replace(/\s*\|\s*/g, ' | ')
      .trim()

    setLines((lines) => [...lines, { value: sanitizedInput, type: 'input' }])
    setLines((lines) => [...lines, { value: '...decoding...', type: 'output' }])

    const inputs = [
      `echo ${expectedInput} | xxd -r -p`,
      `echo ${expectedInput.userVariable} | xxd -r -p`,
      `echo ${expectedInput.value} | xxd -r -p`,
      `echo ${sanitizedInput
        .split(' ')[1]
        ?.match(/^[\da-f\'\"]+$/i)} | xxd -r -p`,
    ]
    let varInput: string
    let answerValue: string
    let newLines: { value: string; type: string }[]

    if (inputs.includes(sanitizedInput)) {
      if (sanitizedInput === `echo ${expectedInput} | xxd -r -p`) {
        varInput = expectedInput
      } else if (
        sanitizedInput ===
        `echo ${expectedInput.userVariable || expectedInput.value} | xxd -r -p`
      ) {
        varInput = expectedInput.value.replace(/[\'\"]/g, '')
      } else {
        varInput = sanitizedInput.replace(/[\'\"]/g, '').split(' ')[1]
      }

      answerValue = Buffer.from(varInput, 'hex').toString('utf8')
      setTimeout(() => {
        setLines((lines) => {
          newLines = [...lines]
          newLines[newLines.length - 1] = { value: answerValue, type: 'output' }
          return newLines
        })
      }, 500)

      if (varInput === (expectedInput.value || expectedInput)) {
        setTimeout(() => {
          setSuccess(true)
          setChallengeState('complete')
          setLines((lines) => [
            ...lines,
            { value: successMessage, type: 'answer' },
          ])
        }, 750)
      } else {
        setTimeout(() => {
          if (challengeState === 'incomplete') {
            setSuccess(false)
          }
          setLines((lines) => [
            ...lines,
            { value: 'Sorry that’s not quite right.', type: 'output' },
          ])
        }, 750)
      }
    } else if (commonError && sanitizedInput.includes(commonError.error)) {
      setTimeout(() => {
        if (challengeState === 'incomplete') {
          setSuccess(false)
        }
        setLines((lines) => {
          newLines = [...lines]
          newLines[newLines.length - 1] = {
            value: commonError.message,
            type: 'output',
          }
          return newLines
        })
      }, 500)
    } else {
      setTimeout(() => {
        if (challengeState === 'incomplete') {
          setSuccess(false)
        }
        setLines((lines) => {
          newLines = [...lines]
          newLines[newLines.length - 1] = {
            value: 'Sorry that’s not quite right.',
            type: 'output',
          }
          return newLines
        })
      }, 500)
    }
  }

  useEffect(() => {
    setHydrated(true)
  }, [])

  if (!hydrated) {
    return null
  }

  return (
    <Lesson
      direction={
        isSmallScreen ? LessonDirection.Vertical : LessonDirection.Horizontal
      }
    >
      <LessonTabs items={tabData} classes="px-4 py-2 w-full" stretch={true} />
      {children}

      <LessonTerminal success={success} lines={lines} onChange={onChange} />
    </Lesson>
  )
}
