import { useTranslations } from 'hooks'
import { Divider, Text } from 'ui'

export default function AddressResources({ lang }) {
  const t = useTranslations(lang)

  return (
    <>
      <div>
        <Text className="text-3xl font-bold">Learning Resources</Text>
        <Text>
          What helpful info and resources can we provide for further learning?
        </Text>
        <Text className="mt-[25px] text-xl font-bold">SHA-256, RIPEMD-160</Text>
        <Text>
          Hash functions digest any amount of any kind of data and always return
          a result of the same size. For SHA256, it’s 32 bytes. For RIPEMD-160,
          it’s 20 bytes. The output is deterministic (always the same output for
          the same input) but otherwise, indistinguishable from random. Hash
          functions effectively reduce data to a small consistent fingerprint.
        </Text>
        <Text className="mt-[25px] text-xl font-bold">
          Witness Public Key Hash (wpkh) address
        </Text>
        <Text>
          A Bitcoin address is a string of characters that is designed for users
          to handle. It is short, easy to copy and paste, and has some kind of
          built-in checksum to ensure that it is always copied correctly. It
          safely encodes a Bitcoin output script that the recipient can spend
          from. There any several types of output script and several encoding
          mechanisms. In this challenge we encode a compressed public key with
          bech32 to create what is called a witness public key hash address.
        </Text>
        <Text className="mt-[25px] text-xl font-bold">
          Mainnet, Testnet, Signet, and Regtest
        </Text>
        <Text>
          When developing Bitcoin software, it is important to test your code
          before you trust real money with it! One of the simplest ways to test
          Bitcoin software is to use a different blockchain with a new genesis
          block where the coins don’t matter, mining is free and easy, and
          everything can be reset at any time. These chains are supported by a
          unique network of nodes that does not interfere with the real coins
          and nodes on Mainnet. Testnet and Signet are the names of two such
          alternate Bitcoin blockchains that are maintained in parallel with
          Mainnet on a global scale. Regtest is a developer mode designed to be
          run locally with no network connections needed at all.
        </Text>
        <Divider />
        <Text className="text-3xl font-bold">Tips</Text>
        <Text>
          What specific tips can/do we want to give learners if they are stuck?
        </Text>
        <Divider />
        <Text className="text-3xl font-bold">Spoiler</Text>
      </div>
    </>
  )
}
