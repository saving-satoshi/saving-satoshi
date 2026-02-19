'use client'

import { useCallback, useRef } from 'react'

type ConfettiFn = (opts: any) => void

export function useConfetti(intensity = 1) {
  const confettiRef = useRef<ConfettiFn | null>(null)

  const load = async () => {
    if (!confettiRef.current) {
      const mod = await import('canvas-confetti')
      confettiRef.current = mod.default
    }
  }

  return useCallback(async () => {
    await load()
    if (!confettiRef.current) return

    const confetti = confettiRef.current

    confetti({
      particleCount: Math.round(200 * intensity),
      spread: 120,
      startVelocity: 50,
      ticks: 300,
      gravity: 0.8,
      origin: { y: 0.7 },
    })

    setTimeout(() => {
      confetti({
        particleCount: Math.round(300 * intensity),
        spread: 160,
        startVelocity: 60,
        ticks: 350,
        gravity: 0.7,
        scalar: 1.2,
        origin: { y: 0.5 },
      })

      confetti({
        particleCount: Math.round(150 * intensity),
        angle: 60,
        spread: 150,
        origin: { x: 0 },
      })

      confetti({
        particleCount: Math.round(150 * intensity),
        angle: 120,
        spread: 150,
        origin: { x: 1 },
      })
    }, 250)
  }, [intensity])
}
