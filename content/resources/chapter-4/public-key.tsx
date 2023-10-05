import { useTranslations } from 'hooks'
import { Text, Divider } from 'ui'

export default function PublicKeyResources({ lang }) {
  const t = useTranslations(lang)

  return (
    <>
      <div>
        <Text className="text-3xl font-bold">Learning Resources</Text>
        <Text>
          What helpful info and resources can we provide for further learning?
        </Text>
        <Text className="mt-[25px] text-xl font-bold">
          The reason for elliptic curve operations
        </Text>
        <Text>
          We use a very specific set of steps to derive the public key because
          there is mathematical proof that reversing this operation is
          essentially impossibly hard. That feature also applies to other
          algorithms ( like RSA), but those have much larger key sizes and are
          less efficient computations. The steps we follow were chosen because:
        </Text>
        <ul className="list-inside list-disc font-nunito text-white">
          <li>
            we want a system where anyone can join using minimal resources
          </li>
          <li>
            we want messages to be short (and therefore cheap to transmit)
          </li>
          <li>
            we need to prove we know a secret without giving away that secret
          </li>
          <li>
            we need it to be practically impossible for anyone else to compute
            our secret
          </li>
        </ul>
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
        <Text className="mt-[25px] text-xl font-bold">secp256k1</Text>
        <Text>
          Secp256k1 is the name of the elliptic curve used by Bitcoin to
          implement its public key cryptography. All points on this curve are
          valid Bitcoin public keys.
        </Text>
        <Text className="mt-[25px] text-xl font-bold">Generator point</Text>
        <Text>
          A specific point on the secp256k1 curve. Its value is part of the
          secp256k1 standard and it’s always the same. This point is not
          different from other points on the curve, but it is agreed up on as
          the standard starting point for calculations. No one really knows why
          this particular point was chosen.
        </Text>
        <Text className="mt-[25px] text-xl font-bold">
          Elliptic curve operations
        </Text>
        <Text>
          Elliptic curves have their own mathematical rules, so simple
          operations like addition and multiplication work differently. For
          simplicity and brevity, established symbols are re-used, like using a
          “*” for operations that are similar to multiplication.
        </Text>
        <Text className="mt-[25px] text-xl font-bold">Discrete logarithm</Text>
        <Text>
          A mathematical system where you can, for example, multiply but cannot
          divide. A simple metaphor for this is looking at a clock. Three hours
          past 11 o'clock is 2 o'clock. So we could say “11+3=2”. However if
          wanted to perform “2-x=11” and solve for x, you would have infinite
          possible answers (3, 15, 27, 39...). More on wikipedia.
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
