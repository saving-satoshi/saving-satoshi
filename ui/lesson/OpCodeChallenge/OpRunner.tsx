import React, { useEffect, useState, useRef, useCallback } from 'react'
import clsx from 'clsx'
import LanguageExecutor from './LanguageExecutor'
import _ from 'lodash'
import { StatusBar } from 'ui/common'
import {
  MainState,
  OpRunnerTypes,
  StackType,
  T,
  RunnerError,
} from './runnerTypes'
import { ArcherElement } from 'react-archer'
import { RelationType } from 'react-archer/lib/types'
import { useArrows } from 'state/ArrowsContext'
import useHorizontalScroll from 'hooks/useHorizontalScroll'
import { sleep } from 'utils'

const arrowLineStyles = {
  startMarker: true,
  endMarker: false,
  strokeColor: '#3DCFEF',
  strokeWidth: 1.25,
}

const getRelationsSourceForOperation = (
  operation: string,
  currentIndex: number
): RelationType[] => {
  switch (operation) {
    case 'OP_EQUAL':
    case 'OP_ADD':
    case 'OP_SUB':
    case 'OP_MUL':
    case 'OP_DIV':
      return [
        {
          targetId: `item${currentIndex}-0`,
          sourceAnchor: 'left',
          targetAnchor: 'right',
          style: arrowLineStyles,
        },
        {
          targetId: `item${currentIndex}-1`,
          sourceAnchor: 'left',
          targetAnchor: 'right',
          style: arrowLineStyles,
        },
      ]
    case 'OP_DUP':
      return [
        {
          targetId: `item${currentIndex}-0`,
          sourceAnchor: 'left',
          targetAnchor: 'right',
          style: arrowLineStyles,
        },
      ]
    default:
      return []
  }
}

