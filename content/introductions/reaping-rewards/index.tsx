import { useTranslations } from 'hooks'
import { Introduction, Text } from 'ui'

export default function ReapingRewards({ locale }) {
  const t = useTranslations(locale)

  return (
    <Introduction locale={locale}>
      <Text className="pt-2">{t('reaping_rewards.paragraph_one')}</Text>
      <Text className="pt-2">{t('reaping_rewards.paragraph_two')}</Text>
    </Introduction>
  )
}

export const metadata = {
  title: 'reaping_rewards.title',
  subtitle: `reaping_rewards.subtitle`,
  image: 'https://saving-satoshi.s3.amazonaws.com/ch2.png',
}
