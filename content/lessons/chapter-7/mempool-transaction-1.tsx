'use client'

import { ScriptingChallenge, LessonInfo, Title, Table } from 'ui'
import { EditorConfig } from 'types'
import { useTranslations } from 'hooks'
import { Text } from 'ui'
import { useState } from 'react'
import { getLessonKey } from 'lib/progress'
import { useAuthContext } from 'providers/AuthProvider'

export const metadata = {
  title: 'chapter_seven.mempool_transaction_one.title',
  key: 'CH7MPT1',
}

export default function MempoolTransaction1({ lang }) {
  const t = useTranslations(lang)
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
  const inputRows = [
    [
      'b27f86d3',
      '43430',
      '220',
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
    [
      '8fa820d5',
      '20221',
      '1108',
      <span className="inline-block w-[72px]">&nbsp;</span>,
    ],
  ]

  const { account } = useAuthContext()

  const javascript = {
    program: `console.log(input_mqwaslhd.serialize().toString('hex') === '8e74531c4516169a7cc84d3f65c216a39dcb24cae59d1fd76e6320c93116088a0100000000ffffffff' && 'true')
console.log("KILL")`,
    defaultFunction: {
      name: 'inputClass',
      args: ['privateKey'],
    },
    defaultCode: `serialize() {
    // YOUR CODE HERE
  }
`,
    validate: async (answer: string) => {
      if (answer) {
        if (answer === 'true') {
          return [true, '']
        } else {
          return [false, 'recheck your methods']
        }
      } else {
        return [false, "can't find a return in both of the methods"]
      }
    },
    constraints: [
      {
        range: [2, 1, 3, 1],
        allowMultiline: true,
      },
    ],
  }

  const python = {
    program: `print(input_mqwaslhd.serialize().hex() == '8e74531c4516169a7cc84d3f65c216a39dcb24cae59d1fd76e6320c93116088a0100000000ffffffff' and 'true')
print("KILL")`,
    defaultFunction: {
      name: 'input_class',
      args: ['private_key'],
    },
    defaultCode: `def serialize(self):
        # YOUR CODE HERE
`,
    validate: async (answer) => {
      if (answer) {
        if (answer === 'true') {
          return [true, '']
        } else {
          return [false, 'recheck your methods']
        }
      } else {
        return [false, "can't find a return in both of the methods"]
      }
    },
    constraints: [
      {
        range: [2, 1, 3, 1],
        allowMultiline: true,
      },
    ],
  }

  const config: EditorConfig = {
    defaultLanguage: 'javascript',
    languages: {
      javascript,
      python,
    },
  }

  const [language, setLanguage] = useState(config.defaultLanguage)
  const handleSelectLanguage = (language: string) => {
    setLanguage(language)
  }

  return (
    <ScriptingChallenge
      lang={lang}
      config={config}
      lessonKey={getLessonKey('chapter-7', 'mempool-transaction-1')}
      successMessage={t('chapter_seven.mempool_transaction_one.success')}
      onSelectLanguage={handleSelectLanguage}
      saveData
    >
      <LessonInfo className="overflow-y-scroll  sm:max-h-[calc(100vh-70px)]">
        <Title>{t('chapter_seven.mempool_transaction_one.heading')}</Title>
        <Text className="mt-4 font-nunito text-xl text-white">
          {t('chapter_seven.mempool_transaction_one.paragraph_one')}
        </Text>
        <Text className="mt-4 font-nunito text-xl text-white">
          {t('chapter_seven.mempool_transaction_one.paragraph_two')}
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
