import clsx from 'clsx'
import { SetStateAction } from 'react'
import { LessonView, TabData } from 'types'

export default function Tab({
  activeView,
  tabData,
  onSelect,
  stretch,
}: {
  activeView: string
  tabData: TabData
  onSelect: React.Dispatch<SetStateAction<string>>
  stretch?: boolean
}) {
  const isActive = activeView == tabData.id

  return (
    <button
      onClick={() => onSelect(tabData.id)}
      className={clsx(
        'border border-y-0 border-l-0 border-r border-white/25 px-4 text-center font-nunito  text-base font-semibold capitalize text-white',
        {
          'text-opacity-75 transition duration-150 ease-in-out hover:text-opacity-50':
            !isActive,
          ' border-0 bg-black bg-opacity-25': isActive,
          grow: stretch,
        }
      )}
      disabled={tabData.disabled}
    >
      {tabData.text}
    </button>
  )
}
