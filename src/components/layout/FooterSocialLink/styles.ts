import { media } from '@/utils'
import styled from 'styled-components'

export const Container = styled.a`
  font-size: 2.8rem;

  &:hover {
    color: var(--color-neutral-700);
  }

  ${media.lessThan('medium')`
    font-size: 2rem;
  `}
`
