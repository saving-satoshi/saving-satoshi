'use client'

import clsx from 'clsx'
import React from 'react'
import ReactTerminal, { ColorMode, TerminalOutput } from 'react-terminal-ui'
import { StatusBar, useLessonContext } from 'ui'
import { LessonView } from 'types'

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
          <ReactTerminal
            name="Saving Satoshi"
            colorMode={ColorMode.Light}
            onInput={onChange}
          >
            {lines.map((line, index) => (
              <span
                key={index}
                className={`${
                  (line.type === 'answer' &&
                    'react-terminal-answer text-green') ||
                  (line.type === 'output' &&
                    'react-terminal-output text-[var(--terminal-output)]') ||
                  (line.type === 'input' &&
                    'react-terminal-previous-input text-white/80')
                }`}
              >
                <TerminalOutput>{`${line.value}`}</TerminalOutput>
              </span>
            ))}
          </ReactTerminal>
        </div>
        <StatusBar input={success} expected={'true'} next={next} />
      </div>
    </div>
  )
}
