import * as React from 'react'

export function Eye(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M29.444 15.194C26.48 8.954 22.004 5.812 16 5.812c-6.006 0-10.481 3.141-13.444 9.385a1.884 1.884 0 000 1.61c2.963 6.24 7.441 9.38 13.444 9.38 6.006 0 10.481-3.14 13.444-9.384.24-.506.24-1.094 0-1.61zM16 23.937c-5.04 0-8.731-2.556-11.334-7.937C7.269 10.619 10.96 8.062 16 8.062S24.731 10.62 27.335 16c-2.6 5.381-6.291 7.938-11.335 7.938zM15.875 10.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zm0 9a3.498 3.498 0 01-3.5-3.5c0-1.934 1.566-3.5 3.5-3.5 1.935 0 3.5 1.566 3.5 3.5s-1.565 3.5-3.5 3.5z"
        fill="currentColor"
      />
    </svg>
  )
}

export default Eye
