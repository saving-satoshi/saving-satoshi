'use client'

import { Button } from 'shared'
import { useTranslations } from 'hooks'

export default function End({
  title,
  description,
  image,
  lang,
}: {
  title?: string
  description?: string
  image: string
  lang: string
}) {
  const t = useTranslations(lang)

  return (
    <div
      className="flex w-screen grow justify-center bg-cover bg-fixed bg-center bg-no-repeat"
      style={{ backgroundImage: `url('${image}')` }}
    >
      <div className="left-unset absolute bottom-0 ml-auto w-full bg-gradient-to-b from-transparent via-[#00000040] to-[#00000080] p-4 pb-12 md:p-16">
        <div className="md:max-w-[500px]">
          <h1 className="text-3xl font-bold text-white md:text-5xl">
            {t(title)}z
          </h1>
          <p className="mt-4 font-nunito text-xl text-white md:text-2xl">
            {t(description)}
          </p>

          <div className="mt-4 flex w-full flex-col gap-4 xl:w-2/3">
            <Button
              size="small"
              href="https://forms.gle/WhdJwcKKetB9sFL79"
              external={true}
            >
              {t('chapter_one.end.feedback')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
