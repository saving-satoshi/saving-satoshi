'use client'

import { siteConfig } from 'config/site'
import { useLang, useTranslations } from 'hooks'

export default function Footer() {
  const lang = useLang()
  const t = useTranslations(lang)
  return (
    <div className="bottom-0 h-auto w-full bg-back">
      <div className="flex flex-col items-center justify-center px-6 py-2 text-white sm:flex-row">
        <p className="p-1 text-center">{t('footer.paragraph_one')}</p>
        <a
          href={siteConfig.links.github}
          target="_blank"
          rel="noreferrer nofollow"
          className="p-1 underline hover:opacity-80"
        >
          {t('footer.link')}
        </a>
      </div>
    </div>
  )
}
