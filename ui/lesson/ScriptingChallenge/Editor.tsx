'use client'

import clsx from 'clsx'

import MonacoEditor from '@monaco-editor/react'
import { monacoOptions } from './config'
import { monaco } from 'react-monaco-editor'
import { useEffect, useRef, useState } from 'react'
import { Loader } from 'shared'
import { EditorRange, LessonView } from 'types'
import { useLessonContext } from 'ui'
import { useMediaQuery } from 'hooks'
// @ts-ignore
import { constrainedEditor } from 'constrained-editor-plugin'

export default function Editor({
  language,
  value,
  onChange,
  onValidate,
  options = monacoOptions,
  constraints,
  hiddenRange,
  loadingSavedCode,
  rangeToNotCollapse = [],
}: {
  language: string
  value?: string
  onChange?: (value: string) => void
  onValidate?: (value: monaco.editor.IMarker[]) => void
  options?: any
  constraints?: any
  hiddenRange?: number[]
  loadingSavedCode?: boolean
  rangeToNotCollapse?: EditorRange[]
}) {
  const { activeView } = useLessonContext()
  const isActive = activeView === LessonView.Code
  const [loading, setLoading] = useState<boolean>(loadingSavedCode || true)
  const [editorOptions, setEditorOptions] = useState(options)
  const monacoRef = useRef<any>()

  const createMonacoOptions = (range) => {
    return {
      ...options,
      lineNumbers: (lineNumber: number) => (lineNumber - range).toString(),
    }
  }

  const handleBeforeMount = (monaco) => {
    hiddenRange && setEditorOptions(createMonacoOptions(hiddenRange[2]))
    monaco.editor.defineTheme('satoshi', {
      base: 'vs-dark',
      inherit: true,
      rules: [],
      colors: {
        'editor.background': '#00000000',
        'editor.lineHighlightBorder': '#00000000', // 4th channel is for transparency
      },
    })
  }

  const handleMount = (editor, monaco) => {
    hiddenRange &&
      editor.setHiddenAreas([
        new monaco.Range(
          hiddenRange[0],
          hiddenRange[1],
          hiddenRange[2],
          hiddenRange[3]
        ),
      ])
    monaco.editor.setTheme('satoshi')
    if (!loadingSavedCode) {
      setLoading(false)
    }
    monacoRef.current = { monaco, editor }
    const model = editor.getModel()
    const constrainedInstance = constrainedEditor(monaco)
    if (typeof constraints !== 'undefined') {
      constrainedInstance.initializeIn(editor)
      constrainedInstance.addRestrictionsTo(model, constraints)
    }
    const actions = editor.getSupportedActions()
    if (rangeToNotCollapse.length > 0) {
      const foldAction = actions.find((a) => a.id === 'editor.foldAllExcept')
      rangeToNotCollapse.forEach((range) => {
        editor.setSelection({
          startLineNumber: range.start,
          endLineNumber: range.end,
          startColumn: 1,
          endColumn: 1,
        })
        foldAction.run()
      })
    }
  }

  const isSmallScreen = useMediaQuery({ width: 767 })
  const headerHeight = 70
  const mobileTabsHeight = 48
  const languageTabsHeight = 40
  const terminalHeight = 204
  const runnerHeight = 56

  const totalHeight = isSmallScreen
    ? headerHeight + mobileTabsHeight + languageTabsHeight + runnerHeight
    : headerHeight + languageTabsHeight + terminalHeight + runnerHeight

  useEffect(() => {
    hiddenRange && setEditorOptions(createMonacoOptions(hiddenRange[2]))
    if (monacoRef.current) {
      const { editor, monaco } = monacoRef.current
      const model = monaco.editor.createModel(value, language)

      editor.setModel(model)
      hiddenRange &&
        editor.setHiddenAreas([
          new monaco.Range(
            hiddenRange[0],
            hiddenRange[1],
            hiddenRange[2],
            hiddenRange[3]
          ),
        ])
      const constrainedInstance = constrainedEditor(monaco)
      if (typeof constraints !== 'undefined') {
        constrainedInstance.initializeIn(editor)
        constrainedInstance.addRestrictionsTo(model, constraints)
      }
    }
  }, [language])

  return (
    <div
      className={clsx(
        'relative grow bg-[#00000026] font-mono text-sm text-white',
        {
          'hidden md:flex': !isActive,
          flex: isActive,
        }
      )}
    >
      <MonacoEditor
        loading={<Loader className="h-10 w-10 text-white" />}
        width={isSmallScreen ? '100vw' : 'calc(100vw / 2)'}
        height={`calc(var(--dynamic-height) - ${totalHeight}px)`}
        language={language}
        theme={'satoshi'}
        value={value}
        beforeMount={handleBeforeMount}
        onMount={handleMount}
        onChange={onChange}
        onValidate={onValidate}
        options={editorOptions}
      />
    </div>
  )
}
