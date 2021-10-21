import { Wrapper } from '@/components/shared/Wrapper'
import { media } from '@/utils'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  position: relative;
  min-height: 80rem;

  ${media.lessThan('medium')`
    padding-block: 4.8rem;
  `}
`

export const Content = styled(Wrapper)`
  display: flex;
  align-items: center;
  gap: 3.2rem;

  ${media.lessThan('medium')`
    flex-direction: column;
  `}
`

export const BooksImage = styled.div`
  position: relative;
  flex-shrink: 0;

  ${media.greaterThan('medium')`
    position: absolute;
    right: 50%;
  `}
`

export const Text = styled.div`
  margin-left: auto;
  color: var(--color-primary-700);

  h1 {
    line-height: 1.2;
    font-size: var(--font-4xl);
    font-family: var(--font-title);
    margin-bottom: 1rem;

    span {
      color: var(--color-tertiary-500);
    }
  }

  p {
    line-height: 1.8;
    font-size: var(--font-md);
    margin-bottom: 2rem;
  }

  ${media.greaterThan('medium')`
    padding: 4.8rem;
    max-width: 67.3rem;
  `}
`
