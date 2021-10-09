import * as React from 'react'

export function CheckCircle(props: React.SVGProps<SVGSVGElement>) {
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
        d="M16 2C8.269 2 2 8.269 2 16s6.269 14 14 14 14-6.269 14-14S23.731 2 16 2zm6.047 9.428l-6.581 9.125a.994.994 0 01-1.616 0l-3.897-5.4a.25.25 0 01.203-.397h1.466c.319 0 .622.153.81.416l2.224 3.087 4.913-6.812a1 1 0 01.81-.416h1.465c.203 0 .322.231.203.397z"
        fill="currentColor"
      />
    </svg>
  )
}
