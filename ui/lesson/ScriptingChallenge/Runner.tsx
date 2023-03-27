'use client'

import clsx from 'clsx'
import Script from 'next/script'
import { useEffect, useRef, useState } from 'react'
import langs from './langs'

let worker
const defaultTerminalMessage = 'Saving Satoshi Runner v0.0.1'

export default function Runner({
  language,
  code,
  program,
  errors,
  onValidate,
}: {
  language: string
  code: string
  program: string
  errors: string[]
  onValidate: (output: string | number) => Promise<boolean>
}) {
  const outputRef = useRef()
  const [loading, setLoading] = useState<boolean>(true)
  const [isRunning, setIsRunning] = useState<boolean>(false)

  const handleRun = async () => {
    const outputEl = outputRef.current as HTMLElement
    if (!outputEl) {
      return
    }

    setIsRunning(true)

    outputEl.innerHTML = `<div class="text-sm text-white font-mono">${defaultTerminalMessage}</div>`

    const iframe = document.createElement('iframe')
    iframe.style.width = '0px'
    iframe.style.height = '0px'
    document.body.appendChild(iframe)

    function destroyIframe() {
      window.removeEventListener('message', handleMessage)
      document.body.removeChild(iframe)
    }

    if (errors.length > 0) {
      outputEl.innerHTML += `<div class="text-sm text-red-500 font-mono">Did not compile, your code has errors</div>`
      setIsRunning(false)
      return destroyIframe()
    }

    function print(message, config = { color: '#FFFFFF' }) {
      outputEl.innerHTML += `<div class="text-sm font-mono" style="color: ${config.color};">${message}</div>`
      outputEl.scrollTop = outputEl.scrollHeight
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
              iframe.contentWindow.postMessage(
                JSON.stringify({
                  action: 'result',
                  payload: success,
                  requestId,
                })
              )
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

    const compiledCode = langs[language].compile(code, program)

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

  useEffect(() => {
    worker = new Worker('/webworker.js')
    worker.onmessage = (e) => {
      const { action, payload } = JSON.parse(e.data)
      switch (action) {
        case 'pyodide_ready': {
          console.log('pyodide ready')
          setLoading(false)
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

      <div
        className="h-40 overflow-y-auto border-t border-white border-opacity-30 p-4"
        ref={outputRef}
      >
        <div className={clsx('font-mono text-sm text-white')}>
          {defaultTerminalMessage}
        </div>
      </div>
      <div className="flex h-12 w-full items-center border-t border-white border-opacity-30 px-2">
        <button
          disabled={isRunning || loading}
          className={clsx('h-8 rounded px-4 font-mono text-white', {
            'bg-emerald-500': !isRunning && !loading,
            'pointer-events-none cursor-default bg-gray-500':
              isRunning || loading,
          })}
          onClick={handleRun}
        >
          {isRunning ? 'Running' : 'Run'}
        </button>
      </div>
    </>
  )
}

declare function loadPyodide(): any
