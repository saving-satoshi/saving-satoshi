'use client'
import { useTranslations } from 'hooks'
import { LessonInfo, Text } from 'ui'
import TransactionChallenge from 'ui/lesson/TransactionsChallenge'
export const metadata = {
  title: 'chapter_ten.making_a_payment_six.title',
  navigation_title: 'chapter_ten.making_a_payment_six.nav_title',
  key: 'CH10MAP6',
}
export default function MakingAPayment6({ lang }) {
  const t = useTranslations(lang)

  return (
    <TransactionChallenge
      initialStack={{
        output_0: {
          0: ['SIG(YOU)', '1'],
          1: ['0', 'SIG(REVOCATION_YOU_3)', 'SIG(LASZLO)', '0'],
        },
        output_1: { 0: ['SIG(YOU)'] },
      }}
      nSequenceTime={700}
      answerScript={{
        output_0: [
          'OP_IF',
          'OP_PUSH',
          'PUBKEY(REVOCATION_YOU_3)',
          'OP_CHECKSEQUENCEVERIFY',
          'OP_DROP',
          'PUBKEY(YOU)',
          'PUBKEY(LASZLO)',
          'OP_CHECKSIG',
          'OP_ELSE',
          'OP_ENDIF',
          'OP_CHECKMULTISIG',
        ],
        output_1: ['OP_PUSH', 'PUBKEY(YOU)', 'OP_CHECKSIG'],
      }}
      progressKey={metadata.key}
      currentTransactionTab="commitment(You)"
      prefilled
      noSignature
      alwaysShowButton
    >
      <LessonInfo>
        <Text className="text-lg font-bold md:text-xl">
          {t('chapter_ten.making_a_payment_six.heading_one')}
        </Text>

        <Text className="mt-4 text-lg md:text-xl">
          {t('chapter_ten.making_a_payment_six.paragraph_one')}
        </Text>

        <Text className="mt-4 text-lg md:text-xl">
          {t('chapter_ten.making_a_payment_six.paragraph_two')}
        </Text>

        <Text className="mt-4 text-lg md:text-xl">
          {t('chapter_ten.making_a_payment_six.paragraph_three')}
        </Text>

        <Text className="mt-4 text-lg font-semibold md:text-xl">
          {t('chapter_ten.making_a_payment_six.paragraph_four')}
        </Text>

        <ul className="ml-4 list-disc  font-nunito text-xl">
          <li>
            {t('chapter_ten.making_a_payment_six.commitment_one_you.list_one')}
          </li>
          <li>
            {t('chapter_ten.making_a_payment_six.commitment_one_you.list_two')}
          </li>
        </ul>

        <Text className="mt-4 text-lg font-semibold md:text-xl">
          {t('chapter_ten.making_a_payment_six.paragraph_five')}
        </Text>

        <ul className="ml-4 list-disc  font-nunito text-xl">
          <li>
            {t('chapter_ten.making_a_payment_six.commitment_two_you.list_one')}
          </li>
          <li>
            {t('chapter_ten.making_a_payment_six.commitment_two_you.list_two')}
          </li>
        </ul>

        <Text className="mt-4 text-lg md:text-xl">
          {t('chapter_ten.making_a_payment_six.paragraph_six')}
        </Text>

        <Text className="mt-4 text-lg font-semibold md:text-xl">
          {t('chapter_ten.making_a_payment_six.paragraph_seven')}
        </Text>

        <ul className="ml-4 list-disc  font-nunito text-xl">
          <li>
            {t(
              'chapter_ten.making_a_payment_six.commitment_two_laszlo.list_one'
            )}
          </li>
          <li>
            {t(
              'chapter_ten.making_a_payment_six.commitment_two_laszlo.list_two'
            )}
          </li>
          <li>
            {t(
              'chapter_ten.making_a_payment_six.commitment_two_laszlo.list_three'
            )}
          </li>
        </ul>

        <Text className="mt-4 text-lg md:text-xl">
          {t('chapter_ten.making_a_payment_six.paragraph_eight')}
        </Text>
      </LessonInfo>
    </TransactionChallenge>
  )
}
/*
*
      title: `Complete the payment`,
      nav_title: `Complete the payment`,
      heading_one: `Complete the payment`,
      paragraph_one: "Let's do another quick recap.",
      list_one: 'A 2 of 2 output is confirmed on the blockchain',
      paragraph_two:
        'There are several off-chain transactions that spend that output:',
      paragraph_three: 'You have these transactions:',
      paragraph_four: 'Commitment 1 (You):',
      commitment_1_you: {
        list_one: 'Input 0: signed by Laszlo',
        list_two:
          'Output 0: 100000 satoshis to you after 700 blocks or Laszlo with revocation_you_1',
      },
      commitment_2_you: {
        list_one: 'Input 0: signed by Laszlo',
        list_two:
          'Output 0: 99000 satoshis to you after 700 blocks or Laszlo with revocation_you_2',
        list_three: 'Output 1: 1000 satoshis to Laszlo',
      },
      paragraph_five: 'Commitment 2 (You):',
      paragraph_six: 'Laszlo has this transaction:',
      paragraph_seven: 'Commitment 2 (Laszlo):',
      commitment_2_laszlo: {
        list_one: 'Input 0: signed by You',
        list_two:
          'Output 0: 1000 satoshis to Laszlo after 700 blocks or You with revocation_laszlo_1',
        list_three: 'Output 1: 99000 satoshis to You',
      },
      paragraph_eight:
        "All three of these transactions are signed and valid, but Laszlo hasn't handed you a beer yet. Why not? Only one thing left to do...",
*/
