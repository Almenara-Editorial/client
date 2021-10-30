import { media } from '@/utils'
import styled from 'styled-components'

export const Products = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  ${media.lessThan('medium')`
    grid-template-columns: repeat(2, 1fr);
  `}

  ${media.lessThan('large')`
    grid-template-columns: repeat(3, 1fr);
  `}
`
export const Title = styled.h2`
  font-size: var(--font-lg);
  font-family: var(--font-title);
  margin-bottom: 3.2rem;
`
