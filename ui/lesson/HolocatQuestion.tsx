import Avatar from 'components/Avatar'
import React, { useEffect, useState } from 'react'
import { Text, Tooltip } from 'ui/common'

const HolocatQuestion = ({
  link,
  id,
  width,
  question,
  inline,
  theme,
  notCentered,
  children,
}: {
  id: string
  link: string
  question: string
  width?: string
  theme?: string
  inline?: boolean
  children?: React.ReactNode
  notCentered?: boolean
}) => {
  return (
    (inline && (
      <a
        target="_blank"
        href={link}
        className={`${
          width ? width : 'max-w-[max-content]'
        } mx-1.5 inline-block`}
      >
        <Tooltip
          offset={10}
          theme={theme || ''}
          position="top"
          notCentered={notCentered}
          id={id}
          className="flex cursor-pointer flex-wrap items-center  gap-1 text-lg italic no-underline hover:underline hover:decoration-solid"
          content={<p>{question}</p>}
        >
          {children}
          <Avatar avatar="/assets/avatars/holocat.jpg" size={32} />
        </Tooltip>
      </a>
    )) || (
      <a
        target="_blank"
        href={link}
        className="flex max-w-[max-content] cursor-pointer items-center 
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
