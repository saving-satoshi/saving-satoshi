import React, { FC, useEffect, useState, useRef } from 'react'
import HyperLink from 'shared/icons/Hyperlink'
import { Text } from 'ui/common'
import { SuccessNumbers } from 'ui/common/StatusBar'
import { sleep } from 'utils'
import LanguageExecutor from '../OpCodeChallenge/LanguageExecutor'

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
  initialStack: Record<'output_0' | 'output_1', string[]>
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
  validateScript0,
  validateScript1,
  setValidating,
  answerScript,
  setValidateScript,
  initialStack,
  setErrorMessage,
}) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null)
  const caretPositionRef = useRef(0)
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
  const initializeExecutor = async () => {
    setErrorMessage('')
    const initialStackArray = initialStack[objectOutput].filter((item) =>
      item.trim()
    )
    const tokens = LanguageExecutor.parsableInputToTokens(
      LanguageExecutor.rawInputToParsableInput(`INITIAL_STACK ${scriptInput}`)
    )
    const newExecutor = new LanguageExecutor(tokens, initialStackArray)
    newExecutor.execute()
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
      await initializeExecutor()
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

    const doesStackValidate = () => {
      return (
        executor?.state.length === isFinalToken() &&
        executor?.stack.length === 1 &&
        (executor.stack[0] === 1 || executor.stack[0] === true) &&
        !executor.state.some((error) => error?.error?.message)
      )
    }
    if (!scriptInput) return 0
    if (containsEveryScript() && doesStackValidate() && hasCorrectSats()) {
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
          spellcheck="false"
          value={
            prefilled
              ? Buffer.from(script || '', 'base64').toString('utf-8')
              : currentTransactionTab !== tab
              ? Buffer.from(script || '', 'base64').toString('utf-8')
              : scriptInput
          }
          onChange={handleScriptChange}
          ref={textAreaRef}
          className="resize-none bg-transparent text-white outline-none"
          readOnly={currentTransactionTab !== tab || prefilled}
        />
      </div>
    </div>
  )
}

export default OutputScript
