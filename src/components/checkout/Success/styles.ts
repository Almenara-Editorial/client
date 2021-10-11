import { Wrapper } from '@/components/shared'
import { media } from '@/utils'
import styled from 'styled-components'

export const Container = styled(Wrapper)``

export const Title = styled.h2`
  font-size: 4rem;
  font-family: var(--font-title);
  margin-bottom: 3.2rem;

  ${media.lessThan('medium')`
    font-size: 3rem;
  `}
`

export const Body = styled.div`
  font-size: 1.4rem;
  line-height: 1.8;
  margin-bottom: 3.2rem;

  * + * {
    margin-top: 2.4rem;
  }
`

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 3.2rem;
`
