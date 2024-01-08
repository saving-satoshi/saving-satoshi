'use client'
import {ScriptingChallenge,Table,Introduction,Text,LessonInfo} from 'ui'
import { useState } from 'react'
import { useTranslations } from 'hooks'
import { EditorConfig } from 'types'
import { getLessonKey } from 'lib/progress'


export const metadata = {
  title: 'chapter_six.put_it_together_one.title',
  image: '/assets/images/chapter-4-intro-1.jpg',
  key: 'CH6PUT2',
}

const javascript={program:`
const assert = require('assert');
const bech32=require('@savingsatoshi/bech32js');
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
    // Optional, since we know in SegWit it's always zero bytes.
    // Adding this back will offset all following byte length positions.
    // this.script.copy(buf, 37);
    buf.writeUInt32LE(this.sequence, 37);
    return buf;
  }
}

class Output {
  constructor() {
    this.value = 0;
    this.witness_version = 0;
    this.witness_data = Buffer.alloc(0);
  }

  static from_options(addr, value) {
    assert(Number.isInteger(value));
    const self = new this();
    const {version, program} = bech32.decode('bc', addr);
    self.witness_version = version;
    self.witness_data = Buffer.from(program);
    self.value = value;
    return self;
  }

  serialize() {
    const buf = Buffer.alloc(11);
    buf.writeBigInt64LE(BigInt(this.value), 0);
    buf.writeUInt8(this.witness_data.length + 2, 8);
    buf.writeUInt8(this.witness_version, 9);
    buf.writeUInt8(this.witness_data.length, 10);
    return Buffer.concat([buf, this.witness_data]);
  }
}

class Witness {
  constructor() {
    this.items = [];
  }

  push_item(data) {
    this.items.push(data);
  }

  serialize() {
    let buf = Buffer.from([this.items.length]);
    for (const item of this.items)
      buf = Buffer.concat([buf, Buffer.from([item.length]), item]);
    return buf;
  }
}
 
const txid = '8a081631c920636ed71f9de5ca24cb9da316c2653f4dc87c9a1616451c53748e';
const vout = 1;
const value1 = 650000000;
const scriptcode = '1976a914b234aee5ee74d7615c075b4fe81fd8ace54137f288ac';
const input = Input.from_output(txid, vout, value1, scriptcode);
const addr = 'bc1qgghq08syehkym52ueu9nl5x8gth23vr8hurv9dyfcmhaqk4lrlgs28epwj';
const value2 = 100000000;
const output = Output.from_options(addr, value2);
const witness = new Witness();
witness.push_item(Buffer.from('304402202e343143d5fcb0e3ece2ef11983d69dcaeb7407efe2ec7e3c830ab66927823c0022000ac4c1b3bcc857684e6bc2a36c07757695ef72b7bac70d2c877895798c4d1ba01', 'hex'));
witness.push_item(Buffer.from('038cd0455a2719bf72dc1414ef8f1675cd09dfd24442cb32ae6e8c8bbf18aaf5af', 'hex'));
const tx = new Transaction();
tx.inputs.push(input);
tx.outputs.push(output);
console.log(tx.serialize().toString('hex'));


`,
defaultFunction:{
  name:"put-it-together-2",
  args:["args"]
},
defaultCode:`
class Transaction{
  constructor(){
    this.version=2;
    this.flags = Buffer.from('0001', 'hex');
    this.inputs = [];
    this.outputs = [];
    this.witnesses = [];
    this.locktime = 0;
  }
  serialize() {
    // YOUR CODE HERE
  }

}`,
validate:async (answer: string) =>{
  
   
  const correctpattern=/^([a-fA-F0-9]{8})01([a-fA-F0-9]{64})([a-fA-F0-9]{8})00ffffffff01([a-fA-F0-9]{16})([a-fA-F0-9]{44})[a-fA-F0-9]{8}$/
  console.log(answer)
  if (correctpattern.test(answer)) {
    
      return [true, 'Nicely Done ']
    
    
  }
  return [false, 'Check your code again']
},constraints: [
  {
    range: [11, 1, 15, 1],
    allowMultiline: true,
  },
  
],
}



const python={
  program:``,
  defaultFunction:{
    name:"put-it-together-2",
    args:["args"]
  },
  defaultCode:`from struct import pack
  class Transaction:
  def __init__(self):
      self.version = 2
      self.flags = bytes.fromhex("0001")
      self.inputs = []
      self.outputs = []
      self.witnesses = []
      self.locktime = 0

  def serialize(self):
      # YOUR CODE HERE
`,
validate:async (answer: string) =>{
  if (answer) {
    if (answer === 'true') {
      return [true, 'Nicely Done ']
    }
    return [false, 'Not a valid hex value']
  }
  return [false, 'Return a value']
},constraints: [
    {
      range: [8, 1, 10, 1],
      allowMultiline: true,
    },
    {
      range: [11, 1, 12, 1],
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
export default function PutItTogether2({ lang }) {
  const t = useTranslations(lang)
  const [language, setLanguage] = useState(config.defaultLanguage)
  const handleSelectLanguage = (language: string) => {
    setLanguage(language)
  }

  return (
    <ScriptingChallenge
    lang={lang}
    config={config}
    saveData
    lessonKey={getLessonKey('chapter-6', 'put-it-together-2')}
    successMessage={''}
    onSelectLanguage={handleSelectLanguage}
  >
    <LessonInfo>
      <Text className="font-nunito text-2xl font-bold text-white">
        {t('chapter_six.put_it_together_two.heading')}
      </Text>
      <Text className="mt-2 font-nunito text-xl text-white">
        {t('chapter_six.put_it_together_two.paragraph_one')}
      </Text>
      <Text className="mt-4 text-lg md:text-xl">
        {t('chapter_six.put_it_together_two.paragraph_two')}
      </Text>
      <Table headings={[
            t('chapter_six.put_it_together_two.headings.item_one'),
            t('chapter_six.put_it_together_two.headings.item_two'),
            t('chapter_six.put_it_together_two.headings.item_three'),
            t('chapter_six.put_it_together_two.headings.item_four'),
          ]}
          rows={[
            [
              t('chapter_six.put_it_together_two.table.row_one.item_one'),
              t('chapter_six.put_it_together_two.table.row_one.item_two'),
              t('chapter_six.put_it_together_two.table.row_one.item_three'),
              t('chapter_six.put_it_together_two.table.row_one.item_four'),
            ],
            [
              t('chapter_six.put_it_together_two.table.row_two.item_one'),
              t('chapter_six.put_it_together_two.table.row_two.item_two'),
              t('chapter_six.put_it_together_two.table.row_two.item_three'),
              t('chapter_six.put_it_together_two.table.row_two.item_four'),
            ],
          ]}/>

      
      <Text className="mt-2 font-nunito text-xl text-white">  
         {t('chapter_six.put_it_together_two.paragraph_three')}
      </Text> 
    </LessonInfo>

    </ScriptingChallenge>
  )
}
