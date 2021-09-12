import { Container as CartProductsGroup } from '@/components/cart/CartProductsGroup/styles'
import { Container as RecommendedProductCard } from '@/components/products/RecommendedProductCard/styles'
import styled from 'styled-components'

export const Container = styled.div`
  padding: 1.8rem;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;

  ${RecommendedProductCard} & {
    width: 14rem;
    padding: 2.4rem;
  }

  ${CartProductsGroup} & {
    width: 7rem;
    height: 12rem;
    padding: 0 1rem;
  }
`
