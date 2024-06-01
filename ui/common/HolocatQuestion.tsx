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
  return (
    (inline && (
      <Tooltip
        id={id}
        theme={theme || ''}
        content={question}
        parentClassName="inline-flex align-middle min-h-fit min-w-fit mx-1"
        arrowPosition={arrowPosition}
        visibleOverride={visible}
      >
        <Avatar avatar="/assets/avatars/holocat.jpg" size={24} />
      </Tooltip>
    )) || (
      <a
        target="_blank"
        href={href}
        className="flex max-w-[max-content] cursor-pointer items-center
      gap-2 rounded-[100px] bg-black/20 p-2 transition ease-in-out
       hover:bg-black/40"
      >
        <Avatar avatar="/assets/avatars/holocat.jpg" size={24} />
        <Text className="text-lg font-semibold">{question}</Text>
      </a>
    )
  )
}

export default HolocatQuestion
