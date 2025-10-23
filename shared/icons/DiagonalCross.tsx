import * as React from 'react'
import { SVGProps } from 'react'
const DiagonalCross = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={35}
    height={34}
    viewBox="0 0 35 34"
    fill="none"
    {...props}
  >
    <g clipPath="url(#clip0_11254_3309)">
      <path d="M9.03125 17H26.0018" stroke="white" strokeLinecap="round" />
      <path
        d="M17.5312 25.9705L17.4332 9.00018"
        stroke="white"
        strokeLinecap="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_11254_3309">
        <rect
          width={24}
          height={24}
          fill="white"
          transform="translate(0.546875 17) rotate(-45)"
        />
      </clipPath>
    </defs>
  </svg>
)
export default DiagonalCross
