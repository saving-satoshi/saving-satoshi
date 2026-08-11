'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import type { Dispatch, RefObject, SetStateAction } from 'react'
import Convert from 'ansi-to-html'

import { LessonView, StoredLessonData } from 'types'
import { Base64String } from 'types/classes'
import { HasherState } from './Hasher'
import {
  DEFAULT_OUTPUT_HEIGHT,
  OUTPUT_COPY,
  RUNNER_WS_ENDPOINT,
  RunnerState,
} from './constants'

let ws: WebSocket | undefined = undefined

function escapeHtml(text: string) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

const convert = new Convert()

const send = (action: string, payload: any) => {
  if (!ws) {
    throw new Error('WebSocket uninitialized')
  }
  ws.send(JSON.stringify({ action, payload }))
}

export default function useRunnerExecution({
  terminalRef,
  language,
  code,
  program,
  onValidate,
  isOutputCollapsed,
  showOutput,
  setErrors,
  poorMessage,
  goodMessage,
  setActiveView,
  setTerminalHeight,
  t,
}: {
  terminalRef: RefObject<HTMLIFrameElement | null>
  language: string
  code?: string
  program: string
  onValidate: (data: StoredLessonData) => Promise<any[]>
  isOutputCollapsed: boolean
  showOutput: () => void
  setErrors: (errors: string[]) => void
  poorMessage: string
  goodMessage: string
  setActiveView: Dispatch<SetStateAction<LessonView>>
  setTerminalHeight: Dispatch<SetStateAction<number>>
  t: (key: string) => string
}) {
  const [state, setState] = useState<RunnerState>(RunnerState.Idle)
  const [loading] = useState(false)
  const [isRunning, setIsRunning] = useState(false)
  const [success, setSuccess] = useState<boolean | 0 | 1 | 2 | 3 | 4 | 5>(false)
  const [hasherState, setHasherState] = useState<HasherState>(
    HasherState.Waiting
  )
  const hasResult = useRef(false)
  const outputBuffer = useRef<string[]>([])

  const sendTerminal = useCallback(
    (action: string, payload?: any) => {
      const win = terminalRef.current?.contentWindow

      if (!win) {
        return
      }

      if (payload && payload.includes('<GE')) {
        payload = escapeHtml(payload)
      }

      if (payload) {
        payload = convert.toHtml(payload)
      }

      win.postMessage(JSON.stringify({ action, payload }), '*')
    },
    [terminalRef]
  )

  const handleRun = useCallback(async () => {
    setActiveView(LessonView.Execute)
    hasResult.current = false
    outputBuffer.current = []

    try {
      setSuccess(false)
      setState(RunnerState.Building)
      if (isOutputCollapsed) {
        showOutput()
      }
      setErrors([])
      setIsRunning(true)
      setHasherState(HasherState.Running)
      setTerminalHeight(DEFAULT_OUTPUT_HEIGHT)
      sendTerminal('clear')
      sendTerminal('print', t('runner.result'))
      sendTerminal('running', t('runner.computing'))

      if (ws) {
        ws.close()
      }

      ws = new WebSocket(RUNNER_WS_ENDPOINT)
      ws.onopen = () =>
        send('repl', {
          code: Buffer.from(`${code}\n${program}`).toString('base64'),
          language,
        })

      ws.onmessage = async (event) => {
        const { type, payload } = JSON.parse(event.data)

        switch (type) {
          case 'status': {
            if (payload === 'running') {
              setState(RunnerState.Running)
            }
            break
          }
          case 'error': {
            const error = payload.message.trim()
            const lines = error.split('\n')
            sendTerminal('clear')
            sendTerminal('print', t('runner.result'))
            lines.forEach((line) =>
              sendTerminal('error', line.replace(' ', '&nbsp;'))
            )
            setHasherState(HasherState.Error)
            setIsRunning(false)
            setState(RunnerState.Error)
            ws?.close()
            break
          }
          case 'debug': {
            const wsRemovedRegex =
              /\[system\] Image [0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{12} removed\./
            if (hasResult.current === false && wsRemovedRegex.test(payload)) {
              sendTerminal('clear')
              sendTerminal('print', t('runner.result'))
              sendTerminal('error', OUTPUT_COPY.timeoutMessage)
              setHasherState(HasherState.Error)
              setIsRunning(false)
              setState(RunnerState.Error)
              ws?.close()
            }
            break
          }
          case 'output': {
            const trimmedPayload = payload.trim()
            if (trimmedPayload) {
              outputBuffer.current.push(trimmedPayload)
              hasResult.current = true
            }
            break
          }
          case 'end': {
            if (hasResult.current === false) {
              sendTerminal('clear')
              sendTerminal('print', t('runner.result'))
              sendTerminal('error', OUTPUT_COPY.timeoutMessage)
              setHasherState(HasherState.Error)
              setIsRunning(false)
              setState(RunnerState.Error)
              ws?.close()
              break
            }

            const completeOutput = outputBuffer.current.join('')
            sendTerminal('clear')
            sendTerminal('print', t('runner.result'))
            sendTerminal('print', completeOutput)

            const [res, msg] = await onValidate({
              code: new Base64String(`${code}\n${program}`),
              answer: completeOutput,
            })

            if (!res || res === 2) {
              setIsRunning(false)
              setHasherState(HasherState.Error)
              setState(RunnerState.Error)
              if (msg) {
                sendTerminal('error', msg)
              }
              ws?.close()
              break
            }

            if (res === 3) {
              setSuccess(3)
              setIsRunning(false)
              setHasherState(HasherState.Success)
              setState(RunnerState.Complete)
              sendTerminal('success', t('runner.evaluation'))
              sendTerminal('success', poorMessage)
              ws?.close()
              break
            }

            if (res === 4) {
              setSuccess(4)
              setIsRunning(false)
              setHasherState(HasherState.Success)
              setState(RunnerState.Complete)
              sendTerminal('success', t('runner.evaluation'))
              sendTerminal('success', goodMessage)
              ws?.close()
              break
            }

            setSuccess(true)
            setIsRunning(false)
            setHasherState(HasherState.Success)
            setState(RunnerState.Complete)
            sendTerminal('success', t('runner.evaluation'))
            sendTerminal('success', msg)
            ws?.close()
            break
          }
        }
      }

      ws.onerror = () => {
        setIsRunning(false)
      }
    } catch (error) {
      console.error(error)
      setIsRunning(false)
    }
  }, [
    code,
    goodMessage,
    isOutputCollapsed,
    language,
    onValidate,
    poorMessage,
    program,
    sendTerminal,
    setActiveView,
    setErrors,
    setTerminalHeight,
    showOutput,
    t,
  ])

  useEffect(() => {
    if (ws) {
      ws.close()
    }

    sendTerminal('clear')
  }, [language, sendTerminal])

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      try {
        const { action } = JSON.parse(event.data)
        if (action === 'ready') {
          sendTerminal('clear')
        }
      } catch {
        // ignore invalid postMessage payloads
      }
    }

    if (terminalRef.current) {
      window.addEventListener('message', handleMessage)
    }

    return () => {
      window.removeEventListener('message', handleMessage)
    }
  }, [sendTerminal, terminalRef])

  const resetHasherState = useCallback(() => {
    setHasherState(HasherState.Waiting)
  }, [])

  return {
    state,
    loading,
    isRunning,
    success,
    hasherState,
    handleRun,
    resetHasherState,
  }
}
