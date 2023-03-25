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
}: {
  language: string
  code: string
  program: string
  errors: string[]
}) {
  const outputRef = useRef()
  const [loading, setLoading] = useState<boolean>(true)

  const handleRun = async () => {
    const outputEl = outputRef.current as HTMLElement
    if (!outputEl) {
      return
    }

    outputEl.innerHTML = `<div class="text-sm text-white font-mono">${defaultTerminalMessage}</div>`

    if (errors.length > 0) {
      outputEl.innerHTML += `<div class="text-sm text-red-500 font-mono">Did not compile, your code has errors</div>`
    }

    const iframe = document.createElement('iframe')
    iframe.style.width = '0px'
    iframe.style.height = '0px'
    document.body.appendChild(iframe)

    function handleMessage(e) {
      try {
        const { action, payload } = JSON.parse(e.data)
        switch (action) {
          case 'log': {
            outputEl.innerHTML += `<div class="text-sm text-white font-mono">${payload}</div>`
            outputEl.scrollTop = outputEl.scrollHeight
            break
          }
          case 'error': {
            outputEl.innerHTML += `<div class="text-sm text-red font-mono">${payload}</div>`
            outputEl.scrollTop = outputEl.scrollHeight
            break
          }
          case 'close': {
            window.removeEventListener('message', handleMessage)
            document.body.removeChild(iframe)
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
          className="h-8 rounded bg-emerald-500 px-4 font-mono text-white"
          onClick={handleRun}
        >
          Run
        </button>
      </div>
    </>
  )
}

declare function loadPyodide(): any
