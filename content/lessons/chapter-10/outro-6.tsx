'use client'

import { useEffect, useState } from 'react'
import { useTranslations } from 'hooks'
import { ChapterIntro } from 'ui'
import { Button } from 'shared'
import { useSaveAndReturn } from 'hooks'
import { useAtom } from 'jotai'
import { accountAtom } from 'state/state'
import { generateInvite } from 'api/bossbot'

export const metadata = {
  title: 'chapter_ten.outro_six.title',
  navigation_title: 'chapter_ten.outro_six.nav_title',
  key: 'CH10OUT6',
}

export default function Outro6({ lang }) {
  const saveAndReturn = useSaveAndReturn()
  const t = useTranslations(lang)
  const [account] = useAtom(accountAtom)
  const [copied, setCopied] = useState(false)

  const copy = (text) => {
    navigator.clipboard.writeText(text)

    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const [xorInvite, setXorInvite] = useState('')

  useEffect(() => {
    async function callBOSSBot() {
      if (account) {
        const res = await generateInvite(account.private_key)
        if (res && res.status == 200) {
          const resJson = await res.json()
          setXorInvite(resJson.data)
        } else {
          setXorInvite(
            'Error generating invite. Please contact the BOSS Challenge administrator.'
          )
        }
      }
    }

    callBOSSBot()
  }, [account])

  return (
    <ChapterIntro className="my-8" heading={t('chapter_ten.outro_six.heading')}>
      <p className="mt-2 text-lg md:text-xl">
        {t('chapter_ten.outro_six.paragraph_one')}
      </p>

      <p className="mt-8 text-lg md:text-xl">
        {t('chapter_ten.outro_six.paragraph_two')}
      </p>

      <div className="mt-8 bg-[#00000033] px-5 py-1">
        <p className="mt-3 text-lg md:text-xl">
          {t('chapter_ten.outro_six.boss_instructions')}
        </p>

        <p className="mt-8 text-lg md:text-xl">
          {t('chapter_ten.outro_six.boss_instructions_two')}
        </p>

        <pre className="mb-5 mt-8 flex flex-col rounded-md border-2 border-dotted border-white/25 p-4">
          <code className="mb-2 whitespace-pre-wrap break-all text-base">
            {xorInvite}
          </code>
          <Button
            round
            size="tiny"
            style="w-full"
            onClick={() => copy(xorInvite)}
          >
            {copied ? t('shared.copy_acknowledged') : t('shared.copy')}
          </Button>
        </pre>
      </div>

      <p className="mt-8 text-lg md:text-xl">
        {t('chapter_ten.outro_six.paragraph_three')}
      </p>

      <p className="mt-8 text-lg md:text-xl">
        {t('chapter_ten.outro_six.paragraph_four')}
      </p>
      <Button href="https://bitcoindevs.xyz/" classes="mt-10 max-md:w-full">
        {t('shared.bitcoin_dev_project')}
      </Button>
    </ChapterIntro>
  )
}
