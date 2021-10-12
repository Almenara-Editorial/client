import { media } from '@/utils'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  font-size: var(--font-sm);

  & + & {
    margin-top: 1.8rem;
  }

  > div {
    flex: 2;
  }

  > div + div {
    flex: 0;
    white-space: nowrap;
  }

  ${media.greaterThan('medium')`
    > div:first-child {
      flex: 1 0 30rem;
    }

    > div:nth-child(2) {
      flex: 1 0 7rem;
    }
  `}
`
