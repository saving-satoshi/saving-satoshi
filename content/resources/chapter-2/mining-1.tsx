'use client'

import { useTranslations } from 'hooks'

import { Text, ResourcePage } from 'ui'

export default function MiningResourcesOne({ lang }) {
  const t = useTranslations(lang)

  return (
    <ResourcePage
      lang={lang}
      readingResources={
        <>
          <Text className="mt-[25px] text-xl font-bold">
            {t('chapter_two.resources.mining.mining_heading')}
          </Text>
          <Text>{t('chapter_two.resources.mining.mining_paragraph')}</Text>
          <Text className="mt-[25px] text-xl font-bold">
            {t('chapter_two.resources.mining.difficulty_heading')}
          </Text>
          <Text>{t('chapter_two.resources.mining.difficulty_paragraph')}</Text>
        </>
      }
    />
  )
}
