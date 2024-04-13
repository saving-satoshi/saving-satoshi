'use client'

import { ScriptingChallenge, LessonInfo, HolocatQuestion } from 'ui'
import { EditorConfig } from 'types'
import { useTranslations } from 'hooks'
import { CodeExample, Text } from 'ui'
import { useState } from 'react'
import { getLessonKey } from 'lib/progress'
import { useDataContext } from 'contexts/DataContext'
import { getLanguageString } from 'lib/SavedCode'
import { chapters } from 'content/chapters'

export const metadata = {
  title: 'chapter_five.derive_message_one.title',
  navigation_title: 'chapter_five.derive_message_seven.nav_title',
  key: 'CH5DRM7',
}

const javascript = {
  program: `
console.log(createTxMessage())
console.log("KILL")
`,
  defaultFunction: {
    name: 'createTxMessage',
    args: [],
  },
  defaultCode: `function createTxMessage() {
  let msg = ""

  // version:
  msg += "01000000"

  // number of inputs:
  msg += "01"

  // hash of tx being spent by input #0:
  msg += "c997a5e56e104102fa209c6a852dd90660a20b2d9c352423edce25857fcd3704"

  // index of output of tx being spent by input #0:
  msg += "00000000"

  // scriptPubKey of output being spent by input #0:
  // FILL IN THIS LINE!

  // input #0 sequence:
  msg += "ffffffff"

  // number of outputs:
  msg += "02"

  // output #0 value (10 BTC or 1,000,000,000 satoshis):
  msg += "00ca9a3b00000000"

  // output #0 scriptPubKey (Hal Finney's public key plus OP_CHECKSIG):
  msg += "434104ae1a62fe09c5f51b13905f07f06b99a2f7159b2225f374cd378d71302f"
  msg += "a28414e7aab37397f554a7df5f142c21c1b7303b8a0626f1baded5c72a704f7e"
  msg += "6cd84cac"

  // output #1 value (40 BTC or 4,000,000,000 satoshis):
  msg += "00286bee00000000"

  // output #1 scriptPubKey (Satoshi's oen public key again, for change):
  msg += "43410411db93e1dcdb8a016b49840f8c53bc1eb68a382e97b1482ecad7b148a6"
  msg += "909a5cb2e0eaddfb84ccf9744464f82e160bfa9b8b64f9d4c03f999b8643f656"
  msg += "b412a3ac"

  // locktime:
  msg += "00000000"

  // SIGHASH FLAG GOES HERE!
  // FILL IN THIS LINE!

  return msg
}
`,
  validate: async (answer) => {
    if (
      answer !==
      '0100000001c997a5e56e104102fa209c6a852dd90660a20b2d9c352423edce25857fcd37040000000043410411db93e1dcdb8a016b49840f8c53bc1eb68a382e97b1482ecad7b148a6909a5cb2e0eaddfb84ccf9744464f82e160bfa9b8b64f9d4c03f999b8643f656b412a3acffffffff0200ca9a3b00000000434104ae1a62fe09c5f51b13905f07f06b99a2f7159b2225f374cd378d71302fa28414e7aab37397f554a7df5f142c21c1b7303b8a0626f1baded5c72a704f7e6cd84cac00286bee0000000043410411db93e1dcdb8a016b49840f8c53bc1eb68a382e97b1482ecad7b148a6909a5cb2e0eaddfb84ccf9744464f82e160bfa9b8b64f9d4c03f999b8643f656b412a3ac0000000001000000'
    ) {
      return [false, 'Be sure you filled in both the output and sig hash flag.']
    }

    return [true, undefined]
  },
  constraints: [
    {
      range: [1, 1, 49, 1],
      allowMultiline: true,
    },
  ],
}

