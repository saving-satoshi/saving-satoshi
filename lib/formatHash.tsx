export default function formatHash(
  hash: string,
  length?: number,
  underscores?: boolean
) {
  const result = []
  const chunkSize = 4
  const numberOfRows = 2
  const matches = hash.match(/^0+/)
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

      !!hash && underscores
        ? row.push(
            <span key={startIndex} className="text-white text-opacity-50">
              {chunk}
            </span>
          )
        : row.push(
            <span key={startIndex} className="text-white text-opacity-50">
              {placeholderChunk}
            </span>
          )
    }

    result.push(
      <div key={i} className="flex items-center justify-start gap-3">
        {row}
      </div>
    )
  }

  return result
}
