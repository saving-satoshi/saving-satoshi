'use client'

import { ScriptingChallenge, LessonInfo, CodeExample, Title, Table } from 'ui'
import { EditorConfig } from 'types'
import { useTranslations } from 'hooks'
import { Text } from 'ui'
import { useState } from 'react'
import { getLessonKey } from 'lib/progress'
import { secp256k1 } from 'ui/lesson/ScriptingChallenge/library/'
import { useAuthContext } from 'providers/AuthProvider'

export const metadata = {
  title: 'chapter_six.in_out_four.title',
  key: 'CH6INO4',
}

export default function InOut4({ lang }) {
  const t = useTranslations(lang)
  const tableHeading = [
    t('chapter_six.in_out_four.table.heading.one'),
    t('chapter_six.in_out_four.table.heading.two'),
    t('chapter_six.in_out_four.table.heading.three'),
    t('chapter_six.in_out_four.table.heading.four'),
  ]
  const outputRows = [
    [
      t('chapter_six.in_out_four.table.row_one.column.one'),
      t('chapter_six.in_out_four.table.row_one.column.two'),
      t('chapter_six.in_out_four.table.row_one.column.three'),
      t('chapter_six.in_out_four.table.row_one.column.four'),
    ],
    [
      t('chapter_six.in_out_four.table.row_two.column.one'),
      t('chapter_six.in_out_four.table.row_two.column.two'),
      t('chapter_six.in_out_four.table.row_two.column.three'),
      t('chapter_six.in_out_four.table.row_two.column.four'),
    ],
    [
      t('chapter_six.in_out_four.table.row_three.column.one'),
      t('chapter_six.in_out_four.table.row_three.column.two'),
      t('chapter_six.in_out_four.table.row_three.column.three'),
      t('chapter_six.in_out_four.table.row_three.column.four'),
    ],
    [
      t('chapter_six.in_out_four.table.row_four.column.one'),
      t('chapter_six.in_out_four.table.row_four.column.two'),
      t('chapter_six.in_out_four.table.row_four.column.three'),
      t('chapter_six.in_out_four.table.row_four.column.four'),
    ],
    [
      t('chapter_six.in_out_four.table.row_five.column.one'),
      t('chapter_six.in_out_four.table.row_five.column.two'),
      t('chapter_six.in_out_four.table.row_five.column.three'),
      t('chapter_six.in_out_four.table.row_five.column.four'),
    ],
  ]

  const { account } = useAuthContext()

  const javascript = {
    program: `
console.log("KILL")`,
    defaultFunction: {
      name: 'privateKeyToPublicKey',
      args: ['privateKey'],
    },
    defaultCode: `class Output {

  constructor() {
    this.value = 0;
    this.witness_version = 0;
    this.witness_data = Buffer.alloc(0);
  }
    
  static from_options(addr, value) {
    assert(Number.isInteger(value));
    const self = new this();
    // YOUR CODE HERE
    return self;
  }
    
  serialize() {
    // YOUR CODE HERE
  }
}
        
`,
    validate: async (answer: string) => {
      const parsedAnswer = JSON.parse(answer)
      const correctPattern = /^0x[0-9a-fA-F]{64}$/
      if (parsedAnswer) {
        if (
          parsedAnswer['x'].match(correctPattern) &&
          parsedAnswer['y'].match(correctPattern)
        ) {
          return [true, 'Nicely Done ']
        } else {
          return [false, 'Try multiplying with the G constant']
        }
      } else {
        return [false, 'Try logging out your answer']
      }
    },
    constraints: [
      {
        range: [11, 1, 20, 1],
        allowMultiline: true,
      },
    ],
  }

  const python = {
    program: `
print("KILL")`,
    defaultFunction: {
      name: 'privatekey_to_publickey',
      args: ['private_key'],
    },
    defaultCode: `class Output:
  def __init__(self):
    self.value = 0
    self.witness_version = 0
    self.witness_data = b""

  @classmethod
  def from_options(cls, addr: str, value: int):
    assert isinstance(value, int)
    self = cls()
    # YOUR CODE HERE
    return self

  def serialize(self):
    # YOUR CODE HERE

   
`,
    validate: async (answer) => {
      const parsedAnswer = JSON.parse(answer)
      const correctPattern = /^0x[0-9a-fA-F]{64}$/
      if (parsedAnswer) {
        if (
          parsedAnswer['x'].match(correctPattern) &&
          parsedAnswer['y'].match(correctPattern)
        ) {
          return [true, 'Nicely Done ']
        } else {
          return [false, 'Try multiplying with the G constant']
        }
      } else {
        return [false, 'Try printing out your answer']
      }
    },
    constraints: [
      {
        range: [11, 1, 18, 1],
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
      saveData
      lessonKey={getLessonKey('chapter-6', 'in-out-4')}
      successMessage={t('chapter_six.in_out_four.success')}
      onSelectLanguage={handleSelectLanguage}
    >
      <LessonInfo className="overflow-y-scroll">
        <Title>{t('chapter_six.in_out_four.heading')}</Title>
        <Text className="mt-4 font-nunito text-xl text-white">
          {t('chapter_six.in_out_four.paragraph_one')}
        </Text>
        <CodeExample
          className="mt-4"
          code={`from_options(addr: str, value: int)`}
          language="shell"
        />
        <Text className="mt-4 font-nunito text-xl text-white">
          {t('chapter_six.in_out_four.paragraph_two')}
        </Text>

        <div className="mt-4">
          <Title>{t('chapter_six.in_out_four.heading_two')}</Title>
        </div>
        <div className="mt-4 flex-col gap-4">
          <Table headings={tableHeading} rows={outputRows} />
        </div>
      </LessonInfo>
    </ScriptingChallenge>
  )
}
