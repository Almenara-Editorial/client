import * as React from 'react'

export function Close(props: React.SVGProps<SVGSVGElement>) {
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
        d="M17.619 16l8.203-9.778a.249.249 0 00-.191-.41h-2.494a.51.51 0 00-.384.179l-6.766 8.065-6.765-8.065a.5.5 0 00-.385-.178H6.344a.249.249 0 00-.191.409L14.356 16l-8.203 9.778a.248.248 0 00.19.41h2.494a.51.51 0 00.385-.179l6.765-8.065 6.766 8.065a.5.5 0 00.384.178h2.494a.249.249 0 00.19-.409L17.619 16z"
        fill="currentColor"
      />
    </svg>
  )
}

export default Close
