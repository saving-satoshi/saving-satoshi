import React, { useEffect, useState, useRef, useCallback } from 'react'
import clsx from 'clsx'
import LanguageExecutor from './LanguageExecutor'
import _ from 'lodash'
import { StatusBar } from 'ui/common'
import { MainState, OpRunnerTypes, StackType, T } from './runnerTypes'

const OpRunner = ({
  success,
  setSuccess,
  answerScript,
  readOnly,
  prePopulate,
  showRunButtons,
}: Omit<OpRunnerTypes, 'children'>) => {
  const scrollRef = useRef<HTMLDivElement>(null)

  const [script, setScript] = useState(
    prePopulate ? answerScript.join(' ') : ''
  )
  const [initialStack, setInitialStack] = useState('')
  const [height, setHeight] = useState<number>(0)
  const [stackHistory, setStackHistory] = useState<MainState | []>([])
  const [startedTyping, setStartedTyping] = useState(false)

  React.useEffect(() => {
    if (startedTyping) {
      const timeoutId = setTimeout(() => {
        handleRun()
      }, 1000)

      return () => clearTimeout(timeoutId)
    }
  }, [script, initialStack])

  const handleRun = () => {
    const initialStackArray = initialStack.split(' ')

    const runnerState = LanguageExecutor.RunCode(
      script,
      initialStackArray,
      height
    )
    setStackHistory(runnerState?.state || [])
    checkSuccessState(runnerState?.tokens || [], runnerState?.stack ?? [])
  }

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollRef.current.scrollWidth
    }
  }, [stackHistory])

  const handleReset = () => {
    setStackHistory([])
    if (success !== true) {
      setSuccess(0)
    }
  }

  const handleScriptChange = (event) => {
    setScript(event.target.value.toUpperCase())
    handleReset()
    setStartedTyping(true)
  }

  const handleInitialStackChange = (event) => {
    handleReset()
    setInitialStack(event.target.value)
    setStartedTyping(true)
  }

  const handleHeightChange = (event) => {
    handleReset()
    setHeight(parseInt(event.target.value))
  }

  const checkSuccessState = (tokens: T, stack: StackType) => {
    const filterToStringArray = tokens.map((token) => token.value)
    const containsEveryScript = answerScript.every((token) =>
      filterToStringArray.includes(token)
    )

    const doesStackValidate = () => {
      if (stack?.length === 1 && (stack[0] === 1 || stack[0] === true)) {
        return true
      }
      return false
    }
    if (containsEveryScript && doesStackValidate()) {
      setSuccess(true)
    } else if (success !== true) {
      setSuccess(2)
    } else {
      setSuccess(success)
    }
  }

  const handleTryAgain = () => {
    setSuccess(0)
  }

  let error = null

  return (
    <div className="flex grow flex-col text-white md:w-[50vw]">
      <div className="flex h-[calc(100vh-70px-67px)] grow flex-col text-white">
        <div className="flex flex-col gap-1 border-b border-b-white px-5 py-4">
          <p className="font-space-mono text-lg font-bold capitalize ">
            Your Script
          </p>
          <textarea
            title="Add OP_CODES seperated by spaces."
            className="overflow-wrap-normal w-full resize-none break-all border-none bg-transparent font-space-mono text-lg text-white focus:outline-none"
            onChange={handleScriptChange}
            autoComplete="off"
            value={script}
            readOnly={readOnly}
            placeholder="OP_CODES..."
            autoCapitalize="none"
            spellCheck="false"
            rows={5}
          />
        </div>

        <div className="flex flex-col flex-wrap border-b border-b-white">
          <div className="flex flex-col border-b border-b-white px-5 py-4">
            <p className="font-space-mono text-lg font-bold capitalize">
              Initial stack
            </p>
            <input
              title="Add text or numbers seperated by spaces."
              onChange={handleInitialStackChange}
              className="flex-grow border-none bg-transparent font-space-mono text-lg focus:outline-none"
              type="text"
              placeholder="0xA 10..."
            />
          </div>

          <div className="flex flex-col px-5 py-4">
            <p className="font-space-mono text-lg font-bold capitalize">
              Next Block Height
            </p>
            <input
              title="Enter any number above 1."
              onChange={handleHeightChange}
              className="flex-grow border-none bg-transparent text-lg focus:outline-none"
              placeholder="630001"
              type="number"
              min="1"
            />
          </div>
        </div>

        <div
          ref={scrollRef}
          className="mb-auto flex w-full flex-row gap-2.5 overflow-scroll px-5 py-4"
        >
          {stackHistory.length === 0 && (
            <div className="flex flex-col">
              <div className="mx-auto my-[5px] w-[140px] rounded-[3px] border border-white bg-transparent px-3 py-1 font-space-mono text-white">
                OP_CODES
              </div>
              <hr className="my-2 -ml-2.5 border-dashed" />
              <div className="flex min-h-[204px] min-w-[164px] flex-col rounded-b-[10px] bg-black bg-opacity-20 p-2.5">
                <div
                  className="my-auto resize-none break-all border-none bg-transparent font-space-mono text-white focus:outline-none"
                  style={{ whiteSpace: 'pre-wrap' }}
                >
                  <div className="break-word text-center">
                    {'The resulting \n stack will be \n visualized \n here...'}
                  </div>
                </div>
              </div>
            </div>
          )}

          {stackHistory.map((stack, index) => {
            if (error) {
              return null
            }
            if (stack?.error) {
              error = stack.error?.message
            }
            return (
              stack.negate === 0 && (
                <div
                  key={`Overall-container${index}`}
                  className="flex flex-col"
                >
                  <div
                    className={clsx(
                      'mx-auto my-[5px] w-[140px] rounded-[3px] border bg-transparent px-3 py-1 font-space-mono',
                      {
                        'border-[#EF960B] text-[#EF960B]':
                          stack.operation.tokenType === 'conditional',
                        'border-[#3DCFEF] text-[#3DCFEF]':
                          stack.operation.tokenType !== 'conditional',
                        'border-[#F3241D] text-[#F3241D]':
                          stack?.error?.message,
                      }
                    )}
                  >
                    {stack.operation.value}
                  </div>
                  <hr className="my-2 -ml-2.5 border-dashed" />
                  {stack && (
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
                              className={clsx(
                                'my-[5px] w-[140px] rounded-[3px] px-3 py-1',
                                {
                                  'bg-red/35':
                                    index + 1 === stackHistory.length &&
                                    stack.stack[0] === false,
                                  'bg-green/35':
                                    index + 1 === stackHistory.length &&
                                    (stack.stack[0] === true ||
                                      stack.stack[0] === 1),
                                  'bg-white/15':
                                    index + 1 !== stackHistory.length ||
                                    (index + 1 === stackHistory.length &&
                                      stack.stack[0] !== true &&
                                      stack.stack[0] !== false),
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
                  )}
                </div>
              )
            )
          })}
        </div>

        {showRunButtons && (
          <div className="flex h-10  gap-3 border-t border-t-white pl-5 ">
            <button
              type="button"
              className="cursor-pointer"
              onClick={handleRun}
            >
              Run
            </button>
            <button onClick={handleReset}>Reset</button>
            <button>Step</button>
          </div>
        )}
      </div>

      <StatusBar
        handleTryAgain={handleTryAgain}
        className="h-14 min-h-14 grow"
        errorMessage={error || ''}
        success={success}
      />
    </div>
  )
}

export default OpRunner
