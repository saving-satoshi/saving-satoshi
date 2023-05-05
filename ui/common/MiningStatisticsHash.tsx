'use client'

import clsx from 'clsx'
import { useState } from 'react'

export default function MiningStatisticHash({
  title,
  highlight,
  disabled,
  onButtonClick,
  step,
}: {
  title: String
  highlight: boolean
  disabled: boolean
  onButtonClick
  step: number
}) {
  const [hasherState, setHasherState] = useState<boolean>(false)
  const [hashPower, sethashPower] = useState(0)
  const [powerUp, setPowerUp] = useState<boolean>(false)

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

  function handleClick() {
    if (!hasherState && step === 0) {
      const time = 1 * 60 * 1000
      displayRandomNumbers(4400, 200, time)
      onButtonClick(true)
      setHasherState(true)
      setTimeout(() => {
        setHasherState(false)
      }, time)
    }

    if (!hasherState && step === 2) {
      const time = 1 * 30 * 1000
      displayRandomNumbers(4400, 200, time)
      onButtonClick(true)
      setHasherState(true)
      setTimeout(() => {
        setPowerUp(true)
      }, time)
    }

    if (powerUp && step === 3) {
      const time = 1 * 60 * 1000
      displayRandomNumbers(45000, 3000, time)
      onButtonClick(true)
      setPowerUp(false)
    }
  }

  return (
    <div
      className={clsx(
        'mt-5  w-full rounded-[5px] border-2 border-transparent bg-black/15 p-4 font-space-mono',
        {
          'border-2 border-[#FBEBC6] shadow-[0_0px_8px_rgba(251,235,198,0.5)]':
            highlight === true,
        }
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex-initial">
          <div
            className={clsx('text-base font-bold', {
              'text-black/25': disabled,
              'text-[#EDA081]': !disabled,
            })}
          >
            {title}
          </div>
          <div
            className={clsx('text-2xl font-normal', {
              'text-black/25': disabled,
              'text-white': !disabled,
            })}
          >
            {step < 4 && (
              <span>
                {(hashPower / 100).toFixed(2)}
                {!disabled && (
                  <span className="text-white/50">
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

        <div className="order-last flex items-center justify-center font-bold">
          <div
            className={clsx(
              'order-last mr-2.5 flex cursor-pointer items-center justify-center rounded-[3px] border-2  px-2 py-[5px] ',
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
          <div
            className={clsx(
              'order-last flex cursor-pointer items-center justify-center rounded-[3px] border-2 px-2 py-[5px] ',
              {
                'border-transparent bg-[#FBEBC6]/25 text-[#571A1F]':
                  hasherState && step < 4,
                'border-transparent bg-[#FBEBC6] text-[#571A1F] hover:shadow-[0_0px_15px_rgba(251,235,198,0.75)] ':
                  !hasherState,
                ' border-black/25 text-black/25': step >= 4,
              }
            )}
            onClick={handleClick}
          >
            {hasherState ? 'Running' : 'Turn on'}
          </div>
        </div>
      </div>
      <div className="mt-5 flex items-center justify-between">
        <div
          className={clsx('h-[15px] w-[5px] rounded-full bg-black/25', {
            '!bg-[#FBEBC6] shadow-[0_0px_8px_rgba(251,235,198,0.5)]':
              hashPower > 1000,
          })}
        ></div>
        <div
          className={clsx('h-[15px] w-[5px] rounded-full bg-black/25', {
            '!bg-[#FBEBC6] shadow-[0_0px_8px_rgba(251,235,198,0.5)]':
              hashPower > 2000,
          })}
        ></div>
        <div
          className={clsx('h-[15px] w-[5px] rounded-full bg-black/25', {
            '!bg-[#FBEBC6] shadow-[0_0px_8px_rgba(251,235,198,0.5)]':
              hashPower > 3000,
          })}
        ></div>
        <div
          className={clsx('h-[15px] w-[5px] rounded-full bg-black/25', {
            '!bg-[#FBEBC6] shadow-[0_0px_8px_rgba(251,235,198,0.5)]':
              hashPower > 4000,
          })}
        ></div>
        <div
          className={clsx('h-[15px] w-[5px] rounded-full bg-black/25', {
            '!bg-[#FBEBC6] shadow-[0_0px_8px_rgba(251,235,198,0.5)]':
              hashPower > 5000,
          })}
        ></div>
        <div
          className={clsx('h-[15px] w-[5px] rounded-full bg-black/25', {
            '!bg-[#FBEBC6] shadow-[0_0px_8px_rgba(251,235,198,0.5)]':
              hashPower > 6000,
          })}
        ></div>
        <div
          className={clsx('h-[15px] w-[5px] rounded-full bg-black/25', {
            '!bg-[#FBEBC6] shadow-[0_0px_8px_rgba(251,235,198,0.5)]':
              hashPower > 7000,
          })}
        ></div>
        <div
          className={clsx('h-[15px] w-[5px] rounded-full bg-black/25', {
            '!bg-[#FBEBC6] shadow-[0_0px_8px_rgba(251,235,198,0.5)]':
              hashPower > 8000,
          })}
        ></div>
        <div
          className={clsx('h-[15px] w-[5px] rounded-full bg-black/25', {
            '!bg-[#FBEBC6] shadow-[0_0px_8px_rgba(251,235,198,0.5)]':
              hashPower > 9000,
          })}
        ></div>
        <div
          className={clsx('h-[15px] w-[5px] rounded-full bg-black/25', {
            '!bg-[#FBEBC6] shadow-[0_0px_8px_rgba(251,235,198,0.5)]':
              hashPower > 10000,
          })}
        ></div>
        <div
          className={clsx('h-[15px] w-[5px] rounded-full bg-black/25', {
            '!bg-[#FBEBC6] shadow-[0_0px_8px_rgba(251,235,198,0.5)]':
              hashPower > 11000,
          })}
        ></div>
        <div
          className={clsx('h-[15px] w-[5px] rounded-full bg-black/25', {
            '!bg-[#FBEBC6] shadow-[0_0px_8px_rgba(251,235,198,0.5)]':
              hashPower > 12000,
          })}
        ></div>
        <div
          className={clsx('h-[15px] w-[5px] rounded-full bg-black/25', {
            '!bg-[#FBEBC6] shadow-[0_0px_8px_rgba(251,235,198,0.5)]':
              hashPower > 13000,
          })}
        ></div>
        <div
          className={clsx('h-[15px] w-[5px] rounded-full bg-black/25', {
            '!bg-[#FBEBC6] shadow-[0_0px_8px_rgba(251,235,198,0.5)]':
              hashPower > 14000,
          })}
        ></div>
        <div
          className={clsx('h-[15px] w-[5px] rounded-full bg-black/25', {
            '!bg-[#FBEBC6] shadow-[0_0px_8px_rgba(251,235,198,0.5)]':
              hashPower > 15000,
          })}
        ></div>
        <div
          className={clsx('h-[15px] w-[5px] rounded-full bg-black/25', {
            '!bg-[#FBEBC6] shadow-[0_0px_8px_rgba(251,235,198,0.5)]':
              hashPower > 16000,
          })}
        ></div>
        <div
          className={clsx('h-[15px] w-[5px] rounded-full bg-black/25', {
            '!bg-[#FBEBC6] shadow-[0_0px_8px_rgba(251,235,198,0.5)]':
              hashPower > 17000,
          })}
        ></div>
        <div
          className={clsx('h-[15px] w-[5px] rounded-full bg-black/25', {
            '!bg-[#FBEBC6] shadow-[0_0px_8px_rgba(251,235,198,0.5)]':
              hashPower > 18000,
          })}
        ></div>
        <div
          className={clsx('h-[15px] w-[5px] rounded-full bg-black/25', {
            '!bg-[#FBEBC6] shadow-[0_0px_8px_rgba(251,235,198,0.5)]':
              hashPower > 19000,
          })}
        ></div>
        <div
          className={clsx('h-[15px] w-[5px] rounded-full bg-black/25', {
            '!bg-[#FBEBC6] shadow-[0_0px_8px_rgba(251,235,198,0.5)]':
              hashPower > 20000,
          })}
        ></div>
        <div
          className={clsx('h-[15px] w-[5px] rounded-full bg-black/25', {
            '!bg-[#FBEBC6] shadow-[0_0px_8px_rgba(251,235,198,0.5)]':
              hashPower > 21000,
          })}
        ></div>
        <div
          className={clsx('h-[15px] w-[5px] rounded-full bg-black/25', {
            '!bg-[#FBEBC6] shadow-[0_0px_8px_rgba(251,235,198,0.5)]':
              hashPower > 22000,
          })}
        ></div>
        <div
          className={clsx('h-[15px] w-[5px] rounded-full bg-black/25', {
            '!bg-[#FBEBC6] shadow-[0_0px_8px_rgba(251,235,198,0.5)]':
              hashPower > 23000,
          })}
        ></div>
        <div
          className={clsx('h-[15px] w-[5px] rounded-full bg-black/25', {
            '!bg-[#FBEBC6] shadow-[0_0px_8px_rgba(251,235,198,0.5)]':
              hashPower > 24000,
          })}
        ></div>
        <div
          className={clsx('h-[15px] w-[5px] rounded-full bg-black/25', {
            '!bg-[#FBEBC6] shadow-[0_0px_8px_rgba(251,235,198,0.5)]':
              hashPower > 25000,
          })}
        ></div>
        <div
          className={clsx('h-[15px] w-[5px] rounded-full bg-black/25', {
            '!bg-[#FBEBC6] shadow-[0_0px_8px_rgba(251,235,198,0.5)]':
              hashPower > 26000,
          })}
        ></div>
        <div
          className={clsx('h-[15px] w-[5px] rounded-full bg-black/25', {
            '!bg-[#FBEBC6] shadow-[0_0px_8px_rgba(251,235,198,0.5)]':
              hashPower > 27000,
          })}
        ></div>
        <div
          className={clsx('h-[15px] w-[5px] rounded-full bg-black/25', {
            '!bg-[#FBEBC6] shadow-[0_0px_8px_rgba(251,235,198,0.5)]':
              hashPower > 28000,
          })}
        ></div>
        <div
          className={clsx('h-[15px] w-[5px] rounded-full bg-black/25', {
            '!bg-[#FBEBC6] shadow-[0_0px_8px_rgba(251,235,198,0.5)]':
              hashPower > 29000,
          })}
        ></div>
        <div
          className={clsx('h-[15px] w-[5px] rounded-full bg-black/25', {
            '!bg-[#FBEBC6] shadow-[0_0px_8px_rgba(251,235,198,0.5)]':
              hashPower > 30000,
          })}
        ></div>
        <div
          className={clsx('h-[15px] w-[5px] rounded-full bg-black/25', {
            '!bg-[#FBEBC6] shadow-[0_0px_8px_rgba(251,235,198,0.5)]':
              hashPower > 31000,
          })}
        ></div>
        <div
          className={clsx('h-[15px] w-[5px] rounded-full bg-black/25', {
            '!bg-[#FBEBC6] shadow-[0_0px_8px_rgba(251,235,198,0.5)]':
              hashPower > 32000,
          })}
        ></div>
        <div
          className={clsx('h-[15px] w-[5px] rounded-full bg-black/25', {
            '!bg-[#FBEBC6] shadow-[0_0px_8px_rgba(251,235,198,0.5)]':
              hashPower > 33000,
          })}
        ></div>
        <div
          className={clsx('h-[15px] w-[5px] rounded-full bg-black/25', {
            '!bg-[#FBEBC6] shadow-[0_0px_8px_rgba(251,235,198,0.5)]':
              hashPower > 34000,
          })}
        ></div>
        <div
          className={clsx('h-[15px] w-[5px] rounded-full bg-black/25', {
            '!bg-[#FBEBC6] shadow-[0_0px_8px_rgba(251,235,198,0.5)]':
              hashPower > 35000,
          })}
        ></div>
        <div
          className={clsx('h-[15px] w-[5px] rounded-full bg-black/25', {
            '!bg-[#FBEBC6] shadow-[0_0px_8px_rgba(251,235,198,0.5)]':
              hashPower > 36000,
          })}
        ></div>
        <div
          className={clsx('h-[15px] w-[5px] rounded-full bg-black/25', {
            '!bg-[#FBEBC6] shadow-[0_0px_8px_rgba(251,235,198,0.5)]':
              hashPower > 37000,
          })}
        ></div>
        <div
          className={clsx('h-[15px] w-[5px] rounded-full bg-black/25', {
            '!bg-[#FBEBC6] shadow-[0_0px_8px_rgba(251,235,198,0.5)]':
              hashPower > 38000,
          })}
        ></div>
        <div
          className={clsx('h-[15px] w-[5px] rounded-full bg-black/25', {
            '!bg-[#FBEBC6] shadow-[0_0px_8px_rgba(251,235,198,0.5)]':
              hashPower > 39000,
          })}
        ></div>
        <div
          className={clsx('h-[15px] w-[5px] rounded-full bg-black/25', {
            '!bg-[#FBEBC6] shadow-[0_0px_8px_rgba(251,235,198,0.5)]':
              hashPower > 40000,
          })}
        ></div>
      </div>
    </div>
  )
}
