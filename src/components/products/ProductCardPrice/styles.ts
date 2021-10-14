import { Container as CartProduct } from '@/components/cart/CartProduct/styles'
import { Container as OrderProductCard } from '@/components/account/OrderProductCard/styles'
import { media } from '@/utils'
import styled from 'styled-components'

export const Container = styled.span`
  display: flex;
  align-items: center;
  gap: 1rem;
  white-space: nowrap;

  font-size: var(--font-sm);
  font-family: var(--font-body);
  color: var(--color-text);

  &[data-muted='true'] {
    color: var(--color-neutral-300);
  }

  [data-old-price='true'] {
    position: relative;
    color: var(--color-neutral-300);

    &:before {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;

      width: 100%;
      height: 1px;

      background-color: var(--color-neutral-300);
    }
  }

  ${media.lessThan('medium')`
    flex-direction: column;
    gap: .4rem;
    text-align: center;
  `}

  ${CartProduct} & {
    align-items: flex-start;
  }

  ${OrderProductCard} & {
    align-items: flex-start;
  }
`
