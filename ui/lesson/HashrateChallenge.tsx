'use client'

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
  profileContainerClassName,
  contributionBarOpacity,
  onStepUpdate,
  onProtagonistUpdate,
  onAntagonistUpdate,
  speed,
  noData,
}: {
  children: any
  profiles: any
  verticalProfiles?: boolean
  step: number
  contributionBarOpacity?: string
  onStepUpdate: (newStep: number) => void
  onProtagonistUpdate: (newBlock: number) => void
  onAntagonistUpdate: (newBlock: number) => void
  totalBlocks: number
  blockRatio: number
  protagonists: any
  antagonists: any
  speed?: number
  noData?: boolean
  profileContainerClassName?: string
}) {
  const [finalMining, setFinalMining] = useState(false)
  const [hashPower, setHashPower] = useState(0)
  const [state, setState] = useState(0)

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
    let protagonistInterval: NodeJS.Timeout
    let antagonistInterval: NodeJS.Timeout
    let protagonistBlock = 0
    let antagonistBlock = 0

    if (finalMining) {
      protagonistInterval = setInterval(() => {
        protagonistBlock = protagonistBlock + Math.floor(Math.random() * 2)
        handleProtagonistBlocks(protagonistBlock)
      }, (totalBlocks - blockRatio) * (speed || 5))

      antagonistInterval = setInterval(() => {
        antagonistBlock = antagonistBlock + Math.floor(Math.random() * 2)
        handleAntagonistBlocks(antagonistBlock)
      }, blockRatio * ((speed && speed + 0.25) || 5))
    }
    return () => {
      clearInterval(protagonistInterval)
      clearInterval(antagonistInterval)
    }
  }, [finalMining, totalBlocks, blockRatio])

  useEffect(() => {
    if (protagonistsTotal + antagonistsTotal >= totalBlocks) {
      handleStep(2)
      setFinalMining(false)
      setState(2)
    }
  }, [protagonistsTotal, antagonistsTotal, totalBlocks])

  const turnOnButton = async () => {
    if (step === 0) {
      handleStep(1)
      setFinalMining(true)
      await sleep(500)
      setState(1)
    }
  }

  return (
    <>
      <ProfilesContainer
        profiles={profiles}
        verticalProfiles={verticalProfiles}
        className={profileContainerClassName || ''}
      >
        <div className="flex max-h-[69px] w-full max-w-[800px] flex-col gap-[10px] pr-[15px] text-white md:pr-[20px]">
          <div className="flex items-center justify-between gap-[10px] self-stretch">
            <span
              className={clsx(
                'my-[2px] h-[25px] min-w-[75px] text-left font-space-mono text-[18px] font-semibold text-white',
                {
                  'opacity-25': protagonistsTotal === 0,
                }
              )}
            >
              {protagonistsTotal} <span className="font-nunito">blocks</span>
            </span>
            {step < 2 && (
              <div>
                <StartButton
                  noData={noData}
                  startText="Start"
                  className="font-space-mono"
                  hashPower={hashPower}
                  setHashPower={setHashPower}
                  step={step}
                  onButtonClick={turnOnButton}
                />
              </div>
            )}

            <span
              className={clsx(
                'my-[2px] h-[25px] min-w-[75px] text-right font-space-mono text-[18px] font-semibold text-white',
                {
                  'opacity-25': antagonistsTotal === 0,
                }
              )}
            >
              {antagonistsTotal} <span className="font-nunito">blocks</span>
            </span>
          </div>
          <ContributionBar
            active={state !== 0}
            step={step}
            total={totalBlocks}
            protagonists={protagonists}
            antagonists={antagonists}
            opacity={step !== 0 ? contributionBarOpacity : ''}
          />
        </div>
      </ProfilesContainer>
      {children}
    </>
  )
}
