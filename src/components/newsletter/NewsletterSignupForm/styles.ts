import styled from 'styled-components'
import { media } from '@/utils'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: var(--space-md);

  ${media.lessThan('medium')`
    flex-direction: column;
  `}
`
