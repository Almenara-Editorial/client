import * as React from 'react'

export function CaretDown(props: React.SVGProps<SVGSVGElement>) {
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
        d="M27.625 8H25.28c-.16 0-.31.078-.403.206L16 20.444 7.122 8.206A.502.502 0 006.719 8H4.375c-.203 0-.322.231-.203.397l11.018 15.19c.4.55 1.22.55 1.616 0l11.019-15.19a.249.249 0 00-.2-.397z"
        fill="currentColor"
      />
    </svg>
  )
}

export default CaretDown
