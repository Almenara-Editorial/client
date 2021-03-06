import * as React from 'react'

export function Pin(props: React.SVGProps<SVGSVGElement>) {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.75 5.084a11.667 11.667 0 0119.916 8.25c0 1.331-.141 2.488-.501 3.575-.362 1.092-.929 2.064-1.718 3.05l-.025.03-8.667 10a1 1 0 01-1.511 0l-8.667-10a.898.898 0 01-.024-.03c-.79-.986-1.356-1.958-1.718-3.05-.36-1.087-.502-2.244-.502-3.576 0-3.094 1.23-6.061 3.417-8.25zM16 3.667a9.667 9.667 0 00-9.667 9.666c0 1.191.127 2.121.4 2.947.27.816.701 1.578 1.369 2.413L16 27.806l7.898-9.113c.667-.835 1.098-1.597 1.368-2.413.274-.826.4-1.756.4-2.947A9.667 9.667 0 0016 3.667zm0 6.666a3 3 0 100 6 3 3 0 000-6zm-5 3a5 5 0 1110 0 5 5 0 01-10 0z"
        fill="currentColor"
      />
    </svg>
  )
}
