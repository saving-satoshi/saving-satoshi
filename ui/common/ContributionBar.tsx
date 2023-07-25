'use client'

import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'

export default function ContributionBar({ total, protagonists, antagonists }) {
  const elementRef = useRef<any>()
  const [protagonistState, setProtagonistState] = useState(
    protagonists.map(() => ({
      offsetBar: 0,
      offsetAvatar: 0,
    }))
  )
  const [antagonistState, setAntagonistState] = useState(
    antagonists.map(() => ({
      offsetBar: 0,
      offsetAvatar: 0,
    }))
  )

  const updateProtagonists = () => {
    const elRef = elementRef.current
    if (!elRef) {
      return
    }

    const rect = (elRef as HTMLElement).getBoundingClientRect()

    setProtagonistState(
      protagonists.map((player, i) => {
        const cumulativeValue = protagonists.slice(0, i).reduce((acc, p) => {
          const s = p.value / total
          return acc + rect.width * s
        }, 0)
        const scale = player.value / total
        const playerOffset = rect.width * scale
        const offsetBar = -rect.width + playerOffset + cumulativeValue
        const offsetAvatar = cumulativeValue + playerOffset / 2 - 13
        return { offsetBar, offsetAvatar }
      })
    )
  }

  const updateAntagonists = () => {
    const elRef = elementRef.current
    if (!elRef) {
      return
    }

    const rect = (elRef as HTMLElement).getBoundingClientRect()

    setAntagonistState(
      antagonists.map((player, i) => {
        const cumulativeValue = antagonists.slice(0, i).reduce((acc, p) => {
          const s = p.value / total
          return acc + rect.width * s
        }, 0)
        const scale = player.value / total
        const playerOffset = rect.width * scale
        const offsetBar = rect.width - playerOffset - cumulativeValue
        const offsetAvatar = -cumulativeValue - playerOffset / 2 + 13
        return { offsetBar, offsetAvatar }
      })
    )
  }

  useEffect(() => {
    updateProtagonists()
  }, [elementRef, protagonists])

  useEffect(() => {
    updateAntagonists()
  }, [elementRef, antagonists])

  return (
    <div
      className="relative h-[30px] overflow-hidden rounded bg-black/20"
      ref={elementRef}
    >
      <div className="h-full w-full overflow-hidden">
        {protagonists.map((_, i) => {
          const idx = protagonists.length - 1 - i
          const player = protagonists[idx]
          let { offsetAvatar, offsetBar } = protagonistState[idx]
          offsetBar = offsetBar ? `${offsetBar}px` : `-100%`
          offsetAvatar = offsetAvatar ? `${offsetAvatar}px` : `-100%`

          return (
            <div key={i}>
              <div
                className="absolute left-0 top-0 z-10 w-[26px] overflow-hidden rounded-full bg-white p-[2px]"
                style={{
                  transform: `translate3d(${offsetAvatar}, 2px, 0)`,
                  transition: 'transform 300ms linear',
                }}
              >
                <Image src={player.avatar} alt="" width={26} height={26} />
              </div>
              <div
                className="absolute left-0 top-0 h-full w-full rounded"
                style={{
                  transform: `translate3d(${offsetBar}, 0, 0)`,
                  transition: 'transform 300ms linear',
                  backgroundColor: player.color,
                }}
              />
            </div>
          )
        })}
        {antagonists.map((_, i) => {
          const idx = antagonists.length - 1 - i
          const player = antagonists[idx]
          let { offsetAvatar, offsetBar } = antagonistState[idx]
          offsetBar = offsetBar ? `${offsetBar}px` : '100%'
          offsetAvatar = offsetAvatar ? `${offsetAvatar}px` : '100%'

          return (
            <div key={i}>
              <div
                className="absolute right-0 top-0 z-10 w-[26px] overflow-hidden rounded-full bg-white p-[2px]"
                style={{
                  transform: `translate3d(${offsetAvatar}, 2px, 0)`,
                  transition: 'transform 300ms linear',
                }}
              >
                <Image src={player.avatar} alt="" width={26} height={26} />
              </div>
              <div
                className="absolute right-0 top-0 h-full w-full rounded"
                style={{
                  transform: `translate3d(${offsetBar}, 0, 0)`,
                  transition: 'transform 300ms linear',
                  backgroundColor: player.color,
                }}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
