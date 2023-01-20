export const Info = ({
  genesis
}: {
  genesis: any
}) => {
  return (
    <div className="flex w-full justify-center text-white">
      <div className="ccontent-center justify-items-start px-1 py-6 sm:px-12">
        <div
          className="genesis"
          dangerouslySetInnerHTML={{ __html: genesis.body.html }}
        ></div>
      </div>
    </div>
  )
}
