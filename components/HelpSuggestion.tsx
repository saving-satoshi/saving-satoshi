import React from 'react'
import { Text } from 'ui'

const HelpSuggestion = () => {
  return (
    <div className="mt-4 flex items-center rounded-xl bg-black bg-opacity-20 p-4 bg-blend-darken">
      <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center border border-white">
        <Text className="text-lg md:text-xl">?</Text>
      </div>
      <Text className="md:text-md flex-grow text-sm">
        If you&apos;re ever stuck, press the &ldquo;?&ldquo; button in the
        top-right corner. It provides helpful resources and tips.
      </Text>
    </div>
  )
}

export default HelpSuggestion
