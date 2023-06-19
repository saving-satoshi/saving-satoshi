'use client'

import clsx from 'clsx'
import { useState, useEffect, use } from 'react'

export enum HashVariant {
  Hashes = 0,
  Percentage = 1,
  PowerButton = 2,
  HashBar = 3,
}

export default function MiningStatisticHash({
  title,
  highlight,
  disabled,
  onButtonClick,
  step,
  className,
  variant,
  fontSize,
  percentage,
  focus,
}: {
  title: String
  highlight: boolean
  disabled: string | boolean
  onButtonClick
  step: number
  variant: HashVariant
  fontSize: string
  className?: string
  percentage?: number
  focus?: boolean
}) {
  const [hasherState, setHasherState] = useState<boolean>(false)
  const [hashPower, sethashPower] = useState(0)
  const [powerUp, setPowerUp] = useState<boolean>(false)
  const [randomHash, setRandomHash] = useState(false)
  const hashRateBar = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
  ]

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
      sethashPower(currentHash)
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
        sethashPower(currentHash)
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
      setTimeout(() => {
        setHasherState(false)
      }, time)
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
    <div className="relative">
      <div
        className={`${className} mt-5 w-full rounded-[5px] border-2 border-transparent p-4 font-space-mono`}
      >
        <div
          className={clsx({
            'flex items-center justify-between':
              variant === HashVariant.PowerButton ||
              variant === HashVariant.HashBar,
          })}
        >
          <div
            className={clsx({
              'flex-initial flex-col':
                variant === HashVariant.PowerButton ||
                variant === HashVariant.HashBar,
              'flex flex-row items-center justify-between':
                variant === HashVariant.Hashes ||
                variant === HashVariant.Percentage,
            })}
          >
            <div
              className={clsx(`${fontSize} font-nunito font-bold`, {
                'text-black opacity-25': disabled === 'text-black',
                'text-white opacity-25': disabled === 'text-white',
                'fade-in text-[#EDA081]': !disabled,
              })}
            >
              {title}
            </div>
            {variant === HashVariant.Percentage && percentage && (
              <div
                className={clsx({
                  'rounded-[5px] bg-[#28B123] py-[5px] px-[7px] text-white':
                    focus,
                  'text-[#3DCFEF]': !focus,
                })}
              >
                {percentage}%
              </div>
            )}
            <div
              className={clsx('text-2xl font-normal', {
                'text-black opacity-25': disabled === 'text-black',
                'text-white opacity-25': disabled === 'text-white',
                'fade-in text-white': !disabled,
              })}
            >
              {step < 4 && (
                <span>
                  {(hashPower / 100).toFixed(2)}
                  {!disabled && (
                    <span className="fade-in text-white/50">
                      *10<sup>15</sup>
                    </span>
                  )}
                </span>
              )}
              {step >= 4 && (
                <span>
                  {(45012 / 100).toFixed(2)}
                  <span className="text-white/50">
                    *10<sup>15</sup>
                  </span>
                </span>
              )}
            </div>
          </div>

          {(variant === HashVariant.PowerButton ||
            variant === HashVariant.HashBar) && (
            <div className="order-last flex items-center justify-center text-[15px] font-bold">
              <div
                className={clsx(
                  'order-last mr-2.5 flex h-[29px] w-[44px] items-center justify-center rounded-[3px] border-2 ',
                  {
                    'pointer-events-none cursor-default border-black/25 text-black/25':
                      powerUp === false,
                    ' animate-duration-500 animate-pulse cursor-pointer border-[#FBEBC6] bg-[#FBEBC6] text-[#571A1F] shadow-[0_0px_15px_rgba(251,235,198,0.75)]':
                      powerUp === true,
                  }
                )}
                onClick={handleClick}
              >
                10x
              </div>
              <div
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
                {hasherState ? 'Running' : 'Turn on'}
              </div>
            </div>
          )}
        </div>
        {variant === HashVariant.HashBar && (
          <div className="mt-5 flex items-center justify-between">
            {hashRateBar.map((i, index) => {
              return (
                <div
                  key={index}
                  className={clsx('h-[15px] w-[5px] rounded-full bg-black/25', {
                    'fade-in !bg-[#FBEBC6]  shadow-3xl': hashPower > i * 1000,
                  })}
                ></div>
              )
            })}
          </div>
        )}
      </div>
      {highlight && (
        <div className="absolute inset-0 mt-5 animate-pulse rounded-[5px] border-2 border-[#FBEBC6] shadow-3xl"></div>
      )}
    </div>
  )
}
