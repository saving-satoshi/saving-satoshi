import { Introduction, Text } from 'ui'

export default function ReapingRewards() {
  return (
    <Introduction>
      <Text className="pt-2">
        Satoshi, the pseudonymous inventor of bitcoin, also mined the first
        bitcoin block. He left you a hidden clue in the very first bitcoin
        transaction that was ever made.
      </Text>

      <Text className="pt-2">
        Each block in the bitcoin blockchain contains a set of transactions. A
        nice way to view these blocks and the things they contain is by using a
        block explorer.
      </Text>
    </Introduction>
  )
}

export const metadata = {
  title: 'Of blocks and miners',
  subtitle: `"To understand the mystery and magic, you must start at the beginning…"`,
  image: 'https://saving-satoshi.s3.amazonaws.com/ch2.png',
}
