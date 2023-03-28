import LessonLocked from 'components/LessonLocked'

export default function Layout({ children }) {
  return (
    <LessonLocked>
      <div className="flex grow flex-col">{children}</div>
    </LessonLocked>
  )
}
