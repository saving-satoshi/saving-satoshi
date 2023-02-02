'use client'

import { useState, useEffect } from 'react'
import { LessonDirection } from 'types'
import { Lesson, LessonTabs, LessonTerminal } from 'ui'
import { useMediaQuery } from 'react-responsive'
import { setUserProgress } from 'lib/user'
import { getUserLessonStatus } from 'lib/content'

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
 * @expectedInput {string} answer to the challenge problem
 * @saveInfo {chapter, challenge} information required for saving user progress
 * @next {string} link to next part of chapter
 * @instruction {string} terminal instruction for user
 * @successMessage {string} Message displayed to the user upon finishing a challenge
 */
export default function TerminalChallenge({
  children,
  expectedInput,
  saveInfo,
  next,
  instruction,
  successMessage,
}) {
  const [hydrated, setHydrated] = useState(false)
  const [answer, setAnswer] = useState('')
  const [success, setSuccess] = useState(false)
  const [lines, setLines] = useState([
    {
      value: 'Enter your commands here and press Enter...',
      type: 'output',
    },
  ])

  const isSmallScreen = useMediaQuery({ query: '(max-width: 767px)' })

  function saveProgress() {
    const status = getUserLessonStatus(saveInfo.chapter, saveInfo.challenge)

    if (!status.completed) {
      setUserProgress(saveInfo.chapter, saveInfo.challenge)
    }
  }

  const onChange = (input) => {
    setLines((lines) => [...lines, { value: input, type: 'input' }])

    if (input.startsWith('echo') && input.endsWith('| xxd -r -p')) {
      const givenInput = input.split(' ')[1]
      const answerValue = Buffer.from(givenInput, 'hex').toString('utf8')
      setLines((lines) => [...lines, { value: answerValue, type: 'output' }])

      if (givenInput === expectedInput) {
        setTimeout(() => {
          saveProgress()
          setSuccess(true)
        }, 1000)
        setAnswer(answerValue)
      }
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
