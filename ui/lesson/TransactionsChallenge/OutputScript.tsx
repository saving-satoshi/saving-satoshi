import React, { FC, useEffect, useRef, useState } from 'react'
import HyperLink from 'shared/icons/Hyperlink'
import { TransactionData } from 'types'
import { Text } from 'ui/common'
import transactionTabs from 'utils/data.json'
import { SignatureType, SpendingConditions } from '.'
import LanguageExecutor from '../OpCodeChallenge/LanguageExecutor'
import { MainState } from '../OpCodeChallenge/runnerTypes'

const finalAnswerOutput = {
  output_0:
    'T1BfSUYgT1BfUFVTSCA3MDAgT1BfQ0hFQ0tTRVFVRU5DRVZFUklGWSBPUF9EUk9QIE9QX1BVU0ggUFVCS0VZKExBU1pMTykgT1BfQ0hFQ0tTSUcgT1BfRUxTRSBPUF8yIE9QX1BVU0ggUFVCS0VZKFJFVk9DQVRJT05fTEFTWkxPXzIpIE9QX1BVU0ggUFVCS0VZKFlPVSkgT1BfMiBPUF9DSEVDS01VTFRJU0lHIE9QX0VORElG',
  output_1: 'T1BfUFVTSCBQVUJLRVkoWU9VKSBPUF9DSEVDS1NJRw==',
}

interface IOutput {
  prefilled?: boolean
  prefilledEditable?: boolean | string
  output: 'output 0' | 'output 1'
  step: number
  currentTransactionTab: string
  nextTransactionTab?: string
  answerSats?: Record<'output_0' | 'output_1', string>
  answerSatsMirrored?: Record<'output_0' | 'output_1', string>
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
  prefilledEditable,
  progressKey,
  output,
  step,
  currentTransactionTab,
  nextTransactionTab,
  answerSats,
  answerSatsMirrored,
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
  const [satsExceededWarning, setSatsExceededWarning] = useState(false)
  const objectOutput = output === 'output 0' ? 'output_0' : 'output_1'
  const currentScriptInput = scriptInput[objectOutput]
  const tabJSON: TransactionData = transactionTabs
  const allTabsData = Object.entries(tabJSON)
  const prefillData =
    typeof prefilledEditable === 'string' &&
    allTabsData
      .map((tabData) => tabData[0] === prefilledEditable && tabData)
      .filter((data) => typeof data !== 'boolean')[0]

