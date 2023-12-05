'use client'

import { useTranslations, useSaveAndProceed } from 'hooks'
import { ChapterIntro, CodeExample } from 'ui'
import { Button } from 'shared'

export const metadata = {
  title: 'chapter_six.in_out_one.title',
  key: 'CH6INO1',
}

export default function IntOut1({ lang }) {
  const saveAndProceed = useSaveAndProceed()
  const t = useTranslations(lang)

  return (
    <ChapterIntro className="m-auto my-8 max-w-[840px]">
      <p className="mt-2 text-lg md:text-xl">
        {t('chapter_six.in_out_one.paragraph_one')}
      </p>
      <CodeExample
        className="mt-4 "
        code={`bc1qgghq08syehkym52ueu9nl5x8gth23vr8hurv9dyfcmhaqk4lrlgs28epwj`}
        language="shell"
      />
      <p className="mt-8 text-lg md:text-xl">
        {t('chapter_six.in_out_one.paragraph_two')}
      </p>

      <p className="mt-8 text-lg md:text-xl">
        {t('chapter_six.in_out_one.paragraph_three')}
      </p>
      <Button onClick={saveAndProceed} classes="mt-10 max-md:w-full">
        {t('shared.next')}
      </Button>
    </ChapterIntro>
  )
}