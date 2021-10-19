import { Wrapper } from '@/components/shared'
import styled from 'styled-components'

export const Container = styled(Wrapper)`
  padding-block: 4.8rem;
  max-width: 50rem;

  > p {
    font-size: var(--font-sm);
    margin-bottom: 3.2rem;
    color: var(--color-neutral-700);
  }
`

export const Title = styled.h1`
  font-size: var(--font-xl);
  margin-bottom: 2.4rem;
  font-family: var(--font-title);
`
