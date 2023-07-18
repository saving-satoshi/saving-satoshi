'use client'

import { SetStateAction, Dispatch } from 'react'
import React from 'react'
import { clsx } from 'clsx'
import { sleep } from 'utils'
import { ProfilesContainer, StartButton, ContributionBar } from 'ui'
import { useEffect, useState } from 'react'

export const metadata = {
  title: 'chapter_two.mining_one.title',
  key: 'CH2MIN1',
}

export default function HashrateChallenge({
  profiles,
  children,
  verticalProfiles,
  totalBlocks,
  blockRatio,
  protagonists,
  antagonists,
  step,
  onStepUpdate,
  onProtagonistUpdate,
  onAntagonistUpdate,
}: {
  children: any
  profiles: any
  verticalProfiles?: boolean
  step: number
  onStepUpdate: (newStep: number) => void
  onProtagonistUpdate: (newBlock: number) => void
  onAntagonistUpdate: (newBlock: number) => void
  totalBlocks: number
  blockRatio: number
  protagonists: any
  antagonists: any
}) {
  const [finalMining, setFinalMining] = useState(false)
  const [hashPower, setHashPower] = useState(0)

  const handleStep = (num) => {
    onStepUpdate((step = num))
  }

  const handleProtagonistBlocks = (num) => {
    onProtagonistUpdate((protagonistsTotal = num))
  }

  const handleAntagonistBlocks = (num) => {
    onAntagonistUpdate((antagonistsTotal = num))
  }

  let protagonistsTotal = 0
  protagonists.forEach((item) => {
    protagonistsTotal += item.value
  })

  let antagonistsTotal = 0
  antagonists.forEach((item) => {
    antagonistsTotal += item.value
  })

  useEffect(() => {
    let interval: NodeJS.Timeout
    let protagonistBlock = 0
    if (finalMining) {
      interval = setInterval(() => {
        protagonistBlock = Math.min(
          protagonistBlock + Math.floor(Math.random() * 2),
          blockRatio
        )
        handleProtagonistBlocks(protagonistBlock)
      }, (totalBlocks - blockRatio) * 3)
    }
    return () => clearInterval(interval)
  }, [finalMining])

  useEffect(() => {
    let interval: NodeJS.Timeout
    let antagonistBlock = 0
    if (finalMining) {
      interval = setInterval(() => {
        antagonistBlock = Math.min(
          antagonistBlock + Math.floor(Math.random() * 2),
          totalBlocks - blockRatio + 5
        )
        handleAntagonistBlocks(antagonistBlock)
      }, blockRatio * 3)
    }
    return () => clearInterval(interval)
  }, [finalMining])

  useEffect(() => {
    if (protagonistsTotal + antagonistsTotal === totalBlocks) {
      handleStep(2)
      setFinalMining(false)
    }
  }, [protagonistsTotal, antagonistsTotal, totalBlocks])

  const turnOnButton = async () => {
    if (step === 0) {
      await sleep(100)
      handleStep(1)
      setFinalMining(true)
    }
  }

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
                  'opacity-25': protagonistsTotal === 0,
                }
              )}
            >
              {protagonistsTotal} blocks
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
                  'opacity-25': antagonistsTotal === 0,
                }
              )}
            >
              {antagonistsTotal} blocks
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
