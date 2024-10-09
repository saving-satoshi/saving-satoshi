'use client'

import { useEffect, useState } from 'react'
import { PlainEditorConfig, LessonDirection, LessonView } from 'types'
import { Lesson, LessonTabs, StatusBar } from 'ui'
import {
  useMediaQuery,
  useDynamicHeight,
  useProceed,
  useLang,
  useTranslations,
} from 'hooks'
import LanguageTabs from './LanguageTabs'
import PlainEditor from './PlainEditor'
import clsx from 'clsx'
import { Button } from 'shared'

const tabData = [
  {
    id: 'info',
    text: 'Info',
  },
  {
    id: 'code',
    text: 'Code',
  },
]

export default function PlainEditorWrapper({
  fixedCode,
  children,
  config,
  button,
  onSelectLanguage,
}: {
  fixedCode: string
  children?: React.ReactNode
  config?: PlainEditorConfig
  button?: boolean
  onSelectLanguage?: (language: string) => void
}) {
  const lang = useLang()
  const t = useTranslations(lang)
  const proceed = useProceed()
  const [hydrated, setHydrated] = useState(false)
  const [language, setLanguage] = useState(
    config?.defaultLanguage ?? 'plaintext'
  )
  const [code, setCode] = useState(
    config?.languages[language].defaultCode?.toString()
  )
  const [activeView, setActiveView] = useState(LessonView.Info)

  useDynamicHeight()
  const isSmallScreen = useMediaQuery({ width: 767 })

  const handleSetLanguage = (value) => {
    if (config && onSelectLanguage) {
      setLanguage(value)
      onSelectLanguage(value)
      setCode(config.languages[value].defaultCode?.toString())
    }
  }

  const handleViewChange = (view) => {
    setActiveView(view)
  }

  useEffect(() => {
    setHydrated(true)
  }, [])

  if (!hydrated) {
    return null
  }

  return (
    hydrated && (
      <Lesson
        direction={
          isSmallScreen ? LessonDirection.Vertical : LessonDirection.Horizontal
        }
        onViewChange={handleViewChange}
      >
        <LessonTabs items={tabData} classes="px-4 py-2 w-full" stretch={true} />
        {children}
        <div
          className={clsx('', {
            'grow border-white/25 md:max-w-[50vw] md:basis-1/3 md:border-l':
              config,
            'h-[150px]': activeView === LessonView.Info,
          })}
        >
          {language && config && (
            <LanguageTabs
              languageLocked={!onSelectLanguage}
              languages={config.languages}
              value={language}
              onChange={handleSetLanguage}
            />
          )}
          <PlainEditor
            button={button}
            language={language}
            code={!!config && code ? code : fixedCode}
          />
          {button && (
            <div className="max-md:bottom-0 max-md:px-4 max-md:py-8 h-14 min-h-14 grow border-l border-t border-white/25 transition-all">
              <div className="max-md:gap-4 flex flex-col items-stretch justify-between md:h-14 md:flex-row">
                <div className="flex items-center align-middle transition duration-150 ease-in-out md:px-5">
                  <div className="font-nunito text-[21px] text-white opacity-50 transition duration-150 ease-in-out">
                    {t('Lets move on to the first challenge!')}
                  </div>
                </div>
                <Button onClick={proceed} classes="md:text-2xl">
                  {t('shared.next')}
                </Button>
              </div>
            </div>
          )}
        </div>
      </Lesson>
    )
  )
}
