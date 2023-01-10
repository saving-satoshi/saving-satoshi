'use client'

import React, { useState } from 'react'
import Terminal, { ColorMode, TerminalOutput } from 'react-terminal-ui'

const TerminalController = (props) => {
  return (
    <div className="flex grow">
      <Terminal
        name="Saving Satoshi"
        colorMode={ColorMode.Light}
        onInput={props.onInput}
      >
        {props.lines.map((line, index) => (
          <span key={index} className={`${line.type === 'input' ? 'text-white' : 'text-[var(--terminal-output)]'} react-terminal-line-blue`}>
            <TerminalOutput>{`> ${line.value}`}</TerminalOutput>
          </span>
        ))}
      </Terminal>
    </div>
  )
}

export default TerminalController
