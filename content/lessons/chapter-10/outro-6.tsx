'use client'

import { useTranslations } from 'hooks'
import { ChapterIntro } from 'ui'
import { Button } from 'shared'
import { useSaveAndReturn } from 'hooks'
import { useEffect, useState } from 'react'
import { useAtom } from 'jotai'
import { accountAtom } from 'state/state'

export const metadata = {
  title: 'chapter_ten.outro_six.title',
  navigation_title: 'chapter_ten.outro_six.nav_title',
  key: 'CH10OUT6',
}

const INTERNAL_BOSS_CLUE_API = '/api/boss-clue'

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

  // null = disable the BOSS Challenge section
  const [xorInvite, setXorInvite] = useState<string | null>(null)

  useEffect(() => {
    async function callBOSSBot() {
      if (account) {
        try {
          // Call an internal API endpoint on the Next.js server side of this code base
          // which calls Diogenes. This protects the Diogenes credentials from being
          // included in the browser bundle
          const res = await fetch(INTERNAL_BOSS_CLUE_API, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ private_key: account.private_key }),
          })

          if (res.status == 200) {
            const resJson = await res.json()
            setXorInvite(resJson.data)
          } else if (res.status == 404) {
            // BOSS Challenge is disabled and not currently running
            setXorInvite(null)
          } else if (res.status == 403) {
            setXorInvite(t('chapter_ten.outro_six.boss_not_finished'))
          } else {
            setXorInvite(
              'Error generating invite. Please contact a BOSS Challenge administrator.'
            )
          }
        } catch (errors) {
          console.error('Error calling proxy endpoint for Diogenes API')
          console.error(errors)
          setXorInvite(
            'Error generating invite. Please contact a BOSS Challenge administrator.'
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

      {xorInvite !== null && (
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
      )}

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
