export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col md:grow">{children}</div>
}
