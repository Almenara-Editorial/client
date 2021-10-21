import { Wrapper } from '@/components/shared'
import { media } from '@/utils'
import styled from 'styled-components'

export const Container = styled(Wrapper).attrs({ as: 'section' })`
  display: flex;
  gap: 3.2rem;
  align-items: center;
  padding-block: 12rem;

  ${media.lessThan('medium')`
    flex-direction: column;
    padding-block: 4.8rem;
  `}
`

export const Illustration = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex: auto;
  font-size: 25.7rem;
`

export const Text = styled.div`
  color: var(--color-neutral-500);

  p {
    font-size: var(--font-lg);
    font-family: var(--font-title);
    font-weight: var(--title-light);
  }

  ${media.greaterThan('medium')`
    flex: 1 0 69.6rem;
    max-width: 69.6rem;
    padding: 4.8rem 10rem;
  `}
`
