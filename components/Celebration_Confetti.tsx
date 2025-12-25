'use client'

import React, { useEffect, useRef } from 'react'

type Props = {
  buttonText: string
  intensity?: number
}

export default function CelebrationAuto({ buttonText, intensity = 1 }: Props) {
  const observerRef = useRef<MutationObserver | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return // SSR guard
    if (!buttonText) return

    let confetti: any = null

    // dynamic import fixes SSR problem
    import('canvas-confetti').then((mod) => {
      confetti = mod.default
    })

    const burst = () => {
      if (!confetti) return

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
    }

    const tryAttach = () => {
      const candidates = Array.from(document.querySelectorAll('button'))
      const matched = candidates.filter(
        (b) => (b.textContent || '').trim() === (buttonText || '').trim()
      )
      if (matched.length === 0) return null
      matched.forEach((b) => b.addEventListener('click', burst))
      return matched
    }

    const attached = tryAttach()

    if (!attached) {
      observerRef.current = new MutationObserver(() => {
        const matched = tryAttach()
        if (matched) observerRef.current?.disconnect()
      })
      observerRef.current.observe(document.body, {
        childList: true,
        subtree: true,
      })
    }

    return () => {
      const candidates = Array.from(document.querySelectorAll('button'))
      const matched = candidates.filter(
        (b) => (b.textContent || '').trim() === (buttonText || '').trim()
      )
      matched.forEach((b) => b.removeEventListener('click', burst))
      observerRef.current?.disconnect()
      observerRef.current = null
    }
  }, [buttonText, intensity])

  return null
}
