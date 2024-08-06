'use client'

import { useTranslations } from 'hooks'
import { ChapterIntro, Table } from 'ui'
import { Button } from 'shared'
import { useProceed } from 'hooks'

export const metadata = {
  title: 'chapter_nine.opcodes_four.title',
  navigation_title: 'chapter_nine.opcodes_four.nav_title',
  key: 'CH9OPC4',
}

export default function OpCodes4({ lang }) {
  const proceed = useProceed()
  const t = useTranslations(lang)

  const tableHeading = [
    t('chapter_nine.opcodes_four.table_one.headings.item_one'),
    t('chapter_nine.opcodes_four.table_one.headings.item_two'),
    t('chapter_nine.opcodes_four.table_one.headings.item_three'),
  ]

  const inputRows = [
    ['(init)', <span>OP_1 OP_2 OP_ADD OP_EQUAL</span>, '[3]'],
    [
      '1',
      <span>
        <span className="text-white">[OP_1]</span> OP_2 OP_ADD OP_EQUAL
      </span>,
      '[3,1]',
    ],
    [
      '2',
      <span>
        OP_1 <span className="text-white">[OP_2]</span> OP_ADD OP_EQUAL
      </span>,
      '[3,1,2]',
    ],
    [
      '3',
      <span>
        OP_1 OP_2 <span className="text-white">[OP_ADD]</span> OP_EQUAL
      </span>,
      '[3,3]',
    ],
    [
      '4',
      <span>
        OP_1 OP_2 OP_ADD <span className="text-white">[OP_EQUAL]</span>
      </span>,
      '[True]',
    ],
  ]

  return (
    <ChapterIntro
      className="my-8"
      heading={t('chapter_nine.opcodes_four.heading')}
    >
      <p className="mt-2 text-lg md:text-xl">
        {t('chapter_nine.opcodes_four.paragraph_one')}
      </p>

      <div className="max-w-screen-lg text-[#D0D5DC]">
        <Table
          headings={tableHeading}
          rows={inputRows}
          wide={{ column: [2, 3] }}
        />
      </div>

      <p className="mt-4 text-lg md:text-xl">
        {t('chapter_nine.opcodes_four.subheading_one')}
      </p>

      <ul className="list-inside list-disc">
        <li>{t('chapter_nine.opcodes_four.stack_list_one')}</li>
        <li>{t('chapter_nine.opcodes_four.stack_list_two')}</li>
        <li>{t('chapter_nine.opcodes_four.stack_list_three')}</li>
        <li>{t('chapter_nine.opcodes_four.stack_list_four')}</li>
        <li>{t('chapter_nine.opcodes_four.stack_list_five')}</li>
      </ul>

      <p className="mt-8 text-lg md:text-xl">
        {t('chapter_nine.opcodes_four.paragraph_two')}
      </p>

      <p className="mt-8 text-lg md:text-xl">
        {t('chapter_nine.opcodes_four.paragraph_three')}
      </p>

      <Button onClick={proceed} classes="mt-10 max-md:w-full">
        {t('shared.next')}
      </Button>
    </ChapterIntro>
  )
}
