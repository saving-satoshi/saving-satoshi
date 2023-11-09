'use client'

import { useTranslations } from 'hooks'
import { LessonDirection } from 'types'
import { DoubleInputChallenge, LessonInfo, Text, Title } from 'ui'

export const metadata = {
  title: 'chapter_five.verify_signature_one.title',
  key: 'CH5VFS3',
}

const rValue =
  '0x11db93e1dcdb8a016b49840f8c53bc1eb68a382e97b1482ecad7b148a6909a5c'
const sValue =
  '0xb2e0eaddfb84ccf9744464f82e160bfa9b8b64f9d4c03f999b8643f656b412a3'

export default function DeriveMessage6({ lang }) {
  const t = useTranslations(lang)

  return (
    <DoubleInputChallenge
      answerOne={rValue}
      answerTwo={sValue}
      labelOne="Paste the x coordinate"
      labelTwo="Paste the y coordinate"
      pattern={/[a-z0-9]+/gi}
      hints
      direction={LessonDirection.Horizontal}
      inputClassNames="text-[15px] md:text-[22px]"
    >
      <LessonInfo className="px-4 md:self-start md:px-10">
        <Title>Decode the Public Key</Title>

        <Text className="mt-2 text-lg">
          We learned in chapter 4 that public keys are really points in the
          ECDSA curve, meaning they have an x and y value. The first byte 04
          means "uncompressed" (as opposed to 02 and 03 like we learned in
          chapter 4). Remove that first byte and the remaining data are 32-byte
          x and y coordinates. Copy and paste again.
        </Text>

        <div className="mt-[30px] border-2 border-dashed border-white">
          <p className="max-w-[900px] px-[15px] py-[10px] text-left font-space-mono text-base md:text-lg">
            # Satoshi's public key, from the block 9 coinbase output
            scriptPubKey 
          </p>
          <p className="max-w-[900px] break-all px-[15px] py-[10px] text-left font-space-mono text-base md:text-lg">
            pubkey =
            """0411db93e1dcdb8a016b49840f8c53bc1eb68a382e97b1482ecad7b148a6909a5cb2e0eaddfb84ccf9744464f82e160bfa9b8b64f9d4c03f999b8643f656b412a3"""
          </p>
        </div>
      </LessonInfo>
    </DoubleInputChallenge>
  )
}
