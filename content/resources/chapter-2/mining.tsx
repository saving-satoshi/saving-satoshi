'use client'

import { useTranslations } from 'hooks'

import { Text, ResourcePage } from 'ui'

export default function MiningResources({ lang }) {
  const t = useTranslations(lang)

  return (
    <ResourcePage
      lang={lang}
      readingResources={
        <>
          <Text className="mt-[25px] text-xl font-bold">Mining</Text>
          <Text>
            Mining is where these concepts all come together. Bitcoin mining is
            the process by which new bitcoins are created and transactions are
            added to the blockchain. Miners compete to solve complex
            mathematical puzzles by finding a unique, valid "nonce" in each
            block of transactions. This proof-of-work process demands
            significant computational power and energy, making it a secure and
            decentralized way to validate transactions. Successful miners are
            rewarded with newly minted bitcoins and transaction fees, and they
            play a critical role in maintaining the integrity of the Bitcoin
            network.
          </Text>
          <Text className="mt-[25px] text-xl font-bold">Difficulty</Text>
          <Text>
            The mining difficulty is what allows the block to remain at an
            average of 10 minutes between each new block
          </Text>
        </>
      }
    />
  )
}
