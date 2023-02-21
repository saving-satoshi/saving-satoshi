import { useLang, useTranslations } from 'hooks'
import { Button, Title } from 'ui'

export default function Intro({
  title,
  heading,
  children,
  next,
}: {
  title: string
  heading: string
  children: any
  next: string
}) {
  const lang = useLang()
  const t = useTranslations(lang)
  return (
    <div className="my-auto grid w-full grid-cols-1 justify-center justify-items-center">
      <div className="flex w-full items-center px-6 text-white lg:w-1/2 lg:px-0">
        <div className="content-center justify-items-center px-1 font-nunito">
          <div className={title}>
            <Title>{heading}</Title>
            {children}
          </div>

          <Button href={next} classes="mt-8 max-md:w-full">
            {t('intro.next')}
          </Button>
        </div>
      </div>
    </div>
  )
}
