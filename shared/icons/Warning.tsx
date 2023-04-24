export default function WarningIcon({ className }: { className: string }) {
  return (
    <svg
      width="35"
      height="30"
      viewBox="0 0 30 30"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="30" height="30" rx="15" fill-opacity="0.25" />
      <circle cx="15" cy="10.25" r="1.25" />
      <rect x="14" y="13" width="2" height="8" />
    </svg>
  )
}
