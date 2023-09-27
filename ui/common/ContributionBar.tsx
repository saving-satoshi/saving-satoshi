'use client'

import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import Icon from 'shared/Icon'
import clsx from 'clsx'

export default function ContributionBar({
  active,
  total,
  protagonists,
  antagonists,
  step,
  opacity,
}: {
  active: boolean
  total: number
  protagonists: any
  antagonists: any
  step: number
  opacity?: string
}) {
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

  const sanitizeValue = (val) => {
    if (!active) {
      return 0
    }

    if (val === 0) {
      return 1
    }

    return val
  }

  const getSanitizedTotal = () => {
    let protagonistsTotal = protagonists.reduce((acc, p) => {
      return sanitizeValue(p.value) <= 1 ? acc + 1 : acc
    }, 0)

    let antagonistsTotal = antagonists.reduce((acc, p) => {
      return sanitizeValue(p.value) <= 1 ? acc + 1 : acc
    }, 0)

    return total + protagonistsTotal + antagonistsTotal
  }

  const updateProtagonists = () => {
    const elRef = elementRef.current
    if (!elRef) {
      return
    }

    const rect = (elRef as HTMLElement).getBoundingClientRect()
    const sanitizedTotal = getSanitizedTotal()

    setProtagonistState(
      protagonists.map((player, i) => {
        const cumulativeValue = protagonists.slice(0, i).reduce((acc, p) => {
          const s = sanitizeValue(p.value) / sanitizedTotal
          return acc + rect.width * s
        }, 0)

        const scale = sanitizeValue(player.value) / sanitizedTotal
        const playerOffset = rect.width * scale
        const offsetBar = -rect.width + playerOffset + cumulativeValue
        const offsetAvatar = Math.max(
          cumulativeValue + playerOffset / 2 - 13,
          2
        )
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
    const sanitizedTotal = getSanitizedTotal()

    setAntagonistState(
      antagonists.map((player, i) => {
        const cumulativeValue = antagonists.slice(0, i).reduce((acc, p) => {
          const s = sanitizeValue(p.value) / sanitizedTotal
          return acc + rect.width * s
        }, 0)
        const scale = sanitizeValue(player.value) / sanitizedTotal
        const playerOffset = rect.width * scale
        const offsetBar = rect.width - playerOffset - cumulativeValue
        const offsetAvatar = -Math.max(
          cumulativeValue + playerOffset / 2 - 13,
          2
        )
        return { offsetBar, offsetAvatar }
      })
    )
  }

  useEffect(() => {
    updateProtagonists()
  }, [elementRef, protagonists, active])

  useEffect(() => {
    updateAntagonists()
  }, [elementRef, antagonists, active])

  return (
    <div
      className={clsx(
        'relative h-[30px] overflow-hidden rounded bg-black/20',
        opacity
      )}
      ref={elementRef}
    >
      <div className="h-full w-full overflow-hidden">
        {protagonists.map((_, i) => {
          const idx = protagonists.length - 1 - i
          const player = protagonists[idx]
          let { offsetAvatar, offsetBar } = protagonistState[idx]
          offsetBar = offsetBar ? `${offsetBar}px` : `-100%`
          offsetAvatar = offsetAvatar ? `${offsetAvatar}px` : ``

          return (
            <div key={i}>
              {step !== 0 && (
                <div
                  className={clsx(
                    'fade-in absolute left-0 top-0 z-10 w-[26px] overflow-hidden rounded-full p-[2px]',
                    { 'bg-white': player.avatar }
                  )}
                  style={{
                    transform: `translate3d(${offsetAvatar}, 2px, 0)`,
                    transition: 'transform 300ms linear',
                  }}
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
              )}
              <div
                className="absolute left-0 top-0 h-full w-full"
                style={{
                  transform: `translate3d(${offsetBar}, 0, 0)`,
                  transition: 'transform 300ms linear',
                  backgroundColor: active ? player.color : 'transparent',
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
              {step !== 0 && (
                <div
                  className="fade-in absolute right-0 top-0 z-10 w-[26px] overflow-hidden rounded-full bg-white p-[2px]"
                  style={{
                    transform: `translate3d(${offsetAvatar}, 2px, 0)`,
                    transition: 'transform 300ms linear',
                  }}
                >
                  <Image src={player.avatar} alt="" width={26} height={26} />
                </div>
              )}
              <div
                className="absolute right-0 top-0 h-full w-full"
                style={{
                  transform: `translate3d(${offsetBar}, 0, 0)`,
                  transition: 'transform 300ms linear',
                  backgroundColor: active ? player.color : 'transparent',
                }}
              />
            </div>
          )
        })}
        <div className="absolute left-[50%] z-20 h-full w-0 border border-r border-dashed border-white border-opacity-50" />
      </div>
    </div>
  )
}
