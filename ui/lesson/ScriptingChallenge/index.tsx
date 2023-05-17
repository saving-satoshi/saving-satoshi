'use client'

import { useEffect, useState } from 'react'

import LanguageTabs from './LanguageTabs'
import Editor from './Editor'
import Runner from './Runner'
import { EditorConfig, LessonDirection } from 'types'
import { Lesson, LessonTabs } from 'ui'
import { useMediaQuery } from 'hooks'

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

export default function ScriptingChallenge({
  children,
  lang,
  config,
  successMessage,
  languageCopy,
}: {
  children?: React.ReactNode
  lang: string
  config: EditorConfig
  successMessage: string
  languageCopy: any
}) {
  const [code, setCode] = useState(
    config.languages[config.defaultLanguage].defaultCode
  )
  const [language, setLanguage] = useState(config.defaultLanguage)
  const [challengeSuccess, setChallengeSuccess] = useState(false)
  const [hydrated, setHydrated] = useState(false)
  const [errors, setErrors] = useState<string[]>([])
  const [runnerReady, setRunnerReady] = useState<boolean>(false)

  const isSmallScreen = useMediaQuery({ width: 767 })

  const handleSetLanguage = (value) => {
    if (!challengeSuccess) {
      setLanguage(value)
      languageCopy(value)
      setCode(config.languages[value].defaultCode)
    }
  }

  const handleChange = (val) => {
    !challengeSuccess && setCode(val)
  }

  const handleEditorValidate = (markers) => {
    setErrors(
      markers.filter(
        (marker) => marker.code !== '80001' && marker.code !== '6133'
      )
    )
  }

  const handleRunnerValidate = async (answer) => {
    const success = await config.languages[language].validate(answer)

    if (success) {
      setChallengeSuccess(true)
      console.log('challenge complete')
    }

    return success
  }

  const handleRunnerReady = () => {
    setRunnerReady(true)
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

        <div className="h-screen-excluding-navbar flex grow flex-col border-white/25 bg-[#00000026] md:basis-1/3 md:border-l">
          <LanguageTabs
            languages={config.languages}
            value={language}
            onChange={handleSetLanguage}
          />
          <Editor
            language={language}
            value={code}
            onChange={handleChange}
            onValidate={handleEditorValidate}
          />
          <Runner
            lang={lang}
            config={config}
            language={language}
            code={code}
            program={config.languages[language].program}
            errors={errors}
            setErrors={setErrors}
            onValidate={handleRunnerValidate}
            onReady={handleRunnerReady}
            successMessage={successMessage}
          />
        </div>
      </Lesson>
    )
  )
}
