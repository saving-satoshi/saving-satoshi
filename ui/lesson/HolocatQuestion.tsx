import Avatar from 'components/Avatar'
import React from 'react'
import { Text, Tooltip } from 'ui/common'

const HolocatQuestion = ({
  link,
  id,
  width,
  question,
  inline,
  theme,
  children,
}: {
  id: string
  link: string
  question: string
  width?: string
  theme?: string
  inline?: boolean
  children?: React.ReactNode
}) => {
  if (!inline) {
    return (
      <a
        target="_blank"
        href=""
        className="flex max-w-[max-content] cursor-pointer items-center 
      gap-2 rounded-[100px] bg-black/20 p-2 transition ease-in-out 
       hover:bg-black/40"
      >
        <Avatar avatar="/assets/avatars/holocat.jpg" size={32} />
        <Text className="text-lg font-semibold">{question}</Text>
      </a>
    )
  } else {
    return (
      <div className={`${width ? 'max-w-[100px]' : width} mx-1.5 inline-block`}>
        <Tooltip
          offset={10}
          theme={theme || ''}
          position="top"
          id={id}
          className="flex cursor-pointer flex-wrap items-center  gap-1 text-lg italic no-underline hover:underline"
          content={<p>{question}</p>}
        >
          <p>{children}</p>
          <Avatar avatar="/assets/avatars/holocat.jpg" size={32} />
        </Tooltip>
      </div>
    )
  }
}

export default HolocatQuestion
