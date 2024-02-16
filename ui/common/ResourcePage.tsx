'use client'

import { useTranslations } from 'hooks'

import { Text } from 'ui'

export default function ResourcePage({
  lang,
  readingResources,
  tipsResources,
  codeResources,
}: {
  lang: string
  readingResources?: React.ReactElement | string
  tipsResources?: React.ReactElement | string
  codeResources?: React.ReactElement | string
}) {
  const t = useTranslations(lang)

  return (
    <>
      <div>
        {readingResources && (
          <>
            <Text className="text-3xl font-bold">
              {t('help_page.main_heading')}
              
            </Text>
            {readingResources}
            </>
        )}
        {tipsResources && (
          <>
            <hr className="my-7 h-[1px] w-full opacity-25" />
            <Text className="text-3xl font-bold">
              {t('help_page.tips_heading')}
            </Text>
            {tipsResources}
          </>
        )}
        {codeResources && (
          <>
            <hr className="my-7 h-[1px] w-full opacity-25" />
            <Text className="text-3xl font-bold">
              {t('help_page.spoilers_heading')}
            </Text>
            <div className="flex flex-col gap-[15px]">{codeResources}</div>
          </>
        )}
        <>
        <hr className="my-7 h-[1px] w-full opacity-25" />
        <footer className="text-2xl text-white" >{t('help_page.feedback')} </footer>
        </>
      </div>
    </>
  )
}
