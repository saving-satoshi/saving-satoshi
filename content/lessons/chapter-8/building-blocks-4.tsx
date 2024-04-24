'use client'

import { ScriptingChallenge, LessonInfo, CodeExample } from 'ui'
import { EditorConfig } from 'types'
import { useTranslations } from 'hooks'
import { Text } from 'ui'
import { useState } from 'react'
import { getLessonKey } from 'lib/progress'
import { useDataContext } from 'contexts/DataContext'
import { getLanguageString } from 'lib/SavedCode'
import { useAtom } from 'jotai'
import { accountAtom } from 'state/state'

export const metadata = {
  title: 'chapter_eight.building_blocks_four.nav_title',
  navigation_title: 'chapter_eight.building_blocks_four.nav_title',
  key: 'CH8BBK4',
}

export default function BuildingBlocks4({ lang }) {
  const t = useTranslations(lang)
  const [account] = useAtom(accountAtom)
  const { currentLanguage } = useDataContext()
  const [privateKey, setPrivateKey] = useState('')

  if (account && !privateKey) {
    setPrivateKey(account?.private_key.toString())
  }

  const javascript = {
    program: `
console.log(privateKeyToPublicKey(\`${privateKey}\`))
console.log("KILL")`,
    defaultFunction: {
      name: 'privateKeyToPublicKey',
      args: ['privateKey'],
    },
    defaultCode: `const CODE_CHALLENGE_2_HEIGHT = 6929996;
`,
    validate: async (answer: string) => {
      return [true, 'Nicely Done ']
    },
  }

  const python = {
    program: `
print(privatekey_to_publickey("${privateKey}"))
print("KILL")`,
    defaultFunction: {
      name: 'privatekey_to_publickey',
      args: [''],
    },
    defaultCode: `CODE_CHALLENGE_2_HEIGHT = 6929996
hashes = Bitcoin.rpc("getblocksbyheight", CODE_CHALLENGE_2_HEIGHT)
answer = None
tx_count = float("inf")
for bhash in hashes:
    block = Bitcoin.rpc("getblock", bhash)
    num = len(block["txs"])
    if num < tx_count:
        tx_count = num
        answer = bhash
print(answer)
`,
    validate: async (answer: string) => {
      // Parsing the new object string format
      return [true, 'Nicely Done']
    },
  }

  const config: EditorConfig = {
    defaultLanguage: 'javascript',
    languages: {
      javascript,
      python,
    },
  }

  const [language, setLanguage] = useState(getLanguageString(currentLanguage))
  const handleSelectLanguage = (language: string) => {
    setLanguage(language)
  }

  return (
    <ScriptingChallenge
      lang={lang}
      config={config}
      saveData
      lessonKey={getLessonKey('chapter-8', 'building-block-4')}
      successMessage={t('chapter_eight.building_block_four.success')}
      onSelectLanguage={handleSelectLanguage}
    >
      <LessonInfo>
        <Text className="font-nunito text-2xl font-bold text-white">
          {t('chapter_eight.building_blocks_four.heading')}
        </Text>
        <Text className="mt-4 font-nunito text-xl text-white">
          {t('chapter_eight.building_blocks_four.paragraph_one')}
        </Text>
        <Text className="mt-4 font-nunito text-xl text-white">
          {t('chapter_eight.building_blocks_four.paragraph_two')}
        </Text>
        <Text className="mt-4 font-nunito text-xl text-white">
          {t('chapter_eight.building_blocks_four.paragraph_three')}
        </Text>
      </LessonInfo>
    </ScriptingChallenge>
  )
}
