import { useTranslations } from 'hooks'
import { Introduction, Text } from 'ui'

export default function ReapingRewards({ lang }) {
  const t = useTranslations(lang)

  return (
    <Introduction lang={lang}>
      <Text className="text-lg md:text-xl">{t('reaping_rewards.paragraph_one')}</Text>
      <Text className="text-lg md:text-xl mt-4">{t('reaping_rewards.paragraph_two')}</Text>
      <Text className="text-lg md:text-xl mt-4">{t('reaping_rewards.paragraph_three')}</Text>
    </Introduction>
  )
}

export const metadata = {
  image: '/assets/images/chapter-1-intro-1.jpg',
}
