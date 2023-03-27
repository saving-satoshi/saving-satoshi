import PageLocked from 'components/pageLocked'

export default function Layout({ children }) {
  return (
    <PageLocked>
      <div className="flex grow flex-col">{children}</div>
    </PageLocked>
  )
}
