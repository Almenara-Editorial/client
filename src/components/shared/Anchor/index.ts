import { Container as SelectAddressButton } from '@/components/products/SelectAddressButton/styles'
import { HTMLAttributes } from 'react'
import styled from 'styled-components'

export type AnchorProps = HTMLAttributes<HTMLAnchorElement> & {
  size?: 'sm' | 'rg' | 'lg' | 'xl'
  color?: 'neutral' | 'tertiary'
}

export const Anchor = styled.a.attrs<AnchorProps>(({ size = 'rg' }) => ({
  style: { '--link-size': `var(--font-${size})` }
}))<AnchorProps>`
  display: inline-block;

  font-size: var(--link-size);
  text-decoration: underline;
  font-weight: var(--body-bold);

  color: var(--link-color);
  background: none;
  border: 0;

  cursor: pointer;

  &:hover {
    color: var(--link-color-hover);
    transform: translateY(-0.2rem);
  }

  &[data-color='neutral'] {
    --link-color: var(--color-neutral-900);
    --link-color-hover: var(--color-neutral-800);
  }

  &[data-color='tertiary'] {
    --link-color: var(--color-tertiary-500);
    --link-color-hover: var(--color-tertiary-400);
  }

  ${SelectAddressButton} & {
    display: flex;
    align-items: flex-start;
    gap: 0.4rem;

    font-weight: var(--body-regular);
  }
`
