import { media } from '@/utils'
import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3.2rem;

  ${media.lessThan('medium')`
    grid-template-columns: repeat(2, 1fr);
    gap: 2.4rem;
  `}
`

export const Empty = styled.div`
  width: 100%;
`
