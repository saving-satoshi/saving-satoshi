'use client'

import { Intro } from 'ui'

export default function Transacting() {
  const text = [
    {
      text: `Bitcoin is censorship resistant money. Anybody can send money by
  broadcasting a transaction to the network. After broadcast,
  transactions are packaged up into blocks by miners. Miners compete
  against other miners for the privilege of building on the chain.`,
      class: 'pt-2 text-lg',
    },
    {
      text: `Transactions have two parts: inputs and outputs. In the previous
    exercise we decoded a secret message found inside a transaction
    input. This time we’ll decode a message that belongs to the output
    part.`,
      class: 'pt-2 text-lg',
    },
    {
      text: `For the following transaction, identify the output of type
    OP_RETURN.`,
      class: 'pt-2 text-lg',
    },
  ]

  return (
    <Intro
      title={`What’s in a transaction?`}
      texts={text}
      next={'/chapters/chapter-1/transacting-2'}
    />
  )
}

export const metadata = {
  title: 'transacting_one.title',
}
