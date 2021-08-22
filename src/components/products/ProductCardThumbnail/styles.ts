import { Container as CartProductCardContainer } from '@/components/products/CartProductCard/styles'
import styled from 'styled-components'

export const Container = styled.div`
  padding: 3.2rem;

  ${CartProductCardContainer} & {
    padding: 2.4rem;
  }
`
