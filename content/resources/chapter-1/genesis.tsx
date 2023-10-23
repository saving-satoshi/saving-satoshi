'use client'

import { useTranslations } from 'hooks'
import { useState } from 'react'

import { Text, ResourcePage, ToggleSwitch, CodeExample } from 'ui'

export default function GenesisResources({ lang }) {
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
          <Text className="text-xl font-bold">ScriptSig</Text>
          <Text>
            The "scriptSig" is a script that you provide as part of the input in
            your new transaction. It is essentially your unlocking script, which
            proves that you have the authority to spend the bitcoin from the
            referenced UTXO. The "scriptSig" is the data that goes into the
            input's scriptSig field.
          </Text>
          <Text className="mt-[25px] text-xl font-bold">Bitcoin Blocks</Text>
          <Text>
            A "block" in blockchain technology is like a container for a group
            of transactions. It forms a crucial part of the blockchain, with
            each block referencing the one before it. This reference, along with
            a block header that contains important details like a timestamp and
            a unique identifier, ensures the data's integrity and chronological
            order. Once a block is added to the blockchain, it's incredibly
            difficult to change, ensuring the security and immutability of the
            data. The size of a block can vary between different blockchains,
            and each block must undergo validation by network nodes before
            becoming a permanent part of the blockchain. This block-and-chain
            structure is the foundation of blockchain's transparency and
            security.
          </Text>
          <Text className="mt-[25px] text-xl font-bold">Block explorer</Text>
          <Text>
            A block explorer is a crucial tool for navigating and understanding
            blockchain networks. It acts as a user-friendly interface to inspect
            and analyze the data stored on a blockchain. With a block explorer,
            users can explore transaction histories, view account balances, and
            track the progress of individual blocks and transactions. It
            provides transparency and accountability in the world of
            decentralized cryptocurrencies, making it easier to verify and trace
            transactions while promoting trust in blockchain technology.
          </Text>
        </>
      }
      tipsResources={
        <ul className="list-inside list-disc font-nunito text-white">
          <li>
            Look for the scriptSig(Hex) category nested in coinbase input after
            expanding the transaction within the block
          </li>
          <li>
            The "xxd" command turns a file into hex and adding the "-r" tag
            reverses it allowing hex to be translated into text. The "-p" tag
            then prints it to the console allowing you to read the output.
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
                code="04ffff001d0104455468652054696d65732030332f4a616e2f32303039204368616e63656c6c6f72206f6e206272696e6b206f66207365636f6e64206261696c6f757420666f722062616e6b73"
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
                code="echo $scriptSigHex | xxd -r -p"
              />
            </div>
          )}
        </>
      }
    />
  )
}
