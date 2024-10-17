'use client'

import { useTranslations } from 'hooks'
import { ChapterIntro, Text } from 'ui'
import { Button } from 'shared'
import { useProceed } from 'hooks'

export const metadata = {
  title: 'chapter_ten.making_a_payment_one.title',
  navigation_title: 'chapter_ten.making_a_payment_one.nav_title',
  key: 'CH10MAP1',
}

export default function MakingAPayment1({ lang }) {
  const proceed = useProceed()
  const t = useTranslations(lang)

  return (
    <ChapterIntro
      className="my-8"
      heading={t('chapter_ten.making_a_payment_one.heading_one')}
    >
      <p className="mt-2 text-lg md:text-xl">
        {t('chapter_ten.making_a_payment_one.paragraph_one')}
      </p>
      <ul className="ml-4 mt-4 list-disc  font-nunito text-lg">
        <li>{t('chapter_ten.making_a_payment_one.list_one')}</li>
        <li>{t('chapter_ten.making_a_payment_one.list_two')}</li>
        <li>{t('chapter_ten.making_a_payment_one.list_three')}</li>

        <ul className="ml-4 list-disc  font-nunito text-lg">
          <li>{t('chapter_ten.making_a_payment_one.list_three_sub_one')}</li>
          <li>{t('chapter_ten.making_a_payment_one.list_three_sub_two')}</li>
        </ul>

        <li>{t('chapter_ten.making_a_payment_one.list_four')}</li>
        <li>{t('chapter_ten.making_a_payment_one.list_five')}</li>
      </ul>
      <p className="mt-4 text-lg md:text-xl">
        {t('chapter_ten.making_a_payment_one.paragraph_two')}
      </p>

      <p className="mt-8 text-lg md:text-xl">
        {t('chapter_ten.making_a_payment_one.paragraph_three')}
      </p>
      <p className="mt-8 text-lg md:text-xl">
        {t('chapter_ten.making_a_payment_one.paragraph_four')}
      </p>

      <Button onClick={proceed} classes="mt-10 max-md:w-full">
        {t('shared.next')}
      </Button>
    </ChapterIntro>
  )
}
