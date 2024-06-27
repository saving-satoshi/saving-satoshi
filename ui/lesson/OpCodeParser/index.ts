/* eslint-env browser */
'use strict'

import { opFunctions } from './OPFunctions'

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
  scriptFieldRef: InterpreterAreaRef
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
  scriptField: InterpreterAreaRef,
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
export const getKey = (keyData: string): string => {
  if (!keyData) {
    throw new Error('Missing key')
  }
  const keyMatch = /PUBKEY\((.*?)\)/.exec(keyData)
  if (!keyMatch || keyMatch.length !== 2) {
    throw new Error(`Invalid public key: ${keyData}`)
  }
  return keyMatch[1]
}

export const getSig = (sigData: string): string => {
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

// Main Interpreter Functions
const reset = (
  scriptFieldRef: InterpreterAreaRef,
  initialStackRef: InterpreterRef,
  executionStackRef: InterpreterAreaRef,
  currentOpCodeRef: InterpreterDivRef,
  heightRef: InterpreterRef
): InterpreterState => {
  const state: InterpreterState = {
    ...initialState,
    script: scriptFieldRef.current?.value.split(' '),
    stack: initialStackRef.current?.value
      .split(',')
      .filter((item) => item.length)
      .map((item) => item.trim()),
  }

  if (executionStackRef.current) {
    updateStack(executionStackRef, state.stack)
  }
  currentOp(currentOpCodeRef, '')
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
      const result = opFunctions[opcode](state.state, state.negate, state.stack)
      state.state = result.state
      state.negate = result.negate
    } else if (opcode === 'OP_CHECKLOCKTIMEVERIFY') {
      opFunctions[opcode](state.stack, heightRef)
    } else {
      opFunctions[opcode](state.stack)
    }
  } catch (e: any) {
    error(currentOpCodeRef, e.message)
    return { ...state, finished: true }
  }

  console.log(state.stack, state.exec_ptr, state.script[state.exec_ptr])
  updateStack(executionStackRef, state.stack)
  state.exec_ptr++
  return state
}

const run = (state: InterpreterState, refs: Refs): InterpreterState => {
  state.exec_ptr = -1
  while (!state.finished) {
    state = step(state, refs)
  }

  return state
}

// Initialization
const initializeInterpreter = (
  scriptFieldRef: InterpreterAreaRef,
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
