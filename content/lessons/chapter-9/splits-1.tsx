'use client'

import { useTranslations, useProceed } from 'hooks'
import { ChapterIntro } from 'ui'
import { Button } from 'shared'
import OpClass from 'ui/lesson/OpCodeParser/OPRunner'
import { useEffect, useState } from 'react'

export const metadata = {
  title: 'chapter_eight.building_blocks_one.title',
  navigation_title: 'chapter_eight.building_blocks_one.nav_title',
  key: 'CH9SPL1',
}

export default function Splits1({ lang }) {
  const proceed = useProceed()
  const t = useTranslations(lang)
  const [hydrated, setHydrated] = useState(false)
  useEffect(() => {
    setHydrated(true)
  }, [])
  return <div>{hydrated && <OpClass />}</div>
}
