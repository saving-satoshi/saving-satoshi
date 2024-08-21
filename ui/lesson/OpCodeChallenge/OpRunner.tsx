import React, { useEffect, useState, useRef, useCallback } from 'react'
import clsx from 'clsx'
import LanguageExecutor from './LanguageExecutor'
import _ from 'lodash'
import { StatusBar, useLessonContext, ScratchDnD } from 'ui'
import { SuccessNumbers } from 'ui/common/StatusBar'
import { LessonView } from 'types'
import { MainState, OpRunnerTypes, StackType, State, T } from './runnerTypes'
import { ArcherElement } from 'react-archer'
import { RelationType } from 'react-archer/lib/types'
import { useArrows } from 'state/ArrowsContext'
import { useHorizontalScroll, useLang, useTranslations } from 'hooks'
import { sleep } from 'utils'
import { motion, AnimatePresence } from 'framer-motion'

const arrowLineStyles = {
  startMarker: true,
  endMarker: false,
  strokeColor: '#3DCFEF',
  strokeWidth: 1.25,
}

const cardVariants = {
  hidden: { opacity: 0, y: -100 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -100 },
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
    case 'OP_CHECKSIG':
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
    case 'OP_HASH256':
      return [
        {
          targetId: `item${currentIndex}-0`,
          sourceAnchor: 'left',
          targetAnchor: 'right',
          style: arrowLineStyles,
        },
      ]
    // Only works with a 2 of 2
    case 'OP_CHECKMULTISIG':
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
        {
          targetId: `item${currentIndex}-2`,
          sourceAnchor: 'left',
          targetAnchor: 'right',
          style: arrowLineStyles,
        },
        {
          targetId: `item${currentIndex}-3`,
          sourceAnchor: 'left',
          targetAnchor: 'right',
          style: arrowLineStyles,
        },
        {
          targetId: `item${currentIndex}-4`,
          sourceAnchor: 'left',
          targetAnchor: 'right',
          style: arrowLineStyles,
        },
        {
          targetId: `item${currentIndex}-5`,
          sourceAnchor: 'left',
          targetAnchor: 'right',
          style: arrowLineStyles,
        },
        {
          targetId: `item${currentIndex}-6`,
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
    case 'OP_HASH256':
    case 'OP_CHECKSIG':
    case 'OP_CHECKMULTISIG':
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
  advancedChallenge,
  initialHeight,
  initialStackSuccess,
  nextStepMessage,
}: Omit<OpRunnerTypes, 'children'>) => {
  const lang = useLang()
  const t = useTranslations(lang)
  const scrollRef = useRef<HTMLDivElement>(null)
  const btnClassName =
    'bg-black/10 py-[3px] px-2.5 rounded-[3px] text-white font-space-mono disabled:opacity-25'
  const [script, setScript] = useState(
    prePopulate ? answerScript.join(' ') : ''
  )
  const { activeView } = useLessonContext()
  const isActive = activeView === LessonView.Code
  const [initialStack, setInitialStack] = useState('')
  const [step, setStep] = useState<number>(1)
  const [height, setHeight] = useState<number | undefined>(
    initialHeight ?? undefined
  )
  const [lastSuccessState, setLastSuccessState] = useState<
    SuccessNumbers | boolean
  >(0)
  const [stateHistory, setStateHistory] = useState<MainState | []>([])
  const [startedTyping, setStartedTyping] = useState(false)
  const { ref: arrowContainerRef } = useArrows()
  const scrollPosition = useHorizontalScroll(scrollRef)

  const [executor, setExecutor] = useState<LanguageExecutor | null>(null)

  const redrawArrows = useCallback(() => {
    if (arrowContainerRef?.current) {
      arrowContainerRef.current.refreshScreen()
    }
  }, [arrowContainerRef])

  const handleAnimationComplete = useCallback(() => {
    redrawArrows()
  }, [redrawArrows])

  const initializeExecutor = () => {
    const initialStackArray = initialStack
      .split(' ')
      .filter((item) => item.trim())
    const tokens = LanguageExecutor.parsableInputToTokens(
      LanguageExecutor.rawInputToParsableInput(`INITIAL_STACK ${script}`)
    )
    const newExecutor = new LanguageExecutor(tokens, initialStackArray, height)

    // Create an initial state to represent the initial stack
    setExecutor(newExecutor)
    setStateHistory([])
    setStartedTyping(true)
  }

  const executeStepWithDelay = async (delay: number) => {
    if (executor && executor.tokens.length > executor.currentIndex) {
      const state = executor.executeStep()
      if (state) {
        setStateHistory((prev) => {
          const newStateHistory = [...prev, state]
          const successState = checkSuccessState(
            executor.tokens,
            newStateHistory,
            state?.stack
          )
          setLastSuccessState(successState)
          return newStateHistory
        })
        if (state.negate === 0) {
          await sleep(delay)
        }
        executeStepWithDelay(delay)
      }
    }
  }

  const handleStep = () => {
    initializeExecutor()
  }

  useEffect(() => {
    // if user scrolls horizontally, refresh the arrows position
    if (arrowContainerRef?.current) {
      arrowContainerRef.current.refreshScreen()
    }
  }, [arrowContainerRef, scrollPosition])

  useEffect(() => {
    if (
      (startedTyping && !advancedChallenge && initialStack) ||
      (startedTyping && advancedChallenge && initialStack)
    ) {
      const timeoutId = setTimeout(() => {
        handleStep()
      }, 1000)

      return () => clearTimeout(timeoutId)
    }
  }, [script, initialStack, height])

  useEffect(() => {
    if (executor && startedTyping) {
      executeStepWithDelay(500)
    }
  }, [executor, startedTyping])

  const [relations, setRelations] = useState<RelationType[]>([])

  useEffect(() => {
    if (stateHistory.length > 1) {
      const newRelations = stateHistory
        .slice(1)
        .flatMap((stack, index) =>
          getRelationsSourceForOperation(stack?.operation?.value ?? '', index)
        )
      setRelations(newRelations)
    }
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollRef.current.scrollWidth
    }
  }, [stateHistory])

  const handleScriptChange = (event) => {
    if (!advancedChallenge || (advancedChallenge && step === 1)) {
      setScript(event.target.value.toUpperCase())
      setStartedTyping(true)
    }
  }

  const handleDnDData = (data) => {
    if (!advancedChallenge || (advancedChallenge && step === 1)) {
      setScript(data.join(' ').toUpperCase())
      setStartedTyping(true)
    }
  }

  const handleInitialStackChange = (event) => {
    setInitialStack(event.target.value.toUpperCase())
    setStartedTyping(true)
  }

  const handleHeightChange = (event) => {
    if (!initialHeight) {
      setHeight(
        isNaN(parseInt(event.target.value)) ? 0 : parseInt(event.target.value)
      )
      setStartedTyping(true)
    }
  }

  const isFinalToken = () => {
    let length = executor?.tokens.length ?? 0
    executor?.tokens.forEach((PUSH) => {
      if (PUSH.value === 'OP_PUSH' && length !== 0) {
        length--
      }
    })

    return length
  }

  const checkSuccessState = (tokens: T, state: State[], stack: StackType) => {
    const filterToStringArray = tokens.map((token) => token.value)
    const containsEveryScript = answerScript.every((token) =>
      filterToStringArray.includes(token)
    )

    const doesStackValidate = () => {
      return (
        state.length === isFinalToken() &&
        stack.length === 1 &&
        (stack[0] === 1 || stack[0] === true) &&
        !state.some((error) => error?.error?.message)
      )
    }

    const isStackCorrectSoFar = () => {
      return (
        state.length !== isFinalToken() &&
        !state.some((error) => error?.error?.message)
      )
    }

    if (
      (containsEveryScript && doesStackValidate() && !advancedChallenge) ||
      (containsEveryScript &&
        doesStackValidate() &&
        advancedChallenge &&
        step === 2 &&
        initialStack === initialStackSuccess)
    ) {
      return true
    } else if (
      containsEveryScript &&
      doesStackValidate() &&
      advancedChallenge &&
      step == 1
    ) {
      setStep(2)
      initialHeight && height && setHeight(height + 1)
      setInitialStack('')
      return 6
    } else if (
      containsEveryScript &&
      doesStackValidate() &&
      advancedChallenge &&
      step == 2 &&
      initialStack !== initialStackSuccess
    ) {
      return 3
    } else if (success !== true && isStackCorrectSoFar()) {
      return 1
    } else if (success !== true) {
      return 2
    } else {
      return success
    }
  }

  useEffect(() => {
    if (lastSuccessState !== null) {
      setSuccess(lastSuccessState)
    }
  }, [lastSuccessState])

  const handleTryAgain = () => {
    setSuccess(0)
    setStep(1)
    initialHeight && height && setHeight(height - 1)
    setStateHistory([])
  }

  const colorizeText = (stackItem: string): string => {
    const regex = /(SIG|HASH256|PUBKEY)/g

    return stackItem.replace(regex, (match) => {
      return `<span class="text-green">${match}</span>`
    })
  }

  let error = null

  return (
    <div
      className={clsx('grow flex-col text-white md:w-[50vw]', {
        'hidden md:flex': !isActive,
        flex: isActive,
      })}
    >
      <div className="flex h-[calc(100vh-70px-67px)] grow flex-col text-white">
        <div className="flex h-[25vh] flex-col gap-1 border-b border-b-white px-5 py-4">
          <p className="font-space-mono text-lg font-bold capitalize ">
            Your Script
          </p>
          {/*<textarea
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
          />*/}
          <ScratchDnD
            items={answerScript}
            prePopulate={prePopulate}
            onItemsUpdate={handleDnDData}
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
              value={initialStack}
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
              value={height}
              className="flex-grow border-none bg-transparent text-lg [appearance:textfield] focus:outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              placeholder="6930001"
              type="number"
              min="1"
            />
          </div>
        </div>
        <div className="flex grow flex-col px-5 ">
          <div className="flex w-full flex-row justify-between py-3">
            <p className="font-mono text-lg font-bold">Execution Stack</p>
          </div>
          <div
            ref={scrollRef}
            className="mb-auto flex h-full w-full flex-row gap-2.5 overflow-scroll py-2"
          >
            {stateHistory.length === 0 && (
              <div className="flex w-full max-w-[164px] flex-col">
                <div className="my-[5px] w-full rounded-[3px] bg-black/20 px-3 py-1 text-center font-space-mono text-white/50">
                  OP_CODES
                </div>

                <div className="flex h-full max-h-[204px] min-w-[160px] flex-col rounded-b-[10px] bg-black/20  p-2.5">
                  <div
                    className="my-auto resize-none break-all border-none bg-transparent font-space-mono text-white/50 focus:outline-none"
                    style={{ whiteSpace: 'pre-wrap' }}
                  >
                    <div className="text-center text-[13px]">
                      {
                        'The resulting \n stack will be \n visualized \n here...'
                      }
                    </div>
                  </div>
                </div>
              </div>
            )}
            <AnimatePresence>
              {stateHistory.map((stack, opCodeIndex) => {
                if (error) {
                  return null
                }
                if (stack?.error) {
                  error = stack.error?.message
                }
                return (
                  stack.negate === 0 && (
                    <motion.div
                      key={`Overall-container${opCodeIndex}`}
                      id={`Overall-container${opCodeIndex}`}
                      className="flex flex-col"
                      variants={cardVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      transition={{ duration: 0.3, delay: opCodeIndex * 0.1 }}
                      onUpdate={handleAnimationComplete}
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
                                  <motion.div
                                    key={`stackItem${i}`}
                                    id={`stackItem${i}`}
                                    className={clsx(
                                      'my-[5px] text-nowrap rounded-[3px] px-3 py-1 text-[13px]',
                                      {
                                        'bg-red/35':
                                          stack.error.message !== null ||
                                          (opCodeIndex === isFinalToken() - 1 &&
                                            (stack.stack.length !== 1 ||
                                              stack.stack[0] === false ||
                                              stack.error?.message)),
                                        'bg-green/35':
                                          stack.error.message === null &&
                                          opCodeIndex === isFinalToken() - 1 &&
                                          stack.stack.length === 1 &&
                                          stack.stack.length === 1 &&
                                          (stack.stack[0] === true ||
                                            stack.stack[0] == 1) &&
                                          !stack.error?.message,
                                        'bg-white/15':
                                          (stack.error.message === null &&
                                            opCodeIndex !==
                                              isFinalToken() - 1) ||
                                          opCodeIndex === 0 ||
                                          (opCodeIndex ===
                                            stateHistory.length &&
                                            stack.stack.length === 1 &&
                                            Number(stack.stack[0]) > 1),
                                      }
                                    )}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{
                                      duration: 0.2,
                                      delay: i * 0.05,
                                    }}
                                    onUpdate={handleAnimationComplete}
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
                                  </motion.div>
                                </ArcherElement>
                              ))}
                          </div>
                        </div>
                      )}
                    </motion.div>
                  )
                )
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <StatusBar
        handleTryAgain={handleTryAgain}
        className="h-14 min-h-14 grow"
        errorMessage={error || ''}
        success={success}
        hints
        nextStepMessage={nextStepMessage}
        nextStepButton={nextStepMessage ? t('opcode.reset') : undefined}
      />
    </div>
  )
}

export default OpRunner
