import { media } from '@/utils'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`

export const Cards = styled.div`
  display: flex;
  align-items: stretch;
  gap: 3.2rem;

  ${media.lessThan('medium')`
    flex-direction: column;
  `}
`
