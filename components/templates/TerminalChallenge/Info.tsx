import { CopyableCode } from 'components/ui/CopyableCode'

export const Info = ({
  genesis,
  copyableCodeContent
}: {
  genesis: any,
  copyableCodeContent: string
}) => {
  return (
    <div className="flex">
      <div className="px-1 py-6 sm:px-12 text-white">
        <div
          className="genesis"
          dangerouslySetInnerHTML={{ __html: genesis.body.html }}
        ></div>
        <CopyableCode code={copyableCodeContent} language='shell' />
      </div>
    </div>
  )
}
