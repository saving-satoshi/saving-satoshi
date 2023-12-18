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
   const tx = new Transaction();
  
 console.log(tx.serialize().toString('hex'));

`,
defaultFunction:{
  name:"put-it-together-2",
  args:["args"]
},
defaultCode:`class Transaction{
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
  const finalanswer='020000000001000000000000'
  if (answer) {
    if (answer === finalanswer) {
      return [true, 'Nicely Done ']
    }
    return [false, 'Not a valid hex value']
  }
  return [false, 'Check your code again']
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



const python={
  program:``,
  defaultFunction:{
    name:"put-it-together-2",
    args:["args"]
  },
  defaultCode:`class Transaction:
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
