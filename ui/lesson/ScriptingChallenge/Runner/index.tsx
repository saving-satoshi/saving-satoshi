'use client'

import clsx from 'clsx'
import { useTranslations } from 'hooks'
import Script from 'next/script'
import { useEffect, useState } from 'react'
import { Loader } from 'shared'
import Icon from 'shared/Icon'
import compilers from '../compilers'
import Hasher, { HasherState } from './Hasher'
import { EditorConfig, LessonView } from 'types'
import { useLessonContext, StatusBar } from 'ui'

let worker

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

  const [loading, setLoading] = useState<boolean>(true)
  const [isRunning, setIsRunning] = useState<boolean>(false)
  const [result, setResult] = useState<any | undefined>(undefined)
  const [success, setSuccess] = useState<boolean | null>(null)
  const isActive = activeView !== LessonView.Info
  const [hasherState, setHasherState] = useState<HasherState>(
    HasherState.Waiting
  )

  const handleRun = async () => {
    setIsRunning(true)
    setErrors([])
    setHasherState(HasherState.Running)
    setActiveView(LessonView.Execute)
    setIsRunning(true)

    const iframe = document.createElement('iframe')
    iframe.style.width = '0px'
    iframe.style.height = '0px'
    document.body.appendChild(iframe)

    function destroyIframe() {
      window.removeEventListener('message', handleMessage)
      document.body.removeChild(iframe)
    }

    function print(message, config = { color: '#FFFFFF' }) {
      // outputEl.innerHTML += `<div class="text-sm font-mono" style="color: ${config.color};">${message}</div>`
      // outputEl.scrollTop = outputEl.scrollHeight
    }

    async function handleMessage(e) {
      try {
        const { action, payload, requestId } = JSON.parse(e.data)
        const isRequest = requestId !== undefined

        switch (action) {
          case 'log': {
            typeof payload === 'string' && print(payload)
            break
          }
          case 'result': {
            typeof payload.value === 'string' && setResult(payload)

            if (payload.error) {
              const parsedError = compilers[language].parseError(payload.error)
              setErrors([parsedError])
              setHasherState(HasherState.Error)
              setIsRunning(false)
              destroyIframe()
              return
            }
            break
          }
          case 'error': {
            setErrors([payload])
            setIsRunning(false)
            destroyIframe()
            break
          }
          case 'validate': {
            const result = await onValidate(payload)
            if (result) {
              print('You found a hash!', { color: '#00FF00' })
            } else {
              print('Your script does not work, please try again.', {
                color: '#FFA500',
              })
            }

            if (result) {
              setHasherState(HasherState.Success)
              setSuccess(true)
            }

            if (isRequest) {
              if (language === 'javascript') {
                iframe.contentWindow?.postMessage(
                  JSON.stringify({
                    action: 'result',
                    payload: result,
                    requestId,
                  })
                )
              } else {
                worker.postMessage(
                  JSON.stringify({
                    action: 'result',
                    payload: result,
                    requestId,
                  })
                )
              }
            }
            break
          }
          case 'close': {
            setIsRunning(false)
            destroyIframe()
            break
          }

          default: {
            console.log(action, payload, requestId)
            break
          }
        }
      } catch (ex) {}
    }

    window.addEventListener('message', handleMessage)

    const compiledCode = compilers[language].compile(code, program)

    switch (language) {
      case 'javascript': {
        const doc = iframe.contentDocument
        if (doc) {
          doc.open()
          doc.write(compiledCode)
          doc.close()
        }
        break
      }
      case 'python': {
        if (worker) {
          worker.onmessage = handleMessage
          worker.postMessage(
            JSON.stringify({ action: 'run', payload: compiledCode })
          )
        } else {
          let pyodide = await loadPyodide()
          pyodide.runPythonAsync(compiledCode)
        }
        break
      }
    }
  }

  useEffect(() => {
    worker = new Worker('/webworker.js')
    worker.onmessage = (e) => {
      const { action } = JSON.parse(e.data)
      switch (action) {
        case 'pyodide_ready': {
          setLoading(false)

          if (typeof onReady === 'function') {
            onReady()
          }
          break
        }
      }
    }

    worker.postMessage(JSON.stringify({ action: 'init', payload: null }))

    return () => {
      worker?.terminate()
    }
  }, [])

  useEffect(() => {
    setHasherState(HasherState.Waiting)
  }, [code])

  return (
    <>
      <Script src="https://cdn.jsdelivr.net/pyodide/v0.22.1/full/pyodide.js" />

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
        <Hasher
          lang={lang}
          language={language}
          config={config}
          state={hasherState}
          successMessage={successMessage}
          errors={errors}
          value={result?.value}
        />
      )}

      <div
        className={clsx(
          'flex h-16 w-full items-start border-t border-white border-opacity-30',
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
        <StatusBar className="max-h-40 grow" success={success} />
      )}
    </>
  )
}

declare function loadPyodide(): any
