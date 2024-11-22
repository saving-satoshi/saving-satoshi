import React, { FC, useEffect, useRef } from 'react'
import HyperLink from 'shared/icons/Hyperlink'
import { Text } from 'ui/common'
import { SignatureType, SpendingConditions } from '.'
import LanguageExecutor from '../OpCodeChallenge/LanguageExecutor'
import { MainState } from '../OpCodeChallenge/runnerTypes'
import { finalAnswerOutput } from 'utils/data'

interface IOutput {
  prefilled?: boolean
  prefilledEditable?: boolean
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
  const objectOutput = output === 'output 0' ? 'output_0' : 'output_1'
  const currentScriptInput = scriptInput[objectOutput]

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
      return LanguageExecutor.RunCode(
        scriptInput['output_0'],
        initialStack['output_0'][index],
        height,
        nSequenceTime
      )?.state.filter((stack) => stack.error?.message)[0]?.error?.message
    }
    const getErrorMessageOutputOne = (index: number) => {
      return LanguageExecutor.RunCode(
        scriptInput['output_1'],
        initialStack['output_1'][index],
        height,
        nSequenceTime
      )?.state.filter((stack) => stack.error?.message)[0]?.error?.message
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
    setSatsInput((prev) => ({
      ...prev,
      [objectOutput]: event.target.value,
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
  const getDefaultSats = () => {
    if (step === 0 && prefilledEditable) {
      if (tab === nextTransactionTab) {
        return sats
      }
      if (tab === currentTransactionTab) {
        return sats
      }
    }
    if (step === 1 && answerSats && prefilledEditable) {
      if (tab === currentTransactionTab) {
        return answerSats[objectOutput]
      }
      if (tab === nextTransactionTab) {
        return sats
      }
    }
    if (!prefilledEditable && currentTransactionTab === tab && !prefilled) {
      return satsInput[objectOutput]
    } else if (!prefilledEditable && currentTransactionTab !== tab) {
      return sats
    }
    return sats
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
        [objectOutput]: Buffer.from(script || '', 'base64').toString('utf-8'),
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
          className="bg-transparent text-white outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          onChange={handleSatsChange}
          pattern="[0-9]+([\.,][0-9]+)?"
          defaultValue={getDefaultSats()}
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
          defaultValue={
            prefilled || (prefilledEditable && step === 0)
              ? Buffer.from(script || '', 'base64').toString('utf-8')
              : currentTransactionTab !== tab
              ? Buffer.from(script || '', 'base64').toString('utf-8')
              : prefilledEditable &&
                step === 1 &&
                nextTransactionTab !== tab &&
                answerSats
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
            (prefilledEditable &&
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
