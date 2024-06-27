import { getKey, getSig, InterpreterRef } from '.'

// Opcode types

export const opCodeTypes = (opcode: string) => {
  if (opcode.match(/OP_[0-9]*/)) {
    return { opcode, operation: 'constants' }
  }
  switch (opcode) {
    case 'OP_DUP':
      return { opcode, operation: 'stack' }
    case 'OP_ADD':
      return { opcode, operation: 'arithmetic' }
    case 'OP_EQUAL':
      return { opcode, operation: 'bitwise' }
    case 'OP_DUP':
      return { opcode, operation: 'stack' }
    case 'OP_DUP':
      return { opcode, operation: 'stack' }
    case 'OP_DUP':
      return { opcode, operation: 'stack' }
    default:
      break
  }
}
export const opFunctions: { [key: string]: Function } = {
  OP_0: (stack: any[]) => stack.push(0),
  OP_1: (stack: any[]) => stack.push(1),
  OP_2: (stack: any[]) => stack.push(2),
  OP_3: (stack: any[]) => stack.push(3),
  OP_DUP: (stack: any[]) => stack.push(stack[stack.length - 1]),
  OP_ADD: (stack: any[]) => {
    if (stack.length < 2) {
      throw new Error('OP_ADD requires 2 items on the stack')
    }
    const a = parseInt(stack.pop())
    const b = parseInt(stack.pop())
    stack.push(a + b)
  },
  OP_EQUAL: (stack: any[]) => {
    if (stack.length < 2) {
      throw new Error('OP_EQUAL requires 2 items on the stack')
    }
    const a = stack.pop()
    const b = stack.pop()
    stack.push(a == b)
  },
  OP_EQUALVERIFY: (stack: any[]) => {
    if (stack.length < 2) {
      throw new Error('OP_EQUALVERIFY requires 2 items on the stack')
    }
    const a = stack.pop()
    const b = stack.pop()
    if (a != b) {
      throw new Error('OP_EQUALVERIFY: top two stack elements are not equal')
    }
  },
  OP_HASH256: (stack: any[]) => {
    if (stack.length < 1) {
      throw new Error('OP_HASH256 requires 1 item on the stack')
    }
    const a = stack.pop()
    stack.push(`HASH256(${a})`)
  },
  OP_PUSH: (stack: any[], script: string[], exec_ptr: number) => {
    stack.push(script[++exec_ptr])
  },
  OP_CHECKSIG: (stack: any[]) => {
    if (stack.length < 2) {
      throw new Error('OP_CHECKSIG requires 2 items on the stack')
    }
    const key = getKey(stack.pop())
    const sig = getSig(stack.pop())
    stack.push(key === sig)
  },
  OP_CHECKMULTISIG: (stack: any[]) => {
    if (stack.length < 1) {
      throw new Error('OP_CHECKMULTISIG requires at least 1 item on the stack')
    }

    const maybeN = stack.pop()
    const n = parseInt(maybeN)
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

    const maybeM = stack.pop()
    const m = parseInt(maybeM)
    if (!m) {
      throw new Error(`OP_CHECKMULTISIG invalid m: ${maybeM}`)
    }
    if (stack.length < m) {
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
    stack.push(sigs.length === 0)
  },
  OP_IF: (stack: any[], state: boolean[], negate: number) => {
    let value = false
    if (!negate) {
      if (stack.length < 1) {
        throw new Error('OP_IF requires 1 item on the stack')
      }
      const item = stack.pop()
      value = ![0, '0', false, 'false'].includes(item)
    }
    state.push(value)
    if (!value) {
      negate++
    }
    return { state, negate }
  },
  OP_ELSE: (state: boolean[], negate: number) => {
    if (state.length === 0) {
      throw new Error('OP_ELSE: Unbalanced conditional')
    }
    state[state.length - 1] = !state[state.length - 1]
    if (!state[state.length - 1]) {
      negate++
    } else {
      negate--
    }
    return { state, negate }
  },
  OP_ENDIF: (state: boolean[], negate: number) => {
    if (state.length === 0) {
      throw new Error('OP_ENDIF: Unbalanced conditional')
    }
    if (!state.pop()) {
      negate--
    }
    return { state, negate }
  },
  OP_DROP: (stack: any[]) => {
    if (stack.length < 1) {
      throw new Error('OP_DROP requires 1 item on the stack')
    }
    stack.pop()
  },
  OP_CHECKLOCKTIMEVERIFY: (stack: any[], height: InterpreterRef) => {
    if (stack.length < 1) {
      throw new Error('OP_CHECKLOCKTIMEVERIFY requires 1 item on the stack')
    }
    const a = parseInt(stack[stack.length - 1])
    const nLocktime = parseInt(height.current.value)
    if (a > nLocktime) {
      throw new Error('OP_CHECKLOCKTIMEVERIFY: transaction is not valid yet')
    }
  },
}
