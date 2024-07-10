import { StackType, T, TokenTypes } from '.'

const getKey = (keyData) => {
  if (!keyData) {
    throw new Error('Missing key')
  }
  const keyMatch = /PUBKEY\((.*?)\)/.exec(keyData)
  if (!keyMatch || keyMatch.length !== 2) {
    throw new Error(`Invalid public key: ${keyData}`)
  }
  return keyMatch[1]
}

const getSig = (sigData) => {
  if (!sigData) {
    throw new Error('Missing sig')
  }
  const sigMatch = /SIG\((.*?)\)/.exec(sigData)
  if (!sigMatch || sigMatch.length !== 2) {
    throw new Error(`Invalid signature: ${sigData}`)
  }
  return sigMatch[1]
}

export const opFunctions: { [key: string]: Function } = {
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
      throw new Error('OP_ADD requires 2 items on the stack')
    }
    const a = parseInt(stack.pop() as never)
    const b = parseInt(stack.pop() as never)
    return a + b
  },
  OP_PUSH: (stack: StackType, tokens: T, index: number) => {
    if (!stack) return null
    return tokens[index + 1].value
  },
  OP_CHECKLOCKTIMEVERIFY: (stack: StackType, height: number) => {
    if (!stack) return null
    if (stack?.length < 1) {
      throw new Error('OP_CHECKLOCKTIMEVERIFY requires 1 item on the stack')
    }
    const a = parseInt(stack[stack?.length - 1] as string)
    const nLocktime = height
    if (a > nLocktime) {
      throw new Error('OP_CHECKLOCKTIMEVERIFY: transaction is not valid yet')
    }
    return null
  },

  OP_IF(stack: StackType, conditionalState: Array<boolean>, negate: number) {
    // If we are already in a non-executing path (negate is non-zero),
    // continue not executing. Otherwise, execute this IF opcode by reading
    // by value on the stack.
    let value = false
    if (!negate) {
      if (!stack) return null
      if (stack.length < 1) {
        throw new Error('OP_IF requires 1 item on the stack')
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
    return negate
  },

  OP_ELSE(stack: StackType, conditionalState: Array<boolean>, negate: number) {
    if (!conditionalState) return null
    if (conditionalState?.length === 0) {
      throw new Error('OP_ELSE: Unbalanced conditional')
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

    return negate
  },

  OP_ENDIF(stack: StackType, conditionalState: Array<boolean>, negate: number) {
    if (!conditionalState) return null

    if (conditionalState.length === 0) {
      throw new Error('OP_ENDIF: Unbalanced conditional')
    }

    // Close a branch by removing the current state element
    if (!conditionalState.pop()) {
      // If the state we just closed was not-executing
      // that means we are getting closer to executing again.
      negate--
    }
    return negate
  },
  OP_HASH256: (stack: StackType) => {
    if (!stack) return null
    if (stack?.length < 1) {
      throw new Error('OP_HASH256 requires 1 item on the stack')
    }
    const a = stack?.pop()
    return `HASH256(${a})`
  },
  OP_CHECKSIG: (stack: StackType) => {
    if (!stack) return null
    if (stack?.length < 2) {
      throw new Error('OP_CHECKSIG requires 2 items on the stack')
    }
    const key = getKey(stack.pop())
    const sig = getSig(stack.pop())
    return key === sig
  },
  OP_CHECKMULTISIG: (stack: StackType) => {
    if (!stack) return null
    if (stack?.length < 1) {
      throw new Error('OP_CHECKMULTISIG requires at least 1 item on the stack')
    }

    const maybeN = stack.pop() ?? ''
    const n = typeof maybeN === 'string' && parseInt(maybeN)
    if (!n) {
      throw new Error(`OP_CHECKMULTISIG invalid n: ${maybeN}`)
    }
    if (stack.length < n + 1) {
      throw new Error(`OP_CHECKMULTISIG n=${n} not enough items on the stack`)
    }

    const keys = []
    for (let i = 0; i < n; i++) {
      keys.unshift(stack.pop() as never)
    }

    const maybeM = stack.pop() ?? ''
    const m = typeof maybeM === 'string' && parseInt(maybeM)
    if (!m) {
      throw new Error(`OP_CHECKMULTISIG invalid m: ${maybeM}`)
    }
    if (stack?.length < m) {
      throw new Error(`OP_CHECKMULTISIG m=${m} not enough items on the stack`)
    }
    if (m < 0) {
      throw new Error(`OP_CHECKMULTISIG invalid m: ${m} < 0`)
    }
    if (m > n) {
      throw new Error(`OP_CHECKMULTISIG invalid m > n: ${m} > ${n}`)
    }

    const sigs = []
    for (let i = 0; i < m; i++) {
      sigs.unshift(stack.pop() as never)
    }

    while (keys.length) {
      const key = keys.pop() || ''
      const sig = sigs[sigs.length - 1]
      if (getKey(key) === getSig(sig)) {
        sigs.pop()
      }
      if (sigs.length === 0) {
        break
      }
    }

    if (stack.length < 1) {
      throw new Error(
        'OP_CHECKMULTISIG requires one additional unused item on the stack'
      )
    }
    stack.pop()
    return sigs.length === 0
  },
  OP_EQUAL: (stack: StackType) => {
    if (!stack) return null
    if (stack?.length < 2) {
      throw new Error('OP_EQUAL requires 2 items on the stack')
    }
    const a = stack.pop()
    const b = stack.pop()
    return a == b
  },
  OP_EQUALVERIFY: (stack: StackType) => {
    if (!stack) return null
    if (stack?.length < 2) {
      throw new Error('OP_EQUALVERIFY requires 2 items on the stack')
    }
    const a = stack.pop()
    const b = stack.pop()
    if (a != b) {
      throw new Error('OP_EQUALVERIFY: top two stack elements are not equal')
    }
  },
  OP_DUP: (stack: StackType) => {
    if (!stack) return null
    return stack[stack?.length - 1]
  },
  OP_DROP: (stack: StackType) => {
    if (!stack) return null
    if (stack?.length < 1) {
      throw new Error('OP_DROP requires 1 item on the stack')
    }
    stack?.pop()
  },
  OP_VERIFY: (stack: StackType) => {
    if (!stack) return null
    if (stack?.length < 1) {
      throw new Error('OP_VERIFY requires 1 items on the stack')
    }
    const a = stack?.pop()
    if (a != true) {
      throw new Error('OP_VERIFY: top stack element is not true')
    }
  },
}

interface OpToken {
  operation: TokenTypes
  opcode: string
  color: string
}

export const OpCodeTypes = {
  OP_0: 'constant',
  OP_FALSE: 'constant',
  OP_1NEGATE: 'constant',
  OP_1: 'constant',
  OP_TRUE: 'constant',
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
