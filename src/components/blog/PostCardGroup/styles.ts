import { media } from '@/utils'
import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.2rem;

  ${media.lessThan('medium')`
    grid-template-columns: repeat(1, 1fr);
  `}
`