  const executeScriptAsync = async () => {
    const scriptInputString = scriptInput[objectOutput]

    const scriptInputArray = scriptInput[objectOutput]
      .replace(/\n/g, ' ')
      .split(' ')
      .filter((op) => op.trim())
    if (currentTransactionTab === tab) {
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
    } else if (step === 1 && nextTransactionTab === tab) {
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
    }

    const getErrorMessageOutputZero = (index: number) => {
      if (initialStack[objectOutput][index]?.length > 0) {
        return LanguageExecutor.RunCode(
          scriptInput['output_0'],
          initialStack['output_0'][index],
          height,
          nSequenceTime
        )?.state.filter((stack) => stack.error?.message)[0]?.error?.message
      }
    }
    const getErrorMessageOutputOne = (index: number) => {
      if (initialStack[objectOutput][index]?.length > 0) {
        return LanguageExecutor.RunCode(
          scriptInput['output_1'],
          initialStack['output_1'][index],
          height,
          nSequenceTime
        )?.state.filter((stack) => stack.error?.message)[0]?.error?.message
      }
    }
    const errorMessageOutput0 =
      getErrorMessageOutputZero(0) || getErrorMessageOutputZero(1)
    const errorMessageOutput1 = getErrorMessageOutputOne(0)

    if (errorMessageOutput0) {
      setErrorMessage(`Output 0: ${errorMessageOutput0}`)
    } else if (errorMessageOutput1) {
      setErrorMessage(`Output 1: ${errorMessageOutput1}`)
    } else {
      setErrorMessage('')
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

  const handleSatsChange = (event) => {
    const value = event.target.value
    // Only allow numbers
    if (value !== '' && !/^\d+$/.test(value)) {
      return
    }
    // Enforce maximum value of 101,000
    const numValue = parseInt(value, 10)
    if (numValue > 101000) {
      setSatsExceededWarning(true)
      setTimeout(() => setSatsExceededWarning(false), 2000)
      return
    }
    // Clear warning if valid
    setSatsExceededWarning(false)
    setSatsInput((prev) => ({
      ...prev,
      [objectOutput]: value,
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
      if (answerSats && answerSatsMirrored) {
        const isCorrect =
          (step === 0 &&
            satsInput[objectOutput] === answerSats[objectOutput]) ||
          (step === 1 &&
            satsInput[objectOutput] === answerSatsMirrored[objectOutput])

        if (!isCorrect) {
          setErrorMessage('Make sure the sats are distributed correctly')
        }

        return isCorrect
      }
      if (satsInput[objectOutput] !== sats) {
        setErrorMessage('Make sure the sats are distributed correctly')
      }
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
  }, [currentScriptInput])

  useEffect(() => {
    if (scriptInput[objectOutput] === '') {
      onScriptEmpty(true)
    } else {
      onScriptEmpty(false)
    }
  }, [scriptInput[objectOutput], onScriptEmpty])

  useEffect(() => {
    if (prefilledEditable) {
      setSatsInput((prev) => ({
        ...prev,
        [objectOutput]: sats,
      }))
      setScriptInput((prev) => ({
        ...prev,
        [objectOutput]: Buffer.from(
          typeof prefilledEditable === 'boolean'
            ? script
            : prefillData[1][objectOutput].script || '',
          'base64'
        ).toString('utf-8'),
      }))
    }
  }, [prefilledEditable])

  return (
    <div className="flex flex-col gap-4 rounded-md bg-black/20 p-4 text-lg">
      <Text className="capitalize">{output}</Text>

      <div className="flex w-fit flex-col">
        <Text className="w-fit">Sats</Text>
        <input
          placeholder="Enter Sats"
          inputMode="numeric"
          className={`bg-transparent text-white outline-none transition-all [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none ${
            satsExceededWarning
              ? 'border-red-500 border-b-2'
              : 'border-b-2 border-transparent'
          }`}
          value={
            prefilled
              ? sats
              : currentTransactionTab !== tab && !prefilledEditable
              ? sats
              : typeof prefilledEditable === 'boolean' &&
                currentTransactionTab === tab &&
                step === 1
              ? answerSatsMirrored && answerSatsMirrored[objectOutput]
              : satsInput[objectOutput]
          }
          onChange={handleSatsChange}
          pattern="[0-9]+"
          readOnly={
            (prefilledEditable &&
              !(
                (nextTransactionTab === tab && step === 1) ||
                (currentTransactionTab === tab && step === 0)
              )) ||
            (!prefilledEditable && currentTransactionTab !== tab) ||
            !!prefilled
          }
        />
        {satsExceededWarning && (
          <Text className="text-red-500 mt-1 animate-pulse text-xs">
            Maximum value is 101,000 sats
          </Text>
        )}
      </div>

      <div className="flex flex-col">
        <div className="flex items-center justify-between">
          <Text>Script</Text>
          <a
            target={'_blank'}
            href={`https://script.savingsatoshi.com/?lesson=${progressKey}`}
            className="cursor-pointer"
          >
            <HyperLink />
          </a>
        </div>
        <textarea
          placeholder="Enter Script"
          spellCheck="false"
          rows={3}
          value={
            prefilled
              ? Buffer.from(script || '', 'base64').toString('utf-8')
              : currentTransactionTab !== tab && !prefilledEditable
              ? Buffer.from(script || '', 'base64').toString('utf-8')
              : typeof prefilledEditable === 'boolean' &&
                currentTransactionTab === tab &&
                step === 1
              ? Buffer.from(
                  finalAnswerOutput[objectOutput] || '',
                  'base64'
                ).toString('utf-8')
              : scriptInput[objectOutput]
          }
          onChange={handleScriptChange}
          ref={textAreaRef}
          className="min-h-8 resize-y bg-transparent text-white outline-none"
          readOnly={
            (typeof prefilledEditable === 'boolean' &&
              !(
                (nextTransactionTab === tab && step === 1) ||
                (currentTransactionTab === tab && step === 0)
              )) ||
            (!prefilledEditable && currentTransactionTab !== tab) ||
            !!prefilled
          }
        />
      </div>
    </div>
  )
}

export default OutputScript
