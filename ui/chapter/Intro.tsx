import { Button, Text, Title } from 'ui'

export default function Intro({
  title,
  texts,
  next,
}: {
  title: string
  texts: { class: string; text: string }[]
  next: string
}) {
  const textRender = texts.map((paragraph) => {
    return (
      <Text key={paragraph.text} className={paragraph.class}>
        {paragraph.text}
      </Text>
    )
  })

  return (
    <div className="my-auto grid w-full grid-cols-1 justify-center justify-items-center">
      <div className="flex w-full items-center px-6 text-white lg:w-1/2 lg:px-0">
        <div className="content-center justify-items-center px-1 font-nunito">
          <div className="genesis">
            <Title>{title}</Title>
            {textRender}
          </div>

          <Button href={next} classes="mt-8 max-md:w-full">
            Continue
          </Button>
        </div>
      </div>
    </div>
  )
}
