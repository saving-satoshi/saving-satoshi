'use client'

import clsx from 'clsx'
import React from 'react'
import ReactTerminal, { ColorMode, TerminalOutput } from 'react-terminal-ui'
import PlayIcon from 'public/assets/icons/play.svg'
import { StatusBar, useLessonContext } from 'ui'
import { LessonView } from 'types'

export default function Terminal({
  success,
  answer,
  lines,
  next,
  onChange,
  successMessage,
  instruction,
}) {
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
                  line.type === 'answer'
                    ? 'react-terminal-answer text-green bg-green/25 rounded pl-1 pr-1'
                    : 'react-terminal-output text-[var(--terminal-output)]'
                }`}
              >
                <TerminalOutput>{`${line.value}`}</TerminalOutput>
              </span>
            ))}
          </ReactTerminal>
        </div>
        {!success && (
          <div className="flex h-16 border-t border-white/25 pt-4 pl-6 pb-[30px] text-[18px] sm:flex-col md:flex-row md:pl-5 md:pt-0 md:pb-0">
            <button className="flex grow items-center gap-2 transition duration-150 ease-in-out hover:opacity-75">
              <span className="flex h-7 w-7 items-center justify-center rounded bg-white">
                <PlayIcon className="text-black" />
              </span>
              Run the script
            </button>
          </div>
        )}

        {success && <StatusBar input={'true'} expected={'true'} next={next} />}
      </div>
    </div>
  )
}
