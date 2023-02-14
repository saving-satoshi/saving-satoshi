'use client'

import { Button, LessonInfo, CodeExample, Text, Title } from 'ui'
import { InputChallenge } from 'ui'

export default function Transacting1() {
  return (
    <InputChallenge
      numOfInputFields={40}
      answer={'6a127461636f7320666f722065766572796f6e65'}
      next={'/chapters/chapter-1/transacting-3'}
      label={'Enter the OP_RETURN type'}
    >
      <LessonInfo>
        <Title>OP_RETURN</Title>

        <Text className="text-lg">
          For the following transaction, identify the output of type OP_RETURN.
        </Text>

        <CodeExample
          code={
            '75764fd0c95b4c17b728d10f7555509adfc0789ddc47683c45aeddd1c34727f8'
          }
          language={'string'}
        />

        <Button
          href="https://blockstream.info/tx/75764fd0c95b4c17b728d10f7555509adfc0789ddc47683c45aeddd1c34727f8?expand"
          external={true}
          classes="mt-4"
        >
          View transaction
        </Button>
      </LessonInfo>
    </InputChallenge>
  )
}

export const metadata = {
  title: 'transacting_two.title',
}
