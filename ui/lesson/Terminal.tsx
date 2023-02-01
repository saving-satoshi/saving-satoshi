'use client'

import clsx from 'clsx'
import React from 'react'
import ReactTerminal, { ColorMode, TerminalOutput } from 'react-terminal-ui'
import PlayIcon from 'public/assets/icons/play.svg'
import { StatusBar } from 'ui'

export default function Terminal({ success, answer, lines, next, onChange }) {
  return (
    <div className="flex grow flex-col border-white/25 font-space-mono text-white md:border-l">
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
                  line.type === 'input'
                    ? 'react-terminal-previous-input text-white/80'
                    : 'react-terminal-output text-[var(--terminal-output)]'
                }`}
              >
                <TerminalOutput>{`${line.value}`}</TerminalOutput>
              </span>
            ))}
          </ReactTerminal>
        </div>

        <div className="flex justify-center border-t border-white/25 bg-black/[.15] p-[20px] md:justify-start">
          <h2
            className={clsx('font-space-mono text-[18px] text-white/50', {
              'bg-green-400/25': success,
              'opacity-50': !success,
            })}
          >
            {success
              ? answer
              : 'Waiting for you to write and run the script...'}
          </h2>
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
