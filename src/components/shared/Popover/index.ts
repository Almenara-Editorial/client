import styled, { keyframes } from 'styled-components'

const animation = keyframes`
  from {
    transform: translateY(-1rem);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`

export const Popover = styled.div`
  position: absolute;
  top: calc(100% + var(--space-sm));

  width: 100%;
  border-radius: var(--radius-lg);

  background-color: var(--color-background);
  box-shadow: 0px 4px 30px -10px rgba(0, 55, 219, 0.3);

  animation: ${animation} 0.2s ease;
`
