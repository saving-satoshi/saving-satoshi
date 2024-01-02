'use client'

import { useEffect, useState } from 'react'
import clsx from 'clsx'
import { EditorConfig, LessonDirection, LessonView } from 'types'
import { Lesson, LessonTabs, useLessonContext } from 'ui'
import { useMediaQuery, useDynamicHeight } from 'hooks'
import MonacoEditor from '@monaco-editor/react'
import { Loader } from 'shared'
import { editor } from 'monaco-editor'

const tabData = [
  {
    id: 'info',
    text: 'Info',
  },
  {
    id: 'code',
    text: 'Code',
  },
  {
    id: 'execute',
    text: 'Execute',
  },
]

export default function PlainEditor({
  children,
  code,
}: {
  children?: React.ReactNode
  code: string
}) {
  const [hydrated, setHydrated] = useState(false)
  const [errors, setErrors] = useState<string[]>([])

  useDynamicHeight()
  const isSmallScreen = useMediaQuery({ width: 767 })

  const handleEditorValidate = (markers) => {
    setErrors(
      markers.filter(
        (marker) => marker.code !== '80001' && marker.code !== '6133'
      )
    )
  }
  const { activeView } = useLessonContext()
  const isActive = activeView === LessonView.Code
  const headerHeight = isSmallScreen ? 63 : 100
  const languageTabsHeight = 40
  const statusBarHeight = 56
  const terminalHeight = 218
  const terminalTabsHeight = 40
  const mobileMenuHeight = 48

  const totalHeight = isSmallScreen
    ? headerHeight + mobileMenuHeight + languageTabsHeight + statusBarHeight
    : headerHeight +
      languageTabsHeight +
      statusBarHeight +
      terminalHeight +
      terminalTabsHeight

  useEffect(() => {
    setHydrated(true)
  }, [])

  if (!hydrated) {
    return null
  }
  const editorOptions: editor.IStandaloneEditorConstructionOptions = {
    readOnly: true,
    minimap: { enabled: false },
    scrollbar: { horizontal: 'hidden' },
    wordWrap: 'on',
  }
  const handleBeforeMount = (monaco) => {
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

  return (
    hydrated && (
      <Lesson
        direction={
          isSmallScreen ? LessonDirection.Vertical : LessonDirection.Horizontal
        }
      >
        <LessonTabs items={tabData} classes="px-4 py-2 w-full" stretch={true} />
        {children}

        <div className=" grow border-white/25 md:max-w-[50vw] md:basis-1/3 md:border-l">
          <div
            className={clsx(
              'relative h-full bg-[#00000026] font-mono text-sm text-white',
              {
                'hidden md:flex': !isActive,
                flex: isActive,
              }
            )}
          >
            <MonacoEditor
              loading={<Loader className="h-10 w-10 text-white" />}
              width={isSmallScreen ? '100vw' : 'calc(100vw / 2)'}
              height={'80%'}
              language={'plaintext'}
              theme={'satoshi'}
              value={code}
              options={editorOptions}
              beforeMount={handleBeforeMount}
            />
          </div>
        </div>
      </Lesson>
    )
  )
}
