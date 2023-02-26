'use client'

import clsx from 'clsx'
import React from 'react'
import { TerminalOutput } from './TerminalOutput'
import { StatusBar, useLessonContext } from 'ui'
import { LessonView } from 'types'
import TerminalInterface from './TerminalInterface'

export default function Terminal({ success, lines, next, onChange }) {
  const { activeView } = useLessonContext()
  const isActive = activeView === LessonView.Code

  return (
    <div
      className={clsx(
        'flex grow flex-col border-white/25 font-space-mono text-white md:border-l',
        {
          'hidden md:flex': !isActive,
          flex: isActive,
        }
      )}
    >
      <div className="flex grow flex-col items-stretch text-white">
        <div className="flex grow">
          <TerminalInterface onInput={onChange}>
            {lines.map((line, index) => (
              <span
                key={index}
                className={clsx({
                  'react-terminal-answer text-green': line.type === 'answer',
                  'react-terminal-output text-[var(--terminal-output)]':
                    line.type === 'output',
                  'react-terminal-previous-input text-white/80':
                    line.type === 'input',
                  'mt-2.5': index != 0,
                })}
              >
                <TerminalOutput>{`${line.value}`}</TerminalOutput>
              </span>
            ))}
          </TerminalInterface>
        </div>
        <StatusBar input={success} expected={'true'} next={next} />
      </div>
    </div>
  )
}
