import clsx from 'clsx'

export default function formatHash(
  hash: string,
  chunkLength: number,
  rows: number,
  length?: number,
  hashStatus?: number,
  margin?: boolean
) {
  const result: JSX.Element[] = []
  const chunkSize = !!chunkLength ? chunkLength : 4
  const numberOfRows = !!rows ? rows : 2
  const matches = hash?.match(/^0+/)
  const hashLength = length ?? 64
  const leadingZeros = matches && matches.length > 0 ? matches[0].length : 0
  let zeroCount = 0

  for (let i = 0; i < numberOfRows; i++) {
    const row: JSX.Element[] = []

    for (let j = 0; j < hashLength / (chunkSize * numberOfRows); j++) {
      const startIndex = i * (hashLength / numberOfRows) + j * chunkSize
      const chunk = hash
        ?.slice(startIndex, startIndex + chunkSize)
        .split('')
        .map((char, idx) => {
          if (zeroCount < leadingZeros && char === '0') {
            zeroCount++
            return (
              <span
                key={idx}
                className={clsx({
                  'text-[#5DBC48]': !hashStatus,
                  'text-[#EDA081]': hashStatus && hashStatus === 1,
                  'text-white': hashStatus && hashStatus !== 1,
                })}
              >
                {char}
              </span>
            )
          }
          return char
        })

      const placeholder = '_'.repeat(hashLength)
      const placeholderChunk = placeholder
        .slice(startIndex, startIndex + chunkSize)
        .split('')
        .map((char, idx) => {
          if (zeroCount < leadingZeros && char === '0') {
            zeroCount++
            return (
              <span
                key={idx}
                className={clsx({
                  'text-[#5DBC48]': !hashStatus,
                  'text-[#EDA081]': hashStatus && hashStatus === 1,
                  'text-white': hashStatus && hashStatus !== 1,
                })}
              >
                {char}
              </span>
            )
          }
          return char
        })

      !hash
        ? row.push(
            <span
              key={startIndex}
              className={clsx('inline-block text-opacity-50', {
                'mr-1': margin,
                'mr-3': !margin,
              })}
            >
              {placeholderChunk}
            </span>
          )
        : row.push(
            <span
              key={startIndex}
              className={clsx('inline-block', {
                'mr-[2px]': margin,
                'mr-3': !margin,
              })}
            >
              {chunk}
            </span>
          )
    }

    result.push(
      <div
        key={i}
        className={clsx('inline-block', {
          'text-[#5DBC59]': !hashStatus,
          'text-[#EDA081]': hashStatus && hashStatus === 1,
          'text-white text-opacity-50': hashStatus && hashStatus !== 1,
        })}
      >
        {row}
      </div>
    )
  }

  return result
}
