import * as React from 'react'

export function CircleInfo(props: React.SVGProps<SVGSVGElement>) {
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
        d="M16 2C8.269 2 2 8.269 2 16s6.269 14 14 14 14-6.269 14-14S23.731 2 16 2zm0 25.625C9.581 27.625 4.375 22.419 4.375 16S9.581 4.375 16 4.375 27.625 9.581 27.625 16 22.419 27.625 16 27.625z"
        fill="currentColor"
      />
      <path
        d="M14.5 10.5a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zm2.25 3.5h-1.5a.25.25 0 00-.25.25v8.5c0 .137.113.25.25.25h1.5a.25.25 0 00.25-.25v-8.5a.25.25 0 00-.25-.25z"
        fill="currentColor"
      />
    </svg>
  )
}

export default CircleInfo
