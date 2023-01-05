import { BoxButton } from 'components/ui/BoxButton'

export const Info = ({
  genesis
}: {
  genesis: any
}) => {
  return (
    <div className="
      flex
      flex-col
      gap-6
      grow
      px-4
      py-6
      max-w-[840px]
      md:justify-center
    ">
      <div
        className="genesis text-white font-nunito"
        dangerouslySetInnerHTML={{ __html: genesis.body.html }}
      ></div>
      <BoxButton
        href="https://blockstream.info/block/000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f"
        external={true}
      >View Block 0</BoxButton>
    </div>
  )
}
