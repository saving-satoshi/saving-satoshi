/* eslint-env browser */
'use strict'

// Types
export type InterpreterRef = React.MutableRefObject<HTMLInputElement>
export type InterpreterDivRef = React.MutableRefObject<HTMLDivElement>
export type InterpreterAreaRef = React.MutableRefObject<HTMLTextAreaElement>
export type InterpreterState = {
  exec_ptr: number
  stack: any[]
  negate: number
  state: boolean[]
  script: string[]
  finished?: boolean
}

interface Refs {
  scriptFieldRef: InterpreterRef
  initialStackRef: InterpreterRef
  executionStackRef: InterpreterAreaRef
  currentOpCodeRef: InterpreterDivRef
  heightRef: InterpreterRef
}

const initialState: InterpreterState = {
  exec_ptr: -1,
  stack: [],
  negate: 0,
  state: [],
  script: [],
}

// UI Update Functions
const updateStack = (executionStack: InterpreterAreaRef, stack: any[]) => {
  if (executionStack.current) {
    executionStack.current.value = stack
      .map((a) => a)
      .reverse()
      .join('\n')
  } else {
    console.error('executionStack.current is null')
  }
}

const currentOp = (currentOpcode: InterpreterDivRef, opcode: string) => {
  if (currentOpcode.current) {
    currentOpcode.current.innerHTML = `<span style="color:blue">${opcode}</span>`
  }
}

const error = (currentOpcode: InterpreterDivRef, message: string) => {
  currentOpcode.current.innerHTML = `<span style="color:red">ERROR: ${message}</span>`
}

const highlight = (
  scriptField: InterpreterRef,
  script: string[],
  exec_ptr: number
) => {
  if (exec_ptr < 0) {
    if (scriptField.current) {
      scriptField.current.value = script.join(' ')
    }
    return
  }

  const opcode = script[exec_ptr]
  const highlight = '->[' + opcode + ']<-'
  const copy = Array.from(script)
  copy[exec_ptr] = highlight
  scriptField.current.value = copy.join(' ')
}

// Interpreter Functions
const getKey = (keyData: string): string => {
  if (!keyData) {
    throw new Error('Missing key')
  }
  const keyMatch = /PUBKEY\((.*?)\)/.exec(keyData)
  if (!keyMatch || keyMatch.length !== 2) {
    throw new Error(`Invalid public key: ${keyData}`)
  }
  return keyMatch[1]
}

const getSig = (sigData: string): string => {
  if (!sigData) {
    throw new Error('Missing sig')
  }
  const sigMatch = /SIG\((.*?)\)/.exec(sigData)
  if (!sigMatch || sigMatch.length !== 2) {
    throw new Error(`Invalid signature: ${sigData}`)
  }
  return sigMatch[1]
}

const verify = (stack: any[], error: (msg: string) => void): boolean => {
  if (stack.length !== 1) {
    error('Script evaluates false: stack length is not exactly 1')
    return false
  }
  if (stack[0] === false || parseInt(stack[0]) === 0) {
    error('Script evaluates false: top stack item is false')
    return false
  }

  return true
}

