export default function CopyIcon({ className }: { className: string }) {
  return (
    <svg
      viewBox="0 0 31 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect x="8" y="8.5" width="11" height="17" rx="2" stroke="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 4C11.6193 4 10.5 5.11929 10.5 6.5V8.5H11.5V6.5C11.5 5.67157 12.1716 5 13 5H20C20.8284 5 21.5 5.67157 21.5 6.5V19.5C21.5 20.3284 20.8284 21 20 21H19V22H20C21.3807 22 22.5 20.8807 22.5 19.5V6.5C22.5 5.11929 21.3807 4 20 4H13Z"
        fill="currentColor"
      />
    </svg>
  )
}
