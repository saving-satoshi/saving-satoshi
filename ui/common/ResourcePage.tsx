'use client'

import { useTranslations } from 'hooks'

import { Text } from 'ui'

export default function ResourcesPage({
  lang,
  readingResources,
  tipsResources,
  codeResources,
}) {
  const t = useTranslations(lang)

  return (
    <>
      <div>
        <Text className="text-3xl font-bold">
          {t('help_page.main_heading')}
        </Text>
        <Text>{t('help_page.main_subheading')}</Text>
        {readingResources}
        <hr className="my-7 h-[1px] w-full opacity-25" />
        <Text className="text-3xl font-bold">
          {t('help_page.tips_heading')}
        </Text>
        <Text>{t('help_page.tips_subheading')}</Text>
        <Text>{tipsResources}</Text>
        <hr className="my-7 h-[1px] w-full opacity-25" />
        <Text className="text-3xl font-bold">
          {t('help_page.spoilers_heading')}
        </Text>
        <div className="flex flex-col gap-[15px]">{codeResources}</div>
      </div>
    </>
  )
}
