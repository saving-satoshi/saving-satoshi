import React, { useEffect, useRef } from 'react'
import initializeInterpreter, {
  InterpreterAreaRef,
  InterpreterDivRef,
  InterpreterRef,
} from '.'

const OpClass = () => {
  const scriptField = useRef<HTMLInputElement>(null)
  const initialStack = useRef<HTMLInputElement>(null)
  const executionStack = useRef<HTMLTextAreaElement>(null)
  const currentOpcode = useRef<HTMLDivElement>(null)
  const height = useRef<HTMLInputElement>(null)

  let runInterpreter = initializeInterpreter(
    scriptField as InterpreterRef,
    initialStack as InterpreterRef,
    executionStack as InterpreterAreaRef,
    currentOpcode as InterpreterDivRef,
    height as InterpreterRef
  )

  const scriptOnchange = () => {
    runInterpreter = initializeInterpreter(
      scriptField as InterpreterRef,
      initialStack as InterpreterRef,
      executionStack as InterpreterAreaRef,
      currentOpcode as InterpreterDivRef,
      height as InterpreterRef
    )
    runInterpreter.onScriptInput()
  }
  const runOnClick = () => {
    runInterpreter = initializeInterpreter(
      scriptField as InterpreterRef,
      initialStack as InterpreterRef,
      executionStack as InterpreterAreaRef,
      currentOpcode as InterpreterDivRef,
      height as InterpreterRef
    )
    runInterpreter.onRunButtonClick()
  }

  const reset = () => {
    runInterpreter = initializeInterpreter(
      scriptField as InterpreterRef,
      initialStack as InterpreterRef,
      executionStack as InterpreterAreaRef,
      currentOpcode as InterpreterDivRef,
      height as InterpreterRef
    )
    runInterpreter.onReset()
  }
  return (
    <div className="flex flex-col px-8">
      <div className="mt-4 flex flex-col">
        <input ref={scriptField} type="text" onChange={scriptOnchange} />
      </div>
      <div className="mt-4 flex flex-col">
        <input ref={initialStack} type="text" onChange={scriptOnchange} />
      </div>

      <div className="mt-4 flex flex-col">
        <input ref={height} type="number" />
      </div>

      <div ref={currentOpcode}></div>
      <div className="mt-4 flex flex-col">
        <textarea ref={executionStack} />
      </div>

      <div className="flex gap-3">
        <button type="button" className="cursor-pointer" onClick={runOnClick}>
          Run
        </button>
        <button onClick={reset}>Reset</button>
        <button>Step</button>
      </div>
    </div>
  )
}

export default OpClass
