import { Wrapper } from '@/components/shared'
import styled from 'styled-components'

export const Container = styled(Wrapper).attrs({ as: 'section' })`
  display: flex;
  gap: 3.2rem;
  align-items: center;
  padding-block: 12rem;
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
  flex: 1 0 69.6rem;
  max-width: 69.6rem;
  color: var(--color-neutral-500);
  padding: 4.8rem 10rem;

  p {
    font-size: var(--font-lg);
    font-family: var(--font-title);
    font-weight: var(--title-light);
  }
`
