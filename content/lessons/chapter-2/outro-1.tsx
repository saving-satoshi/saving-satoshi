'use client'

import { useTranslations } from 'hooks'
import { ChapterEnd } from 'ui'

export const metadata = {
  title: 'chapter_two.outro_one.title',
  image: '/assets/images/chapter-2-finish.jpg',
  key: 'CH2OUT1',
}

export default function Outro1({ lang }) {
  const t = useTranslations(lang)

  return (
    <ChapterEnd {...metadata} direction="right" lang={lang}>
      <h1 className="text-3xl font-bold text-white md:text-5xl">Great Job!</h1>
      <p className="mt-4 font-nunito text-xl text-white md:text-2xl">
        The machines roar to life. Everything seems to be working. A map appears
        on the computer that appears to show the locations of other warehouses
        filled with ASICs that have come back to life across the world.
      </p>
      <p className="mt-4 font-nunito text-xl text-white md:text-2xl">
        HOLOCAT: “Look, there’s a message.”
      </p>

      <p className="mt-4 font-nunito text-xl text-white md:text-2xl">
        “Good work. This will help bitcoin get back to one block every ten
        minutes.” – Satoshi Nakamoto
      </p>

      <p className="mt-4 font-nunito text-xl text-white md:text-2xl">
        Him again?
      </p>
    </ChapterEnd>
  )
}
