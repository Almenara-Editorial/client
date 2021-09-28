import * as React from 'react'

export function Plus(props: React.SVGProps<SVGSVGElement>) {
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
        d="M4 14.8c0-.663.336-1.2.75-1.2h22.5c.414 0 .75.537.75 1.2v2.4c0 .663-.336 1.2-.75 1.2H4.75c-.414 0-.75-.537-.75-1.2v-2.4z"
        fill="currentColor"
      />
      <path
        d="M17.2 4c.663 0 1.2.336 1.2.75v22.5c0 .414-.537.75-1.2.75h-2.4c-.663 0-1.2-.336-1.2-.75V4.75c0-.414.537-.75 1.2-.75h2.4z"
        fill="currentColor"
      />
    </svg>
  )
}

export default Plus
