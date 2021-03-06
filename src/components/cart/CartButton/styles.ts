import { media } from '@/utils'
import styled, { keyframes } from 'styled-components'

const scaleAnimation = keyframes`
  from {
    transform: translateX(-50%) scale(0);
  }

  to {
    transform: translateX(-50%) scale(1);
  }
`

export const Container = styled.button`
  position: relative;

  -webkit-appearance: none;
  background: none;
  border: 0;
  font-size: 3.2rem;

  cursor: pointer;
  transition: all 0.2s ease;
  color: var(--color-text);

  &:hover {
    color: var(--color-neutral-700);
  }

  span {
    position: absolute;
    bottom: 1.3rem;
    left: 50%;
    transform: translateX(-50%);

    color: var(--color-white);

    font-size: 1.2rem;
    font-weight: var(--body-bold);
    animation: ${scaleAnimation} 0.2s;
  }

  ${media.lessThan('medium')`
    font-size: 4rem;

    span {
      font-size: 1.8rem;
    }
  `}
`
