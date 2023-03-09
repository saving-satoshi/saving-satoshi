import { useTranslations } from 'hooks'
import { Introduction, Text } from 'ui'

export default function ReapingRewards({ lang }) {
  const t = useTranslations(lang)

  return (
    <Introduction lang={lang}>
      <h1 className="font-cbrush text-5xl">{t('reaping_rewards.title')}</h1>
      <h2 className="pt-3 font-nunito text-xl font-black">
        {t('reaping_rewards.subtitle')}
      </h2>
      <div className="pt-3 font-nunito text-2xl">
        <Text className="pt-2">{t('reaping_rewards.paragraph_one')}</Text>
        <Text className="pt-2">{t('reaping_rewards.paragraph_two')}</Text>
      </div>
    </Introduction>
  )
}

export const metadata = {
  title: 'reaping_rewards.title',
  subtitle: `reaping_rewards.subtitle`,
  image: '/assets/images/chapter-1-cover.jpg',
}
