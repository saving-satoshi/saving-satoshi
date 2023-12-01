'use client'

import clsx from 'clsx'
import { useState, useEffect, Dispatch, SetStateAction } from 'react'
import { Tooltip } from 'ui'

export default function Card({
  hashPower,
  startText,
  tenX,
  className,
  setHashPower,
  onButtonClick,
  step,
  mining,
  noData,
}: {
  hashPower: number
  startText: string
  className?: string
  tenX?: boolean
  setHashPower: Dispatch<SetStateAction<number>>
  onButtonClick: any
  step: number
  mining?: boolean
  noData?: boolean
}) {
  const [hasherState, setHasherState] = useState<boolean>(false)
  const [powerUp, setPowerUp] = useState<boolean>(false)
  const [randomHash, setRandomHash] = useState(false)

  function displayRandomNumbers(
    maxHash: number,
    HashStepSize: number,
    time: number
  ): void {
    let currentHash = hashPower
    const startTime = new Date().getTime()
    const endTime = startTime + time

    const intervalId = setInterval(() => {
      const currentTime = new Date().getTime()
      if (currentTime >= endTime) {
        clearInterval(intervalId)
        return
      }

      currentHash = Math.min(
        currentHash + Math.floor(Math.random() * HashStepSize),
        maxHash
      )

      currentHash -= Math.floor(Math.random() * (10 - 5 + 1) + 5)
      setHashPower(currentHash)
    }, 40)
  }

  useEffect(() => {
    let interval: NodeJS.Timeout
    let currentHash = hashPower
    if (randomHash) {
      interval = setInterval(() => {
        currentHash = Math.min(
          currentHash + Math.floor(Math.random() * 200),
          4400
        )
        currentHash -= Math.floor(Math.random() * (10 - 5 + 1) + 5)
        setHashPower(currentHash)
      }, 40)
    }
    return () => clearInterval(interval)
  }, [randomHash])

  function handleClick() {
    if (!hasherState && step === 0) {
      const time = 15 * 1000
      displayRandomNumbers(4400, 200, time)
      onButtonClick(true)
      setHasherState(true)
      if (mining) {
        setTimeout(() => {
          setHasherState(false)
        }, time)
      }
    }

    if (!hasherState && step === 2) {
      const time = 10 * 1000
      onButtonClick(true)
      setHasherState(true)
      setRandomHash(true)
      setTimeout(() => {
        setPowerUp(true)
      }, time)
    }

    if (powerUp && step === 3) {
      setRandomHash(false)
      const time = 60 * 1000
      displayRandomNumbers(45000, 3000, time)
      onButtonClick(true)
      setPowerUp(false)
    }
  }

  return (
    <div
      className={clsx(
        'order-last flex flex-wrap-reverse items-center justify-center gap-3 text-[15px] font-bold',
        className
      )}
    >
      {tenX && (
        <div
          className={clsx(
            'order-last mr-2.5 flex h-[29px] w-[44px] cursor-pointer items-center justify-center  rounded-[3px] border-2',
            {
              'border-black/25 text-black/25': powerUp === false,
              ' animate-duration-500 animate-pulse border-[#FBEBC6] bg-[#FBEBC6] text-[#571A1F] shadow-[0_0px_15px_rgba(251,235,198,0.75)]':
                powerUp === true,
            }
          )}
          onClick={handleClick}
        >
          10x
        </div>
      )}
      {noData && step === 0 && (
        <Tooltip
          id={'No data found'}
          theme={'solo-1-secondary-theme'}
          className="no-underline"
          content={
            <span>
              Oops! It looks like we couldn't find your data, let's use some
              default values instead
            </span>
          }
          children={
            <button
              className={clsx(
                'order-last flex h-[29px] w-[85px] cursor-pointer items-center justify-center rounded-[3px] border-2 ',
                {
                  invisible: hasherState,
                  'animate-duration-500 fade-in animate-pulse border-transparent bg-[#FBEBC6] text-[#571A1F] shadow-[0_0px_15px_rgba(251,235,198,0.75)] hover:shadow-[0_0px_15px_rgba(251,235,198,0.75)]':
                    !hasherState,
                }
              )}
              onClick={handleClick}
            >
              {startText}
            </button>
          }
        />
      )}
      {!noData && (
        <button
          className={clsx(
            'order-last flex h-[29px] w-[85px] cursor-pointer items-center justify-center rounded-[3px] border-2 ',
            {
              'border-transparent bg-[#FBEBC6]/25 text-[#571A1F]':
                hasherState && step < 4,
              'animate-duration-500 fade-in animate-pulse border-transparent bg-[#FBEBC6] text-[#571A1F] shadow-[0_0px_15px_rgba(251,235,198,0.75)] hover:shadow-[0_0px_15px_rgba(251,235,198,0.75)]':
                !hasherState,
              ' border-black/25 text-black/25': step >= 4,
            }
          )}
          onClick={handleClick}
        >
          {hasherState ? 'Running' : startText}
        </button>
      )}
    </div>
  )
}
