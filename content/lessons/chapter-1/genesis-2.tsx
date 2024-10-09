'use client'

import { useTranslations } from 'hooks'
import { LessonInfo, Title, Text, InputChallenge } from 'ui'
import { Button } from 'shared'

export const metadata = {
  title: 'chapter_one.genesis_two.title',
  navigation_title: 'chapter_one.genesis_two.nav_title',
  key: 'CH1GEN2',
}

export default function Genesis2({ lang }) {
  const t = useTranslations(lang)

  return (
    <InputChallenge
      answer="04ffff001d0104455468652054696d65732030332f4a616e2f32303039204368616e63656c6c6f72206f6e206272696e6b206f66207365636f6e64206261696c6f757420666f722062616e6b73"
      label={t('chapter_one.genesis_two.placeholder')}
      pattern={/[a-z0-9]+/gi}
      hints
      inputClassNames="text-[18px] md:text-[24px] lg:text-[30px] short:text-[24px]"
    >
      <LessonInfo className="md:self-center short:max-w-[90dvw]">
        <Title className="short:text-lg">
          {t('chapter_one.genesis_two.heading')}
        </Title>

        <Text className="mt-2 text-lg md:text-xl short:text-base">
          {t('chapter_one.genesis_two.paragraph_one')}
        </Text>

        <Text className="mt-2 text-lg md:text-xl short:text-base">
          {t('chapter_one.genesis_two.paragraph_two')}
        </Text>

        <Text className="mt-2 text-lg md:text-xl short:text-base">
          {t('chapter_one.genesis_two.paragraph_three')}
        </Text>

        <div className="mt-4 flex">
          <Button
            href="https://blockstream.info/block/000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f"
            external={true}
            classes="w-full md:w-auto"
          >
            {t('chapter_one.genesis_two.view_block_0')}
          </Button>
        </div>
      </LessonInfo>
    </InputChallenge>
  )
}
