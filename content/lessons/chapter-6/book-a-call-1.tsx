'use client'

import { useProceed, useTranslations } from 'hooks'
import { Button } from 'shared'
import { Introduction, Text, Title } from 'ui'

export const metadata = {
  title: 'chapter_six.book_a_call_one.title',
  navigation_title: 'chapter_six.book_a_call_one.nav_title',
  image: '/assets/images/chapter-6-book-a-call-1.jpg',
  key: 'CH6BAC1',
}

export default function BookACall1({ lang }) {
  const t = useTranslations(lang)
  const proceed = useProceed()
  return (
    <Introduction
      lang={lang}
      imagePosition="object-[50%_100%] md:object-top"
      noBtn
    >
      <Title className="text-3xl">
        {t('chapter_six.book_a_call_one.heading')}
      </Title>
      <Text className="mt-4 text-lg md:text-xl">
        {t('chapter_six.book_a_call_one.paragraph_one')}
      </Text>
      <Text className="mt-4 text-lg md:text-xl">
        {t('chapter_six.book_a_call_one.paragraph_two')}
      </Text>
      <div className="mt-4 bg-black/20 p-5">
        <Button
          size="small"
          classes="w-full md:w-auto !text-[#723409]"
          external
          href="https://calendly.com/thebitcoindevproject/30min"
          onClick={proceed}
        >
          {t('chapter_six.book_a_call_one.button_text_one')}
        </Button>
        <Text className="mt-4 text-[0.9375rem] italic leading-[140%]">
          {t('chapter_six.book_a_call_one.paragraph_three')}
        </Text>
      </div>
      <div className="mt-8 flex flex-wrap gap-4">
        <Button
          size="small"
          classes="w-full md:w-auto !text-[#723409]"
          onClick={proceed}
        >
          {t('chapter_six.book_a_call_one.button_text_two')}
        </Button>
      </div>
    </Introduction>
  )
}
