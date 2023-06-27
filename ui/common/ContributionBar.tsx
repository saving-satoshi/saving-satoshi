'use client'

import Image from 'next/image'

interface ContributionInfo {
  username: string
  avatar: string
  color: string
  percentage: number
  side: number
  zindex: string
}

interface ContributionInfoProps {
  contributionInfo: ContributionInfo[]
}

export default function ContributionBar({
  contributionInfo,
}: ContributionInfoProps) {
  return (
    <div className="relative h-[30px] w-full rounded-[5px] bg-black/20">
      <div className="absolute flex h-full w-1/2 border-r-2 border-dashed border-white/50"></div>
      {contributionInfo.map((info, i) => {
        return (
          <>
            <div
              className={`absolute pl-${info.zindex} z-${info.zindex} h-full w-full overflow-hidden rounded-[5px]`}
            >
              <div
                className={`absolute z-${info.zindex} inset-0 flex transform-gpu transition-transform`}
                style={{
                  transform: `translate3d(${
                    info.side === 0
                      ? 100 - info.percentage
                      : -(100 - info.percentage)
                  }%,0,0)`,
                  backgroundColor: `#${info.color}`,
                }}
              />
            </div>
            <div
              className="absolute inset-0 z-50 flex transform-gpu items-center justify-center transition-transform"
              style={{
                transform: `translate3d(${
                  info.side === 0
                    ? (100 - info.percentage) / 2
                    : -((100 - info.percentage) / 2)
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
