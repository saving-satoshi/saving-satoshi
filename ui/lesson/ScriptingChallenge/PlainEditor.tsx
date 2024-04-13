import React, { useEffect, useRef } from 'react'
import MonacoEditor from '@monaco-editor/react'
import { Loader } from 'shared'
import clsx from 'clsx'
import { useLessonContext } from '../Lesson'
import { LessonView } from 'types'
import { editor } from 'monaco-editor'
import { useMediaQuery } from 'hooks'
const PlainEditor = ({
  code,
  language,
  button,
}: {
  code: string
  language?: string
  button?: boolean
}) => {
  const monacoRef = useRef<any>()

  const isSmallScreen = useMediaQuery({ width: 767 })
  const headerHeight = 70
  const mobileMenuHeight = 48
  const runnerHeight = 56
  const languageTabsHeight = 40
  const terminalHeight = 0
  const paddingHeight = 16

  const totalHeight = isSmallScreen
    ? headerHeight + mobileMenuHeight + languageTabsHeight + paddingHeight
    : headerHeight +
      languageTabsHeight +
      terminalHeight +
      runnerHeight +
      paddingHeight

  const { activeView } = useLessonContext()
  const isActive = activeView === LessonView.Code

  const editorOptions: editor.IStandaloneEditorConstructionOptions = {
    readOnly: true,
    minimap: { enabled: false },
    overviewRulerLanes: 0,
    scrollbar: { horizontal: 'hidden', vertical: 'hidden' },
    overviewRulerBorder: false,
    wordWrap: 'on',
    scrollBeyondLastLine: false,
  }
  const handleBeforeMount = (monaco) => {
    monaco.editor.defineTheme('satoshi', {
      base: 'vs-dark',
      inherit: true,
      rules: [],
      colors: {
        'editor.background': '#00000000',
        'editor.lineHighlightBorder': '#00000000',
      },
    })
  }

  const handleMount = (editor, monaco) => {
    monaco.editor.setTheme('satoshi')
    monacoRef.current = { monaco, editor }
    const model = editor.getModel()
    const actions = editor.getSupportedActions()
  }

  useEffect(() => {
    if (monacoRef.current) {
      const { editor, monaco } = monacoRef.current
      const model = monaco.editor.createModel(code, language)

      editor.setModel(model)
    }
  }, [language])

  return (
    <div
      className={clsx(
        'grow border-white/25 md:max-w-[50vw] md:basis-1/3 md:border-l',
        {
          'hidden md:flex': !isActive,
          'flex ': isActive,
          'read-only-editor ': !button,
          'read-only-editor-button': button,
        }
      )}
    >
      <div
        className={clsx('bg-[#00000026] pt-4 font-mono text-sm text-white', {
          'hidden md:flex': !isActive,
          'flex ': isActive,
        })}
      >
        <MonacoEditor
          loading={<Loader className="h-10 w-10 text-white" />}
          width={isSmallScreen ? '100vw' : 'calc(100vw / 2)'}
          height={`calc(var(--dynamic-height) - ${totalHeight}px)`}
          language={language ? language : 'plaintext'}
          theme={'satoshi'}
          value={code}
          options={editorOptions}
          beforeMount={handleBeforeMount}
          onMount={handleMount}
        />
      </div>
    </div>
  )
}

export default PlainEditor
