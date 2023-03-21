'use client'

import clsx from 'clsx'
import { useRef, useState } from 'react'
import MonacoEditor from '@monaco-editor/react'

import * as VM from 'lib/vm'

interface EditorLanguages {
  [language: string]: {
    program: string
    defaultCode?: string
  }
}

interface EditorConfig {
  defaultLanguage: string
  languages: EditorLanguages
}

const languageMeta = {
  javascript: {
    value: 'javascript',
    label: 'JavaScript',
  },
  python: {
    value: 'python',
    label: 'Python',
  },
}

export default function Editor({
  config,
  onChange,
}: {
  config: EditorConfig
  onChange?: (value: string) => void
}) {
  const outputRef = useRef()
  const [code, setCode] = useState(
    config.languages[config.defaultLanguage].defaultCode
  )
  const [errors, setErrors] = useState([])
  const [language, setLanguage] = useState(config.defaultLanguage)

  const handleSetLanguage = (value) => {
    setLanguage(value)
    setCode(config.languages[value].defaultCode)
  }

  const handleBeforeMount = (monaco) => {
    monaco.editor.defineTheme('satoshi', {
      base: 'vs-dark',
      inherit: true,
      rules: [],
      colors: {
        // 'editor.background': '#7B1810',
      },
    })

    // monaco.languages.typescript.javascriptDefaults.addExtraLib(
    //   [
    //     'declare const Facts = {',
    //     '    /**',
    //     '     * Returns the next fact',
    //     '     */',
    //     '    static next():string',
    //     '}',
    //   ].join('\n'),
    //   'filename/facts.d.ts'
    // )
  }

  const handleMount = (editor, monaco) => {
    monaco.editor.setTheme('satoshi')
  }

  const handleChange = (val) => {
    setCode(val)
    if (typeof onChange === 'function') {
      onChange(val)
    }
  }

  const handleValidate = (markers) => {
    setErrors(
      markers.filter(
        (marker) => marker.code !== '80001' && marker.code !== '6133'
      )
    )
  }

  const handleRun = () => {
    const outputEl = outputRef.current as HTMLElement
    if (!outputEl) {
      return
    }

    outputEl.innerHTML = `<div class="text-sm text-white font-mono">Saving Satoshi Terminal v1.0.0</div>`

    if (errors.length > 0) {
      outputEl.innerHTML += `<div class="text-sm text-red-500 font-mono">Did not compile, your code has errors</div>`
    }

    const vm = VM.create(config.languages[language].program, {
      language: language,
    })

    vm.on('error', (data) => {
      outputEl.innerHTML += `<div class="text-sm text-red font-mono">${data}</div>`
      outputEl.scrollTop = outputEl.scrollHeight
    })

    vm.on('log', (data) => {
      outputEl.innerHTML += `<div class="text-sm text-white font-mono">${data}</div>`
      outputEl.scrollTop = outputEl.scrollHeight
    })

    vm.run(code, 'find_hash')
  }

  return (
    <div className="flex flex-col">
      <div className="flex h-10 items-center justify-start border-b border-white border-opacity-30 bg-[#432A43]">
        {Object.keys(config.languages).map((l, i) => {
          const meta = languageMeta[l]
          return (
            <button
              key={i}
              onClick={() => handleSetLanguage(meta.value)}
              className={clsx(
                'h-full border-r border-white border-opacity-30 px-4',
                { 'bg-black bg-opacity-20': meta.value === language }
              )}
            >
              <span
                className={clsx('font-nunito text-xs text-white', {
                  'text-opacity-40': meta.value !== language,
                })}
              >
                {meta.label}
              </span>
            </button>
          )
        })}
      </div>
      <div className="bg-[#432A43] font-mono text-sm text-white">
        <MonacoEditor
          width="calc(100vw / 2)"
          height="calc(100vh - 71px - 48px - 40px - 160px)"
          // theme="satoshi"
          // defaultLanguage={language}
          // defaultValue={code}
          language={language}
          value={code}
          beforeMount={handleBeforeMount}
          onMount={handleMount}
          onChange={handleChange}
          onValidate={handleValidate}
          options={{
            readOnly: false,
            minimap: { enabled: false },
            // overviewRulerLanes: 0,
            // overviewRulerBorder: false,
            // scrollbar: {
            //   vertical: 'auto',
            //   horizontal: 'hidden',
            //   handleMouseWheel: true,
            // },
            scrollBeyondLastLine: false,
            wordWrap: 'on',
          }}
        />
      </div>
      <div
        className="h-40 overflow-y-auto border-t border-white border-opacity-30 bg-[#432A43] p-4"
        ref={outputRef}
      >
        <div className={clsx('font-mono text-sm text-white')}>
          Saving Satoshi Terminal v1.0.0
        </div>
      </div>
      <div className="flex h-12 w-full items-center border-t border-white border-opacity-30 bg-[#432A43] px-2">
        <button
          className="h-8 rounded bg-emerald-500 px-4 font-mono text-white"
          onClick={handleRun}
        >
          Run
        </button>
      </div>
    </div>
  )
}
