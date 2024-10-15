import * as React from 'react'
import { SVGProps } from 'react'
const HyperLink = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g opacity={0.5}>
      <path
        d="M10 5.5H5C4.17157 5.5 3.5 6.17157 3.5 7V15C3.5 15.8284 4.17157 16.5 5 16.5H13C13.8284 16.5 14.5 15.8284 14.5 15V10"
        stroke="white"
        strokeLinecap="round"
      />
      <path
        d="M10.5 9.5L16.864 3.13604"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 2.5H17.5V7.5"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
)
export default HyperLink
