import { OpCodeTypes, opFunctions } from './OPFunctions'
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
    height?: number
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
        height
      )
      langExecutor.execute()

      return langExecutor
    } catch (err) {
      const langExecutor = new LanguageExecutor([], filteredStack ?? [], height)
      langExecutor.execute()

      return langExecutor
    }
  }

  constructor(tokens: T, initialStack: string[], height?: number) {
    this.tokens = tokens
    this.state = []
    this.stack = []
    this.height = height ?? 0
    this.conditionalState = []
    this.negate = 0
    if (initialStack.length !== 0) {
      this.state.push({
        stack: initialStack,
        operation: {
          tokenType: null,
          resolves: null,
          value: 'INITIAL_STACK',
          type: '',
        },
        step: 0,
        negate: 0,
        error: {
          type: '',
          message: null,
        },
      })
      this.stack.push(...initialStack)
    }
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
    if (state.error?.message) {
      this.currentIndex = this.tokens.length - 1
    }
    return state
  }

  private executeToken(element: T[number]): State {
    const currentStack = [...this.stack]
    const currentNegate = this.negate
    let opResolves: any
    let error: RunnerError | null | undefined = null

    switch (element.type) {
      case TokenTypes.CONSTANT:
        if (this.negate === 0) {
          this.stack.push(element.resolves)
        }
        break

      case TokenTypes.ARITHMETIC:
        if (this.negate === 0) {
          opResolves = opFunctions[element.value](this.stack)
          if (opResolves.value !== null) {
            this.stack.push(opResolves.value)
          }
        }
        error = opResolves?.error
          ? { type: element.value, message: opResolves.error }
          : null
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
        error = opResolves?.error
          ? { type: element.value, message: opResolves.error }
          : null
        this.currentIndex++
        break

      case TokenTypes.LOCK_TIME:
        if (this.negate === 0) {
          opResolves = opFunctions[element.value](this.stack, this.height)
        }
        error = opResolves?.error
          ? { type: element.value, message: opResolves.error }
          : null
        break

      case TokenTypes.CONDITIONAL:
        opResolves = opFunctions[element.value](
          this.stack,
          this.conditionalState,
          this.negate
        )
        this.negate = opResolves?.value
        error = opResolves?.error
          ? { type: element.value, message: opResolves.error }
          : null
        break

      case TokenTypes.CRYPTO:
        if (this.negate === 0) {
          opResolves = opFunctions[element.value](this.stack)
          if (opResolves?.value !== null) this.stack.push(opResolves.value)
        }
        error = opResolves?.error
          ? { type: element.value, message: opResolves.error }
          : null
        break

      case TokenTypes.BITWISE:
        if (this.negate === 0) {
          opResolves = opFunctions[element.value](this.stack)
          if (opResolves?.value !== null) {
            this.stack.push(opResolves.value)
          }
        }
        error = opResolves?.error
          ? { type: element.value, message: opResolves.error }
          : null
        break

      case TokenTypes.STACK:
        if (this.negate === 0) {
          opResolves = opFunctions[element.value](this.stack)
          if (opResolves?.value) {
            this.stack.push(opResolves.value)
          }
        }
        error = opResolves?.error
          ? { type: element.value, message: opResolves.error }
          : null
        break

      default:
        error = {
          type: 'unknown',
          message: `SCRIPT_ERR: Unknown opcode ${element.type}`,
        }
        break
    }

    /*if (
      this.state[0].stack.some((stackItem) =>
        unRecognizedDataTypeRegex.test(stackItem)
      )
    ) {
      error = {
        type: 'unknown',
        message: 'STACK_ERR: Unrecognized data type',
      }
    }*/

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
      error: error ?? undefined,
    }
  }

  execute() {
    this.state = []
    let state: State | null
    while ((state = this.executeStep()) !== null) {
      this.state.push(state)
    }

    if (this.currentIndex >= this.tokens.length - 1) {
      if (this.conditionalState.length !== 0) {
        this.state[this.tokens.length - 1].error = {
          type: 'unknown',
          message: 'SCRIPT_ERR: Unbalanced conditional',
        }
      }
      if (this.state[this.state.length - 1].stack.length !== 1) {
        this.state[this.tokens.length - 1].error = {
          type: 'unknown',
          message:
            'STACK_ERR: Stack should finish with only one item on the stack',
        }
      }
    }
  }
}

