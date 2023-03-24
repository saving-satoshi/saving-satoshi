import { Editor } from 'ui'
import { EditorConfig } from 'types'

export default function ScriptingChallenge({
  config,
}: {
  config: EditorConfig
}) {
  return (
    <div className="grid grid-cols-2">
      <div className="border-r border-white border-opacity-30 bg-gradient-to-b from-[#7B1810] to-[#432A43D9] p-10">
        <p className="font-nunito text-xl text-white">
          Alright, time to write and run your own code. When you press “Run the
          script”, the findHash function will be called over and over with an
          ever-increasing nonce.
        </p>
        <p className="mt-8 font-nunito text-xl text-white">
          Some other instructions go here...
        </p>
      </div>

      <Editor config={config} />
    </div>
  )
}
