'use client'

import { useEffect, useState } from 'react'
import { Lesson, StatusBar, Tooltip, Hasher } from 'ui'
import clsx from 'clsx'

/**
 * @answer {string} correct answer to the challenge problem
 * @next {string} link to next part of chapter
 * @inputLabel {string} label on top of input field
 * @returnLabel {string} label on the top of the return field
 * @pattern {RegEx} pattern for input field
 * @hints {boolean} determine whether the input field displays hints for the user
 */
export default function HashChallenge({
  // children,
  answer,
  answerHint,
  next,
  inputLabel,
  returnLabel,
  auto,
  hints,
}: {
  // children: any
  answer: string | number
  next: any
  inputLabel: string
  returnLabel: string
  answerHint?: string
  auto?: boolean
  hints?: boolean
}) {
  const [input, setInput] = useState('')
  const [userInput, setUserInput] = useState('')
  const [hintTimer, setHintTimer] = useState(false)

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
      <div className="flex w-full justify-center py-12 md:grow">
        <div className="flex max-w-[1280px] items-start justify-center px-4 py-8 font-space-mono text-white md:w-9/12 md:items-center lg:w-9/12">
          <div className="flex flex-col justify-center">
            <div className="w-full">
              <h2 className="text-left text-[18px] font-bold text-white md:text-center">
                {inputLabel}{' '}
                {answerHint && hintTimer && (
                  <div className="text-left">
                    <span>Need a </span>
                    <Tooltip
                      id={`challenge-hint-tooltip}`}
                      position="bottom"
                      offset={0}
                      content={
                        <div className="relative flex flex-col">
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
                  </div>
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
        <div className="flex max-w-[1280px] grow items-start justify-center px-4 py-8 font-space-mono text-white md:w-9/12 md:items-center lg:w-9/12">
          <div className="flex flex-col justify-center">
            <div className="w-full pt-8">
              <Hasher
                onChange={setUserInput}
                answer={answer}
                label={returnLabel}
                auto={auto}
                input={input}
              />
            </div>
          </div>
        </div>
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
