'use client'

import { ReactElement, useEffect, useState } from 'react'

interface UserInputProps {
  onChange: Function
  answer: string
  pattern: RegExp
  hints?: boolean
  opcode?: ReactElement
}

export default function Input({
  onChange,
  answer,
  pattern,
  hints,
  opcode,
}: UserInputProps) {
  const [textAreaValue, setTextAreaValue] = useState('')
  const [correctAnswer, setCorrectAnswer] = useState(false)

  const opCodeOverlay = (opcode) => {
    let OPCodeColor =
      !textAreaValue ||
      (answer.includes(textAreaValue) && answer[0] === textAreaValue[0])
    return (
      <span className={OPCodeColor ? 'overlay correct' : 'overlay incorrect'}>
        {opcode}
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
    if (!event.key.match(pattern)) {
      event.preventDefault()
    }
  }

  const handleChange = (event) => {
    setTextAreaValue(event.target.value.slice(0, answer.length).toLowerCase())
    onChange(event.target.value)
    if (
      event.target.value === answer &&
      event.target.value.length === answer.length
    ) {
      setCorrectAnswer(true)
      event.target.blur()
    } else {
      setCorrectAnswer(false)
    }
  }

  return (
    <>
      <p
        className={`${
          correctAnswer ? 'overlay-complete' : 'overlay-incomplete'
        } pointer-events-none h-full w-full break-all text-left font-space-mono text-[18px] leading-[180%] tracking-[1px] md:text-center md:text-[30px] md:tracking-[5px]`}
      >
        {hints ? opCodeOverlay(opcode) : <span>{opcode}</span>}
      </p>
      <form className="relative">
        <textarea
          onKeyDown={handleKeyDown}
          onPaste={handlePaste}
          onChange={handleChange}
          value={textAreaValue}
          spellCheck="false"
          className={`absolute top-0 left-0 h-full w-full resize-none overflow-hidden break-all bg-transparent font-space-mono text-[18px] leading-[180%] tracking-[1px] text-transparent outline-none md:text-[30px] md:tracking-[5px]`}
          style={{
            caretColor: '#6e7d92',
          }}
        />
        <p
          className={`${
            correctAnswer ? 'overlay-complete' : 'overlay-incomplete'
          } pointer-events-none h-full w-full break-all font-space-mono text-[18px] leading-[180%] tracking-[1px] text-inherit md:text-[30px] md:tracking-[5px]`}
        >
          {displayOverlay()}
        </p>
      </form>
    </>
  )
}
