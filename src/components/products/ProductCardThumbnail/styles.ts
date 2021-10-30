import styled from 'styled-components'
import { Container as ProductCard } from '@/components/products/ProductCard/styles'
import { Container as CartProductsGroup } from '@/components/cart/CartProductsGroup/styles'
import { Container as CheckoutProductCard } from '@/components/checkout/CheckoutProductCard/styles'
import { Container as RecommendedProductCard } from '@/components/products/RecommendedProductCard/styles'
import { Container as OrderProductCard } from '@/components/account/OrderProductCard/styles'

export const Container = styled.div`
  padding: 1.8rem;
  display: flex;
  flex-shrink: 0;
  width: 100%;
  align-items: center;
  justify-content: center;
  transition: all 0.1s;
  will-change: transform;

  &[data-muted='true'] {
    img {
      filter: saturate(0);
    }

    &:before {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      content: 'Indisponível';
      text-align: center;
      padding: 0.2rem 3.2rem;
      font-weight: var(--body-bold);
      font-size: var(--font-sm);
      width: fit-content;
      color: var(--color-white);
      z-index: var(--layer-base);
      background-color: var(--color-secondary-500);
    }
  }

  ${RecommendedProductCard} & {
    width: 14rem;
    padding: 2.4rem;
  }

  ${CartProductsGroup} & {
    width: 7rem;
    height: 12rem;
    padding: 0 1rem;
  }

  ${CheckoutProductCard} & {
    width: 9rem;
    height: 12rem;
    padding: 0 1rem;
  }

  ${ProductCard}:hover & {
    transform: scale(1.02);
  }

  ${OrderProductCard} & {
    width: 9rem;
    height: 12rem;
  }
`
