import * as React from 'react'

export function Youtube(props: React.SVGProps<SVGSVGElement>) {
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
        d="M18.565 15.733l-3.594-1.677c-.313-.146-.57.018-.57.365v3.158c0 .347.257.51.57.365l3.592-1.677c.316-.147.316-.387.002-.534zM16 .64C7.517.64.64 7.517.64 16S7.517 31.36 16 31.36 31.36 24.483 31.36 16 24.483.64 16 .64zm0 21.6c-7.862 0-8-.709-8-6.24 0-5.531.138-6.24 8-6.24 7.863 0 8 .709 8 6.24 0 5.531-.137 6.24-8 6.24z"
        fill="currentColor"
      />
    </svg>
  )
}
