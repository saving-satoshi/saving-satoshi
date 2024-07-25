import { useLang, useTranslations } from 'hooks'
import { useAtom, useAtomValue, useSetAtom } from 'jotai'
import { useState } from 'react'
import {
  setChapterDifficultyAtom,
  syncedCourseProgressAtom,
} from 'state/progressState'
import { ChapterWithDifficulties } from 'types'
import { Text, ToggleSwitch } from 'ui/common'

const DifficultySelection = ({ chapterId }) => {
  const lang = useLang()
  const t = useTranslations(lang)
  const courseProgress = useAtomValue(syncedCourseProgressAtom)
  const setDifficulty = useSetAtom(setChapterDifficultyAtom)
  const currentChapter = courseProgress.chapters.find(
    (chapter) => chapter.id === chapterId
  ) as ChapterWithDifficulties
  const currentChapterDifficulty = currentChapter.selectedDifficulty
  const toggleDifficulty = () => {
    const otherDifficulty = currentChapter.difficulties.find(
      (difficulty) => difficulty.level !== currentChapterDifficulty
    )!.level
    if (currentChapter.difficulties.length === 2) {
      setDifficulty({ chapterId, difficultyLevel: otherDifficulty })
    }
  }

  if (currentChapter.difficulties.length === 2) {
    // return toggle switch with switch and text in flex row
    return (
      <div className="flex items-center space-x-4">
        <ToggleSwitch
          checked={
            currentChapterDifficulty === currentChapter.difficulties[1].level
          }
          onChange={() => toggleDifficulty()}
        />
        <Text>
          {t(`difficulty_selection.${currentChapterDifficulty.toString()}`)}
        </Text>
      </div>
    )
  } else {
    // We should handle cases where chapter difficulty is not 2 in future when we add that
    return null
  }
}

export default DifficultySelection
