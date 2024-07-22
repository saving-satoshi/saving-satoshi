import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import LanguageExecutor from './LanguageExecutor'
import { OpCodeTypes } from './OPFunctions'
import { StatusBar } from 'ui/common'
import { MainState, OpRunnerTypes, StackType, T } from './types'

const OpRunner = ({
  success,
  setSuccess,
  userScript,
  finalStack,
}: Omit<OpRunnerTypes, 'children'>) => {
  const [script, setScript] = useState('')
  const [initialStack, setInitialStack] = useState('')
  const [height, setHeight] = useState<number>(0)
  const [stackHistory, setStackHistory] = useState<MainState | []>([])

  useEffect(() => {}, [stackHistory, script, initialStack, height])

  const handleScriptChange = (event) => {
    if (stackHistory[0] !== undefined) {
      setStackHistory([])
    }
    setScript(event.target.value.toUpperCase())
  }

  const handleInitialStackChange = (event) => {
    setInitialStack(event.target.value)
  }

  const handleHeightChange = (event) => {
    setHeight(parseInt(event.target.value))
  }

  const checkSuccessState = (tokens: T, stack: StackType) => {
    const filterToStringArray = tokens.map((token) => token.value)
    const isSuccess = userScript.every((token) =>
      filterToStringArray.includes(token)
    )
    const isStackEqual = () => {
      if (finalStack?.length === stack.length) {
        const isElmSame = finalStack.every((elm) => stack.includes(elm))
        return isElmSame
      } else {
        return false
      }
    }
    if (!finalStack) {
      if (isSuccess) {
        setSuccess(true)
      } else {
        setSuccess(2)
      }
    } else {
      if (isSuccess && isStackEqual()) {
        setSuccess(true)
      } else {
        setSuccess(false)
      }
    }
  }
  const handleRun = () => {
    const initialStackArray = initialStack.split(',')
    const runnerState = LanguageExecutor.RunCode(
      script,
      initialStackArray,
      height
    )
    setStackHistory(runnerState.state)
    checkSuccessState(runnerState.tokens, runnerState.stack)
  }

  const handleTryAgain = () => {
    setSuccess(0)
  }
  const handleReset = () => {
    setStackHistory([])
    setSuccess(0)
  }

  return (
    <div className="flex flex-col  text-white">
      <div className="mt-4 flex  flex-col gap-1 border-b border-b-white pl-5">
        <p className="font-space-mono text-lg font-bold capitalize ">
          Your Script
        </p>
        <textarea
          className="overflow-wrap-normal w-full resize-none break-all border-none bg-transparent font-space-mono text-lg text-white focus:outline-none"
          onChange={handleScriptChange}
          autoComplete="off"
          value={script}
          placeholder="Enter your script here..."
          autoCapitalize="none"
          spellCheck="false"
          rows={5} // Increase rows based on text length
        />
      </div>

      <div className="mt-4 flex  flex-col gap-1 border-b border-b-white py-5 pl-5">
        <p className="font-space-mono text-lg font-bold capitalize">
          Initial stack
        </p>
        <input
          onChange={handleInitialStackChange}
          className="border-none bg-transparent font-space-mono text-lg focus:outline-none"
          type="text"
          placeholder="..."
        />
      </div>

      <div className="mt-4 flex  flex-col gap-2 border-b border-b-white py-5 pl-5">
        <p className="font-space-mono text-lg font-bold capitalize">
          Next Block Height
        </p>
        <input
          onChange={handleHeightChange}
          className="border-none bg-transparent text-lg focus:outline-none"
          placeholder="630001"
          type="number"
          min="1"
        />
      </div>

      <div className="flex h-10  gap-3 pl-5">
        <button type="button" className="cursor-pointer" onClick={handleRun}>
          Run
        </button>
        <button onClick={handleReset}>Reset</button>
        <button>Step</button>
      </div>

      <div className="flex w-full flex-row gap-2.5 overflow-scroll pl-5">
        {stackHistory.length === 0 && (
          <div className="flex flex-col">
            <div className="flex min-h-[204px] min-w-[164px] flex-col rounded-b-[10px] bg-black bg-opacity-20 p-2.5">
              <div
                className="my-auto resize-none break-all border-none bg-transparent font-space-mono text-white focus:outline-none"
                style={{ whiteSpace: 'pre-wrap' }}
              >
                <div className="break-word text-center">
                  {'Your script \n code will be \n visualized \n here...'}
                </div>
              </div>
            </div>
          </div>
        )}

        {stackHistory.map(
          (stack, index) =>
            stack.negate === 0 && (
              <div key={`Overall-container${index}`} className="flex flex-col">
                <div
                  className={clsx(
                    'mx-auto my-[5px] w-[140px] rounded-[3px] border bg-transparent px-3 py-1 font-space-mono',
                    {
                      'border-[#EF960B] text-[#EF960B]':
                        stack.operation.tokenType === 'conditional',
                      'border-[#3DCFEF] text-[#3DCFEF]':
                        stack.operation.tokenType !== 'conditional',
                    }
                  )}
                >
                  {stack.operation.value}
                </div>
                <hr className="my-2 -ml-2.5 border-dashed" />
                <div
                  key={`Container${index}`}
                  className="flex h-[204px] min-w-[164px] flex-col overflow-y-auto rounded-b-[10px] bg-black bg-opacity-20 p-2.5"
                >
                  <div
                    key={index}
                    className="mt-auto resize-none break-all border-none bg-transparent font-space-mono text-white focus:outline-none"
                    style={{ whiteSpace: 'pre-wrap' }}
                  >
                    {stack?.stack
                      ?.slice()
                      .reverse()
                      .map((item, i) => (
                        <div
                          key={`item${i}`}
                          className="my-[5px] w-[140px] rounded-[3px] bg-white/15 px-3 py-1"
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
            )
        )}
      </div>

      <StatusBar
        handleTryAgain={handleTryAgain}
        className="h-14 min-h-14 grow"
        success={success}
      />
    </div>
  )
}

export default OpRunner