// Opcode Functions
const opFunctions: { [key: string]: Function } = {
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

// Main Interpreter Functions
const reset = (
  scriptFieldRef: InterpreterRef,
  initialStackRef: InterpreterRef,
  executionStackRef: InterpreterAreaRef,
  currentOpCodeRef: InterpreterDivRef,
  heightRef: InterpreterRef
): InterpreterState => {
  const state: InterpreterState = {
    ...initialState,
    script: scriptFieldRef.current?.value.split(' '),
    stack: [],
  }

  console.log(state.stack, 'test')

  if (executionStackRef.current) {
    updateStack(executionStackRef, state.stack)
  }
  currentOp(currentOpCodeRef, 'none')
  highlight(scriptFieldRef, state.script, -1)

  return state
}

const step = (state: InterpreterState, refs: Refs): InterpreterState => {
  const { scriptFieldRef, executionStackRef, currentOpCodeRef, heightRef } =
    refs
  if (state.exec_ptr === -1) {
    state.exec_ptr++
  }
  if (state.finished) {
    return state
  }

  if (state.exec_ptr === state.script.length) {
    if (state.state?.length !== 0) {
      error(currentOpCodeRef, 'End of script: Unbalanced conditional')
      return { ...state, finished: true }
    }

    if (verify(state.stack, (msg: string) => error(currentOpCodeRef, msg))) {
      highlight(scriptFieldRef, state.script, -1)
      currentOp(currentOpCodeRef, 'VALID: Script completed successfully')
    } else {
      highlight(scriptFieldRef, state.script, -1)
      error(currentOpCodeRef, 'INVALID: Script did not complete successfully')
    }
    return { ...state, finished: true }
  }

  const opcode = state.script[state.exec_ptr]

  if (state.negate && !['OP_IF', 'OP_ELSE', 'OP_ENDIF'].includes(opcode)) {
    state.exec_ptr++
    return step(state, refs)
  }

  highlight(scriptFieldRef, state.script, state.exec_ptr)
  currentOp(currentOpCodeRef, opcode)

  if (!opFunctions[opcode]) {
    error(currentOpCodeRef, `Unknown opcode ${opcode}`)
    return { ...state, finished: true }
  }

  try {
    if (opcode === 'OP_PUSH') {
      opFunctions[opcode](state.stack, state.script, state.exec_ptr)
    } else if (['OP_IF', 'OP_ELSE', 'OP_ENDIF'].includes(opcode)) {
      const result = opFunctions[opcode](state.stack, state.state, state.negate)
      state.state = result.state
      state.negate = result.negate
    } else if (opcode === 'OP_CHECKLOCKTIMEVERIFY') {
      opFunctions[opcode](state.stack, heightRef)
    } else {
      opFunctions[opcode](state.stack)
      console.log(state.stack, 'point of pushing')
    }
  } catch (e: any) {
    error(currentOpCodeRef, e.message)
    return { ...state, finished: true }
  }

  updateStack(executionStackRef, state.stack)
  state.exec_ptr++
  return state
}

const run = (state: InterpreterState, refs: Refs): InterpreterState => {
  state.exec_ptr = -1
  console.log(state.script, 'test')
  while (!state.finished) {
    state = step(state, refs)
    console.log(state.finished, 'inside')
  }

  console.log(state.finished, 'outside')
  return state
}

// Initialization
const initializeInterpreter = (
  scriptFieldRef: InterpreterRef,
  initialStackRef: InterpreterRef,
  executionStackRef: InterpreterAreaRef,
  currentOpCodeRef: InterpreterDivRef,
  heightRef: InterpreterRef
) => {
  let state = reset(
    scriptFieldRef,
    initialStackRef,
    executionStackRef,
    currentOpCodeRef,
    heightRef
  )

  const onScriptInput = () => {
    state = reset(
      scriptFieldRef,
      initialStackRef,
      executionStackRef,
      currentOpCodeRef,
      heightRef
    )
  }

  const onReset = () => {
    state = reset(
      scriptFieldRef,
      initialStackRef,
      executionStackRef,
      currentOpCodeRef,
      heightRef
    )
  }
  const onRunButtonClick = () => {
    state = reset(
      scriptFieldRef,
      initialStackRef,
      executionStackRef,
      currentOpCodeRef,
      heightRef
    )

    state = run(state, {
      scriptFieldRef,
      initialStackRef,
      executionStackRef,
      currentOpCodeRef,
      heightRef,
    })
  }

  const onStepClick = () => {
    state = step(state, {
      scriptFieldRef,
      initialStackRef,
      executionStackRef,
      currentOpCodeRef,
      heightRef,
    })
  }

  return { onScriptInput, onStepClick, onRunButtonClick, onReset }
}

export default initializeInterpreter