const python = {
  program: `
print(create_tx_message())
print("KILL")
`,
  defaultFunction: {
    name: 'create_tx_message',
    args: [],
  },
  defaultCode: `def create_tx_message():
    msg = ""

    # version:
    msg += "01000000"

    # number of inputs:
    msg += "01"

    # hash of tx being spent by input #0:
    msg += "c997a5e56e104102fa209c6a852dd90660a20b2d9c352423edce25857fcd3704"

    # index of output of tx being spent by input #0:
    msg += "00000000"

    # scriptPubKey of output being spent by input #0:
    # FILL IN THIS LINE!

    # input #0 sequence:
    msg += "ffffffff"

    # number of outputs:
    msg += "02"

    # output #0 value (10 BTC or 1,000,000,000 satoshis):
    msg += "00ca9a3b00000000"

    # output #0 scriptPubKey (Hal Finney's public key plus OP_CHECKSIG):
    msg += "434104ae1a62fe09c5f51b13905f07f06b99a2f7159b2225f374cd378d71302f"
    msg += "a28414e7aab37397f554a7df5f142c21c1b7303b8a0626f1baded5c72a704f7e"
    msg += "6cd84cac"

    # output #1 value (40 BTC or 4,000,000,000 satoshis):
    msg += "00286bee00000000"

    # output #1 scriptPubKey (Satoshi's oen public key again, for change):
    msg += "43410411db93e1dcdb8a016b49840f8c53bc1eb68a382e97b1482ecad7b148a6"
    msg += "909a5cb2e0eaddfb84ccf9744464f82e160bfa9b8b64f9d4c03f999b8643f656"
    msg += "b412a3ac"

    # locktime:
    msg += "00000000"

    # SIGHASH FLAG GOES HERE!
    # FILL IN THIS LINE!

    return msg
`,
  validate: async (answer) => {
    if (
      answer !==
      '0100000001c997a5e56e104102fa209c6a852dd90660a20b2d9c352423edce25857fcd37040000000043410411db93e1dcdb8a016b49840f8c53bc1eb68a382e97b1482ecad7b148a6909a5cb2e0eaddfb84ccf9744464f82e160bfa9b8b64f9d4c03f999b8643f656b412a3acffffffff0200ca9a3b00000000434104ae1a62fe09c5f51b13905f07f06b99a2f7159b2225f374cd378d71302fa28414e7aab37397f554a7df5f142c21c1b7303b8a0626f1baded5c72a704f7e6cd84cac00286bee0000000043410411db93e1dcdb8a016b49840f8c53bc1eb68a382e97b1482ecad7b148a6909a5cb2e0eaddfb84ccf9744464f82e160bfa9b8b64f9d4c03f999b8643f656b412a3ac0000000001000000'
    ) {
      return [false, 'Be sure you filled in both the output and sig hash flag.']
    }

    return [true, undefined]
  },
  constraints: [
    {
      range: [1, 1, 48, 1],
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

export default function DeriveMessage7({ lang }) {
  const t = useTranslations(lang)
  const { currentLanguage } = useDataContext()
  const [language, setLanguage] = useState(getLanguageString(currentLanguage))
  const [tooltipVisible, setTooltipVisible] = useState(false)

  const handleMouseEnter = () => {
    setTooltipVisible(true)
  }

  const handleMouseLeave = () => {
    setTooltipVisible(false)
  }

  const handleSelectLanguage = (language: string) => {
    setLanguage(language)
  }

  return (
    <ScriptingChallenge
      lang={lang}
      config={config}
      lessonKey={getLessonKey('chapter-5', 'derive-message-7')}
      successMessage=""
      onSelectLanguage={handleSelectLanguage}
    >
      <LessonInfo>
        <Text className="font-nunito text-xl text-white">
          {t('chapter_five.derive_message_seven.paragraph_one.a')}{' '}
          <a
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            href={t('chapter_five.derive_message_seven.tooltip_one.link')}
            target="_blank"
            className="inline text-lg italic hover:underline md:text-xl"
          >
            {t('chapter_five.derive_message_seven.tooltip_one.highlighted')}
            <HolocatQuestion
              theme={chapters['chapter-5'].metadata.theme}
              inline
              id="target-difficulty"
              question={t(
                'chapter_five.derive_message_seven.tooltip_one.question'
              )}
              href={t('chapter_five.derive_message_seven.tooltip_one.link')}
              visible={tooltipVisible}
            />
          </a>{' '}
          {t('chapter_five.derive_message_seven.paragraph_one.b')}
        </Text>
        <Text className="my-4 font-nunito text-xl text-white">
          {t(`chapter_five.derive_message_seven.paragraph_two`)}
        </Text>
        <CodeExample
          copy
          language="bash"
          code="43410411db93e1dcdb8a016b49840f8c53bc1eb68a382e97b1482ecad7b148a6909a5cb2e0eaddfb84ccf9744464f82e160bfa9b8b64f9d4c03f999b8643f656b412a3ac"
        />
        <Text className="my-4 font-nunito text-xl text-white">
          {t(`chapter_five.derive_message_seven.paragraph_three`)}
        </Text>
        <CodeExample copy language="bash" code="01000000" />
      </LessonInfo>
    </ScriptingChallenge>
  )
}
