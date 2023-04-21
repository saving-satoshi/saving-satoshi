'use client'

import clsx from 'clsx'

import MonacoEditor from '@monaco-editor/react'

import { monacoOptions } from './config'
import { monaco } from 'react-monaco-editor'
import { useState } from 'react'
import { Loader } from 'shared'
import { LessonView } from 'types'
import { useLessonContext } from 'ui'
import { useMediaQuery } from 'hooks'

export default function Editor({
  language,
  value,

  onChange,
  onValidate,
}: {
  language: string
  value: string

  onChange?: (value: string) => void
  onValidate?: (value: monaco.editor.IMarker[]) => void
}) {
  const { activeView } = useLessonContext()
  const isActive = activeView === LessonView.Code
  const [loading, setLoading] = useState<boolean>(true)

  const handleBeforeMount = (monaco) => {
    monaco.editor.defineTheme('satoshi', {
      base: monacoOptions.theme,
      inherit: true,
      rules: [],
      colors: {
        'editor.background': '#00000003',
        'editor.lineHighlightBorder': '#00000000', // 4th channel is for transparency
        // 'editor.selectionBackground': '#ff0000',
        // 'editor.lineHighlightBackground': '#ff0000',
        // 'editor.selectionHighlightBorder': '#ff0000',
      },
    })

    /* Define custom types */
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

    setLoading(false)
  }

  const isSmallScreen = useMediaQuery({ width: 767 })

  return (
    <div
      className={clsx('relative font-mono text-sm text-white', {
        'hidden md:flex': !isActive,
        flex: isActive,
      })}
    >
      {loading && (
        <div className="absolute inset-0 -top-10 z-10 flex items-center justify-center bg-black/15">
          <Loader className="h-10 w-10 text-white" />
        </div>
      )}
      <MonacoEditor
        width={isSmallScreen ? '100vw' : 'calc(100vw / 2)'}
        height="calc(100vh - 71px - 48px - 40px - 240px)"
        language={language}
        theme={'satoshi'}
        value={value}
        beforeMount={handleBeforeMount}
        onMount={handleMount}
        onChange={onChange}
        onValidate={onValidate}
        options={monacoOptions}
      />
    </div>
  )
}
