import styled, { keyframes } from 'styled-components'

const animation = keyframes`
  from {
    opacity:0;
    transform: translateX(5%);
  }

  to {
    opacity:1;
    transform: translateX(0);
  }
`

export const Container = styled.div`
  padding: 2.4rem;
  font-size: var(--font-sm);
  line-height: 1.8;
  animation: ${animation} 0.5s;
`
