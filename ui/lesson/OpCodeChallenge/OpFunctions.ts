import { StackType, T, TokenTypes } from './runnerTypes'

const unRecognizedDataTypeRegex =
  /^(?!\d+$)(?!HASH256)(?!SIG)(?!PUBKEY)(?!\b[A-F0-9]+\b).*/

const getKey = (keyData) => {
  if (!keyData) {
    return {
      value: null,
      error: 'Missing key',
    }
  }
  const keyMatch = /PUBKEY\((.*?)\)(?![^ ]+)/.exec(keyData)
  if (!keyMatch || keyMatch.length !== 2) {
    return {
      value: null,
      error: `Invalid public key: ${keyData}`,
    }
  }
  return {
    value: keyMatch[1],
    error: null,
  }
}

const getSig = (sigData) => {
  if (!sigData) {
    return {
      value: null,
      error: 'Missing sig',
    }
  }
  const sigMatch = /SIG\((.*?)\)(?![^ ]+)/.exec(sigData)
  if (!sigMatch || sigMatch.length !== 2) {
    return {
      value: null,
      error: `Invalid signature: ${sigData}`,
    }
  }
  return {
    value: sigMatch[1],
    error: null,
  }
}

export const opFunctions: { [key: string]: Function } = {
  INITIAL_STACK: (stack: StackType) => {
    if (!stack) return null
    if (
      stack?.some(
        (item) => !!item && unRecognizedDataTypeRegex.test(item.toString())
      )
    ) {
      return {
        value: null,
        error: `INITIAL_STACK: unrecognized data type: ${stack
          .join(' ')
          .match(unRecognizedDataTypeRegex)}`,
      }
    }
    return {
      value: null,
      error: null,
    }
  },
  OP_0: () => 0,
  OP_FALSE: () => 0,
  OP_1NEGATE: () => -1,
  OP_1: () => 1,
  OP_TRUE: () => 1,
  OP_2: () => 2,
  OP_3: () => 3,
  OP_4: () => 4,
  OP_5: () => 5,
  OP_6: () => 6,
  OP_7: () => 7,
  OP_8: () => 8,
  OP_9: () => 9,
  OP_10: () => 10,
  OP_11: () => 11,
  OP_12: () => 12,
  OP_13: () => 13,
  OP_14: () => 14,
  OP_15: () => 15,
  OP_16: () => 16,
  OP_NOP: () => null,
  OP_ADD: (stack: StackType) => {
    if (!stack) return null
    if (stack?.length < 2) {
      return {
        value: null,
        error: 'OP_ADD requires 2 items on the stack',
      }
    }
    const a = Number(stack.pop())
    const b = Number(stack.pop())
    if (
      typeof (a + b) !== 'number' ||
      isNaN(a + b) ||
      !Number.isInteger(a) ||
      !Number.isInteger(b)
    ) {
      return {
        value: null,
        error: 'OP_ADD requires 2 integers to add together',
      }
    }
    if (a == 0 && b == 0) {
      return {
        value: 0,
        error: null,
      }
    }
    return {
      value: Number(a + b),
      error: null,
    }
  },
  OP_PUSH: (stack: StackType, tokens: T, index: number) => {
    if (!stack) return null
    if (!tokens[index + 1]?.value) {
      return {
        value: null,
        error: 'OP_PUSH: needs a value to push to the stack',
      }
    }
    if (unRecognizedDataTypeRegex.test(tokens[index + 1].value)) {
      return {
        value: null,
        error: 'OP_PUSH: unrecognized data type',
      }
    }
    return { value: tokens[index + 1].value, error: null }
  },
  OP_CHECKSEQUENCEVERIFY: (
    stack: StackType,
    height: number,
    nSequenceTime: number
  ) => {
    if (!stack) return null
    if (stack?.length < 1) {
      return {
        value: null,
        error: 'OP_CHECKSEQUENCEVERIFY: requires 1 item on the stack',
      }
    }
    if (isNaN(nSequenceTime)) {
      return {
        value: null,
        error: 'OP_CHECKSEQUENCEVERIFY: nSequence should be a valid number',
      }
    }
    const a = parseInt(stack[stack?.length - 1] as string)
    const nSequence = nSequenceTime
    if (a > nSequence) {
      return {
        value: null,
        error: 'OP_CHECKSEQUENCEVERIFY: transaction is not valid yet',
      }
    }
    return { value: null, error: null }
  },
  OP_CHECKLOCKTIMEVERIFY: (stack: StackType, height: number) => {
    if (!stack) return null
    if (stack?.length < 1) {
      return {
        value: null,
        error: 'OP_CHECKLOCKTIMEVERIFY: requires 1 item on the stack',
      }
    }
    if (isNaN(height)) {
      return {
        value: null,
        error: 'OP_CHECKLOCKTIMEVERIFY: height should be a valid number',
      }
    }
    const a = parseInt(stack[stack?.length - 1] as string)
    const nLocktime = height
    if (a > nLocktime) {
      return {
        value: null,
        error: 'OP_CHECKLOCKTIMEVERIFY: transaction is not valid yet',
      }
    }
    return { value: null, error: null }
  },

  OP_IF(stack: StackType, conditionalState: Array<boolean>, negate: number) {
    // If we are already in a non-executing path (negate is non-zero),
    // continue not executing. Otherwise, execute this IF opcode by reading
    // by value on the stack.
    let value = false
    if (!negate) {
      if (!stack) return null
      if (stack.length < 1) {
        return {
          value: null,
          error: 'OP_IF requires 1 item on the stack',
        }
      }
      const item = stack.pop()

      if (item) {
        value = ![0, '0', false, 'false'].includes(item)
      }
    }
    // Start a new branch in the state.
    // Even if we are not executing there should still be an ELSE/ENDIF
    // later in the script for closure.
    conditionalState.push(value)
    // We only execute opcodes when this.negate === 0 So every time we start
    // another IF(false) we get "further away" from executing code.
    if (!value) {
      negate++
    }
    return { value: negate, error: null }
  },

  OP_ELSE(stack: StackType, conditionalState: Array<boolean>, negate: number) {
    if (!conditionalState) return null
    if (conditionalState?.length === 0) {
      return {
        value: null,
        error: 'OP_ELSE: Unbalanced conditional',
      }
    }
    // Flip the current state element
    conditionalState[conditionalState.length - 1] =
      !conditionalState[conditionalState.length - 1]
    // If the current state element is false we increment this.negate taking us
    // "further away" from executing code. If state is true we decrement,
    // bring us closer to this.negate === 0 when code gets executed.
    if (!conditionalState[conditionalState.length - 1]) {
      negate++
    } else {
      negate--
    }

    return {
      value: negate,
      error: null,
    }
  },

  OP_ENDIF(stack: StackType, conditionalState: Array<boolean>, negate: number) {
    if (!conditionalState) return null

    if (conditionalState.length === 0) {
      return {
        value: null,
        error: 'OP_ENDIF: Unbalanced conditional',
      }
    }

    // Close a branch by removing the current state element
    if (!conditionalState.pop()) {
      // If the state we just closed was not-executing
      // that means we are getting closer to executing again.
      negate--
    }
    return {
      value: negate,
      error: null,
    }
  },
  OP_HASH256: (stack: StackType) => {
    if (!stack) return null
    if (stack?.length < 1) {
      return {
        value: null,
        error: 'OP_HASH256 requires 1 item on the stack',
      }
    }
    const a = stack?.pop()
    return {
      value: `HASH256(${a})`,
      error: null,
    }
  },
  OP_CHECKSIG: (stack: StackType) => {
    if (!stack) return null
    if (stack?.length < 2) {
      return {
        value: null,
        error: 'OP_CHECKSIG requires 2 items on the stack',
      }
    }
    const key = getKey(stack.pop())?.value?.toUpperCase()
    const sig = getSig(stack.pop())?.value?.toUpperCase()
    return {
      value: key === sig,
      error: null,
    }
  },
  OP_CHECKMULTISIG: (stack: StackType) => {
    if (!stack) return null
    if (stack?.length < 1) {
      return {
        value: null,
        error: 'OP_CHECKMULTISIG requires at least 1 item on the stack',
      }
    }

    const maybeN = stack.pop() ?? ''
    const n = typeof maybeN === 'number' && maybeN
    if (!n) {
      return {
        value: null,
        error: `OP_CHECKMULTISIG invalid n: ${maybeN}`,
      }
    }
    if (stack.length < n + 1) {
      return {
        value: null,
        error: `OP_CHECKMULTISIG n=${n} not enough items on the stack`,
      }
    }

    const keys = []
    for (let i = 0; i < n; i++) {
      keys.unshift(stack.pop() as never)
    }

    const maybeM = stack.pop() ?? ''
    const m = typeof maybeM === 'number' && maybeM
    if (!m) {
      return {
        value: null,
        error: `OP_CHECKMULTISIG invalid m: ${maybeM}`,
      }
    }
    if (stack?.length < m) {
      return {
        value: null,
        error: `OP_CHECKMULTISIG m=${m} not enough items on the stack`,
      }
    }
    if (m < 0) {
      return {
        value: null,
        error: `OP_CHECKMULTISIG invalid m: ${m} < 0`,
      }
    }
    if (m > n) {
      return {
        value: null,
        error: `OP_CHECKMULTISIG invalid m > n: ${m} > ${n}`,
      }
    }

    const sigs = []
    for (let i = 0; i < m; i++) {
      sigs.unshift(stack.pop() as never)
    }

    while (keys.length) {
      const key = keys.pop() || ''
      const sig = sigs[sigs.length - 1]
      if (
        getKey(key)?.value === getSig(sig)?.value &&
        getKey(key)?.value !== null
      ) {
        sigs.pop()
      }
      if (sigs.length === 0) {
        break
      }
    }

    if (stack.length < 1) {
      return {
        value: null,
        error:
          'OP_CHECKMULTISIG requires one additional unused item on the stack',
      }
    }
    stack.pop()
    return {
      value: sigs.length === 0,
      error: null,
    }
  },
  OP_EQUAL: (stack: StackType) => {
    if (!stack) return null
    if (stack?.length < 2) {
      return {
        value: null,
        error: 'OP_EQUAL requires 2 items on the stack',
      }
    }
    const a = stack.pop()
    const b = stack.pop()

    return {
      value: a == b,
      error: null,
    }
  },
  OP_EQUALVERIFY: (stack: StackType) => {
    if (!stack) return null
    if (stack?.length < 2) {
      return {
        value: null,
        error: 'OP_EQUALVERIFY requires 2 items on the stack',
      }
    }
    const a = stack.pop()
    const b = stack.pop()

    if (a != b) {
      return {
        value: null,
        error: 'OP_EQUALVERIFY: top two stack elements are not equal',
      }
    }

    return {
      value: null,
      error: null,
    }
  },
  OP_DUP: (stack: StackType) => {
    if (!stack) return null
    if (!stack[stack.length - 1]) {
      return {
        value: null,
        error: 'OP_DUP needs at least one item on the stack',
      }
    }
    return {
      value: stack[stack?.length - 1],
      error: null,
    }
  },
  OP_DROP: (stack: StackType) => {
    if (!stack) return null
    if (stack?.length < 1) {
      return {
        value: null,
        error: 'OP_DROP requires 1 item on the stack',
      }
    }
    stack?.pop()
  },
  OP_VERIFY: (stack: StackType) => {
    if (!stack) return null
    if (stack?.length < 1) {
      return {
        value: null,
        error: 'OP_VERIFY requires 1 items on the stack',
      }
    }
    const a = stack?.pop()
    if (a != true) {
      return {
        value: null,
        error: 'OP_VERIFY: top stack element is not true',
      }
    }
  },
}

