import { Container as SelectAddressButton } from '@/components/products/SelectAddressButton/styles'
import { Container as ProductCard } from '@/components/products/ProductCard/styles'
import { HTMLAttributes } from 'react'
import { Container as CartSummary } from '@/components/cart/CartSummary/styles'
import styled from 'styled-components'

export type AnchorProps = HTMLAttributes<HTMLAnchorElement> & {
  size?: 'xs' | 'sm' | 'rg' | 'lg' | 'xl'
  color?: 'white' | 'neutral' | 'tertiary' | 'light' | 'primary'
  align?: 'center' | 'right' | 'left'
}

export const Anchor = styled.a.attrs<AnchorProps>(
  ({ size = 'rg', color = 'neutral', align = 'left' }) => ({
    'data-color': color,
    tabIndex: '0',
    style: {
      '--link-size': `var(--font-${size})`,
      textAlign: align
    }
  })
)<AnchorProps>`
  display: inline-block;

  font-size: var(--link-size);
  text-decoration: underline;
  font-weight: var(--body-bold);

  color: var(--link-color) !important;
  background: none;
  border: 0;

  cursor: pointer;

  &:hover {
    color: var(--link-color-hover) !important;
    transform: translateY(-0.2rem);
  }

  &:focus {
    outline: 1px dashed;
    outline-offset: 2px;
  }

  &[data-color='neutral'] {
    --link-color: var(--color-neutral-900);
    --link-color-hover: var(--color-neutral-800);
  }

  &[data-color='white'] {
    --link-color: var(--color-white);
    --link-color-hover: var(--color-white);
  }

  &[data-color='light'] {
    --link-color: var(--color-neutral-500);
    --link-color-hover: var(--color-neutral-400);
  }

  &[data-color='tertiary'] {
    --link-color: var(--color-tertiary-500);
    --link-color-hover: var(--color-tertiary-400);
  }

  &[data-color='primary'] {
    --link-color: var(--color-primary-500);
    --link-color-hover: var(--color-primary-400);
  }

  ${SelectAddressButton} & {
    display: flex;
    align-items: flex-start;
    gap: 0.4rem;

    font-weight: var(--body-regular);
  }

  ${ProductCard} & {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    transform: none;
    color: inherit;
  }

  ${CartSummary} & {
    display: block;
    width: fit-content;
    font-size: var(--font-sm);
    text-align: center;
    margin: 2.4rem auto 0 auto;
  }
`
