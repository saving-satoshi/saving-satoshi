'use client'

import { SetStateAction, Dispatch } from 'react'
import { clsx } from 'clsx'
import { ProfilesContainer, StartButton, ContributionBar } from 'ui'

export const metadata = {
  title: 'chapter_two.mining_one.title',
  key: 'CH2MIN1',
}

export default function HashrateChallenge({
  profiles,
  children,
  verticalProfiles,
  blocks1,
  blocks2,
  hashPower,
  totalBlocks,
  protagonists,
  antagonists,
  setHashPower,
  step,
  turnOnButton,
}: {
  children: any
  profiles: any
  verticalProfiles?: boolean
  blocks1: number
  blocks2: number
  hashPower: number
  step: number
  totalBlocks: number
  protagonists: any
  antagonists: any
  setHashPower: Dispatch<SetStateAction<number>>
  turnOnButton: () => void
}) {
  return (
    <>
      <ProfilesContainer
        profiles={profiles}
        verticalProfiles={verticalProfiles}
      >
        <div className="flex h-full max-h-[69px] w-full max-w-[800px] flex-col gap-[10px] text-white">
          <div className="flex items-center justify-between gap-[10px] self-stretch">
            <span
              className={clsx(
                'my-[2px] h-[25px] min-w-[100px] text-left font-nunito text-[18px] font-semibold text-white',
                {
                  'opacity-25': blocks1 === 0,
                }
              )}
            >
              {blocks1} blocks
            </span>
            <div>
              {step < 2 && (
                <StartButton
                  startText="Start"
                  className="font-space-mono"
                  hashPower={hashPower}
                  setHashPower={setHashPower}
                  step={step}
                  onButtonClick={turnOnButton}
                />
              )}
            </div>
            <span
              className={clsx(
                'my-[2px] h-[25px] min-w-[100px] text-right font-nunito text-[18px] font-semibold text-white',
                {
                  'opacity-25': blocks2 === 0,
                }
              )}
            >
              {blocks2} blocks
            </span>
          </div>
          <ContributionBar
            total={totalBlocks}
            protagonists={protagonists}
            antagonists={antagonists}
          />
        </div>
      </ProfilesContainer>
      {children}
    </>
  )
}
