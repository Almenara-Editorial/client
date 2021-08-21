import styled, { keyframes } from 'styled-components'

const scaleAnimation = keyframes`
  from {
    transform: scale(0)
  }

  to {
    transform: scale(1)
  }
`

export const Container = styled.label`
  position: relative;

  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 1.6rem;

  user-select: none;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }

  span {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 1.8rem;
    height: 1.8rem;
    border-radius: var(--radius-md);
    box-shadow: 0 0 0 1px var(--input-border-color);
    background-color: var(--color-background);
    cursor: inherit;
  }

  svg {
    animation: ${scaleAnimation} 0.1s ease;
    color: var(--color-text);
  }
`
