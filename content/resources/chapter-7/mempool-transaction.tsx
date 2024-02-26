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
  defaultCode: [`//No Javascript Solution, check back soon`],
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
    `txs = {tx.txid: tx for tx in mempool}

    def get_ancestors(tx, depth=0):
        """Returns: list of (ancestor, depth) tuples.

        Ancestors may appear more than once in an ancestor tree, including with different depths.

        Sorting by descending depth and deduping implies no descendant appears before its ancestor."""
        ancestors = [(tx, depth)]
        for parent in tx.parents:
            ancestors += get_ancestors(txs[parent], depth + 1)
        if depth > 0:
            return ancestors
        ret = []
        for ancestor, _ in sorted(ancestors, key=lambda ad: ad[1], reverse=True):
            if ancestor not in ret:
                ret.append(ancestor)
        return ret

    for tx in mempool:
        # Calculate ancestors for each tx
        tx.ancestors = get_ancestors(tx, 0)
        tx.ancestor_fee = sum([ancestor_txid.fee for ancestor_txid in tx.ancestors])
        tx.ancestor_weight = sum([ancestor_txid.weight for ancestor_txid in tx.ancestors])
        tx.ancestor_feerate = tx.ancestor_fee / tx.ancestor_weight
        for anc in [a.txid for a in tx.ancestors if a.txid != tx.txid]:
            txs[anc].descendants.append(tx.txid)

    # Reorder transactions by ancestor_feerate
    txs = OrderedDict(sorted(txs.items(), key=lambda tx: tx[1].ancestor_feerate, reverse=True))

    # Now construct the block
    block = []
    block_weight = 0

    def remove_from_pool(tx):
        # print("including tx {}".format(tx.txid))
        for desc in tx.descendants:
            txs[desc].ancestor_fee -= tx.fee
            txs[desc].ancestor_weight -= tx.weight
            txs[desc].ancestor_feerate = txs[desc].ancestor_fee / txs[desc].ancestor_weight
            txs[desc].ancestors.remove(tx)
            # print("modifying descendant {}".format(desc))

    while txs:
        # Pop first transaction from ordered dict
        tx = next(iter(txs.values()))
        if block_weight + tx.ancestor_weight > MAX_BLOCK_WEIGHT:
            # Package won't fit in block
            txs.pop(tx.txid)
            continue
        # Add all unincluded package txs to block
        # print("including package {}: {}".format(tx.txid, ','.join([a.txid for a in tx.ancestors])))
        ancestors = [a for a in tx.ancestors]
        for ancestor in ancestors:
            if ancestor.txid not in txs:
                # ancestor already included
                print(ancestor.txid)
                assert False
            remove_from_pool(ancestor)
            block.append(txs.pop(ancestor.txid).txid)
            block_weight += ancestor.weight
        # Resort list
        txs = OrderedDict(sorted(txs.items(), key=lambda tx: tx[1].ancestor_feerate, reverse=True))
        continue  # Break into outer loop. Restart iteration over all unincluded txs

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
                  height={`1260px`}
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
