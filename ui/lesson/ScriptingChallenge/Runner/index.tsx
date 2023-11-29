'use client'

import clsx from 'clsx'
import { useMediaQuery, useTranslations } from 'hooks'
import { useEffect, useRef, useState } from 'react'
import Convert from 'ansi-to-html'

import { Loader } from 'shared'
import Icon from 'shared/Icon'
import { HasherState } from './Hasher'
import { EditorConfig, LessonView } from 'types'
import { useLessonContext, StatusBar } from 'ui'
import { useDynamicHeight } from 'hooks'
import Terminal from './Terminal'

enum State {
  Idle = 'idle',
  Building = 'building',
  Running = 'running',
  Error = 'error',
  Complete = 'complete',
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

let success = false

export default function Runner({
  language,
  code,
  config,
  program,
  errors,
  onValidate,
  lang,
  successMessage,
  setErrors,
  successStyle,
}: {
  language: string
  code?: string
  config: EditorConfig
  program: string
  errors: string[]
  onValidate: (output: string | number) => Promise<any[]>
  lang: string
  successMessage: string
  setErrors: (errors: string[]) => void
  successStyle?: {
    backgroundColor?: string
    fontSize?: string
  }
}) {
  const t = useTranslations(lang)
  const { activeView } = useLessonContext()
  const terminalRef = useRef()

  const [state, setState] = useState<State>(State.Idle)

  const [loading, setLoading] = useState<boolean>(false)
  const [isRunning, setIsRunning] = useState<boolean>(false)
  const isActive = activeView !== LessonView.Info
  const [hasherState, setHasherState] = useState<HasherState>(
    HasherState.Waiting
  )

  const isSmallScreen = useMediaQuery({ width: 767 })

  const sendTerminal = (action: string, payload?: any) => {
    if (!terminalRef.current) {
      return
    }

    if (payload) {
      payload = convert.toHtml(payload)
    }
    // @ts-ignore
    const win = terminalRef.current.contentWindow
    win.postMessage(JSON.stringify({ action, payload }), '*')
  }

  useDynamicHeight([activeView])

  const handleRun = async () => {
    try {
      success = false
      setState(State.Building)
      setErrors([])
      setIsRunning(true)
      setHasherState(HasherState.Running)

      sendTerminal('clear')
      sendTerminal('print', t('runner.result'))

      if (ws) {
        ws.close()
      }

      ws = new WebSocket(wsEndpoint)
      ws.onopen = () => send('repl', { code: `${code}\n${program}`, language })
      ws.onmessage = async (e) => {
        let { type, payload } = JSON.parse(e.data)
        console.log(type)
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
            // payload = payload.trim()
            // sendTerminal('print', payload)
            break
          }
          case 'output': {
            payload = payload.trim()
            sendTerminal('print', payload)

            const [res, err] = await onValidate(payload)
            if (!res) {
              setIsRunning(false)
              setHasherState(HasherState.Error)
              if (err) {
                sendTerminal('error', err)
              }
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

  useEffect(() => {
    setHasherState(HasherState.Waiting)
  }, [code])

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
          successStyle={success ? successStyle : undefined}
        />
      </div>

      <div
        className={clsx(
          'min-h-14 flex h-14 w-full items-start border-t border-white border-opacity-30',
          {
            'hidden md:flex':
              !isSmallScreen ||
              (activeView !== LessonView.Execute &&
                hasherState !== HasherState.Success),
            hidden: hasherState === HasherState.Success || loading,
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
                  'flex h-6 w-6 items-center justify-center rounded-sm',
                  {
                    'bg-white': !loading,
                    'bg-white/50': loading,
                  }
                )}
              >
                <Icon icon="play" className="text-[#334454]" />
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
        <StatusBar className="min-h-14 h-14 grow" success={success} />
      )}
    </>
  )
}
