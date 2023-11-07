'use client'

import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { ColorGroup } from 'types'

interface UserInputProps {
  onChange: Function
  answer: string
  pattern: RegExp
  hints?: boolean
  precedingText?: string
  successColorGroups?: ColorGroup[]
  classNames?: string
}

function colorizeText(colorizeTextMap: ColorGroup[], classNames?: string) {
  const textElement = document.getElementById('answerText')
  if (!textElement) return

  // Get all span children of the textElement
  const spanElements = textElement.getElementsByTagName('span')

  // Use Array.from to iterate over HTMLCollection
  let allSpanTexts = Array.from(spanElements, (span) => span.innerText)

  let newHtml = ''
  let charIndex = 0 // Keep track of the index across all spans

  for (let colorGroup of colorizeTextMap) {
    // Assume colorGroup.start and colorGroup.end refer to the absolute character positions across all spans
    let spanText = ''
    while (charIndex < colorGroup.end && allSpanTexts.length > 0) {
      let currentSpanText = allSpanTexts[0]
      if (charIndex + currentSpanText.length >= colorGroup.start) {
        // Calculate the start and end indices within the current span
        let localStart = Math.max(colorGroup.start - charIndex, 0)
        let localEnd = Math.min(
          colorGroup.end - charIndex,
          currentSpanText.length
        )
        spanText += currentSpanText.substring(localStart, localEnd)

        // If we've used up all of the current span, remove it from the array
        if (charIndex + currentSpanText.length <= colorGroup.end) {
          allSpanTexts.shift()
        }
      }
      charIndex += currentSpanText.length
    }

    // Append the colored text for the current group
    newHtml += `<span className="font-space-mono text-[18px] leading-[180%] tracking-[1px] text-inherit md:tracking-[5px]  ${classNames}" style="color: ${colorGroup.colorCode}" style="color: ${colorGroup.colorCode}">${spanText}</span>`
  }

  // Append any remaining text without color
  allSpanTexts.forEach((remainingSpanText) => {
    newHtml += `<span className="font-space-mono text-[18px] leading-[180%] tracking-[1px] text-inherit md:tracking-[5px]  ${classNames}">${remainingSpanText}</span>`
  })

  // Replace the innerHTML of textElement with the new HTML
  textElement.innerHTML = newHtml
}

export default function Input({
  onChange,
  answer,
  pattern,
  hints,
  precedingText,
  successColorGroups,
  classNames = 'md:text-[24px] lg:text-[30px]',
}: UserInputProps) {
  const [textAreaValue, setTextAreaValue] = useState('')
  const [correctAnswer, setCorrectAnswer] = useState(false)
  console.log(correctAnswer)

  useEffect(() => {
    if (correctAnswer && successColorGroups) {
      colorizeText(successColorGroups)
    }
  }, [correctAnswer, successColorGroups])

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
            if (i >= answer.length - underscores.length && !correctAnswer) {
              return (
                <span className="underscore" key={i}>
                  _
                </span>
              )
            }
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
          'pointer-events-none h-full w-full break-all text-left font-space-mono text-[18px] leading-[180%] tracking-[1px] md:text-center md:tracking-[5px] ',
          {
            'overlay-complete': correctAnswer === true,
            'overlay-incomplete': correctAnswer === false,
          },
          classNames
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
          className={`absolute left-0 top-0 h-full w-full resize-none overflow-hidden break-all bg-transparent font-space-mono text-[18px] leading-[180%] tracking-[1px] text-transparent outline-none md:tracking-[5px]  ${classNames}`}
          style={{
            caretColor: '#ffffff59',
          }}
        />
        <p
          className={clsx(
            'pointer-events-none h-full w-full break-all font-space-mono text-[18px] leading-[180%] tracking-[1px] text-inherit md:tracking-[5px] ',
            {
              'overlay-complete': correctAnswer === true,
              'overlay-incomplete': correctAnswer === false,
            },
            classNames
          )}
          id="answerText"
        >
          {displayOverlay()}
        </p>
      </form>
    </>
  )
}
