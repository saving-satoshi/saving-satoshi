import { MessageDescriptor } from 'react-intl'

export const formatMessages = (
  messages: Record<string, string>,
  messageIdPrefix: string
) => {
  const result: Record<string, MessageDescriptor> = {}

  for (const key in messages) {
    result[key] = {
      id: `${messageIdPrefix}.${key}`,
      defaultMessage: messages[key],
    }
  }

  return result
}
