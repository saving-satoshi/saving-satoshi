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
          <TerminalOutput key={index}>{`> ${line}`}</TerminalOutput>
        ))}
      </Terminal>
    </div>
  )
}

export default TerminalController
