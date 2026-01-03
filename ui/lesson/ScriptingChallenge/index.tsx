'use client'

import { useEffect, useState } from 'react'

import LanguageTabs from './LanguageTabs'
import Editor from './Editor'
import Runner from './Runner'
import {
  EditorConfig,
  LessonDirection,
  StoredLessonData,
  LessonView,
} from 'types'
import { Lesson, LessonTabs } from 'ui'
import { useMediaQuery, useDynamicHeight, useTranslations } from 'hooks'
import { setData } from 'api/data'
import { Base64String } from 'types/classes'
import clsx from 'clsx'
import useDebounce from 'hooks/useDebounce'
import { getLanguageFromString, getLanguageString } from 'lib/SavedCode'
import { useAtom } from 'jotai'
import { accountAtom, currentLanguageAtom } from 'state/state'

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
  saveData?: boolean
  onSelectLanguage?: (language: string) => void
  loadingSavedCode?: boolean
}) {
  const t = useTranslations(lang)
  const [account] = useAtom(accountAtom)
  const [currentLanguage, setCurrentLanguage] = useAtom(currentLanguageAtom)
  const [activeView, setActiveView] = useState(LessonView.Info)
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

  const handleDownload = (format: string) => {
    if (!code) return

    const ext = language === 'python' ? 'py' : 'js'
    const filename = `saving-satoshi-${lessonKey}`

    if (format === 'pdf') {
      // Create a temporary printable window for clean PDF generation
      const printWindow = window.open('', '', 'height=600,width=800')
      if (printWindow) {
        printWindow.document.write(`
          <html>
            <head><title>${filename}</title></head>
            <body style="font-family: monospace; padding: 20px; white-space: pre-wrap;">
              <h2>${filename}.${ext}</h2>
              <hr/>
              <pre>${code.replace(/</g, '&lt;')}</pre>
            </body>
          </html>
        `)
        printWindow.document.close()
        printWindow.focus()
        printWindow.print()
        printWindow.close()
      }
      return
    }

    let content = code
    let mimeType = 'text/plain'
    let fileExt = ext

    switch (format) {
      case 'source':
        fileExt = ext
        break
      case 'txt':
        fileExt = 'txt'
        break
      case 'md':
        content = `\`\`\`${language}\n${code}\n\`\`\``
        fileExt = 'md'
        break
      case 'json':
        content = JSON.stringify(
          { filename: `${filename}.${ext}`, language, code },
          null,
          2
        )
        fileExt = 'json'
        mimeType = 'application/json'
        break
      case 'base64':
        content = btoa(unescape(encodeURIComponent(code)))
        fileExt = 'b64.txt'
        break
    }

    const blob = new Blob([content], { type: mimeType })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${filename}.${fileExt}`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

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

  const handleRefresh = () => {
    setCode(config.languages[language].defaultCode?.toString())
    setHiddenRange(config.languages[language].hiddenRange)
    setConstraints(config.languages[language].constraints)
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

  const handleViewChange = (view) => {
    setActiveView(view)
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
          .replace(/.*?# YOUR CODE HERE/g, '\n')
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
          .replace(/.*?\/\/ YOUR CODE HERE/g, '\n')
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
        saveData &&
          setData(account.id, lessonKey, {
            code: base64TrimmedCode,
            answer: data.answer,
          })
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
        onViewChange={handleViewChange}
      >
        <LessonTabs items={tabData} classes="px-4 py-2 w-full" stretch={true} />
        {children}

        <div
          className={clsx(
            'code-editor flex grow flex-col justify-between border-white/25 md:max-w-[50vw] md:basis-1/3 md:border-l',
            {
              hidden: activeView === LessonView.Info,
            }
          )}
        >
          <LanguageTabs
            languageLocked={!onSelectLanguage}
            languages={config.languages}
            value={language}
            onChange={handleSetLanguage}
            onRefresh={handleRefresh}
            onDownload={handleDownload}
          />
          <div
            className={clsx({
              'pointer-events-none': challengeSuccess,
              hidden: isSmallScreen && activeView === LessonView.Execute,
            })}
          >
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
          />
        </div>
      </Lesson>
    )
  )
}
