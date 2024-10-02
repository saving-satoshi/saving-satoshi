export default function Title({ className = '', children }) {
  return (
    <h1 className={`font-nunito text-2xl font-bold text-white ${className}`}>
      {children}
    </h1>
  )
}
