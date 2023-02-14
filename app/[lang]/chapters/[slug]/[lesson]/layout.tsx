import { chapters } from 'content'
export default function Layout({ children }) {
  return <div className="flex h-full flex-col md:grow">{children}</div>
}
