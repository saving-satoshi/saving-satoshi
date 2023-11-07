'use client'

import { useSaveAndProceed, useTranslations } from 'hooks'
import { Button } from 'shared'
import { ChapterIntro } from 'ui'

export const metadata = {
  title: 'chapter_five.derive_message_one.title',
  key: 'CH5DRM2',
}

export default function DeriveMessage1({ lang }) {
  const saveAndProceed = useSaveAndProceed()
  const t = useTranslations(lang)

  return (
    <ChapterIntro className="my-8 text-center">
      <p className="max-w-[900px] px-[15px] py-[10px] text-xl md:text-[22px]">
        We learned in chapter 4 that private keys are huge random numbers kept
        secret by whomever generated them. We can use Elliptic Curve math to
        derive a public key from that private key.
        <br />
        <br />
        The public key can be shared as a unique identifier and the private key
        is used to prove a person has control of that identifier. That proof is
        called a SIGNATURE. To create a signature you need a message and a
        private key. Anyone can verify the signature with a copy of the message
        and the corresponding public key.
        <br />
        <br />
        Vanderpoole has provided a signature and a message. Where is the public
        key?
      </p>

      <Button onClick={saveAndProceed} classes="mt-10 max-md:w-full">
        {t('shared.next')}
      </Button>
    </ChapterIntro>
  )
}
