import { Dispatch, SetStateAction } from 'react'
import { SuccessNumbers } from 'ui/common/StatusBar'

export interface OpRunnerTypes {
  userScript: string[]
  success: boolean | SuccessNumbers
  setSuccess: Dispatch<SetStateAction<number | boolean>>
  children?: React.ReactNode
  finalStack?: any[]
}

export enum TokenTypes {
  CONSTANT = 'constant',
  ARITHMETIC = 'arithmetic',
  DATA_PUSH = 'data-push',
  LOCK_TIME = 'lock-time',
  CONDITIONAL = 'conditional',
  CRYPTO = 'crypto',
  BITWISE = 'bitwise',
  STACK = 'stack',
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
  errors?: Error[]
}

export interface Operation {
  tokenType?: TokenTypes | null
  resolves?: string | number | boolean | null
  value?: string | null
  type: any
}

export interface Error {
  type: string
  message: any
}
