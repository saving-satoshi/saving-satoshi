import Topbar from 'components/Topbar'
import Footer from 'components/Footer'
import { Button } from 'shared'
import { useTranslations } from 'hooks'
import defaultMetadata from 'config/metadata'

export const metadata = {
  ...defaultMetadata,
  title: 'About - Saving Satoshi',
}

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

          <h3 className="mb-8 text-4xl sm:text-5xl">
            {t('about.project.title')}
          </h3>

          <div className="mt-4 flex flex-col gap-8 font-nunito text-xl">
            <p>{t('about.project.paragraph_one')}</p>
            <p>{t('about.project.paragraph_two')}</p>
            <p>{t('about.project.paragraph_three')}</p>
            <p>{t('about.project.paragraph_four')}</p>
            <ul className="ml-12 list-disc">
              <li>{t('about.project.chapter_topics.list_one')}</li>
              <li>{t('about.project.chapter_topics.list_two')}</li>
              <li>{t('about.project.chapter_topics.list_three')}</li>
              <li>{t('about.project.chapter_topics.list_four')}</li>
              <li>{t('about.project.chapter_topics.list_five')}</li>
              <li>{t('about.project.chapter_topics.list_six')}</li>
              <li>{t('about.project.chapter_topics.list_seven')}</li>
              <li>{t('about.project.chapter_topics.list_eight')}</li>
              <li>{t('about.project.chapter_topics.list_nine')}</li>
              <li>{t('about.project.chapter_topics.list_ten')}</li>
            </ul>
            <p>{t('about.project.paragraph_five')}</p>
            <p>{t('about.project.paragraph_six')}</p>
            <p>{t('about.project.paragraph_seven')}</p>
            <p>{t('about.project.paragraph_eight')}</p>
          </div>

          <Divider />

          <h3 className="mb-8 text-4xl sm:text-5xl">
            {t('about.contributing.title')}
          </h3>

          <p className="mt-4 font-nunito text-xl">
            {t('about.contributing.paragraph_one')}
          </p>

          <h4 className="mt-8 text-2xl sm:text-3xl">
            {t('about.contributing.feedback.title')}
          </h4>

          <p className="font-nunito text-xl">
            {t('about.contributing.feedback.paragraph_one')}
          </p>

          <h4 className="mt-8 text-2xl sm:text-3xl">
            {t('about.contributing.contribute.title')}
          </h4>

          <p className="font-nunito text-xl">
            {t('about.contributing.contribute.paragraph_one')}
          </p>

          <p className="mt-8 font-nunito text-xl">
            {t('about.contributing.contribute.paragraph_two')}
          </p>

          <Divider />

          <h3 className="mb-8 text-4xl sm:text-5xl">
            {t('about.privacy.title')}
          </h3>
          <p className="mt-4 font-nunito text-xl">
            {t('about.privacy.paragraph_one')}
          </p>
          <h3 className="mt-8 text-2xl sm:text-3xl">
            {t('about.privacy.sub_heading_one')}
          </h3>
          <p className="mt-2 font-nunito text-xl">
            {t('about.privacy.paragraph_two')}
          </p>
          <h3 className="mt-8 text-2xl sm:text-3xl">
            {t('about.privacy.sub_heading_two')}
          </h3>
          <div className="mt-2 font-nunito text-xl">
            {t('about.privacy.paragraph_three')}
            <ol>
              <li>
                <span className="font-bold">
                  {t('about.privacy.list_item_one_title')}
                </span>{' '}
                {t('about.privacy.list_item_one_text')}
              </li>
              <li>
                <span className="font-bold">
                  {t('about.privacy.list_item_two_title')}
                </span>{' '}
                {t('about.privacy.list_item_two_text')}
              </li>
            </ol>
          </div>
          <h3 className="mt-8 text-2xl sm:text-3xl">
            {t('about.privacy.sub_heading_three')}
          </h3>
          <p className="mt-2 font-nunito text-xl">
            {t('about.privacy.paragraph_four')}
          </p>
          <p className="mt-2 font-nunito text-xl">
            {t('about.privacy.paragraph_five')}
          </p>
          <Divider />

          <h3 className="mb-8 text-4xl sm:text-5xl">
            {t('about.contributors.title')}
          </h3>

          <div className="mt-4 flex flex-col gap-8 font-nunito text-xl font-semibold">
            <p>{t('about.contributors.paragraph_one')}</p>
            <p>{t('about.contributors.paragraph_two')}</p>
            <p>{t('about.contributors.paragraph_three')}</p>
            <p>{t('about.contributors.paragraph_four')}</p>
          </div>
        </div>

        <Divider />

        <div className="mt-12 flex-col justify-center px-6 pb-12 text-center text-white">
          <p className="pb-8 pt-4 text-center font-nunito text-xl">
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
