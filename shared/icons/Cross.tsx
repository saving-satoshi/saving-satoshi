export default function CrossIcon({ className, title }) {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <title>{title}</title>
      <path
        d="M1 1.5L13 13.5M13 1.5L1.00001 13.5"
        stroke="#E3941D"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  )
}
