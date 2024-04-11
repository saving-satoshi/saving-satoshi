'use client'

import { useEffect, useState } from 'react'

import LanguageTabs from './LanguageTabs'
import Editor from './Editor'
import Runner from './Runner'
import { EditorConfig, LessonDirection, StoredLessonData } from 'types'
import { Lesson, LessonTabs } from 'ui'
import { useMediaQuery, useDynamicHeight, useTranslations } from 'hooks'
import { useProgressContext } from 'contexts/ProgressContext'
import { useAuthContext } from 'contexts/AuthContext'
import { setData } from 'api/data'
import { Base64String } from 'types/classes'
import clsx from 'clsx'
import useDebounce from 'hooks/useDebounce'
import { useDataContext } from 'contexts/DataContext'
import { getLanguageFromString, getLanguageString } from 'lib/SavedCode'

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
  editorOptions,
  poorMessage,
  goodMessage,
  successMessage,
  saveData,
  onSelectLanguage,
  loadingSavedCode,
}: {
  children?: React.ReactNode
  lang: string
  lessonKey: string
  editorOptions?: any
  config: EditorConfig
  poorMessage?: string
  goodMessage?: string
  successMessage: string
  saveData?: boolean
  onSelectLanguage?: (language: string) => void
  loadingSavedCode?: boolean
}) {
  const t = useTranslations(lang)
  const { saveProgress, saveProgressLocal } = useProgressContext()
  const { account } = useAuthContext()
  const { currentLanguage, setCurrentLanguage } = useDataContext()
  const [code, setCode] = useState(
    config.languages[getLanguageString(currentLanguage)].defaultCode?.toString()
  )
  const [constraints, setConstraints] = useState(
    config.languages[getLanguageString(currentLanguage)].constraints
  )

  const [hiddenRange, setHiddenRange] = useState(
    config.languages[getLanguageString(currentLanguage)].hiddenRange
  )
  const [language, setLanguage] = useState(getLanguageString(currentLanguage))
  const [challengeSuccess, setChallengeSuccess] = useState(false)
  const [hydrated, setHydrated] = useState(false)
  const [errors, setErrors] = useState<string[]>([])
  const debouncedCode = useDebounce(code, 500)

  useEffect(() => {
    const savedCode = localStorage.getItem(`${lessonKey}-${language}`)
    if (savedCode) {
      setCode(savedCode)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(`${lessonKey}-${language}`, debouncedCode)
  }, [debouncedCode, lessonKey, language])

  useDynamicHeight()
  const isSmallScreen = useMediaQuery({ width: 767 })

  const handleSetLanguage = (value) => {
    if (!challengeSuccess && onSelectLanguage) {
      setLanguage(value)
      onSelectLanguage(value)
      setCurrentLanguage(getLanguageFromString(value))
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
          .replace(/\n\s*#.*\n?/g, '\n')
          .replace(/(.+?)\s*#.*/g, '$1')
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
          .replace(/\s*\/\/.*(?:\n|$)/g, '\n')
          .replace(/\/\*[\s\S]*?\*\//g, '\n')
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
          <div className={clsx({ 'pointer-events-none': challengeSuccess })}>
            <Editor
              language={language}
              value={code}
              hiddenRange={hiddenRange}
              onChange={handleChange}
              onValidate={handleEditorValidate}
              constraints={constraints}
              loadingSavedCode={loadingSavedCode}
              rangeToNotCollapse={config.languages[language].rangeToNotCollapse}
              options={editorOptions}
            />
          </div>
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
            poorMessage={poorMessage ?? ''}
            goodMessage={goodMessage ?? ''}
            successMessage={successMessage}
          />
        </div>
      </Lesson>
    )
  )
}
