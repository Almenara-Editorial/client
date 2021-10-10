import * as React from 'react'

export function Hamburguer(props: React.SVGProps<SVGSVGElement>) {
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
        d="M28.25 5H3.75a.25.25 0 00-.25.25v2c0 .138.112.25.25.25h24.5a.25.25 0 00.25-.25v-2a.25.25 0 00-.25-.25zm0 19.5H3.75a.25.25 0 00-.25.25v2c0 .137.112.25.25.25h24.5a.25.25 0 00.25-.25v-2a.25.25 0 00-.25-.25zm0-9.75H3.75a.25.25 0 00-.25.25v2c0 .137.112.25.25.25h24.5a.25.25 0 00.25-.25v-2a.25.25 0 00-.25-.25z"
        fill="currentColor"
      />
    </svg>
  )
}
