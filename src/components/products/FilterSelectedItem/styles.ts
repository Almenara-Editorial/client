import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;

  color: var(--color-neutral-500);
  background-color: var(--color-neutral-100);
  padding: 0.8rem 1.2rem;
  width: fit-content;
  font-size: 1.2rem;
  font-weight: var(--body-bold);
`

export const RemoveButton = styled.button`
  background: none;
  width: 1.2rem;
  height: 1.2rem;
  font-size: 1.2rem;
  border: 0;
  color: inherit;
  cursor: pointer;
`
