'use client'

import { useTranslations } from 'hooks'

import { Text, ResourcePage } from 'ui'

export default function MiningResources({ lang }) {
  const t = useTranslations(lang)

  return (
    <ResourcePage
      lang={lang}
      readingResources={
        <>
          <Text className="mt-[25px] text-xl font-bold">
            {t('chapter_three.resources.pool.pool_heading')}
          </Text>
          <Text>{t('chapter_three.resources.pool.pool_paragraph')}</Text>
        </>
      }
    />
  )
}
