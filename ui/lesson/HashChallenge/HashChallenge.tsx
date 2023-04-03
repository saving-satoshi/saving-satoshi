'use client'

import { useEffect, useState } from 'react'
import { Lesson, LessonTabs, LessonPrompt, StatusBar, Tooltip } from 'ui'
import LessonHasher from './HashPrompt'
import clsx from 'clsx'

/**
 * @answer {string} correct answer to the challenge problem
 * @next {string} link to next part of chapter
 * @label {string} label on top of input field
 * @pattern {RegEx} pattern for input field
 * @hints {boolean} determine whether the input field displays hints for the user
 */
export default function HashChallenge({
  // children,
  answer,
  answerHint,
  next,
  label,
  label2,
  auto,
  hints,
}: {
  // children: any
  answer: string | number
  next: any
  label: string
  label2: string
  answerHint?: string
  auto?: boolean
  hints?: boolean
}) {
  const [input, setInput] = useState('')
  const [userInput, setUserInput] = useState('')
  const [hintTimer, setHintTimer] = useState(false)

  const inputView = (
    <>
      hintTimer && (
      <Tooltip
        id={`challenge-hint-tooltip}`}
        position="top"
        offset={0}
        content={
          <div className="flex flex-col">
            <span className="whitespace-nowrap">Need a hint?</span>
          </div>
        }
      >
        {input}
      </Tooltip>
      ) || input
    </>
  )

  const handleChange = (event) => {
    setInput(event.target.value)
  }

  useEffect(() => {
    const hintTimeout = () => {
      setTimeout(() => {
        setHintTimer(true)
      }, 15000)
    }
    answerHint && hintTimeout()
  })

  return (
    <Lesson>
      <div className="flex w-full grow justify-center">
        <div className="flex max-w-[1280px] grow items-start justify-center px-4 py-8 font-space-mono text-white md:w-9/12 md:items-center lg:w-9/12">
          <div className="flex flex-col justify-center">
            <div className="w-full">
              <h2 className="text-left text-[18px] font-bold text-white md:text-center">
                {label}{' '}
                {answerHint && hintTimer && (
                  <>
                    <span>Need a </span>
                    <Tooltip
                      id={`challenge-hint-tooltip}`}
                      position="bottom"
                      offset={0}
                      content={
                        <div className="flex flex-col">
                          <span className="text-m whitespace-nowrap leading-none text-white/50">
                            Hover to see the answer
                          </span>
                          <span className=" cursor-pointer whitespace-nowrap bg-black/20 text-transparent hover:text-white">
                            {answerHint}
                          </span>
                        </div>
                      }
                    >
                      <u className="cursor-pointer">hint</u>
                    </Tooltip>
                    ?
                  </>
                )}
              </h2>
              <input
                placeholder="Type here..."
                maxLength={24}
                className={clsx(
                  'top-0 left-0 h-full w-full resize-none overflow-hidden break-all bg-transparent text-left font-space-mono text-[24px] leading-[180%] tracking-[1px] text-white outline-none md:text-[30px] md:tracking-[5px]',
                  {
                    'overlay-complete':
                      (typeof answer === 'string' &&
                        userInput === answer &&
                        input.length > 0) ||
                      (typeof answer === 'number' && input.length >= answer),
                    'overlay-incomplete':
                      (typeof answer === 'string' && userInput !== answer) ||
                      (typeof answer === 'number' && input.length < answer),
                  }
                )}
                value={input}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>
      <hr className="border-1 h-1 w-full border-white/25" />
      <div className="flex w-full grow justify-center">
        <LessonHasher
          className="max-w-[1280px] items-start px-4 py-8 md:items-center"
          label={label2}
          answer={answer}
          onChange={setUserInput}
          auto={auto}
          input={input}
        />
      </div>

      <StatusBar
        alwaysShow
        full
        next={next}
        input={userInput}
        expected={
          (typeof answer === 'string' && answer) ||
          (typeof answer === 'number' &&
            ((input.length >= answer && userInput) || userInput + '_'))
        }
        hints={hints}
      />
    </Lesson>
  )
}
