import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1.2rem;
  padding: 3.2rem;
  border-bottom: 1px solid var(--color-neutral-100);
`

export const Info = styled.div`
  display: flex;
  flex: 1 0 34rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.4rem;
`

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.4rem;
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
