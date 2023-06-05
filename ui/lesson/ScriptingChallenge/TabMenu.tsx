import React, { useState } from 'react'
import clsx from 'clsx'

export interface Tab {
  label: string
  value: string
  active: boolean
  element: React.ReactNode
}

function TabMenu({
  children,
  className,
  tabs,
  defaultValue,
}: {
  children?: React.ReactNode
  className?: string
  tabs: any[]
  defaultValue: string
}) {
  const [activeTab, setActiveTab] = useState<string>(defaultValue)

  return (
    <div className={clsx('flex grow flex-col justify-start', className)}>
      <div className="flex h-10">
        {tabs.map((tab, i) => {
          return (
            <button
              key={i}
              className={clsx(
                'group h-full border-r border-white border-opacity-30 bg-black px-4',
                {
                  'cursor-default bg-opacity-20': tab.value === activeTab,
                  'cursor-pointer bg-opacity-0': tab.value !== activeTab,
                }
              )}
              onClick={() => setActiveTab(tab.value)}
            >
              <span
                className={clsx('font-nunito text-xs text-white', {
                  'text-opacity-100': tab.value === activeTab,
                  'text-opacity-40': tab.value !== activeTab,
                })}
              >
                {tab.label}
              </span>
            </button>
          )
        })}
      </div>

      {React.Children.map(children, (Child: React.ReactElement, i: number) => {
        const active = Child.props.value === activeTab
        return (
          <div className={clsx('flex grow', { hidden: !active })} key={i}>
            {React.cloneElement(Child, { active: active })}
          </div>
        )
      })}
    </div>
  )
}

TabMenu.Tab = function Tab({
  children,
  value,
  active,
}: {
  children: React.ReactNode
  value: string
  active?: boolean
}) {
  return (
    <div className={clsx('h-full w-full md:w-[50vw]', { hidden: !active })}>
      {children}
    </div>
  )
}

export default TabMenu
