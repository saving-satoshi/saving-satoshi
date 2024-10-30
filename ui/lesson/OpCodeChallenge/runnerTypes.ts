import { Dispatch, SetStateAction } from 'react'
import { SuccessNumbers } from 'ui/common/StatusBar'

export interface OpRunnerTypes {
  lang: any
  answerScript: string[]
  success: boolean | SuccessNumbers
  setSuccess: Dispatch<SetStateAction<number | boolean>>
  children?: React.ReactNode
  readOnly?: boolean
  prePopulate?: boolean
  advancedChallenge?: boolean
  initialHeight?: number
  initialStackScript?: string[]
  nextStepMessage?: string
}

export enum TokenTypes {
  INITIAL_STACK = 'initial-stack',
  CONSTANT = 'constant',
  ARITHMETIC = 'arithmetic',
  DATA_PUSH = 'data-push',
  LOCK_TIME = 'lock-time',
  CONDITIONAL = 'conditional',
  CRYPTO = 'crypto',
  BITWISE = 'bitwise',
  STACK = 'stack',
  DEFAULT = 'default',
}
interface Token {
  type: TokenTypes
  resolves: string | number | boolean | null
  value: string
}

export type T = Array<Token>
type ScriptType = Array<string | boolean | number | null>
export type MainState = State[]

export type StackType = Array<string | boolean | number | null>
export interface State {
  stack: any[]
  operation: Operation
  step: number
  negate: number
  height?: number | null
  nSequenceTime?: number | null
  error?: RunnerError
}

export interface Operation {
  tokenType?: TokenTypes | null
  resolves?: string | number | boolean | null
  value?: string | null
  type: any
}

export interface RunnerError {
  type: string
  message: string | null
}
