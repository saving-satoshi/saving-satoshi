'use client'

import { useEffect, useState } from 'react'
import { PlainEditorConfig, LessonDirection } from 'types'
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

  useDynamicHeight()
  const isSmallScreen = useMediaQuery({ width: 767 })

  const handleSetLanguage = (value) => {
    if (config && onSelectLanguage) {
      setLanguage(value)
      onSelectLanguage(value)
      setCode(config.languages[value].defaultCode?.toString())
    }
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
      >
        <LessonTabs items={tabData} classes="px-4 py-2 w-full" stretch={true} />
        {children}
        <div
          className={clsx('', {
            'code-editor grow border-white/25 md:max-w-[50vw] md:basis-1/3 md:border-l':
              config,
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
            <div className="h-14 min-h-14 grow border-t border-white/25 transition-all max-md:bottom-0 max-md:px-4 max-md:py-8">
              <div className="flex flex-col items-stretch justify-between max-md:gap-4 md:h-14 md:flex-row">
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
