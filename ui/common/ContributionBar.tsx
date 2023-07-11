'use client'

import Image from 'next/image'

interface ContributionInfo {
  username: string
  avatar: string
  color: string
  percentage: number
  side: number
}

interface ContributionInfoProps {
  contributionInfo: ContributionInfo[]
}

export default function ContributionBar({
  contributionInfo,
}: ContributionInfoProps) {
  let value = 0
  return (
    <div className="relative h-[30px] w-full rounded-[5px] bg-black/20">
      <div className="absolute z-50 flex h-full w-1/2 border-r-2 border-dotted border-white/50"></div>
      {contributionInfo.map((info, i) => {
        value += info.percentage
        return (
          <>
            <div className="absolute h-full w-full overflow-hidden rounded-[5px]">
              <div
                className={`absolute inset-0 flex transform-gpu border-r-2 border-black transition-transform`}
                style={{
                  transform: `translate3d(${
                    info.side === 0 ? 100 - info.percentage : -(100 - value)
                  }%,0,0)`,
                  backgroundColor: `#${info.color}`,
                  zIndex: (contributionInfo.length - i) * 10,
                }}
              />
            </div>
            <div
              className="absolute inset-0 z-50 flex transform-gpu items-center justify-center transition-transform"
              style={{
                transform: `translate3d(${
                  info.side === 0
                    ? (100 - info.percentage) / 2
                    : -(
                        (100 -
                          (value - info.percentage + info.percentage / 2) * 2) /
                        2
                      )
                }%,0,0)`,
              }}
            >
              <div className="h-6 w-6 rounded-full">
                <Image
                  src={`/assets/avatars/${info.avatar}.png`}
                  alt="Avatar"
                  width={22}
                  height={22}
                  className="rounded-full border-2 border-white"
                />
              </div>
            </div>
          </>
        )
      })}
    </div>
  )
}
