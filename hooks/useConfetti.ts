'use client'

import { useCallback, useRef } from 'react'
import type confetti from 'canvas-confetti'

export default function useConfetti(intensity = 1) {
  const confettiRef = useRef<typeof confetti | null>(null)

  return useCallback(async () => {
    if (!confettiRef.current) {
      confettiRef.current = (await import('canvas-confetti')).default
    }
    const confettiFn = confettiRef.current
    // Skip the animation for users whose OS/browser has "reduce motion"
    // enabled (prefers-reduced-motion: reduce), since it can trigger motion
    // sensitivity or vestibular issues
    const fire = (options: confetti.Options) =>
      confettiFn({ ...options, disableForReducedMotion: true })

    fire({
      particleCount: Math.round(200 * intensity),
      spread: 120,
      startVelocity: 50,
      ticks: 300,
      gravity: 0.8,
      origin: { y: 0.7 },
    })

    setTimeout(() => {
      fire({
        particleCount: Math.round(300 * intensity),
        spread: 160,
        startVelocity: 60,
        ticks: 350,
        gravity: 0.7,
        scalar: 1.2,
        origin: { y: 0.5 },
      })

      fire({
        particleCount: Math.round(150 * intensity),
        angle: 60,
        spread: 150,
        origin: { x: 0 },
      })

      fire({
        particleCount: Math.round(150 * intensity),
        angle: 120,
        spread: 150,
        origin: { x: 1 },
      })
    }, 250)
  }, [intensity])
}
