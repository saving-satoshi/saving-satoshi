'use client'

import React, { useState, useEffect, useRef } from 'react'

export default function TerminalInterface({ children, onInput }) {
  const [input, setInput] = useState('')
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState<number>(0)
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newInput = event.target.value
    setInput(newInput)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
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
        onInput(input)
        setCommandHistory([...commandHistory, input])
        setHistoryIndex(historyIndex + 1)
        setCurrentIndex(historyIndex + 1)
        setInput('')
      }
    }
  }

  const terminalRef = useRef<HTMLDivElement>(null)

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
  }, [children])

  return (
    <div className="react-terminal-wrapper relative box-border w-full rounded p-5 text-lg">
      <div className="flex h-[600px] flex-col overflow-auto">
        {children}
        <div
          className="mt-2.5 flex items-center scroll-smooth text-white"
          ref={terminalRef}
        >
          <span className="mr-[5px]">&gt;</span>
          <input
            className="w-full border-none bg-transparent focus:outline-none"
            type="text"
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            autoFocus={onInput != null}
            autoComplete="off"
            spellCheck="false"
          />
        </div>
      </div>
    </div>
  )
}
