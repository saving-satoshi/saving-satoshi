import clsx from 'clsx'
import { LessonView, TabData } from 'types'

export default function Tab({
  activeView,
  tabData,
  onSelect,
  stretch,
}: {
  activeView: LessonView
  tabData: TabData
  onSelect: any
  stretch?: boolean
}) {
  const isActive = activeView == tabData.id

  return (
    <button
      onClick={() => onSelect(tabData.id)}
      className={clsx(
        'border-black/25 px-4 text-center font-nunito text-lg font-bold text-white',
        {
          'border-2 text-opacity-75 transition duration-150 ease-in-out hover:text-opacity-50':
            !isActive,
          'mx-[2px] border-0 bg-black bg-opacity-25': isActive,
          grow: stretch,
        }
      )}
      disabled={tabData.disabled}
    >
      {tabData.text}
    </button>
  )
}
