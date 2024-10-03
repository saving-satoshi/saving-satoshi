import React, { FC } from 'react'
import HyperLink from 'shared/icons/Hyperlink'
import { Text } from 'ui/common'

interface IOutput {
  prefilled?: boolean
  output: 'output 0' | 'output 1'
  currentTransactionTab: string
  sats: string
  script: string
  progressKey: string
  tab: string
}
const OutputScript: FC<IOutput> = ({
  prefilled,
  progressKey,
  output,
  currentTransactionTab,
  sats,
  script,
  tab,
}) => {
  return (
    <div className="flex flex-col gap-4 rounded-md bg-black/20 p-4 text-lg">
      <Text className="capitalize">{output}</Text>

      <div className="flex flex-col">
        <Text>Sats</Text>
        <input
          placeholder="Enter Sats"
          className="bg-transparent text-white outline-none"
          defaultValue={
            prefilled ? sats : currentTransactionTab !== tab ? sats : ''
          }
          readOnly={currentTransactionTab !== tab || prefilled}
        />
      </div>

      <div className="flex w-full flex-col">
        <div className="flex w-full items-center justify-between">
          <Text>Script</Text>
          <a
            target={'_blank'}
            href={`https://script.savingsatoshi.com/?lesson=${progressKey}`}
            className="cursor-pointer"
          >
            <HyperLink />{' '}
          </a>
        </div>
        <textarea
          placeholder="Enter Script"
          className="resize-none bg-transparent text-white outline-none"
          defaultValue={
            prefilled
              ? Buffer.from(script || '', 'base64').toString('utf-8')
              : currentTransactionTab !== tab
              ? Buffer.from(script || '', 'base64').toString('utf-8')
              : ''
          }
          readOnly={currentTransactionTab !== tab || prefilled}
        />
      </div>
    </div>
  )
}

export default OutputScript
