'use client'

import { useTranslations } from 'hooks'
import { useState } from 'react'

import { Text, ResourcePage, ToggleSwitch, CodeExample } from 'ui'

export default function MiningResources({ lang }) {
  const t = useTranslations(lang)

  const [challengeOneIsToggled, setChallengeOneIsToggled] = useState(false)
  const [challengeTwoIsToggled, setChallengeTwoIsToggled] = useState(false)

  const challengeOneToggleSwitch = () => {
    setChallengeOneIsToggled(!challengeOneIsToggled)
  }

  const challengeTwoToggleSwitch = () => {
    setChallengeTwoIsToggled(!challengeTwoIsToggled)
  }

  return (
    <ResourcePage
      lang={lang}
      readingResources={
        <>
          <Text className="mt-[25px] text-xl font-bold">Transactions</Text>
          <Text>
            A transaction in the world of cryptocurrencies is akin to a single
            atomic payment, where it involves the process of destroying existing
            coins and creating new ones. When someone initiates a cryptocurrency
            transaction, they're essentially instructing the blockchain to
            transfer a specific amount of coins from one digital wallet to
            another. To achieve this, the transaction consumes the sender's
            existing coins and generates new ones for the recipient, effectively
            updating the ownership ledger.
          </Text>
          <Text className="mt-[25px] text-xl font-bold">Bitcoin Script</Text>
          <Text>
            Bitcoin Script is a simple, stack-based programming language used in
            Bitcoin transactions to define the conditions under which bitcoins
            can be spent. It consists of various opcodes (short for operation
            codes) that specify what operations should be performed on the data
            within the script.
          </Text>
        </>
      }
      tipsResources={
        <ul className="list-inside list-disc font-nunito text-white">
          <li>
            Given the Op_Code: OP_Pushbytes_33 we are looking for a string 33
            bytes long (66 characters total) in the OP_Return of the transaction
          </li>
          <li>
            Decoding the string with the "xxd" command remember that we are not
            using a variable this time, we need to input the entire string
          </li>
        </ul>
      }
      codeResources={
        <>
          <Text>{t('help_page.solution_one')}</Text>
          <div className="flex flex-row items-center gap-2">
            <ToggleSwitch
              checked={challengeOneIsToggled}
              onChange={challengeOneToggleSwitch}
            />
            <Text>{t('help_page.spoilers_confirm')}</Text>
          </div>
          {challengeOneIsToggled && (
            <div className="text-white">
              <CodeExample
                copy
                language="bash"
                code="44697374726963742032312c20426974636f696e2046726565646f6d205a6f6e65"
              />
            </div>
          )}
          <Text>{t('help_page.solution_two')}</Text>
          <div className="flex flex-row items-center gap-2">
            <ToggleSwitch
              checked={challengeTwoIsToggled}
              onChange={challengeTwoToggleSwitch}
            />
            <Text>{t('help_page.spoilers_confirm')}</Text>
          </div>
          {challengeTwoIsToggled && (
            <div className="text-white">
              <CodeExample
                copy
                language="bash"
                code="echo 44697374726963742032312c20426974636f696e2046726565646f6d205a6f6e65 | xxd -r -p"
              />
            </div>
          )}
        </>
      }
    />
  )
}
