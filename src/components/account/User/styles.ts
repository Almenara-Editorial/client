import { media } from '@/utils'
import styled from 'styled-components'

export const Container = styled.div`
  padding: 2.4rem;
  border-bottom: 1px solid var(--color-neutral-100);

  ${media.lessThan('medium')`
    padding: 1.2rem 0;
  `}
`
