import styled from 'styled-components'
import { Wrapper as DefaultWrapper } from '@/components/shared/Wrapper'
import { media } from '@/utils'

export const Container = styled.section`
  background: linear-gradient(
    85.46deg,
    rgba(255, 236, 248, 0.4) -2.09%,
    rgba(166, 218, 255, 0) 115.97%
  );
`

export const Wrapper = styled(DefaultWrapper)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: 8rem;

  h2 {
    font-family: var(--font-title);
    font-size: var(--font-xl);
    line-height: 1.4;
    margin-bottom: 1.8rem;
  }

  p {
    font-size: var(--font-sm);
    line-height: 1.8;
    color: var(--color-neutral-500);
    margin-bottom: 2.1rem;
  }

  ${media.lessThan('medium')`
    flex-direction: column;
    padding-block: 4.8rem;
  `}
`

export const Description = styled.div`
  ${media.greaterThan('medium')`
    flex: 1 0 49rem;
    max-width: 49rem;
  `}

  ${media.lessThan('medium')`
    padding-bottom: 4.8rem;
  `}
`

export const Books = styled.div`
  flex: 1 0 59.2rem;
  max-width: 59.2rem;
  display: flex;
  align-items: flex-start;
  gap: 3.2rem;

  ${media.lessThan('medium')`
    flex-direction: column;
  `}
`
