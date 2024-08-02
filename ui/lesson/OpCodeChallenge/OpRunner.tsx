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
  const btnClassName =
    'bg-black/10 py-[3px] px-2.5 rounded-[3px] text-white font-space-mono disabled:opacity-25'
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
  }, [script, initialStack, height])

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
    setInitialStack(event.target.value.toUpperCase())
    setStartedTyping(true)
  }

  const handleHeightChange = (event) => {
    handleReset()
    setHeight(parseInt(event.target.value))
    setStartedTyping(true)
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
            className="overflow-wrap-normal w-full resize-none break-all border-none bg-transparent font-space-mono text-lg uppercase text-white focus:outline-none"
            onChange={handleScriptChange}
            autoComplete="off"
            value={script}
            readOnly={readOnly}
            placeholder="OP_CODES..."
            autoCapitalize="none"
            spellCheck="false"
            rows={4}
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
              className="flex-grow border-none bg-transparent font-space-mono text-lg uppercase focus:outline-none"
              type="text"
              placeholder="0xA 10..."
            />
            <p className="mt-2 font-space-mono text-base text-orange">
              Add text or numbers separated by spaces.
            </p>
          </div>

          <div className="flex flex-col px-5 py-4">
            <p className="font-space-mono text-lg font-bold capitalize">
              Next Block Height
            </p>
            <input
              title="Enter any number above 1."
              onChange={handleHeightChange}
              className="flex-grow border-none bg-transparent text-lg focus:outline-none"
              placeholder="6930001"
              type="number"
              min="1"
            />
          </div>
        </div>
        <div className="flex grow flex-col  px-5 ">
          <div className="flex w-full flex-row justify-between py-3">
            <p className="font-mono text-lg font-bold">Execution stack</p>

            <div className="flex flex-row gap-[10px]">
              <button className={btnClassName} onClick={handleRun}>
                Run
              </button>
              <button
                type="button"
                className={btnClassName}
                onClick={handleRun}
              >
                Step
              </button>
              <button
                type="button"
                className={btnClassName}
                onClick={handleReset}
              >
                Reset
              </button>
            </div>
          </div>
          <div
            ref={scrollRef}
            className="mb-auto flex h-full w-full flex-row gap-2.5 overflow-scroll py-2"
          >
            {stackHistory.length === 0 && (
              <div className="flex w-full max-w-[164px] flex-col">
                <div className="my-[5px] w-full rounded-[3px] bg-black/20 px-3 py-1 text-center font-space-mono text-white/50">
                  OP_CODES
                </div>

                <div className="flex h-full max-h-[204px] min-w-[164px] flex-col rounded-b-[10px] bg-black/20  p-2.5">
                  <div
                    className="my-auto resize-none break-all border-none bg-transparent font-space-mono text-white/50 focus:outline-none"
                    style={{ whiteSpace: 'pre-wrap' }}
                  >
                    <div className="break-word text-center">
                      {
                        'The resulting \n stack will be \n visualized \n here...'
                      }
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
                    className="flex w-full max-w-[164px] flex-col"
                  >
                    <div
                      className={clsx(
                        'mx-auto my-[5px] w-full max-w-[164px] rounded-[3px] border border-none bg-black/20 py-1  text-center font-space-mono',
                        {
                          ' text-[#EF960B]':
                            stack.operation.tokenType === 'conditional',
                          ' text-[#3DCFEF]':
                            stack.operation.tokenType !== 'conditional',
                          ' text-[#F3241D]': stack?.error?.message,
                        }
                      )}
                    >
                      {stack.operation.value}
                    </div>

                    {stack && (
                      <div
                        key={`Container${index}`}
                        className="flex h-full max-h-[204px] min-w-[164px] flex-col overflow-y-auto rounded-b-[10px] bg-black bg-opacity-20 p-2.5"
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
        </div>
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
