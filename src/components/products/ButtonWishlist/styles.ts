import styled, { keyframes } from 'styled-components'

const addToWishlistAnimation = keyframes`
  0%, 100%{
    transform: scale(1);
  }

  50%{
    transform: scale(1.3);
  }
`

export const Container = styled.button`
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  min-height: 1rem;

  background: transparent;
  border: 0;
  color: var(--color-tertiary-500);

  font-size: var(--font-sm);
  font-weight: var(--body-bold);

  cursor: pointer;

  svg {
    font-size: var(--font-rg);
  }

  &[data-isinwishlist='true'] {
    svg {
      animation: ${addToWishlistAnimation} 0.4s ease;
    }
  }

  &[data-is-loading='true'] {
    pointer-events: none;
  }
`
