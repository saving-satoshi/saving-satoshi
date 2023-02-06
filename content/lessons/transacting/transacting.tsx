'use client'

import { Button, Text, Title } from 'ui'

export default function Transacting() {
  return (
    <div className="my-auto grid w-full grid-cols-1 justify-center justify-items-center">
      <div className="flex w-full items-center px-6 text-white lg:w-1/2 lg:px-0">
        <div className="content-center justify-items-center px-1 font-nunito">
          <div className="genesis">
            <Title>{`What's in a transaction?`}</Title>

            <Text className="pt-2 text-lg">
              Bitcoin is censorship resistant money. Anybody can send money by
              broadcasting a transaction to the network. After broadcast,
              transactions are packaged up into blocks by miners. Miners compete
              against other miners for the privilege of building on the chain.
            </Text>

            <Text className="pt-2 text-lg">
              Transactions have two parts: inputs and outputs. In the previous
              exercise we decoded a secret message found inside a transaction
              input. This time we’ll decode a message that belongs to the output
              part.
            </Text>

            <Text className="pt-2 text-lg">
              For the following transaction, identify the output of type
              OP_RETURN.
            </Text>
          </div>

          <Button href="/chapters/chapter-1/transacting-1" classes="mt-8">
            Continue
          </Button>
        </div>
      </div>
    </div>
  )
}

export const metadata = {
  title: 'Transacting',
}
