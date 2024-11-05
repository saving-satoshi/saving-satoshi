import React, { FC, useEffect, useState, useRef } from 'react'
import HyperLink from 'shared/icons/Hyperlink'
import { Text } from 'ui/common'
import { SuccessNumbers } from 'ui/common/StatusBar'
import { SignatureType, SpendingConditions } from '.'
import LanguageExecutor from '../OpCodeChallenge/LanguageExecutor'
import { MainState, T } from '../OpCodeChallenge/runnerTypes'

interface IOutput {
  prefilled?: boolean
  output: 'output 0' | 'output 1'
  currentTransactionTab: string
  sats: string
  script: string
  progressKey: string
  tab: string
  validating: boolean
  validateScript0: SignatureType
  validateScript1: SignatureType
  initialStack: Record<'output_0' | 'output_1', SpendingConditions>
  height?: number
  nSequenceTime?: number
  answerScript: Record<'output_0' | 'output_1', string[]>
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>
  setValidateScript: React.Dispatch<React.SetStateAction<SignatureType>>
  setValidating: React.Dispatch<React.SetStateAction<boolean>>
  onScriptEmpty: (scriptInput) => void
  satsInput: { output_0: string; output_1: string }
  setSatsInput: React.Dispatch<
    React.SetStateAction<{ output_0: string; output_1: string }>
  >
  scriptInput: { output_0: string; output_1: string }
  setScriptInput: React.Dispatch<
    React.SetStateAction<{ output_0: string; output_1: string }>
  >
}
const OutputScript: FC<IOutput> = ({
  prefilled,
  progressKey,
  output,
  currentTransactionTab,
  sats,
  script,
  tab,
  validating,
  setValidating,
  answerScript,
  setValidateScript,
  initialStack,
  height,
  nSequenceTime,
  setErrorMessage,
  onScriptEmpty,
  satsInput,
  setSatsInput,
  scriptInput,
  setScriptInput,
}) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null)
  const caretPositionRef = useRef(0)
  const [passes, setPasses] = useState<MainState[]>([])
  const objectOutput = output === 'output 0' ? 'output_0' : 'output_1'
  const currentSatsInput = satsInput[objectOutput]
  const currentScriptInput = scriptInput[objectOutput]
  const [executor, setExecutor] = useState<LanguageExecutor | null>(null)

  const initializeExecutor = async (x: 0 | 1) => {
    setErrorMessage('')
    const initialStackArray = initialStack[objectOutput][x]?.filter((item) =>
      item.trim()
    )
    const tokens = LanguageExecutor.parsableInputToTokens(
      LanguageExecutor.rawInputToParsableInput(
        `INITIAL_STACK ${scriptInput[objectOutput]}`
      )
    )
    const newExecutor = new LanguageExecutor(
      tokens,
      initialStackArray || [],
      height,
      nSequenceTime
    )
    if (validating) {
      newExecutor.execute()
    }
    if (
      initialStack['output_0'][1] &&
      newExecutor.state.length > 1 &&
      validating
    ) {
      // setPasses((prev) => [...prev, newExecutor.state])
    }
    // Create an initial state to represent the initial stack
    setExecutor(newExecutor)
    let error = newExecutor.state.filter((stack) => stack.error?.message)
    if (error.length > 0) {
      setErrorMessage(`${output} : ${error[0].error?.message || ''}`)
    }
  }

  const handleSatsChange = (event) => {
    setSatsInput((prev) => ({
      ...prev,
      [objectOutput]: event.target.value,
    }))
  }

  const executeScriptAsync = async () => {
    const scriptInputString = scriptInput[objectOutput]
    // .replace(/\n/g, ' ')
    // .split(' ')
    // .filter((op) => op.trim())

    const scriptInputArray = scriptInput[objectOutput]
      .replace(/\n/g, ' ')
      .split(' ')
      .filter((op) => op.trim())
    if (currentTransactionTab === tab) {
      setPasses([])
      if (initialStack[objectOutput][1]) {
        for (let x = 0 as 0 | 1; x < 2; x++) {
          setValidateScript((prev) => ({
            ...prev,
            [`signature_${x}`]: checkChallengeSuccess(
              [
                LanguageExecutor.RunCode(
                  scriptInputString,
                  initialStack[objectOutput][x],
                  height,
                  nSequenceTime
                )?.state || [],
              ],
              scriptInputArray
            ),
          }))
        }
      } else {
        setValidateScript((prev) => ({
          ...prev,
          signature_0: checkChallengeSuccess(
            [
              LanguageExecutor.RunCode(
                scriptInputString,
                initialStack[objectOutput][0],
                height,
                nSequenceTime
              )?.state || [],
            ],
            scriptInputArray
          ),
        }))
      }
      const isPasses = passes.length > 0
      // [LanguageExecutor.RunCode(tokens.map(token =>  token.value).join(" "), initialStack[objectOutput][x], height, nSequenceTime)?.state || []]
    }
  }

  const handleScriptChange = (event) => {
    const input = event.target
    caretPositionRef.current = input.selectionStart
    setScriptInput((prev) => ({
      ...prev,
      [objectOutput]: event.target.value.toUpperCase(),
    }))
  }

  const checkChallengeSuccess = (
    runnerState: MainState[],
    tokens: string[]
  ) => {
    const containsEveryScript = () => {
      return answerScript[objectOutput].every((token) => tokens.includes(token))
    }

    const hasCorrectSats = () => {
      return satsInput[objectOutput] === sats
    }

    const doesStackValidate = (executor: MainState) => {
      let executorStack = executor?.[executor.length - 1]?.stack || []
      return (
        executorStack.length === 1 &&
        (executorStack[0] === 1 || executorStack[0] === true) &&
        !executor.some((error) => error?.error?.message)
      )
    }

    if (!scriptInput[objectOutput] || !validating) return 0
    if (initialStack['output_0'][1]) {
      const isRunnerState1 =
        runnerState[1] !== undefined ? runnerState[1] : runnerState[0]
      if (
        containsEveryScript() &&
        doesStackValidate(runnerState[0]) &&
        doesStackValidate(isRunnerState1) &&
        hasCorrectSats() &&
        runnerState.length > 0
      ) {
        return 5
      } else {
        return 2
      }
    } else if (
      containsEveryScript() &&
      doesStackValidate(runnerState[0]) &&
      hasCorrectSats()
    ) {
      return 5
    } else {
      return 2
    }
  }

  useEffect(() => {
    if (validating) {
      executeScriptAsync()
      setValidating(false)
    }
  }, [validating])

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.setSelectionRange(
        caretPositionRef.current,
        caretPositionRef.current
      )
    }
  }, [currentScriptInput, currentSatsInput])

  useEffect(() => {
    if (scriptInput[objectOutput] === '') {
      onScriptEmpty(true)
    } else {
      onScriptEmpty(false)
    }
  }, [scriptInput[objectOutput], onScriptEmpty])

  return (
    <div className="flex flex-col gap-4 rounded-md bg-black/20 p-4 text-lg">
      <Text className="capitalize">{output}</Text>

      <div className="flex flex-col">
        <Text>Sats</Text>
        <input
          placeholder="Enter Sats"
          className="bg-transparent text-white outline-none"
          onChange={handleSatsChange}
          defaultValue={
            prefilled
              ? sats
              : currentTransactionTab !== tab
              ? sats
              : satsInput[objectOutput]
          }
          readOnly={currentTransactionTab !== tab || prefilled}
        />
      </div>

      <div className="flex w-full flex-col">
        <div className="flex w-full items-center justify-between">
          <Text>Script</Text>
          <a
            target={'_blank'}
            href={`https://script.savingsatoshi.com/?lesson=${progressKey}`}
            className="cursor-pointer"
          >
            <HyperLink />{' '}
          </a>
        </div>
        <textarea
          placeholder="Enter Script"
          spellCheck="false"
          rows={3}
          value={
            prefilled
              ? Buffer.from(script || '', 'base64').toString('utf-8')
              : currentTransactionTab !== tab
              ? Buffer.from(script || '', 'base64').toString('utf-8')
              : scriptInput[objectOutput]
          }
          onChange={handleScriptChange}
          ref={textAreaRef}
          className="h-auto resize-none bg-transparent text-white outline-none"
          readOnly={currentTransactionTab !== tab || prefilled}
        />
      </div>
    </div>
  )
}

export default OutputScript
