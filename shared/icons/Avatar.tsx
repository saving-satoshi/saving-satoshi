export default function AvatarIcon({ className }: { className: string }) {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="15" cy="13" r="5" stroke="white" strokeWidth="1.5" />
      <circle cx="15" cy="15" r="14.25" stroke="white" strokeWidth="1.5" />
      <path
        d="M23.3762 26.5314C21.5905 23.8027 18.507 22 15.0025 22C11.498 22 8.41458 23.8027 6.62891 26.5314"
        stroke="white"
        strokeWidth="1.5"
      />
    </svg>
  )
}
