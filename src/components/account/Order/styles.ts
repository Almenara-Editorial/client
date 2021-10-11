import { media } from '@/utils'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  text-align: center;
  font-size: var(--font-sm);
  padding: 1.8rem;
  border-bottom: 2px solid var(--color-neutral-50);

  > div {
    flex: 1;
  }

  &[data-is-title='true'] {
    font-weight: var(--body-bold);
  }

  .title {
    text-transform: uppercase;
    font-size: var(--font-xs);
    color: var(--color-neutral-500);
  }

  ${media.lessThan('medium')`
    flex-direction: column;
    align-items:flex-start;
    gap: 2.4rem;
    padding: 1.8rem 0;

  `}
`

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.8rem;
`

export const Column = styled.div`
  flex: 1;
  display: flex;
  gap: 3.2rem;
  align-items: flex-start;
  flex-wrap: wrap;

  &:last-child {
    justify-content: flex-end;
  }
`

export const OrderId = styled.h3`
  font-size: var(--font-md);
  font-weight: var(--body-bold);
`
