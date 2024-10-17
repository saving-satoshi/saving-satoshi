import { OpCodeTypes, opFunctions } from './OpFunctions'
import {
  MainState,
  StackType,
  State,
  T,
  TokenTypes,
  RunnerError,
} from './runnerTypes'

class LanguageExecutor {
  tokens: T
  stack: StackType
  height?: number | null
  nSequenceTime?: number | null
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
      nSequenceTime: null,
      error: {
        type: '',
        message: null,
      },
    },
  ]

  public static rawInputToParsableInput(input: string): Array<string | number> {
    const tokens = input.split(' ')
    const filteredTokens = tokens.filter((arg) => arg.trim())
    return filteredTokens
  }

  public static parsableInputToTokens(input: Array<string | number>): T {
    const tokens: T = input.map((operation: string) => {
      const resolveValue = opFunctions?.[operation]
        ? opFunctions[operation]()
        : 'error'

      return {
        type: OpCodeTypes[operation] || '',
        resolves: resolveValue,
        value: operation.trim(),
      }
    })

    return tokens
  }

  public static RunCode(
    script: string,
    initialStack?: string[],
    height?: number,
    nSequenceTime?: number
  ): LanguageExecutor | null {
    const parsableInput = this.rawInputToParsableInput(script)
    const filteredStack = initialStack?.filter((arg) => {
      arg.trim()
      return arg.length !== 0
    })
    try {
      const tokens = this.parsableInputToTokens(parsableInput)

      const langExecutor = new LanguageExecutor(
        tokens,
        filteredStack ?? [],
        height,
        nSequenceTime
      )
      langExecutor.execute()

      return langExecutor
    } catch (err) {
      const langExecutor = new LanguageExecutor(
        [],
        filteredStack ?? [],
        height,
        nSequenceTime
      )
      langExecutor.execute()

      return langExecutor
    }
  }

  constructor(
    tokens: T,
    initialStack: string[],
    height?: number,
    nSequenceTime?: number
  ) {
    this.tokens = tokens
    this.state = []
    this.stack = []
    this.height = height ?? 0
    this.nSequenceTime = nSequenceTime ?? 0
    this.conditionalState = []
    this.negate = 0
    this.stack.push(...initialStack)
  }

  //THIS COULD CAUSE AN ERROR BY DEFAULTING TO 0
  public currentIndex: number = 0

  executeStep(): State | null {
    if (this.currentIndex >= this.tokens.length) {
      return null // End of script
    }

    const element = this.tokens[this.currentIndex]
    const state = this.executeToken(element)
    this.currentIndex++
    return state
  }

  private executeToken(element: T[number]): State {
    const currentStack = [...this.stack]
    const currentNegate = this.negate
    const unRecognizedDataTypeRegex =
      /^(?!\d+$)(?!HASH256)(?!SIG)(?!PUBKEY)(?!\b[A-F0-9]+\b).*/
    let opResolves: any
    let error: RunnerError = { type: '', message: null }

    if (
      currentStack.some(
        (stackItem) =>
          typeof stackItem === 'string' &&
          unRecognizedDataTypeRegex.test(stackItem)
      )
    ) {
      error = {
        type: 'unknown',
        message: `STACK_ERR: Unrecognized data type: ${currentStack
          .join(' ')
          .match(unRecognizedDataTypeRegex)}`,
      }
    }

    switch (element.type) {
      case TokenTypes.INITIAL_STACK:
        opResolves = opFunctions[element.value](this.stack)
        if (opResolves.value !== null) {
          this.stack.push(opResolves.value)
        }
        error = opResolves?.error
          ? { type: element.value, message: opResolves.error }
          : error
        break

      case TokenTypes.CONSTANT:
        if (this.negate === 0) {
          this.stack.push(element.resolves)
        }
        error = { type: '', message: null }
        break

      case TokenTypes.ARITHMETIC:
        if (this.negate === 0) {
          opResolves = opFunctions[element.value](this.stack)
          if (opResolves.value !== null) {
            this.stack.push(opResolves.value)
          }
        }
        error =
          opResolves?.error && !error?.message
            ? { type: element.value, message: opResolves.error }
            : error
        break

      case TokenTypes.DATA_PUSH:
        if (this.negate === 0) {
          opResolves = opFunctions[element.value](
            this.stack,
            this.tokens,
            this.currentIndex
          )
          if (opResolves.value) {
            this.stack.push(opResolves.value)
          }
        }
        error =
          opResolves?.error && !error?.message
            ? { type: element.value, message: opResolves.error }
            : error
        this.currentIndex++
        break

      case TokenTypes.LOCK_TIME:
        if (this.negate === 0) {
          opResolves = opFunctions[element.value](
            this.stack,
            this.height,
            this.nSequenceTime
          )
        }
        error =
          opResolves?.error && !error?.message
            ? { type: element.value, message: opResolves.error }
            : error
        break

      case TokenTypes.CONDITIONAL:
        opResolves = opFunctions[element.value](
          this.stack,
          this.conditionalState,
          this.negate
        )
        this.negate = opResolves?.value
        error =
          opResolves?.error && !error?.message
            ? { type: element.value, message: opResolves.error }
            : error
        break

      case TokenTypes.CRYPTO:
        if (this.negate === 0) {
          opResolves = opFunctions[element.value](this.stack)
          if (opResolves?.value !== null) this.stack.push(opResolves.value)
        }
        error =
          opResolves?.error && !error?.message
            ? { type: element.value, message: opResolves.error }
            : error
        break

      case TokenTypes.BITWISE:
        if (this.negate === 0) {
          opResolves = opFunctions[element.value](this.stack)
          if (opResolves?.value !== null) {
            this.stack.push(opResolves.value)
          }
        }
        error =
          opResolves?.error && !error?.message
            ? { type: element.value, message: opResolves.error }
            : error
        break

      case TokenTypes.STACK:
        if (this.negate === 0) {
          opResolves = opFunctions[element.value](this.stack)
          if (opResolves?.value) {
            this.stack.push(opResolves.value)
          }
        }
        error =
          opResolves?.error && !error?.message
            ? { type: element.value, message: opResolves.error }
            : error
        break

      default:
        error = {
          type: 'unknown',
          message: `SCRIPT_ERR: Unknown opcode ${element.type}`,
        }
        break
    }

    return {
      stack: [...this.stack],
      operation: {
        tokenType: element.type,
        resolves: element.resolves,
        value: element.value,
        type: element.type,
      },
      negate: this.negate,
      step: this.currentIndex,
      error: error,
    }
  }

  execute() {
    this.state = []
    let state: State | null
    while ((state = this.executeStep()) !== null) {
      this.state.push(state)
    }

    if (this.state.length > 0 && this.currentIndex >= this.tokens.length - 1) {
      if (this.conditionalState.length !== 0) {
        this.state[this.state.length - 1].error = {
          type: 'unknown',
          message: 'SCRIPT_ERR: Unbalanced conditional',
        }
      }
      if (this.state[this.state.length - 1].stack.length !== 1) {
        this.state[this.state.length - 1].error = {
          type: 'unknown',
          message:
            'STACK_ERR: Stack should finish with only one item on the stack',
        }
      }
    }
  }
}

export default LanguageExecutor
