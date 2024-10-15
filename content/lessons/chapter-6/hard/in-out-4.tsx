'use client'

import { ScriptingChallenge, LessonInfo, CodeExample, Title, Table } from 'ui'
import { EditorConfig } from 'types'
import { useTranslations } from 'hooks'
import { Text } from 'ui'
import { useState } from 'react'
import { getLanguageString } from 'lib/SavedCode'
import { useAtom } from 'jotai'
import { currentLanguageAtom } from 'state/state'

export const metadata = {
  title: 'chapter_six.in_out_four.hard.title',
  navigation_title: 'chapter_six.in_out_four.hard.nav_title',
  key: 'CH6INO4_HARD',
}

export default function InOut4({ lang }) {
  const t = useTranslations(lang)
  const [currentLanguage] = useAtom(currentLanguageAtom)

  const tableHeading = [
    t('chapter_six.in_out_four.hard.table_one.heading.one'),
    t('chapter_six.in_out_four.hard.table_one.heading.two'),
    t('chapter_six.in_out_four.hard.table_one.heading.three'),
    t('chapter_six.in_out_four.hard.table_one.heading.four'),
  ]
  const outputRows = [
    [
      t('chapter_six.in_out_four.hard.table_one.row_one.column.one'),
      t('chapter_six.in_out_four.hard.table_one.row_one.column.two'),
      t('chapter_six.in_out_four.hard.table_one.row_one.column.three'),
      t('chapter_six.in_out_four.hard.table_one.row_one.column.four'),
    ],
    [
      t('chapter_six.in_out_four.hard.table_one.row_two.column.one'),
      t('chapter_six.in_out_four.hard.table_one.row_two.column.two'),
      t('chapter_six.in_out_four.hard.table_one.row_two.column.three'),
      t('chapter_six.in_out_four.hard.table_one.row_two.column.four'),
    ],
  ]
  const inputRows = [
    [
      t('chapter_six.in_out_four.hard.table_two.row_one.column.one'),
      t('chapter_six.in_out_four.hard.table_two.row_one.column.two'),
      t('chapter_six.in_out_four.hard.table_two.row_one.column.three'),
      t('chapter_six.in_out_four.hard.table_two.row_one.column.four'),
    ],
    [
      t('chapter_six.in_out_four.hard.table_two.row_two.column.one'),
      t('chapter_six.in_out_four.hard.table_two.row_two.column.two'),
      t('chapter_six.in_out_four.hard.table_two.row_two.column.three'),
      t('chapter_six.in_out_four.hard.table_two.row_two.column.four'),
    ],
    [
      t('chapter_six.in_out_four.hard.table_two.row_three.column.one'),
      t('chapter_six.in_out_four.hard.table_two.row_three.column.two'),
      t('chapter_six.in_out_four.hard.table_two.row_three.column.three'),
      t('chapter_six.in_out_four.hard.table_two.row_three.column.four'),
    ],
    [
      t('chapter_six.in_out_four.hard.table_two.row_four.column.one'),
      t('chapter_six.in_out_four.hard.table_two.row_four.column.two'),
      t('chapter_six.in_out_four.hard.table_two.row_four.column.three'),
      t('chapter_six.in_out_four.hard.table_two.row_four.column.four'),
    ],
  ]

  const javascript = {
    program: `//BEGIN VALIDATION BLOCK
const txid_foahapoj = '8a081631c920636ed71f9de5ca24cb9da316c2653f4dc87c9a1616451c53748e';
const vout_ncapheme = 1;
const value_payrqpvs = 650000000;
const scriptcode_haieihsd = '1976a914b234aee5ee74d7615c075b4fe81fd8ace54137f288ac';
const input_mqwaslhd = Input.from_output(txid_foahapoj, vout_ncapheme, value_payrqpvs, scriptcode_haieihsd);
console.log(input_mqwaslhd.serialize().toString('hex') === '8e74531c4516169a7cc84d3f65c216a39dcb24cae59d1fd76e6320c93116088a0100000000ffffffff' && 'true')
console.log("KILL")`,
    defaultFunction: {
      name: 'inputClass',
      args: ['privateKey'],
    },
    defaultCode: `const assert = require('assert');

class Outpoint {
  constructor(txid, index) {
    assert(Buffer.isBuffer(txid));
    assert(txid.length === 32);
    assert(Number.isInteger(index));
    this.txid = txid;
    this.index = index;
  }

  serialize() {
    const buf = Buffer.alloc(36);
    this.txid.copy(buf, 0);
    buf.writeUInt32LE(this.index, 32);
    return buf;
  }
}

class Input {
  constructor() {
    this.outpoint = null;
    this.script = Buffer.alloc(0);
    this.sequence = 0xffffffff;
    this.value = 0;
    this.scriptcode = Buffer.alloc(0);
  }

  static from_output(txid, vout, value, scriptcode) {
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
        range: [1, 1, 39, 1],
        allowMultiline: true,
      },
    ],
  }

  const python = {
    program: `# BEGIN VALIDATION BLOCK
txid_foahapoj = "8a081631c920636ed71f9de5ca24cb9da316c2653f4dc87c9a1616451c53748e"
vout_ncapheme = 1
value_payrqpvs = 650000000
scriptcode_haieihsd = "1976a914b234aee5ee74d7615c075b4fe81fd8ace54137f288ac"
input_mqwaslhd = Input.from_output(txid_foahapoj, vout_ncapheme, value_payrqpvs, scriptcode_haieihsd)
print(input_mqwaslhd.serialize().hex() == '8e74531c4516169a7cc84d3f65c216a39dcb24cae59d1fd76e6320c93116088a0100000000ffffffff' and 'true')
print("KILL")`,
    defaultFunction: {
      name: 'input_class',
      args: ['private_key'],
    },
    defaultCode: `from struct import pack

class Outpoint:
    def __init__(self, txid: bytes, index: int):
        assert isinstance(txid, bytes)
        assert len(txid) == 32
        assert isinstance(index, int)
        self.txid = txid
        self.index = index

    def serialize(self):
        r = b""
        r += self.txid
        r += pack("<I", self.index)
        return r

class Input:
    def __init__(self):
        self.outpoint = None
        self.script = b""
        self.sequence = 0xffffffff
        self.value = 0
        self.scriptcode = b""

    @classmethod
    def from_output(cls, txid: str, vout: int, value: int, scriptcode: bytes):
        self = cls()
        # YOUR CODE HERE
        return self

    def serialize(self):
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
        range: [1, 1, 33, 1],
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

  const [language, setLanguage] = useState(getLanguageString(currentLanguage))
  const handleSelectLanguage = (language: string) => {
    setLanguage(language)
  }

  return (
    <ScriptingChallenge
      lang={lang}
      config={config}
      lessonKey={metadata.key}
      successMessage={t('chapter_six.in_out_four.hard.success')}
      onSelectLanguage={handleSelectLanguage}
      saveData
    >
      <LessonInfo>
        <Title>{t('chapter_six.in_out_four.hard.heading')}</Title>
        <Text className="mt-4 font-nunito text-xl text-white">
          {t('chapter_six.in_out_four.hard.paragraph_one')}
        </Text>
        <CodeExample
          className="mt-4 whitespace-break-spaces font-space-mono"
          code={`from_output(txid: str, vout: int, value: int, scriptcode: bytes)`}
          language="shell"
        />
        <Text className="mt-4 font-nunito text-xl text-white">
          {t('chapter_six.in_out_four.hard.paragraph_two')}
        </Text>

        <Text className="mt-4 font-nunito text-xl text-white">
          {t('chapter_six.in_out_four.hard.paragraph_three')}
        </Text>

        <Text className="mt-4 font-nunito text-xl text-white">
          {t('chapter_six.in_out_four.hard.paragraph_four')}
        </Text>

        <Text className="mt-4 font-nunito text-xl text-white">
          {t('chapter_six.in_out_four.hard.paragraph_five')}
        </Text>

        <div className="mt-4">
          <Title>{t('chapter_six.in_out_four.hard.heading_two')}</Title>
        </div>
        <Table headings={tableHeading} rows={outputRows} />

        <div className="mt-4">
          <Title>{t('chapter_six.in_out_four.hard.heading_three')}</Title>
        </div>
        <Table headings={tableHeading} rows={inputRows} />
      </LessonInfo>
    </ScriptingChallenge>
  )
}