/*async execute() {
    if (!this.tokens) return this.state
    for (let index = 0; index < this.tokens.length; index++) {
      const element = this.tokens[index]
      const currentStack = this.stack
      const currentState = this.state[index - 1]
      const currentNegate = this.negate
      const unRecognizedDataTypeRegex =
        /^(?!\d+$)(?!Hash256)(?!SIG)(?!PUBKEY).
      let error: RunnerError | null
      let addToState: State
      let opResolves: any

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
            opResolves = opFunctions[element.value](this.stack)
            if (opResolves.value !== null) {
              this.stack.push(opResolves.value)
            }
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
            error: {
              type: element.value,
              message: opResolves?.error,
            },
          }
          this.state.push(addToState)
          break

        case TokenTypes.DATA_PUSH:
          if (this.negate === 0) {
            opResolves = opFunctions[element.value](
              this.stack,
              this.tokens,
              index
            )
            if (opResolves.value) {
              this.stack.push(opResolves.value)
            }
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
            error: {
              type: element.value,
              message: opResolves?.error,
            },
          }
          this.state.push(addToState)
          index++
          break

        case TokenTypes.LOCK_TIME:
          if (this.negate === 0) {
            opResolves = opFunctions[element.value](this.stack, this.height)
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
            error: {
              type: element.value,
              message: opResolves?.error,
            },
          }
          this.state.push(addToState)
          break

        case TokenTypes.CONDITIONAL:
          opResolves = opFunctions[element.value](
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
            negate: opResolves?.value,
            step: index,
            error: {
              type: element.value,
              message: opResolves?.error,
            },
          }
          this.negate = opResolves?.value
          this.state.push(addToState)
          break

        case TokenTypes.CRYPTO:
          if (this.negate === 0) {
            opResolves = opFunctions[element.value](this.stack)
            if (opResolves?.value !== null) this.stack.push(opResolves.value)
          }
          addToState = {
            stack: [...currentStack],
            operation: {
              tokenType: TokenTypes.CRYPTO,
              resolves: element.resolves,
              value: element.value,
              type: element.type,
            },
            negate: currentNegate,
            step: index,
            error: {
              type: element.value,
              message: opResolves.error,
            },
          }
          this.state.push(addToState)
          break

        case TokenTypes.BITWISE:
          if (this.negate === 0) {
            opResolves = opFunctions[element.value](this.stack)
            if (opResolves?.value !== null) {
              this.stack.push(opResolves.value)
            }
          }
          addToState = {
            stack: [...currentStack],
            operation: {
              tokenType: TokenTypes.BITWISE,
              resolves: element.resolves,
              value: element.value,
              type: element.type,
            },
            negate: currentNegate,
            step: index,
            error: {
              type: element.value,
              message: opResolves?.error,
            },
          }
          this.state.push(addToState)
          break

        case TokenTypes.STACK:
          if (this.negate === 0) {
            opResolves = opFunctions[element.value](this.stack)
            if (opResolves?.value) {
              this.stack.push(opResolves.value)
            }
          }
          addToState = {
            stack: [...currentStack],
            operation: {
              tokenType: TokenTypes.STACK,
              resolves: element.resolves,
              value: element.value,
              type: element.type,
            },
            negate: currentNegate,
            step: index,
            error: opResolves?.value,
          }
          this.state.push(addToState)
          break

        default:
          addToState = {
            stack: [...currentStack],
            operation: {
              tokenType: TokenTypes.CONSTANT,
              resolves: element.value,
              value: element.value,
              type: element.type,
            },
            negate: currentNegate,
            step: index,
            error: {
              type: 'unknown',
              message: `Error: Unknown opcode ${element.type}`,
            },
          }
          this.state.push(addToState)
          break
      }
      if (
        this.state[0].stack.some((stackItem) =>
          unRecognizedDataTypeRegex.test(stackItem)
        )
      ) {
        addToState.error = {
          type: 'unknown',
          message: 'STACK_ERR: Unrecognized data type',
        }
      }
      if (index === this.tokens.length - 1) {
        if (this.conditionalState.length !== 0) {
          addToState.error = {
            type: 'unknown',
            message: 'SCRIPT_ERR: Unbalanced conditional',
          }
        }
        if (this.state[this.state.length - 1].stack.length !== 1) {
          addToState.error = {
            type: 'unknown',
            message:
              'Stack_ERR: Stack should finish with only one item on the stack',
          }
        }
      }
      if (addToState.error?.message) {
        index = this.tokens.length - 1
      }
    }
  }*/

export default LanguageExecutor
