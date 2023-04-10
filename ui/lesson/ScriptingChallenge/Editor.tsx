'use client'

import clsx from 'clsx'

import MonacoEditor from '@monaco-editor/react'

import { monacoOptions } from './config'
import { monaco } from 'react-monaco-editor'
import { useState } from 'react'
import { Loader } from 'shared'
import { LessonView } from 'types'
import { useLessonContext, StatusBar } from 'ui'

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
        'editor.background': '#253547',
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

  return (
    <div
      className={clsx(
        'flex w-full flex-col gap-1 px-4 py-6 font-nunito text-white md:justify-center',
        {
          'hidden md:flex': !isActive,
          flex: isActive,
        }
      )}
    >
      {loading && (
        <div className="absolute inset-0 -top-10 z-10 flex items-center justify-center bg-[#253547]">
          <Loader />
        </div>
      )}
      <MonacoEditor
        className="w-full md:w-1/2"
        // width="w-[100vw] md:w-[calc(100vw / 2)]"
        height="465px"
        // theme="satoshi"
        // defaultLanguage={language}
        // defaultValue={code}
        language={language}
        value={value}
        beforeMount={handleBeforeMount}
        onMount={handleMount}
        onChange={onChange}
        onValidate={onValidate}
        options={monacoOptions}
      />
      {/* <StatusBar input={'success'} expected="true" next={next} /> */}
    </div>
  )
}
