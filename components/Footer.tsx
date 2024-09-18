'use client'

import config from 'config'
import { useLang, useTranslations } from 'hooks'

export default function Footer({ className }: { className?: string }) {
  const lang = useLang()
  const t = useTranslations(lang)

  return (
    <div className={className}>
      <div className="flex flex-col items-center justify-center px-6 py-2 text-white sm:flex-row">
        <p className="p-1 text-center font-nunito leading-5">
          {t('footer.paragraph_one')}
          <a
            href={config.links.github}
            target="_blank"
            rel="noreferrer nofollow"
            className="p-1 font-nunito underline hover:opacity-80"
          >
            {t('footer.link')}
          </a>
        </p>
      </div>
    </div>
  )
}
