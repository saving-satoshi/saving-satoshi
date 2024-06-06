'use client'

import Modal from 'components/Modals/Modal'
import { useTranslations } from 'hooks'
import { useAtom } from 'jotai'
import { useState } from 'react'
import { Button } from 'shared'
import { DifficultyLevel, difficultyLevelAtom } from 'state/state'
import { Introduction, Text } from 'ui'

export const metadata = {
  title: 'chapter_six.intro_one.title',
  navigation_title: 'chapter_six.intro_one.nav_title',
  image: '/assets/images/chapter-6-intro-1.jpg',
  key: 'CH6INT1',
}

export default function Intro1({ lang }) {
  const t = useTranslations(lang)
  const [difficulty] = useAtom(difficultyLevelAtom)
  const [isModalOpen, setIsModalOpen] = useState(false)

  if (difficulty === DifficultyLevel.NOT_SELECTED) {
    // Show a modal asking to select difficulty level
    setIsModalOpen(true)
  }

  const onClose = () => {
    setIsModalOpen(false)
  }

  return (
    <Introduction lang={lang} imagePosition="object-[50%_100%]">
      <Text className="text-lg md:text-xl">
        {t('chapter_six.intro_one.paragraph_one')}
      </Text>
      <Text className="mt-4 text-lg md:text-xl">
        {t('chapter_six.intro_one.paragraph_two')}
      </Text>
      <Text className="mt-4 text-lg md:text-xl">
        {t('chapter_six.intro_one.paragraph_three')}
      </Text>
      <Text className="mt-4 text-lg md:text-xl">
        {t('chapter_six.intro_one.paragraph_four')}
      </Text>
      <Modal active={isModalOpen} onRequestClose={onClose}>
        <div className="p-6">
          <Text className="text-lg md:text-xl">
            {t('difficulty_level.not_selected')}
          </Text>
          <div className="mt-6 flex justify-center">
            <Button onClick={onClose}>{t('difficulty_level.ok')}</Button>
          </div>
        </div>
      </Modal>
    </Introduction>
  )
}
