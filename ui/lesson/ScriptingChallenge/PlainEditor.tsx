import React from 'react'
import MonacoEditor from '@monaco-editor/react'
import { Loader } from 'shared'
import clsx from 'clsx'
import { useLessonContext } from '../Lesson'
import { LessonView } from 'types'
import { editor } from 'monaco-editor'
import { useMediaQuery } from 'hooks'
const PlainEditor = ({ code }: { code: string }) => {
  const isSmallScreen = useMediaQuery({ width: 767 })
  const headerHeight = isSmallScreen ? 63 : 70
  const languageTabsHeight = 0
  const statusBarHeight = 0
  const terminalHeight = 0
  const terminalTabsHeight = 0
  const mobileMenuHeight = 48

  const totalHeight = isSmallScreen
    ? headerHeight + mobileMenuHeight + languageTabsHeight + statusBarHeight
    : headerHeight +
      languageTabsHeight +
      statusBarHeight +
      terminalHeight +
      terminalTabsHeight
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
  return (
    <div className="read-only-editor grow border-white/25 md:max-w-[50vw] md:basis-1/3 md:border-l">
      <div
        className={clsx(
          'relative grow bg-[#00000026] font-mono text-sm text-white',
          {
            'hidden md:flex': !isActive,
            'flex ': isActive,
          }
        )}
      >
        <MonacoEditor
          loading={<Loader className="h-10 w-10 text-white" />}
          width={isSmallScreen ? '100vw' : 'calc(100vw / 2)'}
          height={`calc(var(--dynamic-height) - ${totalHeight}px)`}
          language={'plaintext'}
          theme={'satoshi'}
          value={code}
          options={editorOptions}
          beforeMount={handleBeforeMount}
        />
      </div>
    </div>
  )
}

export default PlainEditor