const getRelationsTargetForOperations = (operation: string): Number[] => {
  switch (operation) {
    case 'OP_EQUAL':
    case 'OP_ADD':
    case 'OP_SUB':
    case 'OP_MUL':
    case 'OP_DIV':
      return [0]
    case 'OP_DUP':
      return [0, 1]
    default:
      return []
  }
}

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
  const { ref: arrowContainerRef } = useArrows()
  const scrollPosition = useHorizontalScroll(scrollRef)

  const [executor, setExecutor] = useState<LanguageExecutor | null>(null)

  const initializeExecutor = () => {
    const initialStackArray = initialStack
      .split(' ')
      .filter((item) => item.trim())
    const tokens = LanguageExecutor.parsableInputToTokens(
      LanguageExecutor.rawInputToParsableInput(script)
    )
    const newExecutor = new LanguageExecutor(tokens, initialStackArray, height)
    setExecutor(newExecutor)

    // Create an initial state to represent the initial stack
    const initialState = {
      stack: initialStackArray,
      operation: {
        tokenType: null,
        resolves: null,
        value: 'INITIAL_STACK',
        type: '',
      },
      step: -1, // Use -1 to indicate this is the initial state
      negate: 0,
      error: null,
    }

    setStackHistory([initialState])
  }

  const handleStep = async () => {
    while (executor.tokens.length - 1 >= executor.currentIndex) {
      if (executor && executor.tokens.length - 1 >= executor.currentIndex) {
        const state = executor.executeStep()
        if (state) {
          setStackHistory((prev) => [...prev, state])
          checkSuccessState(executor.tokens, state, state.stack)
        }
        if (state.negate === 0) {
          await sleep(600)
        }
      } else if (
        !executor &&
        executor.tokens.length - 1 > executor.currentIndex
      ) {
        initializeExecutor()
      }
    }

    /*if (executor && executor.tokens.length - 1 >= executor.currentIndex) {
      const state = executor.executeStep()
      if (state) {
        setStackHistory((prev) => [...prev, state])
        checkSuccessState(executor.tokens, state, state.stack)
      }
    } else if (!executor && executor.tokens.length - 1 > executor.currentIndex) {
      initializeExecutor()
    }*/
  }

  const handleRun = () => {
    if (executor) {
      executor.execute()
      // Preserve the initial state and add the execution states
      setStackHistory((prev) => [prev[0], ...executor.state])
      checkSuccessState(executor.tokens, executor.state, executor.stack)
    } else {
      initializeExecutor()
    }
  }

  const handleReset = () => {
    setExecutor(null)
    initializeExecutor()

    // Preserve the initial stack state
    const initialStackArray = initialStack
      .split(' ')
      .filter((item) => item.trim())
    const initialState = {
      stack: initialStackArray,
      operation: {
        tokenType: null,
        resolves: null,
        value: 'INITIAL_STACK',
        type: '',
      },
      step: -1,
      negate: 0,
      error: null,
    }

    setStackHistory(initialStackArray.length > 0 ? [initialState] : [])

    if (success !== true) {
      setSuccess(0)
    }
  }

  useEffect(() => {
    // if user scrolls horizontally, refresh the arrows position
    if (arrowContainerRef?.current) {
      arrowContainerRef.current.refreshScreen()
    }
  }, [arrowContainerRef, scrollPosition])

  useEffect(() => {
    if (startedTyping) {
      const timeoutId = setTimeout(() => {
        initializeExecutor()
      }, 1000)

      return () => clearTimeout(timeoutId)
    }
  }, [script, initialStack, height])

  const [relations, setRelations] = useState<RelationType[]>([])

  useEffect(() => {
    if (stackHistory.length > 1) {
      const newRelations = stackHistory
        .slice(1)
        .flatMap((stack, index) =>
          getRelationsSourceForOperation(stack?.operation?.value ?? '', index)
        )
      setRelations(newRelations)
    }
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollRef.current.scrollWidth
    }
  }, [stackHistory])

  /*React.useEffect(() => {
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
    checkSuccessState(
      runnerState?.tokens ?? [],
      runnerState?.stack ?? [],
      runnerState?.state.find((item) => item.error && item.error.message)
        ?.error ?? { type: 'error', message: null }
    )
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
  }*/

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
    setHeight(
      isNaN(parseInt(event.target.value)) ? 0 : parseInt(event.target.value)
    )
    setStartedTyping(true)
  }

  const checkSuccessState = (
    tokens: T,
    state: MainState,
    stack: StackType,
    error: RunnerError
  ) => {
    const filterToStringArray = tokens.map((token) => token.value)
    const containsEveryScript = answerScript.every((token) =>
      filterToStringArray.includes(token)
    )

    const doesStackValidate = () => {
      if (
        stack?.length === 1 &&
        state[state.length - 1] &&
        (state[state.length - 1].stack[0] == 1 ||
          state[state.length - 1].stack[0] === true) &&
        !error?.message
      ) {
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

  const colorizeText = (stackItem: string): string => {
    const regex = /(SIG|HASH256|PUBKEY)/g

    return stackItem.replace(regex, (match) => {
      return `<span class="text-green">${match}</span>`
    })
  }

  let error = null

  return (
    <div className="flex grow flex-col text-white md:w-[50vw]">
      <div className="flex h-[calc(100vh-70px-67px)] grow flex-col text-white">
        <div className="flex h-[25vh] flex-col gap-1 border-b border-b-white px-5 py-4">
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
        <div className="flex grow flex-col px-5 ">
          <div className="flex w-full flex-row justify-between py-3">
            <p className="font-mono text-lg font-bold">Execution stack</p>

            <div className="flex flex-row gap-[10px]">
              <button
                type="button"
                className={btnClassName}
                onClick={handleRun}
                disabled={stackHistory.length === 0}
              >
                Run
              </button>
              <button
                type="button"
                className={btnClassName}
                onClick={handleStep}
                disabled={stackHistory.length === 0}
              >
                Step
              </button>
              <button
                type="button"
                className={btnClassName}
                onClick={handleReset}
                disabled={stackHistory.length === 0}
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

                <div className="flex h-full max-h-[204px] min-w-[160px] flex-col rounded-b-[10px] bg-black/20  p-2.5">
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

            {stackHistory.map((stack, opCodeIndex) => {
              if (error) {
                return null
              }
              if (stack?.error) {
                error = stack.error?.message
              }
              return (
                stack.negate === 0 && (
                  <div
                    key={`Overall-container${opCodeIndex}`}
                    className="flex flex-col"
                  >
                    <div
                      className={clsx(
                        'my-[5px] w-full rounded-[3px] border border-none bg-black/20 px-3 py-1 text-center font-space-mono text-[13px]',
                        {
                          'text-[#EF960B]':
                            stack.operation.tokenType === 'conditional',
                          'text-[#3DCFEF]':
                            stack.operation.tokenType !== 'conditional',
                          'text-[#F3241D]': stack?.error?.message,
                        }
                      )}
                    >
                      {stack.operation.value}
                    </div>

                    {stack && (
                      <div
                        key={`Container${opCodeIndex}`}
                        className="flex max-h-[405px] min-h-[204px] min-w-[160px] flex-col self-stretch overflow-y-auto rounded-b-[10px] bg-black bg-opacity-20 p-2.5"
                      >
                        <div
                          key={opCodeIndex}
                          className="mt-auto resize-none break-all border-none bg-transparent font-space-mono text-white focus:outline-none"
                          style={{ whiteSpace: 'pre-wrap' }}
                        >
                          {stack?.stack
                            ?.slice()
                            .reverse()
                            .map((item, i) => (
                              <ArcherElement
                                id={`item${opCodeIndex}-${i}`}
                                key={`item${opCodeIndex}-${i}`}
                                relations={
                                  (getRelationsTargetForOperations(
                                    stack.operation.value
                                  )?.includes(i) &&
                                    relations.filter((r) =>
                                      r.targetId.includes(
                                        `item${opCodeIndex - 1}-`
                                      )
                                    )) ||
                                  []
                                }
                              >
                                <div
                                  key={`item${i}`}
                                  id={`stackItem${i}`}
                                  className={clsx(
                                    'my-[5px] text-nowrap rounded-[3px] px-3 py-1 text-[13px]',
                                    {
                                      'bg-red/35':
                                        opCodeIndex ===
                                          executor.tokens.length &&
                                        (stack.stack.length !== 1 ||
                                          stack.stack[0] === false ||
                                          stack.error?.message),
                                      'bg-green/35':
                                        opCodeIndex ===
                                          executor.tokens.length &&
                                        stack.stack.length === 1 &&
                                        stack.stack.length === 1 &&
                                        (stack.stack[0] === true ||
                                          stack.stack[0] == 1) &&
                                        !stack.error?.message,
                                      'bg-white/15':
                                        opCodeIndex !==
                                          executor.tokens.length ||
                                        (opCodeIndex ===
                                          executor.tokens.length &&
                                          stack.stack.length === 1 &&
                                          (stack.stack[0] !== true ||
                                            stack.stack[0] != 1) &&
                                          stack.stack[0] !== false &&
                                          stack.stack[0] != 1),
                                    }
                                  )}
                                >
                                  {!isNaN(parseFloat(item)) &&
                                  isFinite(item) ? (
                                    item
                                  ) : (
                                    <span
                                      dangerouslySetInnerHTML={{
                                        __html: colorizeText(item.toString()),
                                      }}
                                    />
                                  )}
                                </div>
                              </ArcherElement>
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
