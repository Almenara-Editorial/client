import { Wrapper } from '@/components/shared'
import styled from 'styled-components'

export const Container = styled(Wrapper)``

export const Title = styled.h2`
  font-size: 4rem;
  font-family: var(--font-title);
  margin-bottom: 3.2rem;
`

export const Body = styled.div`
  font-size: 1.4rem;
  line-height: 1.8;
  margin-bottom: 3.2rem;

  p + p {
    margin-top: 2.4rem;
  }
`
