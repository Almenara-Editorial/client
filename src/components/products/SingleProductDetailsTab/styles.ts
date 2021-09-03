import styled from 'styled-components'

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3.8rem;
  width: 100%;
  max-width: 26.8rem;
  border: 1px solid var(--color-neutral-50);
  color: var(--color-neutral-500);

  background-color: transparent;

  font-weight: var(--body-bold);
  font-size: var(--font-sm);
  text-align: center;

  cursor: pointer;
  transition: all 0.2s;

  &[data-active='true'] {
    background-color: var(--color-neutral-50);
    color: 1px solid var(--color-text);
  }

  &:focus {
    outline: none;
    border-color: var(--color-neutral-300);
  }
`
