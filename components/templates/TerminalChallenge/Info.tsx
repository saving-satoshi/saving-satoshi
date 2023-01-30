import { CopyableCode } from 'components/ui/CopyableCode'
import { Tips } from 'components/Tips'
import { Tip } from 'components/Tip'

export const Info = ({
  tips,
  genesis,
  tipTitle,
  copyableCodeContent,
  TipAdditionalContent,
}: {
  tips?: string
  genesis: any
  tipTitle?: string
  copyableCodeContent?: string
  TipAdditionalContent?: React.FC
}) => {
  return (
    <div className="flex">
      <div className="flex flex-col px-1 py-6 text-white sm:px-12">
        <div
          className="genesis"
          dangerouslySetInnerHTML={{ __html: genesis.body.html }}
        ></div>
        {copyableCodeContent && (
          <div className="mb-[30px]">
            <CopyableCode code={copyableCodeContent} language="shell" />
          </div>
        )}
        {tips && (
          <Tips>
            <Tip title={tipTitle}>
              {tips}
              <br />
              {TipAdditionalContent && <TipAdditionalContent />}
            </Tip>
          </Tips>
        )}
      </div>
    </div>
  )
}
