import { Container as FilterSidebarGroup } from '@/components/products/FilterSidebarGroup/styles'
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
  width: fit-content;

  user-select: none;
  cursor: pointer;
  transition: opacity 0.2s font-weight 0.2s;

  &:hover {
    opacity: 0.8;
  }

  span {
    flex-shrink: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 1.8rem;
    height: 1.8rem;
    border-radius: var(--radius-sm);
    box-shadow: 0 0 0 1px var(--input-border-color);
    background-color: var(--color-background);
    cursor: inherit;
  }

  svg {
    animation: ${scaleAnimation} 0.1s ease;
    color: var(--color-text);
  }

  ${FilterSidebarGroup} & {
    font-size: 1.2rem;

    span {
      --input-border-color: var(--color-neutral-900);
    }
  }
`
