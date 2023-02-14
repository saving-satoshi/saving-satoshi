'use client'

import { useTranslations } from 'hooks'
import { Button, LessonInfo, Title, Text, InputChallenge } from 'ui'

export default function Genesis1({ lang }) {
  const t = useTranslations(lang)
  return (
    <InputChallenge
      inputAmount={154}
      answer={
        '04ffff001d0104455468652054696d65732030332f4a616e2f32303039204368616e63656c6c6f72206f6e206272696e6b206f66207365636f6e64206261696c6f757420666f722062616e6b73'
      }
      next={'/chapters/chapter-1/genesis-2'}
      label={t('genesis_one.placeholder')}
    >
      <LessonInfo>
        <Title>{t('genesis_one.heading')}</Title>

        <Text className="text-lg">{t('genesis_one.paragraph_one')}</Text>
        <Text className="text-lg">{t('genesis_one.paragraph_two')}</Text>

        <Button
          href="https://blockstream.info/block/000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f"
          external={true}
          classes="mt-4"
        >
          {t('genesis_one.view_block_0')}
        </Button>
      </LessonInfo>
    </InputChallenge>
  )
}

export const metadata = {
  title: 'genesis_one.title',
}
