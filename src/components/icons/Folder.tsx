import * as React from 'react'

export function Folder(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 26 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M24.5 4.325H13.281L9.616.819A.255.255 0 009.444.75H1.5c-.553 0-1 .447-1 1v18.5c0 .553.447 1 1 1h23c.553 0 1-.447 1-1V5.325c0-.553-.447-1-1-1z"
        fill="currentColor"
      />
    </svg>
  )
}
