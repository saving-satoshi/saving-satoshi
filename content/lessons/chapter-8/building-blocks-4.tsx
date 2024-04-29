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
console.log(getBlockHeight())
console.log("KILL")`,
    defaultFunction: {
      name: 'privateKeyToPublicKey',
      args: ['privateKey'],
    },
    defaultCode: `const Bitcoin = require('@0tuedon/bitcoin_rpcjs')
const CODE_CHALLENGE_2_HEIGHT = 6929996;
const hashes = Bitcoin.rpc('getblocksbyheight', CODE_CHALLENGE_2_HEIGHT);
let txCount = Infinity;

const getBlockHeight = () => {
  

}
`,
    validate: async (answer: string) => {
      if (
        answer ===
        'b09090d61e5eea3e23e9b428de2d9660c8b5e345ec3bb39eea8df9bc80813171'
      ) {
        return [true, 'Nicely Done ']
      } else {
        return [false, 'Incorrect']
      }
    },
  }

  const python = {
    program: `
print(get_block_height())
print("KILL")`,
    defaultFunction: {
      name: 'privatekey_to_publickey',
      args: [''],
    },
    defaultCode: `from bitcoin_rpcpy.bitcoin_rpc import Bitcoin
CODE_CHALLENGE_2_HEIGHT = 6929996
hashes = Bitcoin.rpc("getblocksbyheight", CODE_CHALLENGE_2_HEIGHT)
answer = None

def get_block_height():
  tx_count = float("inf")
    
`,
    validate: async (answer: string) => {
      if (
        answer ===
        'b09090d61e5eea3e23e9b428de2d9660c8b5e345ec3bb39eea8df9bc80813171'
      ) {
        return [true, 'Nicely Done ']
      } else {
        return [false, 'Incorrect']
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
      successMessage={t('chapter_eight.building_blocks_four.success')}
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
