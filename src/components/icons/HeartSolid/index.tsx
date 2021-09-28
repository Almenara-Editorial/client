import * as React from 'react'

export function HeartSolid(props: React.SVGProps<SVGSVGElement>) {
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
        d="M28.844 8.863a8.126 8.126 0 00-1.778-2.588 8.292 8.292 0 00-5.825-2.369A8.346 8.346 0 0016 5.753a8.346 8.346 0 00-5.24-1.847 8.292 8.292 0 00-5.826 2.369A8.076 8.076 0 002.5 12.047c0 1.04.212 2.125.634 3.228.353.922.86 1.878 1.507 2.844 1.025 1.528 2.434 3.122 4.184 4.737 2.9 2.678 5.772 4.528 5.894 4.603l.74.475c.329.21.75.21 1.079 0l.74-.475c.122-.078 2.99-1.925 5.894-4.603 1.75-1.615 3.16-3.21 4.184-4.737.647-.966 1.156-1.922 1.506-2.844.422-1.103.635-2.188.635-3.228a7.958 7.958 0 00-.653-3.184z"
        fill="currentColor"
      />
    </svg>
  )
}

export default HeartSolid
