'use client'

import { useTranslations } from 'hooks'
import { LessonDirection } from 'types'
import { InputChallenge, LessonInfo, Text, Title, useLessonContext } from 'ui'

export const metadata = {
  title: 'chapter_five.derive_message_one.title',
  image: '/assets/images/chapter-4-intro-1.jpg',
  key: 'CH5DRM6',
}

const transaction =
  '0100000001c997a5e56e104102fa209c6a852dd90660a20b2d9c352423edce25857fcd3704000000004847304402204e45e16932b8af514961a1d3a1a25fdf3f4f7732e9d624c6c61548ab5fb8cd410220181522ec8eca07de4860a4acdd12909d831cc56cbbac4622082221a8768d1d0901ffffffff0200ca9a3b00000000434104ae1a62fe09c5f51b13905f07f06b99a2f7159b2225f374cd378d71302fa28414e7aab37397f554a7df5f142c21c1b7303b8a0626f1baded5c72a704f7e6cd84cac00286bee0000000043410411db93e1dcdb8a016b49840f8c53bc1eb68a382e97b1482ecad7b148a6909a5cb2e0eaddfb84ccf9744464f82e160bfa9b8b64f9d4c03f999b8643f656b412a3ac00000000'
const successColorGroups = [
  {
    start: 0,
    end: 8,
    colorCode: '#28B123',
  },
  {
    start: 8,
    end: 10,
    colorCode: '#F3241D',
  },
  {
    start: 10,
    end: 74,
    colorCode: '#3DCFEF',
  },
  {
    start: 74,
    end: 82,
    colorCode: '#EF960B',
  },
  {
    start: 82,
    end: 228,
    colorCode: '#D06AF4',
  },
  {
    start: 228,
    end: 236,
    colorCode: '#28B123',
  },
  {
    start: 236,
    end: 238,
    colorCode: '#F3241D',
  },
  {
    start: 238,
    end: 254,
    colorCode: '#3DCFEF',
  },
  {
    start: 254,
    end: 390,
    colorCode: '#EF960B',
  },
  {
    start: 390,
    end: 406,
    colorCode: '#D06AF4',
  },
  {
    start: 406,
    end: 542,
    colorCode: '#28B123',
  },
  {
    start: 542,
    end: 550,
    colorCode: '#F3241D',
  },
]

export default function DeriveMessage6({ lang }) {
  const t = useTranslations(lang)

  const successElement = (
    <div className="max-w-full grow justify-center text-white ">
      <div className="flex h-full flex-col content-center justify-items-start gap-1 py-6">
        <Text className="font-space-mono text-base font-normal not-italic leading-normal text-white">
          {t('chapter_five.derive_message_one.success_message_line_one')}
        </Text>
        <Text className="font-space-mono text-base font-normal not-italic leading-normal text-white">
          {t('chapter_five.derive_message_one.success_message_second_line')}{' '}
          <span style={{ color: '#28B123' }}>01000000</span>
        </Text>
        <Text className="font-space-mono text-base font-normal not-italic leading-normal text-white">
          {t('chapter_five.derive_message_one.success_message_third_line')}{' '}
          <span style={{ color: '#F3241D' }}>01</span>
        </Text>
        <Text className="font-space-mono text-base font-normal not-italic leading-normal text-white">
          {t('chapter_five.derive_message_one.success_message_fourth_line')}{' '}
          <span className="break-all" style={{ color: '#3DCFEF' }}>
            c997a5e56e104102fa209c6a852dd90660a20b2d9c352423edce25857fcd3704
          </span>
        </Text>
        <Text className="font-space-mono text-base font-normal not-italic leading-normal text-white">
          {t('chapter_five.derive_message_one.success_message_fifth_line')}{' '}
          <span style={{ color: '#EF960B' }}>00000000</span>
        </Text>
        <Text className="font-space-mono text-base font-normal not-italic leading-normal text-white">
          {t('chapter_five.derive_message_one.success_message_sixth_line')}{' '}
          <span className="break-all" style={{ color: '#D06AF4' }}>
            4847304402204e45e16932b8af514961a1d3a1a25fdf3f4f7732e9d624c6c61548ab5fb8cd410220181522ec8eca07de4860a4acdd12909d831cc56cbbac4622082221a8768d1d0901
          </span>
        </Text>
        <Text className="font-space-mono text-base font-normal not-italic leading-normal text-white">
          {t('chapter_five.derive_message_one.success_message_seventh_line')}{' '}
          <span style={{ color: '#28B123' }}>ffffffff</span>
        </Text>
        <Text className="font-space-mono text-base font-normal not-italic leading-normal text-white">
          {t('chapter_five.derive_message_one.success_message_eighth_line')}{' '}
          <span style={{ color: '#F3241D' }}>02</span>
        </Text>
        <Text className="font-space-mono text-base font-normal not-italic leading-normal text-white">
          {t('chapter_five.derive_message_one.success_message_ninth_line')}{' '}
          <span style={{ color: '#3DCFEF' }}>00ca9a3b00000000</span>
        </Text>
        <Text className="font-space-mono text-base font-normal not-italic leading-normal text-white">
          {t('chapter_five.derive_message_one.success_message_tenth_line')}{' '}
          <span className="break-all" style={{ color: '#EF960B' }}>
            434104ae1a62fe09c5f51b13905f07f06b99a2f7159b2225f374cd378d71302fa28414e7aab37397f554a7df5f142c21c1b7303b8a0626f1baded5c72a704f7e6cd84cac
          </span>
        </Text>
        <Text className="font-space-mono text-base font-normal not-italic leading-normal text-white">
          {t('chapter_five.derive_message_one.success_message_eleventh_line')}{' '}
          <span style={{ color: '#D06AF4' }}>00286bee00000000</span>
        </Text>
        <Text className="font-space-mono text-base font-normal not-italic leading-normal text-white">
          {t('chapter_five.derive_message_one.success_message_twelth_line')}{' '}
          <span className="break-all" style={{ color: '#28B123' }}>
            43410411db93e1dcdb8a016b49840f8c53bc1eb68a382e97b1482ecad7b148a6909a5cb2e0eaddfb84ccf9744464f82e160bfa9b8b64f9d4c03f999b8643f656b412a3ac
          </span>
        </Text>
        <Text className="font-space-mono text-base font-normal not-italic leading-normal text-white">
          {t('chapter_five.derive_message_one.success_message_thirteenth_line')}{' '}
          <span style={{ color: '#F3241D' }}>00000000</span>
        </Text>
      </div>
    </div>
  )

  return (
    <InputChallenge
      answer={transaction}
      label={t('chapter_five.derive_message_one.input_challenge_label')}
      pattern={/[a-z0-9]+/gi}
      successColorGroups={successColorGroups}
      hints
      successElement={successElement}
      direction={LessonDirection.Horizontal}
      inputClassNames="sm:text-[15px]"
    >
      <LessonInfo>
        <Title>{t('chapter_five.derive_message_one.heading')}</Title>

        <Text className="mt-2 text-lg">
          {t('chapter_five.derive_message_one.paragraph_one')}
        </Text>

        <Text className="mt-2 text-lg">
          {t('chapter_five.derive_message_one.paragraph_two')}
        </Text>

        <Text className="mt-2 text-lg">
          {t('chapter_five.derive_message_one.paragraph_three')}
        </Text>
      </LessonInfo>
    </InputChallenge>
  )
}
