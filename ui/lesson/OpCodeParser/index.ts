import { OpCodeTypes, opFunctions } from './OPFunctions'

export enum TokenTypes {
  CONSTANT = 'constant',
  ARITHMETIC = 'arithmetic',
  DATA_PUSH = 'data-push',
  LOCK_TIME = 'lock-time',
  CONDITIONAL = 'conditional',
  CRYPTO = 'crypto',
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

class LanguageExecutor {
  tokens: T
  stack: StackType
  height?: number | null
  conditionalState: Array<boolean>
  negate: number
  // initial state
  public state: MainState = [
    {
      stack: [],
      operation: {
        tokenType: null,
        resolves: null,
        value: null,
        type: null,
      },
      step: 0,
      negate: 0,
      height: null,
      errors: [
        {
          type: '',
          message: null,
        },
      ],
    },
  ]

  public static rawInputToParsableInput(input: string): Array<string | number> {
    return input.split(' ')
  }

  public static parsableInputToTokens(input: Array<string | number>): T {
    const tokens: T = input.map((operation: string) => {
      const resolveValue = opFunctions?.[operation]
        ? opFunctions[operation]()
        : null
      return {
        type: OpCodeTypes[operation] || '',
        resolves: resolveValue,
        value: operation,
      }
    })

    return tokens
  }

  public static RunCode(
    script: string,
    initialStack?: string,
    height?: number
  ): LanguageExecutor {
    const parsableInput = this.rawInputToParsableInput(script)
    const tokens = this.parsableInputToTokens(parsableInput)
    const langExecutor = new LanguageExecutor(tokens, height)
    langExecutor.execute()

    return langExecutor
  }
  constructor(tokens: T, height?: number) {
    this.tokens = tokens
    this.state = []
    this.stack = []
    this.height = height ?? 0
    this.conditionalState = []
    this.negate = 0
  }

  execute() {
    if (!this.tokens) return this.state
    for (let index = 0; index < this.tokens.length; index++) {
      const element = this.tokens[index]
      const currentStack = this.stack
      const currentState = this.state[index - 1]
      const currentNegate = this.negate
      let addToState: State
      let value: any

      switch (element.type) {
        case TokenTypes.CONSTANT:
          if (this.negate === 0) {
            this.stack.push(element.resolves)
          }
          addToState = {
            stack: [...currentStack],
            operation: {
              tokenType: TokenTypes.CONSTANT,
              resolves: element.resolves,
              value: element.value,
              type: element.type,
            },
            negate: currentNegate,
            step: index,
          }
          this.state.push(addToState)
          break

        case TokenTypes.ARITHMETIC:
          if (this.negate === 0) {
            value = opFunctions[element.value](this.stack)
            this.stack.push(value)
          }
          addToState = {
            stack: [...currentStack],
            operation: {
              tokenType: TokenTypes.CONSTANT,
              resolves: element.resolves,
              value: element.value,
              type: element.type,
            },
            step: index,
            negate: currentNegate,
          }
          this.state.push(addToState)
          break

        case TokenTypes.DATA_PUSH:
          if (this.negate === 0) {
            value = opFunctions[element.value](this.stack, this.tokens, index)
            this.stack.push(value)
          }
          addToState = {
            stack: [...currentStack],
            operation: {
              tokenType: TokenTypes.DATA_PUSH,
              resolves: element.resolves,
              value: element.value,
              type: element.type,
            },
            step: index,
            negate: currentNegate,
          }
          this.state.push(addToState)
          index++
          break

        case TokenTypes.LOCK_TIME:
          if (this.negate === 0) {
            value = opFunctions[element.value](this.stack, this.height)
          }
          addToState = {
            stack: [...currentStack],
            operation: {
              tokenType: TokenTypes.LOCK_TIME,
              resolves: element.resolves,
              value: element.value,
              type: element.type,
            },
            negate: currentNegate,
            step: index,
          }
          this.state.push(addToState)
          break

        case TokenTypes.CONDITIONAL:
          value = opFunctions[element.value](
            this.stack,
            this.conditionalState,
            this.negate
          )
          addToState = {
            stack: [...currentStack],
            operation: {
              tokenType: TokenTypes.CONDITIONAL,
              resolves: element.resolves,
              value: element.value,
              type: element.type,
            },
            negate: value,
            step: index,
          }
          this.negate = value
          this.state.push(addToState)
          break

        case TokenTypes.CRYPTO:
          if (this.negate === 0) {
            value = opFunctions[element.value](this.stack)
            this.stack.push(value)
          }
          addToState = {
            stack: [...currentStack],
            operation: {
              tokenType: TokenTypes.CRYPTO,
              resolves: element.resolves,
              value: element.value,
              type: element.type,
            },
            negate: value,
            step: index,
          }
          this.state.push(addToState)
          break

        default:
          break
      }
      console.log(this.state, this.stack, 'after')
      if (index === this.tokens.length - 1) {
        if (this.conditionalState.length !== 0) {
          throw new Error('SCRIPT_ERR: Unbalanced conditional')
        }
      }
    }
  }
}

export default LanguageExecutor
