'use client'

import { useTranslations } from 'hooks'
import { useState } from 'react'
import { Loader } from 'shared'

import MonacoEditor from '@monaco-editor/react'

import { EditorConfig } from 'types'
import { Text, ResourcePage, ToggleSwitch } from 'ui'
import LanguageTabs from 'ui/lesson/ScriptingChallenge/LanguageTabs'
import { readOnlyOptions } from 'ui/lesson/ScriptingChallenge/config'

const javascript = {
  program: `console.log("KILL")`,
  defaultFunction: {
    name: 'findHash',
    args: ['nonce'],
  },
  defaultCode: [
    `  // This block constructor opportunistically includes transactions with unconfirmed parents.
  // If a transaction has unconfirmed parents, but those parents are all already included in the block, then it is valid for inclusion.
  const block = [];
  let block_weight = 0;
  for (const tx of mempool) {
      tx.feerate = parseFloat(tx.fee) / parseFloat(tx.weight);
  }
  // Construct dictionary for fast lookup
  const txs = new Map([...mempool.map(tx => [tx.txid, tx])].sort((a, b) => b[1].feerate - a[1].feerate));
  while (true) {
    let added = false;
    for (const tx of txs.values()) {
      // Opportunistically include txs with unconfirmed parents if their parents
      if (tx.parents.some(parent_tx => txs.has(parent_tx))) {
        continue;
      }
      if (block_weight + tx.weight > MAX_BLOCK_WEIGHT) {
        // Transaction won't fit in block
        continue;
      }
      block.push(txs.get(tx.txid).txid);
      block_weight += tx.weight;
      txs.delete(tx.txid);
      added = true;
      break;
    }
    if (!added) {
      // Couldn't add any more transactions.
      break;
    }
  }
  return block;`,
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
    `    """This block constructor opportunistically includes transactions with
    unconfirmed parents.

    If a transaction has unconfirmed parents, but those parents are all already
    included in the block, then it is valid for inclusion."""
    block = []
    block_weight = 0
    for tx in mempool:
        tx.feerate = float(tx.fee) / float(tx.weight)
    # Construct dictionary for fast lookup
    txs = OrderedDict(sorted([(tx.txid, tx) for tx in mempool], key=lambda x: x[1].feerate, reverse=True))
    while True:
        for tx in txs.values():
            # Opportunistically include txs with unconfirmed parents if their parents
            if any([parent_tx in txs for parent_tx in tx.parents]):
                continue
            if block_weight + tx.weight > MAX_BLOCK_WEIGHT:
                # Transaction won't fit in block
                continue
            block.append(txs.pop(tx.txid).txid)
            block_weight += tx.weight
            break
        else:
            # Couldn't add any more transactions.
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

export default function MempoolTransactionResources({ lang }) {
  const t = useTranslations(lang)

  const [code, setCode] = useState(
    config.languages[config.defaultLanguage].defaultCode?.[0]
  )
  const [language, setLanguage] = useState(config.defaultLanguage)
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
      readingResources={<></>}
      codeResources={
        <>
          <Text>{t('help_page.solution_one')}</Text>
          <div className="flex flex-row items-center gap-2">
            <ToggleSwitch
              checked={challengeIsToggled}
              onChange={challengeToggleSwitch}
            />
            <Text>{t('help_page.spoilers_confirm')}</Text>
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
                  height={`635px`}
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
