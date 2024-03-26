import { useLang, useTranslations } from 'hooks'
import React from 'react'
import { Text } from 'ui'

const HelpSuggestion = () => {
  const lang = useLang()
  const t = useTranslations(lang)
  return (
    <div className="mt-4 flex items-center rounded-xl bg-black bg-opacity-20 p-4 bg-blend-darken">
      <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center border border-white">
        <Text className="text-lg md:text-xl">?</Text>
      </div>
      <Text className="md:text-md flex-grow text-sm">
        {t('help_page.help_suggestion')}
      </Text>
    </div>
  )
}

export default HelpSuggestion
