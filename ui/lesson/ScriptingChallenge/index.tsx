'use client'

import { useEffect, useState } from 'react'

import LanguageTabs from './LanguageTabs'
import Editor from './Editor'
import Runner from './Runner'
import { EditorConfig, LessonDirection } from 'types'
import { Lesson, LessonTabs } from 'ui'
import { useMediaQuery, useDynamicHeight } from 'hooks'
import { useProgressContext } from 'providers/ProgressProvider'
import { useAuthContext } from 'providers/AuthProvider'
import { setData } from 'api/data'

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
  lessonKey,
  config,
  successMessage,
  saveData,
  onSelectLanguage,
  successStyle,
}: {
  children?: React.ReactNode
  lang: string
  lessonKey: string
  config: EditorConfig
  successMessage: string
  saveData?: boolean
  onSelectLanguage: (language: string) => void
  successStyle: {
    backgroundColor?: string
    fontSize?: string
  }
}) {
  const { saveProgress, saveProgressLocal } = useProgressContext()
  const { account } = useAuthContext()
  const [code, setCode] = useState(
    config.languages[config.defaultLanguage].defaultCode?.toString()
  )
  const [constraints, setConstraints] = useState(
    config.languages[config.defaultLanguage].constraints
  )

  const [hiddenRange, setHiddenRange] = useState(
    config.languages[config.defaultLanguage].hiddenRange
  )
  const [language, setLanguage] = useState(config.defaultLanguage)
  const [challengeSuccess, setChallengeSuccess] = useState(false)
  const [hydrated, setHydrated] = useState(false)
  const [errors, setErrors] = useState<string[]>([])

  useDynamicHeight()
  const isSmallScreen = useMediaQuery({ width: 767 })

  const handleSetLanguage = (value) => {
    if (!challengeSuccess) {
      setLanguage(value)
      onSelectLanguage(value)
      setCode(config.languages[value].defaultCode?.toString())
      setHiddenRange(config.languages[value].hiddenRange)
      setConstraints(config.languages[value].constraints)
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
    const [success, errors] = await config.languages[language].validate(answer)

    if (success) {
      setChallengeSuccess(true)
      if (account) {
        saveProgress(lessonKey)
        saveData && setData(account.id, lessonKey, answer)
      } else {
        saveProgressLocal(lessonKey)
      }
    }

    return [success, errors]
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

        <div className="code-editor grow border-white/25 md:max-w-[50vw] md:basis-1/3 md:border-l">
          <LanguageTabs
            languages={config.languages}
            value={language}
            onChange={handleSetLanguage}
          />
          <Editor
            language={language}
            value={code}
            hiddenRange={hiddenRange}
            onChange={handleChange}
            onValidate={handleEditorValidate}
            code={code}
            constraints={constraints}
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
            successMessage={successMessage}
            successStyle={successStyle}
          />
        </div>
      </Lesson>
    )
  )
}
