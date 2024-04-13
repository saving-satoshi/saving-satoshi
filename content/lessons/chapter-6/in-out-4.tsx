'use client'

import { useTranslations } from 'hooks'
import { useState } from 'react'
import { PlainEditorConfig } from 'types'
import { LessonInfo, CodeExample, Title, Table, Text } from 'ui'
import PlainEditorWrapper from 'ui/lesson/ScriptingChallenge/PlainEditorWrapper'

export const metadata = {
  title: 'chapter_six.in_out_four.title',
  navigation_title: 'chapter_six.in_out_four.nav_title',
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

  const javascript = {
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
    self.outpoint = new Outpoint(Buffer.from(txid.replace('0x', ''),  'hex').reverse(), vout);
    self.value = value;
    self.scriptcode = Buffer.from(scriptcode.replace('0x', ''), 'hex');
    return self;
  }
  serialize() {
    const buf = Buffer.alloc(32 + 4 + 1 + 4);
    this.outpoint.serialize().copy(buf, 0);
    buf.writeUInt8(this.script.length, 36);
    buf.writeUInt32LE(this.sequence, 37);
    return buf;
  }
}
`,
  }

  const python = {
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
        self.outpoint = Outpoint(bytes.fromhex(txid)[::-1], vout)
        self.value = value
        self.scriptcode = bytes.fromhex(scriptcode)
        return self
    def serialize(self):
        r = b""
        r += self.outpoint.serialize()
        r += pack("<B", len(self.script))
        r += pack("<I", self.sequence)
        return r
`,
  }

  const config: PlainEditorConfig = {
    defaultLanguage: 'javascript',
    languages: {
      javascript,
      python,
    },
  }

  const [language, setLanguage] = useState('javascript')
  const handleSelectLanguage = (language: string) => {
    setLanguage(language)
  }

  return (
    <PlainEditorWrapper
      fixedCode={''}
      onSelectLanguage={handleSelectLanguage}
      config={config}
      button
    >
      <LessonInfo className="overflow-y-scroll  sm:max-h-[calc(100vh-70px)]">
        <Title>{t('chapter_six.in_out_four.heading')}</Title>
        <Text className="mt-4 font-nunito text-xl text-white">
          {t('chapter_six.in_out_four.paragraph_one')}
        </Text>
        <CodeExample
          className="mt-4 font-space-mono"
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
    </PlainEditorWrapper>
  )
}
