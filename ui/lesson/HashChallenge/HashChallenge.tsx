'use client'

import { useEffect, useRef, useState } from 'react'
import { Lesson, StatusBar, Hasher } from 'ui'
import clsx from 'clsx'
import { useLang, useTranslations } from 'hooks'
import { usePathname } from 'next/navigation'
import { useProgressContext } from 'providers/ProgressProvider'

/**
 * @answer {string} correct answer to the challenge problem
 * @answerHint {boolean} determine if an answer hint tooltip should be shown
 * @next {string} link to next part of chapter
 * @inputLabel {string} label on top of input field
 * @returnLabel {string} label on the top of the return field
 * @pattern {RegEx} pattern for input field
 * @hints {boolean} determine whether the input field displays hints for the user
 */
export default function HashChallenge({
  answer,
  inputLabel,
  returnLabel,
  lessonKey,
  answerHint,
  hints,
}: {
  answer: string | number
  inputLabel: string
  returnLabel: string
  lessonKey: string
  answerHint?: boolean
  hints?: boolean
}) {
  const { saveProgress } = useProgressContext()
  const lang = useLang()
  const t = useTranslations(lang)
  const pathName = usePathname()

  const [input, setInput] = useState('')
  const [userInput, setUserInput] = useState('')
  const [hintTooltip, setHintTooltip] = useState(false)
  const [success, setSuccess] = useState<string>('')
  const [inputPlaceholder, setInputPlaceholder] = useState(
    t('hasher.placeholder')
  )
  const inputRef = useRef(null)

  const pathData = pathName.split('/').filter((p) => p)
  const isRouteLesson = pathData.length === 4
  const challengeId = isRouteLesson ? pathData.pop().split('-')[1] : undefined

  const numbers = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ]
  const challengeIdWord = challengeId.replace(/\b\d\b/g, (m) => numbers[m])

  const handleChange = (event) => {
    setInput(event.target.value)
  }

  const handleFocus = () => {
    if (inputPlaceholder !== '') {
      setInputPlaceholder('')
    } else {
      setInputPlaceholder(t('hasher.placeholder'))
    }
  }

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      if (answerHint && success === 'false') {
        setHintTooltip(true)
      }
    }, 15000)

    if (
      success !== 'true' &&
      ((typeof answer === 'string' && userInput.startsWith(answer)) ||
        (typeof answer === 'number' && input.length >= answer))
    ) {
      inputRef.current?.blur()
      setSuccess('true')
      saveProgress(lessonKey)
    } else if (
      typeof answer === 'number' &&
      input.length < answer &&
      input.length > 0 &&
      success !== 'true'
    ) {
      setSuccess('t')
    } else if (input.length > 0 && success !== 'true') {
      setSuccess('false')
    } else {
      return
    }
    return () => clearTimeout(timeoutId)
  }, [answer, userInput, input.length, answerHint, success])

  return (
    <Lesson>
      <div className="flex w-full justify-start md:grow md:justify-center">
        <div className="flex max-w-[1280px] items-start justify-center px-4 py-8 font-space-mono text-white md:w-9/12 md:items-center lg:w-9/12">
          <div className="flex flex-col">
            <div className="w-full">
              <h2 className="text-left text-[18px] font-bold text-white md:text-center">
                {inputLabel}
              </h2>
              <input
                onFocus={handleFocus}
                onBlur={handleFocus}
                placeholder={inputPlaceholder}
                maxLength={24}
                className={clsx(
                  'top-0 left-0 w-full resize-none overflow-hidden break-all bg-transparent text-left font-space-mono text-[24px] leading-[180%] tracking-[1px] text-white outline-none md:text-center md:text-[30px] md:tracking-[5%]',
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
                ref={inputRef}
                onChange={handleChange}
              />
              <div
                className={clsx(
                  'text-left transition-opacity duration-[2500ms] ease-in-out md:text-center',
                  {
                    'opacity-100':
                      answerHint && hintTooltip && success !== 'true',
                    'opacity-0': !hintTooltip,
                  }
                )}
              >
                <span>
                  {t(`chapter_two.hashing_${challengeIdWord}.hint_prompt`)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-1 h-1 w-full border-white/25" />
      <div className="flex w-full grow justify-center">
        <div className="flex max-w-[1280px] grow items-start justify-center px-4 py-8 font-space-mono text-white md:w-9/12 md:items-center lg:w-9/12">
          <div className="flex flex-col justify-center">
            <div className="w-full">
              <Hasher
                onChange={setUserInput}
                answer={answer}
                label={returnLabel}
                input={input}
              />
            </div>
          </div>
        </div>
      </div>

      <StatusBar
        alwaysShow
        full
        inProgressMessage="Keep going..."
        input={success}
        expected={'true'}
        hints={hints}
      />
    </Lesson>
  )
}
