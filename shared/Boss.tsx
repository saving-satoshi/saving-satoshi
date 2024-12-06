import Icon from './Icon'

export default function Boss() {
  return (
    <div className="flex justify-center">
      <a href="https://learning.chaincode.com/#BOSS" target="_blank">
        <div className="boss-bg-wrapper w-[223px] rounded-[3px] border border-white/50 font-audiowide text-base drop-shadow-[0_0_25px_#93EFFFBF] backdrop-blur-xl">
          <div className="boss-bg top-bg" />
          <div className="relative z-10 flex flex-row gap-[5px] px-[15px] py-3">
            <span className="font-audiowide">APPLY TO THE BOSS PROGRAM</span>
            <Icon className="h-9 w-9 self-center" icon="arrow" />
          </div>
          <div className="boss-bg bottom-bg" />
        </div>
      </a>
    </div>
  )
}
