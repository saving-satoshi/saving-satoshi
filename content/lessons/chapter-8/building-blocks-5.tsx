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

export default function BuildingBlocks5({ lang }) {
  const t = useTranslations(lang)
  const { currentLanguage } = useDataContext()

  const javascript = {
    program: `console.log(getBlockTxFee());
console.log("KILL")`,
    defaultFunction: {
      name: 'getBlockTxFee',
      args: [''],
    },
    defaultCode: `const Bitcoin = require('@0tuedon/bitcoin_rpcjs')
const BLOCK_HASH = "003b9be2d96d14f02717c262bb4b9a0b23191e2f1d9a38413204f3be4f21613c"
const TX_HASH = "aaf2fd920b7e628b1480b88343ab3b49e49969cf61b059d8c1532b805b7a6d2f"
    
// First we need to find the block associated with the corresponding tx hash
// build a function that will call getTxFee when it finds a transaction with the correct TX_HASH
// this is the function that we will call for validation
const getBlockTxFee = () => {
  let block = Bitcoin.rpc("getblock", BLOCK_HASH)
  // YOUR CODE HERE
}
    
// Now let's find the miner's fee for this transaction.
// with the transaction from above determine the fee paid to miners
const getTxFee = (tx) =>{
  let fee = 0
  // YOUR CODE HERE
  return fee
}  
`,
    validate: async (answer) => {
      // We need \u001b[33m1027\u001b[39m because javascript is weird  meant to be 1027
      if (answer === '\u001b[33m1027\u001b[39m') {
        return [true, 'Nicely Done']
      } else {
        return [false, 'Incorrect']
      }
    },
  }

  const python = {
    program: `
print(get_block_tx_fee())
print("KILL")`,
    defaultFunction: {
      name: 'get_block_tx_fee',
      args: [''],
    },
    defaultCode: `from bitcoin_rpcpy.bitcoin_rpc import Bitcoin
BLOCK_HASH = "003b9be2d96d14f02717c262bb4b9a0b23191e2f1d9a38413204f3be4f21613c"
TX_HASH = "aaf2fd920b7e628b1480b88343ab3b49e49969cf61b059d8c1532b805b7a6d2f"

# First we need to find the transaction with the corresponding tx hash
# build a function that will call get_tx_Fee when it finds a transaction with the correct TX_HASH
# this is the function that we will call for validation
def get_block_tx_fee():
    block = Bitcoin.rpc("getblock", BLOCK_HASH)
    # YOUR CODE HERE

# Now let's find the miner's fee for this transaction.
# with the transaction from above determine the fee paid to miners
def get_tx_fee(tx):
    fee = 0
    # YOUR CODE HERE
    return fee
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
