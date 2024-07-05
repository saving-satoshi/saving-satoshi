import React, { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
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

  const [stackHistory, setStackHistory] = useState<any[][]>([]) // State to hold history of stacks
  const [runInterpreter, setRunInterpreter] = useState<any>(null) // State to hold the interpreter instance

  useEffect(() => {
    const stackUpdateCallback = (newStack: any[]) => {
      setStackHistory((prevHistory) => [...prevHistory, [...newStack]]) // Append new array instance of stack to history
    }

    const interpreter = initializeInterpreter(
      scriptField as InterpreterAreaRef,
      initialStack as InterpreterRef,
      executionStack as InterpreterAreaRef,
      currentOpcode as InterpreterDivRef,
      height as InterpreterRef,
      stackUpdateCallback // Pass the stackUpdateCallback function here
    )

    setStackHistory([
      initialStack?.current?.value ? [initialStack?.current?.value] : [],
    ]) // Reset stack history

    setRunInterpreter(interpreter)

    return () => {
      // Clean up if needed
    }
  }, []) // Empty dependency array to run once on mount

  const scriptOnchange = () => {
    runInterpreter.onScriptInput()
    setStackHistory([[initialStack.current.value]]) // Reset stack history
    console.log(currentOpcode, initialStack?.current?.value)
  }

  const run = async () => {
    for (let i = 0; i < scriptField.current.value.split(' ').length + 1; i++) {
      await runInterpreter.onStepClick()
    }
  }

  const reset = () => {
    runInterpreter.onReset()
    setStackHistory([[initialStack.current.value]]) // Reset stack history
    console.log(
      currentOpcode,
      executionStack.current,
      initialStack?.current?.value
    )
  }

  const step = () => {
    runInterpreter.onStepClick()
  }

  if (!runInterpreter) {
    return null
  }

  console.log(currentOpcode)

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

      <div className="mt-4 flex flex-col border-b border-b-white py-5 text-black">
        <textarea
          className="resize-none break-all border-none bg-transparent font-space-mono text-white focus:outline-none"
          ref={executionStack}
        />
      </div>

      <div className="flex gap-3">
        <button type="button" className="cursor-pointer" onClick={run}>
          Run
        </button>
        <button onClick={reset}> Reset </button>
        <button onClick={step}>Step</button>
      </div>

      {/* Display the stack history */}
      <div className="mt-4 flex flex-row gap-2.5 overflow-scroll">
        {stackHistory.map((stack, index) => (
          <div
            key={`Container${index}`}
            className="flex flex-col rounded-b-[10px] bg-black bg-opacity-20 p-2.5"
          >
            <div key={`Container${index}-bg`} className="mt-auto">
              <div key={`OPcode${index}`} ref={currentOpcode} />
              <div
                key={index}
                className="resize-none break-all border-none bg-transparent font-space-mono text-white focus:outline-none"
                style={{ whiteSpace: 'pre-wrap' }}
              >
                {stack
                  .slice()
                  .reverse()
                  .map((item, i) => (
                    <div
                      key={`item${i}`}
                      id={`${i} + ${index === stackHistory.length - 1} + ${
                        !!item === true
                      }`}
                      className={clsx(
                        'my-[5px] w-[140px] rounded-[3px] px-3 py-1',
                        {
                          'bg-green':
                            i === 0 &&
                            stack.length < 2 &&
                            index === stackHistory.length - 1 &&
                            index !== 0 &&
                            !!item === true,
                          'bg-white/15':
                            i !== 0 ||
                            stack.length > 1 ||
                            index !== stackHistory.length - 1 ||
                            index === 0 ||
                            !!item !== true,
                        }
                      )}
                    >
                      {JSON.stringify(
                        !isNaN(parseFloat(item)) && isFinite(item)
                          ? parseInt(item)
                          : item
                      )}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OPRunner
