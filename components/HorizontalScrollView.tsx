export default function HorizontalScrollView({ children }) {
  return (
    <>
      <div
        className="scroll mb-2 flex cursor-pointer
    flex-nowrap gap-3.5 overflow-x-auto scroll-smooth pb-4
    md:grid md:grid-cols-5 md:gap-4"
      >
        {children}
      </div>
    </>
  )
}
