import clsx from 'clsx'
import { TabData } from 'types'

export default function Tab({
  activeId,
  tabData,
  onSelect,
  stretch,
}: {
  activeId: string
  tabData: TabData
  onSelect: any
  stretch?: boolean
}) {
  const isActive = activeId == tabData.id
  return (
    <button
      onClick={() => onSelect(tabData.id)}
      className={clsx(
        'w-full min-w-[140px] border-black/25 px-4 text-center font-nunito text-lg font-bold text-white md:w-[140px]',
        {
          'border-2 text-opacity-75 transition duration-150 ease-in-out hover:text-opacity-50':
            !isActive,
          'border-0 bg-black bg-opacity-25 py-[2px]': isActive,
          grow: stretch,
        }
      )}
      disabled={tabData.disabled}
    >
      {tabData.text}
    </button>
  )
}
