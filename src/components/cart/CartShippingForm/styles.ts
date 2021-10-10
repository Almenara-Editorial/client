import { media } from '@/utils'
import styled from 'styled-components'

export const Container = styled.div``

export const Row = styled.div`
  display: flex;
  gap: 1.8rem;
  align-items: center;

  ${media.lessThan('medium')`
    flex-direction: column;
    align-items:flex-start;
    gap: .8rem;
  `}
`
