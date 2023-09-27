'use client'

import { useTranslations } from 'hooks'
import { TextImage } from 'ui'

export const metadata = {
  title: 'chapter_four.public_key_two.title',
  image: '/assets/images/chapter-4-elliptic-curve.svg',
  key: 'CH4PK2',
}

export default function PublicKey2({ lang }) {
  const t = useTranslations(lang)

  return (
    <TextImage
      lang={lang}
      imageSrc={metadata.image}
      imageAlt={metadata.title}
      btnEnabled={true}
    >
      <p className="mt-2 text-lg md:text-xl">
        {t('chapter_four.public_key_two.paragraph_one')}
      </p>
      <p className="mt-8 text-lg md:text-xl">
        {t('chapter_four.public_key_two.paragraph_two')}
      </p>

      <p className="mt-8 text-lg md:text-xl">
        {t('chapter_four.public_key_two.paragraph_three')}
      </p>
      <p className="mt-8 text-lg md:text-xl">
        {t('chapter_four.public_key_two.paragraph_four')}
      </p>
      <p className="mt-8 text-lg md:text-xl">
        {t('chapter_four.public_key_two.paragraph_five')}
      </p>
    </TextImage>
  )
}
