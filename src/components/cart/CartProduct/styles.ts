import { media } from '@/utils'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1.2rem;
  padding: 3.2rem 0;
  border-bottom: 1px solid var(--color-neutral-100);

  ${media.greaterThan('medium')`
    padding: 3.2rem;

    .text {
      display: flex;
    }
  `}
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  ${media.lessThan('medium')`
    align-itens: flex-start;
    gap: 1.2rem;
    padding-bottom: 1.2rem;
  `}

  ${media.greaterThan('medium')`
    align-items: flex-start;
    flex: 1 0 34rem;
  `}
`

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.4rem;

  ${media.lessThan('medium')`
    flex-direction: row;
    align-items:flex-end;
  `}
`

export const RemoveButton = styled.button`
  background: none;
  text-decoration: underline;
  font-size: var(--font-sm);
  font-weight: var(--body-bold);
  border: 0;
  color: var(--color-neutral-500);
  cursor: pointer;

  &:hover {
    color: var(--color-neutral-400);
  }

  &:focus {
    color: var(--color-neutral-700);
  }

  &:active {
    color: var(--color-neutral-800);
  }
`
