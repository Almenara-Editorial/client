import { Wrapper } from '@/components/shared/Wrapper'
import styled from 'styled-components'

export const Container = styled(Wrapper).attrs({ as: 'section' })`
  padding-block: 8rem;

  > div {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 6.4rem;
  }
`

export const Title = styled.h2`
  font-size: var(--font-xl);
  font-family: var(--font-title);
  margin-bottom: 3.2rem;
  text-align: center;
`
