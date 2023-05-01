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
  const [hashPower, setHashPower] = useState(0)
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

      currentHash -= Math.floor(Math.random() * (100 - 50 + 1) + 50)
      setHashPower(currentHash)
    }, 40)
  }

  function handleClick() {
    if (!hasherState && step === 0) {
      const time = 1 * 60 * 1000
      displayRandomNumbers(44000, 2000, time)
      onButtonClick(true)
      setHasherState(true)
      setTimeout(() => {
        setHasherState(false)
      }, time)
    }

    if (!hasherState && step === 2) {
      const time = 1 * 30 * 1000
      displayRandomNumbers(44000, 2000, time)
      onButtonClick(true)
      setHasherState(true)
      setTimeout(() => {
        setPowerUp(true)
      }, time)
    }

    if (powerUp && step === 3) {
      const time = 1 * 60 * 1000
      displayRandomNumbers(450000, 30000, time)
      onButtonClick(true)
      setPowerUp(false)
    }
  }

  return (
    <div
      className={clsx(
        'mt-5  w-full  rounded-[5px] bg-black/15 p-4 font-space-mono',
        {
          'border-2 border-[#FBEBC6] drop-shadow-2xl': highlight === true,
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
            {step < 4 && <span>{Intl.NumberFormat().format(hashPower)}</span>}
            {step >= 4 && <span>{Intl.NumberFormat().format(450121)}</span>}
          </div>
        </div>

        <div className="order-last flex items-center justify-center font-bold">
          <div
            className={clsx(
              'order-last mr-2.5 flex cursor-pointer items-center justify-center rounded-[3px] border-2  px-2 py-[5px] ',
              {
                'border-black/25 text-black/25': powerUp === false,
                'border-white text-white': powerUp === true,
              }
            )}
            onClick={handleClick}
          >
            10x
          </div>
          <div
            className={clsx(
              'order-last flex cursor-pointer items-center justify-center rounded-[3px] px-2.5 py-[7px] text-[#571A1F]',
              {
                'bg-[#FBEBC6]/25': hasherState,
                'bg-[#FBEBC6]': !hasherState,
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
            'bg-[#FBEBC6]': hashPower > 10000,
          })}
        ></div>
        <div
          className={clsx('h-[15px] w-[5px] rounded-full bg-black/25', {
            'bg-[#FBEBC6]': hashPower > 20000,
          })}
        ></div>
        <div
          className={clsx('h-[15px] w-[5px] rounded-full bg-black/25', {
            'bg-[#FBEBC6]': hashPower > 30000,
          })}
        ></div>
        <div
          className={clsx('h-[15px] w-[5px] rounded-full bg-black/25', {
            'bg-[#FBEBC6]': hashPower > 40000,
          })}
        ></div>
        <div
          className={clsx('h-[15px] w-[5px] rounded-full bg-black/25', {
            'bg-[#FBEBC6]': hashPower > 50000,
          })}
        ></div>
        <div
          className={clsx('h-[15px] w-[5px] rounded-full bg-black/25', {
            'bg-[#FBEBC6]': hashPower > 60000,
          })}
        ></div>
        <div
          className={clsx('h-[15px] w-[5px] rounded-full bg-black/25', {
            'bg-[#FBEBC6]': hashPower > 70000,
          })}
        ></div>
        <div
          className={clsx('h-[15px] w-[5px] rounded-full bg-black/25', {
            'bg-[#FBEBC6]': hashPower > 80000,
          })}
        ></div>
        <div
          className={clsx('h-[15px] w-[5px] rounded-full bg-black/25', {
            'bg-[#FBEBC6]': hashPower > 90000,
          })}
        ></div>
        <div
          className={clsx('h-[15px] w-[5px] rounded-full bg-black/25', {
            'bg-[#FBEBC6]': hashPower > 100000,
          })}
        ></div>
        <div
          className={clsx('h-[15px] w-[5px] rounded-full bg-black/25', {
            'bg-[#FBEBC6]': hashPower > 110000,
          })}
        ></div>
        <div
          className={clsx('h-[15px] w-[5px] rounded-full bg-black/25', {
            'bg-[#FBEBC6]': hashPower > 120000,
          })}
        ></div>
        <div
          className={clsx('h-[15px] w-[5px] rounded-full bg-black/25', {
            'bg-[#FBEBC6]': hashPower > 130000,
          })}
        ></div>
        <div
          className={clsx('h-[15px] w-[5px] rounded-full bg-black/25', {
            'bg-[#FBEBC6]': hashPower > 140000,
          })}
        ></div>
        <div
          className={clsx('h-[15px] w-[5px] rounded-full bg-black/25', {
            'bg-[#FBEBC6]': hashPower > 150000,
          })}
        ></div>
        <div
          className={clsx('h-[15px] w-[5px] rounded-full bg-black/25', {
            'bg-[#FBEBC6]': hashPower > 160000,
          })}
        ></div>
        <div
          className={clsx('h-[15px] w-[5px] rounded-full bg-black/25', {
            'bg-[#FBEBC6]': hashPower > 170000,
          })}
        ></div>
        <div
          className={clsx('h-[15px] w-[5px] rounded-full bg-black/25', {
            'bg-[#FBEBC6]': hashPower > 180000,
          })}
        ></div>
        <div
          className={clsx('h-[15px] w-[5px] rounded-full bg-black/25', {
            'bg-[#FBEBC6]': hashPower > 190000,
          })}
        ></div>
        <div
          className={clsx('h-[15px] w-[5px] rounded-full bg-black/25', {
            'bg-[#FBEBC6]': hashPower > 200000,
          })}
        ></div>
        <div
          className={clsx('h-[15px] w-[5px] rounded-full bg-black/25', {
            'bg-[#FBEBC6]': hashPower > 210000,
          })}
        ></div>
        <div
          className={clsx('h-[15px] w-[5px] rounded-full bg-black/25', {
            'bg-[#FBEBC6]': hashPower > 220000,
          })}
        ></div>
        <div
          className={clsx('h-[15px] w-[5px] rounded-full bg-black/25', {
            'bg-[#FBEBC6]': hashPower > 230000,
          })}
        ></div>
        <div
          className={clsx('h-[15px] w-[5px] rounded-full bg-black/25', {
            'bg-[#FBEBC6]': hashPower > 240000,
          })}
        ></div>
        <div
          className={clsx('h-[15px] w-[5px] rounded-full bg-black/25', {
            'bg-[#FBEBC6]': hashPower > 250000,
          })}
        ></div>
        <div
          className={clsx('h-[15px] w-[5px] rounded-full bg-black/25', {
            'bg-[#FBEBC6]': hashPower > 260000,
          })}
        ></div>
        <div
          className={clsx('h-[15px] w-[5px] rounded-full bg-black/25', {
            'bg-[#FBEBC6]': hashPower > 270000,
          })}
        ></div>
        <div
          className={clsx('h-[15px] w-[5px] rounded-full bg-black/25', {
            'bg-[#FBEBC6]': hashPower > 280000,
          })}
        ></div>
        <div
          className={clsx('h-[15px] w-[5px] rounded-full bg-black/25', {
            'bg-[#FBEBC6]': hashPower > 290000,
          })}
        ></div>
        <div
          className={clsx('h-[15px] w-[5px] rounded-full bg-black/25', {
            'bg-[#FBEBC6]': hashPower > 300000,
          })}
        ></div>
        <div
          className={clsx('h-[15px] w-[5px] rounded-full bg-black/25', {
            'bg-[#FBEBC6]': hashPower > 310000,
          })}
        ></div>
        <div
          className={clsx('h-[15px] w-[5px] rounded-full bg-black/25', {
            'bg-[#FBEBC6]': hashPower > 320000,
          })}
        ></div>
        <div
          className={clsx('h-[15px] w-[5px] rounded-full bg-black/25', {
            'bg-[#FBEBC6]': hashPower > 330000,
          })}
        ></div>
        <div
          className={clsx('h-[15px] w-[5px] rounded-full bg-black/25', {
            'bg-[#FBEBC6]': hashPower > 340000,
          })}
        ></div>
        <div
          className={clsx('h-[15px] w-[5px] rounded-full bg-black/25', {
            'bg-[#FBEBC6]': hashPower > 350000,
          })}
        ></div>
        <div
          className={clsx('h-[15px] w-[5px] rounded-full bg-black/25', {
            'bg-[#FBEBC6]': hashPower > 360000,
          })}
        ></div>
        <div
          className={clsx('h-[15px] w-[5px] rounded-full bg-black/25', {
            'bg-[#FBEBC6]': hashPower > 370000,
          })}
        ></div>
        <div
          className={clsx('h-[15px] w-[5px] rounded-full bg-black/25', {
            'bg-[#FBEBC6]': hashPower > 380000,
          })}
        ></div>
        <div
          className={clsx('h-[15px] w-[5px] rounded-full bg-black/25', {
            'bg-[#FBEBC6]': hashPower > 390000,
          })}
        ></div>
        <div
          className={clsx('h-[15px] w-[5px] rounded-full bg-black/25', {
            'bg-[#FBEBC6]': hashPower > 400000,
          })}
        ></div>
      </div>
    </div>
  )
}
