import { OpCodeTypes, opFunctions } from './OPFunctions'

export enum TokenTypes {
  CONSTANT = 'constant',
  ARITHMETIC = 'arithmetic',
  DATA_PUSH = 'data-push',
  LOCK_TIME = 'lock-time',
  CONDITIONAL = 'conditional',
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
  }

  execute() {
    if (!this.tokens) return this.state
    for (let index = 0; index < this.tokens.length; index++) {
      const element = this.tokens[index]
      const currentStack = this.stack
      const currentState = this.state[index - 1]

      let addToState: State
      let value: any
      switch (element.type) {
        case TokenTypes.CONSTANT:
          this.stack.push(element.resolves)
          addToState = {
            stack: [...currentStack],
            operation: {
              tokenType: TokenTypes.CONSTANT,
              resolves: element.resolves,
              value: element.value,
              type: element.type,
            },
            negate: currentState?.negate,
            step: index,
          }
          this.state.push(addToState)
          break

        case TokenTypes.ARITHMETIC:
          value = opFunctions[element.value](this.stack)
          this.stack.push(value)
          addToState = {
            stack: [...currentStack],
            operation: {
              tokenType: TokenTypes.CONSTANT,
              resolves: element.resolves,
              value: element.value,
              type: element.type,
            },
            step: index,
            negate: currentState?.negate,
          }
          this.state.push(addToState)
          break
        case TokenTypes.DATA_PUSH:
          value = opFunctions[element.value](this.stack, this.tokens, index)
          this.stack.push(value)
          addToState = {
            stack: [...currentStack],
            operation: {
              tokenType: TokenTypes.DATA_PUSH,
              resolves: element.resolves,
              value: element.value,
              type: element.type,
            },
            step: index,
            negate: currentState?.negate,
          }
          this.state.push(addToState)
          index++
          break
        case TokenTypes.LOCK_TIME:
          value = opFunctions[element.value](this.stack, this.height)
          //this.stack.push(value);
          addToState = {
            stack: [...currentStack],
            operation: {
              tokenType: TokenTypes.LOCK_TIME,
              resolves: element.resolves,
              value: element.value,
              type: element.type,
            },
            negate: currentState?.negate,
            step: index,
          }
          this.state.push(addToState)
          break
        case TokenTypes.CONDITIONAL:
          value = opFunctions[element.value](
            this.stack,
            this.conditionalState,
            currentState?.negate ?? 0
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
          this.state.push(addToState)
          if (index === this.tokens.length - 1) {
            if (this.conditionalState.length !== 0) {
              throw new Error('OP_ENDIF: Unbalanced conditional')
            }
          }
          break
        default:
          break
      }
    }
  }
}

export default LanguageExecutor
