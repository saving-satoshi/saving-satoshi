'use client'

import { useState } from 'react'
import { Lesson, LessonTabs, LessonPrompt, StatusBar } from 'ui'
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
  next,
  label,
  label2,
  auto,
}: {
  // children: any
  answer: string
  next: any
  label: string
  label2: string
  auto: boolean
}) {
  const [input, setInput] = useState('')
  const [userInput, setUserInput] = useState('')

  const handleChange = (event) => {
    setInput(event.target.value)
  }

  console.log(userInput, input, answer)

  return (
    <Lesson>
      <div className="flex w-full grow justify-center">
        <div className="flex max-w-[1280px] grow items-start justify-center px-4 py-8 font-space-mono text-white md:w-9/12 md:items-center lg:w-9/12">
          <div className="flex flex-col justify-center">
            <div className="w-full">
              <h2 className="text-left text-[18px] font-bold text-white md:text-center">
                {label}
              </h2>
              <input
                placeholder="Type here..."
                className={clsx(
                  'top-0 left-0 h-full w-full resize-none overflow-hidden break-all bg-transparent text-left font-space-mono text-[24px] leading-[180%] tracking-[1px] text-white outline-none md:text-[30px] md:tracking-[5px]',
                  {
                    'overlay-complete':
                      userInput === answer && input.length > 0,
                    'overlay-incomplete': userInput !== answer,
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
        expected={answer}
      />
    </Lesson>
  )
}
