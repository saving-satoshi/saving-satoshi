'use client'

import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'

const TRANSITION = `transform 300ms linear`

export default function ContributionBar({ total, protagonists, antagonists }) {
  const elementRef = useRef(null)
  const [protagonistOffsets, setProtagonistOffsets] = useState(
    protagonists.map(() => ({
      offset: 0,
      translation: 0,
    }))
  )
  const [antagonistOffsets, setAntagonistOffsets] = useState(
    antagonists.map(() => ({
      offset: 0,
      translation: 0,
    }))
  )

  const updateAvatarPositions = () => {
    if (!elementRef.current) {
      return
    }

    const elRef = elementRef.current as HTMLElement
    const elementWidth = elRef.getBoundingClientRect().width

    const calculateOffset = (value: number, index: number, flip?: boolean) => {
      const scale = value / total
      const totalWidth = Math.ceil(elementWidth * scale)
      const result = Math.ceil(totalWidth / 2 - 13)
      const positionOffset = totalWidth * index
      return flip ? result * -1 : result + positionOffset
    }

    const calculateTranslation = (
      value: number,
      index: number,
      flip?: boolean
    ) => {
      const scale = value / total
      const totalWidth = Math.ceil(elementWidth * scale)
      const positionOffset = totalWidth * index
      return flip ? -positionOffset : positionOffset
    }

    setProtagonistOffsets(
      protagonists.map((player, i) => ({
        offset: calculateOffset(player.value, i),
        translation: calculateTranslation(player.value, i),
      }))
    )

    setAntagonistOffsets(
      antagonists.map((player, i) => ({
        offset: calculateOffset(player.value, i, true),
        translation: calculateTranslation(player.value, i, true),
      }))
    )
  }

  useEffect(() => {
    updateAvatarPositions()
  }, [protagonists, antagonists, elementRef])

  useEffect(() => {
    window.addEventListener('resize', updateAvatarPositions)
    return () => window.removeEventListener('resize', updateAvatarPositions)
  }, [])

  return (
    <div
      className="relative h-[30px] w-full overflow-hidden rounded-[5px] bg-black/20 bg-blue-500"
      ref={elementRef}
    >
      <div className="pointer-events-none absolute z-50 flex h-full w-1/2 border-r-2 border-dotted border-white/50"></div>
      <div className="relative flex h-full w-full">
        {protagonists.map((player, i) => {
          const scale = player.value / total

          return (
            <div key={i}>
              <div
                className="absolute h-full w-full"
                style={{
                  transform: `translate3d(${protagonistOffsets[i].translation}px, 0, 0)`,
                  transition: TRANSITION,
                }}
              >
                <div
                  key={i}
                  className="flex h-full w-full origin-left items-center justify-center"
                  style={{
                    transform: `scaleX(${scale})`,
                    transition: TRANSITION,
                    background: player.color,
                  }}
                />
              </div>
              <div
                className="bg-red-500 absolute left-0 top-0 aspect-square h-[26px] overflow-hidden rounded-full border-2 border-white"
                style={{
                  transform: `translate3d(${protagonistOffsets[i].offset}px, 2px, 0px)`,
                  transition: TRANSITION,
                }}
              >
                <Image
                  width={26}
                  height={26}
                  alt={player.username}
                  src={player.avatar}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          )
        })}

        {antagonists.map((player, i) => {
          const scale = player.value / total

          return (
            <div key={i}>
              <div
                key={i}
                className="absolute h-full w-full"
                style={{
                  transform: `translate3d(${antagonistOffsets[i].translation}px, 0, 0)`,
                  transition: TRANSITION,
                }}
              >
                <div
                  key={i}
                  className="flex h-full w-full origin-right items-center justify-center"
                  style={{
                    transform: `scaleX(${scale})`,
                    transition: TRANSITION,
                    background: player.color,
                  }}
                />
                <div
                  className="bg-red-500 absolute right-0 top-0 aspect-square h-[26px] overflow-hidden rounded-full border-2 border-white"
                  style={{
                    transform: `translate3d(${antagonistOffsets[i].offset}px, 2px, 0px)`,
                    transition: TRANSITION,
                  }}
                >
                  <Image
                    width={26}
                    height={26}
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
