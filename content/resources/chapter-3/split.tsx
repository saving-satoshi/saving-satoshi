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
            {t('chapter_three.resources.split.payout_heading')}
          </Text>
          <Text>{t('chapter_three.resources.split.payout_subheading')}</Text>
          <ul className="list-inside list-disc font-nunito text-white">
            <Text className="mt-[25px] text-xl font-bold">
              {t('chapter_three.resources.split.pps_heading')}
            </Text>
            <Text>{t('chapter_three.resources.split.pps_paragraph')}</Text>
            <Text className="mt-[25px] text-xl font-bold">
              {t('chapter_three.resources.split.pplns_heading')}
            </Text>
            <Text>{t('chapter_three.resources.split.pplns_paragraph')}</Text>
            <Text className="mt-[25px] text-xl font-bold">
              {t('chapter_three.resources.split.pps_plus_heading')}
            </Text>
            <Text>{t('chapter_three.resources.split.pps_plus_paragraph')}</Text>
            <Text className="mt-[25px] text-xl font-bold">
              {t('chapter_three.resources.split.fpps_heading')}
            </Text>
            <Text>{t('chapter_three.resources.split.fpps_paragraph')}</Text>
          </ul>
        </>
      }
    />
  )
}
