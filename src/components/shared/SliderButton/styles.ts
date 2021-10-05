import { media } from '@/utils'
import styled from 'styled-components'

export const Container = styled.button`
  position: absolute;
  z-index: var(--layer-base);
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: 0;
  color: white;
  opacity: 0.2;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }

  &:active {
    opacity: 0.8;
  }

  &[data-direction='left'] {
    left: var(--space-lg);
  }

  &[data-direction='right'] {
    transform: translateY(-50%) rotate(180deg);
    right: var(--space-lg);
  }

  ${media.lessThan('medium')`
    display:none !important;
  `}
`
