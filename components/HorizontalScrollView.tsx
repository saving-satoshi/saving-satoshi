export default function HorizontalScrollView({ children }) {
  return (
    <>
      <div
        className="relative mb-2 w-full cursor-pointer overflow-x-auto
    scroll-smooth whitespace-nowrap pb-4"
      >
        {children}
      </div>
    </>
  )
}
