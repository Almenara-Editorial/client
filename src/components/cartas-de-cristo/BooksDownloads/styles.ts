import { Wrapper } from '@/components/shared'
import { media } from '@/utils'
import styled from 'styled-components'

export const Container = styled(Wrapper).attrs({ as: 'section' })`
  display: flex;
  align-items: center;
  gap: 3.2rem;
  padding-block: 8rem;

  ${media.lessThan('medium')`
    flex-direction: column-reverse;
    padding-block: 4.8rem;
  `}
`

export const DownloadIcon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  align-items: center;
  justify-content: center;
  max-width: 59.2rem;
  padding: 8rem 4.8rem;

  button {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    align-items: center;
    padding: 2.4rem;
    justify-content: center;
    width: 18rem;
    height: 18rem;
    background-color: var(--color-tertiary-500);
    color: white;
    border-radius: 100%;
    border: 0;
    cursor: pointer;
    font-weight: var(--body-bold);
    font-size: var(--font-sm);
    transition: all 0.2s;

    &:hover {
      opacity: 0.9;
    }

    &:active {
      opacity: 1;
    }
  }

  i {
    font-size: 7rem;
    line-height: 0;
  }

  ${media.greaterThan('medium')`
    flex: 1 0 59.2rem;
  `}

  ${media.lessThan('medium')`
    padding: 4.8rem;
  `}
`
