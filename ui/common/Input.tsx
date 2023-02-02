'use client'

import { useState } from 'react'

interface UserInputProps {
  onChange: Function
  answer: string
  hints?: boolean
}

export default function Input({ onChange, answer, hints }: UserInputProps) {
  const [textAreaValue, setTextAreaValue] = useState('')
  const [correctAnswer, setCorrectAnswer] = useState(false)

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
            } else if (textAreaValue[i] !== answer[i] && !!hints) {
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
    const formattedText = event
      .replace(/[\s\u00A0]+/g, '')
      .replace(/\r?\n|\r/g, '')
      .slice(0, answer.length)
      .toLowerCase()
    return formattedText
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === ' ') {
      event.preventDefault()
    }
  }

  const handleChange = (event) => {
    let formattedText = handlePaste(event.target.value)
    setTextAreaValue(formattedText)
    onChange(formattedText)
    if (formattedText === answer && formattedText.length === answer.length) {
      setCorrectAnswer(true)
    } else {
      setCorrectAnswer(false)
    }
  }

  return (
    <form className="relative">
      <textarea
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        value={textAreaValue}
        spellCheck="false"
        className={`absolute top-0 left-0 h-full w-full resize-none overflow-hidden bg-transparent font-space-mono text-[18px] leading-[180%] tracking-[5px] text-transparent outline-none md:text-[30px]`}
        style={{
          caretColor: '#6e7d92',
        }}
      />
      <p
        className={`${
          correctAnswer ? 'overlay-complete' : 'overlay-incomplete'
        } pointer-events-none h-full w-full font-space-mono text-[18px] leading-[180%] tracking-[5px] text-inherit md:text-[30px]`}
        style={{
          lineBreak: 'anywhere',
        }}
      >
        {displayOverlay()}
      </p>
    </form>
  )
}
