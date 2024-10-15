'use client'

import clsx from 'clsx'
import { useMediaQuery, useTranslations } from 'hooks'
import { useEffect, useRef, useState } from 'react'
import Convert from 'ansi-to-html'

import { Loader } from 'shared'
import Icon from 'shared/Icon'
import { HasherState } from './Hasher'
import { EditorConfig, LessonView, StoredLessonData } from 'types'
import { useLessonContext, StatusBar } from 'ui'
import { useDynamicHeight } from 'hooks'
import Terminal from './Terminal'
import { Base64String } from 'types/classes'

enum State {
  Idle = 'idle',
  Building = 'building',
  Running = 'running',
  Error = 'error',
  Complete = 'complete',
}

function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;') // Replace & with &amp;
    .replace(/</g, '&lt;') // Replace < with &lt;
    .replace(/>/g, '&gt;') // Replace > with &gt;
    .replace(/"/g, '&quot;') // Replace " with &quot;
    .replace(/'/g, '&#039;') // Replace ' with &#039;
}

const convert = new Convert()
const wsEndpoint =
  process.env.NEXT_PUBLIC_WS_ENDPOINT || 'wss://api.savingsatoshi.com'

let ws: WebSocket | undefined = undefined

const send = (action: string, payload: any) => {
  if (!ws) {
    throw new Error('WebSocket uninitialized')
  }
  ws.send(JSON.stringify({ action, payload }))
}

let success: boolean | 0 | 1 | 2 | 3 | 4 | 5
success = false

export default function Runner({
  language,
  code,
  config,
  program,
  errors,
  onValidate,
  handleTryAgain,
  lang,
  poorMessage,
  goodMessage,
  successMessage,
  setErrors,
}: {
  language: string
  code?: string
  config: EditorConfig
  program: string
  errors: string[]
  onValidate: (data: StoredLessonData) => Promise<any[]>
  handleTryAgain: (pressed: boolean) => void
  lang: string
  poorMessage: string
  goodMessage: string
  successMessage: string
  setErrors: (errors: string[]) => void
}) {
  const t = useTranslations(lang)
  const { activeView } = useLessonContext()
  const terminalRef = useRef()

  const [state, setState] = useState<State>(State.Idle)

  const [loading, setLoading] = useState<boolean>(false)
  const [isRunning, setIsRunning] = useState<boolean>(false)
  const hasResult = useRef(false)
  const isActive = activeView !== LessonView.Info
  const [isTryAgain, setIsTryAgain] = useState<boolean | null>(null)
  const [hasherState, setHasherState] = useState<HasherState>(
    HasherState.Waiting
  )

  const isSmallScreen = useMediaQuery({ width: 767 })

  const sendTerminal = (action: string, payload?: any) => {
    if (!terminalRef.current) {
      return
    }

    if (payload && payload.includes('<GE')) {
      payload = escapeHtml(payload)
    }

    if (payload) {
      payload = convert.toHtml(payload)
    }
    // @ts-ignore
    const win = terminalRef.current.contentWindow
    win.postMessage(JSON.stringify({ action, payload }), '*')
  }

  useDynamicHeight([activeView])

  const handleRunKeyPress = (event) => {
    if ((event.altKey || event.metaKey) && event.key === 'Enter') {
      handleRun()
    }
  }

  const handleRun = async () => {
    hasResult.current = false
    try {
      success = false
      setState(State.Building)
      setErrors([])
      setIsRunning(true)
      setHasherState(HasherState.Running)

      sendTerminal('clear')
      sendTerminal('print', t('runner.result'))
      sendTerminal('running', t('runner.computing'))

      if (ws) {
        ws.close()
      }

      ws = new WebSocket(wsEndpoint)
      ws.onopen = () => send('repl', { code: `${code}\n${program}`, language })
      ws.onmessage = async (e) => {
        let { type, payload } = JSON.parse(e.data)
        switch (type) {
          case 'status': {
            if (payload === 'running') {
              setState(State.Running)
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
            setState(State.Error)
            ws?.close()

            break
          }
          case 'debug': {
            const wsRemovedRegex =
              /\[system\] Image [0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{12} removed\./
            payload = payload.trim()
            if (wsRemovedRegex.test(payload)) {
              sendTerminal('clear')
              sendTerminal('print', t('runner.result'))
              sendTerminal('error', payload)
              setHasherState(HasherState.Error)
              setIsRunning(false)
              setState(State.Error)
              ws?.close()
            }
            break
          }
          case 'output': {
            payload = payload.trim()
            if (hasResult.current === false) {
              sendTerminal('clear')
              sendTerminal('print', t('runner.result'))
              hasResult.current = true
            }
            sendTerminal('print', payload)

            const [res, err] = await onValidate({
              code: new Base64String(`${code}\n${program}`),
              answer: payload,
            })
            if (!res || res === 2) {
              setIsRunning(false)
              setHasherState(HasherState.Error)
              if (err) {
                sendTerminal('error', err)
              }
              break
            }
            if (res === 3) {
              setIsRunning(false)
              setHasherState(HasherState.Success)
              success = 3
              sendTerminal('success', t('runner.evaluation'))
              sendTerminal('success', poorMessage)
              break
            }
            if (res === 4) {
              setIsRunning(false)
              setHasherState(HasherState.Success)
              success = 4
              sendTerminal('success', t('runner.evaluation'))
              sendTerminal('success', goodMessage)
              break
            }

            success = true
            setIsRunning(false)
            setHasherState(HasherState.Success)
            sendTerminal('success', t('runner.evaluation'))
            sendTerminal('success', successMessage)
            ws?.close()
            break
          }
          case 'end': {
            if (!success) {
              ws?.close()
            }

            if (!success) {
              setIsRunning(false)
              setHasherState(HasherState.Waiting)
              setState(State.Complete)
            }
            break
          }
        }
      }

      ws.onerror = (err) => {
        setIsRunning(false)
      }
    } catch (ex) {
      console.error(ex)
      setIsRunning(false)
    }
  }

  useEffect(() => {
    if (ws) {
      ws.close()
    }

    sendTerminal('clear')
  }, [language])

  const onTryAgain = () => {
    setIsTryAgain(true)
    handleTryAgain(true)
  }

  useEffect(() => {
    isTryAgain && setHasherState(HasherState.Waiting)
    setIsTryAgain(false)
  }, [isTryAgain, code])

  useEffect(() => {
    const handleMessage = (e) => {
      try {
        const { action, payload } = JSON.parse(e.data)
        switch (action) {
          case 'ready': {
            sendTerminal('clear')
            break
          }
        }
      } catch (ex) {}
    }
    if (terminalRef.current) {
      window.addEventListener('message', handleMessage)
    }
    return () => {
      window.removeEventListener('message', handleMessage)
    }
  }, [terminalRef])

  useEffect(() => {
    document.addEventListener('keydown', handleRunKeyPress)

    return () => {
      document.removeEventListener('keydown', handleRunKeyPress)
    }
  }, [])

  return (
    <>
      {loading && (
        <div
          className={clsx(
            'h-60 overflow-y-auto border-t border-white border-opacity-30 p-4',
            {
              'hidden md:flex': !isActive,
              flex: isActive,
            }
          )}
        >
          <Loader className="h-10 w-10 text-white" />
        </div>
      )}

      <div
        className={clsx({
          'hidden md:flex':
            !isSmallScreen ||
            (activeView !== LessonView.Execute &&
              hasherState !== HasherState.Success),
        })}
      >
        {state === State.Idle && (
          <div className="w-full border-t border-white border-opacity-30 bg-black bg-opacity-20 p-4">
            <div className="font-mono text-xs text-white">Script output</div>
            <div className="font-mono text-xs text-white text-opacity-60">
              Waiting for you to run the script...
            </div>
          </div>
        )}
        {state === State.Building && (
          <div className="h-full w-full grow border-t border-white border-opacity-30 bg-black bg-opacity-20 p-4">
            <div className="font-mono text-xs text-white">Starting up</div>
            <div className="font-mono text-xs text-white text-opacity-60">
              This will take just a few seconds...
            </div>
          </div>
        )}
        <Terminal
          ref={terminalRef}
          className={clsx({
            block:
              [State.Running, State.Error, State.Complete].indexOf(state) !==
              -1,
            hidden:
              [State.Running, State.Error, State.Complete].indexOf(state) ===
              -1,
          })}
        />
      </div>

      <div
        className={clsx(
          'flex h-14 min-h-14 w-full items-start border-t border-white border-opacity-30',
          {
            'hidden md:flex':
              !isSmallScreen &&
              activeView !== LessonView.Execute &&
              hasherState !== HasherState.Success,
            hidden:
              hasherState === HasherState.Success ||
              loading ||
              activeView === 'info',
            flex: isActive,
          }
        )}
      >
        <button
          disabled={loading || isRunning}
          className={clsx(
            'flex h-full items-center justify-start gap-3 px-4 font-mono text-white',
            {}
          )}
          onClick={handleRun}
        >
          {!isRunning && (
            <>
              <div
                className={clsx(
                  'flex h-6 w-6 items-center justify-center rounded-sm px-2 py-1.5',
                  {
                    'bg-white': !loading,
                    'bg-white/50': loading,
                  }
                )}
              >
                <Icon
                  icon="play"
                  className="h-full w-full object-contain text-[#334454]"
                />
              </div>
              <span>{t('runner.run')}</span>
            </>
          )}
          {isRunning && (
            <>
              <Loader className="h-6 w-6 text-white" />
              <span>Running...</span>
            </>
          )}
        </button>
      </div>
      {hasherState === HasherState.Success && (
        <StatusBar
          handleTryAgain={onTryAgain}
          className="h-14 min-h-14 grow"
          success={success}
        />
      )}
    </>
  )
}
