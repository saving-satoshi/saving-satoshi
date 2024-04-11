import Avatar from 'components/Avatar'
import React from 'react'
import { Text, Tooltip } from 'ui/common'

const HolocatQuestion = ({
  href,
  id,
  question,
  inline,
  theme,
  arrowPosition,
  visible,
}: {
  id: string
  href: string
  question: string
  theme?: string
  inline?: boolean
  children?: React.ReactNode
  arrowPosition?: string
  visible?: boolean
}) => {
  console.log('holocatQuestion', visible)
  return (
    (inline && (
      <Tooltip
        id={id}
        theme={theme || ''}
        href={href}
        content={question}
        parentClassName="inline-flex  align-bottom min-h-fit min-w-fit"
        arrowPosition={arrowPosition}
        visibleOverride={visible}
      >
        <Avatar avatar="/assets/avatars/holocat.jpg" size={32} />
      </Tooltip>
    )) || (
      <a
        target="_blank"
        href={href}
        className="flex max-w-[max-content]  cursor-pointer items-center
      gap-2 rounded-[100px] bg-black/20 p-2 transition ease-in-out
       hover:bg-black/40"
      >
        <Avatar avatar="/assets/avatars/holocat.jpg" size={32} />
        <Text className="text-lg font-semibold">{question}</Text>
      </a>
    )
  )
}

export default HolocatQuestion
