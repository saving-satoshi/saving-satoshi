'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Icon from 'shared/Icon'

export default function ContributionBar({ total, protagonists, antagonists }) {
  const elementRef = useRef<HTMLDivElement>(null)

  return (
    <div
      className="relative h-[30px] w-full overflow-hidden rounded-[5px] bg-black/20"
      ref={elementRef}
    >
      <div className="pointer-events-none absolute z-50 flex h-full w-1/2 border-r-2 border-dotted border-white/50"></div>
      <div className="relative flex h-full w-full">
        {protagonists.map((player, i) => {
          const predecessors = protagonists.slice(0, i)
          const cumulativeValue = predecessors.reduce(
            (acc, p) => acc + p.value,
            0
          )

          const scale = player.value / total
          const translation = cumulativeValue + '%'

          return (
            <div
              key={i}
              className="absolute h-full w-full"
              style={{ transform: `translateX(${translation})` }}
            >
              <div
                key={i}
                className="flex h-full w-full origin-left items-center justify-center"
                style={{
                  transform: `scaleX(${scale})`,
                  background: player.color,
                }}
              >
                <div
                  style={{ transform: `scaleX(${1 / scale})` }}
                  className={`aspect-square h-[26px] overflow-hidden rounded-full ${
                    player.avatar ? 'border-2 border-white' : ''
                  }`}
                >
                  {player.avatar && (
                    <Image
                      width={30}
                      height={30}
                      alt={player.username}
                      src={player.avatar}
                      className="h-full w-full object-cover"
                    />
                  )}
                  {!player.avatar && (
                    <Icon icon="avatar" className="text-white" />
                  )}
                </div>
              </div>
            </div>
          )
        })}

        {antagonists.map((player, i) => {
          const predecessors = antagonists.slice(0, i)
          const cumulativeValue = predecessors.reduce(
            (acc, p) => acc + p.value,
            0
          )

          const scale = player.value / total
          const translation = cumulativeValue + '%'

          return (
            <div
              key={i}
              className="absolute h-full w-full"
              style={{ transform: `translateX(${translation})` }}
            >
              <div
                key={i}
                className="flex h-full w-full origin-right items-center justify-center"
                style={{
                  transform: `scaleX(${scale})`,
                  background: player.color,
                }}
              >
                <div
                  style={{ transform: `scaleX(${1 / scale})` }}
                  className="aspect-square h-[26px] overflow-hidden rounded-full border-2 border-white"
                >
                  <Image
                    width={30}
                    height={30}
                    alt={player.username}
                    src={player.avatar}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