interface OpToken {
  operation: TokenTypes
  opcode: string
  color: string
}

export const OpCodeTypes = {
  INITIAL_STACK: 'initial-stack',
  OP_TRUE: 'constant',
  OP_FALSE: 'constant',
  OP_0: 'constant',
  OP_1: 'constant',
  OP_1NEGATE: 'constant',
  OP_2: 'constant',
  OP_3: 'constant',
  OP_4: 'constant',
  OP_5: 'constant',
  OP_6: 'constant',
  OP_7: 'constant',
  OP_8: 'constant',
  OP_9: 'constant',
  OP_10: 'constant',
  OP_11: 'constant',
  OP_12: 'constant',
  OP_13: 'constant',
  OP_14: 'constant',
  OP_15: 'constant',
  OP_16: 'constant',

  OP_ADD: 'arithmetic',

  OP_PUSH: 'data-push',

  OP_CHECKLOCKTIMEVERIFY: 'lock-time',
  OP_CHECKSEQUENCEVERIFY: 'lock-time',

  OP_IF: 'conditional',
  OP_ELSE: 'conditional',
  OP_ENDIF: 'conditional',

  OP_HASH256: 'crypto',
  OP_CHECKSIG: 'crypto',
  OP_CHECKMULTISIG: 'crypto',

  OP_EQUAL: 'bitwise',
  OP_EQUALVERIFY: 'bitwise',

  OP_DUP: 'stack',
  OP_DROP: 'stack',
  OP_VERIFY: 'stack',
  OP_NOP: 'stack',
}

const disabledOpCodes = ['INITIAL_STACK']

export const OpCodeArray = Object.keys(OpCodeTypes).filter(
  (key) => !disabledOpCodes.includes(key)
)
