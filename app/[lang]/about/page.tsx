import Topbar from 'components/Topbar'
import Footer from 'components/Footer'
import { Button } from 'shared'

import { useTranslations } from 'hooks'

const CONTRIBUTORS = [
  { username: 'adamcjonas', url: 'https://twitter.com/adamcjonas' },
  { username: 'afterburn', url: 'https://github.com/afterburn' },
  { username: 'benalleng', url: 'https://github.com/benalleng' },
  { username: 'ecurrencyhodler', url: 'https://twitter.com/ecurrencyhodler' },
  { username: 'gbks', url: 'https://twitter.com/gbks' },
  { username: 'satsie', url: 'https://twitter.com/satsie' },
  { username: 'shaavan', url: 'https://github.com/shaavan' },
  { username: 'vinayaksh42', url: 'https://github.com/vinayaksh42' },
]

function Divider() {
  return <div className="my-12 h-[1px] w-full bg-white bg-opacity-25" />
}

export default function About({ params }) {
  const t = useTranslations(params.lang)

  return (
    <div className="w-full bg-[#2A3B61]">
      <Topbar />

      <div className="m-auto px-6 lg:w-9/12 2xl:w-1/2">
        <div className="flex flex-col justify-center text-white">
          <h1 className="hidden px-2.5 pt-20 text-center text-7xl sm:block lg:text-8xl">
            {t('about.title')}
          </h1>

          <h1 className="block px-2.5 pt-20 text-center text-5xl sm:hidden lg:text-8xl">
            {t('about.mobile_title')}
          </h1>

          <p className="mt-4 text-center text-2xl sm:text-4xl">
            {t('about.subtitle')}
          </p>
          <p className="mt-8 font-nunito text-xl">{t('about.intro')}</p>

          <Divider />

          <h3 className="text-4xl sm:text-5xl">{t('about.project.title')}</h3>

          <div className="mt-4 flex flex-col gap-8 font-nunito text-xl">
            <p>{t('about.project.paragraph_one')}</p>
            <p>{t('about.project.paragraph_two')}</p>
            <p>{t('about.project.paragraph_three')}</p>
          </div>

          <Divider />

          <h3 className="text-4xl sm:text-5xl">
            {t('about.contributing.title')}
          </h3>

          <p className="mt-4 font-nunito text-xl">
            {t('about.contributing.paragraph_one')}
          </p>

          <h4 className="mt-8 font-nunito text-xl font-semibold">
            {t('about.contributing.feedback.title')}
          </h4>

          <p className="font-nunito text-xl">
            {t('about.contributing.feedback.paragraph_one')}
          </p>

          <h4 className="mt-8 font-nunito text-xl font-semibold">
            {t('about.contributing.contribute.title')}
          </h4>

          <p className="font-nunito text-xl">
            {t('about.contributing.contribute.paragraph_one')}
          </p>

          <p className="mt-8 font-nunito text-xl">
            {t('about.contributing.contribute.paragraph_two')}
          </p>

          <Divider />

          <h3 className="text-4xl sm:text-5xl">
            {t('about.contributors.title')}
          </h3>

          <div className="mt-4 font-nunito text-xl font-semibold">
            <span>{t('about.contributors.contributions_by')} </span>
            <span>
              {CONTRIBUTORS.map((contributor, i) => {
                return (
                  <>
                    <a
                      key={i}
                      className="underline"
                      target="_blank"
                      rel="noreferrer nofollow"
                      href={contributor.url}
                    >
                      @{contributor.username}
                    </a>
                    ,{' '}
                  </>
                )
              })}
            </span>
            <span>{t('about.contributors.many_more')}</span>
          </div>
        </div>

        <Divider />

        <div className="mt-12 flex-col justify-center px-6 pb-12 text-center text-white">
          <p className="pt-4 pb-8 text-center font-nunito text-xl">
            {t('about.satoshi_needs_you')}
          </p>
          <Button href={`/${params.lang}/chapters`}>
            {t('hero.start_journey')}
          </Button>
        </div>
      </div>

      <Footer className="bg-[#2A3B61]" />
    </div>
  )
}
