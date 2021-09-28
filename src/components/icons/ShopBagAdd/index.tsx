import * as React from 'react'

export function ShopBagAdd(props: React.SVGProps<SVGSVGElement>) {
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
        d="M21.75 9.75H26c.553 0 1 .447 1 1V18h-2.25v-6h-3v2.75a.25.25 0 01-.25.25h-1.75a.25.25 0 01-.25-.25V12h-7v2.75a.25.25 0 01-.25.25H10.5a.25.25 0 01-.25-.25V12h-3v14.25H18v2.25H6c-.553 0-1-.447-1-1V10.75c0-.553.447-1 1-1h4.25v-.5a5.75 5.75 0 0111.5 0v.5zm-5.75-4a3.498 3.498 0 00-3.5 3.5v.5h7v-.5c0-1.934-1.566-3.5-3.5-3.5z"
        fill="currentColor"
      />
      <path d="M22 19h2v8h-2v-8z" fill="currentColor" />
      <path d="M27 22v2h-8v-2h8z" fill="currentColor" />
    </svg>
  )
}

export default ShopBagAdd
