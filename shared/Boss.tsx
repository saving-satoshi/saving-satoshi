import Icon from './Icon'

export default function Boss() {
  return (
    <div className="flex justify-center">
      <a href="https://learning.chaincode.com/#BOSS" target="_blank">
        <div className="flex w-[223px] flex-row gap-[5px] rounded-[3px] border border-white/50 bg-gradient-to-r from-[#93EFFFBA] to-[#93EFFF00] px-[15px] py-3 font-audiowide text-base drop-shadow-[0_0_25px_#93EFFFBF] backdrop-blur-xl">
          <span className="font-audiowide">APPLY TO THE BOSS PROGRAM</span>
          <Icon className="h-9 w-9 self-center" icon="arrow" />
        </div>
      </a>
    </div>
  )
}
