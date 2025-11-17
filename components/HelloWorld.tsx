// components/HelloWorld.tsx
import { useTranslation, useLang } from 'react-i18next'

export default function HelloWorldComponent() {
  const lang = useLang()
  const t = useTranslation(lang)

  return <h1>{t('hello_world.heading')}</h1>
}
