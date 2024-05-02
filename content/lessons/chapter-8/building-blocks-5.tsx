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
  title: 'chapter_eight.building_blocks_five.nav_title',
  navigation_title: 'chapter_eight.building_blocks_five.nav_title',
  key: 'CH8BBK5',
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

console.log("KILL")`,
    defaultFunction: {
      name: 'privateKeyToPublicKey',
      args: ['privateKey'],
    },
    defaultCode: `const Bitcoin = require('@0tuedon/bitcoin_rpcjs')
const CODE_CHALLENGE_3_BLOCK_HASH = "003b9be2d96d14f02717c262bb4b9a0b23191e2f1d9a38413204f3be4f21613c"
const CODE_CHALLENGE_3_TX_HASH = "aaf2fd920b7e628b1480b88343ab3b49e49969cf61b059d8c1532b805b7a6d2f"

const getTxFee = (tx)=>{
  let fee = 0

}

const getBlockTx = ()=>{
  let block = Bitcoin.rpc("getblock", CODE_CHALLENGE_3_BLOCK_HASH)

}

}
getBlockTx()
`,
    validate: async (answer: string) => {
      if (answer == '1027') {
        return [true, 'Nicely Done ']
      } else {
        return [false, 'Incorrect']
      }
    },
  }

  const python = {
    program: `
print("KILL")`,
    defaultFunction: {
      name: 'privatekey_to_publickey',
      args: [''],
    },
    defaultCode: `from bitcoin_rpcpy.bitcoin_rpc import Bitcoin
CODE_CHALLENGE_3_BLOCK_HASH = "003b9be2d96d14f02717c262bb4b9a0b23191e2f1d9a38413204f3be4f21613c"
CODE_CHALLENGE_3_TX_HASH = "aaf2fd920b7e628b1480b88343ab3b49e49969cf61b059d8c1532b805b7a6d2f"

def get_tx_fee(tx):
    fee = 0

def get_block_tx():
  block = Bitcoin.rpc("getblock", CODE_CHALLENGE_3_BLOCK_HASH)

`,
    validate: async (answer: string) => {
      if (answer === '1027') {
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
      lessonKey={getLessonKey('chapter-8', 'building-block-5')}
      successMessage={t('chapter_eight.building_blocks_five.success')}
      onSelectLanguage={handleSelectLanguage}
    >
      <LessonInfo>
        <Text className="font-nunito text-2xl font-bold text-white">
          {t('chapter_eight.building_blocks_five.heading')}
        </Text>
        <Text className="mt-4 font-nunito text-xl text-white">
          {t('chapter_eight.building_blocks_five.paragraph_one')}
        </Text>
        <Text className="mt-4 font-nunito text-xl text-white">
          {t('chapter_eight.building_blocks_five.paragraph_two')}
        </Text>
        <Text className="mt-4 font-nunito text-xl text-white">
          {t('chapter_eight.building_blocks_five.paragraph_three')}
        </Text>
        <Text className="mt-4 font-nunito text-xl text-white">
          {t('chapter_eight.building_blocks_five.paragraph_four')}
        </Text>
        <CodeExample
          className="mt-4"
          language="txt"
          code="aaf2fd920b7e628b1480b88343ab3b49e49969cf61b059d8c1532b805b7a6d2f"
        />
        <Text className="mt-4 font-nunito text-xl text-white">
          {t('chapter_eight.building_blocks_five.paragraph_five')}
        </Text>
        <CodeExample
          className="mt-4"
          language="txt"
          code="003b9be2d96d14f02717c262bb4b9a0b23191e2f1d9a38413204f3be4f21613c"
        />
        <Text className="mt-4 font-nunito text-xl text-white">
          {t('chapter_eight.building_blocks_five.paragraph_six')}
        </Text>
      </LessonInfo>
    </ScriptingChallenge>
  )
}
