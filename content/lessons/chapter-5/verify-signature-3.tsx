'use client'

import { useTranslations } from 'hooks'
import { LessonDirection } from 'types'
import { DoubleInputChallenge, LessonInfo, Text, Title } from 'ui'

export const metadata = {
  title: 'chapter_five.verify_signature_one.title',
  key: 'CH5VFS3',
}

const rValue =
  '0x4e45e16932b8af514961a1d3a1a25fdf3f4f7732e9d624c6c61548ab5fb8cd41'
const sValue =
  '0x181522ec8eca07de4860a4acdd12909d831cc56cbbac4622082221a8768d1d09'

export default function DeriveMessage6({ lang }) {
  const t = useTranslations(lang)

  return (
    <DoubleInputChallenge
      answerOne={rValue}
      answerTwo={sValue}
      labelOne="Paste the R value"
      labelTwo="Paste the S value"
      pattern={/[a-z0-9]+/gi}
      hints
      direction={LessonDirection.Horizontal}
      inputClassNames="text-[15px] md:text-[22px]"
    >
      <LessonInfo className="px-4 md:self-start md:px-10">
        <Title>Decode the Signature</Title>

        <Text className="mt-2 text-lg">
          Satoshi's signature is encoded in a system called DER which is a
          subset of ASN.1.
        </Text>

        <Text className="mt-2 text-lg">
          There are two 32-byte numbers we need to extract. They are referred to
          as R and S respectively and are each prefixed by the bytes 0220 in the
          DER sequence. Instead of fully decoding the DER blob, just look for
          the prefixes and paste the R and S values.
        </Text>

        <div className="mt-[30px] border-2 border-dashed border-white">
          <p className="max-w-[900px] px-[15px] py-[10px] text-left font-space-mono text-base md:text-lg">
            # Satoshi's signature, from the input scriptSig of the tx to Hal
            Finney
          </p>
          <p className="max-w-[900px] break-all px-[15px] py-[10px] text-left font-space-mono text-base md:text-lg">
            sig_der =
            """304402204e45e16932b8af514961a1d3a1a25fdf3f4f7732e9d624c6c61548ab5fb8cd410220181522ec8eca07de4860a4acdd12909d831cc56cbbac4622082221a8768d1d09"""
          </p>
        </div>
      </LessonInfo>
    </DoubleInputChallenge>
  )
}
