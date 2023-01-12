import { allLessons, Lesson } from 'contentlayer/generated'
import { BoxButton } from 'components/ui/BoxButton'

export default async function Transacting() {
  return (
    <div className="grid w-screen grid-cols-1 justify-center justify-items-center">
      <div className="flex w-screen items-center px-6 text-white lg:w-1/2 lg:px-0">
        <div className="content-center justify-items-center px-1 font-nunito">
          <div className='genesis'>
            <h1>What's in a transaction?</h1>
            <p>
              Bitcoin is censorship resistant money. Anybody can send money by broadcasting a transaction to the network. After broadcast, transactions are packaged up into blocks by miners. Miners compete against other miners for the privilege of building on the chain.
            </p>
            <p>
              Transactions have two parts: inputs and outputs. In the previous exercise we decoded a secret message found inside a transaction input. This time we'll decode a message that belongs to the output part.
            </p>
            <p>
              For the following transaction, identify the output of type OP_RETURN.
            </p>
          </div>
          <BoxButton
            href="/chapters/chapter-1/transacting/transacting-1"
            classes="mt-8"
          >Continue</BoxButton>
        </div>
      </div>
    </div>
  )
}
