'use client'

import { useTranslations } from 'hooks'
import { useState } from 'react'
import { Loader } from 'shared'

import MonacoEditor from '@monaco-editor/react'

import { EditorConfig } from 'types'
import { Text, ResourcePage, ToggleSwitch } from 'ui'
import LanguageTabs from 'ui/lesson/ScriptingChallenge/LanguageTabs'
import { readOnlyOptions } from 'ui/lesson/ScriptingChallenge/config'
import { getLanguageString } from 'lib/SavedCode'
import { useAtom } from 'jotai'
import { currentLanguageAtom } from 'state/state'

const javascript = {
  program: `console.log("KILL")`,
  defaultFunction: {
    name: 'findHash',
    args: ['nonce'],
  },
  defaultCode: [
    `function assembleBlock(mempool) {
  // This block constructor opportunistically includes transactions with unconfirmed parents.
  // If a transaction has unconfirmed parents, but those parents are all already included in the block, then it is valid for inclusion.

  initialize empty list block
  initialize block_weight to 0

  // Calculate the fee rate for each transaction
  for each transaction in mempool:
    transaction.feerate = transaction.fee / transaction.weight

  // Create a dictionary for fast lookup and sort transactions by fee rate in descending order
  initialize dictionary txs with transactions from mempool sorted by feerate in descending order

  while (true) {
    initialize added to false

    for (each transaction in txs) {
      // Opportunistically include txs with unconfirmed parents if their parents can be included
      if (txs.has(transaction.parents)) {
        continue;
      }

      // Check if the transaction fits in the block
      if (block_weight + transaction.weight > MAX_BLOCK_WEIGHT) {
        continue;
      }

      // Add transaction to block
      add transaction.txid to block
      increment block_weight by transaction.weight
      remove transaction from txs
      set added to true
      break // exit the for loop
    }
      // If no transaction was added in this iteration, exit the while loop
    if (added is false) {
      break
    }
  }
  return block;
}`,
  ],
  validate: async (answer) => {
    return [true, undefined]
  },
  constraints: [],
}

const python = {
  program: `print("KILL")`,
  defaultFunction: {
    name: 'find_hash',
    args: ['nonce'],
  },
  defaultCode: [
    `def assemble_block(mempool):
    """This block constructor opportunistically includes transactions with
    unconfirmed parents.

    If a transaction has unconfirmed parents, but those parents are all already
    included in the block, then it is valid for inclusion."""
    initialize block as an empty list
    initialize block_weight to 0

    # Calculate feerate for each transaction in mempool
    for each tx in mempool:
        set tx.feerate to tx.fee divided by tx.weight

    # Construct a dictionary of transactions sorted by feerate in descending order
    create txs as an ordered dictionary sorted by feerate in descending order
    for each tx in mempool:
        add (tx.txid, tx) to txs

    # Loop until no more transactions can be added
    while true:
        transaction_added = false
        for each tx in txs:
            # Opportunistically include txs with unconfirmed parents if their parents can be included
            if any parent of tx is in txs:
                continue

            # Check if adding the transaction would exceed the maximum block weight
            if block_weight + tx.weight > MAX_BLOCK_WEIGHT:
                continue

            # Add the transaction to the block
            add tx.txid to block
            increment block_weight by tx.weight
            remove tx from txs
            transaction_added = true
            break

        # If no transactions were added in the last iteration, exit the loop
        if not transaction_added:
            break

    return block`,
  ],
  validate: async (answer) => {
    return [true, undefined]
  },
  constraints: [],
}

const config: EditorConfig = {
  defaultLanguage: 'javascript',
  languages: {
    javascript,
    python,
  },
}

export default function MempoolTransactionResourcesOne({ lang }) {
  const t = useTranslations(lang)
  const [currentLanguage] = useAtom(currentLanguageAtom)
  const [code, setCode] = useState(
    config.languages[getLanguageString(currentLanguage)].defaultCode?.[0]
  )
  const [language, setLanguage] = useState(getLanguageString(currentLanguage))
  const [challengeIsToggled, setChallengeIsToggled] = useState(false)

  const challengeToggleSwitch = () => {
    setChallengeIsToggled(!challengeIsToggled)
  }

  const handleSetLanguage = (value) => {
    setLanguage(value)
    setCode(config.languages[value].defaultCode?.[0])
  }

  const handleBeforeMount = (monaco) => {
    monaco.editor.defineTheme('satoshi', {
      base: readOnlyOptions.theme,
      inherit: true,
      rules: [],
      colors: {
        'editor.background': '#00000000',
        'editor.lineHighlightBorder': '#00000000', // 4th channel is for transparency
      },
    })
  }

  const handleMount = (_editor, monaco) => {
    monaco.editor.setTheme('satoshi')
  }

  return (
    <ResourcePage
      lang={lang}
      readingResources={
        <>
          <Text className="mt-[25px] text-xl font-bold">
            {t(
              'chapter_seven.resources.mempool_transaction_one.bytes_v_weight_heading'
            )}
          </Text>
          <Text>
            {t(
              'chapter_seven.resources.mempool_transaction_one.bytes_v_weight_paragraph_one'
            )}
          </Text>
          <Text className="mt-[25px] text-lg font-semibold">
            {t(
              'chapter_seven.resources.mempool_transaction_one.bytes_v_weight_subheading_bytes'
            )}
          </Text>
          <Text>
            {t(
              'chapter_seven.resources.mempool_transaction_one.bytes_v_weight_paragraph_two'
            )}
          </Text>
          <Text className="mt-[25px] text-lg font-semibold">
            {t(
              'chapter_seven.resources.mempool_transaction_one.bytes_v_weight_subheading_wu'
            )}
          </Text>
          <Text>
            {t(
              'chapter_seven.resources.mempool_transaction_one.bytes_v_weight_paragraph_three'
            )}
          </Text>
          <Text className="mt-[25px]">
            {t(
              'chapter_seven.resources.mempool_transaction_one.bytes_v_weight_paragraph_four'
            )}
          </Text>
        </>
      }
      codeResources={
        <>
          <Text>{t('help_page.pseudo_solution')}</Text>
          <div className="flex flex-row items-center gap-2">
            <ToggleSwitch
              checked={challengeIsToggled}
              onChange={challengeToggleSwitch}
            />
            <Text>{t('help_page.pseudo_confirm')}</Text>
          </div>
          {challengeIsToggled && (
            <div className="border border-white/25">
              <LanguageTabs
                languages={config.languages}
                value={language}
                onChange={handleSetLanguage}
                noHide={true}
              />
              <div className="relative grow bg-[#00000026] font-mono text-sm text-white">
                <MonacoEditor
                  loading={<Loader className="h-10 w-10 text-white" />}
                  height={`910px`}
                  value={code}
                  beforeMount={handleBeforeMount}
                  onMount={handleMount}
                  language={language}
                  theme={'satoshi'}
                  options={readOnlyOptions}
                />
              </div>
            </div>
          )}
        </>
      }
    />
  )
}
