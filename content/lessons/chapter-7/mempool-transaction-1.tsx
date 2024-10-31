'use client'

import { chapters } from 'content/chapters'
import {
  ScriptingChallenge,
  LessonInfo,
  Title,
  Table,
  HolocatQuestion,
} from 'ui'
import { EditorConfig } from 'types'
import { useTranslations } from 'hooks'
import { Text } from 'ui'
import { useState } from 'react'
import { getLanguageString } from 'lib/SavedCode'
import { useAtom } from 'jotai'
import { accountAtom, currentLanguageAtom } from 'state/state'

export const metadata = {
  title: 'chapter_seven.mempool_transaction_one.title',
  navigation_title: 'chapter_seven.mempool_transaction_one.nav_title',
  key: 'CH7MPT1',
}

export default function MempoolTransaction1({ lang }) {
  const t = useTranslations(lang)
  const [currentLanguage] = useAtom(currentLanguageAtom)
  const tableHeading = [
    t('chapter_seven.mempool_transaction_one.headings.item_one'),
    <>
      {t('chapter_seven.mempool_transaction_one.headings.item_two')}
      <br />
      <span className="font-thin">
        {t('chapter_seven.mempool_transaction_one.headings.item_two_b')}
      </span>
    </>,
    <>
      {t('chapter_seven.mempool_transaction_one.headings.item_three')}
      <br />
      <span className="font-thin">
        {t('chapter_seven.mempool_transaction_one.headings.item_three_b')}
      </span>
    </>,
    t('chapter_seven.mempool_transaction_one.headings.item_four'),
  ]
  // txid
  // fee
  // weight
  // [ancestors]
  const inputRows = [
    [
      'b27f86d3',
      '43430',
      '2020',
      <span className="inline-block w-[72px]">&nbsp;</span>,
    ],
    [
      'c27b4d2e',
      '30168',
      '1676',
      <>
        bd1d83ca
        <br />
        f29aec75
      </>,
    ],
    [
      '18725711',
      '5520',
      '1840',
      <>
        3c64a457
        <br />
        3c8abf73
      </>,
    ],
    [
      '92b1ecf5',
      '24302',
      '1676',
      <>
        398695a6
        <br />
        10025d80
      </>,
    ],
    ['8e8c8624', '8990', '1160', '01f6094b'],
    ['5f6c9a80', '13716', '1524', '64121ab1'],
    ['e140fa46', '13020', '1488', '7675c31c'],
    [
      'd7066e71',
      '16416',
      '1152',
      <span className="inline-block w-[72px]">&nbsp;</span>,
    ],
    ['88016f17', '15200', '1600', '5e518bbe'],
    ['8fa820d5', '20221', '1108', <>38a62dcc</>],
  ]

  const [account] = useAtom(accountAtom)

  const javascript = {
    program: `//BEGIN VALIDATION BLOCK
const MAX_BLOCK_WEIGHT = 4000000;

function testBlock(mempool, block) {
  let blockWeight = 0;
  let blockFees = 0;

  // Construct map for fast lookup
  const mempoolTXs = {};
  for (const tx of mempool) {
    mempoolTXs[tx.txid] = tx;
  }

  const included = new Set();
  for (const txid of block) {
    // Check for duplicate txs
    if (included.has(txid)) {
      return \`Duplicate TX found: \${txid}\`
    }

    // Check for non-existent txs
    if (!mempoolTXs[txid]) {
      return \`Invalid tx found: \${txid} (not in mempool)\`
    }

    // Check for missing parents
    for (const parentTXID of mempoolTXs[txid].parents) {
      if (!included.has(parentTXID)) {
        return \`Invalid tx found: \${txid} \` + \`(required parent tx \${parentTXID} not in block)\`
      }
    }

    included.add(txid);
    blockWeight += mempoolTXs[txid].weight;
    blockFees += mempoolTXs[txid].fee;
  }

  if (blockWeight > MAX_BLOCK_WEIGHT) {
    return \`Too large block! Weight: \${blockWeight}\`
  }

  return \`Total fees: \${blockFees} Total weight: \${blockWeight}\`;
}

console.log(testBlock(json, run()))

console.log("KILL")`,
    defaultFunction: {
      name: 'inputClass',
      args: ['privateKey'],
    },
    defaultCode: `const json = require('./mempool.json')

class MempoolTransaction {
  constructor(json) {
    this.txid = json.txid;
    this.weight = json.weight;
    this.fee = json.fee;
    this.parents = json.parents;
  }
}

// Fix this!
function assembleBlock(mempool) {
  const block = [];
  for (const tx of mempool) {
    block.push(tx.txid);
  }
  return block;
}

function importMempoolFromJson(json) {
  const mempool = [];
  for (const tx of json) {
    mempool.push(new MempoolTransaction(tx));
  }
  return mempool;
}

function run() {
  const mempool = importMempoolFromJson(json);
  const block = assembleBlock(mempool);
  return block;
}
`,
    validate: async (answer: string) => {
      if (answer) {
        if (answer.startsWith('Too large block!')) {
          return [false, 'Invalid block, keep working!']
        }

        if (
          answer.startsWith('Total fees:') &&
          Number(answer.split(' ')[2]) <= 50000000
        ) {
          return [3, '']
        }

        if (
          answer.startsWith('Total fees:') &&
          Number(answer.split(' ')[2]) >= 50000001 &&
          Number(answer.split(' ')[2]) <= 65000000
        ) {
          return [4, '']
        }

        if (
          answer.startsWith('Total fees:') &&
          Number(answer.split(' ')[2]) >= 65000001
        ) {
          return [5, t('chapter_seven.mempool_transaction_one.success')]
        } else {
          return [false, 'Invalid block, keep working!']
        }
      } else {
        return [false, "can't find a return in both of the methods"]
      }
    },
  }

  const python = {
    program: `# BEGIN VALIDATION BLOCK
from collections import Counter
MAX_BLOCK_WEIGHT = 4000000

mempool_test = import_mempool_from_json_file("mempool.json")

def test_block(mempool, block):
    """Read a list of transactions from stdin and check that they form a valid block."""
    block_weight = 0
    block_fees = 0
    txs_in_block = []
    # Construct dictionary for fast lookup
    mempool_txs = {tx.txid: tx for tx in mempool}
    lines_to_test = block

    duplicate_txs = [k for k, count in Counter(lines_to_test).items() if count > 1]

    if duplicate_txs:
        print("Invalid block!")
        count = len(duplicate_txs)
        txs = duplicate_txs[:2] + ["..."] if count > 2 else []
        return f"{count} duplicate txs found: {txs}"

    for tx in lines_to_test:
        if tx not in mempool_txs.keys():
            return f"Invalid tx {tx} in block!"

        for parent in mempool_txs[tx].parents:
            if parent not in txs_in_block:
                return f"Block contains transaction {tx} with unconfirmed parent {parent}!"

        txs_in_block.append(tx)
        block_weight += mempool_txs[tx].weight
        block_fees += mempool_txs[tx].fee

    if block_weight > MAX_BLOCK_WEIGHT:
        return f"Too large block! Weight: {block_weight}"

    return f"Total fees: {block_fees} Total weight: {block_weight}"

print(test_block(mempool_test, run()))
print("KILL")`,
    defaultFunction: {
      name: 'input_class',
      args: ['private_key'],
    },
    defaultCode: `import json
from collections import OrderedDict

class MempoolTransaction:
    def __init__(self, json):
        self.txid = json["txid"]
        self.weight = json["weight"]
        self.fee = json["fee"]
        self.parents = json["parents"]

# Fix this!
def assemble_block(mempool):
    block = []
    for tx in mempool:
        block.append(tx.txid)
    return block

def import_mempool_from_json_file(file_path):
    with open(file_path, 'r') as file:
        data = json.load(file)
    mempool = []
    for tx in data:
        mempool.append(MempoolTransaction(tx))
    return mempool

def run():
    mempool = import_mempool_from_json_file("mempool.json")
    block = assemble_block(mempool)
    return block
`,
    validate: async (answer: string) => {
      if (answer) {
        if (!answer.startsWith('Total fees:')) {
          return [false, 'Invalid block, keep working!']
        }

        if (
          answer.startsWith('Total fees:') &&
          Number(answer.split(' ')[2]) <= 50000000
        ) {
          return [3, '']
        }

        if (
          answer.startsWith('Total fees:') &&
          Number(answer.split(' ')[2]) >= 50000001 &&
          Number(answer.split(' ')[2]) <= 65000000
        ) {
          return [4, '']
        }

        if (
          answer.startsWith('Total fees:') &&
          Number(answer.split(' ')[2]) >= 65000001
        ) {
          return [5, t('chapter_seven.mempool_transaction_one.success')]
        } else {
          return [false, 'Invalid block, keep working!']
        }
      } else {
        return [false, "can't find a return in both of the methods"]
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
  const [tooltipVisibleOne, setTooltipVisibleOne] = useState(false)
  const [tooltipVisibleTwo, setTooltipVisibleTwo] = useState(false)

  const handleMouseEnterOne = () => {
    setTooltipVisibleOne(true)
  }

  const handleMouseLeaveOne = () => {
    setTooltipVisibleOne(false)
  }

  const handleMouseEnterTwo = () => {
    setTooltipVisibleTwo(true)
  }

  const handleMouseLeaveTwo = () => {
    setTooltipVisibleTwo(false)
  }

  return (
    <ScriptingChallenge
      lang={lang}
      config={config}
      lessonKey={metadata.key}
      poorMessage={t('chapter_seven.mempool_transaction_one.poor')}
      goodMessage={t('chapter_seven.mempool_transaction_one.good')}
      onSelectLanguage={handleSelectLanguage}
      saveData
    >
      <LessonInfo>
        <Title>{t('chapter_seven.mempool_transaction_one.heading')}</Title>
        <Text className="mt-4 font-nunito text-xl text-white">
          {t(`chapter_seven.mempool_transaction_one.${language}.paragraph_one`)}
        </Text>
        <Text className="mt-4 font-nunito text-xl text-white">
          {t('chapter_seven.mempool_transaction_one.paragraph_two.a')}
          <a
            onMouseEnter={handleMouseEnterOne}
            onMouseLeave={handleMouseLeaveOne}
            href={t(
              'chapter_seven.mempool_transaction_one.paragraph_two.b.href'
            )}
            target="_blank"
            className="inline text-lg italic hover:underline md:text-xl"
          >
            {t('chapter_seven.mempool_transaction_one.paragraph_two.b.text')}
            <HolocatQuestion
              theme={chapters['chapter-7'].metadata.theme}
              inline
              id="weight-units"
              question={t(
                'chapter_seven.mempool_transaction_one.paragraph_two.b.question'
              )}
              href={t(
                'chapter_seven.mempool_transaction_one.paragraph_two.b.href'
              )}
              visible={tooltipVisibleOne}
            />
          </a>
          {t('chapter_seven.mempool_transaction_one.paragraph_two.c')}
          <a
            onMouseEnter={handleMouseEnterTwo}
            onMouseLeave={handleMouseLeaveTwo}
            href={t(
              'chapter_seven.mempool_transaction_one.paragraph_two.d.href'
            )}
            target="_blank"
            className="inline text-lg italic hover:underline md:text-xl"
          >
            {t('chapter_seven.mempool_transaction_one.paragraph_two.d.text')}
            <HolocatQuestion
              theme={chapters['chapter-7'].metadata.theme}
              inline
              id="tx-order"
              question={t(
                'chapter_seven.mempool_transaction_one.paragraph_two.d.question'
              )}
              href={t(
                'chapter_seven.mempool_transaction_one.paragraph_two.d.href'
              )}
              visible={tooltipVisibleTwo}
            />
          </a>
          {t('chapter_seven.mempool_transaction_one.paragraph_two.e')}
        </Text>
        <Text className="mt-4 font-nunito text-xl text-white">
          {t('chapter_seven.mempool_transaction_one.paragraph_three')}
        </Text>
        <ul className="list-disc pl-5 font-nunito">
          <li className="break-words text-lg md:text-xl">
            {t('chapter_seven.mempool_transaction_one.bullet_one')}
          </li>
          <li className="break-words text-lg md:text-xl">
            {t('chapter_seven.mempool_transaction_one.bullet_two')}
          </li>
        </ul>
        <Text className="mt-4 font-nunito text-xl text-white">
          {t('chapter_seven.mempool_transaction_one.paragraph_four')}
        </Text>
        <Text className="mb-2 mt-4 font-nunito text-xl text-white">
          {t('chapter_seven.mempool_transaction_one.paragraph_five')}
        </Text>
        <Table
          footer={t('chapter_seven.mempool_transaction_one.table_one.footer')}
          headings={tableHeading}
          rows={inputRows}
        />
      </LessonInfo>
    </ScriptingChallenge>
  )
}
