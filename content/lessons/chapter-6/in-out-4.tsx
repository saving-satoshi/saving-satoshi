'use client'

import { ScriptingChallenge, LessonInfo, CodeExample, Title, Table } from 'ui'
import { EditorConfig } from 'types'
import { useTranslations } from 'hooks'
import { Text } from 'ui'
import { useState } from 'react'
import { getLessonKey } from 'lib/progress'
import { useAuthContext } from 'providers/AuthProvider'

export const metadata = {
  title: 'chapter_six.in_out_four.title',
  key: 'CH6INO4',
}

export default function InOut4({ lang }) {
  const t = useTranslations(lang)
  const tableHeading = [
    t('chapter_six.in_out_four.table_one.heading.one'),
    t('chapter_six.in_out_four.table_one.heading.two'),
    t('chapter_six.in_out_four.table_one.heading.three'),
    t('chapter_six.in_out_four.table_one.heading.four'),
  ]
  const outputRows = [
    [
      t('chapter_six.in_out_four.table_one.row_one.column.one'),
      t('chapter_six.in_out_four.table_one.row_one.column.two'),
      t('chapter_six.in_out_four.table_one.row_one.column.three'),
      t('chapter_six.in_out_four.table_one.row_one.column.four'),
    ],
    [
      t('chapter_six.in_out_four.table_one.row_two.column.one'),
      t('chapter_six.in_out_four.table_one.row_two.column.two'),
      t('chapter_six.in_out_four.table_one.row_two.column.three'),
      t('chapter_six.in_out_four.table_one.row_two.column.four'),
    ],
  ]
  const inputRows = [
    [
      t('chapter_six.in_out_four.table_two.row_one.column.one'),
      t('chapter_six.in_out_four.table_two.row_one.column.two'),
      t('chapter_six.in_out_four.table_two.row_one.column.three'),
      t('chapter_six.in_out_four.table_two.row_one.column.four'),
    ],
    [
      t('chapter_six.in_out_four.table_two.row_two.column.one'),
      t('chapter_six.in_out_four.table_two.row_two.column.two'),
      t('chapter_six.in_out_four.table_two.row_two.column.three'),
      t('chapter_six.in_out_four.table_two.row_two.column.four'),
    ],
    [
      t('chapter_six.in_out_four.table_two.row_three.column.one'),
      t('chapter_six.in_out_four.table_two.row_three.column.two'),
      t('chapter_six.in_out_four.table_two.row_three.column.three'),
      t('chapter_six.in_out_four.table_two.row_three.column.four'),
    ],
    [
      t('chapter_six.in_out_four.table_two.row_four.column.one'),
      t('chapter_six.in_out_four.table_two.row_four.column.two'),
      t('chapter_six.in_out_four.table_two.row_four.column.three'),
      t('chapter_six.in_out_four.table_two.row_four.column.four'),
    ],
  ]

  const { account } = useAuthContext()

  const javascript = {
    program: `const assert = require('assert');
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

const txid = '8a081631c920636ed71f9de5ca24cb9da316c2653f4dc87c9a1616451c53748e';
const vout = 1;
const value = 650000000;
const scriptcode = '1976a914b234aee5ee74d7615c075b4fe81fd8ace54137f288ac';
const input = Input.from_output(txid, vout, value, scriptcode);
console.log(input.serialize().toString('hex') === '8e74531c4516169a7cc84d3f65c216a39dcb24cae59d1fd76e6320c93116088a0100000000ffffffff' && 'true')
console.log("KILL")`,
    defaultFunction: {
      name: 'inputClass',
      args: ['privateKey'],
    },
    defaultCode: `class Input {
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
        range: [12, 1, 13, 1],
        allowMultiline: true,
      },
      {
        range: [17, 1, 20, 1],
        allowMultiline: true,
      },
    ],
  }

  const python = {
    program: `from struct import pack
class Outpoint:
    def __init__(self, txid: bytes, index: int):
        assert isinstance(txid, bytes)
        assert len(txid) == 32
        assert isinstance(index, int)
        self.txid = txid
        self.index = index

    def serialize(self):
        # https:#docs.python.org/3/library/struct.html#byte-order-size-and-alignment
        # Encode the index as little-endian unsigned integer
        r = b""
        r += self.txid
        r += pack("<I", self.index)
        return r

txid = "8a081631c920636ed71f9de5ca24cb9da316c2653f4dc87c9a1616451c53748e"
vout = 1
value = 650000000
scriptcode = "1976a914b234aee5ee74d7615c075b4fe81fd8ace54137f288ac"
input = Input.from_output(txid, vout, value, scriptcode)
print(input.serialize().hex() == '8e74531c4516169a7cc84d3f65c216a39dcb24cae59d1fd76e6320c93116088a0100000000ffffffff' and 'true')
print("KILL")`,
    defaultFunction: {
      name: 'input_class',
      args: ['private_key'],
    },
    defaultCode: `class Input:
    def __init__(self):
        self.outpoint = None
        self.scriptsig = b""
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
        range: [12, 1, 13, 1],
        allowMultiline: true,
      },
      {
        range: [16, 1, 17, 1],
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
      lessonKey={getLessonKey('chapter-6', 'in-out-4')}
      successMessage={t('chapter_six.in_out_four.success')}
      onSelectLanguage={handleSelectLanguage}
    >
      <LessonInfo className="overflow-y-scroll  sm:max-h-[calc(100vh-70px)]">
        <Title>{t('chapter_six.in_out_four.heading')}</Title>
        <Text className="mt-4 font-nunito text-xl text-white">
          {t('chapter_six.in_out_four.paragraph_one')}
        </Text>
        <CodeExample
          className="mt-4"
          code={`from_output(txid: str, vout: int, value: int, scriptcode: bytes)`}
          language="shell"
        />
        <Text className="mt-4 font-nunito text-xl text-white">
          {t('chapter_six.in_out_four.paragraph_two')}
        </Text>

        <Text className="mt-4 font-nunito text-xl text-white">
          {t('chapter_six.in_out_four.paragraph_three')}
        </Text>

        <Text className="mt-4 font-nunito text-xl text-white">
          {t('chapter_six.in_out_four.paragraph_four')}
        </Text>

        <Text className="mt-4 font-nunito text-xl text-white">
          {t('chapter_six.in_out_four.paragraph_five')}
        </Text>

        <div className="mt-4">
          <Title>{t('chapter_six.in_out_four.heading_two')}</Title>
        </div>
        <Table headings={tableHeading} rows={outputRows} />

        <div className="mt-4">
          <Title>{t('chapter_six.in_out_four.heading_three')}</Title>
        </div>
        <Table headings={tableHeading} rows={inputRows} />
      </LessonInfo>
    </ScriptingChallenge>
  )
}
