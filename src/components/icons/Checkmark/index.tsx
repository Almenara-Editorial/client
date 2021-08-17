import * as React from 'react'

export function Checkmark(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M28.5 5.938h-2.184a.995.995 0 00-.785.38L12.647 22.642l-6.178-7.828a1 1 0 00-.785-.382H3.5a.25.25 0 00-.197.403l8.56 10.844c.4.506 1.168.506 1.571 0l15.263-19.34a.248.248 0 00-.197-.4z"
        fill="currentColor"
      />
    </svg>
  )
}

export default Checkmark
