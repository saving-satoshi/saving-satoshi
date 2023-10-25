'use client'

import { useTranslations } from 'hooks'
import { useState } from 'react'

import { Text, ResourcePage, ToggleSwitch, CodeExample } from 'ui'

export default function HashingResources({ lang }) {
  const t = useTranslations(lang)

  const [challengeOneIsToggled, setChallengeOneIsToggled] = useState(false)
  const [challengeTwoIsToggled, setChallengeTwoIsToggled] = useState(false)
  const [challengeThreeIsToggled, setChallengeThreeIsToggled] = useState(false)

  const challengeOneToggleSwitch = () => {
    setChallengeOneIsToggled(!challengeOneIsToggled)
  }

  const challengeTwoToggleSwitch = () => {
    setChallengeTwoIsToggled(!challengeTwoIsToggled)
  }

  const challengeThreeToggleSwitch = () => {
    setChallengeThreeIsToggled(!challengeThreeIsToggled)
  }

  return (
    <ResourcePage
      lang={lang}
      readingResources={
        <>
          <Text className="mt-[25px] text-xl font-bold">Hash Functions</Text>
          <Text>
            A hash function is any function that can be used to map data of
            arbitrary size to fixed-size values. The values returned by a hash
            function are called hash values, hash codes, digests, or simply
            hashes. The values are usually used to index a fixed-size table
            called a hash table. Use of a hash function to index a hash table is
            called hashing or scatter storage addressing.
          </Text>
          <Text className="mt-[25px] text-xl font-bold">
            SHA256 and collision resistance
          </Text>
          <Text>
            SHA-256 returns a 256-bit (64-characters) hash value, which is a
            unique representation of the input data. It belongs to the family of
            hash functions based on the Merkle–Damgård construction, a method
            for building hash functions from simpler compression functions. In
            this construction, the input message is divided into fixed-size
            blocks, and a chaining mechanism iteratively processes these blocks,
            combining each block's output with the result of the previous block.
            This process continues until the entire message is processed,
            producing the final hash value. SHA-256's robust security properties
            and collision resistance make it a cornerstone of data integrity and
            authentication in modern cryptography. You can learn more on
            Wikipedia.
          </Text>
        </>
      }
      tipsResources={
        <ul className="list-inside list-disc font-nunito text-white">
          <li>
            Just keep typing! Because of the SHA256 algorithm any new input will
            result in a completely random input even if those inputs are very
            similar.
          </li>
          <li>
            Can you do the math? Based on 16 possible characters per digit, what
            do you think the likelihood of finding a hash starting with '00' is?
            And how about '000'?
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
              <CodeExample copy language="bash" code="00000000" />
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
              <CodeExample copy language="bash" code="popcorn" />
            </div>
          )}
          <Text>{t('help_page.solution_three')}</Text>
          <div className="flex flex-row items-center gap-2">
            <ToggleSwitch
              checked={challengeThreeIsToggled}
              onChange={challengeThreeToggleSwitch}
            />
            <Text>{t('help_page.spoilers_confirm')}</Text>
          </div>
          {challengeThreeIsToggled && (
            <div className="text-white">
              <CodeExample copy language="bash" code="trigonometry" />
            </div>
          )}
        </>
      }
    />
  )
}
