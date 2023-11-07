'use client'

import { useSaveAndProceed, useTranslations } from 'hooks'
import { Button } from 'shared'
import { ChapterIntro } from 'ui'

export const metadata = {
  title: 'chapter_five.derive_message_one.title',
  key: 'CH5DRM5',
}

export default function DeriveMessage1({ lang }) {
  const saveAndProceed = useSaveAndProceed()
  const t = useTranslations(lang)

  return (
    <ChapterIntro className="my-8 text-center">
      <p className="max-w-[800px] px-[15px] py-[10px] text-xl md:text-[22px]">
        So Satoshi created a transaction that sent 50 BTC to his public key.
        Then he used his private key to create a signature that transferred 10
        of those BTC to Hal Finney's public key.
        <br />
        <br />
        Next we need to learn how to verify a signature. But something is still
        missing... what is the message Satoshi signed to authorize the
        transaction for Hal?
      </p>

      <Button onClick={saveAndProceed} classes="mt-10 max-md:w-full">
        {t('shared.next')}
      </Button>
    </ChapterIntro>
  )
}
