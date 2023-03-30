'use client'

import { useEffect, useState } from 'react'

import LanguageTabs from './LanguageTabs'
import Editor from './Editor'
import Runner from './Runner'
import { EditorConfig } from 'types'

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
    <div className="grid grid-cols-2">
      <div className="flex flex-col gap-4 border-r border-white border-opacity-30 p-10">
        {children}
      </div>

      <div className="flex flex-col">
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
    </div>
  )
}
