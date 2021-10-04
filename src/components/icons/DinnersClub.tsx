import * as React from 'react'

export function DinnersClub(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 40 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#prefix__clip0)">
        <path d="M40 8.167H0v25.625h40V8.167z" fill="#0079BE" />
        <path
          d="M30.766 21.053c0-5.095-4.256-8.616-8.918-8.615h-4.013c-4.718-.001-8.601 3.521-8.601 8.615 0 4.66 3.883 8.49 8.601 8.467h4.013c4.662.022 8.918-3.808 8.918-8.466z"
          fill="#fff"
        />
        <path
          d="M17.86 13.16c-4.31.001-7.804 3.5-7.805 7.82 0 4.318 3.494 7.817 7.805 7.818 4.313-.001 7.807-3.5 7.808-7.818 0-4.32-3.495-7.819-7.808-7.82z"
          fill="#0079BE"
        />
        <path
          d="M12.927 20.959a4.964 4.964 0 013.176-4.626v9.25a4.962 4.962 0 01-3.176-4.624zm6.718 4.626v-9.252a4.961 4.961 0 013.178 4.626 4.963 4.963 0 01-3.178 4.626z"
          fill="#fff"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0">
          <path
            fill="#fff"
            transform="translate(0 8.167)"
            d="M0 0h40v25.625H0z"
          />
        </clipPath>
      </defs>
    </svg>
  )
}
