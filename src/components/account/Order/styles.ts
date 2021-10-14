import { media } from '@/utils'
import styled from 'styled-components'

export const Container = styled.div`
  padding-bottom: 1.2rem;
  border: 1px solid var(--color-neutral-100);
  border-radius: var(--radius-sm);

  & + & {
    margin-top: 2.4rem;
  }
`

export const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding-inline: 2.4rem;

  &:last-child {
    justify-content: flex-end;
  }
`

export const OrderId = styled.h3`
  font-size: var(--font-md);
  font-weight: var(--body-bold);
`

export const Header = styled.header`
  display: flex;
  gap: 2.4rem;
  text-transform: uppercase;
  font-size: var(--font-xs);
  color: var(--color-neutral-500);
  background-color: var(--color-neutral-50);
  padding: 1.2rem 2.4rem;

  font-weight: var(--body-bold);

  ${media.greaterThan('medium')`
    > div:last-child {
      margin-left: auto;
    }
  `}

  ${media.lessThan('medium')`
    flex-wrap: wrap;

    > div {
      flex:1 0 100%;
    }
  `}
`
