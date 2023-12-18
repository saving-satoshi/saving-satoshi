'use client'

import { useTranslations } from 'hooks'
import { Introduction, Lesson, LessonInfo, Text } from 'ui'
import PlainEditor from 'ui/lesson/ScriptingChallenge/PlainEditor'

export const metadata = {
  title: 'chapter_six.in_out_one.title',
  image: '/assets/images/chapter-4-intro-1.jpg',
  key: 'CH6INO1',
}

export default function InOut1({ lang }) {
  const t = useTranslations(lang)

  return (
    <PlainEditor
      code={`$ bitcoin-cli listunspent 

[  
  { 
    "txid": "74149a689ce95562309cf4c404ef6ca91e76b6a19ef25e9625e9c13d93fac4e1",    
    "vout": 0,    
    "address": "bc1qm2dr49zrgf9wc74h5c58wlm3xrnujfuf5g80hs",    
    "label": "",    
    "scriptPubKey": "0014da9a3a9443424aec7ab7a628777f7130e7c92789",    
    "amount": 6.50000000,    
    "confirmations": 341,    
    "spendable": true,    
    "solvable": true,    
    "desc": "wpkh([a73804d3/0'/0'/0']02ab3d3cb82c1eb89168824b20f667224d868250dedec69177012e5a26c5221ae8)#5mf00k95",    
    "parent_descs": [    
    ],    
    "safe": true  
  }
]
    `}
    >
      <LessonInfo>
        <Text className="text-lg md:text-xl">
          {t('chapter_six.in_out_one.paragraph_one')}
        </Text>
        <Text className="mt-4 text-lg md:text-xl">
          {t('chapter_six.in_out_one.paragraph_two')}
        </Text>
        <Text className="mt-4 text-lg md:text-xl">
          {t('chapter_six.in_out_one.paragraph_three')}
        </Text>
      </LessonInfo>
    </PlainEditor>
  )
}
