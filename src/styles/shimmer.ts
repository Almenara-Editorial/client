import { css, keyframes } from 'styled-components'

const shimmerAnimation = keyframes`
  from {
    background-position-x: 0;
  }

  to {
    background-position-x: -200%;
  }
`

export const shimmer = css`
  background: #eee;
  background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
  border-radius: 5px;
  background-size: 200% 200%;
  animation: ${shimmerAnimation} 1.5s infinite;
`
