'use client'

import { useSaveAndProceed, useTranslations } from 'hooks'
import { Button } from 'shared'
import { ChapterIntro } from 'ui'

export const metadata = {
  title: 'chapter_five.derive_message_one.title',
  key: 'CH5VFS1',
}

export default function DeriveMessage1({ lang }) {
  const saveAndProceed = useSaveAndProceed()
  const t = useTranslations(lang)

  return (
    <ChapterIntro
      className="my-8 text-center"
      heading="Finally we have a message!"
    >
      <p className="max-w-[700px] px-[15px] py-[10px] font-nunito text-[22px]">
        We also have a signature we know Satoshi created with his own private
        keys, and we have his public key. Let's learn how to verify the
        signature and then we can try to verify Vanderpoole's signature.
      </p>

      <Button onClick={saveAndProceed} classes="mt-10 max-md:w-full">
        {t('shared.next')}
      </Button>
    </ChapterIntro>
  )
}
