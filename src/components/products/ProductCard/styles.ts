import styled, { keyframes } from 'styled-components'

const focusAnimation = keyframes`
  0% {
    background-color: transparent;
  }

  100% {
    background-color: var(--color-secondary-50);
  }
`

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-width: 100%;
  max-width: 21.2rem;
  padding-block: 1.6rem;

  &:focus,
  &:focus-within {
    animation: ${focusAnimation} 0.6s ease forwards;
  }
`

export const ProductAnchor = styled.a`
  outline: none;
  border: none;
`

export const OffPercentage = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  z-index: var(--layer-base);
  pointer-events: none;
  user-select: none;

  height: 2rem;
  padding-inline: 1.6rem;
  border-radius: 5rem;

  font-size: var(--font-sm);
  font-weight: var(--body-bold);
  color: var(--color-white);
  background-color: var(--color-success-300);
`
export const Text = styled.div`
  padding-inline: var(--space-lg);
  padding-bottom: var(--space-lg);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.8rem;
`
