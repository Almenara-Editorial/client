import { media } from '@/utils'
import styled from 'styled-components'

export const Container = styled.div`
  padding-block: 4.8rem;
`
export const List = styled.div`
  display: flex;
  align-items: flex-start;
  gap: var(--space-xl);

  ${media.lessThan('medium')`
    width: 100%;
    overflow-x: auto;
  `}
`
