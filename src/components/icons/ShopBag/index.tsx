import * as React from 'react'

export function ShopBag(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M26 9.75h-4.25v-.5a5.75 5.75 0 00-11.5 0v.5H6c-.553 0-1 .447-1 1V27.5c0 .553.447 1 1 1h20c.553 0 1-.447 1-1V10.75c0-.553-.447-1-1-1zm-13.5-.5c0-1.934 1.566-3.5 3.5-3.5s3.5 1.566 3.5 3.5v.5h-7v-.5zm12.25 17H7.25V12h3v2.75c0 .137.113.25.25.25h1.75a.25.25 0 00.25-.25V12h7v2.75c0 .137.113.25.25.25h1.75a.25.25 0 00.25-.25V12h3v14.25z"
        fill="currentColor"
      />
    </svg>
  )
}

export default ShopBag
