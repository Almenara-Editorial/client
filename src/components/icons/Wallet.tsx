import * as React from 'react'

export function Wallet(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M27.5 3.5h-23c-.553 0-1 .447-1 1v23c0 .553.447 1 1 1h23c.553 0 1-.447 1-1v-23c0-.553-.447-1-1-1zM26.25 18H16.5v-4h9.75v4zm0 8.25H5.75V5.75h20.5V12H15.5c-.553 0-1 .447-1 1v6c0 .553.447 1 1 1h10.75v6.25zM18.125 16a1.25 1.25 0 102.5 0 1.25 1.25 0 00-2.5 0z"
        fill="#000"
      />
    </svg>
  )
}
