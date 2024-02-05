'use client'

import { useEffect, useState } from 'react'

import LanguageTabs from './LanguageTabs'
import Editor from './Editor'
import Runner from './Runner'
import { EditorConfig, LessonDirection, StoredLessonData } from 'types'
import { Lesson, LessonTabs } from 'ui'
import { useMediaQuery, useDynamicHeight } from 'hooks'
import { useProgressContext } from 'providers/ProgressProvider'
import { useAuthContext } from 'providers/AuthProvider'
import { setData } from 'api/data'
import { Base64String } from 'types/classes'

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

function trimLastTwoLines(code: string): string {
  let lines = code.split('\n')
  if (lines.length >= 2) {
    lines = lines.slice(0, -2)
  }
  return lines.join('\n')
}

export default function ScriptingChallenge({
  children,
  lang,
  lessonKey,
  config,
  successMessage,
  saveData,
  onSelectLanguage,
  loadingSavedCode,
}: {
  children?: React.ReactNode
  lang: string
  lessonKey: string
  config: EditorConfig
  successMessage: string
  saveData?: boolean
  onSelectLanguage?: (language: string) => void
  loadingSavedCode?: boolean
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
    if (!challengeSuccess && onSelectLanguage) {
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
  const handleTryAgain = () => {
    setChallengeSuccess(false)
    console.log(challengeSuccess)
  }

  const handleRunnerValidate = async (data: StoredLessonData) => {
    const [success, errors] = await config.languages[language].validate(
      data.answer
    )
    // This code trims all code after the comment BEGIN VALIDATION BLOCK and all code comments so that loaded code is cleaned
    let trimmedCode: string = ''

    if (language === 'python') {
      if (data.code!.getDecoded().includes('# BEGIN VALIDATION BLOCK')) {
        trimmedCode = data
          .code!.getDecoded()
          .substring(
            0,
            data.code!.getDecoded().indexOf('# BEGIN VALIDATION BLOCK') - 1
          )
          .replaceAll(/#.*\n\s*/g, '')
      } else {
        trimmedCode = trimLastTwoLines(data.code!.getDecoded())
      }
    }

    if (language === 'javascript') {
      if (data.code!.getDecoded().includes('//BEGIN VALIDATION BLOCK')) {
        trimmedCode = data
          .code!.getDecoded()
          .substring(
            0,
            data.code!.getDecoded().indexOf('//BEGIN VALIDATION BLOCK') - 1
          )
          .replaceAll(/\s*\/\/.*(?:\n|$)/g, '\n')
      } else {
        trimmedCode = trimLastTwoLines(data.code!.getDecoded())
      }
    }

    const base64TrimmedCode = new Base64String(trimmedCode)

    if (success) {
      if (
        typeof success === 'boolean' ||
        success === 3 ||
        success === 4 ||
        success === 5
      ) {
        setChallengeSuccess(true)
      }
      if (account) {
        saveProgress(lessonKey)
        saveData &&
          setData(account.id, lessonKey, {
            code: base64TrimmedCode,
            answer: data.answer,
          })
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
            languageLocked={!onSelectLanguage}
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
            loadingSavedCode={loadingSavedCode}
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
            handleTryAgain={handleTryAgain}
            successMessage={successMessage}
          />
        </div>
      </Lesson>
    )
  )
}
