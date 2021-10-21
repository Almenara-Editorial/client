import { Wrapper } from '@/components/shared/Wrapper'
import { media } from '@/utils'
import styled from 'styled-components'

export const Container = styled(Wrapper).attrs({ as: 'section' })`
  padding-block: 8rem;

  > div {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 6.4rem;
  }

  ${media.lessThan('medium')`

    > div {
      padding-block: 4.8rem;
      grid-template-columns: 1fr;
      grid-auto-flow: row;
      gap: 3.2rem;
    }
  `}
`

export const Title = styled.h2`
  font-size: var(--font-xl);
  font-family: var(--font-title);
  margin-bottom: 3.2rem;
  text-align: center;
`
