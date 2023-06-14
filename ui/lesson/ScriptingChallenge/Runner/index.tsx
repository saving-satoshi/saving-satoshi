'use client'

import clsx from 'clsx'
import { useTranslations } from 'hooks'
import { useEffect, useRef, useState } from 'react'
import Convert from 'ansi-to-html'

import { Loader } from 'shared'
import Icon from 'shared/Icon'
import Hasher, { HasherState } from './Hasher'
import { EditorConfig, LessonView } from 'types'
import { useLessonContext, StatusBar } from 'ui'
import Terminal from './Terminal'
import TabMenu from '../TabMenu'
import { useMediaQuery } from 'hooks'
import { useDynamicHeight } from 'hooks'

const defaultConsoleMessage = 'Console v0.0.1'
const defaultSystemMessage = 'System Monitor v0.0.1'
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
}) {
  const t = useTranslations(lang)
  const { activeView } = useLessonContext()
  const systemRef = useRef()
  const outputRef = useRef()

  const [loading, setLoading] = useState<boolean>(false)
  const [isRunning, setIsRunning] = useState<boolean>(false)
  const [result, setResult] = useState<any | undefined>(undefined)
  const isActive = activeView !== LessonView.Info
  const [validationError, setValidationError] = useState<string | undefined>(
    undefined
  )
  const [hasherState, setHasherState] = useState<HasherState>(
    HasherState.Waiting
  )

  useDynamicHeight([activeView])
  const isSmallScreen = useMediaQuery({ width: 767 })

  const handleRun = async () => {
    try {
      success = false
      setErrors([])
      setIsRunning(true)
      setHasherState(HasherState.Running)

      ws = new WebSocket(wsEndpoint)

      ws.onopen = () => {
        print(sysmon, '[system] Websocket connection established.')
        send('repl', { code: `${code}\n${program}`, language })
      }

      ws.onmessage = async (e) => {
        let { type, payload } = JSON.parse(e.data)

        switch (type) {
          case 'error': {
            payload = payload.trim()
            const lines = payload.split('\n')
            lines.forEach((line) => print(output, line))
            setErrors([...errors, ...lines])
            setHasherState(HasherState.Error)
            setIsRunning(false)
            break
          }
          case 'debug': {
            payload = payload.trim()
            print(sysmon, payload)
            break
          }
          case 'output': {
            payload = payload.trim()
            print(output, payload)
            setResult(payload)

            const [res, err] = await onValidate(payload)
            if (res) {
              setHasherState(HasherState.Success)
              success = true
              setIsRunning(false)
            } else {
              setValidationError(err)
            }
            break
          }
          case 'end': {
            if (!success) {
              ws?.close()
            }

            print(
              sysmon,
              `[system] Process exited with code ${payload ? 1 : 0}`
            )
            break
          }
        }
      }

      ws.onerror = (err) => {
        setIsRunning(false)
      }

      const output = outputRef.current as any
      const sysmon = systemRef.current as any

      print(output, defaultConsoleMessage, 'w')
      print(sysmon, defaultSystemMessage, 'w')
    } catch (ex) {
      console.error(ex)
      setIsRunning(false)
    }
  }

  useEffect(() => {
    if (ws) {
      ws.close()
    }

    print(outputRef.current, defaultConsoleMessage, 'w')
    print(systemRef.current, defaultSystemMessage, 'w')
  }, [language])

  useEffect(() => {
    setHasherState(HasherState.Waiting)
  }, [code])

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

      {!loading && (
        <TabMenu
          tabs={[
            { label: 'Hasher', value: 'hasher' },
            { label: 'Console', value: 'console' },
            { label: 'System monitor', value: 'system' },
          ]}
          defaultValue="hasher"
          className={clsx(
            'terminal-wrapper border-t border-white border-opacity-30',
            {
              hidden: isSmallScreen && activeView !== LessonView.Execute,
              flex: isSmallScreen && activeView === LessonView.Execute,
            }
          )}
        >
          <TabMenu.Tab value="hasher">
            <Hasher
              key={result}
              lang={lang}
              language={language}
              config={config}
              state={hasherState}
              successMessage={successMessage}
              validationError={validationError}
              value={result}
            />
          </TabMenu.Tab>
          <TabMenu.Tab value="console">
            <Terminal defaultMessage={defaultConsoleMessage} ref={outputRef} />
          </TabMenu.Tab>
          <TabMenu.Tab value="system">
            <Terminal defaultMessage={defaultSystemMessage} ref={systemRef} />
          </TabMenu.Tab>
        </TabMenu>
      )}

      <div
        className={clsx(
          'min-h-14 flex h-14 w-full items-start border-t border-white border-opacity-30',
          {
            'hidden md:flex': !isActive && hasherState !== HasherState.Success,
            hidden: hasherState === HasherState.Success || loading,
            flex: isActive,
          }
        )}
      >
        {!isRunning && (
          <button
            disabled={loading}
            className={clsx(
              'flex h-full items-center justify-start gap-3 px-4 font-mono text-white',
              {}
            )}
            onClick={handleRun}
          >
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
          </button>
        )}
        {isRunning && (
          <button
            disabled={loading}
            className={clsx(
              'flex h-full items-center justify-start gap-3 px-4 font-mono text-white',
              {}
            )}
            onClick={handleRun}
          >
            <div className="flex h-6 w-6 items-center justify-center rounded-sm bg-white">
              <Icon icon="pause" className="h-3 w-3 text-[#334454]" />
            </div>

            <span>{t('runner.pause')}</span>
          </button>
        )}
      </div>
      {hasherState === HasherState.Success && (
        <StatusBar className="min-h-14 h-14 grow" success={success} />
      )}
    </>
  )
}

const print = (element, message, mode = 'a') => {
  if (!element) {
    return
  }

  const messageEl = convert.toHtml(message.replace(/ /gim, '&nbsp;'))
  if (mode === 'a') {
    element.innerHTML += `<div class="output">${messageEl}</div>`
  } else {
    element.innerHTML = `<div class="output">${messageEl}</div>`
  }

  element.scrollTop = element.scrollHeight
}
