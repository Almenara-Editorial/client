import { media } from '@/utils'
import styled from 'styled-components'

export const Container = styled.div`
  padding: var(--space-xl);

  ${media.lessThan('medium')`
    padding: 0;
  `}

  ${media.greaterThan('medium')`
    flex: 1 0 69.6rem;
    max-width: 69.6rem;
  `}
`

export const Title = styled.h2`
  font-size: var(--font-lg);
  font-family: var(--font-title);
  text-align: center;
  margin-bottom: var(--space-xl);
`
