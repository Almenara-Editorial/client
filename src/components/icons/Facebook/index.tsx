import * as React from 'react'

export function Facebook(props: React.SVGProps<SVGSVGElement>) {
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
        d="M32 16C32 7.161 24.833 0 16 0C7.161 0 0 7.161 0 16C0 23.984 5.849 30.604 13.5 31.803V20.626H9.437V16.001H13.5V12.474C13.5 8.465 15.885 6.251 19.541 6.251C21.292 6.251 23.125 6.563 23.125 6.563V10.5H21.104C19.12 10.5 18.5 11.735 18.5 13V16H22.937L22.224 20.625H18.5V31.802C26.145 30.603 32 23.983 32 15.999V16Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default Facebook
