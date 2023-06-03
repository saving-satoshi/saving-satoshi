'use client'

import clsx from 'clsx'
import { useTranslations } from 'hooks'
import { useEffect, useRef, useState } from 'react'
import { Loader } from 'shared'
import Icon from 'shared/Icon'
import Hasher, { HasherState } from './Hasher'
import { EditorConfig, LessonView } from 'types'
import { useLessonContext, StatusBar } from 'ui'
import { prepare } from 'api/repl'
import { url } from 'utils'
import Terminal from './Terminal'
import TabMenu from '../TabMenu'

const defaultConsoleMessage = 'Console v0.0.1'
const defaultSystemMessage = 'System Monitor v0.0.1'

export default function Runner({
  language,
  code,
  config,
  program,
  errors,
  onValidate,
  onReady,
  lang,
  successMessage,
  setErrors,
}: {
  language: string
  code?: string
  config: EditorConfig
  program: string
  errors: string[]
  onValidate: (output: string | number) => Promise<boolean>
  onReady?: () => void
  lang: string
  successMessage: string
  setErrors: (errors: string[]) => void
}) {
  const t = useTranslations(lang)
  const { activeView, setActiveView } = useLessonContext()
  const systemRef = useRef()
  const outputRef = useRef()

  const [loading, setLoading] = useState<boolean>(false)
  const [isRunning, setIsRunning] = useState<boolean>(false)
  const [result, setResult] = useState<any | undefined>(undefined)
  const [success, setSuccess] = useState<boolean | null>(null)
  const isActive = activeView !== LessonView.Info
  const [hasherState, setHasherState] = useState<HasherState>(
    HasherState.Waiting
  )

  const print = (el, message, mode = 'a') => {
    if (!el) {
      return
    }

    if (mode === 'a') {
      el.innerHTML += `<div class="output">${message}</div>`
    } else {
      el.innerHTML = `<div class="output">${message}</div>`
    }
    el.scrollTop = el.scrollHeight
  }

  const handleRun = async () => {
    try {
      setErrors([])
      setIsRunning(true)
      setHasherState(HasherState.Running)

      const output = outputRef.current as any
      const sysmon = systemRef.current as any

      print(output, defaultConsoleMessage, 'w')
      print(sysmon, defaultSystemMessage, 'w')

      const id = await prepare(`${code}\n${program}`, language)
      const events = new EventSource(url(`/repl/run/${language}/${id}`))

      events.onmessage = async (event) => {
        const { type, payload } = JSON.parse(event.data)

        switch (type) {
          case 'output': {
            print(output, payload)
            setResult(payload)

            const success = await onValidate(payload)
            if (success) {
              setHasherState(HasherState.Success)
              setSuccess(true)
            }
            break
          }
          case 'debug': {
            print(sysmon, payload)
            break
          }

          case 'error': {
            print(output, payload.replace(/ /gim, '&nbsp;'))
            setErrors([...errors, payload])
            setHasherState(HasherState.Error)
          }
        }
      }

      events.onerror = (event) => {
        if (event.eventPhase == EventSource.CLOSED) {
          events.close()
          setIsRunning(false)
        }
      }
    } catch (ex) {
      console.error(ex)
      setIsRunning(false)
    }
  }

  useEffect(() => {
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

      {/* {!loading && (
        <Hasher
          lang={lang}
          language={language}
          config={config}
          state={hasherState}
          successMessage={successMessage}
          errors={errors}
          value={result}
        />
      )} */}

      {!loading && (
        <TabMenu
          tabs={[
            { label: 'Hasher', value: 'hasher' },
            { label: 'Console', value: 'console' },
            { label: 'System monitor', value: 'system' },
          ]}
          defaultValue="hasher"
          className="h-[249px] border-t border-white border-opacity-30"
        >
          <TabMenu.Tab value="hasher">
            <Hasher
              key={result}
              lang={lang}
              language={language}
              config={config}
              state={hasherState}
              successMessage={successMessage}
              errors={errors}
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

declare function loadPyodide(): any
