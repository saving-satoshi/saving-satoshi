'use client'

import { useState } from 'react'

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

  const handleSetLanguage = (value) => {
    setLanguage(value)
    setCode(config.languages[value].defaultCode)
  }

  const handleChange = (val) => {
    setCode(val)
  }

  const handleValidate = (markers) => {
    setErrors(
      markers.filter(
        (marker) => marker.code !== '80001' && marker.code !== '6133'
      )
    )
  }

  return (
    <div className="grid grid-cols-2">
      <div className="border-r border-white border-opacity-30 bg-gradient-to-b from-[#7B1810] to-[#432A43D9] p-10">
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
          onValidate={handleValidate}
        />

        <Runner
          language={language}
          code={code}
          program={config.languages[language].program}
          errors={errors}
        />
      </div>
    </div>
  )
}
