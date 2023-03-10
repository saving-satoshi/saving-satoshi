'use client'

import clsx from 'clsx'
import React, { useState, useEffect, useRef } from 'react'
import { StatusBar, useLessonContext } from 'ui'
import { LessonView } from 'types'

export default function Terminal({ success, lines, next, onChange }) {
  const { activeView } = useLessonContext()
  const isActive = activeView === LessonView.Code
  const [input, setInput] = useState('')
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState<number>(0)
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [focus, setFocus] = useState<boolean>(true)

  const handleInputChange = (event) => {
    const newInput = event.target.value
    setInput(newInput)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowUp') {
      event.preventDefault()
      if (currentIndex > 0) {
        setInput(commandHistory[currentIndex - 1])
        setCurrentIndex(currentIndex - 1)
      }
    } else if (event.key === 'ArrowDown') {
      event.preventDefault()
      if (currentIndex + 1 < historyIndex) {
        setInput(commandHistory[currentIndex + 1])
        setCurrentIndex(currentIndex + 1)
      } else if (
        currentIndex == historyIndex ||
        currentIndex + 1 == historyIndex
      ) {
        setInput('')
        if (currentIndex != historyIndex) {
          setCurrentIndex(currentIndex + 1)
        }
      }
    } else if (event.key === 'Enter') {
      event.preventDefault()
      if (input.trim() !== '') {
        onChange(input)
        setCommandHistory([...commandHistory, input])
        setHistoryIndex(historyIndex + 1)
        setCurrentIndex(historyIndex + 1)
        setInput('')
      }
    }
  }

  const terminalRef = useRef(null)
  const inputRef = useRef(null)

  if (success === 'true' && focus) {
    inputRef.current.blur()
    setFocus(false)
  }

  const autoFocus = () => {
    inputRef.current.focus()
  }

  const performScrolldown = useRef(false)
  useEffect(() => {
    if (performScrolldown.current) {
      setTimeout(
        () =>
          terminalRef?.current?.scrollIntoView({
            behavior: 'auto',
            block: 'nearest',
          }),
        500
      )
    }
    performScrolldown.current = true
  }, [lines])

  return (
    <div
      className={clsx(
        'flex grow flex-col border-white/25 font-space-mono text-white md:basis-1/3 md:border-l',
        {
          'hidden md:flex': !isActive,
          flex: isActive,
        }
      )}
    >
      <div className="flex grow flex-col items-stretch text-white">
        <div className="flex grow">
          <div
            className="react-terminal-wrapper react-terminal-light relative box-border w-full rounded text-lg "
            onClick={autoFocus}
          >
            <div className="react-terminal flex h-[600px] flex-col overflow-auto">
              {lines.map((line, index) => (
                <span
                  key={index}
                  className={clsx({
                    'react-terminal-answer text-green': line.type === 'answer',
                    'react-terminal-output text-[var(--terminal-output)]':
                      line.type === 'output',
                    'react-terminal-previous-input overflow-wrap-normal break-all text-white/80':
                      line.type === 'input',
                  })}
                >
                  <div className="react-terminal-line ">{line.value}</div>
                </span>
              ))}
              <div className=" flex text-white" ref={terminalRef}>
                <span className="mr-[5px]">&gt;</span>
                <textarea
                  className="overflow-wrap-normal w-full resize-none break-all border-none bg-transparent font-space-mono focus:outline-none"
                  value={input}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                  autoFocus={onChange != null}
                  autoComplete="off"
                  spellCheck="false"
                  ref={inputRef}
                  rows={5} // Increase rows based on text length
                />
              </div>
            </div>
          </div>
        </div>
        <StatusBar input={success} expected="true" next={next} />
      </div>
    </div>
  )
}
