import React, { useEffect, useRef } from 'react'
import initializeInterpreter, {
  InterpreterAreaRef,
  InterpreterDivRef,
  InterpreterRef,
} from '.'

const OPRunner = () => {
  const scriptField = useRef<HTMLTextAreaElement>(null)
  const initialStack = useRef<HTMLInputElement>(null)
  const executionStack = useRef<HTMLTextAreaElement>(null)
  const currentOpcode = useRef<HTMLDivElement>(null)
  const height = useRef<HTMLInputElement>(null)

  let runInterpreter = initializeInterpreter(
    scriptField as InterpreterAreaRef,
    initialStack as InterpreterRef,
    executionStack as InterpreterAreaRef,
    currentOpcode as InterpreterDivRef,
    height as InterpreterRef
  )

  const scriptOnchange = () => {
    runInterpreter = initializeInterpreter(
      scriptField as InterpreterAreaRef,
      initialStack as InterpreterRef,
      executionStack as InterpreterAreaRef,
      currentOpcode as InterpreterDivRef,
      height as InterpreterRef
    )
    runInterpreter.onScriptInput()
  }
  const runOnClick = () => {
    runInterpreter = initializeInterpreter(
      scriptField as InterpreterAreaRef,
      initialStack as InterpreterRef,
      executionStack as InterpreterAreaRef,
      currentOpcode as InterpreterDivRef,
      height as InterpreterRef
    )
    runInterpreter.onRunButtonClick()
  }

  const reset = () => {
    runInterpreter = initializeInterpreter(
      scriptField as InterpreterAreaRef,
      initialStack as InterpreterRef,
      executionStack as InterpreterAreaRef,
      currentOpcode as InterpreterDivRef,
      height as InterpreterRef
    )
    runInterpreter.onReset()
  }
  return (
    <div className="flex flex-col px-8 text-white">
      <div className="mt-4 flex flex-col gap-1 border-b border-b-white">
        <p className="font-space-mono text-lg font-bold capitalize ">
          {' '}
          Your Script{' '}
        </p>
        <textarea
          className="overflow-wrap-normal w-full resize-none break-all border-none bg-transparent font-space-mono text-white focus:outline-none"
          ref={scriptField}
          onChange={scriptOnchange}
          autoFocus={scriptOnchange != null}
          autoComplete="off"
          autoCapitalize="none"
          spellCheck="false"
          rows={5} // Increase rows based on text length
        />
      </div>
      <div className="mt-4 flex flex-col gap-1 border-b border-b-white py-5">
        <p className="font-space-mono text-lg font-bold capitalize">
          Initial stack
        </p>
        <input
          className="border-none bg-transparent  focus:outline-none"
          ref={initialStack}
          type="text"
          onChange={reset}
          placeholder="..."
        />
      </div>

      <div className="mt-4 flex flex-col gap-2 border-b border-b-white py-5">
        <p className="font-space-mono text-lg font-bold capitalize">
          Next Block Height
        </p>
        <input
          className="border-none bg-transparent  [appearance:textfield] focus:outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          placeholder="..."
          ref={height}
          type="number"
        />
      </div>

      <div ref={currentOpcode}></div>
      <div className="mt-4 flex flex-col border-b border-b-white py-5 text-black">
        <textarea
          className="resize-none break-all border-none bg-transparent font-space-mono text-white focus:outline-none"
          ref={executionStack}
        />
      </div>

      <div className="flex gap-3">
        <button type="button" className="cursor-pointer" onClick={runOnClick}>
          Run
        </button>
        <button onClick={reset}> Reset </button>
        <button>Step</button>
      </div>
    </div>
  )
}

export default OPRunner
