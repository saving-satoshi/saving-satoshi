'use client'

import { useEffect, useState } from 'react'

import LanguageTabs from './LanguageTabs'
import Editor from './Editor'
import Runner from './Runner'
import { EditorConfig } from 'types'

export default function ScriptingChallenge({
  config,
}: {
  config: EditorConfig
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
      <div className="border-r border-white border-opacity-30 p-10">
        <p className="font-nunito text-xl text-white">
          Alright, time to write and run your own code. When you press “Run the
          script”, the{' '}
          <b>{language === 'javascript' ? 'findHash' : 'find_hash'}</b> function
          will be called over and over with an ever-increasing nonce.
        </p>
        <p className="mt-8 font-nunito text-xl text-white">
          Some other instructions go here...
        </p>
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
          language={language}
          code={code}
          program={config.languages[language].program}
          errors={errors}
          onValidate={handleRunnerValidate}
          onReady={handleRunnerReady}
        />
      </div>
    </div>
  )
}
