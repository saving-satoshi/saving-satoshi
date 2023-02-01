'use client'

import { useState } from 'react'

interface UserInputProps {
  onChange: Function
  answer: string
  hints?: boolean
}

export default function Input({ onChange, answer, hints }: UserInputProps) {
  const [textAreaValue, setTextAreaValue] = useState('')
  const [correctAns, setCorrectAns] = useState(false)

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === ' ') {
      event.preventDefault()
    }
  }

  const blankSpace = () => {
    let underscores = '_'.repeat(answer.length)
    underscores = underscores.substring(0, answer.length - textAreaValue.length)
    return (
      <>
        {Array.from({ length: answer.length }, (_, i) => {
          if (i >= answer.length - underscores.length)
            return (
              <span className="underscore" key={i}>
                _
              </span>
            )
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
        })}
      </>
    )
  }

  return (
    <form className="relative">
      <textarea
        onKeyDown={handleKeyDown}
        onChange={(e) => {
          let noSpace = e.target.value.split(' ').join('').split(/\r?\n|\r/).join('').slice(0, answer.length).toLowerCase()
          setTextAreaValue(noSpace)
          onChange(noSpace)
          if (
            noSpace === answer &&
            noSpace.length === answer.length
          ) {
            setCorrectAns(true)
          } else {
            setCorrectAns(false)
          }
        }}
        value={textAreaValue}
        spellCheck="false"
        className={`absolute top-0 left-0 h-full w-full resize-none overflow-hidden bg-transparent font-space-mono text-[18px] leading-[180%] tracking-[5px] text-transparent outline-none md:text-[30px]`}
        style={{
          caretColor: '#6e7d92',
        }}
      />
      <p
        className={`${
          correctAns ? 'overlay-complete' : 'overlay-incomplete'
        } pointer-events-none h-full w-full font-space-mono text-[18px] leading-[180%] tracking-[5px] text-inherit md:text-[30px]`}
        style={{
          lineBreak: 'anywhere',
        }}
      >
        {blankSpace()}
      </p>
    </form>
  )
}
