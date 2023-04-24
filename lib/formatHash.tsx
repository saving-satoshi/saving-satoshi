export default function formatHash(
  hash: string,
  length?: number,
  chunkLength?: number,
  rows?: number,
  underscores?: boolean
) {
  const result = []
  const chunkSize = !!chunkLength ? chunkLength : 4
  const numberOfRows = !!rows ? rows : 2
  const matches = hash?.match(/^0+/)
  const leadingZeros = matches && matches.length > 0 ? matches[0].length : 0
  let zeroCount = 0

  for (let i = 0; i < numberOfRows; i++) {
    const row = []

    for (let j = 0; j < length / (chunkSize * numberOfRows); j++) {
      const startIndex = i * (length / numberOfRows) + j * chunkSize
      const chunk = hash
        .slice(startIndex, startIndex + chunkSize)
        .split('')
        .map((char, idx) => {
          if (zeroCount < leadingZeros && char === '0') {
            zeroCount++
            return (
              <span key={idx} className="text-white">
                {char}
              </span>
            )
          }
          return char
        })

      const placeholder = '_'.repeat(length)
      const placeholderChunk =
        underscores &&
        placeholder
          .slice(startIndex, startIndex + chunkSize)
          .split('')
          .map((char, idx) => {
            if (zeroCount < leadingZeros && char === '0') {
              zeroCount++
              return (
                <span key={idx} className="text-white">
                  {char}
                </span>
              )
            }
            return char
          })

      !hash && underscores
        ? row.push(
            <span
              key={startIndex}
              className="mr-3 inline-block text-white text-opacity-50"
            >
              {placeholderChunk}
            </span>
          )
        : row.push(
            <span
              key={startIndex}
              className="mr-3 inline-block text-white text-opacity-50"
            >
              {chunk}
            </span>
          )
    }

    result.push(
      <div key={i} className="inline-block">
        {row}
      </div>
    )
  }

  return result
}
