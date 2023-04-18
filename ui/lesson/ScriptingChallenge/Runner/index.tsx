'use client'

import clsx from 'clsx'
import { useTranslations } from 'hooks'
import Script from 'next/script'
import { useEffect, useRef, useState } from 'react'
import { Loader } from 'shared'
import Icon from 'shared/Icon'
import Terminal from './Terminal'
import compilers from '../compilers'
import Hasher, { HasherState } from './Hasher'
import { EditorConfig } from 'types'

let worker
const defaultTerminalMessage = 'Saving Satoshi Runner v0.0.1'

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
}: {
  language: string
  code: string
  config: EditorConfig
  program: string
  errors: string[]
  onValidate: (output: string | number) => Promise<boolean>
  onReady?: () => void
  lang: string
  successMessage: string
}) {
  const t = useTranslations(lang)
  const outputRef = useRef()
  const [loading, setLoading] = useState<boolean>(true)
  const [isRunning, setIsRunning] = useState<boolean>(false)
  const [result, setResult] = useState<any | undefined>(undefined)

  const handleRun = async () => {
    const outputEl = outputRef.current as HTMLElement
    setIsRunning(true)

    // outputEl.innerHTML = `<div class="text-sm text-white font-mono">${defaultTerminalMessage}</div>`

    const iframe = document.createElement('iframe')
    iframe.style.width = '0px'
    iframe.style.height = '0px'
    document.body.appendChild(iframe)

    function destroyIframe() {
      window.removeEventListener('message', handleMessage)
      document.body.removeChild(iframe)
    }

    if (errors.length > 0) {
      // outputEl.innerHTML += `<div class="text-sm text-red-500 font-mono">Did not compile, your code has errors</div>`
      setIsRunning(false)
      return destroyIframe()
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
            print(payload)
            break
          }
          case 'result': {
            setResult(payload)
            break
          }
          case 'error': {
            print(payload, { color: '#FF0000' })
            setIsRunning(false)
            break
          }
          case 'validate': {
            const success = await onValidate(payload)
            if (success) {
              print('You found a hash!', { color: '#00FF00' })
            } else {
              print('Your script does not work, please try again.', {
                color: '#FFA500',
              })
            }

            if (isRequest) {
              if (language === 'javascript') {
                iframe.contentWindow.postMessage(
                  JSON.stringify({
                    action: 'result',
                    payload: success,
                    requestId,
                  })
                )
              } else {
                worker.postMessage(
                  JSON.stringify({
                    action: 'result',
                    payload: success,
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
        doc.open()
        doc.write(compiledCode)
        doc.close()
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

  const getHasherState = () => {
    if (!isRunning && result && result.startsWith('00000')) {
      return HasherState.Success
    }

    if (!isRunning && !result) {
      return HasherState.Waiting
    }

    return HasherState.Running
  }

  useEffect(() => {
    worker = new Worker('/webworker.js')
    worker.onmessage = (e) => {
      const { action, payload } = JSON.parse(e.data)
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

  return (
    <>
      <Script src="https://cdn.jsdelivr.net/pyodide/v0.22.1/full/pyodide.js" />

      {loading && (
        <div className="h-60 overflow-y-auto border-t border-white border-opacity-30 bg-[#253547] p-4">
          <Loader className="h-10 w-10 text-white" />
        </div>
      )}

      {/* {!loading && (
        <Terminal defaultMessage={defaultTerminalMessage} ref={outputRef} />
      )} */}

      {!loading && (
        <Hasher
          lang={lang}
          language={language}
          config={config}
          state={getHasherState()}
          successMessage={successMessage}
          errorMessage="hasher_error_message"
          value={result}
        />
      )}

      <div className="flex h-12 w-full items-center border-t border-white border-opacity-30 bg-[#253547]">
        {!isRunning && (
          <button
            disabled={loading}
            className={clsx(
              'flex h-full items-center justify-start gap-3 px-4 font-mono text-white',
              {}
            )}
            onClick={handleRun}
          >
            <div className="flex h-6 w-6 items-center justify-center rounded-sm bg-white">
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
    </>
  )
}

declare function loadPyodide(): any
