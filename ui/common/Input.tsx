'use client'

import clsx from 'clsx'
import { useState } from 'react'

interface UserInputProps {
  onChange: Function
  answer: string
  pattern: RegExp
  hints?: boolean
  precedingText?: string
}

export default function Input({
  onChange,
  answer,
  pattern,
  hints,
  precedingText,
}: UserInputProps) {
  const [textAreaValue, setTextAreaValue] = useState('')
  const [correctAnswer, setCorrectAnswer] = useState(false)

  const precedingTextOverlay = (precedingText) => {
    const precedingTextColor =
      !textAreaValue || answer.startsWith(textAreaValue)
    return (
      <span
        className={clsx('break-keep', {
          'overlay-correct': precedingTextColor === true,
          'overlay-incorrect': precedingTextColor === false,
        })}
      >
        {precedingText}
      </span>
    )
  }

  const displayOverlay = () => {
    const underscores = '_'.repeat(
      Math.max(0, answer.length - textAreaValue.length)
    )
    return (
      <>
        {Array.from({ length: answer.length }, (_, i) => {
          {
            if (i >= answer.length - underscores.length)
              return (
                <span className="underscore" key={i}>
                  _
                </span>
              )
          }
          {
            if (textAreaValue[i] === answer[i]) {
              return (
                <span className="overlay correct" key={i}>
                  {textAreaValue[i]}
                </span>
              )
            } else if (textAreaValue[i] !== answer[i] && hints) {
              return (
                <span className="overlay incorrect" key={i}>
                  {textAreaValue[i]}
                </span>
              )
            } else {
              return (
                <span className="overlay" key={i}>
                  {textAreaValue[i]}
                </span>
              )
            }
          }
        })}
      </>
    )
  }

  const handlePaste = (event) => {
    event.preventDefault()

    const pasteData = (event.clipboardData || window.Clipboard)
      .getData('text')
      .toString()
      .match(pattern)
      .join('')
      .slice(0, answer.length)

    document.execCommand('insertText', false, pasteData)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (!event.key.match(pattern) || event.key === 'Enter') {
      event.preventDefault()
    }
  }

  const handleChange = (event) => {
    const value = event.target.value.slice(0, answer.length).toLowerCase()
    setTextAreaValue(value)
    onChange(value)
    if (value === answer) {
      setCorrectAnswer(true)
      event.target.blur()
    } else {
      setCorrectAnswer(false)
    }
  }

  return (
    <>
      <p
        className={clsx(
          'pointer-events-none h-full w-full break-all text-left font-space-mono text-[18px] leading-[180%] tracking-[1px] md:text-center md:text-[24px] md:tracking-[5px] lg:text-[30px]',
          {
            'overlay-complete': correctAnswer === true,
            'overlay-incomplete': correctAnswer === false,
          }
        )}
      >
        {hints ? (
          precedingTextOverlay(precedingText)
        ) : (
          <span className="break-keep">{precedingText}</span>
        )}
      </p>
      <form className="relative">
        <textarea
          onKeyDown={handleKeyDown}
          onPaste={handlePaste}
          onChange={handleChange}
          value={textAreaValue}
          spellCheck="false"
          className="absolute left-0 top-0 h-full w-full resize-none overflow-hidden break-all bg-transparent font-space-mono text-[18px] leading-[180%] tracking-[1px] text-transparent outline-none md:text-[24px] md:tracking-[5px] lg:text-[30px]"
          style={{
            caretColor: '#ffffff59',
          }}
        />
        <p
          className={clsx(
            'pointer-events-none h-full w-full break-all font-space-mono text-[18px] leading-[180%] tracking-[1px] text-inherit md:text-[24px] md:tracking-[5px] lg:text-[30px]',
            {
              'overlay-complete': correctAnswer === true,
              'overlay-incomplete': correctAnswer === false,
            }
          )}
        >
          {displayOverlay()}
        </p>
      </form>
    </>
  )
}
