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
}: {
  children?: React.ReactNode
  lang: string
  config: EditorConfig
  successMessage: string
}) {
  const [code, setCode] = useState(
    config.languages[config.defaultLanguage].defaultCode
  )
  const [language, setLanguage] = useState(config.defaultLanguage)
  const [errors, setErrors] = useState([])
  const [runnerReady, setRunnerReady] = useState<boolean>(false)

  const isSmallScreen = useMediaQuery({ width: 767 })

  const handleSetLanguage = (value) => {
    setLanguage(value)
    setCode(config.languages[value].defaultCode)
  }

  const handleChange = (val) => {
    setCode(val)
  }

  const handleEditorValidate = (markers) => {
    setErrors(
      markers.filter(
        (marker) => marker.code !== '80001' && marker.code !== '6133'
      )
    )
  }

  const handleRunnerValidate = async (answer) => {
    const success = config.languages[language].validate(answer)

    if (success) {
      console.log('challenge complete')
    }

    return success
  }

  const handleRunnerReady = () => {
    setRunnerReady(true)
  }

  return (
    <Lesson
      direction={
        isSmallScreen ? LessonDirection.Vertical : LessonDirection.Horizontal
      }
    >
      {/* <div className="grid grid-cols-2"> */}
      <LessonTabs items={tabData} classes="px-4 py-2 w-full" stretch={true} />
      {/* <div className="flex h-full flex-col content-center justify-items-start gap-1 px-1 py-6 sm:px-12"> */}
      {children}
      {/* </div> */}

      <div className="flex max-h-[92.5vh] max-w-full grow flex-col border-white/25 font-space-mono text-white md:max-w-[50%] md:basis-1/3 md:border-l">
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
          onValidate={handleRunnerValidate}
          onReady={handleRunnerReady}
          successMessage={successMessage}
        />
      </div>
      {/* </div> */}
    </Lesson>
  )
}
