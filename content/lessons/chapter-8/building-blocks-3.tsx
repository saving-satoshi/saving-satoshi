'use client'

import { ScriptingChallenge, LessonInfo, CodeExample, Title, Table } from 'ui'
import { EditorConfig } from 'types'
import { useTranslations } from 'hooks'
import { Text } from 'ui'
import { useState } from 'react'
import { getLessonKey } from 'lib/progress'

export const metadata = {
  title: 'chapter_eight.building_blocks_three.title',
  navigation_title: 'chapter_eight.building_blocks_three.nav_title',
  key: 'CH8BBK3',
}

export default function BuildingBlocks3({ lang }) {
  const t = useTranslations(lang)

  const javascript = {
    program: `//BEGIN VALIDATION BLOCK
console.log("KILL")`,
    defaultFunction: {
      name: 'privateKeyToPublicKey',
      args: ['privateKey'],
    },
    defaultCode: `const Bitcoinrpc = require('@0tuedon/bitcoin_rpcjs')
const Bitcoin = new Bitcoinrpc()
// https://github.com/saving-satoshi/bitcoin_rpcjs/blob/master/bitcoin_rpc.js

console.log(Bitcoin.rpc())
`,
    validate: async (answer: string) => {
      if (answer) {
        if (answer === '3007592928481984.23') {
          return [true, '']
        } else {
          return [null, '']
        }
      } else {
        return [null, '']
      }
    },
  }

  const python = {
    program: `# BEGIN VALIDATION BLOCK
print("KILL")`,
    defaultFunction: {
      name: 'privatekey_to_publickey',
      args: ['private_key'],
    },
    defaultCode: `from bitcoin_rpcpy.bitcoin_rpc import Bitcoin
Bitcoin = Bitcoin()
# https://github.com/saving-satoshi/bitcoin_rpcpy/blob/main/bitcoin_rpcpy/bitcoin_rpc.py

print(Bitcoin.rpc())
`,
    validate: async (answer) => {
      if (answer) {
        if (answer === '3007592928481984.23') {
          return [true, '']
        } else {
          return [null, '']
        }
      } else {
        return [null, '']
      }
    },
  }

  const config: EditorConfig = {
    defaultLanguage: 'javascript',
    languages: {
      javascript,
      python,
    },
  }

  const [language, setLanguage] = useState('javascript')
  const handleSelectLanguage = (language: string) => {
    setLanguage(language)
  }

  return (
    <ScriptingChallenge
      lang={lang}
      config={config}
      saveData
      lessonKey={getLessonKey('chapter-8', 'building-blocks-3')}
      successMessage={t('chapter_eight.building_blocks_three.success')}
      onSelectLanguage={handleSelectLanguage}
    >
      <LessonInfo className="overflow-y-scroll  sm:max-h-[calc(100vh-70px)]">
        <Title>{t('chapter_eight.building_blocks_three.heading')}</Title>
        <Text className="mt-4 font-nunito text-xl text-white">
          {t('chapter_eight.building_blocks_three.paragraph_one')}
        </Text>
        <Text className="mt-4 font-nunito text-xl text-white">
          {t('chapter_eight.building_blocks_three.paragraph_two')}
        </Text>
        <CodeExample
          className="mt-4 font-space-mono"
          code={`Bitcoin.rpc(method, params)`}
          language="shell"
        />
        <Text className="mt-4 font-nunito text-xl text-white">
          {t('chapter_eight.building_blocks_three.paragraph_three')}
        </Text>
      </LessonInfo>
    </ScriptingChallenge>
  )
}
