import React, { FC, useEffect, useState, useRef } from 'react'
import HyperLink from 'shared/icons/Hyperlink'
import { Text } from 'ui/common'
import { SuccessNumbers } from 'ui/common/StatusBar'
import { sleep } from 'utils'
import { SpendingConditions } from '.'
import LanguageExecutor from '../OpCodeChallenge/LanguageExecutor'
import { MainState } from '../OpCodeChallenge/runnerTypes'

interface IOutput {
  prefilled?: boolean
  output: 'output 0' | 'output 1'
  currentTransactionTab: string
  sats: string
  script: string
  progressKey: string
  tab: string
  validating: boolean
  validateScript0: SuccessNumbers
  validateScript1: SuccessNumbers
  initialStack: Record<'output_0' | 'output_1', SpendingConditions>
  height?: number
  nSequenceTime?: number
  answerScript: Record<'output_0' | 'output_1', string[]>
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>
  setValidateScript: React.Dispatch<React.SetStateAction<SuccessNumbers>>
  setValidating: React.Dispatch<React.SetStateAction<boolean>>
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
}) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null)
  const caretPositionRef = useRef(0)
  const [passes, setPasses] = useState<MainState[]>([])
  const objectOutput = output === 'output 0' ? 'output_0' : 'output_1'
  const [satsInput, setSatsInput] = useState<string>(
    prefilled || currentTransactionTab !== tab
      ? Buffer.from(script, 'base64').toString('utf-8')
      : ''
  )
  const [executor, setExecutor] = useState<LanguageExecutor | null>(null)
  const [scriptInput, setScriptInput] = useState<string>(
    prefilled || currentTransactionTab !== tab
      ? Buffer.from(script, 'base64').toString('utf-8')
      : ''
  )

  const initializeExecutor = async (x: 0 | 1) => {
    setErrorMessage('')
    const initialStackArray = initialStack[objectOutput][x]?.filter((item) =>
      item.trim()
    )
    const tokens = LanguageExecutor.parsableInputToTokens(
      LanguageExecutor.rawInputToParsableInput(`INITIAL_STACK ${scriptInput}`)
    )
    const newExecutor = new LanguageExecutor(
      tokens,
      initialStackArray || [],
      height,
      nSequenceTime
    )
    newExecutor.execute()
    if (
      initialStack[objectOutput][1] &&
      newExecutor.state.length > 1 &&
      validating
    ) {
      setPasses((prev) => [...prev, newExecutor.state])
    }
    // Create an initial state to represent the initial stack
    setExecutor(newExecutor)
    let error = newExecutor.state.filter((stack) => stack.error?.message)
    if (error.length > 0) {
      setErrorMessage(`${output} : ${error[0].error?.message || ''}`)
    }
  }
  const handleSatsChange = (event) => {
    setSatsInput(event.target.value.toUpperCase())
  }

  const executeScriptAsync = async () => {
    if (currentTransactionTab === tab) {
      setPasses([])
      if (initialStack[objectOutput][1]) {
        for (let x = 0 as 0 | 1; x < 2; x++) {
          await initializeExecutor(x)
        }
      } else {
        await initializeExecutor(0)
      }

      setValidateScript(checkChallengeSuccess())
    }
  }

  const handleScriptChange = (event) => {
    const input = event.target
    caretPositionRef.current = input.selectionStart
    setScriptInput(event.target.value.toUpperCase())
  }

  const checkChallengeSuccess = () => {
    const filterToStringArray = scriptInput.split(' ').filter((op) => op.trim())

    const containsEveryScript = () => {
      return answerScript[objectOutput].every((token) =>
        filterToStringArray.includes(token)
      )
    }

    const hasCorrectSats = () => {
      return satsInput === sats
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

    const doesStackValidate = (executor: MainState) => {
      let executorStack = executor?.[executor.length - 1]?.stack || []
      return (
        executor?.length === isFinalToken() &&
        executorStack.length === 1 &&
        (executorStack[0] === 1 || executorStack[0] === true) &&
        !executor.some((error) => error?.error?.message)
      )
    }
    if (!scriptInput) return 0
    console.log(
      doesStackValidate(passes[0]),
      doesStackValidate(passes[1]),
      passes
    )
    if (initialStack[objectOutput][1]) {
      if (
        containsEveryScript() &&
        doesStackValidate(passes[0]) &&
        doesStackValidate(passes[1]) &&
        hasCorrectSats() &&
        passes.length > 0
      ) {
        return 5
      } else {
        return 2
      }
    } else if (
      containsEveryScript() &&
      doesStackValidate(executor?.state || []) &&
      hasCorrectSats()
    ) {
      return 5
    } else {
      return 2
    }
  }

  useEffect(() => {
    executeScriptAsync()
    setValidating(false)
  }, [validating])

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.setSelectionRange(
        caretPositionRef.current,
        caretPositionRef.current
      )
    }
  }, [scriptInput])

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
            prefilled ? sats : currentTransactionTab !== tab ? sats : ''
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
              : scriptInput
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
